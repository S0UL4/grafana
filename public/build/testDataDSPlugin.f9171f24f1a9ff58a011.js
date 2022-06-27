"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["testDataDSPlugin"],{

/***/ "./public/app/plugins/datasource/testdata/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

// Libraries



/**
 * Empty Config Editor -- settings to save
 */
class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {}));
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/LogIpsum.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNextWord": () => (/* binding */ getNextWord),
/* harmony export */   "getRandomLine": () => (/* binding */ getRandomLine),
/* harmony export */   "getRandomLogLevel": () => (/* binding */ getRandomLogLevel)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

let index = 0;
function getRandomLogLevel() {
  const v = Math.random();

  if (v > 0.9) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.critical;
  }

  if (v > 0.8) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.error;
  }

  if (v > 0.7) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.warning;
  }

  if (v > 0.4) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.info;
  }

  if (v > 0.3) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.debug;
  }

  if (v > 0.1) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.trace;
  }

  return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.unknown;
}
function getNextWord() {
  index = (index + Math.floor(Math.random() * 5)) % words.length;
  return words[index];
}
function getRandomLine(length = 60) {
  let line = getNextWord();

  while (line.length < length) {
    line += ' ' + getNextWord();
  }

  return line;
}
const words = ['At', 'vero', 'eos', 'et', 'accusamus', 'et', 'iusto', 'odio', 'dignissimos', 'ducimus', 'qui', 'blanditiis', 'praesentium', 'voluptatum', 'deleniti', 'atque', 'corrupti', 'quos', 'dolores', 'et', 'quas', 'molestias', 'excepturi', 'sint', 'occaecati', 'cupiditate', 'non', 'provident', 'similique', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollitia', 'animi', 'id', 'est', 'laborum', 'et', 'dolorum', 'fuga', 'Et', 'harum', 'quidem', 'rerum', 'facilis', 'est', 'et', 'expedita', 'distinctio', 'Nam', 'libero', 'tempore', 'cum', 'soluta', 'nobis', 'est', 'eligendi', 'optio', 'cumque', 'nihil', 'impedit', 'quo', 'minus', 'id', 'quod', 'maxime', 'placeat', 'facere', 'possimus', 'omnis', 'voluptas', 'assumenda', 'est', 'omnis', 'dolor', 'repellendus', 'Temporibus', 'autem', 'quibusdam', 'et', 'aut', 'officiis', 'debitis', 'aut', 'rerum', 'necessitatibus', 'saepe', 'eveniet', 'ut', 'et', 'voluptates', 'repudiandae', 'sint', 'et', 'molestiae', 'non', 'recusandae', 'Itaque', 'earum', 'rerum', 'hic', 'tenetur', 'a', 'sapiente', 'delectus', 'ut', 'aut', 'reiciendis', 'voluptatibus', 'maiores', 'alias', 'consequatur', 'aut', 'perferendis', 'doloribus', 'asperiores', 'repellat'];

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/index.ts");
/* harmony import */ var _components_CSVContentEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/CSVContentEditor.tsx");
/* harmony import */ var _components_CSVFileEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/CSVFileEditor.tsx");
/* harmony import */ var _components_CSVWaveEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/CSVWaveEditor.tsx");
/* harmony import */ var _components_ErrorEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/ErrorEditor.tsx");
/* harmony import */ var _components_GrafanaLiveEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/GrafanaLiveEditor.tsx");
/* harmony import */ var _components_NodeGraphEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/NodeGraphEditor.tsx");
/* harmony import */ var _components_PredictablePulseEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/PredictablePulseEditor.tsx");
/* harmony import */ var _components_RawFrameEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/RawFrameEditor.tsx");
/* harmony import */ var _components_SimulationQueryEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/SimulationQueryEditor.tsx");
/* harmony import */ var _components_USAQueryEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/USAQueryEditor.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/testdata/constants.ts");
/* harmony import */ var _runStreams__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/testdata/runStreams.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _br2, _br3, _br4;





















const showLabelsFor = ['random_walk', 'predictable_pulse'];
const endpoints = [{
  value: 'datasources',
  label: 'Data Sources'
}, {
  value: 'search',
  label: 'Search'
}, {
  value: 'annotations',
  label: 'Annotations'
}];
const selectors = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.DataSource.TestData.QueryTab;
const QueryEditor = ({
  query,
  datasource,
  onChange,
  onRunQuery
}) => {
  var _query, _query$usa;

  query = Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_14__.defaultQuery, query);
  const {
    loading,
    value: scenarioList
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_17__["default"])(async () => {
    // migrate manual_entry (unusable since 7, removed in 8)
    if (query.scenarioId === 'manual_entry' && query.points) {
      let csvContent = 'Time,Value\n';

      for (const point of query.points) {
        csvContent += `${point[1]},${point[0]}\n`;
      }

      onChange({
        refId: query.refId,
        datasource: query.datasource,
        scenarioId: 'csv_content',
        csvContent
      });
    }

    const vals = await datasource.getScenarios();
    const hideAlias = ['simulation'];
    return vals.map(v => Object.assign({}, v, {
      hideAliasField: hideAlias.includes(v.id)
    }));
  }, []);

  const onUpdate = query => {
    onChange(query);
    onRunQuery();
  };

  const currentScenario = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => scenarioList === null || scenarioList === void 0 ? void 0 : scenarioList.find(scenario => scenario.id === query.scenarioId), [scenarioList, query]);
  const scenarioId = currentScenario === null || currentScenario === void 0 ? void 0 : currentScenario.id;
  const description = currentScenario === null || currentScenario === void 0 ? void 0 : currentScenario.description;

  const onScenarioChange = item => {
    const scenario = scenarioList === null || scenarioList === void 0 ? void 0 : scenarioList.find(sc => sc.id === item.value);

    if (!scenario) {
      return;
    } // Clear model from existing props that belong to other scenarios


    const update = {
      scenarioId: item.value,
      refId: query.refId,
      alias: query.alias,
      datasource: query.datasource
    };

    if (scenario.stringInput) {
      update.stringInput = scenario.stringInput;
    }

    switch (scenario.id) {
      case 'grafana_api':
        update.stringInput = 'datasources';
        break;

      case 'streaming_client':
        update.stream = _runStreams__WEBPACK_IMPORTED_MODULE_15__.defaultStreamQuery;
        break;

      case 'live':
        update.channel = 'random-2s-stream'; // default stream

        break;

      case 'simulation':
        update.sim = {
          key: {
            type: 'flight',
            tick: 10
          }
        }; // default stream

        break;

      case 'predictable_pulse':
        update.pulseWave = _constants__WEBPACK_IMPORTED_MODULE_14__.defaultPulseQuery;
        break;

      case 'predictable_csv_wave':
        update.csvWave = _constants__WEBPACK_IMPORTED_MODULE_14__.defaultCSVWaveQuery;
        break;

      case 'usa':
        update.usa = {
          mode: _components_USAQueryEditor__WEBPACK_IMPORTED_MODULE_13__.usaQueryModes[0].value
        };
    }

    onUpdate(update);
  };

  const onInputChange = e => {
    const {
      name,
      value,
      type
    } = e.target;
    let newValue = value;

    if (type === 'number') {
      newValue = Number(value);
    }

    if (name === 'levelColumn') {
      newValue = e.target.checked;
    }

    onUpdate(Object.assign({}, query, {
      [name]: newValue
    }));
  };

  const onFieldChange = field => e => {
    const {
      name,
      value,
      type
    } = e.target;
    let newValue = value;

    if (type === 'number') {
      newValue = Number(value);
    }

    onUpdate(Object.assign({}, query, {
      [field]: Object.assign({}, query[field], {
        [name]: newValue
      })
    }));
  };

  const onEndPointChange = ({
    value
  }) => {
    onUpdate(Object.assign({}, query, {
      stringInput: value
    }));
  };

  const onStreamClientChange = onFieldChange('stream');
  const onPulseWaveChange = onFieldChange('pulseWave');

  const onUSAStatsChange = usa => {
    onUpdate(Object.assign({}, query, {
      usa
    }));
  };

  const onCSVWaveChange = csvWave => {
    onUpdate(Object.assign({}, query, {
      csvWave
    }));
  };

  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (scenarioList || []).map(item => ({
    label: item.name,
    value: item.id
  })).sort((a, b) => a.label.localeCompare(b.label)), [scenarioList]);
  const showLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _query$scenarioId;

    return showLabelsFor.includes((_query$scenarioId = query.scenarioId) !== null && _query$scenarioId !== void 0 ? _query$scenarioId : '');
  }, [query]);

  if (loading) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
      "aria-label": selectors.scenarioSelectContainer,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        labelWidth: 14,
        label: "Scenario",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
          inputId: `test-data-scenario-select-${query.refId}`,
          options: options,
          value: options.find(item => item.value === query.scenarioId),
          onChange: onScenarioChange,
          width: 32
        })
      }), (currentScenario === null || currentScenario === void 0 ? void 0 : currentScenario.stringInput) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "String Input",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          width: 32,
          id: `stringInput-${query.refId}`,
          name: "stringInput",
          placeholder: query.stringInput,
          value: query.stringInput,
          onChange: onInputChange
        })
      }), Boolean(!(currentScenario !== null && currentScenario !== void 0 && currentScenario.hideAliasField)) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Alias",
        labelWidth: 14,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          width: 32,
          id: `alias-${query.refId}`,
          type: "text",
          placeholder: "optional",
          pattern: "[^<>&\\\\\"]+",
          name: "alias",
          value: query.alias,
          onChange: onInputChange
        })
      }), showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Labels",
        labelWidth: 14,
        tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: ["Set labels using a key=value syntax:", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {})), `{ key = "value", key2 = "value" }`, _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {})), "key=\"value\", key2=\"value\"", _br3 || (_br3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {})), "key=value, key2=value", _br4 || (_br4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {}))]
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          width: 32,
          id: `labels-${query.refId}`,
          name: "labels",
          onChange: onInputChange,
          value: (_query = query) === null || _query === void 0 ? void 0 : _query.labels,
          placeholder: "key=value, key2=value2"
        })
      })]
    }), scenarioId === 'random_walk' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.RandomWalkEditor, {
      onChange: onInputChange,
      query: query,
      ds: datasource
    }), scenarioId === 'streaming_client' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.StreamingClientEditor, {
      onChange: onStreamClientChange,
      query: query,
      ds: datasource
    }), scenarioId === 'live' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_GrafanaLiveEditor__WEBPACK_IMPORTED_MODULE_8__.GrafanaLiveEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'simulation' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_SimulationQueryEditor__WEBPACK_IMPORTED_MODULE_12__.SimulationQueryEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'raw_frame' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_RawFrameEditor__WEBPACK_IMPORTED_MODULE_11__.RawFrameEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'csv_file' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_CSVFileEditor__WEBPACK_IMPORTED_MODULE_5__.CSVFileEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'csv_content' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_CSVContentEditor__WEBPACK_IMPORTED_MODULE_4__.CSVContentEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'logs' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Lines",
        labelWidth: 14,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "number",
          name: "lines",
          value: query.lines,
          width: 32,
          onChange: onInputChange,
          placeholder: "10"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Level",
        labelWidth: 14,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineSwitch, {
          onChange: onInputChange,
          name: "levelColumn",
          value: !!query.levelColumn
        })
      })]
    }), scenarioId === 'usa' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_USAQueryEditor__WEBPACK_IMPORTED_MODULE_13__.USAQueryEditor, {
      onChange: onUSAStatsChange,
      query: (_query$usa = query.usa) !== null && _query$usa !== void 0 ? _query$usa : {}
    }), scenarioId === 'grafana_api' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
      labelWidth: 14,
      label: "Endpoint",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
        options: endpoints,
        onChange: onEndPointChange,
        width: 32,
        value: endpoints.find(ep => ep.value === query.stringInput)
      })
    }), scenarioId === 'arrow' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
      grow: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TextArea, {
        name: "stringInput",
        value: query.stringInput,
        rows: 10,
        placeholder: "Copy base64 text data from query result",
        onChange: onInputChange
      })
    }), scenarioId === 'predictable_pulse' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_PredictablePulseEditor__WEBPACK_IMPORTED_MODULE_10__.PredictablePulseEditor, {
      onChange: onPulseWaveChange,
      query: query,
      ds: datasource
    }), scenarioId === 'predictable_csv_wave' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_CSVWaveEditor__WEBPACK_IMPORTED_MODULE_6__.CSVWavesEditor, {
      onChange: onCSVWaveChange,
      waves: query.csvWave
    }), scenarioId === 'node_graph' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_NodeGraphEditor__WEBPACK_IMPORTED_MODULE_9__.NodeGraphEditor, {
      onChange: val => onChange(Object.assign({}, query, {
        nodes: val
      })),
      query: query
    }), scenarioId === 'server_error_500' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_ErrorEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("p", {
      children: description
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/TestInfoTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestInfoTab": () => (/* binding */ TestInfoTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

// Libraries

 // Types



class TestInfoTab extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: ["See github for more information about setting up a reproducible test environment.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        variant: "secondary",
        href: "https://github.com/grafana/grafana/tree/main/devenv",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "GitHub"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})]
    }));
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/CSVContentEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSVContentEditor": () => (/* binding */ CSVContentEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const CSVContentEditor = ({
  onChange,
  query
}) => {
  var _query$csvContent;

  const onSaveCSV = csvContent => {
    onChange(Object.assign({}, query, {
      csvContent
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CodeEditor, {
    height: 300,
    language: "csv",
    value: (_query$csvContent = query.csvContent) !== null && _query$csvContent !== void 0 ? _query$csvContent : '',
    onBlur: onSaveCSV,
    onSave: onSaveCSV,
    showMiniMap: false,
    showLineNumbers: true
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/CSVFileEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSVFileEditor": () => (/* binding */ CSVFileEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const CSVFileEditor = ({
  onChange,
  query
}) => {
  const onChangeFileName = ({
    value
  }) => {
    onChange(Object.assign({}, query, {
      csvFileName: value
    }));
  };

  const files = ['flight_info_by_state.csv', 'population_by_state.csv', 'gdp_per_capita.csv', 'js_libraries.csv', 'ohlc_dogecoin.csv', 'weight_height.csv', 'browser_marketshare.csv'].map(name => ({
    label: name,
    value: name
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "File",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        width: 32,
        onChange: onChangeFileName,
        placeholder: "Select csv file",
        options: files,
        value: files.find(f => f.value === query.csvFileName)
      })
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/CSVWaveEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSVWavesEditor": () => (/* binding */ CSVWavesEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/testdata/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class CSVWaveEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onFieldChange", field => e => {
      const {
        value
      } = e.target;
      this.props.onChange(this.props.index, Object.assign({}, this.props.wave, {
        [field]: value
      }));
    });

    _defineProperty(this, "onNameChange", this.onFieldChange('name'));

    _defineProperty(this, "onLabelsChange", this.onFieldChange('labels'));

    _defineProperty(this, "onCSVChange", this.onFieldChange('valuesCSV'));

    _defineProperty(this, "onTimeStepChange", e => {
      const timeStep = e.target.valueAsNumber;
      this.props.onChange(this.props.index, Object.assign({}, this.props.wave, {
        timeStep
      }));
    });
  }

  render() {
    const {
      wave,
      last
    } = this.props;
    let action = this.props.onAdd;

    if (!last) {
      action = () => {
        this.props.onChange(this.props.index, undefined); // remove
      };
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Values',
        grow: true,
        tooltip: "Comma separated values. Each value may be an int, float, or null and must not be empty. Whitespace and trailing commas are removed",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: wave.valuesCSV,
          placeholder: 'CSV values',
          onChange: this.onCSVChange,
          autoFocus: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Step',
        tooltip: "The number of seconds between datapoints.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: wave.timeStep,
          type: "number",
          placeholder: '60',
          width: 6,
          onChange: this.onTimeStepChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Labels',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: wave.labels,
          placeholder: 'labels',
          width: 12,
          onChange: this.onLabelsChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Name',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: wave.name,
          placeholder: 'name',
          width: 10,
          onChange: this.onNameChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        icon: last ? 'plus' : 'minus',
        variant: "secondary",
        onClick: action
      })]
    });
  }

}

class CSVWavesEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onChange", (index, wave) => {
      var _this$props$waves;

      let waves = [...((_this$props$waves = this.props.waves) !== null && _this$props$waves !== void 0 ? _this$props$waves : _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery)];

      if (wave) {
        waves[index] = Object.assign({}, wave);
      } else {
        // remove the element
        waves.splice(index, 1);
      }

      this.props.onChange(waves);
    });

    _defineProperty(this, "onAdd", () => {
      var _this$props$waves2;

      const waves = [...((_this$props$waves2 = this.props.waves) !== null && _this$props$waves2 !== void 0 ? _this$props$waves2 : _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery)];
      waves.push(Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery[0]));
      this.props.onChange(waves);
    });
  }

  render() {
    var _this$props$waves3;

    let waves = (_this$props$waves3 = this.props.waves) !== null && _this$props$waves3 !== void 0 ? _this$props$waves3 : _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery;

    if (!waves.length) {
      waves = _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: waves.map((wave, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CSVWaveEditor, {
        wave: wave,
        index: index,
        onAdd: this.onAdd,
        onChange: this.onChange,
        last: index === waves.length - 1
      }, `${index}/${wave.valuesCSV}`))
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/ErrorEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const ERROR_OPTIONS = [{
  label: 'Server panic',
  value: 'server_panic'
}, {
  label: 'Frontend exception',
  value: 'frontend_exception'
}, {
  label: 'Frontend observable',
  value: 'frontend_observable'
}];

const FrontendErrorQueryEditor = ({
  query,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      labelWidth: 14,
      label: "Error type",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        options: ERROR_OPTIONS,
        value: query.errorType,
        onChange: v => {
          onChange(Object.assign({}, query, {
            errorType: v.value
          }));
        }
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontendErrorQueryEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/GrafanaLiveEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaLiveEditor": () => (/* binding */ GrafanaLiveEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const liveTestDataChannels = [{
  label: 'random-2s-stream',
  value: 'random-2s-stream',
  description: 'Random stream with points every 2s'
}, {
  label: 'random-flakey-stream',
  value: 'random-flakey-stream',
  description: 'Stream that returns data in random intervals'
}, {
  label: 'random-labeled-stream',
  value: 'random-labeled-stream',
  description: 'Value with moving labels'
}, {
  label: 'random-20Hz-stream',
  value: 'random-20Hz-stream',
  description: 'Random stream with points in 20Hz'
}];
const GrafanaLiveEditor = ({
  onChange,
  query
}) => {
  const onChannelChange = ({
    value
  }) => {
    onChange(Object.assign({}, query, {
      channel: value
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "Channel",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        width: 32,
        onChange: onChannelChange,
        placeholder: "Select channel",
        options: liveTestDataChannels,
        value: liveTestDataChannels.find(f => f.value === query.channel)
      })
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/NodeGraphEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeGraphEditor": () => (/* binding */ NodeGraphEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function NodeGraphEditor({
  query,
  onChange
}) {
  var _query$nodes, _query$nodes2;

  const type = ((_query$nodes = query.nodes) === null || _query$nodes === void 0 ? void 0 : _query$nodes.type) || 'random';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "Data type",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        options: options.map(o => ({
          label: o,
          value: o
        })),
        value: options.find(item => item === type),
        onChange: value => onChange(Object.assign({}, query.nodes, {
          type: value.value
        })),
        width: 32
      })
    }), type === 'random' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "Count",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
        type: "number",
        name: "count",
        value: (_query$nodes2 = query.nodes) === null || _query$nodes2 === void 0 ? void 0 : _query$nodes2.count,
        width: 32,
        onChange: e => onChange(Object.assign({}, query.nodes, {
          count: e.currentTarget.value ? parseInt(e.currentTarget.value, 10) : 0
        })),
        placeholder: "10"
      })
    })]
  });
}
const options = ['random', 'response'];

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/PredictablePulseEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictablePulseEditor": () => (/* binding */ PredictablePulseEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const fields = [{
  label: 'Step',
  id: 'timeStep',
  placeholder: '60',
  tooltip: 'The number of seconds between datapoints.'
}, {
  label: 'On Count',
  id: 'onCount',
  placeholder: '3',
  tooltip: 'The number of values within a cycle, at the start of the cycle, that should have the onValue.'
}, {
  label: 'Off Count',
  id: 'offCount',
  placeholder: '6',
  tooltip: 'The number of offValues within the cycle.'
}, {
  label: 'On Value',
  id: 'onValue',
  placeholder: '1',
  tooltip: 'The value for "on values", may be an int, float, or null.'
}, {
  label: 'Off Value',
  id: 'offValue',
  placeholder: '1',
  tooltip: 'The value for "off values", may be a int, float, or null.'
}];
const PredictablePulseEditor = ({
  onChange,
  query
}) => {
  // Convert values to numbers before saving
  const onInputChange = e => {
    const {
      name,
      value
    } = e.target;
    onChange({
      target: {
        name,
        value: Number(value)
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: fields.map(({
      label,
      id,
      placeholder,
      tooltip
    }) => {
      var _query$pulseWave;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: label,
        labelWidth: 14,
        tooltip: tooltip,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          width: 32,
          type: "number",
          name: id,
          id: `pulseWave.${id}-${query.refId}`,
          value: (_query$pulseWave = query.pulseWave) === null || _query$pulseWave === void 0 ? void 0 : _query$pulseWave[id],
          placeholder: placeholder,
          onChange: onInputChange
        })
      }, id);
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/RandomWalkEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomWalkEditor": () => (/* binding */ RandomWalkEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const randomWalkFields = [{
  label: 'Series count',
  id: 'seriesCount',
  placeholder: '1',
  min: 1,
  step: 1
}, {
  label: 'Start value',
  id: 'startValue',
  placeholder: 'auto',
  step: 1
}, {
  label: 'Min',
  id: 'min',
  placeholder: 'none',
  step: 0.1
}, {
  label: 'Max',
  id: 'max',
  placeholder: 'none',
  step: 0.1
}, {
  label: 'Spread',
  id: 'spread',
  placeholder: '1',
  min: 0.5,
  step: 0.1
}, {
  label: 'Noise',
  id: 'noise',
  placeholder: '0',
  min: 0,
  step: 0.1
}, {
  label: 'Drop (%)',
  id: 'drop',
  placeholder: '0',
  min: 0,
  max: 100,
  step: 1,
  tooltip: 'Exclude some percent (chance) points'
}];
const testSelectors = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.DataSource.TestData.QueryTab;
const RandomWalkEditor = ({
  onChange,
  query
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
    children: randomWalkFields.map(({
      label,
      id,
      min,
      step,
      placeholder,
      tooltip
    }) => {
      const selector = testSelectors === null || testSelectors === void 0 ? void 0 : testSelectors[id];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: label,
        labelWidth: 14,
        "aria-label": selector,
        tooltip: tooltip,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          width: 32,
          name: id,
          type: "number",
          id: `randomWalk-${id}-${query.refId}`,
          min: min,
          step: step,
          value: query[id] || placeholder,
          placeholder: placeholder,
          onChange: onChange
        })
      }, id);
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/RawFrameEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawFrameEditor": () => (/* binding */ RawFrameEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const RawFrameEditor = ({
  onChange,
  query
}) => {
  var _query$rawFrameConten;

  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [warning, setWarning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  const onSaveFrames = rawFrameContent => {
    try {
      const json = JSON.parse(rawFrameContent);

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(json)) {
        setError(undefined);
        setWarning(undefined);
        onChange(Object.assign({}, query, {
          rawFrameContent
        }));
        return;
      }

      let data = undefined; // Copy paste from panel json

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(json.series) && json.state) {
        data = json.series.map(v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toDataFrameDTO)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toDataFrame)(v)));
      } else {
        var _v$data;

        // Chek if it is a copy of the raw resuls
        const v = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.toDataQueryResponse)({
          data: json
        });

        if ((_v$data = v.data) !== null && _v$data !== void 0 && _v$data.length && !v.error) {
          data = v.data.map(f => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dataFrameToJSON)(f));
        }
      }

      if (data) {
        console.log('Original', json);
        console.log('Save', data);
        setError(undefined);
        setWarning('Converted to direct frame result');
        onChange(Object.assign({}, query, {
          rawFrameContent: JSON.stringify(data, null, 2)
        }));
        return;
      }

      setError('Unable to read dataframes in text');
    } catch (e) {
      console.log('Error parsing json', e);
      setError('Enter JSON array of data frames (or raw query results body)');
      setWarning(undefined);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      title: error,
      severity: "error"
    }), warning && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      title: warning,
      severity: "warning"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CodeEditor, {
      height: 300,
      language: "json",
      value: (_query$rawFrameConten = query.rawFrameContent) !== null && _query$rawFrameConten !== void 0 ? _query$rawFrameConten : '[]',
      onBlur: onSaveFrames,
      onSave: onSaveFrames,
      showMiniMap: true,
      showLineNumbers: true
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/SimulationQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimulationQueryEditor": () => (/* binding */ SimulationQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _SimulationSchemaForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/SimulationSchemaForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



 // Type         string      `json:"type"`
// Name         string      `json:"name"`
// Description  string      `json:"description"`
// OnlyForward  bool        `json:"forward"`
// ConfigFields *data.Frame `json:"config"`




const SimulationQueryEditor = ({
  onChange,
  query,
  ds
}) => {
  var _query$sim, _simQuery$key, _info$value$options, _info$value, _current$details$conf, _current$details;

  const simQuery = (_query$sim = query.sim) !== null && _query$sim !== void 0 ? _query$sim : {};
  const simKey = (_simQuery$key = simQuery.key) !== null && _simQuery$key !== void 0 ? _simQuery$key : {}; // keep track of updated config state to pass down to form

  const [cfgValue, setCfgValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}); // This only changes once

  const info = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(async () => {
    const v = await ds.getResource('sims');
    return {
      sims: v,
      options: v.map(s => ({
        label: s.name,
        value: s.type,
        description: s.description
      }))
    };
  }, [ds]);
  const current = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const type = simKey.type;

    if (!type || !info.value) {
      return {};
    }

    return {
      details: info.value.sims.find(v => v.type === type),
      option: info.value.options.find(v => v.value === type)
    };
  }, [info.value, simKey === null || simKey === void 0 ? void 0 : simKey.type]);
  let config = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(async () => {
    var _await$ds$getResource;

    let path = simKey.type + '/' + simKey.tick + 'hz';

    if (simKey.uid) {
      path += '/' + simKey.uid;
    }

    let config = (_await$ds$getResource = await ds.getResource('sim/' + path)) === null || _await$ds$getResource === void 0 ? void 0 : _await$ds$getResource.config;
    setCfgValue(config.value);
    return config;
  }, [simKey.type, simKey.tick, simKey.uid]);

  const onUpdateKey = key => {
    onChange(Object.assign({}, query, {
      sim: Object.assign({}, simQuery, {
        key
      })
    }));
  };

  const onUIDChanged = e => {
    const {
      value
    } = e.target;
    onUpdateKey(Object.assign({}, simKey, {
      uid: value !== null && value !== void 0 ? value : undefined
    }));
  };

  const onTickChanged = e => {
    const tick = e.currentTarget.valueAsNumber;
    onUpdateKey(Object.assign({}, simKey, {
      tick
    }));
  };

  const onTypeChange = v => {
    onUpdateKey(Object.assign({}, simKey, {
      type: v.value
    }));
  };

  const onToggleStream = () => {
    onChange(Object.assign({}, query, {
      sim: Object.assign({}, simQuery, {
        stream: !simQuery.stream
      })
    }));
  };

  const onToggleLast = () => {
    onChange(Object.assign({}, query, {
      sim: Object.assign({}, simQuery, {
        last: !simQuery.last
      })
    }));
  };

  const onSchemaFormChange = config => {
    let path = simKey.type + '/' + simKey.tick + 'hz';

    if (simKey.uid) {
      path += '/' + simKey.uid;
    }

    ds.postResource('sim/' + path, config).then(res => {
      setCfgValue(res.config);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        labelWidth: 14,
        label: "Simulation",
        tooltip: "",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
          isLoading: info.loading,
          options: (_info$value$options = (_info$value = info.value) === null || _info$value === void 0 ? void 0 : _info$value.options) !== null && _info$value$options !== void 0 ? _info$value$options : [],
          value: current.option,
          onChange: onTypeChange,
          width: 32
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        labelWidth: 14,
        label: "Stream",
        tooltip: "connect to the live channel",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineSwitch, {
          value: Boolean(simQuery.stream),
          onChange: onToggleStream
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Interval",
        tooltip: "the rate a simulation will spit out events",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          width: 10,
          type: "number",
          value: simKey.tick,
          onChange: onTickChanged,
          min: 1 / 10,
          max: 50,
          suffix: "hz"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Last",
        tooltip: "Only return the last value",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineSwitch, {
            value: Boolean(simQuery.last),
            onChange: onToggleLast
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "UID",
        tooltip: "A UID will allow multiple simulations to run at the same time",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          type: "text",
          placeholder: "optional",
          value: simQuery.key.uid,
          onChange: onUIDChanged
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SimulationSchemaForm__WEBPACK_IMPORTED_MODULE_2__.SimulationSchemaForm, {
      onChange: onSchemaFormChange,
      config: cfgValue !== null && cfgValue !== void 0 ? cfgValue : config.value,
      schema: (_current$details$conf = (_current$details = current.details) === null || _current$details === void 0 ? void 0 : _current$details.config.schema) !== null && _current$details$conf !== void 0 ? _current$details$conf : {
        fields: []
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/SimulationSchemaForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimulationSchemaForm": () => (/* binding */ SimulationSchemaForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const renderInput = (field, onChange, config) => {
  var _config$field$name;

  switch (field.type) {
    case 'number':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
        type: "number",
        defaultValue: config === null || config === void 0 ? void 0 : config[field.name],
        onChange: e => {
          const newValue = e.currentTarget.valueAsNumber;
          onChange(Object.assign({}, config, {
            [field.name]: newValue
          }));
        }
      });

    case 'boolean':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineSwitch, {
        value: (_config$field$name = config === null || config === void 0 ? void 0 : config[field.name]) !== null && _config$field$name !== void 0 ? _config$field$name : true,
        onChange: () => {
          onChange(Object.assign({}, config, {
            [field.name]: !config[field.name]
          }));
        }
      });

    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
        type: "string",
        value: config === null || config === void 0 ? void 0 : config[field.name],
        onChange: e => {
          const newValue = e.target.value;
          onChange(Object.assign({}, config, {
            [field.name]: newValue
          }));
        }
      });
  }
};

const getStyles = theme => {
  return {
    jsonView: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing(1)};
    `
  };
};

const SimulationSchemaForm = ({
  config,
  schema,
  onChange
}) => {
  const [jsonView, setJsonView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  const onUpdateTextArea = event => {
    const element = event.target;
    onChange(JSON.parse(element.value));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
    label: "Config",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineSwitch, {
      className: styles.jsonView,
      label: "JSON View",
      showLabel: true,
      value: jsonView,
      onChange: () => setJsonView(!jsonView)
    }), jsonView ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TextArea, {
      defaultValue: JSON.stringify(config, null, 2),
      rows: 7,
      onChange: onUpdateTextArea
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: schema.fields.map(field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: field.name,
        labelWidth: 14,
        children: renderInput(field, onChange, config)
      }, field.name))
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/StreamingClientEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreamingClientEditor": () => (/* binding */ StreamingClientEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const streamingClientFields = [{
  label: 'Speed (ms)',
  id: 'speed',
  placeholder: 'value',
  min: 10,
  step: 10
}, {
  label: 'Spread',
  id: 'spread',
  placeholder: 'value',
  min: 0.5,
  step: 0.1
}, {
  label: 'Noise',
  id: 'noise',
  placeholder: 'value',
  min: 0,
  step: 0.1
}, {
  label: 'Bands',
  id: 'bands',
  placeholder: 'bands',
  min: 0,
  step: 1
}];
const types = [{
  value: 'signal',
  label: 'Signal'
}, {
  value: 'logs',
  label: 'Logs'
}, {
  value: 'fetch',
  label: 'Fetch'
}];
const StreamingClientEditor = ({
  onChange,
  query
}) => {
  var _query$stream, _query$stream3, _query$stream4;

  const onSelectChange = ({
    value
  }) => {
    onChange({
      target: {
        name: 'type',
        value
      }
    });
  }; // Convert values to numbers before saving


  const onInputChange = e => {
    const {
      name,
      value
    } = e.target;
    onChange({
      target: {
        name,
        value: Number(value)
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "Type",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        width: 32,
        onChange: onSelectChange,
        defaultValue: types[0],
        options: types
      })
    }), (query === null || query === void 0 ? void 0 : (_query$stream = query.stream) === null || _query$stream === void 0 ? void 0 : _query$stream.type) === 'signal' && streamingClientFields.map(({
      label,
      id,
      min,
      step,
      placeholder
    }) => {
      var _query$stream2;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: label,
        labelWidth: 14,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          width: 32,
          type: "number",
          id: `stream.${id}-${query.refId}`,
          name: id,
          min: min,
          step: step,
          value: (_query$stream2 = query.stream) === null || _query$stream2 === void 0 ? void 0 : _query$stream2[id],
          placeholder: placeholder,
          onChange: onInputChange
        })
      }, id);
    }), (query === null || query === void 0 ? void 0 : (_query$stream3 = query.stream) === null || _query$stream3 === void 0 ? void 0 : _query$stream3.type) === 'fetch' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "URL",
      labelWidth: 14,
      grow: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
        type: "text",
        name: "url",
        id: `stream.url-${query.refId}`,
        value: query === null || query === void 0 ? void 0 : (_query$stream4 = query.stream) === null || _query$stream4 === void 0 ? void 0 : _query$stream4.url,
        placeholder: "Fetch URL",
        onChange: onChange
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/USAQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USAQueryEditor": () => (/* binding */ USAQueryEditor),
/* harmony export */   "fieldNames": () => (/* binding */ fieldNames),
/* harmony export */   "stateNames": () => (/* binding */ stateNames),
/* harmony export */   "usaQueryModes": () => (/* binding */ usaQueryModes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function USAQueryEditor({
  query,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        labelWidth: 14,
        label: "Mode",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
          options: usaQueryModes,
          onChange: v => {
            onChange(Object.assign({}, query, {
              mode: v.value
            }));
          },
          width: 32,
          value: usaQueryModes.find(ep => ep.value === query.mode)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Period",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: query.period,
          placeholder: '30m',
          onChange: v => {
            onChange(Object.assign({}, query, {
              period: v.currentTarget.value
            }));
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        labelWidth: 14,
        label: "Fields",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, {
          options: fieldNames,
          onChange: vals => {
            onChange(Object.assign({}, query, {
              fields: vals.map(v => v.value)
            }));
          },
          width: 32,
          placeholder: "all",
          value: query.fields
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "States",
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, {
          options: stateNames,
          onChange: vals => {
            onChange(Object.assign({}, query, {
              states: vals.map(v => v.value)
            }));
          },
          placeholder: "all",
          value: query.states
        })
      })]
    })]
  });
}
const usaQueryModes = ['values-as-rows', 'values-as-fields', 'values-as-labeled-fields', 'timeseries', 'timeseries-wide'].map(f => ({
  label: f,
  value: f
}));
const fieldNames = ['foo', 'bar', 'baz' // all short
].map(f => ({
  label: f,
  value: f
}));
const stateNames = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'].map(f => ({
  label: f,
  value: f
}));

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomWalkEditor": () => (/* reexport safe */ _RandomWalkEditor__WEBPACK_IMPORTED_MODULE_1__.RandomWalkEditor),
/* harmony export */   "StreamingClientEditor": () => (/* reexport safe */ _StreamingClientEditor__WEBPACK_IMPORTED_MODULE_0__.StreamingClientEditor)
/* harmony export */ });
/* harmony import */ var _StreamingClientEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/StreamingClientEditor.tsx");
/* harmony import */ var _RandomWalkEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/RandomWalkEditor.tsx");



/***/ }),

/***/ "./public/app/plugins/datasource/testdata/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultCSVWaveQuery": () => (/* binding */ defaultCSVWaveQuery),
/* harmony export */   "defaultPulseQuery": () => (/* binding */ defaultPulseQuery),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery)
/* harmony export */ });
const defaultPulseQuery = {
  timeStep: 60,
  onCount: 3,
  onValue: 2,
  offCount: 3,
  offValue: 1
};
const defaultCSVWaveQuery = [{
  timeStep: 60,
  valuesCSV: '0,0,2,2,1,1'
}];
const defaultQuery = {
  scenarioId: 'random_walk',
  refId: ''
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestDataDataSource": () => (/* binding */ TestDataDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/delay.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_features_variables_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _metricTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/testdata/metricTree.ts");
/* harmony import */ var _nodeGraphUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/testdata/nodeGraphUtils.ts");
/* harmony import */ var _runStreams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/testdata/runStreams.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/testdata/variables.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class TestDataDataSource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)()) {
    super(instanceSettings);

    _defineProperty(this, "scenariosCache", void 0);

    this.templateSrv = templateSrv;
    this.variables = new _variables__WEBPACK_IMPORTED_MODULE_6__.TestDataVariableSupport();
  }

  query(options) {
    const backendQueries = [];
    const streams = []; // Start streams and prepare queries

    for (const target of options.targets) {
      if (target.hide) {
        continue;
      }

      this.resolveTemplateVariables(target, options.scopedVars);

      switch (target.scenarioId) {
        case 'live':
          streams.push(runGrafanaLiveQuery(target, options));
          break;

        case 'streaming_client':
          streams.push((0,_runStreams__WEBPACK_IMPORTED_MODULE_5__.runStream)(target, options));
          break;

        case 'grafana_api':
          streams.push(runGrafanaAPI(target, options));
          break;

        case 'annotations':
          streams.push(this.annotationDataTopicTest(target, options));
          break;

        case 'variables-query':
          streams.push(this.variablesQuery(target, options));
          break;

        case 'node_graph':
          streams.push(this.nodesQuery(target, options));
          break;

        case 'raw_frame':
          streams.push(this.rawFrameQuery(target, options));
          break;

        case 'server_error_500':
          // this now has an option where it can return/throw an error from the frontend.
          // if it doesn't, send it to the backend where it might panic there :)
          const query = this.serverErrorQuery(target, options);
          query ? streams.push(query) : backendQueries.push(target);
          break;
        // Unusable since 7, removed in 8

        case 'manual_entry':
          {
            let csvContent = 'Time,Value\n';

            if (target.points) {
              for (const point of target.points) {
                csvContent += `${point[1]},${point[0]}\n`;
              }
            }

            target.scenarioId = 'csv_content';
            target.csvContent = csvContent;
          }

        default:
          backendQueries.push(target);
      }
    }

    if (backendQueries.length) {
      const backendOpts = Object.assign({}, options, {
        targets: backendQueries
      });
      streams.push(super.query(backendOpts));
    }

    if (streams.length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        data: []
      });
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...streams);
  }

  resolveTemplateVariables(query, scopedVars) {
    if (query.labels) {
      query.labels = this.templateSrv.replace(query.labels, scopedVars);
    }

    if (query.alias) {
      query.alias = this.templateSrv.replace(query.alias, scopedVars);
    }

    if (query.scenarioId) {
      query.scenarioId = this.templateSrv.replace(query.scenarioId, scopedVars);
    }

    if (query.stringInput) {
      query.stringInput = this.templateSrv.replace(query.stringInput, scopedVars);
    }

    if (query.csvContent) {
      query.csvContent = this.templateSrv.replace(query.csvContent, scopedVars);
    }

    if (query.rawFrameContent) {
      query.rawFrameContent = this.templateSrv.replace(query.rawFrameContent, scopedVars);
    }
  }

  annotationDataTopicTest(target, req) {
    const events = this.buildFakeAnnotationEvents(req.range, 50);
    const dataFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(events);
    dataFrame.meta = {
      dataTopic: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataTopic.Annotations
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
      key: target.refId,
      data: [dataFrame]
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
  }

  buildFakeAnnotationEvents(range, count) {
    let timeWalker = range.from.valueOf();
    const to = range.to.valueOf();
    const events = [];
    const step = (to - timeWalker) / count;

    for (let i = 0; i < count; i++) {
      events.push({
        time: timeWalker,
        text: 'This is the text, <a href="https://grafana.com">Grafana.com</a>',
        tags: ['text', 'server']
      });
      timeWalker += step;
    }

    return events;
  }

  annotationQuery(options) {
    return Promise.resolve(this.buildFakeAnnotationEvents(options.range, 10));
  }

  getQueryDisplayText(query) {
    var _query$scenarioId;

    const scenario = (_query$scenarioId = query.scenarioId) !== null && _query$scenarioId !== void 0 ? _query$scenarioId : 'Default scenario';

    if (query.alias) {
      return scenario + ' as ' + query.alias;
    }

    return scenario;
  }

  testDatasource() {
    return Promise.resolve({
      status: 'success',
      message: 'Data source is working'
    });
  }

  getScenarios() {
    if (!this.scenariosCache) {
      this.scenariosCache = this.getResource('scenarios');
    }

    return this.scenariosCache;
  }

  variablesQuery(target, options) {
    var _target$stringInput;

    const query = (_target$stringInput = target.stringInput) !== null && _target$stringInput !== void 0 ? _target$stringInput : '';
    const interpolatedQuery = this.templateSrv.replace(query, (0,app_features_variables_utils__WEBPACK_IMPORTED_MODULE_2__.getSearchFilterScopedVar)({
      query,
      wildcardChar: '*',
      options: options.scopedVars
    }));
    const children = (0,_metricTree__WEBPACK_IMPORTED_MODULE_3__.queryMetricTree)(interpolatedQuery);
    const items = children.map(item => ({
      value: item.name,
      text: item.name
    }));
    const dataFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(items);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
      data: [dataFrame]
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
  }

  nodesQuery(target, options) {
    var _target$nodes, _target$nodes2;

    const type = ((_target$nodes = target.nodes) === null || _target$nodes === void 0 ? void 0 : _target$nodes.type) || 'random';
    let frames;

    switch (type) {
      case 'random':
        frames = (0,_nodeGraphUtils__WEBPACK_IMPORTED_MODULE_4__.generateRandomNodes)((_target$nodes2 = target.nodes) === null || _target$nodes2 === void 0 ? void 0 : _target$nodes2.count);
        break;

      case 'response':
        frames = (0,_nodeGraphUtils__WEBPACK_IMPORTED_MODULE_4__.savedNodesResponse)();
        break;

      default:
        throw new Error(`Unknown node_graph sub type ${type}`);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
      data: frames
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
  }

  rawFrameQuery(target, options) {
    try {
      var _target$rawFrameConte;

      const data = JSON.parse((_target$rawFrameConte = target.rawFrameContent) !== null && _target$rawFrameConte !== void 0 ? _target$rawFrameConte : '[]').map(v => {
        const f = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.toDataFrame)(v);
        f.refId = target.refId;
        return f;
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        data,
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
    } catch (ex) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        data: [],
        error: ex instanceof Error ? ex : new Error('Unkown error')
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
    }
  }

  serverErrorQuery(target, options) {
    var _target$stringInput2;

    const {
      errorType
    } = target;
    console.log("we're here!", target);

    if (errorType === 'server_panic') {
      return null;
    }

    const stringInput = (_target$stringInput2 = target.stringInput) !== null && _target$stringInput2 !== void 0 ? _target$stringInput2 : '';

    if (stringInput === '') {
      if (errorType === 'frontend_exception') {
        throw new Error('Scenario threw an exception in the frontend because the input was empty.');
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(() => new Error('Scenario returned an error because the input was empty.'));
      }
    }

    return null;
  }

}

function runGrafanaAPI(target, req) {
  const url = `/api/${target.stringInput}`;
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(url).then(res => {
    const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(res);
    return {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
      data: [frame]
    };
  }));
}

let liveQueryCounter = 1000;

function runGrafanaLiveQuery(target, req) {
  if (!target.channel) {
    throw new Error(`Missing channel config`);
  }

  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getGrafanaLiveSrv)().getDataStream({
    addr: {
      scope: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LiveChannelScope.Plugin,
      namespace: 'testdata',
      path: target.channel
    },
    key: `testStream.${liveQueryCounter++}`
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/metricTree.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryMetricTree": () => (/* binding */ queryMetricTree)
/* harmony export */ });
/*
 *  Builds a nested tree like
 *  [
 *    {
 *      name: 'A',
 *      children: [
 *        { name: 'AA', children: [] },
 *        { name: 'AB', children: [] },
 *      ]
 *    }
 *  ]
 */
function buildMetricTree(parent, depth) {
  const chars = ['A', 'B', 'C'];
  const children = [];

  if (depth > 5) {
    return [];
  }

  for (const letter of chars) {
    const nodeName = `${parent}${letter}`;
    children.push({
      name: nodeName,
      children: buildMetricTree(nodeName, depth + 1)
    });
  }

  return children;
}

function queryTree(children, query, queryIndex) {
  if (queryIndex >= query.length) {
    return children;
  }

  if (query[queryIndex] === '*') {
    return children;
  }

  const nodeQuery = query[queryIndex];
  let result = [];
  let namesToMatch = [nodeQuery]; // handle glob queries

  if (nodeQuery.startsWith('{')) {
    namesToMatch = nodeQuery.replace(/\{|\}/g, '').split(',');
  }

  for (const node of children) {
    for (const nameToMatch of namesToMatch) {
      if (nameToMatch.indexOf('*') !== -1) {
        const pattern = nameToMatch.replace('*', '');
        const regex = new RegExp(`^${pattern}.*`, 'gi');

        if (regex.test(node.name)) {
          result = result.concat(queryTree([node], query, queryIndex + 1));
        }
      } else if (node.name === nameToMatch) {
        result = result.concat(queryTree(node.children, query, queryIndex + 1));
      }
    }
  }

  return result;
}

function queryMetricTree(query) {
  if (query.indexOf('value') === 0) {
    return [{
      name: query,
      children: []
    }];
  }

  const children = buildMetricTree('', 0);
  return queryTree(children, query.split('.'), 0);
}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/testdata/ConfigEditor.tsx");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/testdata/QueryEditor.tsx");
/* harmony import */ var _TestInfoTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/testdata/TestInfoTab.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/testdata/datasource.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class TestDataAnnotationsQueryCtrl {
  constructor() {
    _defineProperty(this, "annotation", void 0);
  }

}

_defineProperty(TestDataAnnotationsQueryCtrl, "template", '<h2>Annotation scenario</h2>');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_4__.TestDataDataSource).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__.ConfigEditor).setQueryEditor(_QueryEditor__WEBPACK_IMPORTED_MODULE_2__.QueryEditor).setAnnotationQueryCtrl(TestDataAnnotationsQueryCtrl).addConfigPage({
  title: 'Setup',
  icon: 'list-ul',
  body: _TestInfoTab__WEBPACK_IMPORTED_MODULE_3__.TestInfoTab,
  id: 'setup'
});

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/nodeGraphUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateRandomNodes": () => (/* binding */ generateRandomNodes),
/* harmony export */   "savedNodesResponse": () => (/* binding */ savedNodesResponse)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _testData_serviceMapResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/testdata/testData/serviceMapResponse.ts");


function generateRandomNodes(count = 10) {
  const nodes = [];
  const root = {
    id: '0',
    title: 'root',
    subTitle: 'client',
    success: 1,
    error: 0,
    stat1: Math.random(),
    stat2: Math.random(),
    edges: []
  };
  nodes.push(root);
  const nodesWithoutMaxEdges = [root];
  const maxEdges = 3;

  for (let i = 1; i < count; i++) {
    const node = makeRandomNode(i);
    nodes.push(node);
    const sourceIndex = Math.floor(Math.random() * Math.floor(nodesWithoutMaxEdges.length - 1));
    const source = nodesWithoutMaxEdges[sourceIndex];
    source.edges.push(node.id);

    if (source.edges.length >= maxEdges) {
      nodesWithoutMaxEdges.splice(sourceIndex, 1);
    }

    nodesWithoutMaxEdges.push(node);
  } // Add some random edges to create possible cycle


  const additionalEdges = Math.floor(count / 2);

  for (let i = 0; i <= additionalEdges; i++) {
    const sourceIndex = Math.floor(Math.random() * Math.floor(nodes.length - 1));
    const targetIndex = Math.floor(Math.random() * Math.floor(nodes.length - 1));

    if (sourceIndex === targetIndex || nodes[sourceIndex].id === '0' || nodes[sourceIndex].id === '0') {
      continue;
    }

    nodes[sourceIndex].edges.push(nodes[sourceIndex].id);
  }

  const nodeFields = {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        displayName: 'Transactions per second'
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        displayName: 'Average duration'
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success']: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        color: {
          fixedColor: 'green',
          mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
        },
        displayName: 'Success'
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'errors']: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        color: {
          fixedColor: 'red',
          mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
        },
        displayName: 'Errors'
      }
    }
  };
  const nodeFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    name: 'nodes',
    fields: Object.keys(nodeFields).map(key => Object.assign({}, nodeFields[key], {
      name: key
    })),
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  const edgeFields = {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }
  };
  const edgesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    name: 'edges',
    fields: Object.keys(edgeFields).map(key => Object.assign({}, edgeFields[key], {
      name: key
    })),
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  const edgesSet = new Set();

  for (const node of nodes) {
    nodeFields.id.values.add(node.id);
    nodeFields.title.values.add(node.title);
    nodeFields.subTitle.values.add(node.subTitle);
    nodeFields.mainStat.values.add(node.stat1);
    nodeFields.secondaryStat.values.add(node.stat2);
    nodeFields.arc__success.values.add(node.success);
    nodeFields.arc__errors.values.add(node.error);

    for (const edge of node.edges) {
      const id = `${node.id}--${edge}`; // We can have duplicate edges when we added some more by random

      if (edgesSet.has(id)) {
        continue;
      }

      edgesSet.add(id);
      edgeFields.id.values.add(`${node.id}--${edge}`);
      edgeFields.source.values.add(node.id);
      edgeFields.target.values.add(edge);
    }
  }

  return [nodeFrame, edgesFrame];
}

function makeRandomNode(index) {
  const success = Math.random();
  const error = 1 - success;
  return {
    id: index.toString(),
    title: `service:${index}`,
    subTitle: 'service',
    success,
    error,
    stat1: Math.random(),
    stat2: Math.random(),
    edges: []
  };
}

function savedNodesResponse() {
  return [new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame(_testData_serviceMapResponse__WEBPACK_IMPORTED_MODULE_1__.nodes), new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame(_testData_serviceMapResponse__WEBPACK_IMPORTED_MODULE_1__.edges)];
}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/runStreams.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultStreamQuery": () => (/* binding */ defaultStreamQuery),
/* harmony export */   "runFetchStream": () => (/* binding */ runFetchStream),
/* harmony export */   "runLogsStream": () => (/* binding */ runLogsStream),
/* harmony export */   "runSignalStream": () => (/* binding */ runSignalStream),
/* harmony export */   "runStream": () => (/* binding */ runStream)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_features_dashboard_dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
/* harmony import */ var app_features_live_data_StreamingDataFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/live/data/StreamingDataFrame.ts");
/* harmony import */ var _LogIpsum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/testdata/LogIpsum.ts");






const defaultStreamQuery = {
  type: 'signal',
  speed: 250,
  // ms
  spread: 3.5,
  noise: 2.2,
  bands: 1
};
function runStream(target, req) {
  const query = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaults)(target.stream, defaultStreamQuery);

  if ('signal' === query.type) {
    return runSignalStream(target, query, req);
  }

  if ('logs' === query.type) {
    return runLogsStream(target, query, req);
  }

  if ('fetch' === query.type) {
    return runFetchStream(target, query, req);
  }

  throw new Error(`Unknown Stream Type: ${query.type}`);
}
function runSignalStream(target, query, req) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    var _target$alias;

    const streamId = `signal-${req.panelId}-${target.refId}`;
    const maxDataPoints = req.maxDataPoints || 1000;
    const schema = {
      refId: target.refId,
      fields: [{
        name: 'time',
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time
      }, {
        name: (_target$alias = target.alias) !== null && _target$alias !== void 0 ? _target$alias : 'value',
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
      }]
    };
    const {
      spread,
      speed,
      bands = 0,
      noise
    } = query;

    for (let i = 0; i < bands; i++) {
      const suffix = bands > 1 ? ` ${i + 1}` : '';
      schema.fields.push({
        name: 'Min' + suffix,
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
      });
      schema.fields.push({
        name: 'Max' + suffix,
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
      });
    }

    const frame = app_features_live_data_StreamingDataFrame__WEBPACK_IMPORTED_MODULE_3__.StreamingDataFrame.fromDataFrameJSON({
      schema
    }, {
      maxLength: maxDataPoints
    });
    let value = Math.random() * 100;
    let timeoutId = null;
    let lastSent = -1;

    const addNextRow = time => {
      value += (Math.random() - 0.5) * spread;
      const data = {
        values: [[time], [value]]
      };
      let min = value;
      let max = value;

      for (let i = 0; i < bands; i++) {
        min = min - Math.random() * noise;
        max = max + Math.random() * noise;
        data.values.push([min]);
        data.values.push([max]);
      }

      const event = {
        data
      };
      return frame.push(event);
    }; // Fill the buffer on init


    if (true) {
      let time = Date.now() - maxDataPoints * speed;

      for (let i = 0; i < maxDataPoints; i++) {
        addNextRow(time);
        time += speed;
      }
    }

    const pushNextEvent = () => {
      addNextRow(Date.now());
      const elapsed = app_features_dashboard_dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_2__.liveTimer.lastUpdate - lastSent;

      if (elapsed > 1000 || app_features_dashboard_dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_2__.liveTimer.ok) {
        subscriber.next({
          data: [frame],
          key: streamId,
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Streaming
        });
        lastSent = app_features_dashboard_dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_2__.liveTimer.lastUpdate;
      }

      timeoutId = setTimeout(pushNextEvent, speed);
    }; // Send first event in 5ms


    setTimeout(pushNextEvent, 5);
    return () => {
      console.log('unsubscribing to stream ' + streamId);
      clearTimeout(timeoutId);
    };
  });
}
function runLogsStream(target, query, req) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const streamId = `logs-${req.panelId}-${target.refId}`;
    const maxDataPoints = req.maxDataPoints || 1000;
    const data = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CircularDataFrame({
      append: 'tail',
      capacity: maxDataPoints
    });
    data.refId = target.refId;
    data.name = target.alias || 'Logs ' + target.refId;
    data.addField({
      name: 'line',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    });
    data.addField({
      name: 'time',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time
    });
    data.meta = {
      preferredVisualisationType: 'logs'
    };
    const {
      speed
    } = query;
    let timeoutId = null;

    const pushNextEvent = () => {
      data.fields[0].values.add(Date.now());
      data.fields[1].values.add((0,_LogIpsum__WEBPACK_IMPORTED_MODULE_4__.getRandomLine)());
      subscriber.next({
        data: [data],
        key: streamId
      });
      timeoutId = setTimeout(pushNextEvent, speed);
    }; // Send first event in 5ms


    setTimeout(pushNextEvent, 5);
    return () => {
      console.log('unsubscribing to stream ' + streamId);
      clearTimeout(timeoutId);
    };
  });
}
function runFetchStream(target, query, req) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const streamId = `fetch-${req.panelId}-${target.refId}`;
    const maxDataPoints = req.maxDataPoints || 1000;
    let data = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CircularDataFrame({
      append: 'tail',
      capacity: maxDataPoints
    });
    data.refId = target.refId;
    data.name = target.alias || 'Fetch ' + target.refId;
    let reader;
    const csv = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CSVReader({
      callback: {
        onHeader: fields => {
          // Clear any existing fields
          if (data.fields.length) {
            data = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CircularDataFrame({
              append: 'tail',
              capacity: maxDataPoints
            });
            data.refId = target.refId;
            data.name = 'Fetch ' + target.refId;
          }

          for (const field of fields) {
            data.addField(field);
          }
        },
        onRow: row => {
          data.add(row);
        }
      }
    });

    const processChunk = value => {
      if (value.value) {
        const text = new TextDecoder().decode(value.value);
        csv.readCSV(text);
      }

      subscriber.next({
        data: [data],
        key: streamId,
        state: value.done ? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done : _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Streaming
      });

      if (value.done) {
        console.log('Finished stream');
        subscriber.complete(); // necessary?

        return;
      }

      return reader.read().then(processChunk);
    };

    if (!query.url) {
      throw new Error('query.url is not defined');
    }

    fetch(new Request(query.url)).then(response => {
      if (response.body) {
        reader = response.body.getReader();
        reader.read().then(processChunk);
      }
    });
    return () => {
      // Cancel fetch?
      console.log('unsubscribing to stream ' + streamId);
    };
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/testData/serviceMapResponse.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "edges": () => (/* binding */ edges),
/* harmony export */   "nodes": () => (/* binding */ nodes)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

const nodes = {
  fields: [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      links: [{
        title: 'Traces/All',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}"))'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/OK',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { ok = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/Errors',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { error = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/Faults',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { fault = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }]
    },
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      displayName: 'Name'
    },
    values: ['auth', 'products', 'customers', 'orders', 'products', 'orders', 'api', 'shipping', 'orders', 'execute-api', 'shipping', 'www', 'api', 'www', 'products']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      displayName: 'Type'
    },
    values: ['Compute', 'SQL', 'SQL', 'SQL', 'remote', 'Function', 'Compute', 'Function', 'Function', 'remote', 'Function', 'Compute', 'client', 'client', 'Compute']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      unit: 'ms/t',
      displayName: 'Average response time'
    },
    values: [3.5394042646735553, 15.906441318223264, 4.913011921591567, 7.4163203042094095, 1092, 22.85961441405067, 56.135855729084696, 4.45946191601527, 12.818300278280843, 4.25, 12.565442646791492, 77.63447512700567, 40.387096774193544, 77.63447512700567, 27.648950187374872]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      unit: 't/min',
      displayName: 'Transactions per minute'
    },
    values: [50.56317154501667, 682.4, 512.8416666666667, 125.64444444444445, 0.005585812037424941, 137.59722222222223, 300.0527777777778, 30.582348853370394, 125.77222222222223, 0.028706417080318163, 30.582348853370394, 165.675, 0.100021510002151, 165.675, 162.33055555555555]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
        fixedColor: 'green'
      },
      displayName: 'Sucesss'
    },
    values: [0.9338865684765882, 1, 1, 1, 0.5, 1, 0.9901128505170387, 0.9069260134520997, 1, 0, 0.9069260134520997, 0.9624432037288534, 0, 0.9624432037288534, 0.9824945669843769]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'faults',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
        fixedColor: 'red'
      },
      displayName: 'Faults'
    },
    values: [0, 0, 0, 0, 0.5, 0, 0.009479813736472288, 0, 0, 0, 0, 0.017168821152524185, 0, 0.017168821152524185, 0.01750543301562313]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'errors',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
        fixedColor: 'semi-dark-yellow'
      },
      displayName: 'Errors'
    },
    values: [0.06611343152341174, 0, 0, 0, 0, 0, 0.0004073357464890436, 0.09307398654790038, 0, 1, 0.09307398654790038, 0.02038797511862247, 1, 0.02038797511862247, 0]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'throttled',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
        fixedColor: 'purple'
      },
      displayName: 'Throttled'
    },
    values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }],
  meta: {
    preferredVisualisationType: 'nodeGraph'
  },
  name: 'nodes'
};
const edges = {
  fields: [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      links: [{
        title: 'Traces/All',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'edge("${__data.fields.sourceName}", "${__data.fields.targetName}")'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/OK',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { ok = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/Errors',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { error = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/Faults',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { fault = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }]
    },
    values: ['0__2', '5__8', '6__0', '6__5', '6__9', '6__2', '6__14', '6__4', '8__3', '10__7', '11__0', '11__6', '12__6', '13__11', '14__1', '14__2', '14__10']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {},
    values: [0, 5, 6, 6, 6, 6, 6, 6, 8, 10, 11, 11, 12, 13, 14, 14, 14]
  }, {
    name: 'sourceName',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {},
    values: ['auth', 'orders', 'api', 'api', 'api', 'api', 'api', 'api', 'orders', 'shipping', 'www', 'www', 'api', 'www', 'products', 'products', 'products']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {},
    values: [2, 8, 0, 5, 9, 2, 14, 4, 3, 7, 0, 6, 6, 11, 1, 2, 10]
  }, {
    name: 'targetName',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {},
    values: ['customers', 'orders', 'auth', 'orders', 'execute-api', 'customers', 'products', 'products', 'orders', 'shipping', 'auth', 'api', 'api', 'www', 'products', 'customers', 'shipping']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      displayName: 'Response percentage'
    },
    values: ['Success 100.00%', 'Success 100.00%', 'Success 100.00%', 'Success 100.00%', 'Errors 100.00%', 'Success 100.00%', 'Faults 1.75%', 'Faults 50.00%', 'Success 100.00%', 'Errors 9.31%', 'Errors 6.62%', 'Faults 1.13%', 'Errors 100.00%', 'Faults 1.72%', 'Success 100.00%', 'Success 100.00%', 'Faults 9.30%']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      unit: 't/min',
      displayName: 'Transactions per minute'
    },
    values: [50.56317154501667, 125.77222222222223, 0.03333333333333333, 137.59722222222223, 0.022222222222222223, 299.96666666666664, 162.33055555555555, 0.005555555555555556, 125.64444444444445, 30.582348853370394, 50.51111111111111, 299.9166666666667, 0.100021510002151, 165.675, 682.4, 162.33055555555555, 30.558333333333334]
  }],
  meta: {
    preferredVisualisationType: 'nodeGraph'
  },
  name: 'edges'
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/variables.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestDataVariableSupport": () => (/* binding */ TestDataVariableSupport)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

class TestDataVariableSupport extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.StandardVariableSupport {
  toDataQuery(query) {
    return {
      refId: 'TestDataDataSource-QueryVariable',
      stringInput: query.query,
      scenarioId: 'variables-query',
      csvWave: undefined
    };
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdERhdGFEU1BsdWdpbi5mOTE3MWYyNGYxYTlmZjU4YTAxMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQU1BO0FBQ0E7QUFDQTtBQUNPLE1BQU1FLFlBQU4sU0FBMkJELGdEQUEzQixDQUFnRDtFQUNyREUsTUFBTSxHQUFHO0lBQ1Asb0NBQU8saUVBQVA7RUFDRDs7QUFIb0Q7Ozs7Ozs7Ozs7Ozs7O0FDVnZEO0FBRUEsSUFBSUUsS0FBSyxHQUFHLENBQVo7QUFFTyxTQUFTQyxpQkFBVCxHQUF1QztFQUM1QyxNQUFNQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxFQUFWOztFQUNBLElBQUlGLENBQUMsR0FBRyxHQUFSLEVBQWE7SUFDWCxPQUFPSCw0REFBUDtFQUNEOztFQUNELElBQUlHLENBQUMsR0FBRyxHQUFSLEVBQWE7SUFDWCxPQUFPSCx5REFBUDtFQUNEOztFQUNELElBQUlHLENBQUMsR0FBRyxHQUFSLEVBQWE7SUFDWCxPQUFPSCwyREFBUDtFQUNEOztFQUNELElBQUlHLENBQUMsR0FBRyxHQUFSLEVBQWE7SUFDWCxPQUFPSCx3REFBUDtFQUNEOztFQUNELElBQUlHLENBQUMsR0FBRyxHQUFSLEVBQWE7SUFDWCxPQUFPSCx5REFBUDtFQUNEOztFQUNELElBQUlHLENBQUMsR0FBRyxHQUFSLEVBQWE7SUFDWCxPQUFPSCx5REFBUDtFQUNEOztFQUNELE9BQU9BLDJEQUFQO0FBQ0Q7QUFFTSxTQUFTYSxXQUFULEdBQXVCO0VBQzVCWixLQUFLLEdBQUcsQ0FBQ0EsS0FBSyxHQUFHRyxJQUFJLENBQUNVLEtBQUwsQ0FBV1YsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLENBQTNCLENBQVQsSUFBMENVLEtBQUssQ0FBQ0MsTUFBeEQ7RUFDQSxPQUFPRCxLQUFLLENBQUNkLEtBQUQsQ0FBWjtBQUNEO0FBRU0sU0FBU2dCLGFBQVQsQ0FBdUJELE1BQU0sR0FBRyxFQUFoQyxFQUFvQztFQUN6QyxJQUFJRSxJQUFJLEdBQUdMLFdB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d2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9Db25maWdFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9Mb2dJcHN1bS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9UZXN0SW5mb1RhYi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Rlc3RkYXRhL2NvbXBvbmVudHMvQ1NWQ29udGVudEVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Rlc3RkYXRhL2NvbXBvbmVudHMvQ1NWRmlsZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Rlc3RkYXRhL2NvbXBvbmVudHMvQ1NWV2F2ZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Rlc3RkYXRhL2NvbXBvbmVudHMvRXJyb3JFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL0dyYWZhbmFMaXZlRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9Ob2RlR3JhcGhFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL1ByZWRpY3RhYmxlUHVsc2VFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL1JhbmRvbVdhbGtFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL1Jhd0ZyYW1lRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9TaW11bGF0aW9uUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL1NpbXVsYXRpb25TY2hlbWFGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9TdHJlYW1pbmdDbGllbnRFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL1VTQVF1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9tZXRyaWNUcmVlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9tb2R1bGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9ub2RlR3JhcGhVdGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvcnVuU3RyZWFtcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvdGVzdERhdGEvc2VydmljZU1hcFJlc3BvbnNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS92YXJpYWJsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG50eXBlIFByb3BzID0gRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxhbnk+O1xuXG4vKipcbiAqIEVtcHR5IENvbmZpZyBFZGl0b3IgLS0gc2V0dGluZ3MgdG8gc2F2ZVxuICovXG5leHBvcnQgY2xhc3MgQ29uZmlnRWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH1cbn1cbiIsImltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmxldCBpbmRleCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21Mb2dMZXZlbCgpOiBMb2dMZXZlbCB7XG4gIGNvbnN0IHYgPSBNYXRoLnJhbmRvbSgpO1xuICBpZiAodiA+IDAuOSkge1xuICAgIHJldHVybiBMb2dMZXZlbC5jcml0aWNhbDtcbiAgfVxuICBpZiAodiA+IDAuOCkge1xuICAgIHJldHVybiBMb2dMZXZlbC5lcnJvcjtcbiAgfVxuICBpZiAodiA+IDAuNykge1xuICAgIHJldHVybiBMb2dMZXZlbC53YXJuaW5nO1xuICB9XG4gIGlmICh2ID4gMC40KSB7XG4gICAgcmV0dXJuIExvZ0xldmVsLmluZm87XG4gIH1cbiAgaWYgKHYgPiAwLjMpIHtcbiAgICByZXR1cm4gTG9nTGV2ZWwuZGVidWc7XG4gIH1cbiAgaWYgKHYgPiAwLjEpIHtcbiAgICByZXR1cm4gTG9nTGV2ZWwudHJhY2U7XG4gIH1cbiAgcmV0dXJuIExvZ0xldmVsLnVua25vd247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0V29yZCgpIHtcbiAgaW5kZXggPSAoaW5kZXggKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSkgJSB3b3Jkcy5sZW5ndGg7XG4gIHJldHVybiB3b3Jkc1tpbmRleF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21MaW5lKGxlbmd0aCA9IDYwKSB7XG4gIGxldCBsaW5lID0gZ2V0TmV4dFdvcmQoKTtcbiAgd2hpbGUgKGxpbmUubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgbGluZSArPSAnICcgKyBnZXROZXh0V29yZCgpO1xuICB9XG4gIHJldHVybiBsaW5lO1xufVxuXG5jb25zdCB3b3JkcyA9IFtcbiAgJ0F0JyxcbiAgJ3Zlcm8nLFxuICAnZW9zJyxcbiAgJ2V0JyxcbiAgJ2FjY3VzYW11cycsXG4gICdldCcsXG4gICdpdXN0bycsXG4gICdvZGlvJyxcbiAgJ2RpZ25pc3NpbW9zJyxcbiAgJ2R1Y2ltdXMnLFxuICAncXVpJyxcbiAgJ2JsYW5kaXRpaXMnLFxuICAncHJhZXNlbnRpdW0nLFxuICAndm9sdXB0YXR1bScsXG4gICdkZWxlbml0aScsXG4gICdhdHF1ZScsXG4gICdjb3JydXB0aScsXG4gICdxdW9zJyxcbiAgJ2RvbG9yZXMnLFxuICAnZXQnLFxuICAncXVhcycsXG4gICdtb2xlc3RpYXMnLFxuICAnZXhjZXB0dXJpJyxcbiAgJ3NpbnQnLFxuICAnb2NjYWVjYXRpJyxcbiAgJ2N1cGlkaXRhdGUnLFxuICAnbm9uJyxcbiAgJ3Byb3ZpZGVudCcsXG4gICdzaW1pbGlxdWUnLFxuICAnc3VudCcsXG4gICdpbicsXG4gICdjdWxwYScsXG4gICdxdWknLFxuICAnb2ZmaWNpYScsXG4gICdkZXNlcnVudCcsXG4gICdtb2xsaXRpYScsXG4gICdhbmltaScsXG4gICdpZCcsXG4gICdlc3QnLFxuICAnbGFib3J1bScsXG4gICdldCcsXG4gICdkb2xvcnVtJyxcbiAgJ2Z1Z2EnLFxuICAnRXQnLFxuICAnaGFydW0nLFxuICAncXVpZGVtJyxcbiAgJ3JlcnVtJyxcbiAgJ2ZhY2lsaXMnLFxuICAnZXN0JyxcbiAgJ2V0JyxcbiAgJ2V4cGVkaXRhJyxcbiAgJ2Rpc3RpbmN0aW8nLFxuICAnTmFtJyxcbiAgJ2xpYmVybycsXG4gICd0ZW1wb3JlJyxcbiAgJ2N1bScsXG4gICdzb2x1dGEnLFxuICAnbm9iaXMnLFxuICAnZXN0JyxcbiAgJ2VsaWdlbmRpJyxcbiAgJ29wdGlvJyxcbiAgJ2N1bXF1ZScsXG4gICduaWhpbCcsXG4gICdpbXBlZGl0JyxcbiAgJ3F1bycsXG4gICdtaW51cycsXG4gICdpZCcsXG4gICdxdW9kJyxcbiAgJ21heGltZScsXG4gICdwbGFjZWF0JyxcbiAgJ2ZhY2VyZScsXG4gICdwb3NzaW11cycsXG4gICdvbW5pcycsXG4gICd2b2x1cHRhcycsXG4gICdhc3N1bWVuZGEnLFxuICAnZXN0JyxcbiAgJ29tbmlzJyxcbiAgJ2RvbG9yJyxcbiAgJ3JlcGVsbGVuZHVzJyxcbiAgJ1RlbXBvcmlidXMnLFxuICAnYXV0ZW0nLFxuICAncXVpYnVzZGFtJyxcbiAgJ2V0JyxcbiAgJ2F1dCcsXG4gICdvZmZpY2lpcycsXG4gICdkZWJpdGlzJyxcbiAgJ2F1dCcsXG4gICdyZXJ1bScsXG4gICduZWNlc3NpdGF0aWJ1cycsXG4gICdzYWVwZScsXG4gICdldmVuaWV0JyxcbiAgJ3V0JyxcbiAgJ2V0JyxcbiAgJ3ZvbHVwdGF0ZXMnLFxuICAncmVwdWRpYW5kYWUnLFxuICAnc2ludCcsXG4gICdldCcsXG4gICdtb2xlc3RpYWUnLFxuICAnbm9uJyxcbiAgJ3JlY3VzYW5kYWUnLFxuICAnSXRhcXVlJyxcbiAgJ2VhcnVtJyxcbiAgJ3JlcnVtJyxcbiAgJ2hpYycsXG4gICd0ZW5ldHVyJyxcbiAgJ2EnLFxuICAnc2FwaWVudGUnLFxuICAnZGVsZWN0dXMnLFxuICAndXQnLFxuICAnYXV0JyxcbiAgJ3JlaWNpZW5kaXMnLFxuICAndm9sdXB0YXRpYnVzJyxcbiAgJ21haW9yZXMnLFxuICAnYWxpYXMnLFxuICAnY29uc2VxdWF0dXInLFxuICAnYXV0JyxcbiAgJ3BlcmZlcmVuZGlzJyxcbiAgJ2RvbG9yaWJ1cycsXG4gICdhc3BlcmlvcmVzJyxcbiAgJ3JlcGVsbGF0Jyxcbl07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIEZvcm1FdmVudCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JQcm9wcywgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgYXMgZWRpdG9yU2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElubGluZVN3aXRjaCwgSW5wdXQsIFNlbGVjdCwgVGV4dEFyZWEgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFJhbmRvbVdhbGtFZGl0b3IsIFN0cmVhbWluZ0NsaWVudEVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDU1ZDb250ZW50RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL0NTVkNvbnRlbnRFZGl0b3InO1xuaW1wb3J0IHsgQ1NWRmlsZUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9DU1ZGaWxlRWRpdG9yJztcbmltcG9ydCB7IENTVldhdmVzRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL0NTVldhdmVFZGl0b3InO1xuaW1wb3J0IEVycm9yRWRpdG9yIGZyb20gJy4vY29tcG9uZW50cy9FcnJvckVkaXRvcic7XG5pbXBvcnQgeyBHcmFmYW5hTGl2ZUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9HcmFmYW5hTGl2ZUVkaXRvcic7XG5pbXBvcnQgeyBOb2RlR3JhcGhFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvTm9kZUdyYXBoRWRpdG9yJztcbmltcG9ydCB7IFByZWRpY3RhYmxlUHVsc2VFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvUHJlZGljdGFibGVQdWxzZUVkaXRvcic7XG5pbXBvcnQgeyBSYXdGcmFtZUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9SYXdGcmFtZUVkaXRvcic7XG5pbXBvcnQgeyBTaW11bGF0aW9uUXVlcnlFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvU2ltdWxhdGlvblF1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IFVTQVF1ZXJ5RWRpdG9yLCB1c2FRdWVyeU1vZGVzIH0gZnJvbSAnLi9jb21wb25lbnRzL1VTQVF1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IGRlZmF1bHRDU1ZXYXZlUXVlcnksIGRlZmF1bHRQdWxzZVF1ZXJ5LCBkZWZhdWx0UXVlcnkgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBUZXN0RGF0YURhdGFTb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgZGVmYXVsdFN0cmVhbVF1ZXJ5IH0gZnJvbSAnLi9ydW5TdHJlYW1zJztcbmltcG9ydCB7IENTVldhdmUsIE5vZGVzUXVlcnksIFRlc3REYXRhUXVlcnksIFVTQVF1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHNob3dMYWJlbHNGb3IgPSBbJ3JhbmRvbV93YWxrJywgJ3ByZWRpY3RhYmxlX3B1bHNlJ107XG5jb25zdCBlbmRwb2ludHMgPSBbXG4gIHsgdmFsdWU6ICdkYXRhc291cmNlcycsIGxhYmVsOiAnRGF0YSBTb3VyY2VzJyB9LFxuICB7IHZhbHVlOiAnc2VhcmNoJywgbGFiZWw6ICdTZWFyY2gnIH0sXG4gIHsgdmFsdWU6ICdhbm5vdGF0aW9ucycsIGxhYmVsOiAnQW5ub3RhdGlvbnMnIH0sXG5dO1xuXG5jb25zdCBzZWxlY3RvcnMgPSBlZGl0b3JTZWxlY3RvcnMuY29tcG9uZW50cy5EYXRhU291cmNlLlRlc3REYXRhLlF1ZXJ5VGFiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRvclByb3BzIHtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xuICBxdWVyeTogVGVzdERhdGFRdWVyeTtcbiAgZHM6IFRlc3REYXRhRGF0YVNvdXJjZTtcbn1cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBRdWVyeUVkaXRvclByb3BzPFRlc3REYXRhRGF0YVNvdXJjZSwgVGVzdERhdGFRdWVyeT47XG5cbmV4cG9ydCBjb25zdCBRdWVyeUVkaXRvciA9ICh7IHF1ZXJ5LCBkYXRhc291cmNlLCBvbkNoYW5nZSwgb25SdW5RdWVyeSB9OiBQcm9wcykgPT4ge1xuICBxdWVyeSA9IHsgLi4uZGVmYXVsdFF1ZXJ5LCAuLi5xdWVyeSB9O1xuXG4gIGNvbnN0IHsgbG9hZGluZywgdmFsdWU6IHNjZW5hcmlvTGlzdCB9ID0gdXNlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgIC8vIG1pZ3JhdGUgbWFudWFsX2VudHJ5ICh1bnVzYWJsZSBzaW5jZSA3LCByZW1vdmVkIGluIDgpXG4gICAgaWYgKHF1ZXJ5LnNjZW5hcmlvSWQgPT09ICdtYW51YWxfZW50cnknICYmIChxdWVyeSBhcyBhbnkpLnBvaW50cykge1xuICAgICAgbGV0IGNzdkNvbnRlbnQgPSAnVGltZSxWYWx1ZVxcbic7XG4gICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIChxdWVyeSBhcyBhbnkpLnBvaW50cykge1xuICAgICAgICBjc3ZDb250ZW50ICs9IGAke3BvaW50WzFdfSwke3BvaW50WzBdfVxcbmA7XG4gICAgICB9XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIHJlZklkOiBxdWVyeS5yZWZJZCxcbiAgICAgICAgZGF0YXNvdXJjZTogcXVlcnkuZGF0YXNvdXJjZSxcbiAgICAgICAgc2NlbmFyaW9JZDogJ2Nzdl9jb250ZW50JyxcbiAgICAgICAgY3N2Q29udGVudCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHMgPSBhd2FpdCBkYXRhc291cmNlLmdldFNjZW5hcmlvcygpO1xuICAgIGNvbnN0IGhpZGVBbGlhcyA9IFsnc2ltdWxhdGlvbiddO1xuICAgIHJldHVybiB2YWxzLm1hcCgodikgPT4gKHtcbiAgICAgIC4uLnYsXG4gICAgICBoaWRlQWxpYXNGaWVsZDogaGlkZUFsaWFzLmluY2x1ZGVzKHYuaWQpLFxuICAgIH0pKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uVXBkYXRlID0gKHF1ZXJ5OiBUZXN0RGF0YVF1ZXJ5KSA9PiB7XG4gICAgb25DaGFuZ2UocXVlcnkpO1xuICAgIG9uUnVuUXVlcnkoKTtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50U2NlbmFyaW8gPSB1c2VNZW1vKFxuICAgICgpID0+IHNjZW5hcmlvTGlzdD8uZmluZCgoc2NlbmFyaW8pID0+IHNjZW5hcmlvLmlkID09PSBxdWVyeS5zY2VuYXJpb0lkKSxcbiAgICBbc2NlbmFyaW9MaXN0LCBxdWVyeV1cbiAgKTtcbiAgY29uc3Qgc2NlbmFyaW9JZCA9IGN1cnJlbnRTY2VuYXJpbz8uaWQ7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY3VycmVudFNjZW5hcmlvPy5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBvblNjZW5hcmlvQ2hhbmdlID0gKGl0ZW06IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KSA9PiB7XG4gICAgY29uc3Qgc2NlbmFyaW8gPSBzY2VuYXJpb0xpc3Q/LmZpbmQoKHNjKSA9PiBzYy5pZCA9PT0gaXRlbS52YWx1ZSk7XG5cbiAgICBpZiAoIXNjZW5hcmlvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgbW9kZWwgZnJvbSBleGlzdGluZyBwcm9wcyB0aGF0IGJlbG9uZyB0byBvdGhlciBzY2VuYXJpb3NcbiAgICBjb25zdCB1cGRhdGU6IFRlc3REYXRhUXVlcnkgPSB7XG4gICAgICBzY2VuYXJpb0lkOiBpdGVtLnZhbHVlISxcbiAgICAgIHJlZklkOiBxdWVyeS5yZWZJZCxcbiAgICAgIGFsaWFzOiBxdWVyeS5hbGlhcyxcbiAgICAgIGRhdGFzb3VyY2U6IHF1ZXJ5LmRhdGFzb3VyY2UsXG4gICAgfTtcblxuICAgIGlmIChzY2VuYXJpby5zdHJpbmdJbnB1dCkge1xuICAgICAgdXBkYXRlLnN0cmluZ0lucHV0ID0gc2NlbmFyaW8uc3RyaW5nSW5wdXQ7XG4gICAgfVxuXG4gICAgc3dpdGNoIChzY2VuYXJpby5pZCkge1xuICAgICAgY2FzZSAnZ3JhZmFuYV9hcGknOlxuICAgICAgICB1cGRhdGUuc3RyaW5nSW5wdXQgPSAnZGF0YXNvdXJjZXMnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmVhbWluZ19jbGllbnQnOlxuICAgICAgICB1cGRhdGUuc3RyZWFtID0gZGVmYXVsdFN0cmVhbVF1ZXJ5O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xpdmUnOlxuICAgICAgICB1cGRhdGUuY2hhbm5lbCA9ICdyYW5kb20tMnMtc3RyZWFtJzsgLy8gZGVmYXVsdCBzdHJlYW1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzaW11bGF0aW9uJzpcbiAgICAgICAgdXBkYXRlLnNpbSA9IHsga2V5OiB7IHR5cGU6ICdmbGlnaHQnLCB0aWNrOiAxMCB9IH07IC8vIGRlZmF1bHQgc3RyZWFtXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHJlZGljdGFibGVfcHVsc2UnOlxuICAgICAgICB1cGRhdGUucHVsc2VXYXZlID0gZGVmYXVsdFB1bHNlUXVlcnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHJlZGljdGFibGVfY3N2X3dhdmUnOlxuICAgICAgICB1cGRhdGUuY3N2V2F2ZSA9IGRlZmF1bHRDU1ZXYXZlUXVlcnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndXNhJzpcbiAgICAgICAgdXBkYXRlLnVzYSA9IHtcbiAgICAgICAgICBtb2RlOiB1c2FRdWVyeU1vZGVzWzBdLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHVwZGF0ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlOiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgdHlwZSB9ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgbGV0IG5ld1ZhbHVlOiBhbnkgPSB2YWx1ZTtcblxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgbmV3VmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChuYW1lID09PSAnbGV2ZWxDb2x1bW4nKSB7XG4gICAgICBuZXdWYWx1ZSA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHsgLi4ucXVlcnksIFtuYW1lXTogbmV3VmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25GaWVsZENoYW5nZSA9IChmaWVsZDogc3RyaW5nKSA9PiAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCB0eXBlIH0gPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGxldCBuZXdWYWx1ZTogYW55ID0gdmFsdWU7XG5cbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIG5ld1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSh7IC4uLnF1ZXJ5LCBbZmllbGRdOiB7IC4uLihxdWVyeSBhcyBhbnkpW2ZpZWxkXSwgW25hbWVdOiBuZXdWYWx1ZSB9IH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uRW5kUG9pbnRDaGFuZ2UgPSAoeyB2YWx1ZSB9OiBTZWxlY3RhYmxlVmFsdWUpID0+IHtcbiAgICBvblVwZGF0ZSh7IC4uLnF1ZXJ5LCBzdHJpbmdJbnB1dDogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25TdHJlYW1DbGllbnRDaGFuZ2UgPSBvbkZpZWxkQ2hhbmdlKCdzdHJlYW0nKTtcbiAgY29uc3Qgb25QdWxzZVdhdmVDaGFuZ2UgPSBvbkZpZWxkQ2hhbmdlKCdwdWxzZVdhdmUnKTtcbiAgY29uc3Qgb25VU0FTdGF0c0NoYW5nZSA9ICh1c2E/OiBVU0FRdWVyeSkgPT4ge1xuICAgIG9uVXBkYXRlKHsgLi4ucXVlcnksIHVzYSB9KTtcbiAgfTtcblxuICBjb25zdCBvbkNTVldhdmVDaGFuZ2UgPSAoY3N2V2F2ZT86IENTVldhdmVbXSkgPT4ge1xuICAgIG9uVXBkYXRlKHsgLi4ucXVlcnksIGNzdldhdmUgfSk7XG4gIH07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIChzY2VuYXJpb0xpc3QgfHwgW10pXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+ICh7IGxhYmVsOiBpdGVtLm5hbWUsIHZhbHVlOiBpdGVtLmlkIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sYWJlbC5sb2NhbGVDb21wYXJlKGIubGFiZWwpKSxcbiAgICBbc2NlbmFyaW9MaXN0XVxuICApO1xuICBjb25zdCBzaG93TGFiZWxzID0gdXNlTWVtbygoKSA9PiBzaG93TGFiZWxzRm9yLmluY2x1ZGVzKHF1ZXJ5LnNjZW5hcmlvSWQgPz8gJycpLCBbcXVlcnldKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPElubGluZUZpZWxkUm93IGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5zY2VuYXJpb1NlbGVjdENvbnRhaW5lcn0+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbFdpZHRoPXsxNH0gbGFiZWw9XCJTY2VuYXJpb1wiPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIGlucHV0SWQ9e2B0ZXN0LWRhdGEtc2NlbmFyaW8tc2VsZWN0LSR7cXVlcnkucmVmSWR9YH1cbiAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLnZhbHVlID09PSBxdWVyeS5zY2VuYXJpb0lkKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNjZW5hcmlvQ2hhbmdlfVxuICAgICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIHtjdXJyZW50U2NlbmFyaW8/LnN0cmluZ0lucHV0ICYmIChcbiAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJTdHJpbmcgSW5wdXRcIj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICAgIGlkPXtgc3RyaW5nSW5wdXQtJHtxdWVyeS5yZWZJZH1gfVxuICAgICAgICAgICAgICBuYW1lPVwic3RyaW5nSW5wdXRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cXVlcnkuc3RyaW5nSW5wdXR9XG4gICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5zdHJpbmdJbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICl9XG4gICAgICAgIHtCb29sZWFuKCFjdXJyZW50U2NlbmFyaW8/LmhpZGVBbGlhc0ZpZWxkKSAmJiAoXG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiQWxpYXNcIiBsYWJlbFdpZHRoPXsxNH0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAgICAgICBpZD17YGFsaWFzLSR7cXVlcnkucmVmSWR9YH1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm9wdGlvbmFsXCJcbiAgICAgICAgICAgICAgcGF0dGVybj0nW148PiZcXFxcXCJdKydcbiAgICAgICAgICAgICAgbmFtZT1cImFsaWFzXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LmFsaWFzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgKX1cbiAgICAgICAge3Nob3dMYWJlbHMgJiYgKFxuICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJMYWJlbHNcIlxuICAgICAgICAgICAgbGFiZWxXaWR0aD17MTR9XG4gICAgICAgICAgICB0b29sdGlwPXtcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICBTZXQgbGFiZWxzIHVzaW5nIGEga2V5PXZhbHVlIHN5bnRheDpcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICB7YHsga2V5ID0gXCJ2YWx1ZVwiLCBrZXkyID0gXCJ2YWx1ZVwiIH1gfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIGtleT0mcXVvdDt2YWx1ZSZxdW90Oywga2V5Mj0mcXVvdDt2YWx1ZSZxdW90O1xuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIGtleT12YWx1ZSwga2V5Mj12YWx1ZVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAgICAgICBpZD17YGxhYmVscy0ke3F1ZXJ5LnJlZklkfWB9XG4gICAgICAgICAgICAgIG5hbWU9XCJsYWJlbHNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5Py5sYWJlbHN9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwia2V5PXZhbHVlLCBrZXkyPXZhbHVlMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICl9XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICB7c2NlbmFyaW9JZCA9PT0gJ3JhbmRvbV93YWxrJyAmJiA8UmFuZG9tV2Fsa0VkaXRvciBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gcXVlcnk9e3F1ZXJ5fSBkcz17ZGF0YXNvdXJjZX0gLz59XG4gICAgICB7c2NlbmFyaW9JZCA9PT0gJ3N0cmVhbWluZ19jbGllbnQnICYmIChcbiAgICAgICAgPFN0cmVhbWluZ0NsaWVudEVkaXRvciBvbkNoYW5nZT17b25TdHJlYW1DbGllbnRDaGFuZ2V9IHF1ZXJ5PXtxdWVyeX0gZHM9e2RhdGFzb3VyY2V9IC8+XG4gICAgICApfVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdsaXZlJyAmJiA8R3JhZmFuYUxpdmVFZGl0b3Igb25DaGFuZ2U9e29uVXBkYXRlfSBxdWVyeT17cXVlcnl9IGRzPXtkYXRhc291cmNlfSAvPn1cbiAgICAgIHtzY2VuYXJpb0lkID09PSAnc2ltdWxhdGlvbicgJiYgPFNpbXVsYXRpb25RdWVyeUVkaXRvciBvbkNoYW5nZT17b25VcGRhdGV9IHF1ZXJ5PXtxdWVyeX0gZHM9e2RhdGFzb3VyY2V9IC8+fVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdyYXdfZnJhbWUnICYmIDxSYXdGcmFtZUVkaXRvciBvbkNoYW5nZT17b25VcGRhdGV9IHF1ZXJ5PXtxdWVyeX0gZHM9e2RhdGFzb3VyY2V9IC8+fVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdjc3ZfZmlsZScgJiYgPENTVkZpbGVFZGl0b3Igb25DaGFuZ2U9e29uVXBkYXRlfSBxdWVyeT17cXVlcnl9IGRzPXtkYXRhc291cmNlfSAvPn1cbiAgICAgIHtzY2VuYXJpb0lkID09PSAnY3N2X2NvbnRlbnQnICYmIDxDU1ZDb250ZW50RWRpdG9yIG9uQ2hhbmdlPXtvblVwZGF0ZX0gcXVlcnk9e3F1ZXJ5fSBkcz17ZGF0YXNvdXJjZX0gLz59XG4gICAgICB7c2NlbmFyaW9JZCA9PT0gJ2xvZ3MnICYmIChcbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkxpbmVzXCIgbGFiZWxXaWR0aD17MTR9PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBuYW1lPVwibGluZXNcIlxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkubGluZXN9XG4gICAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkxldmVsXCIgbGFiZWxXaWR0aD17MTR9PlxuICAgICAgICAgICAgPElubGluZVN3aXRjaCBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gbmFtZT1cImxldmVsQ29sdW1uXCIgdmFsdWU9eyEhcXVlcnkubGV2ZWxDb2x1bW59IC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICl9XG5cbiAgICAgIHtzY2VuYXJpb0lkID09PSAndXNhJyAmJiA8VVNBUXVlcnlFZGl0b3Igb25DaGFuZ2U9e29uVVNBU3RhdHNDaGFuZ2V9IHF1ZXJ5PXtxdWVyeS51c2EgPz8ge319IC8+fVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdncmFmYW5hX2FwaScgJiYgKFxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWxXaWR0aD17MTR9IGxhYmVsPVwiRW5kcG9pbnRcIj5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBvcHRpb25zPXtlbmRwb2ludHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25FbmRQb2ludENoYW5nZX1cbiAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgIHZhbHVlPXtlbmRwb2ludHMuZmluZCgoZXApID0+IGVwLnZhbHVlID09PSBxdWVyeS5zdHJpbmdJbnB1dCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICl9XG5cbiAgICAgIHtzY2VuYXJpb0lkID09PSAnYXJyb3cnICYmIChcbiAgICAgICAgPElubGluZUZpZWxkIGdyb3c+XG4gICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICBuYW1lPVwic3RyaW5nSW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnN0cmluZ0lucHV0fVxuICAgICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvcHkgYmFzZTY0IHRleHQgZGF0YSBmcm9tIHF1ZXJ5IHJlc3VsdFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgKX1cblxuICAgICAge3NjZW5hcmlvSWQgPT09ICdwcmVkaWN0YWJsZV9wdWxzZScgJiYgKFxuICAgICAgICA8UHJlZGljdGFibGVQdWxzZUVkaXRvciBvbkNoYW5nZT17b25QdWxzZVdhdmVDaGFuZ2V9IHF1ZXJ5PXtxdWVyeX0gZHM9e2RhdGFzb3VyY2V9IC8+XG4gICAgICApfVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdwcmVkaWN0YWJsZV9jc3Zfd2F2ZScgJiYgPENTVldhdmVzRWRpdG9yIG9uQ2hhbmdlPXtvbkNTVldhdmVDaGFuZ2V9IHdhdmVzPXtxdWVyeS5jc3ZXYXZlfSAvPn1cbiAgICAgIHtzY2VuYXJpb0lkID09PSAnbm9kZV9ncmFwaCcgJiYgKFxuICAgICAgICA8Tm9kZUdyYXBoRWRpdG9yIG9uQ2hhbmdlPXsodmFsOiBOb2Rlc1F1ZXJ5KSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBub2RlczogdmFsIH0pfSBxdWVyeT17cXVlcnl9IC8+XG4gICAgICApfVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdzZXJ2ZXJfZXJyb3JfNTAwJyAmJiA8RXJyb3JFZGl0b3Igb25DaGFuZ2U9e29uVXBkYXRlfSBxdWVyeT17cXVlcnl9IGRzPXtkYXRhc291cmNlfSAvPn1cblxuICAgICAge2Rlc2NyaXB0aW9uICYmIDxwPntkZXNjcmlwdGlvbn08L3A+fVxuICAgIDwvPlxuICApO1xufTtcbiIsIi8vIExpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsdWdpbkNvbmZpZ1BhZ2VQcm9wcywgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VKc29uRGF0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTGlua0J1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuLy8gVHlwZXNcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgUGx1Z2luQ29uZmlnUGFnZVByb3BzPERhdGFTb3VyY2VQbHVnaW5NZXRhPERhdGFTb3VyY2VKc29uRGF0YT4+IHt9XG5cbmV4cG9ydCBjbGFzcyBUZXN0SW5mb1RhYiBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBTZWUgZ2l0aHViIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHNldHRpbmcgdXAgYSByZXByb2R1Y2libGUgdGVzdCBlbnZpcm9ubWVudC5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3JhZmFuYS9ncmFmYW5hL3RyZWUvbWFpbi9kZXZlbnZcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBHaXRIdWJcbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvZGVFZGl0b3IgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuXG5leHBvcnQgY29uc3QgQ1NWQ29udGVudEVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSB9OiBFZGl0b3JQcm9wcykgPT4ge1xuICBjb25zdCBvblNhdmVDU1YgPSAoY3N2Q29udGVudDogc3RyaW5nKSA9PiB7XG4gICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgY3N2Q29udGVudCB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb2RlRWRpdG9yXG4gICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgIGxhbmd1YWdlPVwiY3N2XCJcbiAgICAgIHZhbHVlPXtxdWVyeS5jc3ZDb250ZW50ID8/ICcnfVxuICAgICAgb25CbHVyPXtvblNhdmVDU1Z9XG4gICAgICBvblNhdmU9e29uU2F2ZUNTVn1cbiAgICAgIHNob3dNaW5pTWFwPXtmYWxzZX1cbiAgICAgIHNob3dMaW5lTnVtYmVycz17dHJ1ZX1cbiAgICAvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuXG5leHBvcnQgY29uc3QgQ1NWRmlsZUVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSB9OiBFZGl0b3JQcm9wcykgPT4ge1xuICBjb25zdCBvbkNoYW5nZUZpbGVOYW1lID0gKHsgdmFsdWUgfTogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IHtcbiAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBjc3ZGaWxlTmFtZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgZmlsZXMgPSBbXG4gICAgJ2ZsaWdodF9pbmZvX2J5X3N0YXRlLmNzdicsXG4gICAgJ3BvcHVsYXRpb25fYnlfc3RhdGUuY3N2JyxcbiAgICAnZ2RwX3Blcl9jYXBpdGEuY3N2JyxcbiAgICAnanNfbGlicmFyaWVzLmNzdicsXG4gICAgJ29obGNfZG9nZWNvaW4uY3N2JyxcbiAgICAnd2VpZ2h0X2hlaWdodC5jc3YnLFxuICAgICdicm93c2VyX21hcmtldHNoYXJlLmNzdicsXG4gIF0ubWFwKChuYW1lKSA9PiAoeyBsYWJlbDogbmFtZSwgdmFsdWU6IG5hbWUgfSkpO1xuXG4gIHJldHVybiAoXG4gICAgPElubGluZUZpZWxkUm93PlxuICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiRmlsZVwiIGxhYmVsV2lkdGg9ezE0fT5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VGaWxlTmFtZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBjc3YgZmlsZVwiXG4gICAgICAgICAgb3B0aW9ucz17ZmlsZXN9XG4gICAgICAgICAgdmFsdWU9e2ZpbGVzLmZpbmQoKGYpID0+IGYudmFsdWUgPT09IHF1ZXJ5LmNzdkZpbGVOYW1lKX1cbiAgICAgICAgLz5cbiAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgZGVmYXVsdENTVldhdmVRdWVyeSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDU1ZXYXZlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgV2F2ZXNQcm9wcyB7XG4gIHdhdmVzPzogQ1NWV2F2ZVtdO1xuICBvbkNoYW5nZTogKHdhdmVzOiBDU1ZXYXZlW10pID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBXYXZlUHJvcHMge1xuICB3YXZlOiBDU1ZXYXZlO1xuICBpbmRleDogbnVtYmVyO1xuICBsYXN0OiBib29sZWFuO1xuICBvbkNoYW5nZTogKGluZGV4OiBudW1iZXIsIHdhdmU/OiBDU1ZXYXZlKSA9PiB2b2lkO1xuICBvbkFkZDogKCkgPT4gdm9pZDtcbn1cblxuY2xhc3MgQ1NWV2F2ZUVkaXRvciBleHRlbmRzIFB1cmVDb21wb25lbnQ8V2F2ZVByb3BzPiB7XG4gIG9uRmllbGRDaGFuZ2UgPSAoZmllbGQ6IGtleW9mIENTVldhdmUpID0+IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMud2F2ZSxcbiAgICAgIFtmaWVsZF06IHZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uTmFtZUNoYW5nZSA9IHRoaXMub25GaWVsZENoYW5nZSgnbmFtZScpO1xuICBvbkxhYmVsc0NoYW5nZSA9IHRoaXMub25GaWVsZENoYW5nZSgnbGFiZWxzJyk7XG4gIG9uQ1NWQ2hhbmdlID0gdGhpcy5vbkZpZWxkQ2hhbmdlKCd2YWx1ZXNDU1YnKTtcbiAgb25UaW1lU3RlcENoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRpbWVTdGVwID0gZS50YXJnZXQudmFsdWVBc051bWJlcjtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMud2F2ZSxcbiAgICAgIHRpbWVTdGVwLFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHdhdmUsIGxhc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGFjdGlvbiA9IHRoaXMucHJvcHMub25BZGQ7XG4gICAgaWYgKCFsYXN0KSB7XG4gICAgICBhY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgdW5kZWZpbmVkKTsgLy8gcmVtb3ZlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIGxhYmVsPXsnVmFsdWVzJ31cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIkNvbW1hIHNlcGFyYXRlZCB2YWx1ZXMuIEVhY2ggdmFsdWUgbWF5IGJlIGFuIGludCwgZmxvYXQsIG9yIG51bGwgYW5kIG11c3Qgbm90IGJlIGVtcHR5LiBXaGl0ZXNwYWNlIGFuZCB0cmFpbGluZyBjb21tYXMgYXJlIHJlbW92ZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXt3YXZlLnZhbHVlc0NTVn0gcGxhY2Vob2xkZXI9eydDU1YgdmFsdWVzJ30gb25DaGFuZ2U9e3RoaXMub25DU1ZDaGFuZ2V9IGF1dG9Gb2N1cz17dHJ1ZX0gLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPXsnU3RlcCd9IHRvb2x0aXA9XCJUaGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiBkYXRhcG9pbnRzLlwiPlxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT17d2F2ZS50aW1lU3RlcH0gdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPXsnNjAnfSB3aWR0aD17Nn0gb25DaGFuZ2U9e3RoaXMub25UaW1lU3RlcENoYW5nZX0gLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPXsnTGFiZWxzJ30+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXt3YXZlLmxhYmVsc30gcGxhY2Vob2xkZXI9eydsYWJlbHMnfSB3aWR0aD17MTJ9IG9uQ2hhbmdlPXt0aGlzLm9uTGFiZWxzQ2hhbmdlfSAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9eydOYW1lJ30+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXt3YXZlLm5hbWV9IHBsYWNlaG9sZGVyPXsnbmFtZSd9IHdpZHRoPXsxMH0gb25DaGFuZ2U9e3RoaXMub25OYW1lQ2hhbmdlfSAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8QnV0dG9uIGljb249e2xhc3QgPyAncGx1cycgOiAnbWludXMnfSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17YWN0aW9ufSAvPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDU1ZXYXZlc0VkaXRvciBleHRlbmRzIFB1cmVDb21wb25lbnQ8V2F2ZXNQcm9wcz4ge1xuICBvbkNoYW5nZSA9IChpbmRleDogbnVtYmVyLCB3YXZlPzogQ1NWV2F2ZSkgPT4ge1xuICAgIGxldCB3YXZlcyA9IFsuLi4odGhpcy5wcm9wcy53YXZlcyA/PyBkZWZhdWx0Q1NWV2F2ZVF1ZXJ5KV07XG4gICAgaWYgKHdhdmUpIHtcbiAgICAgIHdhdmVzW2luZGV4XSA9IHsgLi4ud2F2ZSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZW1vdmUgdGhlIGVsZW1lbnRcbiAgICAgIHdhdmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uod2F2ZXMpO1xuICB9O1xuXG4gIG9uQWRkID0gKCkgPT4ge1xuICAgIGNvbnN0IHdhdmVzID0gWy4uLih0aGlzLnByb3BzLndhdmVzID8/IGRlZmF1bHRDU1ZXYXZlUXVlcnkpXTtcbiAgICB3YXZlcy5wdXNoKHsgLi4uZGVmYXVsdENTVldhdmVRdWVyeVswXSB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHdhdmVzKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHdhdmVzID0gdGhpcy5wcm9wcy53YXZlcyA/PyBkZWZhdWx0Q1NWV2F2ZVF1ZXJ5O1xuICAgIGlmICghd2F2ZXMubGVuZ3RoKSB7XG4gICAgICB3YXZlcyA9IGRlZmF1bHRDU1ZXYXZlUXVlcnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHt3YXZlcy5tYXAoKHdhdmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPENTVldhdmVFZGl0b3JcbiAgICAgICAgICAgIGtleT17YCR7aW5kZXh9LyR7d2F2ZS52YWx1ZXNDU1Z9YH1cbiAgICAgICAgICAgIHdhdmU9e3dhdmV9XG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICBvbkFkZD17dGhpcy5vbkFkZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgbGFzdD17aW5kZXggPT09IHdhdmVzLmxlbmd0aCAtIDF9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRWRpdG9yUHJvcHMgfSBmcm9tICcuLi9RdWVyeUVkaXRvcic7XG5cbmNvbnN0IEVSUk9SX09QVElPTlMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ1NlcnZlciBwYW5pYycsXG4gICAgdmFsdWU6ICdzZXJ2ZXJfcGFuaWMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdGcm9udGVuZCBleGNlcHRpb24nLFxuICAgIHZhbHVlOiAnZnJvbnRlbmRfZXhjZXB0aW9uJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnRnJvbnRlbmQgb2JzZXJ2YWJsZScsXG4gICAgdmFsdWU6ICdmcm9udGVuZF9vYnNlcnZhYmxlJyxcbiAgfSxcbl07XG5cbmNvbnN0IEZyb250ZW5kRXJyb3JRdWVyeUVkaXRvcjogUmVhY3QuRkM8RWRpdG9yUHJvcHM+ID0gKHsgcXVlcnksIG9uQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICA8SW5saW5lRmllbGQgbGFiZWxXaWR0aD17MTR9IGxhYmVsPVwiRXJyb3IgdHlwZVwiPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgb3B0aW9ucz17RVJST1JfT1BUSU9OU31cbiAgICAgICAgICB2YWx1ZT17cXVlcnkuZXJyb3JUeXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgZXJyb3JUeXBlOiB2LnZhbHVlIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0lubGluZUZpZWxkPlxuICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGcm9udGVuZEVycm9yUXVlcnlFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBFZGl0b3JQcm9wcyB9IGZyb20gJy4uL1F1ZXJ5RWRpdG9yJztcblxuY29uc3QgbGl2ZVRlc3REYXRhQ2hhbm5lbHMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ3JhbmRvbS0ycy1zdHJlYW0nLFxuICAgIHZhbHVlOiAncmFuZG9tLTJzLXN0cmVhbScsXG4gICAgZGVzY3JpcHRpb246ICdSYW5kb20gc3RyZWFtIHdpdGggcG9pbnRzIGV2ZXJ5IDJzJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAncmFuZG9tLWZsYWtleS1zdHJlYW0nLFxuICAgIHZhbHVlOiAncmFuZG9tLWZsYWtleS1zdHJlYW0nLFxuICAgIGRlc2NyaXB0aW9uOiAnU3RyZWFtIHRoYXQgcmV0dXJucyBkYXRhIGluIHJhbmRvbSBpbnRlcnZhbHMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdyYW5kb20tbGFiZWxlZC1zdHJlYW0nLFxuICAgIHZhbHVlOiAncmFuZG9tLWxhYmVsZWQtc3RyZWFtJyxcbiAgICBkZXNjcmlwdGlvbjogJ1ZhbHVlIHdpdGggbW92aW5nIGxhYmVscycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3JhbmRvbS0yMEh6LXN0cmVhbScsXG4gICAgdmFsdWU6ICdyYW5kb20tMjBIei1zdHJlYW0nLFxuICAgIGRlc2NyaXB0aW9uOiAnUmFuZG9tIHN0cmVhbSB3aXRoIHBvaW50cyBpbiAyMEh6JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBHcmFmYW5hTGl2ZUVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSB9OiBFZGl0b3JQcm9wcykgPT4ge1xuICBjb25zdCBvbkNoYW5uZWxDaGFuZ2UgPSAoeyB2YWx1ZSB9OiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPikgPT4ge1xuICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIGNoYW5uZWw6IHZhbHVlIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPElubGluZUZpZWxkUm93PlxuICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiQ2hhbm5lbFwiIGxhYmVsV2lkdGg9ezE0fT5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFubmVsQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGNoYW5uZWxcIlxuICAgICAgICAgIG9wdGlvbnM9e2xpdmVUZXN0RGF0YUNoYW5uZWxzfVxuICAgICAgICAgIHZhbHVlPXtsaXZlVGVzdERhdGFDaGFubmVscy5maW5kKChmKSA9PiBmLnZhbHVlID09PSBxdWVyeS5jaGFubmVsKX1cbiAgICAgICAgLz5cbiAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbnB1dCwgSW5saW5lRmllbGRSb3csIElubGluZUZpZWxkLCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE5vZGVzUXVlcnksIFRlc3REYXRhUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKHZhbHVlOiBOb2Rlc1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogVGVzdERhdGFRdWVyeTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBOb2RlR3JhcGhFZGl0b3IoeyBxdWVyeSwgb25DaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3QgdHlwZSA9IHF1ZXJ5Lm5vZGVzPy50eXBlIHx8ICdyYW5kb20nO1xuICByZXR1cm4gKFxuICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkRhdGEgdHlwZVwiIGxhYmVsV2lkdGg9ezE0fT5cbiAgICAgICAgPFNlbGVjdDxOb2Rlc1F1ZXJ5Wyd0eXBlJ10+XG4gICAgICAgICAgb3B0aW9ucz17b3B0aW9ucy5tYXAoKG8pID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogbyxcbiAgICAgICAgICAgIHZhbHVlOiBvLFxuICAgICAgICAgIH0pKX1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtID09PSB0eXBlKX1cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5Lm5vZGVzLCB0eXBlOiB2YWx1ZS52YWx1ZSEgfSl9XG4gICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAvPlxuICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIHt0eXBlID09PSAncmFuZG9tJyAmJiAoXG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkNvdW50XCIgbGFiZWxXaWR0aD17MTR9PlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwiY291bnRcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5Lm5vZGVzPy5jb3VudH1cbiAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeS5ub2RlcywgY291bnQ6IGUuY3VycmVudFRhcmdldC52YWx1ZSA/IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC52YWx1ZSwgMTApIDogMCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICl9XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn1cblxuY29uc3Qgb3B0aW9uczogQXJyYXk8Tm9kZXNRdWVyeVsndHlwZSddPiA9IFsncmFuZG9tJywgJ3Jlc3BvbnNlJ107XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgUHVsc2VXYXZlUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGZpZWxkcyA9IFtcbiAgeyBsYWJlbDogJ1N0ZXAnLCBpZDogJ3RpbWVTdGVwJywgcGxhY2Vob2xkZXI6ICc2MCcsIHRvb2x0aXA6ICdUaGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiBkYXRhcG9pbnRzLicgfSxcbiAge1xuICAgIGxhYmVsOiAnT24gQ291bnQnLFxuICAgIGlkOiAnb25Db3VudCcsXG4gICAgcGxhY2Vob2xkZXI6ICczJyxcbiAgICB0b29sdGlwOiAnVGhlIG51bWJlciBvZiB2YWx1ZXMgd2l0aGluIGEgY3ljbGUsIGF0IHRoZSBzdGFydCBvZiB0aGUgY3ljbGUsIHRoYXQgc2hvdWxkIGhhdmUgdGhlIG9uVmFsdWUuJyxcbiAgfSxcbiAgeyBsYWJlbDogJ09mZiBDb3VudCcsIGlkOiAnb2ZmQ291bnQnLCBwbGFjZWhvbGRlcjogJzYnLCB0b29sdGlwOiAnVGhlIG51bWJlciBvZiBvZmZWYWx1ZXMgd2l0aGluIHRoZSBjeWNsZS4nIH0sXG4gIHtcbiAgICBsYWJlbDogJ09uIFZhbHVlJyxcbiAgICBpZDogJ29uVmFsdWUnLFxuICAgIHBsYWNlaG9sZGVyOiAnMScsXG4gICAgdG9vbHRpcDogJ1RoZSB2YWx1ZSBmb3IgXCJvbiB2YWx1ZXNcIiwgbWF5IGJlIGFuIGludCwgZmxvYXQsIG9yIG51bGwuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnT2ZmIFZhbHVlJyxcbiAgICBpZDogJ29mZlZhbHVlJyxcbiAgICBwbGFjZWhvbGRlcjogJzEnLFxuICAgIHRvb2x0aXA6ICdUaGUgdmFsdWUgZm9yIFwib2ZmIHZhbHVlc1wiLCBtYXkgYmUgYSBpbnQsIGZsb2F0LCBvciBudWxsLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUHJlZGljdGFibGVQdWxzZUVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSB9OiBFZGl0b3JQcm9wcykgPT4ge1xuICAvLyBDb252ZXJ0IHZhbHVlcyB0byBudW1iZXJzIGJlZm9yZSBzYXZpbmdcbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuXG4gICAgb25DaGFuZ2UoeyB0YXJnZXQ6IHsgbmFtZSwgdmFsdWU6IE51bWJlcih2YWx1ZSkgfSB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgIHtmaWVsZHMubWFwKCh7IGxhYmVsLCBpZCwgcGxhY2Vob2xkZXIsIHRvb2x0aXAgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD17bGFiZWx9IGxhYmVsV2lkdGg9ezE0fSBrZXk9e2lkfSB0b29sdGlwPXt0b29sdGlwfT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBuYW1lPXtpZH1cbiAgICAgICAgICAgICAgaWQ9e2BwdWxzZVdhdmUuJHtpZH0tJHtxdWVyeS5yZWZJZH1gfVxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkucHVsc2VXYXZlPy5baWQgYXMga2V5b2YgUHVsc2VXYXZlUXVlcnldfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgVGVzdERhdGFRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgcmFuZG9tV2Fsa0ZpZWxkcyA9IFtcbiAgeyBsYWJlbDogJ1NlcmllcyBjb3VudCcsIGlkOiAnc2VyaWVzQ291bnQnLCBwbGFjZWhvbGRlcjogJzEnLCBtaW46IDEsIHN0ZXA6IDEgfSxcbiAgeyBsYWJlbDogJ1N0YXJ0IHZhbHVlJywgaWQ6ICdzdGFydFZhbHVlJywgcGxhY2Vob2xkZXI6ICdhdXRvJywgc3RlcDogMSB9LFxuICB7IGxhYmVsOiAnTWluJywgaWQ6ICdtaW4nLCBwbGFjZWhvbGRlcjogJ25vbmUnLCBzdGVwOiAwLjEgfSxcbiAgeyBsYWJlbDogJ01heCcsIGlkOiAnbWF4JywgcGxhY2Vob2xkZXI6ICdub25lJywgc3RlcDogMC4xIH0sXG4gIHsgbGFiZWw6ICdTcHJlYWQnLCBpZDogJ3NwcmVhZCcsIHBsYWNlaG9sZGVyOiAnMScsIG1pbjogMC41LCBzdGVwOiAwLjEgfSxcbiAgeyBsYWJlbDogJ05vaXNlJywgaWQ6ICdub2lzZScsIHBsYWNlaG9sZGVyOiAnMCcsIG1pbjogMCwgc3RlcDogMC4xIH0sXG4gIHtcbiAgICBsYWJlbDogJ0Ryb3AgKCUpJyxcbiAgICBpZDogJ2Ryb3AnLFxuICAgIHBsYWNlaG9sZGVyOiAnMCcsXG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHN0ZXA6IDEsXG4gICAgdG9vbHRpcDogJ0V4Y2x1ZGUgc29tZSBwZXJjZW50IChjaGFuY2UpIHBvaW50cycsXG4gIH0sXG5dO1xuXG5jb25zdCB0ZXN0U2VsZWN0b3JzID0gc2VsZWN0b3JzLmNvbXBvbmVudHMuRGF0YVNvdXJjZS5UZXN0RGF0YS5RdWVyeVRhYjtcbnR5cGUgU2VsZWN0b3IgPSAnbWF4JyB8ICdtaW4nIHwgJ25vaXNlJyB8ICdzZXJpZXNDb3VudCcgfCAnc3ByZWFkJyB8ICdzdGFydFZhbHVlJyB8ICdkcm9wJztcblxuZXhwb3J0IGNvbnN0IFJhbmRvbVdhbGtFZGl0b3IgPSAoeyBvbkNoYW5nZSwgcXVlcnkgfTogRWRpdG9yUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICB7cmFuZG9tV2Fsa0ZpZWxkcy5tYXAoKHsgbGFiZWwsIGlkLCBtaW4sIHN0ZXAsIHBsYWNlaG9sZGVyLCB0b29sdGlwIH0pID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0ZXN0U2VsZWN0b3JzPy5baWQgYXMgU2VsZWN0b3JdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD17bGFiZWx9IGxhYmVsV2lkdGg9ezE0fSBrZXk9e2lkfSBhcmlhLWxhYmVsPXtzZWxlY3Rvcn0gdG9vbHRpcD17dG9vbHRpcH0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAgICAgICBuYW1lPXtpZH1cbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGlkPXtgcmFuZG9tV2Fsay0ke2lkfS0ke3F1ZXJ5LnJlZklkfWB9XG4gICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgICB2YWx1ZT17KHF1ZXJ5IGFzIGFueSlbaWQgYXMga2V5b2YgVGVzdERhdGFRdWVyeV0gfHwgcGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZGF0YUZyYW1lVG9KU09OLCB0b0RhdGFGcmFtZSwgdG9EYXRhRnJhbWVEVE8gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHRvRGF0YVF1ZXJ5UmVzcG9uc2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEFsZXJ0LCBDb2RlRWRpdG9yIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBFZGl0b3JQcm9wcyB9IGZyb20gJy4uL1F1ZXJ5RWRpdG9yJztcblxuZXhwb3J0IGNvbnN0IFJhd0ZyYW1lRWRpdG9yID0gKHsgb25DaGFuZ2UsIHF1ZXJ5IH06IEVkaXRvclByb3BzKSA9PiB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbd2FybmluZywgc2V0V2FybmluZ10gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgY29uc3Qgb25TYXZlRnJhbWVzID0gKHJhd0ZyYW1lQ29udGVudDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJhd0ZyYW1lQ29udGVudCk7XG4gICAgICBpZiAoaXNBcnJheShqc29uKSkge1xuICAgICAgICBzZXRFcnJvcih1bmRlZmluZWQpO1xuICAgICAgICBzZXRXYXJuaW5nKHVuZGVmaW5lZCk7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHJhd0ZyYW1lQ29udGVudCB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YTogYW55ID0gdW5kZWZpbmVkO1xuXG4gICAgICAvLyBDb3B5IHBhc3RlIGZyb20gcGFuZWwganNvblxuICAgICAgaWYgKGlzQXJyYXkoanNvbi5zZXJpZXMpICYmIGpzb24uc3RhdGUpIHtcbiAgICAgICAgZGF0YSA9IGpzb24uc2VyaWVzLm1hcCgodjogYW55KSA9PiB0b0RhdGFGcmFtZURUTyh0b0RhdGFGcmFtZSh2KSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2hlayBpZiBpdCBpcyBhIGNvcHkgb2YgdGhlIHJhdyByZXN1bHNcbiAgICAgICAgY29uc3QgdiA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2UoeyBkYXRhOiBqc29uIH0pO1xuICAgICAgICBpZiAodi5kYXRhPy5sZW5ndGggJiYgIXYuZXJyb3IpIHtcbiAgICAgICAgICBkYXRhID0gdi5kYXRhLm1hcCgoZikgPT4gZGF0YUZyYW1lVG9KU09OKGYpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnT3JpZ2luYWwnLCBqc29uKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmUnLCBkYXRhKTtcbiAgICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKTtcbiAgICAgICAgc2V0V2FybmluZygnQ29udmVydGVkIHRvIGRpcmVjdCBmcmFtZSByZXN1bHQnKTtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcmF3RnJhbWVDb250ZW50OiBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRFcnJvcignVW5hYmxlIHRvIHJlYWQgZGF0YWZyYW1lcyBpbiB0ZXh0Jyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBhcnNpbmcganNvbicsIGUpO1xuICAgICAgc2V0RXJyb3IoJ0VudGVyIEpTT04gYXJyYXkgb2YgZGF0YSBmcmFtZXMgKG9yIHJhdyBxdWVyeSByZXN1bHRzIGJvZHkpJyk7XG4gICAgICBzZXRXYXJuaW5nKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtlcnJvciAmJiA8QWxlcnQgdGl0bGU9e2Vycm9yfSBzZXZlcml0eT1cImVycm9yXCIgLz59XG4gICAgICB7d2FybmluZyAmJiA8QWxlcnQgdGl0bGU9e3dhcm5pbmd9IHNldmVyaXR5PVwid2FybmluZ1wiIC8+fVxuICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgIGxhbmd1YWdlPVwianNvblwiXG4gICAgICAgIHZhbHVlPXtxdWVyeS5yYXdGcmFtZUNvbnRlbnQgPz8gJ1tdJ31cbiAgICAgICAgb25CbHVyPXtvblNhdmVGcmFtZXN9XG4gICAgICAgIG9uU2F2ZT17b25TYXZlRnJhbWVzfVxuICAgICAgICBzaG93TWluaU1hcD17dHJ1ZX1cbiAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXt0cnVlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgRGF0YUZyYW1lSlNPTiwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElubGluZVN3aXRjaCwgSW5wdXQsIExhYmVsLCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgU2ltdWxhdGlvblF1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBTaW11bGF0aW9uU2NoZW1hRm9ybSB9IGZyb20gJy4vU2ltdWxhdGlvblNjaGVtYUZvcm0nO1xuXG4vLyBUeXBlICAgICAgICAgc3RyaW5nICAgICAgYGpzb246XCJ0eXBlXCJgXG4vLyBOYW1lICAgICAgICAgc3RyaW5nICAgICAgYGpzb246XCJuYW1lXCJgXG4vLyBEZXNjcmlwdGlvbiAgc3RyaW5nICAgICAgYGpzb246XCJkZXNjcmlwdGlvblwiYFxuLy8gT25seUZvcndhcmQgIGJvb2wgICAgICAgIGBqc29uOlwiZm9yd2FyZFwiYFxuLy8gQ29uZmlnRmllbGRzICpkYXRhLkZyYW1lIGBqc29uOlwiY29uZmlnXCJgXG5cbmludGVyZmFjZSBTaW1JbmZvIHtcbiAgdHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGZvcndhcmQ6IGJvb2xlYW47XG4gIGNvbmZpZzogRGF0YUZyYW1lSlNPTjtcbn1cblxuZXhwb3J0IGNvbnN0IFNpbXVsYXRpb25RdWVyeUVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSwgZHMgfTogRWRpdG9yUHJvcHMpID0+IHtcbiAgY29uc3Qgc2ltUXVlcnkgPSBxdWVyeS5zaW0gPz8gKHt9IGFzIFNpbXVsYXRpb25RdWVyeSk7XG4gIGNvbnN0IHNpbUtleSA9IHNpbVF1ZXJ5LmtleSA/PyAoe30gYXMgdHlwZW9mIHNpbVF1ZXJ5LmtleSk7XG4gIC8vIGtlZXAgdHJhY2sgb2YgdXBkYXRlZCBjb25maWcgc3RhdGUgdG8gcGFzcyBkb3duIHRvIGZvcm1cbiAgY29uc3QgW2NmZ1ZhbHVlLCBzZXRDZmdWYWx1ZV0gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBhbnk+Pih7fSk7XG5cbiAgLy8gVGhpcyBvbmx5IGNoYW5nZXMgb25jZVxuICBjb25zdCBpbmZvID0gdXNlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHYgPSAoYXdhaXQgZHMuZ2V0UmVzb3VyY2UoJ3NpbXMnKSkgYXMgU2ltSW5mb1tdO1xuICAgIHJldHVybiB7XG4gICAgICBzaW1zOiB2LFxuICAgICAgb3B0aW9uczogdi5tYXAoKHMpID0+ICh7IGxhYmVsOiBzLm5hbWUsIHZhbHVlOiBzLnR5cGUsIGRlc2NyaXB0aW9uOiBzLmRlc2NyaXB0aW9uIH0pKSxcbiAgICB9O1xuICB9LCBbZHNdKTtcblxuICBjb25zdCBjdXJyZW50ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHNpbUtleS50eXBlO1xuICAgIGlmICghdHlwZSB8fCAhaW5mby52YWx1ZSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZGV0YWlsczogaW5mby52YWx1ZS5zaW1zLmZpbmQoKHYpID0+IHYudHlwZSA9PT0gdHlwZSksXG4gICAgICBvcHRpb246IGluZm8udmFsdWUub3B0aW9ucy5maW5kKCh2KSA9PiB2LnZhbHVlID09PSB0eXBlKSxcbiAgICB9O1xuICB9LCBbaW5mby52YWx1ZSwgc2ltS2V5Py50eXBlXSk7XG5cbiAgbGV0IGNvbmZpZyA9IHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBsZXQgcGF0aCA9IHNpbUtleS50eXBlICsgJy8nICsgc2ltS2V5LnRpY2sgKyAnaHonO1xuICAgIGlmIChzaW1LZXkudWlkKSB7XG4gICAgICBwYXRoICs9ICcvJyArIHNpbUtleS51aWQ7XG4gICAgfVxuICAgIGxldCBjb25maWcgPSAoYXdhaXQgZHMuZ2V0UmVzb3VyY2UoJ3NpbS8nICsgcGF0aCkpPy5jb25maWc7XG4gICAgc2V0Q2ZnVmFsdWUoY29uZmlnLnZhbHVlKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9LCBbc2ltS2V5LnR5cGUsIHNpbUtleS50aWNrLCBzaW1LZXkudWlkXSk7XG5cbiAgY29uc3Qgb25VcGRhdGVLZXkgPSAoa2V5OiB0eXBlb2Ygc2ltUXVlcnkua2V5KSA9PiB7XG4gICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgc2ltOiB7IC4uLnNpbVF1ZXJ5LCBrZXkgfSB9KTtcbiAgfTtcblxuICBjb25zdCBvblVJRENoYW5nZWQgPSAoZTogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBvblVwZGF0ZUtleSh7IC4uLnNpbUtleSwgdWlkOiB2YWx1ZSA/PyB1bmRlZmluZWQgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25UaWNrQ2hhbmdlZCA9IChlOiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0aWNrID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlQXNOdW1iZXI7XG4gICAgb25VcGRhdGVLZXkoeyAuLi5zaW1LZXksIHRpY2sgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25UeXBlQ2hhbmdlID0gKHY6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KSA9PiB7XG4gICAgb25VcGRhdGVLZXkoeyAuLi5zaW1LZXksIHR5cGU6IHYudmFsdWUhIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uVG9nZ2xlU3RyZWFtID0gKCkgPT4ge1xuICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHNpbTogeyAuLi5zaW1RdWVyeSwgc3RyZWFtOiAhc2ltUXVlcnkuc3RyZWFtIH0gfSk7XG4gIH07XG5cbiAgY29uc3Qgb25Ub2dnbGVMYXN0ID0gKCkgPT4ge1xuICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHNpbTogeyAuLi5zaW1RdWVyeSwgbGFzdDogIXNpbVF1ZXJ5Lmxhc3QgfSB9KTtcbiAgfTtcblxuICBjb25zdCBvblNjaGVtYUZvcm1DaGFuZ2UgPSAoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiB7XG4gICAgbGV0IHBhdGggPSBzaW1LZXkudHlwZSArICcvJyArIHNpbUtleS50aWNrICsgJ2h6JztcbiAgICBpZiAoc2ltS2V5LnVpZCkge1xuICAgICAgcGF0aCArPSAnLycgKyBzaW1LZXkudWlkO1xuICAgIH1cbiAgICBkcy5wb3N0UmVzb3VyY2UoJ3NpbS8nICsgcGF0aCwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldENmZ1ZhbHVlKHJlcy5jb25maWcpO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbFdpZHRoPXsxNH0gbGFiZWw9XCJTaW11bGF0aW9uXCIgdG9vbHRpcD1cIlwiPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIGlzTG9hZGluZz17aW5mby5sb2FkaW5nfVxuICAgICAgICAgICAgb3B0aW9ucz17aW5mby52YWx1ZT8ub3B0aW9ucyA/PyBbXX1cbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50Lm9wdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblR5cGVDaGFuZ2V9XG4gICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbFdpZHRoPXsxNH0gbGFiZWw9XCJTdHJlYW1cIiB0b29sdGlwPVwiY29ubmVjdCB0byB0aGUgbGl2ZSBjaGFubmVsXCI+XG4gICAgICAgICAgPElubGluZVN3aXRjaCB2YWx1ZT17Qm9vbGVhbihzaW1RdWVyeS5zdHJlYW0pfSBvbkNoYW5nZT17b25Ub2dnbGVTdHJlYW19IC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiSW50ZXJ2YWxcIiB0b29sdGlwPVwidGhlIHJhdGUgYSBzaW11bGF0aW9uIHdpbGwgc3BpdCBvdXQgZXZlbnRzXCI+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB3aWR0aD17MTB9XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtzaW1LZXkudGlja31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblRpY2tDaGFuZ2VkfVxuICAgICAgICAgICAgbWluPXsxIC8gMTB9XG4gICAgICAgICAgICBtYXg9ezUwfVxuICAgICAgICAgICAgc3VmZml4PVwiaHpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiTGFzdFwiIHRvb2x0aXA9XCJPbmx5IHJldHVybiB0aGUgbGFzdCB2YWx1ZVwiPlxuICAgICAgICAgIDxMYWJlbD5cbiAgICAgICAgICAgIDxJbmxpbmVTd2l0Y2ggdmFsdWU9e0Jvb2xlYW4oc2ltUXVlcnkubGFzdCl9IG9uQ2hhbmdlPXtvblRvZ2dsZUxhc3R9IC8+XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiVUlEXCIgdG9vbHRpcD1cIkEgVUlEIHdpbGwgYWxsb3cgbXVsdGlwbGUgc2ltdWxhdGlvbnMgdG8gcnVuIGF0IHRoZSBzYW1lIHRpbWVcIj5cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm9wdGlvbmFsXCIgdmFsdWU9e3NpbVF1ZXJ5LmtleS51aWR9IG9uQ2hhbmdlPXtvblVJRENoYW5nZWR9IC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgPFNpbXVsYXRpb25TY2hlbWFGb3JtXG4gICAgICAgIG9uQ2hhbmdlPXtvblNjaGVtYUZvcm1DaGFuZ2V9XG4gICAgICAgIGNvbmZpZz17Y2ZnVmFsdWUgPz8gY29uZmlnLnZhbHVlfVxuICAgICAgICBzY2hlbWE9e2N1cnJlbnQuZGV0YWlscz8uY29uZmlnLnNjaGVtYSA/PyB7IGZpZWxkczogW10gfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQsIHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YUZyYW1lU2NoZW1hLCBGaWVsZFNjaGVtYSwgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiwgVGV4dEFyZWEsIElubGluZUZpZWxkLCBJbnB1dCwgRmllbGRTZXQsIElubGluZVN3aXRjaCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFNjaGVtYUZvcm1Qcm9wcyB7XG4gIGNvbmZpZzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgc2NoZW1hOiBEYXRhRnJhbWVTY2hlbWE7XG4gIG9uQ2hhbmdlOiAoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiB2b2lkO1xufVxuXG5jb25zdCByZW5kZXJJbnB1dCA9IChmaWVsZDogRmllbGRTY2hlbWEsIG9uQ2hhbmdlOiBTY2hlbWFGb3JtUHJvcHNbJ29uQ2hhbmdlJ10sIGNvbmZpZzogU2NoZW1hRm9ybVByb3BzWydjb25maWcnXSkgPT4ge1xuICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtjb25maWc/LltmaWVsZC5uYW1lXX1cbiAgICAgICAgICBvbkNoYW5nZT17KGU6IEZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWVBc051bWJlcjtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4uY29uZmlnLCBbZmllbGQubmFtZV06IG5ld1ZhbHVlIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElubGluZVN3aXRjaFxuICAgICAgICAgIHZhbHVlPXtjb25maWc/LltmaWVsZC5uYW1lXSA/PyB0cnVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICBvbkNoYW5nZSh7IC4uLmNvbmZpZywgW2ZpZWxkLm5hbWVdOiAhY29uZmlnW2ZpZWxkLm5hbWVdIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICB2YWx1ZT17Y29uZmlnPy5bZmllbGQubmFtZV19XG4gICAgICAgICAgb25DaGFuZ2U9eyhlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4uY29uZmlnLCBbZmllbGQubmFtZV06IG5ld1ZhbHVlIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApO1xuICB9XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBqc29uVmlldzogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFNpbXVsYXRpb25TY2hlbWFGb3JtID0gKHsgY29uZmlnLCBzY2hlbWEsIG9uQ2hhbmdlIH06IFNjaGVtYUZvcm1Qcm9wcykgPT4ge1xuICBjb25zdCBbanNvblZpZXcsIHNldEpzb25WaWV3XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3Qgb25VcGRhdGVUZXh0QXJlYSA9IChldmVudDogRm9ybUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIG9uQ2hhbmdlKEpTT04ucGFyc2UoZWxlbWVudC52YWx1ZSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkU2V0IGxhYmVsPVwiQ29uZmlnXCI+XG4gICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmpzb25WaWV3fVxuICAgICAgICBsYWJlbD1cIkpTT04gVmlld1wiXG4gICAgICAgIHNob3dMYWJlbFxuICAgICAgICB2YWx1ZT17anNvblZpZXd9XG4gICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRKc29uVmlldyghanNvblZpZXcpfVxuICAgICAgLz5cbiAgICAgIHtqc29uVmlldyA/IChcbiAgICAgICAgPFRleHRBcmVhIGRlZmF1bHRWYWx1ZT17SlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKX0gcm93cz17N30gb25DaGFuZ2U9e29uVXBkYXRlVGV4dEFyZWF9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIHtzY2hlbWEuZmllbGRzLm1hcCgoZmllbGQpID0+IChcbiAgICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD17ZmllbGQubmFtZX0ga2V5PXtmaWVsZC5uYW1lfSBsYWJlbFdpZHRoPXsxNH0+XG4gICAgICAgICAgICAgIHtyZW5kZXJJbnB1dChmaWVsZCwgb25DaGFuZ2UsIGNvbmZpZyl9XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9GaWVsZFNldD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBJbnB1dCwgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBFZGl0b3JQcm9wcyB9IGZyb20gJy4uL1F1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IFN0cmVhbWluZ1F1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBzdHJlYW1pbmdDbGllbnRGaWVsZHMgPSBbXG4gIHsgbGFiZWw6ICdTcGVlZCAobXMpJywgaWQ6ICdzcGVlZCcsIHBsYWNlaG9sZGVyOiAndmFsdWUnLCBtaW46IDEwLCBzdGVwOiAxMCB9LFxuICB7IGxhYmVsOiAnU3ByZWFkJywgaWQ6ICdzcHJlYWQnLCBwbGFjZWhvbGRlcjogJ3ZhbHVlJywgbWluOiAwLjUsIHN0ZXA6IDAuMSB9LFxuICB7IGxhYmVsOiAnTm9pc2UnLCBpZDogJ25vaXNlJywgcGxhY2Vob2xkZXI6ICd2YWx1ZScsIG1pbjogMCwgc3RlcDogMC4xIH0sXG4gIHsgbGFiZWw6ICdCYW5kcycsIGlkOiAnYmFuZHMnLCBwbGFjZWhvbGRlcjogJ2JhbmRzJywgbWluOiAwLCBzdGVwOiAxIH0sXG5dO1xuXG5jb25zdCB0eXBlcyA9IFtcbiAgeyB2YWx1ZTogJ3NpZ25hbCcsIGxhYmVsOiAnU2lnbmFsJyB9LFxuICB7IHZhbHVlOiAnbG9ncycsIGxhYmVsOiAnTG9ncycgfSxcbiAgeyB2YWx1ZTogJ2ZldGNoJywgbGFiZWw6ICdGZXRjaCcgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBTdHJlYW1pbmdDbGllbnRFZGl0b3IgPSAoeyBvbkNoYW5nZSwgcXVlcnkgfTogRWRpdG9yUHJvcHMpID0+IHtcbiAgY29uc3Qgb25TZWxlY3RDaGFuZ2UgPSAoeyB2YWx1ZSB9OiBTZWxlY3RhYmxlVmFsdWUpID0+IHtcbiAgICBvbkNoYW5nZSh7IHRhcmdldDogeyBuYW1lOiAndHlwZScsIHZhbHVlIH0gfSk7XG4gIH07XG5cbiAgLy8gQ29udmVydCB2YWx1ZXMgdG8gbnVtYmVycyBiZWZvcmUgc2F2aW5nXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBvbkNoYW5nZSh7IHRhcmdldDogeyBuYW1lLCB2YWx1ZTogTnVtYmVyKHZhbHVlKSB9IH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPElubGluZUZpZWxkUm93PlxuICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiVHlwZVwiIGxhYmVsV2lkdGg9ezE0fT5cbiAgICAgICAgPFNlbGVjdCB3aWR0aD17MzJ9IG9uQ2hhbmdlPXtvblNlbGVjdENoYW5nZX0gZGVmYXVsdFZhbHVlPXt0eXBlc1swXX0gb3B0aW9ucz17dHlwZXN9IC8+XG4gICAgICA8L0lubGluZUZpZWxkPlxuICAgICAge3F1ZXJ5Py5zdHJlYW0/LnR5cGUgPT09ICdzaWduYWwnICYmXG4gICAgICAgIHN0cmVhbWluZ0NsaWVudEZpZWxkcy5tYXAoKHsgbGFiZWwsIGlkLCBtaW4sIHN0ZXAsIHBsYWNlaG9sZGVyIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPXtsYWJlbH0gbGFiZWxXaWR0aD17MTR9IGtleT17aWR9PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgaWQ9e2BzdHJlYW0uJHtpZH0tJHtxdWVyeS5yZWZJZH1gfVxuICAgICAgICAgICAgICAgIG5hbWU9e2lkfVxuICAgICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnN0cmVhbT8uW2lkIGFzIGtleW9mIFN0cmVhbWluZ1F1ZXJ5XX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICB7cXVlcnk/LnN0cmVhbT8udHlwZSA9PT0gJ2ZldGNoJyAmJiAoXG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlVSTFwiIGxhYmVsV2lkdGg9ezE0fSBncm93PlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInVybFwiXG4gICAgICAgICAgICBpZD17YHN0cmVhbS51cmwtJHtxdWVyeS5yZWZJZH1gfVxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5Py5zdHJlYW0/LnVybH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmV0Y2ggVVJMXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgKX1cbiAgICA8L0lubGluZUZpZWxkUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5saW5lRmllbGRSb3csIElubGluZUZpZWxkLCBTZWxlY3QsIE11bHRpU2VsZWN0LCBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgVVNBUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKHZhbHVlOiBVU0FRdWVyeSkgPT4gdm9pZDtcbiAgcXVlcnk6IFVTQVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVVNBUXVlcnlFZGl0b3IoeyBxdWVyeSwgb25DaGFuZ2UgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWxXaWR0aD17MTR9IGxhYmVsPVwiTW9kZVwiPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG9wdGlvbnM9e3VzYVF1ZXJ5TW9kZXN9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgbW9kZTogdi52YWx1ZSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICB2YWx1ZT17dXNhUXVlcnlNb2Rlcy5maW5kKChlcCkgPT4gZXAudmFsdWUgPT09IHF1ZXJ5Lm1vZGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlBlcmlvZFwiPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnBlcmlvZH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnMzBtJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBwZXJpb2Q6IHYuY3VycmVudFRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbFdpZHRoPXsxNH0gbGFiZWw9XCJGaWVsZHNcIj5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgIG9wdGlvbnM9e2ZpZWxkTmFtZXN9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHM6IFNlbGVjdGFibGVWYWx1ZVtdKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIGZpZWxkczogdmFscy5tYXAoKHYpID0+IHYudmFsdWUpIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWxsXCJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5maWVsZHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiU3RhdGVzXCIgZ3Jvdz5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgIG9wdGlvbnM9e3N0YXRlTmFtZXN9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHM6IFNlbGVjdGFibGVWYWx1ZVtdKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHN0YXRlczogdmFscy5tYXAoKHYpID0+IHYudmFsdWUpIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWxsXCJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5zdGF0ZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2FRdWVyeU1vZGVzID0gW1xuICAndmFsdWVzLWFzLXJvd3MnLFxuICAndmFsdWVzLWFzLWZpZWxkcycsXG4gICd2YWx1ZXMtYXMtbGFiZWxlZC1maWVsZHMnLFxuICAndGltZXNlcmllcycsXG4gICd0aW1lc2VyaWVzLXdpZGUnLFxuXS5tYXAoKGYpID0+ICh7IGxhYmVsOiBmLCB2YWx1ZTogZiB9KSk7XG5cbmV4cG9ydCBjb25zdCBmaWVsZE5hbWVzID0gW1xuICAnZm9vJyxcbiAgJ2JhcicsXG4gICdiYXonLCAvLyBhbGwgc2hvcnRcbl0ubWFwKChmKSA9PiAoeyBsYWJlbDogZiwgdmFsdWU6IGYgfSkpO1xuXG5leHBvcnQgY29uc3Qgc3RhdGVOYW1lcyA9IFtcbiAgJ0FMJyxcbiAgJ0FLJyxcbiAgJ0FaJyxcbiAgJ0FSJyxcbiAgJ0NBJyxcbiAgJ0NPJyxcbiAgJ0NUJyxcbiAgJ0RFJyxcbiAgJ0RDJyxcbiAgJ0ZMJyxcbiAgJ0dBJyxcbiAgJ0hJJyxcbiAgJ0lEJyxcbiAgJ0lMJyxcbiAgJ0lOJyxcbiAgJ0lBJyxcbiAgJ0tTJyxcbiAgJ0tZJyxcbiAgJ0xBJyxcbiAgJ01FJyxcbiAgJ01UJyxcbiAgJ05FJyxcbiAgJ05WJyxcbiAgJ05IJyxcbiAgJ05KJyxcbiAgJ05NJyxcbiAgJ05ZJyxcbiAgJ05DJyxcbiAgJ05EJyxcbiAgJ09IJyxcbiAgJ09LJyxcbiAgJ09SJyxcbiAgJ01EJyxcbiAgJ01BJyxcbiAgJ01JJyxcbiAgJ01OJyxcbiAgJ01TJyxcbiAgJ01PJyxcbiAgJ1BBJyxcbiAgJ1JJJyxcbiAgJ1NDJyxcbiAgJ1NEJyxcbiAgJ1ROJyxcbiAgJ1RYJyxcbiAgJ1VUJyxcbiAgJ1ZUJyxcbiAgJ1ZBJyxcbiAgJ1dBJyxcbiAgJ1dWJyxcbiAgJ1dJJyxcbiAgJ1dZJyxcbl0ubWFwKChmKSA9PiAoeyBsYWJlbDogZiwgdmFsdWU6IGYgfSkpO1xuIiwiZXhwb3J0IHsgU3RyZWFtaW5nQ2xpZW50RWRpdG9yIH0gZnJvbSAnLi9TdHJlYW1pbmdDbGllbnRFZGl0b3InO1xuZXhwb3J0IHsgUmFuZG9tV2Fsa0VkaXRvciB9IGZyb20gJy4vUmFuZG9tV2Fsa0VkaXRvcic7XG4iLCJpbXBvcnQgeyBDU1ZXYXZlLCBUZXN0RGF0YVF1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHVsc2VRdWVyeTogYW55ID0ge1xuICB0aW1lU3RlcDogNjAsXG4gIG9uQ291bnQ6IDMsXG4gIG9uVmFsdWU6IDIsXG4gIG9mZkNvdW50OiAzLFxuICBvZmZWYWx1ZTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q1NWV2F2ZVF1ZXJ5OiBDU1ZXYXZlW10gPSBbXG4gIHtcbiAgICB0aW1lU3RlcDogNjAsXG4gICAgdmFsdWVzQ1NWOiAnMCwwLDIsMiwxLDEnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRRdWVyeTogVGVzdERhdGFRdWVyeSA9IHtcbiAgc2NlbmFyaW9JZDogJ3JhbmRvbV93YWxrJyxcbiAgcmVmSWQ6ICcnLFxufTtcbiIsImltcG9ydCB7IGZyb20sIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIEFubm90YXRpb25FdmVudCxcbiAgQXJyYXlEYXRhRnJhbWUsXG4gIERhdGFGcmFtZSxcbiAgRGF0YVF1ZXJ5UmVxdWVzdCxcbiAgRGF0YVF1ZXJ5UmVzcG9uc2UsXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBEYXRhVG9waWMsXG4gIExpdmVDaGFubmVsU2NvcGUsXG4gIExvYWRpbmdTdGF0ZSxcbiAgVGltZVJhbmdlLFxuICBTY29wZWRWYXJzLFxuICB0b0RhdGFGcmFtZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlV2l0aEJhY2tlbmQsIGdldEJhY2tlbmRTcnYsIGdldEdyYWZhbmFMaXZlU3J2LCBnZXRUZW1wbGF0ZVNydiwgVGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGdldFNlYXJjaEZpbHRlclNjb3BlZFZhciB9IGZyb20gJ2FwcC9mZWF0dXJlcy92YXJpYWJsZXMvdXRpbHMnO1xuXG5pbXBvcnQgeyBxdWVyeU1ldHJpY1RyZWUgfSBmcm9tICcuL21ldHJpY1RyZWUnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21Ob2Rlcywgc2F2ZWROb2Rlc1Jlc3BvbnNlIH0gZnJvbSAnLi9ub2RlR3JhcGhVdGlscyc7XG5pbXBvcnQgeyBydW5TdHJlYW0gfSBmcm9tICcuL3J1blN0cmVhbXMnO1xuaW1wb3J0IHsgU2NlbmFyaW8sIFRlc3REYXRhUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFRlc3REYXRhVmFyaWFibGVTdXBwb3J0IH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuXG5leHBvcnQgY2xhc3MgVGVzdERhdGFEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZVdpdGhCYWNrZW5kPFRlc3REYXRhUXVlcnk+IHtcbiAgc2NlbmFyaW9zQ2FjaGU/OiBQcm9taXNlPFNjZW5hcmlvW10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKVxuICApIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IG5ldyBUZXN0RGF0YVZhcmlhYmxlU3VwcG9ydCgpO1xuICB9XG5cbiAgcXVlcnkob3B0aW9uczogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCBiYWNrZW5kUXVlcmllczogVGVzdERhdGFRdWVyeVtdID0gW107XG4gICAgY29uc3Qgc3RyZWFtczogQXJyYXk8T2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4+ID0gW107XG5cbiAgICAvLyBTdGFydCBzdHJlYW1zIGFuZCBwcmVwYXJlIHF1ZXJpZXNcbiAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiBvcHRpb25zLnRhcmdldHMpIHtcbiAgICAgIGlmICh0YXJnZXQuaGlkZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXNvbHZlVGVtcGxhdGVWYXJpYWJsZXModGFyZ2V0LCBvcHRpb25zLnNjb3BlZFZhcnMpO1xuXG4gICAgICBzd2l0Y2ggKHRhcmdldC5zY2VuYXJpb0lkKSB7XG4gICAgICAgIGNhc2UgJ2xpdmUnOlxuICAgICAgICAgIHN0cmVhbXMucHVzaChydW5HcmFmYW5hTGl2ZVF1ZXJ5KHRhcmdldCwgb3B0aW9ucykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJlYW1pbmdfY2xpZW50JzpcbiAgICAgICAgICBzdHJlYW1zLnB1c2gocnVuU3RyZWFtKHRhcmdldCwgb3B0aW9ucykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdncmFmYW5hX2FwaSc6XG4gICAgICAgICAgc3RyZWFtcy5wdXNoKHJ1bkdyYWZhbmFBUEkodGFyZ2V0LCBvcHRpb25zKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Fubm90YXRpb25zJzpcbiAgICAgICAgICBzdHJlYW1zLnB1c2godGhpcy5hbm5vdGF0aW9uRGF0YVRvcGljVGVzdCh0YXJnZXQsIG9wdGlvbnMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndmFyaWFibGVzLXF1ZXJ5JzpcbiAgICAgICAgICBzdHJlYW1zLnB1c2godGhpcy52YXJpYWJsZXNRdWVyeSh0YXJnZXQsIG9wdGlvbnMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbm9kZV9ncmFwaCc6XG4gICAgICAgICAgc3RyZWFtcy5wdXNoKHRoaXMubm9kZXNRdWVyeSh0YXJnZXQsIG9wdGlvbnMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmF3X2ZyYW1lJzpcbiAgICAgICAgICBzdHJlYW1zLnB1c2godGhpcy5yYXdGcmFtZVF1ZXJ5KHRhcmdldCwgb3B0aW9ucykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzZXJ2ZXJfZXJyb3JfNTAwJzpcbiAgICAgICAgICAvLyB0aGlzIG5vdyBoYXMgYW4gb3B0aW9uIHdoZXJlIGl0IGNhbiByZXR1cm4vdGhyb3cgYW4gZXJyb3IgZnJvbSB0aGUgZnJvbnRlbmQuXG4gICAgICAgICAgLy8gaWYgaXQgZG9lc24ndCwgc2VuZCBpdCB0byB0aGUgYmFja2VuZCB3aGVyZSBpdCBtaWdodCBwYW5pYyB0aGVyZSA6KVxuICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5zZXJ2ZXJFcnJvclF1ZXJ5KHRhcmdldCwgb3B0aW9ucyk7XG4gICAgICAgICAgcXVlcnkgPyBzdHJlYW1zLnB1c2gocXVlcnkpIDogYmFja2VuZFF1ZXJpZXMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBVbnVzYWJsZSBzaW5jZSA3LCByZW1vdmVkIGluIDhcbiAgICAgICAgY2FzZSAnbWFudWFsX2VudHJ5Jzoge1xuICAgICAgICAgIGxldCBjc3ZDb250ZW50ID0gJ1RpbWUsVmFsdWVcXG4nO1xuICAgICAgICAgIGlmICgodGFyZ2V0IGFzIGFueSkucG9pbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBvaW50IG9mICh0YXJnZXQgYXMgYW55KS5wb2ludHMpIHtcbiAgICAgICAgICAgICAgY3N2Q29udGVudCArPSBgJHtwb2ludFsxXX0sJHtwb2ludFswXX1cXG5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQuc2NlbmFyaW9JZCA9ICdjc3ZfY29udGVudCc7XG4gICAgICAgICAgdGFyZ2V0LmNzdkNvbnRlbnQgPSBjc3ZDb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBiYWNrZW5kUXVlcmllcy5wdXNoKHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJhY2tlbmRRdWVyaWVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgYmFja2VuZE9wdHMgPSB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHRhcmdldHM6IGJhY2tlbmRRdWVyaWVzLFxuICAgICAgfTtcbiAgICAgIHN0cmVhbXMucHVzaChzdXBlci5xdWVyeShiYWNrZW5kT3B0cykpO1xuICAgIH1cblxuICAgIGlmIChzdHJlYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG9mKHsgZGF0YTogW10gfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlKC4uLnN0cmVhbXMpO1xuICB9XG5cbiAgcmVzb2x2ZVRlbXBsYXRlVmFyaWFibGVzKHF1ZXJ5OiBUZXN0RGF0YVF1ZXJ5LCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKSB7XG4gICAgaWYgKHF1ZXJ5LmxhYmVscykge1xuICAgICAgcXVlcnkubGFiZWxzID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LmxhYmVscywgc2NvcGVkVmFycyk7XG4gICAgfVxuICAgIGlmIChxdWVyeS5hbGlhcykge1xuICAgICAgcXVlcnkuYWxpYXMgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkuYWxpYXMsIHNjb3BlZFZhcnMpO1xuICAgIH1cbiAgICBpZiAocXVlcnkuc2NlbmFyaW9JZCkge1xuICAgICAgcXVlcnkuc2NlbmFyaW9JZCA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5zY2VuYXJpb0lkLCBzY29wZWRWYXJzKTtcbiAgICB9XG4gICAgaWYgKHF1ZXJ5LnN0cmluZ0lucHV0KSB7XG4gICAgICBxdWVyeS5zdHJpbmdJbnB1dCA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5zdHJpbmdJbnB1dCwgc2NvcGVkVmFycyk7XG4gICAgfVxuICAgIGlmIChxdWVyeS5jc3ZDb250ZW50KSB7XG4gICAgICBxdWVyeS5jc3ZDb250ZW50ID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LmNzdkNvbnRlbnQsIHNjb3BlZFZhcnMpO1xuICAgIH1cbiAgICBpZiAocXVlcnkucmF3RnJhbWVDb250ZW50KSB7XG4gICAgICBxdWVyeS5yYXdGcmFtZUNvbnRlbnQgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkucmF3RnJhbWVDb250ZW50LCBzY29wZWRWYXJzKTtcbiAgICB9XG4gIH1cblxuICBhbm5vdGF0aW9uRGF0YVRvcGljVGVzdCh0YXJnZXQ6IFRlc3REYXRhUXVlcnksIHJlcTogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCBldmVudHMgPSB0aGlzLmJ1aWxkRmFrZUFubm90YXRpb25FdmVudHMocmVxLnJhbmdlLCA1MCk7XG4gICAgY29uc3QgZGF0YUZyYW1lID0gbmV3IEFycmF5RGF0YUZyYW1lKGV2ZW50cyk7XG4gICAgZGF0YUZyYW1lLm1ldGEgPSB7IGRhdGFUb3BpYzogRGF0YVRvcGljLkFubm90YXRpb25zIH07XG5cbiAgICByZXR1cm4gb2YoeyBrZXk6IHRhcmdldC5yZWZJZCwgZGF0YTogW2RhdGFGcmFtZV0gfSkucGlwZShkZWxheSgxMDApKTtcbiAgfVxuXG4gIGJ1aWxkRmFrZUFubm90YXRpb25FdmVudHMocmFuZ2U6IFRpbWVSYW5nZSwgY291bnQ6IG51bWJlcik6IEFubm90YXRpb25FdmVudFtdIHtcbiAgICBsZXQgdGltZVdhbGtlciA9IHJhbmdlLmZyb20udmFsdWVPZigpO1xuICAgIGNvbnN0IHRvID0gcmFuZ2UudG8udmFsdWVPZigpO1xuICAgIGNvbnN0IGV2ZW50cyA9IFtdO1xuICAgIGNvbnN0IHN0ZXAgPSAodG8gLSB0aW1lV2Fsa2VyKSAvIGNvdW50O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBldmVudHMucHVzaCh7XG4gICAgICAgIHRpbWU6IHRpbWVXYWxrZXIsXG4gICAgICAgIHRleHQ6ICdUaGlzIGlzIHRoZSB0ZXh0LCA8YSBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbVwiPkdyYWZhbmEuY29tPC9hPicsXG4gICAgICAgIHRhZ3M6IFsndGV4dCcsICdzZXJ2ZXInXSxcbiAgICAgIH0pO1xuICAgICAgdGltZVdhbGtlciArPSBzdGVwO1xuICAgIH1cblxuICAgIHJldHVybiBldmVudHM7XG4gIH1cblxuICBhbm5vdGF0aW9uUXVlcnkob3B0aW9uczogYW55KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmJ1aWxkRmFrZUFubm90YXRpb25FdmVudHMob3B0aW9ucy5yYW5nZSwgMTApKTtcbiAgfVxuXG4gIGdldFF1ZXJ5RGlzcGxheVRleHQocXVlcnk6IFRlc3REYXRhUXVlcnkpIHtcbiAgICBjb25zdCBzY2VuYXJpbyA9IHF1ZXJ5LnNjZW5hcmlvSWQgPz8gJ0RlZmF1bHQgc2NlbmFyaW8nO1xuXG4gICAgaWYgKHF1ZXJ5LmFsaWFzKSB7XG4gICAgICByZXR1cm4gc2NlbmFyaW8gKyAnIGFzICcgKyBxdWVyeS5hbGlhcztcbiAgICB9XG5cbiAgICByZXR1cm4gc2NlbmFyaW87XG4gIH1cblxuICB0ZXN0RGF0YXNvdXJjZSgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgbWVzc2FnZTogJ0RhdGEgc291cmNlIGlzIHdvcmtpbmcnLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U2NlbmFyaW9zKCk6IFByb21pc2U8U2NlbmFyaW9bXT4ge1xuICAgIGlmICghdGhpcy5zY2VuYXJpb3NDYWNoZSkge1xuICAgICAgdGhpcy5zY2VuYXJpb3NDYWNoZSA9IHRoaXMuZ2V0UmVzb3VyY2UoJ3NjZW5hcmlvcycpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNjZW5hcmlvc0NhY2hlO1xuICB9XG5cbiAgdmFyaWFibGVzUXVlcnkodGFyZ2V0OiBUZXN0RGF0YVF1ZXJ5LCBvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdGFyZ2V0LnN0cmluZ0lucHV0ID8/ICcnO1xuICAgIGNvbnN0IGludGVycG9sYXRlZFF1ZXJ5ID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKFxuICAgICAgcXVlcnksXG4gICAgICBnZXRTZWFyY2hGaWx0ZXJTY29wZWRWYXIoeyBxdWVyeSwgd2lsZGNhcmRDaGFyOiAnKicsIG9wdGlvbnM6IG9wdGlvbnMuc2NvcGVkVmFycyB9KVxuICAgICk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBxdWVyeU1ldHJpY1RyZWUoaW50ZXJwb2xhdGVkUXVlcnkpO1xuICAgIGNvbnN0IGl0ZW1zID0gY2hpbGRyZW4ubWFwKChpdGVtKSA9PiAoeyB2YWx1ZTogaXRlbS5uYW1lLCB0ZXh0OiBpdGVtLm5hbWUgfSkpO1xuICAgIGNvbnN0IGRhdGFGcmFtZSA9IG5ldyBBcnJheURhdGFGcmFtZShpdGVtcyk7XG5cbiAgICByZXR1cm4gb2YoeyBkYXRhOiBbZGF0YUZyYW1lXSB9KS5waXBlKGRlbGF5KDEwMCkpO1xuICB9XG5cbiAgbm9kZXNRdWVyeSh0YXJnZXQ6IFRlc3REYXRhUXVlcnksIG9wdGlvbnM6IERhdGFRdWVyeVJlcXVlc3Q8VGVzdERhdGFRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgdHlwZSA9IHRhcmdldC5ub2Rlcz8udHlwZSB8fCAncmFuZG9tJztcbiAgICBsZXQgZnJhbWVzOiBEYXRhRnJhbWVbXTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3JhbmRvbSc6XG4gICAgICAgIGZyYW1lcyA9IGdlbmVyYXRlUmFuZG9tTm9kZXModGFyZ2V0Lm5vZGVzPy5jb3VudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVzcG9uc2UnOlxuICAgICAgICBmcmFtZXMgPSBzYXZlZE5vZGVzUmVzcG9uc2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbm9kZV9ncmFwaCBzdWIgdHlwZSAke3R5cGV9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mKHsgZGF0YTogZnJhbWVzIH0pLnBpcGUoZGVsYXkoMTAwKSk7XG4gIH1cblxuICByYXdGcmFtZVF1ZXJ5KHRhcmdldDogVGVzdERhdGFRdWVyeSwgb3B0aW9uczogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UodGFyZ2V0LnJhd0ZyYW1lQ29udGVudCA/PyAnW10nKS5tYXAoKHY6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBmID0gdG9EYXRhRnJhbWUodik7XG4gICAgICAgIGYucmVmSWQgPSB0YXJnZXQucmVmSWQ7XG4gICAgICAgIHJldHVybiBmO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gb2YoeyBkYXRhLCBzdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUgfSkucGlwZShkZWxheSgxMDApKTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgZGF0YTogW10sXG4gICAgICAgIGVycm9yOiBleCBpbnN0YW5jZW9mIEVycm9yID8gZXggOiBuZXcgRXJyb3IoJ1Vua293biBlcnJvcicpLFxuICAgICAgfSkucGlwZShkZWxheSgxMDApKTtcbiAgICB9XG4gIH1cblxuICBzZXJ2ZXJFcnJvclF1ZXJ5KFxuICAgIHRhcmdldDogVGVzdERhdGFRdWVyeSxcbiAgICBvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+XG4gICk6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHwgbnVsbCB7XG4gICAgY29uc3QgeyBlcnJvclR5cGUgfSA9IHRhcmdldDtcbiAgICBjb25zb2xlLmxvZyhcIndlJ3JlIGhlcmUhXCIsIHRhcmdldCk7XG5cbiAgICBpZiAoZXJyb3JUeXBlID09PSAnc2VydmVyX3BhbmljJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nSW5wdXQgPSB0YXJnZXQuc3RyaW5nSW5wdXQgPz8gJyc7XG4gICAgaWYgKHN0cmluZ0lucHV0ID09PSAnJykge1xuICAgICAgaWYgKGVycm9yVHlwZSA9PT0gJ2Zyb250ZW5kX2V4Y2VwdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2VuYXJpbyB0aHJldyBhbiBleGNlcHRpb24gaW4gdGhlIGZyb250ZW5kIGJlY2F1c2UgdGhlIGlucHV0IHdhcyBlbXB0eS4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IG5ldyBFcnJvcignU2NlbmFyaW8gcmV0dXJuZWQgYW4gZXJyb3IgYmVjYXVzZSB0aGUgaW5wdXQgd2FzIGVtcHR5LicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBydW5HcmFmYW5hQVBJKHRhcmdldDogVGVzdERhdGFRdWVyeSwgcmVxOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICBjb25zdCB1cmwgPSBgL2FwaS8ke3RhcmdldC5zdHJpbmdJbnB1dH1gO1xuICByZXR1cm4gZnJvbShcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBmcmFtZSA9IG5ldyBBcnJheURhdGFGcmFtZShyZXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgICAgICBkYXRhOiBbZnJhbWVdLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgKTtcbn1cblxubGV0IGxpdmVRdWVyeUNvdW50ZXIgPSAxMDAwO1xuXG5mdW5jdGlvbiBydW5HcmFmYW5hTGl2ZVF1ZXJ5KFxuICB0YXJnZXQ6IFRlc3REYXRhUXVlcnksXG4gIHJlcTogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5PlxuKTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICBpZiAoIXRhcmdldC5jaGFubmVsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGNoYW5uZWwgY29uZmlnYCk7XG4gIH1cbiAgcmV0dXJuIGdldEdyYWZhbmFMaXZlU3J2KCkuZ2V0RGF0YVN0cmVhbSh7XG4gICAgYWRkcjoge1xuICAgICAgc2NvcGU6IExpdmVDaGFubmVsU2NvcGUuUGx1Z2luLFxuICAgICAgbmFtZXNwYWNlOiAndGVzdGRhdGEnLFxuICAgICAgcGF0aDogdGFyZ2V0LmNoYW5uZWwsXG4gICAgfSxcbiAgICBrZXk6IGB0ZXN0U3RyZWFtLiR7bGl2ZVF1ZXJ5Q291bnRlcisrfWAsXG4gIH0pO1xufVxuIiwiZXhwb3J0IGludGVyZmFjZSBUcmVlTm9kZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hpbGRyZW46IFRyZWVOb2RlW107XG59XG5cbi8qXG4gKiAgQnVpbGRzIGEgbmVzdGVkIHRyZWUgbGlrZVxuICogIFtcbiAqICAgIHtcbiAqICAgICAgbmFtZTogJ0EnLFxuICogICAgICBjaGlsZHJlbjogW1xuICogICAgICAgIHsgbmFtZTogJ0FBJywgY2hpbGRyZW46IFtdIH0sXG4gKiAgICAgICAgeyBuYW1lOiAnQUInLCBjaGlsZHJlbjogW10gfSxcbiAqICAgICAgXVxuICogICAgfVxuICogIF1cbiAqL1xuZnVuY3Rpb24gYnVpbGRNZXRyaWNUcmVlKHBhcmVudDogc3RyaW5nLCBkZXB0aDogbnVtYmVyKTogVHJlZU5vZGVbXSB7XG4gIGNvbnN0IGNoYXJzID0gWydBJywgJ0InLCAnQyddO1xuICBjb25zdCBjaGlsZHJlbjogVHJlZU5vZGVbXSA9IFtdO1xuXG4gIGlmIChkZXB0aCA+IDUpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBmb3IgKGNvbnN0IGxldHRlciBvZiBjaGFycykge1xuICAgIGNvbnN0IG5vZGVOYW1lID0gYCR7cGFyZW50fSR7bGV0dGVyfWA7XG4gICAgY2hpbGRyZW4ucHVzaCh7XG4gICAgICBuYW1lOiBub2RlTmFtZSxcbiAgICAgIGNoaWxkcmVuOiBidWlsZE1ldHJpY1RyZWUobm9kZU5hbWUsIGRlcHRoICsgMSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5VHJlZShjaGlsZHJlbjogVHJlZU5vZGVbXSwgcXVlcnk6IHN0cmluZ1tdLCBxdWVyeUluZGV4OiBudW1iZXIpOiBUcmVlTm9kZVtdIHtcbiAgaWYgKHF1ZXJ5SW5kZXggPj0gcXVlcnkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgaWYgKHF1ZXJ5W3F1ZXJ5SW5kZXhdID09PSAnKicpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICBjb25zdCBub2RlUXVlcnkgPSBxdWVyeVtxdWVyeUluZGV4XTtcbiAgbGV0IHJlc3VsdDogVHJlZU5vZGVbXSA9IFtdO1xuICBsZXQgbmFtZXNUb01hdGNoID0gW25vZGVRdWVyeV07XG5cbiAgLy8gaGFuZGxlIGdsb2IgcXVlcmllc1xuICBpZiAobm9kZVF1ZXJ5LnN0YXJ0c1dpdGgoJ3snKSkge1xuICAgIG5hbWVzVG9NYXRjaCA9IG5vZGVRdWVyeS5yZXBsYWNlKC9cXHt8XFx9L2csICcnKS5zcGxpdCgnLCcpO1xuICB9XG5cbiAgZm9yIChjb25zdCBub2RlIG9mIGNoaWxkcmVuKSB7XG4gICAgZm9yIChjb25zdCBuYW1lVG9NYXRjaCBvZiBuYW1lc1RvTWF0Y2gpIHtcbiAgICAgIGlmIChuYW1lVG9NYXRjaC5pbmRleE9mKCcqJykgIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBuYW1lVG9NYXRjaC5yZXBsYWNlKCcqJywgJycpO1xuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYF4ke3BhdHRlcm59LipgLCAnZ2knKTtcbiAgICAgICAgaWYgKHJlZ2V4LnRlc3Qobm9kZS5uYW1lKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQocXVlcnlUcmVlKFtub2RlXSwgcXVlcnksIHF1ZXJ5SW5kZXggKyAxKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5uYW1lID09PSBuYW1lVG9NYXRjaCkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHF1ZXJ5VHJlZShub2RlLmNoaWxkcmVuLCBxdWVyeSwgcXVlcnlJbmRleCArIDEpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlNZXRyaWNUcmVlKHF1ZXJ5OiBzdHJpbmcpOiBUcmVlTm9kZVtdIHtcbiAgaWYgKHF1ZXJ5LmluZGV4T2YoJ3ZhbHVlJykgPT09IDApIHtcbiAgICByZXR1cm4gW3sgbmFtZTogcXVlcnksIGNoaWxkcmVuOiBbXSB9XTtcbiAgfVxuXG4gIGNvbnN0IGNoaWxkcmVuID0gYnVpbGRNZXRyaWNUcmVlKCcnLCAwKTtcbiAgcmV0dXJuIHF1ZXJ5VHJlZShjaGlsZHJlbiwgcXVlcnkuc3BsaXQoJy4nKSwgMCk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IENvbmZpZ0VkaXRvciB9IGZyb20gJy4vQ29uZmlnRWRpdG9yJztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9RdWVyeUVkaXRvcic7XG5pbXBvcnQgeyBUZXN0SW5mb1RhYiB9IGZyb20gJy4vVGVzdEluZm9UYWInO1xuaW1wb3J0IHsgVGVzdERhdGFEYXRhU291cmNlIH0gZnJvbSAnLi9kYXRhc291cmNlJztcblxuY2xhc3MgVGVzdERhdGFBbm5vdGF0aW9uc1F1ZXJ5Q3RybCB7XG4gIGFubm90YXRpb246IGFueTtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBzdGF0aWMgdGVtcGxhdGUgPSAnPGgyPkFubm90YXRpb24gc2NlbmFyaW88L2gyPic7XG59XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgRGF0YVNvdXJjZVBsdWdpbihUZXN0RGF0YURhdGFTb3VyY2UpXG4gIC5zZXRDb25maWdFZGl0b3IoQ29uZmlnRWRpdG9yKVxuICAuc2V0UXVlcnlFZGl0b3IoUXVlcnlFZGl0b3IpXG4gIC5zZXRBbm5vdGF0aW9uUXVlcnlDdHJsKFRlc3REYXRhQW5ub3RhdGlvbnNRdWVyeUN0cmwpXG4gIC5hZGRDb25maWdQYWdlKHtcbiAgICB0aXRsZTogJ1NldHVwJyxcbiAgICBpY29uOiAnbGlzdC11bCcsXG4gICAgYm9keTogVGVzdEluZm9UYWIsXG4gICAgaWQ6ICdzZXR1cCcsXG4gIH0pO1xuIiwiaW1wb3J0IHtcbiAgQXJyYXlWZWN0b3IsXG4gIEZpZWxkQ29sb3JNb2RlSWQsXG4gIEZpZWxkRFRPLFxuICBGaWVsZFR5cGUsXG4gIE11dGFibGVEYXRhRnJhbWUsXG4gIE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBub2RlcywgZWRnZXMgfSBmcm9tICcuL3Rlc3REYXRhL3NlcnZpY2VNYXBSZXNwb25zZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU5vZGVzKGNvdW50ID0gMTApIHtcbiAgY29uc3Qgbm9kZXMgPSBbXTtcblxuICBjb25zdCByb290ID0ge1xuICAgIGlkOiAnMCcsXG4gICAgdGl0bGU6ICdyb290JyxcbiAgICBzdWJUaXRsZTogJ2NsaWVudCcsXG4gICAgc3VjY2VzczogMSxcbiAgICBlcnJvcjogMCxcbiAgICBzdGF0MTogTWF0aC5yYW5kb20oKSxcbiAgICBzdGF0MjogTWF0aC5yYW5kb20oKSxcbiAgICBlZGdlczogW10gYXMgYW55W10sXG4gIH07XG4gIG5vZGVzLnB1c2gocm9vdCk7XG4gIGNvbnN0IG5vZGVzV2l0aG91dE1heEVkZ2VzID0gW3Jvb3RdO1xuXG4gIGNvbnN0IG1heEVkZ2VzID0gMztcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBjb25zdCBub2RlID0gbWFrZVJhbmRvbU5vZGUoaSk7XG4gICAgbm9kZXMucHVzaChub2RlKTtcbiAgICBjb25zdCBzb3VyY2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3Iobm9kZXNXaXRob3V0TWF4RWRnZXMubGVuZ3RoIC0gMSkpO1xuICAgIGNvbnN0IHNvdXJjZSA9IG5vZGVzV2l0aG91dE1heEVkZ2VzW3NvdXJjZUluZGV4XTtcbiAgICBzb3VyY2UuZWRnZXMucHVzaChub2RlLmlkKTtcbiAgICBpZiAoc291cmNlLmVkZ2VzLmxlbmd0aCA+PSBtYXhFZGdlcykge1xuICAgICAgbm9kZXNXaXRob3V0TWF4RWRnZXMuc3BsaWNlKHNvdXJjZUluZGV4LCAxKTtcbiAgICB9XG4gICAgbm9kZXNXaXRob3V0TWF4RWRnZXMucHVzaChub2RlKTtcbiAgfVxuXG4gIC8vIEFkZCBzb21lIHJhbmRvbSBlZGdlcyB0byBjcmVhdGUgcG9zc2libGUgY3ljbGVcbiAgY29uc3QgYWRkaXRpb25hbEVkZ2VzID0gTWF0aC5mbG9vcihjb3VudCAvIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBhZGRpdGlvbmFsRWRnZXM7IGkrKykge1xuICAgIGNvbnN0IHNvdXJjZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihub2Rlcy5sZW5ndGggLSAxKSk7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG5vZGVzLmxlbmd0aCAtIDEpKTtcbiAgICBpZiAoc291cmNlSW5kZXggPT09IHRhcmdldEluZGV4IHx8IG5vZGVzW3NvdXJjZUluZGV4XS5pZCA9PT0gJzAnIHx8IG5vZGVzW3NvdXJjZUluZGV4XS5pZCA9PT0gJzAnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBub2Rlc1tzb3VyY2VJbmRleF0uZWRnZXMucHVzaChub2Rlc1tzb3VyY2VJbmRleF0uaWQpO1xuICB9XG5cbiAgY29uc3Qgbm9kZUZpZWxkczogUmVjb3JkPHN0cmluZywgT21pdDxGaWVsZERUTywgJ25hbWUnPiAmIHsgdmFsdWVzOiBBcnJheVZlY3RvciB9PiA9IHtcbiAgICBbTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5pZF06IHtcbiAgICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKCksXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgIH0sXG4gICAgW05vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMudGl0bGVdOiB7XG4gICAgICB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcigpLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICB9LFxuICAgIFtOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLnN1YlRpdGxlXToge1xuICAgICAgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3IoKSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgfSxcbiAgICBbTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5tYWluU3RhdF06IHtcbiAgICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKCksXG4gICAgICB0eXBlOiBGaWVsZFR5cGUubnVtYmVyLFxuICAgICAgY29uZmlnOiB7IGRpc3BsYXlOYW1lOiAnVHJhbnNhY3Rpb25zIHBlciBzZWNvbmQnIH0sXG4gICAgfSxcbiAgICBbTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5zZWNvbmRhcnlTdGF0XToge1xuICAgICAgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3IoKSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdBdmVyYWdlIGR1cmF0aW9uJyB9LFxuICAgIH0sXG4gICAgW05vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuYXJjICsgJ3N1Y2Nlc3MnXToge1xuICAgICAgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3IoKSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICBjb25maWc6IHsgY29sb3I6IHsgZml4ZWRDb2xvcjogJ2dyZWVuJywgbW9kZTogRmllbGRDb2xvck1vZGVJZC5GaXhlZCB9LCBkaXNwbGF5TmFtZTogJ1N1Y2Nlc3MnIH0sXG4gICAgfSxcbiAgICBbTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5hcmMgKyAnZXJyb3JzJ106IHtcbiAgICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKCksXG4gICAgICB0eXBlOiBGaWVsZFR5cGUubnVtYmVyLFxuICAgICAgY29uZmlnOiB7IGNvbG9yOiB7IGZpeGVkQ29sb3I6ICdyZWQnLCBtb2RlOiBGaWVsZENvbG9yTW9kZUlkLkZpeGVkIH0sIGRpc3BsYXlOYW1lOiAnRXJyb3JzJyB9LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgbm9kZUZyYW1lID0gbmV3IE11dGFibGVEYXRhRnJhbWUoe1xuICAgIG5hbWU6ICdub2RlcycsXG4gICAgZmllbGRzOiBPYmplY3Qua2V5cyhub2RlRmllbGRzKS5tYXAoKGtleSkgPT4gKHtcbiAgICAgIC4uLm5vZGVGaWVsZHNba2V5XSxcbiAgICAgIG5hbWU6IGtleSxcbiAgICB9KSksXG4gICAgbWV0YTogeyBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ25vZGVHcmFwaCcgfSxcbiAgfSk7XG5cbiAgY29uc3QgZWRnZUZpZWxkczogYW55ID0ge1xuICAgIFtOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLmlkXToge1xuICAgICAgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3IoKSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgfSxcbiAgICBbTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5zb3VyY2VdOiB7XG4gICAgICB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcigpLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICB9LFxuICAgIFtOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLnRhcmdldF06IHtcbiAgICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKCksXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgZWRnZXNGcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBuYW1lOiAnZWRnZXMnLFxuICAgIGZpZWxkczogT2JqZWN0LmtleXMoZWRnZUZpZWxkcykubWFwKChrZXkpID0+ICh7XG4gICAgICAuLi5lZGdlRmllbGRzW2tleV0sXG4gICAgICBuYW1lOiBrZXksXG4gICAgfSkpLFxuICAgIG1ldGE6IHsgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICdub2RlR3JhcGgnIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGVkZ2VzU2V0ID0gbmV3IFNldCgpO1xuICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICBub2RlRmllbGRzLmlkLnZhbHVlcy5hZGQobm9kZS5pZCk7XG4gICAgbm9kZUZpZWxkcy50aXRsZS52YWx1ZXMuYWRkKG5vZGUudGl0bGUpO1xuICAgIG5vZGVGaWVsZHMuc3ViVGl0bGUudmFsdWVzLmFkZChub2RlLnN1YlRpdGxlKTtcbiAgICBub2RlRmllbGRzLm1haW5TdGF0LnZhbHVlcy5hZGQobm9kZS5zdGF0MSk7XG4gICAgbm9kZUZpZWxkcy5zZWNvbmRhcnlTdGF0LnZhbHVlcy5hZGQobm9kZS5zdGF0Mik7XG4gICAgbm9kZUZpZWxkcy5hcmNfX3N1Y2Nlc3MudmFsdWVzLmFkZChub2RlLnN1Y2Nlc3MpO1xuICAgIG5vZGVGaWVsZHMuYXJjX19lcnJvcnMudmFsdWVzLmFkZChub2RlLmVycm9yKTtcbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygbm9kZS5lZGdlcykge1xuICAgICAgY29uc3QgaWQgPSBgJHtub2RlLmlkfS0tJHtlZGdlfWA7XG4gICAgICAvLyBXZSBjYW4gaGF2ZSBkdXBsaWNhdGUgZWRnZXMgd2hlbiB3ZSBhZGRlZCBzb21lIG1vcmUgYnkgcmFuZG9tXG4gICAgICBpZiAoZWRnZXNTZXQuaGFzKGlkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGVkZ2VzU2V0LmFkZChpZCk7XG4gICAgICBlZGdlRmllbGRzLmlkLnZhbHVlcy5hZGQoYCR7bm9kZS5pZH0tLSR7ZWRnZX1gKTtcbiAgICAgIGVkZ2VGaWVsZHMuc291cmNlLnZhbHVlcy5hZGQobm9kZS5pZCk7XG4gICAgICBlZGdlRmllbGRzLnRhcmdldC52YWx1ZXMuYWRkKGVkZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbbm9kZUZyYW1lLCBlZGdlc0ZyYW1lXTtcbn1cblxuZnVuY3Rpb24gbWFrZVJhbmRvbU5vZGUoaW5kZXg6IG51bWJlcikge1xuICBjb25zdCBzdWNjZXNzID0gTWF0aC5yYW5kb20oKTtcbiAgY29uc3QgZXJyb3IgPSAxIC0gc3VjY2VzcztcbiAgcmV0dXJuIHtcbiAgICBpZDogaW5kZXgudG9TdHJpbmcoKSxcbiAgICB0aXRsZTogYHNlcnZpY2U6JHtpbmRleH1gLFxuICAgIHN1YlRpdGxlOiAnc2VydmljZScsXG4gICAgc3VjY2VzcyxcbiAgICBlcnJvcixcbiAgICBzdGF0MTogTWF0aC5yYW5kb20oKSxcbiAgICBzdGF0MjogTWF0aC5yYW5kb20oKSxcbiAgICBlZGdlczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlZE5vZGVzUmVzcG9uc2UoKTogYW55IHtcbiAgcmV0dXJuIFtuZXcgTXV0YWJsZURhdGFGcmFtZShub2RlcyksIG5ldyBNdXRhYmxlRGF0YUZyYW1lKGVkZ2VzKV07XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIERhdGFRdWVyeVJlcXVlc3QsXG4gIERhdGFRdWVyeVJlc3BvbnNlLFxuICBGaWVsZFR5cGUsXG4gIENpcmN1bGFyRGF0YUZyYW1lLFxuICBDU1ZSZWFkZXIsXG4gIEZpZWxkLFxuICBMb2FkaW5nU3RhdGUsXG4gIERhdGFGcmFtZVNjaGVtYSxcbiAgRGF0YUZyYW1lRGF0YSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsaXZlVGltZXIgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL2xpdmVUaW1lcic7XG5pbXBvcnQgeyBTdHJlYW1pbmdEYXRhRnJhbWUgfSBmcm9tICdhcHAvZmVhdHVyZXMvbGl2ZS9kYXRhL1N0cmVhbWluZ0RhdGFGcmFtZSc7XG5cbmltcG9ydCB7IGdldFJhbmRvbUxpbmUgfSBmcm9tICcuL0xvZ0lwc3VtJztcbmltcG9ydCB7IFRlc3REYXRhUXVlcnksIFN0cmVhbWluZ1F1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RyZWFtUXVlcnk6IFN0cmVhbWluZ1F1ZXJ5ID0ge1xuICB0eXBlOiAnc2lnbmFsJyxcbiAgc3BlZWQ6IDI1MCwgLy8gbXNcbiAgc3ByZWFkOiAzLjUsXG4gIG5vaXNlOiAyLjIsXG4gIGJhbmRzOiAxLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1blN0cmVhbSh0YXJnZXQ6IFRlc3REYXRhUXVlcnksIHJlcTogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgY29uc3QgcXVlcnkgPSBkZWZhdWx0cyh0YXJnZXQuc3RyZWFtLCBkZWZhdWx0U3RyZWFtUXVlcnkpO1xuICBpZiAoJ3NpZ25hbCcgPT09IHF1ZXJ5LnR5cGUpIHtcbiAgICByZXR1cm4gcnVuU2lnbmFsU3RyZWFtKHRhcmdldCwgcXVlcnksIHJlcSk7XG4gIH1cbiAgaWYgKCdsb2dzJyA9PT0gcXVlcnkudHlwZSkge1xuICAgIHJldHVybiBydW5Mb2dzU3RyZWFtKHRhcmdldCwgcXVlcnksIHJlcSk7XG4gIH1cbiAgaWYgKCdmZXRjaCcgPT09IHF1ZXJ5LnR5cGUpIHtcbiAgICByZXR1cm4gcnVuRmV0Y2hTdHJlYW0odGFyZ2V0LCBxdWVyeSwgcmVxKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gU3RyZWFtIFR5cGU6ICR7cXVlcnkudHlwZX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1blNpZ25hbFN0cmVhbShcbiAgdGFyZ2V0OiBUZXN0RGF0YVF1ZXJ5LFxuICBxdWVyeTogU3RyZWFtaW5nUXVlcnksXG4gIHJlcTogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5PlxuKTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgY29uc3Qgc3RyZWFtSWQgPSBgc2lnbmFsLSR7cmVxLnBhbmVsSWR9LSR7dGFyZ2V0LnJlZklkfWA7XG4gICAgY29uc3QgbWF4RGF0YVBvaW50cyA9IHJlcS5tYXhEYXRhUG9pbnRzIHx8IDEwMDA7XG5cbiAgICBjb25zdCBzY2hlbWE6IERhdGFGcmFtZVNjaGVtYSA9IHtcbiAgICAgIHJlZklkOiB0YXJnZXQucmVmSWQsXG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAgeyBuYW1lOiAndGltZScsIHR5cGU6IEZpZWxkVHlwZS50aW1lIH0sXG4gICAgICAgIHsgbmFtZTogdGFyZ2V0LmFsaWFzID8/ICd2YWx1ZScsIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGNvbnN0IHsgc3ByZWFkLCBzcGVlZCwgYmFuZHMgPSAwLCBub2lzZSB9ID0gcXVlcnk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYW5kczsgaSsrKSB7XG4gICAgICBjb25zdCBzdWZmaXggPSBiYW5kcyA+IDEgPyBgICR7aSArIDF9YCA6ICcnO1xuICAgICAgc2NoZW1hLmZpZWxkcy5wdXNoKHsgbmFtZTogJ01pbicgKyBzdWZmaXgsIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIgfSk7XG4gICAgICBzY2hlbWEuZmllbGRzLnB1c2goeyBuYW1lOiAnTWF4JyArIHN1ZmZpeCwgdHlwZTogRmllbGRUeXBlLm51bWJlciB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmcmFtZSA9IFN0cmVhbWluZ0RhdGFGcmFtZS5mcm9tRGF0YUZyYW1lSlNPTih7IHNjaGVtYSB9LCB7IG1heExlbmd0aDogbWF4RGF0YVBvaW50cyB9KTtcblxuICAgIGxldCB2YWx1ZSA9IE1hdGgucmFuZG9tKCkgKiAxMDA7XG4gICAgbGV0IHRpbWVvdXRJZDogYW55ID0gbnVsbDtcbiAgICBsZXQgbGFzdFNlbnQgPSAtMTtcblxuICAgIGNvbnN0IGFkZE5leHRSb3cgPSAodGltZTogbnVtYmVyKSA9PiB7XG4gICAgICB2YWx1ZSArPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBzcHJlYWQ7XG5cbiAgICAgIGNvbnN0IGRhdGE6IERhdGFGcmFtZURhdGEgPSB7XG4gICAgICAgIHZhbHVlczogW1t0aW1lXSwgW3ZhbHVlXV0sXG4gICAgICB9O1xuXG4gICAgICBsZXQgbWluID0gdmFsdWU7XG4gICAgICBsZXQgbWF4ID0gdmFsdWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFuZHM7IGkrKykge1xuICAgICAgICBtaW4gPSBtaW4gLSBNYXRoLnJhbmRvbSgpICogbm9pc2U7XG4gICAgICAgIG1heCA9IG1heCArIE1hdGgucmFuZG9tKCkgKiBub2lzZTtcblxuICAgICAgICBkYXRhLnZhbHVlcy5wdXNoKFttaW5dKTtcbiAgICAgICAgZGF0YS52YWx1ZXMucHVzaChbbWF4XSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV2ZW50ID0geyBkYXRhIH07XG4gICAgICByZXR1cm4gZnJhbWUucHVzaChldmVudCk7XG4gICAgfTtcblxuICAgIC8vIEZpbGwgdGhlIGJ1ZmZlciBvbiBpbml0XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGxldCB0aW1lID0gRGF0ZS5ub3coKSAtIG1heERhdGFQb2ludHMgKiBzcGVlZDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4RGF0YVBvaW50czsgaSsrKSB7XG4gICAgICAgIGFkZE5leHRSb3codGltZSk7XG4gICAgICAgIHRpbWUgKz0gc3BlZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHVzaE5leHRFdmVudCA9ICgpID0+IHtcbiAgICAgIGFkZE5leHRSb3coRGF0ZS5ub3coKSk7XG5cbiAgICAgIGNvbnN0IGVsYXBzZWQgPSBsaXZlVGltZXIubGFzdFVwZGF0ZSAtIGxhc3RTZW50O1xuICAgICAgaWYgKGVsYXBzZWQgPiAxMDAwIHx8IGxpdmVUaW1lci5vaykge1xuICAgICAgICBzdWJzY3JpYmVyLm5leHQoe1xuICAgICAgICAgIGRhdGE6IFtmcmFtZV0sXG4gICAgICAgICAga2V5OiBzdHJlYW1JZCxcbiAgICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLlN0cmVhbWluZyxcbiAgICAgICAgfSk7XG4gICAgICAgIGxhc3RTZW50ID0gbGl2ZVRpbWVyLmxhc3RVcGRhdGU7XG4gICAgICB9XG5cbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQocHVzaE5leHRFdmVudCwgc3BlZWQpO1xuICAgIH07XG5cbiAgICAvLyBTZW5kIGZpcnN0IGV2ZW50IGluIDVtc1xuICAgIHNldFRpbWVvdXQocHVzaE5leHRFdmVudCwgNSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3Vuc3Vic2NyaWJpbmcgdG8gc3RyZWFtICcgKyBzdHJlYW1JZCk7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkxvZ3NTdHJlYW0oXG4gIHRhcmdldDogVGVzdERhdGFRdWVyeSxcbiAgcXVlcnk6IFN0cmVhbWluZ1F1ZXJ5LFxuICByZXE6IERhdGFRdWVyeVJlcXVlc3Q8VGVzdERhdGFRdWVyeT5cbik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIGNvbnN0IHN0cmVhbUlkID0gYGxvZ3MtJHtyZXEucGFuZWxJZH0tJHt0YXJnZXQucmVmSWR9YDtcbiAgICBjb25zdCBtYXhEYXRhUG9pbnRzID0gcmVxLm1heERhdGFQb2ludHMgfHwgMTAwMDtcblxuICAgIGNvbnN0IGRhdGEgPSBuZXcgQ2lyY3VsYXJEYXRhRnJhbWUoe1xuICAgICAgYXBwZW5kOiAndGFpbCcsXG4gICAgICBjYXBhY2l0eTogbWF4RGF0YVBvaW50cyxcbiAgICB9KTtcbiAgICBkYXRhLnJlZklkID0gdGFyZ2V0LnJlZklkO1xuICAgIGRhdGEubmFtZSA9IHRhcmdldC5hbGlhcyB8fCAnTG9ncyAnICsgdGFyZ2V0LnJlZklkO1xuICAgIGRhdGEuYWRkRmllbGQoeyBuYW1lOiAnbGluZScsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSk7XG4gICAgZGF0YS5hZGRGaWVsZCh7IG5hbWU6ICd0aW1lJywgdHlwZTogRmllbGRUeXBlLnRpbWUgfSk7XG4gICAgZGF0YS5tZXRhID0geyBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ2xvZ3MnIH07XG5cbiAgICBjb25zdCB7IHNwZWVkIH0gPSBxdWVyeTtcblxuICAgIGxldCB0aW1lb3V0SWQ6IGFueSA9IG51bGw7XG5cbiAgICBjb25zdCBwdXNoTmV4dEV2ZW50ID0gKCkgPT4ge1xuICAgICAgZGF0YS5maWVsZHNbMF0udmFsdWVzLmFkZChEYXRlLm5vdygpKTtcbiAgICAgIGRhdGEuZmllbGRzWzFdLnZhbHVlcy5hZGQoZ2V0UmFuZG9tTGluZSgpKTtcblxuICAgICAgc3Vic2NyaWJlci5uZXh0KHtcbiAgICAgICAgZGF0YTogW2RhdGFdLFxuICAgICAgICBrZXk6IHN0cmVhbUlkLFxuICAgICAgfSk7XG5cbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQocHVzaE5leHRFdmVudCwgc3BlZWQpO1xuICAgIH07XG5cbiAgICAvLyBTZW5kIGZpcnN0IGV2ZW50IGluIDVtc1xuICAgIHNldFRpbWVvdXQocHVzaE5leHRFdmVudCwgNSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3Vuc3Vic2NyaWJpbmcgdG8gc3RyZWFtICcgKyBzdHJlYW1JZCk7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkZldGNoU3RyZWFtKFxuICB0YXJnZXQ6IFRlc3REYXRhUXVlcnksXG4gIHF1ZXJ5OiBTdHJlYW1pbmdRdWVyeSxcbiAgcmVxOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+XG4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4oKHN1YnNjcmliZXIpID0+IHtcbiAgICBjb25zdCBzdHJlYW1JZCA9IGBmZXRjaC0ke3JlcS5wYW5lbElkfS0ke3RhcmdldC5yZWZJZH1gO1xuICAgIGNvbnN0IG1heERhdGFQb2ludHMgPSByZXEubWF4RGF0YVBvaW50cyB8fCAxMDAwO1xuXG4gICAgbGV0IGRhdGEgPSBuZXcgQ2lyY3VsYXJEYXRhRnJhbWUoe1xuICAgICAgYXBwZW5kOiAndGFpbCcsXG4gICAgICBjYXBhY2l0eTogbWF4RGF0YVBvaW50cyxcbiAgICB9KTtcbiAgICBkYXRhLnJlZklkID0gdGFyZ2V0LnJlZklkO1xuICAgIGRhdGEubmFtZSA9IHRhcmdldC5hbGlhcyB8fCAnRmV0Y2ggJyArIHRhcmdldC5yZWZJZDtcblxuICAgIGxldCByZWFkZXI6IFJlYWRhYmxlU3RyZWFtUmVhZGVyPFVpbnQ4QXJyYXk+O1xuICAgIGNvbnN0IGNzdiA9IG5ldyBDU1ZSZWFkZXIoe1xuICAgICAgY2FsbGJhY2s6IHtcbiAgICAgICAgb25IZWFkZXI6IChmaWVsZHM6IEZpZWxkW10pID0+IHtcbiAgICAgICAgICAvLyBDbGVhciBhbnkgZXhpc3RpbmcgZmllbGRzXG4gICAgICAgICAgaWYgKGRhdGEuZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBDaXJjdWxhckRhdGFGcmFtZSh7XG4gICAgICAgICAgICAgIGFwcGVuZDogJ3RhaWwnLFxuICAgICAgICAgICAgICBjYXBhY2l0eTogbWF4RGF0YVBvaW50cyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGF0YS5yZWZJZCA9IHRhcmdldC5yZWZJZDtcbiAgICAgICAgICAgIGRhdGEubmFtZSA9ICdGZXRjaCAnICsgdGFyZ2V0LnJlZklkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZpZWxkcykge1xuICAgICAgICAgICAgZGF0YS5hZGRGaWVsZChmaWVsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblJvdzogKHJvdzogYW55W10pID0+IHtcbiAgICAgICAgICBkYXRhLmFkZChyb3cpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2Nlc3NDaHVuayA9ICh2YWx1ZTogUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZFJlc3VsdDxVaW50OEFycmF5Pik6IGFueSA9PiB7XG4gICAgICBpZiAodmFsdWUudmFsdWUpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZSh2YWx1ZS52YWx1ZSk7XG4gICAgICAgIGNzdi5yZWFkQ1NWKHRleHQpO1xuICAgICAgfVxuXG4gICAgICBzdWJzY3JpYmVyLm5leHQoe1xuICAgICAgICBkYXRhOiBbZGF0YV0sXG4gICAgICAgIGtleTogc3RyZWFtSWQsXG4gICAgICAgIHN0YXRlOiB2YWx1ZS5kb25lID8gTG9hZGluZ1N0YXRlLkRvbmUgOiBMb2FkaW5nU3RhdGUuU3RyZWFtaW5nLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWx1ZS5kb25lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGaW5pc2hlZCBzdHJlYW0nKTtcbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpOyAvLyBuZWNlc3Nhcnk/XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKCkudGhlbihwcm9jZXNzQ2h1bmspO1xuICAgIH07XG5cbiAgICBpZiAoIXF1ZXJ5LnVybCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdxdWVyeS51cmwgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICBmZXRjaChuZXcgUmVxdWVzdChxdWVyeS51cmwpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLmJvZHkpIHtcbiAgICAgICAgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWQoKS50aGVuKHByb2Nlc3NDaHVuayk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gQ2FuY2VsIGZldGNoP1xuICAgICAgY29uc29sZS5sb2coJ3Vuc3Vic2NyaWJpbmcgdG8gc3RyZWFtICcgKyBzdHJlYW1JZCk7XG4gICAgfTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBGaWVsZENvbG9yTW9kZUlkLCBGaWVsZFR5cGUsIFByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlLCBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBub2RlcyA9IHtcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5pZCxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1RyYWNlcy9BbGwnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIGludGVybmFsOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgcXVlcnlUeXBlOiAnZ2V0VHJhY2VTdW1tYXJpZXMnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiAnc2VydmljZShpZChuYW1lOiBcIiR7X19kYXRhLmZpZWxkcy5uYW1lfVwiLCB0eXBlOiBcIiR7X19kYXRhLmZpZWxkcy50eXBlfVwiKSknLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiAnQXg0ZXJ4SEd6JyxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZU5hbWU6ICdUcmFjZSBkYXRhIHNvdXJjZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUcmFjZXMvT0snLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIGludGVybmFsOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgcXVlcnlUeXBlOiAnZ2V0VHJhY2VTdW1tYXJpZXMnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiAnc2VydmljZShpZChuYW1lOiBcIiR7X19kYXRhLmZpZWxkcy5uYW1lfVwiLCB0eXBlOiBcIiR7X19kYXRhLmZpZWxkcy50eXBlfVwiKSkgeyBvayA9IHRydWUgfScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6ICdBeDRlcnhIR3onLFxuICAgICAgICAgICAgICBkYXRhc291cmNlTmFtZTogJ1RyYWNlIGRhdGEgc291cmNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1RyYWNlcy9FcnJvcnMnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIGludGVybmFsOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgcXVlcnlUeXBlOiAnZ2V0VHJhY2VTdW1tYXJpZXMnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiAnc2VydmljZShpZChuYW1lOiBcIiR7X19kYXRhLmZpZWxkcy5uYW1lfVwiLCB0eXBlOiBcIiR7X19kYXRhLmZpZWxkcy50eXBlfVwiKSkgeyBlcnJvciA9IHRydWUgfScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6ICdBeDRlcnhIR3onLFxuICAgICAgICAgICAgICBkYXRhc291cmNlTmFtZTogJ1RyYWNlIGRhdGEgc291cmNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1RyYWNlcy9GYXVsdHMnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIGludGVybmFsOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgcXVlcnlUeXBlOiAnZ2V0VHJhY2VTdW1tYXJpZXMnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiAnc2VydmljZShpZChuYW1lOiBcIiR7X19kYXRhLmZpZWxkcy5uYW1lfVwiLCB0eXBlOiBcIiR7X19kYXRhLmZpZWxkcy50eXBlfVwiKSkgeyBmYXVsdCA9IHRydWUgfScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6ICdBeDRlcnhIR3onLFxuICAgICAgICAgICAgICBkYXRhc291cmNlTmFtZTogJ1RyYWNlIGRhdGEgc291cmNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB2YWx1ZXM6IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTRdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy50aXRsZSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgICBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdOYW1lJyB9LFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgICdhdXRoJyxcbiAgICAgICAgJ3Byb2R1Y3RzJyxcbiAgICAgICAgJ2N1c3RvbWVycycsXG4gICAgICAgICdvcmRlcnMnLFxuICAgICAgICAncHJvZHVjdHMnLFxuICAgICAgICAnb3JkZXJzJyxcbiAgICAgICAgJ2FwaScsXG4gICAgICAgICdzaGlwcGluZycsXG4gICAgICAgICdvcmRlcnMnLFxuICAgICAgICAnZXhlY3V0ZS1hcGknLFxuICAgICAgICAnc2hpcHBpbmcnLFxuICAgICAgICAnd3d3JyxcbiAgICAgICAgJ2FwaScsXG4gICAgICAgICd3d3cnLFxuICAgICAgICAncHJvZHVjdHMnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuc3ViVGl0bGUsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgICAgY29uZmlnOiB7IGRpc3BsYXlOYW1lOiAnVHlwZScgfSxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICAnQ29tcHV0ZScsXG4gICAgICAgICdTUUwnLFxuICAgICAgICAnU1FMJyxcbiAgICAgICAgJ1NRTCcsXG4gICAgICAgICdyZW1vdGUnLFxuICAgICAgICAnRnVuY3Rpb24nLFxuICAgICAgICAnQ29tcHV0ZScsXG4gICAgICAgICdGdW5jdGlvbicsXG4gICAgICAgICdGdW5jdGlvbicsXG4gICAgICAgICdyZW1vdGUnLFxuICAgICAgICAnRnVuY3Rpb24nLFxuICAgICAgICAnQ29tcHV0ZScsXG4gICAgICAgICdjbGllbnQnLFxuICAgICAgICAnY2xpZW50JyxcbiAgICAgICAgJ0NvbXB1dGUnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMubWFpblN0YXQsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUubnVtYmVyLFxuICAgICAgY29uZmlnOiB7IHVuaXQ6ICdtcy90JywgZGlzcGxheU5hbWU6ICdBdmVyYWdlIHJlc3BvbnNlIHRpbWUnIH0sXG4gICAgICB2YWx1ZXM6IFtcbiAgICAgICAgMy41Mzk0MDQyNjQ2NzM1NTUzLCAxNS45MDY0NDEzMTgyMjMyNjQsIDQuOTEzMDExOTIxNTkxNTY3LCA3LjQxNjMyMDMwNDIwOTQwOTUsIDEwOTIsIDIyLjg1OTYxNDQxNDA1MDY3LFxuICAgICAgICA1Ni4xMzU4NTU3MjkwODQ2OTYsIDQuNDU5NDYxOTE2MDE1MjcsIDEyLjgxODMwMDI3ODI4MDg0MywgNC4yNSwgMTIuNTY1NDQyNjQ2NzkxNDkyLCA3Ny42MzQ0NzUxMjcwMDU2NyxcbiAgICAgICAgNDAuMzg3MDk2Nzc0MTkzNTQ0LCA3Ny42MzQ0NzUxMjcwMDU2NywgMjcuNjQ4OTUwMTg3Mzc0ODcyLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuc2Vjb25kYXJ5U3RhdCxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICBjb25maWc6IHsgdW5pdDogJ3QvbWluJywgZGlzcGxheU5hbWU6ICdUcmFuc2FjdGlvbnMgcGVyIG1pbnV0ZScgfSxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICA1MC41NjMxNzE1NDUwMTY2NywgNjgyLjQsIDUxMi44NDE2NjY2NjY2NjY3LCAxMjUuNjQ0NDQ0NDQ0NDQ0NDUsIDAuMDA1NTg1ODEyMDM3NDI0OTQxLCAxMzcuNTk3MjIyMjIyMjIyMjMsXG4gICAgICAgIDMwMC4wNTI3Nzc3Nzc3Nzc4LCAzMC41ODIzNDg4NTMzNzAzOTQsIDEyNS43NzIyMjIyMjIyMjIyMywgMC4wMjg3MDY0MTcwODAzMTgxNjMsIDMwLjU4MjM0ODg1MzM3MDM5NCwgMTY1LjY3NSxcbiAgICAgICAgMC4xMDAwMjE1MTAwMDIxNTEsIDE2NS42NzUsIDE2Mi4zMzA1NTU1NTU1NTU1NSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLmFyYyArICdzdWNjZXNzJyxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICBjb25maWc6IHsgY29sb3I6IHsgbW9kZTogRmllbGRDb2xvck1vZGVJZC5GaXhlZCwgZml4ZWRDb2xvcjogJ2dyZWVuJyB9LCBkaXNwbGF5TmFtZTogJ1N1Y2Vzc3MnIH0sXG4gICAgICB2YWx1ZXM6IFtcbiAgICAgICAgMC45MzM4ODY1Njg0NzY1ODgyLCAxLCAxLCAxLCAwLjUsIDEsIDAuOTkwMTEyODUwNTE3MDM4NywgMC45MDY5MjYwMTM0NTIwOTk3LCAxLCAwLCAwLjkwNjkyNjAxMzQ1MjA5OTcsXG4gICAgICAgIDAuOTYyNDQzMjAzNzI4ODUzNCwgMCwgMC45NjI0NDMyMDM3Mjg4NTM0LCAwLjk4MjQ5NDU2Njk4NDM3NjksXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5hcmMgKyAnZmF1bHRzJyxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICBjb25maWc6IHsgY29sb3I6IHsgbW9kZTogRmllbGRDb2xvck1vZGVJZC5GaXhlZCwgZml4ZWRDb2xvcjogJ3JlZCcgfSwgZGlzcGxheU5hbWU6ICdGYXVsdHMnIH0sXG4gICAgICB2YWx1ZXM6IFtcbiAgICAgICAgMCwgMCwgMCwgMCwgMC41LCAwLCAwLjAwOTQ3OTgxMzczNjQ3MjI4OCwgMCwgMCwgMCwgMCwgMC4wMTcxNjg4MjExNTI1MjQxODUsIDAsIDAuMDE3MTY4ODIxMTUyNTI0MTg1LFxuICAgICAgICAwLjAxNzUwNTQzMzAxNTYyMzEzLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuYXJjICsgJ2Vycm9ycycsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUubnVtYmVyLFxuICAgICAgY29uZmlnOiB7IGNvbG9yOiB7IG1vZGU6IEZpZWxkQ29sb3JNb2RlSWQuRml4ZWQsIGZpeGVkQ29sb3I6ICdzZW1pLWRhcmsteWVsbG93JyB9LCBkaXNwbGF5TmFtZTogJ0Vycm9ycycgfSxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICAwLjA2NjExMzQzMTUyMzQxMTc0LCAwLCAwLCAwLCAwLCAwLCAwLjAwMDQwNzMzNTc0NjQ4OTA0MzYsIDAuMDkzMDczOTg2NTQ3OTAwMzgsIDAsIDEsIDAuMDkzMDczOTg2NTQ3OTAwMzgsXG4gICAgICAgIDAuMDIwMzg3OTc1MTE4NjIyNDcsIDEsIDAuMDIwMzg3OTc1MTE4NjIyNDcsIDAsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5hcmMgKyAndGhyb3R0bGVkJyxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICBjb25maWc6IHsgY29sb3I6IHsgbW9kZTogRmllbGRDb2xvck1vZGVJZC5GaXhlZCwgZml4ZWRDb2xvcjogJ3B1cnBsZScgfSwgZGlzcGxheU5hbWU6ICdUaHJvdHRsZWQnIH0sXG4gICAgICB2YWx1ZXM6IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICB9LFxuICBdLFxuICBtZXRhOiB7IHByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlOiAnbm9kZUdyYXBoJyBhcyBQcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZSB9LFxuICBuYW1lOiAnbm9kZXMnLFxufTtcblxuZXhwb3J0IGNvbnN0IGVkZ2VzID0ge1xuICBmaWVsZHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLmlkLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBsaW5rczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVHJhY2VzL0FsbCcsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgaW50ZXJuYWw6IHtcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBxdWVyeVR5cGU6ICdnZXRUcmFjZVN1bW1hcmllcycsXG4gICAgICAgICAgICAgICAgcXVlcnk6ICdlZGdlKFwiJHtfX2RhdGEuZmllbGRzLnNvdXJjZU5hbWV9XCIsIFwiJHtfX2RhdGEuZmllbGRzLnRhcmdldE5hbWV9XCIpJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogJ0F4NGVyeEhHeicsXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VOYW1lOiAnVHJhY2UgZGF0YSBzb3VyY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVHJhY2VzL09LJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogJ2dldFRyYWNlU3VtbWFyaWVzJyxcbiAgICAgICAgICAgICAgICBxdWVyeTogJ2VkZ2UoXCIke19fZGF0YS5maWVsZHMuc291cmNlTmFtZX1cIiwgXCIke19fZGF0YS5maWVsZHMudGFyZ2V0TmFtZX1cIikgeyBvayA9IHRydWUgfScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6ICdBeDRlcnhIR3onLFxuICAgICAgICAgICAgICBkYXRhc291cmNlTmFtZTogJ1RyYWNlIGRhdGEgc291cmNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1RyYWNlcy9FcnJvcnMnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIGludGVybmFsOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgcXVlcnlUeXBlOiAnZ2V0VHJhY2VTdW1tYXJpZXMnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiAnZWRnZShcIiR7X19kYXRhLmZpZWxkcy5zb3VyY2VOYW1lfVwiLCBcIiR7X19kYXRhLmZpZWxkcy50YXJnZXROYW1lfVwiKSB7IGVycm9yID0gdHJ1ZSB9JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogJ0F4NGVyeEhHeicsXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VOYW1lOiAnVHJhY2UgZGF0YSBzb3VyY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVHJhY2VzL0ZhdWx0cycsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgaW50ZXJuYWw6IHtcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBxdWVyeVR5cGU6ICdnZXRUcmFjZVN1bW1hcmllcycsXG4gICAgICAgICAgICAgICAgcXVlcnk6ICdlZGdlKFwiJHtfX2RhdGEuZmllbGRzLnNvdXJjZU5hbWV9XCIsIFwiJHtfX2RhdGEuZmllbGRzLnRhcmdldE5hbWV9XCIpIHsgZmF1bHQgPSB0cnVlIH0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiAnQXg0ZXJ4SEd6JyxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZU5hbWU6ICdUcmFjZSBkYXRhIHNvdXJjZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgICcwX18yJyxcbiAgICAgICAgJzVfXzgnLFxuICAgICAgICAnNl9fMCcsXG4gICAgICAgICc2X181JyxcbiAgICAgICAgJzZfXzknLFxuICAgICAgICAnNl9fMicsXG4gICAgICAgICc2X18xNCcsXG4gICAgICAgICc2X180JyxcbiAgICAgICAgJzhfXzMnLFxuICAgICAgICAnMTBfXzcnLFxuICAgICAgICAnMTFfXzAnLFxuICAgICAgICAnMTFfXzYnLFxuICAgICAgICAnMTJfXzYnLFxuICAgICAgICAnMTNfXzExJyxcbiAgICAgICAgJzE0X18xJyxcbiAgICAgICAgJzE0X18yJyxcbiAgICAgICAgJzE0X18xMCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5zb3VyY2UsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgICAgY29uZmlnOiB7fSxcbiAgICAgIHZhbHVlczogWzAsIDUsIDYsIDYsIDYsIDYsIDYsIDYsIDgsIDEwLCAxMSwgMTEsIDEyLCAxMywgMTQsIDE0LCAxNF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnc291cmNlTmFtZScsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgICAgY29uZmlnOiB7fSxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICAnYXV0aCcsXG4gICAgICAgICdvcmRlcnMnLFxuICAgICAgICAnYXBpJyxcbiAgICAgICAgJ2FwaScsXG4gICAgICAgICdhcGknLFxuICAgICAgICAnYXBpJyxcbiAgICAgICAgJ2FwaScsXG4gICAgICAgICdhcGknLFxuICAgICAgICAnb3JkZXJzJyxcbiAgICAgICAgJ3NoaXBwaW5nJyxcbiAgICAgICAgJ3d3dycsXG4gICAgICAgICd3d3cnLFxuICAgICAgICAnYXBpJyxcbiAgICAgICAgJ3d3dycsXG4gICAgICAgICdwcm9kdWN0cycsXG4gICAgICAgICdwcm9kdWN0cycsXG4gICAgICAgICdwcm9kdWN0cycsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy50YXJnZXQsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgICAgY29uZmlnOiB7fSxcbiAgICAgIHZhbHVlczogWzIsIDgsIDAsIDUsIDksIDIsIDE0LCA0LCAzLCA3LCAwLCA2LCA2LCAxMSwgMSwgMiwgMTBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3RhcmdldE5hbWUnLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgIGNvbmZpZzoge30sXG4gICAgICB2YWx1ZXM6IFtcbiAgICAgICAgJ2N1c3RvbWVycycsXG4gICAgICAgICdvcmRlcnMnLFxuICAgICAgICAnYXV0aCcsXG4gICAgICAgICdvcmRlcnMnLFxuICAgICAgICAnZXhlY3V0ZS1hcGknLFxuICAgICAgICAnY3VzdG9tZXJzJyxcbiAgICAgICAgJ3Byb2R1Y3RzJyxcbiAgICAgICAgJ3Byb2R1Y3RzJyxcbiAgICAgICAgJ29yZGVycycsXG4gICAgICAgICdzaGlwcGluZycsXG4gICAgICAgICdhdXRoJyxcbiAgICAgICAgJ2FwaScsXG4gICAgICAgICdhcGknLFxuICAgICAgICAnd3d3JyxcbiAgICAgICAgJ3Byb2R1Y3RzJyxcbiAgICAgICAgJ2N1c3RvbWVycycsXG4gICAgICAgICdzaGlwcGluZycsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5tYWluU3RhdCxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgICBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdSZXNwb25zZSBwZXJjZW50YWdlJyB9LFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgICdTdWNjZXNzIDEwMC4wMCUnLFxuICAgICAgICAnU3VjY2VzcyAxMDAuMDAlJyxcbiAgICAgICAgJ1N1Y2Nlc3MgMTAwLjAwJScsXG4gICAgICAgICdTdWNjZXNzIDEwMC4wMCUnLFxuICAgICAgICAnRXJyb3JzIDEwMC4wMCUnLFxuICAgICAgICAnU3VjY2VzcyAxMDAuMDAlJyxcbiAgICAgICAgJ0ZhdWx0cyAxLjc1JScsXG4gICAgICAgICdGYXVsdHMgNTAuMDAlJyxcbiAgICAgICAgJ1N1Y2Nlc3MgMTAwLjAwJScsXG4gICAgICAgICdFcnJvcnMgOS4zMSUnLFxuICAgICAgICAnRXJyb3JzIDYuNjIlJyxcbiAgICAgICAgJ0ZhdWx0cyAxLjEzJScsXG4gICAgICAgICdFcnJvcnMgMTAwLjAwJScsXG4gICAgICAgICdGYXVsdHMgMS43MiUnLFxuICAgICAgICAnU3VjY2VzcyAxMDAuMDAlJyxcbiAgICAgICAgJ1N1Y2Nlc3MgMTAwLjAwJScsXG4gICAgICAgICdGYXVsdHMgOS4zMCUnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuc2Vjb25kYXJ5U3RhdCxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICBjb25maWc6IHsgdW5pdDogJ3QvbWluJywgZGlzcGxheU5hbWU6ICdUcmFuc2FjdGlvbnMgcGVyIG1pbnV0ZScgfSxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICA1MC41NjMxNzE1NDUwMTY2NywgMTI1Ljc3MjIyMjIyMjIyMjIzLCAwLjAzMzMzMzMzMzMzMzMzMzMzLCAxMzcuNTk3MjIyMjIyMjIyMjMsIDAuMDIyMjIyMjIyMjIyMjIyMjIzLFxuICAgICAgICAyOTkuOTY2NjY2NjY2NjY2NjQsIDE2Mi4zMzA1NTU1NTU1NTU1NSwgMC4wMDU1NTU1NTU1NTU1NTU1NTYsIDEyNS42NDQ0NDQ0NDQ0NDQ0NSwgMzAuNTgyMzQ4ODUzMzcwMzk0LFxuICAgICAgICA1MC41MTExMTExMTExMTExMSwgMjk5LjkxNjY2NjY2NjY2NjcsIDAuMTAwMDIxNTEwMDAyMTUxLCAxNjUuNjc1LCA2ODIuNCwgMTYyLjMzMDU1NTU1NTU1NTU1LCAzMC41NTgzMzMzMzMzMzMzMzQsXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIG1ldGE6IHsgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICdub2RlR3JhcGgnIGFzIFByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlIH0sXG4gIG5hbWU6ICdlZGdlcycsXG59O1xuIiwiaW1wb3J0IHsgU3RhbmRhcmRWYXJpYWJsZVF1ZXJ5LCBTdGFuZGFyZFZhcmlhYmxlU3VwcG9ydCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBUZXN0RGF0YURhdGFTb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgVGVzdERhdGFRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgVGVzdERhdGFWYXJpYWJsZVN1cHBvcnQgZXh0ZW5kcyBTdGFuZGFyZFZhcmlhYmxlU3VwcG9ydDxUZXN0RGF0YURhdGFTb3VyY2U+IHtcbiAgdG9EYXRhUXVlcnkocXVlcnk6IFN0YW5kYXJkVmFyaWFibGVRdWVyeSk6IFRlc3REYXRhUXVlcnkge1xuICAgIHJldHVybiB7XG4gICAgICByZWZJZDogJ1Rlc3REYXRhRGF0YVNvdXJjZS1RdWVyeVZhcmlhYmxlJyxcbiAgICAgIHN0cmluZ0lucHV0OiBxdWVyeS5xdWVyeSxcbiAgICAgIHNjZW5hcmlvSWQ6ICd2YXJpYWJsZXMtcXVlcnknLFxuICAgICAgY3N2V2F2ZTogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJDb25maWdFZGl0b3IiLCJyZW5kZXIiLCJMb2dMZXZlbCIsImluZGV4IiwiZ2V0UmFuZG9tTG9nTGV2ZWwiLCJ2IiwiTWF0aCIsInJhbmRvbSIsImNyaXRpY2FsIiwiZXJyb3IiLCJ3YXJuaW5nIiwiaW5mbyIsImRlYnVnIiwidHJhY2UiLCJ1bmtub3duIiwiZ2V0TmV4dFdvcmQiLCJmbG9vciIsIndvcmRzIiwibGVuZ3RoIiwiZ2V0UmFuZG9tTGluZSIsImxpbmUiLCJ1c2VNZW1vIiwidXNlQXN5bmMiLCJzZWxlY3RvcnMiLCJlZGl0b3JTZWxlY3RvcnMiLCJJbmxpbmVGaWVsZCIsIklubGluZUZpZWxkUm93IiwiSW5saW5lU3dpdGNoIiwiSW5wdXQiLCJTZWxlY3QiLCJUZXh0QXJlYSIsIlJhbmRvbVdhbGtFZGl0b3IiLCJTdHJlYW1pbmdDbGllbnRFZGl0b3IiLCJDU1ZDb250ZW50RWRpdG9yIiwiQ1NWRmlsZUVkaXRvciIsIkNTVldhdmVzRWRpdG9yIiwiRXJyb3JFZGl0b3IiLCJHcmFmYW5hTGl2ZUVkaXRvciIsIk5vZGVHcmFwaEVkaXRvciIsIlByZWRpY3RhYmxlUHVsc2VFZGl0b3IiLCJSYXdGcmFtZUVkaXRvciIsIlNpbXVsYXRpb25RdWVyeUVkaXRvciIsIlVTQVF1ZXJ5RWRpdG9yIiwidXNhUXVlcnlNb2RlcyIsImRlZmF1bHRDU1ZXYXZlUXVlcnkiLCJkZWZhdWx0UHVsc2VRdWVyeSIsImRlZmF1bHRRdWVyeSIsImRlZmF1bHRTdHJlYW1RdWVyeSIsInNob3dMYWJlbHNGb3IiLCJlbmRwb2ludHMiLCJ2YWx1ZSIsImxhYmVsIiwiY29tcG9uZW50cyIsIkRhdGFTb3VyY2UiLCJUZXN0RGF0YSIsIlF1ZXJ5VGFiIiwiUXVlcnlFZGl0b3IiLCJxdWVyeSIsImRhdGFzb3VyY2UiLCJvbkNoYW5nZSIsIm9uUnVuUXVlcnkiLCJsb2FkaW5nIiwic2NlbmFyaW9MaXN0Iiwic2NlbmFyaW9JZCIsInBvaW50cyIsImNzdkNvbnRlbnQiLCJwb2ludCIsInJlZklkIiwidmFscyIsImdldFNjZW5hcmlvcyIsImhpZGVBbGlhcyIsIm1hcCIsImhpZGVBbGlhc0ZpZWxkIiwiaW5jbHVkZXMiLCJpZCIsIm9uVXBkYXRlIiwiY3VycmVudFNjZW5hcmlvIiwiZmluZCIsInNjZW5hcmlvIiwiZGVzY3JpcHRpb24iLCJvblNjZW5hcmlvQ2hhbmdlIiwiaXRlbSIsInNjIiwidXBkYXRlIiwiYWxpYXMiLCJzdHJpbmdJbnB1dCIsInN0cmVhbSIsImNoYW5uZWwiLCJzaW0iLCJrZXkiLCJ0eXBlIiwidGljayIsInB1bHNlV2F2ZSIsImNzdldhdmUiLCJ1c2EiLCJtb2RlIiwib25JbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidGFyZ2V0IiwibmV3VmFsdWUiLCJOdW1iZXIiLCJjaGVja2VkIiwib25GaWVsZENoYW5nZSIsImZpZWxkIiwib25FbmRQb2ludENoYW5nZSIsIm9uU3RyZWFtQ2xpZW50Q2hhbmdlIiwib25QdWxzZVdhdmVDaGFuZ2UiLCJvblVTQVN0YXRzQ2hhbmdlIiwib25DU1ZXYXZlQ2hhbmdlIiwib3B0aW9ucyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzaG93TGFiZWxzIiwic2NlbmFyaW9TZWxlY3RDb250YWluZXIiLCJCb29sZWFuIiwibGFiZWxzIiwibGluZXMiLCJsZXZlbENvbHVtbiIsImVwIiwidmFsIiwibm9kZXMiLCJMaW5rQnV0dG9uIiwiVGVzdEluZm9UYWIiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiQ29kZUVkaXRvciIsIm9uU2F2ZUNTViIsIm9uQ2hhbmdlRmlsZU5hbWUiLCJjc3ZGaWxlTmFtZSIsImZpbGVzIiwiZiIsIkJ1dHRvbiIsIkNTVldhdmVFZGl0b3IiLCJ3YXZlIiwidGltZVN0ZXAiLCJ2YWx1ZUFzTnVtYmVyIiwibGFzdCIsImFjdGlvbiIsIm9uQWRkIiwidW5kZWZpbmVkIiwidmFsdWVzQ1NWIiwib25DU1ZDaGFuZ2UiLCJvblRpbWVTdGVwQ2hhbmdlIiwib25MYWJlbHNDaGFuZ2UiLCJvbk5hbWVDaGFuZ2UiLCJ3YXZlcyIsInNwbGljZSIsInB1c2giLCJFUlJPUl9PUFRJT05TIiwiRnJvbnRlbmRFcnJvclF1ZXJ5RWRpdG9yIiwiZXJyb3JUeXBlIiwibGl2ZVRlc3REYXRhQ2hhbm5lbHMiLCJvbkNoYW5uZWxDaGFuZ2UiLCJvIiwiY291bnQiLCJjdXJyZW50VGFyZ2V0IiwicGFyc2VJbnQiLCJmaWVsZHMiLCJwbGFjZWhvbGRlciIsInRvb2x0aXAiLCJyYW5kb21XYWxrRmllbGRzIiwibWluIiwic3RlcCIsIm1heCIsInRlc3RTZWxlY3RvcnMiLCJzZWxlY3RvciIsImlzQXJyYXkiLCJ1c2VTdGF0ZSIsImRhdGFGcmFtZVRvSlNPTiIsInRvRGF0YUZyYW1lIiwidG9EYXRhRnJhbWVEVE8iLCJ0b0RhdGFRdWVyeVJlc3BvbnNlIiwiQWxlcnQiLCJzZXRFcnJvciIsInNldFdhcm5pbmciLCJvblNhdmVGcmFtZXMiLCJyYXdGcmFtZUNvbnRlbnQiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInNlcmllcyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsInN0cmluZ2lmeSIsIkxhYmVsIiwiU2ltdWxhdGlvblNjaGVtYUZvcm0iLCJkcyIsInNpbVF1ZXJ5Iiwic2ltS2V5IiwiY2ZnVmFsdWUiLCJzZXRDZmdWYWx1ZSIsImdldFJlc291cmNlIiwic2ltcyIsInMiLCJjdXJyZW50IiwiZGV0YWlscyIsIm9wdGlvbiIsImNvbmZpZyIsInBhdGgiLCJ1aWQiLCJvblVwZGF0ZUtleSIsIm9uVUlEQ2hhbmdlZCIsIm9uVGlja0NoYW5nZWQiLCJvblR5cGVDaGFuZ2UiLCJvblRvZ2dsZVN0cmVhbSIsIm9uVG9nZ2xlTGFzdCIsIm9uU2NoZW1hRm9ybUNoYW5nZSIsInBvc3RSZXNvdXJjZSIsInRoZW4iLCJyZXMiLCJzY2hlbWEiLCJjc3MiLCJ1c2VTdHlsZXMyIiwiRmllbGRTZXQiLCJyZW5kZXJJbnB1dCIsImdldFN0eWxlcyIsInRoZW1lIiwianNvblZpZXciLCJzcGFjaW5nIiwic2V0SnNvblZpZXciLCJzdHlsZXMiLCJvblVwZGF0ZVRleHRBcmVhIiwiZXZlbnQiLCJlbGVtZW50Iiwic3RyZWFtaW5nQ2xpZW50RmllbGRzIiwidHlwZXMiLCJvblNlbGVjdENoYW5nZSIsInVybCIsIk11bHRpU2VsZWN0IiwicGVyaW9kIiwiZmllbGROYW1lcyIsInN0YXRlTmFtZXMiLCJzdGF0ZXMiLCJvbkNvdW50Iiwib25WYWx1ZSIsIm9mZkNvdW50Iiwib2ZmVmFsdWUiLCJmcm9tIiwibWVyZ2UiLCJvZiIsInRocm93RXJyb3IiLCJkZWxheSIsIkFycmF5RGF0YUZyYW1lIiwiRGF0YVRvcGljIiwiTGl2ZUNoYW5uZWxTY29wZSIsIkxvYWRpbmdTdGF0ZSIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsImdldEJhY2tlbmRTcnYiLCJnZXRHcmFmYW5hTGl2ZVNydiIsImdldFRlbXBsYXRlU3J2IiwiZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyIiwicXVlcnlNZXRyaWNUcmVlIiwiZ2VuZXJhdGVSYW5kb21Ob2RlcyIsInNhdmVkTm9kZXNSZXNwb25zZSIsInJ1blN0cmVhbSIsIlRlc3REYXRhVmFyaWFibGVTdXBwb3J0IiwiVGVzdERhdGFEYXRhU291cmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsInRlbXBsYXRlU3J2IiwidmFyaWFibGVzIiwiYmFja2VuZFF1ZXJpZXMiLCJzdHJlYW1zIiwidGFyZ2V0cyIsImhpZGUiLCJyZXNvbHZlVGVtcGxhdGVWYXJpYWJsZXMiLCJzY29wZWRWYXJzIiwicnVuR3JhZmFuYUxpdmVRdWVyeSIsInJ1bkdyYWZhbmFBUEkiLCJhbm5vdGF0aW9uRGF0YVRvcGljVGVzdCIsInZhcmlhYmxlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInJhd0ZyYW1lUXVlcnkiLCJzZXJ2ZXJFcnJvclF1ZXJ5IiwiYmFja2VuZE9wdHMiLCJyZXBsYWNlIiwicmVxIiwiZXZlbnRzIiwiYnVpbGRGYWtlQW5ub3RhdGlvbkV2ZW50cyIsInJhbmdlIiwiZGF0YUZyYW1lIiwibWV0YSIsImRhdGFUb3BpYyIsIkFubm90YXRpb25zIiwicGlwZSIsInRpbWVXYWxrZXIiLCJ2YWx1ZU9mIiwidG8iLCJpIiwidGltZSIsInRleHQiLCJ0YWdzIiwiYW5ub3RhdGlvblF1ZXJ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJnZXRRdWVyeURpc3BsYXlUZXh0IiwidGVzdERhdGFzb3VyY2UiLCJzdGF0dXMiLCJtZXNzYWdlIiwic2NlbmFyaW9zQ2FjaGUiLCJpbnRlcnBvbGF0ZWRRdWVyeSIsIndpbGRjYXJkQ2hhciIsImNoaWxkcmVuIiwiaXRlbXMiLCJmcmFtZXMiLCJFcnJvciIsIkRvbmUiLCJleCIsImdldCIsImZyYW1lIiwibGl2ZVF1ZXJ5Q291bnRlciIsImdldERhdGFTdHJlYW0iLCJhZGRyIiwic2NvcGUiLCJQbHVnaW4iLCJuYW1lc3BhY2UiLCJidWlsZE1ldHJpY1RyZWUiLCJwYXJlbnQiLCJkZXB0aCIsImNoYXJzIiwibGV0dGVyIiwibm9kZU5hbWUiLCJxdWVyeVRyZWUiLCJxdWVyeUluZGV4Iiwibm9kZVF1ZXJ5IiwicmVzdWx0IiwibmFtZXNUb01hdGNoIiwic3RhcnRzV2l0aCIsInNwbGl0Iiwibm9kZSIsIm5hbWVUb01hdGNoIiwiaW5kZXhPZiIsInBhdHRlcm4iLCJyZWdleCIsIlJlZ0V4cCIsInRlc3QiLCJjb25jYXQiLCJEYXRhU291cmNlUGx1Z2luIiwiVGVzdERhdGFBbm5vdGF0aW9uc1F1ZXJ5Q3RybCIsInBsdWdpbiIsInNldENvbmZpZ0VkaXRvciIsInNldFF1ZXJ5RWRpdG9yIiwic2V0QW5ub3RhdGlvblF1ZXJ5Q3RybCIsImFkZENvbmZpZ1BhZ2UiLCJ0aXRsZSIsImljb24iLCJib2R5IiwiQXJyYXlWZWN0b3IiLCJGaWVsZENvbG9yTW9kZUlkIiwiRmllbGRUeXBlIiwiTXV0YWJsZURhdGFGcmFtZSIsIk5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMiLCJlZGdlcyIsInJvb3QiLCJzdWJUaXRsZSIsInN1Y2Nlc3MiLCJzdGF0MSIsInN0YXQyIiwibm9kZXNXaXRob3V0TWF4RWRnZXMiLCJtYXhFZGdlcyIsIm1ha2VSYW5kb21Ob2RlIiwic291cmNlSW5kZXgiLCJzb3VyY2UiLCJhZGRpdGlvbmFsRWRnZXMiLCJ0YXJnZXRJbmRleCIsIm5vZGVGaWVsZHMiLCJ2YWx1ZXMiLCJzdHJpbmciLCJtYWluU3RhdCIsIm51bWJlciIsImRpc3BsYXlOYW1lIiwic2Vjb25kYXJ5U3RhdCIsImFyYyIsImNvbG9yIiwiZml4ZWRDb2xvciIsIkZpeGVkIiwibm9kZUZyYW1lIiwiT2JqZWN0Iiwia2V5cyIsInByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlIiwiZWRnZUZpZWxkcyIsImVkZ2VzRnJhbWUiLCJlZGdlc1NldCIsIlNldCIsImFkZCIsImFyY19fc3VjY2VzcyIsImFyY19fZXJyb3JzIiwiZWRnZSIsImhhcyIsInRvU3RyaW5nIiwiZGVmYXVsdHMiLCJPYnNlcnZhYmxlIiwiQ2lyY3VsYXJEYXRhRnJhbWUiLCJDU1ZSZWFkZXIiLCJsaXZlVGltZXIiLCJTdHJlYW1pbmdEYXRhRnJhbWUiLCJzcGVlZCIsInNwcmVhZCIsIm5vaXNlIiwiYmFuZHMiLCJydW5TaWduYWxTdHJlYW0iLCJydW5Mb2dzU3RyZWFtIiwicnVuRmV0Y2hTdHJlYW0iLCJzdWJzY3JpYmVyIiwic3RyZWFtSWQiLCJwYW5lbElkIiwibWF4RGF0YVBvaW50cyIsInN1ZmZpeCIsImZyb21EYXRhRnJhbWVKU09OIiwibWF4TGVuZ3RoIiwidGltZW91dElkIiwibGFzdFNlbnQiLCJhZGROZXh0Um93IiwiRGF0ZSIsIm5vdyIsInB1c2hOZXh0RXZlbnQiLCJlbGFwc2VkIiwibGFzdFVwZGF0ZSIsIm9rIiwibmV4dCIsIlN0cmVhbWluZyIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhcHBlbmQiLCJjYXBhY2l0eSIsImFkZEZpZWxkIiwicmVhZGVyIiwiY3N2IiwiY2FsbGJhY2siLCJvbkhlYWRlciIsIm9uUm93Iiwicm93IiwicHJvY2Vzc0NodW5rIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJyZWFkQ1NWIiwiZG9uZSIsImNvbXBsZXRlIiwicmVhZCIsImZldGNoIiwiUmVxdWVzdCIsInJlc3BvbnNlIiwiZ2V0UmVhZGVyIiwibGlua3MiLCJpbnRlcm5hbCIsInF1ZXJ5VHlwZSIsImRhdGFzb3VyY2VVaWQiLCJkYXRhc291cmNlTmFtZSIsInVuaXQiLCJTdGFuZGFyZFZhcmlhYmxlU3VwcG9ydCIsInRvRGF0YVF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==