"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["heatmapPanel"],{

/***/ "./public/app/core/components/ColorScale/ColorScale.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorScale": () => (/* binding */ ColorScale)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const GRADIENT_STOPS = 10;
const ColorScale = ({
  colorPalette,
  min,
  max,
  display,
  hoverValue,
  useStopsPercentage
}) => {
  const [colors, setColors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [scaleHover, setScaleHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    isShown: false,
    value: 0
  });
  const [percent, setPercent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // 0-100 for CSS percentage

  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const styles = getStyles(theme, colors);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setColors(getGradientStops({
      colorArray: colorPalette,
      stops: GRADIENT_STOPS,
      useStopsPercentage
    }));
  }, [colorPalette, useStopsPercentage]);

  const onScaleMouseMove = event => {
    const divOffset = event.nativeEvent.offsetX;
    const offsetWidth = event.target.offsetWidth;
    const normPercentage = Math.floor(divOffset * 100 / offsetWidth + 1);
    const scaleValue = Math.floor((max - min) * normPercentage / 100 + min);
    setScaleHover({
      isShown: true,
      value: scaleValue
    });
    setPercent(normPercentage);
  };

  const onScaleMouseLeave = () => {
    setScaleHover({
      isShown: false,
      value: 0
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setPercent(hoverValue == null ? null : clampPercent100((hoverValue - min) / (max - min)));
  }, [hoverValue, min, max]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: styles.scaleWrapper,
    onMouseMove: onScaleMouseMove,
    onMouseLeave: onScaleMouseLeave,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.scaleGradient,
      children: display && (scaleHover.isShown || hoverValue !== undefined) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: styles.followerContainer,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: styles.follower,
          style: {
            left: `${percent}%`
          }
        })
      })
    }), display && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.followerContainer,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: styles.legendValues,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: display(min)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: display(max)
        })]
      }), percent != null && (scaleHover.isShown || hoverValue !== undefined) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: styles.hoverValue,
        style: {
          left: `${percent}%`
        },
        children: display(hoverValue !== null && hoverValue !== void 0 ? hoverValue : scaleHover.value)
      })]
    })]
  });
};

const getGradientStops = ({
  colorArray,
  stops,
  useStopsPercentage = true
}) => {
  const colorCount = colorArray.length;

  if (useStopsPercentage && colorCount <= 20) {
    const incr = 1 / colorCount * 100;
    let per = 0;
    const stops = [];

    for (const color of colorArray) {
      if (per > 0) {
        stops.push(`${color} ${per}%`);
      } else {
        stops.push(color);
      }

      per += incr;
      stops.push(`${color} ${per}%`);
    }

    return stops;
  }

  const gradientEnd = colorArray[colorCount - 1];
  const skip = Math.ceil(colorCount / stops);
  const gradientStops = new Set();

  for (let i = 0; i < colorCount; i += skip) {
    gradientStops.add(colorArray[i]);
  }

  gradientStops.add(gradientEnd);
  return [...gradientStops];
};

function clampPercent100(v) {
  if (v > 1) {
    return 100;
  }

  if (v < 0) {
    return 0;
  }

  return v * 100;
}

const getStyles = (theme, colors) => ({
  scaleWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 100%;
    font-size: 11px;
    opacity: 1;
  `,
  scaleGradient: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background: linear-gradient(90deg, ${colors.join()});
    height: 10px;
    pointer-events: none;
  `,
  legendValues: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  `,
  hoverValue: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: absolute;
    margin-top: -14px;
    padding: 3px 15px;
    background: ${theme.colors.background.primary};
    transform: translateX(-50%);
  `,
  followerContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: relative;
    pointer-events: none;
    white-space: nowrap;
    height: 10px;
  `,
  follower: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: absolute;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: 2px solid ${theme.colors.text.primary};
    margin-top: 5px;
  `
});

/***/ }),

/***/ "./public/app/plugins/panel/heatmap/HeatmapHoverView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeatmapHoverView": () => (/* binding */ HeatmapHoverView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/heatmap.ts");
/* harmony import */ var app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/models.gen.ts");
/* harmony import */ var _geomap_components_DataHoverView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/geomap/components/DataHoverView.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const HeatmapHoverView = props => {
  if (props.hover.seriesIdx === 2) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_geomap_components_DataHoverView__WEBPACK_IMPORTED_MODULE_6__.DataHoverView, {
      data: props.data.exemplars,
      rowIndex: props.hover.dataIdx
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HeatmapHoverCell, Object.assign({}, props));
};

const HeatmapHoverCell = ({
  data,
  hover,
  showHistogram
}) => {
  var _data$heatmap, _data$heatmap2, _data$heatmap3, _meta$yOrdinalDisplay, _ref, _data$heatmap4;

  const index = hover.dataIdx;
  const xField = (_data$heatmap = data.heatmap) === null || _data$heatmap === void 0 ? void 0 : _data$heatmap.fields[0];
  const yField = (_data$heatmap2 = data.heatmap) === null || _data$heatmap2 === void 0 ? void 0 : _data$heatmap2.fields[1];
  const countField = (_data$heatmap3 = data.heatmap) === null || _data$heatmap3 === void 0 ? void 0 : _data$heatmap3.fields[2];

  const xDisp = v => {
    if (xField !== null && xField !== void 0 && xField.display) {
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.formattedValueToString)(xField.display(v));
    }

    if ((xField === null || xField === void 0 ? void 0 : xField.type) === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time) {
      const tooltipTimeFormat = 'YYYY-MM-DD HH:mm:ss';
      const dashboard = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_3__.getDashboardSrv)().getCurrent();
      return dashboard === null || dashboard === void 0 ? void 0 : dashboard.formatDate(v, tooltipTimeFormat);
    }

    return `${v}`;
  };

  const xVals = xField === null || xField === void 0 ? void 0 : xField.values.toArray();
  const yVals = yField === null || yField === void 0 ? void 0 : yField.values.toArray();
  const countVals = countField === null || countField === void 0 ? void 0 : countField.values.toArray(); // labeled buckets

  const meta = (0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_4__.readHeatmapRowsCustomMeta)(data.heatmap);
  const yDispSrc = (_meta$yOrdinalDisplay = meta.yOrdinalDisplay) !== null && _meta$yOrdinalDisplay !== void 0 ? _meta$yOrdinalDisplay : yVals;
  const yDisp = yField !== null && yField !== void 0 && yField.display ? v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.formattedValueToString)(yField.display(v)) : v => `${v}`;
  const yValueIdx = (_ref = index % data.yBucketCount) !== null && _ref !== void 0 ? _ref : 0;
  const yMinIdx = data.yLayout === app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.le ? yValueIdx - 1 : yValueIdx;
  const yMaxIdx = data.yLayout === app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.le ? yValueIdx : yValueIdx + 1;
  const yBucketMin = yDispSrc === null || yDispSrc === void 0 ? void 0 : yDispSrc[yMinIdx];
  const yBucketMax = yDispSrc === null || yDispSrc === void 0 ? void 0 : yDispSrc[yMaxIdx];
  const xBucketMin = xVals === null || xVals === void 0 ? void 0 : xVals[index];
  const xBucketMax = xBucketMin + data.xBucketSize;
  const count = countVals === null || countVals === void 0 ? void 0 : countVals[index];
  const visibleFields = (_data$heatmap4 = data.heatmap) === null || _data$heatmap4 === void 0 ? void 0 : _data$heatmap4.fields.filter(f => {
    var _f$config$custom, _f$config$custom$hide;

    return !Boolean((_f$config$custom = f.config.custom) === null || _f$config$custom === void 0 ? void 0 : (_f$config$custom$hide = _f$config$custom.hideFrom) === null || _f$config$custom$hide === void 0 ? void 0 : _f$config$custom$hide.tooltip);
  });
  const links = [];
  const linkLookup = new Set();

  for (const field of visibleFields !== null && visibleFields !== void 0 ? visibleFields : []) {
    // TODO: Currently always undefined? (getLinks)
    if (field.getLinks) {
      const v = field.values.get(index);
      const disp = field.display ? field.display(v) : {
        text: `${v}`,
        numeric: +v
      };
      field.getLinks({
        calculatedValue: disp,
        valueRowIndex: index
      }).forEach(link => {
        const key = `${link.title}/${link.href}`;

        if (!linkLookup.has(key)) {
          links.push(link);
          linkLookup.add(key);
        }
      });
    }
  }

  let can = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  let histCssWidth = 150;
  let histCssHeight = 50;
  let histCanWidth = Math.round(histCssWidth * devicePixelRatio);
  let histCanHeight = Math.round(histCssHeight * devicePixelRatio);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (showHistogram) {
      var _can$current;

      let histCtx = (_can$current = can.current) === null || _can$current === void 0 ? void 0 : _can$current.getContext('2d');

      if (histCtx && xVals && yVals && countVals) {
        let fromIdx = index;

        while (xVals[fromIdx--] === xVals[index]) {}

        fromIdx++;
        let toIdx = fromIdx + data.yBucketCount;
        let maxCount = 0;
        let i = fromIdx;

        while (i < toIdx) {
          let c = countVals[i];
          maxCount = Math.max(maxCount, c);
          i++;
        }

        let pHov = new Path2D();
        let pRest = new Path2D();
        i = fromIdx;
        let j = 0;

        while (i < toIdx) {
          let c = countVals[i];

          if (c > 0) {
            let pctY = c / maxCount;
            let pctX = j / (data.yBucketCount + 1);
            let p = i === index ? pHov : pRest;
            p.rect(Math.round(histCanWidth * pctX), Math.round(histCanHeight * (1 - pctY)), Math.round(histCanWidth / data.yBucketCount), Math.round(histCanHeight * pctY));
          }

          i++;
          j++;
        }

        histCtx.clearRect(0, 0, histCanWidth, histCanHeight);
        histCtx.fillStyle = '#ffffff80';
        histCtx.fill(pRest);
        histCtx.fillStyle = '#ff000080';
        histCtx.fill(pHov);
      }
    }
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [index]);
  const [isSparse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var _data$heatmap5, _data$heatmap5$meta;

    return ((_data$heatmap5 = data.heatmap) === null || _data$heatmap5 === void 0 ? void 0 : (_data$heatmap5$meta = _data$heatmap5.meta) === null || _data$heatmap5$meta === void 0 ? void 0 : _data$heatmap5$meta.type) === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataFrameType.HeatmapCells && !(0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_4__.isHeatmapCellsDense)(data.heatmap);
  });

  if (isSparse) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_geomap_components_DataHoverView__WEBPACK_IMPORTED_MODULE_6__.DataHoverView, {
        data: data.heatmap,
        rowIndex: index
      })
    });
  }

  const renderYBuckets = () => {
    switch (data.yLayout) {
      case app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.unknown:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          children: yDisp(yBucketMin)
        });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: ["Bucket: ", yDisp(yBucketMin), " - ", yDisp(yBucketMax)]
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        children: xDisp(xBucketMin)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        children: xDisp(xBucketMax)
      })]
    }), showHistogram && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("canvas", {
      width: histCanWidth,
      height: histCanHeight,
      ref: can,
      style: {
        width: histCanWidth + 'px',
        height: histCanHeight + 'px'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [renderYBuckets(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        children: [(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldDisplayName)(countField, data.heatmap), ": ", data.display(count)]
      })]
    }), links.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
      children: links.map((link, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        icon: 'external-link-alt',
        target: link.target,
        href: link.href,
        onClick: link.onClick,
        fill: "text",
        style: {
          width: '100%'
        },
        children: link.title
      }, i))
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/panel/heatmap/HeatmapPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeatmapPanel": () => (/* binding */ HeatmapPanel)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var app_core_components_ColorScale_ColorScale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/ColorScale/ColorScale.tsx");
/* harmony import */ var app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/heatmap.ts");
/* harmony import */ var _HeatmapHoverView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/heatmap/HeatmapHoverView.tsx");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/heatmap/fields.ts");
/* harmony import */ var _palettes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/heatmap/palettes.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/heatmap/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");















const HeatmapPanel = ({
  data,
  id,
  timeRange,
  timeZone,
  width,
  height,
  options,
  fieldConfig,
  eventBus,
  onChangeTimeRange,
  replaceVariables
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const {
    sync
  } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.usePanelContext)(); // ugh

  let timeRangeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(timeRange);
  timeRangeRef.current = timeRange;
  const info = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    try {
      return (0,_fields__WEBPACK_IMPORTED_MODULE_9__.prepareHeatmapData)(data, options, theme);
    } catch (ex) {
      return {
        warning: `${ex}`
      };
    }
  }, [data, options, theme]);
  const facets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _info$exemplars, _info$heatmap;

    let exemplarsXFacet = []; // "Time" field

    let exemplarsyFacet = [];
    const meta = (0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_7__.readHeatmapRowsCustomMeta)(info.heatmap);

    if ((_info$exemplars = info.exemplars) !== null && _info$exemplars !== void 0 && _info$exemplars.length && meta.yMatchWithLabel) {
      var _info$exemplars2;

      exemplarsXFacet = (_info$exemplars2 = info.exemplars) === null || _info$exemplars2 === void 0 ? void 0 : _info$exemplars2.fields[0].values.toArray(); // ordinal/labeled heatmap-buckets?

      const hasLabeledY = meta.yOrdinalDisplay != null;

      if (hasLabeledY) {
        var _info$exemplars3;

        let matchExemplarsBy = (_info$exemplars3 = info.exemplars) === null || _info$exemplars3 === void 0 ? void 0 : _info$exemplars3.fields.find(field => field.name === meta.yMatchWithLabel).values.toArray();
        exemplarsyFacet = matchExemplarsBy.map(label => {
          var _meta$yOrdinalLabel;

          return (_meta$yOrdinalLabel = meta.yOrdinalLabel) === null || _meta$yOrdinalLabel === void 0 ? void 0 : _meta$yOrdinalLabel.indexOf(label);
        });
      } else {
        var _info$exemplars4;

        exemplarsyFacet = (_info$exemplars4 = info.exemplars) === null || _info$exemplars4 === void 0 ? void 0 : _info$exemplars4.fields[1].values.toArray(); // "Value" field
      }
    }

    return [null, (_info$heatmap = info.heatmap) === null || _info$heatmap === void 0 ? void 0 : _info$heatmap.fields.map(f => f.values.toArray()), [exemplarsXFacet, exemplarsyFacet]];
  }, [info.heatmap, info.exemplars]);
  const palette = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_palettes__WEBPACK_IMPORTED_MODULE_10__.quantizeScheme)(options.color, theme), [options.color, theme]);
  const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const [shouldDisplayCloseButton, setShouldDisplayCloseButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const isToolTipOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);

  const onCloseToolTip = () => {
    isToolTipOpen.current = false;
    setShouldDisplayCloseButton(false);
    onhover(null);
  };

  const onclick = () => {
    isToolTipOpen.current = !isToolTipOpen.current; // Linking into useState required to re-render tooltip

    setShouldDisplayCloseButton(isToolTipOpen.current);
  };

  const onhover = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(evt => {
    setHover(evt !== null && evt !== void 0 ? evt : undefined);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [options, data.structureRev]); // ugh

  const dataRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(info);
  dataRef.current = info;
  const builder = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _dataRef$current, _dataRef$current$heat, _dataRef$current$heat2, _dataRef$current$heat3, _options$filterValues, _options$filterValues2, _options$exemplars$co, _options$exemplars, _options$calculation, _options$calculation$;

    const scaleConfig = (_dataRef$current = dataRef.current) === null || _dataRef$current === void 0 ? void 0 : (_dataRef$current$heat = _dataRef$current.heatmap) === null || _dataRef$current$heat === void 0 ? void 0 : (_dataRef$current$heat2 = _dataRef$current$heat.fields[1].config) === null || _dataRef$current$heat2 === void 0 ? void 0 : (_dataRef$current$heat3 = _dataRef$current$heat2.custom) === null || _dataRef$current$heat3 === void 0 ? void 0 : _dataRef$current$heat3.scaleDistribution;
    return (0,_utils__WEBPACK_IMPORTED_MODULE_11__.prepConfig)({
      dataRef,
      theme,
      eventBus,
      onhover: onhover,
      onclick: options.tooltip.show ? onclick : null,
      onzoom: evt => {
        const delta = evt.xMax - evt.xMin;

        if (delta > 1) {
          onChangeTimeRange({
            from: evt.xMin,
            to: evt.xMax
          });
        }
      },
      isToolTipOpen,
      timeZone,
      getTimeRange: () => timeRangeRef.current,
      sync,
      palette,
      cellGap: options.cellGap,
      hideLE: (_options$filterValues = options.filterValues) === null || _options$filterValues === void 0 ? void 0 : _options$filterValues.le,
      hideGE: (_options$filterValues2 = options.filterValues) === null || _options$filterValues2 === void 0 ? void 0 : _options$filterValues2.ge,
      exemplarColor: (_options$exemplars$co = (_options$exemplars = options.exemplars) === null || _options$exemplars === void 0 ? void 0 : _options$exemplars.color) !== null && _options$exemplars$co !== void 0 ? _options$exemplars$co : 'rgba(255,0,255,0.7)',
      yAxisConfig: options.yAxis,
      ySizeDivisor: (scaleConfig === null || scaleConfig === void 0 ? void 0 : scaleConfig.type) === _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ScaleDistribution.Log ? +(((_options$calculation = options.calculation) === null || _options$calculation === void 0 ? void 0 : (_options$calculation$ = _options$calculation.yBuckets) === null || _options$calculation$ === void 0 ? void 0 : _options$calculation$.value) || 1) : 1
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, data.structureRev]);

  const renderLegend = () => {
    var _dataRef$current2, _dataRef$current2$hea, _dataRef$current2$hea2, _dataRef$current3;

    if (!info.heatmap || !options.legend.show) {
      return null;
    }

    let heatmapType = (_dataRef$current2 = dataRef.current) === null || _dataRef$current2 === void 0 ? void 0 : (_dataRef$current2$hea = _dataRef$current2.heatmap) === null || _dataRef$current2$hea === void 0 ? void 0 : (_dataRef$current2$hea2 = _dataRef$current2$hea.meta) === null || _dataRef$current2$hea2 === void 0 ? void 0 : _dataRef$current2$hea2.type;
    let isSparseHeatmap = heatmapType === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataFrameType.HeatmapCells && !(0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_7__.isHeatmapCellsDense)((_dataRef$current3 = dataRef.current) === null || _dataRef$current3 === void 0 ? void 0 : _dataRef$current3.heatmap);
    let countFieldIdx = !isSparseHeatmap ? 2 : 3;
    const countField = info.heatmap.fields[countFieldIdx];
    let hoverValue = undefined; // seriesIdx: 1 is heatmap layer; 2 is exemplar layer

    if (hover && info.heatmap.fields && hover.seriesIdx === 1) {
      hoverValue = countField.values.get(hover.dataIdx);
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.VizLayout.Legend, {
      placement: "bottom",
      maxHeight: "20%",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: styles.colorScaleWrapper,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_ColorScale_ColorScale__WEBPACK_IMPORTED_MODULE_6__.ColorScale, {
          hoverValue: hoverValue,
          colorPalette: palette,
          min: dataRef.current.minValue,
          max: dataRef.current.maxValue,
          display: info.display
        })
      })
    });
  };

  if (info.warning || !info.heatmap) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.PanelDataErrorView, {
      panelId: id,
      fieldConfig: fieldConfig,
      data: data,
      needsNumberField: true,
      message: info.warning
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.VizLayout, {
      width: width,
      height: height,
      legend: renderLegend(),
      children: (vizWidth, vizHeight) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.UPlotChart, {
        config: builder,
        data: facets,
        width: vizWidth,
        height: vizHeight,
        timeRange: timeRange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Portal, {
      children: hover && options.tooltip.show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.VizTooltipContainer, {
        position: {
          x: hover.pageX,
          y: hover.pageY
        },
        offset: {
          x: 10,
          y: 10
        },
        allowPointerEvents: isToolTipOpen.current,
        children: [shouldDisplayCloseButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_5__.CloseButton, {
            onClick: onCloseToolTip
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: styles.closeButtonSpacer
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_HeatmapHoverView__WEBPACK_IMPORTED_MODULE_8__.HeatmapHoverView, {
          data: info,
          hover: hover,
          showHistogram: options.tooltip.yHistogram
        })]
      })
    })]
  });
};

const getStyles = theme => ({
  closeButtonSpacer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 15px;
  `,
  colorScaleWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: 25px;
    padding: 10px 0;
    max-width: 300px;
  `
});

/***/ }),

/***/ "./public/app/plugins/panel/heatmap/fields.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareHeatmapData": () => (/* binding */ prepareHeatmapData)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/heatmap.ts");
/* harmony import */ var app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/models.gen.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/heatmap/utils.ts");




function prepareHeatmapData(data, options, theme) {
  var _data$annotations, _frame$meta, _options$yAxis, _options$yAxis2;

  let frames = data.series;

  if (!(frames !== null && frames !== void 0 && frames.length)) {
    return {};
  }

  const exemplars = (_data$annotations = data.annotations) === null || _data$annotations === void 0 ? void 0 : _data$annotations.find(f => f.name === 'exemplar');

  if (options.calculate) {
    var _options$calculation;

    return getDenseHeatmapData((0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_1__.calculateHeatmapFromData)(frames, (_options$calculation = options.calculation) !== null && _options$calculation !== void 0 ? _options$calculation : {}), exemplars, options, theme);
  } // Check for known heatmap types


  let rowsHeatmap = undefined;

  for (const frame of frames) {
    switch ((_frame$meta = frame.meta) === null || _frame$meta === void 0 ? void 0 : _frame$meta.type) {
      case _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameType.HeatmapCells:
        return (0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_1__.isHeatmapCellsDense)(frame) ? getDenseHeatmapData(frame, exemplars, options, theme) : getSparseHeatmapData(frame, exemplars, options, theme);

      case _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameType.HeatmapRows:
        rowsHeatmap = frame;
      // the default format
    }
  } // Everything past here assumes a field for each row in the heatmap (buckets)


  if (!rowsHeatmap) {
    if (frames.length > 1) {
      rowsHeatmap = [(0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.outerJoinDataFrames)({
        frames
      })][0];
    } else {
      rowsHeatmap = frames[0];
    }
  }

  return getDenseHeatmapData((0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_1__.rowsToCellsHeatmap)(Object.assign({
    unit: (_options$yAxis = options.yAxis) === null || _options$yAxis === void 0 ? void 0 : _options$yAxis.unit,
    // used to format the ordinal lookup values
    decimals: (_options$yAxis2 = options.yAxis) === null || _options$yAxis2 === void 0 ? void 0 : _options$yAxis2.decimals
  }, options.rowsFrame, {
    frame: rowsHeatmap
  })), exemplars, options, theme);
}

const getSparseHeatmapData = (frame, exemplars, options, theme) => {
  var _frame$meta2, _options$filterValues, _options$filterValues2;

  if (((_frame$meta2 = frame.meta) === null || _frame$meta2 === void 0 ? void 0 : _frame$meta2.type) !== _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameType.HeatmapCells || (0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_1__.isHeatmapCellsDense)(frame)) {
    return {
      warning: 'Expected sparse heatmap format',
      heatmap: frame
    };
  } // y axis tick label display


  updateFieldDisplay(frame.fields[1], options.yAxis, theme); // cell value display

  const disp = updateFieldDisplay(frame.fields[3], options.cellValues, theme);
  let [minValue, maxValue] = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.boundedMinMax)(frame.fields[3].values.toArray(), options.color.min, options.color.max, (_options$filterValues = options.filterValues) === null || _options$filterValues === void 0 ? void 0 : _options$filterValues.le, (_options$filterValues2 = options.filterValues) === null || _options$filterValues2 === void 0 ? void 0 : _options$filterValues2.ge);
  return {
    heatmap: frame,
    minValue,
    maxValue,
    exemplars,
    display: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.formattedValueToString)(disp(v))
  };
};

const getDenseHeatmapData = (frame, exemplars, options, theme) => {
  var _frame$meta3, _options$filterValues3, _options$filterValues4;

  if (((_frame$meta3 = frame.meta) === null || _frame$meta3 === void 0 ? void 0 : _frame$meta3.type) !== _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameType.HeatmapCells) {
    return {
      warning: 'Expected heatmap scanlines format',
      heatmap: frame
    };
  }

  if (frame.fields.length < 2 || frame.length < 2) {
    return {
      heatmap: frame
    };
  }

  const meta = (0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_1__.readHeatmapRowsCustomMeta)(frame);
  let xName = undefined;
  let yName = undefined;
  let valueField = undefined; // validate field display properties

  for (const field of frame.fields) {
    switch (field.name) {
      case 'y':
        yName = field.name;

      case 'yMin':
      case 'yMax':
        {
          if (!yName) {
            yName = field.name;
          }

          if (meta.yOrdinalDisplay == null) {
            updateFieldDisplay(field, options.yAxis, theme);
          }

          break;
        }

      case 'x':
      case 'xMin':
      case 'xMax':
        xName = field.name;
        break;

      default:
        {
          if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number && !valueField) {
            valueField = field;
          }
        }
    }
  }

  if (!yName) {
    return {
      warning: 'Missing Y field',
      heatmap: frame
    };
  }

  if (!yName) {
    return {
      warning: 'Missing X field',
      heatmap: frame
    };
  }

  if (!valueField) {
    return {
      warning: 'Missing value field',
      heatmap: frame
    };
  }

  const disp = updateFieldDisplay(valueField, options.cellValues, theme); // infer bucket sizes from data (for now)
  // the 'heatmap-scanlines' dense frame format looks like:
  // x:      1,1,1,1,2,2,2,2
  // y:      3,4,5,6,3,4,5,6
  // count:  0,0,0,7,0,3,0,1

  const xs = frame.fields[0].values.toArray();
  const ys = frame.fields[1].values.toArray();
  const dlen = xs.length; // below is literally copy/paste from the pathBuilder code in utils.ts
  // detect x and y bin qtys by detecting layout repetition in x & y data

  let yBinQty = dlen - ys.lastIndexOf(ys[0]);
  let xBinQty = dlen / yBinQty;
  let yBinIncr = ys[1] - ys[0];
  let xBinIncr = xs[yBinQty] - xs[0];
  let [minValue, maxValue] = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.boundedMinMax)(valueField.values.toArray(), options.color.min, options.color.max, (_options$filterValues3 = options.filterValues) === null || _options$filterValues3 === void 0 ? void 0 : _options$filterValues3.le, (_options$filterValues4 = options.filterValues) === null || _options$filterValues4 === void 0 ? void 0 : _options$filterValues4.ge);
  const data = {
    heatmap: frame,
    exemplars: exemplars !== null && exemplars !== void 0 && exemplars.length ? exemplars : undefined,
    xBucketSize: xBinIncr,
    yBucketSize: yBinIncr,
    xBucketCount: xBinQty,
    yBucketCount: yBinQty,
    minValue,
    maxValue,
    // TODO: improve heuristic
    xLayout: xName === 'xMax' ? app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_2__.HeatmapCellLayout.le : xName === 'xMin' ? app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_2__.HeatmapCellLayout.ge : app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_2__.HeatmapCellLayout.unknown,
    yLayout: yName === 'yMax' ? app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_2__.HeatmapCellLayout.le : yName === 'yMin' ? app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_2__.HeatmapCellLayout.ge : app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_2__.HeatmapCellLayout.unknown,
    display: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.formattedValueToString)(disp(v))
  };
  return data;
};

function updateFieldDisplay(field, opts, theme) {
  var _opts$unit;

  if (opts !== null && opts !== void 0 && (_opts$unit = opts.unit) !== null && _opts$unit !== void 0 && _opts$unit.length || (opts === null || opts === void 0 ? void 0 : opts.decimals) != null) {
    const {
      unit,
      decimals
    } = opts;
    field.display = undefined;
    field.config = Object.assign({}, field.config);

    if (unit !== null && unit !== void 0 && unit.length) {
      field.config.unit = unit;
    }

    if (decimals != null) {
      field.config.decimals = decimals;
    }
  }

  if (!field.display) {
    field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDisplayProcessor)({
      field,
      theme
    });
  }

  return field.display;
}

/***/ }),

/***/ "./public/app/plugins/panel/heatmap/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "angularToReactHeatmap": () => (/* binding */ angularToReactHeatmap),
/* harmony export */   "heatmapChangedHandler": () => (/* binding */ heatmapChangedHandler),
/* harmony export */   "heatmapMigrationHandler": () => (/* binding */ heatmapMigrationHandler)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/index.ts");
/* harmony import */ var app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/models.gen.ts");
/* harmony import */ var _models_gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/heatmap/models.gen.ts");
/* harmony import */ var _palettes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/heatmap/palettes.ts");
const _excluded = ["bucketFrame"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/** Called when the version number changes */

const heatmapMigrationHandler = panel => {
  // Migrating from angular
  if (Object.keys(panel.options).length === 0) {
    return heatmapChangedHandler(panel, 'heatmap', {
      angular: panel
    }, panel.fieldConfig);
  }

  return panel.options;
};
/**
 * This is called when the panel changes from another panel
 */

const heatmapChangedHandler = (panel, prevPluginId, prevOptions, prevFieldConfig) => {
  if (prevPluginId === 'heatmap' && prevOptions.angular) {
    const {
      fieldConfig,
      options
    } = angularToReactHeatmap(Object.assign({}, prevOptions.angular, {
      fieldConfig: prevFieldConfig
    }));
    panel.fieldConfig = fieldConfig; // Mutates the incoming panel

    return options;
  } // alpha for 8.5+, then beta at 9.0.1


  if (prevPluginId === 'heatmap-new') {
    const _panel$options = panel.options,
          {
      bucketFrame
    } = _panel$options,
          options = _objectWithoutPropertiesLoose(_panel$options, _excluded);

    if (bucketFrame) {
      return Object.assign({}, options, {
        rowsFrame: bucketFrame
      });
    }

    return panel.options;
  }

  return {};
};
function angularToReactHeatmap(angular) {
  var _angular$cards, _angular$cards2, _angular$tooltip, _angular$tooltip2;

  const fieldConfig = {
    defaults: {},
    overrides: []
  };
  const calculate = angular.dataFormat === 'tsbuckets' ? false : true;
  const calculation = Object.assign({}, _models_gen__WEBPACK_IMPORTED_MODULE_2__.defaultPanelOptions.calculation);
  const oldYAxis = Object.assign({
    logBase: 1
  }, angular.yAxis);

  if (calculate) {
    if (angular.xBucketSize) {
      calculation.xBuckets = {
        mode: app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_1__.HeatmapCalculationMode.Size,
        value: `${angular.xBucketSize}`
      };
    } else if (angular.xBucketNumber) {
      calculation.xBuckets = {
        mode: app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_1__.HeatmapCalculationMode.Count,
        value: `${angular.xBucketNumber}`
      };
    }

    if (angular.yBucketSize) {
      calculation.yBuckets = {
        mode: app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_1__.HeatmapCalculationMode.Size,
        value: `${angular.yBucketSize}`
      };
    } else if (angular.xBucketNumber) {
      calculation.yBuckets = {
        mode: app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_1__.HeatmapCalculationMode.Count,
        value: `${angular.yBucketNumber}`
      };
    }

    if (oldYAxis.logBase > 1) {
      calculation.yBuckets = {
        mode: app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_1__.HeatmapCalculationMode.Count,
        value: +oldYAxis.splitFactor > 0 ? `${oldYAxis.splitFactor}` : undefined,
        scale: {
          type: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.ScaleDistribution.Log,
          log: oldYAxis.logBase
        }
      };
    }
  }

  const options = {
    calculate,
    calculation,
    color: Object.assign({}, _models_gen__WEBPACK_IMPORTED_MODULE_2__.defaultPanelOptions.color, {
      steps: 128 // best match with existing colors

    }),
    cellGap: asNumber((_angular$cards = angular.cards) === null || _angular$cards === void 0 ? void 0 : _angular$cards.cardPadding, 2),
    cellRadius: asNumber((_angular$cards2 = angular.cards) === null || _angular$cards2 === void 0 ? void 0 : _angular$cards2.cardRound),
    // just to keep it
    yAxis: {
      axisPlacement: oldYAxis.show === false ? _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.AxisPlacement.Hidden : _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.AxisPlacement.Left,
      reverse: Boolean(angular.reverseYBuckets),
      axisWidth: asNumber(oldYAxis.width),
      min: oldYAxis.min,
      max: oldYAxis.max,
      unit: oldYAxis.format,
      decimals: oldYAxis.decimals
    },
    cellValues: {
      decimals: asNumber(angular.tooltipDecimals)
    },
    rowsFrame: {
      layout: getHeatmapCellLayout(angular.yBucketBound)
    },
    legend: {
      show: Boolean(angular.legend.show)
    },
    showValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.VisibilityMode.Never,
    tooltip: {
      show: Boolean((_angular$tooltip = angular.tooltip) === null || _angular$tooltip === void 0 ? void 0 : _angular$tooltip.show),
      yHistogram: Boolean((_angular$tooltip2 = angular.tooltip) === null || _angular$tooltip2 === void 0 ? void 0 : _angular$tooltip2.showHistogram)
    },
    exemplars: Object.assign({}, _models_gen__WEBPACK_IMPORTED_MODULE_2__.defaultPanelOptions.exemplars)
  };

  if (angular.hideZeroBuckets) {
    options.filterValues = Object.assign({}, _models_gen__WEBPACK_IMPORTED_MODULE_2__.defaultPanelOptions.filterValues); // min: 1e-9
  } // Migrate color options


  const color = angular.color;

  switch (color === null || color === void 0 ? void 0 : color.mode) {
    case 'spectrum':
      {
        options.color.mode = _models_gen__WEBPACK_IMPORTED_MODULE_2__.HeatmapColorMode.Scheme;
        const current = color.colorScheme;
        let scheme = _palettes__WEBPACK_IMPORTED_MODULE_3__.colorSchemes.find(v => v.name === current);

        if (!scheme) {
          scheme = _palettes__WEBPACK_IMPORTED_MODULE_3__.colorSchemes.find(v => current.indexOf(v.name) >= 0);
        }

        options.color.scheme = scheme ? scheme.name : _models_gen__WEBPACK_IMPORTED_MODULE_2__.defaultPanelOptions.color.scheme;
        break;
      }

    case 'opacity':
      {
        options.color.mode = _models_gen__WEBPACK_IMPORTED_MODULE_2__.HeatmapColorMode.Opacity;
        options.color.scale = color.scale;
        break;
      }
  }

  options.color.fill = color.cardColor;
  options.color.min = color.min;
  options.color.max = color.max;
  return {
    fieldConfig,
    options
  };
}

function getHeatmapCellLayout(v) {
  switch (v) {
    case 'upper':
      return app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_1__.HeatmapCellLayout.ge;

    case 'lower':
      return app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_1__.HeatmapCellLayout.le;

    case 'middle':
      return app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_1__.HeatmapCellLayout.unknown;
  }

  return app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_1__.HeatmapCellLayout.auto;
}

function asNumber(v, defaultValue) {
  if (v == null || v === '') {
    return defaultValue;
  }

  const num = +v;
  return isNaN(num) ? defaultValue : num;
}

/***/ }),

/***/ "./public/app/plugins/panel/heatmap/models.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeatmapColorMode": () => (/* binding */ HeatmapColorMode),
/* harmony export */   "HeatmapColorScale": () => (/* binding */ HeatmapColorScale),
/* harmony export */   "defaultPanelFieldConfig": () => (/* binding */ defaultPanelFieldConfig),
/* harmony export */   "defaultPanelOptions": () => (/* binding */ defaultPanelOptions),
/* harmony export */   "modelVersion": () => (/* binding */ modelVersion)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/index.ts");
/* harmony import */ var app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/models.gen.ts");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NOTE: This file will be auto generated from models.cue
// It is currenty hand written but will serve as the target for cuetsy
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const modelVersion = Object.freeze([1, 0]);
let HeatmapColorMode;

(function (HeatmapColorMode) {
  HeatmapColorMode["Opacity"] = "opacity";
  HeatmapColorMode["Scheme"] = "scheme";
})(HeatmapColorMode || (HeatmapColorMode = {}));

let HeatmapColorScale;

(function (HeatmapColorScale) {
  HeatmapColorScale["Linear"] = "linear";
  HeatmapColorScale["Exponential"] = "exponential";
})(HeatmapColorScale || (HeatmapColorScale = {}));

const defaultPanelOptions = {
  calculate: false,
  color: {
    mode: HeatmapColorMode.Scheme,
    scheme: 'Oranges',
    fill: 'dark-orange',
    scale: HeatmapColorScale.Exponential,
    exponent: 0.5,
    steps: 64
  },
  rowsFrame: {
    layout: app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_1__.HeatmapCellLayout.auto
  },
  yAxis: {
    axisPlacement: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.AxisPlacement.Left
  },
  cellValues: {},
  showValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.VisibilityMode.Auto,
  tooltip: {
    show: true,
    yHistogram: false
  },
  legend: {
    show: true
  },
  exemplars: {
    color: 'rgba(255,0,255,0.7)'
  },
  filterValues: {
    le: 1e-9
  },
  cellGap: 1
};
const defaultPanelFieldConfig = {};

/***/ }),

