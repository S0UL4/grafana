(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["cloudMonitoringPlugin"],{

/***/ "./public/app/plugins/datasource/cloud-monitoring/CloudMonitoringMetricFindQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudMonitoringMetricFindQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");




class CloudMonitoringMetricFindQuery {
  constructor(datasource) {
    this.datasource = datasource;
  }

  async execute(query) {
    try {
      if (!query.projectName) {
        query.projectName = this.datasource.getDefaultProject();
      }

      switch (query.selectedQueryType) {
        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Projects:
          return this.handleProjectsQuery();

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Services:
          return this.handleServiceQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.MetricTypes:
          return this.handleMetricTypesQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelKeys:
          return this.handleLabelKeysQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelValues:
          return this.handleLabelValuesQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.ResourceTypes:
          return this.handleResourceTypeQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Aligners:
          return this.handleAlignersQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.AlignmentPeriods:
          return this.handleAlignmentPeriodQuery();

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Aggregations:
          return this.handleAggregationQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.SLOServices:
          return this.handleSLOServicesQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.SLO:
          return this.handleSLOQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Selectors:
          return this.handleSelectorQuery();

        default:
          return [];
      }
    } catch (error) {
      console.error(`Could not run CloudMonitoringMetricFindQuery ${query}`, error);
      return [];
    }
  }

  async handleProjectsQuery() {
    const projects = await this.datasource.getProjects();
    return projects.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleServiceQuery({
    projectName
  }) {
    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    const services = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.extractServicesFromMetricDescriptors)(metricDescriptors);
    return services.map(s => ({
      text: s.serviceShortName,
      value: s.service,
      expandable: true
    }));
  }

  async handleMetricTypesQuery({
    selectedService,
    projectName
  }) {
    if (!selectedService) {
      return [];
    }

    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    return (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getMetricTypesByService)(metricDescriptors, this.datasource.templateSrv.replace(selectedService)).map(s => ({
      text: s.displayName,
      value: s.type,
      expandable: true
    }));
  }

  async handleLabelKeysQuery({
    selectedMetricType,
    projectName
  }) {
    if (!selectedMetricType) {
      return [];
    }

    const labelKeys = await (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getLabelKeys)(this.datasource, selectedMetricType, projectName);
    return labelKeys.map(this.toFindQueryResult);
  }

  async handleLabelValuesQuery({
    selectedMetricType,
    labelKey,
    projectName
  }) {
    if (!selectedMetricType) {
      return [];
    }

    const refId = 'handleLabelValuesQuery'; // REDUCE_MEAN is needed so the groupBy is not ignored

    const labels = await this.datasource.getLabels(selectedMetricType, refId, projectName, {
      groupBys: [labelKey],
      crossSeriesReducer: 'REDUCE_MEAN'
    });
    const interpolatedKey = this.datasource.templateSrv.replace(labelKey);
    const values = labels.hasOwnProperty(interpolatedKey) ? labels[interpolatedKey] : [];
    return values.map(this.toFindQueryResult);
  }

  async handleResourceTypeQuery({
    selectedMetricType,
    projectName
  }) {
    var _labels$resourceType, _labels$resourceType2;

    if (!selectedMetricType) {
      return [];
    }

    const refId = 'handleResourceTypeQueryQueryType';
    const labels = await this.datasource.getLabels(selectedMetricType, refId, projectName);
    return (_labels$resourceType = (_labels$resourceType2 = labels['resource.type']) === null || _labels$resourceType2 === void 0 ? void 0 : _labels$resourceType2.map(this.toFindQueryResult)) !== null && _labels$resourceType !== void 0 ? _labels$resourceType : [];
  }

  async handleAlignersQuery({
    selectedMetricType,
    projectName
  }) {
    if (!selectedMetricType) {
      return [];
    }

    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    const descriptor = metricDescriptors.find(m => m.type === this.datasource.templateSrv.replace(selectedMetricType));

    if (!descriptor) {
      return [];
    }

    return (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getAlignmentOptionsByMetric)(descriptor.valueType, descriptor.metricKind).map(this.toFindQueryResult);
  }

  async handleAggregationQuery({
    selectedMetricType,
    projectName
  }) {
    if (!selectedMetricType) {
      return [];
    }

    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    const descriptor = metricDescriptors.find(m => m.type === this.datasource.templateSrv.replace(selectedMetricType));

    if (!descriptor) {
      return [];
    }

    return (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getAggregationOptionsByMetric)(descriptor.valueType, descriptor.metricKind).map(this.toFindQueryResult);
  }

  async handleSLOServicesQuery({
    projectName
  }) {
    const services = await this.datasource.getSLOServices(projectName);
    return services.map(this.toFindQueryResult);
  }

  async handleSLOQuery({
    selectedSLOService,
    projectName
  }) {
    const slos = await this.datasource.getServiceLevelObjectives(projectName, selectedSLOService);
    return slos.map(this.toFindQueryResult);
  }

  async handleSelectorQuery() {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.SELECTORS.map(this.toFindQueryResult);
  }

  handleAlignmentPeriodQuery() {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.ALIGNMENT_PERIODS.map(this.toFindQueryResult);
  }

  toFindQueryResult(x) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(x) ? {
      text: x,
      expandable: true
    } : Object.assign({}, x, {
      expandable: true
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/annotationSupport.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudMonitoringAnnotationSupport": () => (/* binding */ CloudMonitoringAnnotationSupport)
/* harmony export */ });
/* harmony import */ var _components_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AnnotationQueryEditor.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");

 // The legacy query format sets the title and text values to empty strings by default.
// If the title or text is not undefined at the top-level of the annotation target,
// then it is a legacy query.

const isLegacyCloudMonitoringAnnotation = query => {
  var _target, _target2;

  return ((_target = query.target) === null || _target === void 0 ? void 0 : _target.title) !== undefined || ((_target2 = query.target) === null || _target2 === void 0 ? void 0 : _target2.text) !== undefined;
};

const CloudMonitoringAnnotationSupport = ds => {
  return {
    prepareAnnotation: query => {
      if (!isLegacyCloudMonitoringAnnotation(query)) {
        return query;
      }

      const {
        enable,
        name,
        iconColor
      } = query;
      const {
        target
      } = query;
      const result = {
        datasource: query.datasource,
        enable,
        name,
        iconColor,
        target: {
          intervalMs: ds.intervalMs,
          refId: (target === null || target === void 0 ? void 0 : target.refId) || 'annotationQuery',
          type: 'annotationQuery',
          queryType: _types__WEBPACK_IMPORTED_MODULE_1__.QueryType.METRICS,
          metricQuery: {
            projectName: (target === null || target === void 0 ? void 0 : target.projectName) || ds.getDefaultProject(),
            editorMode: _types__WEBPACK_IMPORTED_MODULE_1__.EditorMode.Visual,
            metricType: (target === null || target === void 0 ? void 0 : target.metricType) || '',
            filters: (target === null || target === void 0 ? void 0 : target.filters) || [],
            metricKind: (target === null || target === void 0 ? void 0 : target.metricKind) || _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE,
            query: '',
            crossSeriesReducer: 'REDUCE_NONE',
            perSeriesAligner: _types__WEBPACK_IMPORTED_MODULE_1__.AlignmentTypes.ALIGN_NONE,
            title: (target === null || target === void 0 ? void 0 : target.title) || '',
            text: (target === null || target === void 0 ? void 0 : target.text) || ''
          }
        }
      };
      return result;
    },
    prepareQuery: anno => {
      if (!anno.target) {
        return undefined;
      }

      return Object.assign({}, anno.target, {
        queryType: _types__WEBPACK_IMPORTED_MODULE_1__.QueryType.METRICS,
        type: 'annotationQuery',
        metricQuery: Object.assign({}, anno.target.metricQuery)
      });
    },
    QueryEditor: _components_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_0__.AnnotationQueryEditor
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Aggregation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aggregation": () => (/* binding */ Aggregation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Aggregation = props => {
  const aggOptions = useAggregationOptionsByMetric(props);
  const selected = useSelectedFromOptions(aggOptions, props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.QueryEditorField, {
    labelWidth: 18,
    label: "Group by function",
    "data-testid": "cloud-monitoring-aggregation",
    htmlFor: `${props.refId}-group-by-function`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      width: 16,
      onChange: ({
        value
      }) => props.onChange(value),
      value: selected,
      options: [{
        label: 'Template Variables',
        options: props.templateVariableOptions
      }, {
        label: 'Aggregations',
        expanded: true,
        options: aggOptions
      }],
      placeholder: "Select Reducer",
      inputId: `${props.refId}-group-by-function`
    })
  });
};

const useAggregationOptionsByMetric = ({
  metricDescriptor
}) => {
  const valueType = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.valueType;
  const metricKind = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.metricKind;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!valueType || !metricKind) {
      return [];
    }

    return (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getAggregationOptionsByMetric)(valueType, metricKind).map(a => Object.assign({}, a, {
      label: a.text
    }));
  }, [valueType, metricKind]);
};

const useSelectedFromOptions = (aggOptions, props) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const allOptions = [...aggOptions, ...props.templateVariableOptions];
    return allOptions.find(s => s.value === props.crossSeriesReducer);
  }, [aggOptions, props.crossSeriesReducer, props.templateVariableOptions]);
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AliasBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AliasBy": () => (/* binding */ AliasBy)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const AliasBy = ({
  refId,
  value = '',
  onChange
}) => {
  const [alias, setAlias] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value !== null && value !== void 0 ? value : '');
  const propagateOnChange = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(onChange, 1000);

  onChange = e => {
    setAlias(e.target.value);
    propagateOnChange(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.QueryEditorRow, {
    label: "Alias by",
    htmlFor: `${refId}-alias-by`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
      id: `${refId}-alias-by`,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.INPUT_WIDTH,
      value: alias,
      onChange: onChange
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Alignment.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alignment": () => (/* binding */ Alignment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Alignment = ({
  refId,
  templateVariableOptions,
  onChange,
  query,
  customMetaData,
  datasource
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "Alignment function",
    tooltip: "The process of alignment consists of collecting all data points received in a fixed length of time, applying a function to combine those data points, and assigning a timestamp to the result.",
    fillComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.AlignmentPeriodLabel, {
      datasource: datasource,
      customMetaData: customMetaData
    }),
    htmlFor: `${refId}-alignment-function`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.AlignmentFunction, {
      inputId: `${refId}-alignment-function`,
      templateVariableOptions: templateVariableOptions,
      query: query,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorField, {
      label: "Alignment period",
      htmlFor: `${refId}-alignment-period`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.PeriodSelect, {
        inputId: `${refId}-alignment-period`,
        selectWidth: _constants__WEBPACK_IMPORTED_MODULE_1__.SELECT_WIDTH,
        templateVariableOptions: templateVariableOptions,
        current: query.alignmentPeriod,
        onChange: period => onChange(Object.assign({}, query, {
          alignmentPeriod: period
        })),
        aligmentPeriods: _constants__WEBPACK_IMPORTED_MODULE_1__.ALIGNMENT_PERIODS
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AlignmentFunction.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentFunction": () => (/* binding */ AlignmentFunction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlignmentFunction = ({
  inputId,
  query,
  templateVariableOptions,
  onChange
}) => {
  const {
    valueType,
    metricKind,
    perSeriesAligner: psa,
    preprocessor
  } = query;
  const {
    perSeriesAligner,
    alignOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getAlignmentPickerData)(valueType, metricKind, psa, preprocessor), [valueType, metricKind, psa, preprocessor]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
    width: _constants__WEBPACK_IMPORTED_MODULE_2__.SELECT_WIDTH,
    onChange: ({
      value
    }) => onChange(Object.assign({}, query, {
      perSeriesAligner: value
    })),
    value: [...alignOptions, ...templateVariableOptions].find(s => s.value === perSeriesAligner),
    options: [{
      label: 'Template Variables',
      options: templateVariableOptions
    }, {
      label: 'Alignment options',
      expanded: true,
      options: alignOptions
    }],
    placeholder: "Select Alignment",
    inputId: inputId
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AlignmentPeriodLabel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentPeriodLabel": () => (/* binding */ AlignmentPeriodLabel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const AlignmentPeriodLabel = ({
  customMetaData,
  datasource
}) => {
  const {
    perSeriesAligner,
    alignmentPeriod
  } = customMetaData;
  const formatAlignmentText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _alignment$text;

    if (!alignmentPeriod || !perSeriesAligner) {
      return '';
    }

    const alignment = _constants__WEBPACK_IMPORTED_MODULE_2__.ALIGNMENTS.find(ap => ap.value === datasource.templateSrv.replace(perSeriesAligner));
    const seconds = parseInt(alignmentPeriod !== null && alignmentPeriod !== void 0 ? alignmentPeriod : ''.replace(/[^0-9]/g, ''), 10);
    const hms = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.secondsToHms(seconds);
    return `${hms} interval (${(_alignment$text = alignment === null || alignment === void 0 ? void 0 : alignment.text) !== null && _alignment$text !== void 0 ? _alignment$text : ''})`;
  }, [datasource, perSeriesAligner, alignmentPeriod]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
    children: formatAlignmentText
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AnnotationQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationQueryEditor": () => (/* binding */ AnnotationQueryEditor),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _Experimental_MetricQueryEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/MetricQueryEditor.tsx");
/* harmony import */ var _MetricQueryEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _AnnotationsHelp;














const defaultQuery = datasource => ({
  editorMode: _types__WEBPACK_IMPORTED_MODULE_5__.EditorMode.Visual,
  projectName: datasource.getDefaultProject(),
  projects: [],
  metricType: '',
  filters: [],
  metricKind: _types__WEBPACK_IMPORTED_MODULE_5__.MetricKind.GAUGE,
  valueType: '',
  refId: 'annotationQuery',
  title: '',
  text: '',
  labels: {},
  variableOptionGroup: {},
  variableOptions: [],
  query: '',
  crossSeriesReducer: 'REDUCE_NONE',
  perSeriesAligner: _types__WEBPACK_IMPORTED_MODULE_5__.AlignmentTypes.ALIGN_NONE,
  alignmentPeriod: 'grafana-auto'
});
const AnnotationQueryEditor = props => {
  var _meta$custom;

  const {
    datasource,
    query,
    onRunQuery,
    data,
    onChange
  } = props;
  const meta = data !== null && data !== void 0 && data.series.length ? data === null || data === void 0 ? void 0 : data.series[0].meta : {};
  const customMetaData = (_meta$custom = meta === null || meta === void 0 ? void 0 : meta.custom) !== null && _meta$custom !== void 0 ? _meta$custom : {};
  const metricQuery = Object.assign({}, defaultQuery(datasource), query.metricQuery);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(metricQuery.title || '');
  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(metricQuery.text || '');
  const variableOptionGroup = {
    label: 'Template Variables',
    options: datasource.getVariables().map(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)
  };

  const handleQueryChange = metricQuery => onChange(Object.assign({}, query, {
    metricQuery
  }));

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleTextChange = e => {
    setText(e.target.value);
  };

  (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    onChange(Object.assign({}, query, {
      metricQuery: Object.assign({}, metricQuery, {
        title
      })
    }));
  }, 1000, [title, onChange]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    onChange(Object.assign({}, query, {
      metricQuery: Object.assign({}, metricQuery, {
        text
      })
    }));
  }, 1000, [text, onChange]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.cloudMonitoringExperimentalUI ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Experimental_MetricQueryEditor__WEBPACK_IMPORTED_MODULE_6__.MetricQueryEditor, {
      refId: query.refId,
      variableOptionGroup: variableOptionGroup,
      customMetaData: customMetaData,
      onChange: handleQueryChange,
      onRunQuery: onRunQuery,
      datasource: datasource,
      query: metricQuery
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_MetricQueryEditor__WEBPACK_IMPORTED_MODULE_7__.MetricQueryEditor, {
      refId: query.refId,
      variableOptionGroup: variableOptionGroup,
      customMetaData: customMetaData,
      onChange: handleQueryChange,
      onRunQuery: onRunQuery,
      datasource: datasource,
      query: metricQuery
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_8__.QueryEditorRow, {
      label: "Title",
      htmlFor: "annotation-query-title",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
        id: "annotation-query-title",
        value: title,
        width: _constants__WEBPACK_IMPORTED_MODULE_4__.INPUT_WIDTH,
        onChange: handleTitleChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_8__.QueryEditorRow, {
      label: "Text",
      htmlFor: "annotation-query-text",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
        id: "annotation-query-text",
        value: text,
        width: _constants__WEBPACK_IMPORTED_MODULE_4__.INPUT_WIDTH,
        onChange: handleTextChange
      })
    }), _AnnotationsHelp || (_AnnotationsHelp = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_8__.AnnotationsHelp, {}))]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AnnotationsHelp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationsHelp": () => (/* binding */ AnnotationsHelp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;




const AnnotationsHelp = () => {
  return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "gf-form grafana-info-box alert-info",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
        children: "Annotation Query Format"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: ["An annotation is an event that is overlaid on top of graphs. Annotation rendering is expensive so it is important to limit the number of rows returned.", ' ']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        children: "The Title and Text fields support templating and can use data returned from the query. For example, the Title field could have the following text:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("code", {
        children: [`${'{{metric.type}}'}`, " has value: ", `${'{{metric.value}}'}`]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: ["Example Result: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: "monitoring.googleapis.com/uptime_check/http_status has this value: 502"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
        children: "Patterns:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.value}}'}`
        }), " = value of the metric/point"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.type}}'}`
        }), " = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.name}}'}`
        }), " = name part of metric e.g. instance/cpu/usage_time"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.service}}'}`
        }), " = service part of metric e.g. compute"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.label.label_name}}'}`
        }), " = Metric label metadata e.g. metric.label.instance_name"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{resource.label.label_name}}'}`
        }), " = Resource label metadata e.g. resource.label.zone"]
      })]
    })
  }));
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/CloudMonitoringCheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudMonitoringCheatSheet)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _p, _code, _br, _code2, _br2, _br3, _label, _br4, _li, _li2, _li3, _li4, _li5, _li6, _li7, _li8, _li9, _li10, _li11, _li12;





class CloudMonitoringCheatSheet extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        children: "Cloud Monitoring alias patterns"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: "Format the legend keys any way you want by using alias patterns. Format the legend keys any way you want by using alias patterns."
        })), "Example:", _code || (_code = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
          children: `${'{{metric.name}} - {{metric.label.instance_name}}'}`
        })), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})), "Result: \xA0\xA0", _code2 || (_code2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
          children: "cpu/usage_time - server1-europe-west-1"
        })), _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})), _br3 || (_br3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})), _label || (_label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          children: "Patterns"
        })), _br4 || (_br4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              list-style: none;
            `,
          children: [_li || (_li = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metric.type}}'}`
            }), " = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"]
          })), _li2 || (_li2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metric.name}}'}`
            }), " = name part of metric e.g. instance/cpu/usage_time"]
          })), _li3 || (_li3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metric.service}}'}`
            }), " = service part of metric e.g. compute"]
          })), _li4 || (_li4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metric.label.label_name}}'}`
            }), " = Metric label metadata e.g. metric.label.instance_name"]
          })), _li5 || (_li5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{resource.label.label_name}}'}`
            }), " = Resource label metadata e.g. resource.label.zone"]
          })), _li6 || (_li6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metadata.system_labels.name}}'}`
            }), " = Meta data system labels e.g. metadata.system_labels.name. For this to work, the needs to be included in the group by"]
          })), _li7 || (_li7 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metadata.user_labels.name}}'}`
            }), " = Meta data user labels e.g. metadata.user_labels.name. For this to work, the needs to be included in the group by"]
          })), _li8 || (_li8 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{bucket}}'}`
            }), " = bucket boundary for distribution metrics when using a heatmap in Grafana"]
          })), _li9 || (_li9 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{project}}'}`
            }), " = The project name that was specified in the query editor"]
          })), _li10 || (_li10 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{service}}'}`
            }), " = The service id that was specified in the SLO query editor"]
          })), _li11 || (_li11 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{slo}}'}`
            }), " = The SLO id that was specified in the SLO query editor"]
          })), _li12 || (_li12 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{selector}}'}`
            }), " = The Selector function that was specified in the SLO query editor"]
          }))]
        })]
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/ConfigEditor/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_google_sdk__WEBPACK_IMPORTED_MODULE_1__.ConnectionConfig, Object.assign({}, this.props))
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/Aggregation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aggregation": () => (/* binding */ Aggregation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Aggregation = props => {
  const aggOptions = useAggregationOptionsByMetric(props);
  const selected = useSelectedFromOptions(aggOptions, props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
    label: "Group by function",
    "data-testid": "cloud-monitoring-aggregation",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
      width: "auto",
      onChange: ({
        value
      }) => props.onChange(value),
      value: selected,
      options: [{
        label: 'Template Variables',
        options: props.templateVariableOptions
      }, {
        label: 'Aggregations',
        expanded: true,
        options: aggOptions
      }],
      placeholder: "Select Reducer",
      inputId: `${props.refId}-group-by-function`
    })
  });
};

const useAggregationOptionsByMetric = ({
  metricDescriptor
}) => {
  const valueType = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.valueType;
  const metricKind = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.metricKind;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!valueType || !metricKind) {
      return [];
    }

    return (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getAggregationOptionsByMetric)(valueType, metricKind).map(a => Object.assign({}, a, {
      label: a.text
    }));
  }, [valueType, metricKind]);
};

const useSelectedFromOptions = (aggOptions, props) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const allOptions = [...aggOptions, ...props.templateVariableOptions];
    return allOptions.find(s => s.value === props.crossSeriesReducer);
  }, [aggOptions, props.crossSeriesReducer, props.templateVariableOptions]);
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/AliasBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AliasBy": () => (/* binding */ AliasBy)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const AliasBy = ({
  refId,
  value = '',
  onChange
}) => {
  const [alias, setAlias] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value !== null && value !== void 0 ? value : '');
  const propagateOnChange = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(onChange, 1000);

  onChange = e => {
    setAlias(e.target.value);
    propagateOnChange(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
      label: "Alias by",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
        id: `${refId}-alias-by`,
        width: _constants__WEBPACK_IMPORTED_MODULE_4__.SELECT_WIDTH,
        value: alias,
        onChange: onChange
      })
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/Alignment.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alignment": () => (/* binding */ Alignment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _AlignmentFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/AlignmentFunction.tsx");
/* harmony import */ var _AlignmentPeriodLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/AlignmentPeriodLabel.tsx");
/* harmony import */ var _PeriodSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/PeriodSelect.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const Alignment = ({
  refId,
  templateVariableOptions,
  onChange,
  query,
  customMetaData,
  datasource
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorFieldGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Alignment function",
        tooltip: "The process of alignment consists of collecting all data points received in a fixed length of time, applying a function to combine those data points, and assigning a timestamp to the result.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AlignmentFunction__WEBPACK_IMPORTED_MODULE_3__.AlignmentFunction, {
          inputId: `${refId}-alignment-function`,
          templateVariableOptions: templateVariableOptions,
          query: query,
          onChange: onChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Alignment period",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_PeriodSelect__WEBPACK_IMPORTED_MODULE_5__.PeriodSelect, {
          inputId: `${refId}-alignment-period`,
          selectWidth: _constants__WEBPACK_IMPORTED_MODULE_2__.SELECT_WIDTH,
          templateVariableOptions: templateVariableOptions,
          current: query.alignmentPeriod,
          onChange: period => onChange(Object.assign({}, query, {
            alignmentPeriod: period
          })),
          aligmentPeriods: _constants__WEBPACK_IMPORTED_MODULE_2__.ALIGNMENT_PERIODS
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        alignItems: "flex-end",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AlignmentPeriodLabel__WEBPACK_IMPORTED_MODULE_4__.AlignmentPeriodLabel, {
          datasource: datasource,
          customMetaData: customMetaData
        })
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/AlignmentFunction.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentFunction": () => (/* binding */ AlignmentFunction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlignmentFunction = ({
  inputId,
  query,
  templateVariableOptions,
  onChange
}) => {
  const {
    valueType,
    metricKind,
    perSeriesAligner: psa,
    preprocessor
  } = query;
  const {
    perSeriesAligner,
    alignOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getAlignmentPickerData)(valueType, metricKind, psa, preprocessor), [valueType, metricKind, psa, preprocessor]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
    width: _constants__WEBPACK_IMPORTED_MODULE_2__.SELECT_WIDTH,
    onChange: ({
      value
    }) => onChange(Object.assign({}, query, {
      perSeriesAligner: value
    })),
    value: [...alignOptions, ...templateVariableOptions].find(s => s.value === perSeriesAligner),
    options: [{
      label: 'Template Variables',
      options: templateVariableOptions
    }, {
      label: 'Alignment options',
      expanded: true,
      options: alignOptions
    }],
    placeholder: "Select Alignment",
    inputId: inputId
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/AlignmentPeriodLabel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentPeriodLabel": () => (/* binding */ AlignmentPeriodLabel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const AlignmentPeriodLabel = ({
  customMetaData,
  datasource
}) => {
  const {
    perSeriesAligner,
    alignmentPeriod
  } = customMetaData;
  const formatAlignmentText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _alignment$text;

    if (!alignmentPeriod || !perSeriesAligner) {
      return '';
    }

    const alignment = _constants__WEBPACK_IMPORTED_MODULE_2__.ALIGNMENTS.find(ap => ap.value === datasource.templateSrv.replace(perSeriesAligner));
    const seconds = parseInt(alignmentPeriod, 10);
    const hms = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.secondsToHms(seconds);
    return `${hms} interval (${(_alignment$text = alignment === null || alignment === void 0 ? void 0 : alignment.text) !== null && _alignment$text !== void 0 ? _alignment$text : ''})`;
  }, [datasource, perSeriesAligner, alignmentPeriod]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
    children: formatAlignmentText
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/GraphPeriod.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphPeriod": () => (/* binding */ GraphPeriod)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _code;









const GraphPeriod = ({
  refId,
  onChange,
  graphPeriod,
  variableOptionGroup
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
      label: "Graph period",
      htmlFor: `${refId}-graph-period`,
      tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: ["Set ", _code || (_code = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "graph_period"
        })), " which forces a preferred period between points. Automatically set to the current interval if left blank."]
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, {
          "data-testid": `${refId}-switch-graph-period`,
          value: graphPeriod !== 'disabled',
          onChange: e => onChange(e.currentTarget.checked ? '' : 'disabled')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.PeriodSelect, {
          inputId: `${refId}-graph-period`,
          templateVariableOptions: variableOptionGroup.options,
          current: graphPeriod,
          onChange: onChange,
          selectWidth: _constants__WEBPACK_IMPORTED_MODULE_3__.SELECT_WIDTH,
          disabled: graphPeriod === 'disabled',
          aligmentPeriods: _constants__WEBPACK_IMPORTED_MODULE_3__.GRAPH_PERIODS
        })]
      })
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/GroupBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupBy": () => (/* binding */ GroupBy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _Aggregation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/Aggregation.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const GroupBy = ({
  refId,
  labels: groupBys = [],
  query,
  onChange,
  variableOptionGroup,
  metricDescriptor
}) => {
  var _query$groupBys, _query$groupBys2;

  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [variableOptionGroup, ...(0,_functions__WEBPACK_IMPORTED_MODULE_4__.labelsToGroupedOptions)([...groupBys, ..._constants__WEBPACK_IMPORTED_MODULE_3__.SYSTEM_LABELS])], [groupBys, variableOptionGroup]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorFieldGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Group by",
        tooltip: "You can reduce the amount of data returned for a metric by combining different time series. To combine multiple time series, you can specify a grouping and a function. Grouping is done on the basis of labels. The grouping function is used to combine the time series in the group into a single time series.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, {
          inputId: `${refId}-group-by`,
          width: "auto",
          placeholder: "Choose label",
          options: options,
          value: (_query$groupBys = query.groupBys) !== null && _query$groupBys !== void 0 ? _query$groupBys : [],
          onChange: options => {
            onChange(Object.assign({}, query, {
              groupBys: options.map(o => o.value)
            }));
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Aggregation__WEBPACK_IMPORTED_MODULE_5__.Aggregation, {
        metricDescriptor: metricDescriptor,
        templateVariableOptions: variableOptionGroup.options,
        crossSeriesReducer: query.crossSeriesReducer,
        groupBys: (_query$groupBys2 = query.groupBys) !== null && _query$groupBys2 !== void 0 ? _query$groupBys2 : [],
        onChange: crossSeriesReducer => onChange(Object.assign({}, query, {
          crossSeriesReducer
        })),
        refId: refId
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/MetricQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricQueryEditor": () => (/* binding */ MetricQueryEditor),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery),
/* harmony export */   "defaultState": () => (/* binding */ defaultState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _MQLQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx");
/* harmony import */ var _AliasBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/AliasBy.tsx");
/* harmony import */ var _GraphPeriod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/GraphPeriod.tsx");
/* harmony import */ var _VisualMetricQueryEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/VisualMetricQueryEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const defaultState = {
  labels: {}
};
const defaultQuery = dataSource => ({
  editorMode: _types__WEBPACK_IMPORTED_MODULE_3__.EditorMode.Visual,
  projectName: dataSource.getDefaultProject(),
  metricType: '',
  metricKind: _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.GAUGE,
  valueType: '',
  crossSeriesReducer: 'REDUCE_MEAN',
  alignmentPeriod: 'cloud-monitoring-auto',
  perSeriesAligner: _types__WEBPACK_IMPORTED_MODULE_3__.AlignmentTypes.ALIGN_MEAN,
  groupBys: [],
  filters: [],
  aliasBy: '',
  query: '',
  preprocessor: _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.None
});

function Editor({
  refId,
  query,
  datasource,
  onChange: onQueryChange,
  onRunQuery,
  customMetaData,
  variableOptionGroup
}) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultState);
  const {
    projectName,
    metricType,
    groupBys,
    editorMode,
    crossSeriesReducer
  } = query;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (projectName && metricType) {
      datasource.getLabels(metricType, refId, projectName).then(labels => setState(prevState => Object.assign({}, prevState, {
        labels
      })));
    }
  }, [datasource, groupBys, metricType, projectName, refId, crossSeriesReducer]);
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(metricQuery => {
    onQueryChange(Object.assign({}, query, metricQuery));
    onRunQuery();
  }, [onQueryChange, onRunQuery, query]);
  const onMetricTypeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
    valueType,
    metricKind,
    type
  }) => {
    const preprocessor = metricKind === _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.GAUGE || valueType === _types__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.DISTRIBUTION ? _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.None : _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.Rate;
    const {
      perSeriesAligner
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getAlignmentPickerData)(valueType, metricKind, state.perSeriesAligner, preprocessor);
    onChange(Object.assign({}, query, {
      perSeriesAligner,
      metricType: type,
      valueType,
      metricKind,
      preprocessor
    }));
  }, [onChange, query, state]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRows, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.Project, {
      refId: refId,
      templateVariableOptions: variableOptionGroup.options,
      projectName: projectName,
      datasource: datasource,
      onChange: projectName => {
        onChange(Object.assign({}, query, {
          projectName
        }));
      }
    }), editorMode === _types__WEBPACK_IMPORTED_MODULE_3__.EditorMode.Visual && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VisualMetricQueryEditor__WEBPACK_IMPORTED_MODULE_8__.VisualMetricQueryEditor, {
      refId: refId,
      labels: state.labels,
      variableOptionGroup: variableOptionGroup,
      customMetaData: customMetaData,
      onMetricTypeChange: onMetricTypeChange,
      onChange: onChange,
      datasource: datasource,
      query: query
    }), editorMode === _types__WEBPACK_IMPORTED_MODULE_3__.EditorMode.MQL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_MQLQueryEditor__WEBPACK_IMPORTED_MODULE_5__.MQLQueryEditor, {
        onChange: q => onQueryChange(Object.assign({}, query, {
          query: q
        })),
        onRunQuery: onRunQuery,
        query: query.query
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_GraphPeriod__WEBPACK_IMPORTED_MODULE_7__.GraphPeriod, {
        onChange: graphPeriod => onQueryChange(Object.assign({}, query, {
          graphPeriod
        })),
        graphPeriod: query.graphPeriod,
        refId: refId,
        variableOptionGroup: variableOptionGroup
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AliasBy__WEBPACK_IMPORTED_MODULE_6__.AliasBy, {
      refId: refId,
      value: query.aliasBy,
      onChange: aliasBy => {
        onChange(Object.assign({}, query, {
          aliasBy
        }));
      }
    })]
  });
}

const MetricQueryEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Editor);

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/Metrics.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Metrics": () => (/* binding */ Metrics)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








function Metrics(props) {
  const [metricDescriptors, setMetricDescriptors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [metricDescriptor, setMetricDescriptor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [metrics, setMetrics] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [service, setService] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const selectStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.getSelectStyles)(theme);
  const customStyle = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const {
    metricType,
    templateVariableOptions,
    projectName,
    datasource,
    onChange,
    children
  } = props;
  const {
    templateSrv
  } = datasource;
  const getSelectedMetricDescriptor = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((metricDescriptors, metricType) => {
    return metricDescriptors.find(md => md.type === templateSrv.replace(metricType));
  }, [templateSrv]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const getMetricsList = metricDescriptors => {
      const selectedMetricDescriptor = getSelectedMetricDescriptor(metricDescriptors, metricType);

      if (!selectedMetricDescriptor) {
        return [];
      }

      const metricsByService = metricDescriptors.filter(m => m.service === selectedMetricDescriptor.service).map(m => ({
        service: m.service,
        value: m.type,
        label: m.displayName,
        component: function optionComponent() {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: customStyle,
              children: m.type
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: selectStyles.optionDescription,
              children: m.description
            })]
          });
        }
      }));
      return metricsByService;
    };

    const loadMetricDescriptors = async () => {
      if (projectName) {
        const metricDescriptors = await datasource.getMetricTypes(projectName);
        const services = getServicesList(metricDescriptors);
        const metrics = getMetricsList(metricDescriptors);
        const service = metrics.length > 0 ? metrics[0].service : '';
        const metricDescriptor = getSelectedMetricDescriptor(metricDescriptors, metricType);
        setMetricDescriptors(metricDescriptors);
        setServices(services);
        setMetrics(metrics);
        setService(service);
        setMetricDescriptor(metricDescriptor);
      }
    };

    loadMetricDescriptors();
  }, [datasource, getSelectedMetricDescriptor, metricType, projectName, customStyle, selectStyles.optionDescription]);

  const onServiceChange = ({
    value: service
  }) => {
    const metrics = metricDescriptors.filter(m => m.service === templateSrv.replace(service)).map(m => ({
      service: m.service,
      value: m.type,
      label: m.displayName,
      description: m.description
    }));

    if (metrics.length > 0 && !metrics.some(m => m.value === templateSrv.replace(metricType))) {
      onMetricTypeChange(metrics[0]);
      setService(service);
      setMetrics(metrics);
    } else {
      setService(service);
      setMetrics(metrics);
    }
  };

  const onMetricTypeChange = ({
    value
  }) => {
    const metricDescriptor = getSelectedMetricDescriptor(metricDescriptors, value);
    setMetricDescriptor(metricDescriptor);
    onChange(Object.assign({}, metricDescriptor, {
      type: value
    }));
  };

  const getServicesList = metricDescriptors => {
    const services = metricDescriptors.map(m => ({
      value: m.service,
      label: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.startCase)(m.serviceShortName)
    }));
    return services.length > 0 ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqBy)(services, s => s.value) : [];
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.EditorRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.EditorFieldGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.EditorField, {
          label: "Service",
          width: "auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
            width: "auto",
            onChange: onServiceChange,
            value: [...services, ...templateVariableOptions].find(s => s.value === service),
            options: [{
              label: 'Template Variables',
              options: templateVariableOptions
            }, ...services],
            placeholder: "Select Services",
            inputId: `${props.refId}-service`
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.EditorField, {
          label: "Metric name",
          width: "auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
            width: "auto",
            onChange: onMetricTypeChange,
            value: [...metrics, ...templateVariableOptions].find(s => s.value === metricType),
            options: [{
              label: 'Template Variables',
              options: templateVariableOptions
            }, ...metrics],
            placeholder: "Select Metric",
            inputId: `${props.refId}-select-metric`
          })
        })]
      })
    }), children(metricDescriptor)]
  });
}

const getStyles = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  label: grafana-select-option-description;
  font-weight: normal;
  font-style: italic;
  color: ${theme.colors.text.secondary};
`;

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/PeriodSelect.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodSelect": () => (/* binding */ PeriodSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



function PeriodSelect({
  inputId,
  templateVariableOptions,
  onChange,
  current,
  selectWidth,
  disabled,
  aligmentPeriods
}) {
  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => aligmentPeriods.map(ap => Object.assign({}, ap, {
    label: ap.text
  })), [aligmentPeriods]);
  const visibleOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => options.filter(ap => !ap.hidden), [options]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
    width: selectWidth,
    onChange: ({
      value
    }) => onChange(value),
    value: [...options, ...templateVariableOptions].find(s => s.value === current),
    options: [{
      label: 'Template Variables',
      options: templateVariableOptions
    }, {
      label: 'Aggregations',
      expanded: true,
      options: visibleOptions
    }],
    placeholder: "Select Period",
    inputId: inputId,
    disabled: disabled,
    allowCustomValue: true
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/Preprocessor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preprocessor": () => (/* binding */ Preprocessor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const NONE_OPTION = {
  label: 'None',
  value: _types__WEBPACK_IMPORTED_MODULE_4__.PreprocessorType.None
};
const Preprocessor = ({
  query,
  metricDescriptor,
  onChange
}) => {
  var _query$preprocessor;

  const options = useOptions(metricDescriptor);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
      label: "Pre-processing",
      tooltip: "Preprocessing options are displayed when the selected metric has a metric kind of delta or cumulative. The specific options available are determined by the metic's value type. If you select 'Rate', data points are aligned and converted to a rate per time series. If you select 'Delta', data points are aligned by their delta (difference) per time series",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
        onChange: value => {
          const {
            valueType,
            metricKind,
            perSeriesAligner: psa
          } = query;
          const {
            perSeriesAligner
          } = (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getAlignmentPickerData)(valueType, metricKind, psa, value);
          onChange(Object.assign({}, query, {
            preprocessor: value,
            perSeriesAligner
          }));
        },
        value: (_query$preprocessor = query.preprocessor) !== null && _query$preprocessor !== void 0 ? _query$preprocessor : _types__WEBPACK_IMPORTED_MODULE_4__.PreprocessorType.None,
        options: options
      })
    })
  });
};

const useOptions = metricDescriptor => {
  const metricKind = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.metricKind;
  const valueType = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.valueType;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!metricKind || metricKind === _types__WEBPACK_IMPORTED_MODULE_4__.MetricKind.GAUGE || valueType === _types__WEBPACK_IMPORTED_MODULE_4__.ValueTypes.DISTRIBUTION) {
      return [NONE_OPTION];
    }

    const options = [NONE_OPTION, {
      label: 'Rate',
      value: _types__WEBPACK_IMPORTED_MODULE_4__.PreprocessorType.Rate,
      description: 'Data points are aligned and converted to a rate per time series'
    }];
    return metricKind === _types__WEBPACK_IMPORTED_MODULE_4__.MetricKind.CUMULATIVE ? [...options, {
      label: 'Delta',
      value: _types__WEBPACK_IMPORTED_MODULE_4__.PreprocessorType.Delta,
      description: 'Data points are aligned by their delta (difference) per time series'
    }] : options;
  }, [metricKind, valueType]);
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/QueryHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryHeader": () => (/* binding */ QueryHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _FlexItem;








const EDITOR_MODES = [{
  label: 'Builder',
  value: _types__WEBPACK_IMPORTED_MODULE_4__.EditorMode.Visual
}, {
  label: 'MQL',
  value: _types__WEBPACK_IMPORTED_MODULE_4__.EditorMode.MQL
}];
const QueryHeader = props => {
  const {
    query,
    metricQuery,
    sloQuery,
    onChange,
    onRunQuery
  } = props;
  const {
    queryType
  } = query;
  const {
    editorMode
  } = metricQuery;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorHeader, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.InlineSelect, {
      label: "Query type",
      options: _constants__WEBPACK_IMPORTED_MODULE_3__.QUERY_TYPES,
      value: queryType,
      onChange: ({
        value
      }) => {
        onChange(Object.assign({}, query, {
          sloQuery,
          queryType: value
        }));
        onRunQuery();
      }
    }), _FlexItem || (_FlexItem = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
      grow: 1
    })), queryType !== _types__WEBPACK_IMPORTED_MODULE_4__.QueryType.SLO && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
      size: "sm",
      options: EDITOR_MODES,
      value: editorMode || _types__WEBPACK_IMPORTED_MODULE_4__.EditorMode.Visual,
      onChange: value => {
        onChange(Object.assign({}, query, {
          metricQuery: Object.assign({}, metricQuery, {
            editorMode: value
          })
        }));
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Experimental/VisualMetricQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualMetricQueryEditor": () => (/* binding */ VisualMetricQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _Alignment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/Alignment.tsx");
/* harmony import */ var _GroupBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/GroupBy.tsx");
/* harmony import */ var _Metrics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/Metrics.tsx");
/* harmony import */ var _Preprocessor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/Preprocessor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










function Editor({
  refId,
  query,
  labels,
  datasource,
  onChange,
  onMetricTypeChange,
  customMetaData,
  variableOptionGroup
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Metrics__WEBPACK_IMPORTED_MODULE_4__.Metrics, {
    refId: refId,
    projectName: query.projectName,
    metricType: query.metricType,
    templateVariableOptions: variableOptionGroup.options,
    datasource: datasource,
    onChange: onMetricTypeChange,
    children: metric => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.LabelFilter, {
        labels: labels,
        filters: query.filters,
        onChange: filters => onChange(Object.assign({}, query, {
          filters
        })),
        variableOptionGroup: variableOptionGroup
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Preprocessor__WEBPACK_IMPORTED_MODULE_5__.Preprocessor, {
        metricDescriptor: metric,
        query: query,
        onChange: onChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_GroupBy__WEBPACK_IMPORTED_MODULE_3__.GroupBy, {
        refId: refId,
        labels: Object.keys(labels),
        query: query,
        onChange: onChange,
        variableOptionGroup: variableOptionGroup,
        metricDescriptor: metric
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Alignment__WEBPACK_IMPORTED_MODULE_2__.Alignment, {
        refId: refId,
        datasource: datasource,
        templateVariableOptions: variableOptionGroup.options,
        query: query,
        customMetaData: customMetaData,
        onChange: onChange
      })]
    })
  });
}

const VisualMetricQueryEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Editor);

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Fields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditorField": () => (/* binding */ QueryEditorField),
/* harmony export */   "QueryEditorRow": () => (/* binding */ QueryEditorRow),
/* harmony export */   "VariableQueryField": () => (/* binding */ VariableQueryField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["children", "label", "tooltip", "fillComponent", "noFillEnd", "labelWidth", "htmlFor"],
      _excluded2 = ["children", "label", "tooltip", "labelWidth"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const VariableQueryField = ({
  label,
  onChange,
  value,
  options,
  allowCustomValue = false
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
    label: label,
    labelWidth: 20,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
      width: 25,
      allowCustomValue: allowCustomValue,
      value: value,
      onChange: ({
        value
      }) => onChange(value),
      options: options
    })
  });
};
const QueryEditorRow = _ref => {
  let {
    children,
    label,
    tooltip,
    fillComponent,
    noFillEnd = false,
    labelWidth = _constants__WEBPACK_IMPORTED_MODULE_3__.LABEL_WIDTH,
    htmlFor
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", Object.assign({
    className: "gf-form"
  }, rest, {
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, {
      width: labelWidth,
      tooltip: tooltip,
      htmlFor: htmlFor,
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
          margin-right: 4px;
        `,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        spacing: "xs",
        width: "auto",
        children: children
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: 'gf-form--grow',
      children: noFillEnd || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: 'gf-form-label gf-form-label--grow',
        children: fillComponent
      })
    })]
  }));
};
const QueryEditorField = _ref2 => {
  let {
    children,
    label,
    tooltip,
    labelWidth = _constants__WEBPACK_IMPORTED_MODULE_3__.INNER_LABEL_WIDTH
  } = _ref2,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, Object.assign({
      width: labelWidth,
      tooltip: tooltip
    }, rest, {
      children: label
    })), children]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/GraphPeriod.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphPeriod": () => (/* binding */ GraphPeriod)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _code;








const GraphPeriod = ({
  refId,
  onChange,
  graphPeriod,
  variableOptionGroup
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.QueryEditorRow, {
      label: "Graph period",
      htmlFor: `${refId}-graph-period`,
      tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: ["Set ", _code || (_code = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
          children: "graph_period"
        })), " which forces a preferred period between points. Automatically set to the current interval if left blank."]
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, {
        "data-testid": `${refId}-switch-graph-period`,
        value: graphPeriod !== 'disabled',
        onChange: e => onChange(e.currentTarget.checked ? '' : 'disabled')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.PeriodSelect, {
        inputId: `${refId}-graph-period`,
        templateVariableOptions: variableOptionGroup.options,
        current: graphPeriod,
        onChange: onChange,
        selectWidth: _constants__WEBPACK_IMPORTED_MODULE_2__.SELECT_WIDTH,
        disabled: graphPeriod === 'disabled',
        aligmentPeriods: _constants__WEBPACK_IMPORTED_MODULE_2__.GRAPH_PERIODS
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/GroupBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupBy": () => (/* binding */ GroupBy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const GroupBy = ({
  refId,
  labels: groupBys = [],
  query,
  onChange,
  variableOptionGroup,
  metricDescriptor
}) => {
  var _query$groupBys, _query$groupBys2;

  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [variableOptionGroup, ...(0,_functions__WEBPACK_IMPORTED_MODULE_3__.labelsToGroupedOptions)([...groupBys, ..._constants__WEBPACK_IMPORTED_MODULE_2__.SYSTEM_LABELS])], [groupBys, variableOptionGroup]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(___WEBPACK_IMPORTED_MODULE_4__.QueryEditorRow, {
    label: "Group by",
    tooltip: "You can reduce the amount of data returned for a metric by combining different time series. To combine multiple time series, you can specify a grouping and a function. Grouping is done on the basis of labels. The grouping function is used to combine the time series in the group into a single time series.",
    htmlFor: `${refId}-group-by`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, {
      inputId: `${refId}-group-by`,
      width: _constants__WEBPACK_IMPORTED_MODULE_2__.INPUT_WIDTH,
      placeholder: "Choose label",
      options: options,
      value: (_query$groupBys = query.groupBys) !== null && _query$groupBys !== void 0 ? _query$groupBys : [],
      onChange: options => {
        onChange(Object.assign({}, query, {
          groupBys: options.map(o => o.value)
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Aggregation, {
      metricDescriptor: metricDescriptor,
      templateVariableOptions: variableOptionGroup.options,
      crossSeriesReducer: query.crossSeriesReducer,
      groupBys: (_query$groupBys2 = query.groupBys) !== null && _query$groupBys2 !== void 0 ? _query$groupBys2 : [],
      onChange: crossSeriesReducer => onChange(Object.assign({}, query, {
        crossSeriesReducer
      })),
      refId: refId
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/LabelFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelFilter": () => (/* binding */ LabelFilter)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["value", "isOpen", "invalid"],
      _excluded2 = ["value"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const operators = ['=', '!=', '=~', '!=~'];
const FilterButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((_ref, ref) => {
  let rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, Object.assign({}, rest, {
    ref: ref,
    variant: "secondary",
    icon: "plus",
    "aria-label": "Add filter"
  }));
});
FilterButton.displayName = 'FilterButton';
const OperatorButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((_ref2, ref) => {
  let {
    value
  } = _ref2,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, Object.assign({}, rest, {
    ref: ref,
    variant: "secondary",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      className: "query-segment-operator",
      children: value === null || value === void 0 ? void 0 : value.label
    })
  }));
});
OperatorButton.displayName = 'OperatorButton';
const LabelFilter = ({
  labels = {},
  filters: filterArray,
  onChange,
  variableOptionGroup
}) => {
  var _AddFilter;

  const filters = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_functions__WEBPACK_IMPORTED_MODULE_5__.stringArrayToFilters)(filterArray), [filterArray]);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [variableOptionGroup, ...(0,_functions__WEBPACK_IMPORTED_MODULE_5__.labelsToGroupedOptions)(Object.keys(labels))], [labels, variableOptionGroup]);
  const filtersToStringArray = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(filters => {
    const strArr = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(filters.map(({
      key,
      operator,
      value,
      condition
    }) => [key, operator, value, condition]));
    return strArr.slice(0, strArr.length - 1);
  }, []);

  const AddFilter = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
      allowCustomValue: true,
      options: [variableOptionGroup, ...(0,_functions__WEBPACK_IMPORTED_MODULE_5__.labelsToGroupedOptions)(Object.keys(labels))],
      onChange: ({
        value: key = ''
      }) => onChange(filtersToStringArray([...filters, {
        key,
        operator: '=',
        condition: 'AND',
        value: ''
      }])),
      menuPlacement: "bottom",
      renderControl: FilterButton
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.QueryEditorRow, {
    label: "Filter",
    tooltip: 'To reduce the amount of data charted, apply a filter. A filter has three components: a label, a comparison, and a value. The comparison can be an equality, inequality, or regular expression.',
    noFillEnd: filters.length > 1,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VerticalGroup, {
      spacing: "xs",
      width: "auto",
      children: [filters.map(({
        key,
        operator,
        value,
        condition
      }, index) => {
        // Add the current key and value as options if they are manually entered
        const keyPresent = options.some(op => {
          if (op.options) {
            return options.some(opp => opp.label === key);
          }

          return op.label === key;
        });

        if (!keyPresent) {
          options.push({
            label: key,
            value: key
          });
        }

        const valueOptions = labels.hasOwnProperty(key) ? [variableOptionGroup, ...labels[key].map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)] : [variableOptionGroup];
        const valuePresent = valueOptions.some(op => {
          return op.label === value;
        });

        if (!valuePresent) {
          valueOptions.push({
            label: value,
            value
          });
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          spacing: "xs",
          width: "auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            "aria-label": "Filter label key",
            width: _constants__WEBPACK_IMPORTED_MODULE_4__.SELECT_WIDTH,
            allowCustomValue: true,
            formatCreateLabel: v => `Use label key: ${v}`,
            value: key,
            options: options,
            onChange: ({
              value: key = ''
            }) => {
              onChange(filtersToStringArray(filters.map((f, i) => i === index ? {
                key,
                operator,
                condition,
                value: ''
              } : f)));
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            value: operator,
            options: operators.map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption),
            onChange: ({
              value: operator = '='
            }) => onChange(filtersToStringArray(filters.map((f, i) => i === index ? Object.assign({}, f, {
              operator
            }) : f))),
            menuPlacement: "bottom",
            renderControl: OperatorButton
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            "aria-label": "Filter label value",
            width: _constants__WEBPACK_IMPORTED_MODULE_4__.SELECT_WIDTH,
            formatCreateLabel: v => `Use label value: ${v}`,
            allowCustomValue: true,
            value: value,
            placeholder: "add filter value",
            options: valueOptions,
            onChange: ({
              value = ''
            }) => onChange(filtersToStringArray(filters.map((f, i) => i === index ? Object.assign({}, f, {
              value
            }) : f)))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "secondary",
            size: "md",
            icon: "trash-alt",
            "aria-label": "Remove",
            onClick: () => onChange(filtersToStringArray(filters.filter((_, i) => i !== index)))
          }), index + 1 === filters.length && Object.values(filters).every(({
            value
          }) => value) && (_AddFilter || (_AddFilter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(AddFilter, {})))]
        }, index);
      }), !filters.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(AddFilter, {})]
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MQLQueryEditor": () => (/* binding */ MQLQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function MQLQueryEditor({
  query,
  onChange,
  onRunQuery
}) {
  const onKeyDown = event => {
    if (event.key === 'Enter' && (event.shiftKey || event.ctrlKey)) {
      event.preventDefault();
      onRunQuery();
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
      name: "Query",
      className: "slate-query-field",
      value: query,
      rows: 10,
      placeholder: "Enter a Cloud Monitoring MQL query (Run with Shift+Enter)",
      onBlur: onRunQuery,
      onChange: e => onChange(e.currentTarget.value),
      onKeyDown: onKeyDown
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricQueryEditor": () => (/* binding */ MetricQueryEditor),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery),
/* harmony export */   "defaultState": () => (/* binding */ defaultState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _GraphPeriod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/GraphPeriod.tsx");
/* harmony import */ var _MQLQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const defaultState = {
  labels: {}
};
const defaultQuery = dataSource => ({
  editorMode: _types__WEBPACK_IMPORTED_MODULE_2__.EditorMode.Visual,
  projectName: dataSource.getDefaultProject(),
  metricType: '',
  metricKind: _types__WEBPACK_IMPORTED_MODULE_2__.MetricKind.GAUGE,
  valueType: '',
  crossSeriesReducer: 'REDUCE_MEAN',
  alignmentPeriod: 'cloud-monitoring-auto',
  perSeriesAligner: _types__WEBPACK_IMPORTED_MODULE_2__.AlignmentTypes.ALIGN_MEAN,
  groupBys: [],
  filters: [],
  aliasBy: '',
  query: '',
  preprocessor: _types__WEBPACK_IMPORTED_MODULE_2__.PreprocessorType.None
});

function Editor({
  refId,
  query,
  datasource,
  onChange: onQueryChange,
  onRunQuery,
  customMetaData,
  variableOptionGroup
}) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultState);
  const {
    projectName,
    metricType,
    groupBys,
    editorMode,
    crossSeriesReducer
  } = query;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (projectName && metricType) {
      datasource.getLabels(metricType, refId, projectName).then(labels => setState(prevState => Object.assign({}, prevState, {
        labels
      })));
    }
  }, [datasource, groupBys, metricType, projectName, refId, crossSeriesReducer]);
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(metricQuery => {
    onQueryChange(Object.assign({}, query, metricQuery));
    onRunQuery();
  }, [onQueryChange, onRunQuery, query]);
  const onMetricTypeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
    valueType,
    metricKind,
    type
  }) => {
    const preprocessor = metricKind === _types__WEBPACK_IMPORTED_MODULE_2__.MetricKind.GAUGE || valueType === _types__WEBPACK_IMPORTED_MODULE_2__.ValueTypes.DISTRIBUTION ? _types__WEBPACK_IMPORTED_MODULE_2__.PreprocessorType.None : _types__WEBPACK_IMPORTED_MODULE_2__.PreprocessorType.Rate;
    const {
      perSeriesAligner
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getAlignmentPickerData)(valueType, metricKind, state.perSeriesAligner, preprocessor);
    onChange(Object.assign({}, query, {
      perSeriesAligner,
      metricType: type,
      valueType,
      metricKind,
      preprocessor
    }));
  }, [onChange, query, state]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.Project, {
      refId: refId,
      templateVariableOptions: variableOptionGroup.options,
      projectName: projectName,
      datasource: datasource,
      onChange: projectName => {
        onChange(Object.assign({}, query, {
          projectName
        }));
      }
    }), editorMode === _types__WEBPACK_IMPORTED_MODULE_2__.EditorMode.Visual && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.VisualMetricQueryEditor, {
      refId: refId,
      labels: state.labels,
      variableOptionGroup: variableOptionGroup,
      customMetaData: customMetaData,
      onMetricTypeChange: onMetricTypeChange,
      onChange: onChange,
      datasource: datasource,
      query: query
    }), editorMode === _types__WEBPACK_IMPORTED_MODULE_2__.EditorMode.MQL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MQLQueryEditor__WEBPACK_IMPORTED_MODULE_4__.MQLQueryEditor, {
        onChange: q => onQueryChange(Object.assign({}, query, {
          query: q
        })),
        onRunQuery: onRunQuery,
        query: query.query
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_GraphPeriod__WEBPACK_IMPORTED_MODULE_3__.GraphPeriod, {
        onChange: graphPeriod => onQueryChange(Object.assign({}, query, {
          graphPeriod
        })),
        graphPeriod: query.graphPeriod,
        refId: refId,
        variableOptionGroup: variableOptionGroup
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.AliasBy, {
      refId: refId,
      value: query.aliasBy,
      onChange: aliasBy => {
        onChange(Object.assign({}, query, {
          aliasBy
        }));
      }
    })]
  });
}

const MetricQueryEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Editor);

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Metrics.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Metrics": () => (/* binding */ Metrics)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function Metrics(props) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    metricDescriptors: [],
    metrics: [],
    services: [],
    service: '',
    metric: '',
    projectName: null
  });
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const selectStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.getSelectStyles)(theme);
  const customStyle = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const {
    services,
    service,
    metrics,
    metricDescriptors
  } = state;
  const {
    metricType,
    templateVariableOptions,
    projectName,
    templateSrv,
    datasource,
    onChange,
    children
  } = props;
  const getSelectedMetricDescriptor = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((metricDescriptors, metricType) => {
    return metricDescriptors.find(md => md.type === templateSrv.replace(metricType));
  }, [templateSrv]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const getMetricsList = metricDescriptors => {
      const selectedMetricDescriptor = getSelectedMetricDescriptor(metricDescriptors, metricType);

      if (!selectedMetricDescriptor) {
        return [];
      }

      const metricsByService = metricDescriptors.filter(m => m.service === selectedMetricDescriptor.service).map(m => ({
        service: m.service,
        value: m.type,
        label: m.displayName,
        component: function optionComponent() {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: customStyle,
              children: m.type
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: selectStyles.optionDescription,
              children: m.description
            })]
          });
        }
      }));
      return metricsByService;
    };

    const loadMetricDescriptors = async () => {
      if (projectName) {
        const metricDescriptors = await datasource.getMetricTypes(projectName);
        const services = getServicesList(metricDescriptors);
        const metrics = getMetricsList(metricDescriptors);
        const service = metrics.length > 0 ? metrics[0].service : '';
        const metricDescriptor = getSelectedMetricDescriptor(metricDescriptors, metricType);
        setState(prevState => Object.assign({}, prevState, {
          metricDescriptors,
          services,
          metrics,
          service: service,
          metricDescriptor
        }));
      }
    };

    loadMetricDescriptors();
  }, [datasource, getSelectedMetricDescriptor, metricType, projectName, customStyle, selectStyles.optionDescription]);

  const onServiceChange = ({
    value: service
  }) => {
    const metrics = metricDescriptors.filter(m => m.service === templateSrv.replace(service)).map(m => ({
      service: m.service,
      value: m.type,
      label: m.displayName,
      description: m.description
    }));

    if (metrics.length > 0 && !metrics.some(m => m.value === templateSrv.replace(metricType))) {
      onMetricTypeChange(metrics[0], {
        service,
        metrics
      });
    } else {
      setState(Object.assign({}, state, {
        service,
        metrics
      }));
    }
  };

  const onMetricTypeChange = ({
    value
  }, extra = {}) => {
    const metricDescriptor = getSelectedMetricDescriptor(state.metricDescriptors, value);
    setState(Object.assign({}, state, {
      metricDescriptor
    }, extra));
    onChange(Object.assign({}, metricDescriptor, {
      type: value
    }));
  };

  const getServicesList = metricDescriptors => {
    const services = metricDescriptors.map(m => ({
      value: m.service,
      label: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.startCase)(m.serviceShortName)
    }));
    return services.length > 0 ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqBy)(services, s => s.value) : [];
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_5__.QueryEditorRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.QueryEditorField, {
        labelWidth: _constants__WEBPACK_IMPORTED_MODULE_4__.LABEL_WIDTH,
        label: "Service",
        htmlFor: `${props.refId}-service`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          width: _constants__WEBPACK_IMPORTED_MODULE_4__.SELECT_WIDTH,
          onChange: onServiceChange,
          value: [...services, ...templateVariableOptions].find(s => s.value === service),
          options: [{
            label: 'Template Variables',
            options: templateVariableOptions
          }, ...services],
          placeholder: "Select Services",
          inputId: `${props.refId}-service`
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.QueryEditorField, {
        label: "Metric name",
        labelWidth: _constants__WEBPACK_IMPORTED_MODULE_4__.INNER_LABEL_WIDTH,
        htmlFor: `${props.refId}-select-metric`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          width: _constants__WEBPACK_IMPORTED_MODULE_4__.SELECT_WIDTH,
          onChange: onMetricTypeChange,
          value: [...metrics, ...templateVariableOptions].find(s => s.value === metricType),
          options: [{
            label: 'Template Variables',
            options: templateVariableOptions
          }, ...metrics],
          placeholder: "Select Metric",
          inputId: `${props.refId}-select-metric`
        })
      })]
    }), children(state.metricDescriptor)]
  });
}

const getStyles = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  label: grafana-select-option-description;
  font-weight: normal;
  font-style: italic;
  color: ${theme.colors.text.secondary};
`;

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/PeriodSelect.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodSelect": () => (/* binding */ PeriodSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



function PeriodSelect({
  inputId,
  templateVariableOptions,
  onChange,
  current,
  selectWidth,
  disabled,
  aligmentPeriods
}) {
  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => aligmentPeriods.map(ap => Object.assign({}, ap, {
    label: ap.text
  })), [aligmentPeriods]);
  const visibleOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => options.filter(ap => !ap.hidden), [options]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
    width: selectWidth,
    onChange: ({
      value
    }) => onChange(value),
    value: [...options, ...templateVariableOptions].find(s => s.value === current),
    options: [{
      label: 'Template Variables',
      options: templateVariableOptions
    }, {
      label: 'Aggregations',
      expanded: true,
      options: visibleOptions
    }],
    placeholder: "Select Period",
    inputId: inputId,
    disabled: disabled,
    allowCustomValue: true
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Preprocessor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preprocessor": () => (/* binding */ Preprocessor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const NONE_OPTION = {
  label: 'None',
  value: _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.None
};
const Preprocessor = ({
  query,
  metricDescriptor,
  onChange
}) => {
  var _query$preprocessor;

  const options = useOptions(metricDescriptor);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.QueryEditorRow, {
    label: "Pre-processing",
    tooltip: "Preprocessing options are displayed when the selected metric has a metric kind of delta or cumulative. The specific options available are determined by the metic's value type. If you select 'Rate', data points are aligned and converted to a rate per time series. If you select 'Delta', data points are aligned by their delta (difference) per time series",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
      onChange: value => {
        const {
          valueType,
          metricKind,
          perSeriesAligner: psa
        } = query;
        const {
          perSeriesAligner
        } = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getAlignmentPickerData)(valueType, metricKind, psa, value);
        onChange(Object.assign({}, query, {
          preprocessor: value,
          perSeriesAligner
        }));
      },
      value: (_query$preprocessor = query.preprocessor) !== null && _query$preprocessor !== void 0 ? _query$preprocessor : _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.None,
      options: options
    })
  });
};

const useOptions = metricDescriptor => {
  const metricKind = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.metricKind;
  const valueType = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.valueType;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!metricKind || metricKind === _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.GAUGE || valueType === _types__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.DISTRIBUTION) {
      return [NONE_OPTION];
    }

    const options = [NONE_OPTION, {
      label: 'Rate',
      value: _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.Rate,
      description: 'Data points are aligned and converted to a rate per time series'
    }];
    return metricKind === _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.CUMULATIVE ? [...options, {
      label: 'Delta',
      value: _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.Delta,
      description: 'Data points are aligned by their delta (difference) per time series'
    }] : options;
  }, [metricKind, valueType]);
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Project.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function Project({
  refId,
  projectName,
  datasource,
  onChange,
  templateVariableOptions
}) {
  const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    datasource.getProjects().then(projects => setProjects(projects));
  }, [datasource]);
  const projectsWithTemplateVariables = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [projects, {
    label: 'Template Variables',
    options: templateVariableOptions
  }, ...projects], [projects, templateVariableOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.QueryEditorRow, {
    label: "Project",
    htmlFor: `${refId}-project`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      width: _constants__WEBPACK_IMPORTED_MODULE_2__.SELECT_WIDTH,
      allowCustomValue: true,
      formatCreateLabel: v => `Use project: ${v}`,
      onChange: ({
        value
      }) => onChange(value),
      options: projectsWithTemplateVariables,
      value: {
        value: projectName,
        label: projectName
      },
      placeholder: "Select Project",
      inputId: `${refId}-project`
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _Experimental_MetricQueryEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/MetricQueryEditor.tsx");
/* harmony import */ var _Experimental_QueryHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Experimental/QueryHeader.tsx");
/* harmony import */ var _MetricQueryEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx");
/* harmony import */ var _SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLOQueryEditor.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["hide", "refId", "datasource", "key", "queryType", "maxLines", "metric"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















class QueryEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  async UNSAFE_componentWillMount() {
    const {
      datasource,
      query
    } = this.props; // Unfortunately, migrations like this need to go UNSAFE_componentWillMount. As soon as there's
    // migration hook for this module.ts, we can do the migrations there instead.

    if (!this.props.query.hasOwnProperty('metricQuery')) {
      const _ref = this.props.query,
            metricQuery = _objectWithoutPropertiesLoose(_ref, _excluded);

      this.props.query.metricQuery = metricQuery;
    }

    if (!this.props.query.hasOwnProperty('queryType')) {
      this.props.query.queryType = _types__WEBPACK_IMPORTED_MODULE_7__.QueryType.METRICS;
    }

    await datasource.ensureGCEDefaultProject();

    if (!query.metricQuery.projectName) {
      this.props.query.metricQuery.projectName = datasource.getDefaultProject();
    }
  }

  onQueryChange(prop, value) {
    this.props.onChange(Object.assign({}, this.props.query, {
      [prop]: value
    }));
    this.props.onRunQuery();
  }

  render() {
    var _this$props$data, _this$props$data2, _meta$custom;

    const {
      datasource,
      query,
      onRunQuery,
      onChange
    } = this.props;
    const metricQuery = Object.assign({}, (0,_MetricQueryEditor__WEBPACK_IMPORTED_MODULE_10__.defaultQuery)(datasource), query.metricQuery);
    const sloQuery = Object.assign({}, (0,_SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_11__.defaultQuery)(datasource), query.sloQuery);
    const queryType = query.queryType || _types__WEBPACK_IMPORTED_MODULE_7__.QueryType.METRICS;
    const meta = (_this$props$data = this.props.data) !== null && _this$props$data !== void 0 && _this$props$data.series.length ? (_this$props$data2 = this.props.data) === null || _this$props$data2 === void 0 ? void 0 : _this$props$data2.series[0].meta : {};
    const customMetaData = (_meta$custom = meta === null || meta === void 0 ? void 0 : meta.custom) !== null && _meta$custom !== void 0 ? _meta$custom : {};
    const variableOptionGroup = {
      label: 'Template Variables',
      expanded: false,
      options: datasource.getVariables().map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)
    };
    return _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.cloudMonitoringExperimentalUI ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.EditorRows, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Experimental_QueryHeader__WEBPACK_IMPORTED_MODULE_9__.QueryHeader, {
        query: query,
        metricQuery: metricQuery,
        sloQuery: sloQuery,
        onChange: onChange,
        onRunQuery: onRunQuery
      }), queryType === _types__WEBPACK_IMPORTED_MODULE_7__.QueryType.METRICS && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Experimental_MetricQueryEditor__WEBPACK_IMPORTED_MODULE_8__.MetricQueryEditor, {
        refId: query.refId,
        variableOptionGroup: variableOptionGroup,
        customMetaData: customMetaData,
        onChange: metricQuery => {
          this.props.onChange(Object.assign({}, this.props.query, {
            metricQuery
          }));
        },
        onRunQuery: onRunQuery,
        datasource: datasource,
        query: metricQuery
      }), queryType === _types__WEBPACK_IMPORTED_MODULE_7__.QueryType.SLO && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(___WEBPACK_IMPORTED_MODULE_12__.SLOQueryEditor, {
        refId: query.refId,
        variableOptionGroup: variableOptionGroup,
        customMetaData: customMetaData,
        onChange: query => this.onQueryChange('sloQuery', query),
        onRunQuery: onRunQuery,
        datasource: datasource,
        query: sloQuery
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.EditorRows, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(___WEBPACK_IMPORTED_MODULE_12__.QueryEditorRow, {
        label: "Query type",
        fillComponent: query.queryType !== _types__WEBPACK_IMPORTED_MODULE_7__.QueryType.SLO && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "secondary",
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                  margin-left: auto;
                `,
          icon: "edit",
          onClick: () => this.onQueryChange('metricQuery', Object.assign({}, metricQuery, {
            editorMode: metricQuery.editorMode === _types__WEBPACK_IMPORTED_MODULE_7__.EditorMode.MQL ? _types__WEBPACK_IMPORTED_MODULE_7__.EditorMode.Visual : _types__WEBPACK_IMPORTED_MODULE_7__.EditorMode.MQL
          })),
          children: metricQuery.editorMode === _types__WEBPACK_IMPORTED_MODULE_7__.EditorMode.MQL ? 'Switch to builder' : 'Edit MQL'
        }),
        htmlFor: `${query.refId}-query-type`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select, {
          width: _constants__WEBPACK_IMPORTED_MODULE_6__.SELECT_WIDTH,
          value: queryType,
          options: _constants__WEBPACK_IMPORTED_MODULE_6__.QUERY_TYPES,
          onChange: ({
            value
          }) => {
            onChange(Object.assign({}, query, {
              sloQuery,
              queryType: value
            }));
            onRunQuery();
          },
          inputId: `${query.refId}-query-type`
        })
      }), queryType === _types__WEBPACK_IMPORTED_MODULE_7__.QueryType.METRICS && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(___WEBPACK_IMPORTED_MODULE_12__.MetricQueryEditor, {
        refId: query.refId,
        variableOptionGroup: variableOptionGroup,
        customMetaData: customMetaData,
        onChange: metricQuery => {
          this.props.onChange(Object.assign({}, this.props.query, {
            metricQuery
          }));
        },
        onRunQuery: onRunQuery,
        datasource: datasource,
        query: metricQuery
      }), queryType === _types__WEBPACK_IMPORTED_MODULE_7__.QueryType.SLO && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(___WEBPACK_IMPORTED_MODULE_12__.SLOQueryEditor, {
        refId: query.refId,
        variableOptionGroup: variableOptionGroup,
        customMetaData: customMetaData,
        onChange: query => this.onQueryChange('sloQuery', query),
        onRunQuery: onRunQuery,
        datasource: datasource,
        query: sloQuery
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLO.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLO": () => (/* binding */ SLO)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const SLO = ({
  refId,
  query,
  templateVariableOptions,
  onChange,
  datasource
}) => {
  const [slos, setSLOs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    projectName,
    serviceId
  } = query;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!projectName || !serviceId) {
      return;
    }

    datasource.getServiceLevelObjectives(projectName, serviceId).then(sloIds => {
      setSLOs([{
        label: 'Template Variables',
        options: templateVariableOptions
      }, ...sloIds]);
    });
  }, [datasource, projectName, serviceId, templateVariableOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "SLO",
    htmlFor: `${refId}-slo`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      inputId: `${refId}-slo`,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.SELECT_WIDTH,
      allowCustomValue: true,
      value: (query === null || query === void 0 ? void 0 : query.sloId) && {
        value: query === null || query === void 0 ? void 0 : query.sloId,
        label: (query === null || query === void 0 ? void 0 : query.sloName) || (query === null || query === void 0 ? void 0 : query.sloId)
      },
      placeholder: "Select SLO",
      options: slos,
      onChange: async ({
        value: sloId = '',
        label: sloName = ''
      }) => {
        const slos = await datasource.getServiceLevelObjectives(projectName, serviceId);
        const slo = slos.find(({
          value
        }) => value === datasource.templateSrv.replace(sloId));
        onChange(Object.assign({}, query, {
          sloId,
          sloName,
          goal: slo === null || slo === void 0 ? void 0 : slo.goal
        }));
      }
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLOQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLOQueryEditor": () => (/* binding */ SLOQueryEditor),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const defaultQuery = dataSource => ({
  projectName: dataSource.getDefaultProject(),
  alignmentPeriod: 'cloud-monitoring-auto',
  perSeriesAligner: _types__WEBPACK_IMPORTED_MODULE_3__.AlignmentTypes.ALIGN_MEAN,
  aliasBy: '',
  selectorName: 'select_slo_health',
  serviceId: '',
  serviceName: '',
  sloId: '',
  sloName: ''
});
function SLOQueryEditor({
  refId,
  query,
  datasource,
  onChange,
  variableOptionGroup,
  customMetaData
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Project, {
      refId: refId,
      templateVariableOptions: variableOptionGroup.options,
      projectName: query.projectName,
      datasource: datasource,
      onChange: projectName => onChange(Object.assign({}, query, {
        projectName
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Service, {
      refId: refId,
      datasource: datasource,
      templateVariableOptions: variableOptionGroup.options,
      query: query,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.SLO, {
      refId: refId,
      datasource: datasource,
      templateVariableOptions: variableOptionGroup.options,
      query: query,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Selector, {
      refId: refId,
      datasource: datasource,
      templateVariableOptions: variableOptionGroup.options,
      query: query,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.QueryEditorRow, {
      label: "Alignment period",
      htmlFor: `${refId}-alignment-period`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.PeriodSelect, {
        inputId: `${refId}-alignment-period`,
        templateVariableOptions: variableOptionGroup.options,
        selectWidth: _constants__WEBPACK_IMPORTED_MODULE_2__.SELECT_WIDTH,
        current: query.alignmentPeriod,
        onChange: period => onChange(Object.assign({}, query, {
          alignmentPeriod: period
        })),
        aligmentPeriods: _constants__WEBPACK_IMPORTED_MODULE_2__.ALIGNMENT_PERIODS
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.AlignmentPeriodLabel, {
        datasource: datasource,
        customMetaData: customMetaData
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.AliasBy, {
      refId: refId,
      value: query.aliasBy,
      onChange: aliasBy => onChange(Object.assign({}, query, {
        aliasBy
      }))
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/Selector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Selector": () => (/* binding */ Selector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Selector = ({
  refId,
  query,
  templateVariableOptions,
  onChange,
  datasource
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "Selector",
    htmlFor: `${refId}-slo-selector`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      inputId: `${refId}-slo-selector`,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.SELECT_WIDTH,
      allowCustomValue: true,
      value: [..._constants__WEBPACK_IMPORTED_MODULE_3__.SELECTORS, ...templateVariableOptions].find(s => {
        var _ref;

        return (_ref = s.value === (query === null || query === void 0 ? void 0 : query.selectorName)) !== null && _ref !== void 0 ? _ref : '';
      }),
      options: [{
        label: 'Template Variables',
        options: templateVariableOptions
      }, ..._constants__WEBPACK_IMPORTED_MODULE_3__.SELECTORS],
      onChange: ({
        value: selectorName
      }) => onChange(Object.assign({}, query, {
        selectorName: selectorName !== null && selectorName !== void 0 ? selectorName : ''
      }))
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/Service.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Service": () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Service = ({
  refId,
  query,
  templateVariableOptions,
  onChange,
  datasource
}) => {
  const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    projectName
  } = query;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!projectName) {
      return;
    }

    datasource.getSLOServices(projectName).then(services => {
      setServices([{
        label: 'Template Variables',
        options: templateVariableOptions
      }, ...services]);
    });
  }, [datasource, projectName, templateVariableOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "Service",
    htmlFor: `${refId}-slo-service`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      inputId: `${refId}-slo-service`,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.SELECT_WIDTH,
      allowCustomValue: true,
      value: (query === null || query === void 0 ? void 0 : query.serviceId) && {
        value: query === null || query === void 0 ? void 0 : query.serviceId,
        label: (query === null || query === void 0 ? void 0 : query.serviceName) || (query === null || query === void 0 ? void 0 : query.serviceId)
      },
      placeholder: "Select service",
      options: services,
      onChange: ({
        value: serviceId = '',
        label: serviceName = ''
      }) => onChange(Object.assign({}, query, {
        serviceId,
        serviceName,
        sloId: ''
      }))
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLO": () => (/* reexport safe */ _SLO__WEBPACK_IMPORTED_MODULE_1__.SLO),
/* harmony export */   "Selector": () => (/* reexport safe */ _Selector__WEBPACK_IMPORTED_MODULE_2__.Selector),
/* harmony export */   "Service": () => (/* reexport safe */ _Service__WEBPACK_IMPORTED_MODULE_0__.Service)
/* harmony export */ });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/Service.tsx");
/* harmony import */ var _SLO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLO.tsx");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/Selector.tsx");




/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/VariableQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudMonitoringVariableQueryEditor": () => (/* binding */ CloudMonitoringVariableQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

const _excluded = ["metricDescriptors", "labels", "metricTypes", "services"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class CloudMonitoringVariableQueryEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "queryTypes", [{
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Projects,
      label: 'Projects'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Services,
      label: 'Services'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.MetricTypes,
      label: 'Metric Types'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelKeys,
      label: 'Label Keys'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelValues,
      label: 'Label Values'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.ResourceTypes,
      label: 'Resource Types'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Aggregations,
      label: 'Aggregations'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Aligners,
      label: 'Aligners'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.AlignmentPeriods,
      label: 'Alignment Periods'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Selectors,
      label: 'Selectors'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.SLOServices,
      label: 'SLO Services'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.SLO,
      label: 'Service Level Objectives (SLO)'
    }]);

    _defineProperty(this, "defaults", {
      selectedQueryType: this.queryTypes[0].value,
      metricDescriptors: [],
      selectedService: '',
      selectedMetricType: '',
      labels: [],
      labelKey: '',
      metricTypes: [],
      services: [],
      sloServices: [],
      selectedSLOService: '',
      projects: [],
      projectName: '',
      loading: true
    });

    _defineProperty(this, "onPropsChange", () => {
      const _this$state = this.state,
            queryModel = _objectWithoutPropertiesLoose(_this$state, _excluded);

      this.props.onChange(Object.assign({}, queryModel, {
        refId: 'CloudMonitoringVariableQueryEditor-VariableQuery'
      }));
    });

    this.state = Object.assign(this.defaults, {
      projectName: this.props.datasource.getDefaultProject()
    }, this.props.query);
  }

  async componentDidMount() {
    const projects = await this.props.datasource.getProjects();
    const metricDescriptors = await this.props.datasource.getMetricTypes(this.props.query.projectName || this.props.datasource.getDefaultProject());
    const services = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.extractServicesFromMetricDescriptors)(metricDescriptors).map(m => ({
      value: m.service,
      label: m.serviceShortName
    }));
    let selectedService = '';

    if (services.some(s => s.value === (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedService))) {
      selectedService = this.state.selectedService;
    } else if (services && services.length > 0) {
      selectedService = services[0].value;
    }

    const {
      metricTypes,
      selectedMetricType
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getMetricTypes)(metricDescriptors, this.state.selectedMetricType, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedMetricType), (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(selectedService));
    const sloServices = await this.props.datasource.getSLOServices(this.state.projectName);
    const state = Object.assign({
      services,
      selectedService,
      metricTypes,
      selectedMetricType,
      metricDescriptors,
      projects
    }, await this.getLabels(selectedMetricType, this.state.projectName), {
      sloServices,
      loading: false
    });
    this.setState(state, () => this.onPropsChange());
  }

  async onQueryTypeChange(queryType) {
    const state = Object.assign({
      selectedQueryType: queryType
    }, await this.getLabels(this.state.selectedMetricType, this.state.projectName, queryType));
    this.setState(state);
  }

  async onProjectChange(projectName) {
    const metricDescriptors = await this.props.datasource.getMetricTypes(projectName);
    const labels = await this.getLabels(this.state.selectedMetricType, projectName);
    const {
      metricTypes,
      selectedMetricType
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getMetricTypes)(metricDescriptors, this.state.selectedMetricType, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedMetricType), (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedService));
    const sloServices = await this.props.datasource.getSLOServices(projectName);
    this.setState(Object.assign({}, labels, {
      metricTypes,
      selectedMetricType,
      metricDescriptors,
      projectName,
      sloServices
    }), () => this.onPropsChange());
  }

  async onServiceChange(service) {
    const {
      metricTypes,
      selectedMetricType
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getMetricTypes)(this.state.metricDescriptors, this.state.selectedMetricType, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedMetricType), (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(service));
    const state = Object.assign({
      selectedService: service,
      metricTypes,
      selectedMetricType
    }, await this.getLabels(selectedMetricType, this.state.projectName));
    this.setState(state, () => this.onPropsChange());
  }

  async onMetricTypeChange(metricType) {
    const state = Object.assign({
      selectedMetricType: metricType
    }, await this.getLabels(metricType, this.state.projectName));
    this.setState(state, () => this.onPropsChange());
  }

  onLabelKeyChange(labelKey) {
    this.setState({
      labelKey
    }, () => this.onPropsChange());
  }

  componentDidUpdate(prevProps, prevState) {
    const selecQueryTypeChanged = prevState.selectedQueryType !== this.state.selectedQueryType;
    const selectSLOServiceChanged = this.state.selectedSLOService !== prevState.selectedSLOService;

    if (selecQueryTypeChanged || selectSLOServiceChanged) {
      this.onPropsChange();
    }
  }

  async getLabels(selectedMetricType, projectName, selectedQueryType = this.state.selectedQueryType) {
    let result = {
      labels: this.state.labels,
      labelKey: this.state.labelKey
    };

    if (selectedMetricType && selectedQueryType === _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelValues) {
      const labels = await (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getLabelKeys)(this.props.datasource, selectedMetricType, projectName);
      const labelKey = labels.some(l => l === (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.labelKey)) ? this.state.labelKey : labels[0];
      result = {
        labels,
        labelKey
      };
    }

    return result;
  }

  renderQueryTypeSwitch(queryType) {
    const variableOptionGroup = {
      label: 'Template Variables',
      expanded: false,
      options: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().getVariables().map(v => ({
        value: `$${v.name}`,
        label: `$${v.name}`
      }))
    };

    switch (queryType) {
      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.MetricTypes:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.selectedService,
            options: [variableOptionGroup, ...this.state.services],
            onChange: value => this.onServiceChange(value),
            label: "Service"
          })]
        });

      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelKeys:
      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelValues:
      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.ResourceTypes:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.selectedService,
            options: [variableOptionGroup, ...this.state.services],
            onChange: value => this.onServiceChange(value),
            label: "Service"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.selectedMetricType,
            options: [variableOptionGroup, ...this.state.metricTypes.map(({
              value,
              name
            }) => ({
              value,
              label: name
            }))],
            onChange: value => this.onMetricTypeChange(value),
            label: "Metric Type"
          }), queryType === _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelValues && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.labelKey,
            options: [variableOptionGroup, ...this.state.labels.map(l => ({
              value: l,
              label: l
            }))],
            onChange: value => this.onLabelKeyChange(value),
            label: "Label Key"
          })]
        });

      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Aligners:
      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Aggregations:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.selectedService,
            options: [variableOptionGroup, ...this.state.services],
            onChange: value => this.onServiceChange(value),
            label: "Service"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.selectedMetricType,
            options: [variableOptionGroup, ...this.state.metricTypes.map(({
              value,
              name
            }) => ({
              value,
              label: name
            }))],
            onChange: value => this.onMetricTypeChange(value),
            label: "Metric Type"
          })]
        });

      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.SLOServices:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          })
        });

      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.SLO:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.selectedSLOService,
            options: [variableOptionGroup, ...this.state.sloServices],
            onChange: value => {
              this.setState(Object.assign({}, this.state, {
                selectedSLOService: value
              }));
            },
            label: "SLO Service"
          })]
        });

      default:
        return '';
    }
  }

  render() {
    if (this.state.loading) {
      return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "gf-form max-width-21",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "gf-form-label width-10 query-keyword",
          children: "Query Type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form-select-wrapper max-width-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
            className: "gf-form-input",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
              children: "Loading..."
            })
          })
        })]
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
        value: this.state.selectedQueryType,
        options: this.queryTypes,
        onChange: value => this.onQueryTypeChange(value),
        label: "Query Type"
      }), this.renderQueryTypeSwitch(this.state.selectedQueryType)]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/VisualMetricQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualMetricQueryEditor": () => (/* binding */ VisualMetricQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function Editor({
  refId,
  query,
  labels,
  datasource,
  onChange,
  onMetricTypeChange,
  customMetaData,
  variableOptionGroup
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Metrics, {
    refId: refId,
    templateSrv: datasource.templateSrv,
    projectName: query.projectName,
    metricType: query.metricType,
    templateVariableOptions: variableOptionGroup.options,
    datasource: datasource,
    onChange: onMetricTypeChange,
    children: metric => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.LabelFilter, {
        labels: labels,
        filters: query.filters,
        onChange: filters => onChange(Object.assign({}, query, {
          filters
        })),
        variableOptionGroup: variableOptionGroup
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Preprocessor, {
        metricDescriptor: metric,
        query: query,
        onChange: onChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.GroupBy, {
        refId: refId,
        labels: Object.keys(labels),
        query: query,
        onChange: onChange,
        variableOptionGroup: variableOptionGroup,
        metricDescriptor: metric
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Alignment, {
        refId: refId,
        datasource: datasource,
        templateVariableOptions: variableOptionGroup.options,
        query: query,
        customMetaData: customMetaData,
        onChange: onChange
      })]
    })
  });
}

const VisualMetricQueryEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Editor);

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aggregation": () => (/* reexport safe */ _Aggregation__WEBPACK_IMPORTED_MODULE_9__.Aggregation),
/* harmony export */   "AliasBy": () => (/* reexport safe */ _AliasBy__WEBPACK_IMPORTED_MODULE_8__.AliasBy),
/* harmony export */   "Alignment": () => (/* reexport safe */ _Alignment__WEBPACK_IMPORTED_MODULE_3__.Alignment),
/* harmony export */   "AlignmentFunction": () => (/* reexport safe */ _AlignmentFunction__WEBPACK_IMPORTED_MODULE_6__.AlignmentFunction),
/* harmony export */   "AlignmentPeriodLabel": () => (/* reexport safe */ _AlignmentPeriodLabel__WEBPACK_IMPORTED_MODULE_7__.AlignmentPeriodLabel),
/* harmony export */   "AnnotationsHelp": () => (/* reexport safe */ _AnnotationsHelp__WEBPACK_IMPORTED_MODULE_5__.AnnotationsHelp),
/* harmony export */   "GroupBy": () => (/* reexport safe */ _GroupBy__WEBPACK_IMPORTED_MODULE_2__.GroupBy),
/* harmony export */   "LabelFilter": () => (/* reexport safe */ _LabelFilter__WEBPACK_IMPORTED_MODULE_4__.LabelFilter),
/* harmony export */   "MQLQueryEditor": () => (/* reexport safe */ _MQLQueryEditor__WEBPACK_IMPORTED_MODULE_12__.MQLQueryEditor),
/* harmony export */   "MetricQueryEditor": () => (/* reexport safe */ _MetricQueryEditor__WEBPACK_IMPORTED_MODULE_10__.MetricQueryEditor),
/* harmony export */   "Metrics": () => (/* reexport safe */ _Metrics__WEBPACK_IMPORTED_MODULE_1__.Metrics),
/* harmony export */   "PeriodSelect": () => (/* reexport safe */ _PeriodSelect__WEBPACK_IMPORTED_MODULE_15__.PeriodSelect),
/* harmony export */   "Preprocessor": () => (/* reexport safe */ _Preprocessor__WEBPACK_IMPORTED_MODULE_16__.Preprocessor),
/* harmony export */   "Project": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.Project),
/* harmony export */   "QueryEditorField": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_13__.QueryEditorField),
/* harmony export */   "QueryEditorRow": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_13__.QueryEditorRow),
/* harmony export */   "SLOQueryEditor": () => (/* reexport safe */ _SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_11__.SLOQueryEditor),
/* harmony export */   "VariableQueryField": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_13__.VariableQueryField),
/* harmony export */   "VisualMetricQueryEditor": () => (/* reexport safe */ _VisualMetricQueryEditor__WEBPACK_IMPORTED_MODULE_14__.VisualMetricQueryEditor)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Project.tsx");
/* harmony import */ var _Metrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Metrics.tsx");
/* harmony import */ var _GroupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/GroupBy.tsx");
/* harmony import */ var _Alignment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Alignment.tsx");
/* harmony import */ var _LabelFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/LabelFilter.tsx");
/* harmony import */ var _AnnotationsHelp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AnnotationsHelp.tsx");
/* harmony import */ var _AlignmentFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AlignmentFunction.tsx");
/* harmony import */ var _AlignmentPeriodLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AlignmentPeriodLabel.tsx");
/* harmony import */ var _AliasBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AliasBy.tsx");
/* harmony import */ var _Aggregation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Aggregation.tsx");
/* harmony import */ var _MetricQueryEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx");
/* harmony import */ var _SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLOQueryEditor.tsx");
/* harmony import */ var _MQLQueryEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx");
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Fields.tsx");
/* harmony import */ var _VisualMetricQueryEditor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/VisualMetricQueryEditor.tsx");
/* harmony import */ var _PeriodSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/PeriodSelect.tsx");
/* harmony import */ var _Preprocessor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Preprocessor.tsx");


















/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGGREGATIONS": () => (/* binding */ AGGREGATIONS),
/* harmony export */   "ALIGNMENTS": () => (/* binding */ ALIGNMENTS),
/* harmony export */   "ALIGNMENT_PERIODS": () => (/* binding */ ALIGNMENT_PERIODS),
/* harmony export */   "AUTH_TYPES": () => (/* binding */ AUTH_TYPES),
/* harmony export */   "GRAPH_PERIODS": () => (/* binding */ GRAPH_PERIODS),
/* harmony export */   "INNER_LABEL_WIDTH": () => (/* binding */ INNER_LABEL_WIDTH),
/* harmony export */   "INPUT_WIDTH": () => (/* binding */ INPUT_WIDTH),
/* harmony export */   "LABEL_WIDTH": () => (/* binding */ LABEL_WIDTH),
/* harmony export */   "QUERY_TYPES": () => (/* binding */ QUERY_TYPES),
/* harmony export */   "SELECTORS": () => (/* binding */ SELECTORS),
/* harmony export */   "SELECT_WIDTH": () => (/* binding */ SELECT_WIDTH),
/* harmony export */   "SYSTEM_LABELS": () => (/* binding */ SYSTEM_LABELS)
/* harmony export */ });
/* harmony import */ var _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");

 // not super excited about using uneven numbers, but this makes it align perfectly with rows that has two fields

const INPUT_WIDTH = 71;
const LABEL_WIDTH = 19;
const INNER_LABEL_WIDTH = 14;
const SELECT_WIDTH = 28;
const AUTH_TYPES = [{
  value: 'Google JWT File',
  key: _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthType.JWT
}, {
  value: 'GCE Default Service Account',
  key: _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthType.GCE
}];
const ALIGNMENTS = [{
  text: 'none',
  value: 'ALIGN_NONE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.STRING, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.VALUE_TYPE_UNSPECIFIED, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE]
}, {
  text: 'delta',
  value: 'ALIGN_DELTA',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'rate',
  value: 'ALIGN_RATE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'interpolate',
  value: 'ALIGN_INTERPOLATE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE]
}, {
  text: 'next older',
  value: 'ALIGN_NEXT_OLDER',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.STRING, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.VALUE_TYPE_UNSPECIFIED, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE]
}, {
  text: 'min',
  value: 'ALIGN_MIN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'max',
  value: 'ALIGN_MAX',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'mean',
  value: 'ALIGN_MEAN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'count',
  value: 'ALIGN_COUNT',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'sum',
  value: 'ALIGN_SUM',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'stddev',
  value: 'ALIGN_STDDEV',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'count true',
  value: 'ALIGN_COUNT_TRUE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE]
}, {
  text: 'count false',
  value: 'ALIGN_COUNT_FALSE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE]
}, {
  text: 'fraction true',
  value: 'ALIGN_FRACTION_TRUE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE]
}, {
  text: 'percentile 99',
  value: 'ALIGN_PERCENTILE_99',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'percentile 95',
  value: 'ALIGN_PERCENTILE_95',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'percentile 50',
  value: 'ALIGN_PERCENTILE_50',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'percentile 05',
  value: 'ALIGN_PERCENTILE_05',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'percent change',
  value: 'ALIGN_PERCENT_CHANGE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}];
const AGGREGATIONS = [{
  text: 'none',
  value: 'REDUCE_NONE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.STRING],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'mean',
  value: 'REDUCE_MEAN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE]
}, {
  text: 'min',
  value: 'REDUCE_MIN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'max',
  value: 'REDUCE_MAX',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'sum',
  value: 'REDUCE_SUM',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'std. dev.',
  value: 'REDUCE_STDDEV',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'count',
  value: 'REDUCE_COUNT',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.STRING],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE]
}, {
  text: 'count true',
  value: 'REDUCE_COUNT_TRUE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'count false',
  value: 'REDUCE_COUNT_FALSE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: '99th percentile',
  value: 'REDUCE_PERCENTILE_99',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE]
}, {
  text: '95th percentile',
  value: 'REDUCE_PERCENTILE_95',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE]
}, {
  text: '50th percentile',
  value: 'REDUCE_PERCENTILE_50',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE]
}, {
  text: '5th percentile',
  value: 'REDUCE_PERCENTILE_05',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE]
}];
const ALIGNMENT_PERIODS = [{
  text: 'grafana auto',
  value: 'grafana-auto'
}, {
  text: 'stackdriver auto',
  value: 'stackdriver-auto',
  hidden: true
}, {
  text: 'cloud monitoring auto',
  value: 'cloud-monitoring-auto'
}, {
  text: '1m',
  value: '+60s'
}, {
  text: '2m',
  value: '+120s'
}, {
  text: '5m',
  value: '+300s'
}, {
  text: '10m',
  value: '+600s'
}, {
  text: '30m',
  value: '+1800s'
}, {
  text: '1h',
  value: '+3600s'
}, {
  text: '3h',
  value: '+7200s'
}, {
  text: '6h',
  value: '+21600s'
}, {
  text: '1d',
  value: '+86400s'
}, {
  text: '3d',
  value: '+259200s'
}, {
  text: '1w',
  value: '+604800s'
}];
const GRAPH_PERIODS = [{
  text: 'auto',
  value: 'auto'
}, {
  text: '1m',
  value: '1m'
}, {
  text: '2m',
  value: '2m'
}, {
  text: '5m',
  value: '5m'
}, {
  text: '10m',
  value: '10m'
}, {
  text: '30m',
  value: '30m'
}, {
  text: '1h',
  value: '1h'
}, {
  text: '3h',
  value: '3h'
}, {
  text: '6h',
  value: '6h'
}, {
  text: '1d',
  value: '1d'
}, {
  text: '3d',
  value: '3d'
}, {
  text: '1w',
  value: '1w'
}];
const SYSTEM_LABELS = ['metadata.system_labels.cloud_account', 'metadata.system_labels.name', 'metadata.system_labels.region', 'metadata.system_labels.state', 'metadata.system_labels.instance_group', 'metadata.system_labels.node_name', 'metadata.system_labels.service_name', 'metadata.system_labels.top_level_controller_type', 'metadata.system_labels.top_level_controller_name', 'metadata.system_labels.container_image'];
const SELECTORS = [{
  label: 'SLI Value',
  value: 'select_slo_health'
}, {
  label: 'SLO Compliance',
  value: 'select_slo_compliance'
}, {
  label: 'SLO Error Budget Remaining',
  value: 'select_slo_budget_fraction'
}];
const QUERY_TYPES = [{
  label: 'Metrics',
  value: _types__WEBPACK_IMPORTED_MODULE_1__.QueryType.METRICS
}, {
  label: 'Service Level Objectives (SLO)',
  value: _types__WEBPACK_IMPORTED_MODULE_1__.QueryType.SLO
}];

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudMonitoringDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _annotationSupport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/annotationSupport.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/variables.ts");
const _excluded = ["hide", "refId", "datasource", "key", "queryType", "maxLines", "metric", "intervalMs", "type"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class CloudMonitoringDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)(), timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_2__.getTimeSrv)()) {
    super(instanceSettings);

    _defineProperty(this, "authenticationType", void 0);

    _defineProperty(this, "intervalMs", void 0);

    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
    this.authenticationType = instanceSettings.jsonData.authenticationType || 'jwt';
    this.variables = new _variables__WEBPACK_IMPORTED_MODULE_6__.CloudMonitoringVariableSupport(this);
    this.intervalMs = 0;
    this.annotations = (0,_annotationSupport__WEBPACK_IMPORTED_MODULE_4__.CloudMonitoringAnnotationSupport)(this);
  }

  getVariables() {
    return this.templateSrv.getVariables().map(v => `$${v.name}`);
  }

  query(request) {
    request.targets = request.targets.map(t => Object.assign({}, this.migrateQuery(t), {
      intervalMs: request.intervalMs
    }));
    return super.query(request);
  }

  applyTemplateVariables({
    metricQuery,
    refId,
    queryType,
    sloQuery,
    type = 'timeSeriesQuery'
  }, scopedVars) {
    return {
      datasource: this.getRef(),
      refId,
      intervalMs: this.intervalMs,
      type,
      queryType,
      metricQuery: Object.assign({}, this.interpolateProps(metricQuery, scopedVars), {
        projectName: this.templateSrv.replace(metricQuery.projectName ? metricQuery.projectName : this.getDefaultProject(), scopedVars),
        filters: this.interpolateFilters(metricQuery.filters || [], scopedVars),
        groupBys: this.interpolateGroupBys(metricQuery.groupBys || [], scopedVars),
        view: metricQuery.view || 'FULL',
        editorMode: metricQuery.editorMode
      }),
      sloQuery: sloQuery && this.interpolateProps(sloQuery, scopedVars)
    };
  }

  async getLabels(metricType, refId, projectName, aggregation) {
    var _aggregation$crossSer;

    const options = {
      targets: [{
        refId,
        datasource: this.getRef(),
        queryType: _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.METRICS,
        metricQuery: {
          projectName: this.templateSrv.replace(projectName),
          metricType: this.templateSrv.replace(metricType),
          groupBys: this.interpolateGroupBys((aggregation === null || aggregation === void 0 ? void 0 : aggregation.groupBys) || [], {}),
          crossSeriesReducer: (_aggregation$crossSer = aggregation === null || aggregation === void 0 ? void 0 : aggregation.crossSeriesReducer) !== null && _aggregation$crossSer !== void 0 ? _aggregation$crossSer : 'REDUCE_NONE',
          view: 'HEADERS'
        }
      }],
      range: this.timeSrv.timeRange()
    };
    const queries = options.targets;

    if (!queries.length) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
        results: []
      }));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(this.ensureGCEDefaultProject()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(() => {
      return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
          from: options.range.from.valueOf().toString(),
          to: options.range.to.valueOf().toString(),
          queries
        }
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(({
      data
    }) => {
      const dataQueryResponse = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryResponse)({
        data: data
      });
      const labels = dataQueryResponse === null || dataQueryResponse === void 0 ? void 0 : dataQueryResponse.data.map(f => {
        var _f$meta, _f$meta$custom;

        return (_f$meta = f.meta) === null || _f$meta === void 0 ? void 0 : (_f$meta$custom = _f$meta.custom) === null || _f$meta$custom === void 0 ? void 0 : _f$meta$custom.labels;
      }).filter(p => !!p).reduce((acc, labels) => {
        for (let key in labels) {
          if (!acc[key]) {
            acc[key] = new Set();
          }

          if (labels[key]) {
            acc[key].add(labels[key]);
          }
        }

        return acc;
      }, {});
      return Object.fromEntries(Object.entries(labels).map(l => {
        l[1] = Array.from(l[1]);
        return l;
      }));
    })));
  }

  async getGCEDefaultProject() {
    return this.getResource(`gceDefaultProject`);
  }

  getDefaultProject() {
    const {
      defaultProject,
      authenticationType,
      gceDefaultProject
    } = this.instanceSettings.jsonData;

    if (authenticationType === 'gce') {
      return gceDefaultProject || '';
    }

    return defaultProject || '';
  }

  async ensureGCEDefaultProject() {
    const {
      authenticationType,
      gceDefaultProject
    } = this.instanceSettings.jsonData;

    if (authenticationType === 'gce' && !gceDefaultProject) {
      this.instanceSettings.jsonData.gceDefaultProject = await this.getGCEDefaultProject();
    }
  }

  async getMetricTypes(projectName) {
    if (!projectName) {
      return [];
    }

    return this.getResource(`metricDescriptors/v3/projects/${this.templateSrv.replace(projectName)}/metricDescriptors`);
  }

  async getSLOServices(projectName) {
    return this.getResource(`services/v3/projects/${this.templateSrv.replace(projectName)}/services?pageSize=1000`);
  }

  async getServiceLevelObjectives(projectName, serviceId) {
    if (!serviceId) {
      return Promise.resolve([]);
    }

    let {
      projectName: p,
      serviceId: s
    } = this.interpolateProps({
      projectName,
      serviceId
    });
    return this.getResource(`slo-services/v3/projects/${p}/services/${s}/serviceLevelObjectives`);
  }

  getProjects() {
    return this.getResource(`projects`);
  }

  migrateQuery(query) {
    if (!query.hasOwnProperty('metricQuery')) {
      const _ref = query,
            {
        hide,
        refId,
        intervalMs,
        type
      } = _ref,
            rest = _objectWithoutPropertiesLoose(_ref, _excluded);

      return {
        refId,
        intervalMs,
        type,
        hide,
        queryType: _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.METRICS,
        metricQuery: Object.assign({}, rest, {
          view: rest.view || 'FULL'
        })
      };
    }

    return query;
  }

  interpolateProps(object, scopedVars = {}) {
    return Object.entries(object).reduce((acc, [key, value]) => {
      return Object.assign({}, acc, {
        [key]: value && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(value) ? this.templateSrv.replace(value, scopedVars) : value
      });
    }, {});
  }

  filterQuery(query) {
    if (query.hide) {
      return false;
    }

    if (query.queryType && query.queryType === _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.SLO && query.sloQuery) {
      const {
        selectorName,
        serviceId,
        sloId,
        projectName
      } = query.sloQuery;
      return !!selectorName && !!serviceId && !!sloId && !!projectName;
    }

    if (query.queryType && query.queryType === _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.METRICS && query.metricQuery.editorMode === _types__WEBPACK_IMPORTED_MODULE_5__.EditorMode.MQL) {
      return !!query.metricQuery.projectName && !!query.metricQuery.query;
    }

    const {
      metricType
    } = query.metricQuery;
    return !!metricType;
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    return queries.map(query => this.applyTemplateVariables(this.migrateQuery(query), scopedVars));
  }

  interpolateFilters(filters, scopedVars) {
    const completeFilter = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chunk)(filters, 4).map(([key, operator, value, condition]) => Object.assign({
      key,
      operator,
      value
    }, condition && {
      condition
    })).filter(item => item.value);
    const filterArray = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(completeFilter.map(({
      key,
      operator,
      value,
      condition
    }) => [this.templateSrv.replace(key, scopedVars || {}), operator, this.templateSrv.replace(value, scopedVars || {}, value => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && value.length ? `(${value.join('|')})` : value;
    }), ...(condition ? [condition] : [])]));
    return filterArray || [];
  }

  interpolateGroupBys(groupBys, scopedVars) {
    let interpolatedGroupBys = [];
    (groupBys || []).forEach(gb => {
      const interpolated = this.templateSrv.replace(gb, scopedVars || {}, 'csv').split(',');

      if (Array.isArray(interpolated)) {
        interpolatedGroupBys = interpolatedGroupBys.concat(interpolated);
      } else {
        interpolatedGroupBys.push(interpolated);
      }
    });
    return interpolatedGroupBys;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/functions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractServicesFromMetricDescriptors": () => (/* binding */ extractServicesFromMetricDescriptors),
/* harmony export */   "getAggregationOptionsByMetric": () => (/* binding */ getAggregationOptionsByMetric),
/* harmony export */   "getAlignmentOptionsByMetric": () => (/* binding */ getAlignmentOptionsByMetric),
/* harmony export */   "getAlignmentPickerData": () => (/* binding */ getAlignmentPickerData),
/* harmony export */   "getLabelKeys": () => (/* binding */ getLabelKeys),
/* harmony export */   "getMetricTypes": () => (/* binding */ getMetricTypes),
/* harmony export */   "getMetricTypesByService": () => (/* binding */ getMetricTypesByService),
/* harmony export */   "labelsToGroupedOptions": () => (/* binding */ labelsToGroupedOptions),
/* harmony export */   "stringArrayToFilters": () => (/* binding */ stringArrayToFilters)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");




const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)();
const extractServicesFromMetricDescriptors = metricDescriptors => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(metricDescriptors, 'service');
const getMetricTypesByService = (metricDescriptors, service) => metricDescriptors.filter(m => m.service === service);
const getMetricTypes = (metricDescriptors, metricType, interpolatedMetricType, selectedService) => {
  const metricTypes = getMetricTypesByService(metricDescriptors, selectedService).map(m => ({
    value: m.type,
    name: m.displayName
  }));
  const metricTypeExistInArray = metricTypes.some(m => m.value === interpolatedMetricType);
  const metricTypeByService = metricTypes.length ? metricTypes[0].value : '';
  const selectedMetricType = metricTypeExistInArray ? metricType : metricTypeByService;
  return {
    metricTypes,
    selectedMetricType
  };
};
const getAlignmentOptionsByMetric = (metricValueType, metricKind, preprocessor) => {
  if (preprocessor && preprocessor === _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.Rate) {
    metricKind = _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.GAUGE;
  }

  return !metricValueType ? [] : _constants__WEBPACK_IMPORTED_MODULE_2__.ALIGNMENTS.filter(i => {
    return i.valueTypes.indexOf(metricValueType) !== -1 && i.metricKinds.indexOf(metricKind) !== -1;
  });
};
const getAggregationOptionsByMetric = (valueType, metricKind) => {
  return !metricKind ? [] : _constants__WEBPACK_IMPORTED_MODULE_2__.AGGREGATIONS.filter(i => {
    return i.valueTypes.indexOf(valueType) !== -1 && i.metricKinds.indexOf(metricKind) !== -1;
  });
};
const getLabelKeys = async (datasource, selectedMetricType, projectName) => {
  const refId = 'handleLabelKeysQuery';
  const labels = await datasource.getLabels(selectedMetricType, refId, projectName);
  return [...Object.keys(labels), ..._constants__WEBPACK_IMPORTED_MODULE_2__.SYSTEM_LABELS];
};
const getAlignmentPickerData = (valueType = _types__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.DOUBLE, metricKind = _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.GAUGE, perSeriesAligner = _types__WEBPACK_IMPORTED_MODULE_3__.AlignmentTypes.ALIGN_MEAN, preprocessor) => {
  const alignOptions = getAlignmentOptionsByMetric(valueType, metricKind, preprocessor).map(option => Object.assign({}, option, {
    label: option.text
  }));

  if (!alignOptions.some(o => o.value === templateSrv.replace(perSeriesAligner))) {
    perSeriesAligner = alignOptions.length > 0 ? alignOptions[0].value : _types__WEBPACK_IMPORTED_MODULE_3__.AlignmentTypes.ALIGN_MEAN;
  }

  return {
    alignOptions,
    perSeriesAligner
  };
};
const labelsToGroupedOptions = groupBys => {
  const groups = groupBys.reduce((acc, curr) => {
    const arr = curr.split('.').map(lodash__WEBPACK_IMPORTED_MODULE_0__.startCase);
    const group = (arr.length === 2 ? arr : (0,lodash__WEBPACK_IMPORTED_MODULE_0__.initial)(arr)).join(' ');
    const option = {
      value: curr,
      label: curr
    };

    if (acc[group]) {
      acc[group] = [...acc[group], option];
    } else {
      acc[group] = [option];
    }

    return acc;
  }, {});
  return Object.entries(groups).map(([label, options]) => ({
    label,
    options,
    expanded: true
  }), []);
};
const stringArrayToFilters = filterArray => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chunk)(filterArray, 4).map(([key, operator, value, condition = 'AND']) => ({
  key,
  operator,
  value,
  condition
}));

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_CloudMonitoringCheatSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/CloudMonitoringCheatSheet.tsx");
/* harmony import */ var _components_ConfigEditor_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/ConfigEditor/ConfigEditor.tsx");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx");
/* harmony import */ var _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/VariableQueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/datasource.ts");






const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_5__["default"]).setQueryEditorHelp(_components_CloudMonitoringCheatSheet__WEBPACK_IMPORTED_MODULE_1__["default"]).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_3__.QueryEditor).setConfigEditor(_components_ConfigEditor_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__.ConfigEditor).setVariableQueryEditor(_components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_4__.CloudMonitoringVariableQueryEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentTypes": () => (/* binding */ AlignmentTypes),
/* harmony export */   "EditorMode": () => (/* binding */ EditorMode),
/* harmony export */   "MetricFindQueryTypes": () => (/* binding */ MetricFindQueryTypes),
/* harmony export */   "MetricKind": () => (/* binding */ MetricKind),
/* harmony export */   "PreprocessorType": () => (/* binding */ PreprocessorType),
/* harmony export */   "QueryType": () => (/* binding */ QueryType),
/* harmony export */   "ValueTypes": () => (/* binding */ ValueTypes),
/* harmony export */   "authTypes": () => (/* binding */ authTypes)
/* harmony export */ });
/* harmony import */ var _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js");

const authTypes = [{
  label: 'Google JWT File',
  value: _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthType.JWT
}, {
  label: 'GCE Default Service Account',
  value: _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthType.GCE
}];
let MetricFindQueryTypes;

(function (MetricFindQueryTypes) {
  MetricFindQueryTypes["Projects"] = "projects";
  MetricFindQueryTypes["Services"] = "services";
  MetricFindQueryTypes["DefaultProject"] = "defaultProject";
  MetricFindQueryTypes["MetricTypes"] = "metricTypes";
  MetricFindQueryTypes["LabelKeys"] = "labelKeys";
  MetricFindQueryTypes["LabelValues"] = "labelValues";
  MetricFindQueryTypes["ResourceTypes"] = "resourceTypes";
  MetricFindQueryTypes["Aggregations"] = "aggregations";
  MetricFindQueryTypes["Aligners"] = "aligners";
  MetricFindQueryTypes["AlignmentPeriods"] = "alignmentPeriods";
  MetricFindQueryTypes["Selectors"] = "selectors";
  MetricFindQueryTypes["SLOServices"] = "sloServices";
  MetricFindQueryTypes["SLO"] = "slo";
})(MetricFindQueryTypes || (MetricFindQueryTypes = {}));

let QueryType;

(function (QueryType) {
  QueryType["METRICS"] = "metrics";
  QueryType["SLO"] = "slo";
})(QueryType || (QueryType = {}));

let EditorMode;

(function (EditorMode) {
  EditorMode["Visual"] = "visual";
  EditorMode["MQL"] = "mql";
})(EditorMode || (EditorMode = {}));

let PreprocessorType;

(function (PreprocessorType) {
  PreprocessorType["None"] = "none";
  PreprocessorType["Rate"] = "rate";
  PreprocessorType["Delta"] = "delta";
})(PreprocessorType || (PreprocessorType = {}));

let MetricKind;

(function (MetricKind) {
  MetricKind["METRIC_KIND_UNSPECIFIED"] = "METRIC_KIND_UNSPECIFIED";
  MetricKind["GAUGE"] = "GAUGE";
  MetricKind["DELTA"] = "DELTA";
  MetricKind["CUMULATIVE"] = "CUMULATIVE";
})(MetricKind || (MetricKind = {}));

let ValueTypes;

(function (ValueTypes) {
  ValueTypes["VALUE_TYPE_UNSPECIFIED"] = "VALUE_TYPE_UNSPECIFIED";
  ValueTypes["BOOL"] = "BOOL";
  ValueTypes["INT64"] = "INT64";
  ValueTypes["DOUBLE"] = "DOUBLE";
  ValueTypes["STRING"] = "STRING";
  ValueTypes["DISTRIBUTION"] = "DISTRIBUTION";
  ValueTypes["MONEY"] = "MONEY";
})(ValueTypes || (ValueTypes = {}));

let AlignmentTypes;

(function (AlignmentTypes) {
  AlignmentTypes["ALIGN_DELTA"] = "ALIGN_DELTA";
  AlignmentTypes["ALIGN_RATE"] = "ALIGN_RATE";
  AlignmentTypes["ALIGN_INTERPOLATE"] = "ALIGN_INTERPOLATE";
  AlignmentTypes["ALIGN_NEXT_OLDER"] = "ALIGN_NEXT_OLDER";
  AlignmentTypes["ALIGN_MIN"] = "ALIGN_MIN";
  AlignmentTypes["ALIGN_MAX"] = "ALIGN_MAX";
  AlignmentTypes["ALIGN_MEAN"] = "ALIGN_MEAN";
  AlignmentTypes["ALIGN_COUNT"] = "ALIGN_COUNT";
  AlignmentTypes["ALIGN_SUM"] = "ALIGN_SUM";
  AlignmentTypes["ALIGN_STDDEV"] = "ALIGN_STDDEV";
  AlignmentTypes["ALIGN_COUNT_TRUE"] = "ALIGN_COUNT_TRUE";
  AlignmentTypes["ALIGN_COUNT_FALSE"] = "ALIGN_COUNT_FALSE";
  AlignmentTypes["ALIGN_FRACTION_TRUE"] = "ALIGN_FRACTION_TRUE";
  AlignmentTypes["ALIGN_PERCENTILE_99"] = "ALIGN_PERCENTILE_99";
  AlignmentTypes["ALIGN_PERCENTILE_95"] = "ALIGN_PERCENTILE_95";
  AlignmentTypes["ALIGN_PERCENTILE_50"] = "ALIGN_PERCENTILE_50";
  AlignmentTypes["ALIGN_PERCENTILE_05"] = "ALIGN_PERCENTILE_05";
  AlignmentTypes["ALIGN_PERCENT_CHANGE"] = "ALIGN_PERCENT_CHANGE";
  AlignmentTypes["ALIGN_NONE"] = "ALIGN_NONE";
})(AlignmentTypes || (AlignmentTypes = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/variables.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudMonitoringVariableSupport": () => (/* binding */ CloudMonitoringVariableSupport)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _CloudMonitoringMetricFindQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/CloudMonitoringMetricFindQuery.ts");
/* harmony import */ var _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/VariableQueryEditor.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CloudMonitoringVariableSupport extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.CustomVariableSupport {
  constructor(datasource) {
    super();

    _defineProperty(this, "metricFindQuery", void 0);

    _defineProperty(this, "editor", _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_2__.CloudMonitoringVariableQueryEditor);

    this.datasource = datasource;
    this.metricFindQuery = new _CloudMonitoringMetricFindQuery__WEBPACK_IMPORTED_MODULE_1__["default"](datasource);
    this.query = this.query.bind(this);
  }

  query(request) {
    const executeObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.metricFindQuery.execute(request.targets[0]));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.datasource.ensureGCEDefaultProject()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => executeObservable), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => ({
      data
    })));
  }

}

/***/ }),

/***/ "./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/dist/index.development.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({ value: true }));

var data = __webpack_require__("./packages/grafana-data/src/index.ts");
var ui = __webpack_require__("./packages/grafana-ui/src/index.ts");
var React = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

var TEST_IDS = {
    helpBox: 'Configuration help box',
    dropZone: 'Configuration drop zone',
    pasteArea: 'Configuration text area',
    pasteJwtButton: 'Paste JWT button',
    resetJwtButton: 'Reset JWT button',
    jwtForm: 'JWT form',
    authTypeButtonJWT: 'JWT button',
    authTypeButtonGCE: 'GCE button',
};

var configKeys = ['private_key', 'token_uri', 'client_email', 'project_id'];
var INVALID_JWT_TOKEN_ERROR = 'Invalid JWT token';
var JWTConfigEditor = function (_a) {
    var onChange = _a.onChange;
    var _b = __read(React.useState(), 2), error = _b[0], setError = _b[1];
    var _c = __read(React.useState(null), 2), isPasting = _c[0], setIsPasting = _c[1];
    var theme = ui.useTheme2();
    var onPasteClick = React.useCallback(function (e) {
        setError(null);
        setIsPasting(true);
    }, [setIsPasting]);
    var onUploadClick = React.useCallback(function (e) {
        setIsPasting(null);
        setError(null);
    }, [setIsPasting]);
    var readAndValidateJWT = React.useCallback(function (value) {
        if (value.trim() !== '') {
            var jwt = void 0;
            try {
                jwt = JSON.parse(value);
            }
            catch (e) {
                setError(INVALID_JWT_TOKEN_ERROR);
            }
            var validation = validateJWT(jwt);
            if (validation.isValid) {
                onChange({
                    privateKey: jwt.private_key,
                    tokenUri: jwt.token_uri,
                    clientEmail: jwt.client_email,
                    projectId: jwt.project_id,
                });
            }
            else {
                setError(validation.error);
            }
        }
    }, [setError, onChange]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(ui.Field, { label: "JWT token", invalid: Boolean(error), description: isPasting ? 'Paste JWT token below' : 'Upload or paste Google JWT token', error: error },
            React__default["default"].createElement(React__default["default"].Fragment, null,
                isPasting !== true && (React__default["default"].createElement("div", { "data-testid": TEST_IDS.dropZone },
                    React__default["default"].createElement(ui.FileDropzone, { options: { multiple: false, accept: 'application/json' }, readAs: "readAsText", onLoad: function (result) {
                            readAndValidateJWT(result);
                            setIsPasting(false);
                        } },
                        React__default["default"].createElement("p", { style: { margin: 0, fontSize: "" + theme.typography.h4.fontSize, textAlign: 'center' } },
                            "Drop the Google JWT file here",
                            React__default["default"].createElement("br", null),
                            React__default["default"].createElement("br", null),
                            React__default["default"].createElement(ui.LinkButton, { fill: "outline" }, "Click to browse files"))))),
                isPasting && (
                // @ts-ignore
                React__default["default"].createElement(ui.TextArea, { "data-testid": TEST_IDS.pasteArea, autoFocus: true, invalid: Boolean(error), placeholder: "Paste Google JWT token here", onBlur: function (e) { return readAndValidateJWT(e.currentTarget.value); }, rows: 12 })))),
        !isPasting && (React__default["default"].createElement(ui.Field, null,
            React__default["default"].createElement(ui.Button, { "data-testid": TEST_IDS.pasteJwtButton, type: "button", fill: "outline", style: { color: "" + theme.colors.primary.text }, onClick: onPasteClick }, "Paste JWT Token"))),
        isPasting && error && (React__default["default"].createElement(ui.Field, null,
            React__default["default"].createElement(ui.Button, { type: "button", fill: "outline", style: { color: "" + theme.colors.primary.text }, onClick: onUploadClick }, "Upload JWT Token")))));
};
var validateJWT = function (json) {
    if (!lodash.isObject(json)) {
        return { isValid: false, error: 'Invalid JWT token' };
    }
    var missingKeys = configKeys.filter(function (key) { return !json[key]; });
    if (missingKeys.length > 0) {
        return { isValid: false, error: "Missing keys: " + missingKeys.join(', ') };
    }
    return { isValid: true };
};

var JWTForm = function (_a) {
    var options = _a.options, onReset = _a.onReset, onChange = _a.onChange;
    var onResetPress = function () { return onReset(null); };
    return (React__default["default"].createElement("div", { "data-testid": TEST_IDS.jwtForm },
        React__default["default"].createElement(ui.Field, { label: "Project ID" },
            React__default["default"].createElement(ui.Input, { id: "defaultProject", width: 60, value: options.defaultProject || '', onChange: onChange('defaultProject') })),
        React__default["default"].createElement(ui.Field, { label: "Client email" },
            React__default["default"].createElement(ui.Input, { width: 60, id: "clientEmail", value: options.clientEmail || '', onChange: onChange('clientEmail') })),
        React__default["default"].createElement(ui.Field, { label: "Token URI" },
            React__default["default"].createElement(ui.Input, { width: 60, id: "tokenUri", value: options.tokenUri || '', onChange: onChange('tokenUri') })),
        React__default["default"].createElement(ui.Field, { label: "Private key", disabled: true },
            React__default["default"].createElement(ui.Input, { width: 60, id: "privateKey", readOnly: true, placeholder: "Private key configured", addonAfter: React__default["default"].createElement(ui.Tooltip, { content: "Click to clear the uploaded JWT token and upload a new one" },
                    React__default["default"].createElement(ui.Button, { "data-testid": TEST_IDS.resetJwtButton, icon: "sync", size: "xs", onClick: onResetPress, fill: "outline" }, "Reset token")) }))));
};

exports.GoogleAuthType = void 0;
(function (GoogleAuthType) {
    GoogleAuthType["JWT"] = "jwt";
    GoogleAuthType["GCE"] = "gce";
})(exports.GoogleAuthType || (exports.GoogleAuthType = {}));

var GOOGLE_AUTH_TYPE_OPTIONS = [
    { label: 'Google JWT File', value: exports.GoogleAuthType.JWT, ariaLabel: TEST_IDS.authTypeButtonJWT },
    { label: 'GCE Default Service Account', value: exports.GoogleAuthType.GCE, ariaLabel: TEST_IDS.authTypeButtonGCE },
];

var ConnectionConfig = function (props) {
    var options = props.options, onOptionsChange = props.onOptionsChange;
    var jsonData = options.jsonData, secureJsonFields = options.secureJsonFields, secureJsonData = options.secureJsonData;
    if (!jsonData.authenticationType) {
        jsonData.authenticationType = exports.GoogleAuthType.JWT;
    }
    var isJWT = jsonData.authenticationType === exports.GoogleAuthType.JWT || jsonData.authenticationType === undefined;
    var onAuthTypeChange = function (authenticationType) {
        onOptionsChange(__assign(__assign({}, options), { jsonData: __assign(__assign({}, options.jsonData), { authenticationType: authenticationType }) }));
    };
    var hasJWTConfigured = Boolean(secureJsonFields &&
        secureJsonFields.privateKey &&
        jsonData.clientEmail &&
        jsonData.defaultProject &&
        jsonData.tokenUri);
    var onResetApiKey = function (jsonData) {
        var nextSecureJsonData = __assign({}, secureJsonData);
        var nextJsonData = !jsonData ? __assign({}, options.jsonData) : __assign(__assign({}, options.jsonData), jsonData);
        delete nextJsonData.clientEmail;
        delete nextJsonData.defaultProject;
        delete nextJsonData.tokenUri;
        delete nextSecureJsonData.privateKey;
        onOptionsChange(__assign(__assign({}, options), { secureJsonData: nextSecureJsonData, jsonData: nextJsonData }));
    };
    var onJWTFormChange = function (key) { return data.onUpdateDatasourceJsonDataOption(props, key); };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(ui.FieldSet, { label: "Authentication" },
            React__default["default"].createElement(ui.Field, { label: "Authentication type" },
                React__default["default"].createElement(ui.RadioButtonGroup, { options: GOOGLE_AUTH_TYPE_OPTIONS, value: jsonData.authenticationType || exports.GoogleAuthType.JWT, onChange: onAuthTypeChange }))),
        isJWT && (React__default["default"].createElement(ui.FieldSet, { label: "JWT Key Details" },
            hasJWTConfigured ? (React__default["default"].createElement(JWTForm, { options: options.jsonData, onReset: onResetApiKey, onChange: onJWTFormChange })) : (React__default["default"].createElement(JWTConfigEditor, { onChange: function (jwt) {
                    onOptionsChange(__assign(__assign({}, options), { secureJsonFields: __assign(__assign({}, secureJsonFields), { privateKey: true }), secureJsonData: __assign(__assign({}, secureJsonData), { privateKey: jwt.privateKey }), jsonData: __assign(__assign({}, jsonData), { clientEmail: jwt.clientEmail, defaultProject: jwt.projectId, tokenUri: jwt.tokenUri }) }));
                } })),
            ' ')),
        React__default["default"].createElement("div", { className: "grafana-info-box", style: { marginTop: '16px' }, "data-testid": TEST_IDS.helpBox },
            React__default["default"].createElement("p", null,
                "Don\u2019t know how to get a service account key file or create a service account? Read more",
                ' ',
                React__default["default"].createElement("a", { className: "external-link", target: "_blank", rel: "noopener noreferrer", href: "https://grafana.com/docs/grafana/latest/datasources/google-cloud-monitoring/google-authentication/" }, "in the documentation."))),
        !isJWT && (React__default["default"].createElement(ui.Alert, { title: "", severity: "info" }, "Verify GCE default service account by clicking Save & Test"))));
};

exports.ConnectionConfig = ConnectionConfig;
//# sourceMappingURL=index.development.js.map


/***/ }),

/***/ "./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/dist/index.development.js");
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRNb25pdG9yaW5nUGx1Z2luLjFhMjgxNWE2ZGFiNThjOGM3NmFjLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFFQTtBQU9BO0FBRWUsTUFBTVMsOEJBQU4sQ0FBcUM7RUFDbERDLFdBQVcsQ0FBU0MsVUFBVCxFQUFnRDtJQUFBLEtBQXZDQSxVQUF1QyxHQUF2Q0EsVUFBdUM7RUFBRTs7RUFFaEQsTUFBUEMsT0FBTyxDQUFDQyxLQUFELEVBQXNDO0lBQ2pELElBQUk7TUFDRixJQUFJLENBQUNBLEtBQUssQ0FBQ0MsV0FBWCxFQUF3QjtRQUN0QkQsS0FBSyxDQUFDQyxXQUFOLEdBQW9CLEtBQUtILFVBQUwsQ0FBZ0JJLGlCQUFoQixFQUFwQjtNQUNEOztNQUVELFFBQVFGLEtBQUssQ0FBQ0csaUJBQWQ7UUFDRSxLQUFLUixpRUFBTDtVQUNFLE9BQU8sS0FBS1UsbUJBQUwsRUFBUDs7UUFDRixLQUFLVixpRUFBTDtVQUNFLE9BQU8sS0FBS1ksa0JBQUwsQ0FBd0JQLEtBQXhCLENBQVA7O1FBQ0YsS0FBS0wsb0VBQUw7VUFDRSxPQUFPLEtBQUtjLHNCQUFMLENBQTRCVCxLQUE1QixDQUFQOztRQUNGLEtBQUtMLGtFQUFMO1VBQ0UsT0FBTyxLQUFLZ0Isb0JBQUwsQ0FBMEJYLEtBQTFCLENBQVA7O1FBQ0YsS0FBS0wsb0VBQUw7VUFDRSxPQUFPLEtBQUtrQixzQkFBTCxDQUE0QmIsS0FBNUIsQ0FBUDs7UUFDRixLQUFLTCxzRUFBTDtVQUNFLE9BQU8sS0FBS29CLHVCQUFMLENBQTZCZixLQUE3QixDQUFQOztRQUNGLEtBQUtMLGlFQUFMO1VBQ0UsT0FBTyxLQUFLc0IsbUJBQUwsQ0FBeUJqQixLQUF6QixDQUFQOztRQUNGLEtBQUtMLHlFQUFMO1VBQ0UsT0FBTyxLQUFLd0IsMEJBQUwsRUFBUDs7UUFDRixLQUFLeEIscUVBQUw7VUFDRSxPQUFPLEtBQUswQixzQkFBTCxDQUE0QnJCLEtBQTVCLENBQVA7O1FBQ0YsS0FBS0wsb0VB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Q0YsRUFBRSx3S0FBdUQ7QUFDekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9DbG91ZE1vbml0b3JpbmdNZXRyaWNGaW5kUXVlcnkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvYW5ub3RhdGlvblN1cHBvcnQudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9BZ2dyZWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9BbGlhc0J5LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0FsaWdubWVudC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9BbGlnbm1lbnRGdW5jdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9BbGlnbm1lbnRQZXJpb2RMYWJlbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9Bbm5vdGF0aW9uUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvQW5ub3RhdGlvbnNIZWxwLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0Nsb3VkTW9uaXRvcmluZ0NoZWF0U2hlZXQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvQ29uZmlnRWRpdG9yL0NvbmZpZ0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9FeHBlcmltZW50YWwvQWdncmVnYXRpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvRXhwZXJpbWVudGFsL0FsaWFzQnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvRXhwZXJpbWVudGFsL0FsaWdubWVudC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9FeHBlcmltZW50YWwvQWxpZ25tZW50RnVuY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvRXhwZXJpbWVudGFsL0FsaWdubWVudFBlcmlvZExhYmVsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0V4cGVyaW1lbnRhbC9HcmFwaFBlcmlvZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9FeHBlcmltZW50YWwvR3JvdXBCeS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9FeHBlcmltZW50YWwvTWV0cmljUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvRXhwZXJpbWVudGFsL01ldHJpY3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvRXhwZXJpbWVudGFsL1BlcmlvZFNlbGVjdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9FeHBlcmltZW50YWwvUHJlcHJvY2Vzc29yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0V4cGVyaW1lbnRhbC9RdWVyeUhlYWRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9FeHBlcmltZW50YWwvVmlzdWFsTWV0cmljUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvRmllbGRzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0dyYXBoUGVyaW9kLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0dyb3VwQnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvTGFiZWxGaWx0ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvTVFMUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvTWV0cmljUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvTWV0cmljcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9QZXJpb2RTZWxlY3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvUHJlcHJvY2Vzc29yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL1Byb2plY3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvU0xPL1NMTy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9TTE8vU0xPUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvU0xPL1NlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL1NMTy9TZXJ2aWNlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL1NMTy9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL1ZhcmlhYmxlUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvVmlzdWFsTWV0cmljUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2RhdGFzb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvZnVuY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy90eXBlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy92YXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BncmFmYW5hLWdvb2dsZS1zZGstbnBtLTAuMC4zLWM5MTY2MzQzM2YtOWViNWUwNDNlMC56aXAvbm9kZV9tb2R1bGVzL0BncmFmYW5hL2dvb2dsZS1zZGsvZGlzdC9pbmRleC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQGdyYWZhbmEtZ29vZ2xlLXNkay1ucG0tMC4wLjMtYzkxNjYzNDMzZi05ZWI1ZTA0M2UwLnppcC9ub2RlX21vZHVsZXMvQGdyYWZhbmEvZ29vZ2xlLXNkay9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBBTElHTk1FTlRfUEVSSU9EUywgU0VMRUNUT1JTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7XG4gIGV4dHJhY3RTZXJ2aWNlc0Zyb21NZXRyaWNEZXNjcmlwdG9ycyxcbiAgZ2V0QWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMsXG4gIGdldEFsaWdubWVudE9wdGlvbnNCeU1ldHJpYyxcbiAgZ2V0TGFiZWxLZXlzLFxuICBnZXRNZXRyaWNUeXBlc0J5U2VydmljZSxcbn0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSwgTWV0cmljRGVzY3JpcHRvciwgTWV0cmljRmluZFF1ZXJ5VHlwZXMsIE1ldHJpY0tpbmQsIFZhbHVlVHlwZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWRNb25pdG9yaW5nTWV0cmljRmluZFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlKSB7fVxuXG4gIGFzeW5jIGV4ZWN1dGUocXVlcnk6IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFxdWVyeS5wcm9qZWN0TmFtZSkge1xuICAgICAgICBxdWVyeS5wcm9qZWN0TmFtZSA9IHRoaXMuZGF0YXNvdXJjZS5nZXREZWZhdWx0UHJvamVjdCgpO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHF1ZXJ5LnNlbGVjdGVkUXVlcnlUeXBlKSB7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuUHJvamVjdHM6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUHJvamVjdHNRdWVyeSgpO1xuICAgICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlNlcnZpY2VzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNlcnZpY2VRdWVyeShxdWVyeSk7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuTWV0cmljVHlwZXM6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTWV0cmljVHlwZXNRdWVyeShxdWVyeSk7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuTGFiZWxLZXlzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUxhYmVsS2V5c1F1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5MYWJlbFZhbHVlczpcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVMYWJlbFZhbHVlc1F1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5SZXNvdXJjZVR5cGVzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlc291cmNlVHlwZVF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5BbGlnbmVyczpcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBbGlnbmVyc1F1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5BbGlnbm1lbnRQZXJpb2RzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFsaWdubWVudFBlcmlvZFF1ZXJ5KCk7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuQWdncmVnYXRpb25zOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFnZ3JlZ2F0aW9uUXVlcnkocXVlcnkpO1xuICAgICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlNMT1NlcnZpY2VzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNMT1NlcnZpY2VzUXVlcnkocXVlcnkpO1xuICAgICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlNMTzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTTE9RdWVyeShxdWVyeSk7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuU2VsZWN0b3JzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNlbGVjdG9yUXVlcnkoKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCBydW4gQ2xvdWRNb25pdG9yaW5nTWV0cmljRmluZFF1ZXJ5ICR7cXVlcnl9YCwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVByb2plY3RzUXVlcnkoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0UHJvamVjdHMoKTtcbiAgICByZXR1cm4gKHByb2plY3RzIGFzIFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KS5tYXAoKHM6IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9KSA9PiAoe1xuICAgICAgdGV4dDogcy5sYWJlbCxcbiAgICAgIHZhbHVlOiBzLnZhbHVlLFxuICAgICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVTZXJ2aWNlUXVlcnkoeyBwcm9qZWN0TmFtZSB9OiBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5KSB7XG4gICAgY29uc3QgbWV0cmljRGVzY3JpcHRvcnMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0TWV0cmljVHlwZXMocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IHNlcnZpY2VzOiBNZXRyaWNEZXNjcmlwdG9yW10gPSBleHRyYWN0U2VydmljZXNGcm9tTWV0cmljRGVzY3JpcHRvcnMobWV0cmljRGVzY3JpcHRvcnMpO1xuICAgIHJldHVybiBzZXJ2aWNlcy5tYXAoKHMpID0+ICh7XG4gICAgICB0ZXh0OiBzLnNlcnZpY2VTaG9ydE5hbWUsXG4gICAgICB2YWx1ZTogcy5zZXJ2aWNlLFxuICAgICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVNZXRyaWNUeXBlc1F1ZXJ5KHsgc2VsZWN0ZWRTZXJ2aWNlLCBwcm9qZWN0TmFtZSB9OiBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5KSB7XG4gICAgaWYgKCFzZWxlY3RlZFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgbWV0cmljRGVzY3JpcHRvcnMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0TWV0cmljVHlwZXMocHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBnZXRNZXRyaWNUeXBlc0J5U2VydmljZShtZXRyaWNEZXNjcmlwdG9ycywgdGhpcy5kYXRhc291cmNlLnRlbXBsYXRlU3J2LnJlcGxhY2Uoc2VsZWN0ZWRTZXJ2aWNlKSkubWFwKFxuICAgICAgKHMpID0+ICh7XG4gICAgICAgIHRleHQ6IHMuZGlzcGxheU5hbWUsXG4gICAgICAgIHZhbHVlOiBzLnR5cGUsXG4gICAgICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVMYWJlbEtleXNRdWVyeSh7IHNlbGVjdGVkTWV0cmljVHlwZSwgcHJvamVjdE5hbWUgfTogQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSkge1xuICAgIGlmICghc2VsZWN0ZWRNZXRyaWNUeXBlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGxhYmVsS2V5cyA9IGF3YWl0IGdldExhYmVsS2V5cyh0aGlzLmRhdGFzb3VyY2UsIHNlbGVjdGVkTWV0cmljVHlwZSwgcHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBsYWJlbEtleXMubWFwKHRoaXMudG9GaW5kUXVlcnlSZXN1bHQpO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlTGFiZWxWYWx1ZXNRdWVyeSh7IHNlbGVjdGVkTWV0cmljVHlwZSwgbGFiZWxLZXksIHByb2plY3ROYW1lIH06IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkpIHtcbiAgICBpZiAoIXNlbGVjdGVkTWV0cmljVHlwZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCByZWZJZCA9ICdoYW5kbGVMYWJlbFZhbHVlc1F1ZXJ5JztcbiAgICAvLyBSRURVQ0VfTUVBTiBpcyBuZWVkZWQgc28gdGhlIGdyb3VwQnkgaXMgbm90IGlnbm9yZWRcbiAgICBjb25zdCBsYWJlbHMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0TGFiZWxzKHNlbGVjdGVkTWV0cmljVHlwZSwgcmVmSWQsIHByb2plY3ROYW1lLCB7XG4gICAgICBncm91cEJ5czogW2xhYmVsS2V5XSxcbiAgICAgIGNyb3NzU2VyaWVzUmVkdWNlcjogJ1JFRFVDRV9NRUFOJyxcbiAgICB9KTtcbiAgICBjb25zdCBpbnRlcnBvbGF0ZWRLZXkgPSB0aGlzLmRhdGFzb3VyY2UudGVtcGxhdGVTcnYucmVwbGFjZShsYWJlbEtleSk7XG4gICAgY29uc3QgdmFsdWVzID0gbGFiZWxzLmhhc093blByb3BlcnR5KGludGVycG9sYXRlZEtleSkgPyBsYWJlbHNbaW50ZXJwb2xhdGVkS2V5XSA6IFtdO1xuICAgIHJldHVybiB2YWx1ZXMubWFwKHRoaXMudG9GaW5kUXVlcnlSZXN1bHQpO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlUmVzb3VyY2VUeXBlUXVlcnkoeyBzZWxlY3RlZE1ldHJpY1R5cGUsIHByb2plY3ROYW1lIH06IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkpIHtcbiAgICBpZiAoIXNlbGVjdGVkTWV0cmljVHlwZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCByZWZJZCA9ICdoYW5kbGVSZXNvdXJjZVR5cGVRdWVyeVF1ZXJ5VHlwZSc7XG4gICAgY29uc3QgbGFiZWxzID0gYXdhaXQgdGhpcy5kYXRhc291cmNlLmdldExhYmVscyhzZWxlY3RlZE1ldHJpY1R5cGUsIHJlZklkLCBwcm9qZWN0TmFtZSk7XG4gICAgcmV0dXJuIGxhYmVsc1sncmVzb3VyY2UudHlwZSddPy5tYXAodGhpcy50b0ZpbmRRdWVyeVJlc3VsdCkgPz8gW107XG4gIH1cblxuICBhc3luYyBoYW5kbGVBbGlnbmVyc1F1ZXJ5KHsgc2VsZWN0ZWRNZXRyaWNUeXBlLCBwcm9qZWN0TmFtZSB9OiBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5KSB7XG4gICAgaWYgKCFzZWxlY3RlZE1ldHJpY1R5cGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgbWV0cmljRGVzY3JpcHRvcnMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0TWV0cmljVHlwZXMocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBtZXRyaWNEZXNjcmlwdG9ycy5maW5kKFxuICAgICAgKG0pID0+IG0udHlwZSA9PT0gdGhpcy5kYXRhc291cmNlLnRlbXBsYXRlU3J2LnJlcGxhY2Uoc2VsZWN0ZWRNZXRyaWNUeXBlKVxuICAgICk7XG5cbiAgICBpZiAoIWRlc2NyaXB0b3IpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0QWxpZ25tZW50T3B0aW9uc0J5TWV0cmljKGRlc2NyaXB0b3IudmFsdWVUeXBlLCBkZXNjcmlwdG9yLm1ldHJpY0tpbmQpLm1hcCh0aGlzLnRvRmluZFF1ZXJ5UmVzdWx0KTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZUFnZ3JlZ2F0aW9uUXVlcnkoeyBzZWxlY3RlZE1ldHJpY1R5cGUsIHByb2plY3ROYW1lIH06IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkpIHtcbiAgICBpZiAoIXNlbGVjdGVkTWV0cmljVHlwZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1ldHJpY0Rlc2NyaXB0b3JzID0gYXdhaXQgdGhpcy5kYXRhc291cmNlLmdldE1ldHJpY1R5cGVzKHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0gbWV0cmljRGVzY3JpcHRvcnMuZmluZChcbiAgICAgIChtKSA9PiBtLnR5cGUgPT09IHRoaXMuZGF0YXNvdXJjZS50ZW1wbGF0ZVNydi5yZXBsYWNlKHNlbGVjdGVkTWV0cmljVHlwZSlcbiAgICApO1xuXG4gICAgaWYgKCFkZXNjcmlwdG9yKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldEFnZ3JlZ2F0aW9uT3B0aW9uc0J5TWV0cmljKGRlc2NyaXB0b3IudmFsdWVUeXBlIGFzIFZhbHVlVHlwZXMsIGRlc2NyaXB0b3IubWV0cmljS2luZCBhcyBNZXRyaWNLaW5kKS5tYXAoXG4gICAgICB0aGlzLnRvRmluZFF1ZXJ5UmVzdWx0XG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVNMT1NlcnZpY2VzUXVlcnkoeyBwcm9qZWN0TmFtZSB9OiBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VydmljZXMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0U0xPU2VydmljZXMocHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBzZXJ2aWNlcy5tYXAodGhpcy50b0ZpbmRRdWVyeVJlc3VsdCk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVTTE9RdWVyeSh7IHNlbGVjdGVkU0xPU2VydmljZSwgcHJvamVjdE5hbWUgfTogQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSkge1xuICAgIGNvbnN0IHNsb3MgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0U2VydmljZUxldmVsT2JqZWN0aXZlcyhwcm9qZWN0TmFtZSwgc2VsZWN0ZWRTTE9TZXJ2aWNlKTtcbiAgICByZXR1cm4gc2xvcy5tYXAodGhpcy50b0ZpbmRRdWVyeVJlc3VsdCk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVTZWxlY3RvclF1ZXJ5KCkge1xuICAgIHJldHVybiBTRUxFQ1RPUlMubWFwKHRoaXMudG9GaW5kUXVlcnlSZXN1bHQpO1xuICB9XG5cbiAgaGFuZGxlQWxpZ25tZW50UGVyaW9kUXVlcnkoKSB7XG4gICAgcmV0dXJuIEFMSUdOTUVOVF9QRVJJT0RTLm1hcCh0aGlzLnRvRmluZFF1ZXJ5UmVzdWx0KTtcbiAgfVxuXG4gIHRvRmluZFF1ZXJ5UmVzdWx0KHg6IGFueSkge1xuICAgIHJldHVybiBpc1N0cmluZyh4KSA/IHsgdGV4dDogeCwgZXhwYW5kYWJsZTogdHJ1ZSB9IDogeyAuLi54LCBleHBhbmRhYmxlOiB0cnVlIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEFubm90YXRpb25TdXBwb3J0LCBBbm5vdGF0aW9uUXVlcnkgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgQW5ub3RhdGlvblF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL0Fubm90YXRpb25RdWVyeUVkaXRvcic7XG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHtcbiAgQWxpZ25tZW50VHlwZXMsXG4gIENsb3VkTW9uaXRvcmluZ1F1ZXJ5LFxuICBFZGl0b3JNb2RlLFxuICBMZWdhY3lDbG91ZE1vbml0b3JpbmdBbm5vdGF0aW9uUXVlcnksXG4gIE1ldHJpY0tpbmQsXG4gIFF1ZXJ5VHlwZSxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIFRoZSBsZWdhY3kgcXVlcnkgZm9ybWF0IHNldHMgdGhlIHRpdGxlIGFuZCB0ZXh0IHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzIGJ5IGRlZmF1bHQuXG4vLyBJZiB0aGUgdGl0bGUgb3IgdGV4dCBpcyBub3QgdW5kZWZpbmVkIGF0IHRoZSB0b3AtbGV2ZWwgb2YgdGhlIGFubm90YXRpb24gdGFyZ2V0LFxuLy8gdGhlbiBpdCBpcyBhIGxlZ2FjeSBxdWVyeS5cbmNvbnN0IGlzTGVnYWN5Q2xvdWRNb25pdG9yaW5nQW5ub3RhdGlvbiA9IChcbiAgcXVlcnk6IHVua25vd25cbik6IHF1ZXJ5IGlzIEFubm90YXRpb25RdWVyeTxMZWdhY3lDbG91ZE1vbml0b3JpbmdBbm5vdGF0aW9uUXVlcnk+ID0+XG4gIChxdWVyeSBhcyBBbm5vdGF0aW9uUXVlcnk8TGVnYWN5Q2xvdWRNb25pdG9yaW5nQW5ub3RhdGlvblF1ZXJ5PikudGFyZ2V0Py50aXRsZSAhPT0gdW5kZWZpbmVkIHx8XG4gIChxdWVyeSBhcyBBbm5vdGF0aW9uUXVlcnk8TGVnYWN5Q2xvdWRNb25pdG9yaW5nQW5ub3RhdGlvblF1ZXJ5PikudGFyZ2V0Py50ZXh0ICE9PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBDbG91ZE1vbml0b3JpbmdBbm5vdGF0aW9uU3VwcG9ydDogKFxuICBkczogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZVxuKSA9PiBBbm5vdGF0aW9uU3VwcG9ydDxDbG91ZE1vbml0b3JpbmdRdWVyeT4gPSAoZHM6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcmVwYXJlQW5ub3RhdGlvbjogKFxuICAgICAgcXVlcnk6IEFubm90YXRpb25RdWVyeTxMZWdhY3lDbG91ZE1vbml0b3JpbmdBbm5vdGF0aW9uUXVlcnk+IHwgQW5ub3RhdGlvblF1ZXJ5PENsb3VkTW9uaXRvcmluZ1F1ZXJ5PlxuICAgICk6IEFubm90YXRpb25RdWVyeTxDbG91ZE1vbml0b3JpbmdRdWVyeT4gPT4ge1xuICAgICAgaWYgKCFpc0xlZ2FjeUNsb3VkTW9uaXRvcmluZ0Fubm90YXRpb24ocXVlcnkpKSB7XG4gICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBlbmFibGUsIG5hbWUsIGljb25Db2xvciB9ID0gcXVlcnk7XG4gICAgICBjb25zdCB7IHRhcmdldCB9ID0gcXVlcnk7XG4gICAgICBjb25zdCByZXN1bHQ6IEFubm90YXRpb25RdWVyeTxDbG91ZE1vbml0b3JpbmdRdWVyeT4gPSB7XG4gICAgICAgIGRhdGFzb3VyY2U6IHF1ZXJ5LmRhdGFzb3VyY2UsXG4gICAgICAgIGVuYWJsZSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaWNvbkNvbG9yLFxuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICBpbnRlcnZhbE1zOiBkcy5pbnRlcnZhbE1zLFxuICAgICAgICAgIHJlZklkOiB0YXJnZXQ/LnJlZklkIHx8ICdhbm5vdGF0aW9uUXVlcnknLFxuICAgICAgICAgIHR5cGU6ICdhbm5vdGF0aW9uUXVlcnknLFxuICAgICAgICAgIHF1ZXJ5VHlwZTogUXVlcnlUeXBlLk1FVFJJQ1MsXG4gICAgICAgICAgbWV0cmljUXVlcnk6IHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiB0YXJnZXQ/LnByb2plY3ROYW1lIHx8IGRzLmdldERlZmF1bHRQcm9qZWN0KCksXG4gICAgICAgICAgICBlZGl0b3JNb2RlOiBFZGl0b3JNb2RlLlZpc3VhbCxcbiAgICAgICAgICAgIG1ldHJpY1R5cGU6IHRhcmdldD8ubWV0cmljVHlwZSB8fCAnJyxcbiAgICAgICAgICAgIGZpbHRlcnM6IHRhcmdldD8uZmlsdGVycyB8fCBbXSxcbiAgICAgICAgICAgIG1ldHJpY0tpbmQ6IHRhcmdldD8ubWV0cmljS2luZCB8fCBNZXRyaWNLaW5kLkdBVUdFLFxuICAgICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICAgICAgY3Jvc3NTZXJpZXNSZWR1Y2VyOiAnUkVEVUNFX05PTkUnLFxuICAgICAgICAgICAgcGVyU2VyaWVzQWxpZ25lcjogQWxpZ25tZW50VHlwZXMuQUxJR05fTk9ORSxcbiAgICAgICAgICAgIHRpdGxlOiB0YXJnZXQ/LnRpdGxlIHx8ICcnLFxuICAgICAgICAgICAgdGV4dDogdGFyZ2V0Py50ZXh0IHx8ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIHByZXBhcmVRdWVyeTogKGFubm86IEFubm90YXRpb25RdWVyeTxDbG91ZE1vbml0b3JpbmdRdWVyeT4pID0+IHtcbiAgICAgIGlmICghYW5uby50YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYW5uby50YXJnZXQsXG4gICAgICAgIHF1ZXJ5VHlwZTogUXVlcnlUeXBlLk1FVFJJQ1MsXG4gICAgICAgIHR5cGU6ICdhbm5vdGF0aW9uUXVlcnknLFxuICAgICAgICBtZXRyaWNRdWVyeToge1xuICAgICAgICAgIC4uLmFubm8udGFyZ2V0Lm1ldHJpY1F1ZXJ5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIFF1ZXJ5RWRpdG9yOiBBbm5vdGF0aW9uUXVlcnlFZGl0b3IsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgZ2V0QWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgTWV0cmljRGVzY3JpcHRvciwgTWV0cmljS2luZCwgVmFsdWVUeXBlcyB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JGaWVsZCB9IGZyb20gJy4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgb25DaGFuZ2U6IChtZXRyaWNEZXNjcmlwdG9yOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG1ldHJpY0Rlc2NyaXB0b3I/OiBNZXRyaWNEZXNjcmlwdG9yO1xuICBjcm9zc1Nlcmllc1JlZHVjZXI6IHN0cmluZztcbiAgZ3JvdXBCeXM6IHN0cmluZ1tdO1xuICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xufVxuXG5leHBvcnQgY29uc3QgQWdncmVnYXRpb246IEZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBhZ2dPcHRpb25zID0gdXNlQWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMocHJvcHMpO1xuICBjb25zdCBzZWxlY3RlZCA9IHVzZVNlbGVjdGVkRnJvbU9wdGlvbnMoYWdnT3B0aW9ucywgcHJvcHMpO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yRmllbGRcbiAgICAgIGxhYmVsV2lkdGg9ezE4fVxuICAgICAgbGFiZWw9XCJHcm91cCBieSBmdW5jdGlvblwiXG4gICAgICBkYXRhLXRlc3RpZD1cImNsb3VkLW1vbml0b3JpbmctYWdncmVnYXRpb25cIlxuICAgICAgaHRtbEZvcj17YCR7cHJvcHMucmVmSWR9LWdyb3VwLWJ5LWZ1bmN0aW9uYH1cbiAgICA+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IHByb3BzLm9uQ2hhbmdlKHZhbHVlISl9XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZH1cbiAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHByb3BzLnRlbXBsYXRlVmFyaWFibGVPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdBZ2dyZWdhdGlvbnMnLFxuICAgICAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgICAgICBvcHRpb25zOiBhZ2dPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFJlZHVjZXJcIlxuICAgICAgICBpbnB1dElkPXtgJHtwcm9wcy5yZWZJZH0tZ3JvdXAtYnktZnVuY3Rpb25gfVxuICAgICAgLz5cbiAgICA8L1F1ZXJ5RWRpdG9yRmllbGQ+XG4gICk7XG59O1xuXG5jb25zdCB1c2VBZ2dyZWdhdGlvbk9wdGlvbnNCeU1ldHJpYyA9ICh7IG1ldHJpY0Rlc2NyaXB0b3IgfTogUHJvcHMpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPT4ge1xuICBjb25zdCB2YWx1ZVR5cGUgPSBtZXRyaWNEZXNjcmlwdG9yPy52YWx1ZVR5cGU7XG4gIGNvbnN0IG1ldHJpY0tpbmQgPSBtZXRyaWNEZXNjcmlwdG9yPy5tZXRyaWNLaW5kO1xuXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXZhbHVlVHlwZSB8fCAhbWV0cmljS2luZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRBZ2dyZWdhdGlvbk9wdGlvbnNCeU1ldHJpYyh2YWx1ZVR5cGUgYXMgVmFsdWVUeXBlcywgbWV0cmljS2luZCBhcyBNZXRyaWNLaW5kKS5tYXAoKGEpID0+ICh7XG4gICAgICAuLi5hLFxuICAgICAgbGFiZWw6IGEudGV4dCxcbiAgICB9KSk7XG4gIH0sIFt2YWx1ZVR5cGUsIG1ldHJpY0tpbmRdKTtcbn07XG5cbmNvbnN0IHVzZVNlbGVjdGVkRnJvbU9wdGlvbnMgPSAoYWdnT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+LCBwcm9wczogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBbLi4uYWdnT3B0aW9ucywgLi4ucHJvcHMudGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdO1xuICAgIHJldHVybiBhbGxPcHRpb25zLmZpbmQoKHMpID0+IHMudmFsdWUgPT09IHByb3BzLmNyb3NzU2VyaWVzUmVkdWNlcik7XG4gIH0sIFthZ2dPcHRpb25zLCBwcm9wcy5jcm9zc1Nlcmllc1JlZHVjZXIsIHByb3BzLnRlbXBsYXRlVmFyaWFibGVPcHRpb25zXSk7XG59O1xuIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IElOUFVUX1dJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAoYWxpYXM6IGFueSkgPT4gdm9pZDtcbiAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBbGlhc0J5OiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyByZWZJZCwgdmFsdWUgPSAnJywgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCBbYWxpYXMsIHNldEFsaWFzXSA9IHVzZVN0YXRlKHZhbHVlID8/ICcnKTtcblxuICBjb25zdCBwcm9wYWdhdGVPbkNoYW5nZSA9IGRlYm91bmNlKG9uQ2hhbmdlLCAxMDAwKTtcblxuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRBbGlhcyhlLnRhcmdldC52YWx1ZSk7XG4gICAgcHJvcGFnYXRlT25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93IGxhYmVsPVwiQWxpYXMgYnlcIiBodG1sRm9yPXtgJHtyZWZJZH0tYWxpYXMtYnlgfT5cbiAgICAgIDxJbnB1dCBpZD17YCR7cmVmSWR9LWFsaWFzLWJ5YH0gd2lkdGg9e0lOUFVUX1dJRFRIfSB2YWx1ZT17YWxpYXN9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IEFMSUdOTUVOVF9QRVJJT0RTLCBTRUxFQ1RfV0lEVEggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDdXN0b21NZXRhRGF0YSwgTWV0cmljUXVlcnksIFNMT1F1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBBbGlnbm1lbnRGdW5jdGlvbiwgUGVyaW9kU2VsZWN0LCBBbGlnbm1lbnRQZXJpb2RMYWJlbCwgUXVlcnlFZGl0b3JGaWVsZCwgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IE1ldHJpY1F1ZXJ5IHwgU0xPUXVlcnkpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBNZXRyaWNRdWVyeTtcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgY3VzdG9tTWV0YURhdGE6IEN1c3RvbU1ldGFEYXRhO1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgQWxpZ25tZW50OiBGQzxQcm9wcz4gPSAoe1xuICByZWZJZCxcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gIG9uQ2hhbmdlLFxuICBxdWVyeSxcbiAgY3VzdG9tTWV0YURhdGEsXG4gIGRhdGFzb3VyY2UsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93XG4gICAgICBsYWJlbD1cIkFsaWdubWVudCBmdW5jdGlvblwiXG4gICAgICB0b29sdGlwPVwiVGhlIHByb2Nlc3Mgb2YgYWxpZ25tZW50IGNvbnNpc3RzIG9mIGNvbGxlY3RpbmcgYWxsIGRhdGEgcG9pbnRzIHJlY2VpdmVkIGluIGEgZml4ZWQgbGVuZ3RoIG9mIHRpbWUsIGFwcGx5aW5nIGEgZnVuY3Rpb24gdG8gY29tYmluZSB0aG9zZSBkYXRhIHBvaW50cywgYW5kIGFzc2lnbmluZyBhIHRpbWVzdGFtcCB0byB0aGUgcmVzdWx0LlwiXG4gICAgICBmaWxsQ29tcG9uZW50PXs8QWxpZ25tZW50UGVyaW9kTGFiZWwgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX0gY3VzdG9tTWV0YURhdGE9e2N1c3RvbU1ldGFEYXRhfSAvPn1cbiAgICAgIGh0bWxGb3I9e2Ake3JlZklkfS1hbGlnbm1lbnQtZnVuY3Rpb25gfVxuICAgID5cbiAgICAgIDxBbGlnbm1lbnRGdW5jdGlvblxuICAgICAgICBpbnB1dElkPXtgJHtyZWZJZH0tYWxpZ25tZW50LWZ1bmN0aW9uYH1cbiAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3RlbXBsYXRlVmFyaWFibGVPcHRpb25zfVxuICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIC8+XG4gICAgICA8UXVlcnlFZGl0b3JGaWVsZCBsYWJlbD1cIkFsaWdubWVudCBwZXJpb2RcIiBodG1sRm9yPXtgJHtyZWZJZH0tYWxpZ25tZW50LXBlcmlvZGB9PlxuICAgICAgICA8UGVyaW9kU2VsZWN0XG4gICAgICAgICAgaW5wdXRJZD17YCR7cmVmSWR9LWFsaWdubWVudC1wZXJpb2RgfVxuICAgICAgICAgIHNlbGVjdFdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3RlbXBsYXRlVmFyaWFibGVPcHRpb25zfVxuICAgICAgICAgIGN1cnJlbnQ9e3F1ZXJ5LmFsaWdubWVudFBlcmlvZH1cbiAgICAgICAgICBvbkNoYW5nZT17KHBlcmlvZCkgPT4gb25DaGFuZ2UoeyAuLi5xdWVyeSwgYWxpZ25tZW50UGVyaW9kOiBwZXJpb2QgfSl9XG4gICAgICAgICAgYWxpZ21lbnRQZXJpb2RzPXtBTElHTk1FTlRfUEVSSU9EU31cbiAgICAgICAgLz5cbiAgICAgIDwvUXVlcnlFZGl0b3JGaWVsZD5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFNFTEVDVF9XSURUSCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRBbGlnbm1lbnRQaWNrZXJEYXRhIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IE1ldHJpY1F1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgaW5wdXRJZDogc3RyaW5nO1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBNZXRyaWNRdWVyeSkgPT4gdm9pZDtcbiAgcXVlcnk6IE1ldHJpY1F1ZXJ5O1xuICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xufVxuXG5leHBvcnQgY29uc3QgQWxpZ25tZW50RnVuY3Rpb246IEZDPFByb3BzPiA9ICh7IGlucHV0SWQsIHF1ZXJ5LCB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucywgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCB7IHZhbHVlVHlwZSwgbWV0cmljS2luZCwgcGVyU2VyaWVzQWxpZ25lcjogcHNhLCBwcmVwcm9jZXNzb3IgfSA9IHF1ZXJ5O1xuICBjb25zdCB7IHBlclNlcmllc0FsaWduZXIsIGFsaWduT3B0aW9ucyB9ID0gdXNlTWVtbyhcbiAgICAoKSA9PiBnZXRBbGlnbm1lbnRQaWNrZXJEYXRhKHZhbHVlVHlwZSwgbWV0cmljS2luZCwgcHNhLCBwcmVwcm9jZXNzb3IpLFxuICAgIFt2YWx1ZVR5cGUsIG1ldHJpY0tpbmQsIHBzYSwgcHJlcHJvY2Vzc29yXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFxuICAgICAgd2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSB9KSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBwZXJTZXJpZXNBbGlnbmVyOiB2YWx1ZSEgfSl9XG4gICAgICB2YWx1ZT17Wy4uLmFsaWduT3B0aW9ucywgLi4udGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdLmZpbmQoKHMpID0+IHMudmFsdWUgPT09IHBlclNlcmllc0FsaWduZXIpfVxuICAgICAgb3B0aW9ucz17W1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdUZW1wbGF0ZSBWYXJpYWJsZXMnLFxuICAgICAgICAgIG9wdGlvbnM6IHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdBbGlnbm1lbnQgb3B0aW9ucycsXG4gICAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgICAgb3B0aW9uczogYWxpZ25PcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgXX1cbiAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IEFsaWdubWVudFwiXG4gICAgICBpbnB1dElkPXtpbnB1dElkfVxuICAgID48L1NlbGVjdD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHJhbmdlVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBBTElHTk1FTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ3VzdG9tTWV0YURhdGEgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjdXN0b21NZXRhRGF0YTogQ3VzdG9tTWV0YURhdGE7XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBBbGlnbm1lbnRQZXJpb2RMYWJlbDogRkM8UHJvcHM+ID0gKHsgY3VzdG9tTWV0YURhdGEsIGRhdGFzb3VyY2UgfSkgPT4ge1xuICBjb25zdCB7IHBlclNlcmllc0FsaWduZXIsIGFsaWdubWVudFBlcmlvZCB9ID0gY3VzdG9tTWV0YURhdGE7XG4gIGNvbnN0IGZvcm1hdEFsaWdubWVudFRleHQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWFsaWdubWVudFBlcmlvZCB8fCAhcGVyU2VyaWVzQWxpZ25lcikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGFsaWdubWVudCA9IEFMSUdOTUVOVFMuZmluZCgoYXApID0+IGFwLnZhbHVlID09PSBkYXRhc291cmNlLnRlbXBsYXRlU3J2LnJlcGxhY2UocGVyU2VyaWVzQWxpZ25lcikpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBwYXJzZUludChhbGlnbm1lbnRQZXJpb2QgPz8gJycucmVwbGFjZSgvW14wLTldL2csICcnKSwgMTApO1xuICAgIGNvbnN0IGhtcyA9IHJhbmdlVXRpbC5zZWNvbmRzVG9IbXMoc2Vjb25kcyk7XG4gICAgcmV0dXJuIGAke2htc30gaW50ZXJ2YWwgKCR7YWxpZ25tZW50Py50ZXh0ID8/ICcnfSlgO1xuICB9LCBbZGF0YXNvdXJjZSwgcGVyU2VyaWVzQWxpZ25lciwgYWxpZ25tZW50UGVyaW9kXSk7XG5cbiAgcmV0dXJuIDxsYWJlbD57Zm9ybWF0QWxpZ25tZW50VGV4dH08L2xhYmVsPjtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUHJvcHMsIHRvT3B0aW9uIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBJTlBVVF9XSURUSCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7XG4gIEVkaXRvck1vZGUsXG4gIE1ldHJpY0tpbmQsXG4gIEFubm90YXRpb25NZXRyaWNRdWVyeSxcbiAgQ2xvdWRNb25pdG9yaW5nT3B0aW9ucyxcbiAgQ2xvdWRNb25pdG9yaW5nUXVlcnksXG4gIEFsaWdubWVudFR5cGVzLFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IE1ldHJpY1F1ZXJ5RWRpdG9yIGFzIEV4cGVyaW1lbnRhbE1ldHJpY1F1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9FeHBlcmltZW50YWwvTWV0cmljUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgTWV0cmljUXVlcnlFZGl0b3IgfSBmcm9tICcuL01ldHJpY1F1ZXJ5RWRpdG9yJztcblxuaW1wb3J0IHsgQW5ub3RhdGlvbnNIZWxwLCBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4vJztcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBRdWVyeUVkaXRvclByb3BzPENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UsIENsb3VkTW9uaXRvcmluZ1F1ZXJ5LCBDbG91ZE1vbml0b3JpbmdPcHRpb25zPjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRRdWVyeTogKGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UpID0+IEFubm90YXRpb25NZXRyaWNRdWVyeSA9IChkYXRhc291cmNlKSA9PiAoe1xuICBlZGl0b3JNb2RlOiBFZGl0b3JNb2RlLlZpc3VhbCxcbiAgcHJvamVjdE5hbWU6IGRhdGFzb3VyY2UuZ2V0RGVmYXVsdFByb2plY3QoKSxcbiAgcHJvamVjdHM6IFtdLFxuICBtZXRyaWNUeXBlOiAnJyxcbiAgZmlsdGVyczogW10sXG4gIG1ldHJpY0tpbmQ6IE1ldHJpY0tpbmQuR0FVR0UsXG4gIHZhbHVlVHlwZTogJycsXG4gIHJlZklkOiAnYW5ub3RhdGlvblF1ZXJ5JyxcbiAgdGl0bGU6ICcnLFxuICB0ZXh0OiAnJyxcbiAgbGFiZWxzOiB7fSxcbiAgdmFyaWFibGVPcHRpb25Hcm91cDoge30sXG4gIHZhcmlhYmxlT3B0aW9uczogW10sXG4gIHF1ZXJ5OiAnJyxcbiAgY3Jvc3NTZXJpZXNSZWR1Y2VyOiAnUkVEVUNFX05PTkUnLFxuICBwZXJTZXJpZXNBbGlnbmVyOiBBbGlnbm1lbnRUeXBlcy5BTElHTl9OT05FLFxuICBhbGlnbm1lbnRQZXJpb2Q6ICdncmFmYW5hLWF1dG8nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBBbm5vdGF0aW9uUXVlcnlFZGl0b3IgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGF0YXNvdXJjZSwgcXVlcnksIG9uUnVuUXVlcnksIGRhdGEsIG9uQ2hhbmdlIH0gPSBwcm9wcztcbiAgY29uc3QgbWV0YSA9IGRhdGE/LnNlcmllcy5sZW5ndGggPyBkYXRhPy5zZXJpZXNbMF0ubWV0YSA6IHt9O1xuICBjb25zdCBjdXN0b21NZXRhRGF0YSA9IG1ldGE/LmN1c3RvbSA/PyB7fTtcbiAgY29uc3QgbWV0cmljUXVlcnkgPSB7IC4uLmRlZmF1bHRRdWVyeShkYXRhc291cmNlKSwgLi4ucXVlcnkubWV0cmljUXVlcnkgfTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShtZXRyaWNRdWVyeS50aXRsZSB8fCAnJyk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKG1ldHJpY1F1ZXJ5LnRleHQgfHwgJycpO1xuICBjb25zdCB2YXJpYWJsZU9wdGlvbkdyb3VwID0ge1xuICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICBvcHRpb25zOiBkYXRhc291cmNlLmdldFZhcmlhYmxlcygpLm1hcCh0b09wdGlvbiksXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUXVlcnlDaGFuZ2UgPSAobWV0cmljUXVlcnk6IEFubm90YXRpb25NZXRyaWNRdWVyeSkgPT4gb25DaGFuZ2UoeyAuLi5xdWVyeSwgbWV0cmljUXVlcnkgfSk7XG4gIGNvbnN0IGhhbmRsZVRpdGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVUZXh0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgdXNlRGVib3VuY2UoXG4gICAgKCkgPT4ge1xuICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgbWV0cmljUXVlcnk6IHsgLi4ubWV0cmljUXVlcnksIHRpdGxlIH0gfSk7XG4gICAgfSxcbiAgICAxMDAwLFxuICAgIFt0aXRsZSwgb25DaGFuZ2VdXG4gICk7XG4gIHVzZURlYm91bmNlKFxuICAgICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIG1ldHJpY1F1ZXJ5OiB7IC4uLm1ldHJpY1F1ZXJ5LCB0ZXh0IH0gfSk7XG4gICAgfSxcbiAgICAxMDAwLFxuICAgIFt0ZXh0LCBvbkNoYW5nZV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y29uZmlnLmZlYXR1cmVUb2dnbGVzLmNsb3VkTW9uaXRvcmluZ0V4cGVyaW1lbnRhbFVJID8gKFxuICAgICAgICA8RXhwZXJpbWVudGFsTWV0cmljUXVlcnlFZGl0b3JcbiAgICAgICAgICByZWZJZD17cXVlcnkucmVmSWR9XG4gICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cD17dmFyaWFibGVPcHRpb25Hcm91cH1cbiAgICAgICAgICBjdXN0b21NZXRhRGF0YT17Y3VzdG9tTWV0YURhdGF9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVF1ZXJ5Q2hhbmdlfVxuICAgICAgICAgIG9uUnVuUXVlcnk9e29uUnVuUXVlcnl9XG4gICAgICAgICAgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX1cbiAgICAgICAgICBxdWVyeT17bWV0cmljUXVlcnl9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8TWV0cmljUXVlcnlFZGl0b3JcbiAgICAgICAgICByZWZJZD17cXVlcnkucmVmSWR9XG4gICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cD17dmFyaWFibGVPcHRpb25Hcm91cH1cbiAgICAgICAgICBjdXN0b21NZXRhRGF0YT17Y3VzdG9tTWV0YURhdGF9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVF1ZXJ5Q2hhbmdlfVxuICAgICAgICAgIG9uUnVuUXVlcnk9e29uUnVuUXVlcnl9XG4gICAgICAgICAgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX1cbiAgICAgICAgICBxdWVyeT17bWV0cmljUXVlcnl9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8UXVlcnlFZGl0b3JSb3cgbGFiZWw9XCJUaXRsZVwiIGh0bWxGb3I9XCJhbm5vdGF0aW9uLXF1ZXJ5LXRpdGxlXCI+XG4gICAgICAgIDxJbnB1dCBpZD1cImFubm90YXRpb24tcXVlcnktdGl0bGVcIiB2YWx1ZT17dGl0bGV9IHdpZHRoPXtJTlBVVF9XSURUSH0gb25DaGFuZ2U9e2hhbmRsZVRpdGxlQ2hhbmdlfSAvPlxuICAgICAgPC9RdWVyeUVkaXRvclJvdz5cblxuICAgICAgPFF1ZXJ5RWRpdG9yUm93IGxhYmVsPVwiVGV4dFwiIGh0bWxGb3I9XCJhbm5vdGF0aW9uLXF1ZXJ5LXRleHRcIj5cbiAgICAgICAgPElucHV0IGlkPVwiYW5ub3RhdGlvbi1xdWVyeS10ZXh0XCIgdmFsdWU9e3RleHR9IHdpZHRoPXtJTlBVVF9XSURUSH0gb25DaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2V9IC8+XG4gICAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuXG4gICAgICA8QW5ub3RhdGlvbnNIZWxwIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgQW5ub3RhdGlvbnNIZWxwOiBGQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gZ3JhZmFuYS1pbmZvLWJveCBhbGVydC1pbmZvXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDU+QW5ub3RhdGlvbiBRdWVyeSBGb3JtYXQ8L2g1PlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbiBhbm5vdGF0aW9uIGlzIGFuIGV2ZW50IHRoYXQgaXMgb3ZlcmxhaWQgb24gdG9wIG9mIGdyYXBocy4gQW5ub3RhdGlvbiByZW5kZXJpbmcgaXMgZXhwZW5zaXZlIHNvIGl0IGlzXG4gICAgICAgICAgaW1wb3J0YW50IHRvIGxpbWl0IHRoZSBudW1iZXIgb2Ygcm93cyByZXR1cm5lZC57JyAnfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBUaXRsZSBhbmQgVGV4dCBmaWVsZHMgc3VwcG9ydCB0ZW1wbGF0aW5nIGFuZCBjYW4gdXNlIGRhdGEgcmV0dXJuZWQgZnJvbSB0aGUgcXVlcnkuIEZvciBleGFtcGxlLCB0aGUgVGl0bGVcbiAgICAgICAgICBmaWVsZCBjb3VsZCBoYXZlIHRoZSBmb2xsb3dpbmcgdGV4dDpcbiAgICAgICAgPC9wPlxuICAgICAgICA8Y29kZT5cbiAgICAgICAgICB7YCR7J3t7bWV0cmljLnR5cGV9fSd9YH0gaGFzIHZhbHVlOiB7YCR7J3t7bWV0cmljLnZhbHVlfX0nfWB9XG4gICAgICAgIDwvY29kZT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRXhhbXBsZSBSZXN1bHQ6IDxjb2RlPm1vbml0b3JpbmcuZ29vZ2xlYXBpcy5jb20vdXB0aW1lX2NoZWNrL2h0dHBfc3RhdHVzIGhhcyB0aGlzIHZhbHVlOiA1MDI8L2NvZGU+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGxhYmVsPlBhdHRlcm5zOjwvbGFiZWw+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxjb2RlPntgJHsne3ttZXRyaWMudmFsdWV9fSd9YH08L2NvZGU+ID0gdmFsdWUgb2YgdGhlIG1ldHJpYy9wb2ludFxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxjb2RlPntgJHsne3ttZXRyaWMudHlwZX19J31gfTwvY29kZT4gPSBtZXRyaWMgdHlwZSBlLmcuIGNvbXB1dGUuZ29vZ2xlYXBpcy5jb20vaW5zdGFuY2UvY3B1L3VzYWdlX3RpbWVcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8Y29kZT57YCR7J3t7bWV0cmljLm5hbWV9fSd9YH08L2NvZGU+ID0gbmFtZSBwYXJ0IG9mIG1ldHJpYyBlLmcuIGluc3RhbmNlL2NwdS91c2FnZV90aW1lXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGNvZGU+e2Akeyd7e21ldHJpYy5zZXJ2aWNlfX0nfWB9PC9jb2RlPiA9IHNlcnZpY2UgcGFydCBvZiBtZXRyaWMgZS5nLiBjb21wdXRlXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGNvZGU+e2Akeyd7e21ldHJpYy5sYWJlbC5sYWJlbF9uYW1lfX0nfWB9PC9jb2RlPiA9IE1ldHJpYyBsYWJlbCBtZXRhZGF0YSBlLmcuIG1ldHJpYy5sYWJlbC5pbnN0YW5jZV9uYW1lXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGNvZGU+e2Akeyd7e3Jlc291cmNlLmxhYmVsLmxhYmVsX25hbWV9fSd9YH08L2NvZGU+ID0gUmVzb3VyY2UgbGFiZWwgbWV0YWRhdGEgZS5nLiByZXNvdXJjZS5sYWJlbC56b25lXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JIZWxwUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3VkTW9uaXRvcmluZ0NoZWF0U2hlZXQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFxuICBRdWVyeUVkaXRvckhlbHBQcm9wczxDbG91ZE1vbml0b3JpbmdRdWVyeT4sXG4gIHsgdXNlckV4YW1wbGVzOiBzdHJpbmdbXSB9XG4+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+Q2xvdWQgTW9uaXRvcmluZyBhbGlhcyBwYXR0ZXJuczwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBGb3JtYXQgdGhlIGxlZ2VuZCBrZXlzIGFueSB3YXkgeW91IHdhbnQgYnkgdXNpbmcgYWxpYXMgcGF0dGVybnMuIEZvcm1hdCB0aGUgbGVnZW5kIGtleXMgYW55IHdheSB5b3Ugd2FudCBieVxuICAgICAgICAgICAgdXNpbmcgYWxpYXMgcGF0dGVybnMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIEV4YW1wbGU6XG4gICAgICAgICAgPGNvZGU+e2Akeyd7e21ldHJpYy5uYW1lfX0gLSB7e21ldHJpYy5sYWJlbC5pbnN0YW5jZV9uYW1lfX0nfWB9PC9jb2RlPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFJlc3VsdDogJm5ic3A7Jm5ic3A7PGNvZGU+Y3B1L3VzYWdlX3RpbWUgLSBzZXJ2ZXIxLWV1cm9wZS13ZXN0LTE8L2NvZGU+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGxhYmVsPlBhdHRlcm5zPC9sYWJlbD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8dWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzYFxuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxjb2RlPntgJHsne3ttZXRyaWMudHlwZX19J31gfTwvY29kZT4gPSBtZXRyaWMgdHlwZSBlLmcuIGNvbXB1dGUuZ29vZ2xlYXBpcy5jb20vaW5zdGFuY2UvY3B1L3VzYWdlX3RpbWVcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxjb2RlPntgJHsne3ttZXRyaWMubmFtZX19J31gfTwvY29kZT4gPSBuYW1lIHBhcnQgb2YgbWV0cmljIGUuZy4gaW5zdGFuY2UvY3B1L3VzYWdlX3RpbWVcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxjb2RlPntgJHsne3ttZXRyaWMuc2VydmljZX19J31gfTwvY29kZT4gPSBzZXJ2aWNlIHBhcnQgb2YgbWV0cmljIGUuZy4gY29tcHV0ZVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGNvZGU+e2Akeyd7e21ldHJpYy5sYWJlbC5sYWJlbF9uYW1lfX0nfWB9PC9jb2RlPiA9IE1ldHJpYyBsYWJlbCBtZXRhZGF0YSBlLmcuIG1ldHJpYy5sYWJlbC5pbnN0YW5jZV9uYW1lXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Y29kZT57YCR7J3t7cmVzb3VyY2UubGFiZWwubGFiZWxfbmFtZX19J31gfTwvY29kZT4gPSBSZXNvdXJjZSBsYWJlbCBtZXRhZGF0YSBlLmcuIHJlc291cmNlLmxhYmVsLnpvbmVcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxjb2RlPntgJHsne3ttZXRhZGF0YS5zeXN0ZW1fbGFiZWxzLm5hbWV9fSd9YH08L2NvZGU+ID0gTWV0YSBkYXRhIHN5c3RlbSBsYWJlbHMgZS5nLlxuICAgICAgICAgICAgICBtZXRhZGF0YS5zeXN0ZW1fbGFiZWxzLm5hbWUuIEZvciB0aGlzIHRvIHdvcmssIHRoZSBuZWVkcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgZ3JvdXAgYnlcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxjb2RlPntgJHsne3ttZXRhZGF0YS51c2VyX2xhYmVscy5uYW1lfX0nfWB9PC9jb2RlPiA9IE1ldGEgZGF0YSB1c2VyIGxhYmVscyBlLmcuXG4gICAgICAgICAgICAgIG1ldGFkYXRhLnVzZXJfbGFiZWxzLm5hbWUuIEZvciB0aGlzIHRvIHdvcmssIHRoZSBuZWVkcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgZ3JvdXAgYnlcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxjb2RlPntgJHsne3tidWNrZXR9fSd9YH08L2NvZGU+ID0gYnVja2V0IGJvdW5kYXJ5IGZvciBkaXN0cmlidXRpb24gbWV0cmljcyB3aGVuIHVzaW5nIGEgaGVhdG1hcCBpblxuICAgICAgICAgICAgICBHcmFmYW5hXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Y29kZT57YCR7J3t7cHJvamVjdH19J31gfTwvY29kZT4gPSBUaGUgcHJvamVjdCBuYW1lIHRoYXQgd2FzIHNwZWNpZmllZCBpbiB0aGUgcXVlcnkgZWRpdG9yXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Y29kZT57YCR7J3t7c2VydmljZX19J31gfTwvY29kZT4gPSBUaGUgc2VydmljZSBpZCB0aGF0IHdhcyBzcGVjaWZpZWQgaW4gdGhlIFNMTyBxdWVyeSBlZGl0b3JcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxjb2RlPntgJHsne3tzbG99fSd9YH08L2NvZGU+ID0gVGhlIFNMTyBpZCB0aGF0IHdhcyBzcGVjaWZpZWQgaW4gdGhlIFNMTyBxdWVyeSBlZGl0b3JcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxjb2RlPntgJHsne3tzZWxlY3Rvcn19J31gfTwvY29kZT4gPSBUaGUgU2VsZWN0b3IgZnVuY3Rpb24gdGhhdCB3YXMgc3BlY2lmaWVkIGluIHRoZSBTTE8gcXVlcnkgZWRpdG9yXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IENvbm5lY3Rpb25Db25maWcgfSBmcm9tICdAZ3JhZmFuYS9nb29nbGUtc2RrJztcblxuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nT3B0aW9ucywgQ2xvdWRNb25pdG9yaW5nU2VjdXJlSnNvbkRhdGEgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxDbG91ZE1vbml0b3JpbmdPcHRpb25zLCBDbG91ZE1vbml0b3JpbmdTZWN1cmVKc29uRGF0YT47XG5cbmV4cG9ydCBjbGFzcyBDb25maWdFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPENvbm5lY3Rpb25Db25maWcgey4uLnRoaXMucHJvcHN9PjwvQ29ubmVjdGlvbkNvbmZpZz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBFZGl0b3JGaWVsZCB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGdldEFnZ3JlZ2F0aW9uT3B0aW9uc0J5TWV0cmljIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IE1ldHJpY0Rlc2NyaXB0b3IsIE1ldHJpY0tpbmQsIFZhbHVlVHlwZXMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICBvbkNoYW5nZTogKG1ldHJpY0Rlc2NyaXB0b3I6IHN0cmluZykgPT4gdm9pZDtcbiAgbWV0cmljRGVzY3JpcHRvcj86IE1ldHJpY0Rlc2NyaXB0b3I7XG4gIGNyb3NzU2VyaWVzUmVkdWNlcjogc3RyaW5nO1xuICBncm91cEJ5czogc3RyaW5nW107XG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG59XG5cbmV4cG9ydCBjb25zdCBBZ2dyZWdhdGlvbjogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGFnZ09wdGlvbnMgPSB1c2VBZ2dyZWdhdGlvbk9wdGlvbnNCeU1ldHJpYyhwcm9wcyk7XG4gIGNvbnN0IHNlbGVjdGVkID0gdXNlU2VsZWN0ZWRGcm9tT3B0aW9ucyhhZ2dPcHRpb25zLCBwcm9wcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8RWRpdG9yRmllbGQgbGFiZWw9XCJHcm91cCBieSBmdW5jdGlvblwiIGRhdGEtdGVzdGlkPVwiY2xvdWQtbW9uaXRvcmluZy1hZ2dyZWdhdGlvblwiPlxuICAgICAgPFNlbGVjdFxuICAgICAgICB3aWR0aD1cImF1dG9cIlxuICAgICAgICBvbkNoYW5nZT17KHsgdmFsdWUgfSkgPT4gcHJvcHMub25DaGFuZ2UodmFsdWUhKX1cbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxuICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdUZW1wbGF0ZSBWYXJpYWJsZXMnLFxuICAgICAgICAgICAgb3B0aW9uczogcHJvcHMudGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0FnZ3JlZ2F0aW9ucycsXG4gICAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IGFnZ09wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgUmVkdWNlclwiXG4gICAgICAgIGlucHV0SWQ9e2Ake3Byb3BzLnJlZklkfS1ncm91cC1ieS1mdW5jdGlvbmB9XG4gICAgICAvPlxuICAgIDwvRWRpdG9yRmllbGQ+XG4gICk7XG59O1xuXG5jb25zdCB1c2VBZ2dyZWdhdGlvbk9wdGlvbnNCeU1ldHJpYyA9ICh7IG1ldHJpY0Rlc2NyaXB0b3IgfTogUHJvcHMpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPT4ge1xuICBjb25zdCB2YWx1ZVR5cGUgPSBtZXRyaWNEZXNjcmlwdG9yPy52YWx1ZVR5cGU7XG4gIGNvbnN0IG1ldHJpY0tpbmQgPSBtZXRyaWNEZXNjcmlwdG9yPy5tZXRyaWNLaW5kO1xuXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXZhbHVlVHlwZSB8fCAhbWV0cmljS2luZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRBZ2dyZWdhdGlvbk9wdGlvbnNCeU1ldHJpYyh2YWx1ZVR5cGUgYXMgVmFsdWVUeXBlcywgbWV0cmljS2luZCBhcyBNZXRyaWNLaW5kKS5tYXAoKGEpID0+ICh7XG4gICAgICAuLi5hLFxuICAgICAgbGFiZWw6IGEudGV4dCxcbiAgICB9KSk7XG4gIH0sIFt2YWx1ZVR5cGUsIG1ldHJpY0tpbmRdKTtcbn07XG5cbmNvbnN0IHVzZVNlbGVjdGVkRnJvbU9wdGlvbnMgPSAoYWdnT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+LCBwcm9wczogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBbLi4uYWdnT3B0aW9ucywgLi4ucHJvcHMudGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdO1xuICAgIHJldHVybiBhbGxPcHRpb25zLmZpbmQoKHMpID0+IHMudmFsdWUgPT09IHByb3BzLmNyb3NzU2VyaWVzUmVkdWNlcik7XG4gIH0sIFthZ2dPcHRpb25zLCBwcm9wcy5jcm9zc1Nlcmllc1JlZHVjZXIsIHByb3BzLnRlbXBsYXRlVmFyaWFibGVPcHRpb25zXSk7XG59O1xuIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRWRpdG9yUm93LCBFZGl0b3JGaWVsZCB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAoYWxpYXM6IGFueSkgPT4gdm9pZDtcbiAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBbGlhc0J5OiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyByZWZJZCwgdmFsdWUgPSAnJywgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCBbYWxpYXMsIHNldEFsaWFzXSA9IHVzZVN0YXRlKHZhbHVlID8/ICcnKTtcblxuICBjb25zdCBwcm9wYWdhdGVPbkNoYW5nZSA9IGRlYm91bmNlKG9uQ2hhbmdlLCAxMDAwKTtcblxuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRBbGlhcyhlLnRhcmdldC52YWx1ZSk7XG4gICAgcHJvcGFnYXRlT25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEVkaXRvclJvdz5cbiAgICAgIDxFZGl0b3JGaWVsZCBsYWJlbD1cIkFsaWFzIGJ5XCI+XG4gICAgICAgIDxJbnB1dCBpZD17YCR7cmVmSWR9LWFsaWFzLWJ5YH0gd2lkdGg9e1NFTEVDVF9XSURUSH0gdmFsdWU9e2FsaWFzfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICA8L0VkaXRvckZpZWxkPlxuICAgIDwvRWRpdG9yUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBFZGl0b3JSb3csIEVkaXRvckZpZWxkLCBFZGl0b3JGaWVsZEdyb3VwLCBTdGFjayB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5cbmltcG9ydCB7IEFMSUdOTUVOVF9QRVJJT0RTLCBTRUxFQ1RfV0lEVEggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDdXN0b21NZXRhRGF0YSwgTWV0cmljUXVlcnksIFNMT1F1ZXJ5IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBBbGlnbm1lbnRGdW5jdGlvbiB9IGZyb20gJy4vQWxpZ25tZW50RnVuY3Rpb24nO1xuaW1wb3J0IHsgQWxpZ25tZW50UGVyaW9kTGFiZWwgfSBmcm9tICcuL0FsaWdubWVudFBlcmlvZExhYmVsJztcbmltcG9ydCB7IFBlcmlvZFNlbGVjdCB9IGZyb20gJy4vUGVyaW9kU2VsZWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IE1ldHJpY1F1ZXJ5IHwgU0xPUXVlcnkpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBNZXRyaWNRdWVyeTtcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgY3VzdG9tTWV0YURhdGE6IEN1c3RvbU1ldGFEYXRhO1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgQWxpZ25tZW50OiBGQzxQcm9wcz4gPSAoe1xuICByZWZJZCxcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gIG9uQ2hhbmdlLFxuICBxdWVyeSxcbiAgY3VzdG9tTWV0YURhdGEsXG4gIGRhdGFzb3VyY2UsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEVkaXRvclJvdz5cbiAgICAgIDxFZGl0b3JGaWVsZEdyb3VwPlxuICAgICAgICA8RWRpdG9yRmllbGRcbiAgICAgICAgICBsYWJlbD1cIkFsaWdubWVudCBmdW5jdGlvblwiXG4gICAgICAgICAgdG9vbHRpcD1cIlRoZSBwcm9jZXNzIG9mIGFsaWdubWVudCBjb25zaXN0cyBvZiBjb2xsZWN0aW5nIGFsbCBkYXRhIHBvaW50cyByZWNlaXZlZCBpbiBhIGZpeGVkIGxlbmd0aCBvZiB0aW1lLCBhcHBseWluZyBhIGZ1bmN0aW9uIHRvIGNvbWJpbmUgdGhvc2UgZGF0YSBwb2ludHMsIGFuZCBhc3NpZ25pbmcgYSB0aW1lc3RhbXAgdG8gdGhlIHJlc3VsdC5cIlxuICAgICAgICA+XG4gICAgICAgICAgPEFsaWdubWVudEZ1bmN0aW9uXG4gICAgICAgICAgICBpbnB1dElkPXtgJHtyZWZJZH0tYWxpZ25tZW50LWZ1bmN0aW9uYH1cbiAgICAgICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc31cbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0VkaXRvckZpZWxkPlxuICAgICAgICA8RWRpdG9yRmllbGQgbGFiZWw9XCJBbGlnbm1lbnQgcGVyaW9kXCI+XG4gICAgICAgICAgPFBlcmlvZFNlbGVjdFxuICAgICAgICAgICAgaW5wdXRJZD17YCR7cmVmSWR9LWFsaWdubWVudC1wZXJpb2RgfVxuICAgICAgICAgICAgc2VsZWN0V2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc31cbiAgICAgICAgICAgIGN1cnJlbnQ9e3F1ZXJ5LmFsaWdubWVudFBlcmlvZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsocGVyaW9kKSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBhbGlnbm1lbnRQZXJpb2Q6IHBlcmlvZCB9KX1cbiAgICAgICAgICAgIGFsaWdtZW50UGVyaW9kcz17QUxJR05NRU5UX1BFUklPRFN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9FZGl0b3JGaWVsZD5cbiAgICAgICAgPFN0YWNrIGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgIDxBbGlnbm1lbnRQZXJpb2RMYWJlbCBkYXRhc291cmNlPXtkYXRhc291cmNlfSBjdXN0b21NZXRhRGF0YT17Y3VzdG9tTWV0YURhdGF9IC8+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0VkaXRvckZpZWxkR3JvdXA+XG4gICAgPC9FZGl0b3JSb3c+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldEFsaWdubWVudFBpY2tlckRhdGEgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgTWV0cmljUXVlcnkgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBpbnB1dElkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IE1ldHJpY1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogTWV0cmljUXVlcnk7XG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG59XG5cbmV4cG9ydCBjb25zdCBBbGlnbm1lbnRGdW5jdGlvbjogRkM8UHJvcHM+ID0gKHsgaW5wdXRJZCwgcXVlcnksIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IHsgdmFsdWVUeXBlLCBtZXRyaWNLaW5kLCBwZXJTZXJpZXNBbGlnbmVyOiBwc2EsIHByZXByb2Nlc3NvciB9ID0gcXVlcnk7XG4gIGNvbnN0IHsgcGVyU2VyaWVzQWxpZ25lciwgYWxpZ25PcHRpb25zIH0gPSB1c2VNZW1vKFxuICAgICgpID0+IGdldEFsaWdubWVudFBpY2tlckRhdGEodmFsdWVUeXBlLCBtZXRyaWNLaW5kLCBwc2EsIHByZXByb2Nlc3NvciksXG4gICAgW3ZhbHVlVHlwZSwgbWV0cmljS2luZCwgcHNhLCBwcmVwcm9jZXNzb3JdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0XG4gICAgICB3aWR0aD17U0VMRUNUX1dJRFRIfVxuICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IG9uQ2hhbmdlKHsgLi4ucXVlcnksIHBlclNlcmllc0FsaWduZXI6IHZhbHVlISB9KX1cbiAgICAgIHZhbHVlPXtbLi4uYWxpZ25PcHRpb25zLCAuLi50ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10uZmluZCgocykgPT4gcy52YWx1ZSA9PT0gcGVyU2VyaWVzQWxpZ25lcil9XG4gICAgICBvcHRpb25zPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgICAgb3B0aW9uczogdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0FsaWdubWVudCBvcHRpb25zJyxcbiAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgICBvcHRpb25zOiBhbGlnbk9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICBdfVxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQWxpZ25tZW50XCJcbiAgICAgIGlucHV0SWQ9e2lucHV0SWR9XG4gICAgLz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHJhbmdlVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBBTElHTk1FTlRTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uLy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ3VzdG9tTWV0YURhdGEgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjdXN0b21NZXRhRGF0YTogQ3VzdG9tTWV0YURhdGE7XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBBbGlnbm1lbnRQZXJpb2RMYWJlbDogRkM8UHJvcHM+ID0gKHsgY3VzdG9tTWV0YURhdGEsIGRhdGFzb3VyY2UgfSkgPT4ge1xuICBjb25zdCB7IHBlclNlcmllc0FsaWduZXIsIGFsaWdubWVudFBlcmlvZCB9ID0gY3VzdG9tTWV0YURhdGE7XG4gIGNvbnN0IGZvcm1hdEFsaWdubWVudFRleHQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWFsaWdubWVudFBlcmlvZCB8fCAhcGVyU2VyaWVzQWxpZ25lcikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGFsaWdubWVudCA9IEFMSUdOTUVOVFMuZmluZCgoYXApID0+IGFwLnZhbHVlID09PSBkYXRhc291cmNlLnRlbXBsYXRlU3J2LnJlcGxhY2UocGVyU2VyaWVzQWxpZ25lcikpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBwYXJzZUludChhbGlnbm1lbnRQZXJpb2QsIDEwKTtcbiAgICBjb25zdCBobXMgPSByYW5nZVV0aWwuc2Vjb25kc1RvSG1zKHNlY29uZHMpO1xuICAgIHJldHVybiBgJHtobXN9IGludGVydmFsICgke2FsaWdubWVudD8udGV4dCA/PyAnJ30pYDtcbiAgfSwgW2RhdGFzb3VyY2UsIHBlclNlcmllc0FsaWduZXIsIGFsaWdubWVudFBlcmlvZF0pO1xuXG4gIHJldHVybiA8bGFiZWw+e2Zvcm1hdEFsaWdubWVudFRleHR9PC9sYWJlbD47XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEVkaXRvckZpZWxkLCBFZGl0b3JSb3cgfSBmcm9tICdAZ3JhZmFuYS9leHBlcmltZW50YWwnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBTd2l0Y2ggfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEdSQVBIX1BFUklPRFMsIFNFTEVDVF9XSURUSCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQZXJpb2RTZWxlY3QgfSBmcm9tICcuLi9pbmRleCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICBvbkNoYW5nZTogKHBlcmlvZDogc3RyaW5nKSA9PiB2b2lkO1xuICB2YXJpYWJsZU9wdGlvbkdyb3VwOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPjtcbiAgZ3JhcGhQZXJpb2Q/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBHcmFwaFBlcmlvZDogRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHsgcmVmSWQsIG9uQ2hhbmdlLCBncmFwaFBlcmlvZCwgdmFyaWFibGVPcHRpb25Hcm91cCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEVkaXRvclJvdz5cbiAgICAgIDxFZGl0b3JGaWVsZFxuICAgICAgICBsYWJlbD1cIkdyYXBoIHBlcmlvZFwiXG4gICAgICAgIGh0bWxGb3I9e2Ake3JlZklkfS1ncmFwaC1wZXJpb2RgfVxuICAgICAgICB0b29sdGlwPXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgU2V0IDxjb2RlPmdyYXBoX3BlcmlvZDwvY29kZT4gd2hpY2ggZm9yY2VzIGEgcHJlZmVycmVkIHBlcmlvZCBiZXR3ZWVuIHBvaW50cy4gQXV0b21hdGljYWxseSBzZXQgdG8gdGhlXG4gICAgICAgICAgICBjdXJyZW50IGludGVydmFsIGlmIGxlZnQgYmxhbmsuXG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICBkYXRhLXRlc3RpZD17YCR7cmVmSWR9LXN3aXRjaC1ncmFwaC1wZXJpb2RgfVxuICAgICAgICAgICAgdmFsdWU9e2dyYXBoUGVyaW9kICE9PSAnZGlzYWJsZWQnfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA/ICcnIDogJ2Rpc2FibGVkJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGVyaW9kU2VsZWN0XG4gICAgICAgICAgICBpbnB1dElkPXtgJHtyZWZJZH0tZ3JhcGgtcGVyaW9kYH1cbiAgICAgICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICAgICAgICBjdXJyZW50PXtncmFwaFBlcmlvZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIHNlbGVjdFdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgICAgICBkaXNhYmxlZD17Z3JhcGhQZXJpb2QgPT09ICdkaXNhYmxlZCd9XG4gICAgICAgICAgICBhbGlnbWVudFBlcmlvZHM9e0dSQVBIX1BFUklPRFN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICA8L0VkaXRvckZpZWxkPlxuICAgIDwvRWRpdG9yUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBFZGl0b3JGaWVsZCwgRWRpdG9yRmllbGRHcm91cCwgRWRpdG9yUm93IH0gZnJvbSAnQGdyYWZhbmEvZXhwZXJpbWVudGFsJztcbmltcG9ydCB7IE11bHRpU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBTWVNURU1fTEFCRUxTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGxhYmVsc1RvR3JvdXBlZE9wdGlvbnMgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgTWV0cmljRGVzY3JpcHRvciwgTWV0cmljUXVlcnkgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0aW9uIH0gZnJvbSAnLi9BZ2dyZWdhdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICB2YXJpYWJsZU9wdGlvbkdyb3VwOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPjtcbiAgbGFiZWxzOiBzdHJpbmdbXTtcbiAgbWV0cmljRGVzY3JpcHRvcj86IE1ldHJpY0Rlc2NyaXB0b3I7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IE1ldHJpY1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogTWV0cmljUXVlcnk7XG59XG5cbmV4cG9ydCBjb25zdCBHcm91cEJ5OiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe1xuICByZWZJZCxcbiAgbGFiZWxzOiBncm91cEJ5cyA9IFtdLFxuICBxdWVyeSxcbiAgb25DaGFuZ2UsXG4gIHZhcmlhYmxlT3B0aW9uR3JvdXAsXG4gIG1ldHJpY0Rlc2NyaXB0b3IsXG59KSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IFt2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi5sYWJlbHNUb0dyb3VwZWRPcHRpb25zKFsuLi5ncm91cEJ5cywgLi4uU1lTVEVNX0xBQkVMU10pXSxcbiAgICBbZ3JvdXBCeXMsIHZhcmlhYmxlT3B0aW9uR3JvdXBdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8RWRpdG9yUm93PlxuICAgICAgPEVkaXRvckZpZWxkR3JvdXA+XG4gICAgICAgIDxFZGl0b3JGaWVsZFxuICAgICAgICAgIGxhYmVsPVwiR3JvdXAgYnlcIlxuICAgICAgICAgIHRvb2x0aXA9XCJZb3UgY2FuIHJlZHVjZSB0aGUgYW1vdW50IG9mIGRhdGEgcmV0dXJuZWQgZm9yIGEgbWV0cmljIGJ5IGNvbWJpbmluZyBkaWZmZXJlbnQgdGltZSBzZXJpZXMuIFRvIGNvbWJpbmUgbXVsdGlwbGUgdGltZSBzZXJpZXMsIHlvdSBjYW4gc3BlY2lmeSBhIGdyb3VwaW5nIGFuZCBhIGZ1bmN0aW9uLiBHcm91cGluZyBpcyBkb25lIG9uIHRoZSBiYXNpcyBvZiBsYWJlbHMuIFRoZSBncm91cGluZyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNvbWJpbmUgdGhlIHRpbWUgc2VyaWVzIGluIHRoZSBncm91cCBpbnRvIGEgc2luZ2xlIHRpbWUgc2VyaWVzLlwiXG4gICAgICAgID5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgIGlucHV0SWQ9e2Ake3JlZklkfS1ncm91cC1ieWB9XG4gICAgICAgICAgICB3aWR0aD1cImF1dG9cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgbGFiZWxcIlxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5ncm91cEJ5cyA/PyBbXX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsob3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBncm91cEJ5czogb3B0aW9ucy5tYXAoKG8pID0+IG8udmFsdWUhKSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9FZGl0b3JGaWVsZD5cbiAgICAgICAgPEFnZ3JlZ2F0aW9uXG4gICAgICAgICAgbWV0cmljRGVzY3JpcHRvcj17bWV0cmljRGVzY3JpcHRvcn1cbiAgICAgICAgICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucz17dmFyaWFibGVPcHRpb25Hcm91cC5vcHRpb25zfVxuICAgICAgICAgIGNyb3NzU2VyaWVzUmVkdWNlcj17cXVlcnkuY3Jvc3NTZXJpZXNSZWR1Y2VyfVxuICAgICAgICAgIGdyb3VwQnlzPXtxdWVyeS5ncm91cEJ5cyA/PyBbXX1cbiAgICAgICAgICBvbkNoYW5nZT17KGNyb3NzU2VyaWVzUmVkdWNlcikgPT4gb25DaGFuZ2UoeyAuLi5xdWVyeSwgY3Jvc3NTZXJpZXNSZWR1Y2VyIH0pfVxuICAgICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvRWRpdG9yRmllbGRHcm91cD5cbiAgICA8L0VkaXRvclJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRWRpdG9yUm93cyB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5cbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uLy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgZ2V0QWxpZ25tZW50UGlja2VyRGF0YSB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQge1xuICBBbGlnbm1lbnRUeXBlcyxcbiAgQ3VzdG9tTWV0YURhdGEsXG4gIEVkaXRvck1vZGUsXG4gIE1ldHJpY0Rlc2NyaXB0b3IsXG4gIE1ldHJpY0tpbmQsXG4gIE1ldHJpY1F1ZXJ5LFxuICBQcmVwcm9jZXNzb3JUeXBlLFxuICBTTE9RdWVyeSxcbiAgVmFsdWVUeXBlcyxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL2luZGV4JztcblxuaW1wb3J0IHsgTVFMUXVlcnlFZGl0b3IgfSBmcm9tICcuLy4uL01RTFF1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IEFsaWFzQnkgfSBmcm9tICcuL0FsaWFzQnknO1xuaW1wb3J0IHsgR3JhcGhQZXJpb2QgfSBmcm9tICcuL0dyYXBoUGVyaW9kJztcbmltcG9ydCB7IFZpc3VhbE1ldHJpY1F1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9WaXN1YWxNZXRyaWNRdWVyeUVkaXRvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICBjdXN0b21NZXRhRGF0YTogQ3VzdG9tTWV0YURhdGE7XG4gIHZhcmlhYmxlT3B0aW9uR3JvdXA6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+O1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBNZXRyaWNRdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyeTogKCkgPT4gdm9pZDtcbiAgcXVlcnk6IE1ldHJpY1F1ZXJ5O1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBsYWJlbHM6IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXRlOiBTdGF0ZSA9IHtcbiAgbGFiZWxzOiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UXVlcnk6IChkYXRhU291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlKSA9PiBNZXRyaWNRdWVyeSA9IChkYXRhU291cmNlKSA9PiAoe1xuICBlZGl0b3JNb2RlOiBFZGl0b3JNb2RlLlZpc3VhbCxcbiAgcHJvamVjdE5hbWU6IGRhdGFTb3VyY2UuZ2V0RGVmYXVsdFByb2plY3QoKSxcbiAgbWV0cmljVHlwZTogJycsXG4gIG1ldHJpY0tpbmQ6IE1ldHJpY0tpbmQuR0FVR0UsXG4gIHZhbHVlVHlwZTogJycsXG4gIGNyb3NzU2VyaWVzUmVkdWNlcjogJ1JFRFVDRV9NRUFOJyxcbiAgYWxpZ25tZW50UGVyaW9kOiAnY2xvdWQtbW9uaXRvcmluZy1hdXRvJyxcbiAgcGVyU2VyaWVzQWxpZ25lcjogQWxpZ25tZW50VHlwZXMuQUxJR05fTUVBTixcbiAgZ3JvdXBCeXM6IFtdLFxuICBmaWx0ZXJzOiBbXSxcbiAgYWxpYXNCeTogJycsXG4gIHF1ZXJ5OiAnJyxcbiAgcHJlcHJvY2Vzc29yOiBQcmVwcm9jZXNzb3JUeXBlLk5vbmUsXG59KTtcblxuZnVuY3Rpb24gRWRpdG9yKHtcbiAgcmVmSWQsXG4gIHF1ZXJ5LFxuICBkYXRhc291cmNlLFxuICBvbkNoYW5nZTogb25RdWVyeUNoYW5nZSxcbiAgb25SdW5RdWVyeSxcbiAgY3VzdG9tTWV0YURhdGEsXG4gIHZhcmlhYmxlT3B0aW9uR3JvdXAsXG59OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxQcm9wcz4pIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxTdGF0ZT4oZGVmYXVsdFN0YXRlKTtcbiAgY29uc3QgeyBwcm9qZWN0TmFtZSwgbWV0cmljVHlwZSwgZ3JvdXBCeXMsIGVkaXRvck1vZGUsIGNyb3NzU2VyaWVzUmVkdWNlciB9ID0gcXVlcnk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvamVjdE5hbWUgJiYgbWV0cmljVHlwZSkge1xuICAgICAgZGF0YXNvdXJjZVxuICAgICAgICAuZ2V0TGFiZWxzKG1ldHJpY1R5cGUsIHJlZklkLCBwcm9qZWN0TmFtZSlcbiAgICAgICAgLnRoZW4oKGxhYmVscykgPT4gc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBsYWJlbHMgfSkpKTtcbiAgICB9XG4gIH0sIFtkYXRhc291cmNlLCBncm91cEJ5cywgbWV0cmljVHlwZSwgcHJvamVjdE5hbWUsIHJlZklkLCBjcm9zc1Nlcmllc1JlZHVjZXJdKTtcblxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChtZXRyaWNRdWVyeTogTWV0cmljUXVlcnkgfCBTTE9RdWVyeSkgPT4ge1xuICAgICAgb25RdWVyeUNoYW5nZSh7IC4uLnF1ZXJ5LCAuLi5tZXRyaWNRdWVyeSB9KTtcbiAgICAgIG9uUnVuUXVlcnkoKTtcbiAgICB9LFxuICAgIFtvblF1ZXJ5Q2hhbmdlLCBvblJ1blF1ZXJ5LCBxdWVyeV1cbiAgKTtcblxuICBjb25zdCBvbk1ldHJpY1R5cGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoeyB2YWx1ZVR5cGUsIG1ldHJpY0tpbmQsIHR5cGUgfTogTWV0cmljRGVzY3JpcHRvcikgPT4ge1xuICAgICAgY29uc3QgcHJlcHJvY2Vzc29yID1cbiAgICAgICAgbWV0cmljS2luZCA9PT0gTWV0cmljS2luZC5HQVVHRSB8fCB2YWx1ZVR5cGUgPT09IFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXG4gICAgICAgICAgPyBQcmVwcm9jZXNzb3JUeXBlLk5vbmVcbiAgICAgICAgICA6IFByZXByb2Nlc3NvclR5cGUuUmF0ZTtcbiAgICAgIGNvbnN0IHsgcGVyU2VyaWVzQWxpZ25lciB9ID0gZ2V0QWxpZ25tZW50UGlja2VyRGF0YSh2YWx1ZVR5cGUsIG1ldHJpY0tpbmQsIHN0YXRlLnBlclNlcmllc0FsaWduZXIsIHByZXByb2Nlc3Nvcik7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBwZXJTZXJpZXNBbGlnbmVyLFxuICAgICAgICBtZXRyaWNUeXBlOiB0eXBlLFxuICAgICAgICB2YWx1ZVR5cGUsXG4gICAgICAgIG1ldHJpY0tpbmQsXG4gICAgICAgIHByZXByb2Nlc3NvcixcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW29uQ2hhbmdlLCBxdWVyeSwgc3RhdGVdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8RWRpdG9yUm93cz5cbiAgICAgIDxQcm9qZWN0XG4gICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3ZhcmlhYmxlT3B0aW9uR3JvdXAub3B0aW9uc31cbiAgICAgICAgcHJvamVjdE5hbWU9e3Byb2plY3ROYW1lfVxuICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICBvbkNoYW5nZT17KHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcHJvamVjdE5hbWUgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICB7ZWRpdG9yTW9kZSA9PT0gRWRpdG9yTW9kZS5WaXN1YWwgJiYgKFxuICAgICAgICA8VmlzdWFsTWV0cmljUXVlcnlFZGl0b3JcbiAgICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgICAgbGFiZWxzPXtzdGF0ZS5sYWJlbHN9XG4gICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cD17dmFyaWFibGVPcHRpb25Hcm91cH1cbiAgICAgICAgICBjdXN0b21NZXRhRGF0YT17Y3VzdG9tTWV0YURhdGF9XG4gICAgICAgICAgb25NZXRyaWNUeXBlQ2hhbmdlPXtvbk1ldHJpY1R5cGVDaGFuZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAge2VkaXRvck1vZGUgPT09IEVkaXRvck1vZGUuTVFMICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TVFMUXVlcnlFZGl0b3JcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsocTogc3RyaW5nKSA9PiBvblF1ZXJ5Q2hhbmdlKHsgLi4ucXVlcnksIHF1ZXJ5OiBxIH0pfVxuICAgICAgICAgICAgb25SdW5RdWVyeT17b25SdW5RdWVyeX1cbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeS5xdWVyeX1cbiAgICAgICAgICA+PC9NUUxRdWVyeUVkaXRvcj5cbiAgICAgICAgICA8R3JhcGhQZXJpb2RcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZ3JhcGhQZXJpb2Q6IHN0cmluZykgPT4gb25RdWVyeUNoYW5nZSh7IC4uLnF1ZXJ5LCBncmFwaFBlcmlvZCB9KX1cbiAgICAgICAgICAgIGdyYXBoUGVyaW9kPXtxdWVyeS5ncmFwaFBlcmlvZH1cbiAgICAgICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgICAgICAgIHZhcmlhYmxlT3B0aW9uR3JvdXA9e3ZhcmlhYmxlT3B0aW9uR3JvdXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8QWxpYXNCeVxuICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgIHZhbHVlPXtxdWVyeS5hbGlhc0J5fVxuICAgICAgICBvbkNoYW5nZT17KGFsaWFzQnkpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBhbGlhc0J5IH0pO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0VkaXRvclJvd3M+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBNZXRyaWNRdWVyeUVkaXRvciA9IFJlYWN0Lm1lbW8oRWRpdG9yKTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBzdGFydENhc2UsIHVuaXFCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRWRpdG9yUm93LCBFZGl0b3JGaWVsZCwgRWRpdG9yRmllbGRHcm91cCB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5pbXBvcnQgeyBnZXRTZWxlY3RTdHlsZXMsIFNlbGVjdCwgdXNlU3R5bGVzMiwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSBmcm9tICcuLi8uLi9kYXRhc291cmNlJztcbmltcG9ydCB7IE1ldHJpY0Rlc2NyaXB0b3IgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICBvbkNoYW5nZTogKG1ldHJpY0Rlc2NyaXB0b3I6IE1ldHJpY0Rlc2NyaXB0b3IpID0+IHZvaWQ7XG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG4gIHByb2plY3ROYW1lOiBzdHJpbmc7XG4gIG1ldHJpY1R5cGU6IHN0cmluZztcbiAgY2hpbGRyZW46IChtZXRyaWNEZXNjcmlwdG9yPzogTWV0cmljRGVzY3JpcHRvcikgPT4gSlNYLkVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNZXRyaWNzKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBbbWV0cmljRGVzY3JpcHRvcnMsIHNldE1ldHJpY0Rlc2NyaXB0b3JzXSA9IHVzZVN0YXRlPE1ldHJpY0Rlc2NyaXB0b3JbXT4oW10pO1xuICBjb25zdCBbbWV0cmljRGVzY3JpcHRvciwgc2V0TWV0cmljRGVzY3JpcHRvcl0gPSB1c2VTdGF0ZTxNZXRyaWNEZXNjcmlwdG9yPigpO1xuICBjb25zdCBbbWV0cmljcywgc2V0TWV0cmljc10gPSB1c2VTdGF0ZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+KFtdKTtcbiAgY29uc3QgW3NlcnZpY2VzLCBzZXRTZXJ2aWNlc10gPSB1c2VTdGF0ZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+KFtdKTtcbiAgY29uc3QgW3NlcnZpY2UsIHNldFNlcnZpY2VdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZTIoKTtcbiAgY29uc3Qgc2VsZWN0U3R5bGVzID0gZ2V0U2VsZWN0U3R5bGVzKHRoZW1lKTtcblxuICBjb25zdCBjdXN0b21TdHlsZSA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCB7IG1ldHJpY1R5cGUsIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLCBwcm9qZWN0TmFtZSwgZGF0YXNvdXJjZSwgb25DaGFuZ2UsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY29uc3QgeyB0ZW1wbGF0ZVNydiB9ID0gZGF0YXNvdXJjZTtcblxuICBjb25zdCBnZXRTZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IgPSB1c2VDYWxsYmFjayhcbiAgICAobWV0cmljRGVzY3JpcHRvcnM6IE1ldHJpY0Rlc2NyaXB0b3JbXSwgbWV0cmljVHlwZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gbWV0cmljRGVzY3JpcHRvcnMuZmluZCgobWQpID0+IG1kLnR5cGUgPT09IHRlbXBsYXRlU3J2LnJlcGxhY2UobWV0cmljVHlwZSkpITtcbiAgICB9LFxuICAgIFt0ZW1wbGF0ZVNydl1cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldE1ldHJpY3NMaXN0ID0gKG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW10pID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTWV0cmljRGVzY3JpcHRvciA9IGdldFNlbGVjdGVkTWV0cmljRGVzY3JpcHRvcihtZXRyaWNEZXNjcmlwdG9ycywgbWV0cmljVHlwZSk7XG4gICAgICBpZiAoIXNlbGVjdGVkTWV0cmljRGVzY3JpcHRvcikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1ldHJpY3NCeVNlcnZpY2UgPSBtZXRyaWNEZXNjcmlwdG9yc1xuICAgICAgICAuZmlsdGVyKChtKSA9PiBtLnNlcnZpY2UgPT09IHNlbGVjdGVkTWV0cmljRGVzY3JpcHRvci5zZXJ2aWNlKVxuICAgICAgICAubWFwKChtKSA9PiAoe1xuICAgICAgICAgIHNlcnZpY2U6IG0uc2VydmljZSxcbiAgICAgICAgICB2YWx1ZTogbS50eXBlLFxuICAgICAgICAgIGxhYmVsOiBtLmRpc3BsYXlOYW1lLFxuICAgICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gb3B0aW9uQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3VzdG9tU3R5bGV9PnttLnR5cGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NlbGVjdFN0eWxlcy5vcHRpb25EZXNjcmlwdGlvbn0+e20uZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgICByZXR1cm4gbWV0cmljc0J5U2VydmljZTtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9hZE1ldHJpY0Rlc2NyaXB0b3JzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IG1ldHJpY0Rlc2NyaXB0b3JzID0gYXdhaXQgZGF0YXNvdXJjZS5nZXRNZXRyaWNUeXBlcyhwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNvbnN0IHNlcnZpY2VzID0gZ2V0U2VydmljZXNMaXN0KG1ldHJpY0Rlc2NyaXB0b3JzKTtcbiAgICAgICAgY29uc3QgbWV0cmljcyA9IGdldE1ldHJpY3NMaXN0KG1ldHJpY0Rlc2NyaXB0b3JzKTtcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IG1ldHJpY3MubGVuZ3RoID4gMCA/IG1ldHJpY3NbMF0uc2VydmljZSA6ICcnO1xuICAgICAgICBjb25zdCBtZXRyaWNEZXNjcmlwdG9yID0gZ2V0U2VsZWN0ZWRNZXRyaWNEZXNjcmlwdG9yKG1ldHJpY0Rlc2NyaXB0b3JzLCBtZXRyaWNUeXBlKTtcbiAgICAgICAgc2V0TWV0cmljRGVzY3JpcHRvcnMobWV0cmljRGVzY3JpcHRvcnMpO1xuICAgICAgICBzZXRTZXJ2aWNlcyhzZXJ2aWNlcyk7XG4gICAgICAgIHNldE1ldHJpY3MobWV0cmljcyk7XG4gICAgICAgIHNldFNlcnZpY2Uoc2VydmljZSk7XG4gICAgICAgIHNldE1ldHJpY0Rlc2NyaXB0b3IobWV0cmljRGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBsb2FkTWV0cmljRGVzY3JpcHRvcnMoKTtcbiAgfSwgW2RhdGFzb3VyY2UsIGdldFNlbGVjdGVkTWV0cmljRGVzY3JpcHRvciwgbWV0cmljVHlwZSwgcHJvamVjdE5hbWUsIGN1c3RvbVN0eWxlLCBzZWxlY3RTdHlsZXMub3B0aW9uRGVzY3JpcHRpb25dKTtcblxuICBjb25zdCBvblNlcnZpY2VDaGFuZ2UgPSAoeyB2YWx1ZTogc2VydmljZSB9OiBhbnkpID0+IHtcbiAgICBjb25zdCBtZXRyaWNzID0gbWV0cmljRGVzY3JpcHRvcnNcbiAgICAgIC5maWx0ZXIoKG06IE1ldHJpY0Rlc2NyaXB0b3IpID0+IG0uc2VydmljZSA9PT0gdGVtcGxhdGVTcnYucmVwbGFjZShzZXJ2aWNlKSlcbiAgICAgIC5tYXAoKG06IE1ldHJpY0Rlc2NyaXB0b3IpID0+ICh7XG4gICAgICAgIHNlcnZpY2U6IG0uc2VydmljZSxcbiAgICAgICAgdmFsdWU6IG0udHlwZSxcbiAgICAgICAgbGFiZWw6IG0uZGlzcGxheU5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBtLmRlc2NyaXB0aW9uLFxuICAgICAgfSkpO1xuXG4gICAgaWYgKG1ldHJpY3MubGVuZ3RoID4gMCAmJiAhbWV0cmljcy5zb21lKChtKSA9PiBtLnZhbHVlID09PSB0ZW1wbGF0ZVNydi5yZXBsYWNlKG1ldHJpY1R5cGUpKSkge1xuICAgICAgb25NZXRyaWNUeXBlQ2hhbmdlKG1ldHJpY3NbMF0pO1xuICAgICAgc2V0U2VydmljZShzZXJ2aWNlKTtcbiAgICAgIHNldE1ldHJpY3MobWV0cmljcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlcnZpY2Uoc2VydmljZSk7XG4gICAgICBzZXRNZXRyaWNzKG1ldHJpY3MpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbk1ldHJpY1R5cGVDaGFuZ2UgPSAoeyB2YWx1ZSB9OiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPikgPT4ge1xuICAgIGNvbnN0IG1ldHJpY0Rlc2NyaXB0b3IgPSBnZXRTZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IobWV0cmljRGVzY3JpcHRvcnMsIHZhbHVlISk7XG4gICAgc2V0TWV0cmljRGVzY3JpcHRvcihtZXRyaWNEZXNjcmlwdG9yKTtcbiAgICBvbkNoYW5nZSh7IC4uLm1ldHJpY0Rlc2NyaXB0b3IsIHR5cGU6IHZhbHVlISB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRTZXJ2aWNlc0xpc3QgPSAobWV0cmljRGVzY3JpcHRvcnM6IE1ldHJpY0Rlc2NyaXB0b3JbXSkgPT4ge1xuICAgIGNvbnN0IHNlcnZpY2VzID0gbWV0cmljRGVzY3JpcHRvcnMubWFwKChtKSA9PiAoe1xuICAgICAgdmFsdWU6IG0uc2VydmljZSxcbiAgICAgIGxhYmVsOiBzdGFydENhc2UobS5zZXJ2aWNlU2hvcnROYW1lKSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gc2VydmljZXMubGVuZ3RoID4gMCA/IHVuaXFCeShzZXJ2aWNlcywgKHMpID0+IHMudmFsdWUpIDogW107XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEVkaXRvclJvdz5cbiAgICAgICAgPEVkaXRvckZpZWxkR3JvdXA+XG4gICAgICAgICAgPEVkaXRvckZpZWxkIGxhYmVsPVwiU2VydmljZVwiIHdpZHRoPVwiYXV0b1wiPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICB3aWR0aD1cImF1dG9cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25TZXJ2aWNlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17Wy4uLnNlcnZpY2VzLCAuLi50ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10uZmluZCgocykgPT4gcy52YWx1ZSA9PT0gc2VydmljZSl9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC4uLnNlcnZpY2VzLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTZXJ2aWNlc1wiXG4gICAgICAgICAgICAgIGlucHV0SWQ9e2Ake3Byb3BzLnJlZklkfS1zZXJ2aWNlYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9FZGl0b3JGaWVsZD5cbiAgICAgICAgICA8RWRpdG9yRmllbGQgbGFiZWw9XCJNZXRyaWMgbmFtZVwiIHdpZHRoPVwiYXV0b1wiPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICB3aWR0aD1cImF1dG9cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25NZXRyaWNUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17Wy4uLm1ldHJpY3MsIC4uLnRlbXBsYXRlVmFyaWFibGVPcHRpb25zXS5maW5kKChzKSA9PiBzLnZhbHVlID09PSBtZXRyaWNUeXBlKX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLi4ubWV0cmljcyxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgTWV0cmljXCJcbiAgICAgICAgICAgICAgaW5wdXRJZD17YCR7cHJvcHMucmVmSWR9LXNlbGVjdC1tZXRyaWNgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0VkaXRvckZpZWxkPlxuICAgICAgICA8L0VkaXRvckZpZWxkR3JvdXA+XG4gICAgICA8L0VkaXRvclJvdz5cblxuICAgICAge2NoaWxkcmVuKG1ldHJpY0Rlc2NyaXB0b3IpfVxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IGNzc2BcbiAgbGFiZWw6IGdyYWZhbmEtc2VsZWN0LW9wdGlvbi1kZXNjcmlwdGlvbjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgcGVyaW9kT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGlucHV0SWQ6IHN0cmluZztcbiAgb25DaGFuZ2U6IChwZXJpb2Q6IHN0cmluZykgPT4gdm9pZDtcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgYWxpZ21lbnRQZXJpb2RzOiBwZXJpb2RPcHRpb25bXTtcbiAgc2VsZWN0V2lkdGg/OiBudW1iZXI7XG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGN1cnJlbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQZXJpb2RTZWxlY3Qoe1xuICBpbnB1dElkLFxuICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyxcbiAgb25DaGFuZ2UsXG4gIGN1cnJlbnQsXG4gIHNlbGVjdFdpZHRoLFxuICBkaXNhYmxlZCxcbiAgYWxpZ21lbnRQZXJpb2RzLFxufTogUHJvcHMpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGFsaWdtZW50UGVyaW9kcy5tYXAoKGFwKSA9PiAoe1xuICAgICAgICAuLi5hcCxcbiAgICAgICAgbGFiZWw6IGFwLnRleHQsXG4gICAgICB9KSksXG4gICAgW2FsaWdtZW50UGVyaW9kc11cbiAgKTtcbiAgY29uc3QgdmlzaWJsZU9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IG9wdGlvbnMuZmlsdGVyKChhcCkgPT4gIWFwLmhpZGRlbiksIFtvcHRpb25zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0XG4gICAgICB3aWR0aD17c2VsZWN0V2lkdGh9XG4gICAgICBvbkNoYW5nZT17KHsgdmFsdWUgfSkgPT4gb25DaGFuZ2UodmFsdWUhKX1cbiAgICAgIHZhbHVlPXtbLi4ub3B0aW9ucywgLi4udGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdLmZpbmQoKHMpID0+IHMudmFsdWUgPT09IGN1cnJlbnQpfVxuICAgICAgb3B0aW9ucz17W1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdUZW1wbGF0ZSBWYXJpYWJsZXMnLFxuICAgICAgICAgIG9wdGlvbnM6IHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdBZ2dyZWdhdGlvbnMnLFxuICAgICAgICAgIGV4cGFuZGVkOiB0cnVlLFxuICAgICAgICAgIG9wdGlvbnM6IHZpc2libGVPcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgXX1cbiAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFBlcmlvZFwiXG4gICAgICBpbnB1dElkPXtpbnB1dElkfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgIC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRWRpdG9yRmllbGQsIEVkaXRvclJvdyB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5pbXBvcnQgeyBSYWRpb0J1dHRvbkdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBnZXRBbGlnbm1lbnRQaWNrZXJEYXRhIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IE1ldHJpY0Rlc2NyaXB0b3IsIE1ldHJpY0tpbmQsIE1ldHJpY1F1ZXJ5LCBQcmVwcm9jZXNzb3JUeXBlLCBWYWx1ZVR5cGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBOT05FX09QVElPTiA9IHsgbGFiZWw6ICdOb25lJywgdmFsdWU6IFByZXByb2Nlc3NvclR5cGUuTm9uZSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgbWV0cmljRGVzY3JpcHRvcj86IE1ldHJpY0Rlc2NyaXB0b3I7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IE1ldHJpY1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogTWV0cmljUXVlcnk7XG59XG5cbmV4cG9ydCBjb25zdCBQcmVwcm9jZXNzb3I6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IHF1ZXJ5LCBtZXRyaWNEZXNjcmlwdG9yLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VPcHRpb25zKG1ldHJpY0Rlc2NyaXB0b3IpO1xuICByZXR1cm4gKFxuICAgIDxFZGl0b3JSb3c+XG4gICAgICA8RWRpdG9yRmllbGRcbiAgICAgICAgbGFiZWw9XCJQcmUtcHJvY2Vzc2luZ1wiXG4gICAgICAgIHRvb2x0aXA9XCJQcmVwcm9jZXNzaW5nIG9wdGlvbnMgYXJlIGRpc3BsYXllZCB3aGVuIHRoZSBzZWxlY3RlZCBtZXRyaWMgaGFzIGEgbWV0cmljIGtpbmQgb2YgZGVsdGEgb3IgY3VtdWxhdGl2ZS4gVGhlIHNwZWNpZmljIG9wdGlvbnMgYXZhaWxhYmxlIGFyZSBkZXRlcm1pbmVkIGJ5IHRoZSBtZXRpYydzIHZhbHVlIHR5cGUuIElmIHlvdSBzZWxlY3QgJ1JhdGUnLCBkYXRhIHBvaW50cyBhcmUgYWxpZ25lZCBhbmQgY29udmVydGVkIHRvIGEgcmF0ZSBwZXIgdGltZSBzZXJpZXMuIElmIHlvdSBzZWxlY3QgJ0RlbHRhJywgZGF0YSBwb2ludHMgYXJlIGFsaWduZWQgYnkgdGhlaXIgZGVsdGEgKGRpZmZlcmVuY2UpIHBlciB0aW1lIHNlcmllc1wiXG4gICAgICA+XG4gICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogUHJlcHJvY2Vzc29yVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZVR5cGUsIG1ldHJpY0tpbmQsIHBlclNlcmllc0FsaWduZXI6IHBzYSB9ID0gcXVlcnk7XG4gICAgICAgICAgICBjb25zdCB7IHBlclNlcmllc0FsaWduZXIgfSA9IGdldEFsaWdubWVudFBpY2tlckRhdGEodmFsdWVUeXBlLCBtZXRyaWNLaW5kLCBwc2EsIHZhbHVlKTtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHByZXByb2Nlc3NvcjogdmFsdWUsIHBlclNlcmllc0FsaWduZXIgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWx1ZT17cXVlcnkucHJlcHJvY2Vzc29yID8/IFByZXByb2Nlc3NvclR5cGUuTm9uZX1cbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9FZGl0b3JGaWVsZD5cbiAgICA8L0VkaXRvclJvdz5cbiAgKTtcbn07XG5cbmNvbnN0IHVzZU9wdGlvbnMgPSAobWV0cmljRGVzY3JpcHRvcj86IE1ldHJpY0Rlc2NyaXB0b3IpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8UHJlcHJvY2Vzc29yVHlwZT4+ID0+IHtcbiAgY29uc3QgbWV0cmljS2luZCA9IG1ldHJpY0Rlc2NyaXB0b3I/Lm1ldHJpY0tpbmQ7XG4gIGNvbnN0IHZhbHVlVHlwZSA9IG1ldHJpY0Rlc2NyaXB0b3I/LnZhbHVlVHlwZTtcblxuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFtZXRyaWNLaW5kIHx8IG1ldHJpY0tpbmQgPT09IE1ldHJpY0tpbmQuR0FVR0UgfHwgdmFsdWVUeXBlID09PSBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTikge1xuICAgICAgcmV0dXJuIFtOT05FX09QVElPTl07XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgIE5PTkVfT1BUSU9OLFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1JhdGUnLFxuICAgICAgICB2YWx1ZTogUHJlcHJvY2Vzc29yVHlwZS5SYXRlLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0RhdGEgcG9pbnRzIGFyZSBhbGlnbmVkIGFuZCBjb252ZXJ0ZWQgdG8gYSByYXRlIHBlciB0aW1lIHNlcmllcycsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gbWV0cmljS2luZCA9PT0gTWV0cmljS2luZC5DVU1VTEFUSVZFXG4gICAgICA/IFtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGVsdGEnLFxuICAgICAgICAgICAgdmFsdWU6IFByZXByb2Nlc3NvclR5cGUuRGVsdGEsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0RhdGEgcG9pbnRzIGFyZSBhbGlnbmVkIGJ5IHRoZWlyIGRlbHRhIChkaWZmZXJlbmNlKSBwZXIgdGltZSBzZXJpZXMnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIDogb3B0aW9ucztcbiAgfSwgW21ldHJpY0tpbmQsIHZhbHVlVHlwZV0pO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEVkaXRvckhlYWRlciwgRmxleEl0ZW0sIElubGluZVNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5pbXBvcnQgeyBSYWRpb0J1dHRvbkdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBRVUVSWV9UWVBFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBFZGl0b3JNb2RlLCBDbG91ZE1vbml0b3JpbmdRdWVyeSwgUXVlcnlUeXBlLCBTTE9RdWVyeSwgTWV0cmljUXVlcnkgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlFZGl0b3JIZWFkZXJQcm9wcyB7XG4gIHF1ZXJ5OiBDbG91ZE1vbml0b3JpbmdRdWVyeTtcbiAgbWV0cmljUXVlcnk6IE1ldHJpY1F1ZXJ5O1xuICBzbG9RdWVyeTogU0xPUXVlcnk7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IENsb3VkTW9uaXRvcmluZ1F1ZXJ5KSA9PiB2b2lkO1xuICBvblJ1blF1ZXJ5OiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBFRElUT1JfTU9ERVMgPSBbXG4gIHsgbGFiZWw6ICdCdWlsZGVyJywgdmFsdWU6IEVkaXRvck1vZGUuVmlzdWFsIH0sXG4gIHsgbGFiZWw6ICdNUUwnLCB2YWx1ZTogRWRpdG9yTW9kZS5NUUwgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBRdWVyeUhlYWRlciA9IChwcm9wczogUXVlcnlFZGl0b3JIZWFkZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IHF1ZXJ5LCBtZXRyaWNRdWVyeSwgc2xvUXVlcnksIG9uQ2hhbmdlLCBvblJ1blF1ZXJ5IH0gPSBwcm9wcztcbiAgY29uc3QgeyBxdWVyeVR5cGUgfSA9IHF1ZXJ5O1xuICBjb25zdCB7IGVkaXRvck1vZGUgfSA9IG1ldHJpY1F1ZXJ5O1xuXG4gIHJldHVybiAoXG4gICAgPEVkaXRvckhlYWRlcj5cbiAgICAgIDxJbmxpbmVTZWxlY3RcbiAgICAgICAgbGFiZWw9XCJRdWVyeSB0eXBlXCJcbiAgICAgICAgb3B0aW9ucz17UVVFUllfVFlQRVN9XG4gICAgICAgIHZhbHVlPXtxdWVyeVR5cGV9XG4gICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgc2xvUXVlcnksIHF1ZXJ5VHlwZTogdmFsdWUhIH0pO1xuICAgICAgICAgIG9uUnVuUXVlcnkoKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8RmxleEl0ZW0gZ3Jvdz17MX0gLz5cbiAgICAgIHtxdWVyeVR5cGUgIT09IFF1ZXJ5VHlwZS5TTE8gJiYgKFxuICAgICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgb3B0aW9ucz17RURJVE9SX01PREVTfVxuICAgICAgICAgIHZhbHVlPXtlZGl0b3JNb2RlIHx8IEVkaXRvck1vZGUuVmlzdWFsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICAgIG1ldHJpY1F1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgLi4ubWV0cmljUXVlcnksXG4gICAgICAgICAgICAgICAgZWRpdG9yTW9kZTogdmFsdWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0VkaXRvckhlYWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDdXN0b21NZXRhRGF0YSwgTWV0cmljRGVzY3JpcHRvciwgTWV0cmljUXVlcnksIFNMT1F1ZXJ5IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgTGFiZWxGaWx0ZXIgfSBmcm9tICcuLi9pbmRleCc7XG5cbmltcG9ydCB7IEFsaWdubWVudCB9IGZyb20gJy4vQWxpZ25tZW50JztcbmltcG9ydCB7IEdyb3VwQnkgfSBmcm9tICcuL0dyb3VwQnknO1xuaW1wb3J0IHsgTWV0cmljcyB9IGZyb20gJy4vTWV0cmljcyc7XG5pbXBvcnQgeyBQcmVwcm9jZXNzb3IgfSBmcm9tICcuL1ByZXByb2Nlc3Nvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICBjdXN0b21NZXRhRGF0YTogQ3VzdG9tTWV0YURhdGE7XG4gIHZhcmlhYmxlT3B0aW9uR3JvdXA6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+O1xuICBvbk1ldHJpY1R5cGVDaGFuZ2U6IChxdWVyeTogTWV0cmljRGVzY3JpcHRvcikgPT4gdm9pZDtcbiAgb25DaGFuZ2U6IChxdWVyeTogTWV0cmljUXVlcnkgfCBTTE9RdWVyeSkgPT4gdm9pZDtcbiAgcXVlcnk6IE1ldHJpY1F1ZXJ5O1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xuICBsYWJlbHM6IGFueTtcbn1cblxuZnVuY3Rpb24gRWRpdG9yKHtcbiAgcmVmSWQsXG4gIHF1ZXJ5LFxuICBsYWJlbHMsXG4gIGRhdGFzb3VyY2UsXG4gIG9uQ2hhbmdlLFxuICBvbk1ldHJpY1R5cGVDaGFuZ2UsXG4gIGN1c3RvbU1ldGFEYXRhLFxuICB2YXJpYWJsZU9wdGlvbkdyb3VwLFxufTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+KSB7XG4gIHJldHVybiAoXG4gICAgPE1ldHJpY3NcbiAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgIHByb2plY3ROYW1lPXtxdWVyeS5wcm9qZWN0TmFtZX1cbiAgICAgIG1ldHJpY1R5cGU9e3F1ZXJ5Lm1ldHJpY1R5cGV9XG4gICAgICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucz17dmFyaWFibGVPcHRpb25Hcm91cC5vcHRpb25zfVxuICAgICAgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX1cbiAgICAgIG9uQ2hhbmdlPXtvbk1ldHJpY1R5cGVDaGFuZ2V9XG4gICAgPlxuICAgICAgeyhtZXRyaWMpID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGFiZWxGaWx0ZXJcbiAgICAgICAgICAgIGxhYmVscz17bGFiZWxzfVxuICAgICAgICAgICAgZmlsdGVycz17cXVlcnkuZmlsdGVycyF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGZpbHRlcnM6IHN0cmluZ1tdKSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBmaWx0ZXJzIH0pfVxuICAgICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cD17dmFyaWFibGVPcHRpb25Hcm91cH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQcmVwcm9jZXNzb3IgbWV0cmljRGVzY3JpcHRvcj17bWV0cmljfSBxdWVyeT17cXVlcnl9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgICA8R3JvdXBCeVxuICAgICAgICAgICAgcmVmSWQ9e3JlZklkfVxuICAgICAgICAgICAgbGFiZWxzPXtPYmplY3Qua2V5cyhsYWJlbHMpfVxuICAgICAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cD17dmFyaWFibGVPcHRpb25Hcm91cH1cbiAgICAgICAgICAgIG1ldHJpY0Rlc2NyaXB0b3I9e21ldHJpY31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBbGlnbm1lbnRcbiAgICAgICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgICAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICAgICAgICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucz17dmFyaWFibGVPcHRpb25Hcm91cC5vcHRpb25zfVxuICAgICAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICAgICAgY3VzdG9tTWV0YURhdGE9e2N1c3RvbU1ldGFEYXRhfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L01ldHJpY3M+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBWaXN1YWxNZXRyaWNRdWVyeUVkaXRvciA9IFJlYWN0Lm1lbW8oRWRpdG9yKTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBJbmxpbmVGaWVsZCwgSW5saW5lTGFiZWwsIFBvcG92ZXJDb250ZW50LCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IElOTkVSX0xBQkVMX1dJRFRILCBMQUJFTF9XSURUSCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmludGVyZmFjZSBWYXJpYWJsZVF1ZXJ5RmllbGRQcm9wcyB7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgb3B0aW9uczogU2VsZWN0YWJsZVZhbHVlW107XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGFsbG93Q3VzdG9tVmFsdWU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgVmFyaWFibGVRdWVyeUZpZWxkOiBGQzxWYXJpYWJsZVF1ZXJ5RmllbGRQcm9wcz4gPSAoe1xuICBsYWJlbCxcbiAgb25DaGFuZ2UsXG4gIHZhbHVlLFxuICBvcHRpb25zLFxuICBhbGxvd0N1c3RvbVZhbHVlID0gZmFsc2UsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPElubGluZUZpZWxkIGxhYmVsPXtsYWJlbH0gbGFiZWxXaWR0aD17MjB9PlxuICAgICAgPFNlbGVjdFxuICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e2FsbG93Q3VzdG9tVmFsdWV9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IG9uQ2hhbmdlKHZhbHVlISl9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAvPlxuICAgIDwvSW5saW5lRmllbGQ+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdG9vbHRpcD86IFBvcG92ZXJDb250ZW50O1xuICBsYWJlbD86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBub0ZpbGxFbmQ/OiBib29sZWFuO1xuICBsYWJlbFdpZHRoPzogbnVtYmVyO1xuICBmaWxsQ29tcG9uZW50PzogUmVhY3QuUmVhY3ROb2RlO1xuICBodG1sRm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlFZGl0b3JSb3c6IEZDPFByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBsYWJlbCxcbiAgdG9vbHRpcCxcbiAgZmlsbENvbXBvbmVudCxcbiAgbm9GaWxsRW5kID0gZmFsc2UsXG4gIGxhYmVsV2lkdGggPSBMQUJFTF9XSURUSCxcbiAgaHRtbEZvcixcbiAgLi4ucmVzdFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiIHsuLi5yZXN0fT5cbiAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgIDxJbmxpbmVMYWJlbCB3aWR0aD17bGFiZWxXaWR0aH0gdG9vbHRpcD17dG9vbHRpcH0gaHRtbEZvcj17aHRtbEZvcn0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgKX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxIb3Jpem9udGFsR3JvdXAgc3BhY2luZz1cInhzXCIgd2lkdGg9XCJhdXRvXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eydnZi1mb3JtLS1ncm93J30+XG4gICAgICAgIHtub0ZpbGxFbmQgfHwgPGRpdiBjbGFzc05hbWU9eydnZi1mb3JtLWxhYmVsIGdmLWZvcm0tbGFiZWwtLWdyb3cnfT57ZmlsbENvbXBvbmVudH08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBRdWVyeUVkaXRvckZpZWxkOiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgbGFiZWwsIHRvb2x0aXAsIGxhYmVsV2lkdGggPSBJTk5FUl9MQUJFTF9XSURUSCwgLi4ucmVzdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgIDxJbmxpbmVMYWJlbCB3aWR0aD17bGFiZWxXaWR0aH0gdG9vbHRpcD17dG9vbHRpcH0gey4uLnJlc3R9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9JbmxpbmVMYWJlbD5cbiAgICAgICl9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgR1JBUEhfUEVSSU9EUywgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IHsgUGVyaW9kU2VsZWN0LCBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgb25DaGFuZ2U6IChwZXJpb2Q6IHN0cmluZykgPT4gdm9pZDtcbiAgdmFyaWFibGVPcHRpb25Hcm91cDogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz47XG4gIGdyYXBoUGVyaW9kPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgR3JhcGhQZXJpb2Q6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IHJlZklkLCBvbkNoYW5nZSwgZ3JhcGhQZXJpb2QsIHZhcmlhYmxlT3B0aW9uR3JvdXAgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UXVlcnlFZGl0b3JSb3dcbiAgICAgICAgbGFiZWw9XCJHcmFwaCBwZXJpb2RcIlxuICAgICAgICBodG1sRm9yPXtgJHtyZWZJZH0tZ3JhcGgtcGVyaW9kYH1cbiAgICAgICAgdG9vbHRpcD17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIFNldCA8Y29kZT5ncmFwaF9wZXJpb2Q8L2NvZGU+IHdoaWNoIGZvcmNlcyBhIHByZWZlcnJlZCBwZXJpb2QgYmV0d2VlbiBwb2ludHMuIEF1dG9tYXRpY2FsbHkgc2V0IHRvIHRoZVxuICAgICAgICAgICAgY3VycmVudCBpbnRlcnZhbCBpZiBsZWZ0IGJsYW5rLlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICBkYXRhLXRlc3RpZD17YCR7cmVmSWR9LXN3aXRjaC1ncmFwaC1wZXJpb2RgfVxuICAgICAgICAgIHZhbHVlPXtncmFwaFBlcmlvZCAhPT0gJ2Rpc2FibGVkJ31cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUuY3VycmVudFRhcmdldC5jaGVja2VkID8gJycgOiAnZGlzYWJsZWQnKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFBlcmlvZFNlbGVjdFxuICAgICAgICAgIGlucHV0SWQ9e2Ake3JlZklkfS1ncmFwaC1wZXJpb2RgfVxuICAgICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICAgICAgY3VycmVudD17Z3JhcGhQZXJpb2R9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIHNlbGVjdFdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgICAgZGlzYWJsZWQ9e2dyYXBoUGVyaW9kID09PSAnZGlzYWJsZWQnfVxuICAgICAgICAgIGFsaWdtZW50UGVyaW9kcz17R1JBUEhfUEVSSU9EU31cbiAgICAgICAgLz5cbiAgICAgIDwvUXVlcnlFZGl0b3JSb3c+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IE11bHRpU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBJTlBVVF9XSURUSCwgU1lTVEVNX0xBQkVMUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBsYWJlbHNUb0dyb3VwZWRPcHRpb25zIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IE1ldHJpY0Rlc2NyaXB0b3IsIE1ldHJpY1F1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGlvbiwgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIHZhcmlhYmxlT3B0aW9uR3JvdXA6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+O1xuICBsYWJlbHM6IHN0cmluZ1tdO1xuICBtZXRyaWNEZXNjcmlwdG9yPzogTWV0cmljRGVzY3JpcHRvcjtcbiAgb25DaGFuZ2U6IChxdWVyeTogTWV0cmljUXVlcnkpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBNZXRyaWNRdWVyeTtcbn1cblxuZXhwb3J0IGNvbnN0IEdyb3VwQnk6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7XG4gIHJlZklkLFxuICBsYWJlbHM6IGdyb3VwQnlzID0gW10sXG4gIHF1ZXJ5LFxuICBvbkNoYW5nZSxcbiAgdmFyaWFibGVPcHRpb25Hcm91cCxcbiAgbWV0cmljRGVzY3JpcHRvcixcbn0pID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLmxhYmVsc1RvR3JvdXBlZE9wdGlvbnMoWy4uLmdyb3VwQnlzLCAuLi5TWVNURU1fTEFCRUxTXSldLFxuICAgIFtncm91cEJ5cywgdmFyaWFibGVPcHRpb25Hcm91cF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUVkaXRvclJvd1xuICAgICAgbGFiZWw9XCJHcm91cCBieVwiXG4gICAgICB0b29sdGlwPVwiWW91IGNhbiByZWR1Y2UgdGhlIGFtb3VudCBvZiBkYXRhIHJldHVybmVkIGZvciBhIG1ldHJpYyBieSBjb21iaW5pbmcgZGlmZmVyZW50IHRpbWUgc2VyaWVzLiBUbyBjb21iaW5lIG11bHRpcGxlIHRpbWUgc2VyaWVzLCB5b3UgY2FuIHNwZWNpZnkgYSBncm91cGluZyBhbmQgYSBmdW5jdGlvbi4gR3JvdXBpbmcgaXMgZG9uZSBvbiB0aGUgYmFzaXMgb2YgbGFiZWxzLiBUaGUgZ3JvdXBpbmcgZnVuY3Rpb24gaXMgdXNlZCB0byBjb21iaW5lIHRoZSB0aW1lIHNlcmllcyBpbiB0aGUgZ3JvdXAgaW50byBhIHNpbmdsZSB0aW1lIHNlcmllcy5cIlxuICAgICAgaHRtbEZvcj17YCR7cmVmSWR9LWdyb3VwLWJ5YH1cbiAgICA+XG4gICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgaW5wdXRJZD17YCR7cmVmSWR9LWdyb3VwLWJ5YH1cbiAgICAgICAgd2lkdGg9e0lOUFVUX1dJRFRIfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBsYWJlbFwiXG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIHZhbHVlPXtxdWVyeS5ncm91cEJ5cyA/PyBbXX1cbiAgICAgICAgb25DaGFuZ2U9eyhvcHRpb25zKSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgZ3JvdXBCeXM6IG9wdGlvbnMubWFwKChvKSA9PiBvLnZhbHVlISkgfSk7XG4gICAgICAgIH19XG4gICAgICA+PC9NdWx0aVNlbGVjdD5cbiAgICAgIDxBZ2dyZWdhdGlvblxuICAgICAgICBtZXRyaWNEZXNjcmlwdG9yPXttZXRyaWNEZXNjcmlwdG9yfVxuICAgICAgICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucz17dmFyaWFibGVPcHRpb25Hcm91cC5vcHRpb25zfVxuICAgICAgICBjcm9zc1Nlcmllc1JlZHVjZXI9e3F1ZXJ5LmNyb3NzU2VyaWVzUmVkdWNlcn1cbiAgICAgICAgZ3JvdXBCeXM9e3F1ZXJ5Lmdyb3VwQnlzID8/IFtdfVxuICAgICAgICBvbkNoYW5nZT17KGNyb3NzU2VyaWVzUmVkdWNlcikgPT4gb25DaGFuZ2UoeyAuLi5xdWVyeSwgY3Jvc3NTZXJpZXNSZWR1Y2VyIH0pfVxuICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICA+PC9BZ2dyZWdhdGlvbj5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufTtcbiIsImltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlLCB0b09wdGlvbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAsIFNlbGVjdCwgVmVydGljYWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEN1c3RvbUNvbnRyb2xQcm9wcyB9IGZyb20gJ0BncmFmYW5hL3VpL3NyYy9jb21wb25lbnRzL1NlbGVjdC90eXBlcyc7XG5cbmltcG9ydCB7IFNFTEVDVF9XSURUSCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBsYWJlbHNUb0dyb3VwZWRPcHRpb25zLCBzdHJpbmdBcnJheVRvRmlsdGVycyB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUm93IH0gZnJvbSAnLic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBsYWJlbHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfTtcbiAgZmlsdGVyczogc3RyaW5nW107XG4gIG9uQ2hhbmdlOiAoZmlsdGVyczogc3RyaW5nW10pID0+IHZvaWQ7XG4gIHZhcmlhYmxlT3B0aW9uR3JvdXA6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+O1xufVxuXG5jb25zdCBvcGVyYXRvcnMgPSBbJz0nLCAnIT0nLCAnPX4nLCAnIT1+J107XG5cbmNvbnN0IEZpbHRlckJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIEN1c3RvbUNvbnRyb2xQcm9wczxzdHJpbmc+PihcbiAgKHsgdmFsdWUsIGlzT3BlbiwgaW52YWxpZCwgLi4ucmVzdCB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gPEJ1dHRvbiB7Li4ucmVzdH0gcmVmPXtyZWZ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBpY29uPVwicGx1c1wiIGFyaWEtbGFiZWw9XCJBZGQgZmlsdGVyXCI+PC9CdXR0b24+O1xuICB9XG4pO1xuRmlsdGVyQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0ZpbHRlckJ1dHRvbic7XG5cbmNvbnN0IE9wZXJhdG9yQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MQnV0dG9uRWxlbWVudCwgQ3VzdG9tQ29udHJvbFByb3BzPHN0cmluZz4+KCh7IHZhbHVlLCAuLi5yZXN0IH0sIHJlZikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b24gey4uLnJlc3R9IHJlZj17cmVmfSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJxdWVyeS1zZWdtZW50LW9wZXJhdG9yXCI+e3ZhbHVlPy5sYWJlbH08L3NwYW4+XG4gICAgPC9CdXR0b24+XG4gICk7XG59KTtcbk9wZXJhdG9yQnV0dG9uLmRpc3BsYXlOYW1lID0gJ09wZXJhdG9yQnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IExhYmVsRmlsdGVyOiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe1xuICBsYWJlbHMgPSB7fSxcbiAgZmlsdGVyczogZmlsdGVyQXJyYXksXG4gIG9uQ2hhbmdlLFxuICB2YXJpYWJsZU9wdGlvbkdyb3VwLFxufSkgPT4ge1xuICBjb25zdCBmaWx0ZXJzID0gdXNlTWVtbygoKSA9PiBzdHJpbmdBcnJheVRvRmlsdGVycyhmaWx0ZXJBcnJheSksIFtmaWx0ZXJBcnJheV0pO1xuICBjb25zdCBvcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbdmFyaWFibGVPcHRpb25Hcm91cCwgLi4ubGFiZWxzVG9Hcm91cGVkT3B0aW9ucyhPYmplY3Qua2V5cyhsYWJlbHMpKV0sXG4gICAgW2xhYmVscywgdmFyaWFibGVPcHRpb25Hcm91cF1cbiAgKTtcblxuICBjb25zdCBmaWx0ZXJzVG9TdHJpbmdBcnJheSA9IHVzZUNhbGxiYWNrKChmaWx0ZXJzOiBGaWx0ZXJbXSkgPT4ge1xuICAgIGNvbnN0IHN0ckFyciA9IGZsYXR0ZW4oZmlsdGVycy5tYXAoKHsga2V5LCBvcGVyYXRvciwgdmFsdWUsIGNvbmRpdGlvbiB9KSA9PiBba2V5LCBvcGVyYXRvciwgdmFsdWUsIGNvbmRpdGlvbiFdKSk7XG4gICAgcmV0dXJuIHN0ckFyci5zbGljZSgwLCBzdHJBcnIubGVuZ3RoIC0gMSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBBZGRGaWx0ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICBvcHRpb25zPXtbdmFyaWFibGVPcHRpb25Hcm91cCwgLi4ubGFiZWxzVG9Hcm91cGVkT3B0aW9ucyhPYmplY3Qua2V5cyhsYWJlbHMpKV19XG4gICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZToga2V5ID0gJycgfSkgPT5cbiAgICAgICAgICBvbkNoYW5nZShmaWx0ZXJzVG9TdHJpbmdBcnJheShbLi4uZmlsdGVycywgeyBrZXksIG9wZXJhdG9yOiAnPScsIGNvbmRpdGlvbjogJ0FORCcsIHZhbHVlOiAnJyB9XSkpXG4gICAgICAgIH1cbiAgICAgICAgbWVudVBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgIHJlbmRlckNvbnRyb2w9e0ZpbHRlckJ1dHRvbn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUVkaXRvclJvd1xuICAgICAgbGFiZWw9XCJGaWx0ZXJcIlxuICAgICAgdG9vbHRpcD17XG4gICAgICAgICdUbyByZWR1Y2UgdGhlIGFtb3VudCBvZiBkYXRhIGNoYXJ0ZWQsIGFwcGx5IGEgZmlsdGVyLiBBIGZpbHRlciBoYXMgdGhyZWUgY29tcG9uZW50czogYSBsYWJlbCwgYSBjb21wYXJpc29uLCBhbmQgYSB2YWx1ZS4gVGhlIGNvbXBhcmlzb24gY2FuIGJlIGFuIGVxdWFsaXR5LCBpbmVxdWFsaXR5LCBvciByZWd1bGFyIGV4cHJlc3Npb24uJ1xuICAgICAgfVxuICAgICAgbm9GaWxsRW5kPXtmaWx0ZXJzLmxlbmd0aCA+IDF9XG4gICAgPlxuICAgICAgPFZlcnRpY2FsR3JvdXAgc3BhY2luZz1cInhzXCIgd2lkdGg9XCJhdXRvXCI+XG4gICAgICAgIHtmaWx0ZXJzLm1hcCgoeyBrZXksIG9wZXJhdG9yLCB2YWx1ZSwgY29uZGl0aW9uIH0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgLy8gQWRkIHRoZSBjdXJyZW50IGtleSBhbmQgdmFsdWUgYXMgb3B0aW9ucyBpZiB0aGV5IGFyZSBtYW51YWxseSBlbnRlcmVkXG4gICAgICAgICAgY29uc3Qga2V5UHJlc2VudCA9IG9wdGlvbnMuc29tZSgob3ApID0+IHtcbiAgICAgICAgICAgIGlmIChvcC5vcHRpb25zKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnNvbWUoKG9wcCkgPT4gb3BwLmxhYmVsID09PSBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9wLmxhYmVsID09PSBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCFrZXlQcmVzZW50KSB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goeyBsYWJlbDoga2V5LCB2YWx1ZToga2V5IH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZhbHVlT3B0aW9ucyA9IGxhYmVscy5oYXNPd25Qcm9wZXJ0eShrZXkpXG4gICAgICAgICAgICA/IFt2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi5sYWJlbHNba2V5XS5tYXAodG9PcHRpb24pXVxuICAgICAgICAgICAgOiBbdmFyaWFibGVPcHRpb25Hcm91cF07XG4gICAgICAgICAgY29uc3QgdmFsdWVQcmVzZW50ID0gdmFsdWVPcHRpb25zLnNvbWUoKG9wKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb3AubGFiZWwgPT09IHZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICghdmFsdWVQcmVzZW50KSB7XG4gICAgICAgICAgICB2YWx1ZU9wdGlvbnMucHVzaCh7IGxhYmVsOiB2YWx1ZSwgdmFsdWUgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAga2V5PXtpbmRleH0gc3BhY2luZz1cInhzXCIgd2lkdGg9XCJhdXRvXCI+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRmlsdGVyIGxhYmVsIGtleVwiXG4gICAgICAgICAgICAgICAgd2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgICAgICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgICAgICAgICAgZm9ybWF0Q3JlYXRlTGFiZWw9eyh2KSA9PiBgVXNlIGxhYmVsIGtleTogJHt2fWB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZToga2V5ID0gJycgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnNUb1N0cmluZ0FycmF5KFxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gaW5kZXggPyB7IGtleSwgb3BlcmF0b3IsIGNvbmRpdGlvbiwgdmFsdWU6ICcnIH0gOiBmKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgdmFsdWU9e29wZXJhdG9yfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wZXJhdG9ycy5tYXAodG9PcHRpb24pfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZTogb3BlcmF0b3IgPSAnPScgfSkgPT5cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGZpbHRlcnNUb1N0cmluZ0FycmF5KGZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gaW5kZXggPyB7IC4uLmYsIG9wZXJhdG9yIH0gOiBmKSkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtZW51UGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICByZW5kZXJDb250cm9sPXtPcGVyYXRvckJ1dHRvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJGaWx0ZXIgbGFiZWwgdmFsdWVcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgICAgICAgICAgZm9ybWF0Q3JlYXRlTGFiZWw9eyh2KSA9PiBgVXNlIGxhYmVsIHZhbHVlOiAke3Z9YH1cbiAgICAgICAgICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWRkIGZpbHRlciB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dmFsdWVPcHRpb25zfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSA9ICcnIH0pID0+XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZShmaWx0ZXJzVG9TdHJpbmdBcnJheShmaWx0ZXJzLm1hcCgoZiwgaSkgPT4gKGkgPT09IGluZGV4ID8geyAuLi5mLCB2YWx1ZSB9IDogZikpKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZW1vdmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKGZpbHRlcnNUb1N0cmluZ0FycmF5KGZpbHRlcnMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCkpKX1cbiAgICAgICAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICAgICAgICB7aW5kZXggKyAxID09PSBmaWx0ZXJzLmxlbmd0aCAmJiBPYmplY3QudmFsdWVzKGZpbHRlcnMpLmV2ZXJ5KCh7IHZhbHVlIH0pID0+IHZhbHVlKSAmJiA8QWRkRmlsdGVyIC8+fVxuICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIHshZmlsdGVycy5sZW5ndGggJiYgPEFkZEZpbHRlciAvPn1cbiAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6IChxdWVyeTogc3RyaW5nKSA9PiB2b2lkO1xuICBvblJ1blF1ZXJ5OiAoKSA9PiB2b2lkO1xuICBxdWVyeTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTVFMUXVlcnlFZGl0b3IoeyBxdWVyeSwgb25DaGFuZ2UsIG9uUnVuUXVlcnkgfTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+KSB7XG4gIGNvbnN0IG9uS2V5RG93biA9IChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiAoZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuY3RybEtleSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUZXh0QXJlYVxuICAgICAgICBuYW1lPVwiUXVlcnlcIlxuICAgICAgICBjbGFzc05hbWU9XCJzbGF0ZS1xdWVyeS1maWVsZFwiXG4gICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgcm93cz17MTB9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBDbG91ZCBNb25pdG9yaW5nIE1RTCBxdWVyeSAoUnVuIHdpdGggU2hpZnQrRW50ZXIpXCJcbiAgICAgICAgb25CbHVyPXtvblJ1blF1ZXJ5fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgZ2V0QWxpZ25tZW50UGlja2VyRGF0YSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQge1xuICBBbGlnbm1lbnRUeXBlcyxcbiAgQ3VzdG9tTWV0YURhdGEsXG4gIEVkaXRvck1vZGUsXG4gIE1ldHJpY0Rlc2NyaXB0b3IsXG4gIE1ldHJpY0tpbmQsXG4gIE1ldHJpY1F1ZXJ5LFxuICBQcmVwcm9jZXNzb3JUeXBlLFxuICBTTE9RdWVyeSxcbiAgVmFsdWVUeXBlcyxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBHcmFwaFBlcmlvZCB9IGZyb20gJy4vR3JhcGhQZXJpb2QnO1xuaW1wb3J0IHsgTVFMUXVlcnlFZGl0b3IgfSBmcm9tICcuL01RTFF1ZXJ5RWRpdG9yJztcblxuaW1wb3J0IHsgQWxpYXNCeSwgUHJvamVjdCwgVmlzdWFsTWV0cmljUXVlcnlFZGl0b3IgfSBmcm9tICcuJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIGN1c3RvbU1ldGFEYXRhOiBDdXN0b21NZXRhRGF0YTtcbiAgdmFyaWFibGVPcHRpb25Hcm91cDogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz47XG4gIG9uQ2hhbmdlOiAocXVlcnk6IE1ldHJpY1F1ZXJ5KSA9PiB2b2lkO1xuICBvblJ1blF1ZXJ5OiAoKSA9PiB2b2lkO1xuICBxdWVyeTogTWV0cmljUXVlcnk7XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGxhYmVsczogYW55O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGU6IFN0YXRlID0ge1xuICBsYWJlbHM6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRRdWVyeTogKGRhdGFTb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UpID0+IE1ldHJpY1F1ZXJ5ID0gKGRhdGFTb3VyY2UpID0+ICh7XG4gIGVkaXRvck1vZGU6IEVkaXRvck1vZGUuVmlzdWFsLFxuICBwcm9qZWN0TmFtZTogZGF0YVNvdXJjZS5nZXREZWZhdWx0UHJvamVjdCgpLFxuICBtZXRyaWNUeXBlOiAnJyxcbiAgbWV0cmljS2luZDogTWV0cmljS2luZC5HQVVHRSxcbiAgdmFsdWVUeXBlOiAnJyxcbiAgY3Jvc3NTZXJpZXNSZWR1Y2VyOiAnUkVEVUNFX01FQU4nLFxuICBhbGlnbm1lbnRQZXJpb2Q6ICdjbG91ZC1tb25pdG9yaW5nLWF1dG8nLFxuICBwZXJTZXJpZXNBbGlnbmVyOiBBbGlnbm1lbnRUeXBlcy5BTElHTl9NRUFOLFxuICBncm91cEJ5czogW10sXG4gIGZpbHRlcnM6IFtdLFxuICBhbGlhc0J5OiAnJyxcbiAgcXVlcnk6ICcnLFxuICBwcmVwcm9jZXNzb3I6IFByZXByb2Nlc3NvclR5cGUuTm9uZSxcbn0pO1xuXG5mdW5jdGlvbiBFZGl0b3Ioe1xuICByZWZJZCxcbiAgcXVlcnksXG4gIGRhdGFzb3VyY2UsXG4gIG9uQ2hhbmdlOiBvblF1ZXJ5Q2hhbmdlLFxuICBvblJ1blF1ZXJ5LFxuICBjdXN0b21NZXRhRGF0YSxcbiAgdmFyaWFibGVPcHRpb25Hcm91cCxcbn06IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPFByb3BzPikge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPFN0YXRlPihkZWZhdWx0U3RhdGUpO1xuICBjb25zdCB7IHByb2plY3ROYW1lLCBtZXRyaWNUeXBlLCBncm91cEJ5cywgZWRpdG9yTW9kZSwgY3Jvc3NTZXJpZXNSZWR1Y2VyIH0gPSBxdWVyeTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0TmFtZSAmJiBtZXRyaWNUeXBlKSB7XG4gICAgICBkYXRhc291cmNlXG4gICAgICAgIC5nZXRMYWJlbHMobWV0cmljVHlwZSwgcmVmSWQsIHByb2plY3ROYW1lKVxuICAgICAgICAudGhlbigobGFiZWxzKSA9PiBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIGxhYmVscyB9KSkpO1xuICAgIH1cbiAgfSwgW2RhdGFzb3VyY2UsIGdyb3VwQnlzLCBtZXRyaWNUeXBlLCBwcm9qZWN0TmFtZSwgcmVmSWQsIGNyb3NzU2VyaWVzUmVkdWNlcl0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKG1ldHJpY1F1ZXJ5OiBNZXRyaWNRdWVyeSB8IFNMT1F1ZXJ5KSA9PiB7XG4gICAgICBvblF1ZXJ5Q2hhbmdlKHsgLi4ucXVlcnksIC4uLm1ldHJpY1F1ZXJ5IH0pO1xuICAgICAgb25SdW5RdWVyeSgpO1xuICAgIH0sXG4gICAgW29uUXVlcnlDaGFuZ2UsIG9uUnVuUXVlcnksIHF1ZXJ5XVxuICApO1xuXG4gIGNvbnN0IG9uTWV0cmljVHlwZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICh7IHZhbHVlVHlwZSwgbWV0cmljS2luZCwgdHlwZSB9OiBNZXRyaWNEZXNjcmlwdG9yKSA9PiB7XG4gICAgICBjb25zdCBwcmVwcm9jZXNzb3IgPVxuICAgICAgICBtZXRyaWNLaW5kID09PSBNZXRyaWNLaW5kLkdBVUdFIHx8IHZhbHVlVHlwZSA9PT0gVmFsdWVUeXBlcy5ESVNUUklCVVRJT05cbiAgICAgICAgICA/IFByZXByb2Nlc3NvclR5cGUuTm9uZVxuICAgICAgICAgIDogUHJlcHJvY2Vzc29yVHlwZS5SYXRlO1xuICAgICAgY29uc3QgeyBwZXJTZXJpZXNBbGlnbmVyIH0gPSBnZXRBbGlnbm1lbnRQaWNrZXJEYXRhKHZhbHVlVHlwZSwgbWV0cmljS2luZCwgc3RhdGUucGVyU2VyaWVzQWxpZ25lciwgcHJlcHJvY2Vzc29yKTtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIHBlclNlcmllc0FsaWduZXIsXG4gICAgICAgIG1ldHJpY1R5cGU6IHR5cGUsXG4gICAgICAgIHZhbHVlVHlwZSxcbiAgICAgICAgbWV0cmljS2luZCxcbiAgICAgICAgcHJlcHJvY2Vzc29yLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBbb25DaGFuZ2UsIHF1ZXJ5LCBzdGF0ZV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UHJvamVjdFxuICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICAgIHByb2plY3ROYW1lPXtwcm9qZWN0TmFtZX1cbiAgICAgICAgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX1cbiAgICAgICAgb25DaGFuZ2U9eyhwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHByb2plY3ROYW1lIH0pO1xuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAge2VkaXRvck1vZGUgPT09IEVkaXRvck1vZGUuVmlzdWFsICYmIChcbiAgICAgICAgPFZpc3VhbE1ldHJpY1F1ZXJ5RWRpdG9yXG4gICAgICAgICAgcmVmSWQ9e3JlZklkfVxuICAgICAgICAgIGxhYmVscz17c3RhdGUubGFiZWxzfVxuICAgICAgICAgIHZhcmlhYmxlT3B0aW9uR3JvdXA9e3ZhcmlhYmxlT3B0aW9uR3JvdXB9XG4gICAgICAgICAgY3VzdG9tTWV0YURhdGE9e2N1c3RvbU1ldGFEYXRhfVxuICAgICAgICAgIG9uTWV0cmljVHlwZUNoYW5nZT17b25NZXRyaWNUeXBlQ2hhbmdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHtlZGl0b3JNb2RlID09PSBFZGl0b3JNb2RlLk1RTCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPE1RTFF1ZXJ5RWRpdG9yXG4gICAgICAgICAgICBvbkNoYW5nZT17KHE6IHN0cmluZykgPT4gb25RdWVyeUNoYW5nZSh7IC4uLnF1ZXJ5LCBxdWVyeTogcSB9KX1cbiAgICAgICAgICAgIG9uUnVuUXVlcnk9e29uUnVuUXVlcnl9XG4gICAgICAgICAgICBxdWVyeT17cXVlcnkucXVlcnl9XG4gICAgICAgICAgPjwvTVFMUXVlcnlFZGl0b3I+XG4gICAgICAgICAgPEdyYXBoUGVyaW9kXG4gICAgICAgICAgICBvbkNoYW5nZT17KGdyYXBoUGVyaW9kOiBzdHJpbmcpID0+IG9uUXVlcnlDaGFuZ2UoeyAuLi5xdWVyeSwgZ3JhcGhQZXJpb2QgfSl9XG4gICAgICAgICAgICBncmFwaFBlcmlvZD17cXVlcnkuZ3JhcGhQZXJpb2R9XG4gICAgICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgICAgICB2YXJpYWJsZU9wdGlvbkdyb3VwPXt2YXJpYWJsZU9wdGlvbkdyb3VwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAgPEFsaWFzQnlcbiAgICAgICAgcmVmSWQ9e3JlZklkfVxuICAgICAgICB2YWx1ZT17cXVlcnkuYWxpYXNCeX1cbiAgICAgICAgb25DaGFuZ2U9eyhhbGlhc0J5KSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgYWxpYXNCeSB9KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBNZXRyaWNRdWVyeUVkaXRvciA9IFJlYWN0Lm1lbW8oRWRpdG9yKTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBzdGFydENhc2UsIHVuaXFCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgVGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGdldFNlbGVjdFN0eWxlcywgU2VsZWN0LCB1c2VTdHlsZXMyLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IElOTkVSX0xBQkVMX1dJRFRILCBMQUJFTF9XSURUSCwgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgTWV0cmljRGVzY3JpcHRvciB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JGaWVsZCwgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAobWV0cmljRGVzY3JpcHRvcjogTWV0cmljRGVzY3JpcHRvcikgPT4gdm9pZDtcbiAgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2O1xuICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xuICBwcm9qZWN0TmFtZTogc3RyaW5nO1xuICBtZXRyaWNUeXBlOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiAobWV0cmljRGVzY3JpcHRvcj86IE1ldHJpY0Rlc2NyaXB0b3IpID0+IEpTWC5FbGVtZW50O1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBtZXRyaWNEZXNjcmlwdG9yczogTWV0cmljRGVzY3JpcHRvcltdO1xuICBtZXRyaWNzOiBhbnlbXTtcbiAgc2VydmljZXM6IGFueVtdO1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIG1ldHJpYzogc3RyaW5nO1xuICBtZXRyaWNEZXNjcmlwdG9yPzogTWV0cmljRGVzY3JpcHRvcjtcbiAgcHJvamVjdE5hbWU6IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNZXRyaWNzKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPFN0YXRlPih7XG4gICAgbWV0cmljRGVzY3JpcHRvcnM6IFtdLFxuICAgIG1ldHJpY3M6IFtdLFxuICAgIHNlcnZpY2VzOiBbXSxcbiAgICBzZXJ2aWNlOiAnJyxcbiAgICBtZXRyaWM6ICcnLFxuICAgIHByb2plY3ROYW1lOiBudWxsLFxuICB9KTtcblxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBjb25zdCBzZWxlY3RTdHlsZXMgPSBnZXRTZWxlY3RTdHlsZXModGhlbWUpO1xuXG4gIGNvbnN0IGN1c3RvbVN0eWxlID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IHsgc2VydmljZXMsIHNlcnZpY2UsIG1ldHJpY3MsIG1ldHJpY0Rlc2NyaXB0b3JzIH0gPSBzdGF0ZTtcbiAgY29uc3QgeyBtZXRyaWNUeXBlLCB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucywgcHJvamVjdE5hbWUsIHRlbXBsYXRlU3J2LCBkYXRhc291cmNlLCBvbkNoYW5nZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIGNvbnN0IGdldFNlbGVjdGVkTWV0cmljRGVzY3JpcHRvciA9IHVzZUNhbGxiYWNrKFxuICAgIChtZXRyaWNEZXNjcmlwdG9yczogTWV0cmljRGVzY3JpcHRvcltdLCBtZXRyaWNUeXBlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBtZXRyaWNEZXNjcmlwdG9ycy5maW5kKChtZCkgPT4gbWQudHlwZSA9PT0gdGVtcGxhdGVTcnYucmVwbGFjZShtZXRyaWNUeXBlKSkhO1xuICAgIH0sXG4gICAgW3RlbXBsYXRlU3J2XVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0TWV0cmljc0xpc3QgPSAobWV0cmljRGVzY3JpcHRvcnM6IE1ldHJpY0Rlc2NyaXB0b3JbXSkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRNZXRyaWNEZXNjcmlwdG9yID0gZ2V0U2VsZWN0ZWRNZXRyaWNEZXNjcmlwdG9yKG1ldHJpY0Rlc2NyaXB0b3JzLCBtZXRyaWNUeXBlKTtcbiAgICAgIGlmICghc2VsZWN0ZWRNZXRyaWNEZXNjcmlwdG9yKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWV0cmljc0J5U2VydmljZSA9IG1ldHJpY0Rlc2NyaXB0b3JzXG4gICAgICAgIC5maWx0ZXIoKG0pID0+IG0uc2VydmljZSA9PT0gc2VsZWN0ZWRNZXRyaWNEZXNjcmlwdG9yLnNlcnZpY2UpXG4gICAgICAgIC5tYXAoKG0pID0+ICh7XG4gICAgICAgICAgc2VydmljZTogbS5zZXJ2aWNlLFxuICAgICAgICAgIHZhbHVlOiBtLnR5cGUsXG4gICAgICAgICAgbGFiZWw6IG0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbiBvcHRpb25Db21wb25lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjdXN0b21TdHlsZX0+e20udHlwZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VsZWN0U3R5bGVzLm9wdGlvbkRlc2NyaXB0aW9ufT57bS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcbiAgICAgIHJldHVybiBtZXRyaWNzQnlTZXJ2aWNlO1xuICAgIH07XG5cbiAgICBjb25zdCBsb2FkTWV0cmljRGVzY3JpcHRvcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgbWV0cmljRGVzY3JpcHRvcnMgPSBhd2FpdCBkYXRhc291cmNlLmdldE1ldHJpY1R5cGVzKHByb2plY3ROYW1lKTtcbiAgICAgICAgY29uc3Qgc2VydmljZXMgPSBnZXRTZXJ2aWNlc0xpc3QobWV0cmljRGVzY3JpcHRvcnMpO1xuICAgICAgICBjb25zdCBtZXRyaWNzID0gZ2V0TWV0cmljc0xpc3QobWV0cmljRGVzY3JpcHRvcnMpO1xuICAgICAgICBjb25zdCBzZXJ2aWNlID0gbWV0cmljcy5sZW5ndGggPiAwID8gbWV0cmljc1swXS5zZXJ2aWNlIDogJyc7XG4gICAgICAgIGNvbnN0IG1ldHJpY0Rlc2NyaXB0b3IgPSBnZXRTZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IobWV0cmljRGVzY3JpcHRvcnMsIG1ldHJpY1R5cGUpO1xuICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICBtZXRyaWNEZXNjcmlwdG9ycyxcbiAgICAgICAgICBzZXJ2aWNlcyxcbiAgICAgICAgICBtZXRyaWNzLFxuICAgICAgICAgIHNlcnZpY2U6IHNlcnZpY2UsXG4gICAgICAgICAgbWV0cmljRGVzY3JpcHRvcixcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH07XG4gICAgbG9hZE1ldHJpY0Rlc2NyaXB0b3JzKCk7XG4gIH0sIFtkYXRhc291cmNlLCBnZXRTZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IsIG1ldHJpY1R5cGUsIHByb2plY3ROYW1lLCBjdXN0b21TdHlsZSwgc2VsZWN0U3R5bGVzLm9wdGlvbkRlc2NyaXB0aW9uXSk7XG5cbiAgY29uc3Qgb25TZXJ2aWNlQ2hhbmdlID0gKHsgdmFsdWU6IHNlcnZpY2UgfTogYW55KSA9PiB7XG4gICAgY29uc3QgbWV0cmljcyA9IG1ldHJpY0Rlc2NyaXB0b3JzXG4gICAgICAuZmlsdGVyKChtOiBNZXRyaWNEZXNjcmlwdG9yKSA9PiBtLnNlcnZpY2UgPT09IHRlbXBsYXRlU3J2LnJlcGxhY2Uoc2VydmljZSkpXG4gICAgICAubWFwKChtOiBNZXRyaWNEZXNjcmlwdG9yKSA9PiAoe1xuICAgICAgICBzZXJ2aWNlOiBtLnNlcnZpY2UsXG4gICAgICAgIHZhbHVlOiBtLnR5cGUsXG4gICAgICAgIGxhYmVsOiBtLmRpc3BsYXlOYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogbS5kZXNjcmlwdGlvbixcbiAgICAgIH0pKTtcblxuICAgIGlmIChtZXRyaWNzLmxlbmd0aCA+IDAgJiYgIW1ldHJpY3Muc29tZSgobSkgPT4gbS52YWx1ZSA9PT0gdGVtcGxhdGVTcnYucmVwbGFjZShtZXRyaWNUeXBlKSkpIHtcbiAgICAgIG9uTWV0cmljVHlwZUNoYW5nZShtZXRyaWNzWzBdLCB7IHNlcnZpY2UsIG1ldHJpY3MgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIHNlcnZpY2UsIG1ldHJpY3MgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uTWV0cmljVHlwZUNoYW5nZSA9ICh7IHZhbHVlIH06IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+LCBleHRyYTogYW55ID0ge30pID0+IHtcbiAgICBjb25zdCBtZXRyaWNEZXNjcmlwdG9yID0gZ2V0U2VsZWN0ZWRNZXRyaWNEZXNjcmlwdG9yKHN0YXRlLm1ldHJpY0Rlc2NyaXB0b3JzLCB2YWx1ZSEpO1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIG1ldHJpY0Rlc2NyaXB0b3IsIC4uLmV4dHJhIH0pO1xuICAgIG9uQ2hhbmdlKHsgLi4ubWV0cmljRGVzY3JpcHRvciwgdHlwZTogdmFsdWUhIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFNlcnZpY2VzTGlzdCA9IChtZXRyaWNEZXNjcmlwdG9yczogTWV0cmljRGVzY3JpcHRvcltdKSA9PiB7XG4gICAgY29uc3Qgc2VydmljZXMgPSBtZXRyaWNEZXNjcmlwdG9ycy5tYXAoKG0pID0+ICh7XG4gICAgICB2YWx1ZTogbS5zZXJ2aWNlLFxuICAgICAgbGFiZWw6IHN0YXJ0Q2FzZShtLnNlcnZpY2VTaG9ydE5hbWUpLFxuICAgIH0pKTtcblxuICAgIHJldHVybiBzZXJ2aWNlcy5sZW5ndGggPiAwID8gdW5pcUJ5KHNlcnZpY2VzLCAocykgPT4gcy52YWx1ZSkgOiBbXTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UXVlcnlFZGl0b3JSb3c+XG4gICAgICAgIDxRdWVyeUVkaXRvckZpZWxkIGxhYmVsV2lkdGg9e0xBQkVMX1dJRFRIfSBsYWJlbD1cIlNlcnZpY2VcIiBodG1sRm9yPXtgJHtwcm9wcy5yZWZJZH0tc2VydmljZWB9PlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25TZXJ2aWNlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e1suLi5zZXJ2aWNlcywgLi4udGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdLmZpbmQoKHMpID0+IHMudmFsdWUgPT09IHNlcnZpY2UpfVxuICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUZW1wbGF0ZSBWYXJpYWJsZXMnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAuLi5zZXJ2aWNlcyxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTZXJ2aWNlc1wiXG4gICAgICAgICAgICBpbnB1dElkPXtgJHtwcm9wcy5yZWZJZH0tc2VydmljZWB9XG4gICAgICAgICAgPjwvU2VsZWN0PlxuICAgICAgICA8L1F1ZXJ5RWRpdG9yRmllbGQ+XG4gICAgICAgIDxRdWVyeUVkaXRvckZpZWxkIGxhYmVsPVwiTWV0cmljIG5hbWVcIiBsYWJlbFdpZHRoPXtJTk5FUl9MQUJFTF9XSURUSH0gaHRtbEZvcj17YCR7cHJvcHMucmVmSWR9LXNlbGVjdC1tZXRyaWNgfT5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICB3aWR0aD17U0VMRUNUX1dJRFRIfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uTWV0cmljVHlwZUNoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXtbLi4ubWV0cmljcywgLi4udGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdLmZpbmQoKHMpID0+IHMudmFsdWUgPT09IG1ldHJpY1R5cGUpfVxuICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUZW1wbGF0ZSBWYXJpYWJsZXMnLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAuLi5tZXRyaWNzLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IE1ldHJpY1wiXG4gICAgICAgICAgICBpbnB1dElkPXtgJHtwcm9wcy5yZWZJZH0tc2VsZWN0LW1ldHJpY2B9XG4gICAgICAgICAgPjwvU2VsZWN0PlxuICAgICAgICA8L1F1ZXJ5RWRpdG9yRmllbGQ+XG4gICAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuXG4gICAgICB7Y2hpbGRyZW4oc3RhdGUubWV0cmljRGVzY3JpcHRvcil9XG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gY3NzYFxuICBsYWJlbDogZ3JhZmFuYS1zZWxlY3Qtb3B0aW9uLWRlc2NyaXB0aW9uO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBwZXJpb2RPcHRpb24gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgaW5wdXRJZDogc3RyaW5nO1xuICBvbkNoYW5nZTogKHBlcmlvZDogc3RyaW5nKSA9PiB2b2lkO1xuICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xuICBhbGlnbWVudFBlcmlvZHM6IHBlcmlvZE9wdGlvbltdO1xuICBzZWxlY3RXaWR0aD86IG51bWJlcjtcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY3VycmVudD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBlcmlvZFNlbGVjdCh7XG4gIGlucHV0SWQsXG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLFxuICBvbkNoYW5nZSxcbiAgY3VycmVudCxcbiAgc2VsZWN0V2lkdGgsXG4gIGRpc2FibGVkLFxuICBhbGlnbWVudFBlcmlvZHMsXG59OiBQcm9wcykge1xuICBjb25zdCBvcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgYWxpZ21lbnRQZXJpb2RzLm1hcCgoYXApID0+ICh7XG4gICAgICAgIC4uLmFwLFxuICAgICAgICBsYWJlbDogYXAudGV4dCxcbiAgICAgIH0pKSxcbiAgICBbYWxpZ21lbnRQZXJpb2RzXVxuICApO1xuICBjb25zdCB2aXNpYmxlT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gb3B0aW9ucy5maWx0ZXIoKGFwKSA9PiAhYXAuaGlkZGVuKSwgW29wdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWxlY3RcbiAgICAgIHdpZHRoPXtzZWxlY3RXaWR0aH1cbiAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSB9KSA9PiBvbkNoYW5nZSh2YWx1ZSEpfVxuICAgICAgdmFsdWU9e1suLi5vcHRpb25zLCAuLi50ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10uZmluZCgocykgPT4gcy52YWx1ZSA9PT0gY3VycmVudCl9XG4gICAgICBvcHRpb25zPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgICAgb3B0aW9uczogdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0FnZ3JlZ2F0aW9ucycsXG4gICAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgICAgb3B0aW9uczogdmlzaWJsZU9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICBdfVxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgUGVyaW9kXCJcbiAgICAgIGlucHV0SWQ9e2lucHV0SWR9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgPjwvU2VsZWN0PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFJhZGlvQnV0dG9uR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGdldEFsaWdubWVudFBpY2tlckRhdGEgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgTWV0cmljRGVzY3JpcHRvciwgTWV0cmljS2luZCwgTWV0cmljUXVlcnksIFByZXByb2Nlc3NvclR5cGUsIFZhbHVlVHlwZXMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUm93IH0gZnJvbSAnLic7XG5cbmNvbnN0IE5PTkVfT1BUSU9OID0geyBsYWJlbDogJ05vbmUnLCB2YWx1ZTogUHJlcHJvY2Vzc29yVHlwZS5Ob25lIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBtZXRyaWNEZXNjcmlwdG9yPzogTWV0cmljRGVzY3JpcHRvcjtcbiAgb25DaGFuZ2U6IChxdWVyeTogTWV0cmljUXVlcnkpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBNZXRyaWNRdWVyeTtcbn1cblxuZXhwb3J0IGNvbnN0IFByZXByb2Nlc3NvcjogRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHsgcXVlcnksIG1ldHJpY0Rlc2NyaXB0b3IsIG9uQ2hhbmdlIH0pID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU9wdGlvbnMobWV0cmljRGVzY3JpcHRvcik7XG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93XG4gICAgICBsYWJlbD1cIlByZS1wcm9jZXNzaW5nXCJcbiAgICAgIHRvb2x0aXA9XCJQcmVwcm9jZXNzaW5nIG9wdGlvbnMgYXJlIGRpc3BsYXllZCB3aGVuIHRoZSBzZWxlY3RlZCBtZXRyaWMgaGFzIGEgbWV0cmljIGtpbmQgb2YgZGVsdGEgb3IgY3VtdWxhdGl2ZS4gVGhlIHNwZWNpZmljIG9wdGlvbnMgYXZhaWxhYmxlIGFyZSBkZXRlcm1pbmVkIGJ5IHRoZSBtZXRpYydzIHZhbHVlIHR5cGUuIElmIHlvdSBzZWxlY3QgJ1JhdGUnLCBkYXRhIHBvaW50cyBhcmUgYWxpZ25lZCBhbmQgY29udmVydGVkIHRvIGEgcmF0ZSBwZXIgdGltZSBzZXJpZXMuIElmIHlvdSBzZWxlY3QgJ0RlbHRhJywgZGF0YSBwb2ludHMgYXJlIGFsaWduZWQgYnkgdGhlaXIgZGVsdGEgKGRpZmZlcmVuY2UpIHBlciB0aW1lIHNlcmllc1wiXG4gICAgPlxuICAgICAgPFJhZGlvQnV0dG9uR3JvdXBcbiAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogUHJlcHJvY2Vzc29yVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWVUeXBlLCBtZXRyaWNLaW5kLCBwZXJTZXJpZXNBbGlnbmVyOiBwc2EgfSA9IHF1ZXJ5O1xuICAgICAgICAgIGNvbnN0IHsgcGVyU2VyaWVzQWxpZ25lciB9ID0gZ2V0QWxpZ25tZW50UGlja2VyRGF0YSh2YWx1ZVR5cGUsIG1ldHJpY0tpbmQsIHBzYSwgdmFsdWUpO1xuICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHByZXByb2Nlc3NvcjogdmFsdWUsIHBlclNlcmllc0FsaWduZXIgfSk7XG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlPXtxdWVyeS5wcmVwcm9jZXNzb3IgPz8gUHJlcHJvY2Vzc29yVHlwZS5Ob25lfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgPjwvUmFkaW9CdXR0b25Hcm91cD5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufTtcblxuY29uc3QgdXNlT3B0aW9ucyA9IChtZXRyaWNEZXNjcmlwdG9yPzogTWV0cmljRGVzY3JpcHRvcik6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxQcmVwcm9jZXNzb3JUeXBlPj4gPT4ge1xuICBjb25zdCBtZXRyaWNLaW5kID0gbWV0cmljRGVzY3JpcHRvcj8ubWV0cmljS2luZDtcbiAgY29uc3QgdmFsdWVUeXBlID0gbWV0cmljRGVzY3JpcHRvcj8udmFsdWVUeXBlO1xuXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIW1ldHJpY0tpbmQgfHwgbWV0cmljS2luZCA9PT0gTWV0cmljS2luZC5HQVVHRSB8fCB2YWx1ZVR5cGUgPT09IFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OKSB7XG4gICAgICByZXR1cm4gW05PTkVfT1BUSU9OXTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgTk9ORV9PUFRJT04sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnUmF0ZScsXG4gICAgICAgIHZhbHVlOiBQcmVwcm9jZXNzb3JUeXBlLlJhdGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGF0YSBwb2ludHMgYXJlIGFsaWduZWQgYW5kIGNvbnZlcnRlZCB0byBhIHJhdGUgcGVyIHRpbWUgc2VyaWVzJyxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHJldHVybiBtZXRyaWNLaW5kID09PSBNZXRyaWNLaW5kLkNVTVVMQVRJVkVcbiAgICAgID8gW1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdEZWx0YScsXG4gICAgICAgICAgICB2YWx1ZTogUHJlcHJvY2Vzc29yVHlwZS5EZWx0YSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGF0YSBwb2ludHMgYXJlIGFsaWduZWQgYnkgdGhlaXIgZGVsdGEgKGRpZmZlcmVuY2UpIHBlciB0aW1lIHNlcmllcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgOiBvcHRpb25zO1xuICB9LCBbbWV0cmljS2luZCwgdmFsdWVUeXBlXSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBTRUxFQ1RfV0lEVEggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUm93IH0gZnJvbSAnLic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xuICBvbkNoYW5nZTogKHByb2plY3ROYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIHByb2plY3ROYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KHsgcmVmSWQsIHByb2plY3ROYW1lLCBkYXRhc291cmNlLCBvbkNoYW5nZSwgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMgfTogUHJvcHMpIHtcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+KFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkYXRhc291cmNlLmdldFByb2plY3RzKCkudGhlbigocHJvamVjdHMpID0+IHNldFByb2plY3RzKHByb2plY3RzKSk7XG4gIH0sIFtkYXRhc291cmNlXSk7XG5cbiAgY29uc3QgcHJvamVjdHNXaXRoVGVtcGxhdGVWYXJpYWJsZXMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHByb2plY3RzLFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgIG9wdGlvbnM6IHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLFxuICAgICAgfSxcbiAgICAgIC4uLnByb2plY3RzLFxuICAgIF0sXG4gICAgW3Byb2plY3RzLCB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUVkaXRvclJvdyBsYWJlbD1cIlByb2plY3RcIiBodG1sRm9yPXtgJHtyZWZJZH0tcHJvamVjdGB9PlxuICAgICAgPFNlbGVjdFxuICAgICAgICB3aWR0aD17U0VMRUNUX1dJRFRIfVxuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgIGZvcm1hdENyZWF0ZUxhYmVsPXsodikgPT4gYFVzZSBwcm9qZWN0OiAke3Z9YH1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IG9uQ2hhbmdlKHZhbHVlISl9XG4gICAgICAgIG9wdGlvbnM9e3Byb2plY3RzV2l0aFRlbXBsYXRlVmFyaWFibGVzfVxuICAgICAgICB2YWx1ZT17eyB2YWx1ZTogcHJvamVjdE5hbWUsIGxhYmVsOiBwcm9qZWN0TmFtZSB9fVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBQcm9qZWN0XCJcbiAgICAgICAgaW5wdXRJZD17YCR7cmVmSWR9LXByb2plY3RgfVxuICAgICAgLz5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBRdWVyeUVkaXRvclByb3BzLCB0b09wdGlvbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRWRpdG9yUm93cyB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBRVUVSWV9UWVBFUywgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nUXVlcnksIEVkaXRvck1vZGUsIE1ldHJpY1F1ZXJ5LCBRdWVyeVR5cGUsIFNMT1F1ZXJ5LCBDbG91ZE1vbml0b3JpbmdPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBNZXRyaWNRdWVyeUVkaXRvciBhcyBFeHBlcmltZW50YWxNZXRyaWNRdWVyeUVkaXRvciB9IGZyb20gJy4vRXhwZXJpbWVudGFsL01ldHJpY1F1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IFF1ZXJ5SGVhZGVyIH0gZnJvbSAnLi9FeHBlcmltZW50YWwvUXVlcnlIZWFkZXInO1xuaW1wb3J0IHsgZGVmYXVsdFF1ZXJ5IH0gZnJvbSAnLi9NZXRyaWNRdWVyeUVkaXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0UXVlcnkgYXMgZGVmYXVsdFNMT1F1ZXJ5IH0gZnJvbSAnLi9TTE8vU0xPUXVlcnlFZGl0b3InO1xuXG5pbXBvcnQgeyBNZXRyaWNRdWVyeUVkaXRvciwgUXVlcnlFZGl0b3JSb3csIFNMT1F1ZXJ5RWRpdG9yIH0gZnJvbSAnLi8nO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IFF1ZXJ5RWRpdG9yUHJvcHM8Q2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSwgQ2xvdWRNb25pdG9yaW5nUXVlcnksIENsb3VkTW9uaXRvcmluZ09wdGlvbnM+O1xuXG5leHBvcnQgY2xhc3MgUXVlcnlFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGFzeW5jIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgeyBkYXRhc291cmNlLCBxdWVyeSB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIFVuZm9ydHVuYXRlbHksIG1pZ3JhdGlvbnMgbGlrZSB0aGlzIG5lZWQgdG8gZ28gVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudC4gQXMgc29vbiBhcyB0aGVyZSdzXG4gICAgLy8gbWlncmF0aW9uIGhvb2sgZm9yIHRoaXMgbW9kdWxlLnRzLCB3ZSBjYW4gZG8gdGhlIG1pZ3JhdGlvbnMgdGhlcmUgaW5zdGVhZC5cbiAgICBpZiAoIXRoaXMucHJvcHMucXVlcnkuaGFzT3duUHJvcGVydHkoJ21ldHJpY1F1ZXJ5JykpIHtcbiAgICAgIGNvbnN0IHsgaGlkZSwgcmVmSWQsIGRhdGFzb3VyY2UsIGtleSwgcXVlcnlUeXBlLCBtYXhMaW5lcywgbWV0cmljLCAuLi5tZXRyaWNRdWVyeSB9ID0gdGhpcy5wcm9wcy5xdWVyeSBhcyBhbnk7XG4gICAgICB0aGlzLnByb3BzLnF1ZXJ5Lm1ldHJpY1F1ZXJ5ID0gbWV0cmljUXVlcnk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3BzLnF1ZXJ5Lmhhc093blByb3BlcnR5KCdxdWVyeVR5cGUnKSkge1xuICAgICAgdGhpcy5wcm9wcy5xdWVyeS5xdWVyeVR5cGUgPSBRdWVyeVR5cGUuTUVUUklDUztcbiAgICB9XG5cbiAgICBhd2FpdCBkYXRhc291cmNlLmVuc3VyZUdDRURlZmF1bHRQcm9qZWN0KCk7XG4gICAgaWYgKCFxdWVyeS5tZXRyaWNRdWVyeS5wcm9qZWN0TmFtZSkge1xuICAgICAgdGhpcy5wcm9wcy5xdWVyeS5tZXRyaWNRdWVyeS5wcm9qZWN0TmFtZSA9IGRhdGFzb3VyY2UuZ2V0RGVmYXVsdFByb2plY3QoKTtcbiAgICB9XG4gIH1cblxuICBvblF1ZXJ5Q2hhbmdlKHByb3A6IHN0cmluZywgdmFsdWU6IE1ldHJpY1F1ZXJ5IHwgU0xPUXVlcnkpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgLi4udGhpcy5wcm9wcy5xdWVyeSwgW3Byb3BdOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnByb3BzLm9uUnVuUXVlcnkoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGFzb3VyY2UsIHF1ZXJ5LCBvblJ1blF1ZXJ5LCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZXRyaWNRdWVyeSA9IHsgLi4uZGVmYXVsdFF1ZXJ5KGRhdGFzb3VyY2UpLCAuLi5xdWVyeS5tZXRyaWNRdWVyeSB9O1xuICAgIGNvbnN0IHNsb1F1ZXJ5ID0geyAuLi5kZWZhdWx0U0xPUXVlcnkoZGF0YXNvdXJjZSksIC4uLnF1ZXJ5LnNsb1F1ZXJ5IH07XG4gICAgY29uc3QgcXVlcnlUeXBlID0gcXVlcnkucXVlcnlUeXBlIHx8IFF1ZXJ5VHlwZS5NRVRSSUNTO1xuICAgIGNvbnN0IG1ldGEgPSB0aGlzLnByb3BzLmRhdGE/LnNlcmllcy5sZW5ndGggPyB0aGlzLnByb3BzLmRhdGE/LnNlcmllc1swXS5tZXRhIDoge307XG4gICAgY29uc3QgY3VzdG9tTWV0YURhdGEgPSBtZXRhPy5jdXN0b20gPz8ge307XG4gICAgY29uc3QgdmFyaWFibGVPcHRpb25Hcm91cCA9IHtcbiAgICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICAgIGV4cGFuZGVkOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IGRhdGFzb3VyY2UuZ2V0VmFyaWFibGVzKCkubWFwKHRvT3B0aW9uKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5jbG91ZE1vbml0b3JpbmdFeHBlcmltZW50YWxVSSA/IChcbiAgICAgIDxFZGl0b3JSb3dzPlxuICAgICAgICA8UXVlcnlIZWFkZXJcbiAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgbWV0cmljUXVlcnk9e21ldHJpY1F1ZXJ5fVxuICAgICAgICAgIHNsb1F1ZXJ5PXtzbG9RdWVyeX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgb25SdW5RdWVyeT17b25SdW5RdWVyeX1cbiAgICAgICAgLz5cbiAgICAgICAge3F1ZXJ5VHlwZSA9PT0gUXVlcnlUeXBlLk1FVFJJQ1MgJiYgKFxuICAgICAgICAgIDxFeHBlcmltZW50YWxNZXRyaWNRdWVyeUVkaXRvclxuICAgICAgICAgICAgcmVmSWQ9e3F1ZXJ5LnJlZklkfVxuICAgICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cD17dmFyaWFibGVPcHRpb25Hcm91cH1cbiAgICAgICAgICAgIGN1c3RvbU1ldGFEYXRhPXtjdXN0b21NZXRhRGF0YX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsobWV0cmljUXVlcnk6IE1ldHJpY1F1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyAuLi50aGlzLnByb3BzLnF1ZXJ5LCBtZXRyaWNRdWVyeSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvblJ1blF1ZXJ5PXtvblJ1blF1ZXJ5fVxuICAgICAgICAgICAgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX1cbiAgICAgICAgICAgIHF1ZXJ5PXttZXRyaWNRdWVyeX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtxdWVyeVR5cGUgPT09IFF1ZXJ5VHlwZS5TTE8gJiYgKFxuICAgICAgICAgIDxTTE9RdWVyeUVkaXRvclxuICAgICAgICAgICAgcmVmSWQ9e3F1ZXJ5LnJlZklkfVxuICAgICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cD17dmFyaWFibGVPcHRpb25Hcm91cH1cbiAgICAgICAgICAgIGN1c3RvbU1ldGFEYXRhPXtjdXN0b21NZXRhRGF0YX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsocXVlcnk6IFNMT1F1ZXJ5KSA9PiB0aGlzLm9uUXVlcnlDaGFuZ2UoJ3Nsb1F1ZXJ5JywgcXVlcnkpfVxuICAgICAgICAgICAgb25SdW5RdWVyeT17b25SdW5RdWVyeX1cbiAgICAgICAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICAgICAgICBxdWVyeT17c2xvUXVlcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvRWRpdG9yUm93cz5cbiAgICApIDogKFxuICAgICAgPEVkaXRvclJvd3M+XG4gICAgICAgIDxRdWVyeUVkaXRvclJvd1xuICAgICAgICAgIGxhYmVsPVwiUXVlcnkgdHlwZVwiXG4gICAgICAgICAgZmlsbENvbXBvbmVudD17XG4gICAgICAgICAgICBxdWVyeS5xdWVyeVR5cGUgIT09IFF1ZXJ5VHlwZS5TTE8gJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIGljb249XCJlZGl0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgdGhpcy5vblF1ZXJ5Q2hhbmdlKCdtZXRyaWNRdWVyeScsIHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubWV0cmljUXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvck1vZGU6IG1ldHJpY1F1ZXJ5LmVkaXRvck1vZGUgPT09IEVkaXRvck1vZGUuTVFMID8gRWRpdG9yTW9kZS5WaXN1YWwgOiBFZGl0b3JNb2RlLk1RTCxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21ldHJpY1F1ZXJ5LmVkaXRvck1vZGUgPT09IEVkaXRvck1vZGUuTVFMID8gJ1N3aXRjaCB0byBidWlsZGVyJyA6ICdFZGl0IE1RTCd9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sRm9yPXtgJHtxdWVyeS5yZWZJZH0tcXVlcnktdHlwZWB9XG4gICAgICAgID5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICB3aWR0aD17U0VMRUNUX1dJRFRIfVxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5VHlwZX1cbiAgICAgICAgICAgIG9wdGlvbnM9e1FVRVJZX1RZUEVTfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgc2xvUXVlcnksIHF1ZXJ5VHlwZTogdmFsdWUhIH0pO1xuICAgICAgICAgICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaW5wdXRJZD17YCR7cXVlcnkucmVmSWR9LXF1ZXJ5LXR5cGVgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUXVlcnlFZGl0b3JSb3c+XG5cbiAgICAgICAge3F1ZXJ5VHlwZSA9PT0gUXVlcnlUeXBlLk1FVFJJQ1MgJiYgKFxuICAgICAgICAgIDxNZXRyaWNRdWVyeUVkaXRvclxuICAgICAgICAgICAgcmVmSWQ9e3F1ZXJ5LnJlZklkfVxuICAgICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cD17dmFyaWFibGVPcHRpb25Hcm91cH1cbiAgICAgICAgICAgIGN1c3RvbU1ldGFEYXRhPXtjdXN0b21NZXRhRGF0YX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsobWV0cmljUXVlcnk6IE1ldHJpY1F1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyAuLi50aGlzLnByb3BzLnF1ZXJ5LCBtZXRyaWNRdWVyeSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvblJ1blF1ZXJ5PXtvblJ1blF1ZXJ5fVxuICAgICAgICAgICAgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX1cbiAgICAgICAgICAgIHF1ZXJ5PXttZXRyaWNRdWVyeX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtxdWVyeVR5cGUgPT09IFF1ZXJ5VHlwZS5TTE8gJiYgKFxuICAgICAgICAgIDxTTE9RdWVyeUVkaXRvclxuICAgICAgICAgICAgcmVmSWQ9e3F1ZXJ5LnJlZklkfVxuICAgICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cD17dmFyaWFibGVPcHRpb25Hcm91cH1cbiAgICAgICAgICAgIGN1c3RvbU1ldGFEYXRhPXtjdXN0b21NZXRhRGF0YX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsocXVlcnk6IFNMT1F1ZXJ5KSA9PiB0aGlzLm9uUXVlcnlDaGFuZ2UoJ3Nsb1F1ZXJ5JywgcXVlcnkpfVxuICAgICAgICAgICAgb25SdW5RdWVyeT17b25SdW5RdWVyeX1cbiAgICAgICAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICAgICAgICBxdWVyeT17c2xvUXVlcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvRWRpdG9yUm93cz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUm93IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uLy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgU0xPUXVlcnkgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBTTE9RdWVyeSkgPT4gdm9pZDtcbiAgcXVlcnk6IFNMT1F1ZXJ5O1xuICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgU0xPOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyByZWZJZCwgcXVlcnksIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLCBvbkNoYW5nZSwgZGF0YXNvdXJjZSB9KSA9PiB7XG4gIGNvbnN0IFtzbG9zLCBzZXRTTE9zXSA9IHVzZVN0YXRlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4oW10pO1xuICBjb25zdCB7IHByb2plY3ROYW1lLCBzZXJ2aWNlSWQgfSA9IHF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0TmFtZSB8fCAhc2VydmljZUlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YXNvdXJjZS5nZXRTZXJ2aWNlTGV2ZWxPYmplY3RpdmVzKHByb2plY3ROYW1lLCBzZXJ2aWNlSWQpLnRoZW4oKHNsb0lkczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+KSA9PiB7XG4gICAgICBzZXRTTE9zKFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICAgICAgICBvcHRpb25zOiB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLi4uc2xvSWRzLFxuICAgICAgXSk7XG4gICAgfSk7XG4gIH0sIFtkYXRhc291cmNlLCBwcm9qZWN0TmFtZSwgc2VydmljZUlkLCB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93IGxhYmVsPVwiU0xPXCIgaHRtbEZvcj17YCR7cmVmSWR9LXNsb2B9PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBpbnB1dElkPXtgJHtyZWZJZH0tc2xvYH1cbiAgICAgICAgd2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICB2YWx1ZT17cXVlcnk/LnNsb0lkICYmIHsgdmFsdWU6IHF1ZXJ5Py5zbG9JZCwgbGFiZWw6IHF1ZXJ5Py5zbG9OYW1lIHx8IHF1ZXJ5Py5zbG9JZCB9fVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTTE9cIlxuICAgICAgICBvcHRpb25zPXtzbG9zfVxuICAgICAgICBvbkNoYW5nZT17YXN5bmMgKHsgdmFsdWU6IHNsb0lkID0gJycsIGxhYmVsOiBzbG9OYW1lID0gJycgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNsb3MgPSBhd2FpdCBkYXRhc291cmNlLmdldFNlcnZpY2VMZXZlbE9iamVjdGl2ZXMocHJvamVjdE5hbWUsIHNlcnZpY2VJZCk7XG4gICAgICAgICAgY29uc3Qgc2xvID0gc2xvcy5maW5kKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhc291cmNlLnRlbXBsYXRlU3J2LnJlcGxhY2Uoc2xvSWQpKTtcbiAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBzbG9JZCwgc2xvTmFtZSwgZ29hbDogc2xvPy5nb2FsIH0pO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBBbGlhc0J5LCBQZXJpb2RTZWxlY3QsIEFsaWdubWVudFBlcmlvZExhYmVsLCBQcm9qZWN0LCBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4uJztcbmltcG9ydCB7IEFMSUdOTUVOVF9QRVJJT0RTLCBTRUxFQ1RfV0lEVEggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBBbGlnbm1lbnRUeXBlcywgQ3VzdG9tTWV0YURhdGEsIFNMT1F1ZXJ5IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBTZWxlY3RvciwgU2VydmljZSwgU0xPIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICBjdXN0b21NZXRhRGF0YTogQ3VzdG9tTWV0YURhdGE7XG4gIHZhcmlhYmxlT3B0aW9uR3JvdXA6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+O1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBTTE9RdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyeTogKCkgPT4gdm9pZDtcbiAgcXVlcnk6IFNMT1F1ZXJ5O1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFF1ZXJ5OiAoZGF0YVNvdXJjZTogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSkgPT4gU0xPUXVlcnkgPSAoZGF0YVNvdXJjZSkgPT4gKHtcbiAgcHJvamVjdE5hbWU6IGRhdGFTb3VyY2UuZ2V0RGVmYXVsdFByb2plY3QoKSxcbiAgYWxpZ25tZW50UGVyaW9kOiAnY2xvdWQtbW9uaXRvcmluZy1hdXRvJyxcbiAgcGVyU2VyaWVzQWxpZ25lcjogQWxpZ25tZW50VHlwZXMuQUxJR05fTUVBTixcbiAgYWxpYXNCeTogJycsXG4gIHNlbGVjdG9yTmFtZTogJ3NlbGVjdF9zbG9faGVhbHRoJyxcbiAgc2VydmljZUlkOiAnJyxcbiAgc2VydmljZU5hbWU6ICcnLFxuICBzbG9JZDogJycsXG4gIHNsb05hbWU6ICcnLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBTTE9RdWVyeUVkaXRvcih7XG4gIHJlZklkLFxuICBxdWVyeSxcbiAgZGF0YXNvdXJjZSxcbiAgb25DaGFuZ2UsXG4gIHZhcmlhYmxlT3B0aW9uR3JvdXAsXG4gIGN1c3RvbU1ldGFEYXRhLFxufTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQcm9qZWN0XG4gICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3ZhcmlhYmxlT3B0aW9uR3JvdXAub3B0aW9uc31cbiAgICAgICAgcHJvamVjdE5hbWU9e3F1ZXJ5LnByb2plY3ROYW1lfVxuICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICBvbkNoYW5nZT17KHByb2plY3ROYW1lKSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBwcm9qZWN0TmFtZSB9KX1cbiAgICAgIC8+XG4gICAgICA8U2VydmljZVxuICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgPjwvU2VydmljZT5cbiAgICAgIDxTTE9cbiAgICAgICAgcmVmSWQ9e3JlZklkfVxuICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucz17dmFyaWFibGVPcHRpb25Hcm91cC5vcHRpb25zfVxuICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgID48L1NMTz5cbiAgICAgIDxTZWxlY3RvclxuICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgPjwvU2VsZWN0b3I+XG5cbiAgICAgIDxRdWVyeUVkaXRvclJvdyBsYWJlbD1cIkFsaWdubWVudCBwZXJpb2RcIiBodG1sRm9yPXtgJHtyZWZJZH0tYWxpZ25tZW50LXBlcmlvZGB9PlxuICAgICAgICA8UGVyaW9kU2VsZWN0XG4gICAgICAgICAgaW5wdXRJZD17YCR7cmVmSWR9LWFsaWdubWVudC1wZXJpb2RgfVxuICAgICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICAgICAgc2VsZWN0V2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgICAgICBjdXJyZW50PXtxdWVyeS5hbGlnbm1lbnRQZXJpb2R9XG4gICAgICAgICAgb25DaGFuZ2U9eyhwZXJpb2QpID0+IG9uQ2hhbmdlKHsgLi4ucXVlcnksIGFsaWdubWVudFBlcmlvZDogcGVyaW9kIH0pfVxuICAgICAgICAgIGFsaWdtZW50UGVyaW9kcz17QUxJR05NRU5UX1BFUklPRFN9XG4gICAgICAgIC8+XG4gICAgICAgIDxBbGlnbm1lbnRQZXJpb2RMYWJlbCBkYXRhc291cmNlPXtkYXRhc291cmNlfSBjdXN0b21NZXRhRGF0YT17Y3VzdG9tTWV0YURhdGF9IC8+XG4gICAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuXG4gICAgICA8QWxpYXNCeSByZWZJZD17cmVmSWR9IHZhbHVlPXtxdWVyeS5hbGlhc0J5fSBvbkNoYW5nZT17KGFsaWFzQnkpID0+IG9uQ2hhbmdlKHsgLi4ucXVlcnksIGFsaWFzQnkgfSl9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBTRUxFQ1RfV0lEVEgsIFNFTEVDVE9SUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSBmcm9tICcuLi8uLi9kYXRhc291cmNlJztcbmltcG9ydCB7IFNMT1F1ZXJ5IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgb25DaGFuZ2U6IChxdWVyeTogU0xPUXVlcnkpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBTTE9RdWVyeTtcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgZGF0YXNvdXJjZTogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZTtcbn1cblxuZXhwb3J0IGNvbnN0IFNlbGVjdG9yOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyByZWZJZCwgcXVlcnksIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLCBvbkNoYW5nZSwgZGF0YXNvdXJjZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93IGxhYmVsPVwiU2VsZWN0b3JcIiBodG1sRm9yPXtgJHtyZWZJZH0tc2xvLXNlbGVjdG9yYH0+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIGlucHV0SWQ9e2Ake3JlZklkfS1zbG8tc2VsZWN0b3JgfVxuICAgICAgICB3aWR0aD17U0VMRUNUX1dJRFRIfVxuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgIHZhbHVlPXtbLi4uU0VMRUNUT1JTLCAuLi50ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10uZmluZCgocykgPT4gcy52YWx1ZSA9PT0gcXVlcnk/LnNlbGVjdG9yTmFtZSA/PyAnJyl9XG4gICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgICAgICBvcHRpb25zOiB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLlNFTEVDVE9SUyxcbiAgICAgICAgXX1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlOiBzZWxlY3Rvck5hbWUgfSkgPT4gb25DaGFuZ2UoeyAuLi5xdWVyeSwgc2VsZWN0b3JOYW1lOiBzZWxlY3Rvck5hbWUgPz8gJycgfSl9XG4gICAgICAvPlxuICAgIDwvUXVlcnlFZGl0b3JSb3c+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4uJztcbmltcG9ydCB7IFNFTEVDVF9XSURUSCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSBmcm9tICcuLi8uLi9kYXRhc291cmNlJztcbmltcG9ydCB7IFNMT1F1ZXJ5IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgb25DaGFuZ2U6IChxdWVyeTogU0xPUXVlcnkpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBTTE9RdWVyeTtcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgZGF0YXNvdXJjZTogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZTtcbn1cblxuZXhwb3J0IGNvbnN0IFNlcnZpY2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHJlZklkLCBxdWVyeSwgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsIG9uQ2hhbmdlLCBkYXRhc291cmNlIH0pID0+IHtcbiAgY29uc3QgW3NlcnZpY2VzLCBzZXRTZXJ2aWNlc10gPSB1c2VTdGF0ZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+KFtdKTtcbiAgY29uc3QgeyBwcm9qZWN0TmFtZSB9ID0gcXVlcnk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXByb2plY3ROYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YXNvdXJjZS5nZXRTTE9TZXJ2aWNlcyhwcm9qZWN0TmFtZSkudGhlbigoc2VydmljZXM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PikgPT4ge1xuICAgICAgc2V0U2VydmljZXMoW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdUZW1wbGF0ZSBWYXJpYWJsZXMnLFxuICAgICAgICAgIG9wdGlvbnM6IHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAuLi5zZXJ2aWNlcyxcbiAgICAgIF0pO1xuICAgIH0pO1xuICB9LCBbZGF0YXNvdXJjZSwgcHJvamVjdE5hbWUsIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlFZGl0b3JSb3cgbGFiZWw9XCJTZXJ2aWNlXCIgaHRtbEZvcj17YCR7cmVmSWR9LXNsby1zZXJ2aWNlYH0+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIGlucHV0SWQ9e2Ake3JlZklkfS1zbG8tc2VydmljZWB9XG4gICAgICAgIHdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgdmFsdWU9e3F1ZXJ5Py5zZXJ2aWNlSWQgJiYgeyB2YWx1ZTogcXVlcnk/LnNlcnZpY2VJZCwgbGFiZWw6IHF1ZXJ5Py5zZXJ2aWNlTmFtZSB8fCBxdWVyeT8uc2VydmljZUlkIH19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IHNlcnZpY2VcIlxuICAgICAgICBvcHRpb25zPXtzZXJ2aWNlc31cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlOiBzZXJ2aWNlSWQgPSAnJywgbGFiZWw6IHNlcnZpY2VOYW1lID0gJycgfSkgPT5cbiAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBzZXJ2aWNlSWQsIHNlcnZpY2VOYW1lLCBzbG9JZDogJycgfSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufTtcbiIsImV4cG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2UnO1xuZXhwb3J0IHsgU0xPIH0gZnJvbSAnLi9TTE8nO1xuZXhwb3J0IHsgU2VsZWN0b3IgfSBmcm9tICcuL1NlbGVjdG9yJztcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBRdWVyeUVkaXRvclByb3BzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7IGV4dHJhY3RTZXJ2aWNlc0Zyb21NZXRyaWNEZXNjcmlwdG9ycywgZ2V0TGFiZWxLZXlzLCBnZXRNZXRyaWNUeXBlcyB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQge1xuICBDbG91ZE1vbml0b3JpbmdPcHRpb25zLFxuICBDbG91ZE1vbml0b3JpbmdRdWVyeSxcbiAgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSxcbiAgTWV0cmljRGVzY3JpcHRvcixcbiAgTWV0cmljRmluZFF1ZXJ5VHlwZXMsXG4gIFZhcmlhYmxlUXVlcnlEYXRhLFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IFZhcmlhYmxlUXVlcnlGaWVsZCB9IGZyb20gJy4vJztcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBRdWVyeUVkaXRvclByb3BzPFxuICBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlLFxuICBDbG91ZE1vbml0b3JpbmdRdWVyeSxcbiAgQ2xvdWRNb25pdG9yaW5nT3B0aW9ucyxcbiAgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeVxuPjtcblxuZXhwb3J0IGNsYXNzIENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnlFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBWYXJpYWJsZVF1ZXJ5RGF0YT4ge1xuICBxdWVyeVR5cGVzOiBBcnJheTx7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfT4gPSBbXG4gICAgeyB2YWx1ZTogTWV0cmljRmluZFF1ZXJ5VHlwZXMuUHJvamVjdHMsIGxhYmVsOiAnUHJvamVjdHMnIH0sXG4gICAgeyB2YWx1ZTogTWV0cmljRmluZFF1ZXJ5VHlwZXMuU2VydmljZXMsIGxhYmVsOiAnU2VydmljZXMnIH0sXG4gICAgeyB2YWx1ZTogTWV0cmljRmluZFF1ZXJ5VHlwZXMuTWV0cmljVHlwZXMsIGxhYmVsOiAnTWV0cmljIFR5cGVzJyB9LFxuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkxhYmVsS2V5cywgbGFiZWw6ICdMYWJlbCBLZXlzJyB9LFxuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkxhYmVsVmFsdWVzLCBsYWJlbDogJ0xhYmVsIFZhbHVlcycgfSxcbiAgICB7IHZhbHVlOiBNZXRyaWNGaW5kUXVlcnlUeXBlcy5SZXNvdXJjZVR5cGVzLCBsYWJlbDogJ1Jlc291cmNlIFR5cGVzJyB9LFxuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkFnZ3JlZ2F0aW9ucywgbGFiZWw6ICdBZ2dyZWdhdGlvbnMnIH0sXG4gICAgeyB2YWx1ZTogTWV0cmljRmluZFF1ZXJ5VHlwZXMuQWxpZ25lcnMsIGxhYmVsOiAnQWxpZ25lcnMnIH0sXG4gICAgeyB2YWx1ZTogTWV0cmljRmluZFF1ZXJ5VHlwZXMuQWxpZ25tZW50UGVyaW9kcywgbGFiZWw6ICdBbGlnbm1lbnQgUGVyaW9kcycgfSxcbiAgICB7IHZhbHVlOiBNZXRyaWNGaW5kUXVlcnlUeXBlcy5TZWxlY3RvcnMsIGxhYmVsOiAnU2VsZWN0b3JzJyB9LFxuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlNMT1NlcnZpY2VzLCBsYWJlbDogJ1NMTyBTZXJ2aWNlcycgfSxcbiAgICB7IHZhbHVlOiBNZXRyaWNGaW5kUXVlcnlUeXBlcy5TTE8sIGxhYmVsOiAnU2VydmljZSBMZXZlbCBPYmplY3RpdmVzIChTTE8pJyB9LFxuICBdO1xuXG4gIGRlZmF1bHRzOiBWYXJpYWJsZVF1ZXJ5RGF0YSA9IHtcbiAgICBzZWxlY3RlZFF1ZXJ5VHlwZTogdGhpcy5xdWVyeVR5cGVzWzBdLnZhbHVlLFxuICAgIG1ldHJpY0Rlc2NyaXB0b3JzOiBbXSxcbiAgICBzZWxlY3RlZFNlcnZpY2U6ICcnLFxuICAgIHNlbGVjdGVkTWV0cmljVHlwZTogJycsXG4gICAgbGFiZWxzOiBbXSxcbiAgICBsYWJlbEtleTogJycsXG4gICAgbWV0cmljVHlwZXM6IFtdLFxuICAgIHNlcnZpY2VzOiBbXSxcbiAgICBzbG9TZXJ2aWNlczogW10sXG4gICAgc2VsZWN0ZWRTTE9TZXJ2aWNlOiAnJyxcbiAgICBwcm9qZWN0czogW10sXG4gICAgcHJvamVjdE5hbWU6ICcnLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgdGhpcy5kZWZhdWx0cyxcbiAgICAgIHsgcHJvamVjdE5hbWU6IHRoaXMucHJvcHMuZGF0YXNvdXJjZS5nZXREZWZhdWx0UHJvamVjdCgpIH0sXG4gICAgICB0aGlzLnByb3BzLnF1ZXJ5XG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gKGF3YWl0IHRoaXMucHJvcHMuZGF0YXNvdXJjZS5nZXRQcm9qZWN0cygpKSBhcyBNZXRyaWNEZXNjcmlwdG9yW107XG4gICAgY29uc3QgbWV0cmljRGVzY3JpcHRvcnMgPSBhd2FpdCB0aGlzLnByb3BzLmRhdGFzb3VyY2UuZ2V0TWV0cmljVHlwZXMoXG4gICAgICB0aGlzLnByb3BzLnF1ZXJ5LnByb2plY3ROYW1lIHx8IHRoaXMucHJvcHMuZGF0YXNvdXJjZS5nZXREZWZhdWx0UHJvamVjdCgpXG4gICAgKTtcbiAgICBjb25zdCBzZXJ2aWNlcyA9IGV4dHJhY3RTZXJ2aWNlc0Zyb21NZXRyaWNEZXNjcmlwdG9ycyhtZXRyaWNEZXNjcmlwdG9ycykubWFwKChtOiBhbnkpID0+ICh7XG4gICAgICB2YWx1ZTogbS5zZXJ2aWNlLFxuICAgICAgbGFiZWw6IG0uc2VydmljZVNob3J0TmFtZSxcbiAgICB9KSk7XG5cbiAgICBsZXQgc2VsZWN0ZWRTZXJ2aWNlID0gJyc7XG4gICAgaWYgKHNlcnZpY2VzLnNvbWUoKHMpID0+IHMudmFsdWUgPT09IGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZSh0aGlzLnN0YXRlLnNlbGVjdGVkU2VydmljZSkpKSB7XG4gICAgICBzZWxlY3RlZFNlcnZpY2UgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU2VydmljZTtcbiAgICB9IGVsc2UgaWYgKHNlcnZpY2VzICYmIHNlcnZpY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNlbGVjdGVkU2VydmljZSA9IHNlcnZpY2VzWzBdLnZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbWV0cmljVHlwZXMsIHNlbGVjdGVkTWV0cmljVHlwZSB9ID0gZ2V0TWV0cmljVHlwZXMoXG4gICAgICBtZXRyaWNEZXNjcmlwdG9ycyxcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXRyaWNUeXBlLFxuICAgICAgZ2V0VGVtcGxhdGVTcnYoKS5yZXBsYWNlKHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXRyaWNUeXBlKSxcbiAgICAgIGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZShzZWxlY3RlZFNlcnZpY2UpXG4gICAgKTtcblxuICAgIGNvbnN0IHNsb1NlcnZpY2VzID0gYXdhaXQgdGhpcy5wcm9wcy5kYXRhc291cmNlLmdldFNMT1NlcnZpY2VzKHRoaXMuc3RhdGUucHJvamVjdE5hbWUpO1xuXG4gICAgY29uc3Qgc3RhdGU6IGFueSA9IHtcbiAgICAgIHNlcnZpY2VzLFxuICAgICAgc2VsZWN0ZWRTZXJ2aWNlLFxuICAgICAgbWV0cmljVHlwZXMsXG4gICAgICBzZWxlY3RlZE1ldHJpY1R5cGUsXG4gICAgICBtZXRyaWNEZXNjcmlwdG9ycyxcbiAgICAgIHByb2plY3RzLFxuICAgICAgLi4uKGF3YWl0IHRoaXMuZ2V0TGFiZWxzKHNlbGVjdGVkTWV0cmljVHlwZSwgdGhpcy5zdGF0ZS5wcm9qZWN0TmFtZSkpLFxuICAgICAgc2xvU2VydmljZXMsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUsICgpID0+IHRoaXMub25Qcm9wc0NoYW5nZSgpKTtcbiAgfVxuXG4gIG9uUHJvcHNDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBtZXRyaWNEZXNjcmlwdG9ycywgbGFiZWxzLCBtZXRyaWNUeXBlcywgc2VydmljZXMsIC4uLnF1ZXJ5TW9kZWwgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IC4uLnF1ZXJ5TW9kZWwsIHJlZklkOiAnQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeUVkaXRvci1WYXJpYWJsZVF1ZXJ5JyB9KTtcbiAgfTtcblxuICBhc3luYyBvblF1ZXJ5VHlwZUNoYW5nZShxdWVyeVR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IHN0YXRlOiBhbnkgPSB7XG4gICAgICBzZWxlY3RlZFF1ZXJ5VHlwZTogcXVlcnlUeXBlLFxuICAgICAgLi4uKGF3YWl0IHRoaXMuZ2V0TGFiZWxzKHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXRyaWNUeXBlLCB0aGlzLnN0YXRlLnByb2plY3ROYW1lLCBxdWVyeVR5cGUpKSxcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICBhc3luYyBvblByb2plY3RDaGFuZ2UocHJvamVjdE5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IG1ldHJpY0Rlc2NyaXB0b3JzID0gYXdhaXQgdGhpcy5wcm9wcy5kYXRhc291cmNlLmdldE1ldHJpY1R5cGVzKHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBsYWJlbHMgPSBhd2FpdCB0aGlzLmdldExhYmVscyh0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSwgcHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IHsgbWV0cmljVHlwZXMsIHNlbGVjdGVkTWV0cmljVHlwZSB9ID0gZ2V0TWV0cmljVHlwZXMoXG4gICAgICBtZXRyaWNEZXNjcmlwdG9ycyxcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXRyaWNUeXBlLFxuICAgICAgZ2V0VGVtcGxhdGVTcnYoKS5yZXBsYWNlKHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXRyaWNUeXBlKSxcbiAgICAgIGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZSh0aGlzLnN0YXRlLnNlbGVjdGVkU2VydmljZSlcbiAgICApO1xuXG4gICAgY29uc3Qgc2xvU2VydmljZXMgPSBhd2FpdCB0aGlzLnByb3BzLmRhdGFzb3VyY2UuZ2V0U0xPU2VydmljZXMocHJvamVjdE5hbWUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgLi4ubGFiZWxzLFxuICAgICAgICBtZXRyaWNUeXBlcyxcbiAgICAgICAgc2VsZWN0ZWRNZXRyaWNUeXBlLFxuICAgICAgICBtZXRyaWNEZXNjcmlwdG9ycyxcbiAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgIHNsb1NlcnZpY2VzLFxuICAgICAgfSxcbiAgICAgICgpID0+IHRoaXMub25Qcm9wc0NoYW5nZSgpXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIG9uU2VydmljZUNoYW5nZShzZXJ2aWNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB7IG1ldHJpY1R5cGVzLCBzZWxlY3RlZE1ldHJpY1R5cGUgfSA9IGdldE1ldHJpY1R5cGVzKFxuICAgICAgdGhpcy5zdGF0ZS5tZXRyaWNEZXNjcmlwdG9ycyxcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXRyaWNUeXBlLFxuICAgICAgZ2V0VGVtcGxhdGVTcnYoKS5yZXBsYWNlKHRoaXMuc3RhdGUuc2VsZWN0ZWRNZXRyaWNUeXBlKSxcbiAgICAgIGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZShzZXJ2aWNlKVxuICAgICk7XG4gICAgY29uc3Qgc3RhdGU6IGFueSA9IHtcbiAgICAgIHNlbGVjdGVkU2VydmljZTogc2VydmljZSxcbiAgICAgIG1ldHJpY1R5cGVzLFxuICAgICAgc2VsZWN0ZWRNZXRyaWNUeXBlLFxuICAgICAgLi4uKGF3YWl0IHRoaXMuZ2V0TGFiZWxzKHNlbGVjdGVkTWV0cmljVHlwZSwgdGhpcy5zdGF0ZS5wcm9qZWN0TmFtZSkpLFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSwgKCkgPT4gdGhpcy5vblByb3BzQ2hhbmdlKCkpO1xuICB9XG5cbiAgYXN5bmMgb25NZXRyaWNUeXBlQ2hhbmdlKG1ldHJpY1R5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IHN0YXRlOiBhbnkgPSB7XG4gICAgICBzZWxlY3RlZE1ldHJpY1R5cGU6IG1ldHJpY1R5cGUsXG4gICAgICAuLi4oYXdhaXQgdGhpcy5nZXRMYWJlbHMobWV0cmljVHlwZSwgdGhpcy5zdGF0ZS5wcm9qZWN0TmFtZSkpLFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSwgKCkgPT4gdGhpcy5vblByb3BzQ2hhbmdlKCkpO1xuICB9XG5cbiAgb25MYWJlbEtleUNoYW5nZShsYWJlbEtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxhYmVsS2V5IH0sICgpID0+IHRoaXMub25Qcm9wc0NoYW5nZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFJlYWRvbmx5PFByb3BzPiwgcHJldlN0YXRlOiBSZWFkb25seTxWYXJpYWJsZVF1ZXJ5RGF0YT4pIHtcbiAgICBjb25zdCBzZWxlY1F1ZXJ5VHlwZUNoYW5nZWQgPSBwcmV2U3RhdGUuc2VsZWN0ZWRRdWVyeVR5cGUgIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRRdWVyeVR5cGU7XG4gICAgY29uc3Qgc2VsZWN0U0xPU2VydmljZUNoYW5nZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU0xPU2VydmljZSAhPT0gcHJldlN0YXRlLnNlbGVjdGVkU0xPU2VydmljZTtcbiAgICBpZiAoc2VsZWNRdWVyeVR5cGVDaGFuZ2VkIHx8IHNlbGVjdFNMT1NlcnZpY2VDaGFuZ2VkKSB7XG4gICAgICB0aGlzLm9uUHJvcHNDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRMYWJlbHMoc2VsZWN0ZWRNZXRyaWNUeXBlOiBzdHJpbmcsIHByb2plY3ROYW1lOiBzdHJpbmcsIHNlbGVjdGVkUXVlcnlUeXBlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFF1ZXJ5VHlwZSkge1xuICAgIGxldCByZXN1bHQgPSB7IGxhYmVsczogdGhpcy5zdGF0ZS5sYWJlbHMsIGxhYmVsS2V5OiB0aGlzLnN0YXRlLmxhYmVsS2V5IH07XG4gICAgaWYgKHNlbGVjdGVkTWV0cmljVHlwZSAmJiBzZWxlY3RlZFF1ZXJ5VHlwZSA9PT0gTWV0cmljRmluZFF1ZXJ5VHlwZXMuTGFiZWxWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGxhYmVscyA9IGF3YWl0IGdldExhYmVsS2V5cyh0aGlzLnByb3BzLmRhdGFzb3VyY2UsIHNlbGVjdGVkTWV0cmljVHlwZSwgcHJvamVjdE5hbWUpO1xuICAgICAgY29uc3QgbGFiZWxLZXkgPSBsYWJlbHMuc29tZSgobCkgPT4gbCA9PT0gZ2V0VGVtcGxhdGVTcnYoKS5yZXBsYWNlKHRoaXMuc3RhdGUubGFiZWxLZXkpKVxuICAgICAgICA/IHRoaXMuc3RhdGUubGFiZWxLZXlcbiAgICAgICAgOiBsYWJlbHNbMF07XG4gICAgICByZXN1bHQgPSB7IGxhYmVscywgbGFiZWxLZXkgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJlbmRlclF1ZXJ5VHlwZVN3aXRjaChxdWVyeVR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IHZhcmlhYmxlT3B0aW9uR3JvdXAgPSB7XG4gICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICBvcHRpb25zOiBnZXRUZW1wbGF0ZVNydigpXG4gICAgICAgIC5nZXRWYXJpYWJsZXMoKVxuICAgICAgICAubWFwKCh2OiBhbnkpID0+ICh7XG4gICAgICAgICAgdmFsdWU6IGAkJHt2Lm5hbWV9YCxcbiAgICAgICAgICBsYWJlbDogYCQke3YubmFtZX1gLFxuICAgICAgICB9KSksXG4gICAgfTtcblxuICAgIHN3aXRjaCAocXVlcnlUeXBlKSB7XG4gICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLk1ldHJpY1R5cGVzOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VmFyaWFibGVRdWVyeUZpZWxkXG4gICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2plY3ROYW1lfVxuICAgICAgICAgICAgICBvcHRpb25zPXtbdmFyaWFibGVPcHRpb25Hcm91cCwgLi4udGhpcy5zdGF0ZS5wcm9qZWN0c119XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHRoaXMub25Qcm9qZWN0Q2hhbmdlKHZhbHVlKX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJQcm9qZWN0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VmFyaWFibGVRdWVyeUZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkU2VydmljZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17W3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLnRoaXMuc3RhdGUuc2VydmljZXNdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uU2VydmljZUNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiU2VydmljZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5MYWJlbEtleXM6XG4gICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkxhYmVsVmFsdWVzOlxuICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5SZXNvdXJjZVR5cGVzOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VmFyaWFibGVRdWVyeUZpZWxkXG4gICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2plY3ROYW1lfVxuICAgICAgICAgICAgICBvcHRpb25zPXtbdmFyaWFibGVPcHRpb25Hcm91cCwgLi4udGhpcy5zdGF0ZS5wcm9qZWN0c119XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHRoaXMub25Qcm9qZWN0Q2hhbmdlKHZhbHVlKX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJQcm9qZWN0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VmFyaWFibGVRdWVyeUZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkU2VydmljZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17W3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLnRoaXMuc3RhdGUuc2VydmljZXNdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uU2VydmljZUNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiU2VydmljZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZE1ldHJpY1R5cGV9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICB2YXJpYWJsZU9wdGlvbkdyb3VwLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUubWV0cmljVHlwZXMubWFwKCh7IHZhbHVlLCBuYW1lIH0pID0+ICh7IHZhbHVlLCBsYWJlbDogbmFtZSB9KSksXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHRoaXMub25NZXRyaWNUeXBlQ2hhbmdlKHZhbHVlKX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJNZXRyaWMgVHlwZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3F1ZXJ5VHlwZSA9PT0gTWV0cmljRmluZFF1ZXJ5VHlwZXMuTGFiZWxWYWx1ZXMgJiYgKFxuICAgICAgICAgICAgICA8VmFyaWFibGVRdWVyeUZpZWxkXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFiZWxLZXl9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17W3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLnRoaXMuc3RhdGUubGFiZWxzLm1hcCgobCkgPT4gKHsgdmFsdWU6IGwsIGxhYmVsOiBsIH0pKV19XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vbkxhYmVsS2V5Q2hhbmdlKHZhbHVlKX1cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhYmVsIEtleVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5BbGlnbmVyczpcbiAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuQWdncmVnYXRpb25zOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VmFyaWFibGVRdWVyeUZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkU2VydmljZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17W3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLnRoaXMuc3RhdGUuc2VydmljZXNdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uU2VydmljZUNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiU2VydmljZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZE1ldHJpY1R5cGV9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICB2YXJpYWJsZU9wdGlvbkdyb3VwLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUubWV0cmljVHlwZXMubWFwKCh7IHZhbHVlLCBuYW1lIH0pID0+ICh7IHZhbHVlLCBsYWJlbDogbmFtZSB9KSksXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHRoaXMub25NZXRyaWNUeXBlQ2hhbmdlKHZhbHVlKX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJNZXRyaWMgVHlwZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5TTE9TZXJ2aWNlczpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICBhbGxvd0N1c3RvbVZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9qZWN0TmFtZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17W3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLnRoaXMuc3RhdGUucHJvamVjdHNdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uUHJvamVjdENoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuXG4gICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlNMTzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICBhbGxvd0N1c3RvbVZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9qZWN0TmFtZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17W3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLnRoaXMuc3RhdGUucHJvamVjdHNdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uUHJvamVjdENoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFNMT1NlcnZpY2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLnNsb1NlcnZpY2VzXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU0xPU2VydmljZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGxhYmVsPVwiU0xPIFNlcnZpY2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIG1heC13aWR0aC0yMVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgd2lkdGgtMTAgcXVlcnkta2V5d29yZFwiPlF1ZXJ5IFR5cGU8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLXNlbGVjdC13cmFwcGVyIG1heC13aWR0aC0xMlwiPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJnZi1mb3JtLWlucHV0XCI+XG4gICAgICAgICAgICAgIDxvcHRpb24+TG9hZGluZy4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkUXVlcnlUeXBlfVxuICAgICAgICAgIG9wdGlvbnM9e3RoaXMucXVlcnlUeXBlc31cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uUXVlcnlUeXBlQ2hhbmdlKHZhbHVlKX1cbiAgICAgICAgICBsYWJlbD1cIlF1ZXJ5IFR5cGVcIlxuICAgICAgICAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJRdWVyeVR5cGVTd2l0Y2godGhpcy5zdGF0ZS5zZWxlY3RlZFF1ZXJ5VHlwZSl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDdXN0b21NZXRhRGF0YSwgTWV0cmljRGVzY3JpcHRvciwgTWV0cmljUXVlcnksIFNMT1F1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBBbGlnbm1lbnQsIEdyb3VwQnksIExhYmVsRmlsdGVyLCBNZXRyaWNzLCBQcmVwcm9jZXNzb3IgfSBmcm9tICcuJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIGN1c3RvbU1ldGFEYXRhOiBDdXN0b21NZXRhRGF0YTtcbiAgdmFyaWFibGVPcHRpb25Hcm91cDogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz47XG4gIG9uTWV0cmljVHlwZUNoYW5nZTogKHF1ZXJ5OiBNZXRyaWNEZXNjcmlwdG9yKSA9PiB2b2lkO1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBNZXRyaWNRdWVyeSB8IFNMT1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogTWV0cmljUXVlcnk7XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG4gIGxhYmVsczogYW55O1xufVxuXG5mdW5jdGlvbiBFZGl0b3Ioe1xuICByZWZJZCxcbiAgcXVlcnksXG4gIGxhYmVscyxcbiAgZGF0YXNvdXJjZSxcbiAgb25DaGFuZ2UsXG4gIG9uTWV0cmljVHlwZUNoYW5nZSxcbiAgY3VzdG9tTWV0YURhdGEsXG4gIHZhcmlhYmxlT3B0aW9uR3JvdXAsXG59OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxQcm9wcz4pIHtcbiAgcmV0dXJuIChcbiAgICA8TWV0cmljc1xuICAgICAgcmVmSWQ9e3JlZklkfVxuICAgICAgdGVtcGxhdGVTcnY9e2RhdGFzb3VyY2UudGVtcGxhdGVTcnZ9XG4gICAgICBwcm9qZWN0TmFtZT17cXVlcnkucHJvamVjdE5hbWV9XG4gICAgICBtZXRyaWNUeXBlPXtxdWVyeS5tZXRyaWNUeXBlfVxuICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3ZhcmlhYmxlT3B0aW9uR3JvdXAub3B0aW9uc31cbiAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICBvbkNoYW5nZT17b25NZXRyaWNUeXBlQ2hhbmdlfVxuICAgID5cbiAgICAgIHsobWV0cmljKSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExhYmVsRmlsdGVyXG4gICAgICAgICAgICBsYWJlbHM9e2xhYmVsc31cbiAgICAgICAgICAgIGZpbHRlcnM9e3F1ZXJ5LmZpbHRlcnMhfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWx0ZXJzOiBzdHJpbmdbXSkgPT4gb25DaGFuZ2UoeyAuLi5xdWVyeSwgZmlsdGVycyB9KX1cbiAgICAgICAgICAgIHZhcmlhYmxlT3B0aW9uR3JvdXA9e3ZhcmlhYmxlT3B0aW9uR3JvdXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UHJlcHJvY2Vzc29yIG1ldHJpY0Rlc2NyaXB0b3I9e21ldHJpY30gcXVlcnk9e3F1ZXJ5fSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgPEdyb3VwQnlcbiAgICAgICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgICAgICAgIGxhYmVscz17T2JqZWN0LmtleXMobGFiZWxzKX1cbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIHZhcmlhYmxlT3B0aW9uR3JvdXA9e3ZhcmlhYmxlT3B0aW9uR3JvdXB9XG4gICAgICAgICAgICBtZXRyaWNEZXNjcmlwdG9yPXttZXRyaWN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWxpZ25tZW50XG4gICAgICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3ZhcmlhYmxlT3B0aW9uR3JvdXAub3B0aW9uc31cbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAgIGN1c3RvbU1ldGFEYXRhPXtjdXN0b21NZXRhRGF0YX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9NZXRyaWNzPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgVmlzdWFsTWV0cmljUXVlcnlFZGl0b3IgPSBSZWFjdC5tZW1vKEVkaXRvcik7XG4iLCJleHBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9Qcm9qZWN0JztcbmV4cG9ydCB7IE1ldHJpY3MgfSBmcm9tICcuL01ldHJpY3MnO1xuZXhwb3J0IHsgR3JvdXBCeSB9IGZyb20gJy4vR3JvdXBCeSc7XG5leHBvcnQgeyBBbGlnbm1lbnQgfSBmcm9tICcuL0FsaWdubWVudCc7XG5leHBvcnQgeyBMYWJlbEZpbHRlciB9IGZyb20gJy4vTGFiZWxGaWx0ZXInO1xuZXhwb3J0IHsgQW5ub3RhdGlvbnNIZWxwIH0gZnJvbSAnLi9Bbm5vdGF0aW9uc0hlbHAnO1xuZXhwb3J0IHsgQWxpZ25tZW50RnVuY3Rpb24gfSBmcm9tICcuL0FsaWdubWVudEZ1bmN0aW9uJztcbmV4cG9ydCB7IEFsaWdubWVudFBlcmlvZExhYmVsIH0gZnJvbSAnLi9BbGlnbm1lbnRQZXJpb2RMYWJlbCc7XG5leHBvcnQgeyBBbGlhc0J5IH0gZnJvbSAnLi9BbGlhc0J5JztcbmV4cG9ydCB7IEFnZ3JlZ2F0aW9uIH0gZnJvbSAnLi9BZ2dyZWdhdGlvbic7XG5leHBvcnQgeyBNZXRyaWNRdWVyeUVkaXRvciB9IGZyb20gJy4vTWV0cmljUXVlcnlFZGl0b3InO1xuZXhwb3J0IHsgU0xPUXVlcnlFZGl0b3IgfSBmcm9tICcuL1NMTy9TTE9RdWVyeUVkaXRvcic7XG5leHBvcnQgeyBNUUxRdWVyeUVkaXRvciB9IGZyb20gJy4vTVFMUXVlcnlFZGl0b3InO1xuZXhwb3J0IHsgVmFyaWFibGVRdWVyeUZpZWxkLCBRdWVyeUVkaXRvclJvdywgUXVlcnlFZGl0b3JGaWVsZCB9IGZyb20gJy4vRmllbGRzJztcbmV4cG9ydCB7IFZpc3VhbE1ldHJpY1F1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9WaXN1YWxNZXRyaWNRdWVyeUVkaXRvcic7XG5leHBvcnQgeyBQZXJpb2RTZWxlY3QgfSBmcm9tICcuL1BlcmlvZFNlbGVjdCc7XG5leHBvcnQgeyBQcmVwcm9jZXNzb3IgfSBmcm9tICcuL1ByZXByb2Nlc3Nvcic7XG4iLCJpbXBvcnQgeyBHb29nbGVBdXRoVHlwZSB9IGZyb20gJ0BncmFmYW5hL2dvb2dsZS1zZGsnO1xuXG5pbXBvcnQgeyBNZXRyaWNLaW5kLCBRdWVyeVR5cGUsIFZhbHVlVHlwZXMgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gbm90IHN1cGVyIGV4Y2l0ZWQgYWJvdXQgdXNpbmcgdW5ldmVuIG51bWJlcnMsIGJ1dCB0aGlzIG1ha2VzIGl0IGFsaWduIHBlcmZlY3RseSB3aXRoIHJvd3MgdGhhdCBoYXMgdHdvIGZpZWxkc1xuZXhwb3J0IGNvbnN0IElOUFVUX1dJRFRIID0gNzE7XG5leHBvcnQgY29uc3QgTEFCRUxfV0lEVEggPSAxOTtcbmV4cG9ydCBjb25zdCBJTk5FUl9MQUJFTF9XSURUSCA9IDE0O1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9XSURUSCA9IDI4O1xuZXhwb3J0IGNvbnN0IEFVVEhfVFlQRVMgPSBbXG4gIHsgdmFsdWU6ICdHb29nbGUgSldUIEZpbGUnLCBrZXk6IEdvb2dsZUF1dGhUeXBlLkpXVCB9LFxuICB7IHZhbHVlOiAnR0NFIERlZmF1bHQgU2VydmljZSBBY2NvdW50Jywga2V5OiBHb29nbGVBdXRoVHlwZS5HQ0UgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBBTElHTk1FTlRTID0gW1xuICB7XG4gICAgdGV4dDogJ25vbmUnLFxuICAgIHZhbHVlOiAnQUxJR05fTk9ORScsXG4gICAgdmFsdWVUeXBlczogW1xuICAgICAgVmFsdWVUeXBlcy5JTlQ2NCxcbiAgICAgIFZhbHVlVHlwZXMuRE9VQkxFLFxuICAgICAgVmFsdWVUeXBlcy5NT05FWSxcbiAgICAgIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OLFxuICAgICAgVmFsdWVUeXBlcy5TVFJJTkcsXG4gICAgICBWYWx1ZVR5cGVzLlZBTFVFX1RZUEVfVU5TUEVDSUZJRUQsXG4gICAgICBWYWx1ZVR5cGVzLkJPT0wsXG4gICAgXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0VdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ2RlbHRhJyxcbiAgICB2YWx1ZTogJ0FMSUdOX0RFTFRBJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVksIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuQ1VNVUxBVElWRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAncmF0ZScsXG4gICAgdmFsdWU6ICdBTElHTl9SQVRFJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVldLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5DVU1VTEFUSVZFLCBNZXRyaWNLaW5kLkRFTFRBXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdpbnRlcnBvbGF0ZScsXG4gICAgdmFsdWU6ICdBTElHTl9JTlRFUlBPTEFURScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0VdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ25leHQgb2xkZXInLFxuICAgIHZhbHVlOiAnQUxJR05fTkVYVF9PTERFUicsXG4gICAgdmFsdWVUeXBlczogW1xuICAgICAgVmFsdWVUeXBlcy5JTlQ2NCxcbiAgICAgIFZhbHVlVHlwZXMuRE9VQkxFLFxuICAgICAgVmFsdWVUeXBlcy5NT05FWSxcbiAgICAgIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OLFxuICAgICAgVmFsdWVUeXBlcy5TVFJJTkcsXG4gICAgICBWYWx1ZVR5cGVzLlZBTFVFX1RZUEVfVU5TUEVDSUZJRUQsXG4gICAgICBWYWx1ZVR5cGVzLkJPT0wsXG4gICAgXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0VdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ21pbicsXG4gICAgdmFsdWU6ICdBTElHTl9NSU4nLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWV0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdtYXgnLFxuICAgIHZhbHVlOiAnQUxJR05fTUFYJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVldLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnbWVhbicsXG4gICAgdmFsdWU6ICdBTElHTl9NRUFOJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVldLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnY291bnQnLFxuICAgIHZhbHVlOiAnQUxJR05fQ09VTlQnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWSwgVmFsdWVUeXBlcy5CT09MXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3N1bScsXG4gICAgdmFsdWU6ICdBTElHTl9TVU0nLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWSwgVmFsdWVUeXBlcy5ESVNUUklCVVRJT05dLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnc3RkZGV2JyxcbiAgICB2YWx1ZTogJ0FMSUdOX1NURERFVicsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ2NvdW50IHRydWUnLFxuICAgIHZhbHVlOiAnQUxJR05fQ09VTlRfVFJVRScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuQk9PTF0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdjb3VudCBmYWxzZScsXG4gICAgdmFsdWU6ICdBTElHTl9DT1VOVF9GQUxTRScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuQk9PTF0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdmcmFjdGlvbiB0cnVlJyxcbiAgICB2YWx1ZTogJ0FMSUdOX0ZSQUNUSU9OX1RSVUUnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLkJPT0xdLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAncGVyY2VudGlsZSA5OScsXG4gICAgdmFsdWU6ICdBTElHTl9QRVJDRU5USUxFXzk5JyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5ESVNUUklCVVRJT05dLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAncGVyY2VudGlsZSA5NScsXG4gICAgdmFsdWU6ICdBTElHTl9QRVJDRU5USUxFXzk1JyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5ESVNUUklCVVRJT05dLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAncGVyY2VudGlsZSA1MCcsXG4gICAgdmFsdWU6ICdBTElHTl9QRVJDRU5USUxFXzUwJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5ESVNUUklCVVRJT05dLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAncGVyY2VudGlsZSAwNScsXG4gICAgdmFsdWU6ICdBTElHTl9QRVJDRU5USUxFXzA1JyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5ESVNUUklCVVRJT05dLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAncGVyY2VudCBjaGFuZ2UnLFxuICAgIHZhbHVlOiAnQUxJR05fUEVSQ0VOVF9DSEFOR0UnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWV0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBBR0dSRUdBVElPTlMgPSBbXG4gIHtcbiAgICB0ZXh0OiAnbm9uZScsXG4gICAgdmFsdWU6ICdSRURVQ0VfTk9ORScsXG4gICAgdmFsdWVUeXBlczogW1xuICAgICAgVmFsdWVUeXBlcy5JTlQ2NCxcbiAgICAgIFZhbHVlVHlwZXMuRE9VQkxFLFxuICAgICAgVmFsdWVUeXBlcy5NT05FWSxcbiAgICAgIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OLFxuICAgICAgVmFsdWVUeXBlcy5CT09MLFxuICAgICAgVmFsdWVUeXBlcy5TVFJJTkcsXG4gICAgXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEEsIE1ldHJpY0tpbmQuQ1VNVUxBVElWRSwgTWV0cmljS2luZC5NRVRSSUNfS0lORF9VTlNQRUNJRklFRF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnbWVhbicsXG4gICAgdmFsdWU6ICdSRURVQ0VfTUVBTicsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZLCBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTl0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkVdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ21pbicsXG4gICAgdmFsdWU6ICdSRURVQ0VfTUlOJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVldLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQSwgTWV0cmljS2luZC5DVU1VTEFUSVZFLCBNZXRyaWNLaW5kLk1FVFJJQ19LSU5EX1VOU1BFQ0lGSUVEXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdtYXgnLFxuICAgIHZhbHVlOiAnUkVEVUNFX01BWCcsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEEsIE1ldHJpY0tpbmQuQ1VNVUxBVElWRSwgTWV0cmljS2luZC5NRVRSSUNfS0lORF9VTlNQRUNJRklFRF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnc3VtJyxcbiAgICB2YWx1ZTogJ1JFRFVDRV9TVU0nLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWSwgVmFsdWVUeXBlcy5ESVNUUklCVVRJT05dLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQSwgTWV0cmljS2luZC5DVU1VTEFUSVZFLCBNZXRyaWNLaW5kLk1FVFJJQ19LSU5EX1VOU1BFQ0lGSUVEXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdzdGQuIGRldi4nLFxuICAgIHZhbHVlOiAnUkVEVUNFX1NURERFVicsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZLCBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTl0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkUsIE1ldHJpY0tpbmQuTUVUUklDX0tJTkRfVU5TUEVDSUZJRURdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ2NvdW50JyxcbiAgICB2YWx1ZTogJ1JFRFVDRV9DT1VOVCcsXG4gICAgdmFsdWVUeXBlczogW1xuICAgICAgVmFsdWVUeXBlcy5JTlQ2NCxcbiAgICAgIFZhbHVlVHlwZXMuRE9VQkxFLFxuICAgICAgVmFsdWVUeXBlcy5NT05FWSxcbiAgICAgIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OLFxuICAgICAgVmFsdWVUeXBlcy5CT09MLFxuICAgICAgVmFsdWVUeXBlcy5TVFJJTkcsXG4gICAgXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEEsIE1ldHJpY0tpbmQuQ1VNVUxBVElWRV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnY291bnQgdHJ1ZScsXG4gICAgdmFsdWU6ICdSRURVQ0VfQ09VTlRfVFJVRScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuQk9PTF0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdjb3VudCBmYWxzZScsXG4gICAgdmFsdWU6ICdSRURVQ0VfQ09VTlRfRkFMU0UnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLkJPT0xdLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnOTl0aCBwZXJjZW50aWxlJyxcbiAgICB2YWx1ZTogJ1JFRFVDRV9QRVJDRU5USUxFXzk5JyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVksIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEEsIE1ldHJpY0tpbmQuQ1VNVUxBVElWRV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnOTV0aCBwZXJjZW50aWxlJyxcbiAgICB2YWx1ZTogJ1JFRFVDRV9QRVJDRU5USUxFXzk1JyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVksIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEEsIE1ldHJpY0tpbmQuQ1VNVUxBVElWRV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnNTB0aCBwZXJjZW50aWxlJyxcbiAgICB2YWx1ZTogJ1JFRFVDRV9QRVJDRU5USUxFXzUwJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVksIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEEsIE1ldHJpY0tpbmQuQ1VNVUxBVElWRV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnNXRoIHBlcmNlbnRpbGUnLFxuICAgIHZhbHVlOiAnUkVEVUNFX1BFUkNFTlRJTEVfMDUnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWSwgVmFsdWVUeXBlcy5ESVNUUklCVVRJT05dLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQSwgTWV0cmljS2luZC5DVU1VTEFUSVZFXSxcbiAgfSxcbl07XG5cbmV4cG9ydCB0eXBlIHBlcmlvZE9wdGlvbiA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBoaWRkZW4/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IEFMSUdOTUVOVF9QRVJJT0RTOiBwZXJpb2RPcHRpb25bXSA9IFtcbiAgeyB0ZXh0OiAnZ3JhZmFuYSBhdXRvJywgdmFsdWU6ICdncmFmYW5hLWF1dG8nIH0sXG4gIHsgdGV4dDogJ3N0YWNrZHJpdmVyIGF1dG8nLCB2YWx1ZTogJ3N0YWNrZHJpdmVyLWF1dG8nLCBoaWRkZW46IHRydWUgfSxcbiAgeyB0ZXh0OiAnY2xvdWQgbW9uaXRvcmluZyBhdXRvJywgdmFsdWU6ICdjbG91ZC1tb25pdG9yaW5nLWF1dG8nIH0sXG4gIHsgdGV4dDogJzFtJywgdmFsdWU6ICcrNjBzJyB9LFxuICB7IHRleHQ6ICcybScsIHZhbHVlOiAnKzEyMHMnIH0sXG4gIHsgdGV4dDogJzVtJywgdmFsdWU6ICcrMzAwcycgfSxcbiAgeyB0ZXh0OiAnMTBtJywgdmFsdWU6ICcrNjAwcycgfSxcbiAgeyB0ZXh0OiAnMzBtJywgdmFsdWU6ICcrMTgwMHMnIH0sXG4gIHsgdGV4dDogJzFoJywgdmFsdWU6ICcrMzYwMHMnIH0sXG4gIHsgdGV4dDogJzNoJywgdmFsdWU6ICcrNzIwMHMnIH0sXG4gIHsgdGV4dDogJzZoJywgdmFsdWU6ICcrMjE2MDBzJyB9LFxuICB7IHRleHQ6ICcxZCcsIHZhbHVlOiAnKzg2NDAwcycgfSxcbiAgeyB0ZXh0OiAnM2QnLCB2YWx1ZTogJysyNTkyMDBzJyB9LFxuICB7IHRleHQ6ICcxdycsIHZhbHVlOiAnKzYwNDgwMHMnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgR1JBUEhfUEVSSU9EUzogcGVyaW9kT3B0aW9uW10gPSBbXG4gIHsgdGV4dDogJ2F1dG8nLCB2YWx1ZTogJ2F1dG8nIH0sXG4gIHsgdGV4dDogJzFtJywgdmFsdWU6ICcxbScgfSxcbiAgeyB0ZXh0OiAnMm0nLCB2YWx1ZTogJzJtJyB9LFxuICB7IHRleHQ6ICc1bScsIHZhbHVlOiAnNW0nIH0sXG4gIHsgdGV4dDogJzEwbScsIHZhbHVlOiAnMTBtJyB9LFxuICB7IHRleHQ6ICczMG0nLCB2YWx1ZTogJzMwbScgfSxcbiAgeyB0ZXh0OiAnMWgnLCB2YWx1ZTogJzFoJyB9LFxuICB7IHRleHQ6ICczaCcsIHZhbHVlOiAnM2gnIH0sXG4gIHsgdGV4dDogJzZoJywgdmFsdWU6ICc2aCcgfSxcbiAgeyB0ZXh0OiAnMWQnLCB2YWx1ZTogJzFkJyB9LFxuICB7IHRleHQ6ICczZCcsIHZhbHVlOiAnM2QnIH0sXG4gIHsgdGV4dDogJzF3JywgdmFsdWU6ICcxdycgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBTWVNURU1fTEFCRUxTID0gW1xuICAnbWV0YWRhdGEuc3lzdGVtX2xhYmVscy5jbG91ZF9hY2NvdW50JyxcbiAgJ21ldGFkYXRhLnN5c3RlbV9sYWJlbHMubmFtZScsXG4gICdtZXRhZGF0YS5zeXN0ZW1fbGFiZWxzLnJlZ2lvbicsXG4gICdtZXRhZGF0YS5zeXN0ZW1fbGFiZWxzLnN0YXRlJyxcbiAgJ21ldGFkYXRhLnN5c3RlbV9sYWJlbHMuaW5zdGFuY2VfZ3JvdXAnLFxuICAnbWV0YWRhdGEuc3lzdGVtX2xhYmVscy5ub2RlX25hbWUnLFxuICAnbWV0YWRhdGEuc3lzdGVtX2xhYmVscy5zZXJ2aWNlX25hbWUnLFxuICAnbWV0YWRhdGEuc3lzdGVtX2xhYmVscy50b3BfbGV2ZWxfY29udHJvbGxlcl90eXBlJyxcbiAgJ21ldGFkYXRhLnN5c3RlbV9sYWJlbHMudG9wX2xldmVsX2NvbnRyb2xsZXJfbmFtZScsXG4gICdtZXRhZGF0YS5zeXN0ZW1fbGFiZWxzLmNvbnRhaW5lcl9pbWFnZScsXG5dO1xuXG5leHBvcnQgY29uc3QgU0VMRUNUT1JTID0gW1xuICB7IGxhYmVsOiAnU0xJIFZhbHVlJywgdmFsdWU6ICdzZWxlY3Rfc2xvX2hlYWx0aCcgfSxcbiAgeyBsYWJlbDogJ1NMTyBDb21wbGlhbmNlJywgdmFsdWU6ICdzZWxlY3Rfc2xvX2NvbXBsaWFuY2UnIH0sXG4gIHsgbGFiZWw6ICdTTE8gRXJyb3IgQnVkZ2V0IFJlbWFpbmluZycsIHZhbHVlOiAnc2VsZWN0X3Nsb19idWRnZXRfZnJhY3Rpb24nIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUVVFUllfVFlQRVMgPSBbXG4gIHsgbGFiZWw6ICdNZXRyaWNzJywgdmFsdWU6IFF1ZXJ5VHlwZS5NRVRSSUNTIH0sXG4gIHsgbGFiZWw6ICdTZXJ2aWNlIExldmVsIE9iamVjdGl2ZXMgKFNMTyknLCB2YWx1ZTogUXVlcnlUeXBlLlNMTyB9LFxuXTtcbiIsImltcG9ydCB7IGNodW5rLCBmbGF0dGVuLCBpc1N0cmluZywgaXNBcnJheSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBmcm9tLCBsYXN0VmFsdWVGcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgRGF0YVF1ZXJ5UmVxdWVzdCxcbiAgRGF0YVF1ZXJ5UmVzcG9uc2UsXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBTY29wZWRWYXJzLFxuICBTZWxlY3RhYmxlVmFsdWUsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVdpdGhCYWNrZW5kLCBnZXRCYWNrZW5kU3J2LCB0b0RhdGFRdWVyeVJlc3BvbnNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBnZXRUaW1lU3J2LCBUaW1lU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zZXJ2aWNlcy9UaW1lU3J2JztcbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2LCBUZW1wbGF0ZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy90ZW1wbGF0aW5nL3RlbXBsYXRlX3Nydic7XG5cbmltcG9ydCB7IENsb3VkTW9uaXRvcmluZ0Fubm90YXRpb25TdXBwb3J0IH0gZnJvbSAnLi9hbm5vdGF0aW9uU3VwcG9ydCc7XG5pbXBvcnQge1xuICBDbG91ZE1vbml0b3JpbmdPcHRpb25zLFxuICBDbG91ZE1vbml0b3JpbmdRdWVyeSxcbiAgRWRpdG9yTW9kZSxcbiAgRmlsdGVyLFxuICBNZXRyaWNEZXNjcmlwdG9yLFxuICBRdWVyeVR5cGUsXG4gIFBvc3RSZXNwb25zZSxcbiAgQWdncmVnYXRpb24sXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVTdXBwb3J0IH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZVdpdGhCYWNrZW5kPFxuICBDbG91ZE1vbml0b3JpbmdRdWVyeSxcbiAgQ2xvdWRNb25pdG9yaW5nT3B0aW9uc1xuPiB7XG4gIGF1dGhlbnRpY2F0aW9uVHlwZTogc3RyaW5nO1xuICBpbnRlcnZhbE1zOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbnN0YW5jZVNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5nczxDbG91ZE1vbml0b3JpbmdPcHRpb25zPixcbiAgICBwdWJsaWMgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpbWVTcnY6IFRpbWVTcnYgPSBnZXRUaW1lU3J2KClcbiAgKSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvblR5cGUgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLmF1dGhlbnRpY2F0aW9uVHlwZSB8fCAnand0JztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IG5ldyBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVN1cHBvcnQodGhpcyk7XG4gICAgdGhpcy5pbnRlcnZhbE1zID0gMDtcbiAgICB0aGlzLmFubm90YXRpb25zID0gQ2xvdWRNb25pdG9yaW5nQW5ub3RhdGlvblN1cHBvcnQodGhpcyk7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYuZ2V0VmFyaWFibGVzKCkubWFwKCh2KSA9PiBgJCR7di5uYW1lfWApO1xuICB9XG5cbiAgcXVlcnkocmVxdWVzdDogRGF0YVF1ZXJ5UmVxdWVzdDxDbG91ZE1vbml0b3JpbmdRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgcmVxdWVzdC50YXJnZXRzID0gcmVxdWVzdC50YXJnZXRzLm1hcCgodCkgPT4gKHtcbiAgICAgIC4uLnRoaXMubWlncmF0ZVF1ZXJ5KHQpLFxuICAgICAgaW50ZXJ2YWxNczogcmVxdWVzdC5pbnRlcnZhbE1zLFxuICAgIH0pKTtcbiAgICByZXR1cm4gc3VwZXIucXVlcnkocmVxdWVzdCk7XG4gIH1cblxuICBhcHBseVRlbXBsYXRlVmFyaWFibGVzKFxuICAgIHsgbWV0cmljUXVlcnksIHJlZklkLCBxdWVyeVR5cGUsIHNsb1F1ZXJ5LCB0eXBlID0gJ3RpbWVTZXJpZXNRdWVyeScgfTogQ2xvdWRNb25pdG9yaW5nUXVlcnksXG4gICAgc2NvcGVkVmFyczogU2NvcGVkVmFyc1xuICApOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgIHJlZklkLFxuICAgICAgaW50ZXJ2YWxNczogdGhpcy5pbnRlcnZhbE1zLFxuICAgICAgdHlwZSxcbiAgICAgIHF1ZXJ5VHlwZSxcbiAgICAgIG1ldHJpY1F1ZXJ5OiB7XG4gICAgICAgIC4uLnRoaXMuaW50ZXJwb2xhdGVQcm9wcyhtZXRyaWNRdWVyeSwgc2NvcGVkVmFycyksXG4gICAgICAgIHByb2plY3ROYW1lOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoXG4gICAgICAgICAgbWV0cmljUXVlcnkucHJvamVjdE5hbWUgPyBtZXRyaWNRdWVyeS5wcm9qZWN0TmFtZSA6IHRoaXMuZ2V0RGVmYXVsdFByb2plY3QoKSxcbiAgICAgICAgICBzY29wZWRWYXJzXG4gICAgICAgICksXG4gICAgICAgIGZpbHRlcnM6IHRoaXMuaW50ZXJwb2xhdGVGaWx0ZXJzKG1ldHJpY1F1ZXJ5LmZpbHRlcnMgfHwgW10sIHNjb3BlZFZhcnMpLFxuICAgICAgICBncm91cEJ5czogdGhpcy5pbnRlcnBvbGF0ZUdyb3VwQnlzKG1ldHJpY1F1ZXJ5Lmdyb3VwQnlzIHx8IFtdLCBzY29wZWRWYXJzKSxcbiAgICAgICAgdmlldzogbWV0cmljUXVlcnkudmlldyB8fCAnRlVMTCcsXG4gICAgICAgIGVkaXRvck1vZGU6IG1ldHJpY1F1ZXJ5LmVkaXRvck1vZGUsXG4gICAgICB9LFxuICAgICAgc2xvUXVlcnk6IHNsb1F1ZXJ5ICYmIHRoaXMuaW50ZXJwb2xhdGVQcm9wcyhzbG9RdWVyeSwgc2NvcGVkVmFycyksXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGdldExhYmVscyhtZXRyaWNUeXBlOiBzdHJpbmcsIHJlZklkOiBzdHJpbmcsIHByb2plY3ROYW1lOiBzdHJpbmcsIGFnZ3JlZ2F0aW9uPzogQWdncmVnYXRpb24pIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdGFyZ2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgcmVmSWQsXG4gICAgICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgICAgICBxdWVyeVR5cGU6IFF1ZXJ5VHlwZS5NRVRSSUNTLFxuICAgICAgICAgIG1ldHJpY1F1ZXJ5OiB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHByb2plY3ROYW1lKSxcbiAgICAgICAgICAgIG1ldHJpY1R5cGU6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShtZXRyaWNUeXBlKSxcbiAgICAgICAgICAgIGdyb3VwQnlzOiB0aGlzLmludGVycG9sYXRlR3JvdXBCeXMoYWdncmVnYXRpb24/Lmdyb3VwQnlzIHx8IFtdLCB7fSksXG4gICAgICAgICAgICBjcm9zc1Nlcmllc1JlZHVjZXI6IGFnZ3JlZ2F0aW9uPy5jcm9zc1Nlcmllc1JlZHVjZXIgPz8gJ1JFRFVDRV9OT05FJyxcbiAgICAgICAgICAgIHZpZXc6ICdIRUFERVJTJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHJhbmdlOiB0aGlzLnRpbWVTcnYudGltZVJhbmdlKCksXG4gICAgfSBhcyBEYXRhUXVlcnlSZXF1ZXN0PENsb3VkTW9uaXRvcmluZ1F1ZXJ5PjtcblxuICAgIGNvbnN0IHF1ZXJpZXMgPSBvcHRpb25zLnRhcmdldHM7XG5cbiAgICBpZiAoIXF1ZXJpZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShvZih7IHJlc3VsdHM6IFtdIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIGZyb20odGhpcy5lbnN1cmVHQ0VEZWZhdWx0UHJvamVjdCgpKS5waXBlKFxuICAgICAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdldEJhY2tlbmRTcnYoKS5mZXRjaDxQb3N0UmVzcG9uc2U+KHtcbiAgICAgICAgICAgIHVybDogJy9hcGkvZHMvcXVlcnknLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGZyb206IG9wdGlvbnMucmFuZ2UuZnJvbS52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgdG86IG9wdGlvbnMucmFuZ2UudG8udmFsdWVPZigpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIHF1ZXJpZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGFRdWVyeVJlc3BvbnNlID0gdG9EYXRhUXVlcnlSZXNwb25zZSh7XG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGxhYmVscyA9IGRhdGFRdWVyeVJlc3BvbnNlPy5kYXRhXG4gICAgICAgICAgICAubWFwKChmKSA9PiBmLm1ldGE/LmN1c3RvbT8ubGFiZWxzKVxuICAgICAgICAgICAgLmZpbHRlcigocCkgPT4gISFwKVxuICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBsYWJlbHMpID0+IHtcbiAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGxhYmVscykge1xuICAgICAgICAgICAgICAgIGlmICghYWNjW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgIGFjY1trZXldID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsYWJlbHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgYWNjW2tleV0uYWRkKGxhYmVsc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobGFiZWxzKS5tYXAoKGw6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBsWzFdID0gQXJyYXkuZnJvbShsWzFdKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGdldEdDRURlZmF1bHRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlKGBnY2VEZWZhdWx0UHJvamVjdGApO1xuICB9XG5cbiAgZ2V0RGVmYXVsdFByb2plY3QoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IGRlZmF1bHRQcm9qZWN0LCBhdXRoZW50aWNhdGlvblR5cGUsIGdjZURlZmF1bHRQcm9qZWN0IH0gPSB0aGlzLmluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGE7XG4gICAgaWYgKGF1dGhlbnRpY2F0aW9uVHlwZSA9PT0gJ2djZScpIHtcbiAgICAgIHJldHVybiBnY2VEZWZhdWx0UHJvamVjdCB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFByb2plY3QgfHwgJyc7XG4gIH1cblxuICBhc3luYyBlbnN1cmVHQ0VEZWZhdWx0UHJvamVjdCgpIHtcbiAgICBjb25zdCB7IGF1dGhlbnRpY2F0aW9uVHlwZSwgZ2NlRGVmYXVsdFByb2plY3QgfSA9IHRoaXMuaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YTtcbiAgICBpZiAoYXV0aGVudGljYXRpb25UeXBlID09PSAnZ2NlJyAmJiAhZ2NlRGVmYXVsdFByb2plY3QpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5nY2VEZWZhdWx0UHJvamVjdCA9IGF3YWl0IHRoaXMuZ2V0R0NFRGVmYXVsdFByb2plY3QoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRNZXRyaWNUeXBlcyhwcm9qZWN0TmFtZTogc3RyaW5nKTogUHJvbWlzZTxNZXRyaWNEZXNjcmlwdG9yW10+IHtcbiAgICBpZiAoIXByb2plY3ROYW1lKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVzb3VyY2UoXG4gICAgICBgbWV0cmljRGVzY3JpcHRvcnMvdjMvcHJvamVjdHMvJHt0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocHJvamVjdE5hbWUpfS9tZXRyaWNEZXNjcmlwdG9yc2BcbiAgICApIGFzIFByb21pc2U8TWV0cmljRGVzY3JpcHRvcltdPjtcbiAgfVxuXG4gIGFzeW5jIGdldFNMT1NlcnZpY2VzKHByb2plY3ROYW1lOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlKGBzZXJ2aWNlcy92My9wcm9qZWN0cy8ke3RoaXMudGVtcGxhdGVTcnYucmVwbGFjZShwcm9qZWN0TmFtZSl9L3NlcnZpY2VzP3BhZ2VTaXplPTEwMDBgKTtcbiAgfVxuXG4gIGFzeW5jIGdldFNlcnZpY2VMZXZlbE9iamVjdGl2ZXMocHJvamVjdE5hbWU6IHN0cmluZywgc2VydmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4ge1xuICAgIGlmICghc2VydmljZUlkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICB9XG4gICAgbGV0IHsgcHJvamVjdE5hbWU6IHAsIHNlcnZpY2VJZDogcyB9ID0gdGhpcy5pbnRlcnBvbGF0ZVByb3BzKHsgcHJvamVjdE5hbWUsIHNlcnZpY2VJZCB9KTtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZShgc2xvLXNlcnZpY2VzL3YzL3Byb2plY3RzLyR7cH0vc2VydmljZXMvJHtzfS9zZXJ2aWNlTGV2ZWxPYmplY3RpdmVzYCk7XG4gIH1cblxuICBnZXRQcm9qZWN0cygpOiBQcm9taXNlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlKGBwcm9qZWN0c2ApO1xuICB9XG5cbiAgbWlncmF0ZVF1ZXJ5KHF1ZXJ5OiBDbG91ZE1vbml0b3JpbmdRdWVyeSk6IENsb3VkTW9uaXRvcmluZ1F1ZXJ5IHtcbiAgICBpZiAoIXF1ZXJ5Lmhhc093blByb3BlcnR5KCdtZXRyaWNRdWVyeScpKSB7XG4gICAgICBjb25zdCB7IGhpZGUsIHJlZklkLCBkYXRhc291cmNlLCBrZXksIHF1ZXJ5VHlwZSwgbWF4TGluZXMsIG1ldHJpYywgaW50ZXJ2YWxNcywgdHlwZSwgLi4ucmVzdCB9ID0gcXVlcnkgYXMgYW55O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVmSWQsXG4gICAgICAgIGludGVydmFsTXMsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGhpZGUsXG4gICAgICAgIHF1ZXJ5VHlwZTogUXVlcnlUeXBlLk1FVFJJQ1MsXG4gICAgICAgIG1ldHJpY1F1ZXJ5OiB7XG4gICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICB2aWV3OiByZXN0LnZpZXcgfHwgJ0ZVTEwnLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgaW50ZXJwb2xhdGVQcm9wczxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4ob2JqZWN0OiBULCBzY29wZWRWYXJzOiBTY29wZWRWYXJzID0ge30pOiBUIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqZWN0KS5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtrZXldOiB2YWx1ZSAmJiBpc1N0cmluZyh2YWx1ZSkgPyB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodmFsdWUsIHNjb3BlZFZhcnMpIDogdmFsdWUsXG4gICAgICB9O1xuICAgIH0sIHt9IGFzIFQpO1xuICB9XG5cbiAgZmlsdGVyUXVlcnkocXVlcnk6IENsb3VkTW9uaXRvcmluZ1F1ZXJ5KTogYm9vbGVhbiB7XG4gICAgaWYgKHF1ZXJ5LmhpZGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnkucXVlcnlUeXBlICYmIHF1ZXJ5LnF1ZXJ5VHlwZSA9PT0gUXVlcnlUeXBlLlNMTyAmJiBxdWVyeS5zbG9RdWVyeSkge1xuICAgICAgY29uc3QgeyBzZWxlY3Rvck5hbWUsIHNlcnZpY2VJZCwgc2xvSWQsIHByb2plY3ROYW1lIH0gPSBxdWVyeS5zbG9RdWVyeTtcbiAgICAgIHJldHVybiAhIXNlbGVjdG9yTmFtZSAmJiAhIXNlcnZpY2VJZCAmJiAhIXNsb0lkICYmICEhcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5LnF1ZXJ5VHlwZSAmJiBxdWVyeS5xdWVyeVR5cGUgPT09IFF1ZXJ5VHlwZS5NRVRSSUNTICYmIHF1ZXJ5Lm1ldHJpY1F1ZXJ5LmVkaXRvck1vZGUgPT09IEVkaXRvck1vZGUuTVFMKSB7XG4gICAgICByZXR1cm4gISFxdWVyeS5tZXRyaWNRdWVyeS5wcm9qZWN0TmFtZSAmJiAhIXF1ZXJ5Lm1ldHJpY1F1ZXJ5LnF1ZXJ5O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbWV0cmljVHlwZSB9ID0gcXVlcnkubWV0cmljUXVlcnk7XG5cbiAgICByZXR1cm4gISFtZXRyaWNUeXBlO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMocXVlcmllczogQ2xvdWRNb25pdG9yaW5nUXVlcnlbXSwgc2NvcGVkVmFyczogU2NvcGVkVmFycyk6IENsb3VkTW9uaXRvcmluZ1F1ZXJ5W10ge1xuICAgIHJldHVybiBxdWVyaWVzLm1hcChcbiAgICAgIChxdWVyeSkgPT4gdGhpcy5hcHBseVRlbXBsYXRlVmFyaWFibGVzKHRoaXMubWlncmF0ZVF1ZXJ5KHF1ZXJ5KSwgc2NvcGVkVmFycykgYXMgQ2xvdWRNb25pdG9yaW5nUXVlcnlcbiAgICApO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVGaWx0ZXJzKGZpbHRlcnM6IHN0cmluZ1tdLCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKSB7XG4gICAgY29uc3QgY29tcGxldGVGaWx0ZXI6IEZpbHRlcltdID0gY2h1bmsoZmlsdGVycywgNClcbiAgICAgIC5tYXAoKFtrZXksIG9wZXJhdG9yLCB2YWx1ZSwgY29uZGl0aW9uXSkgPT4gKHtcbiAgICAgICAga2V5LFxuICAgICAgICBvcGVyYXRvcixcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIC4uLihjb25kaXRpb24gJiYgeyBjb25kaXRpb24gfSksXG4gICAgICB9KSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udmFsdWUpO1xuXG4gICAgY29uc3QgZmlsdGVyQXJyYXkgPSBmbGF0dGVuKFxuICAgICAgY29tcGxldGVGaWx0ZXIubWFwKCh7IGtleSwgb3BlcmF0b3IsIHZhbHVlLCBjb25kaXRpb24gfTogRmlsdGVyKSA9PiBbXG4gICAgICAgIHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShrZXksIHNjb3BlZFZhcnMgfHwge30pLFxuICAgICAgICBvcGVyYXRvcixcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHZhbHVlLCBzY29wZWRWYXJzIHx8IHt9LCAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA/IGAoJHt2YWx1ZS5qb2luKCd8Jyl9KWAgOiB2YWx1ZTtcbiAgICAgICAgfSksXG4gICAgICAgIC4uLihjb25kaXRpb24gPyBbY29uZGl0aW9uXSA6IFtdKSxcbiAgICAgIF0pXG4gICAgKTtcblxuICAgIHJldHVybiBmaWx0ZXJBcnJheSB8fCBbXTtcbiAgfVxuXG4gIGludGVycG9sYXRlR3JvdXBCeXMoZ3JvdXBCeXM6IHN0cmluZ1tdLCBzY29wZWRWYXJzOiB7fSk6IHN0cmluZ1tdIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkR3JvdXBCeXM6IHN0cmluZ1tdID0gW107XG4gICAgKGdyb3VwQnlzIHx8IFtdKS5mb3JFYWNoKChnYikgPT4ge1xuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKGdiLCBzY29wZWRWYXJzIHx8IHt9LCAnY3N2Jykuc3BsaXQoJywnKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGludGVycG9sYXRlZCkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkR3JvdXBCeXMgPSBpbnRlcnBvbGF0ZWRHcm91cEJ5cy5jb25jYXQoaW50ZXJwb2xhdGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludGVycG9sYXRlZEdyb3VwQnlzLnB1c2goaW50ZXJwb2xhdGVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGVkR3JvdXBCeXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNodW5rLCBpbml0aWFsLCBzdGFydENhc2UsIHVuaXFCeSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2LCBUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBBR0dSRUdBVElPTlMsIEFMSUdOTUVOVFMsIFNZU1RFTV9MQUJFTFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQWxpZ25tZW50VHlwZXMsIE1ldHJpY0Rlc2NyaXB0b3IsIE1ldHJpY0tpbmQsIFByZXByb2Nlc3NvclR5cGUsIFZhbHVlVHlwZXMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKTtcblxuZXhwb3J0IGNvbnN0IGV4dHJhY3RTZXJ2aWNlc0Zyb21NZXRyaWNEZXNjcmlwdG9ycyA9IChtZXRyaWNEZXNjcmlwdG9yczogTWV0cmljRGVzY3JpcHRvcltdKSA9PlxuICB1bmlxQnkobWV0cmljRGVzY3JpcHRvcnMsICdzZXJ2aWNlJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRNZXRyaWNUeXBlc0J5U2VydmljZSA9IChtZXRyaWNEZXNjcmlwdG9yczogTWV0cmljRGVzY3JpcHRvcltdLCBzZXJ2aWNlOiBzdHJpbmcpID0+XG4gIG1ldHJpY0Rlc2NyaXB0b3JzLmZpbHRlcigobTogTWV0cmljRGVzY3JpcHRvcikgPT4gbS5zZXJ2aWNlID09PSBzZXJ2aWNlKTtcblxuZXhwb3J0IGNvbnN0IGdldE1ldHJpY1R5cGVzID0gKFxuICBtZXRyaWNEZXNjcmlwdG9yczogTWV0cmljRGVzY3JpcHRvcltdLFxuICBtZXRyaWNUeXBlOiBzdHJpbmcsXG4gIGludGVycG9sYXRlZE1ldHJpY1R5cGU6IHN0cmluZyxcbiAgc2VsZWN0ZWRTZXJ2aWNlOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCBtZXRyaWNUeXBlcyA9IGdldE1ldHJpY1R5cGVzQnlTZXJ2aWNlKG1ldHJpY0Rlc2NyaXB0b3JzLCBzZWxlY3RlZFNlcnZpY2UpLm1hcCgobSkgPT4gKHtcbiAgICB2YWx1ZTogbS50eXBlLFxuICAgIG5hbWU6IG0uZGlzcGxheU5hbWUsXG4gIH0pKTtcbiAgY29uc3QgbWV0cmljVHlwZUV4aXN0SW5BcnJheSA9IG1ldHJpY1R5cGVzLnNvbWUoXG4gICAgKG06IHsgdmFsdWU6IHN0cmluZzsgbmFtZTogc3RyaW5nIH0pID0+IG0udmFsdWUgPT09IGludGVycG9sYXRlZE1ldHJpY1R5cGVcbiAgKTtcbiAgY29uc3QgbWV0cmljVHlwZUJ5U2VydmljZSA9IG1ldHJpY1R5cGVzLmxlbmd0aCA/IG1ldHJpY1R5cGVzWzBdLnZhbHVlIDogJyc7XG4gIGNvbnN0IHNlbGVjdGVkTWV0cmljVHlwZSA9IG1ldHJpY1R5cGVFeGlzdEluQXJyYXkgPyBtZXRyaWNUeXBlIDogbWV0cmljVHlwZUJ5U2VydmljZTtcbiAgcmV0dXJuIHtcbiAgICBtZXRyaWNUeXBlcyxcbiAgICBzZWxlY3RlZE1ldHJpY1R5cGUsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxpZ25tZW50T3B0aW9uc0J5TWV0cmljID0gKFxuICBtZXRyaWNWYWx1ZVR5cGU6IHN0cmluZyxcbiAgbWV0cmljS2luZDogc3RyaW5nLFxuICBwcmVwcm9jZXNzb3I/OiBQcmVwcm9jZXNzb3JUeXBlXG4pID0+IHtcbiAgaWYgKHByZXByb2Nlc3NvciAmJiBwcmVwcm9jZXNzb3IgPT09IFByZXByb2Nlc3NvclR5cGUuUmF0ZSkge1xuICAgIG1ldHJpY0tpbmQgPSBNZXRyaWNLaW5kLkdBVUdFO1xuICB9XG5cbiAgcmV0dXJuICFtZXRyaWNWYWx1ZVR5cGVcbiAgICA/IFtdXG4gICAgOiBBTElHTk1FTlRTLmZpbHRlcigoaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGkudmFsdWVUeXBlcy5pbmRleE9mKG1ldHJpY1ZhbHVlVHlwZSBhcyBWYWx1ZVR5cGVzKSAhPT0gLTEgJiZcbiAgICAgICAgICBpLm1ldHJpY0tpbmRzLmluZGV4T2YobWV0cmljS2luZCBhcyBNZXRyaWNLaW5kKSAhPT0gLTFcbiAgICAgICAgKTtcbiAgICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFnZ3JlZ2F0aW9uT3B0aW9uc0J5TWV0cmljID0gKHZhbHVlVHlwZTogVmFsdWVUeXBlcywgbWV0cmljS2luZDogTWV0cmljS2luZCkgPT4ge1xuICByZXR1cm4gIW1ldHJpY0tpbmRcbiAgICA/IFtdXG4gICAgOiBBR0dSRUdBVElPTlMuZmlsdGVyKChpKSA9PiB7XG4gICAgICAgIHJldHVybiBpLnZhbHVlVHlwZXMuaW5kZXhPZih2YWx1ZVR5cGUpICE9PSAtMSAmJiBpLm1ldHJpY0tpbmRzLmluZGV4T2YobWV0cmljS2luZCkgIT09IC0xO1xuICAgICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGFiZWxLZXlzID0gYXN5bmMgKFxuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlLFxuICBzZWxlY3RlZE1ldHJpY1R5cGU6IHN0cmluZyxcbiAgcHJvamVjdE5hbWU6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IHJlZklkID0gJ2hhbmRsZUxhYmVsS2V5c1F1ZXJ5JztcbiAgY29uc3QgbGFiZWxzID0gYXdhaXQgZGF0YXNvdXJjZS5nZXRMYWJlbHMoc2VsZWN0ZWRNZXRyaWNUeXBlLCByZWZJZCwgcHJvamVjdE5hbWUpO1xuICByZXR1cm4gWy4uLk9iamVjdC5rZXlzKGxhYmVscyksIC4uLlNZU1RFTV9MQUJFTFNdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsaWdubWVudFBpY2tlckRhdGEgPSAoXG4gIHZhbHVlVHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gVmFsdWVUeXBlcy5ET1VCTEUsXG4gIG1ldHJpY0tpbmQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IE1ldHJpY0tpbmQuR0FVR0UsXG4gIHBlclNlcmllc0FsaWduZXI6IHN0cmluZyB8IHVuZGVmaW5lZCA9IEFsaWdubWVudFR5cGVzLkFMSUdOX01FQU4sXG4gIHByZXByb2Nlc3Nvcj86IFByZXByb2Nlc3NvclR5cGVcbikgPT4ge1xuICBjb25zdCBhbGlnbk9wdGlvbnMgPSBnZXRBbGlnbm1lbnRPcHRpb25zQnlNZXRyaWModmFsdWVUeXBlISwgbWV0cmljS2luZCEsIHByZXByb2Nlc3NvciEpLm1hcCgob3B0aW9uKSA9PiAoe1xuICAgIC4uLm9wdGlvbixcbiAgICBsYWJlbDogb3B0aW9uLnRleHQsXG4gIH0pKTtcbiAgaWYgKCFhbGlnbk9wdGlvbnMuc29tZSgobzogeyB2YWx1ZTogc3RyaW5nIH0pID0+IG8udmFsdWUgPT09IHRlbXBsYXRlU3J2LnJlcGxhY2UocGVyU2VyaWVzQWxpZ25lcikpKSB7XG4gICAgcGVyU2VyaWVzQWxpZ25lciA9IGFsaWduT3B0aW9ucy5sZW5ndGggPiAwID8gYWxpZ25PcHRpb25zWzBdLnZhbHVlIDogQWxpZ25tZW50VHlwZXMuQUxJR05fTUVBTjtcbiAgfVxuICByZXR1cm4geyBhbGlnbk9wdGlvbnMsIHBlclNlcmllc0FsaWduZXIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsYWJlbHNUb0dyb3VwZWRPcHRpb25zID0gKGdyb3VwQnlzOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBncm91cHMgPSBncm91cEJ5cy5yZWR1Y2UoKGFjYzogYW55LCBjdXJyOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhcnIgPSBjdXJyLnNwbGl0KCcuJykubWFwKHN0YXJ0Q2FzZSk7XG4gICAgY29uc3QgZ3JvdXAgPSAoYXJyLmxlbmd0aCA9PT0gMiA/IGFyciA6IGluaXRpYWwoYXJyKSkuam9pbignICcpO1xuICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgIHZhbHVlOiBjdXJyLFxuICAgICAgbGFiZWw6IGN1cnIsXG4gICAgfTtcbiAgICBpZiAoYWNjW2dyb3VwXSkge1xuICAgICAgYWNjW2dyb3VwXSA9IFsuLi5hY2NbZ3JvdXBdLCBvcHRpb25dO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2NbZ3JvdXBdID0gW29wdGlvbl07XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGdyb3VwcykubWFwKChbbGFiZWwsIG9wdGlvbnNdKSA9PiAoeyBsYWJlbCwgb3B0aW9ucywgZXhwYW5kZWQ6IHRydWUgfSksIFtdKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdBcnJheVRvRmlsdGVycyA9IChmaWx0ZXJBcnJheTogc3RyaW5nW10pID0+XG4gIGNodW5rKGZpbHRlckFycmF5LCA0KS5tYXAoKFtrZXksIG9wZXJhdG9yLCB2YWx1ZSwgY29uZGl0aW9uID0gJ0FORCddKSA9PiAoe1xuICAgIGtleSxcbiAgICBvcGVyYXRvcixcbiAgICB2YWx1ZSxcbiAgICBjb25kaXRpb24sXG4gIH0pKTtcbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0NoZWF0U2hlZXQgZnJvbSAnLi9jb21wb25lbnRzL0Nsb3VkTW9uaXRvcmluZ0NoZWF0U2hlZXQnO1xuaW1wb3J0IHsgQ29uZmlnRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL0NvbmZpZ0VkaXRvci9Db25maWdFZGl0b3InO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9WYXJpYWJsZVF1ZXJ5RWRpdG9yJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDbG91ZE1vbml0b3JpbmdRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW48Q2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSwgQ2xvdWRNb25pdG9yaW5nUXVlcnk+KENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UpXG4gIC5zZXRRdWVyeUVkaXRvckhlbHAoQ2xvdWRNb25pdG9yaW5nQ2hlYXRTaGVldClcbiAgLnNldFF1ZXJ5RWRpdG9yKFF1ZXJ5RWRpdG9yKVxuICAuc2V0Q29uZmlnRWRpdG9yKENvbmZpZ0VkaXRvcilcbiAgLnNldFZhcmlhYmxlUXVlcnlFZGl0b3IoQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeUVkaXRvcik7XG4iLCJpbXBvcnQgeyBEYXRhUXVlcnksIERhdGFTb3VyY2VKc29uRGF0YSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBHb29nbGVBdXRoVHlwZSB9IGZyb20gJ0BncmFmYW5hL2dvb2dsZS1zZGsnO1xuXG5leHBvcnQgY29uc3QgYXV0aFR5cGVzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPSBbXG4gIHsgbGFiZWw6ICdHb29nbGUgSldUIEZpbGUnLCB2YWx1ZTogR29vZ2xlQXV0aFR5cGUuSldUIH0sXG4gIHsgbGFiZWw6ICdHQ0UgRGVmYXVsdCBTZXJ2aWNlIEFjY291bnQnLCB2YWx1ZTogR29vZ2xlQXV0aFR5cGUuR0NFIH0sXG5dO1xuXG5leHBvcnQgZW51bSBNZXRyaWNGaW5kUXVlcnlUeXBlcyB7XG4gIFByb2plY3RzID0gJ3Byb2plY3RzJyxcbiAgU2VydmljZXMgPSAnc2VydmljZXMnLFxuICBEZWZhdWx0UHJvamVjdCA9ICdkZWZhdWx0UHJvamVjdCcsXG4gIE1ldHJpY1R5cGVzID0gJ21ldHJpY1R5cGVzJyxcbiAgTGFiZWxLZXlzID0gJ2xhYmVsS2V5cycsXG4gIExhYmVsVmFsdWVzID0gJ2xhYmVsVmFsdWVzJyxcbiAgUmVzb3VyY2VUeXBlcyA9ICdyZXNvdXJjZVR5cGVzJyxcbiAgQWdncmVnYXRpb25zID0gJ2FnZ3JlZ2F0aW9ucycsXG4gIEFsaWduZXJzID0gJ2FsaWduZXJzJyxcbiAgQWxpZ25tZW50UGVyaW9kcyA9ICdhbGlnbm1lbnRQZXJpb2RzJyxcbiAgU2VsZWN0b3JzID0gJ3NlbGVjdG9ycycsXG4gIFNMT1NlcnZpY2VzID0gJ3Nsb1NlcnZpY2VzJyxcbiAgU0xPID0gJ3NsbycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSBleHRlbmRzIERhdGFRdWVyeSB7XG4gIHNlbGVjdGVkUXVlcnlUeXBlOiBzdHJpbmc7XG4gIHNlbGVjdGVkU2VydmljZTogc3RyaW5nO1xuICBzZWxlY3RlZE1ldHJpY1R5cGU6IHN0cmluZztcbiAgc2VsZWN0ZWRTTE9TZXJ2aWNlOiBzdHJpbmc7XG4gIGxhYmVsS2V5OiBzdHJpbmc7XG4gIHByb2plY3RzOiBTZWxlY3RhYmxlVmFsdWVbXTtcbiAgc2xvU2VydmljZXM6IFNlbGVjdGFibGVWYWx1ZVtdO1xuICBwcm9qZWN0TmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhYmxlUXVlcnlEYXRhIHtcbiAgc2VsZWN0ZWRRdWVyeVR5cGU6IHN0cmluZztcbiAgbWV0cmljRGVzY3JpcHRvcnM6IE1ldHJpY0Rlc2NyaXB0b3JbXTtcbiAgc2VsZWN0ZWRTZXJ2aWNlOiBzdHJpbmc7XG4gIHNlbGVjdGVkTWV0cmljVHlwZTogc3RyaW5nO1xuICBzZWxlY3RlZFNMT1NlcnZpY2U6IHN0cmluZztcbiAgbGFiZWxzOiBzdHJpbmdbXTtcbiAgbGFiZWxLZXk6IHN0cmluZztcbiAgbWV0cmljVHlwZXM6IEFycmF5PHsgdmFsdWU6IHN0cmluZzsgbmFtZTogc3RyaW5nIH0+O1xuICBzZXJ2aWNlczogU2VsZWN0YWJsZVZhbHVlW107XG4gIHByb2plY3RzOiBTZWxlY3RhYmxlVmFsdWVbXTtcbiAgc2xvU2VydmljZXM6IFNlbGVjdGFibGVWYWx1ZVtdO1xuICBwcm9qZWN0TmFtZTogc3RyaW5nO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFnZ3JlZ2F0aW9uIHtcbiAgY3Jvc3NTZXJpZXNSZWR1Y2VyPzogc3RyaW5nO1xuICBncm91cEJ5cz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZW51bSBRdWVyeVR5cGUge1xuICBNRVRSSUNTID0gJ21ldHJpY3MnLFxuICBTTE8gPSAnc2xvJyxcbn1cblxuZXhwb3J0IGVudW0gRWRpdG9yTW9kZSB7XG4gIFZpc3VhbCA9ICd2aXN1YWwnLFxuICBNUUwgPSAnbXFsJyxcbn1cblxuZXhwb3J0IGVudW0gUHJlcHJvY2Vzc29yVHlwZSB7XG4gIE5vbmUgPSAnbm9uZScsXG4gIFJhdGUgPSAncmF0ZScsXG4gIERlbHRhID0gJ2RlbHRhJyxcbn1cblxuZXhwb3J0IGVudW0gTWV0cmljS2luZCB7XG4gIE1FVFJJQ19LSU5EX1VOU1BFQ0lGSUVEID0gJ01FVFJJQ19LSU5EX1VOU1BFQ0lGSUVEJyxcbiAgR0FVR0UgPSAnR0FVR0UnLFxuICBERUxUQSA9ICdERUxUQScsXG4gIENVTVVMQVRJVkUgPSAnQ1VNVUxBVElWRScsXG59XG5cbmV4cG9ydCBlbnVtIFZhbHVlVHlwZXMge1xuICBWQUxVRV9UWVBFX1VOU1BFQ0lGSUVEID0gJ1ZBTFVFX1RZUEVfVU5TUEVDSUZJRUQnLFxuICBCT09MID0gJ0JPT0wnLFxuICBJTlQ2NCA9ICdJTlQ2NCcsXG4gIERPVUJMRSA9ICdET1VCTEUnLFxuICBTVFJJTkcgPSAnU1RSSU5HJyxcbiAgRElTVFJJQlVUSU9OID0gJ0RJU1RSSUJVVElPTicsXG4gIE1PTkVZID0gJ01PTkVZJyxcbn1cblxuZXhwb3J0IGVudW0gQWxpZ25tZW50VHlwZXMge1xuICBBTElHTl9ERUxUQSA9ICdBTElHTl9ERUxUQScsXG4gIEFMSUdOX1JBVEUgPSAnQUxJR05fUkFURScsXG4gIEFMSUdOX0lOVEVSUE9MQVRFID0gJ0FMSUdOX0lOVEVSUE9MQVRFJyxcbiAgQUxJR05fTkVYVF9PTERFUiA9ICdBTElHTl9ORVhUX09MREVSJyxcbiAgQUxJR05fTUlOID0gJ0FMSUdOX01JTicsXG4gIEFMSUdOX01BWCA9ICdBTElHTl9NQVgnLFxuICBBTElHTl9NRUFOID0gJ0FMSUdOX01FQU4nLFxuICBBTElHTl9DT1VOVCA9ICdBTElHTl9DT1VOVCcsXG4gIEFMSUdOX1NVTSA9ICdBTElHTl9TVU0nLFxuICBBTElHTl9TVERERVYgPSAnQUxJR05fU1REREVWJyxcbiAgQUxJR05fQ09VTlRfVFJVRSA9ICdBTElHTl9DT1VOVF9UUlVFJyxcbiAgQUxJR05fQ09VTlRfRkFMU0UgPSAnQUxJR05fQ09VTlRfRkFMU0UnLFxuICBBTElHTl9GUkFDVElPTl9UUlVFID0gJ0FMSUdOX0ZSQUNUSU9OX1RSVUUnLFxuICBBTElHTl9QRVJDRU5USUxFXzk5ID0gJ0FMSUdOX1BFUkNFTlRJTEVfOTknLFxuICBBTElHTl9QRVJDRU5USUxFXzk1ID0gJ0FMSUdOX1BFUkNFTlRJTEVfOTUnLFxuICBBTElHTl9QRVJDRU5USUxFXzUwID0gJ0FMSUdOX1BFUkNFTlRJTEVfNTAnLFxuICBBTElHTl9QRVJDRU5USUxFXzA1ID0gJ0FMSUdOX1BFUkNFTlRJTEVfMDUnLFxuICBBTElHTl9QRVJDRU5UX0NIQU5HRSA9ICdBTElHTl9QRVJDRU5UX0NIQU5HRScsXG4gIEFMSUdOX05PTkUgPSAnQUxJR05fTk9ORScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVF1ZXJ5IHtcbiAgcHJvamVjdE5hbWU6IHN0cmluZztcbiAgcGVyU2VyaWVzQWxpZ25lcj86IHN0cmluZztcbiAgYWxpZ25tZW50UGVyaW9kPzogc3RyaW5nO1xuICBhbGlhc0J5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldHJpY1F1ZXJ5IGV4dGVuZHMgQmFzZVF1ZXJ5IHtcbiAgZWRpdG9yTW9kZTogRWRpdG9yTW9kZTtcbiAgbWV0cmljVHlwZTogc3RyaW5nO1xuICBjcm9zc1Nlcmllc1JlZHVjZXI6IHN0cmluZztcbiAgZ3JvdXBCeXM/OiBzdHJpbmdbXTtcbiAgZmlsdGVycz86IHN0cmluZ1tdO1xuICBtZXRyaWNLaW5kPzogTWV0cmljS2luZDtcbiAgdmFsdWVUeXBlPzogc3RyaW5nO1xuICB2aWV3Pzogc3RyaW5nO1xuICBxdWVyeTogc3RyaW5nO1xuICBwcmVwcm9jZXNzb3I/OiBQcmVwcm9jZXNzb3JUeXBlO1xuICAvLyBUbyBkaXNhYmxlIHRoZSBncmFwaFBlcmlvZCwgaXQgc2hvdWxkIGV4cGxpY3RseSBiZSBzZXQgdG8gJ2Rpc2FibGVkJ1xuICBncmFwaFBlcmlvZD86ICdkaXNhYmxlZCcgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5ub3RhdGlvbk1ldHJpY1F1ZXJ5IGV4dGVuZHMgTWV0cmljUXVlcnkge1xuICB0aXRsZT86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTTE9RdWVyeSBleHRlbmRzIEJhc2VRdWVyeSB7XG4gIHNlbGVjdG9yTmFtZTogc3RyaW5nO1xuICBzZXJ2aWNlSWQ6IHN0cmluZztcbiAgc2VydmljZU5hbWU6IHN0cmluZztcbiAgc2xvSWQ6IHN0cmluZztcbiAgc2xvTmFtZTogc3RyaW5nO1xuICBnb2FsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkTW9uaXRvcmluZ1F1ZXJ5IGV4dGVuZHMgRGF0YVF1ZXJ5IHtcbiAgZGF0YXNvdXJjZUlkPzogbnVtYmVyOyAvLyBTaG91bGQgbm90IGJlIG5lY2Vzc2FyeSBhbnltb3JlXG4gIHF1ZXJ5VHlwZTogUXVlcnlUeXBlO1xuICBtZXRyaWNRdWVyeTogTWV0cmljUXVlcnkgfCBBbm5vdGF0aW9uTWV0cmljUXVlcnk7XG4gIHNsb1F1ZXJ5PzogU0xPUXVlcnk7XG4gIGludGVydmFsTXM6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkTW9uaXRvcmluZ09wdGlvbnMgZXh0ZW5kcyBEYXRhU291cmNlSnNvbkRhdGEge1xuICBkZWZhdWx0UHJvamVjdD86IHN0cmluZztcbiAgZ2NlRGVmYXVsdFByb2plY3Q/OiBzdHJpbmc7XG4gIGF1dGhlbnRpY2F0aW9uVHlwZTogR29vZ2xlQXV0aFR5cGU7XG4gIGNsaWVudEVtYWlsPzogc3RyaW5nO1xuICB0b2tlblVyaT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZE1vbml0b3JpbmdTZWN1cmVKc29uRGF0YSB7XG4gIHByaXZhdGVLZXk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVnYWN5Q2xvdWRNb25pdG9yaW5nQW5ub3RhdGlvblF1ZXJ5IHtcbiAgcHJvamVjdE5hbWU6IHN0cmluZztcbiAgbWV0cmljVHlwZTogc3RyaW5nO1xuICByZWZJZDogc3RyaW5nO1xuICBmaWx0ZXJzOiBzdHJpbmdbXTtcbiAgbWV0cmljS2luZDogTWV0cmljS2luZDtcbiAgdmFsdWVUeXBlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeU1ldGEge1xuICBhbGlnbm1lbnRQZXJpb2Q6IHN0cmluZztcbiAgcmF3UXVlcnk6IHN0cmluZztcbiAgcmF3UXVlcnlTdHJpbmc6IHN0cmluZztcbiAgbWV0cmljTGFiZWxzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH07XG4gIHJlc291cmNlTGFiZWxzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH07XG4gIHJlc291cmNlVHlwZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldHJpY0Rlc2NyaXB0b3Ige1xuICB2YWx1ZVR5cGU6IHN0cmluZztcbiAgbWV0cmljS2luZDogTWV0cmljS2luZDtcbiAgdHlwZTogc3RyaW5nO1xuICB1bml0OiBzdHJpbmc7XG4gIHNlcnZpY2U6IHN0cmluZztcbiAgc2VydmljZVNob3J0TmFtZTogc3RyaW5nO1xuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnQge1xuICB0eXBlOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyIHtcbiAga2V5OiBzdHJpbmc7XG4gIG9wZXJhdG9yOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGNvbmRpdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21NZXRhRGF0YSB7XG4gIHBlclNlcmllc0FsaWduZXI/OiBzdHJpbmc7XG4gIGFsaWdubWVudFBlcmlvZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3N0UmVzcG9uc2Uge1xuICByZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xufVxuIiwiaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ3VzdG9tVmFyaWFibGVTdXBwb3J0LCBEYXRhUXVlcnlSZXF1ZXN0LCBEYXRhUXVlcnlSZXNwb25zZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nTWV0cmljRmluZFF1ZXJ5IGZyb20gJy4vQ2xvdWRNb25pdG9yaW5nTWV0cmljRmluZFF1ZXJ5JztcbmltcG9ydCB7IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnlFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvVmFyaWFibGVRdWVyeUVkaXRvcic7XG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVTdXBwb3J0IGV4dGVuZHMgQ3VzdG9tVmFyaWFibGVTdXBwb3J0PFxuICBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlLFxuICBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5XG4+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBtZXRyaWNGaW5kUXVlcnk6IENsb3VkTW9uaXRvcmluZ01ldHJpY0ZpbmRRdWVyeTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWV0cmljRmluZFF1ZXJ5ID0gbmV3IENsb3VkTW9uaXRvcmluZ01ldHJpY0ZpbmRRdWVyeShkYXRhc291cmNlKTtcbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZWRpdG9yID0gQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeUVkaXRvcjtcblxuICBxdWVyeShyZXF1ZXN0OiBEYXRhUXVlcnlSZXF1ZXN0PENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIGNvbnN0IGV4ZWN1dGVPYnNlcnZhYmxlID0gZnJvbSh0aGlzLm1ldHJpY0ZpbmRRdWVyeS5leGVjdXRlKHJlcXVlc3QudGFyZ2V0c1swXSkpO1xuICAgIHJldHVybiBmcm9tKHRoaXMuZGF0YXNvdXJjZS5lbnN1cmVHQ0VEZWZhdWx0UHJvamVjdCgpKS5waXBlKFxuICAgICAgbWVyZ2VNYXAoKCkgPT4gZXhlY3V0ZU9ic2VydmFibGUpLFxuICAgICAgbWFwKChkYXRhKSA9PiAoeyBkYXRhIH0pKVxuICAgICk7XG4gIH1cbn1cbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBkYXRhID0gcmVxdWlyZSgnQGdyYWZhbmEvZGF0YScpO1xudmFyIHVpID0gcmVxdWlyZSgnQGdyYWZhbmEvdWknKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgbG9kYXNoID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdExlZ2FjeSAoZSkgeyByZXR1cm4gZSAmJiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxuXG52YXIgUmVhY3RfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KFJlYWN0KTtcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbnZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XG5cbnZhciBURVNUX0lEUyA9IHtcclxuICAgIGhlbHBCb3g6ICdDb25maWd1cmF0aW9uIGhlbHAgYm94JyxcclxuICAgIGRyb3Bab25lOiAnQ29uZmlndXJhdGlvbiBkcm9wIHpvbmUnLFxyXG4gICAgcGFzdGVBcmVhOiAnQ29uZmlndXJhdGlvbiB0ZXh0IGFyZWEnLFxyXG4gICAgcGFzdGVKd3RCdXR0b246ICdQYXN0ZSBKV1QgYnV0dG9uJyxcclxuICAgIHJlc2V0Snd0QnV0dG9uOiAnUmVzZXQgSldUIGJ1dHRvbicsXHJcbiAgICBqd3RGb3JtOiAnSldUIGZvcm0nLFxyXG4gICAgYXV0aFR5cGVCdXR0b25KV1Q6ICdKV1QgYnV0dG9uJyxcclxuICAgIGF1dGhUeXBlQnV0dG9uR0NFOiAnR0NFIGJ1dHRvbicsXHJcbn07XG5cbnZhciBjb25maWdLZXlzID0gWydwcml2YXRlX2tleScsICd0b2tlbl91cmknLCAnY2xpZW50X2VtYWlsJywgJ3Byb2plY3RfaWQnXTtcclxudmFyIElOVkFMSURfSldUX1RPS0VOX0VSUk9SID0gJ0ludmFsaWQgSldUIHRva2VuJztcclxudmFyIEpXVENvbmZpZ0VkaXRvciA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIG9uQ2hhbmdlID0gX2Eub25DaGFuZ2U7XHJcbiAgICB2YXIgX2IgPSBfX3JlYWQoUmVhY3QudXNlU3RhdGUoKSwgMiksIGVycm9yID0gX2JbMF0sIHNldEVycm9yID0gX2JbMV07XHJcbiAgICB2YXIgX2MgPSBfX3JlYWQoUmVhY3QudXNlU3RhdGUobnVsbCksIDIpLCBpc1Bhc3RpbmcgPSBfY1swXSwgc2V0SXNQYXN0aW5nID0gX2NbMV07XHJcbiAgICB2YXIgdGhlbWUgPSB1aS51c2VUaGVtZTIoKTtcclxuICAgIHZhciBvblBhc3RlQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgICAgIHNldElzUGFzdGluZyh0cnVlKTtcclxuICAgIH0sIFtzZXRJc1Bhc3RpbmddKTtcclxuICAgIHZhciBvblVwbG9hZENsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBzZXRJc1Bhc3RpbmcobnVsbCk7XHJcbiAgICAgICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB9LCBbc2V0SXNQYXN0aW5nXSk7XHJcbiAgICB2YXIgcmVhZEFuZFZhbGlkYXRlSldUID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgICAgdmFyIGp3dCA9IHZvaWQgMDtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGp3dCA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihJTlZBTElEX0pXVF9UT0tFTl9FUlJPUik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB2YWxpZGF0ZUpXVChqd3QpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZUtleTogand0LnByaXZhdGVfa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuVXJpOiBqd3QudG9rZW5fdXJpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudEVtYWlsOiBqd3QuY2xpZW50X2VtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJZDogand0LnByb2plY3RfaWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKHZhbGlkYXRpb24uZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NldEVycm9yLCBvbkNoYW5nZV0pO1xyXG4gICAgcmV0dXJuIChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuRmllbGQsIHsgbGFiZWw6IFwiSldUIHRva2VuXCIsIGludmFsaWQ6IEJvb2xlYW4oZXJyb3IpLCBkZXNjcmlwdGlvbjogaXNQYXN0aW5nID8gJ1Bhc3RlIEpXVCB0b2tlbiBiZWxvdycgOiAnVXBsb2FkIG9yIHBhc3RlIEdvb2dsZSBKV1QgdG9rZW4nLCBlcnJvcjogZXJyb3IgfSxcclxuICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgaXNQYXN0aW5nICE9PSB0cnVlICYmIChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IFwiZGF0YS10ZXN0aWRcIjogVEVTVF9JRFMuZHJvcFpvbmUgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5GaWxlRHJvcHpvbmUsIHsgb3B0aW9uczogeyBtdWx0aXBsZTogZmFsc2UsIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIHJlYWRBczogXCJyZWFkQXNUZXh0XCIsIG9uTG9hZDogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEFuZFZhbGlkYXRlSldUKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1Bhc3RpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IG1hcmdpbjogMCwgZm9udFNpemU6IFwiXCIgKyB0aGVtZS50eXBvZ3JhcGh5Lmg0LmZvbnRTaXplLCB0ZXh0QWxpZ246ICdjZW50ZXInIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRHJvcCB0aGUgR29vZ2xlIEpXVCBmaWxlIGhlcmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuTGlua0J1dHRvbiwgeyBmaWxsOiBcIm91dGxpbmVcIiB9LCBcIkNsaWNrIHRvIGJyb3dzZSBmaWxlc1wiKSkpKSksXHJcbiAgICAgICAgICAgICAgICBpc1Bhc3RpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuVGV4dEFyZWEsIHsgXCJkYXRhLXRlc3RpZFwiOiBURVNUX0lEUy5wYXN0ZUFyZWEsIGF1dG9Gb2N1czogdHJ1ZSwgaW52YWxpZDogQm9vbGVhbihlcnJvciksIHBsYWNlaG9sZGVyOiBcIlBhc3RlIEdvb2dsZSBKV1QgdG9rZW4gaGVyZVwiLCBvbkJsdXI6IGZ1bmN0aW9uIChlKSB7IHJldHVybiByZWFkQW5kVmFsaWRhdGVKV1QoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTsgfSwgcm93czogMTIgfSkpKSksXHJcbiAgICAgICAgIWlzUGFzdGluZyAmJiAoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuRmllbGQsIG51bGwsXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkJ1dHRvbiwgeyBcImRhdGEtdGVzdGlkXCI6IFRFU1RfSURTLnBhc3RlSnd0QnV0dG9uLCB0eXBlOiBcImJ1dHRvblwiLCBmaWxsOiBcIm91dGxpbmVcIiwgc3R5bGU6IHsgY29sb3I6IFwiXCIgKyB0aGVtZS5jb2xvcnMucHJpbWFyeS50ZXh0IH0sIG9uQ2xpY2s6IG9uUGFzdGVDbGljayB9LCBcIlBhc3RlIEpXVCBUb2tlblwiKSkpLFxyXG4gICAgICAgIGlzUGFzdGluZyAmJiBlcnJvciAmJiAoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuRmllbGQsIG51bGwsXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkJ1dHRvbiwgeyB0eXBlOiBcImJ1dHRvblwiLCBmaWxsOiBcIm91dGxpbmVcIiwgc3R5bGU6IHsgY29sb3I6IFwiXCIgKyB0aGVtZS5jb2xvcnMucHJpbWFyeS50ZXh0IH0sIG9uQ2xpY2s6IG9uVXBsb2FkQ2xpY2sgfSwgXCJVcGxvYWQgSldUIFRva2VuXCIpKSkpKTtcclxufTtcclxudmFyIHZhbGlkYXRlSldUID0gZnVuY3Rpb24gKGpzb24pIHtcclxuICAgIGlmICghbG9kYXNoLmlzT2JqZWN0KGpzb24pKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgaXNWYWxpZDogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBKV1QgdG9rZW4nIH07XHJcbiAgICB9XHJcbiAgICB2YXIgbWlzc2luZ0tleXMgPSBjb25maWdLZXlzLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAhanNvbltrZXldOyB9KTtcclxuICAgIGlmIChtaXNzaW5nS2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgaXNWYWxpZDogZmFsc2UsIGVycm9yOiBcIk1pc3Npbmcga2V5czogXCIgKyBtaXNzaW5nS2V5cy5qb2luKCcsICcpIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBpc1ZhbGlkOiB0cnVlIH07XHJcbn07XG5cbnZhciBKV1RGb3JtID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IF9hLm9wdGlvbnMsIG9uUmVzZXQgPSBfYS5vblJlc2V0LCBvbkNoYW5nZSA9IF9hLm9uQ2hhbmdlO1xyXG4gICAgdmFyIG9uUmVzZXRQcmVzcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uUmVzZXQobnVsbCk7IH07XHJcbiAgICByZXR1cm4gKFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgXCJkYXRhLXRlc3RpZFwiOiBURVNUX0lEUy5qd3RGb3JtIH0sXHJcbiAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuRmllbGQsIHsgbGFiZWw6IFwiUHJvamVjdCBJRFwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLklucHV0LCB7IGlkOiBcImRlZmF1bHRQcm9qZWN0XCIsIHdpZHRoOiA2MCwgdmFsdWU6IG9wdGlvbnMuZGVmYXVsdFByb2plY3QgfHwgJycsIG9uQ2hhbmdlOiBvbkNoYW5nZSgnZGVmYXVsdFByb2plY3QnKSB9KSksXHJcbiAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuRmllbGQsIHsgbGFiZWw6IFwiQ2xpZW50IGVtYWlsXCIgfSxcclxuICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuSW5wdXQsIHsgd2lkdGg6IDYwLCBpZDogXCJjbGllbnRFbWFpbFwiLCB2YWx1ZTogb3B0aW9ucy5jbGllbnRFbWFpbCB8fCAnJywgb25DaGFuZ2U6IG9uQ2hhbmdlKCdjbGllbnRFbWFpbCcpIH0pKSxcclxuICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5GaWVsZCwgeyBsYWJlbDogXCJUb2tlbiBVUklcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5JbnB1dCwgeyB3aWR0aDogNjAsIGlkOiBcInRva2VuVXJpXCIsIHZhbHVlOiBvcHRpb25zLnRva2VuVXJpIHx8ICcnLCBvbkNoYW5nZTogb25DaGFuZ2UoJ3Rva2VuVXJpJykgfSkpLFxyXG4gICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkZpZWxkLCB7IGxhYmVsOiBcIlByaXZhdGUga2V5XCIsIGRpc2FibGVkOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLklucHV0LCB7IHdpZHRoOiA2MCwgaWQ6IFwicHJpdmF0ZUtleVwiLCByZWFkT25seTogdHJ1ZSwgcGxhY2Vob2xkZXI6IFwiUHJpdmF0ZSBrZXkgY29uZmlndXJlZFwiLCBhZGRvbkFmdGVyOiBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5Ub29sdGlwLCB7IGNvbnRlbnQ6IFwiQ2xpY2sgdG8gY2xlYXIgdGhlIHVwbG9hZGVkIEpXVCB0b2tlbiBhbmQgdXBsb2FkIGEgbmV3IG9uZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuQnV0dG9uLCB7IFwiZGF0YS10ZXN0aWRcIjogVEVTVF9JRFMucmVzZXRKd3RCdXR0b24sIGljb246IFwic3luY1wiLCBzaXplOiBcInhzXCIsIG9uQ2xpY2s6IG9uUmVzZXRQcmVzcywgZmlsbDogXCJvdXRsaW5lXCIgfSwgXCJSZXNldCB0b2tlblwiKSkgfSkpKSk7XHJcbn07XG5cbmV4cG9ydHMuR29vZ2xlQXV0aFR5cGUgPSB2b2lkIDA7XHJcbihmdW5jdGlvbiAoR29vZ2xlQXV0aFR5cGUpIHtcclxuICAgIEdvb2dsZUF1dGhUeXBlW1wiSldUXCJdID0gXCJqd3RcIjtcclxuICAgIEdvb2dsZUF1dGhUeXBlW1wiR0NFXCJdID0gXCJnY2VcIjtcclxufSkoZXhwb3J0cy5Hb29nbGVBdXRoVHlwZSB8fCAoZXhwb3J0cy5Hb29nbGVBdXRoVHlwZSA9IHt9KSk7XG5cbnZhciBHT09HTEVfQVVUSF9UWVBFX09QVElPTlMgPSBbXHJcbiAgICB7IGxhYmVsOiAnR29vZ2xlIEpXVCBGaWxlJywgdmFsdWU6IGV4cG9ydHMuR29vZ2xlQXV0aFR5cGUuSldULCBhcmlhTGFiZWw6IFRFU1RfSURTLmF1dGhUeXBlQnV0dG9uSldUIH0sXHJcbiAgICB7IGxhYmVsOiAnR0NFIERlZmF1bHQgU2VydmljZSBBY2NvdW50JywgdmFsdWU6IGV4cG9ydHMuR29vZ2xlQXV0aFR5cGUuR0NFLCBhcmlhTGFiZWw6IFRFU1RfSURTLmF1dGhUeXBlQnV0dG9uR0NFIH0sXHJcbl07XG5cbnZhciBDb25uZWN0aW9uQ29uZmlnID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsIG9uT3B0aW9uc0NoYW5nZSA9IHByb3BzLm9uT3B0aW9uc0NoYW5nZTtcclxuICAgIHZhciBqc29uRGF0YSA9IG9wdGlvbnMuanNvbkRhdGEsIHNlY3VyZUpzb25GaWVsZHMgPSBvcHRpb25zLnNlY3VyZUpzb25GaWVsZHMsIHNlY3VyZUpzb25EYXRhID0gb3B0aW9ucy5zZWN1cmVKc29uRGF0YTtcclxuICAgIGlmICghanNvbkRhdGEuYXV0aGVudGljYXRpb25UeXBlKSB7XHJcbiAgICAgICAganNvbkRhdGEuYXV0aGVudGljYXRpb25UeXBlID0gZXhwb3J0cy5Hb29nbGVBdXRoVHlwZS5KV1Q7XHJcbiAgICB9XHJcbiAgICB2YXIgaXNKV1QgPSBqc29uRGF0YS5hdXRoZW50aWNhdGlvblR5cGUgPT09IGV4cG9ydHMuR29vZ2xlQXV0aFR5cGUuSldUIHx8IGpzb25EYXRhLmF1dGhlbnRpY2F0aW9uVHlwZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgdmFyIG9uQXV0aFR5cGVDaGFuZ2UgPSBmdW5jdGlvbiAoYXV0aGVudGljYXRpb25UeXBlKSB7XHJcbiAgICAgICAgb25PcHRpb25zQ2hhbmdlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBqc29uRGF0YTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMuanNvbkRhdGEpLCB7IGF1dGhlbnRpY2F0aW9uVHlwZTogYXV0aGVudGljYXRpb25UeXBlIH0pIH0pKTtcclxuICAgIH07XHJcbiAgICB2YXIgaGFzSldUQ29uZmlndXJlZCA9IEJvb2xlYW4oc2VjdXJlSnNvbkZpZWxkcyAmJlxyXG4gICAgICAgIHNlY3VyZUpzb25GaWVsZHMucHJpdmF0ZUtleSAmJlxyXG4gICAgICAgIGpzb25EYXRhLmNsaWVudEVtYWlsICYmXHJcbiAgICAgICAganNvbkRhdGEuZGVmYXVsdFByb2plY3QgJiZcclxuICAgICAgICBqc29uRGF0YS50b2tlblVyaSk7XHJcbiAgICB2YXIgb25SZXNldEFwaUtleSA9IGZ1bmN0aW9uIChqc29uRGF0YSkge1xyXG4gICAgICAgIHZhciBuZXh0U2VjdXJlSnNvbkRhdGEgPSBfX2Fzc2lnbih7fSwgc2VjdXJlSnNvbkRhdGEpO1xyXG4gICAgICAgIHZhciBuZXh0SnNvbkRhdGEgPSAhanNvbkRhdGEgPyBfX2Fzc2lnbih7fSwgb3B0aW9ucy5qc29uRGF0YSkgOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucy5qc29uRGF0YSksIGpzb25EYXRhKTtcclxuICAgICAgICBkZWxldGUgbmV4dEpzb25EYXRhLmNsaWVudEVtYWlsO1xyXG4gICAgICAgIGRlbGV0ZSBuZXh0SnNvbkRhdGEuZGVmYXVsdFByb2plY3Q7XHJcbiAgICAgICAgZGVsZXRlIG5leHRKc29uRGF0YS50b2tlblVyaTtcclxuICAgICAgICBkZWxldGUgbmV4dFNlY3VyZUpzb25EYXRhLnByaXZhdGVLZXk7XHJcbiAgICAgICAgb25PcHRpb25zQ2hhbmdlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBzZWN1cmVKc29uRGF0YTogbmV4dFNlY3VyZUpzb25EYXRhLCBqc29uRGF0YTogbmV4dEpzb25EYXRhIH0pKTtcclxuICAgIH07XHJcbiAgICB2YXIgb25KV1RGb3JtQ2hhbmdlID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZGF0YS5vblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvbihwcm9wcywga2V5KTsgfTtcclxuICAgIHJldHVybiAoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkZpZWxkU2V0LCB7IGxhYmVsOiBcIkF1dGhlbnRpY2F0aW9uXCIgfSxcclxuICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuRmllbGQsIHsgbGFiZWw6IFwiQXV0aGVudGljYXRpb24gdHlwZVwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5SYWRpb0J1dHRvbkdyb3VwLCB7IG9wdGlvbnM6IEdPT0dMRV9BVVRIX1RZUEVfT1BUSU9OUywgdmFsdWU6IGpzb25EYXRhLmF1dGhlbnRpY2F0aW9uVHlwZSB8fCBleHBvcnRzLkdvb2dsZUF1dGhUeXBlLkpXVCwgb25DaGFuZ2U6IG9uQXV0aFR5cGVDaGFuZ2UgfSkpKSxcclxuICAgICAgICBpc0pXVCAmJiAoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuRmllbGRTZXQsIHsgbGFiZWw6IFwiSldUIEtleSBEZXRhaWxzXCIgfSxcclxuICAgICAgICAgICAgaGFzSldUQ29uZmlndXJlZCA/IChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChKV1RGb3JtLCB7IG9wdGlvbnM6IG9wdGlvbnMuanNvbkRhdGEsIG9uUmVzZXQ6IG9uUmVzZXRBcGlLZXksIG9uQ2hhbmdlOiBvbkpXVEZvcm1DaGFuZ2UgfSkpIDogKFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEpXVENvbmZpZ0VkaXRvciwgeyBvbkNoYW5nZTogZnVuY3Rpb24gKGp3dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uT3B0aW9uc0NoYW5nZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgc2VjdXJlSnNvbkZpZWxkczogX19hc3NpZ24oX19hc3NpZ24oe30sIHNlY3VyZUpzb25GaWVsZHMpLCB7IHByaXZhdGVLZXk6IHRydWUgfSksIHNlY3VyZUpzb25EYXRhOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc2VjdXJlSnNvbkRhdGEpLCB7IHByaXZhdGVLZXk6IGp3dC5wcml2YXRlS2V5IH0pLCBqc29uRGF0YTogX19hc3NpZ24oX19hc3NpZ24oe30sIGpzb25EYXRhKSwgeyBjbGllbnRFbWFpbDogand0LmNsaWVudEVtYWlsLCBkZWZhdWx0UHJvamVjdDogand0LnByb2plY3RJZCwgdG9rZW5Vcmk6IGp3dC50b2tlblVyaSB9KSB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IH0pKSxcclxuICAgICAgICAgICAgJyAnKSksXHJcbiAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ3JhZmFuYS1pbmZvLWJveFwiLCBzdHlsZTogeyBtYXJnaW5Ub3A6ICcxNnB4JyB9LCBcImRhdGEtdGVzdGlkXCI6IFRFU1RfSURTLmhlbHBCb3ggfSxcclxuICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICBcIkRvblxcdTIwMTl0IGtub3cgaG93IHRvIGdldCBhIHNlcnZpY2UgYWNjb3VudCBrZXkgZmlsZSBvciBjcmVhdGUgYSBzZXJ2aWNlIGFjY291bnQ/IFJlYWQgbW9yZVwiLFxyXG4gICAgICAgICAgICAgICAgJyAnLFxyXG4gICAgICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcImV4dGVybmFsLWxpbmtcIiwgdGFyZ2V0OiBcIl9ibGFua1wiLCByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLCBocmVmOiBcImh0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy9ncmFmYW5hL2xhdGVzdC9kYXRhc291cmNlcy9nb29nbGUtY2xvdWQtbW9uaXRvcmluZy9nb29nbGUtYXV0aGVudGljYXRpb24vXCIgfSwgXCJpbiB0aGUgZG9jdW1lbnRhdGlvbi5cIikpKSxcclxuICAgICAgICAhaXNKV1QgJiYgKFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkFsZXJ0LCB7IHRpdGxlOiBcIlwiLCBzZXZlcml0eTogXCJpbmZvXCIgfSwgXCJWZXJpZnkgR0NFIGRlZmF1bHQgc2VydmljZSBhY2NvdW50IGJ5IGNsaWNraW5nIFNhdmUgJiBUZXN0XCIpKSkpO1xyXG59O1xuXG5leHBvcnRzLkNvbm5lY3Rpb25Db25maWcgPSBDb25uZWN0aW9uQ29uZmlnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZGV2ZWxvcG1lbnQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2luZGV4LnByb2R1Y3Rpb24uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2luZGV4LmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwibmFtZXMiOlsiaXNTdHJpbmciLCJBTElHTk1FTlRfUEVSSU9EUyIsIlNFTEVDVE9SUyIsImV4dHJhY3RTZXJ2aWNlc0Zyb21NZXRyaWNEZXNjcmlwdG9ycyIsImdldEFnZ3JlZ2F0aW9uT3B0aW9uc0J5TWV0cmljIiwiZ2V0QWxpZ25tZW50T3B0aW9uc0J5TWV0cmljIiwiZ2V0TGFiZWxLZXlzIiwiZ2V0TWV0cmljVHlwZXNCeVNlcnZpY2UiLCJNZXRyaWNGaW5kUXVlcnlUeXBlcyIsIkNsb3VkTW9uaXRvcmluZ01ldHJpY0ZpbmRRdWVyeSIsImNvbnN0cnVjdG9yIiwiZGF0YXNvdXJjZSIsImV4ZWN1dGUiLCJxdWVyeSIsInByb2plY3ROYW1lIiwiZ2V0RGVmYXVsdFByb2plY3QiLCJzZWxlY3RlZFF1ZXJ5VHlwZSIsIlByb2plY3RzIiwiaGFuZGxlUHJvamVjdHNRdWVyeSIsIlNlcnZpY2VzIiwiaGFuZGxlU2VydmljZVF1ZXJ5IiwiTWV0cmljVHlwZXMiLCJoYW5kbGVNZXRyaWNUeXBlc1F1ZXJ5IiwiTGFiZWxLZXlzIiwiaGFuZGxlTGFiZWxLZXlzUXVlcnkiLCJMYWJlbFZhbHVlcyIsImhhbmRsZUxhYmVsVmFsdWVzUXVlcnkiLCJSZXNvdXJjZVR5cGVzIiwiaGFuZGxlUmVzb3VyY2VUeXBlUXVlcnkiLCJBbGlnbmVycyIsImhhbmRsZUFsaWduZXJzUXVlcnkiLCJBbGlnbm1lbnRQZXJpb2RzIiwiaGFuZGxlQWxpZ25tZW50UGVyaW9kUXVlcnkiLCJBZ2dyZWdhdGlvbnMiLCJoYW5kbGVBZ2dyZWdhdGlvblF1ZXJ5IiwiU0xPU2VydmljZXMiLCJoYW5kbGVTTE9TZXJ2aWNlc1F1ZXJ5IiwiU0xPIiwiaGFuZGxlU0xPUXVlcnkiLCJTZWxlY3RvcnMiLCJoYW5kbGVTZWxlY3RvclF1ZXJ5IiwiZXJyb3IiLCJjb25zb2xlIiwicHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsIm1hcCIsInMiLCJ0ZXh0IiwibGFiZWwiLCJ2YWx1ZSIsImV4cGFuZGFibGUiLCJtZXRyaWNEZXNjcmlwdG9ycyIsImdldE1ldHJpY1R5cGVzIiwic2VydmljZXMiLCJzZXJ2aWNlU2hvcnROYW1lIiwic2VydmljZSIsInNlbGVjdGVkU2VydmljZSIsInRlbXBsYXRlU3J2IiwicmVwbGFjZSIsImRpc3BsYXlOYW1lIiwidHlwZSIsInNlbGVjdGVkTWV0cmljVHlwZSIsImxhYmVsS2V5cyIsInRvRmluZFF1ZXJ5UmVzdWx0IiwibGFiZWxLZXkiLCJyZWZJZCIsImxhYmVscyIsImdldExhYmVscyIsImdyb3VwQnlzIiwiY3Jvc3NTZXJpZXNSZWR1Y2VyIiwiaW50ZXJwb2xhdGVkS2V5IiwidmFsdWVzIiwiaGFzT3duUHJvcGVydHkiLCJkZXNjcmlwdG9yIiwiZmluZCIsIm0iLCJ2YWx1ZVR5cGUiLCJtZXRyaWNLaW5kIiwiZ2V0U0xPU2VydmljZXMiLCJzZWxlY3RlZFNMT1NlcnZpY2UiLCJzbG9zIiwiZ2V0U2VydmljZUxldmVsT2JqZWN0aXZlcyIsIngiLCJBbm5vdGF0aW9uUXVlcnlFZGl0b3IiLCJBbGlnbm1lbnRUeXBlcyIsIkVkaXRvck1vZGUiLCJNZXRyaWNLaW5kIiwiUXVlcnlUeXBlIiwiaXNMZWdhY3lDbG91ZE1vbml0b3JpbmdBbm5vdGF0aW9uIiwidGFyZ2V0IiwidGl0bGUiLCJ1bmRlZmluZWQiLCJDbG91ZE1vbml0b3JpbmdBbm5vdGF0aW9uU3VwcG9ydCIsImRzIiwicHJlcGFyZUFubm90YXRpb24iLCJlbmFibGUiLCJuYW1lIiwiaWNvbkNvbG9yIiwicmVzdWx0IiwiaW50ZXJ2YWxNcyIsInF1ZXJ5VHlwZSIsIk1FVFJJQ1MiLCJtZXRyaWNRdWVyeSIsImVkaXRvck1vZGUiLCJWaXN1YWwiLCJtZXRyaWNUeXBlIiwiZmlsdGVycyIsIkdBVUdFIiwicGVyU2VyaWVzQWxpZ25lciIsIkFMSUdOX05PTkUiLCJwcmVwYXJlUXVlcnkiLCJhbm5vIiwiUXVlcnlFZGl0b3IiLCJSZWFjdCIsInVzZU1lbW8iLCJTZWxlY3QiLCJRdWVyeUVkaXRvckZpZWxkIiwiQWdncmVnYXRpb24iLCJwcm9wcyIsImFnZ09wdGlvbnMiLCJ1c2VBZ2dyZWdhdGlvbk9wdGlvbnNCeU1ldHJpYyIsInNlbGVjdGVkIiwidXNlU2VsZWN0ZWRGcm9tT3B0aW9ucyIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsInRlbXBsYXRlVmFyaWFibGVPcHRpb25zIiwiZXhwYW5kZWQiLCJtZXRyaWNEZXNjcmlwdG9yIiwiYSIsImFsbE9wdGlvbnMiLCJkZWJvdW5jZSIsInVzZVN0YXRlIiwiSW5wdXQiLCJJTlBVVF9XSURUSCIsIlF1ZXJ5RWRpdG9yUm93IiwiQWxpYXNCeSIsImFsaWFzIiwic2V0QWxpYXMiLCJwcm9wYWdhdGVPbkNoYW5nZSIsImUiLCJTRUxFQ1RfV0lEVEgiLCJBbGlnbm1lbnRGdW5jdGlvbiIsIlBlcmlvZFNlbGVjdCIsIkFsaWdubWVudFBlcmlvZExhYmVsIiwiQWxpZ25tZW50IiwiY3VzdG9tTWV0YURhdGEiLCJhbGlnbm1lbnRQZXJpb2QiLCJwZXJpb2QiLCJnZXRBbGlnbm1lbnRQaWNrZXJEYXRhIiwiaW5wdXRJZCIsInBzYSIsInByZXByb2Nlc3NvciIsImFsaWduT3B0aW9ucyIsInJhbmdlVXRpbCIsIkFMSUdOTUVOVFMiLCJmb3JtYXRBbGlnbm1lbnRUZXh0IiwiYWxpZ25tZW50IiwiYXAiLCJzZWNvbmRzIiwicGFyc2VJbnQiLCJobXMiLCJzZWNvbmRzVG9IbXMiLCJ1c2VEZWJvdW5jZSIsInRvT3B0aW9uIiwiY29uZmlnIiwiTWV0cmljUXVlcnlFZGl0b3IiLCJFeHBlcmltZW50YWxNZXRyaWNRdWVyeUVkaXRvciIsIkFubm90YXRpb25zSGVscCIsImRlZmF1bHRRdWVyeSIsInZhcmlhYmxlT3B0aW9uR3JvdXAiLCJ2YXJpYWJsZU9wdGlvbnMiLCJvblJ1blF1ZXJ5IiwiZGF0YSIsIm1ldGEiLCJzZXJpZXMiLCJsZW5ndGgiLCJjdXN0b20iLCJzZXRUaXRsZSIsInNldFRleHQiLCJnZXRWYXJpYWJsZXMiLCJoYW5kbGVRdWVyeUNoYW5nZSIsImhhbmRsZVRpdGxlQ2hhbmdlIiwiaGFuZGxlVGV4dENoYW5nZSIsImZlYXR1cmVUb2dnbGVzIiwiY2xvdWRNb25pdG9yaW5nRXhwZXJpbWVudGFsVUkiLCJjc3MiLCJQdXJlQ29tcG9uZW50IiwiQ2xvdWRNb25pdG9yaW5nQ2hlYXRTaGVldCIsInJlbmRlciIsIkNvbm5lY3Rpb25Db25maWciLCJDb25maWdFZGl0b3IiLCJFZGl0b3JGaWVsZCIsIkVkaXRvclJvdyIsIkVkaXRvckZpZWxkR3JvdXAiLCJTdGFjayIsIkhvcml6b250YWxHcm91cCIsIlN3aXRjaCIsIkdSQVBIX1BFUklPRFMiLCJHcmFwaFBlcmlvZCIsImdyYXBoUGVyaW9kIiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJNdWx0aVNlbGVjdCIsIlNZU1RFTV9MQUJFTFMiLCJsYWJlbHNUb0dyb3VwZWRPcHRpb25zIiwiR3JvdXBCeSIsIm8iLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIkVkaXRvclJvd3MiLCJQcmVwcm9jZXNzb3JUeXBlIiwiVmFsdWVUeXBlcyIsIlByb2plY3QiLCJNUUxRdWVyeUVkaXRvciIsIlZpc3VhbE1ldHJpY1F1ZXJ5RWRpdG9yIiwiZGVmYXVsdFN0YXRlIiwiZGF0YVNvdXJjZSIsIkFMSUdOX01FQU4iLCJhbGlhc0J5IiwiTm9uZSIsIkVkaXRvciIsIm9uUXVlcnlDaGFuZ2UiLCJzdGF0ZSIsInNldFN0YXRlIiwidGhlbiIsInByZXZTdGF0ZSIsIm9uTWV0cmljVHlwZUNoYW5nZSIsIkRJU1RSSUJVVElPTiIsIlJhdGUiLCJNUUwiLCJxIiwibWVtbyIsInN0YXJ0Q2FzZSIsInVuaXFCeSIsImdldFNlbGVjdFN0eWxlcyIsInVzZVN0eWxlczIiLCJ1c2VUaGVtZTIiLCJNZXRyaWNzIiwic2V0TWV0cmljRGVzY3JpcHRvcnMiLCJzZXRNZXRyaWNEZXNjcmlwdG9yIiwibWV0cmljcyIsInNldE1ldHJpY3MiLCJzZXRTZXJ2aWNlcyIsInNldFNlcnZpY2UiLCJ0aGVtZSIsInNlbGVjdFN0eWxlcyIsImN1c3RvbVN0eWxlIiwiZ2V0U3R5bGVzIiwiY2hpbGRyZW4iLCJnZXRTZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IiLCJtZCIsImdldE1ldHJpY3NMaXN0Iiwic2VsZWN0ZWRNZXRyaWNEZXNjcmlwdG9yIiwibWV0cmljc0J5U2VydmljZSIsImZpbHRlciIsImNvbXBvbmVudCIsIm9wdGlvbkNvbXBvbmVudCIsIm9wdGlvbkRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJsb2FkTWV0cmljRGVzY3JpcHRvcnMiLCJnZXRTZXJ2aWNlc0xpc3QiLCJvblNlcnZpY2VDaGFuZ2UiLCJzb21lIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwiY3VycmVudCIsInNlbGVjdFdpZHRoIiwiZGlzYWJsZWQiLCJhbGlnbWVudFBlcmlvZHMiLCJ2aXNpYmxlT3B0aW9ucyIsImhpZGRlbiIsIlJhZGlvQnV0dG9uR3JvdXAiLCJOT05FX09QVElPTiIsIlByZXByb2Nlc3NvciIsInVzZU9wdGlvbnMiLCJDVU1VTEFUSVZFIiwiRGVsdGEiLCJFZGl0b3JIZWFkZXIiLCJGbGV4SXRlbSIsIklubGluZVNlbGVjdCIsIlFVRVJZX1RZUEVTIiwiRURJVE9SX01PREVTIiwiUXVlcnlIZWFkZXIiLCJzbG9RdWVyeSIsIkxhYmVsRmlsdGVyIiwibWV0cmljIiwiT2JqZWN0Iiwia2V5cyIsIklubGluZUZpZWxkIiwiSW5saW5lTGFiZWwiLCJJTk5FUl9MQUJFTF9XSURUSCIsIkxBQkVMX1dJRFRIIiwiVmFyaWFibGVRdWVyeUZpZWxkIiwiYWxsb3dDdXN0b21WYWx1ZSIsInRvb2x0aXAiLCJmaWxsQ29tcG9uZW50Iiwibm9GaWxsRW5kIiwibGFiZWxXaWR0aCIsImh0bWxGb3IiLCJyZXN0IiwiZmxhdHRlbiIsIkJ1dHRvbiIsIlZlcnRpY2FsR3JvdXAiLCJzdHJpbmdBcnJheVRvRmlsdGVycyIsIm9wZXJhdG9ycyIsIkZpbHRlckJ1dHRvbiIsImZvcndhcmRSZWYiLCJyZWYiLCJPcGVyYXRvckJ1dHRvbiIsImZpbHRlckFycmF5IiwiZmlsdGVyc1RvU3RyaW5nQXJyYXkiLCJzdHJBcnIiLCJrZXkiLCJvcGVyYXRvciIsImNvbmRpdGlvbiIsInNsaWNlIiwiQWRkRmlsdGVyIiwiaW5kZXgiLCJrZXlQcmVzZW50Iiwib3AiLCJvcHAiLCJwdXNoIiwidmFsdWVPcHRpb25zIiwidmFsdWVQcmVzZW50IiwidiIsImYiLCJpIiwiXyIsImV2ZXJ5IiwiVGV4dEFyZWEiLCJvbktleURvd24iLCJldmVudCIsInNoaWZ0S2V5IiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwiZXh0cmEiLCJzZXRQcm9qZWN0cyIsInByb2plY3RzV2l0aFRlbXBsYXRlVmFyaWFibGVzIiwiZGVmYXVsdFNMT1F1ZXJ5IiwiU0xPUXVlcnlFZGl0b3IiLCJVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50IiwiZW5zdXJlR0NFRGVmYXVsdFByb2plY3QiLCJwcm9wIiwic2V0U0xPcyIsInNlcnZpY2VJZCIsInNsb0lkcyIsInNsb0lkIiwic2xvTmFtZSIsInNsbyIsImdvYWwiLCJTZWxlY3RvciIsIlNlcnZpY2UiLCJzZWxlY3Rvck5hbWUiLCJzZXJ2aWNlTmFtZSIsImdldFRlbXBsYXRlU3J2IiwiQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeUVkaXRvciIsInF1ZXJ5VHlwZXMiLCJtZXRyaWNUeXBlcyIsInNsb1NlcnZpY2VzIiwibG9hZGluZyIsInF1ZXJ5TW9kZWwiLCJhc3NpZ24iLCJkZWZhdWx0cyIsImNvbXBvbmVudERpZE1vdW50Iiwib25Qcm9wc0NoYW5nZSIsIm9uUXVlcnlUeXBlQ2hhbmdlIiwib25Qcm9qZWN0Q2hhbmdlIiwib25MYWJlbEtleUNoYW5nZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInNlbGVjUXVlcnlUeXBlQ2hhbmdlZCIsInNlbGVjdFNMT1NlcnZpY2VDaGFuZ2VkIiwibCIsInJlbmRlclF1ZXJ5VHlwZVN3aXRjaCIsIkdvb2dsZUF1dGhUeXBlIiwiQVVUSF9UWVBFUyIsIkpXVCIsIkdDRSIsInZhbHVlVHlwZXMiLCJJTlQ2NCIsIkRPVUJMRSIsIk1PTkVZIiwiU1RSSU5HIiwiVkFMVUVfVFlQRV9VTlNQRUNJRklFRCIsIkJPT0wiLCJtZXRyaWNLaW5kcyIsIkRFTFRBIiwiQUdHUkVHQVRJT05TIiwiTUVUUklDX0tJTkRfVU5TUEVDSUZJRUQiLCJjaHVuayIsImlzQXJyYXkiLCJmcm9tIiwibGFzdFZhbHVlRnJvbSIsIm9mIiwibWVyZ2VNYXAiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJnZXRCYWNrZW5kU3J2IiwidG9EYXRhUXVlcnlSZXNwb25zZSIsImdldFRpbWVTcnYiLCJDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVN1cHBvcnQiLCJDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsInRpbWVTcnYiLCJhdXRoZW50aWNhdGlvblR5cGUiLCJqc29uRGF0YSIsInZhcmlhYmxlcyIsImFubm90YXRpb25zIiwicmVxdWVzdCIsInRhcmdldHMiLCJ0IiwibWlncmF0ZVF1ZXJ5IiwiYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyIsInNjb3BlZFZhcnMiLCJnZXRSZWYiLCJpbnRlcnBvbGF0ZVByb3BzIiwiaW50ZXJwb2xhdGVGaWx0ZXJzIiwiaW50ZXJwb2xhdGVHcm91cEJ5cyIsInZpZXciLCJhZ2dyZWdhdGlvbiIsInJhbmdlIiwidGltZVJhbmdlIiwicXVlcmllcyIsInJlc3VsdHMiLCJwaXBlIiwiZmV0Y2giLCJ1cmwiLCJtZXRob2QiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJ0byIsImRhdGFRdWVyeVJlc3BvbnNlIiwicCIsInJlZHVjZSIsImFjYyIsIlNldCIsImFkZCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIkFycmF5IiwiZ2V0R0NFRGVmYXVsdFByb2plY3QiLCJnZXRSZXNvdXJjZSIsImRlZmF1bHRQcm9qZWN0IiwiZ2NlRGVmYXVsdFByb2plY3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhpZGUiLCJvYmplY3QiLCJmaWx0ZXJRdWVyeSIsImludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzIiwiY29tcGxldGVGaWx0ZXIiLCJpdGVtIiwiam9pbiIsImludGVycG9sYXRlZEdyb3VwQnlzIiwiZm9yRWFjaCIsImdiIiwiaW50ZXJwb2xhdGVkIiwic3BsaXQiLCJjb25jYXQiLCJpbml0aWFsIiwiaW50ZXJwb2xhdGVkTWV0cmljVHlwZSIsIm1ldHJpY1R5cGVFeGlzdEluQXJyYXkiLCJtZXRyaWNUeXBlQnlTZXJ2aWNlIiwibWV0cmljVmFsdWVUeXBlIiwiaW5kZXhPZiIsIm9wdGlvbiIsImdyb3VwcyIsImN1cnIiLCJhcnIiLCJncm91cCIsIkRhdGFTb3VyY2VQbHVnaW4iLCJwbHVnaW4iLCJzZXRRdWVyeUVkaXRvckhlbHAiLCJzZXRRdWVyeUVkaXRvciIsInNldENvbmZpZ0VkaXRvciIsInNldFZhcmlhYmxlUXVlcnlFZGl0b3IiLCJhdXRoVHlwZXMiLCJDdXN0b21WYXJpYWJsZVN1cHBvcnQiLCJtZXRyaWNGaW5kUXVlcnkiLCJiaW5kIiwiZXhlY3V0ZU9ic2VydmFibGUiXSwic291cmNlUm9vdCI6IiJ9