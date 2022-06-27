"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["TestStuffPage"],{

/***/ "./public/app/core/components/PluginHelp/PluginHelp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginHelp": () => (/* binding */ PluginHelp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _h2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class PluginHelp extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isError: false,
      isLoading: false,
      help: ''
    });

    _defineProperty(this, "loadHelp", () => {
      const {
        plugin,
        type
      } = this.props;
      this.setState({
        isLoading: true
      });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get(`/api/plugins/${plugin.id}/markdown/${type}`).then(response => {
        const helpHtml = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.renderMarkdown)(response);

        if (response === '' && type === 'help') {
          this.setState({
            isError: false,
            isLoading: false,
            help: this.constructPlaceholderInfo()
          });
        } else {
          this.setState({
            isError: false,
            isLoading: false,
            help: helpHtml
          });
        }
      }).catch(() => {
        this.setState({
          isError: true,
          isLoading: false
        });
      });
    });
  }

  componentDidMount() {
    this.loadHelp();
  }

  constructPlaceholderInfo() {
    return 'No plugin help or readme markdown file was found';
  }

  render() {
    const {
      type
    } = this.props;
    const {
      isError,
      isLoading,
      help
    } = this.state;

    if (isLoading) {
      return _h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        children: "Loading help..."
      }));
    }

    if (isError) {
      return _h2 || (_h2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        children: "'Error occurred when loading help'"
      }));
    }

    if (type === 'panel_help' && help === '') {}

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "markdown-html",
      dangerouslySetInnerHTML: {
        __html: help
      }
    });
  }

}

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

/***/ "./public/app/features/query/components/QueryGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryGroup": () => (/* binding */ QueryGroup)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_PluginHelp_PluginHelp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/PluginHelp/PluginHelp.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_utils_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/utils/query.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var app_plugins_datasource_dashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/dashboard/index.ts");
/* harmony import */ var _state_updateQueries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/query/state/updateQueries.ts");
/* harmony import */ var _QueryActionComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/query/components/QueryActionComponent.ts");
/* harmony import */ var _QueryEditorRows__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/query/components/QueryEditorRows.tsx");
/* harmony import */ var _QueryGroupOptions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/query/components/QueryGroupOptions.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _span;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















class QueryGroup extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "backendSrv", app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_8__.backendSrv);

    _defineProperty(this, "dataSourceSrv", (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getDataSourceSrv)());

    _defineProperty(this, "querySubscription", null);

    _defineProperty(this, "state", {
      isLoadingHelp: false,
      helpContent: null,
      isPickerOpen: false,
      isAddingMixed: false,
      isHelpOpen: false,
      queries: [],
      data: {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.NotStarted,
        series: [],
        timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDefaultTimeRange)()
      }
    });

    _defineProperty(this, "onChangeDataSource", async newSettings => {
      const {
        dsSettings
      } = this.state;
      const currentDS = dsSettings ? await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getDataSourceSrv)().get(dsSettings.uid) : undefined;
      const nextDS = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getDataSourceSrv)().get(newSettings.uid); // We need to pass in newSettings.uid as well here as that can be a variable expression and we want to store that in the query model not the current ds variable value

      const queries = await (0,_state_updateQueries__WEBPACK_IMPORTED_MODULE_12__.updateQueries)(nextDS, newSettings.uid, this.state.queries, currentDS);
      const dataSource = await this.dataSourceSrv.get(newSettings.name);
      this.onChange({
        queries,
        dataSource: {
          name: newSettings.name,
          uid: newSettings.uid,
          type: newSettings.meta.id,
          default: newSettings.isDefault
        }
      });
      this.setState({
        queries,
        dataSource: dataSource,
        dsSettings: newSettings
      });
    });

    _defineProperty(this, "onAddQueryClick", () => {
      const {
        queries
      } = this.state;
      this.onQueriesChange((0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_9__.addQuery)(queries, this.newQuery()));
      this.onScrollBottom();
    });

    _defineProperty(this, "onAddExpressionClick", () => {
      this.onQueriesChange((0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_9__.addQuery)(this.state.queries, app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_10__.dataSource.newQuery()));
      this.onScrollBottom();
    });

    _defineProperty(this, "onScrollBottom", () => {
      setTimeout(() => {
        if (this.state.scrollElement) {
          this.state.scrollElement.scrollTo({
            top: 10000
          });
        }
      }, 20);
    });

    _defineProperty(this, "onUpdateAndRun", options => {
      this.props.onOptionsChange(options);
      this.props.onRunQueries();
    });

    _defineProperty(this, "onOpenHelp", () => {
      this.setState({
        isHelpOpen: true
      });
    });

    _defineProperty(this, "onCloseHelp", () => {
      this.setState({
        isHelpOpen: false
      });
    });

    _defineProperty(this, "renderMixedPicker", () => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.DataSourcePicker, {
        mixed: false,
        onChange: this.onAddMixedQuery,
        current: null,
        autoFocus: true,
        variables: true,
        onBlur: this.onMixedPickerBlur,
        openMenuOnFocus: true
      });
    });

    _defineProperty(this, "onAddMixedQuery", datasource => {
      this.onAddQuery({
        datasource: datasource.name
      });
      this.setState({
        isAddingMixed: false
      });
    });

    _defineProperty(this, "onMixedPickerBlur", () => {
      this.setState({
        isAddingMixed: false
      });
    });

    _defineProperty(this, "onAddQuery", query => {
      const {
        dsSettings,
        queries
      } = this.state;
      this.onQueriesChange((0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_9__.addQuery)(queries, query, {
        type: dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.type,
        uid: dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.uid
      }));
      this.onScrollBottom();
    });

    _defineProperty(this, "onQueriesChange", queries => {
      this.onChange({
        queries
      });
      this.setState({
        queries
      });
    });

    _defineProperty(this, "setScrollRef", scrollElement => {
      this.setState({
        scrollElement
      });
    });
  }

  async componentDidMount() {
    const {
      queryRunner,
      options
    } = this.props;
    this.querySubscription = queryRunner.getData({
      withTransforms: false,
      withFieldConfig: false
    }).subscribe({
      next: data => this.onPanelDataUpdate(data)
    });

    try {
      const ds = await this.dataSourceSrv.get(options.dataSource);
      const dsSettings = this.dataSourceSrv.getInstanceSettings(options.dataSource);
      const defaultDataSource = await this.dataSourceSrv.get();
      const datasource = ds.getRef();
      const queries = options.queries.map(q => q.datasource ? q : Object.assign({}, q, {
        datasource
      }));
      this.setState({
        queries,
        dataSource: ds,
        dsSettings,
        defaultDataSource
      });
    } catch (error) {
      console.log('failed to load data source', error);
    }
  }

  componentWillUnmount() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
      this.querySubscription = null;
    }
  }

  onPanelDataUpdate(data) {
    this.setState({
      data
    });
  }

  newQuery() {
    var _this$state$dataSourc, _this$state$dataSourc2;

    const {
      dsSettings,
      defaultDataSource
    } = this.state;
    const ds = !(dsSettings !== null && dsSettings !== void 0 && dsSettings.meta.mixed) ? dsSettings : defaultDataSource;
    return Object.assign({}, (_this$state$dataSourc = this.state.dataSource) === null || _this$state$dataSourc === void 0 ? void 0 : (_this$state$dataSourc2 = _this$state$dataSourc.getDefaultQuery) === null || _this$state$dataSourc2 === void 0 ? void 0 : _this$state$dataSourc2.call(_this$state$dataSourc, _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.PanelEditor), {
      datasource: {
        uid: ds === null || ds === void 0 ? void 0 : ds.uid,
        type: ds === null || ds === void 0 ? void 0 : ds.type
      }
    });
  }

  onChange(changedProps) {
    this.props.onOptionsChange(Object.assign({}, this.props.options, changedProps));
  }

  renderTopSection(styles) {
    const {
      onOpenQueryInspector,
      options
    } = this.props;
    const {
      dataSource,
      data
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: styles.dataSourceRow,
        children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFormLabel, {
          htmlFor: "data-source-picker",
          width: 'auto',
          children: "Data source"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: styles.dataSourceRowItem,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.DataSourcePicker, {
            onChange: this.onChangeDataSource,
            current: options.dataSource,
            metrics: true,
            mixed: true,
            dashboard: true,
            variables: true
          })
        }), dataSource && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: styles.dataSourceRowItem,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
              variant: "secondary",
              icon: "question-circle",
              title: "Open data source help",
              onClick: this.onOpenHelp
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: styles.dataSourceRowItemOptions,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_QueryGroupOptions__WEBPACK_IMPORTED_MODULE_15__.QueryGroupOptionsEditor, {
              options: options,
              dataSource: dataSource,
              data: data,
              onChange: this.onUpdateAndRun
            })
          }), onOpenQueryInspector && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: styles.dataSourceRowItem,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
              variant: "secondary",
              onClick: onOpenQueryInspector,
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.QueryTab.queryInspectorButton,
              children: "Query inspector"
            })
          })]
        })]
      })
    });
  }

  renderQueries(dsSettings) {
    const {
      onRunQueries
    } = this.props;
    const {
      data,
      queries
    } = this.state;

    if ((0,app_plugins_datasource_dashboard__WEBPACK_IMPORTED_MODULE_11__.isSharedDashboardQuery)(dsSettings.name)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(app_plugins_datasource_dashboard__WEBPACK_IMPORTED_MODULE_11__.DashboardQueryEditor, {
        queries: queries,
        panelData: data,
        onChange: this.onQueriesChange,
        onRunQueries: onRunQueries
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.QueryTab.content,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_QueryEditorRows__WEBPACK_IMPORTED_MODULE_14__.QueryEditorRows, {
        queries: queries,
        dsSettings: dsSettings,
        onQueriesChange: this.onQueriesChange,
        onAddQuery: this.onAddQuery,
        onRunQueries: onRunQueries,
        data: data
      })
    });
  }

  isExpressionsSupported(dsSettings) {
    return (dsSettings.meta.alerting || dsSettings.meta.mixed) === true;
  }

  renderExtraActions() {
    return _QueryActionComponent__WEBPACK_IMPORTED_MODULE_13__.GroupActionComponents.getAllExtraRenderAction().map((action, index) => action({
      onAddQuery: this.onAddQuery,
      onChangeDataSource: this.onChangeDataSource,
      key: index
    })).filter(Boolean);
  }

  renderAddQueryRow(dsSettings, styles) {
    const {
      isAddingMixed
    } = this.state;
    const showAddButton = !(isAddingMixed || (0,app_plugins_datasource_dashboard__WEBPACK_IMPORTED_MODULE_11__.isSharedDashboardQuery)(dsSettings.name));
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.HorizontalGroup, {
      spacing: "md",
      align: "flex-start",
      children: [showAddButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        icon: "plus",
        onClick: this.onAddQueryClick,
        variant: "secondary",
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.QueryTab.addQuery,
        children: "Query"
      }), app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"].expressionsEnabled && this.isExpressionsSupported(dsSettings) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        icon: "plus",
        onClick: this.onAddExpressionClick,
        variant: "secondary",
        className: styles.expressionButton,
        children: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
          children: "Expression\xA0"
        }))
      }), this.renderExtraActions()]
    });
  }

  render() {
    const {
      isHelpOpen,
      dsSettings
    } = this.state;
    const styles = getStyles();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CustomScrollbar, {
      autoHeightMin: "100%",
      scrollRefCallback: this.setScrollRef,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: styles.innerWrapper,
        children: [this.renderTopSection(styles), dsSettings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: styles.queriesWrapper,
            children: this.renderQueries(dsSettings)
          }), this.renderAddQueryRow(dsSettings, styles), isHelpOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal, {
            title: "Data source help",
            isOpen: true,
            onDismiss: this.onCloseHelp,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(app_core_components_PluginHelp_PluginHelp__WEBPACK_IMPORTED_MODULE_6__.PluginHelp, {
              plugin: dsSettings.meta,
              type: "query_help"
            })
          })]
        })]
      })
    });
  }

}
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.stylesFactory)(() => {
  const {
    theme
  } = app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"];
  return {
    innerWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      padding: ${theme.spacing.md};
    `,
    dataSourceRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      margin-bottom: ${theme.spacing.md};
    `,
    dataSourceRowItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing.inlineFormMargin};
    `,
    dataSourceRowItemOptions: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
      margin-right: ${theme.spacing.inlineFormMargin};
    `,
    queriesWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding-bottom: 16px;
    `,
    expressionWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css``,
    expressionButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing.sm};
    `
  };
});

/***/ }),

