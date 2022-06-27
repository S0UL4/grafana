"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["prom-query-field"],{

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var monaco_promql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/monaco-promql-npm-1.7.4-1b0c13a666-9fe2708be5.zip/node_modules/monaco-promql/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useLatest.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _getOverrideServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/getOverrideServices.ts");
/* harmony import */ var _monaco_completion_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const options = {
  codeLens: false,
  contextmenu: false,
  // we need `fixedOverflowWidgets` because otherwise in grafana-dashboards
  // the popup is clipped by the panel-visualizations.
  fixedOverflowWidgets: true,
  folding: false,
  fontSize: 14,
  lineDecorationsWidth: 8,
  // used as "padding-left"
  lineNumbers: 'off',
  minimap: {
    enabled: false
  },
  overviewRulerBorder: false,
  overviewRulerLanes: 0,
  padding: {
    // these numbers were picked so that visually this matches the previous version
    // of the query-editor the best
    top: 4,
    bottom: 5
  },
  renderLineHighlight: 'none',
  scrollbar: {
    vertical: 'hidden',
    verticalScrollbarSize: 8,
    // used as "padding-right"
    horizontal: 'hidden',
    horizontalScrollbarSize: 0
  },
  scrollBeyondLastLine: false,
  suggest: (0,_monaco_completion_provider__WEBPACK_IMPORTED_MODULE_6__.getSuggestOptions)(),
  suggestFontSize: 12,
  wordWrap: 'on'
}; // this number was chosen by testing various values. it might be necessary
// because of the width of the border, not sure.
//it needs to do 2 things:
// 1. when the editor is single-line, it should make the editor height be visually correct
// 2. when the editor is multi-line, the editor should not be "scrollable" (meaning,
//    you do a scroll-movement in the editor, and it will scroll the content by a couple pixels
//    up & down. this we want to avoid)

const EDITOR_HEIGHT_OFFSET = 2;
const PROMQL_LANG_ID = monaco_promql__WEBPACK_IMPORTED_MODULE_1__.promLanguageDefinition.id; // we must only run the promql-setup code once

let PROMQL_SETUP_STARTED = false;