/***/ "./public/app/plugins/panel/heatmap/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-schema/src/index.ts");
/* harmony import */ var _grafana_ui_src_options_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/options/builder/index.ts");
/* harmony import */ var app_core_components_ColorScale_ColorScale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/ColorScale/ColorScale.tsx");
/* harmony import */ var app_features_transformers_calculateHeatmap_editor_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/editor/helper.ts");
/* harmony import */ var app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/heatmap.ts");
/* harmony import */ var app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/models.gen.ts");
/* harmony import */ var _HeatmapPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/heatmap/HeatmapPanel.tsx");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/heatmap/fields.ts");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/heatmap/migrations.ts");
/* harmony import */ var _models_gen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/heatmap/models.gen.ts");
/* harmony import */ var _palettes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/panel/heatmap/palettes.ts");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/heatmap/suggestions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
















const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelPlugin(_HeatmapPanel__WEBPACK_IMPORTED_MODULE_9__.HeatmapPanel).useFieldConfig({
  disableStandardOptions: Object.values(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldConfigProperty).filter(v => v !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldConfigProperty.Links),
  useCustomConfig: builder => {
    builder.addCustomEditor({
      id: 'scaleDistribution',
      path: 'scaleDistribution',
      name: 'Y axis scale',
      category: ['Heatmap'],
      editor: _grafana_ui_src_options_builder__WEBPACK_IMPORTED_MODULE_4__.ScaleDistributionEditor,
      override: _grafana_ui_src_options_builder__WEBPACK_IMPORTED_MODULE_4__.ScaleDistributionEditor,
      defaultValue: {
        type: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.ScaleDistribution.Linear
      },
      shouldApply: f => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number,
      process: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.identityOverrideProcessor,
      hideFromDefaults: true
    });
    (0,_grafana_ui_src_options_builder__WEBPACK_IMPORTED_MODULE_4__.addHideFrom)(builder); // for tooltip etc
  }
}).setPanelChangeHandler(_migrations__WEBPACK_IMPORTED_MODULE_11__.heatmapChangedHandler).setMigrationHandler(_migrations__WEBPACK_IMPORTED_MODULE_11__.heatmapMigrationHandler).setPanelOptions((builder, context) => {
  var _context$options, _defaultPanelOptions$, _defaultPanelOptions$5, _defaultPanelOptions$6;

  const opts = (_context$options = context.options) !== null && _context$options !== void 0 ? _context$options : _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions;
  let isOrdinalY = false;

  try {
    const v = (0,_fields__WEBPACK_IMPORTED_MODULE_10__.prepareHeatmapData)({
      series: context.data
    }, opts, _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.theme2);
    isOrdinalY = (0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_7__.readHeatmapRowsCustomMeta)(v.heatmap).yOrdinalDisplay != null;
  } catch {}

  let category = ['Heatmap'];
  builder.addRadio({
    path: 'calculate',
    name: 'Calculate from data',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.calculate,
    category,
    settings: {
      options: [{
        label: 'Yes',
        value: true
      }, {
        label: 'No',
        value: false
      }]
    }
  });

  if (opts.calculate) {
    (0,app_features_transformers_calculateHeatmap_editor_helper__WEBPACK_IMPORTED_MODULE_6__.addHeatmapCalculationOptions)('calculation.', builder, opts.calculation, category);
  }

  category = ['Y Axis'];
  builder.addRadio({
    path: 'yAxis.axisPlacement',
    name: 'Placement',
    defaultValue: (_defaultPanelOptions$ = _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.yAxis.axisPlacement) !== null && _defaultPanelOptions$ !== void 0 ? _defaultPanelOptions$ : _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.AxisPlacement.Left,
    category,
    settings: {
      options: [{
        label: 'Left',
        value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.AxisPlacement.Left
      }, {
        label: 'Right',
        value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.AxisPlacement.Right
      }, {
        label: 'Hidden',
        value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.AxisPlacement.Hidden
      }]
    }
  }).addUnitPicker({
    category,
    path: 'yAxis.unit',
    name: 'Unit',
    defaultValue: undefined,
    settings: {
      isClearable: true
    }
  }).addNumberInput({
    category,
    path: 'yAxis.decimals',
    name: 'Decimals',
    settings: {
      placeholder: 'Auto'
    }
  });

  if (!isOrdinalY) {
    // if undefined, then show the min+max
    builder.addNumberInput({
      path: 'yAxis.min',
      name: 'Min value',
      settings: {
        placeholder: 'Auto'
      },
      category
    }).addTextInput({
      path: 'yAxis.max',
      name: 'Max value',
      settings: {
        placeholder: 'Auto'
      },
      category
    });
  }

  builder.addNumberInput({
    path: 'yAxis.axisWidth',
    name: 'Axis width',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.yAxis.axisWidth,
    settings: {
      placeholder: 'Auto',
      min: 5 // smaller should just be hidden

    },
    category
  }).addTextInput({
    path: 'yAxis.axisLabel',
    name: 'Axis label',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.yAxis.axisLabel,
    settings: {
      placeholder: 'Auto'
    },
    category
  });

  if (!opts.calculate) {
    var _defaultPanelOptions$2, _defaultPanelOptions$3;

    builder.addRadio({
      path: 'rowsFrame.layout',
      name: 'Tick alignment',
      defaultValue: (_defaultPanelOptions$2 = (_defaultPanelOptions$3 = _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.rowsFrame) === null || _defaultPanelOptions$3 === void 0 ? void 0 : _defaultPanelOptions$3.layout) !== null && _defaultPanelOptions$2 !== void 0 ? _defaultPanelOptions$2 : app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_8__.HeatmapCellLayout.auto,
      category,
      settings: {
        options: [{
          label: 'Auto',
          value: app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_8__.HeatmapCellLayout.auto
        }, {
          label: 'Top (LE)',
          value: app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_8__.HeatmapCellLayout.le
        }, {
          label: 'Middle',
          value: app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_8__.HeatmapCellLayout.unknown
        }, {
          label: 'Bottom (GE)',
          value: app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_8__.HeatmapCellLayout.ge
        }]
      }
    });
  }

  builder.addBooleanSwitch({
    path: 'yAxis.reverse',
    name: 'Reverse',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.yAxis.reverse === true,
    category
  });
  category = ['Colors'];
  builder.addRadio({
    path: `color.mode`,
    name: 'Mode',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.color.mode,
    category,
    settings: {
      options: [{
        label: 'Scheme',
        value: _models_gen__WEBPACK_IMPORTED_MODULE_12__.HeatmapColorMode.Scheme
      }, {
        label: 'Opacity',
        value: _models_gen__WEBPACK_IMPORTED_MODULE_12__.HeatmapColorMode.Opacity
      }]
    }
  });
  builder.addColorPicker({
    path: `color.fill`,
    name: 'Color',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.color.fill,
    category,
    showIf: opts => opts.color.mode === _models_gen__WEBPACK_IMPORTED_MODULE_12__.HeatmapColorMode.Opacity
  });
  builder.addRadio({
    path: `color.scale`,
    name: 'Scale',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.color.scale,
    category,
    settings: {
      options: [{
        label: 'Exponential',
        value: _models_gen__WEBPACK_IMPORTED_MODULE_12__.HeatmapColorScale.Exponential
      }, {
        label: 'Linear',
        value: _models_gen__WEBPACK_IMPORTED_MODULE_12__.HeatmapColorScale.Linear
      }]
    },
    showIf: opts => opts.color.mode === _models_gen__WEBPACK_IMPORTED_MODULE_12__.HeatmapColorMode.Opacity
  });
  builder.addSliderInput({
    path: 'color.exponent',
    name: 'Exponent',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.color.exponent,
    category,
    settings: {
      min: 0.1,
      // 1 for on/off?
      max: 2,
      step: 0.1
    },
    showIf: opts => opts.color.mode === _models_gen__WEBPACK_IMPORTED_MODULE_12__.HeatmapColorMode.Opacity && opts.color.scale === _models_gen__WEBPACK_IMPORTED_MODULE_12__.HeatmapColorScale.Exponential
  });
  builder.addSelect({
    path: `color.scheme`,
    name: 'Scheme',
    description: '',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.color.scheme,
    category,
    settings: {
      options: _palettes__WEBPACK_IMPORTED_MODULE_13__.colorSchemes.map(scheme => ({
        value: scheme.name,
        label: scheme.name //description: 'Set a geometry field based on the results of other fields',

      }))
    },
    showIf: opts => opts.color.mode !== _models_gen__WEBPACK_IMPORTED_MODULE_12__.HeatmapColorMode.Opacity
  });
  builder.addSliderInput({
    path: 'color.steps',
    name: 'Steps',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.color.steps,
    category,
    settings: {
      min: 2,
      max: 128,
      step: 1
    }
  }).addCustomEditor({
    id: '__scale__',
    path: `__scale__`,
    name: '',
    category,
    editor: () => {
      const palette = (0,_palettes__WEBPACK_IMPORTED_MODULE_13__.quantizeScheme)(opts.color, _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.theme2);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(app_core_components_ColorScale_ColorScale__WEBPACK_IMPORTED_MODULE_5__.ColorScale, {
          colorPalette: palette,
          min: 1,
          max: 100
        })
      });
    }
  });
  builder.addNumberInput({
    path: 'color.min',
    name: 'Start color scale from value',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.color.min,
    settings: {
      placeholder: 'Auto (min)'
    },
    category
  }).addNumberInput({
    path: 'color.max',
    name: 'End color scale at value',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.color.max,
    settings: {
      placeholder: 'Auto (max)'
    },
    category
  });
  category = ['Cell display'];

  if (!opts.calculate) {
    var _defaultPanelOptions$4;

    builder.addTextInput({
      path: 'rowsFrame.value',
      name: 'Value name',
      defaultValue: (_defaultPanelOptions$4 = _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.rowsFrame) === null || _defaultPanelOptions$4 === void 0 ? void 0 : _defaultPanelOptions$4.value,
      settings: {
        placeholder: 'Value'
      },
      category
    });
  }

  builder.addUnitPicker({
    category,
    path: 'cellValues.unit',
    name: 'Unit',
    defaultValue: undefined,
    settings: {
      isClearable: true
    }
  }).addNumberInput({
    category,
    path: 'cellValues.decimals',
    name: 'Decimals',
    settings: {
      placeholder: 'Auto'
    }
  });
  builder // .addRadio({
  //   path: 'showValue',
  //   name: 'Show values',
  //   defaultValue: defaultPanelOptions.showValue,
  //   category,
  //   settings: {
  //     options: [
  //       { value: VisibilityMode.Auto, label: 'Auto' },
  //       { value: VisibilityMode.Always, label: 'Always' },
  //       { value: VisibilityMode.Never, label: 'Never' },
  //     ],
  //   },
  // })
  .addSliderInput({
    name: 'Cell gap',
    path: 'cellGap',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.cellGap,
    category,
    settings: {
      min: 0,
      max: 25
    }
  }).addNumberInput({
    path: 'filterValues.le',
    name: 'Hide cells with values <=',
    defaultValue: (_defaultPanelOptions$5 = _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.filterValues) === null || _defaultPanelOptions$5 === void 0 ? void 0 : _defaultPanelOptions$5.le,
    settings: {
      placeholder: 'None'
    },
    category
  }).addNumberInput({
    path: 'filterValues.ge',
    name: 'Hide cells with values >=',
    defaultValue: (_defaultPanelOptions$6 = _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.filterValues) === null || _defaultPanelOptions$6 === void 0 ? void 0 : _defaultPanelOptions$6.ge,
    settings: {
      placeholder: 'None'
    },
    category
  }); // .addSliderInput({
  //   name: 'Cell radius',
  //   path: 'cellRadius',
  //   defaultValue: defaultPanelOptions.cellRadius,
  //   category,
  //   settings: {
  //     min: 0,
  //     max: 100,
  //   },
  // })

  category = ['Tooltip'];
  builder.addBooleanSwitch({
    path: 'tooltip.show',
    name: 'Show tooltip',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.tooltip.show,
    category
  });
  builder.addBooleanSwitch({
    path: 'tooltip.yHistogram',
    name: 'Show histogram (Y axis)',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.tooltip.yHistogram,
    category,
    showIf: opts => opts.tooltip.show
  });
  category = ['Legend'];
  builder.addBooleanSwitch({
    path: 'legend.show',
    name: 'Show legend',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.legend.show,
    category
  });
  category = ['Exemplars'];
  builder.addColorPicker({
    path: 'exemplars.color',
    name: 'Color',
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_12__.defaultPanelOptions.exemplars.color,
    category
  });
}).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_14__.HeatmapSuggestionsSupplier());

/***/ }),

/***/ "./public/app/plugins/panel/heatmap/palettes.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorSchemes": () => (/* binding */ colorSchemes),
/* harmony export */   "quantizeScheme": () => (/* binding */ quantizeScheme)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/d3-npm-5.15.0-0c7696026f-7342d82e55.zip/node_modules/d3/index.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/d3-scale-chromatic-npm-1.5.0-4dfce2812a-3bff7717f6.zip/node_modules/d3-scale-chromatic/src/index.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/tinycolor2-npm-1.4.2-462ba30c26-57ed262e08.zip/node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/heatmap/models.gen.ts");



 // https://observablehq.com/@d3/color-schemes?collection=@d3/d3-scale-chromatic
// the previous heatmap panel used d3 deps and some code to interpolate to static 9-color palettes. here we just hard-code them for clarity.
// if the need arises for configurable-sized palettes, we can bring back the deps & variable interpolation (see simplified code at end)
// Schemes from d3-scale-chromatic
// https://github.com/d3/d3-scale-chromatic

const colorSchemes = [// Diverging
{
  name: 'BrBG',
  invert: 'always'
}, {
  name: 'PiYG',
  invert: 'always'
}, {
  name: 'PRGn',
  invert: 'always'
}, {
  name: 'PuOr',
  invert: 'always'
}, {
  name: 'RdBu',
  invert: 'always'
}, {
  name: 'RdGy',
  invert: 'always'
}, {
  name: 'RdYlBu',
  invert: 'always'
}, {
  name: 'RdYlGn',
  invert: 'always'
}, {
  name: 'Spectral',
  invert: 'always'
}, // Sequential (Single Hue)
{
  name: 'Blues',
  invert: 'dark'
}, {
  name: 'Greens',
  invert: 'dark'
}, {
  name: 'Greys',
  invert: 'dark'
}, {
  name: 'Oranges',
  invert: 'dark'
}, {
  name: 'Purples',
  invert: 'dark'
}, {
  name: 'Reds',
  invert: 'dark'
}, // Sequential (Multi-Hue)
{
  name: 'Turbo',
  invert: 'light'
}, {
  name: 'Cividis',
  invert: 'light'
}, {
  name: 'Viridis',
  invert: 'light'
}, {
  name: 'Magma',
  invert: 'light'
}, {
  name: 'Inferno',
  invert: 'light'
}, {
  name: 'Plasma',
  invert: 'light'
}, {
  name: 'Warm',
  invert: 'light'
}, {
  name: 'Cool',
  invert: 'light'
}, {
  name: 'Cubehelix',
  invert: 'light',
  name2: 'CubehelixDefault'
}, {
  name: 'BuGn',
  invert: 'dark'
}, {
  name: 'BuPu',
  invert: 'dark'
}, {
  name: 'GnBu',
  invert: 'dark'
}, {
  name: 'OrRd',
  invert: 'dark'
}, {
  name: 'PuBuGn',
  invert: 'dark'
}, {
  name: 'PuBu',
  invert: 'dark'
}, {
  name: 'PuRd',
  invert: 'dark'
}, {
  name: 'RdPu',
  invert: 'dark'
}, {
  name: 'YlGnBu',
  invert: 'dark'
}, {
  name: 'YlGn',
  invert: 'dark'
}, {
  name: 'YlOrBr',
  invert: 'dark'
}, {
  name: 'YlOrRd',
  invert: 'dark'
}, // Cyclical
{
  name: 'Rainbow',
  invert: 'always'
}, {
  name: 'Sinebow',
  invert: 'always'
}];
const DEFAULT_SCHEME = colorSchemes.find(scheme => scheme.name === 'Spectral');
function quantizeScheme(opts, theme) {
  var _options$steps;

  const options = Object.assign({}, _models_gen__WEBPACK_IMPORTED_MODULE_2__.defaultPanelOptions.color, opts);
  const palette = [];
  const steps = ((_options$steps = options.steps) !== null && _options$steps !== void 0 ? _options$steps : 128) - 1;

  if (opts.mode === _models_gen__WEBPACK_IMPORTED_MODULE_2__.HeatmapColorMode.Opacity) {
    const fill = tinycolor2__WEBPACK_IMPORTED_MODULE_1___default()(theme.visualization.getColorByName(opts.fill)).toPercentageRgb();
    const scale = options.scale === _models_gen__WEBPACK_IMPORTED_MODULE_2__.HeatmapColorScale.Exponential ? d3__WEBPACK_IMPORTED_MODULE_0__.scalePow().exponent(options.exponent).domain([0, 1]).range([0, 1]) : d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear().domain([0, 1]).range([0, 1]);

    for (let i = 0; i <= steps; i++) {
      fill.a = scale(i / steps);
      palette.push(tinycolor2__WEBPACK_IMPORTED_MODULE_1___default()(fill).toString('hex8'));
    }
  } else {
    var _colorSchemes$find, _scheme$name;

    const scheme = (_colorSchemes$find = colorSchemes.find(scheme => scheme.name === options.scheme)) !== null && _colorSchemes$find !== void 0 ? _colorSchemes$find : DEFAULT_SCHEME;
    let fnName = 'interpolate' + ((_scheme$name = scheme.name2) !== null && _scheme$name !== void 0 ? _scheme$name : scheme.name);
    const interpolate = d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_3__[fnName];

    for (let i = 0; i <= steps; i++) {
      let rgbStr = interpolate(i / steps);
      let rgb = rgbStr.indexOf('rgb') === 0 ? '#' + [...rgbStr.matchAll(/\d+/g)].map(v => (+v[0]).toString(16).padStart(2, '0')).join('') : rgbStr;
      palette.push(rgb);
    }

    if (scheme.invert === 'always' || scheme.invert === 'dark' && theme.isDark || scheme.invert === 'light' && theme.isLight) {
      palette.reverse();
    }
  }

  return palette;
}

/***/ }),

/***/ "./public/app/plugins/panel/heatmap/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeatmapSuggestionsSupplier": () => (/* binding */ HeatmapSuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/heatmap/fields.ts");
/* harmony import */ var _models_gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/heatmap/models.gen.ts");



class HeatmapSuggestionsSupplier {
  getSuggestionsForData(builder) {
    var _builder$data;

    const {
      dataSummary
    } = builder;

    if (!((_builder$data = builder.data) !== null && _builder$data !== void 0 && _builder$data.series) || !dataSummary.hasData || dataSummary.timeFieldCount < 1 || dataSummary.numberFieldCount < 2 || dataSummary.numberFieldCount > 10) {
      return;
    }

    const info = (0,_fields__WEBPACK_IMPORTED_MODULE_1__.prepareHeatmapData)(builder.data, _models_gen__WEBPACK_IMPORTED_MODULE_2__.defaultPanelOptions, _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.theme2);

    if (!info || info.warning) {
      return;
    }

    builder.getListAppender({
      name: '',
      pluginId: 'heatmap',
      options: {},
      fieldConfig: {
        defaults: {
          custom: {}
        },
        overrides: []
      }
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/panel/heatmap/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boundedMinMax": () => (/* binding */ boundedMinMax),
/* harmony export */   "heatmapPathsDense": () => (/* binding */ heatmapPathsDense),
/* harmony export */   "heatmapPathsPoints": () => (/* binding */ heatmapPathsPoints),
/* harmony export */   "heatmapPathsSparse": () => (/* binding */ heatmapPathsSparse),
/* harmony export */   "prepConfig": () => (/* binding */ prepConfig),
/* harmony export */   "valuesToFills": () => (/* binding */ valuesToFills)
/* harmony export */ });
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/uplot-npm-1.6.21-0ca545b75f-38aa8c899f.zip/node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/heatmap.ts");
/* harmony import */ var app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/models.gen.ts");
/* harmony import */ var _barchart_quadtree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/barchart/quadtree.ts");







function prepConfig(opts) {
  var _dataRef$current, _dataRef$current$heat, _dataRef$current$heat2, _dataRef$current2, _dataRef$current3, _dataRef$current3$hea, _yField$config, _yFieldConfig$scaleDi, _dataRef$current4, _dataRef$current5, _yScale$log, _yField$display, _dataRef$current14, _dataRef$current15, _dataRef$current16, _dataRef$current17;

  const {
    dataRef,
    theme,
    eventBus,
    onhover,
    onclick,
    onzoom,
    isToolTipOpen,
    timeZone,
    getTimeRange,
    palette,
    cellGap,
    hideLE,
    hideGE,
    yAxisConfig,
    ySizeDivisor,
    sync
  } = opts;
  const xScaleKey = 'x';
  const xScaleUnit = 'time';
  const pxRatio = devicePixelRatio;
  let heatmapType = (_dataRef$current = dataRef.current) === null || _dataRef$current === void 0 ? void 0 : (_dataRef$current$heat = _dataRef$current.heatmap) === null || _dataRef$current$heat === void 0 ? void 0 : (_dataRef$current$heat2 = _dataRef$current$heat.meta) === null || _dataRef$current$heat2 === void 0 ? void 0 : _dataRef$current$heat2.type;
  const exemplarFillColor = theme.visualization.getColorByName(opts.exemplarColor);
  let qt;
  let hRect;
  let builder = new _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.UPlotConfigBuilder(timeZone);
  let rect;
  builder.addHook('init', u => {
    u.root.querySelectorAll('.u-cursor-pt').forEach(el => {
      Object.assign(el.style, {
        borderRadius: '0',
        border: '1px solid white',
        background: 'transparent'
      });
    });
    onclick && u.over.addEventListener('mouseup', e => {
      // @ts-ignore
      let isDragging = u.cursor.drag._x || u.cursor.drag._y;

      if (!isDragging) {
        onclick(e);
      }
    }, true);
  });
  onzoom && builder.addHook('setSelect', u => {
    onzoom({
      xMin: u.posToVal(u.select.left, xScaleKey),
      xMax: u.posToVal(u.select.left + u.select.width, xScaleKey)
    });
    u.setSelect({
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }, false);
  }); // this is a tmp hack because in mode: 2, uplot does not currently call scales.x.range() for setData() calls
  // scales.x.range() typically reads back from drilled-down panelProps.timeRange via getTimeRange()

  builder.addHook('setData', u => {
    //let [min, max] = (u.scales!.x!.range! as uPlot.Range.Function)(u, 0, 100, xScaleKey);
    let {
      min: xMin,
      max: xMax
    } = u.scales.x;
    let min = getTimeRange().from.valueOf();
    let max = getTimeRange().to.valueOf();

    if (xMin !== min || xMax !== max) {
      queueMicrotask(() => {
        u.setScale(xScaleKey, {
          min,
          max
        });
      });
    }
  }); // rect of .u-over (grid area)

  builder.addHook('syncRect', (u, r) => {
    rect = r;
  });
  const payload = {
    point: {
      [xScaleUnit]: null
    },
    data: (_dataRef$current2 = dataRef.current) === null || _dataRef$current2 === void 0 ? void 0 : _dataRef$current2.heatmap
  };
  const hoverEvent = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataHoverEvent(payload);
  let pendingOnleave;
  onhover && builder.addHook('setLegend', u => {
    if (u.cursor.idxs != null) {
      for (let i = 0; i < u.cursor.idxs.length; i++) {
        const sel = u.cursor.idxs[i];

        if (sel != null) {
          const {
            left,
            top
          } = u.cursor;
          payload.rowIndex = sel;
          payload.point[xScaleUnit] = u.posToVal(left, xScaleKey);
          eventBus.publish(hoverEvent);

          if (!isToolTipOpen.current) {
            if (pendingOnleave) {
              clearTimeout(pendingOnleave);
              pendingOnleave = 0;
            }

            onhover({
              seriesIdx: i,
              dataIdx: sel,
              pageX: rect.left + left,
              pageY: rect.top + top
            });
          }

          return;
        }
      }
    }

    if (!isToolTipOpen.current) {
      // if tiles have gaps, reduce flashing / re-render (debounce onleave by 100ms)
      if (!pendingOnleave) {
        pendingOnleave = setTimeout(() => {
          onhover(null);
          payload.rowIndex = undefined;
          payload.point[xScaleUnit] = null;
          eventBus.publish(hoverEvent);
        }, 100);
      }
    }
  });
  builder.addHook('drawClear', u => {
    qt = qt || new _barchart_quadtree__WEBPACK_IMPORTED_MODULE_6__.Quadtree(0, 0, u.bbox.width, u.bbox.height);
    qt.clear(); // force-clear the path cache to cause drawBars() to rebuild new quadtree

    u.series.forEach((s, i) => {
      if (i > 0) {
        // @ts-ignore
        s._paths = null;
      }
    });
  });
  builder.setMode(2);
  builder.addScale({
    scaleKey: xScaleKey,
    isTime: true,
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.ScaleOrientation.Horizontal,
    direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.ScaleDirection.Right,
    // TODO: expand by x bucket size and layout
    range: () => {
      return [getTimeRange().from.valueOf(), getTimeRange().to.valueOf()];
    }
  });
  builder.addAxis({
    scaleKey: xScaleKey,
    placement: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.AxisPlacement.Bottom,
    isTime: true,
    theme: theme
  });
  const yField = (_dataRef$current3 = dataRef.current) === null || _dataRef$current3 === void 0 ? void 0 : (_dataRef$current3$hea = _dataRef$current3.heatmap) === null || _dataRef$current3$hea === void 0 ? void 0 : _dataRef$current3$hea.fields[1];

  if (!yField) {
    return builder; // early abort (avoids error)
  } // eslint-ignore @typescript-eslint/no-explicit-any


  const yFieldConfig = (_yField$config = yField.config) === null || _yField$config === void 0 ? void 0 : _yField$config.custom;
  const yScale = (_yFieldConfig$scaleDi = yFieldConfig === null || yFieldConfig === void 0 ? void 0 : yFieldConfig.scaleDistribution) !== null && _yFieldConfig$scaleDi !== void 0 ? _yFieldConfig$scaleDi : {
    type: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.ScaleDistribution.Linear
  };
  const yAxisReverse = Boolean(yAxisConfig.reverse);
  const isSparseHeatmap = heatmapType === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataFrameType.HeatmapCells && !(0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_4__.isHeatmapCellsDense)((_dataRef$current4 = dataRef.current) === null || _dataRef$current4 === void 0 ? void 0 : _dataRef$current4.heatmap);
  const shouldUseLogScale = yScale.type !== _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.ScaleDistribution.Linear || isSparseHeatmap;
  const isOrdianalY = (0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_4__.readHeatmapRowsCustomMeta)((_dataRef$current5 = dataRef.current) === null || _dataRef$current5 === void 0 ? void 0 : _dataRef$current5.heatmap).yOrdinalDisplay != null; // random to prevent syncing y in other heatmaps
  // TODO: try to match TimeSeries y keygen algo to sync with TimeSeries panels (when not isOrdianalY)

  const yScaleKey = 'y_' + (Math.random() + 1).toString(36).substring(7);
  builder.addScale({
    scaleKey: yScaleKey,
    isTime: false,
    // distribution: ScaleDistribution.Ordinal, // does not work with facets/scatter yet
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.ScaleOrientation.Vertical,
    direction: yAxisReverse ? _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.ScaleDirection.Down : _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.ScaleDirection.Up,
    // should be tweakable manually
    distribution: shouldUseLogScale ? _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.ScaleDistribution.Log : _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.ScaleDistribution.Linear,
    log: (_yScale$log = yScale.log) !== null && _yScale$log !== void 0 ? _yScale$log : 2,
    range: // sparse already accounts for le/ge by explicit yMin & yMax cell bounds, so no need to expand y range
    isSparseHeatmap ? (u, dataMin, dataMax) => {
      var _yScale$log2;

      let scaleMin, scaleMax;
      [scaleMin, scaleMax] = shouldUseLogScale ? uplot__WEBPACK_IMPORTED_MODULE_0__["default"].rangeLog(dataMin, dataMax, (_yScale$log2 = yScale.log) !== null && _yScale$log2 !== void 0 ? _yScale$log2 : 2, true) : [dataMin, dataMax];

      if (shouldUseLogScale && !isOrdianalY) {
        let {
          min: explicitMin,
          max: explicitMax
        } = yAxisConfig; // guard against <= 0

        if (explicitMin != null && explicitMin > 0) {
          scaleMin = explicitMin;
        }

        if (explicitMax != null && explicitMax > 0) {
          scaleMax = explicitMax;
        }
      }

      return [scaleMin, scaleMax];
    } : // dense and ordinal only have one of yMin|yMax|y, so expand range by one cell in the direction of le/ge/unknown
    (u, dataMin, dataMax) => {
      let {
        min: explicitMin,
        max: explicitMax
      } = yAxisConfig; // logarithmic expansion

      if (shouldUseLogScale) {
        var _dataRef$current6, _dataRef$current7;

        let yExp = u.scales[yScaleKey].log;
        let minExpanded = false;
        let maxExpanded = false;

        if (ySizeDivisor !== 1) {
          let log = yExp === 2 ? Math.log2 : Math.log10;
          let minLog = log(dataMin);
          let maxLog = log(dataMax);

          if (!Number.isInteger(minLog)) {
            dataMin = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.incrRoundDn)(minLog, 1);
            minExpanded = true;
          }

          if (!Number.isInteger(maxLog)) {
            dataMax = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.incrRoundUp)(maxLog, 1);
            maxExpanded = true;
          }
        }

        if (((_dataRef$current6 = dataRef.current) === null || _dataRef$current6 === void 0 ? void 0 : _dataRef$current6.yLayout) === app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.le) {
          if (!minExpanded) {
            dataMin /= yExp;
          }
        } else if (((_dataRef$current7 = dataRef.current) === null || _dataRef$current7 === void 0 ? void 0 : _dataRef$current7.yLayout) === app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.ge) {
          if (!maxExpanded) {
            dataMax *= yExp;
          }
        } else {
          dataMin /= yExp / 2;
          dataMax *= yExp / 2;
        }

        if (!isOrdianalY) {
          // guard against <= 0
          if (explicitMin != null && explicitMin > 0) {
            dataMin = explicitMin;
          }

          if (explicitMax != null && explicitMax > 0) {
            dataMax = explicitMax;
          }
        }
      } // linear expansion
      else {
        var _dataRef$current8;

        let bucketSize = (_dataRef$current8 = dataRef.current) === null || _dataRef$current8 === void 0 ? void 0 : _dataRef$current8.yBucketSize;

        if (bucketSize === 0) {
          bucketSize = 1;
        }

        if (bucketSize) {
          var _dataRef$current9, _dataRef$current10;

          if (((_dataRef$current9 = dataRef.current) === null || _dataRef$current9 === void 0 ? void 0 : _dataRef$current9.yLayout) === app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.le) {
            dataMin -= bucketSize;
          } else if (((_dataRef$current10 = dataRef.current) === null || _dataRef$current10 === void 0 ? void 0 : _dataRef$current10.yLayout) === app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.ge) {
            dataMax += bucketSize;
          } else {
            dataMin -= bucketSize / 2;
            dataMax += bucketSize / 2;
          }
        } else {// how to expand scale range if inferred non-regular or log buckets?
        }

        if (!isOrdianalY) {
          dataMin = explicitMin !== null && explicitMin !== void 0 ? explicitMin : dataMin;
          dataMax = explicitMax !== null && explicitMax !== void 0 ? explicitMax : dataMax;
        }
      }

      return [dataMin, dataMax];
    }
  });
  const dispY = (_yField$display = yField.display) !== null && _yField$display !== void 0 ? _yField$display : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getValueFormat)('short');
  builder.addAxis({
    scaleKey: yScaleKey,
    show: yAxisConfig.axisPlacement !== _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.AxisPlacement.Hidden,
    placement: yAxisConfig.axisPlacement || _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.AxisPlacement.Left,
    size: yAxisConfig.axisWidth || null,
    label: yAxisConfig.axisLabel,
    theme: theme,
    formatValue: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.formattedValueToString)(dispY(v)),
    splits: isOrdianalY ? self => {
      var _dataRef$current11, _dataRef$current12;

      const meta = (0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_4__.readHeatmapRowsCustomMeta)((_dataRef$current11 = dataRef.current) === null || _dataRef$current11 === void 0 ? void 0 : _dataRef$current11.heatmap);

      if (!meta.yOrdinalDisplay) {
        return [0, 1]; //?
      }

      let splits = meta.yOrdinalDisplay.map((v, idx) => idx);

      switch ((_dataRef$current12 = dataRef.current) === null || _dataRef$current12 === void 0 ? void 0 : _dataRef$current12.yLayout) {
        case app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.le:
          splits.unshift(-1);
          break;

        case app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.ge:
          splits.push(splits.length);
          break;
      } // Skip labels when the height is too small


      if (self.height < 60) {
        splits = [splits[0], splits[splits.length - 1]];
      } else {
        while (splits.length > 3 && (self.height - 15) / splits.length < 10) {
          splits = splits.filter((v, idx) => idx % 2 === 0); // remove half the items
        }
      }

      return splits;
    } : undefined,
    values: isOrdianalY ? (self, splits) => {
      var _dataRef$current13;

      const meta = (0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_4__.readHeatmapRowsCustomMeta)((_dataRef$current13 = dataRef.current) === null || _dataRef$current13 === void 0 ? void 0 : _dataRef$current13.heatmap);

      if (meta.yOrdinalDisplay) {
        return splits.map(v => {
          var _meta$yMinDisplay, _meta$yOrdinalDisplay;

          return v < 0 ? (_meta$yMinDisplay = meta.yMinDisplay) !== null && _meta$yMinDisplay !== void 0 ? _meta$yMinDisplay : '' // Check prometheus style labels
          : (_meta$yOrdinalDisplay = meta.yOrdinalDisplay[v]) !== null && _meta$yOrdinalDisplay !== void 0 ? _meta$yOrdinalDisplay : '';
        });
      }

      return splits;
    } : undefined
  });
  const pathBuilder = isSparseHeatmap ? heatmapPathsSparse : heatmapPathsDense; // heatmap layer

  builder.addSeries({
    facets: [{
      scale: xScaleKey,
      auto: true,
      sorted: 1
    }, {
      scale: yScaleKey,
      auto: true
    }],
    pathBuilder: pathBuilder({
      each: (u, seriesIdx, dataIdx, x, y, xSize, ySize) => {
        qt.add({
          x: x - u.bbox.left,
          y: y - u.bbox.top,
          w: xSize,
          h: ySize,
          sidx: seriesIdx,
          didx: dataIdx
        });
      },
      gap: cellGap,
      hideLE,
      hideGE,
      xAlign: ((_dataRef$current14 = dataRef.current) === null || _dataRef$current14 === void 0 ? void 0 : _dataRef$current14.xLayout) === app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.le ? -1 : ((_dataRef$current15 = dataRef.current) === null || _dataRef$current15 === void 0 ? void 0 : _dataRef$current15.xLayout) === app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.ge ? 1 : 0,
      yAlign: (((_dataRef$current16 = dataRef.current) === null || _dataRef$current16 === void 0 ? void 0 : _dataRef$current16.yLayout) === app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.le ? -1 : ((_dataRef$current17 = dataRef.current) === null || _dataRef$current17 === void 0 ? void 0 : _dataRef$current17.yLayout) === app_features_transformers_calculateHeatmap_models_gen__WEBPACK_IMPORTED_MODULE_5__.HeatmapCellLayout.ge ? 1 : 0) * (yAxisReverse ? -1 : 1),
      ySizeDivisor,
      disp: {
        fill: {
          values: (u, seriesIdx) => {
            var _dataRef$current18, _dataRef$current19;

            let countFacetIdx = !isSparseHeatmap ? 2 : 3;
            return valuesToFills(u.data[seriesIdx][countFacetIdx], palette, (_dataRef$current18 = dataRef.current) === null || _dataRef$current18 === void 0 ? void 0 : _dataRef$current18.minValue, (_dataRef$current19 = dataRef.current) === null || _dataRef$current19 === void 0 ? void 0 : _dataRef$current19.maxValue);
          },
          index: palette
        }
      }
    }),
    theme,
    scaleKey: '' // facets' scales used (above)

  }); // exemplars layer

  builder.addSeries({
    facets: [{
      scale: xScaleKey,
      auto: true,
      sorted: 1
    }, {
      scale: yScaleKey,
      auto: true
    }],
    pathBuilder: heatmapPathsPoints({
      each: (u, seriesIdx, dataIdx, x, y, xSize, ySize) => {
        qt.add({
          x: x - u.bbox.left,
          y: y - u.bbox.top,
          w: xSize,
          h: ySize,
          sidx: seriesIdx,
          didx: dataIdx
        });
      }
    }, exemplarFillColor),
    theme,
    scaleKey: '' // facets' scales used (above)

  });
  const cursor = {
    drag: {
      x: true,
      y: false,
      setScale: false
    },
    dataIdx: (u, seriesIdx) => {
      if (seriesIdx === 1) {
        hRect = null;
        let cx = u.cursor.left * pxRatio;
        let cy = u.cursor.top * pxRatio;
        qt.get(cx, cy, 1, 1, o => {
          if ((0,_barchart_quadtree__WEBPACK_IMPORTED_MODULE_6__.pointWithin)(cx, cy, o.x, o.y, o.x + o.w, o.y + o.h)) {
            hRect = o;
          }
        });
      }

      return hRect && seriesIdx === hRect.sidx ? hRect.didx : null;
    },
    points: {
      fill: 'rgba(255,255,255, 0.3)',
      bbox: (u, seriesIdx) => {
        let isHovered = hRect && seriesIdx === hRect.sidx;
        return {
          left: isHovered ? hRect.x / pxRatio : -10,
          top: isHovered ? hRect.y / pxRatio : -10,
          width: isHovered ? hRect.w / pxRatio : 0,
          height: isHovered ? hRect.h / pxRatio : 0
        };
      }
    }
  };

  if (sync && sync() !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DashboardCursorSync.Off) {
    cursor.sync = {
      key: '__global_',
      scales: [xScaleKey, yScaleKey],
      filters: {
        pub: (type, src, x, y, w, h, dataIdx) => {
          if (x < 0) {
            payload.point[xScaleUnit] = null;
            eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataHoverClearEvent());
          } else {
            payload.point[xScaleUnit] = src.posToVal(x, xScaleKey);
            eventBus.publish(hoverEvent);
          }

          return true;
        }
      }
    };
    builder.setSync();
  }

  builder.setCursor(cursor);
  return builder;
}
const CRISP_EDGES_GAP_MIN = 4;
function heatmapPathsDense(opts) {
  const {
    disp,
    each,
    gap = 1,
    hideLE = -Infinity,
    hideGE = Infinity,
    xAlign = 1,
    yAlign = 1,
    ySizeDivisor = 1
  } = opts;
  const pxRatio = devicePixelRatio;
  const round = gap >= CRISP_EDGES_GAP_MIN ? Math.round : v => v;
  const cellGap = Math.round(gap * pxRatio);
  return (u, seriesIdx) => {
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(u, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect, arc) => {
      var _disp$fill$index;

      let d = u.data[seriesIdx];
      const xs = d[0];
      const ys = d[1];
      const counts = d[2];
      const dlen = xs.length; // fill colors are mapped from interpolating densities / counts along some gradient
      // (should be quantized to 64 colors/levels max. e.g. 16)

      let fills = disp.fill.values(u, seriesIdx);
      let fillPalette = (_disp$fill$index = disp.fill.index) !== null && _disp$fill$index !== void 0 ? _disp$fill$index : [...new Set(fills)];
      let fillPaths = fillPalette.map(color => new Path2D()); // detect x and y bin qtys by detecting layout repetition in x & y data

      let yBinQty = dlen - ys.lastIndexOf(ys[0]);
      let xBinQty = dlen / yBinQty;
      let yBinIncr = ys[1] - ys[0] || scaleY.max - scaleY.min;
      let xBinIncr = xs[yBinQty] - xs[0]; // uniform tile sizes based on zoom level

      let xSize;
      let ySize;

      if (scaleX.distr === 3) {
        xSize = Math.abs(valToPosX(xs[0] * scaleX.log, scaleX, xDim, xOff) - valToPosX(xs[0], scaleX, xDim, xOff));
      } else {
        xSize = Math.abs(valToPosX(xBinIncr, scaleX, xDim, xOff) - valToPosX(0, scaleX, xDim, xOff));
      }

      if (scaleY.distr === 3) {
        ySize = Math.abs(valToPosY(ys[0] * scaleY.log, scaleY, yDim, yOff) - valToPosY(ys[0], scaleY, yDim, yOff)) / ySizeDivisor;
      } else {
        ySize = Math.abs(valToPosY(yBinIncr, scaleY, yDim, yOff) - valToPosY(0, scaleY, yDim, yOff)) / ySizeDivisor;
      } // clamp min tile size to 1px


      xSize = Math.max(1, round(xSize - cellGap));
      ySize = Math.max(1, round(ySize - cellGap)); // bucket agg direction
      // let xCeil = false;
      // let yCeil = false;

      let xOffset = xAlign === -1 ? -xSize : xAlign === 0 ? -xSize / 2 : 0;
      let yOffset = yAlign === 1 ? -ySize : yAlign === 0 ? -ySize / 2 : 0; // pre-compute x and y offsets

      let cys = ys.slice(0, yBinQty).map(y => round(valToPosY(y, scaleY, yDim, yOff) + yOffset));
      let cxs = Array.from({
        length: xBinQty
      }, (v, i) => round(valToPosX(xs[i * yBinQty], scaleX, xDim, xOff) + xOffset));

      for (let i = 0; i < dlen; i++) {
        if (counts[i] > hideLE && counts[i] < hideGE) {
          let cx = cxs[~~(i / yBinQty)];
          let cy = cys[i % yBinQty];
          let fillPath = fillPaths[fills[i]];
          rect(fillPath, cx, cy, xSize, ySize);
          each(u, 1, i, cx, cy, xSize, ySize);
        }
      }

      u.ctx.save(); //	u.ctx.globalAlpha = 0.8;

      u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
      u.ctx.clip();
      fillPaths.forEach((p, i) => {
        u.ctx.fillStyle = fillPalette[i];
        u.ctx.fill(p);
      });
      u.ctx.restore();
      return null;
    });
    return null;
  };
}
function heatmapPathsPoints(opts, exemplarColor) {
  return (u, seriesIdx) => {
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(u, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect, arc) => {
      //console.time('heatmapPathsSparse');
      [dataX, dataY] = dataY;
      let points = new Path2D();
      let fillPaths = [points];
      let fillPalette = [exemplarColor !== null && exemplarColor !== void 0 ? exemplarColor : 'rgba(255,0,255,0.7)'];

      for (let i = 0; i < dataX.length; i++) {
        let yVal = dataY[i];
        yVal -= 0.5; // center vertically in bucket (when tiles are le)
        // y-randomize vertically to distribute exemplars in same bucket at same time

        let randSign = Math.round(Math.random()) * 2 - 1;
        yVal += randSign * 0.5 * Math.random();
        let x = valToPosX(dataX[i], scaleX, xDim, xOff);
        let y = valToPosY(yVal, scaleY, yDim, yOff);
        let w = 8;
        let h = 8;
        rect(points, x - w / 2, y - h / 2, w, h);
        opts.each(u, seriesIdx, i, x - w / 2, y - h / 2, w, h);
      }

      u.ctx.save();
      u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
      u.ctx.clip();
      fillPaths.forEach((p, i) => {
        u.ctx.fillStyle = fillPalette[i];
        u.ctx.fill(p);
      });
      u.ctx.restore();
    });
    return null;
  };
} // accepts xMax, yMin, yMax, count
// xbinsize? x tile sizes are uniform?

