"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["explore"],{

/***/ "./public/app/core/components/Animations/FadeIn.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FadeIn": () => (/* binding */ FadeIn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-transition-group-virtual-8df824fae8/0/cache/react-transition-group-npm-4.4.2-5052c30656-b67bf5b3e8.zip/node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const FadeIn = props => {
  const defaultStyle = {
    transition: `opacity ${props.duration}ms linear`,
    opacity: 0
  };
  const transitionStyles = {
    exited: {
      opacity: 0,
      display: 'none'
    },
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1
    },
    exiting: {
      opacity: 0
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_2__["default"], {
    in: props.in,
    timeout: props.duration,
    unmountOnExit: props.unmountOnExit || false,
    onExited: props.onExited,
    children: state => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: Object.assign({}, defaultStyle, transitionStyles[state]),
      children: props.children
    })
  });
};

/***/ }),

/***/ "./public/app/core/utils/tracing.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNonOverlappingDuration": () => (/* binding */ getNonOverlappingDuration),
/* harmony export */   "getStats": () => (/* binding */ getStats),
/* harmony export */   "makeFrames": () => (/* binding */ makeFrames),
/* harmony export */   "makeSpanMap": () => (/* binding */ makeSpanMap)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/**
 * Get non overlapping duration of the ranges as they can overlap or have gaps.
 */

function getNonOverlappingDuration(ranges) {
  ranges.sort((a, b) => a[0] - b[0]);
  const mergedRanges = ranges.reduce((acc, range) => {
    if (!acc.length) {
      return [range];
    }

    const tail = acc.slice(-1)[0];
    const [prevStart, prevEnd] = tail;
    const [start, end] = range;

    if (end < prevEnd) {
      // In this case the range is completely inside the prev range so we can just ignore it.
      return acc;
    }

    if (start > prevEnd) {
      // There is no overlap so we can just add it to stack
      return [...acc, range];
    } // We know there is overlap and current range ends later than previous so we can just extend the range


    return [...acc.slice(0, -1), [prevStart, end]];
  }, []);
  return mergedRanges.reduce((acc, range) => {
    return acc + (range[1] - range[0]);
  }, 0);
}
/**
 * Returns a map of the spans with children array for easier processing. It will also contain empty spans in case
 * span is missing but other spans are it's children. This is more generic because it needs to allow iterating over
 * both arrays and dataframe views.
 */

function makeSpanMap(getSpan) {
  const spanMap = {};
  let span;

  for (let index = 0; span = getSpan(index), !!span; index++) {
    if (!spanMap[span.id]) {
      spanMap[span.id] = {
        span: span.span,
        children: []
      };
    } else {
      spanMap[span.id].span = span.span;
    }

    for (const parentId of span.parentIds) {
      if (parentId) {
        if (!spanMap[parentId]) {
          spanMap[parentId] = {
            span: undefined,
            children: [span.id]
          };
        } else {
          spanMap[parentId].children.push(span.id);
        }
      }
    }
  }

  return spanMap;
}
function getStats(duration, traceDuration, selfDuration) {
  return {
    main: `${toFixedNoTrailingZeros(duration)}ms (${toFixedNoTrailingZeros(duration / traceDuration * 100)}%)`,
    secondary: `${toFixedNoTrailingZeros(selfDuration)}ms (${toFixedNoTrailingZeros(selfDuration / duration * 100)}%)`
  };
}

function toFixedNoTrailingZeros(n) {
  return parseFloat(n.toFixed(2));
}
/**
 * Create default frames used when returning data for node graph.
 */


function makeFrames() {
  const nodesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayName: 'Total time (% of trace)'
      }
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayName: 'Self time (% of total)'
      }
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        color: {
          mode: 'continuous-GrYlRd'
        },
        displayName: 'Self time / Trace duration'
      }
    }],
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  const edgesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }],
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  return [nodesFrame, edgesFrame];
}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "seriesVisibilityConfigFactory": () => (/* binding */ seriesVisibilityConfigFactory)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");


const displayOverrideRef = 'hideSeriesFrom';
const isHideSeriesOverride = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.isSystemOverrideWithRef)(displayOverrideRef);
function seriesVisibilityConfigFactory(label, mode, fieldConfig, data) {
  const {
    overrides
  } = fieldConfig;
  const displayName = label;
  const currentIndex = overrides.findIndex(isHideSeriesOverride);

  if (currentIndex < 0) {
    if (mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SeriesVisibilityChangeMode.ToggleSelection) {
      const override = createOverride([displayName]);
      return Object.assign({}, fieldConfig, {
        overrides: [...fieldConfig.overrides, override]
      });
    }

    const displayNames = getDisplayNames(data, displayName);
    const override = createOverride(displayNames);
    return Object.assign({}, fieldConfig, {
      overrides: [...fieldConfig.overrides, override]
    });
  }

  const overridesCopy = Array.from(overrides);
  const [current] = overridesCopy.splice(currentIndex, 1);

  if (mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SeriesVisibilityChangeMode.ToggleSelection) {
    const existing = getExistingDisplayNames(current);

    if (existing[0] === displayName && existing.length === 1) {
      return Object.assign({}, fieldConfig, {
        overrides: overridesCopy
      });
    }

    const override = createOverride([displayName]);
    return Object.assign({}, fieldConfig, {
      overrides: [...overridesCopy, override]
    });
  }

  const override = createExtendedOverride(current, displayName);

  if (allFieldsAreExcluded(override, data)) {
    return Object.assign({}, fieldConfig, {
      overrides: overridesCopy
    });
  }

  return Object.assign({}, fieldConfig, {
    overrides: [...overridesCopy, override]
  });
}

function createOverride(names, mode = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude, property) {
  var _property;

  property = (_property = property) !== null && _property !== void 0 ? _property : {
    id: 'custom.hideFrom',
    value: {
      viz: true,
      legend: false,
      tooltip: false
    }
  };
  return {
    __systemRef: displayOverrideRef,
    matcher: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byNames,
      options: {
        mode: mode,
        names: names,
        prefix: mode === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude ? 'All except:' : undefined,
        readOnly: true
      }
    },
    properties: [Object.assign({}, property, {
      value: {
        viz: true,
        legend: false,
        tooltip: false
      }
    })]
  };
}

const createExtendedOverride = (current, displayName, mode = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude) => {
  const property = current.properties.find(p => p.id === 'custom.hideFrom');
  const existing = getExistingDisplayNames(current);
  const index = existing.findIndex(name => name === displayName);

  if (index < 0) {
    existing.push(displayName);
  } else {
    existing.splice(index, 1);
  }

  return createOverride(existing, mode, property);
};

const getExistingDisplayNames = rule => {
  var _rule$matcher$options;

  const names = (_rule$matcher$options = rule.matcher.options) === null || _rule$matcher$options === void 0 ? void 0 : _rule$matcher$options.names;

  if (!Array.isArray(names)) {
    return [];
  }

  return [...names];
};

const allFieldsAreExcluded = (override, data) => {
  return getExistingDisplayNames(override).length === getDisplayNames(data).length;
};

const getDisplayNames = (data, excludeName) => {
  const unique = new Set();

  for (const frame of data) {
    for (const field of frame.fields) {
      if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number) {
        continue;
      }

      const name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayName)(field, frame, data);

      if (name === excludeName) {
        continue;
      }

      unique.add(name);
    }
  }

  return Array.from(unique);
};

/***/ }),

/***/ "./public/app/features/explore/ElapsedTime.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElapsedTime": () => (/* binding */ ElapsedTime)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useInterval.js");
/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/explore/Time.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const INTERVAL = 150;
const ElapsedTime = ({
  resetKey,
  humanize,
  className
}) => {
  const [elapsed, setElapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // the current value of elapsed
  // hook that will schedule a interval and then update the elapsed value on every tick.

  (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(() => setElapsed(elapsed + INTERVAL), INTERVAL); // this effect will only be run when resetKey changes. This will reset the elapsed to 0.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => setElapsed(0), [resetKey]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Time__WEBPACK_IMPORTED_MODULE_1__.Time, {
    timeInMs: elapsed,
    className: className,
    humanize: humanize
  });
};

/***/ }),

/***/ "./public/app/features/explore/ErrorContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorContainer": () => (/* binding */ ErrorContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Animations_FadeIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Animations/FadeIn.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const ErrorContainer = props => {
  var _queryError$data;

  const {
    queryError
  } = props;
  const showError = queryError ? true : false;
  const duration = showError ? 100 : 10;
  const title = queryError ? 'Query error' : 'Unknown error';
  const message = (queryError === null || queryError === void 0 ? void 0 : queryError.message) || (queryError === null || queryError === void 0 ? void 0 : (_queryError$data = queryError.data) === null || _queryError$data === void 0 ? void 0 : _queryError$data.message) || null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Animations_FadeIn__WEBPACK_IMPORTED_MODULE_2__.FadeIn, {
    in: showError,
    duration: duration,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      severity: "error",
      title: title,
      topSpacing: 2,
      children: message
    })
  });
};

/***/ }),

/***/ "./public/app/features/explore/Explore.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Explore": () => (/* binding */ Explore),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./.yarn/cache/redux-npm-4.2.0-4688cc8d65-75f3955c89.zip/node_modules/redux/es/redux.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_ui_src_components_Table_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Table/types.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_history_richHistoryStorageProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/history/richHistoryStorageProvider.ts");
/* harmony import */ var app_plugins_panel_nodeGraph_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _profile_state_selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/profile/state/selectors.ts");
/* harmony import */ var _ExploreGraph__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/explore/ExploreGraph.tsx");
/* harmony import */ var _ExploreGraphLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/explore/ExploreGraphLabel.tsx");
/* harmony import */ var _ExploreQueryInspector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/explore/ExploreQueryInspector.tsx");
/* harmony import */ var _ExploreToolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/explore/ExploreToolbar.tsx");
/* harmony import */ var _LogsContainer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/explore/LogsContainer.tsx");
/* harmony import */ var _NoData__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/explore/NoData.tsx");
/* harmony import */ var _NoDataSourceCallToAction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/explore/NoDataSourceCallToAction.tsx");
/* harmony import */ var _NodeGraphContainer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/explore/NodeGraphContainer.tsx");
/* harmony import */ var _QueryRows__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/explore/QueryRows.tsx");
/* harmony import */ var _ResponseErrorContainer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/explore/ResponseErrorContainer.tsx");
/* harmony import */ var _RichHistory_RichHistoryContainer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/explore/RichHistory/RichHistoryContainer.tsx");
/* harmony import */ var _SecondaryActions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/explore/SecondaryActions.tsx");
/* harmony import */ var _TableContainer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/explore/TableContainer.tsx");
/* harmony import */ var _TraceView_TraceViewContainer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/explore/TraceView/TraceViewContainer.tsx");
/* harmony import */ var _state_explorePane__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/explore/state/explorePane.ts");
/* harmony import */ var _state_main__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var _state_query__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/explore/state/query.ts");
/* harmony import */ var _state_time__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/explore/state/time.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _NoDataSourceCallToAc, _NoData;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






































const getStyles = theme => {
  return {
    exploreMain: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: exploreMain;
      // Is needed for some transition animations to work.
      position: relative;
      margin-top: 21px;
    `,
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: button;
      margin: 1em 4px 0 0;
    `,
    queryContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: queryContainer;
      // Need to override normal css class and don't want to count on ordering of the classes in html.
      height: auto !important;
      flex: unset !important;
      display: unset !important;
      padding: ${theme.spacing(1)};
    `,
    exploreContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      padding: ${theme.spacing(2)};
      padding-top: 0;
    `
  };
};

var ExploreDrawer;

(function (ExploreDrawer) {
  ExploreDrawer[ExploreDrawer["RichHistory"] = 0] = "RichHistory";
  ExploreDrawer[ExploreDrawer["QueryInspector"] = 1] = "QueryInspector";
})(ExploreDrawer || (ExploreDrawer = {}));

/**
 * Explore provides an area for quick query iteration for a given datasource.
 * Once a datasource is selected it populates the query section at the top.
 * When queries are run, their results are being displayed in the main section.
 * The datasource determines what kind of query editor it brings, and what kind
 * of results viewers it supports. The state is managed entirely in Redux.
 *
 * SPLIT VIEW
 *
 * Explore can have two Explore areas side-by-side. This is handled in `Wrapper.tsx`.
 * Since there can be multiple Explores (e.g., left and right) each action needs
 * the `exploreId` as first parameter so that the reducer knows which Explore state
 * is affected.
 *
 * DATASOURCE REQUESTS
 *
 * A click on Run Query creates transactions for all DataQueries for all expanded
 * result viewers. New runs are discarding previous runs. Upon completion a transaction
 * saves the result. The result viewers construct their data from the currently existing
 * transactions.
 *
 * The result viewers determine some of the query options sent to the datasource, e.g.,
 * `format`, to indicate eventual transformations by the datasources' result transformers.
 */
class Explore extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "scrollElement", void 0);

    _defineProperty(this, "absoluteTimeUnsubsciber", void 0);

    _defineProperty(this, "topOfViewRef", /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)());

    _defineProperty(this, "onChangeTime", rawRange => {
      const {
        updateTimeRange,
        exploreId
      } = this.props;
      updateTimeRange({
        exploreId,
        rawRange
      });
    });

    _defineProperty(this, "onClickExample", query => {
      this.props.setQueries(this.props.exploreId, [query]);
    });

    _defineProperty(this, "onCellFilterAdded", filter => {
      const {
        value,
        key,
        operator
      } = filter;

      if (operator === _grafana_ui_src_components_Table_types__WEBPACK_IMPORTED_MODULE_7__.FILTER_FOR_OPERATOR) {
        this.onClickFilterLabel(key, value);
      }

      if (operator === _grafana_ui_src_components_Table_types__WEBPACK_IMPORTED_MODULE_7__.FILTER_OUT_OPERATOR) {
        this.onClickFilterOutLabel(key, value);
      }
    });

    _defineProperty(this, "onClickFilterLabel", (key, value) => {
      this.onModifyQueries({
        type: 'ADD_FILTER',
        key,
        value
      });
    });

    _defineProperty(this, "onClickFilterOutLabel", (key, value) => {
      this.onModifyQueries({
        type: 'ADD_FILTER_OUT',
        key,
        value
      });
    });

    _defineProperty(this, "onClickAddQueryRowButton", () => {
      const {
        exploreId,
        queryKeys,
        datasourceInstance
      } = this.props;
      this.props.addQueryRow(exploreId, queryKeys.length, datasourceInstance);
    });

    _defineProperty(this, "onMakeAbsoluteTime", () => {
      const {
        makeAbsoluteTime
      } = this.props;
      makeAbsoluteTime();
    });

    _defineProperty(this, "onModifyQueries", (action, index) => {
      const {
        datasourceInstance
      } = this.props;

      if (datasourceInstance !== null && datasourceInstance !== void 0 && datasourceInstance.modifyQuery) {
        const modifier = (queries, modification) => datasourceInstance.modifyQuery(queries, modification);

        this.props.modifyQueries(this.props.exploreId, action, modifier, index);
      }
    });

    _defineProperty(this, "onResize", size => {
      this.props.changeSize(this.props.exploreId, size);
    });

    _defineProperty(this, "onStartScanning", () => {
      // Scanner will trigger a query
      this.props.scanStart(this.props.exploreId);
    });

    _defineProperty(this, "onStopScanning", () => {
      this.props.scanStopAction({
        exploreId: this.props.exploreId
      });
    });

    _defineProperty(this, "onUpdateTimeRange", absoluteRange => {
      const {
        exploreId,
        updateTimeRange
      } = this.props;
      updateTimeRange({
        exploreId,
        absoluteRange
      });
    });

    _defineProperty(this, "onChangeGraphStyle", graphStyle => {
      const {
        exploreId,
        changeGraphStyle
      } = this.props;
      changeGraphStyle(exploreId, graphStyle);
    });

    _defineProperty(this, "toggleShowRichHistory", () => {
      this.setState(state => {
        return {
          openDrawer: state.openDrawer === ExploreDrawer.RichHistory ? undefined : ExploreDrawer.RichHistory
        };
      });
    });

    _defineProperty(this, "toggleShowQueryInspector", () => {
      this.setState(state => {
        return {
          openDrawer: state.openDrawer === ExploreDrawer.QueryInspector ? undefined : ExploreDrawer.QueryInspector
        };
      });
    });

    _defineProperty(this, "memoizedGetNodeGraphDataFrames", (0,memoize_one__WEBPACK_IMPORTED_MODULE_32__["default"])(app_plugins_panel_nodeGraph_utils__WEBPACK_IMPORTED_MODULE_10__.getNodeGraphDataFrames));

    this.state = {
      openDrawer: undefined
    };
  }

  componentDidMount() {
    this.absoluteTimeUnsubsciber = app_core_app_events__WEBPACK_IMPORTED_MODULE_8__["default"].subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_11__.AbsoluteTimeEvent, this.onMakeAbsoluteTime);
  }

  componentWillUnmount() {
    var _this$absoluteTimeUns;

    (_this$absoluteTimeUns = this.absoluteTimeUnsubsciber) === null || _this$absoluteTimeUns === void 0 ? void 0 : _this$absoluteTimeUns.unsubscribe();
  }

  renderEmptyState(exploreContainerStyles) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(exploreContainerStyles),
      children: _NoDataSourceCallToAc || (_NoDataSourceCallToAc = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_NoDataSourceCallToAction__WEBPACK_IMPORTED_MODULE_19__.NoDataSourceCallToAction, {}))
    });
  }

  renderNoData() {
    return _NoData || (_NoData = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_NoData__WEBPACK_IMPORTED_MODULE_18__.NoData, {}));
  }

  renderGraphPanel(width) {
    const {
      graphResult,
      absoluteRange,
      timeZone,
      splitOpen,
      queryResponse,
      loading,
      theme,
      graphStyle
    } = this.props;
    const spacing = parseInt(theme.spacing(2).slice(0, -2), 10);

    const label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ExploreGraphLabel__WEBPACK_IMPORTED_MODULE_14__.ExploreGraphLabel, {
      graphStyle: graphStyle,
      onChangeGraphStyle: this.onChangeGraphStyle
    });

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Collapse, {
      label: label,
      loading: loading,
      isOpen: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ExploreGraph__WEBPACK_IMPORTED_MODULE_13__.ExploreGraph, {
        graphStyle: graphStyle,
        data: graphResult,
        height: 400,
        width: width - spacing,
        absoluteRange: absoluteRange,
        onChangeTime: this.onUpdateTimeRange,
        timeZone: timeZone,
        annotations: queryResponse.annotations,
        splitOpenFn: splitOpen,
        loadingState: queryResponse.state
      })
    });
  }

  renderTablePanel(width) {
    const {
      exploreId,
      datasourceInstance,
      timeZone
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_TableContainer__WEBPACK_IMPORTED_MODULE_25__["default"], {
      ariaLabel: _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.pages.Explore.General.table,
      width: width,
      exploreId: exploreId,
      onCellFilterAdded: datasourceInstance !== null && datasourceInstance !== void 0 && datasourceInstance.modifyQuery ? this.onCellFilterAdded : undefined,
      timeZone: timeZone
    });
  }

  renderLogsPanel(width) {
    const {
      exploreId,
      syncedTimes,
      theme,
      queryResponse
    } = this.props;
    const spacing = parseInt(theme.spacing(2).slice(0, -2), 10);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_LogsContainer__WEBPACK_IMPORTED_MODULE_17__["default"], {
      exploreId: exploreId,
      loadingState: queryResponse.state,
      syncedTimes: syncedTimes,
      width: width - spacing,
      onClickFilterLabel: this.onClickFilterLabel,
      onClickFilterOutLabel: this.onClickFilterOutLabel,
      onStartScanning: this.onStartScanning,
      onStopScanning: this.onStopScanning
    });
  }

  renderNodeGraphPanel() {
    const {
      exploreId,
      showTrace,
      queryResponse
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_NodeGraphContainer__WEBPACK_IMPORTED_MODULE_20__.NodeGraphContainer, {
      dataFrames: this.memoizedGetNodeGraphDataFrames(queryResponse.series),
      exploreId: exploreId,
      withTraceView: showTrace
    });
  }

  renderTraceViewPanel() {
    const {
      queryResponse,
      splitOpen,
      exploreId
    } = this.props;
    const dataFrames = queryResponse.series.filter(series => {
      var _series$meta;

      return ((_series$meta = series.meta) === null || _series$meta === void 0 ? void 0 : _series$meta.preferredVisualisationType) === 'trace';
    });
    return (// If there is no data (like 404) we show a separate error so no need to show anything here
      dataFrames.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_TraceView_TraceViewContainer__WEBPACK_IMPORTED_MODULE_26__.TraceViewContainer, {
        exploreId: exploreId,
        dataFrames: dataFrames,
        splitOpenFn: splitOpen,
        scrollElement: this.scrollElement,
        queryResponse: queryResponse,
        topOfViewRef: this.topOfViewRef
      })
    );
  }

  render() {
    const {
      datasourceInstance,
      datasourceMissing,
      exploreId,
      graphResult,
      queryResponse,
      isLive,
      theme,
      showMetrics,
      showTable,
      showLogs,
      showTrace,
      showNodeGraph,
      timeZone
    } = this.props;
    const {
      openDrawer
    } = this.state;
    const styles = getStyles(theme);
    const showPanels = queryResponse && queryResponse.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_4__.LoadingState.NotStarted;
    const showRichHistory = openDrawer === ExploreDrawer.RichHistory;
    const richHistoryRowButtonHidden = !(0,app_core_history_richHistoryStorageProvider__WEBPACK_IMPORTED_MODULE_9__.supportedFeatures)().queryHistoryAvailable;
    const showQueryInspector = openDrawer === ExploreDrawer.QueryInspector;
    const showNoData = queryResponse.state === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.LoadingState.Done && [queryResponse.logsFrames, queryResponse.graphFrames, queryResponse.nodeGraphFrames, queryResponse.tableFrames, queryResponse.traceFrames].every(e => e.length === 0);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.CustomScrollbar, {
      testId: _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.pages.Explore.General.scrollView,
      autoHeightMin: '100%',
      scrollRefCallback: scrollElement => this.scrollElement = scrollElement || undefined,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ExploreToolbar__WEBPACK_IMPORTED_MODULE_16__.ExploreToolbar, {
        exploreId: exploreId,
        onChangeTime: this.onChangeTime,
        topOfViewRef: this.topOfViewRef
      }), datasourceMissing ? this.renderEmptyState(styles.exploreContainer) : null, datasourceInstance && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.exploreContainer),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.PanelContainer, {
          className: styles.queryContainer,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_QueryRows__WEBPACK_IMPORTED_MODULE_21__.QueryRows, {
            exploreId: exploreId
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_SecondaryActions__WEBPACK_IMPORTED_MODULE_24__.SecondaryActions, {
            addQueryRowButtonDisabled: isLive // We cannot show multiple traces at the same time right now so we do not show add query button.
            //TODO:unification
            ,
            addQueryRowButtonHidden: false,
            richHistoryRowButtonHidden: richHistoryRowButtonHidden,
            richHistoryButtonActive: showRichHistory,
            queryInspectorButtonActive: showQueryInspector,
            onClickAddQueryRowButton: this.onClickAddQueryRowButton,
            onClickRichHistoryButton: this.toggleShowRichHistory,
            onClickQueryInspectorButton: this.toggleShowQueryInspector
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ResponseErrorContainer__WEBPACK_IMPORTED_MODULE_22__.ResponseErrorContainer, {
            exploreId: exploreId
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onResize: this.onResize,
          disableHeight: true,
          children: ({
            width
          }) => {
            if (width === 0) {
              return null;
            }

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("main", {
              className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.exploreMain),
              style: {
                width
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ErrorBoundaryAlert, {
                children: [showPanels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.Fragment, {
                  children: [showMetrics && graphResult && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ErrorBoundaryAlert, {
                    children: this.renderGraphPanel(width)
                  }), showTable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ErrorBoundaryAlert, {
                    children: this.renderTablePanel(width)
                  }), showLogs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ErrorBoundaryAlert, {
                    children: this.renderLogsPanel(width)
                  }), showNodeGraph && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ErrorBoundaryAlert, {
                    children: this.renderNodeGraphPanel()
                  }), showTrace && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ErrorBoundaryAlert, {
                    children: this.renderTraceViewPanel()
                  }), showNoData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ErrorBoundaryAlert, {
                    children: this.renderNoData()
                  })]
                }), showRichHistory && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_RichHistory_RichHistoryContainer__WEBPACK_IMPORTED_MODULE_23__["default"], {
                  width: width,
                  exploreId: exploreId,
                  onClose: this.toggleShowRichHistory
                }), showQueryInspector && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ExploreQueryInspector__WEBPACK_IMPORTED_MODULE_15__["default"], {
                  exploreId: exploreId,
                  width: width,
                  onClose: this.toggleShowQueryInspector,
                  timeZone: timeZone
                })]
              })
            });
          }
        })]
      })]
    });
  }

}

function mapStateToProps(state, {
  exploreId
}) {
  const explore = state.explore;
  const {
    syncedTimes
  } = explore;
  const item = explore[exploreId];
  const timeZone = (0,_profile_state_selectors__WEBPACK_IMPORTED_MODULE_12__.getTimeZone)(state.user);
  const {
    datasourceInstance,
    datasourceMissing,
    queryKeys,
    isLive,
    graphResult,
    logsResult,
    showLogs,
    showMetrics,
    showTable,
    showTrace,
    absoluteRange,
    queryResponse,
    showNodeGraph,
    loading,
    graphStyle
  } = item;
  return {
    datasourceInstance,
    datasourceMissing,
    queryKeys,
    isLive,
    graphResult,
    logsResult: logsResult !== null && logsResult !== void 0 ? logsResult : undefined,
    absoluteRange,
    queryResponse,
    syncedTimes,
    timeZone,
    showLogs,
    showMetrics,
    showTable,
    showTrace,
    showNodeGraph,
    loading,
    graphStyle
  };
}

const mapDispatchToProps = {
  changeSize: _state_explorePane__WEBPACK_IMPORTED_MODULE_27__.changeSize,
  changeGraphStyle: _state_explorePane__WEBPACK_IMPORTED_MODULE_27__.changeGraphStyle,
  modifyQueries: _state_query__WEBPACK_IMPORTED_MODULE_29__.modifyQueries,
  scanStart: _state_query__WEBPACK_IMPORTED_MODULE_29__.scanStart,
  scanStopAction: _state_query__WEBPACK_IMPORTED_MODULE_29__.scanStopAction,
  setQueries: _state_query__WEBPACK_IMPORTED_MODULE_29__.setQueries,
  updateTimeRange: _state_time__WEBPACK_IMPORTED_MODULE_30__.updateTimeRange,
  makeAbsoluteTime: _state_time__WEBPACK_IMPORTED_MODULE_30__.makeAbsoluteTime,
  addQueryRow: _state_query__WEBPACK_IMPORTED_MODULE_29__.addQueryRow,
  splitOpen: _state_main__WEBPACK_IMPORTED_MODULE_28__.splitOpen
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_33__.compose)(connector, _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.withTheme2)(Explore));

/***/ }),

/***/ "./public/app/features/explore/ExploreActions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreActions": () => (/* binding */ ExploreActions)
/* harmony export */ });
/* harmony import */ var kbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/kbar-virtual-c6b8b64f94/0/cache/kbar-npm-0.1.0-beta.34-e47ffe1454-1ca4d8fed7.zip/node_modules/kbar/lib/index.js");
/* harmony import */ var kbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var _state_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/explore/state/query.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/explore/state/selectors.ts");






const ExploreActions = ({
  exploreIdLeft,
  exploreIdRight
}) => {
  const [actions, setActions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    query
  } = (0,kbar__WEBPACK_IMPORTED_MODULE_0__.useKBar)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const splitted = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_state_selectors__WEBPACK_IMPORTED_MODULE_5__.isSplit);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const exploreSection = {
      name: 'Explore',
      priority: kbar__WEBPACK_IMPORTED_MODULE_0__.Priority.HIGH + 1
    };
    const actionsArr = [];

    if (splitted) {
      actionsArr.push({
        id: 'explore/run-query-left',
        name: 'Run query (left)',
        keywords: 'query left',
        perform: () => {
          dispatch((0,_state_query__WEBPACK_IMPORTED_MODULE_4__.runQueries)(exploreIdLeft));
        },
        section: exploreSection
      });

      if (exploreIdRight) {
        // we should always have the right exploreId if split
        actionsArr.push({
          id: 'explore/run-query-right',
          name: 'Run query (right)',
          keywords: 'query right',
          perform: () => {
            dispatch((0,_state_query__WEBPACK_IMPORTED_MODULE_4__.runQueries)(exploreIdRight));
          },
          section: exploreSection
        });
        actionsArr.push({
          id: 'explore/split-view-close-left',
          name: 'Close split view left',
          keywords: 'split',
          perform: () => {
            dispatch((0,_state_main__WEBPACK_IMPORTED_MODULE_3__.splitClose)(exploreIdLeft));
          },
          section: exploreSection
        });
        actionsArr.push({
          id: 'explore/split-view-close-right',
          name: 'Close split view right',
          keywords: 'split',
          perform: () => {
            dispatch((0,_state_main__WEBPACK_IMPORTED_MODULE_3__.splitClose)(exploreIdRight));
          },
          section: exploreSection
        });
      }
    } else {
      actionsArr.push({
        id: 'explore/run-query',
        name: 'Run query',
        keywords: 'query',
        perform: () => {
          dispatch((0,_state_query__WEBPACK_IMPORTED_MODULE_4__.runQueries)(exploreIdLeft));
        },
        section: exploreSection
      });
      actionsArr.push({
        id: 'explore/split-view-open',
        name: 'Open split view',
        keywords: 'split',
        perform: () => {
          dispatch((0,_state_main__WEBPACK_IMPORTED_MODULE_3__.splitOpen)());
        },
        section: exploreSection
      });
    }

    setActions(actionsArr);
  }, [exploreIdLeft, exploreIdRight, splitted, query, dispatch]);
  (0,kbar__WEBPACK_IMPORTED_MODULE_0__.useRegisterActions)(!query ? [] : actions, [actions, query]);
  return null;
};

/***/ }),

/***/ "./public/app/features/explore/ExploreDrawer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreDrawer": () => (/* binding */ ExploreDrawer)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var re_resizable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/re-resizable-virtual-3cca0dab2b/0/cache/re-resizable-npm-6.9.9-2a772ae568-a2c8bfe866.zip/node_modules/re-resizable/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
// Libraries


 // Services & Utils

 // Types



const drawerSlide = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  0% {
    transform: translateY(${theme.components.horizontalDrawer.defaultHeight}px);
  }

  100% {
    transform: translateY(0px);
  }
`;

const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.stylesFactory)(theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      position: fixed !important;
      bottom: 0;
      background: ${theme.colors.background.primary};
      border-top: 1px solid ${theme.colors.border.weak};
      margin: ${theme.spacing(0, -2, 0, -2)};
      box-shadow: ${theme.shadows.z3};
      z-index: ${theme.zIndex.sidemenu};
    `,
    drawerActive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      opacity: 1;
      animation: 0.5s ease-out ${drawerSlide(theme)};
    `,
    rzHandle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${theme.colors.secondary.main};
      transition: 0.3s background ease-in-out;
      position: relative;
      width: 200px !important;
      height: 7px !important;
      left: calc(50% - 100px) !important;
      top: -4px !important;
      cursor: grab;
      border-radius: 4px;
      &:hover {
        background: ${theme.colors.secondary.shade};
      }
    `
  };
});
function ExploreDrawer(props) {
  const {
    width,
    children,
    onResize
  } = props;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const styles = getStyles(theme);
  const drawerWidth = `${width + 31.5}px`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(re_resizable__WEBPACK_IMPORTED_MODULE_1__.Resizable, {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, styles.drawerActive),
    defaultSize: {
      width: drawerWidth,
      height: `${theme.components.horizontalDrawer.defaultHeight}px`
    },
    handleClasses: {
      top: styles.rzHandle
    },
    enable: {
      top: true,
      right: false,
      bottom: false,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
    },
    maxHeight: "100vh",
    maxWidth: drawerWidth,
    minWidth: drawerWidth,
    onResize: onResize,
    children: children
  });
}

/***/ }),

/***/ "./public/app/features/explore/ExploreGraph.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreGraph": () => (/* binding */ ExploreGraph)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_plugins_panel_timeseries_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/timeseries/config.ts");
/* harmony import */ var _dashboard_dashgrid_SeriesVisibilityConfigFactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts");
/* harmony import */ var _exploreGraphStyleUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/explore/exploreGraphStyleUtils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");














const MAX_NUMBER_OF_TIME_SERIES = 20;
function ExploreGraph({
  data,
  height,
  width,
  timeZone,
  absoluteRange,
  onChangeTime,
  loadingState,
  annotations,
  onHiddenSeriesChanged,
  splitOpenFn,
  graphStyle,
  tooltipDisplayMode = _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.TooltipDisplayMode.Single
}) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useTheme2)();
  const [showAllTimeSeries, setShowAllTimeSeries] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [baseStructureRev, setBaseStructureRev] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const previousData = (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(data);
  const structureChangesRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
  const structureRev = baseStructureRev + structureChangesRef.current;
  const prevStructureRev = (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(structureRev);
  const [fieldConfig, setFieldConfig] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    defaults: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldColorModeId.PaletteClassic
      },
      custom: {
        drawStyle: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.GraphDrawStyle.Line,
        fillOpacity: 0,
        pointSize: 5
      }
    },
    overrides: []
  });

  if (data && previousData && !(0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.compareArrayValues)(previousData, data, _grafana_data__WEBPACK_IMPORTED_MODULE_3__.compareDataFrameStructures)) {
    structureChangesRef.current++;

    if (prevStructureRev === structureRev) {
      setFieldConfig(Object.assign({}, fieldConfig, {
        overrides: []
      }));
    }
  }

  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const timeRange = {
    from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)(absoluteRange.from),
    to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)(absoluteRange.to),
    raw: {
      from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)(absoluteRange.from),
      to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)(absoluteRange.to)
    }
  };
  const dataWithConfig = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const registry = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.createFieldConfigRegistry)((0,app_plugins_panel_timeseries_config__WEBPACK_IMPORTED_MODULE_8__.getGraphFieldConfig)(app_plugins_panel_timeseries_config__WEBPACK_IMPORTED_MODULE_8__.defaultGraphConfig), 'Explore');
    const styledFieldConfig = (0,_exploreGraphStyleUtils__WEBPACK_IMPORTED_MODULE_10__.applyGraphStyle)(fieldConfig, graphStyle);
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.applyFieldOverrides)({
      fieldConfig: styledFieldConfig,
      data,
      timeZone,
      replaceVariables: value => value,
      // We don't need proper replace here as it is only used in getLinks and we use getFieldLinks
      theme,
      fieldConfigRegistry: registry
    });
  }, [fieldConfig, graphStyle, data, timeZone, theme]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (onHiddenSeriesChanged) {
      const hiddenFrames = [];
      dataWithConfig.forEach(frame => {
        const allFieldsHidden = frame.fields.map(field => {
          var _field$config, _field$config$custom, _field$config$custom$;

          return (_field$config = field.config) === null || _field$config === void 0 ? void 0 : (_field$config$custom = _field$config.custom) === null || _field$config$custom === void 0 ? void 0 : (_field$config$custom$ = _field$config$custom.hideFrom) === null || _field$config$custom$ === void 0 ? void 0 : _field$config$custom$.viz;
        }).every(lodash__WEBPACK_IMPORTED_MODULE_1__.identity);

        if (allFieldsHidden) {
          hiddenFrames.push((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFrameDisplayName)(frame));
        }
      });
      onHiddenSeriesChanged(hiddenFrames);
    }
  }, [dataWithConfig, onHiddenSeriesChanged]);
  const seriesToShow = showAllTimeSeries ? dataWithConfig : dataWithConfig.slice(0, MAX_NUMBER_OF_TIME_SERIES);
  const panelContext = {
    eventBus: app_core_app_events__WEBPACK_IMPORTED_MODULE_7__["default"],
    onSplitOpen: splitOpenFn,

    onToggleSeriesVisibility(label, mode) {
      setBaseStructureRev(r => r + 1);
      setFieldConfig((0,_dashboard_dashgrid_SeriesVisibilityConfigFactory__WEBPACK_IMPORTED_MODULE_9__.seriesVisibilityConfigFactory)(label, mode, fieldConfig, data));
    }

  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.PanelContextProvider, {
    value: panelContext,
    children: [dataWithConfig.length > MAX_NUMBER_OF_TIME_SERIES && !showAllTimeSeries && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)([style.timeSeriesDisclaimer]),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        className: style.disclaimerIcon,
        name: "exclamation-triangle"
      }), `Showing only ${MAX_NUMBER_OF_TIME_SERIES} time series. `, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)([style.showAllTimeSeries]),
        onClick: () => {
          structureChangesRef.current++;
          setShowAllTimeSeries(true);
        },
        children: `Show all ${dataWithConfig.length}`
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.PanelRenderer, {
      data: {
        series: seriesToShow,
        timeRange,
        structureRev,
        state: loadingState,
        annotations
      },
      pluginId: "timeseries",
      title: "",
      width: width,
      height: height,
      onChangeTimeRange: onChangeTime,
      timeZone: timeZone,
      options: {
        tooltip: {
          mode: tooltipDisplayMode,
          sort: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.SortOrder.None
        },
        legend: {
          displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.LegendDisplayMode.List,
          placement: 'bottom',
          calcs: []
        }
      }
    })]
  });
}

const getStyles = theme => ({
  timeSeriesDisclaimer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: time-series-disclaimer;
    width: 300px;
    margin: ${theme.spacing(1)} auto;
    padding: 10px 0;
    border-radius: ${theme.spacing(2)};
    text-align: center;
    background-color: ${theme.colors.background.primary};
  `,
  disclaimerIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: disclaimer-icon;
    color: ${theme.colors.warning.main};
    margin-right: ${theme.spacing(0.5)};
  `,
  showAllTimeSeries: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: show-all-time-series;
    cursor: pointer;
    color: ${theme.colors.text.link};
  `
});

/***/ }),

/***/ "./public/app/features/explore/ExploreGraphLabel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreGraphLabel": () => (/* binding */ ExploreGraphLabel)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const ALL_GRAPH_STYLE_OPTIONS = _types__WEBPACK_IMPORTED_MODULE_3__.EXPLORE_GRAPH_STYLES.map(style => ({
  value: style,
  // capital-case it and switch `_` to ` `
  label: style[0].toUpperCase() + style.slice(1).replace(/_/, ' ')
}));
const spacing = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  display: 'flex',
  justifyContent: 'space-between'
});
function ExploreGraphLabel(props) {
  const {
    graphStyle,
    onChangeGraphStyle
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: spacing,
    children: ["Graph", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
      size: "sm",
      options: ALL_GRAPH_STYLE_OPTIONS,
      value: graphStyle,
      onChange: onChangeGraphStyle
    })]
  });
}

/***/ }),

/***/ "./public/app/features/explore/ExplorePaneContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplorePaneContainer": () => (/* binding */ ExplorePaneContainer)
/* harmony export */ });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var app_core_utils_explore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/utils/explore.ts");
/* harmony import */ var _profile_state_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/profile/state/selectors.ts");
/* harmony import */ var _Explore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/explore/Explore.tsx");
/* harmony import */ var _state_explorePane__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/explore/state/explorePane.ts");
/* harmony import */ var _state_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














/**
 * This component is responsible for handling initialization of an Explore pane and triggering synchronization
 * of state based on URL changes and preventing any infinite loops.
 */
class ExplorePaneContainerUnconnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "el", void 0);

    _defineProperty(this, "exploreEvents", void 0);

    _defineProperty(this, "refreshExplore", prevUrlQuery => {
      const {
        exploreId,
        urlQuery
      } = this.props; // Update state from url only if it changed and only if the change wasn't initialised by redux to prevent any loops

      if (urlQuery !== prevUrlQuery && urlQuery !== _state_main__WEBPACK_IMPORTED_MODULE_9__.lastSavedUrl[exploreId]) {
        this.props.refreshExplore(exploreId, urlQuery);
      }
    });

    _defineProperty(this, "getRef", el => {
      this.el = el;
    });

    this.exploreEvents = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.EventBusSrv();
    this.state = {
      openDrawer: undefined
    };
  }

  componentDidMount() {
    var _this$el$offsetWidth, _this$el;

    const {
      initialized,
      exploreId,
      initialDatasource,
      initialQueries,
      initialRange,
      panelsState
    } = this.props;
    const width = (_this$el$offsetWidth = (_this$el = this.el) === null || _this$el === void 0 ? void 0 : _this$el.offsetWidth) !== null && _this$el$offsetWidth !== void 0 ? _this$el$offsetWidth : 0; // initialize the whole explore first time we mount and if browser history contains a change in datasource

    if (!initialized) {
      this.props.initializeExplore(exploreId, initialDatasource, initialQueries, initialRange, width, this.exploreEvents, panelsState);
    }
  }

  componentWillUnmount() {
    this.exploreEvents.removeAllListeners();
    this.props.cleanupPaneAction({
      exploreId: this.props.exploreId
    });
  }

  componentDidUpdate(prevProps) {
    this.refreshExplore(prevProps.urlQuery);
  }

  render() {
    const exploreClass = this.props.split ? 'explore explore-split' : 'explore';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: exploreClass,
      ref: this.getRef,
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.Explore.General.container,
      children: this.props.initialized && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Explore__WEBPACK_IMPORTED_MODULE_7__["default"], {
        exploreId: this.props.exploreId
      })
    });
  }

}

const ensureQueriesMemoized = (0,memoize_one__WEBPACK_IMPORTED_MODULE_11__["default"])(app_core_utils_explore__WEBPACK_IMPORTED_MODULE_5__.ensureQueries);
const getTimeRangeFromUrlMemoized = (0,memoize_one__WEBPACK_IMPORTED_MODULE_11__["default"])(app_core_utils_explore__WEBPACK_IMPORTED_MODULE_5__.getTimeRangeFromUrl);

function mapStateToProps(state, props) {
  var _state$explore$props$;

  const urlState = (0,app_core_utils_explore__WEBPACK_IMPORTED_MODULE_5__.parseUrlState)(props.urlQuery);
  const timeZone = (0,_profile_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getTimeZone)(state.user);
  const fiscalYearStartMonth = (0,_profile_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getFiscalYearStartMonth)(state.user);
  const {
    datasource,
    queries,
    range: urlRange,
    panelsState
  } = urlState || {};
  const initialDatasource = datasource || app_core_store__WEBPACK_IMPORTED_MODULE_4__["default"].get((0,app_core_utils_explore__WEBPACK_IMPORTED_MODULE_5__.lastUsedDatasourceKeyForOrgId)(state.user.orgId));
  const initialQueries = ensureQueriesMemoized(queries);
  const initialRange = urlRange ? getTimeRangeFromUrlMemoized(urlRange, timeZone, fiscalYearStartMonth) : (0,app_core_utils_explore__WEBPACK_IMPORTED_MODULE_5__.getTimeRange)(timeZone, app_core_utils_explore__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_RANGE, fiscalYearStartMonth);
  return {
    initialized: (_state$explore$props$ = state.explore[props.exploreId]) === null || _state$explore$props$ === void 0 ? void 0 : _state$explore$props$.initialized,
    initialDatasource,
    initialQueries,
    initialRange,
    panelsState
  };
}

const mapDispatchToProps = {
  initializeExplore: _state_explorePane__WEBPACK_IMPORTED_MODULE_8__.initializeExplore,
  refreshExplore: _state_explorePane__WEBPACK_IMPORTED_MODULE_8__.refreshExplore,
  cleanupPaneAction: _state_main__WEBPACK_IMPORTED_MODULE_9__.cleanupPaneAction
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const ExplorePaneContainer = connector(ExplorePaneContainerUnconnected);

/***/ }),

/***/ "./public/app/features/explore/ExploreQueryInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreQueryInspector": () => (/* binding */ ExploreQueryInspector),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_explore_ExploreDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/explore/ExploreDrawer.tsx");
/* harmony import */ var app_features_inspector_InspectDataTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/inspector/InspectDataTab.tsx");
/* harmony import */ var app_features_inspector_InspectErrorTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/inspector/InspectErrorTab.tsx");
/* harmony import */ var app_features_inspector_InspectJSONTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/inspector/InspectJSONTab.tsx");
/* harmony import */ var app_features_inspector_InspectStatsTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/inspector/InspectStatsTab.tsx");
/* harmony import */ var app_features_inspector_QueryInspector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/inspector/QueryInspector.tsx");
/* harmony import */ var _state_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/explore/state/query.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












function ExploreQueryInspector(props) {
  var _queryResponse$reques;

  const {
    loading,
    width,
    onClose,
    queryResponse,
    timeZone
  } = props;
  const dataFrames = (queryResponse === null || queryResponse === void 0 ? void 0 : queryResponse.series) || [];
  const error = queryResponse === null || queryResponse === void 0 ? void 0 : queryResponse.error;
  const statsTab = {
    label: 'Stats',
    value: 'stats',
    icon: 'chart-line',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_features_inspector_InspectStatsTab__WEBPACK_IMPORTED_MODULE_8__.InspectStatsTab, {
      data: queryResponse,
      timeZone: queryResponse === null || queryResponse === void 0 ? void 0 : (_queryResponse$reques = queryResponse.request) === null || _queryResponse$reques === void 0 ? void 0 : _queryResponse$reques.timezone
    })
  };
  const jsonTab = {
    label: 'JSON',
    value: 'json',
    icon: 'brackets-curly',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_features_inspector_InspectJSONTab__WEBPACK_IMPORTED_MODULE_7__.InspectJSONTab, {
      data: queryResponse,
      onClose: onClose
    })
  };
  const dataTab = {
    label: 'Data',
    value: 'data',
    icon: 'database',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_features_inspector_InspectDataTab__WEBPACK_IMPORTED_MODULE_5__.InspectDataTab, {
      data: dataFrames,
      isLoading: loading,
      options: {
        withTransforms: false,
        withFieldConfig: false
      },
      timeZone: timeZone,
      app: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.Explore
    })
  };
  const queryTab = {
    label: 'Query',
    value: 'query',
    icon: 'info-circle',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_features_inspector_QueryInspector__WEBPACK_IMPORTED_MODULE_9__.QueryInspector, {
      data: dataFrames,
      onRefreshQuery: () => props.runQueries(props.exploreId)
    })
  };
  const tabs = [statsTab, queryTab, jsonTab, dataTab];

  if (error) {
    const errorTab = {
      label: 'Error',
      value: 'error',
      icon: 'exclamation-triangle',
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_features_inspector_InspectErrorTab__WEBPACK_IMPORTED_MODULE_6__.InspectErrorTab, {
        error: error
      })
    };
    tabs.push(errorTab);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_features_explore_ExploreDrawer__WEBPACK_IMPORTED_MODULE_4__.ExploreDrawer, {
    width: width,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TabbedContainer, {
      tabs: tabs,
      onClose: onClose,
      closeIconTooltip: "Close query inspector"
    })
  });
}

function mapStateToProps(state, {
  exploreId
}) {
  const explore = state.explore;
  const item = explore[exploreId];
  const {
    loading,
    queryResponse
  } = item;
  return {
    loading,
    queryResponse
  };
}

const mapDispatchToProps = {
  runQueries: _state_query__WEBPACK_IMPORTED_MODULE_10__.runQueries
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(ExploreQueryInspector));

/***/ }),

/***/ "./public/app/features/explore/ExploreTimeControls.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreTimeControls": () => (/* binding */ ExploreTimeControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_components_TimePicker_TimePickerWithHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/TimePicker/TimePickerWithHistory.tsx");
/* harmony import */ var app_core_utils_timePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/timePicker.ts");
/* harmony import */ var _TimeSyncButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/explore/TimeSyncButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ExploreTimeControls extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onMoveTimePicker", direction => {
      const {
        range,
        onChangeTime,
        timeZone
      } = this.props;
      const {
        from,
        to
      } = (0,app_core_utils_timePicker__WEBPACK_IMPORTED_MODULE_3__.getShiftedTimeRange)(direction, range);
      const nextTimeRange = {
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTimeForTimeZone)(timeZone, from),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTimeForTimeZone)(timeZone, to)
      };
      onChangeTime(nextTimeRange);
    });

    _defineProperty(this, "onMoveForward", () => this.onMoveTimePicker(1));

    _defineProperty(this, "onMoveBack", () => this.onMoveTimePicker(-1));

    _defineProperty(this, "onChangeTimePicker", timeRange => {
      const adjustedFrom = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateMath.isMathString(timeRange.raw.from) ? timeRange.raw.from : timeRange.from;
      const adjustedTo = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateMath.isMathString(timeRange.raw.to) ? timeRange.raw.to : timeRange.to;
      this.props.onChangeTime({
        from: adjustedFrom,
        to: adjustedTo
      });
    });

    _defineProperty(this, "onZoom", () => {
      const {
        range,
        onChangeTime,
        timeZone
      } = this.props;
      const {
        from,
        to
      } = (0,app_core_utils_timePicker__WEBPACK_IMPORTED_MODULE_3__.getZoomedTimeRange)(range, 2);
      const nextTimeRange = {
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTimeForTimeZone)(timeZone, from),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTimeForTimeZone)(timeZone, to)
      };
      onChangeTime(nextTimeRange);
    });
  }

  render() {
    const {
      range,
      timeZone,
      fiscalYearStartMonth,
      splitted,
      syncedTimes,
      onChangeTimeSync,
      hideText,
      onChangeTimeZone,
      onChangeFiscalYearStartMonth
    } = this.props;
    const timeSyncButton = splitted ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TimeSyncButton__WEBPACK_IMPORTED_MODULE_4__.TimeSyncButton, {
      onClick: onChangeTimeSync,
      isSynced: syncedTimes
    }) : undefined;
    const timePickerCommonProps = {
      value: range,
      timeZone,
      fiscalYearStartMonth,
      onMoveBackward: this.onMoveBack,
      onMoveForward: this.onMoveForward,
      onZoom: this.onZoom,
      hideText
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(app_core_components_TimePicker_TimePickerWithHistory__WEBPACK_IMPORTED_MODULE_2__.TimePickerWithHistory, Object.assign({}, timePickerCommonProps, {
      timeSyncButton: timeSyncButton,
      isSynced: syncedTimes,
      widthOverride: splitted ? window.innerWidth / 2 : undefined,
      onChange: this.onChangeTimePicker,
      onChangeTimeZone: onChangeTimeZone,
      onChangeFiscalYearStartMonth: onChangeFiscalYearStartMonth
    }));
  }

}

/***/ }),

/***/ "./public/app/features/explore/ExploreToolbar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreToolbar": () => (/* binding */ ExploreToolbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_utils_shortLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/utils/shortLinks.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_types_explore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/explore.ts");
/* harmony import */ var _dashboard_components_DashNav_DashNavButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/components/DashNav/DashNavButton.tsx");
/* harmony import */ var _dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _profile_state_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/profile/state/reducers.ts");
/* harmony import */ var _profile_state_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/profile/state/selectors.ts");
/* harmony import */ var _ExploreTimeControls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/explore/ExploreTimeControls.tsx");
/* harmony import */ var _LiveTailButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/explore/LiveTailButton.tsx");
/* harmony import */ var _state_datasource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/explore/state/datasource.ts");
/* harmony import */ var _state_main__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var _state_query__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/explore/state/query.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/explore/state/selectors.ts");
/* harmony import */ var _state_time__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/explore/state/time.ts");
/* harmony import */ var _useLiveTailControls__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/explore/useLiveTailControls.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const AddToDashboard = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ "public_app_features_explore_AddToDashboard_index_tsx").then(__webpack_require__.bind(__webpack_require__, "./public/app/features/explore/AddToDashboard/index.tsx")).then(({
  AddToDashboard
}) => ({
  default: AddToDashboard
})));

class UnConnectedExploreToolbar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onChangeDatasource", async dsSettings => {
      this.props.changeDatasource(this.props.exploreId, dsSettings.uid, {
        importQueries: true
      });
    });

    _defineProperty(this, "onRunQuery", (loading = false) => {
      const {
        runQueries,
        cancelQueries,
        exploreId
      } = this.props;

      if (loading) {
        return cancelQueries(exploreId);
      } else {
        return runQueries(exploreId);
      }
    });

    _defineProperty(this, "onChangeRefreshInterval", item => {
      const {
        changeRefreshInterval,
        exploreId
      } = this.props;
      changeRefreshInterval(exploreId, item);
    });

    _defineProperty(this, "onChangeTimeSync", () => {
      const {
        syncTimes,
        exploreId
      } = this.props;
      syncTimes(exploreId);
    });

    _defineProperty(this, "renderRefreshPicker", showSmallTimePicker => {
      const {
        loading,
        refreshInterval,
        isLive
      } = this.props;
      let refreshPickerText = loading ? 'Cancel' : 'Run query';
      let refreshPickerTooltip = undefined;
      let refreshPickerWidth = '108px';

      if (showSmallTimePicker) {
        refreshPickerTooltip = refreshPickerText;
        refreshPickerText = undefined;
        refreshPickerWidth = '35px';
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RefreshPicker, {
        onIntervalChanged: this.onChangeRefreshInterval,
        value: refreshInterval,
        isLoading: loading,
        text: refreshPickerText,
        tooltip: refreshPickerTooltip,
        intervals: (0,_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_9__.getTimeSrv)().getValidIntervals(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.defaultIntervals),
        isLive: isLive,
        onRefresh: () => this.onRunQuery(loading),
        noIntervalPicker: isLive,
        primary: true,
        width: refreshPickerWidth
      });
    });
  }

  render() {
    const {
      datasourceMissing,
      closeSplit,
      exploreId,
      loading,
      range,
      timeZone,
      fiscalYearStartMonth,
      splitted,
      syncedTimes,
      refreshInterval,
      onChangeTime,
      split,
      hasLiveOption,
      isLive,
      isPaused,
      containerWidth,
      onChangeTimeZone,
      onChangeFiscalYearStartMonth,
      topOfViewRef
    } = this.props;
    const showSmallDataSourcePicker = (splitted ? containerWidth < 700 : containerWidth < 800) || false;
    const showSmallTimePicker = splitted || containerWidth < 1210;
    const showExploreToDashboard = app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.DashboardsCreate, app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.isEditor) || app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.DashboardsWrite, app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.isEditor);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
      ref: topOfViewRef,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.PageToolbar, {
        "aria-label": "Explore toolbar",
        title: exploreId === app_types_explore__WEBPACK_IMPORTED_MODULE_7__.ExploreId.left ? 'Explore' : undefined,
        pageIcon: exploreId === app_types_explore__WEBPACK_IMPORTED_MODULE_7__.ExploreId.left ? 'compass' : undefined,
        leftItems: [exploreId === app_types_explore__WEBPACK_IMPORTED_MODULE_7__.ExploreId.left && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_dashboard_components_DashNav_DashNavButton__WEBPACK_IMPORTED_MODULE_8__.DashNavButton, {
          tooltip: "Copy shortened link",
          icon: "share-alt",
          onClick: () => (0,app_core_utils_shortLinks__WEBPACK_IMPORTED_MODULE_5__.createAndCopyShortLink)(window.location.href),
          "aria-label": "Copy shortened link"
        }, "share"), !datasourceMissing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker, {
          onChange: this.onChangeDatasource,
          current: this.props.datasourceName,
          hideTextValue: showSmallDataSourcePicker,
          width: showSmallDataSourcePicker ? 8 : undefined
        }, `${exploreId}-ds-picker`)].filter(Boolean),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ToolbarButtonRow, {
          children: [!splitted ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
            title: "Split",
            onClick: () => split(),
            icon: "columns",
            disabled: isLive,
            children: "Split"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
            title: "Close split pane",
            onClick: () => closeSplit(exploreId),
            icon: "times",
            children: "Close"
          }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.explore2Dashboard && showExploreToDashboard && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
            fallback: null,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(AddToDashboard, {
              exploreId: exploreId
            })
          }), !isLive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_ExploreTimeControls__WEBPACK_IMPORTED_MODULE_12__.ExploreTimeControls, {
            exploreId: exploreId,
            range: range,
            timeZone: timeZone,
            fiscalYearStartMonth: fiscalYearStartMonth,
            onChangeTime: onChangeTime,
            splitted: splitted,
            syncedTimes: syncedTimes,
            onChangeTimeSync: this.onChangeTimeSync,
            hideText: showSmallTimePicker,
            onChangeTimeZone: onChangeTimeZone,
            onChangeFiscalYearStartMonth: onChangeFiscalYearStartMonth
          }), this.renderRefreshPicker(showSmallTimePicker), refreshInterval && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SetInterval, {
            func: this.onRunQuery,
            interval: refreshInterval,
            loading: loading
          }), hasLiveOption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_useLiveTailControls__WEBPACK_IMPORTED_MODULE_19__.LiveTailControls, {
            exploreId: exploreId,
            children: c => {
              const controls = Object.assign({}, c, {
                start: () => {
                  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.reportInteraction)('grafana_explore_logs_live_tailing_clicked', {
                    datasourceType: this.props.datasourceType
                  });
                  c.start();
                }
              });
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_LiveTailButton__WEBPACK_IMPORTED_MODULE_13__.LiveTailButton, {
                splitted: splitted,
                isLive: isLive,
                isPaused: isPaused,
                start: controls.start,
                pause: controls.pause,
                resume: controls.resume,
                stop: controls.stop
              });
            }
          })]
        })
      })
    });
  }

}

const mapStateToProps = (state, {
  exploreId
}) => {
  var _datasourceInstance$m;

  const {
    syncedTimes
  } = state.explore;
  const exploreItem = state.explore[exploreId];
  const {
    datasourceInstance,
    datasourceMissing,
    range,
    refreshInterval,
    loading,
    isLive,
    isPaused,
    containerWidth
  } = exploreItem;
  const hasLiveOption = !!(datasourceInstance !== null && datasourceInstance !== void 0 && (_datasourceInstance$m = datasourceInstance.meta) !== null && _datasourceInstance$m !== void 0 && _datasourceInstance$m.streaming);
  return {
    datasourceMissing,
    datasourceName: datasourceInstance === null || datasourceInstance === void 0 ? void 0 : datasourceInstance.name,
    datasourceType: datasourceInstance === null || datasourceInstance === void 0 ? void 0 : datasourceInstance.type,
    loading,
    range,
    timeZone: (0,_profile_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getTimeZone)(state.user),
    fiscalYearStartMonth: (0,_profile_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getFiscalYearStartMonth)(state.user),
    splitted: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_17__.isSplit)(state),
    refreshInterval,
    hasLiveOption,
    isLive,
    isPaused,
    syncedTimes,
    containerWidth
  };
};

const mapDispatchToProps = {
  changeDatasource: _state_datasource__WEBPACK_IMPORTED_MODULE_14__.changeDatasource,
  changeRefreshInterval: _state_time__WEBPACK_IMPORTED_MODULE_18__.changeRefreshInterval,
  cancelQueries: _state_query__WEBPACK_IMPORTED_MODULE_16__.cancelQueries,
  runQueries: _state_query__WEBPACK_IMPORTED_MODULE_16__.runQueries,
  closeSplit: _state_main__WEBPACK_IMPORTED_MODULE_15__.splitClose,
  split: _state_main__WEBPACK_IMPORTED_MODULE_15__.splitOpen,
  syncTimes: _state_time__WEBPACK_IMPORTED_MODULE_18__.syncTimes,
  onChangeTimeZone: _profile_state_reducers__WEBPACK_IMPORTED_MODULE_10__.updateTimeZoneForSession,
  onChangeFiscalYearStartMonth: _profile_state_reducers__WEBPACK_IMPORTED_MODULE_10__.updateFiscalYearStartMonthForSession
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const ExploreToolbar = connector(UnConnectedExploreToolbar);

/***/ }),

/***/ "./public/app/features/explore/LiveLogs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveLogsWithTheme": () => (/* binding */ LiveLogsWithTheme)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/tinycolor2-npm-1.4.2-462ba30c26-57ed262e08.zip/node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _ElapsedTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/explore/ElapsedTime.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const getStyles = theme => ({
  logsRowsLive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: logs-rows-live;
    font-family: ${theme.typography.fontFamilyMonospace};
    font-size: ${theme.typography.bodySmall.fontSize};
    display: flex;
    flex-flow: column nowrap;
    height: 60vh;
    overflow-y: scroll;
    :first-child {
      margin-top: auto !important;
    }
  `,
  logsRowFade: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: logs-row-fresh;
    color: ${theme.colors.text};
    background-color: ${tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(theme.colors.info.transparent).setAlpha(0.25).toString()};
    animation: fade 1s ease-out 1s 1 normal forwards;
    @keyframes fade {
      from {
        background-color: ${tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(theme.colors.info.transparent).setAlpha(0.25).toString()};
      }
      to {
        background-color: transparent;
      }
    }
  `,
  logsRowsIndicator: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: ${theme.typography.h6.fontSize};
    padding-top: ${theme.spacing(1)};
    display: flex;
    align-items: center;
  `,
  button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(1)};
  `,
  fullWidth: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 100%;
  `
});

class LiveLogs extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "liveEndDiv", null);

    _defineProperty(this, "scrollContainerRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createRef());

    _defineProperty(this, "onScroll", event => {
      const {
        isPaused,
        onPause
      } = this.props;
      const {
        scrollTop,
        clientHeight,
        scrollHeight
      } = event.currentTarget;
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

      if (distanceFromBottom >= 5 && !isPaused) {
        onPause();
      }
    });

    _defineProperty(this, "rowsToRender", () => {
      const {
        isPaused
      } = this.props;
      let {
        logRowsToRender: rowsToRender = []
      } = this.state;

      if (!isPaused) {
        // A perf optimisation here. Show just 100 rows when streaming and full length when the streaming is paused.
        rowsToRender = rowsToRender.slice(-100);
      }

      return rowsToRender;
    });

    this.state = {
      logRowsToRender: props.logRows
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (!nextProps.isPaused) {
      return {
        // We update what we show only if not paused. We keep any background subscriptions running and keep updating
        // our state, but we do not show the updates, this allows us start again showing correct result after resuming
        // without creating a gap in the log results.
        logRowsToRender: nextProps.logRows
      };
    } else {
      return null;
    }
  }
  /**
   * Handle pausing when user scrolls up so that we stop resetting his position to the bottom when new row arrives.
   * We do not need to throttle it here much, adding new rows should be throttled/buffered itself in the query epics
   * and after you pause we remove the handler and add it after you manually resume, so this should not be fired often.
   */


  render() {
    const {
      theme,
      timeZone,
      onPause,
      onResume,
      isPaused
    } = this.props;
    const styles = getStyles(theme);
    const {
      logsRow,
      logsRowLocalTime,
      logsRowMessage
    } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.getLogRowStyles)(theme);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("table", {
        className: styles.fullWidth,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody", {
          onScroll: isPaused ? undefined : this.onScroll,
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(['logs-rows', styles.logsRowsLive]),
          ref: this.scrollContainerRef,
          children: [this.rowsToRender().map(row => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
              className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(logsRow, styles.logsRowFade),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(logsRowLocalTime),
                children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTimeFormat)(row.timeEpochMs, {
                  timeZone
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(logsRowMessage),
                children: row.hasAnsi ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LogMessageAnsi, {
                  value: row.raw
                }) : row.entry
              })]
            }, row.uid);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tr", {
            ref: element => {
              var _this$scrollContainer;

              this.liveEndDiv = element; // This is triggered on every update so on every new row. It keeps the view scrolled at the bottom by
              // default.
              // As scrollTo is not implemented in JSDOM it needs to be part of the condition

              if (this.liveEndDiv && (_this$scrollContainer = this.scrollContainerRef.current) !== null && _this$scrollContainer !== void 0 && _this$scrollContainer.scrollTo && !isPaused) {
                var _this$scrollContainer2;

                (_this$scrollContainer2 = this.scrollContainerRef.current) === null || _this$scrollContainer2 === void 0 ? void 0 : _this$scrollContainer2.scrollTo(0, this.scrollContainerRef.current.scrollHeight);
              }
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.logsRowsIndicator,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "secondary",
          onClick: isPaused ? onResume : onPause,
          className: styles.button,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
            name: isPaused ? 'play' : 'pause'
          }), "\xA0", isPaused ? 'Resume' : 'Pause']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "secondary",
          onClick: this.props.stopLive,
          className: styles.button,
          children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
            name: "square-shape",
            size: "lg",
            type: "mono"
          })), "\xA0 Exit live mode"]
        }), isPaused || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
          children: ["Last line received: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ElapsedTime__WEBPACK_IMPORTED_MODULE_5__.ElapsedTime, {
            resetKey: this.props.logRows,
            humanize: true
          }), " ago"]
        })]
      })]
    });
  }

}

const LiveLogsWithTheme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.withTheme2)(LiveLogs);

/***/ }),

/***/ "./public/app/features/explore/LiveTailButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveTailButton": () => (/* binding */ LiveTailButton)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-transition-group-virtual-8df824fae8/0/cache/react-transition-group-npm-4.4.2-5052c30656-b67bf5b3e8.zip/node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function LiveTailButton(props) {
  const {
    start,
    pause,
    resume,
    isLive,
    isPaused,
    stop,
    splitted
  } = props;
  const buttonVariant = isLive && !isPaused ? 'active' : 'default';
  const onClickMain = isLive ? isPaused ? resume : pause : start;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      content: isLive && !isPaused ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: "Pause the live stream"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: "Start live stream your logs"
      }),
      placement: "bottom",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        iconOnly: splitted,
        variant: buttonVariant,
        icon: !isLive || isPaused ? 'play' : 'pause',
        onClick: onClickMain,
        children: isLive && isPaused ? 'Paused' : 'Live'
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: 100,
      in: isLive,
      classNames: {
        enter: styles.stopButtonEnter,
        enterActive: styles.stopButtonEnterActive,
        exit: styles.stopButtonExit,
        exitActive: styles.stopButtonExitActive
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: "Stop and exit the live stream"
        }),
        placement: "bottom",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          variant: buttonVariant,
          onClick: stop,
          icon: "square-shape"
        })
      })
    })]
  });
}
const styles = {
  stopButtonEnter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: stopButtonEnter;
    width: 0;
    opacity: 0;
    overflow: hidden;
  `,
  stopButtonEnterActive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: stopButtonEnterActive;
    opacity: 1;
    width: 32px;
  `,
  stopButtonExit: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: stopButtonExit;
    width: 32px;
    opacity: 1;
    overflow: hidden;
  `,
  stopButtonExitActive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: stopButtonExitActive;
    opacity: 0;
    width: 0;
  `
};

/***/ }),

/***/ "./public/app/features/explore/Logs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logs": () => (/* binding */ Logs)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_logs_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/logs_model.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var _LogsMetaRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/explore/LogsMetaRow.tsx");
/* harmony import */ var _LogsNavigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/explore/LogsNavigation.tsx");
/* harmony import */ var _LogsVolumePanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/explore/LogsVolumePanel.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const SETTINGS_KEYS = {
  showLabels: 'grafana.explore.logs.showLabels',
  showTime: 'grafana.explore.logs.showTime',
  wrapLogMessage: 'grafana.explore.logs.wrapLogMessage',
  prettifyLogMessage: 'grafana.explore.logs.prettifyLogMessage',
  logsSortOrder: 'grafana.explore.logs.sortOrder'
};

class UnthemedLogs extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "flipOrderTimer", void 0);

    _defineProperty(this, "cancelFlippingTimer", void 0);

    _defineProperty(this, "topLogsRef", /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)());

    _defineProperty(this, "state", {
      showLabels: app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].getBool(SETTINGS_KEYS.showLabels, false),
      showTime: app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].getBool(SETTINGS_KEYS.showTime, true),
      wrapLogMessage: app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].getBool(SETTINGS_KEYS.wrapLogMessage, true),
      prettifyLogMessage: app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].getBool(SETTINGS_KEYS.prettifyLogMessage, false),
      dedupStrategy: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LogsDedupStrategy.none,
      hiddenLogLevels: [],
      logsSortOrder: app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].get(SETTINGS_KEYS.logsSortOrder) || _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LogsSortOrder.Descending,
      isFlipping: false,
      showDetectedFields: [],
      forceEscape: false
    });

    _defineProperty(this, "onChangeLogsSortOrder", () => {
      this.setState({
        isFlipping: true
      }); // we are using setTimeout here to make sure that disabled button is rendered before the rendering of reordered logs

      this.flipOrderTimer = window.setTimeout(() => {
        this.setState(prevState => {
          const newSortOrder = prevState.logsSortOrder === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LogsSortOrder.Descending ? _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LogsSortOrder.Ascending : _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LogsSortOrder.Descending;
          app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].set(SETTINGS_KEYS.logsSortOrder, newSortOrder);
          return {
            logsSortOrder: newSortOrder
          };
        });
      }, 0);
      this.cancelFlippingTimer = window.setTimeout(() => this.setState({
        isFlipping: false
      }), 1000);
    });

    _defineProperty(this, "onEscapeNewlines", () => {
      this.setState(prevState => ({
        forceEscape: !prevState.forceEscape
      }));
    });

    _defineProperty(this, "onChangeDedup", dedupStrategy => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)('grafana_explore_logs_deduplication_clicked', {
        deduplicationType: dedupStrategy,
        datasourceType: this.props.datasourceType
      });
      this.setState({
        dedupStrategy
      });
    });

    _defineProperty(this, "onChangeLabels", event => {
      const {
        target
      } = event;

      if (target) {
        const showLabels = target.checked;
        this.setState({
          showLabels
        });
        app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].set(SETTINGS_KEYS.showLabels, showLabels);
      }
    });

    _defineProperty(this, "onChangeTime", event => {
      const {
        target
      } = event;

      if (target) {
        const showTime = target.checked;
        this.setState({
          showTime
        });
        app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].set(SETTINGS_KEYS.showTime, showTime);
      }
    });

    _defineProperty(this, "onChangeWrapLogMessage", event => {
      const {
        target
      } = event;

      if (target) {
        const wrapLogMessage = target.checked;
        this.setState({
          wrapLogMessage
        });
        app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].set(SETTINGS_KEYS.wrapLogMessage, wrapLogMessage);
      }
    });

    _defineProperty(this, "onChangePrettifyLogMessage", event => {
      const {
        target
      } = event;

      if (target) {
        const prettifyLogMessage = target.checked;
        this.setState({
          prettifyLogMessage
        });
        app_core_store__WEBPACK_IMPORTED_MODULE_7__["default"].set(SETTINGS_KEYS.prettifyLogMessage, prettifyLogMessage);
      }
    });

    _defineProperty(this, "onToggleLogLevel", hiddenRawLevels => {
      const hiddenLogLevels = hiddenRawLevels.map(level => _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LogLevel[level]);
      this.setState({
        hiddenLogLevels
      });
    });

    _defineProperty(this, "onClickScan", event => {
      event.preventDefault();

      if (this.props.onStartScanning) {
        this.props.onStartScanning();
      }
    });

    _defineProperty(this, "onClickStopScan", event => {
      event.preventDefault();

      if (this.props.onStopScanning) {
        this.props.onStopScanning();
      }
    });

    _defineProperty(this, "showDetectedField", key => {
      const index = this.state.showDetectedFields.indexOf(key);

      if (index === -1) {
        this.setState(state => {
          return {
            showDetectedFields: state.showDetectedFields.concat(key)
          };
        });
      }
    });

    _defineProperty(this, "hideDetectedField", key => {
      const index = this.state.showDetectedFields.indexOf(key);

      if (index > -1) {
        this.setState(state => {
          return {
            showDetectedFields: state.showDetectedFields.filter(k => key !== k)
          };
        });
      }
    });

    _defineProperty(this, "clearDetectedFields", () => {
      this.setState(state => {
        return {
          showDetectedFields: []
        };
      });
    });

    _defineProperty(this, "checkUnescapedContent", (0,memoize_one__WEBPACK_IMPORTED_MODULE_12__["default"])(logRows => {
      return !!logRows.some(r => r.hasUnescapedContent);
    }));

    _defineProperty(this, "dedupRows", (0,memoize_one__WEBPACK_IMPORTED_MODULE_12__["default"])((logRows, dedupStrategy) => {
      const dedupedRows = (0,app_core_logs_model__WEBPACK_IMPORTED_MODULE_6__.dedupLogRows)(logRows, dedupStrategy);
      const dedupCount = dedupedRows.reduce((sum, row) => row.duplicates ? sum + row.duplicates : sum, 0);
      return {
        dedupedRows,
        dedupCount
      };
    }));

    _defineProperty(this, "filterRows", (0,memoize_one__WEBPACK_IMPORTED_MODULE_12__["default"])((logRows, hiddenLogLevels) => {
      return (0,app_core_logs_model__WEBPACK_IMPORTED_MODULE_6__.filterLogLevels)(logRows, new Set(hiddenLogLevels));
    }));

    _defineProperty(this, "createNavigationRange", (0,memoize_one__WEBPACK_IMPORTED_MODULE_12__["default"])(logRows => {
      if (!logRows || logRows.length === 0) {
        return undefined;
      }

      const firstTimeStamp = logRows[0].timeEpochMs;
      const lastTimeStamp = logRows[logRows.length - 1].timeEpochMs;

      if (lastTimeStamp < firstTimeStamp) {
        return {
          from: lastTimeStamp,
          to: firstTimeStamp
        };
      }

      return {
        from: firstTimeStamp,
        to: lastTimeStamp
      };
    }));

    _defineProperty(this, "scrollToTopLogs", () => {
      var _this$topLogsRef$curr;

      return (_this$topLogsRef$curr = this.topLogsRef.current) === null || _this$topLogsRef$curr === void 0 ? void 0 : _this$topLogsRef$curr.scrollIntoView();
    });
  }

  componentWillUnmount() {
    if (this.flipOrderTimer) {
      window.clearTimeout(this.flipOrderTimer);
    }

    if (this.cancelFlippingTimer) {
      window.clearTimeout(this.cancelFlippingTimer);
    }
  }

  render() {
    const {
      width,
      splitOpen,
      logRows,
      logsMeta,
      logsSeries,
      visibleRange,
      logsVolumeData,
      loadLogsVolumeData,
      loading = false,
      loadingState,
      onClickFilterLabel,
      onClickFilterOutLabel,
      timeZone,
      scanning,
      scanRange,
      showContextToggle,
      absoluteRange,
      onChangeTime,
      getFieldLinks,
      theme,
      logsQueries,
      clearCache,
      addResultsToCache,
      exploreId
    } = this.props;
    const {
      showLabels,
      showTime,
      wrapLogMessage,
      prettifyLogMessage,
      dedupStrategy,
      hiddenLogLevels,
      logsSortOrder,
      isFlipping,
      showDetectedFields,
      forceEscape
    } = this.state;
    const styles = getStyles(theme, wrapLogMessage);
    const hasData = logRows && logRows.length > 0;
    const hasUnescapedContent = this.checkUnescapedContent(logRows);
    const filteredLogs = this.filterRows(logRows, hiddenLogLevels);
    const {
      dedupedRows,
      dedupCount
    } = this.dedupRows(filteredLogs, dedupStrategy);
    const navigationRange = this.createNavigationRange(logRows);
    const scanText = scanRange ? `Scanning ${_grafana_data__WEBPACK_IMPORTED_MODULE_3__.rangeUtil.describeTimeRange(scanRange)}` : 'Scanning...';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_LogsVolumePanel__WEBPACK_IMPORTED_MODULE_10__.LogsVolumePanel, {
        absoluteRange: absoluteRange,
        width: width,
        logsVolumeData: logsVolumeData,
        logLinesBasedData: logsSeries ? {
          data: logsSeries,
          state: loadingState
        } : undefined,
        logLinesBasedDataVisibleRange: visibleRange,
        onUpdateTimeRange: onChangeTime,
        timeZone: timeZone,
        splitOpen: splitOpen,
        onLoadLogsVolume: () => loadLogsVolumeData(exploreId),
        onHiddenSeriesChanged: this.onToggleLogLevel
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: styles.logOptions,
        ref: this.topLogsRef,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFieldRow, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, {
            label: "Time",
            className: styles.horizontalInlineLabel,
            transparent: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineSwitch, {
              value: showTime,
              onChange: this.onChangeTime,
              className: styles.horizontalInlineSwitch,
              transparent: true,
              id: `show-time_${exploreId}`
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, {
            label: "Unique labels",
            className: styles.horizontalInlineLabel,
            transparent: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineSwitch, {
              value: showLabels,
              onChange: this.onChangeLabels,
              className: styles.horizontalInlineSwitch,
              transparent: true,
              id: `unique-labels_${exploreId}`
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, {
            label: "Wrap lines",
            className: styles.horizontalInlineLabel,
            transparent: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineSwitch, {
              value: wrapLogMessage,
              onChange: this.onChangeWrapLogMessage,
              className: styles.horizontalInlineSwitch,
              transparent: true,
              id: `wrap-lines_${exploreId}`
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, {
            label: "Prettify JSON",
            className: styles.horizontalInlineLabel,
            transparent: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineSwitch, {
              value: prettifyLogMessage,
              onChange: this.onChangePrettifyLogMessage,
              className: styles.horizontalInlineSwitch,
              transparent: true,
              id: `prettify_${exploreId}`
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, {
            label: "Dedup",
            className: styles.horizontalInlineLabel,
            transparent: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup, {
              options: Object.values(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.LogsDedupStrategy).map(dedupType => ({
                label: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.capitalize)(dedupType),
                value: dedupType,
                description: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LogsDedupDescription[dedupType]
              })),
              value: dedupStrategy,
              onChange: this.onChangeDedup,
              className: styles.radioButtons
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, {
            label: "Display results",
            className: styles.horizontalInlineLabel,
            transparent: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup, {
              disabled: isFlipping,
              options: [{
                label: 'Newest first',
                value: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LogsSortOrder.Descending,
                description: 'Show results newest to oldest'
              }, {
                label: 'Oldest first',
                value: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LogsSortOrder.Ascending,
                description: 'Show results oldest to newest'
              }],
              value: logsSortOrder,
              onChange: this.onChangeLogsSortOrder,
              className: styles.radioButtons
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_LogsMetaRow__WEBPACK_IMPORTED_MODULE_8__.LogsMetaRow, {
        logRows: logRows,
        meta: logsMeta || [],
        dedupStrategy: dedupStrategy,
        dedupCount: dedupCount,
        hasUnescapedContent: hasUnescapedContent,
        forceEscape: forceEscape,
        showDetectedFields: showDetectedFields,
        onEscapeNewlines: this.onEscapeNewlines,
        clearDetectedFields: this.clearDetectedFields
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: styles.logsSection,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: styles.logRows,
          "data-testid": "logRows",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LogRows, {
            logRows: logRows,
            deduplicatedRows: dedupedRows,
            dedupStrategy: dedupStrategy,
            getRowContext: this.props.getRowContext,
            onClickFilterLabel: onClickFilterLabel,
            onClickFilterOutLabel: onClickFilterOutLabel,
            showContextToggle: showContextToggle,
            showLabels: showLabels,
            showTime: showTime,
            enableLogDetails: true,
            forceEscape: forceEscape,
            wrapLogMessage: wrapLogMessage,
            prettifyLogMessage: prettifyLogMessage,
            timeZone: timeZone,
            getFieldLinks: getFieldLinks,
            logsSortOrder: logsSortOrder,
            showDetectedFields: showDetectedFields,
            onClickShowDetectedField: this.showDetectedField,
            onClickHideDetectedField: this.hideDetectedField
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_LogsNavigation__WEBPACK_IMPORTED_MODULE_9__["default"], {
          logsSortOrder: logsSortOrder,
          visibleRange: navigationRange !== null && navigationRange !== void 0 ? navigationRange : absoluteRange,
          absoluteRange: absoluteRange,
          timeZone: timeZone,
          onChangeTime: onChangeTime,
          loading: loading,
          queries: logsQueries !== null && logsQueries !== void 0 ? logsQueries : [],
          scrollToTopLogs: this.scrollToTopLogs,
          addResultsToCache: addResultsToCache,
          clearCache: clearCache
        })]
      }), !loading && !hasData && !scanning && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: styles.noData,
        children: ["No logs found.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          size: "xs",
          fill: "text",
          onClick: this.onClickScan,
          children: "Scan for older logs"
        })]
      }), scanning && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: styles.noData,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          children: scanText
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          size: "xs",
          fill: "text",
          onClick: this.onClickStopScan,
          children: "Stop scan"
        })]
      })]
    });
  }

}

const Logs = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.withTheme2)(UnthemedLogs);

const getStyles = (theme, wrapLogMessage) => {
  return {
    noData: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      > * {
        margin-left: 0.5em;
      }
    `,
    logOptions: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      background-color: ${theme.colors.background.primary};
      padding: ${theme.spacing(1, 2)};
      border-radius: ${theme.shape.borderRadius()};
      margin: ${theme.spacing(2, 0, 1)};
      border: 1px solid ${theme.colors.border.medium};
    `,
    headerButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(0.5, 0, 0, 1)};
    `,
    horizontalInlineLabel: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      > label {
        margin-right: 0;
      }
    `,
    horizontalInlineSwitch: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: 0 ${theme.spacing(1)} 0 0;
    `,
    radioButtons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: 0;
    `,
    logsSection: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `,
    logRows: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      overflow-x: ${wrapLogMessage ? 'unset' : 'scroll'};
      overflow-y: visible;
      width: 100%;
    `
  };
};

/***/ }),

/***/ "./public/app/features/explore/LogsContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _profile_state_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/profile/state/selectors.ts");
/* harmony import */ var _LiveLogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/explore/LiveLogs.tsx");
/* harmony import */ var _Logs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/explore/Logs.tsx");
/* harmony import */ var _state_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var _state_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/explore/state/query.ts");
/* harmony import */ var _state_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/explore/state/time.ts");
/* harmony import */ var _useLiveTailControls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/explore/useLiveTailControls.ts");
/* harmony import */ var _utils_LogsCrossFadeTransition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/explore/utils/LogsCrossFadeTransition.tsx");
/* harmony import */ var _utils_links__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/explore/utils/links.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















class LogsContainer extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onChangeTime", absoluteRange => {
      const {
        exploreId,
        updateTimeRange
      } = this.props;
      updateTimeRange({
        exploreId,
        absoluteRange
      });
    });

    _defineProperty(this, "getLogRowContext", async (row, options) => {
      const {
        datasourceInstance
      } = this.props;

      if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.hasLogsContextSupport)(datasourceInstance)) {
        return datasourceInstance.getLogRowContext(row, options);
      }

      return [];
    });

    _defineProperty(this, "showContextToggle", row => {
      const {
        datasourceInstance
      } = this.props;

      if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.hasLogsContextSupport)(datasourceInstance)) {
        return datasourceInstance.showContextToggle(row);
      }

      return false;
    });

    _defineProperty(this, "getFieldLinks", (field, rowIndex) => {
      const {
        splitOpen: splitOpenFn,
        range
      } = this.props;
      return (0,_utils_links__WEBPACK_IMPORTED_MODULE_13__.getFieldLinksForExplore)({
        field,
        rowIndex,
        splitOpenFn,
        range
      });
    });
  }

  render() {
    var _this$props$datasourc;

    const {
      loading,
      loadingState,
      logRows,
      logsMeta,
      logsSeries,
      logsQueries,
      logsVolumeData,
      loadLogsVolumeData,
      onClickFilterLabel,
      onClickFilterOutLabel,
      onStartScanning,
      onStopScanning,
      absoluteRange,
      timeZone,
      visibleRange,
      scanning,
      range,
      width,
      splitOpen,
      isLive,
      exploreId,
      addResultsToCache,
      clearCache
    } = this.props;

    if (!logRows) {
      return null;
    } // We need to override css overflow of divs in Collapse element to enable sticky Logs navigation


    const styleOverridesForStickyNavigation = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      & > div {
        overflow: visible;
        & > div {
          overflow: visible;
        }
      }
    `;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_utils_LogsCrossFadeTransition__WEBPACK_IMPORTED_MODULE_12__.LogsCrossFadeTransition, {
        visible: isLive,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Collapse, {
          label: "Logs",
          loading: false,
          isOpen: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_useLiveTailControls__WEBPACK_IMPORTED_MODULE_11__.LiveTailControls, {
            exploreId: exploreId,
            children: controls => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_LiveLogs__WEBPACK_IMPORTED_MODULE_6__.LiveLogsWithTheme, {
              logRows: logRows,
              timeZone: timeZone,
              stopLive: controls.stop,
              isPaused: this.props.isPaused,
              onPause: controls.pause,
              onResume: controls.resume
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_utils_LogsCrossFadeTransition__WEBPACK_IMPORTED_MODULE_12__.LogsCrossFadeTransition, {
        visible: !isLive,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Collapse, {
          label: "Logs",
          loading: loading,
          isOpen: true,
          className: styleOverridesForStickyNavigation,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Logs__WEBPACK_IMPORTED_MODULE_7__.Logs, {
            exploreId: exploreId,
            datasourceType: (_this$props$datasourc = this.props.datasourceInstance) === null || _this$props$datasourc === void 0 ? void 0 : _this$props$datasourc.type,
            logRows: logRows,
            logsMeta: logsMeta,
            logsSeries: logsSeries,
            logsVolumeData: logsVolumeData,
            logsQueries: logsQueries,
            width: width,
            splitOpen: splitOpen,
            loading: loading,
            loadingState: loadingState,
            loadLogsVolumeData: loadLogsVolumeData,
            onChangeTime: this.onChangeTime,
            onClickFilterLabel: onClickFilterLabel,
            onClickFilterOutLabel: onClickFilterOutLabel,
            onStartScanning: onStartScanning,
            onStopScanning: onStopScanning,
            absoluteRange: absoluteRange,
            visibleRange: visibleRange,
            timeZone: timeZone,
            scanning: scanning,
            scanRange: range.raw,
            showContextToggle: this.showContextToggle,
            getRowContext: this.getLogRowContext,
            getFieldLinks: this.getFieldLinks,
            addResultsToCache: () => addResultsToCache(exploreId),
            clearCache: () => clearCache(exploreId)
          })
        })
      })]
    });
  }

}

function mapStateToProps(state, {
  exploreId
}) {
  const explore = state.explore; // @ts-ignore

  const item = explore[exploreId];
  const {
    logsResult,
    loading,
    scanning,
    datasourceInstance,
    isLive,
    isPaused,
    range,
    absoluteRange,
    logsVolumeDataProvider,
    logsVolumeData
  } = item;
  const timeZone = (0,_profile_state_selectors__WEBPACK_IMPORTED_MODULE_5__.getTimeZone)(state.user);
  return {
    loading,
    logRows: logsResult === null || logsResult === void 0 ? void 0 : logsResult.rows,
    logsMeta: logsResult === null || logsResult === void 0 ? void 0 : logsResult.meta,
    logsSeries: logsResult === null || logsResult === void 0 ? void 0 : logsResult.series,
    logsQueries: logsResult === null || logsResult === void 0 ? void 0 : logsResult.queries,
    visibleRange: logsResult === null || logsResult === void 0 ? void 0 : logsResult.visibleRange,
    scanning,
    timeZone,
    datasourceInstance,
    isLive,
    isPaused,
    range,
    absoluteRange,
    logsVolumeDataProvider,
    logsVolumeData
  };
}

const mapDispatchToProps = {
  updateTimeRange: _state_time__WEBPACK_IMPORTED_MODULE_10__.updateTimeRange,
  splitOpen: _state_main__WEBPACK_IMPORTED_MODULE_8__.splitOpen,
  addResultsToCache: _state_query__WEBPACK_IMPORTED_MODULE_9__.addResultsToCache,
  clearCache: _state_query__WEBPACK_IMPORTED_MODULE_9__.clearCache,
  loadLogsVolumeData: _state_query__WEBPACK_IMPORTED_MODULE_9__.loadLogsVolumeData
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(LogsContainer));

/***/ }),

/***/ "./public/app/features/explore/LogsMetaRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsMetaRow": () => (/* binding */ LogsMetaRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_ui_src_components_Logs_LogRowMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Logs/LogRowMessage.tsx");
/* harmony import */ var _MetaInfoText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/explore/MetaInfoText.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;









const LogsMetaRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(({
  meta,
  dedupStrategy,
  dedupCount,
  showDetectedFields,
  clearDetectedFields,
  hasUnescapedContent,
  forceEscape,
  onEscapeNewlines,
  logRows
}) => {
  const logsMetaItem = [...meta]; // Add deduplication info

  if (dedupStrategy !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LogsDedupStrategy.none) {
    logsMetaItem.push({
      label: 'Dedup count',
      value: dedupCount,
      kind: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LogsMetaKind.Number
    });
  } // Add info about limit for highlighting


  if (logRows.some(r => r.entry.length > _grafana_ui_src_components_Logs_LogRowMessage__WEBPACK_IMPORTED_MODULE_3__.MAX_CHARACTERS)) {
    logsMetaItem.push({
      label: 'Info',
      value: 'Logs with more than 100,000 characters could not be parsed and highlighted',
      kind: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LogsMetaKind.String
    });
  } // Add detected fields info


  if ((showDetectedFields === null || showDetectedFields === void 0 ? void 0 : showDetectedFields.length) > 0) {
    logsMetaItem.push({
      label: 'Showing only detected fields',
      value: renderMetaItem(showDetectedFields, _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LogsMetaKind.LabelsMap)
    }, {
      label: '',
      value: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        size: "sm",
        onClick: clearDetectedFields,
        children: "Show original line"
      })
    });
  } // Add unescaped content info


  if (hasUnescapedContent) {
    logsMetaItem.push({
      label: 'Your logs might have incorrectly escaped content',
      value: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        content: "Fix incorrectly escaped newline and tab sequences in log lines. Manually review the results to confirm that the replacements are correct.",
        placement: "right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          size: "sm",
          onClick: onEscapeNewlines,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            children: [forceEscape ? 'Remove escaping' : 'Escape newlines', "\xA0"]
          }), _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "exclamation-triangle",
            className: "muted",
            size: "sm"
          }))]
        })
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: logsMetaItem && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MetaInfoText__WEBPACK_IMPORTED_MODULE_4__.MetaInfoText, {
      metaItems: logsMetaItem.map(item => {
        return {
          label: item.label,
          value: 'kind' in item ? renderMetaItem(item.value, item.kind) : item.value
        };
      })
    })
  });
});
LogsMetaRow.displayName = 'LogsMetaRow';

function renderMetaItem(value, kind) {
  if (kind === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LogsMetaKind.LabelsMap) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "logs-meta-item__labels",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LogLabels, {
        labels: value
      })
    });
  } else if (kind === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LogsMetaKind.Error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "logs-meta-item__error",
      children: value
    });
  }

  return value;
}

/***/ }),

/***/ "./public/app/features/explore/LogsNavigation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _LogsNavigationPages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/explore/LogsNavigationPages.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Spinner, _Spinner2, _Icon;











function LogsNavigation({
  absoluteRange,
  logsSortOrder,
  timeZone,
  loading,
  onChangeTime,
  scrollToTopLogs,
  visibleRange,
  queries,
  clearCache,
  addResultsToCache
}) {
  const [pages, setPages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [currentPageIndex, setCurrentPageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0); // These refs are to determine, if we want to clear up logs navigation when totally new query is run

  const expectedQueriesRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const expectedRangeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(); // This ref is to store range span for future queres based on firstly selected time range
  // e.g. if last 5 min selected, always run 5 min range

  const rangeSpanRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
  const oldestLogsFirst = logsSortOrder === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LogsSortOrder.Ascending;
  const onFirstPage = oldestLogsFirst ? currentPageIndex === pages.length - 1 : currentPageIndex === 0;
  const onLastPage = oldestLogsFirst ? currentPageIndex === 0 : currentPageIndex === pages.length - 1;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  const styles = getStyles(theme, oldestLogsFirst, loading); // Main effect to set pages and index

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const newPage = {
      logsRange: visibleRange,
      queryRange: absoluteRange
    };
    let newPages = []; // We want to start new pagination if queries change or if absolute range is different than expected

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(expectedRangeRef.current, absoluteRange) || !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(expectedQueriesRef.current, queries)) {
      clearCache();
      setPages([newPage]);
      setCurrentPageIndex(0);
      expectedQueriesRef.current = queries;
      rangeSpanRef.current = absoluteRange.to - absoluteRange.from;
    } else {
      setPages(pages => {
        // Remove duplicates with new query
        newPages = pages.filter(page => !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(newPage.queryRange, page.queryRange)); // Sort pages based on logsOrder so they visually align with displayed logs

        newPages = [...newPages, newPage].sort((a, b) => sortPages(a, b, logsSortOrder)); // Set new pages

        return newPages;
      }); // Set current page index

      const index = newPages.findIndex(page => page.queryRange.to === absoluteRange.to);
      setCurrentPageIndex(index);
    }

    addResultsToCache();
  }, [visibleRange, absoluteRange, logsSortOrder, queries, clearCache, addResultsToCache]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    clearCache(); // We can't enforce the eslint rule here because we only want to run when component is mounted.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTime = ({
    from,
    to
  }) => {
    expectedRangeRef.current = {
      from,
      to
    };
    onChangeTime({
      from,
      to
    });
  };

  const sortPages = (a, b, logsSortOrder) => {
    if (logsSortOrder === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LogsSortOrder.Ascending) {
      return a.queryRange.to > b.queryRange.to ? 1 : -1;
    }

    return a.queryRange.to > b.queryRange.to ? -1 : 1;
  };

  const olderLogsButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
    "data-testid": "olderLogsButton",
    className: styles.navButton,
    variant: "secondary",
    onClick: () => {
      //If we are not on the last page, use next page's range
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)('grafana_explore_logs_pagination_clicked', {
        pageType: 'olderLogsButton'
      });

      if (!onLastPage) {
        const indexChange = oldestLogsFirst ? -1 : 1;
        changeTime({
          from: pages[currentPageIndex + indexChange].queryRange.from,
          to: pages[currentPageIndex + indexChange].queryRange.to
        });
      } else {
        //If we are on the last page, create new range
        changeTime({
          from: visibleRange.from - rangeSpanRef.current,
          to: visibleRange.from
        });
      }
    },
    disabled: loading,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.navButtonContent,
      children: [loading ? _Spinner || (_Spinner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Spinner, {})) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
        name: oldestLogsFirst ? 'angle-up' : 'angle-down',
        size: "lg"
      }), "Older logs"]
    })
  });

  const newerLogsButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
    "data-testid": "newerLogsButton",
    className: styles.navButton,
    variant: "secondary",
    onClick: () => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)('grafana_explore_logs_pagination_clicked', {
        pageType: 'newerLogsButton'
      }); //If we are not on the first page, use previous page's range

      if (!onFirstPage) {
        const indexChange = oldestLogsFirst ? 1 : -1;
        changeTime({
          from: pages[currentPageIndex + indexChange].queryRange.from,
          to: pages[currentPageIndex + indexChange].queryRange.to
        });
      } //If we are on the first page, button is disabled and we do nothing

    },
    disabled: loading || onFirstPage,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.navButtonContent,
      children: [loading && (_Spinner2 || (_Spinner2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Spinner, {}))), onFirstPage || loading ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
        name: oldestLogsFirst ? 'angle-down' : 'angle-up',
        size: "lg"
      }), onFirstPage ? 'Start of range' : 'Newer logs']
    })
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: styles.navContainer,
    children: [oldestLogsFirst ? olderLogsButton : newerLogsButton, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LogsNavigationPages__WEBPACK_IMPORTED_MODULE_6__.LogsNavigationPages, {
      pages: pages,
      currentPageIndex: currentPageIndex,
      oldestLogsFirst: oldestLogsFirst,
      timeZone: timeZone,
      loading: loading,
      changeTime: changeTime
    }), oldestLogsFirst ? newerLogsButton : olderLogsButton, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
      "data-testid": "scrollToTop",
      className: styles.scrollToTopButton,
      variant: "secondary",
      onClick: scrollToTopLogs,
      title: "Scroll to top",
      children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
        name: "arrow-up",
        size: "lg"
      }))
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(LogsNavigation));

const getStyles = (theme, oldestLogsFirst, loading) => {
  return {
    navContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-height: 95vh;
      display: flex;
      flex-direction: column;
      justify-content: ${oldestLogsFirst ? 'flex-start' : 'space-between'};
      position: sticky;
      top: ${theme.spacing(2)};
      right: 0;
    `,
    navButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 58px;
      height: 68px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1;
    `,
    navButtonContent: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      white-space: normal;
    `,
    scrollToTopButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: ${theme.spacing(1)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/explore/LogsNavigationPages.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsNavigationPages": () => (/* binding */ LogsNavigationPages)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Spinner;








function LogsNavigationPages({
  pages,
  currentPageIndex,
  oldestLogsFirst,
  timeZone,
  loading,
  changeTime
}) {
  const formatTime = time => {
    return `${(0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(time, {
      format: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.systemDateFormats.interval.second,
      timeZone: timeZone
    })}`;
  };

  const createPageContent = (page, index) => {
    if (currentPageIndex === index && loading) {
      return _Spinner || (_Spinner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}));
    }

    const topContent = formatTime(oldestLogsFirst ? page.logsRange.from : page.logsRange.to);
    const bottomContent = formatTime(oldestLogsFirst ? page.logsRange.to : page.logsRange.from);
    return `${topContent} — ${bottomContent}`;
  };

  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const styles = getStyles(theme, loading);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CustomScrollbar, {
    autoHide: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.pagesWrapper,
      "data-testid": "logsNavigationPages",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: styles.pagesContainer,
        children: pages.map((page, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          "data-testid": `page${index + 1}`,
          className: styles.page,
          onClick: () => {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)('grafana_explore_logs_pagination_clicked', {
              pageType: 'page',
              pageNumber: index + 1
            });
            !loading && changeTime({
              from: page.queryRange.from,
              to: page.queryRange.to
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.line, {
              selectedBg: currentPageIndex === index
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.time, {
              selectedText: currentPageIndex === index
            }),
            children: createPageContent(page, index)
          })]
        }, page.queryRange.to))
      })
    })
  });
}

const getStyles = (theme, loading) => {
  return {
    pagesWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      height: 100%;
      padding-left: ${theme.spacing(0.5)};
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      &::after {
        content: '';
        display: block;
        background: repeating-linear-gradient(
          135deg,
          ${theme.colors.background.primary},
          ${theme.colors.background.primary} 5px,
          ${theme.colors.background.secondary} 5px,
          ${theme.colors.background.secondary} 15px
        );
        width: 3px;
        height: inherit;
        margin-bottom: 8px;
      }
    `,
    pagesContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      padding: 0;
      flex-direction: column;
    `,
    page: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      margin: ${theme.spacing(2)} 0;
      cursor: ${loading ? 'auto' : 'pointer'};
      white-space: normal;
      .selectedBg {
        background: ${theme.colors.primary.main};
      }
      .selectedText {
        color: ${theme.colors.primary.main};
      }
    `,
    line: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 3px;
      height: 100%;
      align-items: center;
      background: ${theme.colors.text.secondary};
    `,
    time: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 60px;
      min-height: 80px;
      font-size: ${theme.v1.typography.size.sm};
      padding-left: ${theme.spacing(0.5)};
      display: flex;
      align-items: center;
    `
  };
};

/***/ }),

/***/ "./public/app/features/explore/LogsVolumePanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsVolumePanel": () => (/* binding */ LogsVolumePanel)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _ExploreGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/explore/ExploreGraph.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _span2;








const SHORT_ERROR_MESSAGE_LIMIT = 100;

function ErrorAlert(props) {
  var _props$error$data;

  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // generic get-error-message-logic, taken from
  // /public/app/features/explore/ErrorContainer.tsx

  const message = props.error.message || ((_props$error$data = props.error.data) === null || _props$error$data === void 0 ? void 0 : _props$error$data.message) || '';
  const showButton = !isOpen && message.length > SHORT_ERROR_MESSAGE_LIMIT;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
    title: "Failed to load log volume for this query",
    severity: "warning",
    children: showButton ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "secondary",
      size: "xs",
      onClick: () => {
        setIsOpen(true);
      },
      children: "Show details"
    }) : message
  });
}

function createVisualisationData(logLinesBased, logLinesBasedVisibleRange, fullRangeData, absoluteRange) {
  if (fullRangeData !== undefined) {
    return {
      logsVolumeData: fullRangeData,
      fullRangeData: true,
      range: absoluteRange
    };
  }

  if (logLinesBased !== undefined) {
    return {
      logsVolumeData: logLinesBased,
      fullRangeData: false,
      range: logLinesBasedVisibleRange || absoluteRange
    };
  }

  return undefined;
}

function LogsVolumePanel(props) {
  const {
    width,
    timeZone,
    splitOpen,
    onUpdateTimeRange,
    onLoadLogsVolume,
    onHiddenSeriesChanged
  } = props;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const spacing = parseInt(theme.spacing(2).slice(0, -2), 10);
  const height = 150;
  const data = createVisualisationData(props.logLinesBasedData, props.logLinesBasedDataVisibleRange, props.logsVolumeData, props.absoluteRange);

  if (data === undefined) {
    return null;
  }

  const {
    logsVolumeData,
    fullRangeData,
    range
  } = data;

  if (logsVolumeData.error !== undefined) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ErrorAlert, {
      error: logsVolumeData.error
    });
  }

  let LogsVolumePanelContent;

  if ((logsVolumeData === null || logsVolumeData === void 0 ? void 0 : logsVolumeData.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading) {
    LogsVolumePanelContent = _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      children: "Log volume is loading..."
    }));
  } else if (logsVolumeData !== null && logsVolumeData !== void 0 && logsVolumeData.data) {
    if (logsVolumeData.data.length > 0) {
      LogsVolumePanelContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ExploreGraph__WEBPACK_IMPORTED_MODULE_4__.ExploreGraph, {
        graphStyle: "lines",
        loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Done,
        data: logsVolumeData.data,
        height: height,
        width: width - spacing,
        absoluteRange: range,
        onChangeTime: onUpdateTimeRange,
        timeZone: timeZone,
        splitOpenFn: splitOpen,
        tooltipDisplayMode: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TooltipDisplayMode.Multi,
        onHiddenSeriesChanged: onHiddenSeriesChanged
      });
    } else {
      LogsVolumePanelContent = _span2 || (_span2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "No volume data."
      }));
    }
  }

  let extraInfo;

  if (fullRangeData) {
    const zoomRatio = logsLevelZoomRatio(logsVolumeData, range);

    if (zoomRatio !== undefined && zoomRatio < 1) {
      extraInfo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Reload log volume",
        transparent: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          size: "xs",
          icon: "sync",
          variant: "secondary",
          onClick: onLoadLogsVolume,
          id: "reload-volume"
        })
      });
    }
  } else {
    extraInfo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.oldInfoText,
      children: "This datasource does not support full-range histograms. The graph is based on the logs seen in the response."
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Collapse, {
    label: "",
    isOpen: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      style: {
        height
      },
      className: styles.contentContainer,
      children: LogsVolumePanelContent
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.extraInfoContainer,
      children: extraInfo
    })]
  });
}

const getStyles = theme => {
  return {
    extraInfoContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: end;
      position: absolute;
      right: 5px;
      top: 5px;
    `,
    contentContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    oldInfoText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.size.sm};
      color: ${theme.colors.text.secondary};
    `
  };
};

function logsLevelZoomRatio(logsVolumeData, selectedTimeRange) {
  var _logsVolumeData$data$, _logsVolumeData$data$2;

  const dataRange = logsVolumeData && logsVolumeData.data[0] && ((_logsVolumeData$data$ = logsVolumeData.data[0].meta) === null || _logsVolumeData$data$ === void 0 ? void 0 : (_logsVolumeData$data$2 = _logsVolumeData$data$.custom) === null || _logsVolumeData$data$2 === void 0 ? void 0 : _logsVolumeData$data$2.absoluteRange);
  return dataRange ? (selectedTimeRange.from - selectedTimeRange.to) / (dataRange.from - dataRange.to) : undefined;
}

/***/ }),

/***/ "./public/app/features/explore/MetaInfoText.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaInfoText": () => (/* binding */ MetaInfoText)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const getStyles = theme => ({
  metaContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing(2)};
    min-width: 30%;
    display: flex;
    flex-wrap: wrap;
  `,
  metaItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(2)};
    margin-top: ${theme.spacing(0.5)};
    display: flex;
    align-items: baseline;

    .logs-meta-item__error {
      color: ${theme.colors.error.text};
    }
  `,
  metaLabel: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: calc(${theme.spacing(2)} / 2);
    font-size: ${theme.typography.bodySmall.fontSize};
    font-weight: ${theme.typography.fontWeightMedium};
  `,
  metaValue: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.typography.fontFamilyMonospace};
    font-size: ${theme.typography.bodySmall.fontSize};
  `
});

const MetaInfoItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function MetaInfoItem(props) {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    label,
    value
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    "data-testid": "meta-info-text-item",
    className: style.metaItem,
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
      className: style.metaLabel,
      children: [label, ":"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: style.metaValue,
      children: value
    })]
  });
});
const MetaInfoText = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function MetaInfoText(props) {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    metaItems
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: style.metaContainer,
    "data-testid": "meta-info-text",
    children: metaItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MetaInfoItem, {
      label: item.label,
      value: item.value
    }, `${index}-${item.label}`))
  });
});

/***/ }),

/***/ "./public/app/features/explore/NoData.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoData": () => (/* binding */ NoData)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const NoData = () => {
  const css = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.PanelContainer, {
      "data-testid": "explore-no-data",
      className: css.wrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: css.message,
        children: 'No data'
      })
    })
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: no-data-card;
    padding: ${theme.spacing(3)};
    background: ${theme.colors.background.primary};
    border-radius: ${theme.shape.borderRadius(2)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  `,
  message: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: ${theme.typography.h2.fontSize};
    padding: ${theme.spacing(4)};
    color: ${theme.colors.text.disabled};
  `
});

/***/ }),

/***/ "./public/app/features/explore/NoDataSourceCallToAction.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoDataSourceCallToAction": () => (/* binding */ NoDataSourceCallToAction)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _a;









const NoDataSourceCallToAction = () => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const canCreateDataSource = app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.DataSourcesCreate) && app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.DataSourcesWrite);
  const message = 'Explore requires at least one data source. Once you have added a data source, you can query it here.';

  const footer = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "rocket"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: " ProTip: You can also define data sources through configuration files. "
    }), _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
      href: "http://docs.grafana.org/administration/provisioning/#datasources?utm_source=explore",
      target: "_blank",
      rel: "noreferrer",
      className: "text-link",
      children: "Learn more"
    }))]
  });

  const ctaElement = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
    size: "lg",
    href: "datasources/new",
    icon: "database",
    disabled: !canCreateDataSource,
    children: "Add data source"
  });

  const cardClassName = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: ${theme.breakpoints.values.lg}px;
    margin-top: ${theme.spacing(2)};
    align-self: center;
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CallToActionCard, {
    callToActionElement: ctaElement,
    className: cardClassName,
    footer: footer,
    message: message
  });
};

/***/ }),

/***/ "./public/app/features/explore/NodeGraphContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeGraphContainer": () => (/* binding */ NodeGraphContainer),
/* harmony export */   "UnconnectedNodeGraphContainer": () => (/* binding */ UnconnectedNodeGraphContainer)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useToggle.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useWindowSize.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _plugins_panel_nodeGraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/index.ts");
/* harmony import */ var _plugins_panel_nodeGraph_useCategorizeFrames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useCategorizeFrames.ts");
/* harmony import */ var _state_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var _utils_links__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/explore/utils/links.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Badge;














const getStyles = theme => ({
  warningText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: warningText;
    font-size: ${theme.typography.bodySmall.fontSize};
    color: ${theme.colors.text.secondary};
  `
});

function UnconnectedNodeGraphContainer(props) {
  var _nodes$;

  const {
    dataFrames,
    range,
    splitOpen,
    withTraceView
  } = props;
  const getLinks = (0,_utils_links__WEBPACK_IMPORTED_MODULE_8__.useLinks)(range, splitOpen);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles); // This is implicit dependency that is needed for links to work. At some point when replacing variables in the link
  // it requires field to have a display property which is added by the overrides even though we don't add any field
  // overrides in explore.

  const frames = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.applyFieldOverrides)({
    fieldConfig: {
      defaults: {},
      overrides: []
    },
    data: dataFrames,
    // We don't need proper replace here as it is only used in getLinks and we use getFieldLinks
    replaceVariables: value => value,
    theme
  });
  const {
    nodes
  } = (0,_plugins_panel_nodeGraph_useCategorizeFrames__WEBPACK_IMPORTED_MODULE_6__.useCategorizeFrames)(frames);
  const [open, toggleOpen] = (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(false); // Calculate node graph height based on window and top position, with some padding

  const {
    height: windowHeight
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [top, setTop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(250);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (containerRef.current) {
      const {
        top
      } = containerRef.current.getBoundingClientRect();
      setTop(top);
    }
  }, [containerRef]);
  const height = windowHeight - top - 32;
  const countWarning = withTraceView && ((_nodes$ = nodes[0]) === null || _nodes$ === void 0 ? void 0 : _nodes$.length) > 1000 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
    className: styles.warningText,
    children: [" (", nodes[0].length, " nodes, can be slow to load)"]
  }) : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Collapse, {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
      children: ["Node graph", countWarning, ' ', _Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Badge, {
        text: 'Beta',
        color: 'blue',
        icon: 'rocket',
        tooltip: 'This visualization is in beta'
      }))]
    }),
    collapsible: withTraceView // We allow collapsing this only when it is shown together with trace view.
    ,
    isOpen: withTraceView ? open : true,
    onToggle: withTraceView ? () => toggleOpen() : undefined,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      ref: containerRef,
      style: withTraceView ? {
        height: 500
      } : {
        minHeight: 600,
        height
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_plugins_panel_nodeGraph__WEBPACK_IMPORTED_MODULE_5__.NodeGraph, {
        dataFrames: frames,
        getLinks: getLinks
      })
    })
  });
}

function mapStateToProps(state, {
  exploreId
}) {
  return {
    range: state.explore[exploreId].range
  };
}

const mapDispatchToProps = {
  splitOpen: _state_main__WEBPACK_IMPORTED_MODULE_7__.splitOpen
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
const NodeGraphContainer = connector(UnconnectedNodeGraphContainer);

/***/ }),

/***/ "./public/app/features/explore/QueryRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryRows": () => (/* binding */ QueryRows)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_utils_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/query.ts");
/* harmony import */ var _plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var _query_components_QueryEditorRows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/query/components/QueryEditorRows.tsx");
/* harmony import */ var _state_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/explore/state/query.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/explore/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const makeSelectors = exploreId => {
  const exploreItemSelector = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_7__.getExploreItemSelector)(exploreId);
  return {
    getQueries: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.createSelector)(exploreItemSelector, s => s.queries),
    getQueryResponse: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.createSelector)(exploreItemSelector, s => s.queryResponse),
    getHistory: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.createSelector)(exploreItemSelector, s => s.history),
    getEventBridge: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.createSelector)(exploreItemSelector, s => s.eventBridge),
    getDatasourceInstanceSettings: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.createSelector)(exploreItemSelector, s => {
      var _datasourceInstance;

      return (0,_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__.getDatasourceSrv)().getInstanceSettings((_datasourceInstance = s.datasourceInstance) === null || _datasourceInstance === void 0 ? void 0 : _datasourceInstance.uid);
    })
  };
};

const QueryRows = ({
  exploreId
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    getQueries,
    getDatasourceInstanceSettings,
    getQueryResponse,
    getHistory,
    getEventBridge
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => makeSelectors(exploreId), [exploreId]);
  const queries = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getQueries);
  const dsSettings = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getDatasourceInstanceSettings);
  const queryResponse = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getQueryResponse);
  const history = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getHistory);
  const eventBridge = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getEventBridge);
  const onRunQueries = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch((0,_state_query__WEBPACK_IMPORTED_MODULE_6__.runQueries)(exploreId));
  }, [dispatch, exploreId]);
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newQueries => {
    dispatch((0,_state_query__WEBPACK_IMPORTED_MODULE_6__.changeQueriesAction)({
      queries: newQueries,
      exploreId
    })); // if we are removing a query we want to run the remaining ones

    if (newQueries.length < queries.length) {
      onRunQueries();
    }
  }, [dispatch, exploreId, onRunQueries, queries]);
  const onAddQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(query => {
    onChange([...queries, Object.assign({}, query, {
      refId: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_3__.getNextRefIdChar)(queries)
    })]);
  }, [onChange, queries]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_query_components_QueryEditorRows__WEBPACK_IMPORTED_MODULE_5__.QueryEditorRows, {
    dsSettings: dsSettings,
    queries: queries,
    onQueriesChange: onChange,
    onAddQuery: onAddQuery,
    onRunQueries: onRunQueries,
    data: queryResponse,
    app: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.Explore,
    history: history,
    eventBus: eventBridge
  });
};

/***/ }),

/***/ "./public/app/features/explore/ResponseErrorContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponseErrorContainer": () => (/* binding */ ResponseErrorContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _ErrorContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/explore/ErrorContainer.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function ResponseErrorContainer(props) {
  const queryResponse = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {
    var _state$explore$props$;

    return (_state$explore$props$ = state.explore[props.exploreId]) === null || _state$explore$props$ === void 0 ? void 0 : _state$explore$props$.queryResponse;
  });
  const queryError = (queryResponse === null || queryResponse === void 0 ? void 0 : queryResponse.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Error ? queryResponse === null || queryResponse === void 0 ? void 0 : queryResponse.error : undefined; // Errors with ref ids are shown below the corresponding query

  if (queryError !== null && queryError !== void 0 && queryError.refId) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ErrorContainer__WEBPACK_IMPORTED_MODULE_3__.ErrorContainer, {
    queryError: queryError
  });
}

/***/ }),

/***/ "./public/app/features/explore/RichHistory/RichHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichHistory": () => (/* binding */ RichHistory),
/* harmony export */   "Tabs": () => (/* binding */ Tabs),
/* harmony export */   "getSortOrderOptions": () => (/* binding */ getSortOrderOptions)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/richHistory.ts");
/* harmony import */ var _core_history_richHistoryStorageProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/history/richHistoryStorageProvider.ts");
/* harmony import */ var _RichHistoryQueriesTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/explore/RichHistory/RichHistoryQueriesTab.tsx");
/* harmony import */ var _RichHistorySettingsTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/explore/RichHistory/RichHistorySettingsTab.tsx");
/* harmony import */ var _RichHistoryStarredTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/explore/RichHistory/RichHistoryStarredTab.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










let Tabs;

(function (Tabs) {
  Tabs["RichHistory"] = "Query history";
  Tabs["Starred"] = "Starred";
  Tabs["Settings"] = "Settings";
})(Tabs || (Tabs = {}));

const getSortOrderOptions = () => [{
  label: 'Newest first',
  value: app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_3__.SortOrder.Descending
}, {
  label: 'Oldest first',
  value: app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_3__.SortOrder.Ascending
}, {
  label: 'Data source A-Z',
  value: app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_3__.SortOrder.DatasourceAZ
}, {
  label: 'Data source Z-A',
  value: app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_3__.SortOrder.DatasourceZA
}].filter(option => (0,_core_history_richHistoryStorageProvider__WEBPACK_IMPORTED_MODULE_4__.supportedFeatures)().availableFilters.includes(option.value));

class UnThemedRichHistory extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loading: false
    });

    _defineProperty(this, "updateSettings", settingsToUpdate => {
      this.props.updateHistorySettings(Object.assign({}, this.props.richHistorySettings, settingsToUpdate));
    });

    _defineProperty(this, "updateFilters", filtersToUpdate => {
      const filters = Object.assign({}, this.props.richHistorySearchFilters, filtersToUpdate, {
        page: 1 // always load fresh results when updating filters

      });
      this.props.updateHistorySearchFilters(this.props.exploreId, filters);
      this.loadRichHistory();
    });

    _defineProperty(this, "clearResults", () => {
      this.props.clearRichHistoryResults(this.props.exploreId);
    });

    _defineProperty(this, "loadRichHistory", (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {
      this.props.loadRichHistory(this.props.exploreId);
      this.setState({
        loading: true
      });
    }, 300));

    _defineProperty(this, "onChangeRetentionPeriod", retentionPeriod => {
      if (retentionPeriod.value !== undefined) {
        this.updateSettings({
          retentionPeriod: retentionPeriod.value
        });
      }
    });

    _defineProperty(this, "toggleStarredTabAsFirstTab", () => this.updateSettings({
      starredTabAsFirstTab: !this.props.richHistorySettings.starredTabAsFirstTab
    }));

    _defineProperty(this, "toggleActiveDatasourceOnly", () => this.updateSettings({
      activeDatasourceOnly: !this.props.richHistorySettings.activeDatasourceOnly
    }));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.richHistory !== this.props.richHistory) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const {
      richHistory,
      richHistoryTotal,
      height,
      exploreId,
      deleteRichHistory,
      onClose,
      firstTab,
      activeDatasourceInstance
    } = this.props;
    const {
      loading
    } = this.state;
    const QueriesTab = {
      label: 'Query history',
      value: Tabs.RichHistory,
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RichHistoryQueriesTab__WEBPACK_IMPORTED_MODULE_5__.RichHistoryQueriesTab, {
        queries: richHistory,
        totalQueries: richHistoryTotal || 0,
        loading: loading,
        updateFilters: this.updateFilters,
        clearRichHistoryResults: () => this.props.clearRichHistoryResults(this.props.exploreId),
        loadMoreRichHistory: () => this.props.loadMoreRichHistory(this.props.exploreId),
        activeDatasourceInstance: activeDatasourceInstance,
        richHistorySettings: this.props.richHistorySettings,
        richHistorySearchFilters: this.props.richHistorySearchFilters,
        exploreId: exploreId,
        height: height
      }),
      icon: 'history'
    };
    const StarredTab = {
      label: 'Starred',
      value: Tabs.Starred,
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RichHistoryStarredTab__WEBPACK_IMPORTED_MODULE_7__.RichHistoryStarredTab, {
        queries: richHistory,
        totalQueries: richHistoryTotal || 0,
        loading: loading,
        activeDatasourceInstance: activeDatasourceInstance,
        updateFilters: this.updateFilters,
        clearRichHistoryResults: () => this.props.clearRichHistoryResults(this.props.exploreId),
        loadMoreRichHistory: () => this.props.loadMoreRichHistory(this.props.exploreId),
        richHistorySettings: this.props.richHistorySettings,
        richHistorySearchFilters: this.props.richHistorySearchFilters,
        exploreId: exploreId
      }),
      icon: 'star'
    };
    const SettingsTab = {
      label: 'Settings',
      value: Tabs.Settings,
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RichHistorySettingsTab__WEBPACK_IMPORTED_MODULE_6__.RichHistorySettingsTab, {
        retentionPeriod: this.props.richHistorySettings.retentionPeriod,
        starredTabAsFirstTab: this.props.richHistorySettings.starredTabAsFirstTab,
        activeDatasourceOnly: this.props.richHistorySettings.activeDatasourceOnly,
        onChangeRetentionPeriod: this.onChangeRetentionPeriod,
        toggleStarredTabAsFirstTab: this.toggleStarredTabAsFirstTab,
        toggleactiveDatasourceOnly: this.toggleActiveDatasourceOnly,
        deleteRichHistory: deleteRichHistory
      }),
      icon: 'sliders-v-alt'
    };
    let tabs = [QueriesTab, StarredTab, SettingsTab];
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TabbedContainer, {
      tabs: tabs,
      onClose: onClose,
      defaultTab: firstTab,
      closeIconTooltip: "Close query history"
    });
  }

}

const RichHistory = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withTheme)(UnThemedRichHistory);

/***/ }),

/***/ "./public/app/features/explore/RichHistory/RichHistoryCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichHistoryCard": () => (/* binding */ RichHistoryCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_utils_explore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/utils/explore.ts");
/* harmony import */ var app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/utils/richHistory.ts");
/* harmony import */ var app_core_utils_shortLinks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/utils/shortLinks.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _state_datasource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/explore/state/datasource.ts");
/* harmony import */ var _state_history__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/explore/state/history.ts");
/* harmony import */ var _state_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/explore/state/query.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



















function mapStateToProps(state, {
  exploreId
}) {
  const explore = state.explore;
  const {
    datasourceInstance
  } = explore[exploreId];
  return {
    exploreId,
    datasourceInstance
  };
}

const mapDispatchToProps = {
  changeDatasource: _state_datasource__WEBPACK_IMPORTED_MODULE_13__.changeDatasource,
  deleteHistoryItem: _state_history__WEBPACK_IMPORTED_MODULE_14__.deleteHistoryItem,
  commentHistoryItem: _state_history__WEBPACK_IMPORTED_MODULE_14__.commentHistoryItem,
  starHistoryItem: _state_history__WEBPACK_IMPORTED_MODULE_14__.starHistoryItem,
  setQueries: _state_query__WEBPACK_IMPORTED_MODULE_15__.setQueries
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.stylesFactory)((theme, isRemoved) => {
  /* Hard-coded value so all buttons and icons on right side of card are aligned */
  const rigtColumnWidth = '240px';
  const rigtColumnContentWidth = '170px';
  /* If datasource was removed, card will have inactive color */

  const cardColor = theme.colors.bg2;
  return {
    queryCard: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      border: 1px solid ${theme.colors.border1};
      margin: ${theme.spacing.sm} 0;
      background-color: ${cardColor};
      border-radius: ${theme.border.radius.sm};
      .starred {
        color: ${theme.palette.orange};
      }
    `,
    cardRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${theme.spacing.sm};
      border-bottom: none;
      :first-of-type {
        border-bottom: 1px solid ${theme.colors.border1};
        padding: ${theme.spacing.xs} ${theme.spacing.sm};
      }
      img {
        height: ${theme.typography.size.base};
        max-width: ${theme.typography.size.base};
        margin-right: ${theme.spacing.sm};
      }
    `,
    datasourceContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.weight.semibold};
    `,
    queryActionButtons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-width: ${rigtColumnContentWidth};
      display: flex;
      justify-content: flex-end;
      font-size: ${theme.typography.size.base};
      button {
        margin-left: ${theme.spacing.sm};
      }
    `,
    queryContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-weight: ${theme.typography.weight.semibold};
      width: calc(100% - ${rigtColumnWidth});
    `,
    queryRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border-top: 1px solid ${theme.colors.border1};
      word-break: break-all;
      padding: 4px 2px;
      :first-child {
        border-top: none;
        padding: 0 0 4px 0;
      }
    `,
    updateCommentContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: calc(100% + ${rigtColumnWidth});
      margin-top: ${theme.spacing.sm};
    `,
    comment: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      overflow-wrap: break-word;
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.weight.regular};
      margin-top: ${theme.spacing.xs};
    `,
    commentButtonRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      > * {
        margin-right: ${theme.spacing.sm};
      }
    `,
    textArea: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
    `,
    runButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-width: ${rigtColumnContentWidth};
      display: flex;
      justify-content: flex-end;
      button {
        height: auto;
        padding: ${theme.spacing.xs} ${theme.spacing.md};
        line-height: 1.4;
        span {
          white-space: normal !important;
        }
      }
    `
  };
});
function RichHistoryCard(props) {
  var _query$comment;

  const {
    query,
    dsImg,
    isRemoved,
    commentHistoryItem,
    starHistoryItem,
    deleteHistoryItem,
    changeDatasource,
    exploreId,
    datasourceInstance,
    setQueries
  } = props;
  const [activeUpdateComment, setActiveUpdateComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query.comment);
  const [queryDsInstance, setQueryDsInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getQueryDsInstance = async () => {
      const ds = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSrv)().get(query.datasourceName);
      setQueryDsInstance(ds);
    };

    getQueryDsInstance();
  }, [query.datasourceName]);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
  const styles = getStyles(theme, isRemoved);

  const onRunQuery = async () => {
    const queriesToRun = query.queries;
    const differentDataSource = query.datasourceName !== (datasourceInstance === null || datasourceInstance === void 0 ? void 0 : datasourceInstance.name);

    if (differentDataSource) {
      await changeDatasource(exploreId, query.datasourceName, {
        importQueries: true
      });
      setQueries(exploreId, queriesToRun);
    } else {
      setQueries(exploreId, queriesToRun);
    }

    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)('grafana_explore_query_history_run', {
      queryHistoryEnabled: _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.queryHistoryEnabled,
      differentDataSource
    });
  };

  const onCopyQuery = () => {
    const queriesToCopy = query.queries.map(q => (0,app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_9__.createQueryText)(q, queryDsInstance)).join('\n');
    (0,app_core_utils_explore__WEBPACK_IMPORTED_MODULE_8__.copyStringToClipboard)(queriesToCopy);
    (0,app_store_store__WEBPACK_IMPORTED_MODULE_11__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_5__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_7__.createSuccessNotification)('Query copied to clipboard')));
  };

  const onCreateShortLink = async () => {
    const link = (0,app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_9__.createUrlFromRichHistory)(query);
    await (0,app_core_utils_shortLinks__WEBPACK_IMPORTED_MODULE_10__.createAndCopyShortLink)(link);
  };

  const onDeleteQuery = () => {
    const performDelete = queryId => {
      deleteHistoryItem(queryId);
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_11__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_5__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_7__.createSuccessNotification)('Query deleted')));
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)('grafana_explore_query_history_deleted', {
        queryHistoryEnabled: _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.queryHistoryEnabled
      });
    }; // For starred queries, we want confirmation. For non-starred, we don't.


    if (query.starred) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_6__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_12__.ShowConfirmModalEvent({
        title: 'Delete',
        text: 'Are you sure you want to permanently delete your starred query?',
        yesText: 'Delete',
        icon: 'trash-alt',
        onConfirm: () => performDelete(query.id)
      }));
    } else {
      performDelete(query.id);
    }
  };

  const onStarrQuery = () => {
    starHistoryItem(query.id, !query.starred);
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)('grafana_explore_query_history_starred', {
      queryHistoryEnabled: _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.queryHistoryEnabled,
      newValue: !query.starred
    });
  };

  const toggleActiveUpdateComment = () => setActiveUpdateComment(!activeUpdateComment);

  const onUpdateComment = () => {
    commentHistoryItem(query.id, comment);
    setActiveUpdateComment(false);
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)('grafana_explore_query_history_commented', {
      queryHistoryEnabled: _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.queryHistoryEnabled
    });
  };

  const onCancelUpdateComment = () => {
    setActiveUpdateComment(false);
    setComment(query.comment);
  };

  const onKeyDown = keyEvent => {
    if (keyEvent.key === 'Enter' && (keyEvent.shiftKey || keyEvent.ctrlKey)) {
      onUpdateComment();
    }

    if (keyEvent.key === 'Escape') {
      onCancelUpdateComment();
    }
  };

  const updateComment = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    className: styles.updateCommentContainer,
    "aria-label": comment ? 'Update comment form' : 'Add comment form',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextArea, {
      value: comment,
      placeholder: comment ? undefined : 'An optional description of what the query does.',
      onChange: e => setComment(e.currentTarget.value),
      className: styles.textArea
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: styles.commentButtonRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: onUpdateComment,
        "aria-label": "Submit button",
        children: "Save comment"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: "secondary",
        onClick: onCancelUpdateComment,
        children: "Cancel"
      })]
    })]
  });

  const queryActionButtons = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    className: styles.queryActionButtons,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
      name: "comment-alt",
      onClick: toggleActiveUpdateComment,
      title: ((_query$comment = query.comment) === null || _query$comment === void 0 ? void 0 : _query$comment.length) > 0 ? 'Edit comment' : 'Add comment'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
      name: "copy",
      onClick: onCopyQuery,
      title: "Copy query to clipboard"
    }), !isRemoved && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
      name: "share-alt",
      onClick: onCreateShortLink,
      title: "Copy shortened link to clipboard"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
      name: "trash-alt",
      title: 'Delete query',
      onClick: onDeleteQuery
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
      name: query.starred ? 'favorite' : 'star',
      iconType: query.starred ? 'mono' : 'default',
      onClick: onStarrQuery,
      title: query.starred ? 'Unstar query' : 'Star query'
    })]
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    className: styles.queryCard,
    onKeyDown: onKeyDown,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: styles.cardRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: styles.datasourceContainer,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("img", {
          src: dsImg,
          "aria-label": "Data source icon"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          "aria-label": "Data source name",
          children: isRemoved ? 'Data source does not exist anymore' : query.datasourceName
        })]
      }), queryActionButtons]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.cardRow),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: styles.queryContainer,
        children: [query.queries.map((q, i) => {
          const queryText = (0,app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_9__.createQueryText)(q, queryDsInstance);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            "aria-label": "Query text",
            className: styles.queryRow,
            children: queryText
          }, `${q}-${i}`);
        }), !activeUpdateComment && query.comment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          "aria-label": "Query comment",
          className: styles.comment,
          children: query.comment
        }), activeUpdateComment && updateComment]
      }), !activeUpdateComment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: styles.runButton,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "secondary",
          onClick: onRunQuery,
          disabled: isRemoved,
          children: (datasourceInstance === null || datasourceInstance === void 0 ? void 0 : datasourceInstance.name) === query.datasourceName ? 'Run query' : 'Switch data source and run query'
        })
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(RichHistoryCard));

/***/ }),

/***/ "./public/app/features/explore/RichHistory/RichHistoryContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichHistoryContainer": () => (/* binding */ RichHistoryContainer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _ExploreDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/explore/ExploreDrawer.tsx");
/* harmony import */ var _state_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/explore/state/history.ts");
/* harmony import */ var _RichHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/explore/RichHistory/RichHistory.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;

// Libraries



 // Types

// Components, enums


 //Actions



function mapStateToProps(state, {
  exploreId
}) {
  const explore = state.explore; // @ts-ignore

  const item = explore[exploreId];
  const richHistorySearchFilters = item.richHistorySearchFilters;
  const richHistorySettings = explore.richHistorySettings;
  const {
    datasourceInstance
  } = item;
  const firstTab = richHistorySettings !== null && richHistorySettings !== void 0 && richHistorySettings.starredTabAsFirstTab ? _RichHistory__WEBPACK_IMPORTED_MODULE_6__.Tabs.Starred : _RichHistory__WEBPACK_IMPORTED_MODULE_6__.Tabs.RichHistory;
  const {
    richHistory,
    richHistoryTotal
  } = item;
  return {
    richHistory,
    richHistoryTotal,
    firstTab,
    activeDatasourceInstance: datasourceInstance.name,
    richHistorySettings,
    richHistorySearchFilters
  };
}

const mapDispatchToProps = {
  initRichHistory: _state_history__WEBPACK_IMPORTED_MODULE_5__.initRichHistory,
  loadRichHistory: _state_history__WEBPACK_IMPORTED_MODULE_5__.loadRichHistory,
  loadMoreRichHistory: _state_history__WEBPACK_IMPORTED_MODULE_5__.loadMoreRichHistory,
  clearRichHistoryResults: _state_history__WEBPACK_IMPORTED_MODULE_5__.clearRichHistoryResults,
  updateHistorySettings: _state_history__WEBPACK_IMPORTED_MODULE_5__.updateHistorySettings,
  updateHistorySearchFilters: _state_history__WEBPACK_IMPORTED_MODULE_5__.updateHistorySearchFilters,
  deleteRichHistory: _state_history__WEBPACK_IMPORTED_MODULE_5__.deleteRichHistory
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
function RichHistoryContainer(props) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(theme.components.horizontalDrawer.defaultHeight);
  const {
    richHistory,
    richHistoryTotal,
    width,
    firstTab,
    activeDatasourceInstance,
    exploreId,
    deleteRichHistory,
    initRichHistory,
    loadRichHistory,
    loadMoreRichHistory,
    clearRichHistoryResults,
    richHistorySettings,
    updateHistorySettings,
    richHistorySearchFilters,
    updateHistorySearchFilters,
    onClose
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    initRichHistory();
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.reportInteraction)('grafana_explore_query_history_opened', {
      queryHistoryEnabled: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.queryHistoryEnabled
    });
  }, [initRichHistory]);

  if (!richHistorySettings) {
    return _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      children: "Loading..."
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ExploreDrawer__WEBPACK_IMPORTED_MODULE_4__.ExploreDrawer, {
    width: width,
    onResize: (_e, _dir, ref) => {
      setHeight(Number(ref.style.height.slice(0, -2)));
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_RichHistory__WEBPACK_IMPORTED_MODULE_6__.RichHistory, {
      richHistory: richHistory,
      richHistoryTotal: richHistoryTotal,
      firstTab: firstTab,
      activeDatasourceInstance: activeDatasourceInstance,
      exploreId: exploreId,
      onClose: onClose,
      height: height,
      deleteRichHistory: deleteRichHistory,
      richHistorySettings: richHistorySettings,
      richHistorySearchFilters: richHistorySearchFilters,
      updateHistorySettings: updateHistorySettings,
      updateHistorySearchFilters: updateHistorySearchFilters,
      loadRichHistory: loadRichHistory,
      loadMoreRichHistory: loadMoreRichHistory,
      clearRichHistoryResults: clearRichHistoryResults
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(RichHistoryContainer));

/***/ }),

/***/ "./public/app/features/explore/RichHistory/RichHistoryQueriesTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichHistoryQueriesTab": () => (/* binding */ RichHistoryQueriesTab)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/utils/richHistory.ts");
/* harmony import */ var _RichHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/explore/RichHistory/RichHistory.tsx");
/* harmony import */ var _RichHistoryCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/explore/RichHistory/RichHistoryCard.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _div, _span2;










const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.stylesFactory)((theme, height) => {
  const bgColor = theme.isLight ? theme.palette.gray5 : theme.palette.dark4;
  /* 134px is based on the width of the Query history tabs bar, so the content is aligned to right side of the tab */

  const cardWidth = '100% - 134px';
  const sliderHeight = `${height - 180}px`;
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      .label-slider {
        font-size: ${theme.typography.size.sm};
        &:last-of-type {
          margin-top: ${theme.spacing.lg};
        }
        &:first-of-type {
          font-weight: ${theme.typography.weight.semibold};
          margin-bottom: ${theme.spacing.md};
        }
      }
    `,
    containerContent: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: calc(${cardWidth});
    `,
    containerSlider: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 129px;
      margin-right: ${theme.spacing.sm};
      .slider {
        bottom: 10px;
        height: ${sliderHeight};
        width: 129px;
        padding: ${theme.spacing.sm} 0;
      }
    `,
    slider: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      position: fixed;
    `,
    selectors: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `,
    filterInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing.sm};
    `,
    multiselect: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
      margin-bottom: ${theme.spacing.sm};
      .gf-form-select-box__multi-value {
        background-color: ${bgColor};
        padding: ${theme.spacing.xxs} ${theme.spacing.xs} ${theme.spacing.xxs} ${theme.spacing.sm};
        border-radius: ${theme.border.radius.sm};
      }
    `,
    sort: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 170px;
    `,
    sessionName: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: ${theme.spacing.lg};
      h4 {
        margin: 0 10px 0 0;
      }
    `,
    heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.heading.h4};
      margin: ${theme.spacing.md} ${theme.spacing.xxs} ${theme.spacing.sm} ${theme.spacing.xxs};
    `,
    footer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      height: 60px;
      margin: ${theme.spacing.lg} auto;
      display: flex;
      justify-content: center;
      font-weight: ${theme.typography.weight.light};
      font-size: ${theme.typography.size.sm};
      a {
        font-weight: ${theme.typography.weight.semibold};
        margin-left: ${theme.spacing.xxs};
      }
    `,
    queries: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.weight.regular};
      margin-left: ${theme.spacing.xs};
    `
  };
});
function RichHistoryQueriesTab(props) {
  const {
    queries,
    totalQueries,
    loading,
    richHistorySearchFilters,
    updateFilters,
    clearRichHistoryResults,
    loadMoreRichHistory,
    richHistorySettings,
    exploreId,
    height,
    activeDatasourceInstance
  } = props;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  const styles = getStyles(theme, height);
  const listOfDatasources = (0,app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_4__.createDatasourcesList)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const datasourceFilters = !richHistorySettings.activeDatasourceOnly && richHistorySettings.lastUsedDatasourceFilters ? richHistorySettings.lastUsedDatasourceFilters : [activeDatasourceInstance];
    const filters = {
      search: '',
      sortOrder: app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_4__.SortOrder.Descending,
      datasourceFilters,
      from: 0,
      to: richHistorySettings.retentionPeriod,
      starred: false
    };
    updateFilters(filters);
    return () => {
      clearRichHistoryResults();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!richHistorySearchFilters) {
    return _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      children: "Loading..."
    }));
  }
  /* mappedQueriesToHeadings is an object where query headings (stringified dates/data sources)
   * are keys and arrays with queries that belong to that headings are values.
   */


  const mappedQueriesToHeadings = (0,app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_4__.mapQueriesToHeadings)(queries, richHistorySearchFilters.sortOrder);
  const sortOrderOptions = (0,_RichHistory__WEBPACK_IMPORTED_MODULE_5__.getSortOrderOptions)();
  const partialResults = queries.length && queries.length !== totalQueries;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.containerSlider,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: styles.slider,
        children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "label-slider",
          children: "Filter history"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "label-slider",
          children: (0,app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_4__.mapNumbertoTimeInSlider)(richHistorySearchFilters.from)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "slider",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RangeSlider, {
            tooltipAlwaysVisible: false,
            min: 0,
            max: richHistorySettings.retentionPeriod,
            value: [richHistorySearchFilters.from, richHistorySearchFilters.to],
            orientation: "vertical",
            formatTooltipResult: app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_4__.mapNumbertoTimeInSlider,
            reverse: true,
            onAfterChange: value => {
              updateFilters({
                from: value[0],
                to: value[1]
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "label-slider",
          children: (0,app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_4__.mapNumbertoTimeInSlider)(richHistorySearchFilters.to)
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.containerContent,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: styles.selectors,
        children: [!richHistorySettings.activeDatasourceOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.MultiSelect, {
          className: styles.multiselect,
          options: listOfDatasources.map(ds => {
            return {
              value: ds.name,
              label: ds.name
            };
          }),
          value: richHistorySearchFilters.datasourceFilters,
          placeholder: "Filter queries for data sources(s)",
          "aria-label": "Filter queries for data sources(s)",
          onChange: options => {
            updateFilters({
              datasourceFilters: options.map(option => option.value)
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: styles.filterInput,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FilterInput, {
            placeholder: "Search queries",
            value: richHistorySearchFilters.search,
            onChange: search => updateFilters({
              search
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          "aria-label": "Sort queries",
          className: styles.sort,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            value: sortOrderOptions.filter(order => order.value === richHistorySearchFilters.sortOrder),
            options: sortOrderOptions,
            placeholder: "Sort queries by",
            onChange: e => updateFilters({
              sortOrder: e.value
            })
          })
        })]
      }), loading && (_span2 || (_span2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: "Loading results..."
      }))), !loading && Object.keys(mappedQueriesToHeadings).map(heading => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: styles.heading,
            children: [heading, ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
              className: styles.queries,
              children: [partialResults ? 'Displaying ' : '', mappedQueriesToHeadings[heading].length, " queries"]
            })]
          }), mappedQueriesToHeadings[heading].map(q => {
            const idx = listOfDatasources.findIndex(d => d.name === q.datasourceName);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_RichHistoryCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
              query: q,
              exploreId: exploreId,
              dsImg: idx === -1 ? 'public/img/icn-datasource.svg' : listOfDatasources[idx].imgUrl,
              isRemoved: idx === -1
            }, q.id);
          })]
        }, heading);
      }), partialResults ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        children: ["Showing ", queries.length, " of ", totalQueries, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: loadMoreRichHistory,
          children: "Load more"
        })]
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: styles.footer,
        children: !_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.queryHistoryEnabled ? 'The history is local to your browser and is not shared with others.' : ''
      })]
    })]
  });
}

/***/ }),

/***/ "./public/app/features/explore/RichHistory/RichHistorySettingsTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichHistorySettingsTab": () => (/* binding */ RichHistorySettingsTab)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_history_RichHistoryLocalStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/history/RichHistoryLocalStorage.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _core_history_richHistoryStorageProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/history/richHistoryStorageProvider.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)(theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.size.sm};
      .space-between {
        margin-bottom: ${theme.spacing.lg};
      }
    `,
    input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-width: 200px;
    `
  };
});
const retentionPeriodOptions = [{
  value: 2,
  label: '2 days'
}, {
  value: 5,
  label: '5 days'
}, {
  value: 7,
  label: '1 week'
}, {
  value: 14,
  label: '2 weeks'
}];
function RichHistorySettingsTab(props) {
  const {
    retentionPeriod,
    starredTabAsFirstTab,
    activeDatasourceOnly,
    onChangeRetentionPeriod,
    toggleStarredTabAsFirstTab,
    toggleactiveDatasourceOnly,
    deleteRichHistory
  } = props;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  const styles = getStyles(theme);
  const selectedOption = retentionPeriodOptions.find(v => v.value === retentionPeriod);

  const onDelete = () => {
    app_core_app_events__WEBPACK_IMPORTED_MODULE_4__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_9__.ShowConfirmModalEvent({
      title: 'Delete',
      text: 'Are you sure you want to permanently delete your query history?',
      yesText: 'Delete',
      icon: 'trash-alt',
      onConfirm: () => {
        deleteRichHistory();
        (0,app_store_store__WEBPACK_IMPORTED_MODULE_7__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_3__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.createSuccessNotification)('Query history deleted')));
      }
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: styles.container,
    children: [(0,_core_history_richHistoryStorageProvider__WEBPACK_IMPORTED_MODULE_8__.supportedFeatures)().changeRetention ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      label: "History time span",
      description: `Select the period of time for which Grafana will save your query history. Up to ${app_core_history_RichHistoryLocalStorage__WEBPACK_IMPORTED_MODULE_6__.MAX_HISTORY_ITEMS} entries will be stored.`,
      className: "space-between",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: styles.input,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
          value: selectedOption,
          options: retentionPeriodOptions,
          onChange: onChangeRetentionPeriod
        })
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "info",
      title: "History time span",
      children: ["Grafana will keep entries up to ", selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label, "."]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
      label: "Change the default active tab from \u201CQuery history\u201D to \u201CStarred\u201D",
      className: "space-between",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineSwitch, {
        id: "explore-query-history-settings-default-active-tab",
        value: starredTabAsFirstTab,
        onChange: toggleStarredTabAsFirstTab
      })
    }), (0,_core_history_richHistoryStorageProvider__WEBPACK_IMPORTED_MODULE_8__.supportedFeatures)().onlyActiveDataSource && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
      label: "Only show queries for data source currently active in Explore",
      className: "space-between",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineSwitch, {
        id: "explore-query-history-settings-data-source-behavior",
        value: activeDatasourceOnly,
        onChange: toggleactiveDatasourceOnly
      })
    }), (0,_core_history_richHistoryStorageProvider__WEBPACK_IMPORTED_MODULE_8__.supportedFeatures)().clearHistory && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              font-weight: ${theme.typography.weight.bold};
            `,
        children: "Clear query history"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              margin-bottom: ${theme.spacing.sm};
            `,
        children: "Delete all of your query history, permanently."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "destructive",
        onClick: onDelete,
        children: "Clear query history"
      })]
    })]
  });
}

/***/ }),

/***/ "./public/app/features/explore/RichHistory/RichHistoryStarredTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichHistoryStarredTab": () => (/* binding */ RichHistoryStarredTab)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/utils/richHistory.ts");
/* harmony import */ var _RichHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/explore/RichHistory/RichHistory.tsx");
/* harmony import */ var _RichHistoryCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/explore/RichHistory/RichHistoryCard.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _span2;










const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.stylesFactory)(theme => {
  const bgColor = theme.isLight ? theme.palette.gray5 : theme.palette.dark4;
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
    `,
    containerContent: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
    `,
    selectors: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `,
    multiselect: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
      margin-bottom: ${theme.spacing.sm};
      .gf-form-select-box__multi-value {
        background-color: ${bgColor};
        padding: ${theme.spacing.xxs} ${theme.spacing.xs} ${theme.spacing.xxs} ${theme.spacing.sm};
        border-radius: ${theme.border.radius.sm};
      }
    `,
    filterInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing.sm};
    `,
    sort: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 170px;
    `,
    footer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      height: 60px;
      margin-top: ${theme.spacing.lg};
      display: flex;
      justify-content: center;
      font-weight: ${theme.typography.weight.light};
      font-size: ${theme.typography.size.sm};
      a {
        font-weight: ${theme.typography.weight.semibold};
        margin-left: ${theme.spacing.xxs};
      }
    `
  };
});
function RichHistoryStarredTab(props) {
  const {
    updateFilters,
    clearRichHistoryResults,
    loadMoreRichHistory,
    activeDatasourceInstance,
    richHistorySettings,
    queries,
    totalQueries,
    loading,
    richHistorySearchFilters,
    exploreId
  } = props;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  const styles = getStyles(theme);
  const listOfDatasources = (0,app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_4__.createDatasourcesList)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const datasourceFilters = richHistorySettings.activeDatasourceOnly && richHistorySettings.lastUsedDatasourceFilters ? richHistorySettings.lastUsedDatasourceFilters : [activeDatasourceInstance];
    const filters = {
      search: '',
      sortOrder: app_core_utils_richHistory__WEBPACK_IMPORTED_MODULE_4__.SortOrder.Descending,
      datasourceFilters,
      from: 0,
      to: richHistorySettings.retentionPeriod,
      starred: true
    };
    updateFilters(filters);
    return () => {
      clearRichHistoryResults();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!richHistorySearchFilters) {
    return _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      children: "Loading..."
    }));
  }

  const sortOrderOptions = (0,_RichHistory__WEBPACK_IMPORTED_MODULE_5__.getSortOrderOptions)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: styles.container,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.containerContent,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: styles.selectors,
        children: [!richHistorySettings.activeDatasourceOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.MultiSelect, {
          className: styles.multiselect,
          options: listOfDatasources.map(ds => {
            return {
              value: ds.name,
              label: ds.name
            };
          }),
          value: richHistorySearchFilters.datasourceFilters,
          placeholder: "Filter queries for data sources(s)",
          "aria-label": "Filter queries for data sources(s)",
          onChange: options => {
            updateFilters({
              datasourceFilters: options.map(option => option.value)
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: styles.filterInput,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FilterInput, {
            placeholder: "Search queries",
            value: richHistorySearchFilters.search,
            onChange: search => updateFilters({
              search
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          "aria-label": "Sort queries",
          className: styles.sort,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            value: sortOrderOptions.filter(order => order.value === richHistorySearchFilters.sortOrder),
            options: sortOrderOptions,
            placeholder: "Sort queries by",
            onChange: e => updateFilters({
              sortOrder: e.value
            })
          })
        })]
      }), loading && (_span2 || (_span2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: "Loading results..."
      }))), !loading && queries.map(q => {
        const idx = listOfDatasources.findIndex(d => d.name === q.datasourceName);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_RichHistoryCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
          query: q,
          exploreId: exploreId,
          dsImg: idx === -1 ? 'public/img/icn-datasource.svg' : listOfDatasources[idx].imgUrl,
          isRemoved: idx === -1
        }, q.id);
      }), queries.length && queries.length !== totalQueries ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        children: ["Showing ", queries.length, " of ", totalQueries, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: loadMoreRichHistory,
          children: "Load more"
        })]
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: styles.footer,
        children: !_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.queryHistoryEnabled ? 'The history is local to your browser and is not shared with others.' : ''
      })]
    })
  });
}

/***/ }),

/***/ "./public/app/features/explore/SecondaryActions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondaryActions": () => (/* binding */ SecondaryActions)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const getStyles = theme => {
  return {
    containerMargin: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(2)};
    `
  };
};

function SecondaryActions(props) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const styles = getStyles(theme);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: styles.containerMargin,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
      children: [!props.addQueryRowButtonHidden && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        "aria-label": "Add row button",
        onClick: props.onClickAddQueryRowButton,
        disabled: props.addQueryRowButtonDisabled,
        icon: "plus",
        children: "Add query"
      }), !props.richHistoryRowButtonHidden && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        "aria-label": "Rich history button",
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
          ['explore-active-button']: props.richHistoryButtonActive
        }),
        onClick: props.onClickRichHistoryButton,
        icon: "history",
        children: "Query history"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        "aria-label": "Query inspector button",
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
          ['explore-active-button']: props.queryInspectorButtonActive
        }),
        onClick: props.onClickQueryInspectorButton,
        icon: "info-circle",
        children: "Inspector"
      })]
    })
  });
}

/***/ }),

/***/ "./public/app/features/explore/TableContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableContainer": () => (/* binding */ TableContainer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _MetaInfoText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/explore/MetaInfoText.tsx");
/* harmony import */ var _state_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var _utils_links__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/explore/utils/links.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function mapStateToProps(state, {
  exploreId
}) {
  const explore = state.explore; // @ts-ignore

  const item = explore[exploreId];
  const {
    loading: loadingInState,
    tableResult,
    range
  } = item;
  const loading = tableResult && tableResult.length > 0 ? false : loadingInState;
  return {
    loading,
    tableResult,
    range
  };
}

const mapDispatchToProps = {
  splitOpen: _state_main__WEBPACK_IMPORTED_MODULE_7__.splitOpen
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class TableContainer extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  getTableHeight() {
    const {
      tableResult
    } = this.props;

    if (!tableResult || tableResult.length === 0) {
      return 200;
    } // tries to estimate table height


    return Math.max(Math.min(600, tableResult.length * 35) + 35);
  }

  render() {
    var _dataFrame, _dataFrame2;

    const {
      loading,
      onCellFilterAdded,
      tableResult,
      width,
      splitOpen,
      range,
      ariaLabel,
      timeZone
    } = this.props;
    const height = this.getTableHeight();
    const tableWidth = width - app_core_config__WEBPACK_IMPORTED_MODULE_4__.config.theme.panelPadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_5__.PANEL_BORDER;
    let dataFrame = tableResult;

    if ((_dataFrame = dataFrame) !== null && _dataFrame !== void 0 && _dataFrame.length) {
      dataFrame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.applyFieldOverrides)({
        data: [dataFrame],
        timeZone,
        theme: app_core_config__WEBPACK_IMPORTED_MODULE_4__.config.theme2,
        replaceVariables: v => v,
        fieldConfig: {
          defaults: {},
          overrides: []
        }
      })[0]; // Bit of code smell here. We need to add links here to the frame modifying the frame on every render.
      // Should work fine in essence but still not the ideal way to pass props. In logs container we do this
      // differently and sidestep this getLinks API on a dataframe

      for (const field of dataFrame.fields) {
        field.getLinks = config => {
          return (0,_utils_links__WEBPACK_IMPORTED_MODULE_8__.getFieldLinksForExplore)({
            field,
            rowIndex: config.valueRowIndex,
            splitOpenFn: splitOpen,
            range,
            dataFrame: dataFrame
          });
        };
      }
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Collapse, {
      label: "Table",
      loading: loading,
      isOpen: true,
      children: (_dataFrame2 = dataFrame) !== null && _dataFrame2 !== void 0 && _dataFrame2.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Table, {
        ariaLabel: ariaLabel,
        data: dataFrame,
        width: tableWidth,
        height: height,
        onCellFilterAdded: onCellFilterAdded
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_MetaInfoText__WEBPACK_IMPORTED_MODULE_6__.MetaInfoText, {
        metaItems: [{
          value: '0 series returned'
        }]
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(TableContainer));

/***/ }),

/***/ "./public/app/features/explore/Time.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Time": () => (/* binding */ Time)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const Time = ({
  timeInMs,
  className,
  humanize
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: `elapsed-time ${className}`,
    children: formatTime(timeInMs, humanize)
  });
};

const formatTime = (timeInMs, humanize = false) => {
  const inSeconds = timeInMs / 1000;

  if (!humanize) {
    return `${inSeconds.toFixed(1)}s`;
  }

  const duration = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toDuration)(inSeconds, 'seconds');
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  if (hours) {
    return `${hours}h ${minutes}m ${seconds}s`;
  }

  if (minutes) {
    return `${minutes}m ${seconds}s`;
  }

  return `${seconds}s`;
};

/***/ }),

/***/ "./public/app/features/explore/TimeSyncButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeSyncButton": () => (/* binding */ TimeSyncButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function TimeSyncButton(props) {
  const {
    onClick,
    isSynced
  } = props;

  const syncTimesTooltip = () => {
    const {
      isSynced
    } = props;
    const tooltip = isSynced ? 'Unsync all views' : 'Sync all views to this time range';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: tooltip
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    content: syncTimesTooltip,
    placement: "bottom",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
      icon: "link",
      variant: isSynced ? 'active' : 'default',
      "aria-label": isSynced ? 'Synced times' : 'Unsynced times',
      onClick: onClick
    })
  });
}

/***/ }),

/***/ "./public/app/features/explore/TraceView/TraceViewContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceViewContainer": () => (/* binding */ TraceViewContainer)
/* harmony export */ });
/* harmony import */ var _jaegertracing_jaeger_ui_components_src_TracePageHeader_TracePageSearchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/jaeger-ui-components/src/TracePageHeader/TracePageSearchBar.tsx");
/* harmony import */ var _jaegertracing_jaeger_ui_components_src_TraceTimelineViewer_VirtualizedTraceView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/jaeger-ui-components/src/TraceTimelineViewer/VirtualizedTraceView.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _TraceView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/explore/TraceView/TraceView.tsx");
/* harmony import */ var _useSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/explore/TraceView/useSearch.ts");
/* harmony import */ var _utils_transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/explore/TraceView/utils/transform.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function TraceViewContainer(props) {
  // At this point we only show single trace
  const frame = props.dataFrames[0];
  const {
    dataFrames,
    splitOpenFn,
    exploreId,
    scrollElement,
    topOfViewRef,
    queryResponse
  } = props;
  const traceProp = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_utils_transform__WEBPACK_IMPORTED_MODULE_7__.transformDataFrames)(frame), [frame]);
  const {
    search,
    setSearch,
    spanFindMatches
  } = (0,_useSearch__WEBPACK_IMPORTED_MODULE_6__.useSearch)(traceProp === null || traceProp === void 0 ? void 0 : traceProp.spans);
  const [focusedSpanIdForSearch, setFocusedSpanIdForSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const [searchBarSuffix, setSearchBarSuffix] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const datasource = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => {
    var _state$explore$dataso, _state$explore;

    return (_state$explore$dataso = (_state$explore = state.explore[props.exploreId]) === null || _state$explore === void 0 ? void 0 : _state$explore.datasourceInstance) !== null && _state$explore$dataso !== void 0 ? _state$explore$dataso : undefined;
  });

  if (!traceProp) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_jaegertracing_jaeger_ui_components_src_TracePageHeader_TracePageSearchBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
      navigable: true,
      searchValue: search,
      setSearch: setSearch,
      spanFindMatches: spanFindMatches,
      searchBarSuffix: searchBarSuffix,
      setSearchBarSuffix: setSearchBarSuffix,
      focusedSpanIdForSearch: focusedSpanIdForSearch,
      setFocusedSpanIdForSearch: setFocusedSpanIdForSearch
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Collapse, {
      label: "Trace View",
      isOpen: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_TraceView__WEBPACK_IMPORTED_MODULE_5__.TraceView, {
        exploreId: exploreId,
        dataFrames: dataFrames,
        splitOpenFn: splitOpenFn,
        scrollElement: scrollElement,
        traceProp: traceProp,
        spanFindMatches: spanFindMatches,
        search: search,
        focusedSpanIdForSearch: focusedSpanIdForSearch,
        queryResponse: queryResponse,
        datasource: datasource,
        topOfViewRef: topOfViewRef,
        topOfViewRefType: _jaegertracing_jaeger_ui_components_src_TraceTimelineViewer_VirtualizedTraceView__WEBPACK_IMPORTED_MODULE_1__.TopOfViewRefType.Explore
      })
    })]
  });
}

/***/ }),

/***/ "./public/app/features/explore/Wrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_explore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/explore.ts");
/* harmony import */ var _core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Branding/Branding.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _ExploreActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/explore/ExploreActions.tsx");
/* harmony import */ var _ExplorePaneContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/explore/ExplorePaneContainer.tsx");
/* harmony import */ var _state_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













const mapStateToProps = state => {
  return {
    navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__.getNavModel)(state.navIndex, 'explore'),
    exploreState: state.explore
  };
};

const mapDispatchToProps = {
  resetExploreAction: _state_main__WEBPACK_IMPORTED_MODULE_9__.resetExploreAction,
  richHistoryUpdatedAction: _state_main__WEBPACK_IMPORTED_MODULE_9__.richHistoryUpdatedAction
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);

class WrapperUnconnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  componentWillUnmount() {
    this.props.resetExploreAction({});
  }

  componentDidMount() {
    _state_main__WEBPACK_IMPORTED_MODULE_9__.lastSavedUrl.left = undefined;
    _state_main__WEBPACK_IMPORTED_MODULE_9__.lastSavedUrl.right = undefined; // timeSrv (which is used internally) on init reads `from` and `to` param from the URL and updates itself
    // using those value regardless of what is passed to the init method.
    // The updated value is then used by Explore to get the range for each pane.
    // This means that if `from` and `to` parameters are present in the URL,
    // it would be impossible to change the time range in Explore.
    // We are only doing this on mount for 2 reasons:
    // 1: Doing it on update means we'll enter a render loop.
    // 2: when parsing time in Explore (before feeding it to timeSrv) we make sure `from` is before `to` inside
    //    each pane state in order to not trigger un URL update from timeSrv.

    const searchParams = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.getSearchObject();

    if (searchParams.from || searchParams.to) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({
        from: undefined,
        to: undefined
      }, true);
    }
  }

  componentDidUpdate(prevProps) {
    var _this$props$exploreSt, _this$props$exploreSt2, _this$props$exploreSt3, _this$props$exploreSt4;

    const {
      left,
      right
    } = this.props.queryParams;
    const hasSplit = Boolean(left) && Boolean(right);
    const datasourceTitle = hasSplit ? `${(_this$props$exploreSt = this.props.exploreState.left.datasourceInstance) === null || _this$props$exploreSt === void 0 ? void 0 : _this$props$exploreSt.name} | ${(_this$props$exploreSt2 = this.props.exploreState.right) === null || _this$props$exploreSt2 === void 0 ? void 0 : (_this$props$exploreSt3 = _this$props$exploreSt2.datasourceInstance) === null || _this$props$exploreSt3 === void 0 ? void 0 : _this$props$exploreSt3.name}` : `${(_this$props$exploreSt4 = this.props.exploreState.left.datasourceInstance) === null || _this$props$exploreSt4 === void 0 ? void 0 : _this$props$exploreSt4.name}`;
    const documentTitle = `${this.props.navModel.main.text} - ${datasourceTitle} - ${_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_5__.Branding.AppTitle}`;
    document.title = documentTitle;
  }

  render() {
    const {
      left,
      right
    } = this.props.queryParams;
    const hasSplit = Boolean(left) && Boolean(right);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "page-scrollbar-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ExploreActions__WEBPACK_IMPORTED_MODULE_7__.ExploreActions, {
        exploreIdLeft: app_types_explore__WEBPACK_IMPORTED_MODULE_4__.ExploreId.left,
        exploreIdRight: app_types_explore__WEBPACK_IMPORTED_MODULE_4__.ExploreId.right
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "explore-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ErrorBoundaryAlert, {
          style: "page",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ExplorePaneContainer__WEBPACK_IMPORTED_MODULE_8__.ExplorePaneContainer, {
            split: hasSplit,
            exploreId: app_types_explore__WEBPACK_IMPORTED_MODULE_4__.ExploreId.left,
            urlQuery: left
          })
        }), hasSplit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ErrorBoundaryAlert, {
          style: "page",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ExplorePaneContainer__WEBPACK_IMPORTED_MODULE_8__.ExplorePaneContainer, {
            split: hasSplit,
            exploreId: app_types_explore__WEBPACK_IMPORTED_MODULE_4__.ExploreId.right,
            urlQuery: right
          })
        })]
      })]
    });
  }

}

const Wrapper = connector(WrapperUnconnected);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ "./public/app/features/explore/exploreGraphStyleUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyGraphStyle": () => (/* binding */ applyGraphStyle)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/immer-npm-9.0.14-0baed19a8d-17f1365c06.zip/node_modules/immer/dist/immer.esm.mjs");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/index.ts");


function applyGraphStyle(config, style) {
  return (0,immer__WEBPACK_IMPORTED_MODULE_1__["default"])(config, draft => {
    if (draft.defaults.custom === undefined) {
      draft.defaults.custom = {};
    }

    const {
      custom
    } = draft.defaults;

    if (custom.stacking === undefined) {
      custom.stacking = {
        group: 'A'
      };
    }

    switch (style) {
      case 'lines':
        custom.drawStyle = _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.GraphDrawStyle.Line;
        custom.stacking.mode = _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.StackingMode.None;
        custom.fillOpacity = 0;
        break;

      case 'bars':
        custom.drawStyle = _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.GraphDrawStyle.Bars;
        custom.stacking.mode = _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.StackingMode.None;
        custom.fillOpacity = 100;
        break;

      case 'points':
        custom.drawStyle = _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.GraphDrawStyle.Points;
        custom.stacking.mode = _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.StackingMode.None;
        custom.fillOpacity = 0;
        break;

      case 'stacked_lines':
        custom.drawStyle = _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.GraphDrawStyle.Line;
        custom.stacking.mode = _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.StackingMode.Normal;
        custom.fillOpacity = 100;
        break;

      case 'stacked_bars':
        custom.drawStyle = _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.GraphDrawStyle.Bars;
        custom.stacking.mode = _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.StackingMode.Normal;
        custom.fillOpacity = 100;
        break;

      default:
        {
          // should never happen
          // NOTE: casting to `never` will cause typescript
          // to verify that the switch statement checks every possible
          // enum-value
          const invalidValue = style;
          throw new Error(`Invalid graph-style: ${invalidValue}`);
        }
    }
  });
}

/***/ }),

/***/ "./public/app/features/explore/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getExploreItemSelector": () => (/* binding */ getExploreItemSelector),
/* harmony export */   "isSplit": () => (/* binding */ isSplit)
/* harmony export */ });
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/index.ts");

const isSplit = state => Boolean(state.explore[app_types__WEBPACK_IMPORTED_MODULE_0__.ExploreId.left] && state.explore[app_types__WEBPACK_IMPORTED_MODULE_0__.ExploreId.right]);
const getExploreItemSelector = exploreId => state => state.explore[exploreId];

/***/ }),

/***/ "./public/app/features/explore/useLiveTailControls.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveTailControls": () => (/* binding */ LiveTailControls),
/* harmony export */   "useLiveTailControls": () => (/* binding */ useLiveTailControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/explore/state/query.ts");
/* harmony import */ var _state_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/explore/state/time.ts");





/**
 * Hook that gives you all the functions needed to control the live tailing.
 */

function useLiveTailControls(exploreId) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const pause = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch((0,_state_query__WEBPACK_IMPORTED_MODULE_3__.setPausedStateAction)({
      exploreId,
      isPaused: true
    }));
  }, [exploreId, dispatch]);
  const resume = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch((0,_state_query__WEBPACK_IMPORTED_MODULE_3__.setPausedStateAction)({
      exploreId,
      isPaused: false
    }));
  }, [exploreId, dispatch]);
  const stop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    // We need to pause here first because there is transition where we are not live but live logs are still shown
    // to cross fade with the normal view. This will prevent reordering of the logs in the live view during the
    // transition.
    pause(); // TODO referencing this from perspective of refresh picker when there is designated button for it now is not
    //  great. Needs a bit of refactoring.

    dispatch((0,_state_time__WEBPACK_IMPORTED_MODULE_4__.changeRefreshInterval)(exploreId, _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RefreshPicker.offOption.value));
    dispatch((0,_state_query__WEBPACK_IMPORTED_MODULE_3__.runQueries)(exploreId));
  }, [exploreId, dispatch, pause]);
  const start = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch((0,_state_time__WEBPACK_IMPORTED_MODULE_4__.changeRefreshInterval)(exploreId, _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RefreshPicker.liveOption.value));
  }, [exploreId, dispatch]);
  return {
    pause,
    resume,
    stop,
    start
  };
}

/**
 * If you can't use the hook you can use this as a render prop pattern.
 */
function LiveTailControls(props) {
  const controls = useLiveTailControls(props.exploreId);
  return props.children(controls);
}

/***/ }),

/***/ "./public/app/features/explore/utils/LogsCrossFadeTransition.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsCrossFadeTransition": () => (/* binding */ LogsCrossFadeTransition)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-transition-group-virtual-8df824fae8/0/cache/react-transition-group-npm-4.4.2-5052c30656-b67bf5b3e8.zip/node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const transitionDuration = 500; // We add a bit of delay to the transition as another perf optimisation. As at the start we need to render
// quite a bit of new rows, if we start transition at the same time there can be frame rate drop. This gives time
// for react to first render them and then do the animation.

const transitionDelay = 100;
const getStyles = (0,memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
  return {
    logsEnter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: logsEnter;
      position: absolute;
      opacity: 0;
      height: auto;
      width: 100%;
    `,
    logsEnterActive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: logsEnterActive;
      opacity: 1;
      transition: opacity ${transitionDuration}ms ease-out ${transitionDelay}ms;
    `,
    logsExit: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: logsExit;
      position: absolute;
      opacity: 1;
      height: auto;
      width: 100%;
    `,
    logsExitActive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: logsExitActive;
      opacity: 0;
      transition: opacity ${transitionDuration}ms ease-out ${transitionDelay}ms;
    `
  };
});

/**
 * Cross fade transition component that is tied a bit too much to the logs containers so not very useful elsewhere
 * right now.
 */
function LogsCrossFadeTransition(props) {
  const {
    visible,
    children
  } = props;
  const styles = getStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
    in: visible,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: transitionDuration + transitionDelay,
    classNames: {
      enter: styles.logsEnter,
      enterActive: styles.logsEnterActive,
      exit: styles.logsExit,
      exitActive: styles.logsExitActive
    },
    children: children
  });
}

/***/ }),

/***/ "./public/app/features/inspector/DetailText.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailText": () => (/* binding */ DetailText)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const getStyles = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  margin: 0;
  margin-left: ${theme.spacing.md};
  font-size: ${theme.typography.size.sm};
  color: ${theme.colors.textWeak};
`;

const DetailText = ({
  children
}) => {
  const collapsedTextStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
    className: collapsedTextStyles,
    children: children
  });
};

/***/ }),

/***/ "./public/app/features/inspector/InspectDataOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectDataOptions": () => (/* binding */ InspectDataOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
/* harmony import */ var app_features_inspector_DetailText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/inspector/DetailText.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/inspector/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const InspectDataOptions = ({
  options,
  onOptionsChange,
  panel,
  data,
  dataFrames,
  transformId,
  transformationOptions,
  selectedDataFrame,
  onDataFrameChange,
  downloadForExcel,
  toggleDownloadForExcel
}) => {
  var _panel$plugin;

  const styles = (0,_styles__WEBPACK_IMPORTED_MODULE_5__.getPanelInspectorStyles)();
  const panelTransformations = panel === null || panel === void 0 ? void 0 : panel.getTransformations();
  const showPanelTransformationsOption = Boolean(panelTransformations === null || panelTransformations === void 0 ? void 0 : panelTransformations.length) && transformId !== 'join by time';
  const showFieldConfigsOption = panel && !((_panel$plugin = panel.plugin) !== null && _panel$plugin !== void 0 && _panel$plugin.fieldConfigRegistry.isEmpty());
  let dataSelect = dataFrames;

  if (selectedDataFrame === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataTransformerID.seriesToColumns) {
    dataSelect = data;
  }

  const choices = dataSelect.map((frame, index) => {
    return {
      value: index,
      label: `${(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFrameDisplayName)(frame)} (${index})`
    };
  });
  const selectableOptions = [...transformationOptions, ...choices];

  function getActiveString() {
    let activeString = '';

    if (!data) {
      return activeString;
    }

    const parts = [];

    if (selectedDataFrame === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataTransformerID.seriesToColumns) {
      parts.push('Series joined by time');
    } else if (data.length > 1) {
      parts.push((0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFrameDisplayName)(data[selectedDataFrame]));
    }

    if (options.withTransforms || options.withFieldConfig) {
      if (options.withTransforms) {
        parts.push('Panel transforms');
      }

      if (options.withTransforms && options.withFieldConfig) {}

      if (options.withFieldConfig) {
        parts.push('Formatted data');
      }
    }

    if (downloadForExcel) {
      parts.push('Excel header');
    }

    return parts.join(', ');
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: styles.dataDisplayOptions,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_3__.QueryOperationRow, {
      id: "Data options",
      index: 0,
      title: "Data options",
      headerElement: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_features_inspector_DetailText__WEBPACK_IMPORTED_MODULE_4__.DetailText, {
        children: getActiveString()
      }),
      isOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: styles.options,
        "data-testid": "dataOptions",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
          spacing: "none",
          children: [data.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Show data frame",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
              options: selectableOptions,
              value: selectedDataFrame,
              onChange: onDataFrameChange,
              width: 30,
              "aria-label": "Select dataframe"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
            children: [showPanelTransformationsOption && onOptionsChange && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Apply panel transformations",
              description: "Table data is displayed with transformations defined in the panel Transform tab.",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, {
                value: !!options.withTransforms,
                onChange: () => onOptionsChange(Object.assign({}, options, {
                  withTransforms: !options.withTransforms
                }))
              })
            }), showFieldConfigsOption && onOptionsChange && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Formatted data",
              description: "Table data is formatted with options defined in the Field and Override tabs.",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, {
                id: "formatted-data-toggle",
                value: !!options.withFieldConfig,
                onChange: () => onOptionsChange(Object.assign({}, options, {
                  withFieldConfig: !options.withFieldConfig
                }))
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Download for Excel",
              description: "Adds header to CSV for use with Excel",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, {
                id: "excel-toggle",
                value: downloadForExcel,
                onChange: toggleDownloadForExcel
              })
            })]
          })]
        })
      })
    })
  });
};

/***/ }),

/***/ "./public/app/features/inspector/InspectDataTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectDataTab": () => (/* binding */ InspectDataTab)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/file-saver-npm-2.0.5-2c3bc40d53-c62d96e5ce.zip/node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_logs_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/logs_model.ts");
/* harmony import */ var app_plugins_datasource_jaeger_responseTransform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/jaeger/responseTransform.ts");
/* harmony import */ var app_plugins_datasource_tempo_resultTransformer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/tempo/resultTransformer.ts");
/* harmony import */ var app_plugins_datasource_zipkin_utils_transforms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/zipkin/utils/transforms.ts");
/* harmony import */ var _InspectDataOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/inspector/InspectDataOptions.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/inspector/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















class InspectDataTab extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    var _props$data;

    super(props);

    _defineProperty(this, "exportCsv", (dataFrame, csvConfig = {}) => {
      const {
        panel
      } = this.props;
      const {
        transformId
      } = this.state;
      const dataFrameCsv = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toCSV)([dataFrame], csvConfig);
      const blob = new Blob([String.fromCharCode(0xfeff), dataFrameCsv], {
        type: 'text/csv;charset=utf-8'
      });
      const displayTitle = panel ? panel.getDisplayTitle() : 'Explore';
      const transformation = transformId !== _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DataTransformerID.noop ? '-as-' + transformId.toLocaleLowerCase() : '';
      const fileName = `${displayTitle}-data${transformation}-${(0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dateTimeFormat)(new Date())}.csv`;
      (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(blob, fileName);
    });

    _defineProperty(this, "exportLogsAsTxt", () => {
      var _logsModel$meta;

      const {
        data,
        panel,
        app
      } = this.props;
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)('grafana_logs_download_logs_clicked', {
        app,
        format: 'logs'
      });
      const logsModel = (0,app_core_logs_model__WEBPACK_IMPORTED_MODULE_9__.dataFrameToLogsModel)(data || [], undefined);
      let textToDownload = '';
      (_logsModel$meta = logsModel.meta) === null || _logsModel$meta === void 0 ? void 0 : _logsModel$meta.forEach(metaItem => {
        const string = `${metaItem.label}: ${JSON.stringify(metaItem.value)}\n`;
        textToDownload = textToDownload + string;
      });
      textToDownload = textToDownload + '\n\n';
      logsModel.rows.forEach(row => {
        const newRow = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dateTimeFormatISO)(row.timeEpochMs) + '\t' + row.entry + '\n';
        textToDownload = textToDownload + newRow;
      });
      const blob = new Blob([textToDownload], {
        type: 'text/plain;charset=utf-8'
      });
      const displayTitle = panel ? panel.getDisplayTitle() : 'Explore';
      const fileName = `${displayTitle}-logs-${(0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dateTimeFormat)(new Date())}.txt`;
      (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(blob, fileName);
    });

    _defineProperty(this, "exportTracesAsJson", () => {
      var _df$meta2, _df$meta2$custom;

      const {
        data,
        panel
      } = this.props;

      if (!data) {
        return;
      }

      for (const df of data) {
        var _df$meta;

        // Only export traces
        if (((_df$meta = df.meta) === null || _df$meta === void 0 ? void 0 : _df$meta.preferredVisualisationType) !== 'trace') {
          continue;
        }

        switch ((_df$meta2 = df.meta) === null || _df$meta2 === void 0 ? void 0 : (_df$meta2$custom = _df$meta2.custom) === null || _df$meta2$custom === void 0 ? void 0 : _df$meta2$custom.traceFormat) {
          case 'jaeger':
            {
              let res = (0,app_plugins_datasource_jaeger_responseTransform__WEBPACK_IMPORTED_MODULE_10__.transformToJaeger)(new _grafana_data__WEBPACK_IMPORTED_MODULE_4__.MutableDataFrame(df));
              this.saveTraceJson(res, panel);
              break;
            }

          case 'zipkin':
            {
              let res = (0,app_plugins_datasource_zipkin_utils_transforms__WEBPACK_IMPORTED_MODULE_12__.transformToZipkin)(new _grafana_data__WEBPACK_IMPORTED_MODULE_4__.MutableDataFrame(df));
              this.saveTraceJson(res, panel);
              break;
            }

          case 'otlp':
          default:
            {
              let res = (0,app_plugins_datasource_tempo_resultTransformer__WEBPACK_IMPORTED_MODULE_11__.transformToOTLP)(new _grafana_data__WEBPACK_IMPORTED_MODULE_4__.MutableDataFrame(df));
              this.saveTraceJson(res, panel);
              break;
            }
        }
      }
    });

    _defineProperty(this, "saveTraceJson", (json, panel) => {
      const blob = new Blob([JSON.stringify(json)], {
        type: 'application/json'
      });
      const displayTitle = panel ? panel.getDisplayTitle() : 'Explore';
      const fileName = `${displayTitle}-traces-${(0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dateTimeFormat)(new Date())}.json`;
      (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(blob, fileName);
    });

    _defineProperty(this, "exportServiceGraph", () => {
      const {
        data,
        panel
      } = this.props;

      if (!data) {
        return;
      }

      const blob = new Blob([JSON.stringify(data)], {
        type: 'application/json'
      });
      const displayTitle = panel ? panel.getDisplayTitle() : 'Explore';
      const fileName = `${displayTitle}-service-graph-${(0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dateTimeFormat)(new Date())}.json`;
      (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(blob, fileName);
    });

    _defineProperty(this, "onDataFrameChange", item => {
      this.setState({
        transformId: item.value === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DataTransformerID.seriesToColumns ? _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DataTransformerID.seriesToColumns : _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DataTransformerID.noop,
        dataFrameIndex: typeof item.value === 'number' ? item.value : 0,
        selectedDataFrame: item.value
      });
    });

    _defineProperty(this, "toggleDownloadForExcel", () => {
      this.setState(prevState => ({
        downloadForExcel: !prevState.downloadForExcel
      }));
    });

    this.state = {
      selectedDataFrame: 0,
      dataFrameIndex: 0,
      transformId: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DataTransformerID.noop,
      transformationOptions: buildTransformationOptions(),
      transformedData: (_props$data = props.data) !== null && _props$data !== void 0 ? _props$data : [],
      downloadForExcel: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.data) {
      this.setState({
        transformedData: []
      });
      return;
    }

    if (this.props.options.withTransforms) {
      this.setState({
        transformedData: this.props.data
      });
      return;
    }

    if (prevProps.data !== this.props.data || prevState.transformId !== this.state.transformId) {
      const currentTransform = this.state.transformationOptions.find(item => item.value === this.state.transformId);

      if (currentTransform && currentTransform.transformer.id !== _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DataTransformerID.noop) {
        const selectedDataFrame = this.state.selectedDataFrame;
        const dataFrameIndex = this.state.dataFrameIndex;
        const subscription = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.transformDataFrame)([currentTransform.transformer], this.props.data).subscribe(data => {
          this.setState({
            transformedData: data,
            selectedDataFrame,
            dataFrameIndex
          }, () => subscription.unsubscribe());
        });
        return;
      }

      this.setState({
        transformedData: this.props.data
      });
      return;
    }
  }

  getProcessedData() {
    const {
      options,
      panel,
      timeZone
    } = this.props;
    const data = this.state.transformedData;

    if (!options.withFieldConfig || !panel) {
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.applyRawFieldOverrides)(data);
    } // We need to apply field config even though it was already applied in the PanelQueryRunner.
    // That's because transformers create new fields and data frames, so i.e. display processor is no longer there


    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.applyFieldOverrides)({
      data,
      theme: app_core_config__WEBPACK_IMPORTED_MODULE_8__.config.theme2,
      fieldConfig: panel.fieldConfig,
      timeZone,
      replaceVariables: value => {
        return value;
      }
    });
  }

  render() {
    const {
      isLoading,
      options,
      data,
      panel,
      onOptionsChange,
      app
    } = this.props;
    const {
      dataFrameIndex,
      transformId,
      transformationOptions,
      selectedDataFrame,
      downloadForExcel
    } = this.state;
    const styles = (0,_styles__WEBPACK_IMPORTED_MODULE_14__.getPanelInspectorStyles)();

    if (isLoading) {
      return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Spinner, {
          inline: true
        }), " Loading"]
      }));
    }

    const dataFrames = this.getProcessedData();

    if (!dataFrames || !dataFrames.length) {
      return _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        children: "No Data"
      }));
    } // let's make sure we don't try to render a frame that doesn't exists


    const index = !dataFrames[dataFrameIndex] ? 0 : dataFrameIndex;
    const dataFrame = dataFrames[index];
    const hasLogs = dataFrames.some(df => {
      var _df$meta3;

      return (df === null || df === void 0 ? void 0 : (_df$meta3 = df.meta) === null || _df$meta3 === void 0 ? void 0 : _df$meta3.preferredVisualisationType) === 'logs';
    });
    const hasTraces = dataFrames.some(df => {
      var _df$meta4;

      return (df === null || df === void 0 ? void 0 : (_df$meta4 = df.meta) === null || _df$meta4 === void 0 ? void 0 : _df$meta4.preferredVisualisationType) === 'trace';
    });
    const hasServiceGraph = dataFrames.some(df => {
      var _df$meta5;

      return (df === null || df === void 0 ? void 0 : (_df$meta5 = df.meta) === null || _df$meta5 === void 0 ? void 0 : _df$meta5.preferredVisualisationType) === 'nodeGraph';
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: styles.wrap,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.PanelInspector.Data.content,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: styles.toolbar,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InspectDataOptions__WEBPACK_IMPORTED_MODULE_13__.InspectDataOptions, {
          data: data,
          panel: panel,
          options: options,
          dataFrames: dataFrames,
          transformId: transformId,
          transformationOptions: transformationOptions,
          selectedDataFrame: selectedDataFrame,
          downloadForExcel: downloadForExcel,
          onOptionsChange: onOptionsChange,
          onDataFrameChange: this.onDataFrameChange,
          toggleDownloadForExcel: this.toggleDownloadForExcel
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, {
          variant: "primary",
          onClick: () => {
            if (hasLogs) {
              (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)('grafana_logs_download_clicked', {
                app,
                format: 'csv'
              });
            }

            this.exportCsv(dataFrames[dataFrameIndex], {
              useExcelHeader: this.state.downloadForExcel
            });
          },
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              margin-bottom: 10px;
            `,
          children: "Download CSV"
        }), hasLogs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, {
          variant: "primary",
          onClick: this.exportLogsAsTxt,
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                margin-bottom: 10px;
                margin-left: 10px;
              `,
          children: "Download logs"
        }), hasTraces && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, {
          variant: "primary",
          onClick: this.exportTracesAsJson,
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                margin-bottom: 10px;
                margin-left: 10px;
              `,
          children: "Download traces"
        }), hasServiceGraph && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, {
          variant: "primary",
          onClick: this.exportServiceGraph,
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                margin-bottom: 10px;
                margin-left: 10px;
              `,
          children: "Download service graph"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: styles.content,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: ({
            width,
            height
          }) => {
            if (width === 0) {
              return null;
            }

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
              style: {
                width,
                height
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Table, {
                width: width,
                height: height,
                data: dataFrame,
                showTypeIcons: true
              })
            });
          }
        })
      })]
    });
  }

}

function buildTransformationOptions() {
  const transformations = [{
    value: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DataTransformerID.seriesToColumns,
    label: 'Series joined by time',
    transformer: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DataTransformerID.seriesToColumns,
      options: {
        byField: 'Time'
      }
    }
  }];
  return transformations;
}

/***/ }),

/***/ "./public/app/features/inspector/InspectErrorTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectErrorTab": () => (/* binding */ InspectErrorTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const parseErrorMessage = message => {
  try {
    const [msg, json] = message.split(/(\{.+)/);
    const jsonError = JSON.parse(json);
    return {
      msg,
      json: jsonError
    };
  } catch {
    return {
      msg: message
    };
  }
};

const InspectErrorTab = ({
  error
}) => {
  if (!error) {
    return null;
  }

  if (error.data) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
        children: error.data.message
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.JSONFormatter, {
        json: error,
        open: 2
      })]
    });
  }

  if (error.message) {
    const {
      msg,
      json
    } = parseErrorMessage(error.message);

    if (!json) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: msg
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [msg !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          children: msg
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.JSONFormatter, {
          json: json,
          open: 5
        })]
      });
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.JSONFormatter, {
    json: error,
    open: 2
  });
};

/***/ }),

/***/ "./public/app/features/inspector/InspectJSONTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectJSONTab": () => (/* binding */ InspectJSONTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var _inspector_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/inspector/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var ShowContent;

(function (ShowContent) {
  ShowContent["PanelJSON"] = "panel";
  ShowContent["PanelData"] = "data";
  ShowContent["DataFrames"] = "frames";
})(ShowContent || (ShowContent = {}));

const options = [{
  label: 'Panel JSON',
  description: 'The model saved in the dashboard JSON that configures how everything works.',
  value: ShowContent.PanelJSON
}, {
  label: 'Panel data',
  description: 'The raw model passed to the panel visualization',
  value: ShowContent.PanelData
}, {
  label: 'DataFrame JSON',
  description: 'JSON formatted DataFrames',
  value: ShowContent.DataFrames
}];
class InspectJSONTab extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "hasPanelJSON", void 0);

    _defineProperty(this, "onSelectChanged", item => {
      const show = this.getJSONObject(item.value);
      const text = getPrettyJSON(show);
      this.setState({
        text,
        show: item.value
      });
    });

    _defineProperty(this, "onTextChanged", text => {
      this.setState({
        text
      });
    });

    _defineProperty(this, "onApplyPanelModel", () => {
      const {
        panel,
        dashboard,
        onClose
      } = this.props;

      if (this.hasPanelJSON) {
        try {
          if (!dashboard.meta.canEdit) {
            app_core_core__WEBPACK_IMPORTED_MODULE_5__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertError, ['Unable to apply']);
          } else {
            const updates = JSON.parse(this.state.text);
            dashboard.shouldUpdateDashboardPanelFromJSON(updates, panel);
            panel.restoreModel(updates);
            panel.refresh();
            app_core_core__WEBPACK_IMPORTED_MODULE_5__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertSuccess, ['Panel model updated']);
          }
        } catch (err) {
          console.error('Error applying updates', err);
          app_core_core__WEBPACK_IMPORTED_MODULE_5__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertError, ['Invalid JSON text']);
        }

        onClose();
      }
    });

    this.hasPanelJSON = !!(props.panel && props.dashboard); // If we are in panel, we want to show PanelJSON, otherwise show DataFrames

    this.state = {
      show: this.hasPanelJSON ? ShowContent.PanelJSON : ShowContent.DataFrames,
      text: this.hasPanelJSON ? getPrettyJSON(props.panel.getSaveModel()) : getPrettyJSON(props.data)
    };
  }

  getJSONObject(show) {
    const {
      data,
      panel
    } = this.props;

    if (show === ShowContent.PanelData) {
      return data;
    }

    if (show === ShowContent.DataFrames) {
      return getPanelDataFrames(data);
    }

    if (this.hasPanelJSON && show === ShowContent.PanelJSON) {
      return panel.getSaveModel();
    }

    return {
      note: `Unknown Object: ${show}`
    };
  }

  render() {
    const {
      dashboard
    } = this.props;
    const {
      show,
      text
    } = this.state;
    const jsonOptions = this.hasPanelJSON ? options : options.slice(1, options.length);
    const selected = options.find(v => v.value === show);
    const isPanelJSON = show === ShowContent.PanelJSON;
    const canEdit = dashboard && dashboard.meta.canEdit;
    const styles = (0,_inspector_styles__WEBPACK_IMPORTED_MODULE_6__.getPanelInspectorStyles)();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.wrap,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: styles.toolbar,
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.PanelInspector.Json.content,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
          label: "Select source",
          className: "flex-grow-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
            inputId: "select-source-dropdown",
            options: jsonOptions,
            value: selected,
            onChange: this.onSelectChanged
          })
        }), this.hasPanelJSON && isPanelJSON && canEdit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: styles.toolbarItem,
          onClick: this.onApplyPanelModel,
          children: "Apply"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: styles.content,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__["default"], {
          disableWidth: true,
          children: ({
            height
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CodeEditor, {
            width: "100%",
            height: height,
            language: "json",
            showLineNumbers: true,
            showMiniMap: (text && text.length) > 100,
            value: text || '',
            readOnly: !isPanelJSON,
            onBlur: this.onTextChanged
          })
        })
      })]
    });
  }

}

function getPanelDataFrames(data) {
  const frames = [];

  if (data !== null && data !== void 0 && data.series) {
    for (const f of data.series) {
      frames.push((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dataFrameToJSON)(f));
    }
  }

  if (data !== null && data !== void 0 && data.annotations) {
    for (const f of data.annotations) {
      var _json$schema;

      const json = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dataFrameToJSON)(f);

      if (!((_json$schema = json.schema) !== null && _json$schema !== void 0 && _json$schema.meta)) {
        json.schema.meta = {};
      }

      json.schema.meta.dataTopic = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataTopic.Annotations;
      frames.push(json);
    }
  }

  return frames;
}

function getPrettyJSON(obj) {
  return JSON.stringify(obj, null, 2);
}

/***/ }),

/***/ "./public/app/features/inspector/InspectStatsTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectStatsTab": () => (/* binding */ InspectStatsTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _InspectStatsTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/inspector/InspectStatsTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const InspectStatsTab = ({
  data,
  timeZone
}) => {
  var _data$timings;

  if (!data.request) {
    return null;
  }

  let stats = [];
  const requestTime = data.request.endTime ? data.request.endTime - data.request.startTime : -1;
  const processingTime = ((_data$timings = data.timings) === null || _data$timings === void 0 ? void 0 : _data$timings.dataProcessingTime) || -1;
  let dataRows = 0;

  for (const frame of data.series) {
    dataRows += frame.length;
  }

  if (requestTime > 0) {
    stats.push({
      displayName: 'Total request time',
      value: requestTime,
      unit: 'ms'
    });
  }

  if (processingTime > 0) {
    stats.push({
      displayName: 'Data processing time',
      value: processingTime,
      unit: 'ms'
    });
  }

  stats.push({
    displayName: 'Number of queries',
    value: data.request.targets.length
  });
  stats.push({
    displayName: 'Total number rows',
    value: dataRows
  });
  let dataStats = [];

  for (const series of data.series) {
    if (series.meta && series.meta.stats) {
      dataStats = dataStats.concat(series.meta.stats);
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.PanelInspector.Stats.content,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_InspectStatsTable__WEBPACK_IMPORTED_MODULE_2__.InspectStatsTable, {
      timeZone: timeZone,
      name: 'Stats',
      stats: stats
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_InspectStatsTable__WEBPACK_IMPORTED_MODULE_2__.InspectStatsTable, {
      timeZone: timeZone,
      name: 'Data source stats',
      stats: dataStats
    })]
  });
};

/***/ }),

/***/ "./public/app/features/inspector/InspectStatsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectStatsTable": () => (/* binding */ InspectStatsTable)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const InspectStatsTable = ({
  timeZone,
  name,
  stats
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const styles = getStyles(theme);

  if (!stats || !stats.length) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "section-heading",
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("table", {
      className: "filter-table width-30",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
        children: stats.map((stat, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: stat.displayName
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              className: styles.cell,
              children: formatStat(stat, timeZone, theme)
            })]
          }, `${stat.displayName}-${index}`);
        })
      })
    })]
  });
};

function formatStat(stat, timeZone, theme) {
  const display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDisplayProcessor)({
    field: {
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number,
      config: stat
    },
    theme,
    timeZone
  });
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.formattedValueToString)(display(stat.value));
}

const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.stylesFactory)(theme => {
  return {
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding-bottom: ${theme.spacing(2)};
    `,
    cell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      text-align: right;
    `
  };
});

/***/ }),

/***/ "./public/app/features/inspector/QueryInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryInspector": () => (/* binding */ QueryInspector)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_dashboard_components_PanelEditor_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/utils.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/inspector/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _p, _div, _LoadingPlaceholder, _p2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















class QueryInspector extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "formattedJson", void 0);

    _defineProperty(this, "subs", new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription());

    _defineProperty(this, "onPanelRefresh", () => {
      this.setState(prevState => Object.assign({}, prevState, {
        dsQuery: {
          isLoading: true,
          response: {}
        }
      }));
    });

    _defineProperty(this, "setFormattedJson", formattedJson => {
      this.formattedJson = formattedJson;
    });

    _defineProperty(this, "getTextForClipboard", () => {
      return JSON.stringify(this.formattedJson, null, 2);
    });

    _defineProperty(this, "onClipboardSuccess", () => {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_7__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertSuccess, ['Content copied to clipboard']);
    });

    _defineProperty(this, "onToggleExpand", () => {
      this.setState(prevState => Object.assign({}, prevState, {
        allNodesExpanded: !this.state.allNodesExpanded
      }));
    });

    _defineProperty(this, "onToggleMocking", () => {
      this.setState(prevState => Object.assign({}, prevState, {
        isMocking: !this.state.isMocking
      }));
    });

    _defineProperty(this, "getNrOfOpenNodes", () => {
      if (this.state.allNodesExpanded === null) {
        return 3; // 3 is default, ie when state is null
      } else if (this.state.allNodesExpanded) {
        return 20;
      }

      return 1;
    });

    _defineProperty(this, "setMockedResponse", evt => {
      const mockedResponse = evt.target.value;
      this.setState(prevState => Object.assign({}, prevState, {
        mockedResponse
      }));
    });

    this.state = {
      executedQueries: [],
      allNodesExpanded: null,
      isMocking: false,
      mockedResponse: '',
      dsQuery: {
        isLoading: false,
        response: {}
      }
    };
  }

  componentDidMount() {
    const {
      panel
    } = this.props;
    this.subs.add(app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_8__.backendSrv.getInspectorStream().subscribe({
      next: response => this.onDataSourceResponse(response)
    }));

    if (panel) {
      this.subs.add(panel.events.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.RefreshEvent, this.onPanelRefresh));
      this.updateQueryList();
    }
  }

  componentDidUpdate(oldProps) {
    if (this.props.data !== oldProps.data) {
      this.updateQueryList();
    }
  }
  /**
   * Find the list of executed queries
   */


  updateQueryList() {
    const {
      data
    } = this.props;
    const executedQueries = [];

    if (data !== null && data !== void 0 && data.length) {
      let last = undefined;
      data.forEach((frame, idx) => {
        var _frame$meta;

        const query = (_frame$meta = frame.meta) === null || _frame$meta === void 0 ? void 0 : _frame$meta.executedQueryString;

        if (query) {
          var _last;

          const refId = frame.refId || '?';

          if (((_last = last) === null || _last === void 0 ? void 0 : _last.refId) === refId) {
            last.frames++;
            last.rows += frame.length;
          } else {
            last = {
              refId,
              frames: 0,
              rows: frame.length,
              query
            };
            executedQueries.push(last);
          }
        }
      });
    }

    this.setState({
      executedQueries
    });
  }

  componentWillUnmount() {
    this.subs.unsubscribe();
  }

  onDataSourceResponse(response) {
    var _response$config;

    // ignore silent requests
    if ((_response$config = response.config) !== null && _response$config !== void 0 && _response$config.hideFromInspector) {
      return;
    }

    response = Object.assign({}, response); // clone - dont modify the response

    if (response.headers) {
      delete response.headers;
    }

    if (response.config) {
      response.request = response.config;
      delete response.config;
      delete response.request.transformRequest;
      delete response.request.transformResponse;
      delete response.request.paramSerializer;
      delete response.request.jsonpCallbackParam;
      delete response.request.headers;
      delete response.request.requestId;
      delete response.request.inspect;
      delete response.request.retry;
      delete response.request.timeout;
    }

    if (response.data) {
      response.response = response.data;
      delete response.config;
      delete response.data;
      delete response.status;
      delete response.statusText;
      delete response.ok;
      delete response.url;
      delete response.redirected;
      delete response.type;
      delete response.$$config;
    }

    this.setState(prevState => Object.assign({}, prevState, {
      dsQuery: {
        isLoading: false,
        response: response
      }
    }));
  }

  renderExecutedQueries(executedQueries) {
    if (!executedQueries.length) {
      return null;
    }

    const styles = {
      refId: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
        font-weight: ${_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme.typography.weight.semibold};
        color: ${_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme.colors.textBlue};
        margin-right: 8px;
      `
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      children: executedQueries.map(info => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.Stack, {
          gap: 1,
          direction: "column",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
              className: styles.refId,
              children: [info.refId, ":"]
            }), info.frames > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
              children: [info.frames, " frames, "]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
              children: [info.rows, " rows"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("pre", {
            children: info.query
          })]
        }, info.refId);
      })
    });
  }

  render() {
    const {
      allNodesExpanded,
      executedQueries
    } = this.state;
    const {
      panel,
      onRefreshQuery
    } = this.props;
    const {
      response,
      isLoading
    } = this.state.dsQuery;
    const openNodes = this.getNrOfOpenNodes();
    const styles = (0,_styles__WEBPACK_IMPORTED_MODULE_10__.getPanelInspectorStyles)();
    const haveData = Object.keys(response).length > 0;

    if (panel && !(0,app_features_dashboard_components_PanelEditor_utils__WEBPACK_IMPORTED_MODULE_9__.supportsDataQuery)(panel.plugin)) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.wrap,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.PanelInspector.Query.content,
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
          className: "section-heading",
          children: "Query inspector"
        })), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "small muted",
          children: "Query inspector allows you to view raw request and response. To collect this data Grafana needs to issue a new query. Click refresh button below to trigger a new query."
        }))]
      }), this.renderExecutedQueries(executedQueries), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: styles.toolbar,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
          icon: "sync",
          onClick: onRefreshQuery,
          "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.PanelInspector.Query.refreshButton,
          children: "Refresh"
        }), haveData && allNodesExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
          icon: "minus",
          variant: "secondary",
          className: styles.toolbarItem,
          onClick: this.onToggleExpand,
          children: "Collapse all"
        }), haveData && !allNodesExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
          icon: "plus",
          variant: "secondary",
          className: styles.toolbarItem,
          onClick: this.onToggleExpand,
          children: "Expand all"
        }), haveData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ClipboardButton, {
          getText: this.getTextForClipboard,
          onClipboardCopy: this.onClipboardSuccess,
          className: styles.toolbarItem,
          icon: "copy",
          variant: "secondary",
          children: "Copy to clipboard"
        }), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "flex-grow-1"
        }))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: styles.content,
        children: [isLoading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LoadingPlaceholder, {
          text: "Loading query inspector..."
        }))), !isLoading && haveData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.JSONFormatter, {
          json: response,
          open: openNodes,
          onDidRender: this.setFormattedJson
        }), !isLoading && !haveData && (_p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "muted",
          children: "No request and response collected yet. Hit refresh button"
        })))]
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/features/inspector/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPanelInspectorStyles": () => (/* binding */ getPanelInspectorStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");



const getPanelInspectorStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.stylesFactory)(() => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      flex: 1 1 0;
    `,
    toolbar: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      width: 100%;
      flex-grow: 0;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: ${app_core_config__WEBPACK_IMPORTED_MODULE_2__.config.theme.spacing.sm};
    `,
    toolbarItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${app_core_config__WEBPACK_IMPORTED_MODULE_2__.config.theme.spacing.md};
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
      height: 100%;
      overflow: scroll;
    `,
    editor: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-family: monospace;
      height: 100%;
      flex-grow: 1;
    `,
    viewer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      overflow: scroll;
    `,
    dataFrameSelect: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 2;
    `,
    leftActions: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-grow: 1;

      max-width: 85%;
      @media (max-width: 1345px) {
        max-width: 75%;
      }
    `,
    options: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding-top: ${app_core_config__WEBPACK_IMPORTED_MODULE_2__.config.theme.spacing.sm};
    `,
    dataDisplayOptions: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
      min-width: 300px;
      margin-right: ${app_core_config__WEBPACK_IMPORTED_MODULE_2__.config.theme.spacing.sm};
    `,
    selects: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      > * {
        margin-right: ${app_core_config__WEBPACK_IMPORTED_MODULE_2__.config.theme.spacing.sm};
      }
    `
  };
});

/***/ }),

/***/ "./public/app/features/query/components/QueryEditorRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditorRows": () => (/* binding */ QueryEditorRows)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _QueryEditorRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/query/components/QueryEditorRow.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class QueryEditorRows extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onRemoveQuery", query => {
      this.props.onQueriesChange(this.props.queries.filter(item => item !== query));
    });

    _defineProperty(this, "onDragStart", result => {
      const {
        queries,
        dsSettings
      } = this.props;
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.reportInteraction)('query_row_reorder_started', {
        startIndex: result.source.index,
        numberOfQueries: queries.length,
        datasourceType: dsSettings.type
      });
    });

    _defineProperty(this, "onDragEnd", result => {
      const {
        queries,
        onQueriesChange,
        dsSettings
      } = this.props;

      if (!result || !result.destination) {
        return;
      }

      const startIndex = result.source.index;
      const endIndex = result.destination.index;

      if (startIndex === endIndex) {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.reportInteraction)('query_row_reorder_canceled', {
          startIndex,
          endIndex,
          numberOfQueries: queries.length,
          datasourceType: dsSettings.type
        });
        return;
      }

      const update = Array.from(queries);
      const [removed] = update.splice(startIndex, 1);
      update.splice(endIndex, 0, removed);
      onQueriesChange(update);
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.reportInteraction)('query_row_reorder_ended', {
        startIndex,
        endIndex,
        numberOfQueries: queries.length,
        datasourceType: dsSettings.type
      });
    });
  }

  onChangeQuery(query, index) {
    const {
      queries,
      onQueriesChange
    } = this.props; // update query in array

    onQueriesChange(queries.map((item, itemIndex) => {
      if (itemIndex === index) {
        return query;
      }

      return item;
    }));
  }

  onDataSourceChange(dataSource, index) {
    const {
      queries,
      onQueriesChange
    } = this.props;
    onQueriesChange(queries.map((item, itemIndex) => {
      if (itemIndex !== index) {
        return item;
      }

      const dataSourceRef = {
        type: dataSource.type,
        uid: dataSource.uid
      };

      if (item.datasource) {
        const previous = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(item.datasource);

        if ((previous === null || previous === void 0 ? void 0 : previous.type) === dataSource.type) {
          return Object.assign({}, item, {
            datasource: dataSourceRef
          });
        }
      }

      return {
        refId: item.refId,
        hide: item.hide,
        datasource: dataSourceRef
      };
    }));
  }

  render() {
    const {
      dsSettings,
      data,
      queries,
      app,
      history,
      eventBus
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.DragDropContext, {
      onDragStart: this.onDragStart,
      onDragEnd: this.onDragEnd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.Droppable, {
        droppableId: "transformations-list",
        direction: "vertical",
        children: provided => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", Object.assign({
            ref: provided.innerRef
          }, provided.droppableProps, {
            children: [queries.map((query, index) => {
              const dataSourceSettings = getDataSourceSettings(query, dsSettings);
              const onChangeDataSourceSettings = dsSettings.meta.mixed ? settings => this.onDataSourceChange(settings, index) : undefined;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_QueryEditorRow__WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
                id: query.refId,
                index: index,
                data: data,
                query: query,
                dataSource: dataSourceSettings,
                onChangeDataSource: onChangeDataSourceSettings,
                onChange: query => this.onChangeQuery(query, index),
                onRemoveQuery: this.onRemoveQuery,
                onAddQuery: this.props.onAddQuery,
                onRunQuery: this.props.onRunQueries,
                queries: queries,
                app: app,
                history: history,
                eventBus: eventBus
              }, query.refId);
            }), provided.placeholder]
          }));
        }
      })
    });
  }

}

const getDataSourceSettings = (query, groupSettings) => {
  if (!query.datasource) {
    return groupSettings;
  }

  const querySettings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(query.datasource);
  return querySettings || groupSettings;
};

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/responseTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTableFrame": () => (/* binding */ createTableFrame),
/* harmony export */   "createTraceFrame": () => (/* binding */ createTraceFrame),
/* harmony export */   "transformToJaeger": () => (/* binding */ transformToJaeger)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _jaegertracing_jaeger_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/jaeger-ui-components/src/index.ts");


function createTraceFrame(data) {
  const spans = data.spans.map(s => toSpanRow(s, data.processes));
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'spanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'parentSpanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'operationName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'serviceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'serviceTags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number
    }, {
      name: 'logs',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'tags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'warnings',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'stackTraces',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'jaeger'
      }
    }
  });

  for (const span of spans) {
    frame.add(span);
  }

  return frame;
}

function toSpanRow(span, processes) {
  var _span$references, _span$references$find, _span$warnings;

  return {
    spanID: span.spanID,
    traceID: span.traceID,
    parentSpanID: (_span$references = span.references) === null || _span$references === void 0 ? void 0 : (_span$references$find = _span$references.find(r => r.refType === 'CHILD_OF')) === null || _span$references$find === void 0 ? void 0 : _span$references$find.spanID,
    operationName: span.operationName,
    // from micro to millis
    startTime: span.startTime / 1000,
    duration: span.duration / 1000,
    logs: span.logs.map(l => Object.assign({}, l, {
      timestamp: l.timestamp / 1000
    })),
    tags: span.tags,
    warnings: (_span$warnings = span.warnings) !== null && _span$warnings !== void 0 ? _span$warnings : undefined,
    stackTraces: span.stackTraces,
    serviceName: processes[span.processID].serviceName,
    serviceTags: processes[span.processID].tags
  };
}

function createTableFrame(data, instanceSettings) {
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        unit: 'string',
        displayNameFromDS: 'Trace ID',
        links: [{
          title: 'Trace: ${__value.raw}',
          url: '',
          internal: {
            datasourceUid: instanceSettings.uid,
            datasourceName: instanceSettings.name,
            query: {
              query: '${__value.raw}'
            }
          }
        }]
      }
    }, {
      name: 'traceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayNameFromDS: 'Trace name'
      }
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.time,
      config: {
        displayNameFromDS: 'Start time'
      }
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        displayNameFromDS: 'Duration',
        unit: 'µs'
      }
    }],
    meta: {
      preferredVisualisationType: 'table'
    }
  }); // Show the most recent traces

  const traceData = data.map(transformToTraceData).sort((a, b) => (b === null || b === void 0 ? void 0 : b.startTime) - (a === null || a === void 0 ? void 0 : a.startTime));

  for (const trace of traceData) {
    frame.add(trace);
  }

  return frame;
}

function transformToTraceData(data) {
  const traceData = (0,_jaegertracing_jaeger_ui_components__WEBPACK_IMPORTED_MODULE_1__.transformTraceData)(data);

  if (!traceData) {
    return;
  }

  return {
    traceID: traceData.traceID,
    startTime: traceData.startTime / 1000,
    duration: traceData.duration,
    traceName: traceData.traceName
  };
}

function transformToJaeger(data) {
  let traceResponse = {
    traceID: '',
    spans: [],
    processes: {},
    warnings: null
  };
  let processes = [];

  for (let i = 0; i < data.length; i++) {
    const span = data.get(i); // Set traceID

    if (!traceResponse.traceID) {
      traceResponse.traceID = span.traceID;
    } // Create process if doesn't exist


    if (!processes.find(p => p === span.serviceName)) {
      processes.push(span.serviceName);
      traceResponse.processes[`p${processes.length}`] = {
        serviceName: span.serviceName,
        tags: span.serviceTags
      };
    } // Create span


    traceResponse.spans.push({
      traceID: span.traceID,
      spanID: span.spanID,
      duration: span.duration * 1000,
      references: span.parentSpanID ? [{
        refType: 'CHILD_OF',
        spanID: span.parentSpanID,
        traceID: span.traceID
      }] : [],
      flags: 0,
      logs: span.logs.map(l => Object.assign({}, l, {
        timestamp: l.timestamp * 1000
      })),
      operationName: span.operationName,
      processID: Object.keys(traceResponse.processes).find(key => traceResponse.processes[key].serviceName === span.serviceName) || '',
      startTime: span.startTime * 1000,
      tags: span.tags,
      warnings: span.warnings ? span.warnings : null
    });
  }

  return {
    data: [traceResponse],
    total: 0,
    limit: 0,
    offset: 0,
    errors: null
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/graphTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGraphFrames": () => (/* binding */ createGraphFrames),
/* harmony export */   "durationMetric": () => (/* binding */ durationMetric),
/* harmony export */   "errorRateMetric": () => (/* binding */ errorRateMetric),
/* harmony export */   "failedMetric": () => (/* binding */ failedMetric),
/* harmony export */   "histogramMetric": () => (/* binding */ histogramMetric),
/* harmony export */   "mapPromMetricsToServiceMap": () => (/* binding */ mapPromMetricsToServiceMap),
/* harmony export */   "rateMetric": () => (/* binding */ rateMetric),
/* harmony export */   "secondsMetric": () => (/* binding */ secondsMetric),
/* harmony export */   "serviceMapMetrics": () => (/* binding */ serviceMapMetrics),
/* harmony export */   "totalsMetric": () => (/* binding */ totalsMetric)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/tracing.ts");


/**
 * Row in a trace dataFrame
 */

function createGraphFrames(data) {
  const {
    nodes,
    edges
  } = convertTraceToGraph(data);
  const [nodesFrame, edgesFrame] = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.makeFrames)();

  for (const node of nodes) {
    nodesFrame.add(node);
  }

  for (const edge of edges) {
    edgesFrame.add(edge);
  }

  return [nodesFrame, edgesFrame];
}

function convertTraceToGraph(data) {
  const nodes = [];
  const edges = [];
  const view = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameView(data);
  const traceDuration = findTraceDuration(view);
  const spanMap = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.makeSpanMap)(index => {
    if (index >= data.length) {
      return undefined;
    }

    const span = view.get(index);
    return {
      span: Object.assign({}, span),
      id: span.spanID,
      parentIds: span.parentSpanID ? [span.parentSpanID] : []
    };
  });

  for (let i = 0; i < view.length; i++) {
    var _row$serviceName;

    const row = view.get(i);
    const ranges = spanMap[row.spanID].children.map(c => {
      const span = spanMap[c].span;
      return [span.startTime, span.startTime + span.duration];
    });
    const childrenDuration = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getNonOverlappingDuration)(ranges);
    const selfDuration = row.duration - childrenDuration;
    const stats = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getStats)(row.duration, traceDuration, selfDuration);
    nodes.push({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: row.spanID,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: (_row$serviceName = row.serviceName) !== null && _row$serviceName !== void 0 ? _row$serviceName : '',
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle]: row.operationName,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: stats.main,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: stats.secondary,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color]: selfDuration / traceDuration
    }); // Sometimes some span can be missing. Don't add edges for those.

    if (row.parentSpanID && spanMap[row.parentSpanID].span) {
      edges.push({
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: row.parentSpanID + '--' + row.spanID,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: row.spanID,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: row.parentSpanID
      });
    }
  }

  return {
    nodes,
    edges
  };
}
/**
 * Get the duration of the whole trace as it isn't a part of the response data.
 * Note: Seems like this should be the same as just longest span, but this is probably safer.
 */


function findTraceDuration(view) {
  let traceEndTime = 0;
  let traceStartTime = Infinity;

  for (let i = 0; i < view.length; i++) {
    const row = view.get(i);

    if (row.startTime < traceStartTime) {
      traceStartTime = row.startTime;
    }

    if (row.startTime + row.duration > traceEndTime) {
      traceEndTime = row.startTime + row.duration;
    }
  }

  return traceEndTime - traceStartTime;
}

const secondsMetric = 'traces_service_graph_request_server_seconds_sum';
const totalsMetric = 'traces_service_graph_request_total';
const failedMetric = 'traces_service_graph_request_failed_total';
const histogramMetric = 'traces_service_graph_request_server_seconds_bucket';
const rateMetric = {
  expr: 'topk(5, sum(rate(traces_spanmetrics_calls_total{}[$__range])) by (span_name))',
  params: []
};
const errorRateMetric = {
  expr: 'topk(5, sum(rate(traces_spanmetrics_calls_total{}[$__range])) by (span_name))',
  params: ['status_code="STATUS_CODE_ERROR"']
};
const durationMetric = {
  expr: 'histogram_quantile(.9, sum(rate(traces_spanmetrics_latency_bucket{}[$__range])) by (le))',
  params: []
};
const serviceMapMetrics = [secondsMetric, totalsMetric, failedMetric, histogramMetric // These are used for debugging the tempo collection so probably not useful for service map right now.
// 'traces_service_graph_unpaired_spans_total',
// 'traces_service_graph_untagged_spans_total',
];
/**
 * Map response from multiple prometheus metrics into a node graph data frames with nodes and edges.
 * @param responses
 * @param range
 */

function mapPromMetricsToServiceMap(responses, range) {
  const frames = getMetricFrames(responses); // First just collect data from the metrics into a map with nodes and edges as keys

  const nodesMap = {};
  const edgesMap = {}; // At this moment we don't have any error/success or other counts so we just use these 2

  collectMetricData(frames[totalsMetric], 'total', totalsMetric, nodesMap, edgesMap);
  collectMetricData(frames[secondsMetric], 'seconds', secondsMetric, nodesMap, edgesMap);
  collectMetricData(frames[failedMetric], 'failed', failedMetric, nodesMap, edgesMap);
  return convertToDataFrames(nodesMap, edgesMap, range);
}

function createServiceMapDataFrames() {
  function createDF(name, fields) {
    return new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
      name,
      fields,
      meta: {
        preferredVisualisationType: 'nodeGraph'
      }
    });
  }

  const nodes = createDF('Nodes', [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title,
    config: {
      displayName: 'Service name'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    config: {
      unit: 'ms/r',
      displayName: 'Average response time'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    config: {
      unit: 'r/sec',
      displayName: 'Requests per second'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success',
    config: {
      displayName: 'Success',
      color: {
        fixedColor: 'green',
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
      }
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'failed',
    config: {
      displayName: 'Failed',
      color: {
        fixedColor: 'red',
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
      }
    }
  }]);
  const edges = createDF('Edges', [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    config: {
      unit: 'ms/r',
      displayName: 'Average response time'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    config: {
      unit: 'r/sec',
      displayName: 'Requests per second'
    }
  }]);
  return [nodes, edges];
}
/**
 * Group frames from response based on ref id which is set the same as the metric name so we know which metric is where
 * and also put it into DataFrameView so it's easier to work with.
 * @param responses
 */


function getMetricFrames(responses) {
  return responses[0].data.reduce((acc, frame) => {
    acc[frame.refId] = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameView(frame);
    return acc;
  }, {});
}

/**
 * Collect data from a metric into a map of nodes and edges. The metric data is modeled as counts of metric per edge
 * which is a pair of client-server nodes. This means we convert each row of the metric 1-1 to edges and than we assign
 * the metric also to server. We count the stats for server only as we show requests/transactions that particular node
 * processed not those which it generated and other stats like average transaction time then stem from that.
 * @param frame
 * @param stat
 * @param metric
 * @param nodesMap
 * @param edgesMap
 */
function collectMetricData(frame, stat, metric, nodesMap, edgesMap) {
  if (!frame) {
    return;
  } // The name of the value column is in this format
  // TODO figure out if it can be changed


  const valueName = `Value #${metric}`;

  for (let i = 0; i < frame.length; i++) {
    const row = frame.get(i);
    const edgeId = `${row.client}_${row.server}`;

    if (!edgesMap[edgeId]) {
      // Create edge as it does not exist yet
      edgesMap[edgeId] = {
        target: row.server,
        source: row.client,
        [stat]: row[valueName]
      };
    } else {
      // Add stat to edge
      // We are adding the values if exists but that should not happen in general as there should be single row for
      // an edge.
      edgesMap[edgeId][stat] = (edgesMap[edgeId][stat] || 0) + row[valueName];
    }

    if (!nodesMap[row.server]) {
      // Create node for server
      nodesMap[row.server] = {
        [stat]: row[valueName]
      };
    } else {
      // Add stat to server node. Sum up values if there are multiple edges targeting this server node.
      nodesMap[row.server][stat] = (nodesMap[row.server][stat] || 0) + row[valueName];
    }

    if (!nodesMap[row.client]) {
      // Create the client node but don't add the stat as edge stats are attributed to the server node. This means for
      // example that the number of requests in a node show how many requests it handled not how many it generated.
      nodesMap[row.client] = {
        [stat]: 0
      };
    }
  }
}

function convertToDataFrames(nodesMap, edgesMap, range) {
  const rangeMs = range.to.valueOf() - range.from.valueOf();
  const [nodes, edges] = createServiceMapDataFrames();

  for (const nodeId of Object.keys(nodesMap)) {
    const node = nodesMap[nodeId];
    nodes.add({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: nodeId,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: nodeId,
      // NaN will not be shown in the node graph. This happens for a root client node which did not process
      // any requests itself.
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: node.total ? node.seconds / node.total * 1000 : Number.NaN,
      // Average response time
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: node.total ? Math.round(node.total / (rangeMs / 1000) * 100) / 100 : Number.NaN,
      // Request per second (to 2 decimals)
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success']: node.total ? (node.total - Math.min(node.failed || 0, node.total)) / node.total : 1,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'failed']: node.total ? Math.min(node.failed || 0, node.total) / node.total : 0
    });
  }

  for (const edgeId of Object.keys(edgesMap)) {
    const edge = edgesMap[edgeId];
    edges.add({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: edgeId,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: edge.source,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: edge.target,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: edge.total ? edge.seconds / edge.total * 1000 : Number.NaN,
      // Average response time
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: edge.total ? Math.round(edge.total / (rangeMs / 1000) * 100) / 100 : Number.NaN // Request per second (to 2 decimals)

    });
  }

  return {
    nodes,
    edges
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/resultTransformer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTableFrame": () => (/* binding */ createTableFrame),
/* harmony export */   "createTableFrameFromSearch": () => (/* binding */ createTableFrameFromSearch),
/* harmony export */   "transformFromOTLP": () => (/* binding */ transformFromOTLP),
/* harmony export */   "transformToOTLP": () => (/* binding */ transformToOTLP),
/* harmony export */   "transformTrace": () => (/* binding */ transformTrace),
/* harmony export */   "transformTraceList": () => (/* binding */ transformTraceList)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/index.js");
/* harmony import */ var _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.3.1-3ba3c4558c-83fa3b8a81.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js");
/* harmony import */ var date_fns_differenceInHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInHours/index.js");
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _graphTransform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/tempo/graphTransform.ts");






function createTableFrame(logsFrame, datasourceUid, datasourceName, traceRegexs) {
  const tableFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.MutableDataFrame({
    fields: [{
      name: 'Time',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.time,
      config: {
        custom: {
          width: 150
        }
      }
    }, {
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string,
      config: {
        displayNameFromDS: 'Trace ID',
        custom: {
          width: 300
        },
        links: [{
          title: 'Click to open trace ${__value.raw}',
          url: '',
          internal: {
            datasourceUid,
            datasourceName,
            query: {
              query: '${__value.raw}'
            }
          }
        }]
      }
    }, {
      name: 'Message',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string
    }],
    meta: {
      preferredVisualisationType: 'table'
    }
  });

  if (!logsFrame || traceRegexs.length === 0) {
    return tableFrame;
  }

  const timeField = logsFrame.fields.find(f => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.time); // Going through all string fields to look for trace IDs

  for (let field of logsFrame.fields) {
    let hasMatch = false;

    if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string) {
      const values = field.values.toArray();

      for (let i = 0; i < values.length; i++) {
        const line = values[i];

        if (line) {
          for (let traceRegex of traceRegexs) {
            const match = line.match(traceRegex);

            if (match) {
              const traceId = match[1];
              const time = timeField ? timeField.values.get(i) : null;
              tableFrame.fields[0].values.add(time);
              tableFrame.fields[1].values.add(traceId);
              tableFrame.fields[2].values.add(line);
              hasMatch = true;
            }
          }
        }
      }
    }

    if (hasMatch) {
      break;
    }
  }

  return tableFrame;
}
function transformTraceList(response, datasourceId, datasourceName, traceRegexs) {
  response.data.forEach((data, index) => {
    const frame = createTableFrame(data, datasourceId, datasourceName, traceRegexs);
    response.data[index] = frame;
  });
  return response;
} // Don't forget to change the backend code when the id representation changed

function transformBase64IDToHexString(base64) {
  const raw = atob(base64);
  let result = '';

  for (let i = 0; i < raw.length; i++) {
    const hex = raw.charCodeAt(i).toString(16);
    result += hex.length === 2 ? hex : '0' + hex;
  }

  return result.length > 16 ? result.slice(16) : result;
}

function transformHexStringToBase64ID(hex) {
  const hexArray = hex.match(/\w{2}/g) || [];
  return btoa(hexArray.map(function (a) {
    return String.fromCharCode(parseInt(a, 16));
  }).join(''));
}

function getAttributeValue(value) {
  if (value.stringValue) {
    return value.stringValue;
  }

  if (value.boolValue !== undefined) {
    return Boolean(value.boolValue);
  }

  if (value.intValue !== undefined) {
    return Number.parseInt(value.intValue, 10);
  }

  if (value.doubleValue) {
    return Number.parseFloat(value.doubleValue);
  }

  if (value.arrayValue) {
    const arrayValue = [];

    for (const arValue of value.arrayValue.values) {
      arrayValue.push(getAttributeValue(arValue));
    }

    return arrayValue;
  }

  return '';
}

function resourceToProcess(resource) {
  const serviceTags = [];
  let serviceName = 'OTLPResourceNoServiceName';

  if (!resource) {
    return {
      serviceName,
      serviceTags
    };
  }

  for (const attribute of resource.attributes) {
    if (attribute.key === _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1__.SemanticResourceAttributes.SERVICE_NAME) {
      serviceName = attribute.value.stringValue || serviceName;
    }

    serviceTags.push({
      key: attribute.key,
      value: getAttributeValue(attribute.value)
    });
  }

  return {
    serviceName,
    serviceTags
  };
}

function getSpanTags(span, instrumentationLibrary) {
  const spanTags = [];

  if (instrumentationLibrary) {
    if (instrumentationLibrary.name) {
      spanTags.push({
        key: 'otel.library.name',
        value: instrumentationLibrary.name
      });
    }

    if (instrumentationLibrary.version) {
      spanTags.push({
        key: 'otel.library.version',
        value: instrumentationLibrary.version
      });
    }
  }

  if (span.attributes) {
    for (const attribute of span.attributes) {
      spanTags.push({
        key: attribute.key,
        value: getAttributeValue(attribute.value)
      });
    }
  }

  if (span.status) {
    if (span.status.code && span.status.code !== _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SpanStatusCode.UNSET) {
      spanTags.push({
        key: 'otel.status_code',
        value: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SpanStatusCode[span.status.code]
      });

      if (span.status.message) {
        spanTags.push({
          key: 'otel.status_description',
          value: span.status.message
        });
      }
    }

    if (span.status.code === _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SpanStatusCode.ERROR) {
      spanTags.push({
        key: 'error',
        value: true
      });
    }
  }

  if (span.kind !== undefined) {
    const split = span.kind.toString().toLowerCase().split('_');
    spanTags.push({
      key: 'span.kind',
      value: split.length ? split[split.length - 1] : span.kind.toString()
    });
  }

  return spanTags;
}

function getReferences(span) {
  const references = [];

  if (span.links) {
    for (const link of span.links) {
      const {
        traceId,
        spanId
      } = link;
      const tags = [];

      if (link.attributes) {
        for (const attribute of link.attributes) {
          tags.push({
            key: attribute.key,
            value: getAttributeValue(attribute.value)
          });
        }
      }

      references.push({
        traceID: traceId,
        spanID: spanId,
        tags
      });
    }
  }

  return references;
}

function getLogs(span) {
  const logs = [];

  if (span.events) {
    for (const event of span.events) {
      const fields = [];

      if (event.attributes) {
        for (const attribute of event.attributes) {
          fields.push({
            key: attribute.key,
            value: getAttributeValue(attribute.value)
          });
        }
      }

      logs.push({
        fields,
        timestamp: event.timeUnixNano / 1000000
      });
    }
  }

  return logs;
}

function transformFromOTLP(traceData, nodeGraph = false) {
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string
    }, {
      name: 'spanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string
    }, {
      name: 'parentSpanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string
    }, {
      name: 'operationName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string
    }, {
      name: 'serviceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string
    }, {
      name: 'serviceTags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.other
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number
    }, {
      name: 'logs',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.other
    }, {
      name: 'references',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.other
    }, {
      name: 'tags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.other
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'otlp'
      }
    }
  });

  try {
    for (const data of traceData) {
      const {
        serviceName,
        serviceTags
      } = resourceToProcess(data.resource);

      for (const librarySpan of data.instrumentationLibrarySpans) {
        for (const span of librarySpan.spans) {
          frame.add({
            traceID: transformBase64IDToHexString(span.traceId),
            spanID: transformBase64IDToHexString(span.spanId),
            parentSpanID: transformBase64IDToHexString(span.parentSpanId || ''),
            operationName: span.name || '',
            serviceName,
            serviceTags,
            startTime: span.startTimeUnixNano / 1000000,
            duration: (span.endTimeUnixNano - span.startTimeUnixNano) / 1000000,
            tags: getSpanTags(span, librarySpan.instrumentationLibrary),
            logs: getLogs(span),
            references: getReferences(span)
          });
        }
      }
    }
  } catch (error) {
    console.error(error);
    return {
      error: {
        message: 'JSON is not valid OpenTelemetry format: ' + error
      },
      data: []
    };
  }

  let data = [frame];

  if (nodeGraph) {
    data.push(...(0,_graphTransform__WEBPACK_IMPORTED_MODULE_3__.createGraphFrames)(frame));
  }

  return {
    data
  };
}
/**
 * Transforms trace dataframes to the OpenTelemetry format
 */

function transformToOTLP(data) {
  let result = {
    batches: []
  }; // Lookup object to see which batch contains spans for which services

  let services = {};

  for (let i = 0; i < data.length; i++) {
    const span = data.get(i); // Group spans based on service

    if (!services[span.serviceName]) {
      services[span.serviceName] = result.batches.length;
      result.batches.push({
        resource: {
          attributes: [],
          droppedAttributesCount: 0
        },
        instrumentationLibrarySpans: [{
          spans: []
        }]
      });
    }

    let batchIndex = services[span.serviceName]; // Populate resource attributes from service tags

    if (result.batches[batchIndex].resource.attributes.length === 0) {
      result.batches[batchIndex].resource.attributes = tagsToAttributes(span.serviceTags);
    } // Populate instrumentation library if it exists


    if (!result.batches[batchIndex].instrumentationLibrarySpans[0].instrumentationLibrary) {
      var _span$tags$find;

      let libraryName = (_span$tags$find = span.tags.find(t => t.key === 'otel.library.name')) === null || _span$tags$find === void 0 ? void 0 : _span$tags$find.value;

      if (libraryName) {
        var _span$tags$find2;

        result.batches[batchIndex].instrumentationLibrarySpans[0].instrumentationLibrary = {
          name: libraryName,
          version: (_span$tags$find2 = span.tags.find(t => t.key === 'otel.library.version')) === null || _span$tags$find2 === void 0 ? void 0 : _span$tags$find2.value
        };
      }
    }

    result.batches[batchIndex].instrumentationLibrarySpans[0].spans.push({
      traceId: transformHexStringToBase64ID(span.traceID.padStart(32, '0')),
      spanId: transformHexStringToBase64ID(span.spanID),
      traceState: '',
      parentSpanId: transformHexStringToBase64ID(span.parentSpanID || ''),
      name: span.operationName,
      kind: getOTLPSpanKind(span.tags),
      startTimeUnixNano: span.startTime * 1000000,
      endTimeUnixNano: (span.startTime + span.duration) * 1000000,
      attributes: tagsToAttributes(span.tags),
      droppedAttributesCount: 0,
      droppedEventsCount: 0,
      droppedLinksCount: 0,
      status: getOTLPStatus(span.tags),
      events: getOTLPEvents(span.logs),
      links: getOTLPReferences(span.references)
    });
  }

  return result;
}

function getOTLPSpanKind(tags) {
  var _tags$find;

  let spanKind = undefined;
  const spanKindTagValue = (_tags$find = tags.find(t => t.key === 'span.kind')) === null || _tags$find === void 0 ? void 0 : _tags$find.value;

  switch (spanKindTagValue) {
    case 'server':
      spanKind = 'SPAN_KIND_SERVER';
      break;

    case 'client':
      spanKind = 'SPAN_KIND_CLIENT';
      break;

    case 'producer':
      spanKind = 'SPAN_KIND_PRODUCER';
      break;

    case 'consumer':
      spanKind = 'SPAN_KIND_CONSUMER';
      break;
  }

  return spanKind;
}
/**
 * Converts key-value tags to OTLP attributes and removes tags added by Grafana
 */


function tagsToAttributes(tags) {
  return tags.filter(t => !['span.kind', 'otel.library.name', 'otel.libary.version', 'otel.status_description', 'otel.status_code'].includes(t.key)).reduce((attributes, tag) => [...attributes, {
    key: tag.key,
    value: toAttributeValue(tag)
  }], []);
}
/**
 * Returns the correct OTLP AnyValue based on the value of the tag value
 */


function toAttributeValue(tag) {
  if (typeof tag.value === 'string') {
    return {
      stringValue: tag.value
    };
  } else if (typeof tag.value === 'boolean') {
    return {
      boolValue: tag.value
    };
  } else if (typeof tag.value === 'number') {
    if (tag.value % 1 === 0) {
      return {
        intValue: tag.value
      };
    } else {
      return {
        doubleValue: tag.value
      };
    }
  } else if (typeof tag.value === 'object') {
    if (Array.isArray(tag.value)) {
      const values = [];

      for (const val of tag.value) {
        values.push(toAttributeValue(val));
      }

      return {
        arrayValue: {
          values
        }
      };
    }
  }

  return {
    stringValue: tag.value
  };
}

function getOTLPStatus(tags) {
  let status = undefined;
  const statusCodeTag = tags.find(t => t.key === 'otel.status_code');

  if (statusCodeTag) {
    var _tags$find2;

    status = {
      code: statusCodeTag.value,
      message: (_tags$find2 = tags.find(t => t.key === 'otel_status_description')) === null || _tags$find2 === void 0 ? void 0 : _tags$find2.value
    };
  }

  return status;
}

function getOTLPEvents(logs) {
  if (!logs || !logs.length) {
    return undefined;
  }

  let events = [];

  for (const log of logs) {
    let event = {
      timeUnixNano: log.timestamp * 1000000,
      attributes: [],
      droppedAttributesCount: 0,
      name: ''
    };

    for (const field of log.fields) {
      event.attributes.push({
        key: field.key,
        value: toAttributeValue(field)
      });
    }

    events.push(event);
  }

  return events;
}

function getOTLPReferences(references) {
  if (!references || !references.length) {
    return undefined;
  }

  let links = [];

  for (const ref of references) {
    var _ref$tags;

    let link = {
      traceId: ref.traceID,
      spanId: ref.spanID,
      attributes: [],
      droppedAttributesCount: 0
    };

    if ((_ref$tags = ref.tags) !== null && _ref$tags !== void 0 && _ref$tags.length) {
      for (const tag of ref.tags) {
        var _link$attributes;

        (_link$attributes = link.attributes) === null || _link$attributes === void 0 ? void 0 : _link$attributes.push({
          key: tag.key,
          value: toAttributeValue(tag)
        });
      }
    }

    links.push(link);
  }

  return links;
}

function transformTrace(response, nodeGraph = false) {
  // We need to parse some of the fields which contain stringified json.
  // Seems like we can't just map the values as the frame we got from backend has some default processing
  // and will stringify the json back when we try to set it. So we create a new field and swap it instead.
  const frame = response.data[0];

  if (!frame) {
    return emptyDataQueryResponse;
  }

  try {
    parseJsonFields(frame);
  } catch (error) {
    console.error(error);
    return {
      error: {
        message: 'Unable to parse trace response: ' + error
      },
      data: []
    };
  }

  let data = [...response.data];

  if (nodeGraph) {
    data.push(...(0,_graphTransform__WEBPACK_IMPORTED_MODULE_3__.createGraphFrames)(frame));
  }

  return Object.assign({}, response, {
    data
  });
}
/**
 * Change fields which are json string into JS objects. Modifies the frame in place.
 */

function parseJsonFields(frame) {
  for (const fieldName of ['serviceTags', 'logs', 'tags', 'references']) {
    const field = frame.fields.find(f => f.name === fieldName);

    if (field) {
      const fieldIndex = frame.fields.indexOf(field);
      const values = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ArrayVector();
      const newField = Object.assign({}, field, {
        values,
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.other
      });

      for (let i = 0; i < field.values.length; i++) {
        const value = field.values.get(i);
        values.set(i, value === '' ? undefined : JSON.parse(value));
      }

      frame.fields[fieldIndex] = newField;
    }
  }
}

function createTableFrameFromSearch(data, instanceSettings) {
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string,
      config: {
        unit: 'string',
        displayNameFromDS: 'Trace ID',
        links: [{
          title: 'Trace: ${__value.raw}',
          url: '',
          internal: {
            datasourceUid: instanceSettings.uid,
            datasourceName: instanceSettings.name,
            query: {
              query: '${__value.raw}',
              queryType: 'traceId'
            }
          }
        }]
      }
    }, {
      name: 'traceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string,
      config: {
        displayNameFromDS: 'Trace name'
      }
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string,
      config: {
        displayNameFromDS: 'Start time'
      }
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number,
      config: {
        displayNameFromDS: 'Duration',
        unit: 'ms'
      }
    }],
    meta: {
      preferredVisualisationType: 'table'
    }
  });

  if (!(data !== null && data !== void 0 && data.length)) {
    return frame;
  } // Show the most recent traces


  const traceData = data.sort((a, b) => parseInt(b === null || b === void 0 ? void 0 : b.startTimeUnixNano, 10) / 1000000 - parseInt(a === null || a === void 0 ? void 0 : a.startTimeUnixNano, 10) / 1000000).map(transformToTraceData);

  for (const trace of traceData) {
    frame.add(trace);
  }

  return frame;
}

function transformToTraceData(data) {
  let traceName = '';

  if (data.rootServiceName) {
    traceName += data.rootServiceName + ' ';
  }

  if (data.rootTraceName) {
    traceName += data.rootTraceName;
  }

  const traceStartTime = parseInt(data.startTimeUnixNano, 10) / 1000000;
  let startTime = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(traceStartTime);

  if (Math.abs((0,date_fns_differenceInHours__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(traceStartTime), Date.now())) <= 1) {
    startTime = (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(traceStartTime), Date.now(), {
      addSuffix: true,
      includeSeconds: true
    });
  }

  return {
    traceID: data.traceID,
    startTime: startTime,
    duration: data.durationMs,
    traceName
  };
}

const emptyDataQueryResponse = {
  data: [new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.MutableDataFrame({
    fields: [{
      name: 'trace',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.trace,
      values: []
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'otlp'
      }
    }
  })]
};

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/utils/transforms.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformResponse": () => (/* binding */ transformResponse),
/* harmony export */   "transformToZipkin": () => (/* binding */ transformToZipkin)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");



/**
 * Transforms response to Grafana trace data frame.
 */
function transformResponse(zSpans) {
  const spanRows = zSpans.map(transformSpan);
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'spanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'parentSpanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'operationName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'serviceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'serviceTags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
    }, {
      name: 'logs',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other
    }, {
      name: 'tags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'zipkin'
      }
    }
  });

  for (const span of spanRows) {
    frame.add(span);
  }

  return frame;
}

function transformSpan(span) {
  var _span$localEndpoint, _span$remoteEndpoint, _span$annotations$map, _span$annotations;

  const row = {
    traceID: span.traceId,
    spanID: span.id,
    parentSpanID: span.parentId,
    operationName: span.name,
    serviceName: ((_span$localEndpoint = span.localEndpoint) === null || _span$localEndpoint === void 0 ? void 0 : _span$localEndpoint.serviceName) || ((_span$remoteEndpoint = span.remoteEndpoint) === null || _span$remoteEndpoint === void 0 ? void 0 : _span$remoteEndpoint.serviceName) || 'unknown',
    serviceTags: serviceTags(span),
    startTime: span.timestamp / 1000,
    duration: span.duration / 1000,
    logs: (_span$annotations$map = (_span$annotations = span.annotations) === null || _span$annotations === void 0 ? void 0 : _span$annotations.map(transformAnnotation)) !== null && _span$annotations$map !== void 0 ? _span$annotations$map : [],
    tags: Object.keys(span.tags || {}).reduce((acc, key) => {
      // If tag is error we remap it to simple boolean so that the trace ui will show an error icon.
      if (key === 'error') {
        acc.push({
          key: 'error',
          value: true
        });
        acc.push({
          key: 'errorValue',
          value: span.tags['error']
        });
        return acc;
      }

      acc.push({
        key,
        value: span.tags[key]
      });
      return acc;
    }, [])
  };

  if (span.kind) {
    var _row$tags;

    row.tags = [{
      key: 'kind',
      value: span.kind
    }, ...((_row$tags = row.tags) !== null && _row$tags !== void 0 ? _row$tags : [])];
  }

  if (span.shared) {
    var _row$tags2;

    row.tags = [{
      key: 'shared',
      value: span.shared
    }, ...((_row$tags2 = row.tags) !== null && _row$tags2 !== void 0 ? _row$tags2 : [])];
  }

  return row;
}
/**
 * Maps annotations as a log as that seems to be the closest thing.
 * See https://zipkin.io/zipkin-api/#/default/get_trace__traceId_
 */


function transformAnnotation(annotation) {
  return {
    timestamp: annotation.timestamp,
    fields: [{
      key: 'annotation',
      value: annotation.value
    }]
  };
}

function serviceTags(span) {
  const endpoint = span.localEndpoint || span.remoteEndpoint;

  if (!endpoint) {
    return [];
  }

  return [valueToTag('ipv4', endpoint.ipv4), valueToTag('ipv6', endpoint.ipv6), valueToTag('port', endpoint.port), valueToTag('endpointType', span.localEndpoint ? 'local' : 'remote')].filter(lodash__WEBPACK_IMPORTED_MODULE_0__.identity);
}

function valueToTag(key, value) {
  if (!value) {
    return undefined;
  }

  return {
    key,
    value
  };
}
/**
 * Transforms data frame to Zipkin response
 */


const transformToZipkin = data => {
  let response = [];

  for (let i = 0; i < data.length; i++) {
    var _span$tags$find, _span$tags$find2;

    const span = data.get(i);
    response.push(Object.assign({
      traceId: span.traceID,
      parentId: span.parentSpanID,
      name: span.operationName,
      id: span.spanID,
      timestamp: span.startTime * 1000,
      duration: span.duration * 1000
    }, getEndpoint(span), {
      annotations: span.logs.length ? span.logs.map(l => ({
        timestamp: l.timestamp,
        value: l.fields[0].value
      })) : undefined,
      tags: span.tags.length ? span.tags.filter(t => t.key !== 'kind' && t.key !== 'endpointType' && t.key !== 'shared').reduce((tags, t) => {
        if (t.key === 'error') {
          return Object.assign({}, tags, {
            [t.key]: span.tags.find(t => t.key === 'errorValue').value || ''
          });
        }

        return Object.assign({}, tags, {
          [t.key]: t.value
        });
      }, {}) : undefined,
      kind: (_span$tags$find = span.tags.find(t => t.key === 'kind')) === null || _span$tags$find === void 0 ? void 0 : _span$tags$find.value,
      shared: (_span$tags$find2 = span.tags.find(t => t.key === 'shared')) === null || _span$tags$find2 === void 0 ? void 0 : _span$tags$find2.value
    }));
  }

  return response;
}; // Returns remote or local endpoint object

const getEndpoint = span => {
  var _span$serviceTags$fin, _span$serviceTags$fin2, _span$serviceTags$fin3, _span$serviceTags$fin4;

  const key = ((_span$serviceTags$fin = span.serviceTags.find(t => t.key === 'endpointType')) === null || _span$serviceTags$fin === void 0 ? void 0 : _span$serviceTags$fin.value) === 'local' ? 'localEndpoint' : 'remoteEndpoint';
  return span.serviceName !== 'unknown' ? {
    [key]: {
      serviceName: span.serviceName,
      ipv4: (_span$serviceTags$fin2 = span.serviceTags.find(t => t.key === 'ipv4')) === null || _span$serviceTags$fin2 === void 0 ? void 0 : _span$serviceTags$fin2.value,
      ipv6: (_span$serviceTags$fin3 = span.serviceTags.find(t => t.key === 'ipv6')) === null || _span$serviceTags$fin3 === void 0 ? void 0 : _span$serviceTags$fin3.value,
      port: (_span$serviceTags$fin4 = span.serviceTags.find(t => t.key === 'port')) === null || _span$serviceTags$fin4 === void 0 ? void 0 : _span$serviceTags$fin4.value
    }
  } : undefined;
};

/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeGraph": () => (/* reexport safe */ _NodeGraph__WEBPACK_IMPORTED_MODULE_0__.NodeGraph)
/* harmony export */ });
/* harmony import */ var _NodeGraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/NodeGraph.tsx");


/***/ }),

/***/ "./.yarn/__virtual__/re-resizable-virtual-3cca0dab2b/0/cache/re-resizable-npm-6.9.9-2a772ae568-a2c8bfe866.zip/node_modules/re-resizable/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resizable": () => (/* binding */ Resizable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-dom-virtual-93e2c4839c/0/cache/react-dom-npm-17.0.2-f551215af1-1c1eaa3bca.zip/node_modules/react-dom/index.js");
/* harmony import */ var _resizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/re-resizable-virtual-3cca0dab2b/0/cache/re-resizable-npm-6.9.9-2a772ae568-a2c8bfe866.zip/node_modules/re-resizable/lib/resizer.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var DEFAULT_SIZE = {
    width: 'auto',
    height: 'auto',
};
var clamp = function (n, min, max) { return Math.max(Math.min(n, max), min); };
var snap = function (n, size) { return Math.round(n / size) * size; };
var hasDirection = function (dir, target) {
    return new RegExp(dir, 'i').test(target);
};
// INFO: In case of window is a Proxy and does not porxy Events correctly, use isTouchEvent & isMouseEvent to distinguish event type instead of `instanceof`.
var isTouchEvent = function (event) {
    return Boolean(event.touches && event.touches.length);
};
var isMouseEvent = function (event) {
    return Boolean((event.clientX || event.clientX === 0) &&
        (event.clientY || event.clientY === 0));
};
var findClosestSnap = function (n, snapArray, snapGap) {
    if (snapGap === void 0) { snapGap = 0; }
    var closestGapIndex = snapArray.reduce(function (prev, curr, index) { return (Math.abs(curr - n) < Math.abs(snapArray[prev] - n) ? index : prev); }, 0);
    var gap = Math.abs(snapArray[closestGapIndex] - n);
    return snapGap === 0 || gap < snapGap ? snapArray[closestGapIndex] : n;
};
var getStringSize = function (n) {
    n = n.toString();
    if (n === 'auto') {
        return n;
    }
    if (n.endsWith('px')) {
        return n;
    }
    if (n.endsWith('%')) {
        return n;
    }
    if (n.endsWith('vh')) {
        return n;
    }
    if (n.endsWith('vw')) {
        return n;
    }
    if (n.endsWith('vmax')) {
        return n;
    }
    if (n.endsWith('vmin')) {
        return n;
    }
    return n + "px";
};
var getPixelSize = function (size, parentSize, innerWidth, innerHeight) {
    if (size && typeof size === 'string') {
        if (size.endsWith('px')) {
            return Number(size.replace('px', ''));
        }
        if (size.endsWith('%')) {
            var ratio = Number(size.replace('%', '')) / 100;
            return parentSize * ratio;
        }
        if (size.endsWith('vw')) {
            var ratio = Number(size.replace('vw', '')) / 100;
            return innerWidth * ratio;
        }
        if (size.endsWith('vh')) {
            var ratio = Number(size.replace('vh', '')) / 100;
            return innerHeight * ratio;
        }
    }
    return size;
};
var calculateNewMax = function (parentSize, innerWidth, innerHeight, maxWidth, maxHeight, minWidth, minHeight) {
    maxWidth = getPixelSize(maxWidth, parentSize.width, innerWidth, innerHeight);
    maxHeight = getPixelSize(maxHeight, parentSize.height, innerWidth, innerHeight);
    minWidth = getPixelSize(minWidth, parentSize.width, innerWidth, innerHeight);
    minHeight = getPixelSize(minHeight, parentSize.height, innerWidth, innerHeight);
    return {
        maxWidth: typeof maxWidth === 'undefined' ? undefined : Number(maxWidth),
        maxHeight: typeof maxHeight === 'undefined' ? undefined : Number(maxHeight),
        minWidth: typeof minWidth === 'undefined' ? undefined : Number(minWidth),
        minHeight: typeof minHeight === 'undefined' ? undefined : Number(minHeight),
    };
};
var definedProps = [
    'as',
    'style',
    'className',
    'grid',
    'snap',
    'bounds',
    'boundsByDirection',
    'size',
    'defaultSize',
    'minWidth',
    'minHeight',
    'maxWidth',
    'maxHeight',
    'lockAspectRatio',
    'lockAspectRatioExtraWidth',
    'lockAspectRatioExtraHeight',
    'enable',
    'handleStyles',
    'handleClasses',
    'handleWrapperStyle',
    'handleWrapperClass',
    'children',
    'onResizeStart',
    'onResize',
    'onResizeStop',
    'handleComponent',
    'scale',
    'resizeRatio',
    'snapGap',
];
// HACK: This class is used to calculate % size.
var baseClassName = '__resizable_base__';
var Resizable = /** @class */ (function (_super) {
    __extends(Resizable, _super);
    function Resizable(props) {
        var _this = _super.call(this, props) || this;
        _this.ratio = 1;
        _this.resizable = null;
        // For parent boundary
        _this.parentLeft = 0;
        _this.parentTop = 0;
        // For boundary
        _this.resizableLeft = 0;
        _this.resizableRight = 0;
        _this.resizableTop = 0;
        _this.resizableBottom = 0;
        // For target boundary
        _this.targetLeft = 0;
        _this.targetTop = 0;
        _this.appendBase = function () {
            if (!_this.resizable || !_this.window) {
                return null;
            }
            var parent = _this.parentNode;
            if (!parent) {
                return null;
            }
            var element = _this.window.document.createElement('div');
            element.style.width = '100%';
            element.style.height = '100%';
            element.style.position = 'absolute';
            element.style.transform = 'scale(0, 0)';
            element.style.left = '0';
            element.style.flex = '0 0 100%';
            if (element.classList) {
                element.classList.add(baseClassName);
            }
            else {
                element.className += baseClassName;
            }
            parent.appendChild(element);
            return element;
        };
        _this.removeBase = function (base) {
            var parent = _this.parentNode;
            if (!parent) {
                return;
            }
            parent.removeChild(base);
        };
        _this.ref = function (c) {
            if (c) {
                _this.resizable = c;
            }
        };
        _this.state = {
            isResizing: false,
            width: typeof (_this.propsSize && _this.propsSize.width) === 'undefined'
                ? 'auto'
                : _this.propsSize && _this.propsSize.width,
            height: typeof (_this.propsSize && _this.propsSize.height) === 'undefined'
                ? 'auto'
                : _this.propsSize && _this.propsSize.height,
            direction: 'right',
            original: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            backgroundStyle: {
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0)',
                cursor: 'auto',
                opacity: 0,
                position: 'fixed',
                zIndex: 9999,
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
            },
            flexBasis: undefined,
        };
        _this.onResizeStart = _this.onResizeStart.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        return _this;
    }
    Object.defineProperty(Resizable.prototype, "parentNode", {
        get: function () {
            if (!this.resizable) {
                return null;
            }
            return this.resizable.parentNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "window", {
        get: function () {
            if (!this.resizable) {
                return null;
            }
            if (!this.resizable.ownerDocument) {
                return null;
            }
            return this.resizable.ownerDocument.defaultView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "propsSize", {
        get: function () {
            return this.props.size || this.props.defaultSize || DEFAULT_SIZE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "size", {
        get: function () {
            var width = 0;
            var height = 0;
            if (this.resizable && this.window) {
                var orgWidth = this.resizable.offsetWidth;
                var orgHeight = this.resizable.offsetHeight;
                // HACK: Set position `relative` to get parent size.
                //       This is because when re-resizable set `absolute`, I can not get base width correctly.
                var orgPosition = this.resizable.style.position;
                if (orgPosition !== 'relative') {
                    this.resizable.style.position = 'relative';
                }
                // INFO: Use original width or height if set auto.
                width = this.resizable.style.width !== 'auto' ? this.resizable.offsetWidth : orgWidth;
                height = this.resizable.style.height !== 'auto' ? this.resizable.offsetHeight : orgHeight;
                // Restore original position
                this.resizable.style.position = orgPosition;
            }
            return { width: width, height: height };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "sizeStyle", {
        get: function () {
            var _this = this;
            var size = this.props.size;
            var getSize = function (key) {
                if (typeof _this.state[key] === 'undefined' || _this.state[key] === 'auto') {
                    return 'auto';
                }
                if (_this.propsSize && _this.propsSize[key] && _this.propsSize[key].toString().endsWith('%')) {
                    if (_this.state[key].toString().endsWith('%')) {
                        return _this.state[key].toString();
                    }
                    var parentSize = _this.getParentSize();
                    var value = Number(_this.state[key].toString().replace('px', ''));
                    var percent = (value / parentSize[key]) * 100;
                    return percent + "%";
                }
                return getStringSize(_this.state[key]);
            };
            var width = size && typeof size.width !== 'undefined' && !this.state.isResizing
                ? getStringSize(size.width)
                : getSize('width');
            var height = size && typeof size.height !== 'undefined' && !this.state.isResizing
                ? getStringSize(size.height)
                : getSize('height');
            return { width: width, height: height };
        },
        enumerable: false,
        configurable: true
    });
    Resizable.prototype.getParentSize = function () {
        if (!this.parentNode) {
            if (!this.window) {
                return { width: 0, height: 0 };
            }
            return { width: this.window.innerWidth, height: this.window.innerHeight };
        }
        var base = this.appendBase();
        if (!base) {
            return { width: 0, height: 0 };
        }
        // INFO: To calculate parent width with flex layout
        var wrapChanged = false;
        var wrap = this.parentNode.style.flexWrap;
        if (wrap !== 'wrap') {
            wrapChanged = true;
            this.parentNode.style.flexWrap = 'wrap';
            // HACK: Use relative to get parent padding size
        }
        base.style.position = 'relative';
        base.style.minWidth = '100%';
        base.style.minHeight = '100%';
        var size = {
            width: base.offsetWidth,
            height: base.offsetHeight,
        };
        if (wrapChanged) {
            this.parentNode.style.flexWrap = wrap;
        }
        this.removeBase(base);
        return size;
    };
    Resizable.prototype.bindEvents = function () {
        if (this.window) {
            this.window.addEventListener('mouseup', this.onMouseUp);
            this.window.addEventListener('mousemove', this.onMouseMove);
            this.window.addEventListener('mouseleave', this.onMouseUp);
            this.window.addEventListener('touchmove', this.onMouseMove, {
                capture: true,
                passive: false,
            });
            this.window.addEventListener('touchend', this.onMouseUp);
        }
    };
    Resizable.prototype.unbindEvents = function () {
        if (this.window) {
            this.window.removeEventListener('mouseup', this.onMouseUp);
            this.window.removeEventListener('mousemove', this.onMouseMove);
            this.window.removeEventListener('mouseleave', this.onMouseUp);
            this.window.removeEventListener('touchmove', this.onMouseMove, true);
            this.window.removeEventListener('touchend', this.onMouseUp);
        }
    };
    Resizable.prototype.componentDidMount = function () {
        if (!this.resizable || !this.window) {
            return;
        }
        var computedStyle = this.window.getComputedStyle(this.resizable);
        this.setState({
            width: this.state.width || this.size.width,
            height: this.state.height || this.size.height,
            flexBasis: computedStyle.flexBasis !== 'auto' ? computedStyle.flexBasis : undefined,
        });
    };
    Resizable.prototype.componentWillUnmount = function () {
        if (this.window) {
            this.unbindEvents();
        }
    };
    Resizable.prototype.createSizeForCssProperty = function (newSize, kind) {
        var propsSize = this.propsSize && this.propsSize[kind];
        return this.state[kind] === 'auto' &&
            this.state.original[kind] === newSize &&
            (typeof propsSize === 'undefined' || propsSize === 'auto')
            ? 'auto'
            : newSize;
    };
    Resizable.prototype.calculateNewMaxFromBoundary = function (maxWidth, maxHeight) {
        var boundsByDirection = this.props.boundsByDirection;
        var direction = this.state.direction;
        var widthByDirection = boundsByDirection && hasDirection('left', direction);
        var heightByDirection = boundsByDirection && hasDirection('top', direction);
        var boundWidth;
        var boundHeight;
        if (this.props.bounds === 'parent') {
            var parent_1 = this.parentNode;
            if (parent_1) {
                boundWidth = widthByDirection
                    ? this.resizableRight - this.parentLeft
                    : parent_1.offsetWidth + (this.parentLeft - this.resizableLeft);
                boundHeight = heightByDirection
                    ? this.resizableBottom - this.parentTop
                    : parent_1.offsetHeight + (this.parentTop - this.resizableTop);
            }
        }
        else if (this.props.bounds === 'window') {
            if (this.window) {
                boundWidth = widthByDirection ? this.resizableRight : this.window.innerWidth - this.resizableLeft;
                boundHeight = heightByDirection ? this.resizableBottom : this.window.innerHeight - this.resizableTop;
            }
        }
        else if (this.props.bounds) {
            boundWidth = widthByDirection
                ? this.resizableRight - this.targetLeft
                : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft);
            boundHeight = heightByDirection
                ? this.resizableBottom - this.targetTop
                : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop);
        }
        if (boundWidth && Number.isFinite(boundWidth)) {
            maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
        }
        if (boundHeight && Number.isFinite(boundHeight)) {
            maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
        }
        return { maxWidth: maxWidth, maxHeight: maxHeight };
    };
    Resizable.prototype.calculateNewSizeFromDirection = function (clientX, clientY) {
        var scale = this.props.scale || 1;
        var resizeRatio = this.props.resizeRatio || 1;
        var _a = this.state, direction = _a.direction, original = _a.original;
        var _b = this.props, lockAspectRatio = _b.lockAspectRatio, lockAspectRatioExtraHeight = _b.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _b.lockAspectRatioExtraWidth;
        var newWidth = original.width;
        var newHeight = original.height;
        var extraHeight = lockAspectRatioExtraHeight || 0;
        var extraWidth = lockAspectRatioExtraWidth || 0;
        if (hasDirection('right', direction)) {
            newWidth = original.width + ((clientX - original.x) * resizeRatio) / scale;
            if (lockAspectRatio) {
                newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
            }
        }
        if (hasDirection('left', direction)) {
            newWidth = original.width - ((clientX - original.x) * resizeRatio) / scale;
            if (lockAspectRatio) {
                newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
            }
        }
        if (hasDirection('bottom', direction)) {
            newHeight = original.height + ((clientY - original.y) * resizeRatio) / scale;
            if (lockAspectRatio) {
                newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
            }
        }
        if (hasDirection('top', direction)) {
            newHeight = original.height - ((clientY - original.y) * resizeRatio) / scale;
            if (lockAspectRatio) {
                newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
            }
        }
        return { newWidth: newWidth, newHeight: newHeight };
    };
    Resizable.prototype.calculateNewSizeFromAspectRatio = function (newWidth, newHeight, max, min) {
        var _a = this.props, lockAspectRatio = _a.lockAspectRatio, lockAspectRatioExtraHeight = _a.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _a.lockAspectRatioExtraWidth;
        var computedMinWidth = typeof min.width === 'undefined' ? 10 : min.width;
        var computedMaxWidth = typeof max.width === 'undefined' || max.width < 0 ? newWidth : max.width;
        var computedMinHeight = typeof min.height === 'undefined' ? 10 : min.height;
        var computedMaxHeight = typeof max.height === 'undefined' || max.height < 0 ? newHeight : max.height;
        var extraHeight = lockAspectRatioExtraHeight || 0;
        var extraWidth = lockAspectRatioExtraWidth || 0;
        if (lockAspectRatio) {
            var extraMinWidth = (computedMinHeight - extraHeight) * this.ratio + extraWidth;
            var extraMaxWidth = (computedMaxHeight - extraHeight) * this.ratio + extraWidth;
            var extraMinHeight = (computedMinWidth - extraWidth) / this.ratio + extraHeight;
            var extraMaxHeight = (computedMaxWidth - extraWidth) / this.ratio + extraHeight;
            var lockedMinWidth = Math.max(computedMinWidth, extraMinWidth);
            var lockedMaxWidth = Math.min(computedMaxWidth, extraMaxWidth);
            var lockedMinHeight = Math.max(computedMinHeight, extraMinHeight);
            var lockedMaxHeight = Math.min(computedMaxHeight, extraMaxHeight);
            newWidth = clamp(newWidth, lockedMinWidth, lockedMaxWidth);
            newHeight = clamp(newHeight, lockedMinHeight, lockedMaxHeight);
        }
        else {
            newWidth = clamp(newWidth, computedMinWidth, computedMaxWidth);
            newHeight = clamp(newHeight, computedMinHeight, computedMaxHeight);
        }
        return { newWidth: newWidth, newHeight: newHeight };
    };
    Resizable.prototype.setBoundingClientRect = function () {
        // For parent boundary
        if (this.props.bounds === 'parent') {
            var parent_2 = this.parentNode;
            if (parent_2) {
                var parentRect = parent_2.getBoundingClientRect();
                this.parentLeft = parentRect.left;
                this.parentTop = parentRect.top;
            }
        }
        // For target(html element) boundary
        if (this.props.bounds && typeof this.props.bounds !== 'string') {
            var targetRect = this.props.bounds.getBoundingClientRect();
            this.targetLeft = targetRect.left;
            this.targetTop = targetRect.top;
        }
        // For boundary
        if (this.resizable) {
            var _a = this.resizable.getBoundingClientRect(), left = _a.left, top_1 = _a.top, right = _a.right, bottom = _a.bottom;
            this.resizableLeft = left;
            this.resizableRight = right;
            this.resizableTop = top_1;
            this.resizableBottom = bottom;
        }
    };
    Resizable.prototype.onResizeStart = function (event, direction) {
        if (!this.resizable || !this.window) {
            return;
        }
        var clientX = 0;
        var clientY = 0;
        if (event.nativeEvent && isMouseEvent(event.nativeEvent)) {
            clientX = event.nativeEvent.clientX;
            clientY = event.nativeEvent.clientY;
        }
        else if (event.nativeEvent && isTouchEvent(event.nativeEvent)) {
            clientX = event.nativeEvent.touches[0].clientX;
            clientY = event.nativeEvent.touches[0].clientY;
        }
        if (this.props.onResizeStart) {
            if (this.resizable) {
                var startResize = this.props.onResizeStart(event, direction, this.resizable);
                if (startResize === false) {
                    return;
                }
            }
        }
        // Fix #168
        if (this.props.size) {
            if (typeof this.props.size.height !== 'undefined' && this.props.size.height !== this.state.height) {
                this.setState({ height: this.props.size.height });
            }
            if (typeof this.props.size.width !== 'undefined' && this.props.size.width !== this.state.width) {
                this.setState({ width: this.props.size.width });
            }
        }
        // For lockAspectRatio case
        this.ratio =
            typeof this.props.lockAspectRatio === 'number' ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var flexBasis;
        var computedStyle = this.window.getComputedStyle(this.resizable);
        if (computedStyle.flexBasis !== 'auto') {
            var parent_3 = this.parentNode;
            if (parent_3) {
                var dir = this.window.getComputedStyle(parent_3).flexDirection;
                this.flexDir = dir.startsWith('row') ? 'row' : 'column';
                flexBasis = computedStyle.flexBasis;
            }
        }
        // For boundary
        this.setBoundingClientRect();
        this.bindEvents();
        var state = {
            original: {
                x: clientX,
                y: clientY,
                width: this.size.width,
                height: this.size.height,
            },
            isResizing: true,
            backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(event.target).cursor || 'auto' }),
            direction: direction,
            flexBasis: flexBasis,
        };
        this.setState(state);
    };
    Resizable.prototype.onMouseMove = function (event) {
        var _this = this;
        if (!this.state.isResizing || !this.resizable || !this.window) {
            return;
        }
        if (this.window.TouchEvent && isTouchEvent(event)) {
            try {
                event.preventDefault();
                event.stopPropagation();
            }
            catch (e) {
                // Ignore on fail
            }
        }
        var _a = this.props, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, minWidth = _a.minWidth, minHeight = _a.minHeight;
        var clientX = isTouchEvent(event) ? event.touches[0].clientX : event.clientX;
        var clientY = isTouchEvent(event) ? event.touches[0].clientY : event.clientY;
        var _b = this.state, direction = _b.direction, original = _b.original, width = _b.width, height = _b.height;
        var parentSize = this.getParentSize();
        var max = calculateNewMax(parentSize, this.window.innerWidth, this.window.innerHeight, maxWidth, maxHeight, minWidth, minHeight);
        maxWidth = max.maxWidth;
        maxHeight = max.maxHeight;
        minWidth = max.minWidth;
        minHeight = max.minHeight;
        // Calculate new size
        var _c = this.calculateNewSizeFromDirection(clientX, clientY), newHeight = _c.newHeight, newWidth = _c.newWidth;
        // Calculate max size from boundary settings
        var boundaryMax = this.calculateNewMaxFromBoundary(maxWidth, maxHeight);
        if (this.props.snap && this.props.snap.x) {
            newWidth = findClosestSnap(newWidth, this.props.snap.x, this.props.snapGap);
        }
        if (this.props.snap && this.props.snap.y) {
            newHeight = findClosestSnap(newHeight, this.props.snap.y, this.props.snapGap);
        }
        // Calculate new size from aspect ratio
        var newSize = this.calculateNewSizeFromAspectRatio(newWidth, newHeight, { width: boundaryMax.maxWidth, height: boundaryMax.maxHeight }, { width: minWidth, height: minHeight });
        newWidth = newSize.newWidth;
        newHeight = newSize.newHeight;
        if (this.props.grid) {
            var newGridWidth = snap(newWidth, this.props.grid[0]);
            var newGridHeight = snap(newHeight, this.props.grid[1]);
            var gap = this.props.snapGap || 0;
            newWidth = gap === 0 || Math.abs(newGridWidth - newWidth) <= gap ? newGridWidth : newWidth;
            newHeight = gap === 0 || Math.abs(newGridHeight - newHeight) <= gap ? newGridHeight : newHeight;
        }
        var delta = {
            width: newWidth - original.width,
            height: newHeight - original.height,
        };
        if (width && typeof width === 'string') {
            if (width.endsWith('%')) {
                var percent = (newWidth / parentSize.width) * 100;
                newWidth = percent + "%";
            }
            else if (width.endsWith('vw')) {
                var vw = (newWidth / this.window.innerWidth) * 100;
                newWidth = vw + "vw";
            }
            else if (width.endsWith('vh')) {
                var vh = (newWidth / this.window.innerHeight) * 100;
                newWidth = vh + "vh";
            }
        }
        if (height && typeof height === 'string') {
            if (height.endsWith('%')) {
                var percent = (newHeight / parentSize.height) * 100;
                newHeight = percent + "%";
            }
            else if (height.endsWith('vw')) {
                var vw = (newHeight / this.window.innerWidth) * 100;
                newHeight = vw + "vw";
            }
            else if (height.endsWith('vh')) {
                var vh = (newHeight / this.window.innerHeight) * 100;
                newHeight = vh + "vh";
            }
        }
        var newState = {
            width: this.createSizeForCssProperty(newWidth, 'width'),
            height: this.createSizeForCssProperty(newHeight, 'height'),
        };
        if (this.flexDir === 'row') {
            newState.flexBasis = newState.width;
        }
        else if (this.flexDir === 'column') {
            newState.flexBasis = newState.height;
        }
        // For v18, update state sync
        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(function () {
            _this.setState(newState);
        });
        if (this.props.onResize) {
            this.props.onResize(event, direction, this.resizable, delta);
        }
    };
    Resizable.prototype.onMouseUp = function (event) {
        var _a = this.state, isResizing = _a.isResizing, direction = _a.direction, original = _a.original;
        if (!isResizing || !this.resizable) {
            return;
        }
        var delta = {
            width: this.size.width - original.width,
            height: this.size.height - original.height,
        };
        if (this.props.onResizeStop) {
            this.props.onResizeStop(event, direction, this.resizable, delta);
        }
        if (this.props.size) {
            this.setState(this.props.size);
        }
        this.unbindEvents();
        this.setState({
            isResizing: false,
            backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: 'auto' }),
        });
    };
    Resizable.prototype.updateSize = function (size) {
        this.setState({ width: size.width, height: size.height });
    };
    Resizable.prototype.renderResizer = function () {
        var _this = this;
        var _a = this.props, enable = _a.enable, handleStyles = _a.handleStyles, handleClasses = _a.handleClasses, handleWrapperStyle = _a.handleWrapperStyle, handleWrapperClass = _a.handleWrapperClass, handleComponent = _a.handleComponent;
        if (!enable) {
            return null;
        }
        var resizers = Object.keys(enable).map(function (dir) {
            if (enable[dir] !== false) {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_resizer__WEBPACK_IMPORTED_MODULE_2__.Resizer, { key: dir, direction: dir, onResizeStart: _this.onResizeStart, replaceStyles: handleStyles && handleStyles[dir], className: handleClasses && handleClasses[dir] }, handleComponent && handleComponent[dir] ? handleComponent[dir] : null));
            }
            return null;
        });
        // #93 Wrap the resize box in span (will not break 100% width/height)
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: handleWrapperClass, style: handleWrapperStyle }, resizers));
    };
    Resizable.prototype.render = function () {
        var _this = this;
        var extendsProps = Object.keys(this.props).reduce(function (acc, key) {
            if (definedProps.indexOf(key) !== -1) {
                return acc;
            }
            acc[key] = _this.props[key];
            return acc;
        }, {});
        var style = __assign(__assign(__assign({ position: 'relative', userSelect: this.state.isResizing ? 'none' : 'auto' }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: 'border-box', flexShrink: 0 });
        if (this.state.flexBasis) {
            style.flexBasis = this.state.flexBasis;
        }
        var Wrapper = this.props.as || 'div';
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, __assign({ ref: this.ref, style: style, className: this.props.className }, extendsProps),
            this.state.isResizing && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: this.state.backgroundStyle }),
            this.props.children,
            this.renderResizer()));
    };
    Resizable.defaultProps = {
        as: 'div',
        onResizeStart: function () { },
        onResize: function () { },
        onResizeStop: function () { },
        enable: {
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true,
        },
        style: {},
        grid: [1, 1],
        lockAspectRatio: false,
        lockAspectRatioExtraWidth: 0,
        lockAspectRatioExtraHeight: 0,
        scale: 1,
        resizeRatio: 1,
        snapGap: 0,
    };
    return Resizable;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent));



/***/ }),

/***/ "./.yarn/__virtual__/re-resizable-virtual-3cca0dab2b/0/cache/re-resizable-npm-6.9.9-2a772ae568-a2c8bfe866.zip/node_modules/re-resizable/lib/resizer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resizer": () => (/* binding */ Resizer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var rowSizeBase = {
    width: '100%',
    height: '10px',
    top: '0px',
    left: '0px',
    cursor: 'row-resize',
};
var colSizeBase = {
    width: '10px',
    height: '100%',
    top: '0px',
    left: '0px',
    cursor: 'col-resize',
};
var edgeBase = {
    width: '20px',
    height: '20px',
    position: 'absolute',
};
var styles = {
    top: __assign(__assign({}, rowSizeBase), { top: '-5px' }),
    right: __assign(__assign({}, colSizeBase), { left: undefined, right: '-5px' }),
    bottom: __assign(__assign({}, rowSizeBase), { top: undefined, bottom: '-5px' }),
    left: __assign(__assign({}, colSizeBase), { left: '-5px' }),
    topRight: __assign(__assign({}, edgeBase), { right: '-10px', top: '-10px', cursor: 'ne-resize' }),
    bottomRight: __assign(__assign({}, edgeBase), { right: '-10px', bottom: '-10px', cursor: 'se-resize' }),
    bottomLeft: __assign(__assign({}, edgeBase), { left: '-10px', bottom: '-10px', cursor: 'sw-resize' }),
    topLeft: __assign(__assign({}, edgeBase), { left: '-10px', top: '-10px', cursor: 'nw-resize' }),
};
var Resizer = /** @class */ (function (_super) {
    __extends(Resizer, _super);
    function Resizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMouseDown = function (e) {
            _this.props.onResizeStart(e, _this.props.direction);
        };
        _this.onTouchStart = function (e) {
            _this.props.onResizeStart(e, _this.props.direction);
        };
        return _this;
    }
    Resizer.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.props.className || '', style: __assign(__assign({ position: 'absolute', userSelect: 'none' }, styles[this.props.direction]), (this.props.replaceStyles || {})), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children));
    };
    return Resizer;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent));



/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useInterval.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

var useInterval = function (callback, delay) {
    var savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function () { });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        savedCallback.current = callback;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInterval);


/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/usePrevious.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePrevious(state) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        ref.current = state;
    });
    return ref.current;
}


/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useRafState.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useUnmount.js");


var useRafState = function (initialState) {
    var frame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), state = _a[0], setState = _a[1];
    var setRafState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    (0,_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRafState);


/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useWindowSize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useRafState.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/misc/util.js");



var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = (0,_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        width: _misc_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser ? window.innerWidth : initialWidth,
        height: _misc_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (_misc_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.on)(window, 'resize', handler_1);
            return function () {
                (0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.off)(window, 'resize', handler_1);
            };
        }
    }, []);
    return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowSize);


/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextAPI": () => (/* binding */ ContextAPI)
/* harmony export */ });
/* harmony import */ var _context_NoopContextManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js");
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};



var API_NAME = 'context';
var NOOP_CONTEXT_MANAGER = new _context_NoopContextManager__WEBPACK_IMPORTED_MODULE_0__.NoopContextManager();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */
var ContextAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function ContextAPI() {
    }
    /** Get the singleton instance of the Context API */
    ContextAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */
    ContextAPI.prototype.setGlobalContextManager = function (contextManager) {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.registerGlobal)(API_NAME, contextManager, _diag__WEBPACK_IMPORTED_MODULE_2__.DiagAPI.instance());
    };
    /**
     * Get the currently active context
     */
    ContextAPI.prototype.active = function () {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */
    ContextAPI.prototype.with = function (context, fn, thisArg) {
        var _a;
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return (_a = this._getContextManager()).with.apply(_a, __spreadArray([context, fn, thisArg], args));
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */
    ContextAPI.prototype.bind = function (context, target) {
        return this._getContextManager().bind(context, target);
    };
    ContextAPI.prototype._getContextManager = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobal)(API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    /** Disable and remove the global context manager */
    ContextAPI.prototype.disable = function () {
        this._getContextManager().disable();
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_2__.DiagAPI.instance());
    };
    return ContextAPI;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagAPI": () => (/* binding */ DiagAPI)
/* harmony export */ });
/* harmony import */ var _diag_ComponentLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js");
/* harmony import */ var _diag_internal_logLevelLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js");
/* harmony import */ var _diag_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/types.js");
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var API_NAME = 'diag';
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 */
var DiagAPI = /** @class */ (function () {
    /**
     * Private internal constructor
     * @private
     */
    function DiagAPI() {
        function _logProxy(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var logger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.getGlobal)('diag');
                // shortcut if logger not set
                if (!logger)
                    return;
                return logger[funcName].apply(logger, args);
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        var self = this;
        // DiagAPI specific functions
        self.setLogger = function (logger, logLevel) {
            var _a, _b;
            if (logLevel === void 0) { logLevel = _diag_types__WEBPACK_IMPORTED_MODULE_2__.DiagLogLevel.INFO; }
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                var err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            var oldLogger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.getGlobal)('diag');
            var newLogger = (0,_diag_internal_logLevelLogger__WEBPACK_IMPORTED_MODULE_1__.createLogLevelDiagLogger)(logLevel, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger) {
                var stack = (_b = new Error().stack) !== null && _b !== void 0 ? _b : '<failed to generate stacktrace>';
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.registerGlobal)('diag', newLogger, self, true);
        };
        self.disable = function () {
            (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.unregisterGlobal)(API_NAME, self);
        };
        self.createComponentLogger = function (options) {
            return new _diag_ComponentLogger__WEBPACK_IMPORTED_MODULE_0__.DiagComponentLogger(options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
    /** Get the singleton instance of the DiagAPI API */
    DiagAPI.instance = function () {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    };
    return DiagAPI;
}());

//# sourceMappingURL=diag.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/propagation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropagationAPI": () => (/* binding */ PropagationAPI)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _propagation_NoopTextMapPropagator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js");
/* harmony import */ var _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js");
/* harmony import */ var _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js");
/* harmony import */ var _baggage_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var API_NAME = 'propagation';
var NOOP_TEXT_MAP_PROPAGATOR = new _propagation_NoopTextMapPropagator__WEBPACK_IMPORTED_MODULE_1__.NoopTextMapPropagator();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 */
var PropagationAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function PropagationAPI() {
        this.createBaggage = _baggage_utils__WEBPACK_IMPORTED_MODULE_4__.createBaggage;
        this.getBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.getBaggage;
        this.setBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.setBaggage;
        this.deleteBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.deleteBaggage;
    }
    /** Get the singleton instance of the Propagator API */
    PropagationAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    };
    /**
     * Set the current propagator.
     *
     * @returns true if the propagator was successfully registered, else false
     */
    PropagationAPI.prototype.setGlobalPropagator = function (propagator) {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.registerGlobal)(API_NAME, propagator, _diag__WEBPACK_IMPORTED_MODULE_5__.DiagAPI.instance());
    };
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param context Context carrying tracing data to inject
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     */
    PropagationAPI.prototype.inject = function (context, carrier, setter) {
        if (setter === void 0) { setter = _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__.defaultTextMapSetter; }
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    /**
     * Extract context from a carrier
     *
     * @param context Context which the newly created context will inherit from
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     */
    PropagationAPI.prototype.extract = function (context, carrier, getter) {
        if (getter === void 0) { getter = _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__.defaultTextMapGetter; }
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    /**
     * Return a list of all fields which may be used by the propagator.
     */
    PropagationAPI.prototype.fields = function () {
        return this._getGlobalPropagator().fields();
    };
    /** Remove the global propagator */
    PropagationAPI.prototype.disable = function () {
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_5__.DiagAPI.instance());
    };
    PropagationAPI.prototype._getGlobalPropagator = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI;
}());

//# sourceMappingURL=propagation.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/trace.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceAPI": () => (/* binding */ TraceAPI)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js");
/* harmony import */ var _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/* harmony import */ var _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var API_NAME = 'trace';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */
var TraceAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function TraceAPI() {
        this._proxyTracerProvider = new _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__.ProxyTracerProvider();
        this.wrapSpanContext = _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__.wrapSpanContext;
        this.isSpanContextValid = _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__.isSpanContextValid;
        this.deleteSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.deleteSpan;
        this.getSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.getSpan;
        this.getSpanContext = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.getSpanContext;
        this.setSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.setSpan;
        this.setSpanContext = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.setSpanContext;
    }
    /** Get the singleton instance of the Trace API */
    TraceAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */
    TraceAPI.prototype.setGlobalTracerProvider = function (provider) {
        var success = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.registerGlobal)(API_NAME, this._proxyTracerProvider, _diag__WEBPACK_IMPORTED_MODULE_4__.DiagAPI.instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    };
    /**
     * Returns the global tracer provider.
     */
    TraceAPI.prototype.getTracerProvider = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)(API_NAME) || this._proxyTracerProvider;
    };
    /**
     * Returns a tracer from the global tracer provider.
     */
    TraceAPI.prototype.getTracer = function (name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */
    TraceAPI.prototype.disable = function () {
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_4__.DiagAPI.instance());
        this._proxyTracerProvider = new _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__.ProxyTracerProvider();
    };
    return TraceAPI;
}());

//# sourceMappingURL=trace.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteBaggage": () => (/* binding */ deleteBaggage),
/* harmony export */   "getBaggage": () => (/* binding */ getBaggage),
/* harmony export */   "setBaggage": () => (/* binding */ setBaggage)
/* harmony export */ });
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Baggage key
 */
var BAGGAGE_KEY = (0,_context_context__WEBPACK_IMPORTED_MODULE_0__.createContextKey)('OpenTelemetry Baggage Key');
/**
 * Retrieve the current baggage from the given context
 *
 * @param {Context} Context that manage all context values
 * @returns {Baggage} Extracted baggage from the context
 */
function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || undefined;
}
/**
 * Store a baggage in the given context
 *
 * @param {Context} Context that manage all context values
 * @param {Baggage} baggage that will be set in the actual context
 */
function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
/**
 * Delete the baggage stored in the given context
 *
 * @param {Context} Context that manage all context values
 */
function deleteBaggage(context) {
    return context.deleteValue(BAGGAGE_KEY);
}
//# sourceMappingURL=context-helpers.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaggageImpl": () => (/* binding */ BaggageImpl)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var BaggageImpl = /** @class */ (function () {
    function BaggageImpl(entries) {
        this._entries = entries ? new Map(entries) : new Map();
    }
    BaggageImpl.prototype.getEntry = function (key) {
        var entry = this._entries.get(key);
        if (!entry) {
            return undefined;
        }
        return Object.assign({}, entry);
    };
    BaggageImpl.prototype.getAllEntries = function () {
        return Array.from(this._entries.entries()).map(function (_a) {
            var k = _a[0], v = _a[1];
            return [k, v];
        });
    };
    BaggageImpl.prototype.setEntry = function (key, entry) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntry = function (key) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntries = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var newBaggage = new BaggageImpl(this._entries);
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            newBaggage._entries.delete(key);
        }
        return newBaggage;
    };
    BaggageImpl.prototype.clear = function () {
        return new BaggageImpl();
    };
    return BaggageImpl;
}());

//# sourceMappingURL=baggage-impl.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baggageEntryMetadataSymbol": () => (/* binding */ baggageEntryMetadataSymbol)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Symbol used to make BaggageEntryMetadata an opaque type
 */
var baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata');
//# sourceMappingURL=symbol.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baggageEntryMetadataFromString": () => (/* binding */ baggageEntryMetadataFromString),
/* harmony export */   "createBaggage": () => (/* binding */ createBaggage)
/* harmony export */ });
/* harmony import */ var _api_diag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/* harmony import */ var _internal_baggage_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js");
/* harmony import */ var _internal_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var diag = _api_diag__WEBPACK_IMPORTED_MODULE_0__.DiagAPI.instance();
/**
 * Create a new Baggage with optional entries
 *
 * @param entries An array of baggage entries the new baggage should contain
 */
function createBaggage(entries) {
    if (entries === void 0) { entries = {}; }
    return new _internal_baggage_impl__WEBPACK_IMPORTED_MODULE_1__.BaggageImpl(new Map(Object.entries(entries)));
}
/**
 * Create a serializable BaggageEntryMetadata object from a string.
 *
 * @param str string metadata. Format is currently not defined by the spec and has no special meaning.
 *
 */
function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        diag.error("Cannot create baggage metadata from unknown type: " + typeof str);
        str = '';
    }
    return {
        __TYPE__: _internal_symbol__WEBPACK_IMPORTED_MODULE_2__.baggageEntryMetadataSymbol,
        toString: function () {
            return str;
        },
    };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Attributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=Attributes.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Exception.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=Exception.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Time.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=Time.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopContextManager": () => (/* binding */ NoopContextManager)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};

var NoopContextManager = /** @class */ (function () {
    function NoopContextManager() {
    }
    NoopContextManager.prototype.active = function () {
        return _context__WEBPACK_IMPORTED_MODULE_0__.ROOT_CONTEXT;
    };
    NoopContextManager.prototype.with = function (_context, fn, thisArg) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return fn.call.apply(fn, __spreadArray([thisArg], args));
    };
    NoopContextManager.prototype.bind = function (_context, target) {
        return target;
    };
    NoopContextManager.prototype.enable = function () {
        return this;
    };
    NoopContextManager.prototype.disable = function () {
        return this;
    };
    return NoopContextManager;
}());

//# sourceMappingURL=NoopContextManager.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROOT_CONTEXT": () => (/* binding */ ROOT_CONTEXT),
/* harmony export */   "createContextKey": () => (/* binding */ createContextKey)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Get a key to uniquely identify a context value */
function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
var BaseContext = /** @class */ (function () {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */
    function BaseContext(parentContext) {
        // for minification
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function (key) { return self._currentContext.get(key); };
        self.setValue = function (key, value) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function (key) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext;
}());
/** The root context is used as the default parent context when there is no active context */
var ROOT_CONTEXT = new BaseContext();
//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagComponentLogger": () => (/* binding */ DiagComponentLogger)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Component Logger which is meant to be used as part of any component which
 * will add automatically additional namespace in front of the log message.
 * It will then forward all message to global diag logger
 * @example
 * const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
 * cLogger.debug('test');
 * // @opentelemetry/instrumentation-http test
 */
var DiagComponentLogger = /** @class */ (function () {
    function DiagComponentLogger(props) {
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    DiagComponentLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('debug', this._namespace, args);
    };
    DiagComponentLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('error', this._namespace, args);
    };
    DiagComponentLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('info', this._namespace, args);
    };
    DiagComponentLogger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('warn', this._namespace, args);
    };
    DiagComponentLogger.prototype.verbose = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('verbose', this._namespace, args);
    };
    return DiagComponentLogger;
}());

function logProxy(funcName, namespace, args) {
    var logger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)('diag');
    // shortcut if logger not set
    if (!logger) {
        return;
    }
    args.unshift(namespace);
    return logger[funcName].apply(logger, args);
}
//# sourceMappingURL=ComponentLogger.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagConsoleLogger": () => (/* binding */ DiagConsoleLogger)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var consoleMap = [
    { n: 'error', c: 'error' },
    { n: 'warn', c: 'warn' },
    { n: 'info', c: 'info' },
    { n: 'debug', c: 'debug' },
    { n: 'verbose', c: 'trace' },
];
/**
 * A simple Immutable Console based diagnostic logger which will output any messages to the Console.
 * If you want to limit the amount of logging to a specific level or lower use the
 * {@link createLogLevelDiagLogger}
 */
var DiagConsoleLogger = /** @class */ (function () {
    function DiagConsoleLogger() {
        function _consoleFunc(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (console) {
                    // Some environments only expose the console when the F12 developer console is open
                    // eslint-disable-next-line no-console
                    var theFunc = console[funcName];
                    if (typeof theFunc !== 'function') {
                        // Not all environments support all functions
                        // eslint-disable-next-line no-console
                        theFunc = console.log;
                    }
                    // One last final check
                    if (typeof theFunc === 'function') {
                        return theFunc.apply(console, args);
                    }
                }
            };
        }
        for (var i = 0; i < consoleMap.length; i++) {
            this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
        }
    }
    return DiagConsoleLogger;
}());

//# sourceMappingURL=consoleLogger.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagConsoleLogger": () => (/* reexport safe */ _consoleLogger__WEBPACK_IMPORTED_MODULE_0__.DiagConsoleLogger),
/* harmony export */   "DiagLogLevel": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.DiagLogLevel)
/* harmony export */ });
/* harmony import */ var _consoleLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/types.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLogLevelDiagLogger": () => (/* binding */ createLogLevelDiagLogger)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/types.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.NONE) {
        maxLevel = _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.NONE;
    }
    else if (maxLevel > _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ALL) {
        maxLevel = _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ALL;
    }
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function () { };
    }
    return {
        error: _filterFunc('error', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ERROR),
        warn: _filterFunc('warn', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.WARN),
        info: _filterFunc('info', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.INFO),
        debug: _filterFunc('debug', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.DEBUG),
        verbose: _filterFunc('verbose', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.VERBOSE),
    };
}
//# sourceMappingURL=logLevelLogger.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagLogLevel": () => (/* binding */ DiagLogLevel)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */
var DiagLogLevel;
(function (DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */
    DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */
    DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */
    DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */
    DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */
    DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */
    DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */
    DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagConsoleLogger": () => (/* reexport safe */ _diag__WEBPACK_IMPORTED_MODULE_5__.DiagConsoleLogger),
/* harmony export */   "DiagLogLevel": () => (/* reexport safe */ _diag__WEBPACK_IMPORTED_MODULE_5__.DiagLogLevel),
/* harmony export */   "INVALID_SPANID": () => (/* reexport safe */ _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_25__.INVALID_SPANID),
/* harmony export */   "INVALID_SPAN_CONTEXT": () => (/* reexport safe */ _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_25__.INVALID_SPAN_CONTEXT),
/* harmony export */   "INVALID_TRACEID": () => (/* reexport safe */ _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_25__.INVALID_TRACEID),
/* harmony export */   "ProxyTracer": () => (/* reexport safe */ _trace_ProxyTracer__WEBPACK_IMPORTED_MODULE_9__.ProxyTracer),
/* harmony export */   "ProxyTracerProvider": () => (/* reexport safe */ _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_10__.ProxyTracerProvider),
/* harmony export */   "ROOT_CONTEXT": () => (/* reexport safe */ _context_context__WEBPACK_IMPORTED_MODULE_26__.ROOT_CONTEXT),
/* harmony export */   "SamplingDecision": () => (/* reexport safe */ _trace_SamplingResult__WEBPACK_IMPORTED_MODULE_12__.SamplingDecision),
/* harmony export */   "SpanKind": () => (/* reexport safe */ _trace_span_kind__WEBPACK_IMPORTED_MODULE_14__.SpanKind),
/* harmony export */   "SpanStatusCode": () => (/* reexport safe */ _trace_status__WEBPACK_IMPORTED_MODULE_17__.SpanStatusCode),
/* harmony export */   "TraceFlags": () => (/* reexport safe */ _trace_trace_flags__WEBPACK_IMPORTED_MODULE_18__.TraceFlags),
/* harmony export */   "baggageEntryMetadataFromString": () => (/* reexport safe */ _baggage_utils__WEBPACK_IMPORTED_MODULE_1__.baggageEntryMetadataFromString),
/* harmony export */   "context": () => (/* binding */ context),
/* harmony export */   "createContextKey": () => (/* reexport safe */ _context_context__WEBPACK_IMPORTED_MODULE_26__.createContextKey),
/* harmony export */   "createTraceState": () => (/* reexport safe */ _trace_internal_utils__WEBPACK_IMPORTED_MODULE_20__.createTraceState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultTextMapGetter": () => (/* reexport safe */ _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_6__.defaultTextMapGetter),
/* harmony export */   "defaultTextMapSetter": () => (/* reexport safe */ _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_6__.defaultTextMapSetter),
/* harmony export */   "diag": () => (/* binding */ diag),
/* harmony export */   "isSpanContextValid": () => (/* reexport safe */ _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_24__.isSpanContextValid),
/* harmony export */   "isValidSpanId": () => (/* reexport safe */ _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_24__.isValidSpanId),
/* harmony export */   "isValidTraceId": () => (/* reexport safe */ _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_24__.isValidTraceId),
/* harmony export */   "propagation": () => (/* binding */ propagation),
/* harmony export */   "trace": () => (/* binding */ trace)
/* harmony export */ });
/* harmony import */ var _baggage_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/types.js");
/* harmony import */ var _baggage_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/utils.js");
/* harmony import */ var _common_Exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Exception.js");
/* harmony import */ var _common_Time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Time.js");
/* harmony import */ var _common_Attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Attributes.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/index.js");
/* harmony import */ var _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js");
/* harmony import */ var _trace_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/attributes.js");
/* harmony import */ var _trace_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/link.js");
/* harmony import */ var _trace_ProxyTracer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js");
/* harmony import */ var _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js");
/* harmony import */ var _trace_Sampler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/Sampler.js");
/* harmony import */ var _trace_SamplingResult__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js");
/* harmony import */ var _trace_span_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span_context.js");
/* harmony import */ var _trace_span_kind__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span_kind.js");
/* harmony import */ var _trace_span__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span.js");
/* harmony import */ var _trace_SpanOptions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/SpanOptions.js");
/* harmony import */ var _trace_status__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/status.js");
/* harmony import */ var _trace_trace_flags__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/* harmony import */ var _trace_trace_state__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_state.js");
/* harmony import */ var _trace_internal_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/utils.js");
/* harmony import */ var _trace_tracer_provider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer_provider.js");
/* harmony import */ var _trace_tracer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer.js");
/* harmony import */ var _trace_tracer_options__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer_options.js");
/* harmony import */ var _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/* harmony import */ var _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/types.js");
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/context.js");
/* harmony import */ var _api_trace__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/trace.js");
/* harmony import */ var _api_propagation__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/propagation.js");
/* harmony import */ var _api_diag__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





























/** Entrypoint for context API */
var context = _api_context__WEBPACK_IMPORTED_MODULE_28__.ContextAPI.getInstance();

/** Entrypoint for trace API */
var trace = _api_trace__WEBPACK_IMPORTED_MODULE_29__.TraceAPI.getInstance();

/** Entrypoint for propagation API */
var propagation = _api_propagation__WEBPACK_IMPORTED_MODULE_30__.PropagationAPI.getInstance();

/**
 * Entrypoint for Diag API.
 * Defines Diagnostic handler used for internal diagnostic logging operations.
 * The default provides a Noop DiagLogger implementation which may be changed via the
 * diag.setLogger(logger: DiagLogger) function.
 */
var diag = _api_diag__WEBPACK_IMPORTED_MODULE_31__.DiagAPI.instance();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    trace: trace,
    context: context,
    propagation: propagation,
    diag: diag,
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobal": () => (/* binding */ getGlobal),
/* harmony export */   "registerGlobal": () => (/* binding */ registerGlobal),
/* harmony export */   "unregisterGlobal": () => (/* binding */ unregisterGlobal)
/* harmony export */ });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/platform/browser/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/version.js");
/* harmony import */ var _semver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/semver.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var major = _version__WEBPACK_IMPORTED_MODULE_1__.VERSION.split('.')[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = _platform__WEBPACK_IMPORTED_MODULE_0__._globalThis;
function registerGlobal(type, instance, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) { allowOverride = false; }
    var api = (_global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: _version__WEBPACK_IMPORTED_MODULE_1__.VERSION,
    });
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== _version__WEBPACK_IMPORTED_MODULE_1__.VERSION) {
        // All registered APIs must be of the same version exactly
        var err = new Error('@opentelemetry/api: All API registration versions must match');
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + _version__WEBPACK_IMPORTED_MODULE_1__.VERSION + ".");
    return true;
}
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !(0,_semver__WEBPACK_IMPORTED_MODULE_2__.isCompatible)(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + _version__WEBPACK_IMPORTED_MODULE_1__.VERSION + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
}
//# sourceMappingURL=global-utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/semver.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_makeCompatibilityCheck": () => (/* binding */ _makeCompatibilityCheck),
/* harmony export */   "isCompatible": () => (/* binding */ isCompatible)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/version.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
/**
 * Create a function to test an API version to see if it is compatible with the provided ownVersion.
 *
 * The returned function has the following semantics:
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param ownVersion version which should be checked against
 */
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([ownVersion]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
        // we cannot guarantee compatibility so we always return noop
        return function () { return false; };
    }
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4],
    };
    // if ownVersion has a prerelease tag, versions must match exactly
    if (ownVersionParsed.prerelease != null) {
        return function isExactmatch(globalVersion) {
            return globalVersion === ownVersion;
        };
    }
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
            return true;
        }
        if (rejectedVersions.has(globalVersion)) {
            return false;
        }
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
            // cannot parse other version
            // we cannot guarantee compatibility so we always noop
            return _reject(globalVersion);
        }
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4],
        };
        // if globalVersion has a prerelease tag, versions must match exactly
        if (globalVersionParsed.prerelease != null) {
            return _reject(globalVersion);
        }
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor &&
                ownVersionParsed.patch <= globalVersionParsed.patch) {
                return _accept(globalVersion);
            }
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
            return _accept(globalVersion);
        }
        return _reject(globalVersion);
    };
}
/**
 * Test an API version to see if it is compatible with this API.
 *
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param version version of the API requesting an instance of the global API
 */
var isCompatible = _makeCompatibilityCheck(_version__WEBPACK_IMPORTED_MODULE_0__.VERSION);
//# sourceMappingURL=semver.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_globalThis": () => (/* binding */ _globalThis)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Updates to this file should also be replicated to @opentelemetry/api-metrics and
// @opentelemetry/core too.
/**
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS implementation)
 * - <object> (When all else fails)
 */
/** only globals that common to node and browsers are allowed */
// eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
var _globalThis = typeof globalThis === 'object' ? globalThis :
    typeof self === 'object' ? self :
        typeof window === 'object' ? window :
            typeof __webpack_require__.g === 'object' ? __webpack_require__.g :
                {};
//# sourceMappingURL=globalThis.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/platform/browser/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_globalThis": () => (/* reexport safe */ _globalThis__WEBPACK_IMPORTED_MODULE_0__._globalThis)
/* harmony export */ });
/* harmony import */ var _globalThis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTextMapPropagator": () => (/* binding */ NoopTextMapPropagator)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * No-op implementations of {@link TextMapPropagator}.
 */
var NoopTextMapPropagator = /** @class */ (function () {
    function NoopTextMapPropagator() {
    }
    /** Noop inject function does nothing */
    NoopTextMapPropagator.prototype.inject = function (_context, _carrier) { };
    /** Noop extract function does nothing and returns the input context */
    NoopTextMapPropagator.prototype.extract = function (context, _carrier) {
        return context;
    };
    NoopTextMapPropagator.prototype.fields = function () {
        return [];
    };
    return NoopTextMapPropagator;
}());

//# sourceMappingURL=NoopTextMapPropagator.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultTextMapGetter": () => (/* binding */ defaultTextMapGetter),
/* harmony export */   "defaultTextMapSetter": () => (/* binding */ defaultTextMapSetter)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var defaultTextMapGetter = {
    get: function (carrier, key) {
        if (carrier == null) {
            return undefined;
        }
        return carrier[key];
    },
    keys: function (carrier) {
        if (carrier == null) {
            return [];
        }
        return Object.keys(carrier);
    },
};
var defaultTextMapSetter = {
    set: function (carrier, key, value) {
        if (carrier == null) {
            return;
        }
        carrier[key] = value;
    },
};
//# sourceMappingURL=TextMapPropagator.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonRecordingSpan": () => (/* binding */ NonRecordingSpan)
/* harmony export */ });
/* harmony import */ var _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The NonRecordingSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */
var NonRecordingSpan = /** @class */ (function () {
    function NonRecordingSpan(_spanContext) {
        if (_spanContext === void 0) { _spanContext = _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_SPAN_CONTEXT; }
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NonRecordingSpan.prototype.spanContext = function () {
        return this._spanContext;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttribute = function (_key, _value) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttributes = function (_attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.addEvent = function (_name, _attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setStatus = function (_status) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.updateName = function (_name) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.end = function (_endTime) { };
    // isRecording always returns false for NonRecordingSpan.
    NonRecordingSpan.prototype.isRecording = function () {
        return false;
    };
    // By default does nothing
    NonRecordingSpan.prototype.recordException = function (_exception, _time) { };
    return NonRecordingSpan;
}());

//# sourceMappingURL=NonRecordingSpan.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTracer": () => (/* binding */ NoopTracer)
/* harmony export */ });
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/context.js");
/* harmony import */ var _trace_context_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/* harmony import */ var _spancontext_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var context = _api_context__WEBPACK_IMPORTED_MODULE_0__.ContextAPI.getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */
var NoopTracer = /** @class */ (function () {
    function NoopTracer() {
    }
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function (name, options, context) {
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan();
        }
        var parentFromContext = context && (0,_trace_context_utils__WEBPACK_IMPORTED_MODULE_1__.getSpanContext)(context);
        if (isSpanContext(parentFromContext) &&
            (0,_spancontext_utils__WEBPACK_IMPORTED_MODULE_3__.isSpanContextValid)(parentFromContext)) {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan(parentFromContext);
        }
        else {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan();
        }
    };
    NoopTracer.prototype.startActiveSpan = function (name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        }
        else if (arguments.length === 2) {
            fn = arg2;
        }
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        }
        else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : context.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = (0,_trace_context_utils__WEBPACK_IMPORTED_MODULE_1__.setSpan)(parentContext, span);
        return context.with(contextWithSpanSet, fn, undefined, span);
    };
    return NoopTracer;
}());

function isSpanContext(spanContext) {
    return (typeof spanContext === 'object' &&
        typeof spanContext['spanId'] === 'string' &&
        typeof spanContext['traceId'] === 'string' &&
        typeof spanContext['traceFlags'] === 'number');
}
//# sourceMappingURL=NoopTracer.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTracerProvider": () => (/* binding */ NoopTracerProvider)
/* harmony export */ });
/* harmony import */ var _NoopTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */
var NoopTracerProvider = /** @class */ (function () {
    function NoopTracerProvider() {
    }
    NoopTracerProvider.prototype.getTracer = function (_name, _version, _options) {
        return new _NoopTracer__WEBPACK_IMPORTED_MODULE_0__.NoopTracer();
    };
    return NoopTracerProvider;
}());

//# sourceMappingURL=NoopTracerProvider.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProxyTracer": () => (/* binding */ ProxyTracer)
/* harmony export */ });
/* harmony import */ var _NoopTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var NOOP_TRACER = new _NoopTracer__WEBPACK_IMPORTED_MODULE_0__.NoopTracer();
/**
 * Proxy tracer provided by the proxy tracer provider
 */
var ProxyTracer = /** @class */ (function () {
    function ProxyTracer(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    ProxyTracer.prototype.startSpan = function (name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    ProxyTracer.prototype.startActiveSpan = function (_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */
    ProxyTracer.prototype._getTracer = function () {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}());

//# sourceMappingURL=ProxyTracer.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProxyTracerProvider": () => (/* binding */ ProxyTracerProvider)
/* harmony export */ });
/* harmony import */ var _ProxyTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js");
/* harmony import */ var _NoopTracerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var NOOP_TRACER_PROVIDER = new _NoopTracerProvider__WEBPACK_IMPORTED_MODULE_1__.NoopTracerProvider();
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */
var ProxyTracerProvider = /** @class */ (function () {
    function ProxyTracerProvider() {
    }
    /**
     * Get a {@link ProxyTracer}
     */
    ProxyTracerProvider.prototype.getTracer = function (name, version, options) {
        var _a;
        return ((_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new _ProxyTracer__WEBPACK_IMPORTED_MODULE_0__.ProxyTracer(this, name, version, options));
    };
    ProxyTracerProvider.prototype.getDelegate = function () {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */
    ProxyTracerProvider.prototype.setDelegate = function (delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function (name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
    };
    return ProxyTracerProvider;
}());

//# sourceMappingURL=ProxyTracerProvider.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/Sampler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=Sampler.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplingDecision": () => (/* binding */ SamplingDecision)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */
var SamplingDecision;
(function (SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */
    SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */
    SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */
    SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
//# sourceMappingURL=SamplingResult.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/SpanOptions.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=SpanOptions.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/attributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=attributes.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteSpan": () => (/* binding */ deleteSpan),
/* harmony export */   "getSpan": () => (/* binding */ getSpan),
/* harmony export */   "getSpanContext": () => (/* binding */ getSpanContext),
/* harmony export */   "setSpan": () => (/* binding */ setSpan),
/* harmony export */   "setSpanContext": () => (/* binding */ setSpanContext)
/* harmony export */ });
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * span key
 */
var SPAN_KEY = (0,_context_context__WEBPACK_IMPORTED_MODULE_0__.createContextKey)('OpenTelemetry Context Key SPAN');
/**
 * Return the span if one exists
 *
 * @param context context to get span from
 */
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
/**
 * Set the span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
/**
 * Remove current span stored in the context
 *
 * @param context context to delete span from
 */
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context context to set active span on
 * @param spanContext span context to be wrapped
 */
function setSpanContext(context, spanContext) {
    return setSpan(context, new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__.NonRecordingSpan(spanContext));
}
/**
 * Get the span context of the span if it exists.
 *
 * @param context context to get values from
 */
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
//# sourceMappingURL=context-utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-impl.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceStateImpl": () => (/* binding */ TraceStateImpl)
/* harmony export */ });
/* harmony import */ var _tracestate_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-validators.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ',';
var LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */
var TraceStateImpl = /** @class */ (function () {
    function TraceStateImpl(rawTraceState) {
        this._internalState = new Map();
        if (rawTraceState)
            this._parse(rawTraceState);
    }
    TraceStateImpl.prototype.set = function (key, value) {
        // TODO: Benchmark the different approaches(map vs list) and
        // use the faster one.
        var traceState = this._clone();
        if (traceState._internalState.has(key)) {
            traceState._internalState.delete(key);
        }
        traceState._internalState.set(key, value);
        return traceState;
    };
    TraceStateImpl.prototype.unset = function (key) {
        var traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    };
    TraceStateImpl.prototype.get = function (key) {
        return this._internalState.get(key);
    };
    TraceStateImpl.prototype.serialize = function () {
        var _this = this;
        return this._keys()
            .reduce(function (agg, key) {
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
            return agg;
        }, [])
            .join(LIST_MEMBERS_SEPARATOR);
    };
    TraceStateImpl.prototype._parse = function (rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN)
            return;
        this._internalState = rawTraceState
            .split(LIST_MEMBERS_SEPARATOR)
            .reverse() // Store in reverse so new keys (.set(...)) will be placed at the beginning
            .reduce(function (agg, part) {
            var listMember = part.trim(); // Optional Whitespace (OWS) handling
            var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                var key = listMember.slice(0, i);
                var value = listMember.slice(i + 1, part.length);
                if ((0,_tracestate_validators__WEBPACK_IMPORTED_MODULE_0__.validateKey)(key) && (0,_tracestate_validators__WEBPACK_IMPORTED_MODULE_0__.validateValue)(value)) {
                    agg.set(key, value);
                }
                else {
                    // TODO: Consider to add warning log
                }
            }
            return agg;
        }, new Map());
        // Because of the reverse() requirement, trunc must be done after map is created
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
            this._internalState = new Map(Array.from(this._internalState.entries())
                .reverse() // Use reverse same as original tracestate parse chain
                .slice(0, MAX_TRACE_STATE_ITEMS));
        }
    };
    TraceStateImpl.prototype._keys = function () {
        return Array.from(this._internalState.keys()).reverse();
    };
    TraceStateImpl.prototype._clone = function () {
        var traceState = new TraceStateImpl();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    };
    return TraceStateImpl;
}());

//# sourceMappingURL=tracestate-impl.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-validators.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateKey": () => (/* binding */ validateKey),
/* harmony export */   "validateValue": () => (/* binding */ validateValue)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_KEY_CHAR_RANGE = '[_0-9a-z-*/]';
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
/**
 * Key is opaque string up to 256 characters printable. It MUST begin with a
 * lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
 * underscores _, dashes -, asterisks *, and forward slashes /.
 * For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
 * vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
 * see https://www.w3.org/TR/trace-context/#key
 */
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
/**
 * Value is opaque string up to 256 characters printable ASCII RFC0020
 * characters (i.e., the range 0x20 to 0x7E) except comma , and =.
 */
function validateValue(value) {
    return (VALID_VALUE_BASE_REGEX.test(value) &&
        !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value));
}
//# sourceMappingURL=tracestate-validators.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTraceState": () => (/* binding */ createTraceState)
/* harmony export */ });
/* harmony import */ var _tracestate_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-impl.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createTraceState(rawTraceState) {
    return new _tracestate_impl__WEBPACK_IMPORTED_MODULE_0__.TraceStateImpl(rawTraceState);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INVALID_SPANID": () => (/* binding */ INVALID_SPANID),
/* harmony export */   "INVALID_SPAN_CONTEXT": () => (/* binding */ INVALID_SPAN_CONTEXT),
/* harmony export */   "INVALID_TRACEID": () => (/* binding */ INVALID_TRACEID)
/* harmony export */ });
/* harmony import */ var _trace_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var INVALID_SPANID = '0000000000000000';
var INVALID_TRACEID = '00000000000000000000000000000000';
var INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: _trace_flags__WEBPACK_IMPORTED_MODULE_0__.TraceFlags.NONE,
};
//# sourceMappingURL=invalid-span-constants.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/link.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=span.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span_context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=span_context.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span_kind.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpanKind": () => (/* binding */ SpanKind)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SpanKind;
(function (SpanKind) {
    /** Default value. Indicates that the span is used internally. */
    SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */
    SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */
    SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
//# sourceMappingURL=span_kind.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSpanContextValid": () => (/* binding */ isSpanContextValid),
/* harmony export */   "isValidSpanId": () => (/* binding */ isValidSpanId),
/* harmony export */   "isValidTraceId": () => (/* binding */ isValidTraceId),
/* harmony export */   "wrapSpanContext": () => (/* binding */ wrapSpanContext)
/* harmony export */ });
/* harmony import */ var _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_TRACEID;
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_SPANID;
}
/**
 * Returns true if this {@link SpanContext} is valid.
 * @return true if this {@link SpanContext} is valid.
 */
function isSpanContextValid(spanContext) {
    return (isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId));
}
/**
 * Wrap the given {@link SpanContext} in a new non-recording {@link Span}
 *
 * @param spanContext span context to be wrapped
 * @returns a new non-recording {@link Span} with the provided context
 */
function wrapSpanContext(spanContext) {
    return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__.NonRecordingSpan(spanContext);
}
//# sourceMappingURL=spancontext-utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/status.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpanStatusCode": () => (/* binding */ SpanStatusCode)
/* harmony export */ });
/**
 * An enumeration of status codes.
 */
var SpanStatusCode;
(function (SpanStatusCode) {
    /**
     * The default status.
     */
    SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */
    SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */
    SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
//# sourceMappingURL=status.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceFlags": () => (/* binding */ TraceFlags)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TraceFlags;
(function (TraceFlags) {
    /** Represents no flag set. */
    TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */
    TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
//# sourceMappingURL=trace_flags.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_state.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=trace_state.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=tracer.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer_options.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=tracer_options.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer_provider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=tracer_provider.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/version.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// this is autogenerated file, see scripts/version-update.js
var VERSION = '1.1.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.3.1-3ba3c4558c-83fa3b8a81.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsEcsLaunchtypeValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.AwsEcsLaunchtypeValues),
/* harmony export */   "CloudPlatformValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.CloudPlatformValues),
/* harmony export */   "CloudProviderValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.CloudProviderValues),
/* harmony export */   "DbCassandraConsistencyLevelValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.DbCassandraConsistencyLevelValues),
/* harmony export */   "DbSystemValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.DbSystemValues),
/* harmony export */   "FaasDocumentOperationValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.FaasDocumentOperationValues),
/* harmony export */   "FaasInvokedProviderValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.FaasInvokedProviderValues),
/* harmony export */   "FaasTriggerValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.FaasTriggerValues),
/* harmony export */   "HostArchValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.HostArchValues),
/* harmony export */   "HttpFlavorValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.HttpFlavorValues),
/* harmony export */   "MessageTypeValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.MessageTypeValues),
/* harmony export */   "MessagingDestinationKindValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.MessagingDestinationKindValues),
/* harmony export */   "MessagingOperationValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.MessagingOperationValues),
/* harmony export */   "NetHostConnectionSubtypeValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.NetHostConnectionSubtypeValues),
/* harmony export */   "NetHostConnectionTypeValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.NetHostConnectionTypeValues),
/* harmony export */   "NetTransportValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.NetTransportValues),
/* harmony export */   "OsTypeValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.OsTypeValues),
/* harmony export */   "RpcGrpcStatusCodeValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.RpcGrpcStatusCodeValues),
/* harmony export */   "SemanticAttributes": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.SemanticAttributes),
/* harmony export */   "SemanticResourceAttributes": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.SemanticResourceAttributes),
/* harmony export */   "TelemetrySdkLanguageValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.TelemetrySdkLanguageValues)
/* harmony export */ });
/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.3.1-3ba3c4558c-83fa3b8a81.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/index.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.3.1-3ba3c4558c-83fa3b8a81.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/index.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.3.1-3ba3c4558c-83fa3b8a81.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsEcsLaunchtypeValues": () => (/* binding */ AwsEcsLaunchtypeValues),
/* harmony export */   "CloudPlatformValues": () => (/* binding */ CloudPlatformValues),
/* harmony export */   "CloudProviderValues": () => (/* binding */ CloudProviderValues),
/* harmony export */   "HostArchValues": () => (/* binding */ HostArchValues),
/* harmony export */   "OsTypeValues": () => (/* binding */ OsTypeValues),
/* harmony export */   "SemanticResourceAttributes": () => (/* binding */ SemanticResourceAttributes),
/* harmony export */   "TelemetrySdkLanguageValues": () => (/* binding */ TelemetrySdkLanguageValues)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
var SemanticResourceAttributes = {
    /**
    * Name of the cloud provider.
    */
    CLOUD_PROVIDER: 'cloud.provider',
    /**
    * The cloud account ID the resource is assigned to.
    */
    CLOUD_ACCOUNT_ID: 'cloud.account.id',
    /**
    * The geographical region the resource is running. Refer to your provider&#39;s docs to see the available regions, for example [Alibaba Cloud regions](https://www.alibabacloud.com/help/doc-detail/40654.htm), [AWS regions](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/), [Azure regions](https://azure.microsoft.com/en-us/global-infrastructure/geographies/), or [Google Cloud regions](https://cloud.google.com/about/locations).
    */
    CLOUD_REGION: 'cloud.region',
    /**
    * Cloud regions often have multiple, isolated locations known as zones to increase availability. Availability zone represents the zone where the resource is running.
    *
    * Note: Availability zones are called &#34;zones&#34; on Alibaba Cloud and Google Cloud.
    */
    CLOUD_AVAILABILITY_ZONE: 'cloud.availability_zone',
    /**
    * The cloud platform in use.
    *
    * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
    */
    CLOUD_PLATFORM: 'cloud.platform',
    /**
    * The Amazon Resource Name (ARN) of an [ECS container instance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_instances.html).
    */
    AWS_ECS_CONTAINER_ARN: 'aws.ecs.container.arn',
    /**
    * The ARN of an [ECS cluster](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/clusters.html).
    */
    AWS_ECS_CLUSTER_ARN: 'aws.ecs.cluster.arn',
    /**
    * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.
    */
    AWS_ECS_LAUNCHTYPE: 'aws.ecs.launchtype',
    /**
    * The ARN of an [ECS task definition](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html).
    */
    AWS_ECS_TASK_ARN: 'aws.ecs.task.arn',
    /**
    * The task definition family this task definition is a member of.
    */
    AWS_ECS_TASK_FAMILY: 'aws.ecs.task.family',
    /**
    * The revision for this task definition.
    */
    AWS_ECS_TASK_REVISION: 'aws.ecs.task.revision',
    /**
    * The ARN of an EKS cluster.
    */
    AWS_EKS_CLUSTER_ARN: 'aws.eks.cluster.arn',
    /**
    * The name(s) of the AWS log group(s) an application is writing to.
    *
    * Note: Multiple log groups must be supported for cases like multi-container applications, where a single application has sidecar containers, and each write to their own log group.
    */
    AWS_LOG_GROUP_NAMES: 'aws.log.group.names',
    /**
    * The Amazon Resource Name(s) (ARN) of the AWS log group(s).
    *
    * Note: See the [log group ARN format documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html#CWL_ARN_Format).
    */
    AWS_LOG_GROUP_ARNS: 'aws.log.group.arns',
    /**
    * The name(s) of the AWS log stream(s) an application is writing to.
    */
    AWS_LOG_STREAM_NAMES: 'aws.log.stream.names',
    /**
    * The ARN(s) of the AWS log stream(s).
    *
    * Note: See the [log stream ARN format documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html#CWL_ARN_Format). One log group can contain several log streams, so these ARNs necessarily identify both a log group and a log stream.
    */
    AWS_LOG_STREAM_ARNS: 'aws.log.stream.arns',
    /**
    * Container name.
    */
    CONTAINER_NAME: 'container.name',
    /**
    * Container ID. Usually a UUID, as for example used to [identify Docker containers](https://docs.docker.com/engine/reference/run/#container-identification). The UUID might be abbreviated.
    */
    CONTAINER_ID: 'container.id',
    /**
    * The container runtime managing this container.
    */
    CONTAINER_RUNTIME: 'container.runtime',
    /**
    * Name of the image the container was built on.
    */
    CONTAINER_IMAGE_NAME: 'container.image.name',
    /**
    * Container image tag.
    */
    CONTAINER_IMAGE_TAG: 'container.image.tag',
    /**
    * Name of the [deployment environment](https://en.wikipedia.org/wiki/Deployment_environment) (aka deployment tier).
    */
    DEPLOYMENT_ENVIRONMENT: 'deployment.environment',
    /**
    * A unique identifier representing the device.
    *
    * Note: The device identifier MUST only be defined using the values outlined below. This value is not an advertising identifier and MUST NOT be used as such. On iOS (Swift or Objective-C), this value MUST be equal to the [vendor identifier](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor). On Android (Java or Kotlin), this value MUST be equal to the Firebase Installation ID or a globally unique UUID which is persisted across sessions in your application. More information can be found [here](https://developer.android.com/training/articles/user-data-ids) on best practices and exact implementation details. Caution should be taken when storing personal data or anything which can identify a user. GDPR and data protection laws may apply, ensure you do your own due diligence.
    */
    DEVICE_ID: 'device.id',
    /**
    * The model identifier for the device.
    *
    * Note: It&#39;s recommended this value represents a machine readable version of the model identifier rather than the market or consumer-friendly name of the device.
    */
    DEVICE_MODEL_IDENTIFIER: 'device.model.identifier',
    /**
    * The marketing name for the device model.
    *
    * Note: It&#39;s recommended this value represents a human readable version of the device model rather than a machine readable alternative.
    */
    DEVICE_MODEL_NAME: 'device.model.name',
    /**
    * The name of the single function that this runtime instance executes.
    *
    * Note: This is the name of the function as configured/deployed on the FaaS platform and is usually different from the name of the callback function (which may be stored in the [`code.namespace`/`code.function`](../../trace/semantic_conventions/span-general.md#source-code-attributes) span attributes).
    */
    FAAS_NAME: 'faas.name',
    /**
    * The unique ID of the single function that this runtime instance executes.
    *
    * Note: Depending on the cloud provider, use:
  
  * **AWS Lambda:** The function [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
  Take care not to use the &#34;invoked ARN&#34; directly but replace any
  [alias suffix](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html) with the resolved function version, as the same runtime instance may be invokable with multiple
  different aliases.
  * **GCP:** The [URI of the resource](https://cloud.google.com/iam/docs/full-resource-names)
  * **Azure:** The [Fully Qualified Resource ID](https://docs.microsoft.com/en-us/rest/api/resources/resources/get-by-id).
  
  On some providers, it may not be possible to determine the full ID at startup,
  which is why this field cannot be made required. For example, on AWS the account ID
  part of the ARN is not available without calling another AWS API
  which may be deemed too slow for a short-running lambda function.
  As an alternative, consider setting `faas.id` as a span attribute instead.
    */
    FAAS_ID: 'faas.id',
    /**
    * The immutable version of the function being executed.
    *
    * Note: Depending on the cloud provider and platform, use:
  
  * **AWS Lambda:** The [function version](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html)
    (an integer represented as a decimal string).
  * **Google Cloud Run:** The [revision](https://cloud.google.com/run/docs/managing/revisions)
    (i.e., the function name plus the revision suffix).
  * **Google Cloud Functions:** The value of the
    [`K_REVISION` environment variable](https://cloud.google.com/functions/docs/env-var#runtime_environment_variables_set_automatically).
  * **Azure Functions:** Not applicable. Do not set this attribute.
    */
    FAAS_VERSION: 'faas.version',
    /**
    * The execution environment ID as a string, that will be potentially reused for other invocations to the same function/function version.
    *
    * Note: * **AWS Lambda:** Use the (full) log stream name.
    */
    FAAS_INSTANCE: 'faas.instance',
    /**
    * The amount of memory available to the serverless function in MiB.
    *
    * Note: It&#39;s recommended to set this attribute since e.g. too little memory can easily stop a Java AWS Lambda function from working correctly. On AWS Lambda, the environment variable `AWS_LAMBDA_FUNCTION_MEMORY_SIZE` provides this information.
    */
    FAAS_MAX_MEMORY: 'faas.max_memory',
    /**
    * Unique host ID. For Cloud, this must be the instance_id assigned by the cloud provider.
    */
    HOST_ID: 'host.id',
    /**
    * Name of the host. On Unix systems, it may contain what the hostname command returns, or the fully qualified hostname, or another name specified by the user.
    */
    HOST_NAME: 'host.name',
    /**
    * Type of host. For Cloud, this must be the machine type.
    */
    HOST_TYPE: 'host.type',
    /**
    * The CPU architecture the host system is running on.
    */
    HOST_ARCH: 'host.arch',
    /**
    * Name of the VM image or OS install the host was instantiated from.
    */
    HOST_IMAGE_NAME: 'host.image.name',
    /**
    * VM image ID. For Cloud, this value is from the provider.
    */
    HOST_IMAGE_ID: 'host.image.id',
    /**
    * The version string of the VM image as defined in [Version SpanAttributes](README.md#version-attributes).
    */
    HOST_IMAGE_VERSION: 'host.image.version',
    /**
    * The name of the cluster.
    */
    K8S_CLUSTER_NAME: 'k8s.cluster.name',
    /**
    * The name of the Node.
    */
    K8S_NODE_NAME: 'k8s.node.name',
    /**
    * The UID of the Node.
    */
    K8S_NODE_UID: 'k8s.node.uid',
    /**
    * The name of the namespace that the pod is running in.
    */
    K8S_NAMESPACE_NAME: 'k8s.namespace.name',
    /**
    * The UID of the Pod.
    */
    K8S_POD_UID: 'k8s.pod.uid',
    /**
    * The name of the Pod.
    */
    K8S_POD_NAME: 'k8s.pod.name',
    /**
    * The name of the Container in a Pod template.
    */
    K8S_CONTAINER_NAME: 'k8s.container.name',
    /**
    * The UID of the ReplicaSet.
    */
    K8S_REPLICASET_UID: 'k8s.replicaset.uid',
    /**
    * The name of the ReplicaSet.
    */
    K8S_REPLICASET_NAME: 'k8s.replicaset.name',
    /**
    * The UID of the Deployment.
    */
    K8S_DEPLOYMENT_UID: 'k8s.deployment.uid',
    /**
    * The name of the Deployment.
    */
    K8S_DEPLOYMENT_NAME: 'k8s.deployment.name',
    /**
    * The UID of the StatefulSet.
    */
    K8S_STATEFULSET_UID: 'k8s.statefulset.uid',
    /**
    * The name of the StatefulSet.
    */
    K8S_STATEFULSET_NAME: 'k8s.statefulset.name',
    /**
    * The UID of the DaemonSet.
    */
    K8S_DAEMONSET_UID: 'k8s.daemonset.uid',
    /**
    * The name of the DaemonSet.
    */
    K8S_DAEMONSET_NAME: 'k8s.daemonset.name',
    /**
    * The UID of the Job.
    */
    K8S_JOB_UID: 'k8s.job.uid',
    /**
    * The name of the Job.
    */
    K8S_JOB_NAME: 'k8s.job.name',
    /**
    * The UID of the CronJob.
    */
    K8S_CRONJOB_UID: 'k8s.cronjob.uid',
    /**
    * The name of the CronJob.
    */
    K8S_CRONJOB_NAME: 'k8s.cronjob.name',
    /**
    * The operating system type.
    */
    OS_TYPE: 'os.type',
    /**
    * Human readable (not intended to be parsed) OS version information, like e.g. reported by `ver` or `lsb_release -a` commands.
    */
    OS_DESCRIPTION: 'os.description',
    /**
    * Human readable operating system name.
    */
    OS_NAME: 'os.name',
    /**
    * The version string of the operating system as defined in [Version SpanAttributes](../../resource/semantic_conventions/README.md#version-attributes).
    */
    OS_VERSION: 'os.version',
    /**
    * Process identifier (PID).
    */
    PROCESS_PID: 'process.pid',
    /**
    * The name of the process executable. On Linux based systems, can be set to the `Name` in `proc/[pid]/status`. On Windows, can be set to the base name of `GetProcessImageFileNameW`.
    */
    PROCESS_EXECUTABLE_NAME: 'process.executable.name',
    /**
    * The full path to the process executable. On Linux based systems, can be set to the target of `proc/[pid]/exe`. On Windows, can be set to the result of `GetProcessImageFileNameW`.
    */
    PROCESS_EXECUTABLE_PATH: 'process.executable.path',
    /**
    * The command used to launch the process (i.e. the command name). On Linux based systems, can be set to the zeroth string in `proc/[pid]/cmdline`. On Windows, can be set to the first parameter extracted from `GetCommandLineW`.
    */
    PROCESS_COMMAND: 'process.command',
    /**
    * The full command used to launch the process as a single string representing the full command. On Windows, can be set to the result of `GetCommandLineW`. Do not set this if you have to assemble it just for monitoring; use `process.command_args` instead.
    */
    PROCESS_COMMAND_LINE: 'process.command_line',
    /**
    * All the command arguments (including the command/executable itself) as received by the process. On Linux-based systems (and some other Unixoid systems supporting procfs), can be set according to the list of null-delimited strings extracted from `proc/[pid]/cmdline`. For libc-based executables, this would be the full argv vector passed to `main`.
    */
    PROCESS_COMMAND_ARGS: 'process.command_args',
    /**
    * The username of the user that owns the process.
    */
    PROCESS_OWNER: 'process.owner',
    /**
    * The name of the runtime of this process. For compiled native binaries, this SHOULD be the name of the compiler.
    */
    PROCESS_RUNTIME_NAME: 'process.runtime.name',
    /**
    * The version of the runtime of this process, as returned by the runtime without modification.
    */
    PROCESS_RUNTIME_VERSION: 'process.runtime.version',
    /**
    * An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment.
    */
    PROCESS_RUNTIME_DESCRIPTION: 'process.runtime.description',
    /**
    * Logical name of the service.
    *
    * Note: MUST be the same for all instances of horizontally scaled services. If the value was not specified, SDKs MUST fallback to `unknown_service:` concatenated with [`process.executable.name`](process.md#process), e.g. `unknown_service:bash`. If `process.executable.name` is not available, the value MUST be set to `unknown_service`.
    */
    SERVICE_NAME: 'service.name',
    /**
    * A namespace for `service.name`.
    *
    * Note: A string value having a meaning that helps to distinguish a group of services, for example the team name that owns a group of services. `service.name` is expected to be unique within the same namespace. If `service.namespace` is not specified in the Resource then `service.name` is expected to be unique for all services that have no explicit namespace defined (so the empty/unspecified namespace is simply one more valid namespace). Zero-length namespace string is assumed equal to unspecified namespace.
    */
    SERVICE_NAMESPACE: 'service.namespace',
    /**
    * The string ID of the service instance.
    *
    * Note: MUST be unique for each instance of the same `service.namespace,service.name` pair (in other words `service.namespace,service.name,service.instance.id` triplet MUST be globally unique). The ID helps to distinguish instances of the same service that exist at the same time (e.g. instances of a horizontally scaled service). It is preferable for the ID to be persistent and stay the same for the lifetime of the service instance, however it is acceptable that the ID is ephemeral and changes during important lifetime events for the service (e.g. service restarts). If the service has no inherent unique ID that can be used as the value of this attribute it is recommended to generate a random Version 1 or Version 4 RFC 4122 UUID (services aiming for reproducible UUIDs may also use Version 5, see RFC 4122 for more recommendations).
    */
    SERVICE_INSTANCE_ID: 'service.instance.id',
    /**
    * The version string of the service API or implementation.
    */
    SERVICE_VERSION: 'service.version',
    /**
    * The name of the telemetry SDK as defined above.
    */
    TELEMETRY_SDK_NAME: 'telemetry.sdk.name',
    /**
    * The language of the telemetry SDK.
    */
    TELEMETRY_SDK_LANGUAGE: 'telemetry.sdk.language',
    /**
    * The version string of the telemetry SDK.
    */
    TELEMETRY_SDK_VERSION: 'telemetry.sdk.version',
    /**
    * The version string of the auto instrumentation agent, if used.
    */
    TELEMETRY_AUTO_VERSION: 'telemetry.auto.version',
    /**
    * The name of the web engine.
    */
    WEBENGINE_NAME: 'webengine.name',
    /**
    * The version of the web engine.
    */
    WEBENGINE_VERSION: 'webengine.version',
    /**
    * Additional description of the web engine (e.g. detailed version and edition information).
    */
    WEBENGINE_DESCRIPTION: 'webengine.description',
};
var CloudProviderValues = {
    /** Alibaba Cloud. */
    ALIBABA_CLOUD: 'alibaba_cloud',
    /** Amazon Web Services. */
    AWS: 'aws',
    /** Microsoft Azure. */
    AZURE: 'azure',
    /** Google Cloud Platform. */
    GCP: 'gcp',
};
var CloudPlatformValues = {
    /** Alibaba Cloud Elastic Compute Service. */
    ALIBABA_CLOUD_ECS: 'alibaba_cloud_ecs',
    /** Alibaba Cloud Function Compute. */
    ALIBABA_CLOUD_FC: 'alibaba_cloud_fc',
    /** AWS Elastic Compute Cloud. */
    AWS_EC2: 'aws_ec2',
    /** AWS Elastic Container Service. */
    AWS_ECS: 'aws_ecs',
    /** AWS Elastic Kubernetes Service. */
    AWS_EKS: 'aws_eks',
    /** AWS Lambda. */
    AWS_LAMBDA: 'aws_lambda',
    /** AWS Elastic Beanstalk. */
    AWS_ELASTIC_BEANSTALK: 'aws_elastic_beanstalk',
    /** Azure Virtual Machines. */
    AZURE_VM: 'azure_vm',
    /** Azure Container Instances. */
    AZURE_CONTAINER_INSTANCES: 'azure_container_instances',
    /** Azure Kubernetes Service. */
    AZURE_AKS: 'azure_aks',
    /** Azure Functions. */
    AZURE_FUNCTIONS: 'azure_functions',
    /** Azure App Service. */
    AZURE_APP_SERVICE: 'azure_app_service',
    /** Google Cloud Compute Engine (GCE). */
    GCP_COMPUTE_ENGINE: 'gcp_compute_engine',
    /** Google Cloud Run. */
    GCP_CLOUD_RUN: 'gcp_cloud_run',
    /** Google Cloud Kubernetes Engine (GKE). */
    GCP_KUBERNETES_ENGINE: 'gcp_kubernetes_engine',
    /** Google Cloud Functions (GCF). */
    GCP_CLOUD_FUNCTIONS: 'gcp_cloud_functions',
    /** Google Cloud App Engine (GAE). */
    GCP_APP_ENGINE: 'gcp_app_engine',
};
var AwsEcsLaunchtypeValues = {
    /** ec2. */
    EC2: 'ec2',
    /** fargate. */
    FARGATE: 'fargate',
};
var HostArchValues = {
    /** AMD64. */
    AMD64: 'amd64',
    /** ARM32. */
    ARM32: 'arm32',
    /** ARM64. */
    ARM64: 'arm64',
    /** Itanium. */
    IA64: 'ia64',
    /** 32-bit PowerPC. */
    PPC32: 'ppc32',
    /** 64-bit PowerPC. */
    PPC64: 'ppc64',
    /** 32-bit x86. */
    X86: 'x86',
};
var OsTypeValues = {
    /** Microsoft Windows. */
    WINDOWS: 'windows',
    /** Linux. */
    LINUX: 'linux',
    /** Apple Darwin. */
    DARWIN: 'darwin',
    /** FreeBSD. */
    FREEBSD: 'freebsd',
    /** NetBSD. */
    NETBSD: 'netbsd',
    /** OpenBSD. */
    OPENBSD: 'openbsd',
    /** DragonFly BSD. */
    DRAGONFLYBSD: 'dragonflybsd',
    /** HP-UX (Hewlett Packard Unix). */
    HPUX: 'hpux',
    /** AIX (Advanced Interactive eXecutive). */
    AIX: 'aix',
    /** Oracle Solaris. */
    SOLARIS: 'solaris',
    /** IBM z/OS. */
    Z_OS: 'z_os',
};
var TelemetrySdkLanguageValues = {
    /** cpp. */
    CPP: 'cpp',
    /** dotnet. */
    DOTNET: 'dotnet',
    /** erlang. */
    ERLANG: 'erlang',
    /** go. */
    GO: 'go',
    /** java. */
    JAVA: 'java',
    /** nodejs. */
    NODEJS: 'nodejs',
    /** php. */
    PHP: 'php',
    /** python. */
    PYTHON: 'python',
    /** ruby. */
    RUBY: 'ruby',
    /** webjs. */
    WEBJS: 'webjs',
};
//# sourceMappingURL=SemanticResourceAttributes.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.3.1-3ba3c4558c-83fa3b8a81.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsEcsLaunchtypeValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.AwsEcsLaunchtypeValues),
/* harmony export */   "CloudPlatformValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.CloudPlatformValues),
/* harmony export */   "CloudProviderValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.CloudProviderValues),
/* harmony export */   "HostArchValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.HostArchValues),
/* harmony export */   "OsTypeValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.OsTypeValues),
/* harmony export */   "SemanticResourceAttributes": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.SemanticResourceAttributes),
/* harmony export */   "TelemetrySdkLanguageValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.TelemetrySdkLanguageValues)
/* harmony export */ });
/* harmony import */ var _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.3.1-3ba3c4558c-83fa3b8a81.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.3.1-3ba3c4558c-83fa3b8a81.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbCassandraConsistencyLevelValues": () => (/* binding */ DbCassandraConsistencyLevelValues),
/* harmony export */   "DbSystemValues": () => (/* binding */ DbSystemValues),
/* harmony export */   "FaasDocumentOperationValues": () => (/* binding */ FaasDocumentOperationValues),
/* harmony export */   "FaasInvokedProviderValues": () => (/* binding */ FaasInvokedProviderValues),
/* harmony export */   "FaasTriggerValues": () => (/* binding */ FaasTriggerValues),
/* harmony export */   "HttpFlavorValues": () => (/* binding */ HttpFlavorValues),
/* harmony export */   "MessageTypeValues": () => (/* binding */ MessageTypeValues),
/* harmony export */   "MessagingDestinationKindValues": () => (/* binding */ MessagingDestinationKindValues),
/* harmony export */   "MessagingOperationValues": () => (/* binding */ MessagingOperationValues),
/* harmony export */   "NetHostConnectionSubtypeValues": () => (/* binding */ NetHostConnectionSubtypeValues),
/* harmony export */   "NetHostConnectionTypeValues": () => (/* binding */ NetHostConnectionTypeValues),
/* harmony export */   "NetTransportValues": () => (/* binding */ NetTransportValues),
/* harmony export */   "RpcGrpcStatusCodeValues": () => (/* binding */ RpcGrpcStatusCodeValues),
/* harmony export */   "SemanticAttributes": () => (/* binding */ SemanticAttributes)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
var SemanticAttributes = {
    /**
    * The full invoked ARN as provided on the `Context` passed to the function (`Lambda-Runtime-Invoked-Function-Arn` header on the `/runtime/invocation/next` applicable).
    *
    * Note: This may be different from `faas.id` if an alias is involved.
    */
    AWS_LAMBDA_INVOKED_ARN: 'aws.lambda.invoked_arn',
    /**
    * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
    */
    DB_SYSTEM: 'db.system',
    /**
    * The connection string used to connect to the database. It is recommended to remove embedded credentials.
    */
    DB_CONNECTION_STRING: 'db.connection_string',
    /**
    * Username for accessing the database.
    */
    DB_USER: 'db.user',
    /**
    * The fully-qualified class name of the [Java Database Connectivity (JDBC)](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/) driver used to connect.
    */
    DB_JDBC_DRIVER_CLASSNAME: 'db.jdbc.driver_classname',
    /**
    * If no [tech-specific attribute](#call-level-attributes-for-specific-technologies) is defined, this attribute is used to report the name of the database being accessed. For commands that switch the database, this should be set to the target database (even if the command fails).
    *
    * Note: In some SQL databases, the database name to be used is called &#34;schema name&#34;.
    */
    DB_NAME: 'db.name',
    /**
    * The database statement being executed.
    *
    * Note: The value may be sanitized to exclude sensitive information.
    */
    DB_STATEMENT: 'db.statement',
    /**
    * The name of the operation being executed, e.g. the [MongoDB command name](https://docs.mongodb.com/manual/reference/command/#database-operations) such as `findAndModify`, or the SQL keyword.
    *
    * Note: When setting this to an SQL keyword, it is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if the operation name is provided by the library being instrumented. If the SQL statement has an ambiguous operation, or performs more than one operation, this value may be omitted.
    */
    DB_OPERATION: 'db.operation',
    /**
    * The Microsoft SQL Server [instance name](https://docs.microsoft.com/en-us/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver15) connecting to. This name is used to determine the port of a named instance.
    *
    * Note: If setting a `db.mssql.instance_name`, `net.peer.port` is no longer required (but still recommended if non-standard).
    */
    DB_MSSQL_INSTANCE_NAME: 'db.mssql.instance_name',
    /**
    * The name of the keyspace being accessed. To be used instead of the generic `db.name` attribute.
    */
    DB_CASSANDRA_KEYSPACE: 'db.cassandra.keyspace',
    /**
    * The fetch size used for paging, i.e. how many rows will be returned at once.
    */
    DB_CASSANDRA_PAGE_SIZE: 'db.cassandra.page_size',
    /**
    * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
    */
    DB_CASSANDRA_CONSISTENCY_LEVEL: 'db.cassandra.consistency_level',
    /**
    * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
    *
    * Note: This mirrors the db.sql.table attribute but references cassandra rather than sql. It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
    */
    DB_CASSANDRA_TABLE: 'db.cassandra.table',
    /**
    * Whether or not the query is idempotent.
    */
    DB_CASSANDRA_IDEMPOTENCE: 'db.cassandra.idempotence',
    /**
    * The number of times a query was speculatively executed. Not set or `0` if the query was not executed speculatively.
    */
    DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: 'db.cassandra.speculative_execution_count',
    /**
    * The ID of the coordinating node for a query.
    */
    DB_CASSANDRA_COORDINATOR_ID: 'db.cassandra.coordinator.id',
    /**
    * The data center of the coordinating node for a query.
    */
    DB_CASSANDRA_COORDINATOR_DC: 'db.cassandra.coordinator.dc',
    /**
    * The [HBase namespace](https://hbase.apache.org/book.html#_namespace) being accessed. To be used instead of the generic `db.name` attribute.
    */
    DB_HBASE_NAMESPACE: 'db.hbase.namespace',
    /**
    * The index of the database being accessed as used in the [`SELECT` command](https://redis.io/commands/select), provided as an integer. To be used instead of the generic `db.name` attribute.
    */
    DB_REDIS_DATABASE_INDEX: 'db.redis.database_index',
    /**
    * The collection being accessed within the database stated in `db.name`.
    */
    DB_MONGODB_COLLECTION: 'db.mongodb.collection',
    /**
    * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
    *
    * Note: It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
    */
    DB_SQL_TABLE: 'db.sql.table',
    /**
    * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
    */
    EXCEPTION_TYPE: 'exception.type',
    /**
    * The exception message.
    */
    EXCEPTION_MESSAGE: 'exception.message',
    /**
    * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
    */
    EXCEPTION_STACKTRACE: 'exception.stacktrace',
    /**
    * SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.
    *
    * Note: An exception is considered to have escaped (or left) the scope of a span,
  if that span is ended while the exception is still logically &#34;in flight&#34;.
  This may be actually &#34;in flight&#34; in some languages (e.g. if the exception
  is passed to a Context manager&#39;s `__exit__` method in Python) but will
  usually be caught at the point of recording the exception in most languages.
  
  It is usually not possible to determine at the point where an exception is thrown
  whether it will escape the scope of a span.
  However, it is trivial to know that an exception
  will escape, if one checks for an active exception just before ending the span,
  as done in the [example above](#exception-end-example).
  
  It follows that an exception may still escape the scope of the span
  even if the `exception.escaped` attribute was not set or set to false,
  since the event might have been recorded at a time where it was not
  clear whether the exception will escape.
    */
    EXCEPTION_ESCAPED: 'exception.escaped',
    /**
    * Type of the trigger on which the function is executed.
    */
    FAAS_TRIGGER: 'faas.trigger',
    /**
    * The execution ID of the current function execution.
    */
    FAAS_EXECUTION: 'faas.execution',
    /**
    * The name of the source on which the triggering operation was performed. For example, in Cloud Storage or S3 corresponds to the bucket name, and in Cosmos DB to the database name.
    */
    FAAS_DOCUMENT_COLLECTION: 'faas.document.collection',
    /**
    * Describes the type of the operation that was performed on the data.
    */
    FAAS_DOCUMENT_OPERATION: 'faas.document.operation',
    /**
    * A string containing the time when the data was accessed in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
    */
    FAAS_DOCUMENT_TIME: 'faas.document.time',
    /**
    * The document name/table subjected to the operation. For example, in Cloud Storage or S3 is the name of the file, and in Cosmos DB the table name.
    */
    FAAS_DOCUMENT_NAME: 'faas.document.name',
    /**
    * A string containing the function invocation time in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
    */
    FAAS_TIME: 'faas.time',
    /**
    * A string containing the schedule period as [Cron Expression](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm).
    */
    FAAS_CRON: 'faas.cron',
    /**
    * A boolean that is true if the serverless function is executed for the first time (aka cold-start).
    */
    FAAS_COLDSTART: 'faas.coldstart',
    /**
    * The name of the invoked function.
    *
    * Note: SHOULD be equal to the `faas.name` resource attribute of the invoked function.
    */
    FAAS_INVOKED_NAME: 'faas.invoked_name',
    /**
    * The cloud provider of the invoked function.
    *
    * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
    */
    FAAS_INVOKED_PROVIDER: 'faas.invoked_provider',
    /**
    * The cloud region of the invoked function.
    *
    * Note: SHOULD be equal to the `cloud.region` resource attribute of the invoked function.
    */
    FAAS_INVOKED_REGION: 'faas.invoked_region',
    /**
    * Transport protocol used. See note below.
    */
    NET_TRANSPORT: 'net.transport',
    /**
    * Remote address of the peer (dotted decimal for IPv4 or [RFC5952](https://tools.ietf.org/html/rfc5952) for IPv6).
    */
    NET_PEER_IP: 'net.peer.ip',
    /**
    * Remote port number.
    */
    NET_PEER_PORT: 'net.peer.port',
    /**
    * Remote hostname or similar, see note below.
    */
    NET_PEER_NAME: 'net.peer.name',
    /**
    * Like `net.peer.ip` but for the host IP. Useful in case of a multi-IP host.
    */
    NET_HOST_IP: 'net.host.ip',
    /**
    * Like `net.peer.port` but for the host port.
    */
    NET_HOST_PORT: 'net.host.port',
    /**
    * Local hostname or similar, see note below.
    */
    NET_HOST_NAME: 'net.host.name',
    /**
    * The internet connection type currently being used by the host.
    */
    NET_HOST_CONNECTION_TYPE: 'net.host.connection.type',
    /**
    * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
    */
    NET_HOST_CONNECTION_SUBTYPE: 'net.host.connection.subtype',
    /**
    * The name of the mobile carrier.
    */
    NET_HOST_CARRIER_NAME: 'net.host.carrier.name',
    /**
    * The mobile carrier country code.
    */
    NET_HOST_CARRIER_MCC: 'net.host.carrier.mcc',
    /**
    * The mobile carrier network code.
    */
    NET_HOST_CARRIER_MNC: 'net.host.carrier.mnc',
    /**
    * The ISO 3166-1 alpha-2 2-character country code associated with the mobile carrier network.
    */
    NET_HOST_CARRIER_ICC: 'net.host.carrier.icc',
    /**
    * The [`service.name`](../../resource/semantic_conventions/README.md#service) of the remote service. SHOULD be equal to the actual `service.name` resource attribute of the remote service if any.
    */
    PEER_SERVICE: 'peer.service',
    /**
    * Username or client_id extracted from the access token or [Authorization](https://tools.ietf.org/html/rfc7235#section-4.2) header in the inbound request from outside the system.
    */
    ENDUSER_ID: 'enduser.id',
    /**
    * Actual/assumed role the client is making the request under extracted from token or application security context.
    */
    ENDUSER_ROLE: 'enduser.role',
    /**
    * Scopes or granted authorities the client currently possesses extracted from token or application security context. The value would come from the scope associated with an [OAuth 2.0 Access Token](https://tools.ietf.org/html/rfc6749#section-3.3) or an attribute value in a [SAML 2.0 Assertion](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html).
    */
    ENDUSER_SCOPE: 'enduser.scope',
    /**
    * Current &#34;managed&#34; thread ID (as opposed to OS thread ID).
    */
    THREAD_ID: 'thread.id',
    /**
    * Current thread name.
    */
    THREAD_NAME: 'thread.name',
    /**
    * The method or function name, or equivalent (usually rightmost part of the code unit&#39;s name).
    */
    CODE_FUNCTION: 'code.function',
    /**
    * The &#34;namespace&#34; within which `code.function` is defined. Usually the qualified class or module name, such that `code.namespace` + some separator + `code.function` form a unique identifier for the code unit.
    */
    CODE_NAMESPACE: 'code.namespace',
    /**
    * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
    */
    CODE_FILEPATH: 'code.filepath',
    /**
    * The line number in `code.filepath` best representing the operation. It SHOULD point within the code unit named in `code.function`.
    */
    CODE_LINENO: 'code.lineno',
    /**
    * HTTP request method.
    */
    HTTP_METHOD: 'http.method',
    /**
    * Full HTTP request URL in the form `scheme://host[:port]/path?query[#fragment]`. Usually the fragment is not transmitted over HTTP, but if it is known, it should be included nevertheless.
    *
    * Note: `http.url` MUST NOT contain credentials passed via URL in form of `https://username:password@www.example.com/`. In such case the attribute&#39;s value should be `https://www.example.com/`.
    */
    HTTP_URL: 'http.url',
    /**
    * The full request target as passed in a HTTP request line or equivalent.
    */
    HTTP_TARGET: 'http.target',
    /**
    * The value of the [HTTP host header](https://tools.ietf.org/html/rfc7230#section-5.4). An empty Host header should also be reported, see note.
    *
    * Note: When the header is present but empty the attribute SHOULD be set to the empty string. Note that this is a valid situation that is expected in certain cases, according the aforementioned [section of RFC 7230](https://tools.ietf.org/html/rfc7230#section-5.4). When the header is not set the attribute MUST NOT be set.
    */
    HTTP_HOST: 'http.host',
    /**
    * The URI scheme identifying the used protocol.
    */
    HTTP_SCHEME: 'http.scheme',
    /**
    * [HTTP response status code](https://tools.ietf.org/html/rfc7231#section-6).
    */
    HTTP_STATUS_CODE: 'http.status_code',
    /**
    * Kind of HTTP protocol used.
    *
    * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
    */
    HTTP_FLAVOR: 'http.flavor',
    /**
    * Value of the [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3) header sent by the client.
    */
    HTTP_USER_AGENT: 'http.user_agent',
    /**
    * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
    */
    HTTP_REQUEST_CONTENT_LENGTH: 'http.request_content_length',
    /**
    * The size of the uncompressed request payload body after transport decoding. Not set if transport encoding not used.
    */
    HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: 'http.request_content_length_uncompressed',
    /**
    * The size of the response payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
    */
    HTTP_RESPONSE_CONTENT_LENGTH: 'http.response_content_length',
    /**
    * The size of the uncompressed response payload body after transport decoding. Not set if transport encoding not used.
    */
    HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: 'http.response_content_length_uncompressed',
    /**
    * The primary server name of the matched virtual host. This should be obtained via configuration. If no such configuration can be obtained, this attribute MUST NOT be set ( `net.host.name` should be used instead).
    *
    * Note: `http.url` is usually not readily available on the server side but would have to be assembled in a cumbersome and sometimes lossy process from other information (see e.g. open-telemetry/opentelemetry-python/pull/148). It is thus preferred to supply the raw data that is available.
    */
    HTTP_SERVER_NAME: 'http.server_name',
    /**
    * The matched route (path template).
    */
    HTTP_ROUTE: 'http.route',
    /**
    * The IP address of the original client behind all proxies, if known (e.g. from [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)).
    *
    * Note: This is not necessarily the same as `net.peer.ip`, which would
  identify the network-level peer, which may be a proxy.
  
  This attribute should be set when a source of information different
  from the one used for `net.peer.ip`, is available even if that other
  source just confirms the same value as `net.peer.ip`.
  Rationale: For `net.peer.ip`, one typically does not know if it
  comes from a proxy, reverse proxy, or the actual client. Setting
  `http.client_ip` when it&#39;s the same as `net.peer.ip` means that
  one is at least somewhat confident that the address is not that of
  the closest proxy.
    */
    HTTP_CLIENT_IP: 'http.client_ip',
    /**
    * The keys in the `RequestItems` object field.
    */
    AWS_DYNAMODB_TABLE_NAMES: 'aws.dynamodb.table_names',
    /**
    * The JSON-serialized value of each item in the `ConsumedCapacity` response field.
    */
    AWS_DYNAMODB_CONSUMED_CAPACITY: 'aws.dynamodb.consumed_capacity',
    /**
    * The JSON-serialized value of the `ItemCollectionMetrics` response field.
    */
    AWS_DYNAMODB_ITEM_COLLECTION_METRICS: 'aws.dynamodb.item_collection_metrics',
    /**
    * The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.
    */
    AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: 'aws.dynamodb.provisioned_read_capacity',
    /**
    * The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.
    */
    AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: 'aws.dynamodb.provisioned_write_capacity',
    /**
    * The value of the `ConsistentRead` request parameter.
    */
    AWS_DYNAMODB_CONSISTENT_READ: 'aws.dynamodb.consistent_read',
    /**
    * The value of the `ProjectionExpression` request parameter.
    */
    AWS_DYNAMODB_PROJECTION: 'aws.dynamodb.projection',
    /**
    * The value of the `Limit` request parameter.
    */
    AWS_DYNAMODB_LIMIT: 'aws.dynamodb.limit',
    /**
    * The value of the `AttributesToGet` request parameter.
    */
    AWS_DYNAMODB_ATTRIBUTES_TO_GET: 'aws.dynamodb.attributes_to_get',
    /**
    * The value of the `IndexName` request parameter.
    */
    AWS_DYNAMODB_INDEX_NAME: 'aws.dynamodb.index_name',
    /**
    * The value of the `Select` request parameter.
    */
    AWS_DYNAMODB_SELECT: 'aws.dynamodb.select',
    /**
    * The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field.
    */
    AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: 'aws.dynamodb.global_secondary_indexes',
    /**
    * The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.
    */
    AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: 'aws.dynamodb.local_secondary_indexes',
    /**
    * The value of the `ExclusiveStartTableName` request parameter.
    */
    AWS_DYNAMODB_EXCLUSIVE_START_TABLE: 'aws.dynamodb.exclusive_start_table',
    /**
    * The the number of items in the `TableNames` response parameter.
    */
    AWS_DYNAMODB_TABLE_COUNT: 'aws.dynamodb.table_count',
    /**
    * The value of the `ScanIndexForward` request parameter.
    */
    AWS_DYNAMODB_SCAN_FORWARD: 'aws.dynamodb.scan_forward',
    /**
    * The value of the `Segment` request parameter.
    */
    AWS_DYNAMODB_SEGMENT: 'aws.dynamodb.segment',
    /**
    * The value of the `TotalSegments` request parameter.
    */
    AWS_DYNAMODB_TOTAL_SEGMENTS: 'aws.dynamodb.total_segments',
    /**
    * The value of the `Count` response parameter.
    */
    AWS_DYNAMODB_COUNT: 'aws.dynamodb.count',
    /**
    * The value of the `ScannedCount` response parameter.
    */
    AWS_DYNAMODB_SCANNED_COUNT: 'aws.dynamodb.scanned_count',
    /**
    * The JSON-serialized value of each item in the `AttributeDefinitions` request field.
    */
    AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: 'aws.dynamodb.attribute_definitions',
    /**
    * The JSON-serialized value of each item in the the `GlobalSecondaryIndexUpdates` request field.
    */
    AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: 'aws.dynamodb.global_secondary_index_updates',
    /**
    * A string identifying the messaging system.
    */
    MESSAGING_SYSTEM: 'messaging.system',
    /**
    * The message destination name. This might be equal to the span name but is required nevertheless.
    */
    MESSAGING_DESTINATION: 'messaging.destination',
    /**
    * The kind of message destination.
    */
    MESSAGING_DESTINATION_KIND: 'messaging.destination_kind',
    /**
    * A boolean that is true if the message destination is temporary.
    */
    MESSAGING_TEMP_DESTINATION: 'messaging.temp_destination',
    /**
    * The name of the transport protocol.
    */
    MESSAGING_PROTOCOL: 'messaging.protocol',
    /**
    * The version of the transport protocol.
    */
    MESSAGING_PROTOCOL_VERSION: 'messaging.protocol_version',
    /**
    * Connection string.
    */
    MESSAGING_URL: 'messaging.url',
    /**
    * A value used by the messaging system as an identifier for the message, represented as a string.
    */
    MESSAGING_MESSAGE_ID: 'messaging.message_id',
    /**
    * The [conversation ID](#conversations) identifying the conversation to which the message belongs, represented as a string. Sometimes called &#34;Correlation ID&#34;.
    */
    MESSAGING_CONVERSATION_ID: 'messaging.conversation_id',
    /**
    * The (uncompressed) size of the message payload in bytes. Also use this attribute if it is unknown whether the compressed or uncompressed payload size is reported.
    */
    MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: 'messaging.message_payload_size_bytes',
    /**
    * The compressed size of the message payload in bytes.
    */
    MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: 'messaging.message_payload_compressed_size_bytes',
    /**
    * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
    */
    MESSAGING_OPERATION: 'messaging.operation',
    /**
    * The identifier for the consumer receiving a message. For Kafka, set it to `{messaging.kafka.consumer_group} - {messaging.kafka.client_id}`, if both are present, or only `messaging.kafka.consumer_group`. For brokers, such as RabbitMQ and Artemis, set it to the `client_id` of the client consuming the message.
    */
    MESSAGING_CONSUMER_ID: 'messaging.consumer_id',
    /**
    * RabbitMQ message routing key.
    */
    MESSAGING_RABBITMQ_ROUTING_KEY: 'messaging.rabbitmq.routing_key',
    /**
    * Message keys in Kafka are used for grouping alike messages to ensure they&#39;re processed on the same partition. They differ from `messaging.message_id` in that they&#39;re not unique. If the key is `null`, the attribute MUST NOT be set.
    *
    * Note: If the key type is not string, it&#39;s string representation has to be supplied for the attribute. If the key has no unambiguous, canonical string form, don&#39;t include its value.
    */
    MESSAGING_KAFKA_MESSAGE_KEY: 'messaging.kafka.message_key',
    /**
    * Name of the Kafka Consumer Group that is handling the message. Only applies to consumers, not producers.
    */
    MESSAGING_KAFKA_CONSUMER_GROUP: 'messaging.kafka.consumer_group',
    /**
    * Client Id for the Consumer or Producer that is handling the message.
    */
    MESSAGING_KAFKA_CLIENT_ID: 'messaging.kafka.client_id',
    /**
    * Partition the message is sent to.
    */
    MESSAGING_KAFKA_PARTITION: 'messaging.kafka.partition',
    /**
    * A boolean that is true if the message is a tombstone.
    */
    MESSAGING_KAFKA_TOMBSTONE: 'messaging.kafka.tombstone',
    /**
    * A string identifying the remoting system.
    */
    RPC_SYSTEM: 'rpc.system',
    /**
    * The full (logical) name of the service being called, including its package name, if applicable.
    *
    * Note: This is the logical name of the service from the RPC interface perspective, which can be different from the name of any implementing class. The `code.namespace` attribute may be used to store the latter (despite the attribute name, it may include a class name; e.g., class with method actually executing the call on the server side, RPC client stub class on the client side).
    */
    RPC_SERVICE: 'rpc.service',
    /**
    * The name of the (logical) method being called, must be equal to the $method part in the span name.
    *
    * Note: This is the logical name of the method from the RPC interface perspective, which can be different from the name of any implementing method/function. The `code.function` attribute may be used to store the latter (e.g., method actually executing the call on the server side, RPC client stub method on the client side).
    */
    RPC_METHOD: 'rpc.method',
    /**
    * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
    */
    RPC_GRPC_STATUS_CODE: 'rpc.grpc.status_code',
    /**
    * Protocol version as in `jsonrpc` property of request/response. Since JSON-RPC 1.0 does not specify this, the value can be omitted.
    */
    RPC_JSONRPC_VERSION: 'rpc.jsonrpc.version',
    /**
    * `id` property of request or response. Since protocol allows id to be int, string, `null` or missing (for notifications), value is expected to be cast to string for simplicity. Use empty string in case of `null` value. Omit entirely if this is a notification.
    */
    RPC_JSONRPC_REQUEST_ID: 'rpc.jsonrpc.request_id',
    /**
    * `error.code` property of response if it is an error response.
    */
    RPC_JSONRPC_ERROR_CODE: 'rpc.jsonrpc.error_code',
    /**
    * `error.message` property of response if it is an error response.
    */
    RPC_JSONRPC_ERROR_MESSAGE: 'rpc.jsonrpc.error_message',
    /**
    * Whether this is a received or sent message.
    */
    MESSAGE_TYPE: 'message.type',
    /**
    * MUST be calculated as two different counters starting from `1` one for sent messages and one for received message.
    *
    * Note: This way we guarantee that the values will be consistent between different implementations.
    */
    MESSAGE_ID: 'message.id',
    /**
    * Compressed size of the message in bytes.
    */
    MESSAGE_COMPRESSED_SIZE: 'message.compressed_size',
    /**
    * Uncompressed size of the message in bytes.
    */
    MESSAGE_UNCOMPRESSED_SIZE: 'message.uncompressed_size',
};
var DbSystemValues = {
    /** Some other SQL database. Fallback only. See notes. */
    OTHER_SQL: 'other_sql',
    /** Microsoft SQL Server. */
    MSSQL: 'mssql',
    /** MySQL. */
    MYSQL: 'mysql',
    /** Oracle Database. */
    ORACLE: 'oracle',
    /** IBM Db2. */
    DB2: 'db2',
    /** PostgreSQL. */
    POSTGRESQL: 'postgresql',
    /** Amazon Redshift. */
    REDSHIFT: 'redshift',
    /** Apache Hive. */
    HIVE: 'hive',
    /** Cloudscape. */
    CLOUDSCAPE: 'cloudscape',
    /** HyperSQL DataBase. */
    HSQLDB: 'hsqldb',
    /** Progress Database. */
    PROGRESS: 'progress',
    /** SAP MaxDB. */
    MAXDB: 'maxdb',
    /** SAP HANA. */
    HANADB: 'hanadb',
    /** Ingres. */
    INGRES: 'ingres',
    /** FirstSQL. */
    FIRSTSQL: 'firstsql',
    /** EnterpriseDB. */
    EDB: 'edb',
    /** InterSystems Caché. */
    CACHE: 'cache',
    /** Adabas (Adaptable Database System). */
    ADABAS: 'adabas',
    /** Firebird. */
    FIREBIRD: 'firebird',
    /** Apache Derby. */
    DERBY: 'derby',
    /** FileMaker. */
    FILEMAKER: 'filemaker',
    /** Informix. */
    INFORMIX: 'informix',
    /** InstantDB. */
    INSTANTDB: 'instantdb',
    /** InterBase. */
    INTERBASE: 'interbase',
    /** MariaDB. */
    MARIADB: 'mariadb',
    /** Netezza. */
    NETEZZA: 'netezza',
    /** Pervasive PSQL. */
    PERVASIVE: 'pervasive',
    /** PointBase. */
    POINTBASE: 'pointbase',
    /** SQLite. */
    SQLITE: 'sqlite',
    /** Sybase. */
    SYBASE: 'sybase',
    /** Teradata. */
    TERADATA: 'teradata',
    /** Vertica. */
    VERTICA: 'vertica',
    /** H2. */
    H2: 'h2',
    /** ColdFusion IMQ. */
    COLDFUSION: 'coldfusion',
    /** Apache Cassandra. */
    CASSANDRA: 'cassandra',
    /** Apache HBase. */
    HBASE: 'hbase',
    /** MongoDB. */
    MONGODB: 'mongodb',
    /** Redis. */
    REDIS: 'redis',
    /** Couchbase. */
    COUCHBASE: 'couchbase',
    /** CouchDB. */
    COUCHDB: 'couchdb',
    /** Microsoft Azure Cosmos DB. */
    COSMOSDB: 'cosmosdb',
    /** Amazon DynamoDB. */
    DYNAMODB: 'dynamodb',
    /** Neo4j. */
    NEO4J: 'neo4j',
    /** Apache Geode. */
    GEODE: 'geode',
    /** Elasticsearch. */
    ELASTICSEARCH: 'elasticsearch',
    /** Memcached. */
    MEMCACHED: 'memcached',
    /** CockroachDB. */
    COCKROACHDB: 'cockroachdb',
};
var DbCassandraConsistencyLevelValues = {
    /** all. */
    ALL: 'all',
    /** each_quorum. */
    EACH_QUORUM: 'each_quorum',
    /** quorum. */
    QUORUM: 'quorum',
    /** local_quorum. */
    LOCAL_QUORUM: 'local_quorum',
    /** one. */
    ONE: 'one',
    /** two. */
    TWO: 'two',
    /** three. */
    THREE: 'three',
    /** local_one. */
    LOCAL_ONE: 'local_one',
    /** any. */
    ANY: 'any',
    /** serial. */
    SERIAL: 'serial',
    /** local_serial. */
    LOCAL_SERIAL: 'local_serial',
};
var FaasTriggerValues = {
    /** A response to some data source operation such as a database or filesystem read/write. */
    DATASOURCE: 'datasource',
    /** To provide an answer to an inbound HTTP request. */
    HTTP: 'http',
    /** A function is set to be executed when messages are sent to a messaging system. */
    PUBSUB: 'pubsub',
    /** A function is scheduled to be executed regularly. */
    TIMER: 'timer',
    /** If none of the others apply. */
    OTHER: 'other',
};
var FaasDocumentOperationValues = {
    /** When a new object is created. */
    INSERT: 'insert',
    /** When an object is modified. */
    EDIT: 'edit',
    /** When an object is deleted. */
    DELETE: 'delete',
};
var FaasInvokedProviderValues = {
    /** Alibaba Cloud. */
    ALIBABA_CLOUD: 'alibaba_cloud',
    /** Amazon Web Services. */
    AWS: 'aws',
    /** Microsoft Azure. */
    AZURE: 'azure',
    /** Google Cloud Platform. */
    GCP: 'gcp',
};
var NetTransportValues = {
    /** ip_tcp. */
    IP_TCP: 'ip_tcp',
    /** ip_udp. */
    IP_UDP: 'ip_udp',
    /** Another IP-based protocol. */
    IP: 'ip',
    /** Unix Domain socket. See below. */
    UNIX: 'unix',
    /** Named or anonymous pipe. See note below. */
    PIPE: 'pipe',
    /** In-process communication. */
    INPROC: 'inproc',
    /** Something else (non IP-based). */
    OTHER: 'other',
};
var NetHostConnectionTypeValues = {
    /** wifi. */
    WIFI: 'wifi',
    /** wired. */
    WIRED: 'wired',
    /** cell. */
    CELL: 'cell',
    /** unavailable. */
    UNAVAILABLE: 'unavailable',
    /** unknown. */
    UNKNOWN: 'unknown',
};
var NetHostConnectionSubtypeValues = {
    /** GPRS. */
    GPRS: 'gprs',
    /** EDGE. */
    EDGE: 'edge',
    /** UMTS. */
    UMTS: 'umts',
    /** CDMA. */
    CDMA: 'cdma',
    /** EVDO Rel. 0. */
    EVDO_0: 'evdo_0',
    /** EVDO Rev. A. */
    EVDO_A: 'evdo_a',
    /** CDMA2000 1XRTT. */
    CDMA2000_1XRTT: 'cdma2000_1xrtt',
    /** HSDPA. */
    HSDPA: 'hsdpa',
    /** HSUPA. */
    HSUPA: 'hsupa',
    /** HSPA. */
    HSPA: 'hspa',
    /** IDEN. */
    IDEN: 'iden',
    /** EVDO Rev. B. */
    EVDO_B: 'evdo_b',
    /** LTE. */
    LTE: 'lte',
    /** EHRPD. */
    EHRPD: 'ehrpd',
    /** HSPAP. */
    HSPAP: 'hspap',
    /** GSM. */
    GSM: 'gsm',
    /** TD-SCDMA. */
    TD_SCDMA: 'td_scdma',
    /** IWLAN. */
    IWLAN: 'iwlan',
    /** 5G NR (New Radio). */
    NR: 'nr',
    /** 5G NRNSA (New Radio Non-Standalone). */
    NRNSA: 'nrnsa',
    /** LTE CA. */
    LTE_CA: 'lte_ca',
};
var HttpFlavorValues = {
    /** HTTP 1.0. */
    HTTP_1_0: '1.0',
    /** HTTP 1.1. */
    HTTP_1_1: '1.1',
    /** HTTP 2. */
    HTTP_2_0: '2.0',
    /** SPDY protocol. */
    SPDY: 'SPDY',
    /** QUIC protocol. */
    QUIC: 'QUIC',
};
var MessagingDestinationKindValues = {
    /** A message sent to a queue. */
    QUEUE: 'queue',
    /** A message sent to a topic. */
    TOPIC: 'topic',
};
var MessagingOperationValues = {
    /** receive. */
    RECEIVE: 'receive',
    /** process. */
    PROCESS: 'process',
};
var RpcGrpcStatusCodeValues = {
    /** OK. */
    OK: 0,
    /** CANCELLED. */
    CANCELLED: 1,
    /** UNKNOWN. */
    UNKNOWN: 2,
    /** INVALID_ARGUMENT. */
    INVALID_ARGUMENT: 3,
    /** DEADLINE_EXCEEDED. */
    DEADLINE_EXCEEDED: 4,
    /** NOT_FOUND. */
    NOT_FOUND: 5,
    /** ALREADY_EXISTS. */
    ALREADY_EXISTS: 6,
    /** PERMISSION_DENIED. */
    PERMISSION_DENIED: 7,
    /** RESOURCE_EXHAUSTED. */
    RESOURCE_EXHAUSTED: 8,
    /** FAILED_PRECONDITION. */
    FAILED_PRECONDITION: 9,
    /** ABORTED. */
    ABORTED: 10,
    /** OUT_OF_RANGE. */
    OUT_OF_RANGE: 11,
    /** UNIMPLEMENTED. */
    UNIMPLEMENTED: 12,
    /** INTERNAL. */
    INTERNAL: 13,
    /** UNAVAILABLE. */
    UNAVAILABLE: 14,
    /** DATA_LOSS. */
    DATA_LOSS: 15,
    /** UNAUTHENTICATED. */
    UNAUTHENTICATED: 16,
};
var MessageTypeValues = {
    /** sent. */
    SENT: 'SENT',
    /** received. */
    RECEIVED: 'RECEIVED',
};
//# sourceMappingURL=SemanticAttributes.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.3.1-3ba3c4558c-83fa3b8a81.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbCassandraConsistencyLevelValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.DbCassandraConsistencyLevelValues),
/* harmony export */   "DbSystemValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.DbSystemValues),
/* harmony export */   "FaasDocumentOperationValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.FaasDocumentOperationValues),
/* harmony export */   "FaasInvokedProviderValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.FaasInvokedProviderValues),
/* harmony export */   "FaasTriggerValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.FaasTriggerValues),
/* harmony export */   "HttpFlavorValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.HttpFlavorValues),
/* harmony export */   "MessageTypeValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.MessageTypeValues),
/* harmony export */   "MessagingDestinationKindValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.MessagingDestinationKindValues),
/* harmony export */   "MessagingOperationValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.MessagingOperationValues),
/* harmony export */   "NetHostConnectionSubtypeValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.NetHostConnectionSubtypeValues),
/* harmony export */   "NetHostConnectionTypeValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.NetHostConnectionTypeValues),
/* harmony export */   "NetTransportValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.NetTransportValues),
/* harmony export */   "RpcGrpcStatusCodeValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.RpcGrpcStatusCodeValues),
/* harmony export */   "SemanticAttributes": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.SemanticAttributes)
/* harmony export */ });
/* harmony import */ var _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.3.1-3ba3c4558c-83fa3b8a81.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=index.js.map

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

/***/ "./.yarn/cache/immer-npm-9.0.14-0baed19a8d-17f1365c06.zip/node_modules/immer/dist/immer.esm.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immer": () => (/* binding */ un),
/* harmony export */   "applyPatches": () => (/* binding */ pn),
/* harmony export */   "castDraft": () => (/* binding */ K),
/* harmony export */   "castImmutable": () => (/* binding */ $),
/* harmony export */   "createDraft": () => (/* binding */ ln),
/* harmony export */   "current": () => (/* binding */ D),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "enableAllPlugins": () => (/* binding */ J),
/* harmony export */   "enableES5": () => (/* binding */ N),
/* harmony export */   "enableMapSet": () => (/* binding */ C),
/* harmony export */   "enablePatches": () => (/* binding */ T),
/* harmony export */   "finishDraft": () => (/* binding */ dn),
/* harmony export */   "freeze": () => (/* binding */ d),
/* harmony export */   "immerable": () => (/* binding */ L),
/* harmony export */   "isDraft": () => (/* binding */ r),
/* harmony export */   "isDraftable": () => (/* binding */ t),
/* harmony export */   "nothing": () => (/* binding */ H),
/* harmony export */   "original": () => (/* binding */ e),
/* harmony export */   "produce": () => (/* binding */ fn),
/* harmony export */   "produceWithPatches": () => (/* binding */ cn),
/* harmony export */   "setAutoFreeze": () => (/* binding */ sn),
/* harmony export */   "setUseProxies": () => (/* binding */ vn)
/* harmony export */ });
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return false||U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&n(5),r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return true&&f(r),en.get(r,n)},set:function(r){var t=this[Q]; true&&f(t),en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.O&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},R:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.O&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.D.set(n,!1):r.D.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return true&&isNaN(parseInt(t))&&n(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return true&&"length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.F&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ })

}]);