/***/ "./public/app/features/query/components/QueryGroupOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryGroupOptionsEditor": () => (/* binding */ QueryGroupOptionsEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _div, _div2, _InlineFormLabel2, _InlineFormLabel3, _div3, _div4, _InlineFormLabel4, _span;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class QueryGroupOptionsEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    var _options$timeRange6, _options$timeRange7, _options$timeRange$hi, _options$timeRange8;

    super(props);

    _defineProperty(this, "onRelativeTimeChange", event => {
      this.setState({
        timeRangeFrom: event.target.value
      });
    });

    _defineProperty(this, "onTimeShiftChange", event => {
      this.setState({
        timeRangeShift: event.target.value
      });
    });

    _defineProperty(this, "onOverrideTime", event => {
      var _options$timeRange;

      const {
        options,
        onChange
      } = this.props;
      const newValue = emptyToNull(event.target.value);
      const isValid = timeRangeValidation(newValue);

      if (isValid && ((_options$timeRange = options.timeRange) === null || _options$timeRange === void 0 ? void 0 : _options$timeRange.from) !== newValue) {
        var _options$timeRange2;

        onChange(Object.assign({}, options, {
          timeRange: Object.assign({}, (_options$timeRange2 = options.timeRange) !== null && _options$timeRange2 !== void 0 ? _options$timeRange2 : {}, {
            from: newValue
          })
        }));
      }

      this.setState({
        relativeTimeIsValid: isValid
      });
    });

    _defineProperty(this, "onTimeShift", event => {
      var _options$timeRange3;

      const {
        options,
        onChange
      } = this.props;
      const newValue = emptyToNull(event.target.value);
      const isValid = timeRangeValidation(newValue);

      if (isValid && ((_options$timeRange3 = options.timeRange) === null || _options$timeRange3 === void 0 ? void 0 : _options$timeRange3.shift) !== newValue) {
        var _options$timeRange4;

        onChange(Object.assign({}, options, {
          timeRange: Object.assign({}, (_options$timeRange4 = options.timeRange) !== null && _options$timeRange4 !== void 0 ? _options$timeRange4 : {}, {
            shift: newValue
          })
        }));
      }

      this.setState({
        timeShiftIsValid: isValid
      });
    });

    _defineProperty(this, "onToggleTimeOverride", () => {
      const {
        onChange,
        options
      } = this.props;
      this.setState({
        timeRangeHide: !this.state.timeRangeHide
      }, () => {
        var _options$timeRange5;

        onChange(Object.assign({}, options, {
          timeRange: Object.assign({}, (_options$timeRange5 = options.timeRange) !== null && _options$timeRange5 !== void 0 ? _options$timeRange5 : {}, {
            hide: this.state.timeRangeHide
          })
        }));
      });
    });

    _defineProperty(this, "onCacheTimeoutBlur", event => {
      const {
        options,
        onChange
      } = this.props;
      onChange(Object.assign({}, options, {
        cacheTimeout: emptyToNull(event.target.value)
      }));
    });

    _defineProperty(this, "onMaxDataPointsBlur", event => {
      const {
        options,
        onChange
      } = this.props;
      let maxDataPoints = parseInt(event.target.value, 10);

      if (isNaN(maxDataPoints) || maxDataPoints === 0) {
        maxDataPoints = null;
      }

      if (maxDataPoints !== options.maxDataPoints) {
        onChange(Object.assign({}, options, {
          maxDataPoints
        }));
      }
    });

    _defineProperty(this, "onMinIntervalBlur", event => {
      const {
        options,
        onChange
      } = this.props;
      const minInterval = emptyToNull(event.target.value);

      if (minInterval !== options.minInterval) {
        onChange(Object.assign({}, options, {
          minInterval
        }));
      }
    });

    _defineProperty(this, "onOpenOptions", () => {
      this.setState({
        isOpen: true
      });
    });

    _defineProperty(this, "onCloseOptions", () => {
      this.setState({
        isOpen: false
      });
    });

    const {
      options: _options
    } = props;
    this.state = {
      timeRangeFrom: ((_options$timeRange6 = _options.timeRange) === null || _options$timeRange6 === void 0 ? void 0 : _options$timeRange6.from) || '',
      timeRangeShift: ((_options$timeRange7 = _options.timeRange) === null || _options$timeRange7 === void 0 ? void 0 : _options$timeRange7.shift) || '',
      timeRangeHide: (_options$timeRange$hi = (_options$timeRange8 = _options.timeRange) === null || _options$timeRange8 === void 0 ? void 0 : _options$timeRange8.hide) !== null && _options$timeRange$hi !== void 0 ? _options$timeRange$hi : false,
      isOpen: false,
      relativeTimeIsValid: true,
      timeShiftIsValid: true
    };
  }

  renderCacheTimeoutOption() {
    var _dataSource$meta$quer, _options$cacheTimeout;

    const {
      dataSource,
      options
    } = this.props;
    const tooltip = `If your time series store has a query cache this option can override the default cache timeout. Specify a
    numeric value in seconds.`;

    if (!((_dataSource$meta$quer = dataSource.meta.queryOptions) !== null && _dataSource$meta$quer !== void 0 && _dataSource$meta$quer.cacheTimeout)) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-inline",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
          width: 9,
          tooltip: tooltip,
          children: "Cache timeout"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          type: "text",
          className: "width-6",
          placeholder: "60",
          spellCheck: false,
          onBlur: this.onCacheTimeoutBlur,
          defaultValue: (_options$cacheTimeout = options.cacheTimeout) !== null && _options$cacheTimeout !== void 0 ? _options$cacheTimeout : ''
        })]
      })
    });
  }

  renderMaxDataPointsOption() {
    var _data$request, _options$maxDataPoint;

    const {
      data,
      options
    } = this.props;
    const realMd = (_data$request = data.request) === null || _data$request === void 0 ? void 0 : _data$request.maxDataPoints;
    const value = (_options$maxDataPoint = options.maxDataPoints) !== null && _options$maxDataPoint !== void 0 ? _options$maxDataPoint : '';
    const isAuto = value === '';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-inline",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
          width: 9,
          tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: "The maximum data points per series. Used directly by some data sources and used in calculation of auto interval. With streaming data this value is used for the rolling buffer."
          }),
          children: "Max data points"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          type: "number",
          className: "width-6",
          placeholder: `${realMd}`,
          spellCheck: false,
          onBlur: this.onMaxDataPointsBlur,
          defaultValue: value
        }), isAuto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-label query-segment-operator",
            children: "="
          })), _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-label",
            children: "Width of panel"
          }))]
        })]
      })
    });
  }

  renderIntervalOption() {
    var _data$request2, _dataSource$interval, _options$minInterval;

    const {
      data,
      dataSource,
      options
    } = this.props;
    const realInterval = (_data$request2 = data.request) === null || _data$request2 === void 0 ? void 0 : _data$request2.interval;
    const minIntervalOnDs = (_dataSource$interval = dataSource.interval) !== null && _dataSource$interval !== void 0 ? _dataSource$interval : 'No limit';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel2 || (_InlineFormLabel2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            width: 9,
            tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: ["A lower limit for the interval. Recommended to be set to write frequency, for example ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                children: "1m"
              }), ' ', "if your data is written every minute. Default value can be set in data source settings for most data sources."]
            }),
            children: "Min interval"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
            type: "text",
            className: "width-6",
            placeholder: `${minIntervalOnDs}`,
            spellCheck: false,
            onBlur: this.onMinIntervalBlur,
            defaultValue: (_options$minInterval = options.minInterval) !== null && _options$minInterval !== void 0 ? _options$minInterval : ''
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel3 || (_InlineFormLabel3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            width: 9,
            tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: ["The evaluated interval that is sent to data source and is used in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                children: "$__interval"
              }), " and", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                children: "$__interval_ms"
              })]
            }),
            children: "Interval"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            width: 6,
            children: realInterval
          }), _div3 || (_div3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-label query-segment-operator",
            children: "="
          })), _div4 || (_div4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-label",
            children: "Time range / max data points"
          }))]
        })
      })]
    });
  }

  renderCollapsedText(styles) {
    var _options$maxDataPoint2;

    const {
      data,
      options
    } = this.props;
    const {
      isOpen
    } = this.state;

    if (isOpen) {
      return undefined;
    }

    let mdDesc = (_options$maxDataPoint2 = options.maxDataPoints) !== null && _options$maxDataPoint2 !== void 0 ? _options$maxDataPoint2 : '';

    if (mdDesc === '' && data.request) {
      mdDesc = `auto = ${data.request.maxDataPoints}`;
    }

    let intervalDesc = options.minInterval;

    if (data.request) {
      intervalDesc = `${data.request.interval}`;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.collapsedText,
        children: ["MD = ", mdDesc]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.collapsedText,
        children: ["Interval = ", intervalDesc]
      })]
    });
  }

  render() {
    const {
      timeRangeHide: hideTimeOverride,
      relativeTimeIsValid,
      timeShiftIsValid
    } = this.state;
    const {
      timeRangeFrom: relativeTime,
      timeRangeShift: timeShift,
      isOpen
    } = this.state;
    const styles = getStyles();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_4__.QueryOperationRow, {
      id: "Query options",
      index: 0,
      title: "Query options",
      headerElement: this.renderCollapsedText(styles),
      isOpen: isOpen,
      onOpen: this.onOpenOptions,
      onClose: this.onCloseOptions,
      children: [this.renderMaxDataPointsOption(), this.renderIntervalOption(), this.renderCacheTimeoutOption(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [_InlineFormLabel4 || (_InlineFormLabel4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
          width: 9,
          children: "Relative time"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          type: "text",
          className: "width-6",
          placeholder: "1h",
          onChange: this.onRelativeTimeChange,
          onBlur: this.onOverrideTime,
          invalid: !relativeTimeIsValid,
          value: relativeTime
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "gf-form-label width-9",
          children: "Time shift"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          type: "text",
          className: "width-6",
          placeholder: "1h",
          onChange: this.onTimeShiftChange,
          onBlur: this.onTimeShift,
          invalid: !timeShiftIsValid,
          value: timeShift
        })]
      }), (timeShift || relativeTime) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Hide time info",
          labelWidth: 18,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, {
            value: hideTimeOverride,
            onChange: this.onToggleTimeOverride
          })
        })
      })]
    });
  }

}

const timeRangeValidation = value => {
  if (!value) {
    return true;
  }

  return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.isValidTimeSpan(value);
};

const emptyToNull = value => {
  return value === '' ? null : value;
};