function ensurePromQL(monaco) {
  if (PROMQL_SETUP_STARTED === false) {
    PROMQL_SETUP_STARTED = true;
    const {
      aliases,
      extensions,
      mimetypes,
      loader
    } = monaco_promql__WEBPACK_IMPORTED_MODULE_1__.promLanguageDefinition;
    monaco.languages.register({
      id: PROMQL_LANG_ID,
      aliases,
      extensions,
      mimetypes
    });
    loader().then(mod => {
      monaco.languages.setMonarchTokensProvider(PROMQL_LANG_ID, mod.language);
      monaco.languages.setLanguageConfiguration(PROMQL_LANG_ID, mod.languageConfiguration);
    });
  }
}

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border-radius: ${theme.shape.borderRadius()};
      border: 1px solid ${theme.components.input.borderColor};
    `
  };
};

const MonacoQueryField = props => {
  // we need only one instance of `overrideServices` during the lifetime of the react component
  const overrideServicesRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,_getOverrideServices__WEBPACK_IMPORTED_MODULE_5__.getOverrideServices)());
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const {
    languageProvider,
    history,
    onBlur,
    onRunQuery,
    initialValue
  } = props;
  const lpRef = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(languageProvider);
  const historyRef = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(history);
  const onRunQueryRef = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(onRunQuery);
  const onBlurRef = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(onBlur);
  const autocompleteDisposeFun = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const styles = getStyles(theme);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // when we unmount, we unregister the autocomplete-function, if it was registered
    return () => {
      var _autocompleteDisposeF;

      (_autocompleteDisposeF = autocompleteDisposeFun.current) === null || _autocompleteDisposeF === void 0 ? void 0 : _autocompleteDisposeF.call(autocompleteDisposeFun);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.QueryField.container,
    className: styles.container // NOTE: we will be setting inline-style-width/height on this element
    ,
    ref: containerRef,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ReactMonacoEditor, {
      overrideServices: overrideServicesRef.current,
      options: options,
      language: "promql",
      value: initialValue,
      beforeMount: monaco => {
        ensurePromQL(monaco);
      },
      onMount: (editor, monaco) => {
        // we setup on-blur
        editor.onDidBlurEditorWidget(() => {
          onBlurRef.current(editor.getValue());
        }); // we construct a DataProvider object

        const getSeries = selector => lpRef.current.getSeries(selector);

        const getHistory = () => Promise.resolve(historyRef.current.map(h => h.query.expr).filter(expr => expr !== undefined));

        const getAllMetricNames = () => {
          const {
            metrics,
            metricsMetadata
          } = lpRef.current;
          const result = metrics.map(m => {
            var _metaItem$help, _metaItem$type;

            const metaItem = metricsMetadata === null || metricsMetadata === void 0 ? void 0 : metricsMetadata[m];
            return {
              name: m,
              help: (_metaItem$help = metaItem === null || metaItem === void 0 ? void 0 : metaItem.help) !== null && _metaItem$help !== void 0 ? _metaItem$help : '',
              type: (_metaItem$type = metaItem === null || metaItem === void 0 ? void 0 : metaItem.type) !== null && _metaItem$type !== void 0 ? _metaItem$type : ''
            };
          });
          return Promise.resolve(result);
        };

        const getAllLabelNames = () => Promise.resolve(lpRef.current.getLabelKeys());

        const getLabelValues = labelName => lpRef.current.getLabelValues(labelName);

        const dataProvider = {
          getSeries,
          getHistory,
          getAllMetricNames,
          getAllLabelNames,
          getLabelValues
        };
        const completionProvider = (0,_monaco_completion_provider__WEBPACK_IMPORTED_MODULE_6__.getCompletionProvider)(monaco, dataProvider); // completion-providers in monaco are not registered directly to editor-instances,
        // they are registered to languages. this makes it hard for us to have
        // separate completion-providers for every query-field-instance
        // (but we need that, because they might connect to different datasources).
        // the trick we do is, we wrap the callback in a "proxy",
        // and in the proxy, the first thing is, we check if we are called from
        // "our editor instance", and if not, we just return nothing. if yes,
        // we call the completion-provider.

        const filteringCompletionProvider = Object.assign({}, completionProvider, {
          provideCompletionItems: (model, position, context, token) => {
            var _editor$getModel;

            // if the model-id does not match, then this call is from a different editor-instance,
            // not "our instance", so return nothing
            if (((_editor$getModel = editor.getModel()) === null || _editor$getModel === void 0 ? void 0 : _editor$getModel.id) !== model.id) {
              return {
                suggestions: []
              };
            }

            return completionProvider.provideCompletionItems(model, position, context, token);
          }
        });
        const {
          dispose
        } = monaco.languages.registerCompletionItemProvider(PROMQL_LANG_ID, filteringCompletionProvider);
        autocompleteDisposeFun.current = dispose; // this code makes the editor resize itself so that the content fits
        // (it will grow taller when necessary)
        // FIXME: maybe move this functionality into CodeEditor, like:
        // <CodeEditor resizingMode="single-line"/>

        const updateElementHeight = () => {
          const containerDiv = containerRef.current;

          if (containerDiv !== null) {
            const pixelHeight = editor.getContentHeight();
            containerDiv.style.height = `${pixelHeight + EDITOR_HEIGHT_OFFSET}px`;
            containerDiv.style.width = '100%';
            const pixelWidth = containerDiv.clientWidth;
            editor.layout({
              width: pixelWidth,
              height: pixelHeight
            });
          }
        };

        editor.onDidContentSizeChange(updateElementHeight);
        updateElementHeight(); // handle: shift + enter
        // FIXME: maybe move this functionality into CodeEditor?

        editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
          onRunQueryRef.current(editor.getValue());
        });
        /* Something in this configuration of monaco doesn't bubble up [mod]+K, which the 
        command palette uses. Pass the event out of monaco manually
        */

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK, function () {
          __webpack_require__.g.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'k',
            metaKey: true
          }));
        });
      }
    })
  });
}; // we will lazy-load this module using React.lazy,
// and that only supports default-exports,
// so we have to default-export this, even if
// it is against the style-guidelines.


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonacoQueryField);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/getOverrideServices.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOverrideServices": () => (/* binding */ getOverrideServices)
/* harmony export */ });
// this thing here is a workaround in a way.
// what we want to achieve, is that when the autocomplete-window
// opens, the "second, extra popup" with the extra help,
// also opens automatically.
// but there is no API to achieve it.
// the way to do it is to implement the `storageService`
// interface, and provide our custom implementation,
// which will default to `true` for the correct string-key.
// unfortunately, while the typescript-interface exists,
// it is not exported from monaco-editor,
// so we cannot rely on typescript to make sure
// we do it right. all we can do is to manually
// lookup the interface, and make sure we code our code right.
// our code is a "best effort" approach,
// i am not 100% how the `scope` and `target` things work,
// but so far it seems to work ok.
// i would use an another approach, if there was one available.
function makeStorageService() {
  // we need to return an object that fulfills this interface:
  // https://github.com/microsoft/vscode/blob/ff1e16eebb93af79fd6d7af1356c4003a120c563/src/vs/platform/storage/common/storage.ts#L37
  // unfortunately it is not export from monaco-editor
  const strings = new Map(); // we want this to be true by default

  strings.set('expandSuggestionDocs', true.toString());
  return {
    // we do not implement the on* handlers
    onDidChangeValue: data => undefined,
    onDidChangeTarget: data => undefined,
    onWillSaveState: data => undefined,
    get: (key, scope, fallbackValue) => {
      var _strings$get;

      return (_strings$get = strings.get(key)) !== null && _strings$get !== void 0 ? _strings$get : fallbackValue;
    },
    getBoolean: (key, scope, fallbackValue) => {
      const val = strings.get(key);

      if (val !== undefined) {
        // the interface-docs say the value will be converted
        // to a boolean but do not specify how, so we improvise
        return val === 'true';
      } else {
        return fallbackValue;
      }
    },
    getNumber: (key, scope, fallbackValue) => {
      const val = strings.get(key);

      if (val !== undefined) {
        return parseInt(val, 10);
      } else {
        return fallbackValue;
      }
    },
    store: (key, value, scope, target) => {
      // the interface-docs say if the value is nullish, it should act as delete
      if (value === null || value === undefined) {
        strings.delete(key);
      } else {
        strings.set(key, value.toString());
      }
    },
    remove: (key, scope) => {
      strings.delete(key);
    },
    keys: (scope, target) => {
      return Array.from(strings.keys());
    },
    logStorage: () => {
      console.log('logStorage: not implemented');
    },
    migrate: () => {
      // we do not implement this
      return Promise.resolve(undefined);
    },
    isNew: scope => {
      // we create a new storage for every session, we do not persist it,
      // so we return `true`.
      return true;
    },
    flush: reason => {
      // we do not implement this
      return Promise.resolve(undefined);
    }
  };
}

let overrideServices = null;
function getOverrideServices() {
  // only have one instance of this for every query editor
  if (overrideServices === null) {
    overrideServices = {
      storageService: makeStorageService()
    };
  }

  return overrideServices;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/completions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCompletions": () => (/* binding */ getCompletions)
/* harmony export */ });
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
/* harmony import */ var _promql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts");


 // FIXME: we should not load this from the "outside", but we cannot do that while we have the "old" query-field too

// we order items like: history, functions, metrics
async function getAllMetricNamesCompletions(dataProvider) {
  const metrics = await dataProvider.getAllMetricNames();
  return metrics.map(metric => ({
    type: 'METRIC_NAME',
    label: metric.name,
    insertText: metric.name,
    detail: `${metric.name} : ${metric.type}`,
    documentation: metric.help
  }));
}

const FUNCTION_COMPLETIONS = _promql__WEBPACK_IMPORTED_MODULE_1__.FUNCTIONS.map(f => {
  var _f$insertText;

  return {
    type: 'FUNCTION',
    label: f.label,
    insertText: (_f$insertText = f.insertText) !== null && _f$insertText !== void 0 ? _f$insertText : '',
    // i don't know what to do when this is nullish. it should not be.
    detail: f.detail,
    documentation: f.documentation
  };
});

async function getAllFunctionsAndMetricNamesCompletions(dataProvider) {
  const metricNames = await getAllMetricNamesCompletions(dataProvider);
  return [...FUNCTION_COMPLETIONS, ...metricNames];
}

const DURATION_COMPLETIONS = ['$__interval', '$__range', '$__rate_interval', '1m', '5m', '10m', '30m', '1h', '1d'].map(text => ({
  type: 'DURATION',
  label: text,
  insertText: text
}));

async function getAllHistoryCompletions(dataProvider) {
  // function getAllHistoryCompletions(queryHistory: PromHistoryItem[]): Completion[] {
  // NOTE: the typescript types are wrong. historyItem.query.expr can be undefined
  const allHistory = await dataProvider.getHistory(); // FIXME: find a better history-limit

  return allHistory.slice(0, 10).map(expr => ({
    type: 'HISTORY',
    label: expr,
    insertText: expr
  }));
}

function makeSelector(metricName, labels) {
  const allLabels = [...labels]; // we transform the metricName to a label, if it exists

  if (metricName !== undefined) {
    allLabels.push({
      name: '__name__',
      value: metricName,
      op: '='
    });
  }

  const allLabelTexts = allLabels.map(label => `${label.name}${label.op}"${(0,_language_utils__WEBPACK_IMPORTED_MODULE_0__.escapeLabelValueInExactSelector)(label.value)}"`);
  return `{${allLabelTexts.join(',')}}`;
}

async function getLabelNames(metric, otherLabels, dataProvider) {
  if (metric === undefined && otherLabels.length === 0) {
    // if there is no filtering, we have to use a special endpoint
    return dataProvider.getAllLabelNames();
  } else {
    const selector = makeSelector(metric, otherLabels);
    const data = await dataProvider.getSeries(selector);
    const possibleLabelNames = Object.keys(data); // all names from prometheus

    const usedLabelNames = new Set(otherLabels.map(l => l.name)); // names used in the query

    return possibleLabelNames.filter(l => !usedLabelNames.has(l));
  }
}

async function getLabelNamesForCompletions(metric, suffix, triggerOnInsert, otherLabels, dataProvider) {
  const labelNames = await getLabelNames(metric, otherLabels, dataProvider);
  return labelNames.map(text => ({
    type: 'LABEL_NAME',
    label: text,
    insertText: `${text}${suffix}`,
    triggerOnInsert
  }));
}

async function getLabelNamesForSelectorCompletions(metric, otherLabels, dataProvider) {
  return getLabelNamesForCompletions(metric, '=', true, otherLabels, dataProvider);
}

async function getLabelNamesForByCompletions(metric, otherLabels, dataProvider) {
  return getLabelNamesForCompletions(metric, '', false, otherLabels, dataProvider);
}

async function getLabelValues(metric, labelName, otherLabels, dataProvider) {
  if (metric === undefined && otherLabels.length === 0) {
    // if there is no filtering, we have to use a special endpoint
    return dataProvider.getLabelValues(labelName);
  } else {
    var _data$labelName;

    const selector = makeSelector(metric, otherLabels);
    const data = await dataProvider.getSeries(selector);
    return (_data$labelName = data[labelName]) !== null && _data$labelName !== void 0 ? _data$labelName : [];
  }
}

async function getLabelValuesForMetricCompletions(metric, labelName, betweenQuotes, otherLabels, dataProvider) {
  const values = await getLabelValues(metric, labelName, otherLabels, dataProvider);
  return values.map(text => ({
    type: 'LABEL_VALUE',
    label: text,
    insertText: betweenQuotes ? text : `"${text}"` // FIXME: escaping strange characters?

  }));
}

async function getCompletions(situation, dataProvider) {
  switch (situation.type) {
    case 'IN_DURATION':
      return DURATION_COMPLETIONS;

    case 'IN_FUNCTION':
      return getAllFunctionsAndMetricNamesCompletions(dataProvider);

    case 'AT_ROOT':
      {
        return getAllFunctionsAndMetricNamesCompletions(dataProvider);
      }

    case 'EMPTY':
      {
        const metricNames = await getAllMetricNamesCompletions(dataProvider);
        const historyCompletions = await getAllHistoryCompletions(dataProvider);
        return [...historyCompletions, ...FUNCTION_COMPLETIONS, ...metricNames];
      }

    case 'IN_LABEL_SELECTOR_NO_LABEL_NAME':
      return getLabelNamesForSelectorCompletions(situation.metricName, situation.otherLabels, dataProvider);

    case 'IN_GROUPING':
      return getLabelNamesForByCompletions(situation.metricName, situation.otherLabels, dataProvider);

    case 'IN_LABEL_SELECTOR_WITH_LABEL_NAME':
      return getLabelValuesForMetricCompletions(situation.metricName, situation.labelName, situation.betweenQuotes, situation.otherLabels, dataProvider);

    default:
      throw new _util__WEBPACK_IMPORTED_MODULE_2__.NeverCaseError(situation);
  }
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCompletionProvider": () => (/* binding */ getCompletionProvider),
/* harmony export */   "getSuggestOptions": () => (/* binding */ getSuggestOptions)
/* harmony export */ });
/* harmony import */ var _completions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/completions.ts");
/* harmony import */ var _situation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/situation.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts");



function getSuggestOptions() {
  return {
    // monaco-editor sometimes provides suggestions automatically, i am not
    // sure based on what, seems to be by analyzing the words already
    // written.
    // to try it out:
    // - enter `go_goroutines{job~`
    // - have the cursor at the end of the string
    // - press ctrl-enter
    // - you will get two suggestions
    // those were not provided by grafana, they are offered automatically.
    // i want to remove those. the only way i found is:
    // - every suggestion-item has a `kind` attribute,
    //   that controls the icon to the left of the suggestion.
    // - items auto-generated by monaco have `kind` set to `text`.
    // - we make sure grafana-provided suggestions do not have `kind` set to `text`.
    // - and then we tell monaco not to show suggestions of kind `text`
    showWords: false
  };
}

function getMonacoCompletionItemKind(type, monaco) {
  switch (type) {
    case 'DURATION':
      return monaco.languages.CompletionItemKind.Unit;

    case 'FUNCTION':
      return monaco.languages.CompletionItemKind.Variable;

    case 'HISTORY':
      return monaco.languages.CompletionItemKind.Snippet;

    case 'LABEL_NAME':
      return monaco.languages.CompletionItemKind.Enum;

    case 'LABEL_VALUE':
      return monaco.languages.CompletionItemKind.EnumMember;

    case 'METRIC_NAME':
      return monaco.languages.CompletionItemKind.Constructor;

    default:
      throw new _util__WEBPACK_IMPORTED_MODULE_2__.NeverCaseError(type);
  }
}

function getCompletionProvider(monaco, dataProvider) {
  const provideCompletionItems = (model, position) => {
    const word = model.getWordAtPosition(position);
    const range = word != null ? monaco.Range.lift({
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn
    }) : monaco.Range.fromPositions(position); // documentation says `position` will be "adjusted" in `getOffsetAt`
    // i don't know what that means, to be sure i clone it

    const positionClone = {
      column: position.column,
      lineNumber: position.lineNumber
    };
    const offset = model.getOffsetAt(positionClone);
    const situation = (0,_situation__WEBPACK_IMPORTED_MODULE_1__.getSituation)(model.getValue(), offset);
    const completionsPromise = situation != null ? (0,_completions__WEBPACK_IMPORTED_MODULE_0__.getCompletions)(situation, dataProvider) : Promise.resolve([]);
    return completionsPromise.then(items => {
      // monaco by-default alphabetically orders the items.
      // to stop it, we use a number-as-string sortkey,
      // so that monaco keeps the order we use
      const maxIndexDigits = items.length.toString().length;
      const suggestions = items.map((item, index) => ({
        kind: getMonacoCompletionItemKind(item.type, monaco),
        label: item.label,
        insertText: item.insertText,
        detail: item.detail,
        documentation: item.documentation,
        sortText: index.toString().padStart(maxIndexDigits, '0'),
        // to force the order we have
        range,
        command: item.triggerOnInsert ? {
          id: 'editor.action.triggerSuggest',
          title: ''
        } : undefined
      }));
      return {
        suggestions
      };
    });
  };

  return {
    triggerCharacters: ['{', ',', '[', '(', '=', '~', ' ', '"'],
    provideCompletionItems
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/situation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSituation": () => (/* binding */ getSituation)
/* harmony export */ });
/* harmony import */ var lezer_promql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/0/cache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts");



function move(node, direction) {
  switch (direction) {
    case 'parent':
      return node.parent;

    case 'firstChild':
      return node.firstChild;

    case 'lastChild':
      return node.lastChild;

    case 'nextSibling':
      return node.nextSibling;

    default:
      throw new _util__WEBPACK_IMPORTED_MODULE_1__.NeverCaseError(direction);
  }
}

function walk(node, path) {
  let current = node;

  for (const [direction, expectedType] of path) {
    current = move(current, direction);

    if (current === null) {
      // we could not move in the direction, we stop
      return null;
    }

    if (current.type.name !== expectedType) {
      // the reached node has wrong type, we stop
      return null;
    }
  }

  return current;
}

function getNodeText(node, text) {
  return text.slice(node.from, node.to);
}

function parsePromQLStringLiteral(text) {
  // if it is a string-literal, it is inside quotes of some kind
  const inside = text.slice(1, text.length - 1); // FIXME: support https://prometheus.io/docs/prometheus/latest/querying/basics/#string-literals
  // FIXME: maybe check other promql code, if all is supported or not
  // for now we do only some very simple un-escaping
  // we start with double-quotes

  if (text.startsWith('"') && text.endsWith('"')) {
    // NOTE: this is not 100% perfect, we only unescape the double-quote,
    // there might be other characters too
    return inside.replace(/\\"/, '"');
  } // then single-quote


  if (text.startsWith("'") && text.endsWith("'")) {
    // NOTE: this is not 100% perfect, we only unescape the single-quote,
    // there might be other characters too
    return inside.replace(/\\'/, "'");
  } // then backticks


  if (text.startsWith('`') && text.endsWith('`')) {
    return inside;
  }

  throw new Error('FIXME: invalid string literal');
}

function isPathMatch(resolverPath, cursorPath) {
  return resolverPath.every((item, index) => item === cursorPath[index]);
}

const ERROR_NODE_NAME = '⚠'; // this is used as error-name

const RESOLVERS = [{
  path: ['LabelMatchers', 'VectorSelector'],
  fun: resolveLabelKeysWithEquals
}, {
  path: ['PromQL'],
  fun: resolveTopLevel
}, {
  path: ['FunctionCallBody'],
  fun: resolveInFunction
}, {
  path: ['StringLiteral', 'LabelMatcher'],
  fun: resolveLabelMatcher
}, {
  path: [ERROR_NODE_NAME, 'LabelMatcher'],
  fun: resolveLabelMatcher
}, {
  path: [ERROR_NODE_NAME, 'MatrixSelector'],
  fun: resolveDurations
}, {
  path: ['GroupingLabels'],
  fun: resolveLabelsForGrouping
}];
const LABEL_OP_MAP = new Map([['EqlSingle', '='], ['EqlRegex', '=~'], ['Neq', '!='], ['NeqRegex', '!~']]);

function getLabelOp(opNode) {
  var _LABEL_OP_MAP$get;

  const opChild = opNode.firstChild;

  if (opChild === null) {
    return null;
  }

  return (_LABEL_OP_MAP$get = LABEL_OP_MAP.get(opChild.name)) !== null && _LABEL_OP_MAP$get !== void 0 ? _LABEL_OP_MAP$get : null;
}

function getLabel(labelMatcherNode, text) {
  if (labelMatcherNode.type.name !== 'LabelMatcher') {
    return null;
  }

  const nameNode = walk(labelMatcherNode, [['firstChild', 'LabelName']]);

  if (nameNode === null) {
    return null;
  }

  const opNode = walk(nameNode, [['nextSibling', 'MatchOp']]);

  if (opNode === null) {
    return null;
  }

  const op = getLabelOp(opNode);

  if (op === null) {
    return null;
  }

  const valueNode = walk(labelMatcherNode, [['lastChild', 'StringLiteral']]);

  if (valueNode === null) {
    return null;
  }

  const name = getNodeText(nameNode, text);
  const value = parsePromQLStringLiteral(getNodeText(valueNode, text));
  return {
    name,
    value,
    op
  };
}

function getLabels(labelMatchersNode, text) {
  if (labelMatchersNode.type.name !== 'LabelMatchers') {
    return [];
  }

  let listNode = walk(labelMatchersNode, [['firstChild', 'LabelMatchList']]);
  const labels = [];

  while (listNode !== null) {
    const matcherNode = walk(listNode, [['lastChild', 'LabelMatcher']]);

    if (matcherNode === null) {
      // unexpected, we stop
      return [];
    }

    const label = getLabel(matcherNode, text);

    if (label !== null) {
      labels.push(label);
    } // there might be more labels


    listNode = walk(listNode, [['firstChild', 'LabelMatchList']]);
  } // our labels-list is last-first, so we reverse it


  labels.reverse();
  return labels;
}

function getNodeChildren(node) {
  let child = node.firstChild;
  const children = [];

  while (child !== null) {
    children.push(child);
    child = child.nextSibling;
  }

  return children;
}

function getNodeInSubtree(node, typeName) {
  // first we try the current node
  if (node.type.name === typeName) {
    return node;
  } // then we try the children


  const children = getNodeChildren(node);

  for (const child of children) {
    const n = getNodeInSubtree(child, typeName);

    if (n !== null) {
      return n;
    }
  }

  return null;
}

function resolveLabelsForGrouping(node, text, pos) {
  const aggrExpNode = walk(node, [['parent', 'AggregateModifier'], ['parent', 'AggregateExpr']]);

  if (aggrExpNode === null) {
    return null;
  }

  const bodyNode = aggrExpNode.getChild('FunctionCallBody');

  if (bodyNode === null) {
    return null;
  }

  const metricIdNode = getNodeInSubtree(bodyNode, 'MetricIdentifier');

  if (metricIdNode === null) {
    return null;
  }

  const idNode = walk(metricIdNode, [['firstChild', 'Identifier']]);

  if (idNode === null) {
    return null;
  }

  const metricName = getNodeText(idNode, text);
  return {
    type: 'IN_GROUPING',
    metricName,
    otherLabels: []
  };
}

function resolveLabelMatcher(node, text, pos) {
  // we can arrive here in two situation. `node` is either:
  // - a StringNode (like in `{job="^"}`)
  // - or an error node (like in `{job=^}`)
  const inStringNode = !node.type.isError;
  const parent = walk(node, [['parent', 'LabelMatcher']]);

  if (parent === null) {
    return null;
  }

  const labelNameNode = walk(parent, [['firstChild', 'LabelName']]);

  if (labelNameNode === null) {
    return null;
  }

  const labelName = getNodeText(labelNameNode, text); // now we need to go up, to the parent of LabelMatcher,
  // there can be one or many `LabelMatchList` parents, we have
  // to go through all of them

  const firstListNode = walk(parent, [['parent', 'LabelMatchList']]);

  if (firstListNode === null) {
    return null;
  }

  let listNode = firstListNode; // we keep going through the parent-nodes
  // as long as they are LabelMatchList.
  // as soon as we reawch LabelMatchers, we stop

  let labelMatchersNode = null;

  while (labelMatchersNode === null) {
    const p = listNode.parent;

    if (p === null) {
      return null;
    }

    const {
      name
    } = p.type;

    switch (name) {
      case 'LabelMatchList':
        //we keep looping
        listNode = p;
        continue;

      case 'LabelMatchers':
        // we reached the end, we can stop the loop
        labelMatchersNode = p;
        continue;

      default:
        // we reached some other node, we stop
        return null;
    }
  } // now we need to find the other names


  const allLabels = getLabels(labelMatchersNode, text); // we need to remove "our" label from all-labels, if it is in there

  const otherLabels = allLabels.filter(label => label.name !== labelName);
  const metricNameNode = walk(labelMatchersNode, [['parent', 'VectorSelector'], ['firstChild', 'MetricIdentifier'], ['firstChild', 'Identifier']]);

  if (metricNameNode === null) {
    // we are probably in a situation without a metric name
    return {
      type: 'IN_LABEL_SELECTOR_WITH_LABEL_NAME',
      labelName,
      betweenQuotes: inStringNode,
      otherLabels
    };
  }

  const metricName = getNodeText(metricNameNode, text);
  return {
    type: 'IN_LABEL_SELECTOR_WITH_LABEL_NAME',
    metricName,
    labelName,
    betweenQuotes: inStringNode,
    otherLabels
  };
}

function resolveTopLevel(node, text, pos) {
  return {
    type: 'AT_ROOT'
  };
}

function resolveInFunction(node, text, pos) {
  return {
    type: 'IN_FUNCTION'
  };
}

function resolveDurations(node, text, pos) {
  return {
    type: 'IN_DURATION'
  };
}

function subTreeHasError(node) {
  return getNodeInSubtree(node, ERROR_NODE_NAME) !== null;
}

function resolveLabelKeysWithEquals(node, text, pos) {
  // for example `something{^}`
  // there are some false positives that can end up in this situation, that we want
  // to eliminate:
  // `something{a~^}` (if this subtree contains any error-node, we stop)
  if (subTreeHasError(node)) {
    return null;
  } // next false positive:
  // `something{a="1"^}`


  const child = walk(node, [['firstChild', 'LabelMatchList']]);

  if (child !== null) {
    // means the label-matching part contains at least one label already.
    //
    // in this case, we will need to have a `,` character at the end,
    // to be able to suggest adding the next label.
    // the area between the end-of-the-child-node and the cursor-pos
    // must contain a `,` in this case.
    const textToCheck = text.slice(child.to, pos);

    if (!textToCheck.includes(',')) {
      return null;
    }
  }

  const metricNameNode = walk(node, [['parent', 'VectorSelector'], ['firstChild', 'MetricIdentifier'], ['firstChild', 'Identifier']]);
  const otherLabels = getLabels(node, text);

  if (metricNameNode === null) {
    // we are probably in a situation without a metric name.
    return {
      type: 'IN_LABEL_SELECTOR_NO_LABEL_NAME',
      otherLabels
    };
  }

  const metricName = getNodeText(metricNameNode, text);
  return {
    type: 'IN_LABEL_SELECTOR_NO_LABEL_NAME',
    metricName,
    otherLabels
  };
} // we find the first error-node in the tree that is at the cursor-position.
// NOTE: this might be too slow, might need to optimize it
// (ideas: we do not need to go into every subtree, based on from/to)
// also, only go to places that are in the sub-tree of the node found
// by default by lezer. problem is, `next()` will go upward too,
// and we do not want to go higher than our node


function getErrorNode(tree, pos) {
  const cur = tree.cursor(pos);

  while (true) {
    if (cur.from === pos && cur.to === pos) {
      const {
        node
      } = cur;

      if (node.type.isError) {
        return node;
      }
    }

    if (!cur.next()) {
      break;
    }
  }

  return null;
}

function getSituation(text, pos) {
  // there is a special-case when we are at the start of writing text,
  // so we handle that case first
  if (text === '') {
    return {
      type: 'EMPTY'
    };
  }
  /*
  PromQL
  Expr
  VectorSelector
  LabelMatchers
  */


  const tree = lezer_promql__WEBPACK_IMPORTED_MODULE_0__.parser.parse(text); // if the tree contains error, it is very probable that
  // our node is one of those error-nodes.
  // also, if there are errors, the node lezer finds us,
  // might not be the best node.
  // so first we check if there is an error-node at the cursor-position

  const maybeErrorNode = getErrorNode(tree, pos);
  const cur = maybeErrorNode != null ? maybeErrorNode.cursor : tree.cursor(pos);
  const currentNode = cur.node;
  const names = [cur.name];

  while (cur.parent()) {
    names.push(cur.name);
  }

  for (let resolver of RESOLVERS) {
    // i do not use a foreach because i want to stop as soon
    // as i find something
    if (isPathMatch(resolver.path, names)) {
      return resolver.fun(currentNode, text, pos);
    }
  }

  return null;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeverCaseError": () => (/* binding */ NeverCaseError)
/* harmony export */ });
// this helper class is used to make typescript warn you when you forget
// a case-block in a switch statement.
// example code that triggers the typescript-error:
//
// const x:'A'|'B'|'C' = 'A';
//
// switch(x) {
//   case 'A':
//     // something
//   case 'B':
//     // something
//   default:
//     throw new NeverCaseError(x);
// }
//
//
// typescript will show an error in this case,
// when you add the missing `case 'C'` code,
// the problem will be fixed.
class NeverCaseError extends Error {
  constructor(value) {
    super('should never happen');
  }

}

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useLatest.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

var useLatest = function (value) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
    ref.current = value;
    return ref;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLatest);


/***/ }),

/***/ "./.yarn/cache/monaco-promql-npm-1.7.4-1b0c13a666-9fe2708be5.zip/node_modules/monaco-promql/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "promLanguageDefinition": () => (/* reexport safe */ _promql_promql_contribution__WEBPACK_IMPORTED_MODULE_0__.promLanguageDefinition)
/* harmony export */ });
/* harmony import */ var _promql_promql_contribution__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/monaco-promql-npm-1.7.4-1b0c13a666-9fe2708be5.zip/node_modules/monaco-promql/promql/promql.contribution.js");
// The MIT License (MIT)
//
// Copyright (c) Celian Garcia and Augustin Husson @ Amadeus IT Group
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.




/***/ }),

/***/ "./.yarn/cache/monaco-promql-npm-1.7.4-1b0c13a666-9fe2708be5.zip/node_modules/monaco-promql/promql/promql.contribution.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "promLanguageDefinition": () => (/* binding */ promLanguageDefinition)
/* harmony export */ });
// The MIT License (MIT)
//
// Copyright (c) Celian Garcia and Augustin Husson @ Amadeus IT Group
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// noinspection JSUnusedGlobalSymbols
var promLanguageDefinition = {
    id: 'promql',
    extensions: ['.promql'],
    aliases: ['Prometheus', 'prometheus', 'prom', 'Prom', 'promql', 'Promql', 'promQL', 'PromQL'],
    mimetypes: [],
    loader: function () { return __webpack_require__.e(/* import() */ "_yarn_cache_monaco-promql-npm-1_7_4-1b0c13a666-9fe2708be5_zip_node_modules_monaco-promql_prom-5b671b").then(__webpack_require__.bind(__webpack_require__, "./.yarn/cache/monaco-promql-npm-1.7.4-1b0c13a666-9fe2708be5.zip/node_modules/monaco-promql/promql/promql.js")); } // eslint-disable-line @typescript-eslint/explicit-function-return-type
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBUDtBQUNEOzs7Ozs7Ozs7OztBQy9oQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNcEksY0FBTixTQUE2Qm1HLEtBQTdCLENBQW1DO0VBQ3hDMEQsV0FBVyxDQUFDL0ssS0FBRCxFQUFlO0lBQ3hCLE1BQU0scUJBQU47RUFDRDs7QUFIdUM7Ozs7Ozs7Ozs7OztBQ3BCWDtBQUMvQjtBQUNBLGNBQWMsNkNBQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDTnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2dDOzs7Ozs7Ozs7Ozs7QUN0QjdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU8sK1NBQWtCLElBQUk7QUFDdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy9jb21wb25lbnRzL21vbmFjby1xdWVyeS1maWVsZC9Nb25hY29RdWVyeUZpZWxkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy9jb21wb25lbnRzL21vbmFjby1xdWVyeS1maWVsZC9nZXRPdmVycmlkZVNlcnZpY2VzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wcm9tZXRoZXVzL2NvbXBvbmVudHMvbW9uYWNvLXF1ZXJ5LWZpZWxkL21vbmFjby1jb21wbGV0aW9uLXByb3ZpZGVyL2NvbXBsZXRpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wcm9tZXRoZXVzL2NvbXBvbmVudHMvbW9uYWNvLXF1ZXJ5LWZpZWxkL21vbmFjby1jb21wbGV0aW9uLXByb3ZpZGVyL2luZGV4LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wcm9tZXRoZXVzL2NvbXBvbmVudHMvbW9uYWNvLXF1ZXJ5LWZpZWxkL21vbmFjby1jb21wbGV0aW9uLXByb3ZpZGVyL3NpdHVhdGlvbi50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy9jb21wb25lbnRzL21vbmFjby1xdWVyeS1maWVsZC9tb25hY28tY29tcGxldGlvbi1wcm92aWRlci91dGlsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC11c2UtdmlydHVhbC1jZWE4ZTgyNmRjLzAvY2FjaGUvcmVhY3QtdXNlLW5wbS0xNy40LjAtMGVmNDUyMTU0NC0wODg5ZGE5MTliLnppcC9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VMYXRlc3QuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL21vbmFjby1wcm9tcWwtbnBtLTEuNy40LTFiMGMxM2E2NjYtOWZlMjcwOGJlNS56aXAvbm9kZV9tb2R1bGVzL21vbmFjby1wcm9tcWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL21vbmFjby1wcm9tcWwtbnBtLTEuNy40LTFiMGMxM2E2NjYtOWZlMjcwOGJlNS56aXAvbm9kZV9tb2R1bGVzL21vbmFjby1wcm9tcWwvcHJvbXFsL3Byb21xbC5jb250cmlidXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHByb21MYW5ndWFnZURlZmluaXRpb24gfSBmcm9tICdtb25hY28tcHJvbXFsJztcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxhdGVzdCB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgdXNlVGhlbWUyLCBSZWFjdE1vbmFjb0VkaXRvciwgTW9uYWNvLCBtb25hY29UeXBlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL01vbmFjb1F1ZXJ5RmllbGRQcm9wcyc7XG5pbXBvcnQgeyBnZXRPdmVycmlkZVNlcnZpY2VzIH0gZnJvbSAnLi9nZXRPdmVycmlkZVNlcnZpY2VzJztcbmltcG9ydCB7IGdldENvbXBsZXRpb25Qcm92aWRlciwgZ2V0U3VnZ2VzdE9wdGlvbnMgfSBmcm9tICcuL21vbmFjby1jb21wbGV0aW9uLXByb3ZpZGVyJztcblxuY29uc3Qgb3B0aW9uczogbW9uYWNvVHlwZXMuZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucyA9IHtcbiAgY29kZUxlbnM6IGZhbHNlLFxuICBjb250ZXh0bWVudTogZmFsc2UsXG4gIC8vIHdlIG5lZWQgYGZpeGVkT3ZlcmZsb3dXaWRnZXRzYCBiZWNhdXNlIG90aGVyd2lzZSBpbiBncmFmYW5hLWRhc2hib2FyZHNcbiAgLy8gdGhlIHBvcHVwIGlzIGNsaXBwZWQgYnkgdGhlIHBhbmVsLXZpc3VhbGl6YXRpb25zLlxuICBmaXhlZE92ZXJmbG93V2lkZ2V0czogdHJ1ZSxcbiAgZm9sZGluZzogZmFsc2UsXG4gIGZvbnRTaXplOiAxNCxcbiAgbGluZURlY29yYXRpb25zV2lkdGg6IDgsIC8vIHVzZWQgYXMgXCJwYWRkaW5nLWxlZnRcIlxuICBsaW5lTnVtYmVyczogJ29mZicsXG4gIG1pbmltYXA6IHsgZW5hYmxlZDogZmFsc2UgfSxcbiAgb3ZlcnZpZXdSdWxlckJvcmRlcjogZmFsc2UsXG4gIG92ZXJ2aWV3UnVsZXJMYW5lczogMCxcbiAgcGFkZGluZzoge1xuICAgIC8vIHRoZXNlIG51bWJlcnMgd2VyZSBwaWNrZWQgc28gdGhhdCB2aXN1YWxseSB0aGlzIG1hdGNoZXMgdGhlIHByZXZpb3VzIHZlcnNpb25cbiAgICAvLyBvZiB0aGUgcXVlcnktZWRpdG9yIHRoZSBiZXN0XG4gICAgdG9wOiA0LFxuICAgIGJvdHRvbTogNSxcbiAgfSxcbiAgcmVuZGVyTGluZUhpZ2hsaWdodDogJ25vbmUnLFxuICBzY3JvbGxiYXI6IHtcbiAgICB2ZXJ0aWNhbDogJ2hpZGRlbicsXG4gICAgdmVydGljYWxTY3JvbGxiYXJTaXplOiA4LCAvLyB1c2VkIGFzIFwicGFkZGluZy1yaWdodFwiXG4gICAgaG9yaXpvbnRhbDogJ2hpZGRlbicsXG4gICAgaG9yaXpvbnRhbFNjcm9sbGJhclNpemU6IDAsXG4gIH0sXG4gIHNjcm9sbEJleW9uZExhc3RMaW5lOiBmYWxzZSxcbiAgc3VnZ2VzdDogZ2V0U3VnZ2VzdE9wdGlvbnMoKSxcbiAgc3VnZ2VzdEZvbnRTaXplOiAxMixcbiAgd29yZFdyYXA6ICdvbicsXG59O1xuXG4vLyB0aGlzIG51bWJlciB3YXMgY2hvc2VuIGJ5IHRlc3RpbmcgdmFyaW91cyB2YWx1ZXMuIGl0IG1pZ2h0IGJlIG5lY2Vzc2FyeVxuLy8gYmVjYXVzZSBvZiB0aGUgd2lkdGggb2YgdGhlIGJvcmRlciwgbm90IHN1cmUuXG4vL2l0IG5lZWRzIHRvIGRvIDIgdGhpbmdzOlxuLy8gMS4gd2hlbiB0aGUgZWRpdG9yIGlzIHNpbmdsZS1saW5lLCBpdCBzaG91bGQgbWFrZSB0aGUgZWRpdG9yIGhlaWdodCBiZSB2aXN1YWxseSBjb3JyZWN0XG4vLyAyLiB3aGVuIHRoZSBlZGl0b3IgaXMgbXVsdGktbGluZSwgdGhlIGVkaXRvciBzaG91bGQgbm90IGJlIFwic2Nyb2xsYWJsZVwiIChtZWFuaW5nLFxuLy8gICAgeW91IGRvIGEgc2Nyb2xsLW1vdmVtZW50IGluIHRoZSBlZGl0b3IsIGFuZCBpdCB3aWxsIHNjcm9sbCB0aGUgY29udGVudCBieSBhIGNvdXBsZSBwaXhlbHNcbi8vICAgIHVwICYgZG93bi4gdGhpcyB3ZSB3YW50IHRvIGF2b2lkKVxuY29uc3QgRURJVE9SX0hFSUdIVF9PRkZTRVQgPSAyO1xuXG5jb25zdCBQUk9NUUxfTEFOR19JRCA9IHByb21MYW5ndWFnZURlZmluaXRpb24uaWQ7XG5cbi8vIHdlIG11c3Qgb25seSBydW4gdGhlIHByb21xbC1zZXR1cCBjb2RlIG9uY2VcbmxldCBQUk9NUUxfU0VUVVBfU1RBUlRFRCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBlbnN1cmVQcm9tUUwobW9uYWNvOiBNb25hY28pIHtcbiAgaWYgKFBST01RTF9TRVRVUF9TVEFSVEVEID09PSBmYWxzZSkge1xuICAgIFBST01RTF9TRVRVUF9TVEFSVEVEID0gdHJ1ZTtcbiAgICBjb25zdCB7IGFsaWFzZXMsIGV4dGVuc2lvbnMsIG1pbWV0eXBlcywgbG9hZGVyIH0gPSBwcm9tTGFuZ3VhZ2VEZWZpbml0aW9uO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXIoeyBpZDogUFJPTVFMX0xBTkdfSUQsIGFsaWFzZXMsIGV4dGVuc2lvbnMsIG1pbWV0eXBlcyB9KTtcblxuICAgIGxvYWRlcigpLnRoZW4oKG1vZCkgPT4ge1xuICAgICAgbW9uYWNvLmxhbmd1YWdlcy5zZXRNb25hcmNoVG9rZW5zUHJvdmlkZXIoUFJPTVFMX0xBTkdfSUQsIG1vZC5sYW5ndWFnZSk7XG4gICAgICBtb25hY28ubGFuZ3VhZ2VzLnNldExhbmd1YWdlQ29uZmlndXJhdGlvbihQUk9NUUxfTEFOR19JRCwgbW9kLmxhbmd1YWdlQ29uZmlndXJhdGlvbik7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29tcG9uZW50cy5pbnB1dC5ib3JkZXJDb2xvcn07XG4gICAgYCxcbiAgfTtcbn07XG5cbmNvbnN0IE1vbmFjb1F1ZXJ5RmllbGQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIC8vIHdlIG5lZWQgb25seSBvbmUgaW5zdGFuY2Ugb2YgYG92ZXJyaWRlU2VydmljZXNgIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHJlYWN0IGNvbXBvbmVudFxuICBjb25zdCBvdmVycmlkZVNlcnZpY2VzUmVmID0gdXNlUmVmKGdldE92ZXJyaWRlU2VydmljZXMoKSk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHsgbGFuZ3VhZ2VQcm92aWRlciwgaGlzdG9yeSwgb25CbHVyLCBvblJ1blF1ZXJ5LCBpbml0aWFsVmFsdWUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxwUmVmID0gdXNlTGF0ZXN0KGxhbmd1YWdlUHJvdmlkZXIpO1xuICBjb25zdCBoaXN0b3J5UmVmID0gdXNlTGF0ZXN0KGhpc3RvcnkpO1xuICBjb25zdCBvblJ1blF1ZXJ5UmVmID0gdXNlTGF0ZXN0KG9uUnVuUXVlcnkpO1xuICBjb25zdCBvbkJsdXJSZWYgPSB1c2VMYXRlc3Qob25CbHVyKTtcblxuICBjb25zdCBhdXRvY29tcGxldGVEaXNwb3NlRnVuID0gdXNlUmVmPCgoKSA9PiB2b2lkKSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh0aGVtZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyB3aGVuIHdlIHVubW91bnQsIHdlIHVucmVnaXN0ZXIgdGhlIGF1dG9jb21wbGV0ZS1mdW5jdGlvbiwgaWYgaXQgd2FzIHJlZ2lzdGVyZWRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYXV0b2NvbXBsZXRlRGlzcG9zZUZ1bi5jdXJyZW50Py4oKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMuY29tcG9uZW50cy5RdWVyeUZpZWxkLmNvbnRhaW5lcn1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cbiAgICAgIC8vIE5PVEU6IHdlIHdpbGwgYmUgc2V0dGluZyBpbmxpbmUtc3R5bGUtd2lkdGgvaGVpZ2h0IG9uIHRoaXMgZWxlbWVudFxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgPlxuICAgICAgPFJlYWN0TW9uYWNvRWRpdG9yXG4gICAgICAgIG92ZXJyaWRlU2VydmljZXM9e292ZXJyaWRlU2VydmljZXNSZWYuY3VycmVudH1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgbGFuZ3VhZ2U9XCJwcm9tcWxcIlxuICAgICAgICB2YWx1ZT17aW5pdGlhbFZhbHVlfVxuICAgICAgICBiZWZvcmVNb3VudD17KG1vbmFjbykgPT4ge1xuICAgICAgICAgIGVuc3VyZVByb21RTChtb25hY28pO1xuICAgICAgICB9fVxuICAgICAgICBvbk1vdW50PXsoZWRpdG9yLCBtb25hY28pID0+IHtcbiAgICAgICAgICAvLyB3ZSBzZXR1cCBvbi1ibHVyXG4gICAgICAgICAgZWRpdG9yLm9uRGlkQmx1ckVkaXRvcldpZGdldCgoKSA9PiB7XG4gICAgICAgICAgICBvbkJsdXJSZWYuY3VycmVudChlZGl0b3IuZ2V0VmFsdWUoKSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyB3ZSBjb25zdHJ1Y3QgYSBEYXRhUHJvdmlkZXIgb2JqZWN0XG4gICAgICAgICAgY29uc3QgZ2V0U2VyaWVzID0gKHNlbGVjdG9yOiBzdHJpbmcpID0+IGxwUmVmLmN1cnJlbnQuZ2V0U2VyaWVzKHNlbGVjdG9yKTtcblxuICAgICAgICAgIGNvbnN0IGdldEhpc3RvcnkgPSAoKSA9PlxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGhpc3RvcnlSZWYuY3VycmVudC5tYXAoKGgpID0+IGgucXVlcnkuZXhwcikuZmlsdGVyKChleHByKSA9PiBleHByICE9PSB1bmRlZmluZWQpKTtcblxuICAgICAgICAgIGNvbnN0IGdldEFsbE1ldHJpY05hbWVzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBtZXRyaWNzLCBtZXRyaWNzTWV0YWRhdGEgfSA9IGxwUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBtZXRyaWNzLm1hcCgobSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtZXRhSXRlbSA9IG1ldHJpY3NNZXRhZGF0YT8uW21dO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG0sXG4gICAgICAgICAgICAgICAgaGVscDogbWV0YUl0ZW0/LmhlbHAgPz8gJycsXG4gICAgICAgICAgICAgICAgdHlwZTogbWV0YUl0ZW0/LnR5cGUgPz8gJycsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBnZXRBbGxMYWJlbE5hbWVzID0gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGxwUmVmLmN1cnJlbnQuZ2V0TGFiZWxLZXlzKCkpO1xuXG4gICAgICAgICAgY29uc3QgZ2V0TGFiZWxWYWx1ZXMgPSAobGFiZWxOYW1lOiBzdHJpbmcpID0+IGxwUmVmLmN1cnJlbnQuZ2V0TGFiZWxWYWx1ZXMobGFiZWxOYW1lKTtcblxuICAgICAgICAgIGNvbnN0IGRhdGFQcm92aWRlciA9IHsgZ2V0U2VyaWVzLCBnZXRIaXN0b3J5LCBnZXRBbGxNZXRyaWNOYW1lcywgZ2V0QWxsTGFiZWxOYW1lcywgZ2V0TGFiZWxWYWx1ZXMgfTtcbiAgICAgICAgICBjb25zdCBjb21wbGV0aW9uUHJvdmlkZXIgPSBnZXRDb21wbGV0aW9uUHJvdmlkZXIobW9uYWNvLCBkYXRhUHJvdmlkZXIpO1xuXG4gICAgICAgICAgLy8gY29tcGxldGlvbi1wcm92aWRlcnMgaW4gbW9uYWNvIGFyZSBub3QgcmVnaXN0ZXJlZCBkaXJlY3RseSB0byBlZGl0b3ItaW5zdGFuY2VzLFxuICAgICAgICAgIC8vIHRoZXkgYXJlIHJlZ2lzdGVyZWQgdG8gbGFuZ3VhZ2VzLiB0aGlzIG1ha2VzIGl0IGhhcmQgZm9yIHVzIHRvIGhhdmVcbiAgICAgICAgICAvLyBzZXBhcmF0ZSBjb21wbGV0aW9uLXByb3ZpZGVycyBmb3IgZXZlcnkgcXVlcnktZmllbGQtaW5zdGFuY2VcbiAgICAgICAgICAvLyAoYnV0IHdlIG5lZWQgdGhhdCwgYmVjYXVzZSB0aGV5IG1pZ2h0IGNvbm5lY3QgdG8gZGlmZmVyZW50IGRhdGFzb3VyY2VzKS5cbiAgICAgICAgICAvLyB0aGUgdHJpY2sgd2UgZG8gaXMsIHdlIHdyYXAgdGhlIGNhbGxiYWNrIGluIGEgXCJwcm94eVwiLFxuICAgICAgICAgIC8vIGFuZCBpbiB0aGUgcHJveHksIHRoZSBmaXJzdCB0aGluZyBpcywgd2UgY2hlY2sgaWYgd2UgYXJlIGNhbGxlZCBmcm9tXG4gICAgICAgICAgLy8gXCJvdXIgZWRpdG9yIGluc3RhbmNlXCIsIGFuZCBpZiBub3QsIHdlIGp1c3QgcmV0dXJuIG5vdGhpbmcuIGlmIHllcyxcbiAgICAgICAgICAvLyB3ZSBjYWxsIHRoZSBjb21wbGV0aW9uLXByb3ZpZGVyLlxuICAgICAgICAgIGNvbnN0IGZpbHRlcmluZ0NvbXBsZXRpb25Qcm92aWRlcjogbW9uYWNvVHlwZXMubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtUHJvdmlkZXIgPSB7XG4gICAgICAgICAgICAuLi5jb21wbGV0aW9uUHJvdmlkZXIsXG4gICAgICAgICAgICBwcm92aWRlQ29tcGxldGlvbkl0ZW1zOiAobW9kZWwsIHBvc2l0aW9uLCBjb250ZXh0LCB0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAvLyBpZiB0aGUgbW9kZWwtaWQgZG9lcyBub3QgbWF0Y2gsIHRoZW4gdGhpcyBjYWxsIGlzIGZyb20gYSBkaWZmZXJlbnQgZWRpdG9yLWluc3RhbmNlLFxuICAgICAgICAgICAgICAvLyBub3QgXCJvdXIgaW5zdGFuY2VcIiwgc28gcmV0dXJuIG5vdGhpbmdcbiAgICAgICAgICAgICAgaWYgKGVkaXRvci5nZXRNb2RlbCgpPy5pZCAhPT0gbW9kZWwuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdWdnZXN0aW9uczogW10gfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gY29tcGxldGlvblByb3ZpZGVyLnByb3ZpZGVDb21wbGV0aW9uSXRlbXMobW9kZWwsIHBvc2l0aW9uLCBjb250ZXh0LCB0b2tlbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCB7IGRpc3Bvc2UgfSA9IG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyKFxuICAgICAgICAgICAgUFJPTVFMX0xBTkdfSUQsXG4gICAgICAgICAgICBmaWx0ZXJpbmdDb21wbGV0aW9uUHJvdmlkZXJcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgYXV0b2NvbXBsZXRlRGlzcG9zZUZ1bi5jdXJyZW50ID0gZGlzcG9zZTtcbiAgICAgICAgICAvLyB0aGlzIGNvZGUgbWFrZXMgdGhlIGVkaXRvciByZXNpemUgaXRzZWxmIHNvIHRoYXQgdGhlIGNvbnRlbnQgZml0c1xuICAgICAgICAgIC8vIChpdCB3aWxsIGdyb3cgdGFsbGVyIHdoZW4gbmVjZXNzYXJ5KVxuICAgICAgICAgIC8vIEZJWE1FOiBtYXliZSBtb3ZlIHRoaXMgZnVuY3Rpb25hbGl0eSBpbnRvIENvZGVFZGl0b3IsIGxpa2U6XG4gICAgICAgICAgLy8gPENvZGVFZGl0b3IgcmVzaXppbmdNb2RlPVwic2luZ2xlLWxpbmVcIi8+XG4gICAgICAgICAgY29uc3QgdXBkYXRlRWxlbWVudEhlaWdodCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGNvbnRhaW5lclJlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lckRpdiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBwaXhlbEhlaWdodCA9IGVkaXRvci5nZXRDb250ZW50SGVpZ2h0KCk7XG4gICAgICAgICAgICAgIGNvbnRhaW5lckRpdi5zdHlsZS5oZWlnaHQgPSBgJHtwaXhlbEhlaWdodCArIEVESVRPUl9IRUlHSFRfT0ZGU0VUfXB4YDtcbiAgICAgICAgICAgICAgY29udGFpbmVyRGl2LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgICBjb25zdCBwaXhlbFdpZHRoID0gY29udGFpbmVyRGl2LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICBlZGl0b3IubGF5b3V0KHsgd2lkdGg6IHBpeGVsV2lkdGgsIGhlaWdodDogcGl4ZWxIZWlnaHQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGVkaXRvci5vbkRpZENvbnRlbnRTaXplQ2hhbmdlKHVwZGF0ZUVsZW1lbnRIZWlnaHQpO1xuICAgICAgICAgIHVwZGF0ZUVsZW1lbnRIZWlnaHQoKTtcblxuICAgICAgICAgIC8vIGhhbmRsZTogc2hpZnQgKyBlbnRlclxuICAgICAgICAgIC8vIEZJWE1FOiBtYXliZSBtb3ZlIHRoaXMgZnVuY3Rpb25hbGl0eSBpbnRvIENvZGVFZGl0b3I/XG4gICAgICAgICAgZWRpdG9yLmFkZENvbW1hbmQobW9uYWNvLktleU1vZC5TaGlmdCB8IG1vbmFjby5LZXlDb2RlLkVudGVyLCAoKSA9PiB7XG4gICAgICAgICAgICBvblJ1blF1ZXJ5UmVmLmN1cnJlbnQoZWRpdG9yLmdldFZhbHVlKCkpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLyogU29tZXRoaW5nIGluIHRoaXMgY29uZmlndXJhdGlvbiBvZiBtb25hY28gZG9lc24ndCBidWJibGUgdXAgW21vZF0rSywgd2hpY2ggdGhlIFxuICAgICAgICAgIGNvbW1hbmQgcGFsZXR0ZSB1c2VzLiBQYXNzIHRoZSBldmVudCBvdXQgb2YgbW9uYWNvIG1hbnVhbGx5XG4gICAgICAgICAgKi9cbiAgICAgICAgICBlZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5TW9kLkN0cmxDbWQgfCBtb25hY28uS2V5Q29kZS5LZXlLLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnbG9iYWwuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicsIHsga2V5OiAnaycsIG1ldGFLZXk6IHRydWUgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIHdlIHdpbGwgbGF6eS1sb2FkIHRoaXMgbW9kdWxlIHVzaW5nIFJlYWN0LmxhenksXG4vLyBhbmQgdGhhdCBvbmx5IHN1cHBvcnRzIGRlZmF1bHQtZXhwb3J0cyxcbi8vIHNvIHdlIGhhdmUgdG8gZGVmYXVsdC1leHBvcnQgdGhpcywgZXZlbiBpZlxuLy8gaXQgaXMgYWdhaW5zdCB0aGUgc3R5bGUtZ3VpZGVsaW5lcy5cblxuZXhwb3J0IGRlZmF1bHQgTW9uYWNvUXVlcnlGaWVsZDtcbiIsImltcG9ydCB7IG1vbmFjb1R5cGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG4vLyB0aGlzIHRoaW5nIGhlcmUgaXMgYSB3b3JrYXJvdW5kIGluIGEgd2F5LlxuLy8gd2hhdCB3ZSB3YW50IHRvIGFjaGlldmUsIGlzIHRoYXQgd2hlbiB0aGUgYXV0b2NvbXBsZXRlLXdpbmRvd1xuLy8gb3BlbnMsIHRoZSBcInNlY29uZCwgZXh0cmEgcG9wdXBcIiB3aXRoIHRoZSBleHRyYSBoZWxwLFxuLy8gYWxzbyBvcGVucyBhdXRvbWF0aWNhbGx5LlxuLy8gYnV0IHRoZXJlIGlzIG5vIEFQSSB0byBhY2hpZXZlIGl0LlxuLy8gdGhlIHdheSB0byBkbyBpdCBpcyB0byBpbXBsZW1lbnQgdGhlIGBzdG9yYWdlU2VydmljZWBcbi8vIGludGVyZmFjZSwgYW5kIHByb3ZpZGUgb3VyIGN1c3RvbSBpbXBsZW1lbnRhdGlvbixcbi8vIHdoaWNoIHdpbGwgZGVmYXVsdCB0byBgdHJ1ZWAgZm9yIHRoZSBjb3JyZWN0IHN0cmluZy1rZXkuXG4vLyB1bmZvcnR1bmF0ZWx5LCB3aGlsZSB0aGUgdHlwZXNjcmlwdC1pbnRlcmZhY2UgZXhpc3RzLFxuLy8gaXQgaXMgbm90IGV4cG9ydGVkIGZyb20gbW9uYWNvLWVkaXRvcixcbi8vIHNvIHdlIGNhbm5vdCByZWx5IG9uIHR5cGVzY3JpcHQgdG8gbWFrZSBzdXJlXG4vLyB3ZSBkbyBpdCByaWdodC4gYWxsIHdlIGNhbiBkbyBpcyB0byBtYW51YWxseVxuLy8gbG9va3VwIHRoZSBpbnRlcmZhY2UsIGFuZCBtYWtlIHN1cmUgd2UgY29kZSBvdXIgY29kZSByaWdodC5cbi8vIG91ciBjb2RlIGlzIGEgXCJiZXN0IGVmZm9ydFwiIGFwcHJvYWNoLFxuLy8gaSBhbSBub3QgMTAwJSBob3cgdGhlIGBzY29wZWAgYW5kIGB0YXJnZXRgIHRoaW5ncyB3b3JrLFxuLy8gYnV0IHNvIGZhciBpdCBzZWVtcyB0byB3b3JrIG9rLlxuLy8gaSB3b3VsZCB1c2UgYW4gYW5vdGhlciBhcHByb2FjaCwgaWYgdGhlcmUgd2FzIG9uZSBhdmFpbGFibGUuXG5cbmZ1bmN0aW9uIG1ha2VTdG9yYWdlU2VydmljZSgpIHtcbiAgLy8gd2UgbmVlZCB0byByZXR1cm4gYW4gb2JqZWN0IHRoYXQgZnVsZmlsbHMgdGhpcyBpbnRlcmZhY2U6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvdnNjb2RlL2Jsb2IvZmYxZTE2ZWViYjkzYWY3OWZkNmQ3YWYxMzU2YzQwMDNhMTIwYzU2My9zcmMvdnMvcGxhdGZvcm0vc3RvcmFnZS9jb21tb24vc3RvcmFnZS50cyNMMzdcbiAgLy8gdW5mb3J0dW5hdGVseSBpdCBpcyBub3QgZXhwb3J0IGZyb20gbW9uYWNvLWVkaXRvclxuXG4gIGNvbnN0IHN0cmluZ3MgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG4gIC8vIHdlIHdhbnQgdGhpcyB0byBiZSB0cnVlIGJ5IGRlZmF1bHRcbiAgc3RyaW5ncy5zZXQoJ2V4cGFuZFN1Z2dlc3Rpb25Eb2NzJywgdHJ1ZS50b1N0cmluZygpKTtcblxuICByZXR1cm4ge1xuICAgIC8vIHdlIGRvIG5vdCBpbXBsZW1lbnQgdGhlIG9uKiBoYW5kbGVyc1xuICAgIG9uRGlkQ2hhbmdlVmFsdWU6IChkYXRhOiB1bmtub3duKTogdm9pZCA9PiB1bmRlZmluZWQsXG4gICAgb25EaWRDaGFuZ2VUYXJnZXQ6IChkYXRhOiB1bmtub3duKTogdm9pZCA9PiB1bmRlZmluZWQsXG4gICAgb25XaWxsU2F2ZVN0YXRlOiAoZGF0YTogdW5rbm93bik6IHZvaWQgPT4gdW5kZWZpbmVkLFxuXG4gICAgZ2V0OiAoa2V5OiBzdHJpbmcsIHNjb3BlOiB1bmtub3duLCBmYWxsYmFja1ZhbHVlPzogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcbiAgICAgIHJldHVybiBzdHJpbmdzLmdldChrZXkpID8/IGZhbGxiYWNrVmFsdWU7XG4gICAgfSxcblxuICAgIGdldEJvb2xlYW46IChrZXk6IHN0cmluZywgc2NvcGU6IHVua25vd24sIGZhbGxiYWNrVmFsdWU/OiBib29sZWFuKTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBzdHJpbmdzLmdldChrZXkpO1xuICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHRoZSBpbnRlcmZhY2UtZG9jcyBzYXkgdGhlIHZhbHVlIHdpbGwgYmUgY29udmVydGVkXG4gICAgICAgIC8vIHRvIGEgYm9vbGVhbiBidXQgZG8gbm90IHNwZWNpZnkgaG93LCBzbyB3ZSBpbXByb3Zpc2VcbiAgICAgICAgcmV0dXJuIHZhbCA9PT0gJ3RydWUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrVmFsdWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGdldE51bWJlcjogKGtleTogc3RyaW5nLCBzY29wZTogdW5rbm93biwgZmFsbGJhY2tWYWx1ZT86IG51bWJlcik6IG51bWJlciB8IHVuZGVmaW5lZCA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBzdHJpbmdzLmdldChrZXkpO1xuICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh2YWwsIDEwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxsYmFja1ZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9yZTogKFxuICAgICAga2V5OiBzdHJpbmcsXG4gICAgICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGwsXG4gICAgICBzY29wZTogdW5rbm93bixcbiAgICAgIHRhcmdldDogdW5rbm93blxuICAgICk6IHZvaWQgPT4ge1xuICAgICAgLy8gdGhlIGludGVyZmFjZS1kb2NzIHNheSBpZiB0aGUgdmFsdWUgaXMgbnVsbGlzaCwgaXQgc2hvdWxkIGFjdCBhcyBkZWxldGVcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0cmluZ3MuZGVsZXRlKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHJpbmdzLnNldChrZXksIHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW1vdmU6IChrZXk6IHN0cmluZywgc2NvcGU6IHVua25vd24pOiB2b2lkID0+IHtcbiAgICAgIHN0cmluZ3MuZGVsZXRlKGtleSk7XG4gICAgfSxcblxuICAgIGtleXM6IChzY29wZTogdW5rbm93biwgdGFyZ2V0OiB1bmtub3duKTogc3RyaW5nW10gPT4ge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oc3RyaW5ncy5rZXlzKCkpO1xuICAgIH0sXG5cbiAgICBsb2dTdG9yYWdlOiAoKTogdm9pZCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnbG9nU3RvcmFnZTogbm90IGltcGxlbWVudGVkJyk7XG4gICAgfSxcblxuICAgIG1pZ3JhdGU6ICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgIC8vIHdlIGRvIG5vdCBpbXBsZW1lbnQgdGhpc1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIH0sXG5cbiAgICBpc05ldzogKHNjb3BlOiB1bmtub3duKTogYm9vbGVhbiA9PiB7XG4gICAgICAvLyB3ZSBjcmVhdGUgYSBuZXcgc3RvcmFnZSBmb3IgZXZlcnkgc2Vzc2lvbiwgd2UgZG8gbm90IHBlcnNpc3QgaXQsXG4gICAgICAvLyBzbyB3ZSByZXR1cm4gYHRydWVgLlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGZsdXNoOiAocmVhc29uPzogdW5rbm93bik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgLy8gd2UgZG8gbm90IGltcGxlbWVudCB0aGlzXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgfTtcbn1cblxubGV0IG92ZXJyaWRlU2VydmljZXM6IG1vbmFjb1R5cGVzLmVkaXRvci5JRWRpdG9yT3ZlcnJpZGVTZXJ2aWNlcyB8IG51bGwgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3ZlcnJpZGVTZXJ2aWNlcygpOiBtb25hY29UeXBlcy5lZGl0b3IuSUVkaXRvck92ZXJyaWRlU2VydmljZXMge1xuICAvLyBvbmx5IGhhdmUgb25lIGluc3RhbmNlIG9mIHRoaXMgZm9yIGV2ZXJ5IHF1ZXJ5IGVkaXRvclxuICBpZiAob3ZlcnJpZGVTZXJ2aWNlcyA9PT0gbnVsbCkge1xuICAgIG92ZXJyaWRlU2VydmljZXMgPSB7XG4gICAgICBzdG9yYWdlU2VydmljZTogbWFrZVN0b3JhZ2VTZXJ2aWNlKCksXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBvdmVycmlkZVNlcnZpY2VzO1xufVxuIiwiaW1wb3J0IHsgZXNjYXBlTGFiZWxWYWx1ZUluRXhhY3RTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL2xhbmd1YWdlX3V0aWxzJztcbmltcG9ydCB7IEZVTkNUSU9OUyB9IGZyb20gJy4uLy4uLy4uL3Byb21xbCc7XG5cbmltcG9ydCB0eXBlIHsgU2l0dWF0aW9uLCBMYWJlbCB9IGZyb20gJy4vc2l0dWF0aW9uJztcbmltcG9ydCB7IE5ldmVyQ2FzZUVycm9yIH0gZnJvbSAnLi91dGlsJztcbi8vIEZJWE1FOiB3ZSBzaG91bGQgbm90IGxvYWQgdGhpcyBmcm9tIHRoZSBcIm91dHNpZGVcIiwgYnV0IHdlIGNhbm5vdCBkbyB0aGF0IHdoaWxlIHdlIGhhdmUgdGhlIFwib2xkXCIgcXVlcnktZmllbGQgdG9vXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRpb25UeXBlID0gJ0hJU1RPUlknIHwgJ0ZVTkNUSU9OJyB8ICdNRVRSSUNfTkFNRScgfCAnRFVSQVRJT04nIHwgJ0xBQkVMX05BTUUnIHwgJ0xBQkVMX1ZBTFVFJztcblxudHlwZSBDb21wbGV0aW9uID0ge1xuICB0eXBlOiBDb21wbGV0aW9uVHlwZTtcbiAgbGFiZWw6IHN0cmluZztcbiAgaW5zZXJ0VGV4dDogc3RyaW5nO1xuICBkZXRhaWw/OiBzdHJpbmc7XG4gIGRvY3VtZW50YXRpb24/OiBzdHJpbmc7XG4gIHRyaWdnZXJPbkluc2VydD86IGJvb2xlYW47XG59O1xuXG50eXBlIE1ldHJpYyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBoZWxwOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIERhdGFQcm92aWRlciA9IHtcbiAgZ2V0SGlzdG9yeTogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT47XG4gIGdldEFsbE1ldHJpY05hbWVzOiAoKSA9PiBQcm9taXNlPE1ldHJpY1tdPjtcbiAgZ2V0QWxsTGFiZWxOYW1lczogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT47XG4gIGdldExhYmVsVmFsdWVzOiAobGFiZWxOYW1lOiBzdHJpbmcpID0+IFByb21pc2U8c3RyaW5nW10+O1xuICBnZXRTZXJpZXM6IChzZWxlY3Rvcjogc3RyaW5nKSA9PiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPj47XG59O1xuXG4vLyB3ZSBvcmRlciBpdGVtcyBsaWtlOiBoaXN0b3J5LCBmdW5jdGlvbnMsIG1ldHJpY3NcblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsTWV0cmljTmFtZXNDb21wbGV0aW9ucyhkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlcik6IFByb21pc2U8Q29tcGxldGlvbltdPiB7XG4gIGNvbnN0IG1ldHJpY3MgPSBhd2FpdCBkYXRhUHJvdmlkZXIuZ2V0QWxsTWV0cmljTmFtZXMoKTtcbiAgcmV0dXJuIG1ldHJpY3MubWFwKChtZXRyaWMpID0+ICh7XG4gICAgdHlwZTogJ01FVFJJQ19OQU1FJyxcbiAgICBsYWJlbDogbWV0cmljLm5hbWUsXG4gICAgaW5zZXJ0VGV4dDogbWV0cmljLm5hbWUsXG4gICAgZGV0YWlsOiBgJHttZXRyaWMubmFtZX0gOiAke21ldHJpYy50eXBlfWAsXG4gICAgZG9jdW1lbnRhdGlvbjogbWV0cmljLmhlbHAsXG4gIH0pKTtcbn1cblxuY29uc3QgRlVOQ1RJT05fQ09NUExFVElPTlM6IENvbXBsZXRpb25bXSA9IEZVTkNUSU9OUy5tYXAoKGYpID0+ICh7XG4gIHR5cGU6ICdGVU5DVElPTicsXG4gIGxhYmVsOiBmLmxhYmVsLFxuICBpbnNlcnRUZXh0OiBmLmluc2VydFRleHQgPz8gJycsIC8vIGkgZG9uJ3Qga25vdyB3aGF0IHRvIGRvIHdoZW4gdGhpcyBpcyBudWxsaXNoLiBpdCBzaG91bGQgbm90IGJlLlxuICBkZXRhaWw6IGYuZGV0YWlsLFxuICBkb2N1bWVudGF0aW9uOiBmLmRvY3VtZW50YXRpb24sXG59KSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbEZ1bmN0aW9uc0FuZE1ldHJpY05hbWVzQ29tcGxldGlvbnMoZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIpOiBQcm9taXNlPENvbXBsZXRpb25bXT4ge1xuICBjb25zdCBtZXRyaWNOYW1lcyA9IGF3YWl0IGdldEFsbE1ldHJpY05hbWVzQ29tcGxldGlvbnMoZGF0YVByb3ZpZGVyKTtcbiAgcmV0dXJuIFsuLi5GVU5DVElPTl9DT01QTEVUSU9OUywgLi4ubWV0cmljTmFtZXNdO1xufVxuXG5jb25zdCBEVVJBVElPTl9DT01QTEVUSU9OUzogQ29tcGxldGlvbltdID0gW1xuICAnJF9faW50ZXJ2YWwnLFxuICAnJF9fcmFuZ2UnLFxuICAnJF9fcmF0ZV9pbnRlcnZhbCcsXG4gICcxbScsXG4gICc1bScsXG4gICcxMG0nLFxuICAnMzBtJyxcbiAgJzFoJyxcbiAgJzFkJyxcbl0ubWFwKCh0ZXh0KSA9PiAoe1xuICB0eXBlOiAnRFVSQVRJT04nLFxuICBsYWJlbDogdGV4dCxcbiAgaW5zZXJ0VGV4dDogdGV4dCxcbn0pKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSGlzdG9yeUNvbXBsZXRpb25zKGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyKTogUHJvbWlzZTxDb21wbGV0aW9uW10+IHtcbiAgLy8gZnVuY3Rpb24gZ2V0QWxsSGlzdG9yeUNvbXBsZXRpb25zKHF1ZXJ5SGlzdG9yeTogUHJvbUhpc3RvcnlJdGVtW10pOiBDb21wbGV0aW9uW10ge1xuICAvLyBOT1RFOiB0aGUgdHlwZXNjcmlwdCB0eXBlcyBhcmUgd3JvbmcuIGhpc3RvcnlJdGVtLnF1ZXJ5LmV4cHIgY2FuIGJlIHVuZGVmaW5lZFxuICBjb25zdCBhbGxIaXN0b3J5ID0gYXdhaXQgZGF0YVByb3ZpZGVyLmdldEhpc3RvcnkoKTtcbiAgLy8gRklYTUU6IGZpbmQgYSBiZXR0ZXIgaGlzdG9yeS1saW1pdFxuICByZXR1cm4gYWxsSGlzdG9yeS5zbGljZSgwLCAxMCkubWFwKChleHByKSA9PiAoe1xuICAgIHR5cGU6ICdISVNUT1JZJyxcbiAgICBsYWJlbDogZXhwcixcbiAgICBpbnNlcnRUZXh0OiBleHByLFxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VTZWxlY3RvcihtZXRyaWNOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsIGxhYmVsczogTGFiZWxbXSk6IHN0cmluZyB7XG4gIGNvbnN0IGFsbExhYmVscyA9IFsuLi5sYWJlbHNdO1xuXG4gIC8vIHdlIHRyYW5zZm9ybSB0aGUgbWV0cmljTmFtZSB0byBhIGxhYmVsLCBpZiBpdCBleGlzdHNcbiAgaWYgKG1ldHJpY05hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGFsbExhYmVscy5wdXNoKHsgbmFtZTogJ19fbmFtZV9fJywgdmFsdWU6IG1ldHJpY05hbWUsIG9wOiAnPScgfSk7XG4gIH1cblxuICBjb25zdCBhbGxMYWJlbFRleHRzID0gYWxsTGFiZWxzLm1hcChcbiAgICAobGFiZWwpID0+IGAke2xhYmVsLm5hbWV9JHtsYWJlbC5vcH1cIiR7ZXNjYXBlTGFiZWxWYWx1ZUluRXhhY3RTZWxlY3RvcihsYWJlbC52YWx1ZSl9XCJgXG4gICk7XG5cbiAgcmV0dXJuIGB7JHthbGxMYWJlbFRleHRzLmpvaW4oJywnKX19YDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TGFiZWxOYW1lcyhcbiAgbWV0cmljOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIG90aGVyTGFiZWxzOiBMYWJlbFtdLFxuICBkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlclxuKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBpZiAobWV0cmljID09PSB1bmRlZmluZWQgJiYgb3RoZXJMYWJlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gZmlsdGVyaW5nLCB3ZSBoYXZlIHRvIHVzZSBhIHNwZWNpYWwgZW5kcG9pbnRcbiAgICByZXR1cm4gZGF0YVByb3ZpZGVyLmdldEFsbExhYmVsTmFtZXMoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IG1ha2VTZWxlY3RvcihtZXRyaWMsIG90aGVyTGFiZWxzKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZGF0YVByb3ZpZGVyLmdldFNlcmllcyhzZWxlY3Rvcik7XG4gICAgY29uc3QgcG9zc2libGVMYWJlbE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YSk7IC8vIGFsbCBuYW1lcyBmcm9tIHByb21ldGhldXNcbiAgICBjb25zdCB1c2VkTGFiZWxOYW1lcyA9IG5ldyBTZXQob3RoZXJMYWJlbHMubWFwKChsKSA9PiBsLm5hbWUpKTsgLy8gbmFtZXMgdXNlZCBpbiB0aGUgcXVlcnlcbiAgICByZXR1cm4gcG9zc2libGVMYWJlbE5hbWVzLmZpbHRlcigobCkgPT4gIXVzZWRMYWJlbE5hbWVzLmhhcyhsKSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TGFiZWxOYW1lc0ZvckNvbXBsZXRpb25zKFxuICBtZXRyaWM6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgc3VmZml4OiBzdHJpbmcsXG4gIHRyaWdnZXJPbkluc2VydDogYm9vbGVhbixcbiAgb3RoZXJMYWJlbHM6IExhYmVsW10sXG4gIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyXG4pOiBQcm9taXNlPENvbXBsZXRpb25bXT4ge1xuICBjb25zdCBsYWJlbE5hbWVzID0gYXdhaXQgZ2V0TGFiZWxOYW1lcyhtZXRyaWMsIG90aGVyTGFiZWxzLCBkYXRhUHJvdmlkZXIpO1xuICByZXR1cm4gbGFiZWxOYW1lcy5tYXAoKHRleHQpID0+ICh7XG4gICAgdHlwZTogJ0xBQkVMX05BTUUnLFxuICAgIGxhYmVsOiB0ZXh0LFxuICAgIGluc2VydFRleHQ6IGAke3RleHR9JHtzdWZmaXh9YCxcbiAgICB0cmlnZ2VyT25JbnNlcnQsXG4gIH0pKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TGFiZWxOYW1lc0ZvclNlbGVjdG9yQ29tcGxldGlvbnMoXG4gIG1ldHJpYzogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBvdGhlckxhYmVsczogTGFiZWxbXSxcbiAgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXJcbik6IFByb21pc2U8Q29tcGxldGlvbltdPiB7XG4gIHJldHVybiBnZXRMYWJlbE5hbWVzRm9yQ29tcGxldGlvbnMobWV0cmljLCAnPScsIHRydWUsIG90aGVyTGFiZWxzLCBkYXRhUHJvdmlkZXIpO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0TGFiZWxOYW1lc0ZvckJ5Q29tcGxldGlvbnMoXG4gIG1ldHJpYzogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBvdGhlckxhYmVsczogTGFiZWxbXSxcbiAgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXJcbik6IFByb21pc2U8Q29tcGxldGlvbltdPiB7XG4gIHJldHVybiBnZXRMYWJlbE5hbWVzRm9yQ29tcGxldGlvbnMobWV0cmljLCAnJywgZmFsc2UsIG90aGVyTGFiZWxzLCBkYXRhUHJvdmlkZXIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRMYWJlbFZhbHVlcyhcbiAgbWV0cmljOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIGxhYmVsTmFtZTogc3RyaW5nLFxuICBvdGhlckxhYmVsczogTGFiZWxbXSxcbiAgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXJcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgaWYgKG1ldHJpYyA9PT0gdW5kZWZpbmVkICYmIG90aGVyTGFiZWxzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIGlmIHRoZXJlIGlzIG5vIGZpbHRlcmluZywgd2UgaGF2ZSB0byB1c2UgYSBzcGVjaWFsIGVuZHBvaW50XG4gICAgcmV0dXJuIGRhdGFQcm92aWRlci5nZXRMYWJlbFZhbHVlcyhsYWJlbE5hbWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gbWFrZVNlbGVjdG9yKG1ldHJpYywgb3RoZXJMYWJlbHMpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYXRhUHJvdmlkZXIuZ2V0U2VyaWVzKHNlbGVjdG9yKTtcbiAgICByZXR1cm4gZGF0YVtsYWJlbE5hbWVdID8/IFtdO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExhYmVsVmFsdWVzRm9yTWV0cmljQ29tcGxldGlvbnMoXG4gIG1ldHJpYzogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBsYWJlbE5hbWU6IHN0cmluZyxcbiAgYmV0d2VlblF1b3RlczogYm9vbGVhbixcbiAgb3RoZXJMYWJlbHM6IExhYmVsW10sXG4gIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyXG4pOiBQcm9taXNlPENvbXBsZXRpb25bXT4ge1xuICBjb25zdCB2YWx1ZXMgPSBhd2FpdCBnZXRMYWJlbFZhbHVlcyhtZXRyaWMsIGxhYmVsTmFtZSwgb3RoZXJMYWJlbHMsIGRhdGFQcm92aWRlcik7XG4gIHJldHVybiB2YWx1ZXMubWFwKCh0ZXh0KSA9PiAoe1xuICAgIHR5cGU6ICdMQUJFTF9WQUxVRScsXG4gICAgbGFiZWw6IHRleHQsXG4gICAgaW5zZXJ0VGV4dDogYmV0d2VlblF1b3RlcyA/IHRleHQgOiBgXCIke3RleHR9XCJgLCAvLyBGSVhNRTogZXNjYXBpbmcgc3RyYW5nZSBjaGFyYWN0ZXJzP1xuICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb21wbGV0aW9ucyhzaXR1YXRpb246IFNpdHVhdGlvbiwgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIpOiBQcm9taXNlPENvbXBsZXRpb25bXT4ge1xuICBzd2l0Y2ggKHNpdHVhdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnSU5fRFVSQVRJT04nOlxuICAgICAgcmV0dXJuIERVUkFUSU9OX0NPTVBMRVRJT05TO1xuICAgIGNhc2UgJ0lOX0ZVTkNUSU9OJzpcbiAgICAgIHJldHVybiBnZXRBbGxGdW5jdGlvbnNBbmRNZXRyaWNOYW1lc0NvbXBsZXRpb25zKGRhdGFQcm92aWRlcik7XG4gICAgY2FzZSAnQVRfUk9PVCc6IHtcbiAgICAgIHJldHVybiBnZXRBbGxGdW5jdGlvbnNBbmRNZXRyaWNOYW1lc0NvbXBsZXRpb25zKGRhdGFQcm92aWRlcik7XG4gICAgfVxuICAgIGNhc2UgJ0VNUFRZJzoge1xuICAgICAgY29uc3QgbWV0cmljTmFtZXMgPSBhd2FpdCBnZXRBbGxNZXRyaWNOYW1lc0NvbXBsZXRpb25zKGRhdGFQcm92aWRlcik7XG4gICAgICBjb25zdCBoaXN0b3J5Q29tcGxldGlvbnMgPSBhd2FpdCBnZXRBbGxIaXN0b3J5Q29tcGxldGlvbnMoZGF0YVByb3ZpZGVyKTtcbiAgICAgIHJldHVybiBbLi4uaGlzdG9yeUNvbXBsZXRpb25zLCAuLi5GVU5DVElPTl9DT01QTEVUSU9OUywgLi4ubWV0cmljTmFtZXNdO1xuICAgIH1cbiAgICBjYXNlICdJTl9MQUJFTF9TRUxFQ1RPUl9OT19MQUJFTF9OQU1FJzpcbiAgICAgIHJldHVybiBnZXRMYWJlbE5hbWVzRm9yU2VsZWN0b3JDb21wbGV0aW9ucyhzaXR1YXRpb24ubWV0cmljTmFtZSwgc2l0dWF0aW9uLm90aGVyTGFiZWxzLCBkYXRhUHJvdmlkZXIpO1xuICAgIGNhc2UgJ0lOX0dST1VQSU5HJzpcbiAgICAgIHJldHVybiBnZXRMYWJlbE5hbWVzRm9yQnlDb21wbGV0aW9ucyhzaXR1YXRpb24ubWV0cmljTmFtZSwgc2l0dWF0aW9uLm90aGVyTGFiZWxzLCBkYXRhUHJvdmlkZXIpO1xuICAgIGNhc2UgJ0lOX0xBQkVMX1NFTEVDVE9SX1dJVEhfTEFCRUxfTkFNRSc6XG4gICAgICByZXR1cm4gZ2V0TGFiZWxWYWx1ZXNGb3JNZXRyaWNDb21wbGV0aW9ucyhcbiAgICAgICAgc2l0dWF0aW9uLm1ldHJpY05hbWUsXG4gICAgICAgIHNpdHVhdGlvbi5sYWJlbE5hbWUsXG4gICAgICAgIHNpdHVhdGlvbi5iZXR3ZWVuUXVvdGVzLFxuICAgICAgICBzaXR1YXRpb24ub3RoZXJMYWJlbHMsXG4gICAgICAgIGRhdGFQcm92aWRlclxuICAgICAgKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IE5ldmVyQ2FzZUVycm9yKHNpdHVhdGlvbik7XG4gIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgTW9uYWNvLCBtb25hY29UeXBlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgZ2V0Q29tcGxldGlvbnMsIERhdGFQcm92aWRlciwgQ29tcGxldGlvblR5cGUgfSBmcm9tICcuL2NvbXBsZXRpb25zJztcbmltcG9ydCB7IGdldFNpdHVhdGlvbiB9IGZyb20gJy4vc2l0dWF0aW9uJztcbmltcG9ydCB7IE5ldmVyQ2FzZUVycm9yIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN1Z2dlc3RPcHRpb25zKCk6IG1vbmFjb1R5cGVzLmVkaXRvci5JU3VnZ2VzdE9wdGlvbnMge1xuICByZXR1cm4ge1xuICAgIC8vIG1vbmFjby1lZGl0b3Igc29tZXRpbWVzIHByb3ZpZGVzIHN1Z2dlc3Rpb25zIGF1dG9tYXRpY2FsbHksIGkgYW0gbm90XG4gICAgLy8gc3VyZSBiYXNlZCBvbiB3aGF0LCBzZWVtcyB0byBiZSBieSBhbmFseXppbmcgdGhlIHdvcmRzIGFscmVhZHlcbiAgICAvLyB3cml0dGVuLlxuICAgIC8vIHRvIHRyeSBpdCBvdXQ6XG4gICAgLy8gLSBlbnRlciBgZ29fZ29yb3V0aW5lc3tqb2J+YFxuICAgIC8vIC0gaGF2ZSB0aGUgY3Vyc29yIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZ1xuICAgIC8vIC0gcHJlc3MgY3RybC1lbnRlclxuICAgIC8vIC0geW91IHdpbGwgZ2V0IHR3byBzdWdnZXN0aW9uc1xuICAgIC8vIHRob3NlIHdlcmUgbm90IHByb3ZpZGVkIGJ5IGdyYWZhbmEsIHRoZXkgYXJlIG9mZmVyZWQgYXV0b21hdGljYWxseS5cbiAgICAvLyBpIHdhbnQgdG8gcmVtb3ZlIHRob3NlLiB0aGUgb25seSB3YXkgaSBmb3VuZCBpczpcbiAgICAvLyAtIGV2ZXJ5IHN1Z2dlc3Rpb24taXRlbSBoYXMgYSBga2luZGAgYXR0cmlidXRlLFxuICAgIC8vICAgdGhhdCBjb250cm9scyB0aGUgaWNvbiB0byB0aGUgbGVmdCBvZiB0aGUgc3VnZ2VzdGlvbi5cbiAgICAvLyAtIGl0ZW1zIGF1dG8tZ2VuZXJhdGVkIGJ5IG1vbmFjbyBoYXZlIGBraW5kYCBzZXQgdG8gYHRleHRgLlxuICAgIC8vIC0gd2UgbWFrZSBzdXJlIGdyYWZhbmEtcHJvdmlkZWQgc3VnZ2VzdGlvbnMgZG8gbm90IGhhdmUgYGtpbmRgIHNldCB0byBgdGV4dGAuXG4gICAgLy8gLSBhbmQgdGhlbiB3ZSB0ZWxsIG1vbmFjbyBub3QgdG8gc2hvdyBzdWdnZXN0aW9ucyBvZiBraW5kIGB0ZXh0YFxuICAgIHNob3dXb3JkczogZmFsc2UsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldE1vbmFjb0NvbXBsZXRpb25JdGVtS2luZCh0eXBlOiBDb21wbGV0aW9uVHlwZSwgbW9uYWNvOiBNb25hY28pOiBtb25hY29UeXBlcy5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnRFVSQVRJT04nOlxuICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlVuaXQ7XG4gICAgY2FzZSAnRlVOQ1RJT04nOlxuICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlZhcmlhYmxlO1xuICAgIGNhc2UgJ0hJU1RPUlknOlxuICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlNuaXBwZXQ7XG4gICAgY2FzZSAnTEFCRUxfTkFNRSc6XG4gICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuRW51bTtcbiAgICBjYXNlICdMQUJFTF9WQUxVRSc6XG4gICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuRW51bU1lbWJlcjtcbiAgICBjYXNlICdNRVRSSUNfTkFNRSc6XG4gICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuQ29uc3RydWN0b3I7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBOZXZlckNhc2VFcnJvcih0eXBlKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBsZXRpb25Qcm92aWRlcihcbiAgbW9uYWNvOiBNb25hY28sXG4gIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyXG4pOiBtb25hY29UeXBlcy5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1Qcm92aWRlciB7XG4gIGNvbnN0IHByb3ZpZGVDb21wbGV0aW9uSXRlbXMgPSAoXG4gICAgbW9kZWw6IG1vbmFjb1R5cGVzLmVkaXRvci5JVGV4dE1vZGVsLFxuICAgIHBvc2l0aW9uOiBtb25hY29UeXBlcy5Qb3NpdGlvblxuICApOiBtb25hY29UeXBlcy5sYW5ndWFnZXMuUHJvdmlkZXJSZXN1bHQ8bW9uYWNvVHlwZXMubGFuZ3VhZ2VzLkNvbXBsZXRpb25MaXN0PiA9PiB7XG4gICAgY29uc3Qgd29yZCA9IG1vZGVsLmdldFdvcmRBdFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICBjb25zdCByYW5nZSA9XG4gICAgICB3b3JkICE9IG51bGxcbiAgICAgICAgPyBtb25hY28uUmFuZ2UubGlmdCh7XG4gICAgICAgICAgICBzdGFydExpbmVOdW1iZXI6IHBvc2l0aW9uLmxpbmVOdW1iZXIsXG4gICAgICAgICAgICBlbmRMaW5lTnVtYmVyOiBwb3NpdGlvbi5saW5lTnVtYmVyLFxuICAgICAgICAgICAgc3RhcnRDb2x1bW46IHdvcmQuc3RhcnRDb2x1bW4sXG4gICAgICAgICAgICBlbmRDb2x1bW46IHdvcmQuZW5kQ29sdW1uLFxuICAgICAgICAgIH0pXG4gICAgICAgIDogbW9uYWNvLlJhbmdlLmZyb21Qb3NpdGlvbnMocG9zaXRpb24pO1xuICAgIC8vIGRvY3VtZW50YXRpb24gc2F5cyBgcG9zaXRpb25gIHdpbGwgYmUgXCJhZGp1c3RlZFwiIGluIGBnZXRPZmZzZXRBdGBcbiAgICAvLyBpIGRvbid0IGtub3cgd2hhdCB0aGF0IG1lYW5zLCB0byBiZSBzdXJlIGkgY2xvbmUgaXRcbiAgICBjb25zdCBwb3NpdGlvbkNsb25lID0ge1xuICAgICAgY29sdW1uOiBwb3NpdGlvbi5jb2x1bW4sXG4gICAgICBsaW5lTnVtYmVyOiBwb3NpdGlvbi5saW5lTnVtYmVyLFxuICAgIH07XG4gICAgY29uc3Qgb2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb25DbG9uZSk7XG4gICAgY29uc3Qgc2l0dWF0aW9uID0gZ2V0U2l0dWF0aW9uKG1vZGVsLmdldFZhbHVlKCksIG9mZnNldCk7XG4gICAgY29uc3QgY29tcGxldGlvbnNQcm9taXNlID0gc2l0dWF0aW9uICE9IG51bGwgPyBnZXRDb21wbGV0aW9ucyhzaXR1YXRpb24sIGRhdGFQcm92aWRlcikgOiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgIHJldHVybiBjb21wbGV0aW9uc1Byb21pc2UudGhlbigoaXRlbXMpID0+IHtcbiAgICAgIC8vIG1vbmFjbyBieS1kZWZhdWx0IGFscGhhYmV0aWNhbGx5IG9yZGVycyB0aGUgaXRlbXMuXG4gICAgICAvLyB0byBzdG9wIGl0LCB3ZSB1c2UgYSBudW1iZXItYXMtc3RyaW5nIHNvcnRrZXksXG4gICAgICAvLyBzbyB0aGF0IG1vbmFjbyBrZWVwcyB0aGUgb3JkZXIgd2UgdXNlXG4gICAgICBjb25zdCBtYXhJbmRleERpZ2l0cyA9IGl0ZW1zLmxlbmd0aC50b1N0cmluZygpLmxlbmd0aDtcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zOiBtb25hY29UeXBlcy5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1bXSA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XG4gICAgICAgIGtpbmQ6IGdldE1vbmFjb0NvbXBsZXRpb25JdGVtS2luZChpdGVtLnR5cGUsIG1vbmFjbyksXG4gICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxuICAgICAgICBpbnNlcnRUZXh0OiBpdGVtLmluc2VydFRleHQsXG4gICAgICAgIGRldGFpbDogaXRlbS5kZXRhaWwsXG4gICAgICAgIGRvY3VtZW50YXRpb246IGl0ZW0uZG9jdW1lbnRhdGlvbixcbiAgICAgICAgc29ydFRleHQ6IGluZGV4LnRvU3RyaW5nKCkucGFkU3RhcnQobWF4SW5kZXhEaWdpdHMsICcwJyksIC8vIHRvIGZvcmNlIHRoZSBvcmRlciB3ZSBoYXZlXG4gICAgICAgIHJhbmdlLFxuICAgICAgICBjb21tYW5kOiBpdGVtLnRyaWdnZXJPbkluc2VydFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBpZDogJ2VkaXRvci5hY3Rpb24udHJpZ2dlclN1Z2dlc3QnLFxuICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4geyBzdWdnZXN0aW9ucyB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdHJpZ2dlckNoYXJhY3RlcnM6IFsneycsICcsJywgJ1snLCAnKCcsICc9JywgJ34nLCAnICcsICdcIiddLFxuICAgIHByb3ZpZGVDb21wbGV0aW9uSXRlbXMsXG4gIH07XG59XG4iLCJpbXBvcnQgdHlwZSB7IFRyZWUsIFN5bnRheE5vZGUgfSBmcm9tICdAbGV6ZXIvY29tbW9uJztcbmltcG9ydCB7IHBhcnNlciB9IGZyb20gJ2xlemVyLXByb21xbCc7XG5cbmltcG9ydCB7IE5ldmVyQ2FzZUVycm9yIH0gZnJvbSAnLi91dGlsJztcblxudHlwZSBEaXJlY3Rpb24gPSAncGFyZW50JyB8ICdmaXJzdENoaWxkJyB8ICdsYXN0Q2hpbGQnIHwgJ25leHRTaWJsaW5nJztcbnR5cGUgTm9kZVR5cGVOYW1lID1cbiAgfCAn4pqgJyAvLyB0aGlzIGlzIHVzZWQgYXMgZXJyb3ItbmFtZVxuICB8ICdBZ2dyZWdhdGVFeHByJ1xuICB8ICdBZ2dyZWdhdGVNb2RpZmllcidcbiAgfCAnRnVuY3Rpb25DYWxsQm9keSdcbiAgfCAnR3JvdXBpbmdMYWJlbHMnXG4gIHwgJ0lkZW50aWZpZXInXG4gIHwgJ0xhYmVsTWF0Y2hlcidcbiAgfCAnTGFiZWxNYXRjaGVycydcbiAgfCAnTGFiZWxNYXRjaExpc3QnXG4gIHwgJ0xhYmVsTmFtZSdcbiAgfCAnTWV0cmljSWRlbnRpZmllcidcbiAgfCAnUHJvbVFMJ1xuICB8ICdTdHJpbmdMaXRlcmFsJ1xuICB8ICdWZWN0b3JTZWxlY3RvcidcbiAgfCAnTWF0cml4U2VsZWN0b3InXG4gIHwgJ01hdGNoT3AnXG4gIHwgJ0VxbFNpbmdsZSdcbiAgfCAnTmVxJ1xuICB8ICdFcWxSZWdleCdcbiAgfCAnTmVxUmVnZXgnO1xuXG50eXBlIFBhdGggPSBBcnJheTxbRGlyZWN0aW9uLCBOb2RlVHlwZU5hbWVdPjtcblxuZnVuY3Rpb24gbW92ZShub2RlOiBTeW50YXhOb2RlLCBkaXJlY3Rpb246IERpcmVjdGlvbik6IFN5bnRheE5vZGUgfCBudWxsIHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlICdwYXJlbnQnOlxuICAgICAgcmV0dXJuIG5vZGUucGFyZW50O1xuICAgIGNhc2UgJ2ZpcnN0Q2hpbGQnOlxuICAgICAgcmV0dXJuIG5vZGUuZmlyc3RDaGlsZDtcbiAgICBjYXNlICdsYXN0Q2hpbGQnOlxuICAgICAgcmV0dXJuIG5vZGUubGFzdENoaWxkO1xuICAgIGNhc2UgJ25leHRTaWJsaW5nJzpcbiAgICAgIHJldHVybiBub2RlLm5leHRTaWJsaW5nO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgTmV2ZXJDYXNlRXJyb3IoZGlyZWN0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3YWxrKG5vZGU6IFN5bnRheE5vZGUsIHBhdGg6IFBhdGgpOiBTeW50YXhOb2RlIHwgbnVsbCB7XG4gIGxldCBjdXJyZW50OiBTeW50YXhOb2RlIHwgbnVsbCA9IG5vZGU7XG4gIGZvciAoY29uc3QgW2RpcmVjdGlvbiwgZXhwZWN0ZWRUeXBlXSBvZiBwYXRoKSB7XG4gICAgY3VycmVudCA9IG1vdmUoY3VycmVudCwgZGlyZWN0aW9uKTtcbiAgICBpZiAoY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgY291bGQgbm90IG1vdmUgaW4gdGhlIGRpcmVjdGlvbiwgd2Ugc3RvcFxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChjdXJyZW50LnR5cGUubmFtZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAvLyB0aGUgcmVhY2hlZCBub2RlIGhhcyB3cm9uZyB0eXBlLCB3ZSBzdG9wXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGN1cnJlbnQ7XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVUZXh0KG5vZGU6IFN5bnRheE5vZGUsIHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB0ZXh0LnNsaWNlKG5vZGUuZnJvbSwgbm9kZS50byk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUHJvbVFMU3RyaW5nTGl0ZXJhbCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBpZiBpdCBpcyBhIHN0cmluZy1saXRlcmFsLCBpdCBpcyBpbnNpZGUgcXVvdGVzIG9mIHNvbWUga2luZFxuICBjb25zdCBpbnNpZGUgPSB0ZXh0LnNsaWNlKDEsIHRleHQubGVuZ3RoIC0gMSk7XG5cbiAgLy8gRklYTUU6IHN1cHBvcnQgaHR0cHM6Ly9wcm9tZXRoZXVzLmlvL2RvY3MvcHJvbWV0aGV1cy9sYXRlc3QvcXVlcnlpbmcvYmFzaWNzLyNzdHJpbmctbGl0ZXJhbHNcbiAgLy8gRklYTUU6IG1heWJlIGNoZWNrIG90aGVyIHByb21xbCBjb2RlLCBpZiBhbGwgaXMgc3VwcG9ydGVkIG9yIG5vdFxuXG4gIC8vIGZvciBub3cgd2UgZG8gb25seSBzb21lIHZlcnkgc2ltcGxlIHVuLWVzY2FwaW5nXG5cbiAgLy8gd2Ugc3RhcnQgd2l0aCBkb3VibGUtcXVvdGVzXG4gIGlmICh0ZXh0LnN0YXJ0c1dpdGgoJ1wiJykgJiYgdGV4dC5lbmRzV2l0aCgnXCInKSkge1xuICAgIC8vIE5PVEU6IHRoaXMgaXMgbm90IDEwMCUgcGVyZmVjdCwgd2Ugb25seSB1bmVzY2FwZSB0aGUgZG91YmxlLXF1b3RlLFxuICAgIC8vIHRoZXJlIG1pZ2h0IGJlIG90aGVyIGNoYXJhY3RlcnMgdG9vXG4gICAgcmV0dXJuIGluc2lkZS5yZXBsYWNlKC9cXFxcXCIvLCAnXCInKTtcbiAgfVxuXG4gIC8vIHRoZW4gc2luZ2xlLXF1b3RlXG4gIGlmICh0ZXh0LnN0YXJ0c1dpdGgoXCInXCIpICYmIHRleHQuZW5kc1dpdGgoXCInXCIpKSB7XG4gICAgLy8gTk9URTogdGhpcyBpcyBub3QgMTAwJSBwZXJmZWN0LCB3ZSBvbmx5IHVuZXNjYXBlIHRoZSBzaW5nbGUtcXVvdGUsXG4gICAgLy8gdGhlcmUgbWlnaHQgYmUgb3RoZXIgY2hhcmFjdGVycyB0b29cbiAgICByZXR1cm4gaW5zaWRlLnJlcGxhY2UoL1xcXFwnLywgXCInXCIpO1xuICB9XG5cbiAgLy8gdGhlbiBiYWNrdGlja3NcbiAgaWYgKHRleHQuc3RhcnRzV2l0aCgnYCcpICYmIHRleHQuZW5kc1dpdGgoJ2AnKSkge1xuICAgIHJldHVybiBpbnNpZGU7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ0ZJWE1FOiBpbnZhbGlkIHN0cmluZyBsaXRlcmFsJyk7XG59XG5cbnR5cGUgTGFiZWxPcGVyYXRvciA9ICc9JyB8ICchPScgfCAnPX4nIHwgJyF+JztcblxuZXhwb3J0IHR5cGUgTGFiZWwgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgb3A6IExhYmVsT3BlcmF0b3I7XG59O1xuXG5leHBvcnQgdHlwZSBTaXR1YXRpb24gPVxuICB8IHtcbiAgICAgIHR5cGU6ICdJTl9GVU5DVElPTic7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6ICdBVF9ST09UJztcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ0VNUFRZJztcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ0lOX0RVUkFUSU9OJztcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ0lOX0xBQkVMX1NFTEVDVE9SX05PX0xBQkVMX05BTUUnO1xuICAgICAgbWV0cmljTmFtZT86IHN0cmluZztcbiAgICAgIG90aGVyTGFiZWxzOiBMYWJlbFtdO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiAnSU5fR1JPVVBJTkcnO1xuICAgICAgbWV0cmljTmFtZTogc3RyaW5nO1xuICAgICAgb3RoZXJMYWJlbHM6IExhYmVsW107XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6ICdJTl9MQUJFTF9TRUxFQ1RPUl9XSVRIX0xBQkVMX05BTUUnO1xuICAgICAgbWV0cmljTmFtZT86IHN0cmluZztcbiAgICAgIGxhYmVsTmFtZTogc3RyaW5nO1xuICAgICAgYmV0d2VlblF1b3RlczogYm9vbGVhbjtcbiAgICAgIG90aGVyTGFiZWxzOiBMYWJlbFtdO1xuICAgIH07XG5cbnR5cGUgUmVzb2x2ZXIgPSB7XG4gIHBhdGg6IE5vZGVUeXBlTmFtZVtdO1xuICBmdW46IChub2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcsIHBvczogbnVtYmVyKSA9PiBTaXR1YXRpb24gfCBudWxsO1xufTtcblxuZnVuY3Rpb24gaXNQYXRoTWF0Y2gocmVzb2x2ZXJQYXRoOiBzdHJpbmdbXSwgY3Vyc29yUGF0aDogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHJlc29sdmVyUGF0aC5ldmVyeSgoaXRlbSwgaW5kZXgpID0+IGl0ZW0gPT09IGN1cnNvclBhdGhbaW5kZXhdKTtcbn1cblxuY29uc3QgRVJST1JfTk9ERV9OQU1FOiBOb2RlVHlwZU5hbWUgPSAn4pqgJzsgLy8gdGhpcyBpcyB1c2VkIGFzIGVycm9yLW5hbWVcblxuY29uc3QgUkVTT0xWRVJTOiBSZXNvbHZlcltdID0gW1xuICB7XG4gICAgcGF0aDogWydMYWJlbE1hdGNoZXJzJywgJ1ZlY3RvclNlbGVjdG9yJ10sXG4gICAgZnVuOiByZXNvbHZlTGFiZWxLZXlzV2l0aEVxdWFscyxcbiAgfSxcbiAge1xuICAgIHBhdGg6IFsnUHJvbVFMJ10sXG4gICAgZnVuOiByZXNvbHZlVG9wTGV2ZWwsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBbJ0Z1bmN0aW9uQ2FsbEJvZHknXSxcbiAgICBmdW46IHJlc29sdmVJbkZ1bmN0aW9uLFxuICB9LFxuICB7XG4gICAgcGF0aDogWydTdHJpbmdMaXRlcmFsJywgJ0xhYmVsTWF0Y2hlciddLFxuICAgIGZ1bjogcmVzb2x2ZUxhYmVsTWF0Y2hlcixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFtFUlJPUl9OT0RFX05BTUUsICdMYWJlbE1hdGNoZXInXSxcbiAgICBmdW46IHJlc29sdmVMYWJlbE1hdGNoZXIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBbRVJST1JfTk9ERV9OQU1FLCAnTWF0cml4U2VsZWN0b3InXSxcbiAgICBmdW46IHJlc29sdmVEdXJhdGlvbnMsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBbJ0dyb3VwaW5nTGFiZWxzJ10sXG4gICAgZnVuOiByZXNvbHZlTGFiZWxzRm9yR3JvdXBpbmcsXG4gIH0sXG5dO1xuXG5jb25zdCBMQUJFTF9PUF9NQVAgPSBuZXcgTWFwPHN0cmluZywgTGFiZWxPcGVyYXRvcj4oW1xuICBbJ0VxbFNpbmdsZScsICc9J10sXG4gIFsnRXFsUmVnZXgnLCAnPX4nXSxcbiAgWydOZXEnLCAnIT0nXSxcbiAgWydOZXFSZWdleCcsICchfiddLFxuXSk7XG5cbmZ1bmN0aW9uIGdldExhYmVsT3Aob3BOb2RlOiBTeW50YXhOb2RlKTogTGFiZWxPcGVyYXRvciB8IG51bGwge1xuICBjb25zdCBvcENoaWxkID0gb3BOb2RlLmZpcnN0Q2hpbGQ7XG4gIGlmIChvcENoaWxkID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gTEFCRUxfT1BfTUFQLmdldChvcENoaWxkLm5hbWUpID8/IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldExhYmVsKGxhYmVsTWF0Y2hlck5vZGU6IFN5bnRheE5vZGUsIHRleHQ6IHN0cmluZyk6IExhYmVsIHwgbnVsbCB7XG4gIGlmIChsYWJlbE1hdGNoZXJOb2RlLnR5cGUubmFtZSAhPT0gJ0xhYmVsTWF0Y2hlcicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG5hbWVOb2RlID0gd2FsayhsYWJlbE1hdGNoZXJOb2RlLCBbWydmaXJzdENoaWxkJywgJ0xhYmVsTmFtZSddXSk7XG5cbiAgaWYgKG5hbWVOb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBvcE5vZGUgPSB3YWxrKG5hbWVOb2RlLCBbWyduZXh0U2libGluZycsICdNYXRjaE9wJ11dKTtcbiAgaWYgKG9wTm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgb3AgPSBnZXRMYWJlbE9wKG9wTm9kZSk7XG4gIGlmIChvcCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgdmFsdWVOb2RlID0gd2FsayhsYWJlbE1hdGNoZXJOb2RlLCBbWydsYXN0Q2hpbGQnLCAnU3RyaW5nTGl0ZXJhbCddXSk7XG5cbiAgaWYgKHZhbHVlTm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGdldE5vZGVUZXh0KG5hbWVOb2RlLCB0ZXh0KTtcbiAgY29uc3QgdmFsdWUgPSBwYXJzZVByb21RTFN0cmluZ0xpdGVyYWwoZ2V0Tm9kZVRleHQodmFsdWVOb2RlLCB0ZXh0KSk7XG5cbiAgcmV0dXJuIHsgbmFtZSwgdmFsdWUsIG9wIH07XG59XG5mdW5jdGlvbiBnZXRMYWJlbHMobGFiZWxNYXRjaGVyc05vZGU6IFN5bnRheE5vZGUsIHRleHQ6IHN0cmluZyk6IExhYmVsW10ge1xuICBpZiAobGFiZWxNYXRjaGVyc05vZGUudHlwZS5uYW1lICE9PSAnTGFiZWxNYXRjaGVycycpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBsZXQgbGlzdE5vZGU6IFN5bnRheE5vZGUgfCBudWxsID0gd2FsayhsYWJlbE1hdGNoZXJzTm9kZSwgW1snZmlyc3RDaGlsZCcsICdMYWJlbE1hdGNoTGlzdCddXSk7XG5cbiAgY29uc3QgbGFiZWxzOiBMYWJlbFtdID0gW107XG5cbiAgd2hpbGUgKGxpc3ROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWF0Y2hlck5vZGUgPSB3YWxrKGxpc3ROb2RlLCBbWydsYXN0Q2hpbGQnLCAnTGFiZWxNYXRjaGVyJ11dKTtcbiAgICBpZiAobWF0Y2hlck5vZGUgPT09IG51bGwpIHtcbiAgICAgIC8vIHVuZXhwZWN0ZWQsIHdlIHN0b3BcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBsYWJlbCA9IGdldExhYmVsKG1hdGNoZXJOb2RlLCB0ZXh0KTtcbiAgICBpZiAobGFiZWwgIT09IG51bGwpIHtcbiAgICAgIGxhYmVscy5wdXNoKGxhYmVsKTtcbiAgICB9XG5cbiAgICAvLyB0aGVyZSBtaWdodCBiZSBtb3JlIGxhYmVsc1xuICAgIGxpc3ROb2RlID0gd2FsayhsaXN0Tm9kZSwgW1snZmlyc3RDaGlsZCcsICdMYWJlbE1hdGNoTGlzdCddXSk7XG4gIH1cblxuICAvLyBvdXIgbGFiZWxzLWxpc3QgaXMgbGFzdC1maXJzdCwgc28gd2UgcmV2ZXJzZSBpdFxuICBsYWJlbHMucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVDaGlsZHJlbihub2RlOiBTeW50YXhOb2RlKTogU3ludGF4Tm9kZVtdIHtcbiAgbGV0IGNoaWxkOiBTeW50YXhOb2RlIHwgbnVsbCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgY29uc3QgY2hpbGRyZW46IFN5bnRheE5vZGVbXSA9IFtdO1xuICB3aGlsZSAoY2hpbGQgIT09IG51bGwpIHtcbiAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICB9XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9kZUluU3VidHJlZShub2RlOiBTeW50YXhOb2RlLCB0eXBlTmFtZTogTm9kZVR5cGVOYW1lKTogU3ludGF4Tm9kZSB8IG51bGwge1xuICAvLyBmaXJzdCB3ZSB0cnkgdGhlIGN1cnJlbnQgbm9kZVxuICBpZiAobm9kZS50eXBlLm5hbWUgPT09IHR5cGVOYW1lKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvLyB0aGVuIHdlIHRyeSB0aGUgY2hpbGRyZW5cbiAgY29uc3QgY2hpbGRyZW4gPSBnZXROb2RlQ2hpbGRyZW4obm9kZSk7XG4gIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICBjb25zdCBuID0gZ2V0Tm9kZUluU3VidHJlZShjaGlsZCwgdHlwZU5hbWUpO1xuICAgIGlmIChuICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUxhYmVsc0Zvckdyb3VwaW5nKG5vZGU6IFN5bnRheE5vZGUsIHRleHQ6IHN0cmluZywgcG9zOiBudW1iZXIpOiBTaXR1YXRpb24gfCBudWxsIHtcbiAgY29uc3QgYWdnckV4cE5vZGUgPSB3YWxrKG5vZGUsIFtcbiAgICBbJ3BhcmVudCcsICdBZ2dyZWdhdGVNb2RpZmllciddLFxuICAgIFsncGFyZW50JywgJ0FnZ3JlZ2F0ZUV4cHInXSxcbiAgXSk7XG4gIGlmIChhZ2dyRXhwTm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGJvZHlOb2RlID0gYWdnckV4cE5vZGUuZ2V0Q2hpbGQoJ0Z1bmN0aW9uQ2FsbEJvZHknKTtcbiAgaWYgKGJvZHlOb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBtZXRyaWNJZE5vZGUgPSBnZXROb2RlSW5TdWJ0cmVlKGJvZHlOb2RlLCAnTWV0cmljSWRlbnRpZmllcicpO1xuICBpZiAobWV0cmljSWROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpZE5vZGUgPSB3YWxrKG1ldHJpY0lkTm9kZSwgW1snZmlyc3RDaGlsZCcsICdJZGVudGlmaWVyJ11dKTtcbiAgaWYgKGlkTm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbWV0cmljTmFtZSA9IGdldE5vZGVUZXh0KGlkTm9kZSwgdGV4dCk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0lOX0dST1VQSU5HJyxcbiAgICBtZXRyaWNOYW1lLFxuICAgIG90aGVyTGFiZWxzOiBbXSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUxhYmVsTWF0Y2hlcihub2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcsIHBvczogbnVtYmVyKTogU2l0dWF0aW9uIHwgbnVsbCB7XG4gIC8vIHdlIGNhbiBhcnJpdmUgaGVyZSBpbiB0d28gc2l0dWF0aW9uLiBgbm9kZWAgaXMgZWl0aGVyOlxuICAvLyAtIGEgU3RyaW5nTm9kZSAobGlrZSBpbiBge2pvYj1cIl5cIn1gKVxuICAvLyAtIG9yIGFuIGVycm9yIG5vZGUgKGxpa2UgaW4gYHtqb2I9Xn1gKVxuICBjb25zdCBpblN0cmluZ05vZGUgPSAhbm9kZS50eXBlLmlzRXJyb3I7XG5cbiAgY29uc3QgcGFyZW50ID0gd2Fsayhub2RlLCBbWydwYXJlbnQnLCAnTGFiZWxNYXRjaGVyJ11dKTtcbiAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbGFiZWxOYW1lTm9kZSA9IHdhbGsocGFyZW50LCBbWydmaXJzdENoaWxkJywgJ0xhYmVsTmFtZSddXSk7XG4gIGlmIChsYWJlbE5hbWVOb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBsYWJlbE5hbWUgPSBnZXROb2RlVGV4dChsYWJlbE5hbWVOb2RlLCB0ZXh0KTtcblxuICAvLyBub3cgd2UgbmVlZCB0byBnbyB1cCwgdG8gdGhlIHBhcmVudCBvZiBMYWJlbE1hdGNoZXIsXG4gIC8vIHRoZXJlIGNhbiBiZSBvbmUgb3IgbWFueSBgTGFiZWxNYXRjaExpc3RgIHBhcmVudHMsIHdlIGhhdmVcbiAgLy8gdG8gZ28gdGhyb3VnaCBhbGwgb2YgdGhlbVxuXG4gIGNvbnN0IGZpcnN0TGlzdE5vZGUgPSB3YWxrKHBhcmVudCwgW1sncGFyZW50JywgJ0xhYmVsTWF0Y2hMaXN0J11dKTtcbiAgaWYgKGZpcnN0TGlzdE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBsaXN0Tm9kZSA9IGZpcnN0TGlzdE5vZGU7XG5cbiAgLy8gd2Uga2VlcCBnb2luZyB0aHJvdWdoIHRoZSBwYXJlbnQtbm9kZXNcbiAgLy8gYXMgbG9uZyBhcyB0aGV5IGFyZSBMYWJlbE1hdGNoTGlzdC5cbiAgLy8gYXMgc29vbiBhcyB3ZSByZWF3Y2ggTGFiZWxNYXRjaGVycywgd2Ugc3RvcFxuICBsZXQgbGFiZWxNYXRjaGVyc05vZGU6IFN5bnRheE5vZGUgfCBudWxsID0gbnVsbDtcbiAgd2hpbGUgKGxhYmVsTWF0Y2hlcnNOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgcCA9IGxpc3ROb2RlLnBhcmVudDtcbiAgICBpZiAocCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBwLnR5cGU7XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgJ0xhYmVsTWF0Y2hMaXN0JzpcbiAgICAgICAgLy93ZSBrZWVwIGxvb3BpbmdcbiAgICAgICAgbGlzdE5vZGUgPSBwO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIGNhc2UgJ0xhYmVsTWF0Y2hlcnMnOlxuICAgICAgICAvLyB3ZSByZWFjaGVkIHRoZSBlbmQsIHdlIGNhbiBzdG9wIHRoZSBsb29wXG4gICAgICAgIGxhYmVsTWF0Y2hlcnNOb2RlID0gcDtcbiAgICAgICAgY29udGludWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyB3ZSByZWFjaGVkIHNvbWUgb3RoZXIgbm9kZSwgd2Ugc3RvcFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBub3cgd2UgbmVlZCB0byBmaW5kIHRoZSBvdGhlciBuYW1lc1xuICBjb25zdCBhbGxMYWJlbHMgPSBnZXRMYWJlbHMobGFiZWxNYXRjaGVyc05vZGUsIHRleHQpO1xuXG4gIC8vIHdlIG5lZWQgdG8gcmVtb3ZlIFwib3VyXCIgbGFiZWwgZnJvbSBhbGwtbGFiZWxzLCBpZiBpdCBpcyBpbiB0aGVyZVxuICBjb25zdCBvdGhlckxhYmVscyA9IGFsbExhYmVscy5maWx0ZXIoKGxhYmVsKSA9PiBsYWJlbC5uYW1lICE9PSBsYWJlbE5hbWUpO1xuXG4gIGNvbnN0IG1ldHJpY05hbWVOb2RlID0gd2FsayhsYWJlbE1hdGNoZXJzTm9kZSwgW1xuICAgIFsncGFyZW50JywgJ1ZlY3RvclNlbGVjdG9yJ10sXG4gICAgWydmaXJzdENoaWxkJywgJ01ldHJpY0lkZW50aWZpZXInXSxcbiAgICBbJ2ZpcnN0Q2hpbGQnLCAnSWRlbnRpZmllciddLFxuICBdKTtcblxuICBpZiAobWV0cmljTmFtZU5vZGUgPT09IG51bGwpIHtcbiAgICAvLyB3ZSBhcmUgcHJvYmFibHkgaW4gYSBzaXR1YXRpb24gd2l0aG91dCBhIG1ldHJpYyBuYW1lXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdJTl9MQUJFTF9TRUxFQ1RPUl9XSVRIX0xBQkVMX05BTUUnLFxuICAgICAgbGFiZWxOYW1lLFxuICAgICAgYmV0d2VlblF1b3RlczogaW5TdHJpbmdOb2RlLFxuICAgICAgb3RoZXJMYWJlbHMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG1ldHJpY05hbWUgPSBnZXROb2RlVGV4dChtZXRyaWNOYW1lTm9kZSwgdGV4dCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnSU5fTEFCRUxfU0VMRUNUT1JfV0lUSF9MQUJFTF9OQU1FJyxcbiAgICBtZXRyaWNOYW1lLFxuICAgIGxhYmVsTmFtZSxcbiAgICBiZXR3ZWVuUXVvdGVzOiBpblN0cmluZ05vZGUsXG4gICAgb3RoZXJMYWJlbHMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVUb3BMZXZlbChub2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcsIHBvczogbnVtYmVyKTogU2l0dWF0aW9uIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQVRfUk9PVCcsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJbkZ1bmN0aW9uKG5vZGU6IFN5bnRheE5vZGUsIHRleHQ6IHN0cmluZywgcG9zOiBudW1iZXIpOiBTaXR1YXRpb24ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdJTl9GVU5DVElPTicsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEdXJhdGlvbnMobm9kZTogU3ludGF4Tm9kZSwgdGV4dDogc3RyaW5nLCBwb3M6IG51bWJlcik6IFNpdHVhdGlvbiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0lOX0RVUkFUSU9OJyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3ViVHJlZUhhc0Vycm9yKG5vZGU6IFN5bnRheE5vZGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIGdldE5vZGVJblN1YnRyZWUobm9kZSwgRVJST1JfTk9ERV9OQU1FKSAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUxhYmVsS2V5c1dpdGhFcXVhbHMobm9kZTogU3ludGF4Tm9kZSwgdGV4dDogc3RyaW5nLCBwb3M6IG51bWJlcik6IFNpdHVhdGlvbiB8IG51bGwge1xuICAvLyBmb3IgZXhhbXBsZSBgc29tZXRoaW5ne159YFxuXG4gIC8vIHRoZXJlIGFyZSBzb21lIGZhbHNlIHBvc2l0aXZlcyB0aGF0IGNhbiBlbmQgdXAgaW4gdGhpcyBzaXR1YXRpb24sIHRoYXQgd2Ugd2FudFxuICAvLyB0byBlbGltaW5hdGU6XG4gIC8vIGBzb21ldGhpbmd7YX5efWAgKGlmIHRoaXMgc3VidHJlZSBjb250YWlucyBhbnkgZXJyb3Itbm9kZSwgd2Ugc3RvcClcbiAgaWYgKHN1YlRyZWVIYXNFcnJvcihub2RlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gbmV4dCBmYWxzZSBwb3NpdGl2ZTpcbiAgLy8gYHNvbWV0aGluZ3thPVwiMVwiXn1gXG4gIGNvbnN0IGNoaWxkID0gd2Fsayhub2RlLCBbWydmaXJzdENoaWxkJywgJ0xhYmVsTWF0Y2hMaXN0J11dKTtcbiAgaWYgKGNoaWxkICE9PSBudWxsKSB7XG4gICAgLy8gbWVhbnMgdGhlIGxhYmVsLW1hdGNoaW5nIHBhcnQgY29udGFpbnMgYXQgbGVhc3Qgb25lIGxhYmVsIGFscmVhZHkuXG4gICAgLy9cbiAgICAvLyBpbiB0aGlzIGNhc2UsIHdlIHdpbGwgbmVlZCB0byBoYXZlIGEgYCxgIGNoYXJhY3RlciBhdCB0aGUgZW5kLFxuICAgIC8vIHRvIGJlIGFibGUgdG8gc3VnZ2VzdCBhZGRpbmcgdGhlIG5leHQgbGFiZWwuXG4gICAgLy8gdGhlIGFyZWEgYmV0d2VlbiB0aGUgZW5kLW9mLXRoZS1jaGlsZC1ub2RlIGFuZCB0aGUgY3Vyc29yLXBvc1xuICAgIC8vIG11c3QgY29udGFpbiBhIGAsYCBpbiB0aGlzIGNhc2UuXG4gICAgY29uc3QgdGV4dFRvQ2hlY2sgPSB0ZXh0LnNsaWNlKGNoaWxkLnRvLCBwb3MpO1xuXG4gICAgaWYgKCF0ZXh0VG9DaGVjay5pbmNsdWRlcygnLCcpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXRyaWNOYW1lTm9kZSA9IHdhbGsobm9kZSwgW1xuICAgIFsncGFyZW50JywgJ1ZlY3RvclNlbGVjdG9yJ10sXG4gICAgWydmaXJzdENoaWxkJywgJ01ldHJpY0lkZW50aWZpZXInXSxcbiAgICBbJ2ZpcnN0Q2hpbGQnLCAnSWRlbnRpZmllciddLFxuICBdKTtcblxuICBjb25zdCBvdGhlckxhYmVscyA9IGdldExhYmVscyhub2RlLCB0ZXh0KTtcblxuICBpZiAobWV0cmljTmFtZU5vZGUgPT09IG51bGwpIHtcbiAgICAvLyB3ZSBhcmUgcHJvYmFibHkgaW4gYSBzaXR1YXRpb24gd2l0aG91dCBhIG1ldHJpYyBuYW1lLlxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnSU5fTEFCRUxfU0VMRUNUT1JfTk9fTEFCRUxfTkFNRScsXG4gICAgICBvdGhlckxhYmVscyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgbWV0cmljTmFtZSA9IGdldE5vZGVUZXh0KG1ldHJpY05hbWVOb2RlLCB0ZXh0KTtcblxuICByZXR1cm4ge1xuICAgIHR5cGU6ICdJTl9MQUJFTF9TRUxFQ1RPUl9OT19MQUJFTF9OQU1FJyxcbiAgICBtZXRyaWNOYW1lLFxuICAgIG90aGVyTGFiZWxzLFxuICB9O1xufVxuXG4vLyB3ZSBmaW5kIHRoZSBmaXJzdCBlcnJvci1ub2RlIGluIHRoZSB0cmVlIHRoYXQgaXMgYXQgdGhlIGN1cnNvci1wb3NpdGlvbi5cbi8vIE5PVEU6IHRoaXMgbWlnaHQgYmUgdG9vIHNsb3csIG1pZ2h0IG5lZWQgdG8gb3B0aW1pemUgaXRcbi8vIChpZGVhczogd2UgZG8gbm90IG5lZWQgdG8gZ28gaW50byBldmVyeSBzdWJ0cmVlLCBiYXNlZCBvbiBmcm9tL3RvKVxuLy8gYWxzbywgb25seSBnbyB0byBwbGFjZXMgdGhhdCBhcmUgaW4gdGhlIHN1Yi10cmVlIG9mIHRoZSBub2RlIGZvdW5kXG4vLyBieSBkZWZhdWx0IGJ5IGxlemVyLiBwcm9ibGVtIGlzLCBgbmV4dCgpYCB3aWxsIGdvIHVwd2FyZCB0b28sXG4vLyBhbmQgd2UgZG8gbm90IHdhbnQgdG8gZ28gaGlnaGVyIHRoYW4gb3VyIG5vZGVcbmZ1bmN0aW9uIGdldEVycm9yTm9kZSh0cmVlOiBUcmVlLCBwb3M6IG51bWJlcik6IFN5bnRheE5vZGUgfCBudWxsIHtcbiAgY29uc3QgY3VyID0gdHJlZS5jdXJzb3IocG9zKTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoY3VyLmZyb20gPT09IHBvcyAmJiBjdXIudG8gPT09IHBvcykge1xuICAgICAgY29uc3QgeyBub2RlIH0gPSBjdXI7XG4gICAgICBpZiAobm9kZS50eXBlLmlzRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjdXIubmV4dCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXR1YXRpb24odGV4dDogc3RyaW5nLCBwb3M6IG51bWJlcik6IFNpdHVhdGlvbiB8IG51bGwge1xuICAvLyB0aGVyZSBpcyBhIHNwZWNpYWwtY2FzZSB3aGVuIHdlIGFyZSBhdCB0aGUgc3RhcnQgb2Ygd3JpdGluZyB0ZXh0LFxuICAvLyBzbyB3ZSBoYW5kbGUgdGhhdCBjYXNlIGZpcnN0XG5cbiAgaWYgKHRleHQgPT09ICcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdFTVBUWScsXG4gICAgfTtcbiAgfVxuXG4gIC8qXG5cdFByb21RTFxuRXhwclxuVmVjdG9yU2VsZWN0b3JcbkxhYmVsTWF0Y2hlcnNcbiovXG4gIGNvbnN0IHRyZWUgPSBwYXJzZXIucGFyc2UodGV4dCk7XG5cbiAgLy8gaWYgdGhlIHRyZWUgY29udGFpbnMgZXJyb3IsIGl0IGlzIHZlcnkgcHJvYmFibGUgdGhhdFxuICAvLyBvdXIgbm9kZSBpcyBvbmUgb2YgdGhvc2UgZXJyb3Itbm9kZXMuXG4gIC8vIGFsc28sIGlmIHRoZXJlIGFyZSBlcnJvcnMsIHRoZSBub2RlIGxlemVyIGZpbmRzIHVzLFxuICAvLyBtaWdodCBub3QgYmUgdGhlIGJlc3Qgbm9kZS5cbiAgLy8gc28gZmlyc3Qgd2UgY2hlY2sgaWYgdGhlcmUgaXMgYW4gZXJyb3Itbm9kZSBhdCB0aGUgY3Vyc29yLXBvc2l0aW9uXG4gIGNvbnN0IG1heWJlRXJyb3JOb2RlID0gZ2V0RXJyb3JOb2RlKHRyZWUsIHBvcyk7XG5cbiAgY29uc3QgY3VyID0gbWF5YmVFcnJvck5vZGUgIT0gbnVsbCA/IG1heWJlRXJyb3JOb2RlLmN1cnNvciA6IHRyZWUuY3Vyc29yKHBvcyk7XG4gIGNvbnN0IGN1cnJlbnROb2RlID0gY3VyLm5vZGU7XG5cbiAgY29uc3QgbmFtZXMgPSBbY3VyLm5hbWVdO1xuICB3aGlsZSAoY3VyLnBhcmVudCgpKSB7XG4gICAgbmFtZXMucHVzaChjdXIubmFtZSk7XG4gIH1cblxuICBmb3IgKGxldCByZXNvbHZlciBvZiBSRVNPTFZFUlMpIHtcbiAgICAvLyBpIGRvIG5vdCB1c2UgYSBmb3JlYWNoIGJlY2F1c2UgaSB3YW50IHRvIHN0b3AgYXMgc29vblxuICAgIC8vIGFzIGkgZmluZCBzb21ldGhpbmdcbiAgICBpZiAoaXNQYXRoTWF0Y2gocmVzb2x2ZXIucGF0aCwgbmFtZXMpKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZXIuZnVuKGN1cnJlbnROb2RlLCB0ZXh0LCBwb3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIiwiLy8gdGhpcyBoZWxwZXIgY2xhc3MgaXMgdXNlZCB0byBtYWtlIHR5cGVzY3JpcHQgd2FybiB5b3Ugd2hlbiB5b3UgZm9yZ2V0XG4vLyBhIGNhc2UtYmxvY2sgaW4gYSBzd2l0Y2ggc3RhdGVtZW50LlxuLy8gZXhhbXBsZSBjb2RlIHRoYXQgdHJpZ2dlcnMgdGhlIHR5cGVzY3JpcHQtZXJyb3I6XG4vL1xuLy8gY29uc3QgeDonQSd8J0InfCdDJyA9ICdBJztcbi8vXG4vLyBzd2l0Y2goeCkge1xuLy8gICBjYXNlICdBJzpcbi8vICAgICAvLyBzb21ldGhpbmdcbi8vICAgY2FzZSAnQic6XG4vLyAgICAgLy8gc29tZXRoaW5nXG4vLyAgIGRlZmF1bHQ6XG4vLyAgICAgdGhyb3cgbmV3IE5ldmVyQ2FzZUVycm9yKHgpO1xuLy8gfVxuLy9cbi8vXG4vLyB0eXBlc2NyaXB0IHdpbGwgc2hvdyBhbiBlcnJvciBpbiB0aGlzIGNhc2UsXG4vLyB3aGVuIHlvdSBhZGQgdGhlIG1pc3NpbmcgYGNhc2UgJ0MnYCBjb2RlLFxuLy8gdGhlIHByb2JsZW0gd2lsbCBiZSBmaXhlZC5cblxuZXhwb3J0IGNsYXNzIE5ldmVyQ2FzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbmV2ZXIpIHtcbiAgICBzdXBlcignc2hvdWxkIG5ldmVyIGhhcHBlbicpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG52YXIgdXNlTGF0ZXN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICByZXR1cm4gcmVmO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUxhdGVzdDtcbiIsIi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgQ2VsaWFuIEdhcmNpYSBhbmQgQXVndXN0aW4gSHVzc29uIEAgQW1hZGV1cyBJVCBHcm91cFxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuLy8gU09GVFdBUkUuXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgKiBmcm9tICcuL3Byb21xbC9wcm9tcWwuY29udHJpYnV0aW9uJztcbiIsIi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgQ2VsaWFuIEdhcmNpYSBhbmQgQXVndXN0aW4gSHVzc29uIEAgQW1hZGV1cyBJVCBHcm91cFxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuLy8gU09GVFdBUkUuXG4ndXNlIHN0cmljdCc7XG4vLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5leHBvcnQgdmFyIHByb21MYW5ndWFnZURlZmluaXRpb24gPSB7XG4gICAgaWQ6ICdwcm9tcWwnLFxuICAgIGV4dGVuc2lvbnM6IFsnLnByb21xbCddLFxuICAgIGFsaWFzZXM6IFsnUHJvbWV0aGV1cycsICdwcm9tZXRoZXVzJywgJ3Byb20nLCAnUHJvbScsICdwcm9tcWwnLCAnUHJvbXFsJywgJ3Byb21RTCcsICdQcm9tUUwnXSxcbiAgICBtaW1ldHlwZXM6IFtdLFxuICAgIGxvYWRlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW1wb3J0KCcuL3Byb21xbCcpOyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlXG59O1xuIl0sIm5hbWVzIjpbImNzcyIsInByb21MYW5ndWFnZURlZmluaXRpb24iLCJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZUxhdGVzdCIsInNlbGVjdG9ycyIsInVzZVRoZW1lMiIsIlJlYWN0TW9uYWNvRWRpdG9yIiwiZ2V0T3ZlcnJpZGVTZXJ2aWNlcyIsImdldENvbXBsZXRpb25Qcm92aWRlciIsImdldFN1Z2dlc3RPcHRpb25zIiwib3B0aW9ucyIsImNvZGVMZW5zIiwiY29udGV4dG1lbnUiLCJmaXhlZE92ZXJmbG93V2lkZ2V0cyIsImZvbGRpbmciLCJmb250U2l6ZSIsImxpbmVEZWNvcmF0aW9uc1dpZHRoIiwibGluZU51bWJlcnMiLCJtaW5pbWFwIiwiZW5hYmxlZCIsIm92ZXJ2aWV3UnVsZXJCb3JkZXIiLCJvdmVydmlld1J1bGVyTGFuZXMiLCJwYWRkaW5nIiwidG9wIiwiYm90dG9tIiwicmVuZGVyTGluZUhpZ2hsaWdodCIsInNjcm9sbGJhciIsInZlcnRpY2FsIiwidmVydGljYWxTY3JvbGxiYXJTaXplIiwiaG9yaXpvbnRhbCIsImhvcml6b250YWxTY3JvbGxiYXJTaXplIiwic2Nyb2xsQmV5b25kTGFzdExpbmUiLCJzdWdnZXN0Iiwic3VnZ2VzdEZvbnRTaXplIiwid29yZFdyYXAiLCJFRElUT1JfSEVJR0hUX09GRlNFVCIsIlBST01RTF9MQU5HX0lEIiwiaWQiLCJQUk9NUUxfU0VUVVBfU1RBUlRFRCIsImVuc3VyZVByb21RTCIsIm1vbmFjbyIsImFsaWFzZXMiLCJleHRlbnNpb25zIiwibWltZXR5cGVzIiwibG9hZGVyIiwibGFuZ3VhZ2VzIiwicmVnaXN0ZXIiLCJ0aGVuIiwibW9kIiwic2V0TW9uYXJjaFRva2Vuc1Byb3ZpZGVyIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZUNvbmZpZ3VyYXRpb24iLCJsYW5ndWFnZUNvbmZpZ3VyYXRpb24iLCJnZXRTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwiY29tcG9uZW50cyIsImlucHV0IiwiYm9yZGVyQ29sb3IiLCJNb25hY29RdWVyeUZpZWxkIiwicHJvcHMiLCJvdmVycmlkZVNlcnZpY2VzUmVmIiwiY29udGFpbmVyUmVmIiwibGFuZ3VhZ2VQcm92aWRlciIsImhpc3RvcnkiLCJvbkJsdXIiLCJvblJ1blF1ZXJ5IiwiaW5pdGlhbFZhbHVlIiwibHBSZWYiLCJoaXN0b3J5UmVmIiwib25SdW5RdWVyeVJlZiIsIm9uQmx1clJlZiIsImF1dG9jb21wbGV0ZURpc3Bvc2VGdW4iLCJzdHlsZXMiLCJjdXJyZW50IiwiUXVlcnlGaWVsZCIsImVkaXRvciIsIm9uRGlkQmx1ckVkaXRvcldpZGdldCIsImdldFZhbHVlIiwiZ2V0U2VyaWVzIiwic2VsZWN0b3IiLCJnZXRIaXN0b3J5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJtYXAiLCJoIiwicXVlcnkiLCJleHByIiwiZmlsdGVyIiwidW5kZWZpbmVkIiwiZ2V0QWxsTWV0cmljTmFtZXMiLCJtZXRyaWNzIiwibWV0cmljc01ldGFkYXRhIiwicmVzdWx0IiwibSIsIm1ldGFJdGVtIiwibmFtZSIsImhlbHAiLCJ0eXBlIiwiZ2V0QWxsTGFiZWxOYW1lcyIsImdldExhYmVsS2V5cyIsImdldExhYmVsVmFsdWVzIiwibGFiZWxOYW1lIiwiZGF0YVByb3ZpZGVyIiwiY29tcGxldGlvblByb3ZpZGVyIiwiZmlsdGVyaW5nQ29tcGxldGlvblByb3ZpZGVyIiwicHJvdmlkZUNvbXBsZXRpb25JdGVtcyIsIm1vZGVsIiwicG9zaXRpb24iLCJjb250ZXh0IiwidG9rZW4iLCJnZXRNb2RlbCIsInN1Z2dlc3Rpb25zIiwiZGlzcG9zZSIsInJlZ2lzdGVyQ29tcGxldGlvbkl0ZW1Qcm92aWRlciIsInVwZGF0ZUVsZW1lbnRIZWlnaHQiLCJjb250YWluZXJEaXYiLCJwaXhlbEhlaWdodCIsImdldENvbnRlbnRIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwicGl4ZWxXaWR0aCIsImNsaWVudFdpZHRoIiwibGF5b3V0Iiwib25EaWRDb250ZW50U2l6ZUNoYW5nZSIsImFkZENvbW1hbmQiLCJLZXlNb2QiLCJTaGlmdCIsIktleUNvZGUiLCJFbnRlciIsIkN0cmxDbWQiLCJLZXlLIiwiZ2xvYmFsIiwiZGlzcGF0Y2hFdmVudCIsIktleWJvYXJkRXZlbnQiLCJrZXkiLCJtZXRhS2V5IiwibWFrZVN0b3JhZ2VTZXJ2aWNlIiwic3RyaW5ncyIsIk1hcCIsInNldCIsInRvU3RyaW5nIiwib25EaWRDaGFuZ2VWYWx1ZSIsImRhdGEiLCJvbkRpZENoYW5nZVRhcmdldCIsIm9uV2lsbFNhdmVTdGF0ZSIsImdldCIsInNjb3BlIiwiZmFsbGJhY2tWYWx1ZSIsImdldEJvb2xlYW4iLCJ2YWwiLCJnZXROdW1iZXIiLCJwYXJzZUludCIsInN0b3JlIiwidmFsdWUiLCJ0YXJnZXQiLCJkZWxldGUiLCJyZW1vdmUiLCJrZXlzIiwiQXJyYXkiLCJmcm9tIiwibG9nU3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJtaWdyYXRlIiwiaXNOZXciLCJmbHVzaCIsInJlYXNvbiIsIm92ZXJyaWRlU2VydmljZXMiLCJzdG9yYWdlU2VydmljZSIsImVzY2FwZUxhYmVsVmFsdWVJbkV4YWN0U2VsZWN0b3IiLCJGVU5DVElPTlMiLCJOZXZlckNhc2VFcnJvciIsImdldEFsbE1ldHJpY05hbWVzQ29tcGxldGlvbnMiLCJtZXRyaWMiLCJsYWJlbCIsImluc2VydFRleHQiLCJkZXRhaWwiLCJkb2N1bWVudGF0aW9uIiwiRlVOQ1RJT05fQ09NUExFVElPTlMiLCJmIiwiZ2V0QWxsRnVuY3Rpb25zQW5kTWV0cmljTmFtZXNDb21wbGV0aW9ucyIsIm1ldHJpY05hbWVzIiwiRFVSQVRJT05fQ09NUExFVElPTlMiLCJ0ZXh0IiwiZ2V0QWxsSGlzdG9yeUNvbXBsZXRpb25zIiwiYWxsSGlzdG9yeSIsInNsaWNlIiwibWFrZVNlbGVjdG9yIiwibWV0cmljTmFtZSIsImxhYmVscyIsImFsbExhYmVscyIsInB1c2giLCJvcCIsImFsbExhYmVsVGV4dHMiLCJqb2luIiwiZ2V0TGFiZWxOYW1lcyIsIm90aGVyTGFiZWxzIiwibGVuZ3RoIiwicG9zc2libGVMYWJlbE5hbWVzIiwiT2JqZWN0IiwidXNlZExhYmVsTmFtZXMiLCJTZXQiLCJsIiwiaGFzIiwiZ2V0TGFiZWxOYW1lc0ZvckNvbXBsZXRpb25zIiwic3VmZml4IiwidHJpZ2dlck9uSW5zZXJ0IiwibGFiZWxOYW1lcyIsImdldExhYmVsTmFtZXNGb3JTZWxlY3RvckNvbXBsZXRpb25zIiwiZ2V0TGFiZWxOYW1lc0ZvckJ5Q29tcGxldGlvbnMiLCJnZXRMYWJlbFZhbHVlc0Zvck1ldHJpY0NvbXBsZXRpb25zIiwiYmV0d2VlblF1b3RlcyIsInZhbHVlcyIsImdldENvbXBsZXRpb25zIiwic2l0dWF0aW9uIiwiaGlzdG9yeUNvbXBsZXRpb25zIiwiZ2V0U2l0dWF0aW9uIiwic2hvd1dvcmRzIiwiZ2V0TW9uYWNvQ29tcGxldGlvbkl0ZW1LaW5kIiwiQ29tcGxldGlvbkl0ZW1LaW5kIiwiVW5pdCIsIlZhcmlhYmxlIiwiU25pcHBldCIsIkVudW0iLCJFbnVtTWVtYmVyIiwiQ29uc3RydWN0b3IiLCJ3b3JkIiwiZ2V0V29yZEF0UG9zaXRpb24iLCJyYW5nZSIsIlJhbmdlIiwibGlmdCIsInN0YXJ0TGluZU51bWJlciIsImxpbmVOdW1iZXIiLCJlbmRMaW5lTnVtYmVyIiwic3RhcnRDb2x1bW4iLCJlbmRDb2x1bW4iLCJmcm9tUG9zaXRpb25zIiwicG9zaXRpb25DbG9uZSIsImNvbHVtbiIsIm9mZnNldCIsImdldE9mZnNldEF0IiwiY29tcGxldGlvbnNQcm9taXNlIiwiaXRlbXMiLCJtYXhJbmRleERpZ2l0cyIsIml0ZW0iLCJpbmRleCIsImtpbmQiLCJzb3J0VGV4dCIsInBhZFN0YXJ0IiwiY29tbWFuZCIsInRpdGxlIiwidHJpZ2dlckNoYXJhY3RlcnMiLCJwYXJzZXIiLCJtb3ZlIiwibm9kZSIsImRpcmVjdGlvbiIsInBhcmVudCIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJuZXh0U2libGluZyIsIndhbGsiLCJwYXRoIiwiZXhwZWN0ZWRUeXBlIiwiZ2V0Tm9kZVRleHQiLCJ0byIsInBhcnNlUHJvbVFMU3RyaW5nTGl0ZXJhbCIsImluc2lkZSIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInJlcGxhY2UiLCJFcnJvciIsImlzUGF0aE1hdGNoIiwicmVzb2x2ZXJQYXRoIiwiY3Vyc29yUGF0aCIsImV2ZXJ5IiwiRVJST1JfTk9ERV9OQU1FIiwiUkVTT0xWRVJTIiwiZnVuIiwicmVzb2x2ZUxhYmVsS2V5c1dpdGhFcXVhbHMiLCJyZXNvbHZlVG9wTGV2ZWwiLCJyZXNvbHZlSW5GdW5jdGlvbiIsInJlc29sdmVMYWJlbE1hdGNoZXIiLCJyZXNvbHZlRHVyYXRpb25zIiwicmVzb2x2ZUxhYmVsc0Zvckdyb3VwaW5nIiwiTEFCRUxfT1BfTUFQIiwiZ2V0TGFiZWxPcCIsIm9wTm9kZSIsIm9wQ2hpbGQiLCJnZXRMYWJlbCIsImxhYmVsTWF0Y2hlck5vZGUiLCJuYW1lTm9kZSIsInZhbHVlTm9kZSIsImdldExhYmVscyIsImxhYmVsTWF0Y2hlcnNOb2RlIiwibGlzdE5vZGUiLCJtYXRjaGVyTm9kZSIsInJldmVyc2UiLCJnZXROb2RlQ2hpbGRyZW4iLCJjaGlsZCIsImNoaWxkcmVuIiwiZ2V0Tm9kZUluU3VidHJlZSIsInR5cGVOYW1lIiwibiIsInBvcyIsImFnZ3JFeHBOb2RlIiwiYm9keU5vZGUiLCJnZXRDaGlsZCIsIm1ldHJpY0lkTm9kZSIsImlkTm9kZSIsImluU3RyaW5nTm9kZSIsImlzRXJyb3IiLCJsYWJlbE5hbWVOb2RlIiwiZmlyc3RMaXN0Tm9kZSIsInAiLCJtZXRyaWNOYW1lTm9kZSIsInN1YlRyZWVIYXNFcnJvciIsInRleHRUb0NoZWNrIiwiaW5jbHVkZXMiLCJnZXRFcnJvck5vZGUiLCJ0cmVlIiwiY3VyIiwiY3Vyc29yIiwibmV4dCIsInBhcnNlIiwibWF5YmVFcnJvck5vZGUiLCJjdXJyZW50Tm9kZSIsIm5hbWVzIiwicmVzb2x2ZXIiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=