function heatmapPathsSparse(opts) {
  const {
    disp,
    each,
    gap = 1,
    hideLE = -Infinity,
    hideGE = Infinity
  } = opts;
  const pxRatio = devicePixelRatio;
  const round = gap >= CRISP_EDGES_GAP_MIN ? Math.round : v => v;
  const cellGap = Math.round(gap * pxRatio);
  return (u, seriesIdx) => {
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(u, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect, arc) => {
      var _disp$fill$index2;

      //console.time('heatmapPathsSparse');
      let d = u.data[seriesIdx];
      const xMaxs = d[0]; // xMax, do we get interval?

      const yMins = d[1];
      const yMaxs = d[2];
      const counts = d[3];
      const dlen = xMaxs.length; // fill colors are mapped from interpolating densities / counts along some gradient
      // (should be quantized to 64 colors/levels max. e.g. 16)

      let fills = disp.fill.values(u, seriesIdx);
      let fillPalette = (_disp$fill$index2 = disp.fill.index) !== null && _disp$fill$index2 !== void 0 ? _disp$fill$index2 : [...new Set(fills)];
      let fillPaths = fillPalette.map(color => new Path2D()); // cache all tile bounds

      let xOffs = new Map();
      let yOffs = new Map();

      for (let i = 0; i < xMaxs.length; i++) {
        let xMax = xMaxs[i];
        let yMin = yMins[i];
        let yMax = yMaxs[i];

        if (!xOffs.has(xMax)) {
          xOffs.set(xMax, round(valToPosX(xMax, scaleX, xDim, xOff)));
        }

        if (!yOffs.has(yMin)) {
          yOffs.set(yMin, round(valToPosY(yMin, scaleY, yDim, yOff)));
        }

        if (!yOffs.has(yMax)) {
          yOffs.set(yMax, round(valToPosY(yMax, scaleY, yDim, yOff)));
        }
      } // uniform x size (interval, step)


      let xSizeUniform = xOffs.get(xMaxs.find(v => v !== xMaxs[0])) - xOffs.get(xMaxs[0]);

      for (let i = 0; i < dlen; i++) {
        if (counts[i] <= hideLE || counts[i] >= hideGE) {
          continue;
        }

        let xMax = xMaxs[i];
        let yMin = yMins[i];
        let yMax = yMaxs[i];
        let xMaxPx = xOffs.get(xMax); // xSize is from interval, or inferred delta?

        let yMinPx = yOffs.get(yMin);
        let yMaxPx = yOffs.get(yMax);
        let xSize = xSizeUniform;
        let ySize = yMinPx - yMaxPx; // clamp min tile size to 1px

        xSize = Math.max(1, xSize - cellGap);
        ySize = Math.max(1, ySize - cellGap);
        let x = xMaxPx;
        let y = yMinPx;
        let fillPath = fillPaths[fills[i]];
        rect(fillPath, x, y, xSize, ySize);
        each(u, 1, i, x, y, xSize, ySize);
      }

      u.ctx.save(); //	u.ctx.globalAlpha = 0.8;

      u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
      u.ctx.clip();
      fillPaths.forEach((p, i) => {
        u.ctx.fillStyle = fillPalette[i];
        u.ctx.fill(p);
      });
      u.ctx.restore(); //console.timeEnd('heatmapPathsSparse');
    });
    return null;
  };
}
const boundedMinMax = (values, minValue, maxValue, hideLE = -Infinity, hideGE = Infinity) => {
  if (minValue == null) {
    minValue = Infinity;

    for (let i = 0; i < values.length; i++) {
      if (values[i] > hideLE && values[i] < hideGE) {
        minValue = Math.min(minValue, values[i]);
      }
    }
  }

  if (maxValue == null) {
    maxValue = -Infinity;

    for (let i = 0; i < values.length; i++) {
      if (values[i] > hideLE && values[i] < hideGE) {
        maxValue = Math.max(maxValue, values[i]);
      }
    }
  }

  return [minValue, maxValue];
};
const valuesToFills = (values, palette, minValue, maxValue) => {
  let range = Math.max(maxValue - minValue, 1);
  let paletteSize = palette.length;
  let indexedFills = Array(values.length);

  for (let i = 0; i < values.length; i++) {
    indexedFills[i] = values[i] < minValue ? 0 : values[i] > maxValue ? paletteSize - 1 : Math.min(paletteSize - 1, Math.floor(paletteSize * (values[i] - minValue) / range));
  }

  return indexedFills;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBRCxDQUFOLEdBQVlxTSxRQUFaLEdBQ0ksQ0FESixHQUVJM0osTUFBTSxDQUFDMUMsQ0FBRCxDQUFOLEdBQVlzTSxRQUFaLEdBQ0FnWCxXQUFXLEdBQUcsQ0FEZCxHQUVBN2tCLElBQUksQ0FBQzNCLEdBQUwsQ0FBU3dtQixXQUFXLEdBQUcsQ0FBdkIsRUFBMEI3a0IsSUFBSSxDQUFDQyxLQUFMLENBQVk0a0IsV0FBVyxJQUFJNWdCLE1BQU0sQ0FBQzFDLENBQUQsQ0FBTixHQUFZcU0sUUFBaEIsQ0FBWixHQUF5Q3VLLEtBQXBELENBQTFCLENBTE47RUFNRDs7RUFFRCxPQUFPMk0sWUFBUDtBQUNELENBakJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL0NvbG9yU2NhbGUvQ29sb3JTY2FsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC9oZWF0bWFwL0hlYXRtYXBIb3ZlclZpZXcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvcGFuZWwvaGVhdG1hcC9IZWF0bWFwUGFuZWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvcGFuZWwvaGVhdG1hcC9maWVsZHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC9oZWF0bWFwL21pZ3JhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC9oZWF0bWFwL21vZGVscy5nZW4udHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC9oZWF0bWFwL21vZHVsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC9oZWF0bWFwL3BhbGV0dGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvcGFuZWwvaGVhdG1hcC9zdWdnZXN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL2hlYXRtYXAvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbG9yUGFsZXR0ZTogc3RyaW5nW107XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcblxuICAvLyBTaG93IGEgdmFsdWUgYXMgc3RyaW5nIC0tIHdoZW4gbm90IGRlZmluZWQsIHRoZSByYXcgdmFsdWVzIHdpbGwgbm90IGJlIHNob3duXG4gIGRpc3BsYXk/OiAodjogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIGhvdmVyVmFsdWU/OiBudW1iZXI7XG4gIHVzZVN0b3BzUGVyY2VudGFnZT86IGJvb2xlYW47XG59O1xuXG50eXBlIEhvdmVyU3RhdGUgPSB7XG4gIGlzU2hvd246IGJvb2xlYW47XG4gIHZhbHVlOiBudW1iZXI7XG59O1xuXG5jb25zdCBHUkFESUVOVF9TVE9QUyA9IDEwO1xuXG5leHBvcnQgY29uc3QgQ29sb3JTY2FsZSA9ICh7IGNvbG9yUGFsZXR0ZSwgbWluLCBtYXgsIGRpc3BsYXksIGhvdmVyVmFsdWUsIHVzZVN0b3BzUGVyY2VudGFnZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbY29sb3JzLCBzZXRDb2xvcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3NjYWxlSG92ZXIsIHNldFNjYWxlSG92ZXJdID0gdXNlU3RhdGU8SG92ZXJTdGF0ZT4oeyBpc1Nob3duOiBmYWxzZSwgdmFsdWU6IDAgfSk7XG4gIGNvbnN0IFtwZXJjZW50LCBzZXRQZXJjZW50XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpOyAvLyAwLTEwMCBmb3IgQ1NTIHBlcmNlbnRhZ2VcblxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModGhlbWUsIGNvbG9ycyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb2xvcnMoZ2V0R3JhZGllbnRTdG9wcyh7IGNvbG9yQXJyYXk6IGNvbG9yUGFsZXR0ZSwgc3RvcHM6IEdSQURJRU5UX1NUT1BTLCB1c2VTdG9wc1BlcmNlbnRhZ2UgfSkpO1xuICB9LCBbY29sb3JQYWxldHRlLCB1c2VTdG9wc1BlcmNlbnRhZ2VdKTtcblxuICBjb25zdCBvblNjYWxlTW91c2VNb3ZlID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGRpdk9mZnNldCA9IGV2ZW50Lm5hdGl2ZUV2ZW50Lm9mZnNldFg7XG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkub2Zmc2V0V2lkdGggYXMgbnVtYmVyO1xuICAgIGNvbnN0IG5vcm1QZXJjZW50YWdlID0gTWF0aC5mbG9vcigoZGl2T2Zmc2V0ICogMTAwKSAvIG9mZnNldFdpZHRoICsgMSk7XG4gICAgY29uc3Qgc2NhbGVWYWx1ZSA9IE1hdGguZmxvb3IoKChtYXggLSBtaW4pICogbm9ybVBlcmNlbnRhZ2UpIC8gMTAwICsgbWluKTtcblxuICAgIHNldFNjYWxlSG92ZXIoeyBpc1Nob3duOiB0cnVlLCB2YWx1ZTogc2NhbGVWYWx1ZSB9KTtcbiAgICBzZXRQZXJjZW50KG5vcm1QZXJjZW50YWdlKTtcbiAgfTtcblxuICBjb25zdCBvblNjYWxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRTY2FsZUhvdmVyKHsgaXNTaG93bjogZmFsc2UsIHZhbHVlOiAwIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGVyY2VudChob3ZlclZhbHVlID09IG51bGwgPyBudWxsIDogY2xhbXBQZXJjZW50MTAwKChob3ZlclZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSk7XG4gIH0sIFtob3ZlclZhbHVlLCBtaW4sIG1heF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY2FsZVdyYXBwZXJ9IG9uTW91c2VNb3ZlPXtvblNjYWxlTW91c2VNb3ZlfSBvbk1vdXNlTGVhdmU9e29uU2NhbGVNb3VzZUxlYXZlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NhbGVHcmFkaWVudH0+XG4gICAgICAgIHtkaXNwbGF5ICYmIChzY2FsZUhvdmVyLmlzU2hvd24gfHwgaG92ZXJWYWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dlckNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd2VyfSBzdHlsZT17eyBsZWZ0OiBgJHtwZXJjZW50fSVgIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkaXNwbGF5ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dlckNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRWYWx1ZXN9PlxuICAgICAgICAgICAgPHNwYW4+e2Rpc3BsYXkobWluKX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj57ZGlzcGxheShtYXgpfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cGVyY2VudCAhPSBudWxsICYmIChzY2FsZUhvdmVyLmlzU2hvd24gfHwgaG92ZXJWYWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ob3ZlclZhbHVlfSBzdHlsZT17eyBsZWZ0OiBgJHtwZXJjZW50fSVgIH19PlxuICAgICAgICAgICAgICB7ZGlzcGxheShob3ZlclZhbHVlID8/IHNjYWxlSG92ZXIudmFsdWUpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldEdyYWRpZW50U3RvcHMgPSAoe1xuICBjb2xvckFycmF5LFxuICBzdG9wcyxcbiAgdXNlU3RvcHNQZXJjZW50YWdlID0gdHJ1ZSxcbn06IHtcbiAgY29sb3JBcnJheTogc3RyaW5nW107XG4gIHN0b3BzOiBudW1iZXI7XG4gIHVzZVN0b3BzUGVyY2VudGFnZT86IGJvb2xlYW47XG59KTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBjb2xvckNvdW50ID0gY29sb3JBcnJheS5sZW5ndGg7XG4gIGlmICh1c2VTdG9wc1BlcmNlbnRhZ2UgJiYgY29sb3JDb3VudCA8PSAyMCkge1xuICAgIGNvbnN0IGluY3IgPSAoMSAvIGNvbG9yQ291bnQpICogMTAwO1xuICAgIGxldCBwZXIgPSAwO1xuICAgIGNvbnN0IHN0b3BzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY29sb3Igb2YgY29sb3JBcnJheSkge1xuICAgICAgaWYgKHBlciA+IDApIHtcbiAgICAgICAgc3RvcHMucHVzaChgJHtjb2xvcn0gJHtwZXJ9JWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcHMucHVzaChjb2xvcik7XG4gICAgICB9XG4gICAgICBwZXIgKz0gaW5jcjtcbiAgICAgIHN0b3BzLnB1c2goYCR7Y29sb3J9ICR7cGVyfSVgKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0b3BzO1xuICB9XG5cbiAgY29uc3QgZ3JhZGllbnRFbmQgPSBjb2xvckFycmF5W2NvbG9yQ291bnQgLSAxXTtcbiAgY29uc3Qgc2tpcCA9IE1hdGguY2VpbChjb2xvckNvdW50IC8gc3RvcHMpO1xuICBjb25zdCBncmFkaWVudFN0b3BzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvckNvdW50OyBpICs9IHNraXApIHtcbiAgICBncmFkaWVudFN0b3BzLmFkZChjb2xvckFycmF5W2ldKTtcbiAgfVxuXG4gIGdyYWRpZW50U3RvcHMuYWRkKGdyYWRpZW50RW5kKTtcblxuICByZXR1cm4gWy4uLmdyYWRpZW50U3RvcHNdO1xufTtcblxuZnVuY3Rpb24gY2xhbXBQZXJjZW50MTAwKHY6IG51bWJlcikge1xuICBpZiAodiA+IDEpIHtcbiAgICByZXR1cm4gMTAwO1xuICB9XG4gIGlmICh2IDwgMCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiB2ICogMTAwO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIsIGNvbG9yczogc3RyaW5nW10pID0+ICh7XG4gIHNjYWxlV3JhcHBlcjogY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBvcGFjaXR5OiAxO1xuICBgLFxuICBzY2FsZUdyYWRpZW50OiBjc3NgXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAke2NvbG9ycy5qb2luKCl9KTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGAsXG4gIGxlZ2VuZFZhbHVlczogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBgLFxuICBob3ZlclZhbHVlOiBjc3NgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xuICAgIHBhZGRpbmc6IDNweCAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBgLFxuICBmb2xsb3dlckNvbnRhaW5lcjogY3NzYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGhlaWdodDogMTBweDtcbiAgYCxcbiAgZm9sbG93ZXI6IGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YUZyYW1lVHlwZSwgRmllbGQsIEZpZWxkVHlwZSwgZm9ybWF0dGVkVmFsdWVUb1N0cmluZywgZ2V0RmllbGREaXNwbGF5TmFtZSwgTGlua01vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBMaW5rQnV0dG9uLCBWZXJ0aWNhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgZ2V0RGFzaGJvYXJkU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zZXJ2aWNlcy9EYXNoYm9hcmRTcnYnO1xuaW1wb3J0IHsgaXNIZWF0bWFwQ2VsbHNEZW5zZSwgcmVhZEhlYXRtYXBSb3dzQ3VzdG9tTWV0YSB9IGZyb20gJ2FwcC9mZWF0dXJlcy90cmFuc2Zvcm1lcnMvY2FsY3VsYXRlSGVhdG1hcC9oZWF0bWFwJztcbmltcG9ydCB7IEhlYXRtYXBDZWxsTGF5b3V0IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3RyYW5zZm9ybWVycy9jYWxjdWxhdGVIZWF0bWFwL21vZGVscy5nZW4nO1xuXG5pbXBvcnQgeyBEYXRhSG92ZXJWaWV3IH0gZnJvbSAnLi4vZ2VvbWFwL2NvbXBvbmVudHMvRGF0YUhvdmVyVmlldyc7XG5cbmltcG9ydCB7IEhlYXRtYXBEYXRhIH0gZnJvbSAnLi9maWVsZHMnO1xuaW1wb3J0IHsgSGVhdG1hcEhvdmVyRXZlbnQgfSBmcm9tICcuL3V0aWxzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZGF0YTogSGVhdG1hcERhdGE7XG4gIGhvdmVyOiBIZWF0bWFwSG92ZXJFdmVudDtcbiAgc2hvd0hpc3RvZ3JhbT86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgSGVhdG1hcEhvdmVyVmlldyA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmhvdmVyLnNlcmllc0lkeCA9PT0gMikge1xuICAgIHJldHVybiA8RGF0YUhvdmVyVmlldyBkYXRhPXtwcm9wcy5kYXRhLmV4ZW1wbGFyc30gcm93SW5kZXg9e3Byb3BzLmhvdmVyLmRhdGFJZHh9IC8+O1xuICB9XG4gIHJldHVybiA8SGVhdG1hcEhvdmVyQ2VsbCB7Li4ucHJvcHN9IC8+O1xufTtcblxuY29uc3QgSGVhdG1hcEhvdmVyQ2VsbCA9ICh7IGRhdGEsIGhvdmVyLCBzaG93SGlzdG9ncmFtIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gaG92ZXIuZGF0YUlkeDtcbiAgY29uc3QgeEZpZWxkID0gZGF0YS5oZWF0bWFwPy5maWVsZHNbMF07XG4gIGNvbnN0IHlGaWVsZCA9IGRhdGEuaGVhdG1hcD8uZmllbGRzWzFdO1xuICBjb25zdCBjb3VudEZpZWxkID0gZGF0YS5oZWF0bWFwPy5maWVsZHNbMl07XG5cbiAgY29uc3QgeERpc3AgPSAodjogYW55KSA9PiB7XG4gICAgaWYgKHhGaWVsZD8uZGlzcGxheSkge1xuICAgICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlVG9TdHJpbmcoeEZpZWxkLmRpc3BsYXkodikpO1xuICAgIH1cbiAgICBpZiAoeEZpZWxkPy50eXBlID09PSBGaWVsZFR5cGUudGltZSkge1xuICAgICAgY29uc3QgdG9vbHRpcFRpbWVGb3JtYXQgPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XG4gICAgICBjb25zdCBkYXNoYm9hcmQgPSBnZXREYXNoYm9hcmRTcnYoKS5nZXRDdXJyZW50KCk7XG4gICAgICByZXR1cm4gZGFzaGJvYXJkPy5mb3JtYXREYXRlKHYsIHRvb2x0aXBUaW1lRm9ybWF0KTtcbiAgICB9XG4gICAgcmV0dXJuIGAke3Z9YDtcbiAgfTtcblxuICBjb25zdCB4VmFscyA9IHhGaWVsZD8udmFsdWVzLnRvQXJyYXkoKTtcbiAgY29uc3QgeVZhbHMgPSB5RmllbGQ/LnZhbHVlcy50b0FycmF5KCk7XG4gIGNvbnN0IGNvdW50VmFscyA9IGNvdW50RmllbGQ/LnZhbHVlcy50b0FycmF5KCk7XG5cbiAgLy8gbGFiZWxlZCBidWNrZXRzXG4gIGNvbnN0IG1ldGEgPSByZWFkSGVhdG1hcFJvd3NDdXN0b21NZXRhKGRhdGEuaGVhdG1hcCk7XG4gIGNvbnN0IHlEaXNwU3JjID0gbWV0YS55T3JkaW5hbERpc3BsYXkgPz8geVZhbHM7XG4gIGNvbnN0IHlEaXNwID0geUZpZWxkPy5kaXNwbGF5ID8gKHY6IGFueSkgPT4gZm9ybWF0dGVkVmFsdWVUb1N0cmluZyh5RmllbGQuZGlzcGxheSEodikpIDogKHY6IGFueSkgPT4gYCR7dn1gO1xuXG4gIGNvbnN0IHlWYWx1ZUlkeCA9IGluZGV4ICUgZGF0YS55QnVja2V0Q291bnQhID8/IDA7XG5cbiAgY29uc3QgeU1pbklkeCA9IGRhdGEueUxheW91dCA9PT0gSGVhdG1hcENlbGxMYXlvdXQubGUgPyB5VmFsdWVJZHggLSAxIDogeVZhbHVlSWR4O1xuICBjb25zdCB5TWF4SWR4ID0gZGF0YS55TGF5b3V0ID09PSBIZWF0bWFwQ2VsbExheW91dC5sZSA/IHlWYWx1ZUlkeCA6IHlWYWx1ZUlkeCArIDE7XG5cbiAgY29uc3QgeUJ1Y2tldE1pbiA9IHlEaXNwU3JjPy5beU1pbklkeF07XG4gIGNvbnN0IHlCdWNrZXRNYXggPSB5RGlzcFNyYz8uW3lNYXhJZHhdO1xuXG4gIGNvbnN0IHhCdWNrZXRNaW4gPSB4VmFscz8uW2luZGV4XTtcbiAgY29uc3QgeEJ1Y2tldE1heCA9IHhCdWNrZXRNaW4gKyBkYXRhLnhCdWNrZXRTaXplO1xuXG4gIGNvbnN0IGNvdW50ID0gY291bnRWYWxzPy5baW5kZXhdO1xuXG4gIGNvbnN0IHZpc2libGVGaWVsZHMgPSBkYXRhLmhlYXRtYXA/LmZpZWxkcy5maWx0ZXIoKGYpID0+ICFCb29sZWFuKGYuY29uZmlnLmN1c3RvbT8uaGlkZUZyb20/LnRvb2x0aXApKTtcbiAgY29uc3QgbGlua3M6IEFycmF5PExpbmtNb2RlbDxGaWVsZD4+ID0gW107XG4gIGNvbnN0IGxpbmtMb29rdXAgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICBmb3IgKGNvbnN0IGZpZWxkIG9mIHZpc2libGVGaWVsZHMgPz8gW10pIHtcbiAgICAvLyBUT0RPOiBDdXJyZW50bHkgYWx3YXlzIHVuZGVmaW5lZD8gKGdldExpbmtzKVxuICAgIGlmIChmaWVsZC5nZXRMaW5rcykge1xuICAgICAgY29uc3QgdiA9IGZpZWxkLnZhbHVlcy5nZXQoaW5kZXgpO1xuICAgICAgY29uc3QgZGlzcCA9IGZpZWxkLmRpc3BsYXkgPyBmaWVsZC5kaXNwbGF5KHYpIDogeyB0ZXh0OiBgJHt2fWAsIG51bWVyaWM6ICt2IH07XG5cbiAgICAgIGZpZWxkLmdldExpbmtzKHsgY2FsY3VsYXRlZFZhbHVlOiBkaXNwLCB2YWx1ZVJvd0luZGV4OiBpbmRleCB9KS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke2xpbmsudGl0bGV9LyR7bGluay5ocmVmfWA7XG4gICAgICAgIGlmICghbGlua0xvb2t1cC5oYXMoa2V5KSkge1xuICAgICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgICAgICAgbGlua0xvb2t1cC5hZGQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGNhbiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG5cbiAgbGV0IGhpc3RDc3NXaWR0aCA9IDE1MDtcbiAgbGV0IGhpc3RDc3NIZWlnaHQgPSA1MDtcbiAgbGV0IGhpc3RDYW5XaWR0aCA9IE1hdGgucm91bmQoaGlzdENzc1dpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyk7XG4gIGxldCBoaXN0Q2FuSGVpZ2h0ID0gTWF0aC5yb3VuZChoaXN0Q3NzSGVpZ2h0ICogZGV2aWNlUGl4ZWxSYXRpbyk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGlmIChzaG93SGlzdG9ncmFtKSB7XG4gICAgICAgIGxldCBoaXN0Q3R4ID0gY2FuLmN1cnJlbnQ/LmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgaWYgKGhpc3RDdHggJiYgeFZhbHMgJiYgeVZhbHMgJiYgY291bnRWYWxzKSB7XG4gICAgICAgICAgbGV0IGZyb21JZHggPSBpbmRleDtcblxuICAgICAgICAgIHdoaWxlICh4VmFsc1tmcm9tSWR4LS1dID09PSB4VmFsc1tpbmRleF0pIHt9XG5cbiAgICAgICAgICBmcm9tSWR4Kys7XG5cbiAgICAgICAgICBsZXQgdG9JZHggPSBmcm9tSWR4ICsgZGF0YS55QnVja2V0Q291bnQhO1xuXG4gICAgICAgICAgbGV0IG1heENvdW50ID0gMDtcblxuICAgICAgICAgIGxldCBpID0gZnJvbUlkeDtcbiAgICAgICAgICB3aGlsZSAoaSA8IHRvSWR4KSB7XG4gICAgICAgICAgICBsZXQgYyA9IGNvdW50VmFsc1tpXTtcbiAgICAgICAgICAgIG1heENvdW50ID0gTWF0aC5tYXgobWF4Q291bnQsIGMpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBwSG92ID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICAgIGxldCBwUmVzdCA9IG5ldyBQYXRoMkQoKTtcblxuICAgICAgICAgIGkgPSBmcm9tSWR4O1xuICAgICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgICB3aGlsZSAoaSA8IHRvSWR4KSB7XG4gICAgICAgICAgICBsZXQgYyA9IGNvdW50VmFsc1tpXTtcblxuICAgICAgICAgICAgaWYgKGMgPiAwKSB7XG4gICAgICAgICAgICAgIGxldCBwY3RZID0gYyAvIG1heENvdW50O1xuICAgICAgICAgICAgICBsZXQgcGN0WCA9IGogLyAoZGF0YS55QnVja2V0Q291bnQhICsgMSk7XG5cbiAgICAgICAgICAgICAgbGV0IHAgPSBpID09PSBpbmRleCA/IHBIb3YgOiBwUmVzdDtcblxuICAgICAgICAgICAgICBwLnJlY3QoXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChoaXN0Q2FuV2lkdGggKiBwY3RYKSxcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKGhpc3RDYW5IZWlnaHQgKiAoMSAtIHBjdFkpKSxcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKGhpc3RDYW5XaWR0aCAvIGRhdGEueUJ1Y2tldENvdW50ISksXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChoaXN0Q2FuSGVpZ2h0ICogcGN0WSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhpc3RDdHguY2xlYXJSZWN0KDAsIDAsIGhpc3RDYW5XaWR0aCwgaGlzdENhbkhlaWdodCk7XG5cbiAgICAgICAgICBoaXN0Q3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmODAnO1xuICAgICAgICAgIGhpc3RDdHguZmlsbChwUmVzdCk7XG5cbiAgICAgICAgICBoaXN0Q3R4LmZpbGxTdHlsZSA9ICcjZmYwMDAwODAnO1xuICAgICAgICAgIGhpc3RDdHguZmlsbChwSG92KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtpbmRleF1cbiAgKTtcblxuICBjb25zdCBbaXNTcGFyc2VdID0gdXNlU3RhdGUoXG4gICAgKCkgPT4gZGF0YS5oZWF0bWFwPy5tZXRhPy50eXBlID09PSBEYXRhRnJhbWVUeXBlLkhlYXRtYXBDZWxscyAmJiAhaXNIZWF0bWFwQ2VsbHNEZW5zZShkYXRhLmhlYXRtYXApXG4gICk7XG5cbiAgaWYgKGlzU3BhcnNlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxEYXRhSG92ZXJWaWV3IGRhdGE9e2RhdGEuaGVhdG1hcH0gcm93SW5kZXg9e2luZGV4fSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlcllCdWNrZXRzID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoZGF0YS55TGF5b3V0KSB7XG4gICAgICBjYXNlIEhlYXRtYXBDZWxsTGF5b3V0LnVua25vd246XG4gICAgICAgIHJldHVybiA8ZGl2Pnt5RGlzcCh5QnVja2V0TWluKX08L2Rpdj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBCdWNrZXQ6IHt5RGlzcCh5QnVja2V0TWluKX0gLSB7eURpc3AoeUJ1Y2tldE1heCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+e3hEaXNwKHhCdWNrZXRNaW4pfTwvZGl2PlxuICAgICAgICA8ZGl2Pnt4RGlzcCh4QnVja2V0TWF4KX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dIaXN0b2dyYW0gJiYgKFxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgd2lkdGg9e2hpc3RDYW5XaWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hpc3RDYW5IZWlnaHR9XG4gICAgICAgICAgcmVmPXtjYW59XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGhpc3RDYW5XaWR0aCArICdweCcsIGhlaWdodDogaGlzdENhbkhlaWdodCArICdweCcgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2PlxuICAgICAgICB7cmVuZGVyWUJ1Y2tldHMoKX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Z2V0RmllbGREaXNwbGF5TmFtZShjb3VudEZpZWxkISwgZGF0YS5oZWF0bWFwKX06IHtkYXRhLmRpc3BsYXkhKGNvdW50KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaW5rcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPFZlcnRpY2FsR3JvdXA+XG4gICAgICAgICAge2xpbmtzLm1hcCgobGluaywgaSkgPT4gKFxuICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBpY29uPXsnZXh0ZXJuYWwtbGluay1hbHQnfVxuICAgICAgICAgICAgICB0YXJnZXQ9e2xpbmsudGFyZ2V0fVxuICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xpbmsub25DbGlja31cbiAgICAgICAgICAgICAgZmlsbD1cInRleHRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsaW5rLnRpdGxlfVxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IERhdGFGcmFtZVR5cGUsIEdyYWZhbmFUaGVtZTIsIFBhbmVsUHJvcHMsIFRpbWVSYW5nZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUGFuZWxEYXRhRXJyb3JWaWV3IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBTY2FsZURpc3RyaWJ1dGlvbkNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3NjaGVtYSc7XG5pbXBvcnQge1xuICBQb3J0YWwsXG4gIFNjYWxlRGlzdHJpYnV0aW9uLFxuICBVUGxvdENoYXJ0LFxuICB1c2VQYW5lbENvbnRleHQsXG4gIHVzZVN0eWxlczIsXG4gIHVzZVRoZW1lMixcbiAgVml6TGF5b3V0LFxuICBWaXpUb29sdGlwQ29udGFpbmVyLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQ2xvc2VCdXR0b24vQ2xvc2VCdXR0b24nO1xuaW1wb3J0IHsgQ29sb3JTY2FsZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQ29sb3JTY2FsZS9Db2xvclNjYWxlJztcbmltcG9ydCB7IGlzSGVhdG1hcENlbGxzRGVuc2UsIHJlYWRIZWF0bWFwUm93c0N1c3RvbU1ldGEgfSBmcm9tICdhcHAvZmVhdHVyZXMvdHJhbnNmb3JtZXJzL2NhbGN1bGF0ZUhlYXRtYXAvaGVhdG1hcCc7XG5cbmltcG9ydCB7IEhlYXRtYXBIb3ZlclZpZXcgfSBmcm9tICcuL0hlYXRtYXBIb3ZlclZpZXcnO1xuaW1wb3J0IHsgcHJlcGFyZUhlYXRtYXBEYXRhIH0gZnJvbSAnLi9maWVsZHMnO1xuaW1wb3J0IHsgUGFuZWxPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMuZ2VuJztcbmltcG9ydCB7IHF1YW50aXplU2NoZW1lIH0gZnJvbSAnLi9wYWxldHRlcyc7XG5pbXBvcnQgeyBIZWF0bWFwSG92ZXJFdmVudCwgcHJlcENvbmZpZyB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgSGVhdG1hcFBhbmVsUHJvcHMgZXh0ZW5kcyBQYW5lbFByb3BzPFBhbmVsT3B0aW9ucz4ge31cblxuZXhwb3J0IGNvbnN0IEhlYXRtYXBQYW5lbDogUmVhY3QuRkM8SGVhdG1hcFBhbmVsUHJvcHM+ID0gKHtcbiAgZGF0YSxcbiAgaWQsXG4gIHRpbWVSYW5nZSxcbiAgdGltZVpvbmUsXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9wdGlvbnMsXG4gIGZpZWxkQ29uZmlnLFxuICBldmVudEJ1cyxcbiAgb25DaGFuZ2VUaW1lUmFuZ2UsXG4gIHJlcGxhY2VWYXJpYWJsZXMsXG59KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgeyBzeW5jIH0gPSB1c2VQYW5lbENvbnRleHQoKTtcblxuICAvLyB1Z2hcbiAgbGV0IHRpbWVSYW5nZVJlZiA9IHVzZVJlZjxUaW1lUmFuZ2U+KHRpbWVSYW5nZSk7XG4gIHRpbWVSYW5nZVJlZi5jdXJyZW50ID0gdGltZVJhbmdlO1xuXG4gIGNvbnN0IGluZm8gPSB1c2VNZW1vKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHByZXBhcmVIZWF0bWFwRGF0YShkYXRhLCBvcHRpb25zLCB0aGVtZSk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIHJldHVybiB7IHdhcm5pbmc6IGAke2V4fWAgfTtcbiAgICB9XG4gIH0sIFtkYXRhLCBvcHRpb25zLCB0aGVtZV0pO1xuXG4gIGNvbnN0IGZhY2V0cyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCBleGVtcGxhcnNYRmFjZXQ6IG51bWJlcltdID0gW107IC8vIFwiVGltZVwiIGZpZWxkXG4gICAgbGV0IGV4ZW1wbGFyc3lGYWNldDogbnVtYmVyW10gPSBbXTtcblxuICAgIGNvbnN0IG1ldGEgPSByZWFkSGVhdG1hcFJvd3NDdXN0b21NZXRhKGluZm8uaGVhdG1hcCk7XG4gICAgaWYgKGluZm8uZXhlbXBsYXJzPy5sZW5ndGggJiYgbWV0YS55TWF0Y2hXaXRoTGFiZWwpIHtcbiAgICAgIGV4ZW1wbGFyc1hGYWNldCA9IGluZm8uZXhlbXBsYXJzPy5maWVsZHNbMF0udmFsdWVzLnRvQXJyYXkoKTtcblxuICAgICAgLy8gb3JkaW5hbC9sYWJlbGVkIGhlYXRtYXAtYnVja2V0cz9cbiAgICAgIGNvbnN0IGhhc0xhYmVsZWRZID0gbWV0YS55T3JkaW5hbERpc3BsYXkgIT0gbnVsbDtcblxuICAgICAgaWYgKGhhc0xhYmVsZWRZKSB7XG4gICAgICAgIGxldCBtYXRjaEV4ZW1wbGFyc0J5ID0gaW5mby5leGVtcGxhcnM/LmZpZWxkc1xuICAgICAgICAgIC5maW5kKChmaWVsZCkgPT4gZmllbGQubmFtZSA9PT0gbWV0YS55TWF0Y2hXaXRoTGFiZWwpIVxuICAgICAgICAgIC52YWx1ZXMudG9BcnJheSgpO1xuICAgICAgICBleGVtcGxhcnN5RmFjZXQgPSBtYXRjaEV4ZW1wbGFyc0J5Lm1hcCgobGFiZWwpID0+IG1ldGEueU9yZGluYWxMYWJlbD8uaW5kZXhPZihsYWJlbCkpIGFzIG51bWJlcltdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhlbXBsYXJzeUZhY2V0ID0gaW5mby5leGVtcGxhcnM/LmZpZWxkc1sxXS52YWx1ZXMudG9BcnJheSgpIGFzIG51bWJlcltdOyAvLyBcIlZhbHVlXCIgZmllbGRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW251bGwsIGluZm8uaGVhdG1hcD8uZmllbGRzLm1hcCgoZikgPT4gZi52YWx1ZXMudG9BcnJheSgpKSwgW2V4ZW1wbGFyc1hGYWNldCwgZXhlbXBsYXJzeUZhY2V0XV07XG4gIH0sIFtpbmZvLmhlYXRtYXAsIGluZm8uZXhlbXBsYXJzXSk7XG5cbiAgY29uc3QgcGFsZXR0ZSA9IHVzZU1lbW8oKCkgPT4gcXVhbnRpemVTY2hlbWUob3B0aW9ucy5jb2xvciwgdGhlbWUpLCBbb3B0aW9ucy5jb2xvciwgdGhlbWVdKTtcblxuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlPEhlYXRtYXBIb3ZlckV2ZW50IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBbc2hvdWxkRGlzcGxheUNsb3NlQnV0dG9uLCBzZXRTaG91bGREaXNwbGF5Q2xvc2VCdXR0b25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBpc1Rvb2xUaXBPcGVuID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBvbkNsb3NlVG9vbFRpcCA9ICgpID0+IHtcbiAgICBpc1Rvb2xUaXBPcGVuLmN1cnJlbnQgPSBmYWxzZTtcbiAgICBzZXRTaG91bGREaXNwbGF5Q2xvc2VCdXR0b24oZmFsc2UpO1xuICAgIG9uaG92ZXIobnVsbCk7XG4gIH07XG5cbiAgY29uc3Qgb25jbGljayA9ICgpID0+IHtcbiAgICBpc1Rvb2xUaXBPcGVuLmN1cnJlbnQgPSAhaXNUb29sVGlwT3Blbi5jdXJyZW50O1xuXG4gICAgLy8gTGlua2luZyBpbnRvIHVzZVN0YXRlIHJlcXVpcmVkIHRvIHJlLXJlbmRlciB0b29sdGlwXG4gICAgc2V0U2hvdWxkRGlzcGxheUNsb3NlQnV0dG9uKGlzVG9vbFRpcE9wZW4uY3VycmVudCk7XG4gIH07XG5cbiAgY29uc3Qgb25ob3ZlciA9IHVzZUNhbGxiYWNrKFxuICAgIChldnQ/OiBIZWF0bWFwSG92ZXJFdmVudCB8IG51bGwpID0+IHtcbiAgICAgIHNldEhvdmVyKGV2dCA/PyB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtvcHRpb25zLCBkYXRhLnN0cnVjdHVyZVJldl1cbiAgKTtcblxuICAvLyB1Z2hcbiAgY29uc3QgZGF0YVJlZiA9IHVzZVJlZihpbmZvKTtcbiAgZGF0YVJlZi5jdXJyZW50ID0gaW5mbztcblxuICBjb25zdCBidWlsZGVyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc2NhbGVDb25maWcgPSBkYXRhUmVmLmN1cnJlbnQ/LmhlYXRtYXA/LmZpZWxkc1sxXS5jb25maWc/LmN1c3RvbVxuICAgICAgPy5zY2FsZURpc3RyaWJ1dGlvbiBhcyBTY2FsZURpc3RyaWJ1dGlvbkNvbmZpZztcbiAgICByZXR1cm4gcHJlcENvbmZpZyh7XG4gICAgICBkYXRhUmVmLFxuICAgICAgdGhlbWUsXG4gICAgICBldmVudEJ1cyxcbiAgICAgIG9uaG92ZXI6IG9uaG92ZXIsXG4gICAgICBvbmNsaWNrOiBvcHRpb25zLnRvb2x0aXAuc2hvdyA/IG9uY2xpY2sgOiBudWxsLFxuICAgICAgb256b29tOiAoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gZXZ0LnhNYXggLSBldnQueE1pbjtcbiAgICAgICAgaWYgKGRlbHRhID4gMSkge1xuICAgICAgICAgIG9uQ2hhbmdlVGltZVJhbmdlKHsgZnJvbTogZXZ0LnhNaW4sIHRvOiBldnQueE1heCB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGlzVG9vbFRpcE9wZW4sXG4gICAgICB0aW1lWm9uZSxcbiAgICAgIGdldFRpbWVSYW5nZTogKCkgPT4gdGltZVJhbmdlUmVmLmN1cnJlbnQsXG4gICAgICBzeW5jLFxuICAgICAgcGFsZXR0ZSxcbiAgICAgIGNlbGxHYXA6IG9wdGlvbnMuY2VsbEdhcCxcbiAgICAgIGhpZGVMRTogb3B0aW9ucy5maWx0ZXJWYWx1ZXM/LmxlLFxuICAgICAgaGlkZUdFOiBvcHRpb25zLmZpbHRlclZhbHVlcz8uZ2UsXG4gICAgICBleGVtcGxhckNvbG9yOiBvcHRpb25zLmV4ZW1wbGFycz8uY29sb3IgPz8gJ3JnYmEoMjU1LDAsMjU1LDAuNyknLFxuICAgICAgeUF4aXNDb25maWc6IG9wdGlvbnMueUF4aXMsXG4gICAgICB5U2l6ZURpdmlzb3I6IHNjYWxlQ29uZmlnPy50eXBlID09PSBTY2FsZURpc3RyaWJ1dGlvbi5Mb2cgPyArKG9wdGlvbnMuY2FsY3VsYXRpb24/LnlCdWNrZXRzPy52YWx1ZSB8fCAxKSA6IDEsXG4gICAgfSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbb3B0aW9ucywgZGF0YS5zdHJ1Y3R1cmVSZXZdKTtcblxuICBjb25zdCByZW5kZXJMZWdlbmQgPSAoKSA9PiB7XG4gICAgaWYgKCFpbmZvLmhlYXRtYXAgfHwgIW9wdGlvbnMubGVnZW5kLnNob3cpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBoZWF0bWFwVHlwZSA9IGRhdGFSZWYuY3VycmVudD8uaGVhdG1hcD8ubWV0YT8udHlwZTtcbiAgICBsZXQgaXNTcGFyc2VIZWF0bWFwID0gaGVhdG1hcFR5cGUgPT09IERhdGFGcmFtZVR5cGUuSGVhdG1hcENlbGxzICYmICFpc0hlYXRtYXBDZWxsc0RlbnNlKGRhdGFSZWYuY3VycmVudD8uaGVhdG1hcCEpO1xuICAgIGxldCBjb3VudEZpZWxkSWR4ID0gIWlzU3BhcnNlSGVhdG1hcCA/IDIgOiAzO1xuICAgIGNvbnN0IGNvdW50RmllbGQgPSBpbmZvLmhlYXRtYXAuZmllbGRzW2NvdW50RmllbGRJZHhdO1xuXG4gICAgbGV0IGhvdmVyVmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvLyBzZXJpZXNJZHg6IDEgaXMgaGVhdG1hcCBsYXllcjsgMiBpcyBleGVtcGxhciBsYXllclxuICAgIGlmIChob3ZlciAmJiBpbmZvLmhlYXRtYXAuZmllbGRzICYmIGhvdmVyLnNlcmllc0lkeCA9PT0gMSkge1xuICAgICAgaG92ZXJWYWx1ZSA9IGNvdW50RmllbGQudmFsdWVzLmdldChob3Zlci5kYXRhSWR4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZpekxheW91dC5MZWdlbmQgcGxhY2VtZW50PVwiYm90dG9tXCIgbWF4SGVpZ2h0PVwiMjAlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sb3JTY2FsZVdyYXBwZXJ9PlxuICAgICAgICAgIDxDb2xvclNjYWxlXG4gICAgICAgICAgICBob3ZlclZhbHVlPXtob3ZlclZhbHVlfVxuICAgICAgICAgICAgY29sb3JQYWxldHRlPXtwYWxldHRlfVxuICAgICAgICAgICAgbWluPXtkYXRhUmVmLmN1cnJlbnQubWluVmFsdWUhfVxuICAgICAgICAgICAgbWF4PXtkYXRhUmVmLmN1cnJlbnQubWF4VmFsdWUhfVxuICAgICAgICAgICAgZGlzcGxheT17aW5mby5kaXNwbGF5fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9WaXpMYXlvdXQuTGVnZW5kPlxuICAgICk7XG4gIH07XG5cbiAgaWYgKGluZm8ud2FybmluZyB8fCAhaW5mby5oZWF0bWFwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lbERhdGFFcnJvclZpZXdcbiAgICAgICAgcGFuZWxJZD17aWR9XG4gICAgICAgIGZpZWxkQ29uZmlnPXtmaWVsZENvbmZpZ31cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgbmVlZHNOdW1iZXJGaWVsZD17dHJ1ZX1cbiAgICAgICAgbWVzc2FnZT17aW5mby53YXJuaW5nfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFZpekxheW91dCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBsZWdlbmQ9e3JlbmRlckxlZ2VuZCgpfT5cbiAgICAgICAgeyh2aXpXaWR0aDogbnVtYmVyLCB2aXpIZWlnaHQ6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxVUGxvdENoYXJ0IGNvbmZpZz17YnVpbGRlcn0gZGF0YT17ZmFjZXRzIGFzIGFueX0gd2lkdGg9e3ZpeldpZHRofSBoZWlnaHQ9e3ZpekhlaWdodH0gdGltZVJhbmdlPXt0aW1lUmFuZ2V9PlxuICAgICAgICAgICAgey8qY2hpbGRyZW4gPyBjaGlsZHJlbihjb25maWcsIGFsaWduZWRGcmFtZSkgOiBudWxsKi99XG4gICAgICAgICAgPC9VUGxvdENoYXJ0PlxuICAgICAgICApfVxuICAgICAgPC9WaXpMYXlvdXQ+XG4gICAgICA8UG9ydGFsPlxuICAgICAgICB7aG92ZXIgJiYgb3B0aW9ucy50b29sdGlwLnNob3cgJiYgKFxuICAgICAgICAgIDxWaXpUb29sdGlwQ29udGFpbmVyXG4gICAgICAgICAgICBwb3NpdGlvbj17eyB4OiBob3Zlci5wYWdlWCwgeTogaG92ZXIucGFnZVkgfX1cbiAgICAgICAgICAgIG9mZnNldD17eyB4OiAxMCwgeTogMTAgfX1cbiAgICAgICAgICAgIGFsbG93UG9pbnRlckV2ZW50cz17aXNUb29sVGlwT3Blbi5jdXJyZW50fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzaG91bGREaXNwbGF5Q2xvc2VCdXR0b24gJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlVG9vbFRpcH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlQnV0dG9uU3BhY2VyfSAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8SGVhdG1hcEhvdmVyVmlldyBkYXRhPXtpbmZvfSBob3Zlcj17aG92ZXJ9IHNob3dIaXN0b2dyYW09e29wdGlvbnMudG9vbHRpcC55SGlzdG9ncmFtfSAvPlxuICAgICAgICAgIDwvVml6VG9vbHRpcENvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgIDwvUG9ydGFsPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBjbG9zZUJ1dHRvblNwYWNlcjogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGAsXG4gIGNvbG9yU2NhbGVXcmFwcGVyOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7XG4gIERhdGFGcmFtZSxcbiAgRGF0YUZyYW1lVHlwZSxcbiAgRmllbGQsXG4gIEZpZWxkVHlwZSxcbiAgZm9ybWF0dGVkVmFsdWVUb1N0cmluZyxcbiAgZ2V0RGlzcGxheVByb2Nlc3NvcixcbiAgR3JhZmFuYVRoZW1lMixcbiAgb3V0ZXJKb2luRGF0YUZyYW1lcyxcbiAgUGFuZWxEYXRhLFxuICBWYWx1ZUZvcm1hdHRlcixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQge1xuICBjYWxjdWxhdGVIZWF0bWFwRnJvbURhdGEsXG4gIGlzSGVhdG1hcENlbGxzRGVuc2UsXG4gIHJlYWRIZWF0bWFwUm93c0N1c3RvbU1ldGEsXG4gIHJvd3NUb0NlbGxzSGVhdG1hcCxcbn0gZnJvbSAnYXBwL2ZlYXR1cmVzL3RyYW5zZm9ybWVycy9jYWxjdWxhdGVIZWF0bWFwL2hlYXRtYXAnO1xuaW1wb3J0IHsgSGVhdG1hcENlbGxMYXlvdXQgfSBmcm9tICdhcHAvZmVhdHVyZXMvdHJhbnNmb3JtZXJzL2NhbGN1bGF0ZUhlYXRtYXAvbW9kZWxzLmdlbic7XG5cbmltcG9ydCB7IENlbGxWYWx1ZXMsIFBhbmVsT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzLmdlbic7XG5pbXBvcnQgeyBib3VuZGVkTWluTWF4IH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVhdG1hcERhdGEge1xuICBoZWF0bWFwPzogRGF0YUZyYW1lOyAvLyBkYXRhIHdlIHdpbGwgcmVuZGVyXG4gIGV4ZW1wbGFycz86IERhdGFGcmFtZTsgLy8gb3B0aW9uYWxseSBsaW5rZWQgZXhlbXBsYXJzXG4gIGV4ZW1wbGFyQ29sb3I/OiBzdHJpbmc7XG5cbiAgeEJ1Y2tldFNpemU/OiBudW1iZXI7XG4gIHlCdWNrZXRTaXplPzogbnVtYmVyO1xuXG4gIHhCdWNrZXRDb3VudD86IG51bWJlcjtcbiAgeUJ1Y2tldENvdW50PzogbnVtYmVyO1xuXG4gIHhMYXlvdXQ/OiBIZWF0bWFwQ2VsbExheW91dDtcbiAgeUxheW91dD86IEhlYXRtYXBDZWxsTGF5b3V0O1xuXG4gIC8vIGNvbG9yIHNjYWxlIHJhbmdlXG4gIG1pblZhbHVlPzogbnVtYmVyO1xuICBtYXhWYWx1ZT86IG51bWJlcjtcblxuICAvLyBQcmludCBhIGhlYXRtYXAgY2VsbCB2YWx1ZVxuICBkaXNwbGF5PzogKHY6IG51bWJlcikgPT4gc3RyaW5nO1xuXG4gIC8vIEVycm9yc1xuICB3YXJuaW5nPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZUhlYXRtYXBEYXRhKGRhdGE6IFBhbmVsRGF0YSwgb3B0aW9uczogUGFuZWxPcHRpb25zLCB0aGVtZTogR3JhZmFuYVRoZW1lMik6IEhlYXRtYXBEYXRhIHtcbiAgbGV0IGZyYW1lcyA9IGRhdGEuc2VyaWVzO1xuICBpZiAoIWZyYW1lcz8ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgY29uc3QgZXhlbXBsYXJzID0gZGF0YS5hbm5vdGF0aW9ucz8uZmluZCgoZikgPT4gZi5uYW1lID09PSAnZXhlbXBsYXInKTtcblxuICBpZiAob3B0aW9ucy5jYWxjdWxhdGUpIHtcbiAgICByZXR1cm4gZ2V0RGVuc2VIZWF0bWFwRGF0YShjYWxjdWxhdGVIZWF0bWFwRnJvbURhdGEoZnJhbWVzLCBvcHRpb25zLmNhbGN1bGF0aW9uID8/IHt9KSwgZXhlbXBsYXJzLCBvcHRpb25zLCB0aGVtZSk7XG4gIH1cblxuICAvLyBDaGVjayBmb3Iga25vd24gaGVhdG1hcCB0eXBlc1xuICBsZXQgcm93c0hlYXRtYXA6IERhdGFGcmFtZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgZm9yIChjb25zdCBmcmFtZSBvZiBmcmFtZXMpIHtcbiAgICBzd2l0Y2ggKGZyYW1lLm1ldGE/LnR5cGUpIHtcbiAgICAgIGNhc2UgRGF0YUZyYW1lVHlwZS5IZWF0bWFwQ2VsbHM6XG4gICAgICAgIHJldHVybiBpc0hlYXRtYXBDZWxsc0RlbnNlKGZyYW1lKVxuICAgICAgICAgID8gZ2V0RGVuc2VIZWF0bWFwRGF0YShmcmFtZSwgZXhlbXBsYXJzLCBvcHRpb25zLCB0aGVtZSlcbiAgICAgICAgICA6IGdldFNwYXJzZUhlYXRtYXBEYXRhKGZyYW1lLCBleGVtcGxhcnMsIG9wdGlvbnMsIHRoZW1lKTtcblxuICAgICAgY2FzZSBEYXRhRnJhbWVUeXBlLkhlYXRtYXBSb3dzOlxuICAgICAgICByb3dzSGVhdG1hcCA9IGZyYW1lOyAvLyB0aGUgZGVmYXVsdCBmb3JtYXRcbiAgICB9XG4gIH1cblxuICAvLyBFdmVyeXRoaW5nIHBhc3QgaGVyZSBhc3N1bWVzIGEgZmllbGQgZm9yIGVhY2ggcm93IGluIHRoZSBoZWF0bWFwIChidWNrZXRzKVxuICBpZiAoIXJvd3NIZWF0bWFwKSB7XG4gICAgaWYgKGZyYW1lcy5sZW5ndGggPiAxKSB7XG4gICAgICByb3dzSGVhdG1hcCA9IFtcbiAgICAgICAgb3V0ZXJKb2luRGF0YUZyYW1lcyh7XG4gICAgICAgICAgZnJhbWVzLFxuICAgICAgICB9KSEsXG4gICAgICBdWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3dzSGVhdG1hcCA9IGZyYW1lc1swXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0RGVuc2VIZWF0bWFwRGF0YShcbiAgICByb3dzVG9DZWxsc0hlYXRtYXAoe1xuICAgICAgdW5pdDogb3B0aW9ucy55QXhpcz8udW5pdCwgLy8gdXNlZCB0byBmb3JtYXQgdGhlIG9yZGluYWwgbG9va3VwIHZhbHVlc1xuICAgICAgZGVjaW1hbHM6IG9wdGlvbnMueUF4aXM/LmRlY2ltYWxzLFxuICAgICAgLi4ub3B0aW9ucy5yb3dzRnJhbWUsXG4gICAgICBmcmFtZTogcm93c0hlYXRtYXAsXG4gICAgfSksXG4gICAgZXhlbXBsYXJzLFxuICAgIG9wdGlvbnMsXG4gICAgdGhlbWVcbiAgKTtcbn1cblxuY29uc3QgZ2V0U3BhcnNlSGVhdG1hcERhdGEgPSAoXG4gIGZyYW1lOiBEYXRhRnJhbWUsXG4gIGV4ZW1wbGFyczogRGF0YUZyYW1lIHwgdW5kZWZpbmVkLFxuICBvcHRpb25zOiBQYW5lbE9wdGlvbnMsXG4gIHRoZW1lOiBHcmFmYW5hVGhlbWUyXG4pOiBIZWF0bWFwRGF0YSA9PiB7XG4gIGlmIChmcmFtZS5tZXRhPy50eXBlICE9PSBEYXRhRnJhbWVUeXBlLkhlYXRtYXBDZWxscyB8fCBpc0hlYXRtYXBDZWxsc0RlbnNlKGZyYW1lKSkge1xuICAgIHJldHVybiB7XG4gICAgICB3YXJuaW5nOiAnRXhwZWN0ZWQgc3BhcnNlIGhlYXRtYXAgZm9ybWF0JyxcbiAgICAgIGhlYXRtYXA6IGZyYW1lLFxuICAgIH07XG4gIH1cblxuICAvLyB5IGF4aXMgdGljayBsYWJlbCBkaXNwbGF5XG4gIHVwZGF0ZUZpZWxkRGlzcGxheShmcmFtZS5maWVsZHNbMV0sIG9wdGlvbnMueUF4aXMsIHRoZW1lKTtcblxuICAvLyBjZWxsIHZhbHVlIGRpc3BsYXlcbiAgY29uc3QgZGlzcCA9IHVwZGF0ZUZpZWxkRGlzcGxheShmcmFtZS5maWVsZHNbM10sIG9wdGlvbnMuY2VsbFZhbHVlcywgdGhlbWUpO1xuXG4gIGxldCBbbWluVmFsdWUsIG1heFZhbHVlXSA9IGJvdW5kZWRNaW5NYXgoXG4gICAgZnJhbWUuZmllbGRzWzNdLnZhbHVlcy50b0FycmF5KCksXG4gICAgb3B0aW9ucy5jb2xvci5taW4sXG4gICAgb3B0aW9ucy5jb2xvci5tYXgsXG4gICAgb3B0aW9ucy5maWx0ZXJWYWx1ZXM/LmxlLFxuICAgIG9wdGlvbnMuZmlsdGVyVmFsdWVzPy5nZVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgaGVhdG1hcDogZnJhbWUsXG4gICAgbWluVmFsdWUsXG4gICAgbWF4VmFsdWUsXG4gICAgZXhlbXBsYXJzLFxuICAgIGRpc3BsYXk6ICh2KSA9PiBmb3JtYXR0ZWRWYWx1ZVRvU3RyaW5nKGRpc3AodikpLFxuICB9O1xufTtcblxuY29uc3QgZ2V0RGVuc2VIZWF0bWFwRGF0YSA9IChcbiAgZnJhbWU6IERhdGFGcmFtZSxcbiAgZXhlbXBsYXJzOiBEYXRhRnJhbWUgfCB1bmRlZmluZWQsXG4gIG9wdGlvbnM6IFBhbmVsT3B0aW9ucyxcbiAgdGhlbWU6IEdyYWZhbmFUaGVtZTJcbik6IEhlYXRtYXBEYXRhID0+IHtcbiAgaWYgKGZyYW1lLm1ldGE/LnR5cGUgIT09IERhdGFGcmFtZVR5cGUuSGVhdG1hcENlbGxzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdhcm5pbmc6ICdFeHBlY3RlZCBoZWF0bWFwIHNjYW5saW5lcyBmb3JtYXQnLFxuICAgICAgaGVhdG1hcDogZnJhbWUsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChmcmFtZS5maWVsZHMubGVuZ3RoIDwgMiB8fCBmcmFtZS5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIHsgaGVhdG1hcDogZnJhbWUgfTtcbiAgfVxuXG4gIGNvbnN0IG1ldGEgPSByZWFkSGVhdG1hcFJvd3NDdXN0b21NZXRhKGZyYW1lKTtcbiAgbGV0IHhOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGxldCB5TmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBsZXQgdmFsdWVGaWVsZDogRmllbGQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLy8gdmFsaWRhdGUgZmllbGQgZGlzcGxheSBwcm9wZXJ0aWVzXG4gIGZvciAoY29uc3QgZmllbGQgb2YgZnJhbWUuZmllbGRzKSB7XG4gICAgc3dpdGNoIChmaWVsZC5uYW1lKSB7XG4gICAgICBjYXNlICd5JzpcbiAgICAgICAgeU5hbWUgPSBmaWVsZC5uYW1lO1xuXG4gICAgICBjYXNlICd5TWluJzpcbiAgICAgIGNhc2UgJ3lNYXgnOiB7XG4gICAgICAgIGlmICgheU5hbWUpIHtcbiAgICAgICAgICB5TmFtZSA9IGZpZWxkLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGEueU9yZGluYWxEaXNwbGF5ID09IG51bGwpIHtcbiAgICAgICAgICB1cGRhdGVGaWVsZERpc3BsYXkoZmllbGQsIG9wdGlvbnMueUF4aXMsIHRoZW1lKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSAneCc6XG4gICAgICBjYXNlICd4TWluJzpcbiAgICAgIGNhc2UgJ3hNYXgnOlxuICAgICAgICB4TmFtZSA9IGZpZWxkLm5hbWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGlmIChmaWVsZC50eXBlID09PSBGaWVsZFR5cGUubnVtYmVyICYmICF2YWx1ZUZpZWxkKSB7XG4gICAgICAgICAgdmFsdWVGaWVsZCA9IGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCF5TmFtZSkge1xuICAgIHJldHVybiB7IHdhcm5pbmc6ICdNaXNzaW5nIFkgZmllbGQnLCBoZWF0bWFwOiBmcmFtZSB9O1xuICB9XG4gIGlmICgheU5hbWUpIHtcbiAgICByZXR1cm4geyB3YXJuaW5nOiAnTWlzc2luZyBYIGZpZWxkJywgaGVhdG1hcDogZnJhbWUgfTtcbiAgfVxuICBpZiAoIXZhbHVlRmllbGQpIHtcbiAgICByZXR1cm4geyB3YXJuaW5nOiAnTWlzc2luZyB2YWx1ZSBmaWVsZCcsIGhlYXRtYXA6IGZyYW1lIH07XG4gIH1cblxuICBjb25zdCBkaXNwID0gdXBkYXRlRmllbGREaXNwbGF5KHZhbHVlRmllbGQsIG9wdGlvbnMuY2VsbFZhbHVlcywgdGhlbWUpO1xuXG4gIC8vIGluZmVyIGJ1Y2tldCBzaXplcyBmcm9tIGRhdGEgKGZvciBub3cpXG4gIC8vIHRoZSAnaGVhdG1hcC1zY2FubGluZXMnIGRlbnNlIGZyYW1lIGZvcm1hdCBsb29rcyBsaWtlOlxuICAvLyB4OiAgICAgIDEsMSwxLDEsMiwyLDIsMlxuICAvLyB5OiAgICAgIDMsNCw1LDYsMyw0LDUsNlxuICAvLyBjb3VudDogIDAsMCwwLDcsMCwzLDAsMVxuXG4gIGNvbnN0IHhzID0gZnJhbWUuZmllbGRzWzBdLnZhbHVlcy50b0FycmF5KCk7XG4gIGNvbnN0IHlzID0gZnJhbWUuZmllbGRzWzFdLnZhbHVlcy50b0FycmF5KCk7XG4gIGNvbnN0IGRsZW4gPSB4cy5sZW5ndGg7XG5cbiAgLy8gYmVsb3cgaXMgbGl0ZXJhbGx5IGNvcHkvcGFzdGUgZnJvbSB0aGUgcGF0aEJ1aWxkZXIgY29kZSBpbiB1dGlscy50c1xuICAvLyBkZXRlY3QgeCBhbmQgeSBiaW4gcXR5cyBieSBkZXRlY3RpbmcgbGF5b3V0IHJlcGV0aXRpb24gaW4geCAmIHkgZGF0YVxuICBsZXQgeUJpblF0eSA9IGRsZW4gLSB5cy5sYXN0SW5kZXhPZih5c1swXSk7XG4gIGxldCB4QmluUXR5ID0gZGxlbiAvIHlCaW5RdHk7XG4gIGxldCB5QmluSW5jciA9IHlzWzFdIC0geXNbMF07XG4gIGxldCB4QmluSW5jciA9IHhzW3lCaW5RdHldIC0geHNbMF07XG5cbiAgbGV0IFttaW5WYWx1ZSwgbWF4VmFsdWVdID0gYm91bmRlZE1pbk1heChcbiAgICB2YWx1ZUZpZWxkLnZhbHVlcy50b0FycmF5KCksXG4gICAgb3B0aW9ucy5jb2xvci5taW4sXG4gICAgb3B0aW9ucy5jb2xvci5tYXgsXG4gICAgb3B0aW9ucy5maWx0ZXJWYWx1ZXM/LmxlLFxuICAgIG9wdGlvbnMuZmlsdGVyVmFsdWVzPy5nZVxuICApO1xuXG4gIGNvbnN0IGRhdGE6IEhlYXRtYXBEYXRhID0ge1xuICAgIGhlYXRtYXA6IGZyYW1lLFxuICAgIGV4ZW1wbGFyczogZXhlbXBsYXJzPy5sZW5ndGggPyBleGVtcGxhcnMgOiB1bmRlZmluZWQsXG4gICAgeEJ1Y2tldFNpemU6IHhCaW5JbmNyLFxuICAgIHlCdWNrZXRTaXplOiB5QmluSW5jcixcbiAgICB4QnVja2V0Q291bnQ6IHhCaW5RdHksXG4gICAgeUJ1Y2tldENvdW50OiB5QmluUXR5LFxuXG4gICAgbWluVmFsdWUsXG4gICAgbWF4VmFsdWUsXG5cbiAgICAvLyBUT0RPOiBpbXByb3ZlIGhldXJpc3RpY1xuICAgIHhMYXlvdXQ6XG4gICAgICB4TmFtZSA9PT0gJ3hNYXgnID8gSGVhdG1hcENlbGxMYXlvdXQubGUgOiB4TmFtZSA9PT0gJ3hNaW4nID8gSGVhdG1hcENlbGxMYXlvdXQuZ2UgOiBIZWF0bWFwQ2VsbExheW91dC51bmtub3duLFxuICAgIHlMYXlvdXQ6XG4gICAgICB5TmFtZSA9PT0gJ3lNYXgnID8gSGVhdG1hcENlbGxMYXlvdXQubGUgOiB5TmFtZSA9PT0gJ3lNaW4nID8gSGVhdG1hcENlbGxMYXlvdXQuZ2UgOiBIZWF0bWFwQ2VsbExheW91dC51bmtub3duLFxuXG4gICAgZGlzcGxheTogKHYpID0+IGZvcm1hdHRlZFZhbHVlVG9TdHJpbmcoZGlzcCh2KSksXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVGaWVsZERpc3BsYXkoZmllbGQ6IEZpZWxkLCBvcHRzOiBDZWxsVmFsdWVzIHwgdW5kZWZpbmVkLCB0aGVtZTogR3JhZmFuYVRoZW1lMik6IFZhbHVlRm9ybWF0dGVyIHtcbiAgaWYgKG9wdHM/LnVuaXQ/Lmxlbmd0aCB8fCBvcHRzPy5kZWNpbWFscyAhPSBudWxsKSB7XG4gICAgY29uc3QgeyB1bml0LCBkZWNpbWFscyB9ID0gb3B0cztcbiAgICBmaWVsZC5kaXNwbGF5ID0gdW5kZWZpbmVkO1xuICAgIGZpZWxkLmNvbmZpZyA9IHsgLi4uZmllbGQuY29uZmlnIH07XG4gICAgaWYgKHVuaXQ/Lmxlbmd0aCkge1xuICAgICAgZmllbGQuY29uZmlnLnVuaXQgPSB1bml0O1xuICAgIH1cbiAgICBpZiAoZGVjaW1hbHMgIT0gbnVsbCkge1xuICAgICAgZmllbGQuY29uZmlnLmRlY2ltYWxzID0gZGVjaW1hbHM7XG4gICAgfVxuICB9XG4gIGlmICghZmllbGQuZGlzcGxheSkge1xuICAgIGZpZWxkLmRpc3BsYXkgPSBnZXREaXNwbGF5UHJvY2Vzc29yKHsgZmllbGQsIHRoZW1lIH0pO1xuICB9XG4gIHJldHVybiBmaWVsZC5kaXNwbGF5O1xufVxuIiwiaW1wb3J0IHsgRmllbGRDb25maWdTb3VyY2UsIFBhbmVsTW9kZWwsIFBhbmVsVHlwZUNoYW5nZWRIYW5kbGVyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBeGlzUGxhY2VtZW50LCBTY2FsZURpc3RyaWJ1dGlvbiwgVmlzaWJpbGl0eU1vZGUgfSBmcm9tICdAZ3JhZmFuYS9zY2hlbWEnO1xuaW1wb3J0IHtcbiAgSGVhdG1hcENlbGxMYXlvdXQsXG4gIEhlYXRtYXBDYWxjdWxhdGlvbk1vZGUsXG4gIEhlYXRtYXBDYWxjdWxhdGlvbk9wdGlvbnMsXG59IGZyb20gJ2FwcC9mZWF0dXJlcy90cmFuc2Zvcm1lcnMvY2FsY3VsYXRlSGVhdG1hcC9tb2RlbHMuZ2VuJztcblxuaW1wb3J0IHsgUGFuZWxPcHRpb25zLCBkZWZhdWx0UGFuZWxPcHRpb25zLCBIZWF0bWFwQ29sb3JNb2RlIH0gZnJvbSAnLi9tb2RlbHMuZ2VuJztcbmltcG9ydCB7IGNvbG9yU2NoZW1lcyB9IGZyb20gJy4vcGFsZXR0ZXMnO1xuXG4vKiogQ2FsbGVkIHdoZW4gdGhlIHZlcnNpb24gbnVtYmVyIGNoYW5nZXMgKi9cbmV4cG9ydCBjb25zdCBoZWF0bWFwTWlncmF0aW9uSGFuZGxlciA9IChwYW5lbDogUGFuZWxNb2RlbCk6IFBhcnRpYWw8UGFuZWxPcHRpb25zPiA9PiB7XG4gIC8vIE1pZ3JhdGluZyBmcm9tIGFuZ3VsYXJcbiAgaWYgKE9iamVjdC5rZXlzKHBhbmVsLm9wdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBoZWF0bWFwQ2hhbmdlZEhhbmRsZXIocGFuZWwsICdoZWF0bWFwJywgeyBhbmd1bGFyOiBwYW5lbCB9LCBwYW5lbC5maWVsZENvbmZpZyk7XG4gIH1cbiAgcmV0dXJuIHBhbmVsLm9wdGlvbnM7XG59O1xuXG4vKipcbiAqIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIHBhbmVsIGNoYW5nZXMgZnJvbSBhbm90aGVyIHBhbmVsXG4gKi9cbmV4cG9ydCBjb25zdCBoZWF0bWFwQ2hhbmdlZEhhbmRsZXI6IFBhbmVsVHlwZUNoYW5nZWRIYW5kbGVyID0gKHBhbmVsLCBwcmV2UGx1Z2luSWQsIHByZXZPcHRpb25zLCBwcmV2RmllbGRDb25maWcpID0+IHtcbiAgaWYgKHByZXZQbHVnaW5JZCA9PT0gJ2hlYXRtYXAnICYmIHByZXZPcHRpb25zLmFuZ3VsYXIpIHtcbiAgICBjb25zdCB7IGZpZWxkQ29uZmlnLCBvcHRpb25zIH0gPSBhbmd1bGFyVG9SZWFjdEhlYXRtYXAoe1xuICAgICAgLi4ucHJldk9wdGlvbnMuYW5ndWxhcixcbiAgICAgIGZpZWxkQ29uZmlnOiBwcmV2RmllbGRDb25maWcsXG4gICAgfSk7XG4gICAgcGFuZWwuZmllbGRDb25maWcgPSBmaWVsZENvbmZpZzsgLy8gTXV0YXRlcyB0aGUgaW5jb21pbmcgcGFuZWxcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuICAvLyBhbHBoYSBmb3IgOC41KywgdGhlbiBiZXRhIGF0IDkuMC4xXG4gIGlmIChwcmV2UGx1Z2luSWQgPT09ICdoZWF0bWFwLW5ldycpIHtcbiAgICBjb25zdCB7IGJ1Y2tldEZyYW1lLCAuLi5vcHRpb25zIH0gPSBwYW5lbC5vcHRpb25zO1xuICAgIGlmIChidWNrZXRGcmFtZSkge1xuICAgICAgcmV0dXJuIHsgLi4ub3B0aW9ucywgcm93c0ZyYW1lOiBidWNrZXRGcmFtZSB9O1xuICAgIH1cbiAgICByZXR1cm4gcGFuZWwub3B0aW9ucztcbiAgfVxuICByZXR1cm4ge307XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYW5ndWxhclRvUmVhY3RIZWF0bWFwKGFuZ3VsYXI6IGFueSk6IHsgZmllbGRDb25maWc6IEZpZWxkQ29uZmlnU291cmNlOyBvcHRpb25zOiBQYW5lbE9wdGlvbnMgfSB7XG4gIGNvbnN0IGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZ1NvdXJjZSA9IHtcbiAgICBkZWZhdWx0czoge30sXG4gICAgb3ZlcnJpZGVzOiBbXSxcbiAgfTtcblxuICBjb25zdCBjYWxjdWxhdGUgPSBhbmd1bGFyLmRhdGFGb3JtYXQgPT09ICd0c2J1Y2tldHMnID8gZmFsc2UgOiB0cnVlO1xuICBjb25zdCBjYWxjdWxhdGlvbjogSGVhdG1hcENhbGN1bGF0aW9uT3B0aW9ucyA9IHtcbiAgICAuLi5kZWZhdWx0UGFuZWxPcHRpb25zLmNhbGN1bGF0aW9uLFxuICB9O1xuXG4gIGNvbnN0IG9sZFlBeGlzID0geyBsb2dCYXNlOiAxLCAuLi5hbmd1bGFyLnlBeGlzIH07XG5cbiAgaWYgKGNhbGN1bGF0ZSkge1xuICAgIGlmIChhbmd1bGFyLnhCdWNrZXRTaXplKSB7XG4gICAgICBjYWxjdWxhdGlvbi54QnVja2V0cyA9IHsgbW9kZTogSGVhdG1hcENhbGN1bGF0aW9uTW9kZS5TaXplLCB2YWx1ZTogYCR7YW5ndWxhci54QnVja2V0U2l6ZX1gIH07XG4gICAgfSBlbHNlIGlmIChhbmd1bGFyLnhCdWNrZXROdW1iZXIpIHtcbiAgICAgIGNhbGN1bGF0aW9uLnhCdWNrZXRzID0geyBtb2RlOiBIZWF0bWFwQ2FsY3VsYXRpb25Nb2RlLkNvdW50LCB2YWx1ZTogYCR7YW5ndWxhci54QnVja2V0TnVtYmVyfWAgfTtcbiAgICB9XG5cbiAgICBpZiAoYW5ndWxhci55QnVja2V0U2l6ZSkge1xuICAgICAgY2FsY3VsYXRpb24ueUJ1Y2tldHMgPSB7IG1vZGU6IEhlYXRtYXBDYWxjdWxhdGlvbk1vZGUuU2l6ZSwgdmFsdWU6IGAke2FuZ3VsYXIueUJ1Y2tldFNpemV9YCB9O1xuICAgIH0gZWxzZSBpZiAoYW5ndWxhci54QnVja2V0TnVtYmVyKSB7XG4gICAgICBjYWxjdWxhdGlvbi55QnVja2V0cyA9IHsgbW9kZTogSGVhdG1hcENhbGN1bGF0aW9uTW9kZS5Db3VudCwgdmFsdWU6IGAke2FuZ3VsYXIueUJ1Y2tldE51bWJlcn1gIH07XG4gICAgfVxuXG4gICAgaWYgKG9sZFlBeGlzLmxvZ0Jhc2UgPiAxKSB7XG4gICAgICBjYWxjdWxhdGlvbi55QnVja2V0cyA9IHtcbiAgICAgICAgbW9kZTogSGVhdG1hcENhbGN1bGF0aW9uTW9kZS5Db3VudCxcbiAgICAgICAgdmFsdWU6ICtvbGRZQXhpcy5zcGxpdEZhY3RvciA+IDAgPyBgJHtvbGRZQXhpcy5zcGxpdEZhY3Rvcn1gIDogdW5kZWZpbmVkLFxuICAgICAgICBzY2FsZToge1xuICAgICAgICAgIHR5cGU6IFNjYWxlRGlzdHJpYnV0aW9uLkxvZyxcbiAgICAgICAgICBsb2c6IG9sZFlBeGlzLmxvZ0Jhc2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9wdGlvbnM6IFBhbmVsT3B0aW9ucyA9IHtcbiAgICBjYWxjdWxhdGUsXG4gICAgY2FsY3VsYXRpb24sXG4gICAgY29sb3I6IHtcbiAgICAgIC4uLmRlZmF1bHRQYW5lbE9wdGlvbnMuY29sb3IsXG4gICAgICBzdGVwczogMTI4LCAvLyBiZXN0IG1hdGNoIHdpdGggZXhpc3RpbmcgY29sb3JzXG4gICAgfSxcbiAgICBjZWxsR2FwOiBhc051bWJlcihhbmd1bGFyLmNhcmRzPy5jYXJkUGFkZGluZywgMiksXG4gICAgY2VsbFJhZGl1czogYXNOdW1iZXIoYW5ndWxhci5jYXJkcz8uY2FyZFJvdW5kKSwgLy8ganVzdCB0byBrZWVwIGl0XG4gICAgeUF4aXM6IHtcbiAgICAgIGF4aXNQbGFjZW1lbnQ6IG9sZFlBeGlzLnNob3cgPT09IGZhbHNlID8gQXhpc1BsYWNlbWVudC5IaWRkZW4gOiBBeGlzUGxhY2VtZW50LkxlZnQsXG4gICAgICByZXZlcnNlOiBCb29sZWFuKGFuZ3VsYXIucmV2ZXJzZVlCdWNrZXRzKSxcbiAgICAgIGF4aXNXaWR0aDogYXNOdW1iZXIob2xkWUF4aXMud2lkdGgpLFxuICAgICAgbWluOiBvbGRZQXhpcy5taW4sXG4gICAgICBtYXg6IG9sZFlBeGlzLm1heCxcbiAgICAgIHVuaXQ6IG9sZFlBeGlzLmZvcm1hdCxcbiAgICAgIGRlY2ltYWxzOiBvbGRZQXhpcy5kZWNpbWFscyxcbiAgICB9LFxuICAgIGNlbGxWYWx1ZXM6IHtcbiAgICAgIGRlY2ltYWxzOiBhc051bWJlcihhbmd1bGFyLnRvb2x0aXBEZWNpbWFscyksXG4gICAgfSxcbiAgICByb3dzRnJhbWU6IHtcbiAgICAgIGxheW91dDogZ2V0SGVhdG1hcENlbGxMYXlvdXQoYW5ndWxhci55QnVja2V0Qm91bmQpLFxuICAgIH0sXG4gICAgbGVnZW5kOiB7XG4gICAgICBzaG93OiBCb29sZWFuKGFuZ3VsYXIubGVnZW5kLnNob3cpLFxuICAgIH0sXG4gICAgc2hvd1ZhbHVlOiBWaXNpYmlsaXR5TW9kZS5OZXZlcixcbiAgICB0b29sdGlwOiB7XG4gICAgICBzaG93OiBCb29sZWFuKGFuZ3VsYXIudG9vbHRpcD8uc2hvdyksXG4gICAgICB5SGlzdG9ncmFtOiBCb29sZWFuKGFuZ3VsYXIudG9vbHRpcD8uc2hvd0hpc3RvZ3JhbSksXG4gICAgfSxcbiAgICBleGVtcGxhcnM6IHtcbiAgICAgIC4uLmRlZmF1bHRQYW5lbE9wdGlvbnMuZXhlbXBsYXJzLFxuICAgIH0sXG4gIH07XG5cbiAgaWYgKGFuZ3VsYXIuaGlkZVplcm9CdWNrZXRzKSB7XG4gICAgb3B0aW9ucy5maWx0ZXJWYWx1ZXMgPSB7IC4uLmRlZmF1bHRQYW5lbE9wdGlvbnMuZmlsdGVyVmFsdWVzIH07IC8vIG1pbjogMWUtOVxuICB9XG5cbiAgLy8gTWlncmF0ZSBjb2xvciBvcHRpb25zXG4gIGNvbnN0IGNvbG9yID0gYW5ndWxhci5jb2xvcjtcbiAgc3dpdGNoIChjb2xvcj8ubW9kZSkge1xuICAgIGNhc2UgJ3NwZWN0cnVtJzoge1xuICAgICAgb3B0aW9ucy5jb2xvci5tb2RlID0gSGVhdG1hcENvbG9yTW9kZS5TY2hlbWU7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBjb2xvci5jb2xvclNjaGVtZSBhcyBzdHJpbmc7XG4gICAgICBsZXQgc2NoZW1lID0gY29sb3JTY2hlbWVzLmZpbmQoKHYpID0+IHYubmFtZSA9PT0gY3VycmVudCk7XG4gICAgICBpZiAoIXNjaGVtZSkge1xuICAgICAgICBzY2hlbWUgPSBjb2xvclNjaGVtZXMuZmluZCgodikgPT4gY3VycmVudC5pbmRleE9mKHYubmFtZSkgPj0gMCk7XG4gICAgICB9XG4gICAgICBvcHRpb25zLmNvbG9yLnNjaGVtZSA9IHNjaGVtZSA/IHNjaGVtZS5uYW1lIDogZGVmYXVsdFBhbmVsT3B0aW9ucy5jb2xvci5zY2hlbWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnb3BhY2l0eSc6IHtcbiAgICAgIG9wdGlvbnMuY29sb3IubW9kZSA9IEhlYXRtYXBDb2xvck1vZGUuT3BhY2l0eTtcbiAgICAgIG9wdGlvbnMuY29sb3Iuc2NhbGUgPSBjb2xvci5zY2FsZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBvcHRpb25zLmNvbG9yLmZpbGwgPSBjb2xvci5jYXJkQ29sb3I7XG4gIG9wdGlvbnMuY29sb3IubWluID0gY29sb3IubWluO1xuICBvcHRpb25zLmNvbG9yLm1heCA9IGNvbG9yLm1heDtcblxuICByZXR1cm4geyBmaWVsZENvbmZpZywgb3B0aW9ucyB9O1xufVxuXG5mdW5jdGlvbiBnZXRIZWF0bWFwQ2VsbExheW91dCh2Pzogc3RyaW5nKTogSGVhdG1hcENlbGxMYXlvdXQge1xuICBzd2l0Y2ggKHYpIHtcbiAgICBjYXNlICd1cHBlcic6XG4gICAgICByZXR1cm4gSGVhdG1hcENlbGxMYXlvdXQuZ2U7XG4gICAgY2FzZSAnbG93ZXInOlxuICAgICAgcmV0dXJuIEhlYXRtYXBDZWxsTGF5b3V0LmxlO1xuICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICByZXR1cm4gSGVhdG1hcENlbGxMYXlvdXQudW5rbm93bjtcbiAgfVxuICByZXR1cm4gSGVhdG1hcENlbGxMYXlvdXQuYXV0bztcbn1cblxuZnVuY3Rpb24gYXNOdW1iZXIodjogYW55LCBkZWZhdWx0VmFsdWU/OiBudW1iZXIpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodiA9PSBudWxsIHx8IHYgPT09ICcnKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfVxuICBjb25zdCBudW0gPSArdjtcbiAgcmV0dXJuIGlzTmFOKG51bSkgPyBkZWZhdWx0VmFsdWUgOiBudW07XG59XG4iLCIvL35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG4vLyBOT1RFOiBUaGlzIGZpbGUgd2lsbCBiZSBhdXRvIGdlbmVyYXRlZCBmcm9tIG1vZGVscy5jdWVcbi8vIEl0IGlzIGN1cnJlbnR5IGhhbmQgd3JpdHRlbiBidXQgd2lsbCBzZXJ2ZSBhcyB0aGUgdGFyZ2V0IGZvciBjdWV0c3lcbi8vfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuaW1wb3J0IHsgQXhpc0NvbmZpZywgQXhpc1BsYWNlbWVudCwgSGlkZWFibGVGaWVsZENvbmZpZywgU2NhbGVEaXN0cmlidXRpb25Db25maWcsIFZpc2liaWxpdHlNb2RlIH0gZnJvbSAnQGdyYWZhbmEvc2NoZW1hJztcbmltcG9ydCB7IEhlYXRtYXBDZWxsTGF5b3V0LCBIZWF0bWFwQ2FsY3VsYXRpb25PcHRpb25zIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3RyYW5zZm9ybWVycy9jYWxjdWxhdGVIZWF0bWFwL21vZGVscy5nZW4nO1xuXG5leHBvcnQgY29uc3QgbW9kZWxWZXJzaW9uID0gT2JqZWN0LmZyZWV6ZShbMSwgMF0pO1xuXG5leHBvcnQgZW51bSBIZWF0bWFwQ29sb3JNb2RlIHtcbiAgT3BhY2l0eSA9ICdvcGFjaXR5JyxcbiAgU2NoZW1lID0gJ3NjaGVtZScsXG59XG5cbmV4cG9ydCBlbnVtIEhlYXRtYXBDb2xvclNjYWxlIHtcbiAgTGluZWFyID0gJ2xpbmVhcicsXG4gIEV4cG9uZW50aWFsID0gJ2V4cG9uZW50aWFsJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWF0bWFwQ29sb3JPcHRpb25zIHtcbiAgbW9kZTogSGVhdG1hcENvbG9yTW9kZTtcbiAgc2NoZW1lOiBzdHJpbmc7IC8vIHdoZW4gaW4gc2NoZW1lIG1vZGUgLS0gdGhlIGQzIHNjaGVtZSBuYW1lXG4gIGZpbGw6IHN0cmluZzsgLy8gd2hlbiBvcGFjaXR5IG1vZGUsIHRoZSB0YXJnZXQgY29sb3JcbiAgc2NhbGU6IEhlYXRtYXBDb2xvclNjYWxlOyAvLyBmb3Igb3BhY2l0eSBtb2RlXG4gIGV4cG9uZW50OiBudW1iZXI7IC8vIHdoZW4gc2NhbGU9PSBzcXJ0XG4gIHN0ZXBzOiBudW1iZXI7IC8vIDItMTI4XG5cbiAgLy8gQ2xhbXAgdGhlIGNvbG9ycyB0byB0aGUgdmFsdWUgcmFuZ2VcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFlBeGlzQ29uZmlnIGV4dGVuZHMgQXhpc0NvbmZpZyB7XG4gIHVuaXQ/OiBzdHJpbmc7XG4gIHJldmVyc2U/OiBib29sZWFuOyBcbiAgZGVjaW1hbHM/OiBudW1iZXI7XG4gIC8vIE9ubHkgdXNlZCB3aGVuIHRoZSBheGlzIGlzIG5vdCBvcmRpbmFsXG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENlbGxWYWx1ZXMge1xuICB1bml0Pzogc3RyaW5nO1xuICBkZWNpbWFscz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJWYWx1ZVJhbmdlIHtcbiAgbGU/OiBudW1iZXI7XG4gIGdlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlYXRtYXBUb29sdGlwIHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgeUhpc3RvZ3JhbT86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEhlYXRtYXBMZWdlbmQge1xuICBzaG93OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4ZW1wbGFyQ29uZmlnIHtcbiAgY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3dzSGVhdG1hcE9wdGlvbnMge1xuICB2YWx1ZT86IHN0cmluZzsgLy8gdmFsdWUgZmllbGQgbmFtZVxuICBsYXlvdXQ/OiBIZWF0bWFwQ2VsbExheW91dDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYW5lbE9wdGlvbnMge1xuICBjYWxjdWxhdGU/OiBib29sZWFuO1xuICBjYWxjdWxhdGlvbj86IEhlYXRtYXBDYWxjdWxhdGlvbk9wdGlvbnM7XG5cbiAgY29sb3I6IEhlYXRtYXBDb2xvck9wdGlvbnM7XG4gIGZpbHRlclZhbHVlcz86IEZpbHRlclZhbHVlUmFuZ2U7IC8vIHdhcyBoaWRlWmVyb0J1Y2tldHNcbiAgcm93c0ZyYW1lPzogUm93c0hlYXRtYXBPcHRpb25zO1xuICBzaG93VmFsdWU6IFZpc2liaWxpdHlNb2RlO1xuXG4gIGNlbGxHYXA/OiBudW1iZXI7IC8vIHdhcyBjYXJkUGFkZGluZ1xuICBjZWxsUmFkaXVzPzogbnVtYmVyOyAvLyB3YXMgY2FyZFJhZGl1cyAobm90IHVzZWQsIGJ1dCBtaWdyYXRlZCBmcm9tIGFuZ3VsYXIpXG4gIGNlbGxWYWx1ZXM/OiBDZWxsVmFsdWVzO1xuICBcbiAgeUF4aXM6IFlBeGlzQ29uZmlnO1xuICBcbiAgbGVnZW5kOiBIZWF0bWFwTGVnZW5kO1xuXG4gIHRvb2x0aXA6IEhlYXRtYXBUb29sdGlwO1xuICBleGVtcGxhcnM6IEV4ZW1wbGFyQ29uZmlnO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFBhbmVsT3B0aW9uczogUGFuZWxPcHRpb25zID0ge1xuICBjYWxjdWxhdGU6IGZhbHNlLFxuICBjb2xvcjoge1xuICAgIG1vZGU6IEhlYXRtYXBDb2xvck1vZGUuU2NoZW1lLFxuICAgIHNjaGVtZTogJ09yYW5nZXMnLFxuICAgIGZpbGw6ICdkYXJrLW9yYW5nZScsXG4gICAgc2NhbGU6IEhlYXRtYXBDb2xvclNjYWxlLkV4cG9uZW50aWFsLFxuICAgIGV4cG9uZW50OiAwLjUsXG4gICAgc3RlcHM6IDY0LFxuICB9LFxuICByb3dzRnJhbWU6IHtcbiAgICBsYXlvdXQ6IEhlYXRtYXBDZWxsTGF5b3V0LmF1dG8sXG4gIH0sXG4gIHlBeGlzOiB7XG4gICAgYXhpc1BsYWNlbWVudDogQXhpc1BsYWNlbWVudC5MZWZ0LFxuICB9LFxuICBjZWxsVmFsdWVzOiB7XG5cbiAgfSxcbiAgc2hvd1ZhbHVlOiBWaXNpYmlsaXR5TW9kZS5BdXRvLFxuICB0b29sdGlwOiB7XG4gICAgc2hvdzogdHJ1ZSxcbiAgICB5SGlzdG9ncmFtOiBmYWxzZSxcbiAgfSxcbiAgbGVnZW5kOiB7XG4gICAgc2hvdzogdHJ1ZSxcbiAgfSxcbiAgZXhlbXBsYXJzOiB7XG4gICAgY29sb3I6ICdyZ2JhKDI1NSwwLDI1NSwwLjcpJyxcbiAgfSxcbiAgZmlsdGVyVmFsdWVzOiB7XG4gICAgbGU6IDFlLTksXG4gIH0sXG4gIGNlbGxHYXA6IDEsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhbmVsRmllbGRDb25maWcgZXh0ZW5kcyBIaWRlYWJsZUZpZWxkQ29uZmlnIHtcbiAgc2NhbGVEaXN0cmlidXRpb24/OiBTY2FsZURpc3RyaWJ1dGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQYW5lbEZpZWxkQ29uZmlnOiBQYW5lbEZpZWxkQ29uZmlnID0ge307XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBGaWVsZENvbmZpZ1Byb3BlcnR5LCBGaWVsZFR5cGUsIGlkZW50aXR5T3ZlcnJpZGVQcm9jZXNzb3IsIFBhbmVsRGF0YSwgUGFuZWxQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQXhpc1BsYWNlbWVudCwgR3JhcGhGaWVsZENvbmZpZywgU2NhbGVEaXN0cmlidXRpb24sIFNjYWxlRGlzdHJpYnV0aW9uQ29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvc2NoZW1hJztcbmltcG9ydCB7IGFkZEhpZGVGcm9tLCBTY2FsZURpc3RyaWJ1dGlvbkVkaXRvciB9IGZyb20gJ0BncmFmYW5hL3VpL3NyYy9vcHRpb25zL2J1aWxkZXInO1xuaW1wb3J0IHsgQ29sb3JTY2FsZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQ29sb3JTY2FsZS9Db2xvclNjYWxlJztcbmltcG9ydCB7IGFkZEhlYXRtYXBDYWxjdWxhdGlvbk9wdGlvbnMgfSBmcm9tICdhcHAvZmVhdHVyZXMvdHJhbnNmb3JtZXJzL2NhbGN1bGF0ZUhlYXRtYXAvZWRpdG9yL2hlbHBlcic7XG5pbXBvcnQgeyByZWFkSGVhdG1hcFJvd3NDdXN0b21NZXRhIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3RyYW5zZm9ybWVycy9jYWxjdWxhdGVIZWF0bWFwL2hlYXRtYXAnO1xuaW1wb3J0IHsgSGVhdG1hcENlbGxMYXlvdXQgfSBmcm9tICdhcHAvZmVhdHVyZXMvdHJhbnNmb3JtZXJzL2NhbGN1bGF0ZUhlYXRtYXAvbW9kZWxzLmdlbic7XG5cbmltcG9ydCB7IEhlYXRtYXBQYW5lbCB9IGZyb20gJy4vSGVhdG1hcFBhbmVsJztcbmltcG9ydCB7IHByZXBhcmVIZWF0bWFwRGF0YSB9IGZyb20gJy4vZmllbGRzJztcbmltcG9ydCB7IGhlYXRtYXBDaGFuZ2VkSGFuZGxlciwgaGVhdG1hcE1pZ3JhdGlvbkhhbmRsZXIgfSBmcm9tICcuL21pZ3JhdGlvbnMnO1xuaW1wb3J0IHsgUGFuZWxPcHRpb25zLCBkZWZhdWx0UGFuZWxPcHRpb25zLCBIZWF0bWFwQ29sb3JNb2RlLCBIZWF0bWFwQ29sb3JTY2FsZSB9IGZyb20gJy4vbW9kZWxzLmdlbic7XG5pbXBvcnQgeyBjb2xvclNjaGVtZXMsIHF1YW50aXplU2NoZW1lIH0gZnJvbSAnLi9wYWxldHRlcyc7XG5pbXBvcnQgeyBIZWF0bWFwU3VnZ2VzdGlvbnNTdXBwbGllciB9IGZyb20gJy4vc3VnZ2VzdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IFBhbmVsUGx1Z2luPFBhbmVsT3B0aW9ucywgR3JhcGhGaWVsZENvbmZpZz4oSGVhdG1hcFBhbmVsKVxuICAudXNlRmllbGRDb25maWcoe1xuICAgIGRpc2FibGVTdGFuZGFyZE9wdGlvbnM6IE9iamVjdC52YWx1ZXMoRmllbGRDb25maWdQcm9wZXJ0eSkuZmlsdGVyKCh2KSA9PiB2ICE9PSBGaWVsZENvbmZpZ1Byb3BlcnR5LkxpbmtzKSxcbiAgICB1c2VDdXN0b21Db25maWc6IChidWlsZGVyKSA9PiB7XG4gICAgICBidWlsZGVyLmFkZEN1c3RvbUVkaXRvcjx2b2lkLCBTY2FsZURpc3RyaWJ1dGlvbkNvbmZpZz4oe1xuICAgICAgICBpZDogJ3NjYWxlRGlzdHJpYnV0aW9uJyxcbiAgICAgICAgcGF0aDogJ3NjYWxlRGlzdHJpYnV0aW9uJyxcbiAgICAgICAgbmFtZTogJ1kgYXhpcyBzY2FsZScsXG4gICAgICAgIGNhdGVnb3J5OiBbJ0hlYXRtYXAnXSxcbiAgICAgICAgZWRpdG9yOiBTY2FsZURpc3RyaWJ1dGlvbkVkaXRvciBhcyBhbnksXG4gICAgICAgIG92ZXJyaWRlOiBTY2FsZURpc3RyaWJ1dGlvbkVkaXRvciBhcyBhbnksXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogeyB0eXBlOiBTY2FsZURpc3RyaWJ1dGlvbi5MaW5lYXIgfSxcbiAgICAgICAgc2hvdWxkQXBwbHk6IChmKSA9PiBmLnR5cGUgPT09IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICAgIHByb2Nlc3M6IGlkZW50aXR5T3ZlcnJpZGVQcm9jZXNzb3IsXG4gICAgICAgIGhpZGVGcm9tRGVmYXVsdHM6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGFkZEhpZGVGcm9tKGJ1aWxkZXIpOyAvLyBmb3IgdG9vbHRpcCBldGNcbiAgICB9LFxuICB9KVxuICAuc2V0UGFuZWxDaGFuZ2VIYW5kbGVyKGhlYXRtYXBDaGFuZ2VkSGFuZGxlcilcbiAgLnNldE1pZ3JhdGlvbkhhbmRsZXIoaGVhdG1hcE1pZ3JhdGlvbkhhbmRsZXIpXG4gIC5zZXRQYW5lbE9wdGlvbnMoKGJ1aWxkZXIsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBvcHRzID0gY29udGV4dC5vcHRpb25zID8/IGRlZmF1bHRQYW5lbE9wdGlvbnM7XG5cbiAgICBsZXQgaXNPcmRpbmFsWSA9IGZhbHNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHYgPSBwcmVwYXJlSGVhdG1hcERhdGEoeyBzZXJpZXM6IGNvbnRleHQuZGF0YSB9IGFzIFBhbmVsRGF0YSwgb3B0cywgY29uZmlnLnRoZW1lMik7XG4gICAgICBpc09yZGluYWxZID0gcmVhZEhlYXRtYXBSb3dzQ3VzdG9tTWV0YSh2LmhlYXRtYXApLnlPcmRpbmFsRGlzcGxheSAhPSBudWxsO1xuICAgIH0gY2F0Y2gge31cblxuICAgIGxldCBjYXRlZ29yeSA9IFsnSGVhdG1hcCddO1xuXG4gICAgYnVpbGRlci5hZGRSYWRpbyh7XG4gICAgICBwYXRoOiAnY2FsY3VsYXRlJyxcbiAgICAgIG5hbWU6ICdDYWxjdWxhdGUgZnJvbSBkYXRhJyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBhbmVsT3B0aW9ucy5jYWxjdWxhdGUsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IGxhYmVsOiAnWWVzJywgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnTm8nLCB2YWx1ZTogZmFsc2UgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAob3B0cy5jYWxjdWxhdGUpIHtcbiAgICAgIGFkZEhlYXRtYXBDYWxjdWxhdGlvbk9wdGlvbnMoJ2NhbGN1bGF0aW9uLicsIGJ1aWxkZXIsIG9wdHMuY2FsY3VsYXRpb24sIGNhdGVnb3J5KTtcbiAgICB9XG5cbiAgICBjYXRlZ29yeSA9IFsnWSBBeGlzJ107XG5cbiAgICBidWlsZGVyXG4gICAgICAuYWRkUmFkaW8oe1xuICAgICAgICBwYXRoOiAneUF4aXMuYXhpc1BsYWNlbWVudCcsXG4gICAgICAgIG5hbWU6ICdQbGFjZW1lbnQnLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRQYW5lbE9wdGlvbnMueUF4aXMuYXhpc1BsYWNlbWVudCA/PyBBeGlzUGxhY2VtZW50LkxlZnQsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6ICdMZWZ0JywgdmFsdWU6IEF4aXNQbGFjZW1lbnQuTGVmdCB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ1JpZ2h0JywgdmFsdWU6IEF4aXNQbGFjZW1lbnQuUmlnaHQgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdIaWRkZW4nLCB2YWx1ZTogQXhpc1BsYWNlbWVudC5IaWRkZW4gfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5hZGRVbml0UGlja2VyKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHBhdGg6ICd5QXhpcy51bml0JyxcbiAgICAgICAgbmFtZTogJ1VuaXQnLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBpc0NsZWFyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuYWRkTnVtYmVySW5wdXQoe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgcGF0aDogJ3lBeGlzLmRlY2ltYWxzJyxcbiAgICAgICAgbmFtZTogJ0RlY2ltYWxzJyxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0F1dG8nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICBpZiAoIWlzT3JkaW5hbFkpIHtcbiAgICAgIC8vIGlmIHVuZGVmaW5lZCwgdGhlbiBzaG93IHRoZSBtaW4rbWF4XG4gICAgICBidWlsZGVyXG4gICAgICAgIC5hZGROdW1iZXJJbnB1dCh7XG4gICAgICAgICAgcGF0aDogJ3lBeGlzLm1pbicsXG4gICAgICAgICAgbmFtZTogJ01pbiB2YWx1ZScsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQXV0bycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZFRleHRJbnB1dCh7XG4gICAgICAgICAgcGF0aDogJ3lBeGlzLm1heCcsXG4gICAgICAgICAgbmFtZTogJ01heCB2YWx1ZScsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQXV0bycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYnVpbGRlclxuICAgICAgLmFkZE51bWJlcklucHV0KHtcbiAgICAgICAgcGF0aDogJ3lBeGlzLmF4aXNXaWR0aCcsXG4gICAgICAgIG5hbWU6ICdBeGlzIHdpZHRoJyxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0UGFuZWxPcHRpb25zLnlBeGlzLmF4aXNXaWR0aCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0F1dG8nLFxuICAgICAgICAgIG1pbjogNSwgLy8gc21hbGxlciBzaG91bGQganVzdCBiZSBoaWRkZW5cbiAgICAgICAgfSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICB9KVxuICAgICAgLmFkZFRleHRJbnB1dCh7XG4gICAgICAgIHBhdGg6ICd5QXhpcy5heGlzTGFiZWwnLFxuICAgICAgICBuYW1lOiAnQXhpcyBsYWJlbCcsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBhbmVsT3B0aW9ucy55QXhpcy5heGlzTGFiZWwsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdBdXRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICB9KTtcblxuICAgIGlmICghb3B0cy5jYWxjdWxhdGUpIHtcbiAgICAgIGJ1aWxkZXIuYWRkUmFkaW8oe1xuICAgICAgICBwYXRoOiAncm93c0ZyYW1lLmxheW91dCcsXG4gICAgICAgIG5hbWU6ICdUaWNrIGFsaWdubWVudCcsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBhbmVsT3B0aW9ucy5yb3dzRnJhbWU/LmxheW91dCA/PyBIZWF0bWFwQ2VsbExheW91dC5hdXRvLFxuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiAnQXV0bycsIHZhbHVlOiBIZWF0bWFwQ2VsbExheW91dC5hdXRvIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnVG9wIChMRSknLCB2YWx1ZTogSGVhdG1hcENlbGxMYXlvdXQubGUgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdNaWRkbGUnLCB2YWx1ZTogSGVhdG1hcENlbGxMYXlvdXQudW5rbm93biB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0JvdHRvbSAoR0UpJywgdmFsdWU6IEhlYXRtYXBDZWxsTGF5b3V0LmdlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBidWlsZGVyLmFkZEJvb2xlYW5Td2l0Y2goe1xuICAgICAgcGF0aDogJ3lBeGlzLnJldmVyc2UnLFxuICAgICAgbmFtZTogJ1JldmVyc2UnLFxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0UGFuZWxPcHRpb25zLnlBeGlzLnJldmVyc2UgPT09IHRydWUsXG4gICAgICBjYXRlZ29yeSxcbiAgICB9KTtcblxuICAgIGNhdGVnb3J5ID0gWydDb2xvcnMnXTtcblxuICAgIGJ1aWxkZXIuYWRkUmFkaW8oe1xuICAgICAgcGF0aDogYGNvbG9yLm1vZGVgLFxuICAgICAgbmFtZTogJ01vZGUnLFxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0UGFuZWxPcHRpb25zLmNvbG9yLm1vZGUsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IGxhYmVsOiAnU2NoZW1lJywgdmFsdWU6IEhlYXRtYXBDb2xvck1vZGUuU2NoZW1lIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ09wYWNpdHknLCB2YWx1ZTogSGVhdG1hcENvbG9yTW9kZS5PcGFjaXR5IH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgYnVpbGRlci5hZGRDb2xvclBpY2tlcih7XG4gICAgICBwYXRoOiBgY29sb3IuZmlsbGAsXG4gICAgICBuYW1lOiAnQ29sb3InLFxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0UGFuZWxPcHRpb25zLmNvbG9yLmZpbGwsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIHNob3dJZjogKG9wdHMpID0+IG9wdHMuY29sb3IubW9kZSA9PT0gSGVhdG1hcENvbG9yTW9kZS5PcGFjaXR5LFxuICAgIH0pO1xuXG4gICAgYnVpbGRlci5hZGRSYWRpbyh7XG4gICAgICBwYXRoOiBgY29sb3Iuc2NhbGVgLFxuICAgICAgbmFtZTogJ1NjYWxlJyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBhbmVsT3B0aW9ucy5jb2xvci5zY2FsZSxcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsgbGFiZWw6ICdFeHBvbmVudGlhbCcsIHZhbHVlOiBIZWF0bWFwQ29sb3JTY2FsZS5FeHBvbmVudGlhbCB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdMaW5lYXInLCB2YWx1ZTogSGVhdG1hcENvbG9yU2NhbGUuTGluZWFyIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgc2hvd0lmOiAob3B0cykgPT4gb3B0cy5jb2xvci5tb2RlID09PSBIZWF0bWFwQ29sb3JNb2RlLk9wYWNpdHksXG4gICAgfSk7XG5cbiAgICBidWlsZGVyLmFkZFNsaWRlcklucHV0KHtcbiAgICAgIHBhdGg6ICdjb2xvci5leHBvbmVudCcsXG4gICAgICBuYW1lOiAnRXhwb25lbnQnLFxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0UGFuZWxPcHRpb25zLmNvbG9yLmV4cG9uZW50LFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBtaW46IDAuMSwgLy8gMSBmb3Igb24vb2ZmP1xuICAgICAgICBtYXg6IDIsXG4gICAgICAgIHN0ZXA6IDAuMSxcbiAgICAgIH0sXG4gICAgICBzaG93SWY6IChvcHRzKSA9PlxuICAgICAgICBvcHRzLmNvbG9yLm1vZGUgPT09IEhlYXRtYXBDb2xvck1vZGUuT3BhY2l0eSAmJiBvcHRzLmNvbG9yLnNjYWxlID09PSBIZWF0bWFwQ29sb3JTY2FsZS5FeHBvbmVudGlhbCxcbiAgICB9KTtcblxuICAgIGJ1aWxkZXIuYWRkU2VsZWN0KHtcbiAgICAgIHBhdGg6IGBjb2xvci5zY2hlbWVgLFxuICAgICAgbmFtZTogJ1NjaGVtZScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRQYW5lbE9wdGlvbnMuY29sb3Iuc2NoZW1lLFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBvcHRpb25zOiBjb2xvclNjaGVtZXMubWFwKChzY2hlbWUpID0+ICh7XG4gICAgICAgICAgdmFsdWU6IHNjaGVtZS5uYW1lLFxuICAgICAgICAgIGxhYmVsOiBzY2hlbWUubmFtZSxcbiAgICAgICAgICAvL2Rlc2NyaXB0aW9uOiAnU2V0IGEgZ2VvbWV0cnkgZmllbGQgYmFzZWQgb24gdGhlIHJlc3VsdHMgb2Ygb3RoZXIgZmllbGRzJyxcbiAgICAgICAgfSkpLFxuICAgICAgfSxcbiAgICAgIHNob3dJZjogKG9wdHMpID0+IG9wdHMuY29sb3IubW9kZSAhPT0gSGVhdG1hcENvbG9yTW9kZS5PcGFjaXR5LFxuICAgIH0pO1xuXG4gICAgYnVpbGRlclxuICAgICAgLmFkZFNsaWRlcklucHV0KHtcbiAgICAgICAgcGF0aDogJ2NvbG9yLnN0ZXBzJyxcbiAgICAgICAgbmFtZTogJ1N0ZXBzJyxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0UGFuZWxPcHRpb25zLmNvbG9yLnN0ZXBzLFxuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgaWQ6ICdfX3NjYWxlX18nLFxuICAgICAgICBwYXRoOiBgX19zY2FsZV9fYCxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBlZGl0b3I6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBwYWxldHRlID0gcXVhbnRpemVTY2hlbWUob3B0cy5jb2xvciwgY29uZmlnLnRoZW1lMik7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxDb2xvclNjYWxlIGNvbG9yUGFsZXR0ZT17cGFsZXR0ZX0gbWluPXsxfSBtYXg9ezEwMH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGROdW1iZXJJbnB1dCh7XG4gICAgICAgIHBhdGg6ICdjb2xvci5taW4nLFxuICAgICAgICBuYW1lOiAnU3RhcnQgY29sb3Igc2NhbGUgZnJvbSB2YWx1ZScsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBhbmVsT3B0aW9ucy5jb2xvci5taW4sXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdBdXRvIChtaW4pJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICB9KVxuICAgICAgLmFkZE51bWJlcklucHV0KHtcbiAgICAgICAgcGF0aDogJ2NvbG9yLm1heCcsXG4gICAgICAgIG5hbWU6ICdFbmQgY29sb3Igc2NhbGUgYXQgdmFsdWUnLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRQYW5lbE9wdGlvbnMuY29sb3IubWF4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQXV0byAobWF4KScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgfSk7XG5cbiAgICBjYXRlZ29yeSA9IFsnQ2VsbCBkaXNwbGF5J107XG5cbiAgICBpZiAoIW9wdHMuY2FsY3VsYXRlKSB7XG4gICAgICBidWlsZGVyLmFkZFRleHRJbnB1dCh7XG4gICAgICAgIHBhdGg6ICdyb3dzRnJhbWUudmFsdWUnLFxuICAgICAgICBuYW1lOiAnVmFsdWUgbmFtZScsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBhbmVsT3B0aW9ucy5yb3dzRnJhbWU/LnZhbHVlLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnVmFsdWUnLFxuICAgICAgICB9LFxuICAgICAgICBjYXRlZ29yeSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGRVbml0UGlja2VyKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHBhdGg6ICdjZWxsVmFsdWVzLnVuaXQnLFxuICAgICAgICBuYW1lOiAnVW5pdCcsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGlzQ2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5hZGROdW1iZXJJbnB1dCh7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBwYXRoOiAnY2VsbFZhbHVlcy5kZWNpbWFscycsXG4gICAgICAgIG5hbWU6ICdEZWNpbWFscycsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdBdXRvJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgYnVpbGRlclxuICAgICAgLy8gLmFkZFJhZGlvKHtcbiAgICAgIC8vICAgcGF0aDogJ3Nob3dWYWx1ZScsXG4gICAgICAvLyAgIG5hbWU6ICdTaG93IHZhbHVlcycsXG4gICAgICAvLyAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBhbmVsT3B0aW9ucy5zaG93VmFsdWUsXG4gICAgICAvLyAgIGNhdGVnb3J5LFxuICAgICAgLy8gICBzZXR0aW5nczoge1xuICAgICAgLy8gICAgIG9wdGlvbnM6IFtcbiAgICAgIC8vICAgICAgIHsgdmFsdWU6IFZpc2liaWxpdHlNb2RlLkF1dG8sIGxhYmVsOiAnQXV0bycgfSxcbiAgICAgIC8vICAgICAgIHsgdmFsdWU6IFZpc2liaWxpdHlNb2RlLkFsd2F5cywgbGFiZWw6ICdBbHdheXMnIH0sXG4gICAgICAvLyAgICAgICB7IHZhbHVlOiBWaXNpYmlsaXR5TW9kZS5OZXZlciwgbGFiZWw6ICdOZXZlcicgfSxcbiAgICAgIC8vICAgICBdLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gfSlcbiAgICAgIC5hZGRTbGlkZXJJbnB1dCh7XG4gICAgICAgIG5hbWU6ICdDZWxsIGdhcCcsXG4gICAgICAgIHBhdGg6ICdjZWxsR2FwJyxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0UGFuZWxPcHRpb25zLmNlbGxHYXAsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDI1LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5hZGROdW1iZXJJbnB1dCh7XG4gICAgICAgIHBhdGg6ICdmaWx0ZXJWYWx1ZXMubGUnLFxuICAgICAgICBuYW1lOiAnSGlkZSBjZWxscyB3aXRoIHZhbHVlcyA8PScsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBhbmVsT3B0aW9ucy5maWx0ZXJWYWx1ZXM/LmxlLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTm9uZScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgfSlcbiAgICAgIC5hZGROdW1iZXJJbnB1dCh7XG4gICAgICAgIHBhdGg6ICdmaWx0ZXJWYWx1ZXMuZ2UnLFxuICAgICAgICBuYW1lOiAnSGlkZSBjZWxscyB3aXRoIHZhbHVlcyA+PScsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBhbmVsT3B0aW9ucy5maWx0ZXJWYWx1ZXM/LmdlLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTm9uZScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgfSk7XG4gICAgLy8gLmFkZFNsaWRlcklucHV0KHtcbiAgICAvLyAgIG5hbWU6ICdDZWxsIHJhZGl1cycsXG4gICAgLy8gICBwYXRoOiAnY2VsbFJhZGl1cycsXG4gICAgLy8gICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRQYW5lbE9wdGlvbnMuY2VsbFJhZGl1cyxcbiAgICAvLyAgIGNhdGVnb3J5LFxuICAgIC8vICAgc2V0dGluZ3M6IHtcbiAgICAvLyAgICAgbWluOiAwLFxuICAgIC8vICAgICBtYXg6IDEwMCxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSlcblxuICAgIGNhdGVnb3J5ID0gWydUb29sdGlwJ107XG5cbiAgICBidWlsZGVyLmFkZEJvb2xlYW5Td2l0Y2goe1xuICAgICAgcGF0aDogJ3Rvb2x0aXAuc2hvdycsXG4gICAgICBuYW1lOiAnU2hvdyB0b29sdGlwJyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBhbmVsT3B0aW9ucy50b29sdGlwLnNob3csXG4gICAgICBjYXRlZ29yeSxcbiAgICB9KTtcblxuICAgIGJ1aWxkZXIuYWRkQm9vbGVhblN3aXRjaCh7XG4gICAgICBwYXRoOiAndG9vbHRpcC55SGlzdG9ncmFtJyxcbiAgICAgIG5hbWU6ICdTaG93IGhpc3RvZ3JhbSAoWSBheGlzKScsXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRQYW5lbE9wdGlvbnMudG9vbHRpcC55SGlzdG9ncmFtLFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBzaG93SWY6IChvcHRzKSA9PiBvcHRzLnRvb2x0aXAuc2hvdyxcbiAgICB9KTtcblxuICAgIGNhdGVnb3J5ID0gWydMZWdlbmQnXTtcbiAgICBidWlsZGVyLmFkZEJvb2xlYW5Td2l0Y2goe1xuICAgICAgcGF0aDogJ2xlZ2VuZC5zaG93JyxcbiAgICAgIG5hbWU6ICdTaG93IGxlZ2VuZCcsXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRQYW5lbE9wdGlvbnMubGVnZW5kLnNob3csXG4gICAgICBjYXRlZ29yeSxcbiAgICB9KTtcblxuICAgIGNhdGVnb3J5ID0gWydFeGVtcGxhcnMnXTtcbiAgICBidWlsZGVyLmFkZENvbG9yUGlja2VyKHtcbiAgICAgIHBhdGg6ICdleGVtcGxhcnMuY29sb3InLFxuICAgICAgbmFtZTogJ0NvbG9yJyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBhbmVsT3B0aW9ucy5leGVtcGxhcnMuY29sb3IsXG4gICAgICBjYXRlZ29yeSxcbiAgICB9KTtcbiAgfSlcbiAgLnNldFN1Z2dlc3Rpb25zU3VwcGxpZXIobmV3IEhlYXRtYXBTdWdnZXN0aW9uc1N1cHBsaWVyKCkpO1xuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgZDNTY2FsZUNocm9tYXRpYyBmcm9tICdkMy1zY2FsZS1jaHJvbWF0aWMnO1xuaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBIZWF0bWFwQ29sb3JPcHRpb25zLCBkZWZhdWx0UGFuZWxPcHRpb25zLCBIZWF0bWFwQ29sb3JNb2RlLCBIZWF0bWFwQ29sb3JTY2FsZSB9IGZyb20gJy4vbW9kZWxzLmdlbic7XG5cbi8vIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvY29sb3Itc2NoZW1lcz9jb2xsZWN0aW9uPUBkMy9kMy1zY2FsZS1jaHJvbWF0aWNcblxuLy8gdGhlIHByZXZpb3VzIGhlYXRtYXAgcGFuZWwgdXNlZCBkMyBkZXBzIGFuZCBzb21lIGNvZGUgdG8gaW50ZXJwb2xhdGUgdG8gc3RhdGljIDktY29sb3IgcGFsZXR0ZXMuIGhlcmUgd2UganVzdCBoYXJkLWNvZGUgdGhlbSBmb3IgY2xhcml0eS5cbi8vIGlmIHRoZSBuZWVkIGFyaXNlcyBmb3IgY29uZmlndXJhYmxlLXNpemVkIHBhbGV0dGVzLCB3ZSBjYW4gYnJpbmcgYmFjayB0aGUgZGVwcyAmIHZhcmlhYmxlIGludGVycG9sYXRpb24gKHNlZSBzaW1wbGlmaWVkIGNvZGUgYXQgZW5kKVxuXG4vLyBTY2hlbWVzIGZyb20gZDMtc2NhbGUtY2hyb21hdGljXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZDMvZDMtc2NhbGUtY2hyb21hdGljXG5leHBvcnQgY29uc3QgY29sb3JTY2hlbWVzID0gW1xuICAvLyBEaXZlcmdpbmdcbiAgeyBuYW1lOiAnQnJCRycsIGludmVydDogJ2Fsd2F5cycgfSxcbiAgeyBuYW1lOiAnUGlZRycsIGludmVydDogJ2Fsd2F5cycgfSxcbiAgeyBuYW1lOiAnUFJHbicsIGludmVydDogJ2Fsd2F5cycgfSxcbiAgeyBuYW1lOiAnUHVPcicsIGludmVydDogJ2Fsd2F5cycgfSxcbiAgeyBuYW1lOiAnUmRCdScsIGludmVydDogJ2Fsd2F5cycgfSxcbiAgeyBuYW1lOiAnUmRHeScsIGludmVydDogJ2Fsd2F5cycgfSxcbiAgeyBuYW1lOiAnUmRZbEJ1JywgaW52ZXJ0OiAnYWx3YXlzJyB9LFxuICB7IG5hbWU6ICdSZFlsR24nLCBpbnZlcnQ6ICdhbHdheXMnIH0sXG4gIHsgbmFtZTogJ1NwZWN0cmFsJywgaW52ZXJ0OiAnYWx3YXlzJyB9LFxuXG4gIC8vIFNlcXVlbnRpYWwgKFNpbmdsZSBIdWUpXG4gIHsgbmFtZTogJ0JsdWVzJywgaW52ZXJ0OiAnZGFyaycgfSxcbiAgeyBuYW1lOiAnR3JlZW5zJywgaW52ZXJ0OiAnZGFyaycgfSxcbiAgeyBuYW1lOiAnR3JleXMnLCBpbnZlcnQ6ICdkYXJrJyB9LFxuICB7IG5hbWU6ICdPcmFuZ2VzJywgaW52ZXJ0OiAnZGFyaycgfSxcbiAgeyBuYW1lOiAnUHVycGxlcycsIGludmVydDogJ2RhcmsnIH0sXG4gIHsgbmFtZTogJ1JlZHMnLCBpbnZlcnQ6ICdkYXJrJyB9LFxuXG4gIC8vIFNlcXVlbnRpYWwgKE11bHRpLUh1ZSlcbiAgeyBuYW1lOiAnVHVyYm8nLCBpbnZlcnQ6ICdsaWdodCcgfSxcbiAgeyBuYW1lOiAnQ2l2aWRpcycsIGludmVydDogJ2xpZ2h0JyB9LFxuICB7IG5hbWU6ICdWaXJpZGlzJywgaW52ZXJ0OiAnbGlnaHQnIH0sXG4gIHsgbmFtZTogJ01hZ21hJywgaW52ZXJ0OiAnbGlnaHQnIH0sXG4gIHsgbmFtZTogJ0luZmVybm8nLCBpbnZlcnQ6ICdsaWdodCcgfSxcbiAgeyBuYW1lOiAnUGxhc21hJywgaW52ZXJ0OiAnbGlnaHQnIH0sXG4gIHsgbmFtZTogJ1dhcm0nLCBpbnZlcnQ6ICdsaWdodCcgfSxcbiAgeyBuYW1lOiAnQ29vbCcsIGludmVydDogJ2xpZ2h0JyB9LFxuICB7IG5hbWU6ICdDdWJlaGVsaXgnLCBpbnZlcnQ6ICdsaWdodCcsIG5hbWUyOiAnQ3ViZWhlbGl4RGVmYXVsdCcgfSxcbiAgeyBuYW1lOiAnQnVHbicsIGludmVydDogJ2RhcmsnIH0sXG4gIHsgbmFtZTogJ0J1UHUnLCBpbnZlcnQ6ICdkYXJrJyB9LFxuICB7IG5hbWU6ICdHbkJ1JywgaW52ZXJ0OiAnZGFyaycgfSxcbiAgeyBuYW1lOiAnT3JSZCcsIGludmVydDogJ2RhcmsnIH0sXG4gIHsgbmFtZTogJ1B1QnVHbicsIGludmVydDogJ2RhcmsnIH0sXG4gIHsgbmFtZTogJ1B1QnUnLCBpbnZlcnQ6ICdkYXJrJyB9LFxuICB7IG5hbWU6ICdQdVJkJywgaW52ZXJ0OiAnZGFyaycgfSxcbiAgeyBuYW1lOiAnUmRQdScsIGludmVydDogJ2RhcmsnIH0sXG4gIHsgbmFtZTogJ1lsR25CdScsIGludmVydDogJ2RhcmsnIH0sXG4gIHsgbmFtZTogJ1lsR24nLCBpbnZlcnQ6ICdkYXJrJyB9LFxuICB7IG5hbWU6ICdZbE9yQnInLCBpbnZlcnQ6ICdkYXJrJyB9LFxuICB7IG5hbWU6ICdZbE9yUmQnLCBpbnZlcnQ6ICdkYXJrJyB9LFxuXG4gIC8vIEN5Y2xpY2FsXG4gIHsgbmFtZTogJ1JhaW5ib3cnLCBpbnZlcnQ6ICdhbHdheXMnIH0sXG4gIHsgbmFtZTogJ1NpbmVib3cnLCBpbnZlcnQ6ICdhbHdheXMnIH0sXG5dO1xuXG50eXBlIEludGVycG9sYXRvciA9ICh0OiBudW1iZXIpID0+IHN0cmluZztcblxuY29uc3QgREVGQVVMVF9TQ0hFTUUgPSBjb2xvclNjaGVtZXMuZmluZCgoc2NoZW1lKSA9PiBzY2hlbWUubmFtZSA9PT0gJ1NwZWN0cmFsJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWFudGl6ZVNjaGVtZShvcHRzOiBIZWF0bWFwQ29sb3JPcHRpb25zLCB0aGVtZTogR3JhZmFuYVRoZW1lMik6IHN0cmluZ1tdIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHsgLi4uZGVmYXVsdFBhbmVsT3B0aW9ucy5jb2xvciwgLi4ub3B0cyB9O1xuICBjb25zdCBwYWxldHRlID0gW107XG4gIGNvbnN0IHN0ZXBzID0gKG9wdGlvbnMuc3RlcHMgPz8gMTI4KSAtIDE7XG5cbiAgaWYgKG9wdHMubW9kZSA9PT0gSGVhdG1hcENvbG9yTW9kZS5PcGFjaXR5KSB7XG4gICAgY29uc3QgZmlsbCA9IHRpbnljb2xvcih0aGVtZS52aXN1YWxpemF0aW9uLmdldENvbG9yQnlOYW1lKG9wdHMuZmlsbCkpLnRvUGVyY2VudGFnZVJnYigpO1xuXG4gICAgY29uc3Qgc2NhbGUgPVxuICAgICAgb3B0aW9ucy5zY2FsZSA9PT0gSGVhdG1hcENvbG9yU2NhbGUuRXhwb25lbnRpYWxcbiAgICAgICAgPyBkMy5zY2FsZVBvdygpLmV4cG9uZW50KG9wdGlvbnMuZXhwb25lbnQpLmRvbWFpbihbMCwgMV0pLnJhbmdlKFswLCAxXSlcbiAgICAgICAgOiBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMV0pLnJhbmdlKFswLCAxXSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgICBmaWxsLmEgPSBzY2FsZShpIC8gc3RlcHMpO1xuICAgICAgcGFsZXR0ZS5wdXNoKHRpbnljb2xvcihmaWxsKS50b1N0cmluZygnaGV4OCcpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2NoZW1lID0gY29sb3JTY2hlbWVzLmZpbmQoKHNjaGVtZSkgPT4gc2NoZW1lLm5hbWUgPT09IG9wdGlvbnMuc2NoZW1lKSA/PyBERUZBVUxUX1NDSEVNRSE7XG4gICAgbGV0IGZuTmFtZSA9ICdpbnRlcnBvbGF0ZScgKyAoc2NoZW1lLm5hbWUyID8/IHNjaGVtZS5uYW1lKTtcbiAgICBjb25zdCBpbnRlcnBvbGF0ZTogSW50ZXJwb2xhdG9yID0gKGQzU2NhbGVDaHJvbWF0aWMgYXMgYW55KVtmbk5hbWVdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgICAgbGV0IHJnYlN0ciA9IGludGVycG9sYXRlKGkgLyBzdGVwcyk7XG4gICAgICBsZXQgcmdiID1cbiAgICAgICAgcmdiU3RyLmluZGV4T2YoJ3JnYicpID09PSAwXG4gICAgICAgICAgPyAnIycgKyBbLi4ucmdiU3RyLm1hdGNoQWxsKC9cXGQrL2cpXS5tYXAoKHYpID0+ICgrdlswXSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpXG4gICAgICAgICAgOiByZ2JTdHI7XG4gICAgICBwYWxldHRlLnB1c2gocmdiKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzY2hlbWUuaW52ZXJ0ID09PSAnYWx3YXlzJyB8fFxuICAgICAgKHNjaGVtZS5pbnZlcnQgPT09ICdkYXJrJyAmJiB0aGVtZS5pc0RhcmspIHx8XG4gICAgICAoc2NoZW1lLmludmVydCA9PT0gJ2xpZ2h0JyAmJiB0aGVtZS5pc0xpZ2h0KVxuICAgICkge1xuICAgICAgcGFsZXR0ZS5yZXZlcnNlKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhbGV0dGU7XG59XG4iLCJpbXBvcnQgeyBWaXN1YWxpemF0aW9uU3VnZ2VzdGlvbnNCdWlsZGVyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgcHJlcGFyZUhlYXRtYXBEYXRhIH0gZnJvbSAnLi9maWVsZHMnO1xuaW1wb3J0IHsgUGFuZWxPcHRpb25zLCBkZWZhdWx0UGFuZWxPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMuZ2VuJztcblxuZXhwb3J0IGNsYXNzIEhlYXRtYXBTdWdnZXN0aW9uc1N1cHBsaWVyIHtcbiAgZ2V0U3VnZ2VzdGlvbnNGb3JEYXRhKGJ1aWxkZXI6IFZpc3VhbGl6YXRpb25TdWdnZXN0aW9uc0J1aWxkZXIpIHtcbiAgICBjb25zdCB7IGRhdGFTdW1tYXJ5IH0gPSBidWlsZGVyO1xuXG4gICAgaWYgKFxuICAgICAgIWJ1aWxkZXIuZGF0YT8uc2VyaWVzIHx8XG4gICAgICAhZGF0YVN1bW1hcnkuaGFzRGF0YSB8fFxuICAgICAgZGF0YVN1bW1hcnkudGltZUZpZWxkQ291bnQgPCAxIHx8XG4gICAgICBkYXRhU3VtbWFyeS5udW1iZXJGaWVsZENvdW50IDwgMiB8fFxuICAgICAgZGF0YVN1bW1hcnkubnVtYmVyRmllbGRDb3VudCA+IDEwXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5mbyA9IHByZXBhcmVIZWF0bWFwRGF0YShidWlsZGVyLmRhdGEsIGRlZmF1bHRQYW5lbE9wdGlvbnMsIGNvbmZpZy50aGVtZTIpO1xuICAgIGlmICghaW5mbyB8fCBpbmZvLndhcm5pbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBidWlsZGVyLmdldExpc3RBcHBlbmRlcjxQYW5lbE9wdGlvbnMsIHt9Pih7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHBsdWdpbklkOiAnaGVhdG1hcCcsXG4gICAgICBvcHRpb25zOiB7fSxcbiAgICAgIGZpZWxkQ29uZmlnOiB7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgY3VzdG9tOiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcnJpZGVzOiBbXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE11dGFibGVSZWZPYmplY3QsIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1UGxvdCwgeyBDdXJzb3IgfSBmcm9tICd1cGxvdCc7XG5cbmltcG9ydCB7XG4gIERhc2hib2FyZEN1cnNvclN5bmMsXG4gIERhdGFGcmFtZVR5cGUsXG4gIERhdGFIb3ZlckNsZWFyRXZlbnQsXG4gIERhdGFIb3ZlckV2ZW50LFxuICBEYXRhSG92ZXJQYXlsb2FkLFxuICBFdmVudEJ1cyxcbiAgZm9ybWF0dGVkVmFsdWVUb1N0cmluZyxcbiAgZ2V0VmFsdWVGb3JtYXQsXG4gIEdyYWZhbmFUaGVtZTIsXG4gIGluY3JSb3VuZERuLFxuICBpbmNyUm91bmRVcCxcbiAgVGltZVJhbmdlLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEF4aXNQbGFjZW1lbnQsIFNjYWxlRGlyZWN0aW9uLCBTY2FsZURpc3RyaWJ1dGlvbiwgU2NhbGVPcmllbnRhdGlvbiB9IGZyb20gJ0BncmFmYW5hL3NjaGVtYSc7XG5pbXBvcnQgeyBVUGxvdENvbmZpZ0J1aWxkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBpc0hlYXRtYXBDZWxsc0RlbnNlLCByZWFkSGVhdG1hcFJvd3NDdXN0b21NZXRhIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3RyYW5zZm9ybWVycy9jYWxjdWxhdGVIZWF0bWFwL2hlYXRtYXAnO1xuaW1wb3J0IHsgSGVhdG1hcENlbGxMYXlvdXQgfSBmcm9tICdhcHAvZmVhdHVyZXMvdHJhbnNmb3JtZXJzL2NhbGN1bGF0ZUhlYXRtYXAvbW9kZWxzLmdlbic7XG5cbmltcG9ydCB7IHBvaW50V2l0aGluLCBRdWFkdHJlZSwgUmVjdCB9IGZyb20gJy4uL2JhcmNoYXJ0L3F1YWR0cmVlJztcblxuaW1wb3J0IHsgSGVhdG1hcERhdGEgfSBmcm9tICcuL2ZpZWxkcyc7XG5pbXBvcnQgeyBQYW5lbEZpZWxkQ29uZmlnLCBZQXhpc0NvbmZpZyB9IGZyb20gJy4vbW9kZWxzLmdlbic7XG5cbmludGVyZmFjZSBQYXRoYnVpbGRlck9wdHMge1xuICBlYWNoOiAodTogdVBsb3QsIHNlcmllc0lkeDogbnVtYmVyLCBkYXRhSWR4OiBudW1iZXIsIGxmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgd2lkOiBudW1iZXIsIGhndDogbnVtYmVyKSA9PiB2b2lkO1xuICBnYXA/OiBudW1iZXIgfCBudWxsO1xuICBoaWRlTEU/OiBudW1iZXI7XG4gIGhpZGVHRT86IG51bWJlcjtcbiAgeEFsaWduPzogLTEgfCAwIHwgMTtcbiAgeUFsaWduPzogLTEgfCAwIHwgMTtcbiAgeVNpemVEaXZpc29yPzogbnVtYmVyO1xuICBkaXNwOiB7XG4gICAgZmlsbDoge1xuICAgICAgdmFsdWVzOiAodTogdVBsb3QsIHNlcmllc0luZGV4OiBudW1iZXIpID0+IG51bWJlcltdO1xuICAgICAgaW5kZXg6IEFycmF5PENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFsnZmlsbFN0eWxlJ10+O1xuICAgIH07XG4gIH07XG59XG5cbmludGVyZmFjZSBQb2ludHNCdWlsZGVyT3B0cyB7XG4gIGVhY2g6ICh1OiB1UGxvdCwgc2VyaWVzSWR4OiBudW1iZXIsIGRhdGFJZHg6IG51bWJlciwgbGZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCB3aWQ6IG51bWJlciwgaGd0OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVhdG1hcEhvdmVyRXZlbnQge1xuICBzZXJpZXNJZHg6IG51bWJlcjtcbiAgZGF0YUlkeDogbnVtYmVyO1xuICBwYWdlWDogbnVtYmVyO1xuICBwYWdlWTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlYXRtYXBab29tRXZlbnQge1xuICB4TWluOiBudW1iZXI7XG4gIHhNYXg6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFByZXBDb25maWdPcHRzIHtcbiAgZGF0YVJlZjogUmVmT2JqZWN0PEhlYXRtYXBEYXRhPjtcbiAgdGhlbWU6IEdyYWZhbmFUaGVtZTI7XG4gIGV2ZW50QnVzOiBFdmVudEJ1cztcbiAgb25ob3Zlcj86IG51bGwgfCAoKGV2dD86IEhlYXRtYXBIb3ZlckV2ZW50IHwgbnVsbCkgPT4gdm9pZCk7XG4gIG9uY2xpY2s/OiBudWxsIHwgKChldnQ/OiBPYmplY3QpID0+IHZvaWQpO1xuICBvbnpvb20/OiBudWxsIHwgKChldnQ6IEhlYXRtYXBab29tRXZlbnQpID0+IHZvaWQpO1xuICBpc1Rvb2xUaXBPcGVuOiBNdXRhYmxlUmVmT2JqZWN0PGJvb2xlYW4+O1xuICB0aW1lWm9uZTogc3RyaW5nO1xuICBnZXRUaW1lUmFuZ2U6ICgpID0+IFRpbWVSYW5nZTtcbiAgcGFsZXR0ZTogc3RyaW5nW107XG4gIGV4ZW1wbGFyQ29sb3I6IHN0cmluZztcbiAgY2VsbEdhcD86IG51bWJlciB8IG51bGw7IC8vIGluIGNzcyBwaXhlbHNcbiAgaGlkZUxFPzogbnVtYmVyO1xuICBoaWRlR0U/OiBudW1iZXI7XG4gIHlBeGlzQ29uZmlnOiBZQXhpc0NvbmZpZztcbiAgeVNpemVEaXZpc29yPzogbnVtYmVyO1xuICBzeW5jPzogKCkgPT4gRGFzaGJvYXJkQ3Vyc29yU3luYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBDb25maWcob3B0czogUHJlcENvbmZpZ09wdHMpIHtcbiAgY29uc3Qge1xuICAgIGRhdGFSZWYsXG4gICAgdGhlbWUsXG4gICAgZXZlbnRCdXMsXG4gICAgb25ob3ZlcixcbiAgICBvbmNsaWNrLFxuICAgIG9uem9vbSxcbiAgICBpc1Rvb2xUaXBPcGVuLFxuICAgIHRpbWVab25lLFxuICAgIGdldFRpbWVSYW5nZSxcbiAgICBwYWxldHRlLFxuICAgIGNlbGxHYXAsXG4gICAgaGlkZUxFLFxuICAgIGhpZGVHRSxcbiAgICB5QXhpc0NvbmZpZyxcbiAgICB5U2l6ZURpdmlzb3IsXG4gICAgc3luYyxcbiAgfSA9IG9wdHM7XG5cbiAgY29uc3QgeFNjYWxlS2V5ID0gJ3gnO1xuICBjb25zdCB4U2NhbGVVbml0ID0gJ3RpbWUnO1xuXG4gIGNvbnN0IHB4UmF0aW8gPSBkZXZpY2VQaXhlbFJhdGlvO1xuXG4gIGxldCBoZWF0bWFwVHlwZSA9IGRhdGFSZWYuY3VycmVudD8uaGVhdG1hcD8ubWV0YT8udHlwZTtcbiAgY29uc3QgZXhlbXBsYXJGaWxsQ29sb3IgPSB0aGVtZS52aXN1YWxpemF0aW9uLmdldENvbG9yQnlOYW1lKG9wdHMuZXhlbXBsYXJDb2xvcik7XG5cbiAgbGV0IHF0OiBRdWFkdHJlZTtcbiAgbGV0IGhSZWN0OiBSZWN0IHwgbnVsbDtcblxuICBsZXQgYnVpbGRlciA9IG5ldyBVUGxvdENvbmZpZ0J1aWxkZXIodGltZVpvbmUpO1xuXG4gIGxldCByZWN0OiBET01SZWN0O1xuXG4gIGJ1aWxkZXIuYWRkSG9vaygnaW5pdCcsICh1KSA9PiB7XG4gICAgdS5yb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcudS1jdXJzb3ItcHQnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgT2JqZWN0LmFzc2lnbihlbC5zdHlsZSwge1xuICAgICAgICBib3JkZXJSYWRpdXM6ICcwJyxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHdoaXRlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgb25jbGljayAmJlxuICAgICAgdS5vdmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdtb3VzZXVwJyxcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgbGV0IGlzRHJhZ2dpbmc6IGJvb2xlYW4gPSB1LmN1cnNvci5kcmFnLl94IHx8IHUuY3Vyc29yLmRyYWcuX3k7XG5cbiAgICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIG9uY2xpY2soZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICB9KTtcblxuICBvbnpvb20gJiZcbiAgICBidWlsZGVyLmFkZEhvb2soJ3NldFNlbGVjdCcsICh1KSA9PiB7XG4gICAgICBvbnpvb20oe1xuICAgICAgICB4TWluOiB1LnBvc1RvVmFsKHUuc2VsZWN0LmxlZnQsIHhTY2FsZUtleSksXG4gICAgICAgIHhNYXg6IHUucG9zVG9WYWwodS5zZWxlY3QubGVmdCArIHUuc2VsZWN0LndpZHRoLCB4U2NhbGVLZXkpLFxuICAgICAgfSk7XG4gICAgICB1LnNldFNlbGVjdCh7IGxlZnQ6IDAsIHRvcDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgLy8gdGhpcyBpcyBhIHRtcCBoYWNrIGJlY2F1c2UgaW4gbW9kZTogMiwgdXBsb3QgZG9lcyBub3QgY3VycmVudGx5IGNhbGwgc2NhbGVzLngucmFuZ2UoKSBmb3Igc2V0RGF0YSgpIGNhbGxzXG4gIC8vIHNjYWxlcy54LnJhbmdlKCkgdHlwaWNhbGx5IHJlYWRzIGJhY2sgZnJvbSBkcmlsbGVkLWRvd24gcGFuZWxQcm9wcy50aW1lUmFuZ2UgdmlhIGdldFRpbWVSYW5nZSgpXG4gIGJ1aWxkZXIuYWRkSG9vaygnc2V0RGF0YScsICh1KSA9PiB7XG4gICAgLy9sZXQgW21pbiwgbWF4XSA9ICh1LnNjYWxlcyEueCEucmFuZ2UhIGFzIHVQbG90LlJhbmdlLkZ1bmN0aW9uKSh1LCAwLCAxMDAsIHhTY2FsZUtleSk7XG5cbiAgICBsZXQgeyBtaW46IHhNaW4sIG1heDogeE1heCB9ID0gdS5zY2FsZXMhLng7XG5cbiAgICBsZXQgbWluID0gZ2V0VGltZVJhbmdlKCkuZnJvbS52YWx1ZU9mKCk7XG4gICAgbGV0IG1heCA9IGdldFRpbWVSYW5nZSgpLnRvLnZhbHVlT2YoKTtcblxuICAgIGlmICh4TWluICE9PSBtaW4gfHwgeE1heCAhPT0gbWF4KSB7XG4gICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgIHUuc2V0U2NhbGUoeFNjYWxlS2V5LCB7IG1pbiwgbWF4IH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyByZWN0IG9mIC51LW92ZXIgKGdyaWQgYXJlYSlcbiAgYnVpbGRlci5hZGRIb29rKCdzeW5jUmVjdCcsICh1LCByKSA9PiB7XG4gICAgcmVjdCA9IHI7XG4gIH0pO1xuXG4gIGNvbnN0IHBheWxvYWQ6IERhdGFIb3ZlclBheWxvYWQgPSB7XG4gICAgcG9pbnQ6IHtcbiAgICAgIFt4U2NhbGVVbml0XTogbnVsbCxcbiAgICB9LFxuICAgIGRhdGE6IGRhdGFSZWYuY3VycmVudD8uaGVhdG1hcCxcbiAgfTtcbiAgY29uc3QgaG92ZXJFdmVudCA9IG5ldyBEYXRhSG92ZXJFdmVudChwYXlsb2FkKTtcblxuICBsZXQgcGVuZGluZ09ubGVhdmU6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgMDtcblxuICBvbmhvdmVyICYmXG4gICAgYnVpbGRlci5hZGRIb29rKCdzZXRMZWdlbmQnLCAodSkgPT4ge1xuICAgICAgaWYgKHUuY3Vyc29yLmlkeHMgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHUuY3Vyc29yLmlkeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzZWwgPSB1LmN1cnNvci5pZHhzW2ldO1xuICAgICAgICAgIGlmIChzZWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgeyBsZWZ0LCB0b3AgfSA9IHUuY3Vyc29yO1xuICAgICAgICAgICAgcGF5bG9hZC5yb3dJbmRleCA9IHNlbDtcbiAgICAgICAgICAgIHBheWxvYWQucG9pbnRbeFNjYWxlVW5pdF0gPSB1LnBvc1RvVmFsKGxlZnQhLCB4U2NhbGVLZXkpO1xuICAgICAgICAgICAgZXZlbnRCdXMucHVibGlzaChob3ZlckV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKCFpc1Rvb2xUaXBPcGVuLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKHBlbmRpbmdPbmxlYXZlKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHBlbmRpbmdPbmxlYXZlKTtcbiAgICAgICAgICAgICAgICBwZW5kaW5nT25sZWF2ZSA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25ob3Zlcih7XG4gICAgICAgICAgICAgICAgc2VyaWVzSWR4OiBpLFxuICAgICAgICAgICAgICAgIGRhdGFJZHg6IHNlbCxcbiAgICAgICAgICAgICAgICBwYWdlWDogcmVjdC5sZWZ0ICsgbGVmdCEsXG4gICAgICAgICAgICAgICAgcGFnZVk6IHJlY3QudG9wICsgdG9wISxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNUb29sVGlwT3Blbi5jdXJyZW50KSB7XG4gICAgICAgIC8vIGlmIHRpbGVzIGhhdmUgZ2FwcywgcmVkdWNlIGZsYXNoaW5nIC8gcmUtcmVuZGVyIChkZWJvdW5jZSBvbmxlYXZlIGJ5IDEwMG1zKVxuICAgICAgICBpZiAoIXBlbmRpbmdPbmxlYXZlKSB7XG4gICAgICAgICAgcGVuZGluZ09ubGVhdmUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG9uaG92ZXIobnVsbCk7XG4gICAgICAgICAgICBwYXlsb2FkLnJvd0luZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcGF5bG9hZC5wb2ludFt4U2NhbGVVbml0XSA9IG51bGw7XG4gICAgICAgICAgICBldmVudEJ1cy5wdWJsaXNoKGhvdmVyRXZlbnQpO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICBidWlsZGVyLmFkZEhvb2soJ2RyYXdDbGVhcicsICh1KSA9PiB7XG4gICAgcXQgPSBxdCB8fCBuZXcgUXVhZHRyZWUoMCwgMCwgdS5iYm94LndpZHRoLCB1LmJib3guaGVpZ2h0KTtcblxuICAgIHF0LmNsZWFyKCk7XG5cbiAgICAvLyBmb3JjZS1jbGVhciB0aGUgcGF0aCBjYWNoZSB0byBjYXVzZSBkcmF3QmFycygpIHRvIHJlYnVpbGQgbmV3IHF1YWR0cmVlXG4gICAgdS5zZXJpZXMuZm9yRWFjaCgocywgaSkgPT4ge1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcy5fcGF0aHMgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBidWlsZGVyLnNldE1vZGUoMik7XG5cbiAgYnVpbGRlci5hZGRTY2FsZSh7XG4gICAgc2NhbGVLZXk6IHhTY2FsZUtleSxcbiAgICBpc1RpbWU6IHRydWUsXG4gICAgb3JpZW50YXRpb246IFNjYWxlT3JpZW50YXRpb24uSG9yaXpvbnRhbCxcbiAgICBkaXJlY3Rpb246IFNjYWxlRGlyZWN0aW9uLlJpZ2h0LFxuICAgIC8vIFRPRE86IGV4cGFuZCBieSB4IGJ1Y2tldCBzaXplIGFuZCBsYXlvdXRcbiAgICByYW5nZTogKCkgPT4ge1xuICAgICAgcmV0dXJuIFtnZXRUaW1lUmFuZ2UoKS5mcm9tLnZhbHVlT2YoKSwgZ2V0VGltZVJhbmdlKCkudG8udmFsdWVPZigpXTtcbiAgICB9LFxuICB9KTtcblxuICBidWlsZGVyLmFkZEF4aXMoe1xuICAgIHNjYWxlS2V5OiB4U2NhbGVLZXksXG4gICAgcGxhY2VtZW50OiBBeGlzUGxhY2VtZW50LkJvdHRvbSxcbiAgICBpc1RpbWU6IHRydWUsXG4gICAgdGhlbWU6IHRoZW1lLFxuICB9KTtcblxuICBjb25zdCB5RmllbGQgPSBkYXRhUmVmLmN1cnJlbnQ/LmhlYXRtYXA/LmZpZWxkc1sxXSE7XG4gIGlmICgheUZpZWxkKSB7XG4gICAgcmV0dXJuIGJ1aWxkZXI7IC8vIGVhcmx5IGFib3J0IChhdm9pZHMgZXJyb3IpXG4gIH1cblxuICAvLyBlc2xpbnQtaWdub3JlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgY29uc3QgeUZpZWxkQ29uZmlnID0geUZpZWxkLmNvbmZpZz8uY3VzdG9tIGFzIFBhbmVsRmllbGRDb25maWcgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IHlTY2FsZSA9IHlGaWVsZENvbmZpZz8uc2NhbGVEaXN0cmlidXRpb24gPz8geyB0eXBlOiBTY2FsZURpc3RyaWJ1dGlvbi5MaW5lYXIgfTtcbiAgY29uc3QgeUF4aXNSZXZlcnNlID0gQm9vbGVhbih5QXhpc0NvbmZpZy5yZXZlcnNlKTtcbiAgY29uc3QgaXNTcGFyc2VIZWF0bWFwID0gaGVhdG1hcFR5cGUgPT09IERhdGFGcmFtZVR5cGUuSGVhdG1hcENlbGxzICYmICFpc0hlYXRtYXBDZWxsc0RlbnNlKGRhdGFSZWYuY3VycmVudD8uaGVhdG1hcCEpO1xuICBjb25zdCBzaG91bGRVc2VMb2dTY2FsZSA9IHlTY2FsZS50eXBlICE9PSBTY2FsZURpc3RyaWJ1dGlvbi5MaW5lYXIgfHwgaXNTcGFyc2VIZWF0bWFwO1xuICBjb25zdCBpc09yZGlhbmFsWSA9IHJlYWRIZWF0bWFwUm93c0N1c3RvbU1ldGEoZGF0YVJlZi5jdXJyZW50Py5oZWF0bWFwKS55T3JkaW5hbERpc3BsYXkgIT0gbnVsbDtcblxuICAvLyByYW5kb20gdG8gcHJldmVudCBzeW5jaW5nIHkgaW4gb3RoZXIgaGVhdG1hcHNcbiAgLy8gVE9ETzogdHJ5IHRvIG1hdGNoIFRpbWVTZXJpZXMgeSBrZXlnZW4gYWxnbyB0byBzeW5jIHdpdGggVGltZVNlcmllcyBwYW5lbHMgKHdoZW4gbm90IGlzT3JkaWFuYWxZKVxuICBjb25zdCB5U2NhbGVLZXkgPSAneV8nICsgKE1hdGgucmFuZG9tKCkgKyAxKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xuXG4gIGJ1aWxkZXIuYWRkU2NhbGUoe1xuICAgIHNjYWxlS2V5OiB5U2NhbGVLZXksXG4gICAgaXNUaW1lOiBmYWxzZSxcbiAgICAvLyBkaXN0cmlidXRpb246IFNjYWxlRGlzdHJpYnV0aW9uLk9yZGluYWwsIC8vIGRvZXMgbm90IHdvcmsgd2l0aCBmYWNldHMvc2NhdHRlciB5ZXRcbiAgICBvcmllbnRhdGlvbjogU2NhbGVPcmllbnRhdGlvbi5WZXJ0aWNhbCxcbiAgICBkaXJlY3Rpb246IHlBeGlzUmV2ZXJzZSA/IFNjYWxlRGlyZWN0aW9uLkRvd24gOiBTY2FsZURpcmVjdGlvbi5VcCxcbiAgICAvLyBzaG91bGQgYmUgdHdlYWthYmxlIG1hbnVhbGx5XG4gICAgZGlzdHJpYnV0aW9uOiBzaG91bGRVc2VMb2dTY2FsZSA/IFNjYWxlRGlzdHJpYnV0aW9uLkxvZyA6IFNjYWxlRGlzdHJpYnV0aW9uLkxpbmVhcixcbiAgICBsb2c6IHlTY2FsZS5sb2cgPz8gMixcbiAgICByYW5nZTpcbiAgICAgIC8vIHNwYXJzZSBhbHJlYWR5IGFjY291bnRzIGZvciBsZS9nZSBieSBleHBsaWNpdCB5TWluICYgeU1heCBjZWxsIGJvdW5kcywgc28gbm8gbmVlZCB0byBleHBhbmQgeSByYW5nZVxuICAgICAgaXNTcGFyc2VIZWF0bWFwXG4gICAgICAgID8gKHUsIGRhdGFNaW4sIGRhdGFNYXgpID0+IHtcbiAgICAgICAgICAgIGxldCBzY2FsZU1pbjogbnVtYmVyIHwgbnVsbCwgc2NhbGVNYXg6IG51bWJlciB8IG51bGw7XG5cbiAgICAgICAgICAgIFtzY2FsZU1pbiwgc2NhbGVNYXhdID0gc2hvdWxkVXNlTG9nU2NhbGVcbiAgICAgICAgICAgICAgPyB1UGxvdC5yYW5nZUxvZyhkYXRhTWluLCBkYXRhTWF4LCAoeVNjYWxlLmxvZyA/PyAyKSBhcyB1bmtub3duIGFzIHVQbG90LlNjYWxlLkxvZ0Jhc2UsIHRydWUpXG4gICAgICAgICAgICAgIDogW2RhdGFNaW4sIGRhdGFNYXhdO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkVXNlTG9nU2NhbGUgJiYgIWlzT3JkaWFuYWxZKSB7XG4gICAgICAgICAgICAgIGxldCB7IG1pbjogZXhwbGljaXRNaW4sIG1heDogZXhwbGljaXRNYXggfSA9IHlBeGlzQ29uZmlnO1xuXG4gICAgICAgICAgICAgIC8vIGd1YXJkIGFnYWluc3QgPD0gMFxuICAgICAgICAgICAgICBpZiAoZXhwbGljaXRNaW4gIT0gbnVsbCAmJiBleHBsaWNpdE1pbiA+IDApIHtcbiAgICAgICAgICAgICAgICBzY2FsZU1pbiA9IGV4cGxpY2l0TWluO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGV4cGxpY2l0TWF4ICE9IG51bGwgJiYgZXhwbGljaXRNYXggPiAwKSB7XG4gICAgICAgICAgICAgICAgc2NhbGVNYXggPSBleHBsaWNpdE1heDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gW3NjYWxlTWluLCBzY2FsZU1heF07XG4gICAgICAgICAgfVxuICAgICAgICA6IC8vIGRlbnNlIGFuZCBvcmRpbmFsIG9ubHkgaGF2ZSBvbmUgb2YgeU1pbnx5TWF4fHksIHNvIGV4cGFuZCByYW5nZSBieSBvbmUgY2VsbCBpbiB0aGUgZGlyZWN0aW9uIG9mIGxlL2dlL3Vua25vd25cbiAgICAgICAgICAodSwgZGF0YU1pbiwgZGF0YU1heCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgbWluOiBleHBsaWNpdE1pbiwgbWF4OiBleHBsaWNpdE1heCB9ID0geUF4aXNDb25maWc7XG5cbiAgICAgICAgICAgIC8vIGxvZ2FyaXRobWljIGV4cGFuc2lvblxuICAgICAgICAgICAgaWYgKHNob3VsZFVzZUxvZ1NjYWxlKSB7XG4gICAgICAgICAgICAgIGxldCB5RXhwID0gdS5zY2FsZXNbeVNjYWxlS2V5XS5sb2chO1xuXG4gICAgICAgICAgICAgIGxldCBtaW5FeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBsZXQgbWF4RXhwYW5kZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICBpZiAoeVNpemVEaXZpc29yICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxvZyA9IHlFeHAgPT09IDIgPyBNYXRoLmxvZzIgOiBNYXRoLmxvZzEwO1xuXG4gICAgICAgICAgICAgICAgbGV0IG1pbkxvZyA9IGxvZyhkYXRhTWluKTtcbiAgICAgICAgICAgICAgICBsZXQgbWF4TG9nID0gbG9nKGRhdGFNYXgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG1pbkxvZykpIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFNaW4gPSB5RXhwICoqIGluY3JSb3VuZERuKG1pbkxvZywgMSk7XG4gICAgICAgICAgICAgICAgICBtaW5FeHBhbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG1heExvZykpIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFNYXggPSB5RXhwICoqIGluY3JSb3VuZFVwKG1heExvZywgMSk7XG4gICAgICAgICAgICAgICAgICBtYXhFeHBhbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGFSZWYuY3VycmVudD8ueUxheW91dCA9PT0gSGVhdG1hcENlbGxMYXlvdXQubGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1pbkV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhTWluIC89IHlFeHA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFSZWYuY3VycmVudD8ueUxheW91dCA9PT0gSGVhdG1hcENlbGxMYXlvdXQuZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1heEV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhTWF4ICo9IHlFeHA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFNaW4gLz0geUV4cCAvIDI7XG4gICAgICAgICAgICAgICAgZGF0YU1heCAqPSB5RXhwIC8gMjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNPcmRpYW5hbFkpIHtcbiAgICAgICAgICAgICAgICAvLyBndWFyZCBhZ2FpbnN0IDw9IDBcbiAgICAgICAgICAgICAgICBpZiAoZXhwbGljaXRNaW4gIT0gbnVsbCAmJiBleHBsaWNpdE1pbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFNaW4gPSBleHBsaWNpdE1pbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZXhwbGljaXRNYXggIT0gbnVsbCAmJiBleHBsaWNpdE1heCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFNYXggPSBleHBsaWNpdE1heDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxpbmVhciBleHBhbnNpb25cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgYnVja2V0U2l6ZSA9IGRhdGFSZWYuY3VycmVudD8ueUJ1Y2tldFNpemU7XG5cbiAgICAgICAgICAgICAgaWYgKGJ1Y2tldFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBidWNrZXRTaXplID0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChidWNrZXRTaXplKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFSZWYuY3VycmVudD8ueUxheW91dCA9PT0gSGVhdG1hcENlbGxMYXlvdXQubGUpIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFNaW4gLT0gYnVja2V0U2l6ZSE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhUmVmLmN1cnJlbnQ/LnlMYXlvdXQgPT09IEhlYXRtYXBDZWxsTGF5b3V0LmdlKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhTWF4ICs9IGJ1Y2tldFNpemUhO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBkYXRhTWluIC09IGJ1Y2tldFNpemUhIC8gMjtcbiAgICAgICAgICAgICAgICAgIGRhdGFNYXggKz0gYnVja2V0U2l6ZSEgLyAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBob3cgdG8gZXhwYW5kIHNjYWxlIHJhbmdlIGlmIGluZmVycmVkIG5vbi1yZWd1bGFyIG9yIGxvZyBidWNrZXRzP1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc09yZGlhbmFsWSkge1xuICAgICAgICAgICAgICAgIGRhdGFNaW4gPSBleHBsaWNpdE1pbiA/PyBkYXRhTWluO1xuICAgICAgICAgICAgICAgIGRhdGFNYXggPSBleHBsaWNpdE1heCA/PyBkYXRhTWF4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBbZGF0YU1pbiwgZGF0YU1heF07XG4gICAgICAgICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZGlzcFkgPSB5RmllbGQuZGlzcGxheSA/PyBnZXRWYWx1ZUZvcm1hdCgnc2hvcnQnKTtcblxuICBidWlsZGVyLmFkZEF4aXMoe1xuICAgIHNjYWxlS2V5OiB5U2NhbGVLZXksXG4gICAgc2hvdzogeUF4aXNDb25maWcuYXhpc1BsYWNlbWVudCAhPT0gQXhpc1BsYWNlbWVudC5IaWRkZW4sXG4gICAgcGxhY2VtZW50OiB5QXhpc0NvbmZpZy5heGlzUGxhY2VtZW50IHx8IEF4aXNQbGFjZW1lbnQuTGVmdCxcbiAgICBzaXplOiB5QXhpc0NvbmZpZy5heGlzV2lkdGggfHwgbnVsbCxcbiAgICBsYWJlbDogeUF4aXNDb25maWcuYXhpc0xhYmVsLFxuICAgIHRoZW1lOiB0aGVtZSxcbiAgICBmb3JtYXRWYWx1ZTogKHY6IG51bWJlcikgPT4gZm9ybWF0dGVkVmFsdWVUb1N0cmluZyhkaXNwWSh2KSksXG4gICAgc3BsaXRzOiBpc09yZGlhbmFsWVxuICAgICAgPyAoc2VsZjogdVBsb3QpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhID0gcmVhZEhlYXRtYXBSb3dzQ3VzdG9tTWV0YShkYXRhUmVmLmN1cnJlbnQ/LmhlYXRtYXApO1xuICAgICAgICAgIGlmICghbWV0YS55T3JkaW5hbERpc3BsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBbMCwgMV07IC8vP1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3BsaXRzID0gbWV0YS55T3JkaW5hbERpc3BsYXkubWFwKCh2LCBpZHgpID0+IGlkeCk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGRhdGFSZWYuY3VycmVudD8ueUxheW91dCkge1xuICAgICAgICAgICAgY2FzZSBIZWF0bWFwQ2VsbExheW91dC5sZTpcbiAgICAgICAgICAgICAgc3BsaXRzLnVuc2hpZnQoLTEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSGVhdG1hcENlbGxMYXlvdXQuZ2U6XG4gICAgICAgICAgICAgIHNwbGl0cy5wdXNoKHNwbGl0cy5sZW5ndGgpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTa2lwIGxhYmVscyB3aGVuIHRoZSBoZWlnaHQgaXMgdG9vIHNtYWxsXG4gICAgICAgICAgaWYgKHNlbGYuaGVpZ2h0IDwgNjApIHtcbiAgICAgICAgICAgIHNwbGl0cyA9IFtzcGxpdHNbMF0sIHNwbGl0c1tzcGxpdHMubGVuZ3RoIC0gMV1dO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoc3BsaXRzLmxlbmd0aCA+IDMgJiYgKHNlbGYuaGVpZ2h0IC0gMTUpIC8gc3BsaXRzLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgICAgICAgIHNwbGl0cyA9IHNwbGl0cy5maWx0ZXIoKHYsIGlkeCkgPT4gaWR4ICUgMiA9PT0gMCk7IC8vIHJlbW92ZSBoYWxmIHRoZSBpdGVtc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3BsaXRzO1xuICAgICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICB2YWx1ZXM6IGlzT3JkaWFuYWxZXG4gICAgICA/IChzZWxmOiB1UGxvdCwgc3BsaXRzKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWV0YSA9IHJlYWRIZWF0bWFwUm93c0N1c3RvbU1ldGEoZGF0YVJlZi5jdXJyZW50Py5oZWF0bWFwKTtcbiAgICAgICAgICBpZiAobWV0YS55T3JkaW5hbERpc3BsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBzcGxpdHMubWFwKCh2KSA9PlxuICAgICAgICAgICAgICB2IDwgMFxuICAgICAgICAgICAgICAgID8gbWV0YS55TWluRGlzcGxheSA/PyAnJyAvLyBDaGVjayBwcm9tZXRoZXVzIHN0eWxlIGxhYmVsc1xuICAgICAgICAgICAgICAgIDogbWV0YS55T3JkaW5hbERpc3BsYXlbdl0gPz8gJydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzcGxpdHM7XG4gICAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkLFxuICB9KTtcblxuICBjb25zdCBwYXRoQnVpbGRlciA9IGlzU3BhcnNlSGVhdG1hcCA/IGhlYXRtYXBQYXRoc1NwYXJzZSA6IGhlYXRtYXBQYXRoc0RlbnNlO1xuXG4gIC8vIGhlYXRtYXAgbGF5ZXJcbiAgYnVpbGRlci5hZGRTZXJpZXMoe1xuICAgIGZhY2V0czogW1xuICAgICAge1xuICAgICAgICBzY2FsZTogeFNjYWxlS2V5LFxuICAgICAgICBhdXRvOiB0cnVlLFxuICAgICAgICBzb3J0ZWQ6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzY2FsZTogeVNjYWxlS2V5LFxuICAgICAgICBhdXRvOiB0cnVlLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHBhdGhCdWlsZGVyOiBwYXRoQnVpbGRlcih7XG4gICAgICBlYWNoOiAodSwgc2VyaWVzSWR4LCBkYXRhSWR4LCB4LCB5LCB4U2l6ZSwgeVNpemUpID0+IHtcbiAgICAgICAgcXQuYWRkKHtcbiAgICAgICAgICB4OiB4IC0gdS5iYm94LmxlZnQsXG4gICAgICAgICAgeTogeSAtIHUuYmJveC50b3AsXG4gICAgICAgICAgdzogeFNpemUsXG4gICAgICAgICAgaDogeVNpemUsXG4gICAgICAgICAgc2lkeDogc2VyaWVzSWR4LFxuICAgICAgICAgIGRpZHg6IGRhdGFJZHgsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdhcDogY2VsbEdhcCxcbiAgICAgIGhpZGVMRSxcbiAgICAgIGhpZGVHRSxcbiAgICAgIHhBbGlnbjpcbiAgICAgICAgZGF0YVJlZi5jdXJyZW50Py54TGF5b3V0ID09PSBIZWF0bWFwQ2VsbExheW91dC5sZVxuICAgICAgICAgID8gLTFcbiAgICAgICAgICA6IGRhdGFSZWYuY3VycmVudD8ueExheW91dCA9PT0gSGVhdG1hcENlbGxMYXlvdXQuZ2VcbiAgICAgICAgICA/IDFcbiAgICAgICAgICA6IDAsXG4gICAgICB5QWxpZ246ICgoZGF0YVJlZi5jdXJyZW50Py55TGF5b3V0ID09PSBIZWF0bWFwQ2VsbExheW91dC5sZVxuICAgICAgICA/IC0xXG4gICAgICAgIDogZGF0YVJlZi5jdXJyZW50Py55TGF5b3V0ID09PSBIZWF0bWFwQ2VsbExheW91dC5nZVxuICAgICAgICA/IDFcbiAgICAgICAgOiAwKSAqICh5QXhpc1JldmVyc2UgPyAtMSA6IDEpKSBhcyAtMSB8IDAgfCAxLFxuICAgICAgeVNpemVEaXZpc29yLFxuICAgICAgZGlzcDoge1xuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgdmFsdWVzOiAodSwgc2VyaWVzSWR4KSA9PiB7XG4gICAgICAgICAgICBsZXQgY291bnRGYWNldElkeCA9ICFpc1NwYXJzZUhlYXRtYXAgPyAyIDogMztcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXNUb0ZpbGxzKFxuICAgICAgICAgICAgICB1LmRhdGFbc2VyaWVzSWR4XVtjb3VudEZhY2V0SWR4XSBhcyB1bmtub3duIGFzIG51bWJlcltdLFxuICAgICAgICAgICAgICBwYWxldHRlLFxuICAgICAgICAgICAgICBkYXRhUmVmLmN1cnJlbnQ/Lm1pblZhbHVlISxcbiAgICAgICAgICAgICAgZGF0YVJlZi5jdXJyZW50Py5tYXhWYWx1ZSFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbmRleDogcGFsZXR0ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgdGhlbWUsXG4gICAgc2NhbGVLZXk6ICcnLCAvLyBmYWNldHMnIHNjYWxlcyB1c2VkIChhYm92ZSlcbiAgfSk7XG5cbiAgLy8gZXhlbXBsYXJzIGxheWVyXG4gIGJ1aWxkZXIuYWRkU2VyaWVzKHtcbiAgICBmYWNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgc2NhbGU6IHhTY2FsZUtleSxcbiAgICAgICAgYXV0bzogdHJ1ZSxcbiAgICAgICAgc29ydGVkOiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2NhbGU6IHlTY2FsZUtleSxcbiAgICAgICAgYXV0bzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBwYXRoQnVpbGRlcjogaGVhdG1hcFBhdGhzUG9pbnRzKFxuICAgICAge1xuICAgICAgICBlYWNoOiAodSwgc2VyaWVzSWR4LCBkYXRhSWR4LCB4LCB5LCB4U2l6ZSwgeVNpemUpID0+IHtcbiAgICAgICAgICBxdC5hZGQoe1xuICAgICAgICAgICAgeDogeCAtIHUuYmJveC5sZWZ0LFxuICAgICAgICAgICAgeTogeSAtIHUuYmJveC50b3AsXG4gICAgICAgICAgICB3OiB4U2l6ZSxcbiAgICAgICAgICAgIGg6IHlTaXplLFxuICAgICAgICAgICAgc2lkeDogc2VyaWVzSWR4LFxuICAgICAgICAgICAgZGlkeDogZGF0YUlkeCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBleGVtcGxhckZpbGxDb2xvclxuICAgICksXG4gICAgdGhlbWUsXG4gICAgc2NhbGVLZXk6ICcnLCAvLyBmYWNldHMnIHNjYWxlcyB1c2VkIChhYm92ZSlcbiAgfSk7XG5cbiAgY29uc3QgY3Vyc29yOiBDdXJzb3IgPSB7XG4gICAgZHJhZzoge1xuICAgICAgeDogdHJ1ZSxcbiAgICAgIHk6IGZhbHNlLFxuICAgICAgc2V0U2NhbGU6IGZhbHNlLFxuICAgIH0sXG4gICAgZGF0YUlkeDogKHUsIHNlcmllc0lkeCkgPT4ge1xuICAgICAgaWYgKHNlcmllc0lkeCA9PT0gMSkge1xuICAgICAgICBoUmVjdCA9IG51bGw7XG5cbiAgICAgICAgbGV0IGN4ID0gdS5jdXJzb3IubGVmdCEgKiBweFJhdGlvO1xuICAgICAgICBsZXQgY3kgPSB1LmN1cnNvci50b3AhICogcHhSYXRpbztcblxuICAgICAgICBxdC5nZXQoY3gsIGN5LCAxLCAxLCAobykgPT4ge1xuICAgICAgICAgIGlmIChwb2ludFdpdGhpbihjeCwgY3ksIG8ueCwgby55LCBvLnggKyBvLncsIG8ueSArIG8uaCkpIHtcbiAgICAgICAgICAgIGhSZWN0ID0gbztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaFJlY3QgJiYgc2VyaWVzSWR4ID09PSBoUmVjdC5zaWR4ID8gaFJlY3QuZGlkeCA6IG51bGw7XG4gICAgfSxcbiAgICBwb2ludHM6IHtcbiAgICAgIGZpbGw6ICdyZ2JhKDI1NSwyNTUsMjU1LCAwLjMpJyxcbiAgICAgIGJib3g6ICh1LCBzZXJpZXNJZHgpID0+IHtcbiAgICAgICAgbGV0IGlzSG92ZXJlZCA9IGhSZWN0ICYmIHNlcmllc0lkeCA9PT0gaFJlY3Quc2lkeDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxlZnQ6IGlzSG92ZXJlZCA/IGhSZWN0IS54IC8gcHhSYXRpbyA6IC0xMCxcbiAgICAgICAgICB0b3A6IGlzSG92ZXJlZCA/IGhSZWN0IS55IC8gcHhSYXRpbyA6IC0xMCxcbiAgICAgICAgICB3aWR0aDogaXNIb3ZlcmVkID8gaFJlY3QhLncgLyBweFJhdGlvIDogMCxcbiAgICAgICAgICBoZWlnaHQ6IGlzSG92ZXJlZCA/IGhSZWN0IS5oIC8gcHhSYXRpbyA6IDAsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgaWYgKHN5bmMgJiYgc3luYygpICE9PSBEYXNoYm9hcmRDdXJzb3JTeW5jLk9mZikge1xuICAgIGN1cnNvci5zeW5jID0ge1xuICAgICAga2V5OiAnX19nbG9iYWxfJyxcbiAgICAgIHNjYWxlczogW3hTY2FsZUtleSwgeVNjYWxlS2V5XSxcbiAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgcHViOiAodHlwZTogc3RyaW5nLCBzcmM6IHVQbG90LCB4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGRhdGFJZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgcGF5bG9hZC5wb2ludFt4U2NhbGVVbml0XSA9IG51bGw7XG4gICAgICAgICAgICBldmVudEJ1cy5wdWJsaXNoKG5ldyBEYXRhSG92ZXJDbGVhckV2ZW50KCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXlsb2FkLnBvaW50W3hTY2FsZVVuaXRdID0gc3JjLnBvc1RvVmFsKHgsIHhTY2FsZUtleSk7XG4gICAgICAgICAgICBldmVudEJ1cy5wdWJsaXNoKGhvdmVyRXZlbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgYnVpbGRlci5zZXRTeW5jKCk7XG4gIH1cblxuICBidWlsZGVyLnNldEN1cnNvcihjdXJzb3IpO1xuXG4gIHJldHVybiBidWlsZGVyO1xufVxuXG5jb25zdCBDUklTUF9FREdFU19HQVBfTUlOID0gNDtcblxuZXhwb3J0IGZ1bmN0aW9uIGhlYXRtYXBQYXRoc0RlbnNlKG9wdHM6IFBhdGhidWlsZGVyT3B0cykge1xuICBjb25zdCB7IGRpc3AsIGVhY2gsIGdhcCA9IDEsIGhpZGVMRSA9IC1JbmZpbml0eSwgaGlkZUdFID0gSW5maW5pdHksIHhBbGlnbiA9IDEsIHlBbGlnbiA9IDEsIHlTaXplRGl2aXNvciA9IDEgfSA9IG9wdHM7XG5cbiAgY29uc3QgcHhSYXRpbyA9IGRldmljZVBpeGVsUmF0aW87XG5cbiAgY29uc3Qgcm91bmQgPSBnYXAhID49IENSSVNQX0VER0VTX0dBUF9NSU4gPyBNYXRoLnJvdW5kIDogKHY6IG51bWJlcikgPT4gdjtcblxuICBjb25zdCBjZWxsR2FwID0gTWF0aC5yb3VuZChnYXAhICogcHhSYXRpbyk7XG5cbiAgcmV0dXJuICh1OiB1UGxvdCwgc2VyaWVzSWR4OiBudW1iZXIpID0+IHtcbiAgICB1UGxvdC5vcmllbnQoXG4gICAgICB1LFxuICAgICAgc2VyaWVzSWR4LFxuICAgICAgKFxuICAgICAgICBzZXJpZXMsXG4gICAgICAgIGRhdGFYLFxuICAgICAgICBkYXRhWSxcbiAgICAgICAgc2NhbGVYLFxuICAgICAgICBzY2FsZVksXG4gICAgICAgIHZhbFRvUG9zWCxcbiAgICAgICAgdmFsVG9Qb3NZLFxuICAgICAgICB4T2ZmLFxuICAgICAgICB5T2ZmLFxuICAgICAgICB4RGltLFxuICAgICAgICB5RGltLFxuICAgICAgICBtb3ZlVG8sXG4gICAgICAgIGxpbmVUbyxcbiAgICAgICAgcmVjdCxcbiAgICAgICAgYXJjXG4gICAgICApID0+IHtcbiAgICAgICAgbGV0IGQgPSB1LmRhdGFbc2VyaWVzSWR4XTtcbiAgICAgICAgY29uc3QgeHMgPSBkWzBdIGFzIHVua25vd24gYXMgbnVtYmVyW107XG4gICAgICAgIGNvbnN0IHlzID0gZFsxXSBhcyB1bmtub3duIGFzIG51bWJlcltdO1xuICAgICAgICBjb25zdCBjb3VudHMgPSBkWzJdIGFzIHVua25vd24gYXMgbnVtYmVyW107XG4gICAgICAgIGNvbnN0IGRsZW4gPSB4cy5sZW5ndGg7XG5cbiAgICAgICAgLy8gZmlsbCBjb2xvcnMgYXJlIG1hcHBlZCBmcm9tIGludGVycG9sYXRpbmcgZGVuc2l0aWVzIC8gY291bnRzIGFsb25nIHNvbWUgZ3JhZGllbnRcbiAgICAgICAgLy8gKHNob3VsZCBiZSBxdWFudGl6ZWQgdG8gNjQgY29sb3JzL2xldmVscyBtYXguIGUuZy4gMTYpXG4gICAgICAgIGxldCBmaWxscyA9IGRpc3AuZmlsbC52YWx1ZXModSwgc2VyaWVzSWR4KTtcbiAgICAgICAgbGV0IGZpbGxQYWxldHRlID0gZGlzcC5maWxsLmluZGV4ID8/IFsuLi5uZXcgU2V0KGZpbGxzKV07XG5cbiAgICAgICAgbGV0IGZpbGxQYXRocyA9IGZpbGxQYWxldHRlLm1hcCgoY29sb3IpID0+IG5ldyBQYXRoMkQoKSk7XG5cbiAgICAgICAgLy8gZGV0ZWN0IHggYW5kIHkgYmluIHF0eXMgYnkgZGV0ZWN0aW5nIGxheW91dCByZXBldGl0aW9uIGluIHggJiB5IGRhdGFcbiAgICAgICAgbGV0IHlCaW5RdHkgPSBkbGVuIC0geXMubGFzdEluZGV4T2YoeXNbMF0pO1xuICAgICAgICBsZXQgeEJpblF0eSA9IGRsZW4gLyB5QmluUXR5O1xuICAgICAgICBsZXQgeUJpbkluY3IgPSB5c1sxXSAtIHlzWzBdIHx8IHNjYWxlWS5tYXghIC0gc2NhbGVZLm1pbiE7XG4gICAgICAgIGxldCB4QmluSW5jciA9IHhzW3lCaW5RdHldIC0geHNbMF07XG5cbiAgICAgICAgLy8gdW5pZm9ybSB0aWxlIHNpemVzIGJhc2VkIG9uIHpvb20gbGV2ZWxcbiAgICAgICAgbGV0IHhTaXplOiBudW1iZXI7XG4gICAgICAgIGxldCB5U2l6ZTogbnVtYmVyO1xuXG4gICAgICAgIGlmIChzY2FsZVguZGlzdHIgPT09IDMpIHtcbiAgICAgICAgICB4U2l6ZSA9IE1hdGguYWJzKHZhbFRvUG9zWCh4c1swXSAqIHNjYWxlWC5sb2chLCBzY2FsZVgsIHhEaW0sIHhPZmYpIC0gdmFsVG9Qb3NYKHhzWzBdLCBzY2FsZVgsIHhEaW0sIHhPZmYpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4U2l6ZSA9IE1hdGguYWJzKHZhbFRvUG9zWCh4QmluSW5jciwgc2NhbGVYLCB4RGltLCB4T2ZmKSAtIHZhbFRvUG9zWCgwLCBzY2FsZVgsIHhEaW0sIHhPZmYpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY2FsZVkuZGlzdHIgPT09IDMpIHtcbiAgICAgICAgICB5U2l6ZSA9XG4gICAgICAgICAgICBNYXRoLmFicyh2YWxUb1Bvc1koeXNbMF0gKiBzY2FsZVkubG9nISwgc2NhbGVZLCB5RGltLCB5T2ZmKSAtIHZhbFRvUG9zWSh5c1swXSwgc2NhbGVZLCB5RGltLCB5T2ZmKSkgL1xuICAgICAgICAgICAgeVNpemVEaXZpc29yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHlTaXplID0gTWF0aC5hYnModmFsVG9Qb3NZKHlCaW5JbmNyLCBzY2FsZVksIHlEaW0sIHlPZmYpIC0gdmFsVG9Qb3NZKDAsIHNjYWxlWSwgeURpbSwgeU9mZikpIC8geVNpemVEaXZpc29yO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xhbXAgbWluIHRpbGUgc2l6ZSB0byAxcHhcbiAgICAgICAgeFNpemUgPSBNYXRoLm1heCgxLCByb3VuZCh4U2l6ZSAtIGNlbGxHYXApKTtcbiAgICAgICAgeVNpemUgPSBNYXRoLm1heCgxLCByb3VuZCh5U2l6ZSAtIGNlbGxHYXApKTtcblxuICAgICAgICAvLyBidWNrZXQgYWdnIGRpcmVjdGlvblxuICAgICAgICAvLyBsZXQgeENlaWwgPSBmYWxzZTtcbiAgICAgICAgLy8gbGV0IHlDZWlsID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHhPZmZzZXQgPSB4QWxpZ24gPT09IC0xID8gLXhTaXplIDogeEFsaWduID09PSAwID8gLXhTaXplIC8gMiA6IDA7XG4gICAgICAgIGxldCB5T2Zmc2V0ID0geUFsaWduID09PSAxID8gLXlTaXplIDogeUFsaWduID09PSAwID8gLXlTaXplIC8gMiA6IDA7XG5cbiAgICAgICAgLy8gcHJlLWNvbXB1dGUgeCBhbmQgeSBvZmZzZXRzXG4gICAgICAgIGxldCBjeXMgPSB5cy5zbGljZSgwLCB5QmluUXR5KS5tYXAoKHkpID0+IHJvdW5kKHZhbFRvUG9zWSh5LCBzY2FsZVksIHlEaW0sIHlPZmYpICsgeU9mZnNldCkpO1xuICAgICAgICBsZXQgY3hzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogeEJpblF0eSB9LCAodiwgaSkgPT5cbiAgICAgICAgICByb3VuZCh2YWxUb1Bvc1goeHNbaSAqIHlCaW5RdHldLCBzY2FsZVgsIHhEaW0sIHhPZmYpICsgeE9mZnNldClcbiAgICAgICAgKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRsZW47IGkrKykge1xuICAgICAgICAgIGlmIChjb3VudHNbaV0gPiBoaWRlTEUgJiYgY291bnRzW2ldIDwgaGlkZUdFKSB7XG4gICAgICAgICAgICBsZXQgY3ggPSBjeHNbfn4oaSAvIHlCaW5RdHkpXTtcbiAgICAgICAgICAgIGxldCBjeSA9IGN5c1tpICUgeUJpblF0eV07XG5cbiAgICAgICAgICAgIGxldCBmaWxsUGF0aCA9IGZpbGxQYXRoc1tmaWxsc1tpXV07XG5cbiAgICAgICAgICAgIHJlY3QoZmlsbFBhdGgsIGN4LCBjeSwgeFNpemUsIHlTaXplKTtcblxuICAgICAgICAgICAgZWFjaCh1LCAxLCBpLCBjeCwgY3ksIHhTaXplLCB5U2l6ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdS5jdHguc2F2ZSgpO1xuICAgICAgICAvL1x0dS5jdHguZ2xvYmFsQWxwaGEgPSAwLjg7XG4gICAgICAgIHUuY3R4LnJlY3QodS5iYm94LmxlZnQsIHUuYmJveC50b3AsIHUuYmJveC53aWR0aCwgdS5iYm94LmhlaWdodCk7XG4gICAgICAgIHUuY3R4LmNsaXAoKTtcbiAgICAgICAgZmlsbFBhdGhzLmZvckVhY2goKHAsIGkpID0+IHtcbiAgICAgICAgICB1LmN0eC5maWxsU3R5bGUgPSBmaWxsUGFsZXR0ZVtpXTtcbiAgICAgICAgICB1LmN0eC5maWxsKHApO1xuICAgICAgICB9KTtcbiAgICAgICAgdS5jdHgucmVzdG9yZSgpO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYXRtYXBQYXRoc1BvaW50cyhvcHRzOiBQb2ludHNCdWlsZGVyT3B0cywgZXhlbXBsYXJDb2xvcjogc3RyaW5nKSB7XG4gIHJldHVybiAodTogdVBsb3QsIHNlcmllc0lkeDogbnVtYmVyKSA9PiB7XG4gICAgdVBsb3Qub3JpZW50KFxuICAgICAgdSxcbiAgICAgIHNlcmllc0lkeCxcbiAgICAgIChcbiAgICAgICAgc2VyaWVzLFxuICAgICAgICBkYXRhWCxcbiAgICAgICAgZGF0YVksXG4gICAgICAgIHNjYWxlWCxcbiAgICAgICAgc2NhbGVZLFxuICAgICAgICB2YWxUb1Bvc1gsXG4gICAgICAgIHZhbFRvUG9zWSxcbiAgICAgICAgeE9mZixcbiAgICAgICAgeU9mZixcbiAgICAgICAgeERpbSxcbiAgICAgICAgeURpbSxcbiAgICAgICAgbW92ZVRvLFxuICAgICAgICBsaW5lVG8sXG4gICAgICAgIHJlY3QsXG4gICAgICAgIGFyY1xuICAgICAgKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS50aW1lKCdoZWF0bWFwUGF0aHNTcGFyc2UnKTtcblxuICAgICAgICBbZGF0YVgsIGRhdGFZXSA9IGRhdGFZIGFzIHVua25vd24gYXMgbnVtYmVyW11bXTtcblxuICAgICAgICBsZXQgcG9pbnRzID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBsZXQgZmlsbFBhdGhzID0gW3BvaW50c107XG4gICAgICAgIGxldCBmaWxsUGFsZXR0ZSA9IFtleGVtcGxhckNvbG9yID8/ICdyZ2JhKDI1NSwwLDI1NSwwLjcpJ107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhWC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB5VmFsID0gZGF0YVlbaV0hO1xuICAgICAgICAgIHlWYWwgLT0gMC41OyAvLyBjZW50ZXIgdmVydGljYWxseSBpbiBidWNrZXQgKHdoZW4gdGlsZXMgYXJlIGxlKVxuICAgICAgICAgIC8vIHktcmFuZG9taXplIHZlcnRpY2FsbHkgdG8gZGlzdHJpYnV0ZSBleGVtcGxhcnMgaW4gc2FtZSBidWNrZXQgYXQgc2FtZSB0aW1lXG4gICAgICAgICAgbGV0IHJhbmRTaWduID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSAqIDIgLSAxO1xuICAgICAgICAgIHlWYWwgKz0gcmFuZFNpZ24gKiAwLjUgKiBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICAgICAgbGV0IHggPSB2YWxUb1Bvc1goZGF0YVhbaV0sIHNjYWxlWCwgeERpbSwgeE9mZik7XG4gICAgICAgICAgbGV0IHkgPSB2YWxUb1Bvc1koeVZhbCwgc2NhbGVZLCB5RGltLCB5T2ZmKTtcbiAgICAgICAgICBsZXQgdyA9IDg7XG4gICAgICAgICAgbGV0IGggPSA4O1xuXG4gICAgICAgICAgcmVjdChwb2ludHMsIHggLSB3IC8gMiwgeSAtIGggLyAyLCB3LCBoKTtcblxuICAgICAgICAgIG9wdHMuZWFjaCh1LCBzZXJpZXNJZHgsIGksIHggLSB3IC8gMiwgeSAtIGggLyAyLCB3LCBoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHUuY3R4LnNhdmUoKTtcbiAgICAgICAgdS5jdHgucmVjdCh1LmJib3gubGVmdCwgdS5iYm94LnRvcCwgdS5iYm94LndpZHRoLCB1LmJib3guaGVpZ2h0KTtcbiAgICAgICAgdS5jdHguY2xpcCgpO1xuICAgICAgICBmaWxsUGF0aHMuZm9yRWFjaCgocCwgaSkgPT4ge1xuICAgICAgICAgIHUuY3R4LmZpbGxTdHlsZSA9IGZpbGxQYWxldHRlW2ldO1xuICAgICAgICAgIHUuY3R4LmZpbGwocCk7XG4gICAgICAgIH0pO1xuICAgICAgICB1LmN0eC5yZXN0b3JlKCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuLy8gYWNjZXB0cyB4TWF4LCB5TWluLCB5TWF4LCBjb3VudFxuLy8geGJpbnNpemU/IHggdGlsZSBzaXplcyBhcmUgdW5pZm9ybT9cbmV4cG9ydCBmdW5jdGlvbiBoZWF0bWFwUGF0aHNTcGFyc2Uob3B0czogUGF0aGJ1aWxkZXJPcHRzKSB7XG4gIGNvbnN0IHsgZGlzcCwgZWFjaCwgZ2FwID0gMSwgaGlkZUxFID0gLUluZmluaXR5LCBoaWRlR0UgPSBJbmZpbml0eSB9ID0gb3B0cztcblxuICBjb25zdCBweFJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbztcblxuICBjb25zdCByb3VuZCA9IGdhcCEgPj0gQ1JJU1BfRURHRVNfR0FQX01JTiA/IE1hdGgucm91bmQgOiAodjogbnVtYmVyKSA9PiB2O1xuXG4gIGNvbnN0IGNlbGxHYXAgPSBNYXRoLnJvdW5kKGdhcCEgKiBweFJhdGlvKTtcblxuICByZXR1cm4gKHU6IHVQbG90LCBzZXJpZXNJZHg6IG51bWJlcikgPT4ge1xuICAgIHVQbG90Lm9yaWVudChcbiAgICAgIHUsXG4gICAgICBzZXJpZXNJZHgsXG4gICAgICAoXG4gICAgICAgIHNlcmllcyxcbiAgICAgICAgZGF0YVgsXG4gICAgICAgIGRhdGFZLFxuICAgICAgICBzY2FsZVgsXG4gICAgICAgIHNjYWxlWSxcbiAgICAgICAgdmFsVG9Qb3NYLFxuICAgICAgICB2YWxUb1Bvc1ksXG4gICAgICAgIHhPZmYsXG4gICAgICAgIHlPZmYsXG4gICAgICAgIHhEaW0sXG4gICAgICAgIHlEaW0sXG4gICAgICAgIG1vdmVUbyxcbiAgICAgICAgbGluZVRvLFxuICAgICAgICByZWN0LFxuICAgICAgICBhcmNcbiAgICAgICkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUudGltZSgnaGVhdG1hcFBhdGhzU3BhcnNlJyk7XG5cbiAgICAgICAgbGV0IGQgPSB1LmRhdGFbc2VyaWVzSWR4XTtcbiAgICAgICAgY29uc3QgeE1heHMgPSBkWzBdIGFzIHVua25vd24gYXMgbnVtYmVyW107IC8vIHhNYXgsIGRvIHdlIGdldCBpbnRlcnZhbD9cbiAgICAgICAgY29uc3QgeU1pbnMgPSBkWzFdIGFzIHVua25vd24gYXMgbnVtYmVyW107XG4gICAgICAgIGNvbnN0IHlNYXhzID0gZFsyXSBhcyB1bmtub3duIGFzIG51bWJlcltdO1xuICAgICAgICBjb25zdCBjb3VudHMgPSBkWzNdIGFzIHVua25vd24gYXMgbnVtYmVyW107XG4gICAgICAgIGNvbnN0IGRsZW4gPSB4TWF4cy5sZW5ndGg7XG5cbiAgICAgICAgLy8gZmlsbCBjb2xvcnMgYXJlIG1hcHBlZCBmcm9tIGludGVycG9sYXRpbmcgZGVuc2l0aWVzIC8gY291bnRzIGFsb25nIHNvbWUgZ3JhZGllbnRcbiAgICAgICAgLy8gKHNob3VsZCBiZSBxdWFudGl6ZWQgdG8gNjQgY29sb3JzL2xldmVscyBtYXguIGUuZy4gMTYpXG4gICAgICAgIGxldCBmaWxscyA9IGRpc3AuZmlsbC52YWx1ZXModSwgc2VyaWVzSWR4KTtcbiAgICAgICAgbGV0IGZpbGxQYWxldHRlID0gZGlzcC5maWxsLmluZGV4ID8/IFsuLi5uZXcgU2V0KGZpbGxzKV07XG5cbiAgICAgICAgbGV0IGZpbGxQYXRocyA9IGZpbGxQYWxldHRlLm1hcCgoY29sb3IpID0+IG5ldyBQYXRoMkQoKSk7XG5cbiAgICAgICAgLy8gY2FjaGUgYWxsIHRpbGUgYm91bmRzXG4gICAgICAgIGxldCB4T2ZmcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgbGV0IHlPZmZzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeE1heHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgeE1heCA9IHhNYXhzW2ldO1xuICAgICAgICAgIGxldCB5TWluID0geU1pbnNbaV07XG4gICAgICAgICAgbGV0IHlNYXggPSB5TWF4c1tpXTtcblxuICAgICAgICAgIGlmICgheE9mZnMuaGFzKHhNYXgpKSB7XG4gICAgICAgICAgICB4T2Zmcy5zZXQoeE1heCwgcm91bmQodmFsVG9Qb3NYKHhNYXgsIHNjYWxlWCwgeERpbSwgeE9mZikpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXlPZmZzLmhhcyh5TWluKSkge1xuICAgICAgICAgICAgeU9mZnMuc2V0KHlNaW4sIHJvdW5kKHZhbFRvUG9zWSh5TWluLCBzY2FsZVksIHlEaW0sIHlPZmYpKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCF5T2Zmcy5oYXMoeU1heCkpIHtcbiAgICAgICAgICAgIHlPZmZzLnNldCh5TWF4LCByb3VuZCh2YWxUb1Bvc1koeU1heCwgc2NhbGVZLCB5RGltLCB5T2ZmKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVuaWZvcm0geCBzaXplIChpbnRlcnZhbCwgc3RlcClcbiAgICAgICAgbGV0IHhTaXplVW5pZm9ybSA9IHhPZmZzLmdldCh4TWF4cy5maW5kKCh2KSA9PiB2ICE9PSB4TWF4c1swXSkpIC0geE9mZnMuZ2V0KHhNYXhzWzBdKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRsZW47IGkrKykge1xuICAgICAgICAgIGlmIChjb3VudHNbaV0gPD0gaGlkZUxFIHx8IGNvdW50c1tpXSA+PSBoaWRlR0UpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCB4TWF4ID0geE1heHNbaV07XG4gICAgICAgICAgbGV0IHlNaW4gPSB5TWluc1tpXTtcbiAgICAgICAgICBsZXQgeU1heCA9IHlNYXhzW2ldO1xuXG4gICAgICAgICAgbGV0IHhNYXhQeCA9IHhPZmZzLmdldCh4TWF4KTsgLy8geFNpemUgaXMgZnJvbSBpbnRlcnZhbCwgb3IgaW5mZXJyZWQgZGVsdGE/XG4gICAgICAgICAgbGV0IHlNaW5QeCA9IHlPZmZzLmdldCh5TWluKTtcbiAgICAgICAgICBsZXQgeU1heFB4ID0geU9mZnMuZ2V0KHlNYXgpO1xuXG4gICAgICAgICAgbGV0IHhTaXplID0geFNpemVVbmlmb3JtO1xuICAgICAgICAgIGxldCB5U2l6ZSA9IHlNaW5QeCAtIHlNYXhQeDtcblxuICAgICAgICAgIC8vIGNsYW1wIG1pbiB0aWxlIHNpemUgdG8gMXB4XG4gICAgICAgICAgeFNpemUgPSBNYXRoLm1heCgxLCB4U2l6ZSAtIGNlbGxHYXApO1xuICAgICAgICAgIHlTaXplID0gTWF0aC5tYXgoMSwgeVNpemUgLSBjZWxsR2FwKTtcblxuICAgICAgICAgIGxldCB4ID0geE1heFB4O1xuICAgICAgICAgIGxldCB5ID0geU1pblB4O1xuXG4gICAgICAgICAgbGV0IGZpbGxQYXRoID0gZmlsbFBhdGhzW2ZpbGxzW2ldXTtcblxuICAgICAgICAgIHJlY3QoZmlsbFBhdGgsIHgsIHksIHhTaXplLCB5U2l6ZSk7XG5cbiAgICAgICAgICBlYWNoKHUsIDEsIGksIHgsIHksIHhTaXplLCB5U2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB1LmN0eC5zYXZlKCk7XG4gICAgICAgIC8vXHR1LmN0eC5nbG9iYWxBbHBoYSA9IDAuODtcbiAgICAgICAgdS5jdHgucmVjdCh1LmJib3gubGVmdCwgdS5iYm94LnRvcCwgdS5iYm94LndpZHRoLCB1LmJib3guaGVpZ2h0KTtcbiAgICAgICAgdS5jdHguY2xpcCgpO1xuICAgICAgICBmaWxsUGF0aHMuZm9yRWFjaCgocCwgaSkgPT4ge1xuICAgICAgICAgIHUuY3R4LmZpbGxTdHlsZSA9IGZpbGxQYWxldHRlW2ldO1xuICAgICAgICAgIHUuY3R4LmZpbGwocCk7XG4gICAgICAgIH0pO1xuICAgICAgICB1LmN0eC5yZXN0b3JlKCk7XG5cbiAgICAgICAgLy9jb25zb2xlLnRpbWVFbmQoJ2hlYXRtYXBQYXRoc1NwYXJzZScpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGJvdW5kZWRNaW5NYXggPSAoXG4gIHZhbHVlczogbnVtYmVyW10sXG4gIG1pblZhbHVlPzogbnVtYmVyLFxuICBtYXhWYWx1ZT86IG51bWJlcixcbiAgaGlkZUxFID0gLUluZmluaXR5LFxuICBoaWRlR0UgPSBJbmZpbml0eVxuKSA9PiB7XG4gIGlmIChtaW5WYWx1ZSA9PSBudWxsKSB7XG4gICAgbWluVmFsdWUgPSBJbmZpbml0eTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVzW2ldID4gaGlkZUxFICYmIHZhbHVlc1tpXSA8IGhpZGVHRSkge1xuICAgICAgICBtaW5WYWx1ZSA9IE1hdGgubWluKG1pblZhbHVlLCB2YWx1ZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChtYXhWYWx1ZSA9PSBudWxsKSB7XG4gICAgbWF4VmFsdWUgPSAtSW5maW5pdHk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlc1tpXSA+IGhpZGVMRSAmJiB2YWx1ZXNbaV0gPCBoaWRlR0UpIHtcbiAgICAgICAgbWF4VmFsdWUgPSBNYXRoLm1heChtYXhWYWx1ZSwgdmFsdWVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gW21pblZhbHVlLCBtYXhWYWx1ZV07XG59O1xuXG5leHBvcnQgY29uc3QgdmFsdWVzVG9GaWxscyA9ICh2YWx1ZXM6IG51bWJlcltdLCBwYWxldHRlOiBzdHJpbmdbXSwgbWluVmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlcikgPT4ge1xuICBsZXQgcmFuZ2UgPSBNYXRoLm1heChtYXhWYWx1ZSAtIG1pblZhbHVlLCAxKTtcblxuICBsZXQgcGFsZXR0ZVNpemUgPSBwYWxldHRlLmxlbmd0aDtcblxuICBsZXQgaW5kZXhlZEZpbGxzID0gQXJyYXkodmFsdWVzLmxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpbmRleGVkRmlsbHNbaV0gPVxuICAgICAgdmFsdWVzW2ldIDwgbWluVmFsdWVcbiAgICAgICAgPyAwXG4gICAgICAgIDogdmFsdWVzW2ldID4gbWF4VmFsdWVcbiAgICAgICAgPyBwYWxldHRlU2l6ZSAtIDFcbiAgICAgICAgOiBNYXRoLm1pbihwYWxldHRlU2l6ZSAtIDEsIE1hdGguZmxvb3IoKHBhbGV0dGVTaXplICogKHZhbHVlc1tpXSAtIG1pblZhbHVlKSkgLyByYW5nZSkpO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4ZWRGaWxscztcbn07XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVRoZW1lMiIsIkdSQURJRU5UX1NUT1BTIiwiQ29sb3JTY2FsZSIsImNvbG9yUGFsZXR0ZSIsIm1pbiIsIm1heCIsImRpc3BsYXkiLCJob3ZlclZhbHVlIiwidXNlU3RvcHNQZXJjZW50YWdlIiwiY29sb3JzIiwic2V0Q29sb3JzIiwic2NhbGVIb3ZlciIsInNldFNjYWxlSG92ZXIiLCJpc1Nob3duIiwidmFsdWUiLCJwZXJjZW50Iiwic2V0UGVyY2VudCIsInRoZW1lIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiZ2V0R3JhZGllbnRTdG9wcyIsImNvbG9yQXJyYXkiLCJzdG9wcyIsIm9uU2NhbGVNb3VzZU1vdmUiLCJldmVudCIsImRpdk9mZnNldCIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFdpZHRoIiwidGFyZ2V0Iiwibm9ybVBlcmNlbnRhZ2UiLCJNYXRoIiwiZmxvb3IiLCJzY2FsZVZhbHVlIiwib25TY2FsZU1vdXNlTGVhdmUiLCJjbGFtcFBlcmNlbnQxMDAiLCJzY2FsZVdyYXBwZXIiLCJzY2FsZUdyYWRpZW50IiwidW5kZWZpbmVkIiwiZm9sbG93ZXJDb250YWluZXIiLCJmb2xsb3dlciIsImxlZnQiLCJsZWdlbmRWYWx1ZXMiLCJjb2xvckNvdW50IiwibGVuZ3RoIiwiaW5jciIsInBlciIsImNvbG9yIiwicHVzaCIsImdyYWRpZW50RW5kIiwic2tpcCIsImNlaWwiLCJncmFkaWVudFN0b3BzIiwiU2V0IiwiaSIsImFkZCIsInYiLCJqb2luIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJ0ZXh0IiwidXNlUmVmIiwiRGF0YUZyYW1lVHlwZSIsIkZpZWxkVHlwZSIsImZvcm1hdHRlZFZhbHVlVG9TdHJpbmciLCJnZXRGaWVsZERpc3BsYXlOYW1lIiwiTGlua0J1dHRvbiIsIlZlcnRpY2FsR3JvdXAiLCJnZXREYXNoYm9hcmRTcnYiLCJpc0hlYXRtYXBDZWxsc0RlbnNlIiwicmVhZEhlYXRtYXBSb3dzQ3VzdG9tTWV0YSIsIkhlYXRtYXBDZWxsTGF5b3V0IiwiRGF0YUhvdmVyVmlldyIsIkhlYXRtYXBIb3ZlclZpZXciLCJwcm9wcyIsImhvdmVyIiwic2VyaWVzSWR4IiwiZGF0YSIsImV4ZW1wbGFycyIsImRhdGFJZHgiLCJIZWF0bWFwSG92ZXJDZWxsIiwic2hvd0hpc3RvZ3JhbSIsImluZGV4IiwieEZpZWxkIiwiaGVhdG1hcCIsImZpZWxkcyIsInlGaWVsZCIsImNvdW50RmllbGQiLCJ4RGlzcCIsInR5cGUiLCJ0aW1lIiwidG9vbHRpcFRpbWVGb3JtYXQiLCJkYXNoYm9hcmQiLCJnZXRDdXJyZW50IiwiZm9ybWF0RGF0ZSIsInhWYWxzIiwidmFsdWVzIiwidG9BcnJheSIsInlWYWxzIiwiY291bnRWYWxzIiwibWV0YSIsInlEaXNwU3JjIiwieU9yZGluYWxEaXNwbGF5IiwieURpc3AiLCJ5VmFsdWVJZHgiLCJ5QnVja2V0Q291bnQiLCJ5TWluSWR4IiwieUxheW91dCIsImxlIiwieU1heElkeCIsInlCdWNrZXRNaW4iLCJ5QnVja2V0TWF4IiwieEJ1Y2tldE1pbiIsInhCdWNrZXRNYXgiLCJ4QnVja2V0U2l6ZSIsImNvdW50IiwidmlzaWJsZUZpZWxkcyIsImZpbHRlciIsImYiLCJCb29sZWFuIiwiY29uZmlnIiwiY3VzdG9tIiwiaGlkZUZyb20iLCJ0b29sdGlwIiwibGlua3MiLCJsaW5rTG9va3VwIiwiZmllbGQiLCJnZXRMaW5rcyIsImdldCIsImRpc3AiLCJudW1lcmljIiwiY2FsY3VsYXRlZFZhbHVlIiwidmFsdWVSb3dJbmRleCIsImZvckVhY2giLCJsaW5rIiwia2V5IiwidGl0bGUiLCJocmVmIiwiaGFzIiwiY2FuIiwiaGlzdENzc1dpZHRoIiwiaGlzdENzc0hlaWdodCIsImhpc3RDYW5XaWR0aCIsInJvdW5kIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImhpc3RDYW5IZWlnaHQiLCJoaXN0Q3R4IiwiY3VycmVudCIsImdldENvbnRleHQiLCJmcm9tSWR4IiwidG9JZHgiLCJtYXhDb3VudCIsImMiLCJwSG92IiwiUGF0aDJEIiwicFJlc3QiLCJqIiwicGN0WSIsInBjdFgiLCJwIiwicmVjdCIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJpc1NwYXJzZSIsIkhlYXRtYXBDZWxscyIsInJlbmRlcllCdWNrZXRzIiwidW5rbm93biIsIndpZHRoIiwiaGVpZ2h0IiwibWFwIiwib25DbGljayIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsIlBhbmVsRGF0YUVycm9yVmlldyIsIlBvcnRhbCIsIlNjYWxlRGlzdHJpYnV0aW9uIiwiVVBsb3RDaGFydCIsInVzZVBhbmVsQ29udGV4dCIsInVzZVN0eWxlczIiLCJWaXpMYXlvdXQiLCJWaXpUb29sdGlwQ29udGFpbmVyIiwiQ2xvc2VCdXR0b24iLCJwcmVwYXJlSGVhdG1hcERhdGEiLCJxdWFudGl6ZVNjaGVtZSIsInByZXBDb25maWciLCJIZWF0bWFwUGFuZWwiLCJpZCIsInRpbWVSYW5nZSIsInRpbWVab25lIiwib3B0aW9ucyIsImZpZWxkQ29uZmlnIiwiZXZlbnRCdXMiLCJvbkNoYW5nZVRpbWVSYW5nZSIsInJlcGxhY2VWYXJpYWJsZXMiLCJzeW5jIiwidGltZVJhbmdlUmVmIiwiaW5mbyIsImV4Iiwid2FybmluZyIsImZhY2V0cyIsImV4ZW1wbGFyc1hGYWNldCIsImV4ZW1wbGFyc3lGYWNldCIsInlNYXRjaFdpdGhMYWJlbCIsImhhc0xhYmVsZWRZIiwibWF0Y2hFeGVtcGxhcnNCeSIsImZpbmQiLCJuYW1lIiwibGFiZWwiLCJ5T3JkaW5hbExhYmVsIiwiaW5kZXhPZiIsInBhbGV0dGUiLCJzZXRIb3ZlciIsInNob3VsZERpc3BsYXlDbG9zZUJ1dHRvbiIsInNldFNob3VsZERpc3BsYXlDbG9zZUJ1dHRvbiIsImlzVG9vbFRpcE9wZW4iLCJvbkNsb3NlVG9vbFRpcCIsIm9uaG92ZXIiLCJvbmNsaWNrIiwiZXZ0Iiwic3RydWN0dXJlUmV2IiwiZGF0YVJlZiIsImJ1aWxkZXIiLCJzY2FsZUNvbmZpZyIsInNjYWxlRGlzdHJpYnV0aW9uIiwic2hvdyIsIm9uem9vbSIsImRlbHRhIiwieE1heCIsInhNaW4iLCJmcm9tIiwidG8iLCJnZXRUaW1lUmFuZ2UiLCJjZWxsR2FwIiwiaGlkZUxFIiwiZmlsdGVyVmFsdWVzIiwiaGlkZUdFIiwiZ2UiLCJleGVtcGxhckNvbG9yIiwieUF4aXNDb25maWciLCJ5QXhpcyIsInlTaXplRGl2aXNvciIsIkxvZyIsImNhbGN1bGF0aW9uIiwieUJ1Y2tldHMiLCJyZW5kZXJMZWdlbmQiLCJsZWdlbmQiLCJoZWF0bWFwVHlwZSIsImlzU3BhcnNlSGVhdG1hcCIsImNvdW50RmllbGRJZHgiLCJjb2xvclNjYWxlV3JhcHBlciIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJ2aXpXaWR0aCIsInZpekhlaWdodCIsIngiLCJwYWdlWCIsInkiLCJwYWdlWSIsImNsb3NlQnV0dG9uU3BhY2VyIiwieUhpc3RvZ3JhbSIsImdldERpc3BsYXlQcm9jZXNzb3IiLCJvdXRlckpvaW5EYXRhRnJhbWVzIiwiY2FsY3VsYXRlSGVhdG1hcEZyb21EYXRhIiwicm93c1RvQ2VsbHNIZWF0bWFwIiwiYm91bmRlZE1pbk1heCIsImZyYW1lcyIsInNlcmllcyIsImFubm90YXRpb25zIiwiY2FsY3VsYXRlIiwiZ2V0RGVuc2VIZWF0bWFwRGF0YSIsInJvd3NIZWF0bWFwIiwiZnJhbWUiLCJnZXRTcGFyc2VIZWF0bWFwRGF0YSIsIkhlYXRtYXBSb3dzIiwidW5pdCIsImRlY2ltYWxzIiwicm93c0ZyYW1lIiwidXBkYXRlRmllbGREaXNwbGF5IiwiY2VsbFZhbHVlcyIsInhOYW1lIiwieU5hbWUiLCJ2YWx1ZUZpZWxkIiwibnVtYmVyIiwieHMiLCJ5cyIsImRsZW4iLCJ5QmluUXR5IiwibGFzdEluZGV4T2YiLCJ4QmluUXR5IiwieUJpbkluY3IiLCJ4QmluSW5jciIsInlCdWNrZXRTaXplIiwieEJ1Y2tldENvdW50IiwieExheW91dCIsIm9wdHMiLCJBeGlzUGxhY2VtZW50IiwiVmlzaWJpbGl0eU1vZGUiLCJIZWF0bWFwQ2FsY3VsYXRpb25Nb2RlIiwiZGVmYXVsdFBhbmVsT3B0aW9ucyIsIkhlYXRtYXBDb2xvck1vZGUiLCJjb2xvclNjaGVtZXMiLCJoZWF0bWFwTWlncmF0aW9uSGFuZGxlciIsInBhbmVsIiwiT2JqZWN0Iiwia2V5cyIsImhlYXRtYXBDaGFuZ2VkSGFuZGxlciIsImFuZ3VsYXIiLCJwcmV2UGx1Z2luSWQiLCJwcmV2T3B0aW9ucyIsInByZXZGaWVsZENvbmZpZyIsImFuZ3VsYXJUb1JlYWN0SGVhdG1hcCIsImJ1Y2tldEZyYW1lIiwiZGVmYXVsdHMiLCJvdmVycmlkZXMiLCJkYXRhRm9ybWF0Iiwib2xkWUF4aXMiLCJsb2dCYXNlIiwieEJ1Y2tldHMiLCJtb2RlIiwiU2l6ZSIsInhCdWNrZXROdW1iZXIiLCJDb3VudCIsInlCdWNrZXROdW1iZXIiLCJzcGxpdEZhY3RvciIsInNjYWxlIiwibG9nIiwic3RlcHMiLCJhc051bWJlciIsImNhcmRzIiwiY2FyZFBhZGRpbmciLCJjZWxsUmFkaXVzIiwiY2FyZFJvdW5kIiwiYXhpc1BsYWNlbWVudCIsIkhpZGRlbiIsIkxlZnQiLCJyZXZlcnNlIiwicmV2ZXJzZVlCdWNrZXRzIiwiYXhpc1dpZHRoIiwiZm9ybWF0IiwidG9vbHRpcERlY2ltYWxzIiwibGF5b3V0IiwiZ2V0SGVhdG1hcENlbGxMYXlvdXQiLCJ5QnVja2V0Qm91bmQiLCJzaG93VmFsdWUiLCJOZXZlciIsImhpZGVaZXJvQnVja2V0cyIsIlNjaGVtZSIsImNvbG9yU2NoZW1lIiwic2NoZW1lIiwiT3BhY2l0eSIsImNhcmRDb2xvciIsImF1dG8iLCJkZWZhdWx0VmFsdWUiLCJudW0iLCJpc05hTiIsIm1vZGVsVmVyc2lvbiIsImZyZWV6ZSIsIkhlYXRtYXBDb2xvclNjYWxlIiwiRXhwb25lbnRpYWwiLCJleHBvbmVudCIsIkF1dG8iLCJkZWZhdWx0UGFuZWxGaWVsZENvbmZpZyIsIkZpZWxkQ29uZmlnUHJvcGVydHkiLCJpZGVudGl0eU92ZXJyaWRlUHJvY2Vzc29yIiwiUGFuZWxQbHVnaW4iLCJhZGRIaWRlRnJvbSIsIlNjYWxlRGlzdHJpYnV0aW9uRWRpdG9yIiwiYWRkSGVhdG1hcENhbGN1bGF0aW9uT3B0aW9ucyIsIkhlYXRtYXBTdWdnZXN0aW9uc1N1cHBsaWVyIiwicGx1Z2luIiwidXNlRmllbGRDb25maWciLCJkaXNhYmxlU3RhbmRhcmRPcHRpb25zIiwiTGlua3MiLCJ1c2VDdXN0b21Db25maWciLCJhZGRDdXN0b21FZGl0b3IiLCJwYXRoIiwiY2F0ZWdvcnkiLCJlZGl0b3IiLCJvdmVycmlkZSIsIkxpbmVhciIsInNob3VsZEFwcGx5IiwicHJvY2VzcyIsImhpZGVGcm9tRGVmYXVsdHMiLCJzZXRQYW5lbENoYW5nZUhhbmRsZXIiLCJzZXRNaWdyYXRpb25IYW5kbGVyIiwic2V0UGFuZWxPcHRpb25zIiwiY29udGV4dCIsImlzT3JkaW5hbFkiLCJ0aGVtZTIiLCJhZGRSYWRpbyIsInNldHRpbmdzIiwiUmlnaHQiLCJhZGRVbml0UGlja2VyIiwiaXNDbGVhcmFibGUiLCJhZGROdW1iZXJJbnB1dCIsInBsYWNlaG9sZGVyIiwiYWRkVGV4dElucHV0IiwiYXhpc0xhYmVsIiwiYWRkQm9vbGVhblN3aXRjaCIsImFkZENvbG9yUGlja2VyIiwic2hvd0lmIiwiYWRkU2xpZGVySW5wdXQiLCJzdGVwIiwiYWRkU2VsZWN0IiwiZGVzY3JpcHRpb24iLCJzZXRTdWdnZXN0aW9uc1N1cHBsaWVyIiwiZDMiLCJkM1NjYWxlQ2hyb21hdGljIiwidGlueWNvbG9yIiwiaW52ZXJ0IiwibmFtZTIiLCJERUZBVUxUX1NDSEVNRSIsInZpc3VhbGl6YXRpb24iLCJnZXRDb2xvckJ5TmFtZSIsInRvUGVyY2VudGFnZVJnYiIsInNjYWxlUG93IiwiZG9tYWluIiwicmFuZ2UiLCJzY2FsZUxpbmVhciIsImEiLCJ0b1N0cmluZyIsImZuTmFtZSIsImludGVycG9sYXRlIiwicmdiU3RyIiwicmdiIiwibWF0Y2hBbGwiLCJwYWRTdGFydCIsImlzRGFyayIsImlzTGlnaHQiLCJnZXRTdWdnZXN0aW9uc0ZvckRhdGEiLCJkYXRhU3VtbWFyeSIsImhhc0RhdGEiLCJ0aW1lRmllbGRDb3VudCIsIm51bWJlckZpZWxkQ291bnQiLCJnZXRMaXN0QXBwZW5kZXIiLCJwbHVnaW5JZCIsInVQbG90IiwiRGFzaGJvYXJkQ3Vyc29yU3luYyIsIkRhdGFIb3ZlckNsZWFyRXZlbnQiLCJEYXRhSG92ZXJFdmVudCIsImdldFZhbHVlRm9ybWF0IiwiaW5jclJvdW5kRG4iLCJpbmNyUm91bmRVcCIsIlNjYWxlRGlyZWN0aW9uIiwiU2NhbGVPcmllbnRhdGlvbiIsIlVQbG90Q29uZmlnQnVpbGRlciIsInBvaW50V2l0aGluIiwiUXVhZHRyZWUiLCJ4U2NhbGVLZXkiLCJ4U2NhbGVVbml0IiwicHhSYXRpbyIsImV4ZW1wbGFyRmlsbENvbG9yIiwicXQiLCJoUmVjdCIsImFkZEhvb2siLCJ1Iiwicm9vdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbCIsImFzc2lnbiIsInN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwib3ZlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaXNEcmFnZ2luZyIsImN1cnNvciIsImRyYWciLCJfeCIsIl95IiwicG9zVG9WYWwiLCJzZWxlY3QiLCJzZXRTZWxlY3QiLCJ0b3AiLCJzY2FsZXMiLCJ2YWx1ZU9mIiwicXVldWVNaWNyb3Rhc2siLCJzZXRTY2FsZSIsInIiLCJwYXlsb2FkIiwicG9pbnQiLCJob3ZlckV2ZW50IiwicGVuZGluZ09ubGVhdmUiLCJpZHhzIiwic2VsIiwicm93SW5kZXgiLCJwdWJsaXNoIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImJib3giLCJjbGVhciIsInMiLCJfcGF0aHMiLCJzZXRNb2RlIiwiYWRkU2NhbGUiLCJzY2FsZUtleSIsImlzVGltZSIsIm9yaWVudGF0aW9uIiwiSG9yaXpvbnRhbCIsImRpcmVjdGlvbiIsImFkZEF4aXMiLCJwbGFjZW1lbnQiLCJCb3R0b20iLCJ5RmllbGRDb25maWciLCJ5U2NhbGUiLCJ5QXhpc1JldmVyc2UiLCJzaG91bGRVc2VMb2dTY2FsZSIsImlzT3JkaWFuYWxZIiwieVNjYWxlS2V5IiwicmFuZG9tIiwic3Vic3RyaW5nIiwiVmVydGljYWwiLCJEb3duIiwiVXAiLCJkaXN0cmlidXRpb24iLCJkYXRhTWluIiwiZGF0YU1heCIsInNjYWxlTWluIiwic2NhbGVNYXgiLCJyYW5nZUxvZyIsImV4cGxpY2l0TWluIiwiZXhwbGljaXRNYXgiLCJ5RXhwIiwibWluRXhwYW5kZWQiLCJtYXhFeHBhbmRlZCIsImxvZzIiLCJsb2cxMCIsIm1pbkxvZyIsIm1heExvZyIsIk51bWJlciIsImlzSW50ZWdlciIsImJ1Y2tldFNpemUiLCJkaXNwWSIsInNpemUiLCJmb3JtYXRWYWx1ZSIsInNwbGl0cyIsInNlbGYiLCJpZHgiLCJ1bnNoaWZ0IiwieU1pbkRpc3BsYXkiLCJwYXRoQnVpbGRlciIsImhlYXRtYXBQYXRoc1NwYXJzZSIsImhlYXRtYXBQYXRoc0RlbnNlIiwiYWRkU2VyaWVzIiwic29ydGVkIiwiZWFjaCIsInhTaXplIiwieVNpemUiLCJ3IiwiaCIsInNpZHgiLCJkaWR4IiwiZ2FwIiwieEFsaWduIiwieUFsaWduIiwiY291bnRGYWNldElkeCIsInZhbHVlc1RvRmlsbHMiLCJoZWF0bWFwUGF0aHNQb2ludHMiLCJjeCIsImN5IiwibyIsInBvaW50cyIsImlzSG92ZXJlZCIsIk9mZiIsImZpbHRlcnMiLCJwdWIiLCJzcmMiLCJzZXRTeW5jIiwic2V0Q3Vyc29yIiwiQ1JJU1BfRURHRVNfR0FQX01JTiIsIkluZmluaXR5Iiwib3JpZW50IiwiZGF0YVgiLCJkYXRhWSIsInNjYWxlWCIsInNjYWxlWSIsInZhbFRvUG9zWCIsInZhbFRvUG9zWSIsInhPZmYiLCJ5T2ZmIiwieERpbSIsInlEaW0iLCJtb3ZlVG8iLCJsaW5lVG8iLCJhcmMiLCJkIiwiY291bnRzIiwiZmlsbHMiLCJmaWxsUGFsZXR0ZSIsImZpbGxQYXRocyIsImRpc3RyIiwiYWJzIiwieE9mZnNldCIsInlPZmZzZXQiLCJjeXMiLCJzbGljZSIsImN4cyIsIkFycmF5IiwiZmlsbFBhdGgiLCJjdHgiLCJzYXZlIiwiY2xpcCIsInJlc3RvcmUiLCJ5VmFsIiwicmFuZFNpZ24iLCJ4TWF4cyIsInlNaW5zIiwieU1heHMiLCJ4T2ZmcyIsIk1hcCIsInlPZmZzIiwieU1pbiIsInlNYXgiLCJzZXQiLCJ4U2l6ZVVuaWZvcm0iLCJ4TWF4UHgiLCJ5TWluUHgiLCJ5TWF4UHgiLCJwYWxldHRlU2l6ZSIsImluZGV4ZWRGaWxscyJdLCJzb3VyY2VSb290IjoiIn0=