const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.stylesFactory)(() => {
  const {
    theme
  } = app_core_config__WEBPACK_IMPORTED_MODULE_5__.config;
  return {
    collapsedText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing.md};
      font-size: ${theme.typography.size.sm};
      color: ${theme.colors.textWeak};
    `
  };
});

/***/ }),

/***/ "./public/app/features/query/state/updateQueries.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateQueries": () => (/* binding */ updateQueries)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");


async function updateQueries(nextDS, nextDSUidOrVariableExpression, queries, currentDS) {
  let nextQueries = queries;
  const datasource = {
    type: nextDS.type,
    uid: nextDSUidOrVariableExpression
  }; // we are changing data source type

  if ((currentDS === null || currentDS === void 0 ? void 0 : currentDS.meta.id) !== nextDS.meta.id) {
    // If changing to mixed do nothing
    if (nextDS.meta.mixed) {
      return queries;
    } // when both data sources support abstract queries
    else if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.hasQueryExportSupport)(currentDS) && (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.hasQueryImportSupport)(nextDS)) {
      const abstractQueries = await currentDS.exportToAbstractQueries(queries);
      nextQueries = await nextDS.importFromAbstractQueries(abstractQueries);
    } // when datasource supports query import
    else if (currentDS && nextDS.importQueries) {
      nextQueries = await nextDS.importQueries(queries, currentDS);
    } // Otherwise clear queries
    else {
      return [{
        refId: 'A',
        datasource
      }];
    }
  }

  if (nextQueries.length === 0) {
    return [{
      refId: 'A',
      datasource
    }];
  } // Set data source on all queries except expression queries


  return nextQueries.map(query => {
    if (!(0,_grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_1__.isExpressionReference)(query.datasource) && !nextDS.meta.mixed) {
      query.datasource = datasource;
    }

    return query;
  });
}

/***/ }),

/***/ "./public/app/features/sandbox/TestStuffPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestStuffPage": () => (/* binding */ TestStuffPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getDefaultState": () => (/* binding */ getDefaultState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useObservable.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _panel_components_PanelRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/panel/components/PanelRenderer.tsx");
/* harmony import */ var _query_components_QueryGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/query/components/QueryGroup.tsx");
/* harmony import */ var _query_state_PanelQueryRunner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/query/state/PanelQueryRunner.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













const TestStuffPage = () => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getDefaultState());
  const {
    queryOptions,
    queryRunner
  } = state;

  const onRunQueries = () => {
    var _queryOptions$maxData;

    const timeRange = {
      from: 'now-1h',
      to: 'now'
    };
    queryRunner.run({
      queries: queryOptions.queries,
      datasource: queryOptions.dataSource,
      timezone: 'browser',
      timeRange: {
        from: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateMath.parse(timeRange.from),
        to: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateMath.parse(timeRange.to),
        raw: timeRange
      },
      maxDataPoints: (_queryOptions$maxData = queryOptions.maxDataPoints) !== null && _queryOptions$maxData !== void 0 ? _queryOptions$maxData : 100,
      minInterval: queryOptions.minInterval
    });
  };

  const onOptionsChange = queryOptions => {
    setState(Object.assign({}, state, {
      queryOptions
    }));
  };
  /**
   * Subscribe to data
   */


  const observable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => queryRunner.getData({
    withFieldConfig: true,
    withTransforms: true
  }), [queryRunner]);
  const data = (0,react_use__WEBPACK_IMPORTED_MODULE_11__["default"])(observable);
  const node = {
    id: 'test-page',
    text: 'Test page',
    icon: 'dashboard',
    subTitle: 'FOR TESTING!',
    url: 'sandbox/test'
  };
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.useAppNotification)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navModel: {
      node: node,
      main: node
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"].Contents, {
      children: [data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__["default"], {
        style: {
          width: '100%',
          height: '600px'
        },
        children: ({
          width
        }) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_panel_components_PanelRenderer__WEBPACK_IMPORTED_MODULE_7__.PanelRenderer, {
              title: "Hello",
              pluginId: "timeseries",
              width: width,
              height: 300,
              data: data,
              options: {},
              fieldConfig: {
                defaults: {},
                overrides: []
              },
              timeZone: "browser"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Table, {
              data: data.series[0],
              width: width,
              height: 300
            })]
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        style: {
          marginTop: '16px',
          height: '45%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_query_components_QueryGroup__WEBPACK_IMPORTED_MODULE_8__.QueryGroup, {
          options: queryOptions,
          queryRunner: queryRunner,
          onRunQueries: onRunQueries,
          onOptionsChange: onOptionsChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        style: {
          display: 'flex',
          gap: '1em'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: () => notifyApp.success('Success toast', 'some more text goes here'),
          variant: "primary",
          children: "Success"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: () => notifyApp.warning('Warning toast', 'some more text goes here', 'bogus-trace-99999'),
          variant: "secondary",
          children: "Warning"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: () => notifyApp.error('Error toast', 'some more text goes here', 'bogus-trace-fdsfdfsfds'),
          variant: "destructive",
          children: "Error"
        })]
      })]
    })
  });
};
function getDefaultState() {
  const options = {
    fieldConfig: {
      defaults: {
        color: {
          mode: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldColorModeId.PaletteClassic
        }
      },
      overrides: []
    },
    replaceVariables: v => v,
    theme: app_core_config__WEBPACK_IMPORTED_MODULE_4__.config.theme2
  };
  const dataConfig = {
    getTransformations: () => [],
    getFieldOverrideOptions: () => options,
    getDataSupport: () => ({
      annotations: false,
      alertStates: false
    })
  };
  return {
    queryRunner: new _query_state_PanelQueryRunner__WEBPACK_IMPORTED_MODULE_9__.PanelQueryRunner(dataConfig),
    queryOptions: {
      queries: [],
      dataSource: {
        name: 'gdev-testdata'
      },
      maxDataPoints: 100
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestStuffPage);

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useObservable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue), value = _a[0], update = _a[1];
    (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useObservable);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixFQUFFLE1BQU03SyxPQUZkO0lBR2pCOEssY0FBYyxFQUFFLE9BQU87TUFBRUMsV0FBVyxFQUFFLEtBQWY7TUFBc0JDLFdBQVcsRUFBRTtJQUFuQyxDQUFQO0VBSEMsQ0FBbkI7RUFNQSxPQUFPO0lBQ0w1SyxXQUFXLEVBQUUsSUFBSXVJLDJFQUFKLENBQXFCZ0MsVUFBckIsQ0FEUjtJQUVMbEYsWUFBWSxFQUFFO01BQ1p6TCxPQUFPLEVBQUUsRUFERztNQUVac0IsVUFBVSxFQUFFO1FBQ1ZnRSxJQUFJLEVBQUU7TUFESSxDQUZBO01BS1o0RixhQUFhLEVBQUU7SUFMSDtFQUZULENBQVA7QUFVRDtBQUVELGlFQUFlMEQsYUFBZjs7Ozs7Ozs7Ozs7OztBQ3ZKaUM7QUFDbUM7QUFDcEU7QUFDQSxhQUFhLCtDQUFRO0FBQ3JCLElBQUksc0VBQXlCO0FBQzdCO0FBQ0EsNkJBQTZCO0FBQzdCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1BsdWdpbkhlbHAvUGx1Z2luSGVscC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcXVlcnkvY29tcG9uZW50cy9RdWVyeUVkaXRvclJvd3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3F1ZXJ5L2NvbXBvbmVudHMvUXVlcnlHcm91cC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcXVlcnkvY29tcG9uZW50cy9RdWVyeUdyb3VwT3B0aW9ucy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcXVlcnkvc3RhdGUvdXBkYXRlUXVlcmllcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zYW5kYm94L1Rlc3RTdHVmZlBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC11c2UtdmlydHVhbC1jZWE4ZTgyNmRjLzAvY2FjaGUvcmVhY3QtdXNlLW5wbS0xNy40LjAtMGVmNDUyMTU0NC0wODg5ZGE5MTliLnppcC9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VPYnNlcnZhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyByZW5kZXJNYXJrZG93biB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwbHVnaW46IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaWQ6IHN0cmluZztcbiAgfTtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpc0Vycm9yOiBib29sZWFuO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGhlbHA6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBsdWdpbkhlbHAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHtcbiAgICBpc0Vycm9yOiBmYWxzZSxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIGhlbHA6ICcnLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZEhlbHAoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdFBsYWNlaG9sZGVySW5mbygpIHtcbiAgICByZXR1cm4gJ05vIHBsdWdpbiBoZWxwIG9yIHJlYWRtZSBtYXJrZG93biBmaWxlIHdhcyBmb3VuZCc7XG4gIH1cblxuICBsb2FkSGVscCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBsdWdpbiwgdHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xuXG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAuZ2V0KGAvYXBpL3BsdWdpbnMvJHtwbHVnaW4uaWR9L21hcmtkb3duLyR7dHlwZX1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgaGVscEh0bWwgPSByZW5kZXJNYXJrZG93bihyZXNwb25zZSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlID09PSAnJyAmJiB0eXBlID09PSAnaGVscCcpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGhlbHA6IHRoaXMuY29uc3RydWN0UGxhY2Vob2xkZXJJbmZvKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0Vycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBoZWxwOiBoZWxwSHRtbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzRXJyb3I6IHRydWUsXG4gICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNFcnJvciwgaXNMb2FkaW5nLCBoZWxwIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIDxoMj5Mb2FkaW5nIGhlbHAuLi48L2gyPjtcbiAgICB9XG5cbiAgICBpZiAoaXNFcnJvcikge1xuICAgICAgcmV0dXJuIDxoMz4mYXBvcztFcnJvciBvY2N1cnJlZCB3aGVuIGxvYWRpbmcgaGVscCZhcG9zOzwvaDM+O1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAncGFuZWxfaGVscCcgJiYgaGVscCA9PT0gJycpIHtcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93bi1odG1sXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBoZWxwIH19IC8+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ1N0YXJ0LCBEcm9wcGFibGUsIERyb3BSZXN1bHQgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcblxuaW1wb3J0IHtcbiAgQ29yZUFwcCxcbiAgRGF0YVF1ZXJ5LFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgRGF0YVNvdXJjZVJlZixcbiAgRXZlbnRCdXNFeHRlbmRlZCxcbiAgSGlzdG9yeUl0ZW0sXG4gIFBhbmVsRGF0YSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlU3J2LCByZXBvcnRJbnRlcmFjdGlvbiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4vUXVlcnlFZGl0b3JSb3cnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvLyBUaGUgcXVlcnkgY29uZmlndXJhdGlvblxuICBxdWVyaWVzOiBEYXRhUXVlcnlbXTtcbiAgZHNTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M7XG5cbiAgLy8gUXVlcnkgZWRpdGluZ1xuICBvblF1ZXJpZXNDaGFuZ2U6IChxdWVyaWVzOiBEYXRhUXVlcnlbXSkgPT4gdm9pZDtcbiAgb25BZGRRdWVyeTogKHF1ZXJ5OiBEYXRhUXVlcnkpID0+IHZvaWQ7XG4gIG9uUnVuUXVlcmllczogKCkgPT4gdm9pZDtcblxuICAvLyBRdWVyeSBSZXNwb25zZSBEYXRhXG4gIGRhdGE6IFBhbmVsRGF0YTtcblxuICAvLyBNaXNjXG4gIGFwcD86IENvcmVBcHA7XG4gIGhpc3Rvcnk/OiBBcnJheTxIaXN0b3J5SXRlbTxEYXRhUXVlcnk+PjtcbiAgZXZlbnRCdXM/OiBFdmVudEJ1c0V4dGVuZGVkO1xufVxuXG5leHBvcnQgY2xhc3MgUXVlcnlFZGl0b3JSb3dzIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBvblJlbW92ZVF1ZXJ5ID0gKHF1ZXJ5OiBEYXRhUXVlcnkpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uUXVlcmllc0NoYW5nZSh0aGlzLnByb3BzLnF1ZXJpZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBxdWVyeSkpO1xuICB9O1xuXG4gIG9uQ2hhbmdlUXVlcnkocXVlcnk6IERhdGFRdWVyeSwgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHsgcXVlcmllcywgb25RdWVyaWVzQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gdXBkYXRlIHF1ZXJ5IGluIGFycmF5XG4gICAgb25RdWVyaWVzQ2hhbmdlKFxuICAgICAgcXVlcmllcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICBpZiAoaXRlbUluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG9uRGF0YVNvdXJjZUNoYW5nZShkYXRhU291cmNlOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHsgcXVlcmllcywgb25RdWVyaWVzQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgb25RdWVyaWVzQ2hhbmdlKFxuICAgICAgcXVlcmllcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICBpZiAoaXRlbUluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZVJlZjogRGF0YVNvdXJjZVJlZiA9IHtcbiAgICAgICAgICB0eXBlOiBkYXRhU291cmNlLnR5cGUsXG4gICAgICAgICAgdWlkOiBkYXRhU291cmNlLnVpZCxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaXRlbS5kYXRhc291cmNlKSB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXMgPSBnZXREYXRhU291cmNlU3J2KCkuZ2V0SW5zdGFuY2VTZXR0aW5ncyhpdGVtLmRhdGFzb3VyY2UpO1xuXG4gICAgICAgICAgaWYgKHByZXZpb3VzPy50eXBlID09PSBkYXRhU291cmNlLnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2U6IGRhdGFTb3VyY2VSZWYsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVmSWQ6IGl0ZW0ucmVmSWQsXG4gICAgICAgICAgaGlkZTogaXRlbS5oaWRlLFxuICAgICAgICAgIGRhdGFzb3VyY2U6IGRhdGFTb3VyY2VSZWYsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvbkRyYWdTdGFydCA9IChyZXN1bHQ6IERyYWdTdGFydCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcywgZHNTZXR0aW5ncyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJlcG9ydEludGVyYWN0aW9uKCdxdWVyeV9yb3dfcmVvcmRlcl9zdGFydGVkJywge1xuICAgICAgc3RhcnRJbmRleDogcmVzdWx0LnNvdXJjZS5pbmRleCxcbiAgICAgIG51bWJlck9mUXVlcmllczogcXVlcmllcy5sZW5ndGgsXG4gICAgICBkYXRhc291cmNlVHlwZTogZHNTZXR0aW5ncy50eXBlLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uRHJhZ0VuZCA9IChyZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJpZXMsIG9uUXVlcmllc0NoYW5nZSwgZHNTZXR0aW5ncyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuZGVzdGluYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gcmVzdWx0LnNvdXJjZS5pbmRleDtcbiAgICBjb25zdCBlbmRJbmRleCA9IHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleDtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gZW5kSW5kZXgpIHtcbiAgICAgIHJlcG9ydEludGVyYWN0aW9uKCdxdWVyeV9yb3dfcmVvcmRlcl9jYW5jZWxlZCcsIHtcbiAgICAgICAgc3RhcnRJbmRleCxcbiAgICAgICAgZW5kSW5kZXgsXG4gICAgICAgIG51bWJlck9mUXVlcmllczogcXVlcmllcy5sZW5ndGgsXG4gICAgICAgIGRhdGFzb3VyY2VUeXBlOiBkc1NldHRpbmdzLnR5cGUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGUgPSBBcnJheS5mcm9tKHF1ZXJpZXMpO1xuICAgIGNvbnN0IFtyZW1vdmVkXSA9IHVwZGF0ZS5zcGxpY2Uoc3RhcnRJbmRleCwgMSk7XG4gICAgdXBkYXRlLnNwbGljZShlbmRJbmRleCwgMCwgcmVtb3ZlZCk7XG4gICAgb25RdWVyaWVzQ2hhbmdlKHVwZGF0ZSk7XG5cbiAgICByZXBvcnRJbnRlcmFjdGlvbigncXVlcnlfcm93X3Jlb3JkZXJfZW5kZWQnLCB7XG4gICAgICBzdGFydEluZGV4LFxuICAgICAgZW5kSW5kZXgsXG4gICAgICBudW1iZXJPZlF1ZXJpZXM6IHF1ZXJpZXMubGVuZ3RoLFxuICAgICAgZGF0YXNvdXJjZVR5cGU6IGRzU2V0dGluZ3MudHlwZSxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkc1NldHRpbmdzLCBkYXRhLCBxdWVyaWVzLCBhcHAsIGhpc3RvcnksIGV2ZW50QnVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9IG9uRHJhZ0VuZD17dGhpcy5vbkRyYWdFbmR9PlxuICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwidHJhbnNmb3JtYXRpb25zLWxpc3RcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgIHsocHJvdmlkZWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfT5cbiAgICAgICAgICAgICAgICB7cXVlcmllcy5tYXAoKHF1ZXJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVNvdXJjZVNldHRpbmdzID0gZ2V0RGF0YVNvdXJjZVNldHRpbmdzKHF1ZXJ5LCBkc1NldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG9uQ2hhbmdlRGF0YVNvdXJjZVNldHRpbmdzID0gZHNTZXR0aW5ncy5tZXRhLm1peGVkXG4gICAgICAgICAgICAgICAgICAgID8gKHNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncykgPT4gdGhpcy5vbkRhdGFTb3VyY2VDaGFuZ2Uoc2V0dGluZ3MsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXJ5RWRpdG9yUm93XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e3F1ZXJ5LnJlZklkfVxuICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3F1ZXJ5LnJlZklkfVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2VTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZURhdGFTb3VyY2U9e29uQ2hhbmdlRGF0YVNvdXJjZVNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocXVlcnkpID0+IHRoaXMub25DaGFuZ2VRdWVyeShxdWVyeSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlUXVlcnk9e3RoaXMub25SZW1vdmVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkFkZFF1ZXJ5PXt0aGlzLnByb3BzLm9uQWRkUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgb25SdW5RdWVyeT17dGhpcy5wcm9wcy5vblJ1blF1ZXJpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgcXVlcmllcz17cXVlcmllc31cbiAgICAgICAgICAgICAgICAgICAgICBhcHA9e2FwcH1cbiAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5PXtoaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzPXtldmVudEJ1c31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IGdldERhdGFTb3VyY2VTZXR0aW5ncyA9IChcbiAgcXVlcnk6IERhdGFRdWVyeSxcbiAgZ3JvdXBTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3Ncbik6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzID0+IHtcbiAgaWYgKCFxdWVyeS5kYXRhc291cmNlKSB7XG4gICAgcmV0dXJuIGdyb3VwU2V0dGluZ3M7XG4gIH1cbiAgY29uc3QgcXVlcnlTZXR0aW5ncyA9IGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHF1ZXJ5LmRhdGFzb3VyY2UpO1xuICByZXR1cm4gcXVlcnlTZXR0aW5ncyB8fCBncm91cFNldHRpbmdzO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIENvcmVBcHAsXG4gIERhdGFRdWVyeSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIGdldERlZmF1bHRUaW1lUmFuZ2UsXG4gIExvYWRpbmdTdGF0ZSxcbiAgUGFuZWxEYXRhLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBpY2tlciwgZ2V0RGF0YVNvdXJjZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBDdXN0b21TY3JvbGxiYXIsIEhvcml6b250YWxHcm91cCwgSW5saW5lRm9ybUxhYmVsLCBNb2RhbCwgc3R5bGVzRmFjdG9yeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFBsdWdpbkhlbHAgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BsdWdpbkhlbHAvUGx1Z2luSGVscCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBiYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHsgYWRkUXVlcnkgfSBmcm9tICdhcHAvY29yZS91dGlscy9xdWVyeSc7XG5pbXBvcnQgeyBkYXRhU291cmNlIGFzIGV4cHJlc3Npb25EYXRhc291cmNlIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL0V4cHJlc3Npb25EYXRhc291cmNlJztcbmltcG9ydCB7IERhc2hib2FyZFF1ZXJ5RWRpdG9yLCBpc1NoYXJlZERhc2hib2FyZFF1ZXJ5IH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9kYXNoYm9hcmQnO1xuaW1wb3J0IHsgUXVlcnlHcm91cE9wdGlvbnMgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBQYW5lbFF1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vc3RhdGUvUGFuZWxRdWVyeVJ1bm5lcic7XG5pbXBvcnQgeyB1cGRhdGVRdWVyaWVzIH0gZnJvbSAnLi4vc3RhdGUvdXBkYXRlUXVlcmllcyc7XG5cbmltcG9ydCB7IEdyb3VwQWN0aW9uQ29tcG9uZW50cyB9IGZyb20gJy4vUXVlcnlBY3Rpb25Db21wb25lbnQnO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3dzIH0gZnJvbSAnLi9RdWVyeUVkaXRvclJvd3MnO1xuaW1wb3J0IHsgUXVlcnlHcm91cE9wdGlvbnNFZGl0b3IgfSBmcm9tICcuL1F1ZXJ5R3JvdXBPcHRpb25zJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcXVlcnlSdW5uZXI6IFBhbmVsUXVlcnlSdW5uZXI7XG4gIG9wdGlvbnM6IFF1ZXJ5R3JvdXBPcHRpb25zO1xuICBvbk9wZW5RdWVyeUluc3BlY3Rvcj86ICgpID0+IHZvaWQ7XG4gIG9uUnVuUXVlcmllczogKCkgPT4gdm9pZDtcbiAgb25PcHRpb25zQ2hhbmdlOiAob3B0aW9uczogUXVlcnlHcm91cE9wdGlvbnMpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGRhdGFTb3VyY2U/OiBEYXRhU291cmNlQXBpO1xuICBkc1NldHRpbmdzPzogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M7XG4gIHF1ZXJpZXM6IERhdGFRdWVyeVtdO1xuICBoZWxwQ29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xuICBpc0xvYWRpbmdIZWxwOiBib29sZWFuO1xuICBpc1BpY2tlck9wZW46IGJvb2xlYW47XG4gIGlzQWRkaW5nTWl4ZWQ6IGJvb2xlYW47XG4gIGRhdGE6IFBhbmVsRGF0YTtcbiAgaXNIZWxwT3BlbjogYm9vbGVhbjtcbiAgZGVmYXVsdERhdGFTb3VyY2U/OiBEYXRhU291cmNlQXBpO1xuICBzY3JvbGxFbGVtZW50PzogSFRNTERpdkVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVyeUdyb3VwIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgYmFja2VuZFNydiA9IGJhY2tlbmRTcnY7XG4gIGRhdGFTb3VyY2VTcnYgPSBnZXREYXRhU291cmNlU3J2KCk7XG4gIHF1ZXJ5U3Vic2NyaXB0aW9uOiBVbnN1YnNjcmliYWJsZSB8IG51bGwgPSBudWxsO1xuXG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBpc0xvYWRpbmdIZWxwOiBmYWxzZSxcbiAgICBoZWxwQ29udGVudDogbnVsbCxcbiAgICBpc1BpY2tlck9wZW46IGZhbHNlLFxuICAgIGlzQWRkaW5nTWl4ZWQ6IGZhbHNlLFxuICAgIGlzSGVscE9wZW46IGZhbHNlLFxuICAgIHF1ZXJpZXM6IFtdLFxuICAgIGRhdGE6IHtcbiAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuTm90U3RhcnRlZCxcbiAgICAgIHNlcmllczogW10sXG4gICAgICB0aW1lUmFuZ2U6IGdldERlZmF1bHRUaW1lUmFuZ2UoKSxcbiAgICB9LFxuICB9O1xuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcXVlcnlSdW5uZXIsIG9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gcXVlcnlSdW5uZXIuZ2V0RGF0YSh7IHdpdGhUcmFuc2Zvcm1zOiBmYWxzZSwgd2l0aEZpZWxkQ29uZmlnOiBmYWxzZSB9KS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKGRhdGE6IFBhbmVsRGF0YSkgPT4gdGhpcy5vblBhbmVsRGF0YVVwZGF0ZShkYXRhKSxcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkcyA9IGF3YWl0IHRoaXMuZGF0YVNvdXJjZVNydi5nZXQob3B0aW9ucy5kYXRhU291cmNlKTtcbiAgICAgIGNvbnN0IGRzU2V0dGluZ3MgPSB0aGlzLmRhdGFTb3VyY2VTcnYuZ2V0SW5zdGFuY2VTZXR0aW5ncyhvcHRpb25zLmRhdGFTb3VyY2UpO1xuICAgICAgY29uc3QgZGVmYXVsdERhdGFTb3VyY2UgPSBhd2FpdCB0aGlzLmRhdGFTb3VyY2VTcnYuZ2V0KCk7XG4gICAgICBjb25zdCBkYXRhc291cmNlID0gZHMuZ2V0UmVmKCk7XG4gICAgICBjb25zdCBxdWVyaWVzID0gb3B0aW9ucy5xdWVyaWVzLm1hcCgocSkgPT4gKHEuZGF0YXNvdXJjZSA/IHEgOiB7IC4uLnEsIGRhdGFzb3VyY2UgfSkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHF1ZXJpZXMsIGRhdGFTb3VyY2U6IGRzLCBkc1NldHRpbmdzLCBkZWZhdWx0RGF0YVNvdXJjZSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBsb2FkIGRhdGEgc291cmNlJywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvblBhbmVsRGF0YVVwZGF0ZShkYXRhOiBQYW5lbERhdGEpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSB9KTtcbiAgfVxuXG4gIG9uQ2hhbmdlRGF0YVNvdXJjZSA9IGFzeW5jIChuZXdTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpID0+IHtcbiAgICBjb25zdCB7IGRzU2V0dGluZ3MgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY3VycmVudERTID0gZHNTZXR0aW5ncyA/IGF3YWl0IGdldERhdGFTb3VyY2VTcnYoKS5nZXQoZHNTZXR0aW5ncy51aWQpIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IG5leHREUyA9IGF3YWl0IGdldERhdGFTb3VyY2VTcnYoKS5nZXQobmV3U2V0dGluZ3MudWlkKTtcblxuICAgIC8vIFdlIG5lZWQgdG8gcGFzcyBpbiBuZXdTZXR0aW5ncy51aWQgYXMgd2VsbCBoZXJlIGFzIHRoYXQgY2FuIGJlIGEgdmFyaWFibGUgZXhwcmVzc2lvbiBhbmQgd2Ugd2FudCB0byBzdG9yZSB0aGF0IGluIHRoZSBxdWVyeSBtb2RlbCBub3QgdGhlIGN1cnJlbnQgZHMgdmFyaWFibGUgdmFsdWVcbiAgICBjb25zdCBxdWVyaWVzID0gYXdhaXQgdXBkYXRlUXVlcmllcyhuZXh0RFMsIG5ld1NldHRpbmdzLnVpZCwgdGhpcy5zdGF0ZS5xdWVyaWVzLCBjdXJyZW50RFMpO1xuXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGF3YWl0IHRoaXMuZGF0YVNvdXJjZVNydi5nZXQobmV3U2V0dGluZ3MubmFtZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICBxdWVyaWVzLFxuICAgICAgZGF0YVNvdXJjZToge1xuICAgICAgICBuYW1lOiBuZXdTZXR0aW5ncy5uYW1lLFxuICAgICAgICB1aWQ6IG5ld1NldHRpbmdzLnVpZCxcbiAgICAgICAgdHlwZTogbmV3U2V0dGluZ3MubWV0YS5pZCxcbiAgICAgICAgZGVmYXVsdDogbmV3U2V0dGluZ3MuaXNEZWZhdWx0LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcXVlcmllcyxcbiAgICAgIGRhdGFTb3VyY2U6IGRhdGFTb3VyY2UsXG4gICAgICBkc1NldHRpbmdzOiBuZXdTZXR0aW5ncyxcbiAgICB9KTtcbiAgfTtcblxuICBvbkFkZFF1ZXJ5Q2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBxdWVyaWVzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMub25RdWVyaWVzQ2hhbmdlKGFkZFF1ZXJ5KHF1ZXJpZXMsIHRoaXMubmV3UXVlcnkoKSkpO1xuICAgIHRoaXMub25TY3JvbGxCb3R0b20oKTtcbiAgfTtcblxuICBuZXdRdWVyeSgpOiBQYXJ0aWFsPERhdGFRdWVyeT4ge1xuICAgIGNvbnN0IHsgZHNTZXR0aW5ncywgZGVmYXVsdERhdGFTb3VyY2UgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBkcyA9ICFkc1NldHRpbmdzPy5tZXRhLm1peGVkID8gZHNTZXR0aW5ncyA6IGRlZmF1bHREYXRhU291cmNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuc3RhdGUuZGF0YVNvdXJjZT8uZ2V0RGVmYXVsdFF1ZXJ5Py4oQ29yZUFwcC5QYW5lbEVkaXRvciksXG4gICAgICBkYXRhc291cmNlOiB7IHVpZDogZHM/LnVpZCwgdHlwZTogZHM/LnR5cGUgfSxcbiAgICB9O1xuICB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlZFByb3BzOiBQYXJ0aWFsPFF1ZXJ5R3JvdXBPcHRpb25zPikge1xuICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHtcbiAgICAgIC4uLnRoaXMucHJvcHMub3B0aW9ucyxcbiAgICAgIC4uLmNoYW5nZWRQcm9wcyxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQWRkRXhwcmVzc2lvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMub25RdWVyaWVzQ2hhbmdlKGFkZFF1ZXJ5KHRoaXMuc3RhdGUucXVlcmllcywgZXhwcmVzc2lvbkRhdGFzb3VyY2UubmV3UXVlcnkoKSkpO1xuICAgIHRoaXMub25TY3JvbGxCb3R0b20oKTtcbiAgfTtcblxuICBvblNjcm9sbEJvdHRvbSA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNjcm9sbEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zY3JvbGxFbGVtZW50LnNjcm9sbFRvKHsgdG9wOiAxMDAwMCB9KTtcbiAgICAgIH1cbiAgICB9LCAyMCk7XG4gIH07XG5cbiAgb25VcGRhdGVBbmRSdW4gPSAob3B0aW9uczogUXVlcnlHcm91cE9wdGlvbnMpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLnByb3BzLm9uUnVuUXVlcmllcygpO1xuICB9O1xuXG4gIHJlbmRlclRvcFNlY3Rpb24oc3R5bGVzOiBRdWVyaWVzVGFiU3R5bGVzKSB7XG4gICAgY29uc3QgeyBvbk9wZW5RdWVyeUluc3BlY3Rvciwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIGRhdGEgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhU291cmNlUm93fT5cbiAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsIGh0bWxGb3I9XCJkYXRhLXNvdXJjZS1waWNrZXJcIiB3aWR0aD17J2F1dG8nfT5cbiAgICAgICAgICAgIERhdGEgc291cmNlXG4gICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhU291cmNlUm93SXRlbX0+XG4gICAgICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZURhdGFTb3VyY2V9XG4gICAgICAgICAgICAgIGN1cnJlbnQ9e29wdGlvbnMuZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgbWV0cmljcz17dHJ1ZX1cbiAgICAgICAgICAgICAgbWl4ZWQ9e3RydWV9XG4gICAgICAgICAgICAgIGRhc2hib2FyZD17dHJ1ZX1cbiAgICAgICAgICAgICAgdmFyaWFibGVzPXt0cnVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ZGF0YVNvdXJjZSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFTb3VyY2VSb3dJdGVtfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJPcGVuIGRhdGEgc291cmNlIGhlbHBcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbk9wZW5IZWxwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFTb3VyY2VSb3dJdGVtT3B0aW9uc30+XG4gICAgICAgICAgICAgICAgPFF1ZXJ5R3JvdXBPcHRpb25zRWRpdG9yXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblVwZGF0ZUFuZFJ1bn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge29uT3BlblF1ZXJ5SW5zcGVjdG9yICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFTb3VyY2VSb3dJdGVtfT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlblF1ZXJ5SW5zcGVjdG9yfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMuY29tcG9uZW50cy5RdWVyeVRhYi5xdWVyeUluc3BlY3RvckJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUXVlcnkgaW5zcGVjdG9yXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIG9uT3BlbkhlbHAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzSGVscE9wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgb25DbG9zZUhlbHAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzSGVscE9wZW46IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlck1peGVkUGlja2VyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICBtaXhlZD17ZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWRkTWl4ZWRRdWVyeX1cbiAgICAgICAgY3VycmVudD17bnVsbH1cbiAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICB2YXJpYWJsZXM9e3RydWV9XG4gICAgICAgIG9uQmx1cj17dGhpcy5vbk1peGVkUGlja2VyQmx1cn1cbiAgICAgICAgb3Blbk1lbnVPbkZvY3VzPXt0cnVlfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIG9uQWRkTWl4ZWRRdWVyeSA9IChkYXRhc291cmNlOiBhbnkpID0+IHtcbiAgICB0aGlzLm9uQWRkUXVlcnkoeyBkYXRhc291cmNlOiBkYXRhc291cmNlLm5hbWUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQWRkaW5nTWl4ZWQ6IGZhbHNlIH0pO1xuICB9O1xuXG4gIG9uTWl4ZWRQaWNrZXJCbHVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0FkZGluZ01peGVkOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkFkZFF1ZXJ5ID0gKHF1ZXJ5OiBQYXJ0aWFsPERhdGFRdWVyeT4pID0+IHtcbiAgICBjb25zdCB7IGRzU2V0dGluZ3MsIHF1ZXJpZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5vblF1ZXJpZXNDaGFuZ2UoYWRkUXVlcnkocXVlcmllcywgcXVlcnksIHsgdHlwZTogZHNTZXR0aW5ncz8udHlwZSwgdWlkOiBkc1NldHRpbmdzPy51aWQgfSkpO1xuICAgIHRoaXMub25TY3JvbGxCb3R0b20oKTtcbiAgfTtcblxuICBvblF1ZXJpZXNDaGFuZ2UgPSAocXVlcmllczogRGF0YVF1ZXJ5W10pID0+IHtcbiAgICB0aGlzLm9uQ2hhbmdlKHsgcXVlcmllcyB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcXVlcmllcyB9KTtcbiAgfTtcblxuICByZW5kZXJRdWVyaWVzKGRzU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKSB7XG4gICAgY29uc3QgeyBvblJ1blF1ZXJpZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkYXRhLCBxdWVyaWVzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGlzU2hhcmVkRGFzaGJvYXJkUXVlcnkoZHNTZXR0aW5ncy5uYW1lKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERhc2hib2FyZFF1ZXJ5RWRpdG9yXG4gICAgICAgICAgcXVlcmllcz17cXVlcmllc31cbiAgICAgICAgICBwYW5lbERhdGE9e2RhdGF9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25RdWVyaWVzQ2hhbmdlfVxuICAgICAgICAgIG9uUnVuUXVlcmllcz17b25SdW5RdWVyaWVzfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBhcmlhLWxhYmVsPXtzZWxlY3RvcnMuY29tcG9uZW50cy5RdWVyeVRhYi5jb250ZW50fT5cbiAgICAgICAgPFF1ZXJ5RWRpdG9yUm93c1xuICAgICAgICAgIHF1ZXJpZXM9e3F1ZXJpZXN9XG4gICAgICAgICAgZHNTZXR0aW5ncz17ZHNTZXR0aW5nc31cbiAgICAgICAgICBvblF1ZXJpZXNDaGFuZ2U9e3RoaXMub25RdWVyaWVzQ2hhbmdlfVxuICAgICAgICAgIG9uQWRkUXVlcnk9e3RoaXMub25BZGRRdWVyeX1cbiAgICAgICAgICBvblJ1blF1ZXJpZXM9e29uUnVuUXVlcmllc31cbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlzRXhwcmVzc2lvbnNTdXBwb3J0ZWQoZHNTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKGRzU2V0dGluZ3MubWV0YS5hbGVydGluZyB8fCBkc1NldHRpbmdzLm1ldGEubWl4ZWQpID09PSB0cnVlO1xuICB9XG5cbiAgcmVuZGVyRXh0cmFBY3Rpb25zKCkge1xuICAgIHJldHVybiBHcm91cEFjdGlvbkNvbXBvbmVudHMuZ2V0QWxsRXh0cmFSZW5kZXJBY3Rpb24oKVxuICAgICAgLm1hcCgoYWN0aW9uLCBpbmRleCkgPT5cbiAgICAgICAgYWN0aW9uKHtcbiAgICAgICAgICBvbkFkZFF1ZXJ5OiB0aGlzLm9uQWRkUXVlcnksXG4gICAgICAgICAgb25DaGFuZ2VEYXRhU291cmNlOiB0aGlzLm9uQ2hhbmdlRGF0YVNvdXJjZSxcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgfVxuXG4gIHJlbmRlckFkZFF1ZXJ5Um93KGRzU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBzdHlsZXM6IFF1ZXJpZXNUYWJTdHlsZXMpIHtcbiAgICBjb25zdCB7IGlzQWRkaW5nTWl4ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2hvd0FkZEJ1dHRvbiA9ICEoaXNBZGRpbmdNaXhlZCB8fCBpc1NoYXJlZERhc2hib2FyZFF1ZXJ5KGRzU2V0dGluZ3MubmFtZSkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxIb3Jpem9udGFsR3JvdXAgc3BhY2luZz1cIm1kXCIgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgIHtzaG93QWRkQnV0dG9uICYmIChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWRkUXVlcnlDbGlja31cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUXVlcnlUYWIuYWRkUXVlcnl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUXVlcnlcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAge2NvbmZpZy5leHByZXNzaW9uc0VuYWJsZWQgJiYgdGhpcy5pc0V4cHJlc3Npb25zU3VwcG9ydGVkKGRzU2V0dGluZ3MpICYmIChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWRkRXhwcmVzc2lvbkNsaWNrfVxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5leHByZXNzaW9uQnV0dG9ufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPkV4cHJlc3Npb24mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHt0aGlzLnJlbmRlckV4dHJhQWN0aW9ucygpfVxuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIHNldFNjcm9sbFJlZiA9IChzY3JvbGxFbGVtZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzY3JvbGxFbGVtZW50IH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzSGVscE9wZW4sIGRzU2V0dGluZ3MgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEN1c3RvbVNjcm9sbGJhciBhdXRvSGVpZ2h0TWluPVwiMTAwJVwiIHNjcm9sbFJlZkNhbGxiYWNrPXt0aGlzLnNldFNjcm9sbFJlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJXcmFwcGVyfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJUb3BTZWN0aW9uKHN0eWxlcyl9XG4gICAgICAgICAge2RzU2V0dGluZ3MgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVyaWVzV3JhcHBlcn0+e3RoaXMucmVuZGVyUXVlcmllcyhkc1NldHRpbmdzKX08L2Rpdj5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyQWRkUXVlcnlSb3coZHNTZXR0aW5ncywgc3R5bGVzKX1cbiAgICAgICAgICAgICAge2lzSGVscE9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxNb2RhbCB0aXRsZT1cIkRhdGEgc291cmNlIGhlbHBcIiBpc09wZW49e3RydWV9IG9uRGlzbWlzcz17dGhpcy5vbkNsb3NlSGVscH0+XG4gICAgICAgICAgICAgICAgICA8UGx1Z2luSGVscCBwbHVnaW49e2RzU2V0dGluZ3MubWV0YX0gdHlwZT1cInF1ZXJ5X2hlbHBcIiAvPlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgoKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IGNvbmZpZztcblxuICByZXR1cm4ge1xuICAgIGlubmVyV3JhcHBlcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGAsXG4gICAgZGF0YVNvdXJjZVJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgYCxcbiAgICBkYXRhU291cmNlUm93SXRlbTogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcuaW5saW5lRm9ybU1hcmdpbn07XG4gICAgYCxcbiAgICBkYXRhU291cmNlUm93SXRlbU9wdGlvbnM6IGNzc2BcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nLmlubGluZUZvcm1NYXJnaW59O1xuICAgIGAsXG4gICAgcXVlcmllc1dyYXBwZXI6IGNzc2BcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIGAsXG4gICAgZXhwcmVzc2lvbldyYXBwZXI6IGNzc2BgLFxuICAgIGV4cHJlc3Npb25CdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICB9O1xufSk7XG5cbnR5cGUgUXVlcmllc1RhYlN0eWxlcyA9IFJldHVyblR5cGU8dHlwZW9mIGdldFN0eWxlcz47XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIENoYW5nZUV2ZW50LCBGb2N1c0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyByYW5nZVV0aWwsIFBhbmVsRGF0YSwgRGF0YVNvdXJjZUFwaSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU3dpdGNoLCBJbnB1dCwgSW5saW5lRmllbGQsIElubGluZUZvcm1MYWJlbCwgc3R5bGVzRmFjdG9yeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFF1ZXJ5T3BlcmF0aW9uUm93IH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9RdWVyeU9wZXJhdGlvblJvdy9RdWVyeU9wZXJhdGlvblJvdyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgUXVlcnlHcm91cE9wdGlvbnMgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvcHRpb25zOiBRdWVyeUdyb3VwT3B0aW9ucztcbiAgZGF0YVNvdXJjZTogRGF0YVNvdXJjZUFwaTtcbiAgZGF0YTogUGFuZWxEYXRhO1xuICBvbkNoYW5nZTogKG9wdGlvbnM6IFF1ZXJ5R3JvdXBPcHRpb25zKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICB0aW1lUmFuZ2VGcm9tOiBzdHJpbmc7XG4gIHRpbWVSYW5nZVNoaWZ0OiBzdHJpbmc7XG4gIHRpbWVSYW5nZUhpZGU6IGJvb2xlYW47XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgcmVsYXRpdmVUaW1lSXNWYWxpZDogYm9vbGVhbjtcbiAgdGltZVNoaWZ0SXNWYWxpZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXJ5R3JvdXBPcHRpb25zRWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSBwcm9wcztcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lUmFuZ2VGcm9tOiBvcHRpb25zLnRpbWVSYW5nZT8uZnJvbSB8fCAnJyxcbiAgICAgIHRpbWVSYW5nZVNoaWZ0OiBvcHRpb25zLnRpbWVSYW5nZT8uc2hpZnQgfHwgJycsXG4gICAgICB0aW1lUmFuZ2VIaWRlOiBvcHRpb25zLnRpbWVSYW5nZT8uaGlkZSA/PyBmYWxzZSxcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICByZWxhdGl2ZVRpbWVJc1ZhbGlkOiB0cnVlLFxuICAgICAgdGltZVNoaWZ0SXNWYWxpZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgb25SZWxhdGl2ZVRpbWVDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW1lUmFuZ2VGcm9tOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgb25UaW1lU2hpZnRDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW1lUmFuZ2VTaGlmdDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uT3ZlcnJpZGVUaW1lID0gKGV2ZW50OiBGb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IG5ld1ZhbHVlID0gZW1wdHlUb051bGwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBpc1ZhbGlkID0gdGltZVJhbmdlVmFsaWRhdGlvbihuZXdWYWx1ZSk7XG5cbiAgICBpZiAoaXNWYWxpZCAmJiBvcHRpb25zLnRpbWVSYW5nZT8uZnJvbSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgdGltZVJhbmdlOiB7XG4gICAgICAgICAgLi4uKG9wdGlvbnMudGltZVJhbmdlID8/IHt9KSxcbiAgICAgICAgICBmcm9tOiBuZXdWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWxhdGl2ZVRpbWVJc1ZhbGlkOiBpc1ZhbGlkIH0pO1xuICB9O1xuXG4gIG9uVGltZVNoaWZ0ID0gKGV2ZW50OiBGb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IG5ld1ZhbHVlID0gZW1wdHlUb051bGwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBpc1ZhbGlkID0gdGltZVJhbmdlVmFsaWRhdGlvbihuZXdWYWx1ZSk7XG5cbiAgICBpZiAoaXNWYWxpZCAmJiBvcHRpb25zLnRpbWVSYW5nZT8uc2hpZnQgIT09IG5ld1ZhbHVlKSB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHRpbWVSYW5nZToge1xuICAgICAgICAgIC4uLihvcHRpb25zLnRpbWVSYW5nZSA/PyB7fSksXG4gICAgICAgICAgc2hpZnQ6IG5ld1ZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVTaGlmdElzVmFsaWQ6IGlzVmFsaWQgfSk7XG4gIH07XG5cbiAgb25Ub2dnbGVUaW1lT3ZlcnJpZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lUmFuZ2VIaWRlOiAhdGhpcy5zdGF0ZS50aW1lUmFuZ2VIaWRlIH0sICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgdGltZVJhbmdlOiB7XG4gICAgICAgICAgLi4uKG9wdGlvbnMudGltZVJhbmdlID8/IHt9KSxcbiAgICAgICAgICBoaWRlOiB0aGlzLnN0YXRlLnRpbWVSYW5nZUhpZGUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBvbkNhY2hlVGltZW91dEJsdXIgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgY2FjaGVUaW1lb3V0OiBlbXB0eVRvTnVsbChldmVudC50YXJnZXQudmFsdWUpLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uTWF4RGF0YVBvaW50c0JsdXIgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBtYXhEYXRhUG9pbnRzOiBudW1iZXIgfCBudWxsID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZywgMTApO1xuXG4gICAgaWYgKGlzTmFOKG1heERhdGFQb2ludHMpIHx8IG1heERhdGFQb2ludHMgPT09IDApIHtcbiAgICAgIG1heERhdGFQb2ludHMgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChtYXhEYXRhUG9pbnRzICE9PSBvcHRpb25zLm1heERhdGFQb2ludHMpIHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgbWF4RGF0YVBvaW50cyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBvbk1pbkludGVydmFsQmx1ciA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1pbkludGVydmFsID0gZW1wdHlUb051bGwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAobWluSW50ZXJ2YWwgIT09IG9wdGlvbnMubWluSW50ZXJ2YWwpIHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgbWluSW50ZXJ2YWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyQ2FjaGVUaW1lb3V0T3B0aW9uKCkge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRvb2x0aXAgPSBgSWYgeW91ciB0aW1lIHNlcmllcyBzdG9yZSBoYXMgYSBxdWVyeSBjYWNoZSB0aGlzIG9wdGlvbiBjYW4gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgY2FjaGUgdGltZW91dC4gU3BlY2lmeSBhXG4gICAgbnVtZXJpYyB2YWx1ZSBpbiBzZWNvbmRzLmA7XG5cbiAgICBpZiAoIWRhdGFTb3VyY2UubWV0YS5xdWVyeU9wdGlvbnM/LmNhY2hlVGltZW91dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgPElubGluZUZvcm1MYWJlbCB3aWR0aD17OX0gdG9vbHRpcD17dG9vbHRpcH0+XG4gICAgICAgICAgICBDYWNoZSB0aW1lb3V0XG4gICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC02XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNjBcIlxuICAgICAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMub25DYWNoZVRpbWVvdXRCbHVyfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb25zLmNhY2hlVGltZW91dCA/PyAnJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJNYXhEYXRhUG9pbnRzT3B0aW9uKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCByZWFsTWQgPSBkYXRhLnJlcXVlc3Q/Lm1heERhdGFQb2ludHM7XG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb25zLm1heERhdGFQb2ludHMgPz8gJyc7XG4gICAgY29uc3QgaXNBdXRvID0gdmFsdWUgPT09ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgPElubGluZUZvcm1MYWJlbFxuICAgICAgICAgICAgd2lkdGg9ezl9XG4gICAgICAgICAgICB0b29sdGlwPXtcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICBUaGUgbWF4aW11bSBkYXRhIHBvaW50cyBwZXIgc2VyaWVzLiBVc2VkIGRpcmVjdGx5IGJ5IHNvbWUgZGF0YSBzb3VyY2VzIGFuZCB1c2VkIGluIGNhbGN1bGF0aW9uIG9mIGF1dG9cbiAgICAgICAgICAgICAgICBpbnRlcnZhbC4gV2l0aCBzdHJlYW1pbmcgZGF0YSB0aGlzIHZhbHVlIGlzIHVzZWQgZm9yIHRoZSByb2xsaW5nIGJ1ZmZlci5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWF4IGRhdGEgcG9pbnRzXG4gICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTZcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake3JlYWxNZH1gfVxuICAgICAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMub25NYXhEYXRhUG9pbnRzQmx1cn1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dmFsdWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aXNBdXRvICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1zZWdtZW50LW9wZXJhdG9yXCI+PTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWxcIj5XaWR0aCBvZiBwYW5lbDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySW50ZXJ2YWxPcHRpb24oKSB7XG4gICAgY29uc3QgeyBkYXRhLCBkYXRhU291cmNlLCBvcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJlYWxJbnRlcnZhbCA9IGRhdGEucmVxdWVzdD8uaW50ZXJ2YWw7XG4gICAgY29uc3QgbWluSW50ZXJ2YWxPbkRzID0gZGF0YVNvdXJjZS5pbnRlcnZhbCA/PyAnTm8gbGltaXQnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWxcbiAgICAgICAgICAgICAgd2lkdGg9ezl9XG4gICAgICAgICAgICAgIHRvb2x0aXA9e1xuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICBBIGxvd2VyIGxpbWl0IGZvciB0aGUgaW50ZXJ2YWwuIFJlY29tbWVuZGVkIHRvIGJlIHNldCB0byB3cml0ZSBmcmVxdWVuY3ksIGZvciBleGFtcGxlIDxjb2RlPjFtPC9jb2RlPnsnICd9XG4gICAgICAgICAgICAgICAgICBpZiB5b3VyIGRhdGEgaXMgd3JpdHRlbiBldmVyeSBtaW51dGUuIERlZmF1bHQgdmFsdWUgY2FuIGJlIHNldCBpbiBkYXRhIHNvdXJjZSBzZXR0aW5ncyBmb3IgbW9zdCBkYXRhXG4gICAgICAgICAgICAgICAgICBzb3VyY2VzLlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1pbiBpbnRlcnZhbFxuICAgICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC02XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake21pbkludGVydmFsT25Ec31gfVxuICAgICAgICAgICAgICBzcGVsbENoZWNrPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uTWluSW50ZXJ2YWxCbHVyfVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbnMubWluSW50ZXJ2YWwgPz8gJyd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgPElubGluZUZvcm1MYWJlbFxuICAgICAgICAgICAgICB3aWR0aD17OX1cbiAgICAgICAgICAgICAgdG9vbHRpcD17XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIFRoZSBldmFsdWF0ZWQgaW50ZXJ2YWwgdGhhdCBpcyBzZW50IHRvIGRhdGEgc291cmNlIGFuZCBpcyB1c2VkIGluIDxjb2RlPiRfX2ludGVydmFsPC9jb2RlPiBhbmR7JyAnfVxuICAgICAgICAgICAgICAgICAgPGNvZGU+JF9faW50ZXJ2YWxfbXM8L2NvZGU+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSW50ZXJ2YWxcbiAgICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgPElubGluZUZvcm1MYWJlbCB3aWR0aD17Nn0+e3JlYWxJbnRlcnZhbH08L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1zZWdtZW50LW9wZXJhdG9yXCI+PTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsXCI+VGltZSByYW5nZSAvIG1heCBkYXRhIHBvaW50czwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBvbk9wZW5PcHRpb25zID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgb25DbG9zZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogZmFsc2UgfSk7XG4gIH07XG5cbiAgcmVuZGVyQ29sbGFwc2VkVGV4dChzdHlsZXM6IFN0eWxlc1R5cGUpOiBSZWFjdC5SZWFjdE5vZGUgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHsgZGF0YSwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbGV0IG1kRGVzYyA9IG9wdGlvbnMubWF4RGF0YVBvaW50cyA/PyAnJztcbiAgICBpZiAobWREZXNjID09PSAnJyAmJiBkYXRhLnJlcXVlc3QpIHtcbiAgICAgIG1kRGVzYyA9IGBhdXRvID0gJHtkYXRhLnJlcXVlc3QubWF4RGF0YVBvaW50c31gO1xuICAgIH1cblxuICAgIGxldCBpbnRlcnZhbERlc2MgPSBvcHRpb25zLm1pbkludGVydmFsO1xuICAgIGlmIChkYXRhLnJlcXVlc3QpIHtcbiAgICAgIGludGVydmFsRGVzYyA9IGAke2RhdGEucmVxdWVzdC5pbnRlcnZhbH1gO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsYXBzZWRUZXh0fT5NRCA9IHttZERlc2N9PC9kaXY+fVxuICAgICAgICB7PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsYXBzZWRUZXh0fT5JbnRlcnZhbCA9IHtpbnRlcnZhbERlc2N9PC9kaXY+fVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpbWVSYW5nZUhpZGU6IGhpZGVUaW1lT3ZlcnJpZGUsIHJlbGF0aXZlVGltZUlzVmFsaWQsIHRpbWVTaGlmdElzVmFsaWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0aW1lUmFuZ2VGcm9tOiByZWxhdGl2ZVRpbWUsIHRpbWVSYW5nZVNoaWZ0OiB0aW1lU2hpZnQsIGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UXVlcnlPcGVyYXRpb25Sb3dcbiAgICAgICAgaWQ9XCJRdWVyeSBvcHRpb25zXCJcbiAgICAgICAgaW5kZXg9ezB9XG4gICAgICAgIHRpdGxlPVwiUXVlcnkgb3B0aW9uc1wiXG4gICAgICAgIGhlYWRlckVsZW1lbnQ9e3RoaXMucmVuZGVyQ29sbGFwc2VkVGV4dChzdHlsZXMpfVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgb25PcGVuPXt0aGlzLm9uT3Blbk9wdGlvbnN9XG4gICAgICAgIG9uQ2xvc2U9e3RoaXMub25DbG9zZU9wdGlvbnN9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnJlbmRlck1heERhdGFQb2ludHNPcHRpb24oKX1cbiAgICAgICAge3RoaXMucmVuZGVySW50ZXJ2YWxPcHRpb24oKX1cbiAgICAgICAge3RoaXMucmVuZGVyQ2FjaGVUaW1lb3V0T3B0aW9uKCl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgPElubGluZUZvcm1MYWJlbCB3aWR0aD17OX0+UmVsYXRpdmUgdGltZTwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtNlwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjFoXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUmVsYXRpdmVUaW1lQ2hhbmdlfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uT3ZlcnJpZGVUaW1lfVxuICAgICAgICAgICAgaW52YWxpZD17IXJlbGF0aXZlVGltZUlzVmFsaWR9XG4gICAgICAgICAgICB2YWx1ZT17cmVsYXRpdmVUaW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgd2lkdGgtOVwiPlRpbWUgc2hpZnQ8L3NwYW4+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC02XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMWhcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UaW1lU2hpZnRDaGFuZ2V9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMub25UaW1lU2hpZnR9XG4gICAgICAgICAgICBpbnZhbGlkPXshdGltZVNoaWZ0SXNWYWxpZH1cbiAgICAgICAgICAgIHZhbHVlPXt0aW1lU2hpZnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsodGltZVNoaWZ0IHx8IHJlbGF0aXZlVGltZSkgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkhpZGUgdGltZSBpbmZvXCIgbGFiZWxXaWR0aD17MTh9PlxuICAgICAgICAgICAgICA8U3dpdGNoIHZhbHVlPXtoaWRlVGltZU92ZXJyaWRlfSBvbkNoYW5nZT17dGhpcy5vblRvZ2dsZVRpbWVPdmVycmlkZX0gLz5cbiAgICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1F1ZXJ5T3BlcmF0aW9uUm93PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgdGltZVJhbmdlVmFsaWRhdGlvbiA9ICh2YWx1ZTogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gcmFuZ2VVdGlsLmlzVmFsaWRUaW1lU3Bhbih2YWx1ZSk7XG59O1xuXG5jb25zdCBlbXB0eVRvTnVsbCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogdmFsdWU7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCgpID0+IHtcbiAgY29uc3QgeyB0aGVtZSB9ID0gY29uZmlnO1xuXG4gIHJldHVybiB7XG4gICAgY29sbGFwc2VkVGV4dDogY3NzYFxuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0V2Vha307XG4gICAgYCxcbiAgfTtcbn0pO1xuXG50eXBlIFN0eWxlc1R5cGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBnZXRTdHlsZXM+O1xuIiwiaW1wb3J0IHsgRGF0YVF1ZXJ5LCBEYXRhU291cmNlQXBpLCBoYXNRdWVyeUV4cG9ydFN1cHBvcnQsIGhhc1F1ZXJ5SW1wb3J0U3VwcG9ydCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgaXNFeHByZXNzaW9uUmVmZXJlbmNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMvdXRpbHMvRGF0YVNvdXJjZVdpdGhCYWNrZW5kJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVF1ZXJpZXMoXG4gIG5leHREUzogRGF0YVNvdXJjZUFwaSxcbiAgbmV4dERTVWlkT3JWYXJpYWJsZUV4cHJlc3Npb246IHN0cmluZyxcbiAgcXVlcmllczogRGF0YVF1ZXJ5W10sXG4gIGN1cnJlbnREUz86IERhdGFTb3VyY2VBcGlcbik6IFByb21pc2U8RGF0YVF1ZXJ5W10+IHtcbiAgbGV0IG5leHRRdWVyaWVzID0gcXVlcmllcztcbiAgY29uc3QgZGF0YXNvdXJjZSA9IHsgdHlwZTogbmV4dERTLnR5cGUsIHVpZDogbmV4dERTVWlkT3JWYXJpYWJsZUV4cHJlc3Npb24gfTtcblxuICAvLyB3ZSBhcmUgY2hhbmdpbmcgZGF0YSBzb3VyY2UgdHlwZVxuICBpZiAoY3VycmVudERTPy5tZXRhLmlkICE9PSBuZXh0RFMubWV0YS5pZCkge1xuICAgIC8vIElmIGNoYW5naW5nIHRvIG1peGVkIGRvIG5vdGhpbmdcbiAgICBpZiAobmV4dERTLm1ldGEubWl4ZWQpIHtcbiAgICAgIHJldHVybiBxdWVyaWVzO1xuICAgIH1cbiAgICAvLyB3aGVuIGJvdGggZGF0YSBzb3VyY2VzIHN1cHBvcnQgYWJzdHJhY3QgcXVlcmllc1xuICAgIGVsc2UgaWYgKGhhc1F1ZXJ5RXhwb3J0U3VwcG9ydChjdXJyZW50RFMpICYmIGhhc1F1ZXJ5SW1wb3J0U3VwcG9ydChuZXh0RFMpKSB7XG4gICAgICBjb25zdCBhYnN0cmFjdFF1ZXJpZXMgPSBhd2FpdCBjdXJyZW50RFMuZXhwb3J0VG9BYnN0cmFjdFF1ZXJpZXMocXVlcmllcyk7XG4gICAgICBuZXh0UXVlcmllcyA9IGF3YWl0IG5leHREUy5pbXBvcnRGcm9tQWJzdHJhY3RRdWVyaWVzKGFic3RyYWN0UXVlcmllcyk7XG4gICAgfVxuICAgIC8vIHdoZW4gZGF0YXNvdXJjZSBzdXBwb3J0cyBxdWVyeSBpbXBvcnRcbiAgICBlbHNlIGlmIChjdXJyZW50RFMgJiYgbmV4dERTLmltcG9ydFF1ZXJpZXMpIHtcbiAgICAgIG5leHRRdWVyaWVzID0gYXdhaXQgbmV4dERTLmltcG9ydFF1ZXJpZXMocXVlcmllcywgY3VycmVudERTKTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlIGNsZWFyIHF1ZXJpZXNcbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBbeyByZWZJZDogJ0EnLCBkYXRhc291cmNlIH1dO1xuICAgIH1cbiAgfVxuXG4gIGlmIChuZXh0UXVlcmllcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW3sgcmVmSWQ6ICdBJywgZGF0YXNvdXJjZSB9XTtcbiAgfVxuXG4gIC8vIFNldCBkYXRhIHNvdXJjZSBvbiBhbGwgcXVlcmllcyBleGNlcHQgZXhwcmVzc2lvbiBxdWVyaWVzXG4gIHJldHVybiBuZXh0UXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB7XG4gICAgaWYgKCFpc0V4cHJlc3Npb25SZWZlcmVuY2UocXVlcnkuZGF0YXNvdXJjZSkgJiYgIW5leHREUy5tZXRhLm1peGVkKSB7XG4gICAgICBxdWVyeS5kYXRhc291cmNlID0gZGF0YXNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9KTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VPYnNlcnZhYmxlIH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCBBdXRvU2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5cbmltcG9ydCB7XG4gIEFwcGx5RmllbGRPdmVycmlkZU9wdGlvbnMsXG4gIERhdGFUcmFuc2Zvcm1lckNvbmZpZyxcbiAgZGF0ZU1hdGgsXG4gIEZpZWxkQ29sb3JNb2RlSWQsXG4gIE5hdk1vZGVsSXRlbSxcbiAgUGFuZWxEYXRhLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgdXNlQXBwTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgUXVlcnlHcm91cE9wdGlvbnMgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IFBhbmVsUmVuZGVyZXIgfSBmcm9tICcuLi9wYW5lbC9jb21wb25lbnRzL1BhbmVsUmVuZGVyZXInO1xuaW1wb3J0IHsgUXVlcnlHcm91cCB9IGZyb20gJy4uL3F1ZXJ5L2NvbXBvbmVudHMvUXVlcnlHcm91cCc7XG5pbXBvcnQgeyBQYW5lbFF1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vcXVlcnkvc3RhdGUvUGFuZWxRdWVyeVJ1bm5lcic7XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHF1ZXJ5UnVubmVyOiBQYW5lbFF1ZXJ5UnVubmVyO1xuICBxdWVyeU9wdGlvbnM6IFF1ZXJ5R3JvdXBPcHRpb25zO1xuICBkYXRhPzogUGFuZWxEYXRhO1xufVxuXG5leHBvcnQgY29uc3QgVGVzdFN0dWZmUGFnZTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8U3RhdGU+KGdldERlZmF1bHRTdGF0ZSgpKTtcbiAgY29uc3QgeyBxdWVyeU9wdGlvbnMsIHF1ZXJ5UnVubmVyIH0gPSBzdGF0ZTtcblxuICBjb25zdCBvblJ1blF1ZXJpZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZVJhbmdlID0geyBmcm9tOiAnbm93LTFoJywgdG86ICdub3cnIH07XG5cbiAgICBxdWVyeVJ1bm5lci5ydW4oe1xuICAgICAgcXVlcmllczogcXVlcnlPcHRpb25zLnF1ZXJpZXMsXG4gICAgICBkYXRhc291cmNlOiBxdWVyeU9wdGlvbnMuZGF0YVNvdXJjZSxcbiAgICAgIHRpbWV6b25lOiAnYnJvd3NlcicsXG4gICAgICB0aW1lUmFuZ2U6IHsgZnJvbTogZGF0ZU1hdGgucGFyc2UodGltZVJhbmdlLmZyb20pISwgdG86IGRhdGVNYXRoLnBhcnNlKHRpbWVSYW5nZS50bykhLCByYXc6IHRpbWVSYW5nZSB9LFxuICAgICAgbWF4RGF0YVBvaW50czogcXVlcnlPcHRpb25zLm1heERhdGFQb2ludHMgPz8gMTAwLFxuICAgICAgbWluSW50ZXJ2YWw6IHF1ZXJ5T3B0aW9ucy5taW5JbnRlcnZhbCxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbk9wdGlvbnNDaGFuZ2UgPSAocXVlcnlPcHRpb25zOiBRdWVyeUdyb3VwT3B0aW9ucykgPT4ge1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIHF1ZXJ5T3B0aW9ucyB9KTtcbiAgfTtcblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIGRhdGFcbiAgICovXG4gIGNvbnN0IG9ic2VydmFibGUgPSB1c2VNZW1vKCgpID0+IHF1ZXJ5UnVubmVyLmdldERhdGEoeyB3aXRoRmllbGRDb25maWc6IHRydWUsIHdpdGhUcmFuc2Zvcm1zOiB0cnVlIH0pLCBbcXVlcnlSdW5uZXJdKTtcbiAgY29uc3QgZGF0YSA9IHVzZU9ic2VydmFibGUob2JzZXJ2YWJsZSk7XG5cbiAgY29uc3Qgbm9kZTogTmF2TW9kZWxJdGVtID0ge1xuICAgIGlkOiAndGVzdC1wYWdlJyxcbiAgICB0ZXh0OiAnVGVzdCBwYWdlJyxcbiAgICBpY29uOiAnZGFzaGJvYXJkJyxcbiAgICBzdWJUaXRsZTogJ0ZPUiBURVNUSU5HIScsXG4gICAgdXJsOiAnc2FuZGJveC90ZXN0JyxcbiAgfTtcblxuICBjb25zdCBub3RpZnlBcHAgPSB1c2VBcHBOb3RpZmljYXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXt7IG5vZGU6IG5vZGUsIG1haW46IG5vZGUgfX0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAge2RhdGEgJiYgKFxuICAgICAgICAgIDxBdXRvU2l6ZXIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNjAwcHgnIH19PlxuICAgICAgICAgICAgeyh7IHdpZHRoIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPFBhbmVsUmVuZGVyZXJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJIZWxsb1wiXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbklkPVwidGltZXNlcmllc1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3t9fVxuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbmZpZz17eyBkZWZhdWx0czoge30sIG92ZXJyaWRlczogW10gfX1cbiAgICAgICAgICAgICAgICAgICAgdGltZVpvbmU9XCJicm93c2VyXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8VGFibGUgZGF0YT17ZGF0YS5zZXJpZXNbMF19IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXszMDB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvQXV0b1NpemVyPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzE2cHgnLCBoZWlnaHQ6ICc0NSUnIH19PlxuICAgICAgICAgIDxRdWVyeUdyb3VwXG4gICAgICAgICAgICBvcHRpb25zPXtxdWVyeU9wdGlvbnN9XG4gICAgICAgICAgICBxdWVyeVJ1bm5lcj17cXVlcnlSdW5uZXJ9XG4gICAgICAgICAgICBvblJ1blF1ZXJpZXM9e29uUnVuUXVlcmllc31cbiAgICAgICAgICAgIG9uT3B0aW9uc0NoYW5nZT17b25PcHRpb25zQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMWVtJyB9fT5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG5vdGlmeUFwcC5zdWNjZXNzKCdTdWNjZXNzIHRvYXN0JywgJ3NvbWUgbW9yZSB0ZXh0IGdvZXMgaGVyZScpfSB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgU3VjY2Vzc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5vdGlmeUFwcC53YXJuaW5nKCdXYXJuaW5nIHRvYXN0JywgJ3NvbWUgbW9yZSB0ZXh0IGdvZXMgaGVyZScsICdib2d1cy10cmFjZS05OTk5OScpfVxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgV2FybmluZ1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5vdGlmeUFwcC5lcnJvcignRXJyb3IgdG9hc3QnLCAnc29tZSBtb3JlIHRleHQgZ29lcyBoZXJlJywgJ2JvZ3VzLXRyYWNlLWZkc2ZkZnNmZHMnKX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXJyb3JcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRTdGF0ZSgpOiBTdGF0ZSB7XG4gIGNvbnN0IG9wdGlvbnM6IEFwcGx5RmllbGRPdmVycmlkZU9wdGlvbnMgPSB7XG4gICAgZmllbGRDb25maWc6IHtcbiAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgbW9kZTogRmllbGRDb2xvck1vZGVJZC5QYWxldHRlQ2xhc3NpYyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBvdmVycmlkZXM6IFtdLFxuICAgIH0sXG4gICAgcmVwbGFjZVZhcmlhYmxlczogKHY6IHN0cmluZykgPT4gdixcbiAgICB0aGVtZTogY29uZmlnLnRoZW1lMixcbiAgfTtcblxuICBjb25zdCBkYXRhQ29uZmlnID0ge1xuICAgIGdldFRyYW5zZm9ybWF0aW9uczogKCkgPT4gW10gYXMgRGF0YVRyYW5zZm9ybWVyQ29uZmlnW10sXG4gICAgZ2V0RmllbGRPdmVycmlkZU9wdGlvbnM6ICgpID0+IG9wdGlvbnMsXG4gICAgZ2V0RGF0YVN1cHBvcnQ6ICgpID0+ICh7IGFubm90YXRpb25zOiBmYWxzZSwgYWxlcnRTdGF0ZXM6IGZhbHNlIH0pLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcXVlcnlSdW5uZXI6IG5ldyBQYW5lbFF1ZXJ5UnVubmVyKGRhdGFDb25maWcpLFxuICAgIHF1ZXJ5T3B0aW9uczoge1xuICAgICAgcXVlcmllczogW10sXG4gICAgICBkYXRhU291cmNlOiB7XG4gICAgICAgIG5hbWU6ICdnZGV2LXRlc3RkYXRhJyxcbiAgICAgIH0sXG4gICAgICBtYXhEYXRhUG9pbnRzOiAxMDAsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFN0dWZmUGFnZTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgZnJvbSAnLi91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0JztcbmZ1bmN0aW9uIHVzZU9ic2VydmFibGUob2JzZXJ2YWJsZSQsIGluaXRpYWxWYWx1ZSkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSksIHZhbHVlID0gX2FbMF0sIHVwZGF0ZSA9IF9hWzFdO1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcyA9IG9ic2VydmFibGUkLnN1YnNjcmliZSh1cGRhdGUpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcy51bnN1YnNjcmliZSgpOyB9O1xuICAgIH0sIFtvYnNlcnZhYmxlJF0pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydCBkZWZhdWx0IHVzZU9ic2VydmFibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwicmVuZGVyTWFya2Rvd24iLCJnZXRCYWNrZW5kU3J2IiwiUGx1Z2luSGVscCIsImlzRXJyb3IiLCJpc0xvYWRpbmciLCJoZWxwIiwicGx1Z2luIiwidHlwZSIsInByb3BzIiwic2V0U3RhdGUiLCJnZXQiLCJpZCIsInRoZW4iLCJyZXNwb25zZSIsImhlbHBIdG1sIiwiY29uc3RydWN0UGxhY2Vob2xkZXJJbmZvIiwiY2F0Y2giLCJjb21wb25lbnREaWRNb3VudCIsImxvYWRIZWxwIiwicmVuZGVyIiwic3RhdGUiLCJfX2h0bWwiLCJEcmFnRHJvcENvbnRleHQiLCJEcm9wcGFibGUiLCJnZXREYXRhU291cmNlU3J2IiwicmVwb3J0SW50ZXJhY3Rpb24iLCJRdWVyeUVkaXRvclJvdyIsIlF1ZXJ5RWRpdG9yUm93cyIsInF1ZXJ5Iiwib25RdWVyaWVzQ2hhbmdlIiwicXVlcmllcyIsImZpbHRlciIsIml0ZW0iLCJyZXN1bHQiLCJkc1NldHRpbmdzIiwic3RhcnRJbmRleCIsInNvdXJjZSIsImluZGV4IiwibnVtYmVyT2ZRdWVyaWVzIiwibGVuZ3RoIiwiZGF0YXNvdXJjZVR5cGUiLCJkZXN0aW5hdGlvbiIsImVuZEluZGV4IiwidXBkYXRlIiwiQXJyYXkiLCJmcm9tIiwicmVtb3ZlZCIsInNwbGljZSIsIm9uQ2hhbmdlUXVlcnkiLCJtYXAiLCJpdGVtSW5kZXgiLCJvbkRhdGFTb3VyY2VDaGFuZ2UiLCJkYXRhU291cmNlIiwiZGF0YVNvdXJjZVJlZiIsInVpZCIsImRhdGFzb3VyY2UiLCJwcmV2aW91cyIsImdldEluc3RhbmNlU2V0dGluZ3MiLCJyZWZJZCIsImhpZGUiLCJkYXRhIiwiYXBwIiwiaGlzdG9yeSIsImV2ZW50QnVzIiwib25EcmFnU3RhcnQiLCJvbkRyYWdFbmQiLCJwcm92aWRlZCIsImlubmVyUmVmIiwiZHJvcHBhYmxlUHJvcHMiLCJkYXRhU291cmNlU2V0dGluZ3MiLCJnZXREYXRhU291cmNlU2V0dGluZ3MiLCJvbkNoYW5nZURhdGFTb3VyY2VTZXR0aW5ncyIsIm1ldGEiLCJtaXhlZCIsInNldHRpbmdzIiwidW5kZWZpbmVkIiwib25SZW1vdmVRdWVyeSIsIm9uQWRkUXVlcnkiLCJvblJ1blF1ZXJpZXMiLCJwbGFjZWhvbGRlciIsImdyb3VwU2V0dGluZ3MiLCJxdWVyeVNldHRpbmdzIiwiY3NzIiwiQ29yZUFwcCIsImdldERlZmF1bHRUaW1lUmFuZ2UiLCJMb2FkaW5nU3RhdGUiLCJzZWxlY3RvcnMiLCJEYXRhU291cmNlUGlja2VyIiwiQnV0dG9uIiwiQ3VzdG9tU2Nyb2xsYmFyIiwiSG9yaXpvbnRhbEdyb3VwIiwiSW5saW5lRm9ybUxhYmVsIiwiTW9kYWwiLCJzdHlsZXNGYWN0b3J5IiwiY29uZmlnIiwiYmFja2VuZFNydiIsImFkZFF1ZXJ5IiwiZXhwcmVzc2lvbkRhdGFzb3VyY2UiLCJEYXNoYm9hcmRRdWVyeUVkaXRvciIsImlzU2hhcmVkRGFzaGJvYXJkUXVlcnkiLCJ1cGRhdGVRdWVyaWVzIiwiR3JvdXBBY3Rpb25Db21wb25lbnRzIiwiUXVlcnlHcm91cE9wdGlvbnNFZGl0b3IiLCJRdWVyeUdyb3VwIiwiaXNMb2FkaW5nSGVscCIsImhlbHBDb250ZW50IiwiaXNQaWNrZXJPcGVuIiwiaXNBZGRpbmdNaXhlZCIsImlzSGVscE9wZW4iLCJOb3RTdGFydGVkIiwic2VyaWVzIiwidGltZVJhbmdlIiwibmV3U2V0dGluZ3MiLCJjdXJyZW50RFMiLCJuZXh0RFMiLCJkYXRhU291cmNlU3J2IiwibmFtZSIsIm9uQ2hhbmdlIiwiZGVmYXVsdCIsImlzRGVmYXVsdCIsIm5ld1F1ZXJ5Iiwib25TY3JvbGxCb3R0b20iLCJzZXRUaW1lb3V0Iiwic2Nyb2xsRWxlbWVudCIsInNjcm9sbFRvIiwidG9wIiwib3B0aW9ucyIsIm9uT3B0aW9uc0NoYW5nZSIsIm9uQWRkTWl4ZWRRdWVyeSIsIm9uTWl4ZWRQaWNrZXJCbHVyIiwicXVlcnlSdW5uZXIiLCJxdWVyeVN1YnNjcmlwdGlvbiIsImdldERhdGEiLCJ3aXRoVHJhbnNmb3JtcyIsIndpdGhGaWVsZENvbmZpZyIsInN1YnNjcmliZSIsIm5leHQiLCJvblBhbmVsRGF0YVVwZGF0ZSIsImRzIiwiZGVmYXVsdERhdGFTb3VyY2UiLCJnZXRSZWYiLCJxIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJ1bnN1YnNjcmliZSIsImdldERlZmF1bHRRdWVyeSIsIlBhbmVsRWRpdG9yIiwiY2hhbmdlZFByb3BzIiwicmVuZGVyVG9wU2VjdGlvbiIsInN0eWxlcyIsIm9uT3BlblF1ZXJ5SW5zcGVjdG9yIiwiZGF0YVNvdXJjZVJvdyIsImRhdGFTb3VyY2VSb3dJdGVtIiwib25DaGFuZ2VEYXRhU291cmNlIiwib25PcGVuSGVscCIsImRhdGFTb3VyY2VSb3dJdGVtT3B0aW9ucyIsIm9uVXBkYXRlQW5kUnVuIiwiY29tcG9uZW50cyIsIlF1ZXJ5VGFiIiwicXVlcnlJbnNwZWN0b3JCdXR0b24iLCJyZW5kZXJRdWVyaWVzIiwiY29udGVudCIsImlzRXhwcmVzc2lvbnNTdXBwb3J0ZWQiLCJhbGVydGluZyIsInJlbmRlckV4dHJhQWN0aW9ucyIsImdldEFsbEV4dHJhUmVuZGVyQWN0aW9uIiwiYWN0aW9uIiwia2V5IiwiQm9vbGVhbiIsInJlbmRlckFkZFF1ZXJ5Um93Iiwic2hvd0FkZEJ1dHRvbiIsIm9uQWRkUXVlcnlDbGljayIsImV4cHJlc3Npb25zRW5hYmxlZCIsIm9uQWRkRXhwcmVzc2lvbkNsaWNrIiwiZXhwcmVzc2lvbkJ1dHRvbiIsImdldFN0eWxlcyIsInNldFNjcm9sbFJlZiIsImlubmVyV3JhcHBlciIsInF1ZXJpZXNXcmFwcGVyIiwib25DbG9zZUhlbHAiLCJ0aGVtZSIsInNwYWNpbmciLCJtZCIsImlubGluZUZvcm1NYXJnaW4iLCJleHByZXNzaW9uV3JhcHBlciIsInNtIiwicmFuZ2VVdGlsIiwiU3dpdGNoIiwiSW5wdXQiLCJJbmxpbmVGaWVsZCIsIlF1ZXJ5T3BlcmF0aW9uUm93IiwiY29uc3RydWN0b3IiLCJldmVudCIsInRpbWVSYW5nZUZyb20iLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpbWVSYW5nZVNoaWZ0IiwibmV3VmFsdWUiLCJlbXB0eVRvTnVsbCIsImlzVmFsaWQiLCJ0aW1lUmFuZ2VWYWxpZGF0aW9uIiwicmVsYXRpdmVUaW1lSXNWYWxpZCIsInNoaWZ0IiwidGltZVNoaWZ0SXNWYWxpZCIsInRpbWVSYW5nZUhpZGUiLCJjYWNoZVRpbWVvdXQiLCJtYXhEYXRhUG9pbnRzIiwicGFyc2VJbnQiLCJpc05hTiIsIm1pbkludGVydmFsIiwiaXNPcGVuIiwicmVuZGVyQ2FjaGVUaW1lb3V0T3B0aW9uIiwidG9vbHRpcCIsInF1ZXJ5T3B0aW9ucyIsIm9uQ2FjaGVUaW1lb3V0Qmx1ciIsInJlbmRlck1heERhdGFQb2ludHNPcHRpb24iLCJyZWFsTWQiLCJyZXF1ZXN0IiwiaXNBdXRvIiwib25NYXhEYXRhUG9pbnRzQmx1ciIsInJlbmRlckludGVydmFsT3B0aW9uIiwicmVhbEludGVydmFsIiwiaW50ZXJ2YWwiLCJtaW5JbnRlcnZhbE9uRHMiLCJvbk1pbkludGVydmFsQmx1ciIsInJlbmRlckNvbGxhcHNlZFRleHQiLCJtZERlc2MiLCJpbnRlcnZhbERlc2MiLCJjb2xsYXBzZWRUZXh0IiwiaGlkZVRpbWVPdmVycmlkZSIsInJlbGF0aXZlVGltZSIsInRpbWVTaGlmdCIsIm9uT3Blbk9wdGlvbnMiLCJvbkNsb3NlT3B0aW9ucyIsIm9uUmVsYXRpdmVUaW1lQ2hhbmdlIiwib25PdmVycmlkZVRpbWUiLCJvblRpbWVTaGlmdENoYW5nZSIsIm9uVGltZVNoaWZ0Iiwib25Ub2dnbGVUaW1lT3ZlcnJpZGUiLCJpc1ZhbGlkVGltZVNwYW4iLCJ0eXBvZ3JhcGh5Iiwic2l6ZSIsImNvbG9ycyIsInRleHRXZWFrIiwiaGFzUXVlcnlFeHBvcnRTdXBwb3J0IiwiaGFzUXVlcnlJbXBvcnRTdXBwb3J0IiwiaXNFeHByZXNzaW9uUmVmZXJlbmNlIiwibmV4dERTVWlkT3JWYXJpYWJsZUV4cHJlc3Npb24iLCJuZXh0UXVlcmllcyIsImFic3RyYWN0UXVlcmllcyIsImV4cG9ydFRvQWJzdHJhY3RRdWVyaWVzIiwiaW1wb3J0RnJvbUFic3RyYWN0UXVlcmllcyIsImltcG9ydFF1ZXJpZXMiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VPYnNlcnZhYmxlIiwiQXV0b1NpemVyIiwiZGF0ZU1hdGgiLCJGaWVsZENvbG9yTW9kZUlkIiwiVGFibGUiLCJ1c2VBcHBOb3RpZmljYXRpb24iLCJQYWdlIiwiUGFuZWxSZW5kZXJlciIsIlBhbmVsUXVlcnlSdW5uZXIiLCJUZXN0U3R1ZmZQYWdlIiwiZ2V0RGVmYXVsdFN0YXRlIiwidG8iLCJydW4iLCJ0aW1lem9uZSIsInBhcnNlIiwicmF3Iiwib2JzZXJ2YWJsZSIsIm5vZGUiLCJ0ZXh0IiwiaWNvbiIsInN1YlRpdGxlIiwidXJsIiwibm90aWZ5QXBwIiwibWFpbiIsIndpZHRoIiwiaGVpZ2h0IiwiZGVmYXVsdHMiLCJvdmVycmlkZXMiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZ2FwIiwic3VjY2VzcyIsIndhcm5pbmciLCJmaWVsZENvbmZpZyIsImNvbG9yIiwibW9kZSIsIlBhbGV0dGVDbGFzc2ljIiwicmVwbGFjZVZhcmlhYmxlcyIsInYiLCJ0aGVtZTIiLCJkYXRhQ29uZmlnIiwiZ2V0VHJhbnNmb3JtYXRpb25zIiwiZ2V0RmllbGRPdmVycmlkZU9wdGlvbnMiLCJnZXREYXRhU3VwcG9ydCIsImFubm90YXRpb25zIiwiYWxlcnRTdGF0ZXMiXSwic291cmNlUm9vdCI6IiJ9