(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["cloudwatchPlugin"],{

/***/ "./public/app/plugins/datasource/cloudwatch/annotationSupport.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudWatchAnnotationSupport": () => (/* binding */ CloudWatchAnnotationSupport)
/* harmony export */ });
/* harmony import */ var _components_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/AnnotationQueryEditor.tsx");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/guards.ts");


const CloudWatchAnnotationSupport = {
  // converts legacy angular style queries to new format. Also sets the same default values as in the deprecated angular directive
  prepareAnnotation: query => {
    if ((0,_guards__WEBPACK_IMPORTED_MODULE_1__.isCloudWatchAnnotation)(query)) {
      return query;
    }

    return {
      // setting AnnotationQuery props explicitly since spreading would incorrectly use props that should be on the target only
      datasource: query.datasource,
      enable: query.enable,
      iconColor: query.iconColor,
      name: query.name,
      builtIn: query.builtIn,
      hide: query.hide,
      target: Object.assign({}, query.target, query, {
        statistic: query.statistic || 'Average',
        region: query.region || 'default',
        queryMode: 'Annotations',
        refId: query.refId || 'annotationQuery'
      })
    };
  },
  // return undefined if query is not complete so that annotation query execution is quietly skipped
  prepareQuery: anno => {
    if (!anno.target) {
      return undefined;
    }

    const {
      prefixMatching,
      actionPrefix,
      alarmNamePrefix,
      statistic,
      namespace,
      metricName,
      dimensions = {}
    } = anno.target;
    const validPrefixMatchingQuery = !!prefixMatching && !!actionPrefix && !!alarmNamePrefix;
    const validMetricStatQuery = !prefixMatching && !!namespace && !!metricName && !!statistic && !!Object.values(dimensions).length;

    if (validPrefixMatchingQuery || validMetricStatQuery) {
      return anno.target;
    }

    return undefined;
  },
  QueryEditor: _components_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_0__.AnnotationQueryEditor
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/aws_url.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeUrl": () => (/* binding */ encodeUrl)
/* harmony export */ });
const JSURL = __webpack_require__("./.yarn/cache/jsurl-npm-0.1.5-9e17f93783-50b614908d.zip/node_modules/jsurl/index.js");

function encodeUrl(obj, region) {
  return `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#logs-insights:queryDetail=${JSURL.stringify(obj)}`;
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/SQLGenerator.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SQLGenerator)
/* harmony export */ });
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/expressions.ts");


class SQLGenerator {
  constructor(templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)()) {
    this.templateSrv = templateSrv;
  }

  expressionToSqlQuery({
    select,
    from,
    where,
    groupBy,
    orderBy,
    orderByDirection,
    limit
  }) {
    var _select$parameters, _where$expressions$le, _where$expressions;

    if (!from || !(select !== null && select !== void 0 && select.name) || !(select !== null && select !== void 0 && (_select$parameters = select.parameters) !== null && _select$parameters !== void 0 && _select$parameters.length)) {
      return undefined;
    }

    let parts = [];
    this.appendSelect(select, parts);
    this.appendFrom(from, parts);
    this.appendWhere(where, parts, true, (_where$expressions$le = where === null || where === void 0 ? void 0 : (_where$expressions = where.expressions) === null || _where$expressions === void 0 ? void 0 : _where$expressions.length) !== null && _where$expressions$le !== void 0 ? _where$expressions$le : 0);
    this.appendGroupBy(groupBy, parts);
    this.appendOrderBy(orderBy, orderByDirection, parts);
    this.appendLimit(limit, parts);
    return parts.join(' ');
  }

  appendSelect(select, parts) {
    parts.push('SELECT');
    this.appendFunction(select, parts);
  }

  appendFrom(from, parts) {
    var _from$property$name, _from$property;

    parts.push('FROM');
    (from === null || from === void 0 ? void 0 : from.type) === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Function ? this.appendFunction(from, parts) : parts.push(this.formatValue((_from$property$name = from === null || from === void 0 ? void 0 : (_from$property = from.property) === null || _from$property === void 0 ? void 0 : _from$property.name) !== null && _from$property$name !== void 0 ? _from$property$name : ''));
  }

  appendWhere(filter, parts, isTopLevelExpression, topLevelExpressionsCount) {
    if (!filter) {
      return;
    }

    const hasChildExpressions = 'expressions' in filter && filter.expressions.length > 0;

    if (isTopLevelExpression && hasChildExpressions) {
      parts.push('WHERE');
    }

    if (filter.type === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.And) {
      const andParts = [];
      filter.expressions.map(exp => this.appendWhere(exp, andParts, false, topLevelExpressionsCount));

      if (andParts.length === 0) {
        return;
      }

      const andCombined = andParts.join(' AND ');
      const wrapInParentheses = !isTopLevelExpression && topLevelExpressionsCount > 1 && andParts.length > 1;
      return parts.push(wrapInParentheses ? `(${andCombined})` : andCombined);
    }

    if (filter.type === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Or) {
      const orParts = [];
      filter.expressions.map(exp => this.appendWhere(exp, orParts, false, topLevelExpressionsCount));

      if (orParts.length === 0) {
        return;
      }

      const orCombined = orParts.join(' OR ');
      const wrapInParentheses = !isTopLevelExpression && topLevelExpressionsCount > 1 && orParts.length > 1;
      parts.push(wrapInParentheses ? `(${orCombined})` : orCombined);
      return;
    }

    if (filter.type === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Operator) {
      return this.appendOperator(filter, parts);
    }
  }

  appendGroupBy(groupBy, parts) {
    const groupByParts = [];

    for (const expression of (_groupBy$expressions = groupBy === null || groupBy === void 0 ? void 0 : groupBy.expressions) !== null && _groupBy$expressions !== void 0 ? _groupBy$expressions : []) {
      var _groupBy$expressions;

      if ((expression === null || expression === void 0 ? void 0 : expression.type) !== _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.GroupBy || !expression.property.name) {
        continue;
      }

      groupByParts.push(this.formatValue(expression.property.name));
    }

    if (groupByParts.length > 0) {
      parts.push(`GROUP BY ${groupByParts.join(', ')}`);
    }
  }

  appendOrderBy(orderBy, orderByDirection, parts) {
    if (orderBy) {
      parts.push('ORDER BY');
      this.appendFunction(orderBy, parts);
      parts.push(orderByDirection !== null && orderByDirection !== void 0 ? orderByDirection : 'ASC');
    }
  }

  appendLimit(limit, parts) {
    limit && parts.push(`LIMIT ${limit}`);
  }

  appendOperator(expression, parts, prefix) {
    const {
      property,
      operator
    } = expression;

    if (!property.name || !operator.name || !operator.value) {
      return;
    }

    parts.push(`${this.formatValue(property.name)} ${operator.name} '${operator.value}'`);
  }

  appendFunction(select, parts) {
    var _select$parameters2;

    if (!(select !== null && select !== void 0 && select.name)) {
      return;
    }

    const params = ((_select$parameters2 = select.parameters) !== null && _select$parameters2 !== void 0 ? _select$parameters2 : []).map(p => p.name && this.formatValue(p.name)).filter(Boolean).join(', ');
    parts.push(`${select.name}(${params})`);
  }

  formatValue(label) {
    const specialCharacters = /[/\s\.-]/; // slash, space, dot or dash

    const interpolated = this.templateSrv.replace(label, {}, 'raw');

    if (specialCharacters.test(interpolated)) {
      return `"${label}"`;
    }

    return label;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/CompletionItemProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SQLCompletionItemProvider": () => (/* binding */ SQLCompletionItemProvider)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/CompletionItemProvider.ts");
/* harmony import */ var _monarch_commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/commands.ts");
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/types.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts");
/* harmony import */ var _statementPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/statementPosition.ts");
/* harmony import */ var _suggestionKind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/suggestionKind.ts");
/* harmony import */ var _tokenUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/tokenUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/types.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class SQLCompletionItemProvider extends _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_2__.CompletionItemProvider {
  constructor(datasource, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)()) {
    super(datasource, templateSrv);

    _defineProperty(this, "region", void 0);

    this.region = datasource.getActualRegion();
    this.getStatementPosition = _statementPosition__WEBPACK_IMPORTED_MODULE_6__.getStatementPosition;
    this.getSuggestionKinds = _suggestionKind__WEBPACK_IMPORTED_MODULE_7__.getSuggestionKinds;
    this.tokenTypes = _types__WEBPACK_IMPORTED_MODULE_9__.SQLTokenTypes;
  }

  setRegion(region) {
    this.region = region;
  }

  async getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position) {
    let suggestions = [];
    const invalidRangeToken = (currentToken === null || currentToken === void 0 ? void 0 : currentToken.isWhiteSpace()) || (currentToken === null || currentToken === void 0 ? void 0 : currentToken.isParenthesis());
    const range = invalidRangeToken || !(currentToken !== null && currentToken !== void 0 && currentToken.range) ? monaco.Range.fromPositions(position) : currentToken === null || currentToken === void 0 ? void 0 : currentToken.range;

    const toCompletionItem = (value, rest = {}) => {
      const item = Object.assign({
        label: value,
        insertText: value,
        kind: monaco.languages.CompletionItemKind.Field,
        range,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.Medium
      }, rest);
      return item;
    };

    function addSuggestion(value, rest = {}) {
      suggestions = [...suggestions, toCompletionItem(value, rest)];
    }

    for (const suggestion of suggestionKinds) {
      switch (suggestion) {
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.SelectKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.SELECT, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.SELECT} $0`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST
          });
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.FunctionsWithArguments:
          _language__WEBPACK_IMPORTED_MODULE_5__.STATISTICS.map(s => addSuggestion(s, {
            insertText: `${s}($0)`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Function
          }));
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.FunctionsWithoutArguments:
          _language__WEBPACK_IMPORTED_MODULE_5__.STATISTICS.map(s => addSuggestion(s, {
            insertText: `${s}() `,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Function
          }));
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.Metrics:
          {
            const namespaceToken = (0,_tokenUtils__WEBPACK_IMPORTED_MODULE_8__.getNamespaceToken)(currentToken);

            if (namespaceToken !== null && namespaceToken !== void 0 && namespaceToken.value) {
              // if a namespace is specified, only suggest metrics for the namespace
              const metrics = await this.datasource.getMetrics(this.templateSrv.replace(namespaceToken === null || namespaceToken === void 0 ? void 0 : namespaceToken.value.replace(/\"/g, '')), this.templateSrv.replace(this.region));
              metrics.map(m => addSuggestion(m.value));
            } else {
              // If no namespace is specified in the query, just list all metrics
              const metrics = await this.datasource.getAllMetrics(this.templateSrv.replace(this.region));
              (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)(metrics.map(m => m.metricName)).map(m => addSuggestion(m, {
                insertText: m
              }));
            }
          }
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.FromKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.FROM, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.FROM} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST
          });
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.SchemaKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.SCHEMA, {
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.High,
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.SCHEMA}($0)`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Function
          });
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.Namespaces:
          const metricNameToken = (0,_tokenUtils__WEBPACK_IMPORTED_MODULE_8__.getMetricNameToken)(currentToken);
          let namespaces = [];

          if (metricNameToken !== null && metricNameToken !== void 0 && metricNameToken.value) {
            // if a metric is specified, only suggest namespaces that actually have that metric
            const metrics = await this.datasource.getAllMetrics(this.region);
            const metricName = this.templateSrv.replace(metricNameToken.value);
            namespaces = metrics.filter(m => m.metricName === metricName).map(m => m.namespace);
          } else {
            // if no metric is specified, just suggest all namespaces
            const ns = await this.datasource.getNamespaces();
            namespaces = ns.map(n => n.value);
          }

          namespaces.map(n => addSuggestion(`"${n}"`, {
            insertText: `"${n}"`
          }));
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.LabelKeys:
          {
            const metricNameToken = (0,_tokenUtils__WEBPACK_IMPORTED_MODULE_8__.getMetricNameToken)(currentToken);
            const namespaceToken = (0,_tokenUtils__WEBPACK_IMPORTED_MODULE_8__.getNamespaceToken)(currentToken);

            if (namespaceToken !== null && namespaceToken !== void 0 && namespaceToken.value) {
              var _metricNameToken$valu;

              let dimensionFilter = {};
              let labelKeyTokens;

              if (statementPosition === _monarch_types__WEBPACK_IMPORTED_MODULE_4__.StatementPosition.SchemaFuncExtraArgument) {
                labelKeyTokens = namespaceToken === null || namespaceToken === void 0 ? void 0 : namespaceToken.getNextUntil(this.tokenTypes.Parenthesis, [this.tokenTypes.Delimiter, this.tokenTypes.Whitespace]);
              } else if (statementPosition === _monarch_types__WEBPACK_IMPORTED_MODULE_4__.StatementPosition.AfterGroupByKeywords) {
                labelKeyTokens = currentToken === null || currentToken === void 0 ? void 0 : currentToken.getPreviousUntil(this.tokenTypes.Keyword, [this.tokenTypes.Delimiter, this.tokenTypes.Whitespace]);
              }

              dimensionFilter = (labelKeyTokens || []).reduce((acc, curr) => {
                return Object.assign({}, acc, {
                  [curr.value]: null
                });
              }, {});
              const keys = await this.datasource.getDimensionKeys(this.templateSrv.replace(namespaceToken.value.replace(/\"/g, '')), this.templateSrv.replace(this.region), dimensionFilter, (_metricNameToken$valu = metricNameToken === null || metricNameToken === void 0 ? void 0 : metricNameToken.value) !== null && _metricNameToken$valu !== void 0 ? _metricNameToken$valu : '');
              keys.map(m => {
                const key = /[\s\.-]/.test(m.value) ? `"${m.value}"` : m.value;
                addSuggestion(key);
              });
            }
          }
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.LabelValues:
          {
            var _currentToken$getPrev;

            const namespaceToken = (0,_tokenUtils__WEBPACK_IMPORTED_MODULE_8__.getNamespaceToken)(currentToken);
            const metricNameToken = (0,_tokenUtils__WEBPACK_IMPORTED_MODULE_8__.getMetricNameToken)(currentToken);
            const labelKey = currentToken === null || currentToken === void 0 ? void 0 : (_currentToken$getPrev = currentToken.getPreviousNonWhiteSpaceToken()) === null || _currentToken$getPrev === void 0 ? void 0 : _currentToken$getPrev.getPreviousNonWhiteSpaceToken();

            if (namespaceToken !== null && namespaceToken !== void 0 && namespaceToken.value && labelKey !== null && labelKey !== void 0 && labelKey.value && metricNameToken !== null && metricNameToken !== void 0 && metricNameToken.value) {
              const values = await this.datasource.getDimensionValues(this.templateSrv.replace(this.region), this.templateSrv.replace(namespaceToken.value.replace(/\"/g, '')), this.templateSrv.replace(metricNameToken.value), this.templateSrv.replace(labelKey.value), {});
              values.map(o => addSuggestion(`'${o.value}'`, {
                insertText: `'${o.value}' `,
                command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST
              }));
            }
          }
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.LogicalOperators:
          _language__WEBPACK_IMPORTED_MODULE_5__.LOGICAL_OPERATORS.map(o => addSuggestion(`${o}`, {
            insertText: `${o} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.MediumHigh
          }));
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.WhereKeyword:
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.WHERE}`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.WHERE} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.High
          });
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.ComparisonOperators:
          _language__WEBPACK_IMPORTED_MODULE_5__.COMPARISON_OPERATORS.map(o => addSuggestion(`${o}`, {
            insertText: `${o} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST
          }));
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.GroupByKeywords:
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.GROUP} ${_language__WEBPACK_IMPORTED_MODULE_5__.BY}`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.GROUP} ${_language__WEBPACK_IMPORTED_MODULE_5__.BY} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.MediumHigh
          });
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.OrderByKeywords:
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.ORDER} ${_language__WEBPACK_IMPORTED_MODULE_5__.BY}`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.ORDER} ${_language__WEBPACK_IMPORTED_MODULE_5__.BY} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.Medium
          });
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.LimitKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.LIMIT, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.LIMIT} `,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.MediumLow
          });
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.SortOrderDirectionKeyword:
          [_language__WEBPACK_IMPORTED_MODULE_5__.ASC, _language__WEBPACK_IMPORTED_MODULE_5__.DESC].map(s => addSuggestion(s, {
            insertText: `${s} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST
          }));
          break;
      }
    } // always suggest template variables


    this.templateVariables.map(v => {
      addSuggestion(v, {
        range,
        label: v,
        insertText: v,
        kind: monaco.languages.CompletionItemKind.Variable,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.Low
      });
    });
    return suggestions;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/statementPosition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStatementPosition": () => (/* binding */ getStatementPosition)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/types.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/types.ts");



function getStatementPosition(currentToken) {
  var _currentToken$getPrev, _previousKeyword$getP, _previousKeyword$getP2, _previousNonWhiteSpac, _previousKeyword$getP3, _previousNonWhiteSpac2;

  const previousNonWhiteSpace = currentToken === null || currentToken === void 0 ? void 0 : currentToken.getPreviousNonWhiteSpaceToken();
  const previousKeyword = currentToken === null || currentToken === void 0 ? void 0 : currentToken.getPreviousKeyword();
  const previousIsSlash = currentToken === null || currentToken === void 0 ? void 0 : (_currentToken$getPrev = currentToken.getPreviousNonWhiteSpaceToken()) === null || _currentToken$getPrev === void 0 ? void 0 : _currentToken$getPrev.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Operator, '/');

  if (currentToken === null || currentToken.isWhiteSpace() && currentToken.previous === null || currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.SELECT) && currentToken.previous === null || previousIsSlash || currentToken.isIdentifier() && (previousIsSlash || (currentToken === null || currentToken === void 0 ? void 0 : currentToken.previous) === null)) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SelectKeyword;
  }

  if ((previousNonWhiteSpace === null || previousNonWhiteSpace === void 0 ? void 0 : previousNonWhiteSpace.value) === _language__WEBPACK_IMPORTED_MODULE_1__.SELECT) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectKeyword;
  }

  if ((previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, '(') || currentToken !== null && currentToken !== void 0 && currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, '()')) && (previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === _language__WEBPACK_IMPORTED_MODULE_1__.SELECT) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectFuncFirstArgument;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === _language__WEBPACK_IMPORTED_MODULE_1__.SELECT && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isParenthesis()) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FromKeyword;
  }

  if ((previousNonWhiteSpace === null || previousNonWhiteSpace === void 0 ? void 0 : previousNonWhiteSpace.value) === _language__WEBPACK_IMPORTED_MODULE_1__.FROM) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFromKeyword;
  }

  if ((previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, '(') || currentToken !== null && currentToken !== void 0 && currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, '()')) && (previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === _language__WEBPACK_IMPORTED_MODULE_1__.SCHEMA) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SchemaFuncFirstArgument;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === _language__WEBPACK_IMPORTED_MODULE_1__.SCHEMA && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Delimiter, ',')) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SchemaFuncExtraArgument;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === _language__WEBPACK_IMPORTED_MODULE_1__.FROM && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isDoubleQuotedString() || (previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === _language__WEBPACK_IMPORTED_MODULE_1__.FROM && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isVariable() || (previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === _language__WEBPACK_IMPORTED_MODULE_1__.SCHEMA && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ')')) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFrom;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === _language__WEBPACK_IMPORTED_MODULE_1__.WHERE && (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isKeyword() || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, '(') || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Operator, _language__WEBPACK_IMPORTED_MODULE_1__.AND))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereKey;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === _language__WEBPACK_IMPORTED_MODULE_1__.WHERE && (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isIdentifier() || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isDoubleQuotedString())) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereComparisonOperator;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === _language__WEBPACK_IMPORTED_MODULE_1__.WHERE && (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Operator, _language__WEBPACK_IMPORTED_MODULE_1__.EQUALS) || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Operator, _language__WEBPACK_IMPORTED_MODULE_1__.NOT_EQUALS))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereValue;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === _language__WEBPACK_IMPORTED_MODULE_1__.WHERE && (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isString() || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ')'))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterWhereValue;
  }

  if (previousKeyword !== null && previousKeyword !== void 0 && previousKeyword.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.BY) && previousKeyword !== null && previousKeyword !== void 0 && (_previousKeyword$getP = previousKeyword.getPreviousKeyword()) !== null && _previousKeyword$getP !== void 0 && _previousKeyword$getP.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.GROUP) && (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.BY) || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Delimiter, ','))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterGroupByKeywords;
  }

  if (previousKeyword !== null && previousKeyword !== void 0 && previousKeyword.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.BY) && previousKeyword !== null && previousKeyword !== void 0 && (_previousKeyword$getP2 = previousKeyword.getPreviousKeyword()) !== null && _previousKeyword$getP2 !== void 0 && _previousKeyword$getP2.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.GROUP) && (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isIdentifier() || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isDoubleQuotedString())) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterGroupBy;
  }

  if (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.BY) && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && (_previousNonWhiteSpac = previousNonWhiteSpace.getPreviousKeyword()) !== null && _previousNonWhiteSpac !== void 0 && _previousNonWhiteSpac.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.ORDER)) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByKeywords;
  }

  if (previousKeyword !== null && previousKeyword !== void 0 && previousKeyword.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.BY) && previousKeyword !== null && previousKeyword !== void 0 && (_previousKeyword$getP3 = previousKeyword.getPreviousKeyword()) !== null && _previousKeyword$getP3 !== void 0 && _previousKeyword$getP3.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.ORDER) && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis) && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && (_previousNonWhiteSpac2 = previousNonWhiteSpace.getPreviousNonWhiteSpaceToken()) !== null && _previousNonWhiteSpac2 !== void 0 && _previousNonWhiteSpac2.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Function)) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByFunction;
  }

  if (previousKeyword !== null && previousKeyword !== void 0 && previousKeyword.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.DESC) || previousKeyword !== null && previousKeyword !== void 0 && previousKeyword.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.ASC)) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByDirection;
  }

  return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Unknown;
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/suggestionKind.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSuggestionKinds": () => (/* binding */ getSuggestionKinds)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/types.ts");

function getSuggestionKinds(statementPosition) {
  switch (statementPosition) {
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SelectKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SelectKeyword];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectFuncFirstArgument:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Metrics];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFromKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Namespaces, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SchemaKeyword];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SchemaFuncFirstArgument:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Namespaces];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SchemaFuncExtraArgument:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LabelKeys];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FromKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FromKeyword];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFrom:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.WhereKeyword, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.GroupByKeywords, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.OrderByKeywords, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereKey:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LabelKeys];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereComparisonOperator:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.ComparisonOperators];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereValue:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LabelValues];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterWhereValue:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LogicalOperators, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.GroupByKeywords, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.OrderByKeywords, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterGroupByKeywords:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LabelKeys];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterGroupBy:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.OrderByKeywords, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByKeywords:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithoutArguments];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByFunction:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SortOrderDirectionKeyword, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByDirection:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword];
  }

  return [];
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/tokenUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFromKeywordToken": () => (/* binding */ getFromKeywordToken),
/* harmony export */   "getMetricNameToken": () => (/* binding */ getMetricNameToken),
/* harmony export */   "getNamespaceToken": () => (/* binding */ getNamespaceToken),
/* harmony export */   "getSelectStatisticToken": () => (/* binding */ getSelectStatisticToken),
/* harmony export */   "getSelectToken": () => (/* binding */ getSelectToken)
/* harmony export */ });
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/types.ts");


const getSelectToken = currentToken => {
  var _currentToken$getPrev;

  return (_currentToken$getPrev = currentToken === null || currentToken === void 0 ? void 0 : currentToken.getPreviousOfType(_types__WEBPACK_IMPORTED_MODULE_1__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_0__.SELECT)) !== null && _currentToken$getPrev !== void 0 ? _currentToken$getPrev : null;
};
const getSelectStatisticToken = currentToken => {
  var _getSelectToken;

  const assumedStatisticToken = (_getSelectToken = getSelectToken(currentToken)) === null || _getSelectToken === void 0 ? void 0 : _getSelectToken.getNextNonWhiteSpaceToken();
  return assumedStatisticToken !== null && assumedStatisticToken !== void 0 && assumedStatisticToken.isVariable() || assumedStatisticToken !== null && assumedStatisticToken !== void 0 && assumedStatisticToken.isFunction() ? assumedStatisticToken : null;
};
const getMetricNameToken = currentToken => {
  var _getSelectStatisticTo, _getSelectStatisticTo2;

  // statistic function is followed by `(` and then an argument
  const assumedMetricNameToken = (_getSelectStatisticTo = getSelectStatisticToken(currentToken)) === null || _getSelectStatisticTo === void 0 ? void 0 : (_getSelectStatisticTo2 = _getSelectStatisticTo.next) === null || _getSelectStatisticTo2 === void 0 ? void 0 : _getSelectStatisticTo2.next;
  return assumedMetricNameToken !== null && assumedMetricNameToken !== void 0 && assumedMetricNameToken.isVariable() || assumedMetricNameToken !== null && assumedMetricNameToken !== void 0 && assumedMetricNameToken.isIdentifier() ? assumedMetricNameToken : null;
};
const getFromKeywordToken = currentToken => {
  const selectToken = getSelectToken(currentToken);
  return selectToken === null || selectToken === void 0 ? void 0 : selectToken.getNextOfType(_types__WEBPACK_IMPORTED_MODULE_1__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_0__.FROM);
};
const getNamespaceToken = currentToken => {
  var _nextNonWhiteSpace$ne;

  const fromToken = getFromKeywordToken(currentToken);
  const nextNonWhiteSpace = fromToken === null || fromToken === void 0 ? void 0 : fromToken.getNextNonWhiteSpaceToken();

  if (nextNonWhiteSpace !== null && nextNonWhiteSpace !== void 0 && nextNonWhiteSpace.isDoubleQuotedString() || nextNonWhiteSpace !== null && nextNonWhiteSpace !== void 0 && nextNonWhiteSpace.isVariable() && (nextNonWhiteSpace === null || nextNonWhiteSpace === void 0 ? void 0 : nextNonWhiteSpace.value.toUpperCase()) !== _language__WEBPACK_IMPORTED_MODULE_0__.SCHEMA) {
    // schema is not used
    return nextNonWhiteSpace;
  } else if (nextNonWhiteSpace !== null && nextNonWhiteSpace !== void 0 && nextNonWhiteSpace.isKeyword() && (_nextNonWhiteSpace$ne = nextNonWhiteSpace.next) !== null && _nextNonWhiteSpace$ne !== void 0 && _nextNonWhiteSpace$ne.is(_types__WEBPACK_IMPORTED_MODULE_1__.SQLTokenTypes.Parenthesis, '(')) {
    var _nextNonWhiteSpace$ne2;

    // schema is specified
    const assumedNamespaceToken = (_nextNonWhiteSpace$ne2 = nextNonWhiteSpace.next) === null || _nextNonWhiteSpace$ne2 === void 0 ? void 0 : _nextNonWhiteSpace$ne2.next;

    if (assumedNamespaceToken !== null && assumedNamespaceToken !== void 0 && assumedNamespaceToken.isDoubleQuotedString() || assumedNamespaceToken !== null && assumedNamespaceToken !== void 0 && assumedNamespaceToken.isVariable()) {
      return assumedNamespaceToken;
    }
  }

  return null;
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SQLTokenTypes": () => (/* binding */ SQLTokenTypes)
/* harmony export */ });
const SQLTokenTypes = {
  Parenthesis: 'delimiter.parenthesis.sql',
  Whitespace: 'white.sql',
  Keyword: 'keyword.sql',
  Delimiter: 'delimiter.sql',
  Operator: 'operator.sql',
  Identifier: 'identifier.sql',
  Type: 'type.sql',
  Function: 'predefined.sql',
  Number: 'number.sql',
  String: 'string.sql',
  Variable: 'variable.sql'
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/definition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cloudWatchSqlLanguageDefinition = {
  id: 'cloudwatch-sql',
  extensions: ['.cloudwatchSql'],
  aliases: ['CloudWatch', 'cloudwatch', 'CloudWatchSQL'],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts"))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudWatchSqlLanguageDefinition);

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AND": () => (/* binding */ AND),
/* harmony export */   "ASC": () => (/* binding */ ASC),
/* harmony export */   "BY": () => (/* binding */ BY),
/* harmony export */   "COMPARISON_OPERATORS": () => (/* binding */ COMPARISON_OPERATORS),
/* harmony export */   "DESC": () => (/* binding */ DESC),
/* harmony export */   "EQUALS": () => (/* binding */ EQUALS),
/* harmony export */   "FROM": () => (/* binding */ FROM),
/* harmony export */   "GROUP": () => (/* binding */ GROUP),
/* harmony export */   "KEYWORDS": () => (/* binding */ KEYWORDS),
/* harmony export */   "LIMIT": () => (/* binding */ LIMIT),
/* harmony export */   "LOGICAL_OPERATORS": () => (/* binding */ LOGICAL_OPERATORS),
/* harmony export */   "NOT_EQUALS": () => (/* binding */ NOT_EQUALS),
/* harmony export */   "ORDER": () => (/* binding */ ORDER),
/* harmony export */   "SCHEMA": () => (/* binding */ SCHEMA),
/* harmony export */   "SELECT": () => (/* binding */ SELECT),
/* harmony export */   "STATISTICS": () => (/* binding */ STATISTICS),
/* harmony export */   "WHERE": () => (/* binding */ WHERE),
/* harmony export */   "WITH": () => (/* binding */ WITH),
/* harmony export */   "conf": () => (/* binding */ conf),
/* harmony export */   "language": () => (/* binding */ language)
/* harmony export */ });
const SELECT = 'SELECT';
const FROM = 'FROM';
const WHERE = 'WHERE';
const GROUP = 'GROUP';
const ORDER = 'ORDER';
const BY = 'BY';
const DESC = 'DESC';
const ASC = 'ASC';
const LIMIT = 'LIMIT';
const WITH = 'WITH';
const SCHEMA = 'SCHEMA';
const KEYWORDS = [SELECT, FROM, WHERE, GROUP, ORDER, BY, DESC, ASC, LIMIT, WITH, SCHEMA];
const STATISTICS = ['AVG', 'COUNT', 'MAX', 'MIN', 'SUM'];
const AND = 'AND';
const LOGICAL_OPERATORS = [AND];
const EQUALS = '=';
const NOT_EQUALS = '!=';
const COMPARISON_OPERATORS = [EQUALS, NOT_EQUALS];
const language = {
  defaultToken: '',
  tokenPostfix: '.sql',
  ignoreCase: true,
  brackets: [{
    open: '[',
    close: ']',
    token: 'delimiter.square'
  }, {
    open: '(',
    close: ')',
    token: 'delimiter.parenthesis'
  }],
  keywords: KEYWORDS,
  operators: LOGICAL_OPERATORS,
  builtinFunctions: STATISTICS,
  tokenizer: {
    root: [[/\$[a-zA-Z0-9-_]+/, 'variable'], {
      include: '@comments'
    }, {
      include: '@whitespace'
    }, {
      include: '@numbers'
    }, {
      include: '@strings'
    }, {
      include: '@complexIdentifiers'
    }, [/[;,.]/, 'delimiter'], [/[()]/, '@brackets'], [/[\w@#$]+/, {
      cases: {
        '@keywords': 'keyword',
        '@operators': 'operator',
        '@builtinFunctions': 'predefined',
        '@default': 'identifier'
      }
    }], [/[=!%&+\-*/|~^]/, 'operator'] // TODO: strip these options
    ],
    whitespace: [[/\s+/, 'white']],
    comments: [[/--+.*/, 'comment']],
    comment: [[/[^*/]+/, 'comment'], [/./, 'comment']],
    numbers: [[/0[xX][0-9a-fA-F]*/, 'number'], [/[$][+-]*\d*(\.\d*)?/, 'number'], [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, 'number']],
    strings: [[/N'/, {
      token: 'string',
      next: '@string'
    }], [/'/, {
      token: 'string',
      next: '@string'
    }], [/"/, {
      token: 'type',
      next: '@string_double'
    }]],
    string: [[/[^']+/, 'string'], [/''/, 'string'], [/'/, {
      token: 'string',
      next: '@pop'
    }]],
    string_double: [[/[^\\"]+/, 'type'], [/"/, 'type', '@pop']],
    complexIdentifiers: [[/\[/, {
      token: 'identifier.quote',
      next: '@bracketedIdentifier'
    }], [/"/, {
      token: 'identifier.quote',
      next: '@quotedIdentifier'
    }]],
    bracketedIdentifier: [[/[^\]]+/, 'identifier'], [/]]/, 'identifier'], [/]/, {
      token: 'identifier.quote',
      next: '@pop'
    }]],
    quotedIdentifier: [[/[^"]+/, 'identifier'], [/""/, 'identifier'], [/"/, {
      token: 'identifier.quote',
      next: '@pop'
    }]]
  }
};
const conf = {
  comments: {
    lineComment: '--',
    blockComment: ['/*', '*/']
  },
  brackets: [['{', '}'], ['[', ']'], ['(', ')']],
  autoClosingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }],
  surroundingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }]
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/AnnotationQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationQueryEditor": () => (/* binding */ AnnotationQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/guards.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _MetricStatEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/MetricStatEditor/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Space, _Space2;










const AnnotationQueryEditor = props => {
  const {
    query,
    onChange,
    datasource
  } = props;
  const [regions, regionIsLoading] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useRegions)(datasource);

  if (!(0,_guards__WEBPACK_IMPORTED_MODULE_3__.isCloudWatchAnnotationQuery)(query)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "error",
      title: "Invalid annotation query",
      topSpacing: 2,
      children: JSON.stringify(query, null, 4)
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorHeader, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.InlineSelect, {
        label: "Region",
        value: regions.find(v => v.value === query.region),
        placeholder: "Select region",
        allowCustomValue: true,
        onChange: ({
          value: region
        }) => region && onChange(Object.assign({}, query, {
          region
        })),
        options: regions,
        isLoading: regionIsLoading
      })
    }), _Space || (_Space = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.Space, {
      v: 0.5
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MetricStatEditor__WEBPACK_IMPORTED_MODULE_5__.MetricStatEditor, Object.assign({}, props, {
      refId: query.refId,
      metricStat: query,
      disableExpressions: true,
      onChange: metricStat => onChange(Object.assign({}, query, metricStat)),
      onRunQuery: () => {}
    })), _Space2 || (_Space2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.Space, {
      v: 0.5
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Period",
        width: 26,
        tooltip: "Minimum interval between points in seconds.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          value: query.period || '',
          placeholder: "auto",
          onChange: event => onChange(Object.assign({}, query, {
            period: event.target.value
          }))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Enable Prefix Matching",
        optional: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorSwitch, {
          value: query.prefixMatching,
          onChange: e => {
            onChange(Object.assign({}, query, {
              prefixMatching: e.currentTarget.checked
            }));
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Action",
        optional: true,
        disabled: !query.prefixMatching,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          value: query.actionPrefix || '',
          onChange: event => onChange(Object.assign({}, query, {
            actionPrefix: event.target.value
          }))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Alarm Name",
        optional: true,
        disabled: !query.prefixMatching,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          value: query.alarmNamePrefix || '',
          onChange: event => onChange(Object.assign({}, query, {
            alarmNamePrefix: event.target.value
          }))
        })
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/CloudWatchLink.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudWatchLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _aws_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/aws_url.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CloudWatchLink extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      href: ''
    });
  }

  async componentDidUpdate(prevProps) {
    const {
      panelData: panelDataNew
    } = this.props;
    const {
      panelData: panelDataOld
    } = prevProps;

    if (panelDataOld !== panelDataNew && panelDataNew !== null && panelDataNew !== void 0 && panelDataNew.request) {
      const href = this.getExternalLink();
      this.setState({
        href
      });
    }
  }

  getExternalLink() {
    var _panelData$request, _query$expression, _query$logGroupNames;

    const {
      query,
      panelData,
      datasource
    } = this.props;
    const range = panelData === null || panelData === void 0 ? void 0 : (_panelData$request = panelData.request) === null || _panelData$request === void 0 ? void 0 : _panelData$request.range;

    if (!range) {
      return '';
    }

    const start = range.from.toISOString();
    const end = range.to.toISOString();
    const urlProps = {
      end,
      start,
      timeType: 'ABSOLUTE',
      tz: 'UTC',
      editorString: (_query$expression = query.expression) !== null && _query$expression !== void 0 ? _query$expression : '',
      isLiveTail: false,
      source: (_query$logGroupNames = query.logGroupNames) !== null && _query$logGroupNames !== void 0 ? _query$logGroupNames : []
    };
    return (0,_aws_url__WEBPACK_IMPORTED_MODULE_2__.encodeUrl)(urlProps, datasource.getActualRegion(query.region));
  }

  render() {
    const {
      href
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        name: "share-alt"
      })), " CloudWatch Logs Insights"]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@grafana-aws-sdk-npm-0.0.36-8ab4b07904-c243f7c900.zip/node_modules/@grafana/aws-sdk/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _XrayLinkConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/XrayLinkConfig.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;














const ConfigEditor = props => {
  const {
    options
  } = props;
  const datasource = useDatasource(options.name);
  useAuthenticationWarning(options.jsonData);
  const logsTimeoutError = useTimoutValidation(props.options.jsonData.logsTimeout);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_1__.ConnectionConfig, Object.assign({}, props, {
      loadRegions: datasource && (() => datasource.getRegions().then(r => r.filter(r => r.value !== 'default').map(v => v.value))),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Namespaces of Custom Metrics",
        labelWidth: 28,
        tooltip: "Namespaces of Custom Metrics.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          width: 60,
          placeholder: "Namespace1,Namespace2",
          value: options.jsonData.customMetricsNamespaces || '',
          onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(props, 'customMetricsNamespaces')
        })
      })
    })), _h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
      className: "page-heading",
      children: "CloudWatch Logs"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Timeout",
        labelWidth: 28,
        tooltip: "Custom timout for CloudWatch Logs insights queries which have max concurrency limits. Default is 15 minutes. Must be a valid duration string, such as \"15m\" \"30s\" \"2000ms\" etc.",
        invalid: Boolean(logsTimeoutError),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          width: 60,
          placeholder: "15m",
          value: options.jsonData.logsTimeout || '',
          onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(props, 'logsTimeout'),
          title: 'The timeout must be a valid duration string, such as "15m" "30s" "2000ms" etc.'
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_XrayLinkConfig__WEBPACK_IMPORTED_MODULE_8__.XrayLinkConfig, {
      onChange: uid => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)(props, 'tracingDatasourceUid', uid),
      datasourceUid: options.jsonData.tracingDatasourceUid
    })]
  });
};

function useAuthenticationWarning(jsonData) {
  const addWarning = message => {
    app_store_store__WEBPACK_IMPORTED_MODULE_7__.store.dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.createWarningNotification)('CloudWatch Authentication', message)));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (jsonData.authType === 'arn') {
      addWarning('Since grafana 7.3 authentication type "arn" is deprecated, falling back to default SDK provider');
    } else if (jsonData.authType === 'credentials' && !jsonData.profile && !jsonData.database) {
      addWarning('As of grafana 7.3 authentication type "credentials" should be used only for shared file credentials. \
             If you don\'t have a credentials file, switch to the default SDK provider for extracting credentials \
             from environment variables or IAM roles');
    }
  }, [jsonData.authType, jsonData.database, jsonData.profile]);
}

function useDatasource(datasourceName) {
  const [datasource, setDatasource] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_6__.getDatasourceSrv)().loadDatasource(datasourceName).then(datasource => {
      // It's really difficult to type .loadDatasource() because it's inherently untyped as it involves two JSON.parse()'s
      // So a "as" type assertion here is a necessary evil.
      setDatasource(datasource);
    });
  }, [datasourceName]);
  return datasource;
}

function useTimoutValidation(value) {
  const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    if (value) {
      try {
        _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.describeInterval(value);
        setErr(undefined);
      } catch (e) {
        if (e instanceof Error) {
          setErr(e.toString());
        }
      }
    } else {
      setErr(undefined);
    }
  }, 350, [value]);
  return err;
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/Dimensions/Dimensions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dimensions": () => (/* binding */ Dimensions)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _FilterItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/Dimensions/FilterItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const dimensionsToFilterConditions = dimensions => Object.entries(dimensions !== null && dimensions !== void 0 ? dimensions : {}).reduce((acc, [key, value]) => {
  if (value && typeof value === 'string') {
    const filter = {
      key,
      value,
      operator: '='
    };
    return [...acc, filter];
  }

  return acc;
}, []);

const filterConditionsToDimensions = filters => {
  return filters.reduce((acc, {
    key,
    value
  }) => {
    if (key && value) {
      return Object.assign({}, acc, {
        [key]: value
      });
    }

    return acc;
  }, {});
};

const Dimensions = ({
  metricStat,
  datasource,
  dimensionKeys,
  disableExpressions,
  onChange
}) => {
  const dimensionFilters = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => dimensionsToFilterConditions(metricStat.dimensions), [metricStat.dimensions]);
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dimensionFilters);

  const onDimensionsChange = newItems => {
    setItems(newItems); // The onChange event should only be triggered in the case there is a complete dimension object.
    // So when a new key is added that does not yet have a value, it should not trigger an onChange event.

    const newDimensions = filterConditionsToDimensions(newItems);

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(newDimensions, metricStat.dimensions)) {
      onChange(newDimensions);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorList, {
    items: items,
    onChange: onDimensionsChange,
    renderItem: makeRenderFilter(datasource, metricStat, dimensionKeys, disableExpressions)
  });
};

function makeRenderFilter(datasource, metricStat, dimensionKeys, disableExpressions) {
  function renderFilter(item, onChange, onDelete) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FilterItem__WEBPACK_IMPORTED_MODULE_3__.FilterItem, {
      filter: item,
      onChange: item => onChange(item),
      datasource: datasource,
      metricStat: metricStat,
      disableExpressions: disableExpressions,
      dimensionKeys: dimensionKeys,
      onDelete: onDelete
    });
  }

  return renderFilter;
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/Dimensions/FilterItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterItem": () => (/* binding */ FilterItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const wildcardOption = {
  value: '*',
  label: '*'
};

const excludeCurrentKey = (dimensions, currentKey) => Object.entries(dimensions !== null && dimensions !== void 0 ? dimensions : {}).reduce((acc, [key, value]) => {
  if (key !== currentKey) {
    return Object.assign({}, acc, {
      [key]: value
    });
  }

  return acc;
}, {});

const FilterItem = ({
  filter,
  metricStat: {
    region,
    namespace,
    metricName,
    dimensions
  },
  datasource,
  dimensionKeys,
  disableExpressions,
  onChange,
  onDelete
}) => {
  const dimensionsExcludingCurrentKey = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => excludeCurrentKey(dimensions !== null && dimensions !== void 0 ? dimensions : {}, filter.key), [dimensions, filter]);

  const loadDimensionValues = async () => {
    if (!filter.key) {
      return [];
    }

    return datasource.getDimensionValues(region, namespace, metricName, filter.key, dimensionsExcludingCurrentKey).then(result => {
      if (result.length && !disableExpressions) {
        result.unshift(wildcardOption);
      }

      return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.appendTemplateVariables)(datasource, result);
    });
  };

  const [state, loadOptions] = (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(loadDimensionValues, [filter.key, dimensions]);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const styles = getOperatorStyles(theme);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    "data-testid": "cloudwatch-dimensions-filter-item",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.InputGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
        "aria-label": "Dimensions filter key",
        inputId: "cloudwatch-dimensions-filter-item-key",
        width: "auto",
        value: filter.key ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(filter.key) : null,
        allowCustomValue: true,
        options: dimensionKeys,
        onChange: change => {
          if (change.label) {
            onChange({
              key: change.label,
              value: undefined
            });
          }
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.root),
        children: "="
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
        "aria-label": "Dimensions filter value",
        inputId: "cloudwatch-dimensions-filter-item-value",
        onOpenMenu: loadOptions,
        width: "auto",
        value: filter.value ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(filter.value) : null,
        allowCustomValue: true,
        isLoading: state.loading,
        options: state.value,
        onChange: change => {
          if (change.value) {
            onChange(Object.assign({}, filter, {
              value: change.value
            }));
          }
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.AccessoryButton, {
        "aria-label": "remove",
        icon: "times",
        variant: "secondary",
        onClick: onDelete,
        type: "button"
      })]
    })
  });
};
const getOperatorStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.stylesFactory)(theme => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: theme.spacing(0, 1),
    alignSelf: 'center'
  })
}));

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/DynamicLabelsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicLabelsField": () => (/* binding */ DynamicLabelsField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _dynamic_labels_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/dynamic-labels/CompletionItemProvider.ts");
/* harmony import */ var _dynamic_labels_definition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/dynamic-labels/definition.ts");
/* harmony import */ var _monarch_commands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/commands.ts");
/* harmony import */ var _monarch_register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/register.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const dynamicLabelsCompletionItemProvider = new _dynamic_labels_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_3__.DynamicLabelsCompletionItemProvider();
function DynamicLabelsField({
  label,
  width,
  onChange,
  onRunQuery
}) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.getInputStyles)({
    theme,
    width
  });
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onEditorMount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((editor, monaco) => {
    editor.onDidFocusEditorText(() => editor.trigger(_monarch_commands__WEBPACK_IMPORTED_MODULE_5__.TRIGGER_SUGGEST.id, _monarch_commands__WEBPACK_IMPORTED_MODULE_5__.TRIGGER_SUGGEST.id, {}));
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
      const text = editor.getValue();
      onChange(text);
      onRunQuery();
    });
    const containerDiv = containerRef.current;
    containerDiv !== null && editor.layout({
      width: containerDiv.clientWidth,
      height: containerDiv.clientHeight
    });
  }, [onChange, onRunQuery]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    ref: containerRef,
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.wrapper),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor, {
      containerStyles: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
          border: 1px solid ${theme.colors.action.disabledBackground};
          &:hover {
            border-color: ${theme.components.input.borderColor};
          }
        `,
      monacoOptions: {
        // without this setting, the auto-resize functionality causes an infinite loop, don't remove it!
        scrollBeyondLastLine: false,
        // These additional options are style focused and are a subset of those in the query editor in Prometheus
        fontSize: 14,
        lineNumbers: 'off',
        renderLineHighlight: 'none',
        overviewRulerLanes: 0,
        scrollbar: {
          vertical: 'hidden',
          horizontal: 'hidden'
        },
        suggestFontSize: 12,
        padding: {
          top: 6
        }
      },
      language: _dynamic_labels_definition__WEBPACK_IMPORTED_MODULE_4__["default"].id,
      value: label,
      onBlur: value => {
        if (value !== label) {
          onChange(value);
          onRunQuery();
        }
      },
      onBeforeEditorMount: monaco => (0,_monarch_register__WEBPACK_IMPORTED_MODULE_6__.registerLanguage)(monaco, _dynamic_labels_definition__WEBPACK_IMPORTED_MODULE_4__["default"], dynamicLabelsCompletionItemProvider),
      onEditorDidMount: onEditorMount
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/Forms.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryField": () => (/* binding */ QueryField),
/* harmony export */   "QueryInlineField": () => (/* binding */ QueryInlineField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;






const QueryField = ({
  label,
  tooltip,
  children
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
    width: 8,
    className: "query-keyword",
    tooltip: tooltip,
    children: label
  }), children]
});
const QueryInlineField = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: 'gf-form-inline',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(QueryField, Object.assign({}, props)), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "gf-form gf-form--grow",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gf-form-label gf-form-label--grow"
      })
    }))]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/LogGroupSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogGroupSelector": () => (/* binding */ LogGroupSelector)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const MAX_LOG_GROUPS = 20;
const MAX_VISIBLE_LOG_GROUPS = 4;
const DEBOUNCE_TIMER = 300;
const LogGroupSelector = ({
  region,
  selectedLogGroups,
  onChange,
  datasource,
  onRunQuery,
  onOpenMenu,
  refId,
  width,
  saved = true
}) => {
  const [loadingLogGroups, setLoadingLogGroups] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [availableLogGroups, setAvailableLogGroups] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const logGroupOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.unionBy)(availableLogGroups, selectedLogGroups === null || selectedLogGroups === void 0 ? void 0 : selectedLogGroups.map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption), 'value'), [availableLogGroups, selectedLogGroups]);
  const fetchLogGroupOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (region, logGroupNamePrefix) => {
    if (!datasource) {
      return [];
    }

    try {
      const logGroups = await datasource.describeLogGroups({
        refId,
        region,
        logGroupNamePrefix
      });
      return logGroups.map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption);
    } catch (err) {
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.createErrorNotification)(typeof err === 'string' ? err : JSON.stringify(err))));
      return [];
    }
  }, [datasource, refId]);

  const onLogGroupSearch = async (searchTerm, region, actionMeta) => {
    if (actionMeta.action !== 'input-change' || !datasource) {
      return;
    } // No need to fetch matching log groups if the search term isn't valid
    // This is also useful for preventing searches when a user is typing out a log group with template vars
    // See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_LogGroup.html for the source of the pattern below


    const logGroupNamePattern = /^[\.\-_/#A-Za-z0-9]+$/;

    if (!logGroupNamePattern.test(searchTerm)) {
      if (searchTerm !== '') {
        (0,app_store_store__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.createErrorNotification)('Invalid Log Group name: ' + searchTerm)));
      }

      return;
    }

    setLoadingLogGroups(true);
    const matchingLogGroups = await fetchLogGroupOptions(region, searchTerm);
    setAvailableLogGroups((0,lodash__WEBPACK_IMPORTED_MODULE_0__.unionBy)(availableLogGroups, matchingLogGroups, 'value'));
    setLoadingLogGroups(false);
  }; // Reset the log group options if the datasource or region change and are saved


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    async function resetLogGroups() {
      // Don't call describeLogGroups if datasource or region is undefined
      if (!datasource || !datasource.getActualRegion(region)) {
        setAvailableLogGroups([]);
        return;
      }

      setLoadingLogGroups(true);
      return fetchLogGroupOptions(datasource.getActualRegion(region)).then(logGroups => {
        const newSelectedLogGroups = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.intersection)(selectedLogGroups, logGroups.map(l => l.value || ''));
        onChange(newSelectedLogGroups);
        setAvailableLogGroups(logGroups);
      }).finally(() => {
        setLoadingLogGroups(false);
      });
    } // Only reset if the current datasource is saved


    saved && resetLogGroups(); // this hook shouldn't get called every time selectedLogGroups or onChange updates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datasource, region, saved]);

  const onOpenLogGroupMenu = async () => {
    if (onOpenMenu) {
      await onOpenMenu();
    }
  };

  const onLogGroupSearchDebounced = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(onLogGroupSearch, DEBOUNCE_TIMER);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.MultiSelect, {
    inputId: "default-log-groups",
    "aria-label": "Log Groups",
    allowCustomValue: true,
    options: datasource ? (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__.appendTemplateVariables)(datasource, logGroupOptions) : logGroupOptions,
    value: selectedLogGroups,
    onChange: v => onChange(v.filter(({
      value
    }) => value).map(({
      value
    }) => value)),
    onBlur: onRunQuery,
    closeMenuOnSelect: false,
    isClearable: true,
    isOptionDisabled: () => selectedLogGroups.length >= MAX_LOG_GROUPS,
    placeholder: "Choose Log Groups",
    maxVisibleValues: MAX_VISIBLE_LOG_GROUPS,
    noOptionsMessage: "No log groups available",
    isLoading: loadingLogGroups,
    onOpenMenu: onOpenLogGroupMenu,
    onInputChange: (value, actionMeta) => {
      onLogGroupSearchDebounced(value, region, actionMeta);
    },
    width: width
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/LogsCheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogsCheatSheet)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/index.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.28.0-28f20a79ff-bde93fb2be.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui_src_slate_plugins_slate_prism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/slate-plugins/slate-prism/index.ts");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/syntax.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _h2;









const CLIQ_EXAMPLES = [{
  category: 'Lambda',
  examples: [{
    title: 'View latency statistics for 5-minute intervals',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`filter @type = "REPORT" |
                           stats avg(@duration), max(@duration), min(@duration) by bin(5m)`
  }, {
    title: 'Determine the amount of overprovisioned memory',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndent`
        filter @type = "REPORT" |
        stats max(@memorySize / 1024 / 1024) as provisonedMemoryMB,
              min(@maxMemoryUsed / 1024 / 1024) as smallestMemoryRequestMB,
              avg(@maxMemoryUsed / 1024 / 1024) as avgMemoryUsedMB,
              max(@maxMemoryUsed / 1024 / 1024) as maxMemoryUsedMB,
              provisonedMemoryMB - maxMemoryUsedMB as overProvisionedMB`
  }, {
    title: 'Find the most expensive requests',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`filter @type = "REPORT" |
                           fields @requestId, @billedDuration |
                           sort by @billedDuration desc`
  }]
}, {
  category: 'VPC Flow Logs',
  examples: [{
    title: 'Average, min, and max byte transfers by source and destination IP addresses',
    expr: `stats avg(bytes), min(bytes), max(bytes) by srcAddr, dstAddr`
  }, {
    title: 'IP addresses using UDP transfer protocol',
    expr: 'filter protocol=17 | stats count(*) by srcAddr'
  }, {
    title: 'Top 10 byte transfers by source and destination IP addresses',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`stats sum(bytes) as bytesTransferred by srcAddr, dstAddr |
                           sort bytesTransferred desc |
                           limit 10`
  }, {
    title: 'Top 20 source IP addresses with highest number of rejected requests',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`filter action="REJECT" |
                           stats count(*) as numRejections by srcAddr |
                           sort numRejections desc |
                           limit 20`
  }]
}, {
  category: 'CloudTrail',
  examples: [{
    title: 'Number of log entries by service, event type, and region',
    expr: 'stats count(*) by eventSource, eventName, awsRegion'
  }, {
    title: 'Number of log entries by region and EC2 event type',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`filter eventSource="ec2.amazonaws.com" |
                           stats count(*) as eventCount by eventName, awsRegion |
                           sort eventCount desc`
  }, {
    title: 'Regions, usernames, and ARNs of newly created IAM users',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`filter eventName="CreateUser" |
                           fields awsRegion, requestParameters.userName, responseElements.user.arn`
  }]
}, {
  category: 'Common Queries',
  examples: [{
    title: '25 most recently added log events',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`fields @timestamp, @message |
                           sort @timestamp desc |
                           limit 25`
  }, {
    title: 'Number of exceptions logged every 5 minutes',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`filter @message like /Exception/ |
                           stats count(*) as exceptionCount by bin(5m) |
                           sort exceptionCount desc`
  }, {
    title: 'List of log events that are not exceptions',
    expr: 'fields @message | filter @message not like /Exception/'
  }]
}, {
  category: 'Route 53',
  examples: [{
    title: 'Number of requests received every 10  minutes by edge location',
    expr: 'stats count(*) by queryType, bin(10m)'
  }, {
    title: 'Number of unsuccessful requests by domain',
    expr: 'filter responseCode="SERVFAIL" | stats count(*) by queryName'
  }, {
    title: 'Number of requests received every 10  minutes by edge location',
    expr: 'stats count(*) as numRequests by resolverIp | sort numRequests desc | limit 10'
  }]
}, {
  category: 'AWS AppSync',
  examples: [{
    title: 'Number of unique HTTP status codes',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`fields ispresent(graphQLAPIId) as isApi |
                           filter isApi |
                           filter logType = "RequestSummary" |
                           stats count() as statusCount by statusCode |
                           sort statusCount desc`
  }, {
    title: 'Top 10 resolvers with maximum latency',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`fields resolverArn, duration |
                           filter logType = "Tracing" |
                           sort duration desc |
                           limit 10`
  }, {
    title: 'Most frequently invoked resolvers',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`fields ispresent(resolverArn) as isRes |
                           stats count() as invocationCount by resolverArn |
                           filter isRes |
                           filter logType = "Tracing" |
                           sort invocationCount desc |
                           limit 10`
  }, {
    title: 'Resolvers with most errors in mapping templates',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`fields ispresent(resolverArn) as isRes |
                           stats count() as errorCount by resolverArn, logType |
                           filter isRes and (logType = "RequestMapping" or logType = "ResponseMapping") and fieldInError |
                           sort errorCount desc |
                           limit 10`
  }, {
    title: 'Field latency statistics',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`fields requestId, latency |
                           filter logType = "RequestSummary" |
                           sort latency desc |
                           limit 10`
  }, {
    title: 'Resolver latency statistics',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`fields ispresent(resolverArn) as isRes |
                           filter isRes |
                           filter logType = "Tracing" |
                           stats min(duration), max(duration), avg(duration) as avgDur by resolverArn |
                           sort avgDur desc |
                           limit 10`
  }, {
    title: 'Top 10 requests with maximum latency',
    expr: common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndents`fields requestId, latency |
                           filter logType = "RequestSummary" |
                           sort latency desc |
                           limit 10`
  }]
}];

function renderHighlightedMarkup(code, keyPrefix) {
  const grammar = _syntax__WEBPACK_IMPORTED_MODULE_5__["default"];
  const tokens = (0,_grafana_ui_src_slate_plugins_slate_prism__WEBPACK_IMPORTED_MODULE_4__.flattenTokens)(prismjs__WEBPACK_IMPORTED_MODULE_2___default().tokenize(code, grammar));
  const spans = tokens.filter(token => typeof token !== 'string').map((token, i) => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
      className: `prism-token token ${token.types.join(' ')} ${token.aliases.join(' ')}`,
      children: token.content
    }, `${keyPrefix}-token-${i}`);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "slate-query-field",
    children: spans
  });
}

const exampleCategory = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  margin-top: 5px;
`;
class LogsCheatSheet extends react__WEBPACK_IMPORTED_MODULE_3__.PureComponent {
  onClickExample(query) {
    this.props.onClickExample(query);
  }

  renderExpression(expr, keyPrefix) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "cheat-sheet-item__example",
      onClick: () => {
        var _this$props$query$ref, _this$props$query$ref2;

        return this.onClickExample({
          refId: (_this$props$query$ref = this.props.query.refId) !== null && _this$props$query$ref !== void 0 ? _this$props$query$ref : 'A',
          expression: expr,
          queryMode: 'Logs',
          region: this.props.query.region,
          id: (_this$props$query$ref2 = this.props.query.refId) !== null && _this$props$query$ref2 !== void 0 ? _this$props$query$ref2 : 'A',
          logGroupNames: 'logGroupNames' in this.props.query ? this.props.query.logGroupNames : []
        });
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
        children: renderHighlightedMarkup(expr, keyPrefix)
      })
    }, expr);
  }

  renderLogsCheatSheet() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
        children: "CloudWatch Logs Cheat Sheet"
      })), CLIQ_EXAMPLES.map((cat, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: `cheat-sheet-item__title ${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(exampleCategory)}`,
          children: cat.category
        }), cat.examples.map((item, j) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "cheat-sheet-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
            children: item.title
          }), this.renderExpression(item.expr, `item-${j}`)]
        }, `item-${j}`))]
      }, `${cat.category}-${i}`))]
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [_h2 || (_h2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
        children: "CloudWatch Logs cheat sheet"
      })), CLIQ_EXAMPLES.map((cat, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: `cheat-sheet-item__title ${(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(exampleCategory)}`,
          children: cat.category
        }), cat.examples.map((item, j) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "cheat-sheet-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
            children: item.title
          }), this.renderExpression(item.expr, `item-${j}`)]
        }, `item-${j}`))]
      }, `cat-${i}`))]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/LogsQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudWatchLogsQueryEditor": () => (/* binding */ CloudWatchLogsQueryEditor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _CloudWatchLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/CloudWatchLink.tsx");
/* harmony import */ var _LogsQueryField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/LogsQueryField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
// Libraries

 // Types





const labelClass = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  margin-left: 3px;
  flex-grow: 0;
`;
const CloudWatchLogsQueryEditor = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function CloudWatchLogsQueryEditor(props) {
  var _data$request, _data$request$range;

  const {
    query,
    data,
    datasource,
    onRunQuery,
    onChange,
    exploreId
  } = props;
  let absolute;

  if (data !== null && data !== void 0 && (_data$request = data.request) !== null && _data$request !== void 0 && (_data$request$range = _data$request.range) !== null && _data$request$range !== void 0 && _data$request$range.from) {
    const {
      range
    } = data.request;
    absolute = {
      from: range.from.valueOf(),
      to: range.to.valueOf()
    };
  } else {
    absolute = {
      from: Date.now() - 10000,
      to: Date.now()
    };
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_LogsQueryField__WEBPACK_IMPORTED_MODULE_4__.CloudWatchLogsQueryField, {
    exploreId: exploreId,
    datasource: datasource,
    query: query,
    onChange: onChange,
    onRunQuery: onRunQuery,
    history: [],
    data: data,
    absoluteRange: absolute,
    ExtraFieldElement: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
      className: `gf-form-label--btn ${labelClass}`,
      width: "auto",
      tooltip: "Link to Graph in AWS",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CloudWatchLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        query: query,
        panelData: data,
        datasource: datasource
      })
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloudWatchLogsQueryEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/LogsQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudWatchLogsQueryField": () => (/* binding */ CloudWatchLogsQueryField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.28.0-28f20a79ff-bde93fb2be.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/syntax.ts");
/* harmony import */ var _utils_query_getStatsGroups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/query/getStatsGroups.ts");
/* harmony import */ var _LogGroupSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/LogGroupSelector.tsx");
/* harmony import */ var _QueryHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryHeader.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const rowGap = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  gap: 3px;
`;
class CloudWatchLogsQueryField extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props, context) {
    super(props, context);

    _defineProperty(this, "state", {
      hint: undefined
    });

    _defineProperty(this, "plugins", void 0);

    _defineProperty(this, "componentDidMount", () => {
      const {
        query,
        onChange
      } = this.props;

      if (onChange) {
        var _query$logGroupNames;

        onChange(Object.assign({}, query, {
          logGroupNames: (_query$logGroupNames = query.logGroupNames) !== null && _query$logGroupNames !== void 0 ? _query$logGroupNames : []
        }));
      }
    });

    _defineProperty(this, "onChangeQuery", value => {
      // Send text change to parent
      const {
        query,
        onChange
      } = this.props;

      if (onChange) {
        const nextQuery = Object.assign({}, query, {
          expression: value,
          statsGroups: (0,_utils_query_getStatsGroups__WEBPACK_IMPORTED_MODULE_5__.getStatsGroups)(value)
        });
        onChange(nextQuery);
      }
    });

    _defineProperty(this, "onTypeahead", async typeahead => {
      const {
        datasource,
        query
      } = this.props;
      const {
        logGroupNames
      } = query;

      if (!datasource.languageProvider) {
        return {
          suggestions: []
        };
      }

      const cloudwatchLanguageProvider = datasource.languageProvider;
      const {
        history,
        absoluteRange
      } = this.props;
      const {
        prefix,
        text,
        value,
        wrapperClasses,
        labelKey,
        editor
      } = typeahead;
      return await cloudwatchLanguageProvider.provideCompletionItems({
        text,
        value,
        prefix,
        wrapperClasses,
        labelKey,
        editor
      }, {
        history,
        absoluteRange,
        logGroupNames,
        region: query.region
      });
    });

    this.plugins = [(0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.BracesPlugin)(), (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SlatePrism)({
      onlyIn: node => node.object === 'block' && node.type === 'code_block',
      getSyntax: node => 'cloudwatch'
    }, Object.assign({}, prismjs__WEBPACK_IMPORTED_MODULE_1__.languages, {
      cloudwatch: _syntax__WEBPACK_IMPORTED_MODULE_4__["default"]
    }))];
  }

  render() {
    var _data$error;

    const {
      onRunQuery,
      onChange,
      ExtraFieldElement,
      data,
      query,
      datasource
    } = this.props;
    const {
      region,
      refId,
      expression,
      logGroupNames
    } = query;
    const {
      hint
    } = this.state;
    const showError = data && data.error && data.error.refId === query.refId;
    const cleanText = datasource.languageProvider ? datasource.languageProvider.cleanText : undefined;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_QueryHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        query: query,
        onRunQuery: onRunQuery,
        datasource: datasource,
        onChange: onChange,
        sqlCodeEditorIsDirty: false
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: `gf-form gf-form--grow flex-grow-1 ${rowGap}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LegacyForms.FormField, {
          label: "Log Groups",
          labelWidth: 6,
          className: "flex-grow-1",
          inputEl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_LogGroupSelector__WEBPACK_IMPORTED_MODULE_6__.LogGroupSelector, {
            region: region,
            selectedLogGroups: logGroupNames !== null && logGroupNames !== void 0 ? logGroupNames : [],
            datasource: datasource,
            onChange: function (logGroups) {
              onChange(Object.assign({}, query, {
                logGroupNames: logGroups
              }));
            },
            onRunQuery: onRunQuery,
            refId: refId
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "gf-form-inline gf-form-inline--nowrap flex-grow-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "gf-form gf-form--grow flex-shrink-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.QueryField, {
            additionalPlugins: this.plugins,
            query: expression !== null && expression !== void 0 ? expression : '',
            onChange: this.onChangeQuery,
            onRunQuery: this.props.onRunQuery,
            onTypeahead: this.onTypeahead,
            cleanText: cleanText,
            placeholder: "Enter a CloudWatch Logs Insights query (run with Shift+Enter)",
            portalOrigin: "cloudwatch",
            disabled: !logGroupNames || logGroupNames.length === 0
          })
        }), ExtraFieldElement]
      }), hint && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "query-row-break",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "text-warning",
          children: [hint.message, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
            className: "text-link muted",
            onClick: hint.fix.action,
            children: hint.fix.label
          })]
        })
      }), showError ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "query-row-break",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "prom-query-field-info text-error",
          children: data === null || data === void 0 ? void 0 : (_data$error = data.error) === null || _data$error === void 0 ? void 0 : _data$error.message
        })
      }) : null]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/MathExpressionQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathExpressionQueryField": () => (/* binding */ MathExpressionQueryField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _metric_math_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/metric-math/definition.ts");
/* harmony import */ var _monarch_commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/commands.ts");
/* harmony import */ var _monarch_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/register.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function MathExpressionQueryField({
  expression: query,
  onChange,
  onRunQuery,
  datasource
}) {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const onEditorMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((editor, monaco) => {
    editor.onDidFocusEditorText(() => editor.trigger(_monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST.id, _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST.id, {}));
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
      const text = editor.getValue();
      onChange(text);
      onRunQuery();
    }); // auto resizes the editor to be the height of the content it holds
    // this code comes from the Prometheus query editor.
    // We may wish to consider abstracting it into the grafana/ui repo in the future

    const updateElementHeight = () => {
      const containerDiv = containerRef.current;

      if (containerDiv !== null && editor.getContentHeight() < 200) {
        const pixelHeight = Math.max(32, editor.getContentHeight());
        containerDiv.style.height = `${pixelHeight}px`;
        containerDiv.style.width = '100%';
        const pixelWidth = containerDiv.clientWidth;
        editor.layout({
          width: pixelWidth,
          height: pixelHeight
        });
      }
    };

    editor.onDidContentSizeChange(updateElementHeight);
    updateElementHeight();
  }, [onChange, onRunQuery]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ref: containerRef,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CodeEditor, {
      monacoOptions: {
        // without this setting, the auto-resize functionality causes an infinite loop, don't remove it!
        scrollBeyondLastLine: false,
        // These additional options are style focused and are a subset of those in the query editor in Prometheus
        fontSize: 14,
        lineNumbers: 'off',
        renderLineHighlight: 'none',
        scrollbar: {
          vertical: 'hidden',
          horizontal: 'hidden'
        },
        suggestFontSize: 12,
        wordWrap: 'on',
        padding: {
          top: 6
        }
      },
      language: _metric_math_definition__WEBPACK_IMPORTED_MODULE_2__["default"].id,
      value: query,
      onBlur: value => {
        if (value !== query) {
          onChange(value);
          onRunQuery();
        }
      },
      onBeforeEditorMount: monaco => (0,_monarch_register__WEBPACK_IMPORTED_MODULE_4__.registerLanguage)(monaco, _metric_math_definition__WEBPACK_IMPORTED_MODULE_2__["default"], datasource.metricMathCompletionItemProvider),
      onEditorDidMount: onEditorMount
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/MetaInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaInspector": () => (/* binding */ MetaInspector)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _thead;






function MetaInspector({
  data = []
}) {
  const rows = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(data, 'refId'), [data]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
      className: "filter-table form-inline",
      children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "RefId"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Metric Data Query ID"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Metric Data Query Expression"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Period"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {})]
        })
      })), Object.entries(rows).map(([refId, frames], idx) => {
        var _frame$meta, _frame$meta2;

        if (!frames.length) {
          return null;
        }

        const frame = frames[0];
        const custom = (_frame$meta = frame.meta) === null || _frame$meta === void 0 ? void 0 : _frame$meta.custom;

        if (!custom) {
          return null;
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
              children: refId
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
              children: custom.id
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
              children: (_frame$meta2 = frame.meta) === null || _frame$meta2 === void 0 ? void 0 : _frame$meta2.executedQueryString
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
              children: custom.period
            })]
          })
        }, idx);
      })]
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/MetricStatEditor/MetricStatEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricStatEditor": () => (/* binding */ MetricStatEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








function MetricStatEditor({
  refId,
  metricStat,
  datasource,
  disableExpressions = false,
  onChange,
  onRunQuery
}) {
  var _metricStat$statistic;

  const {
    region,
    namespace,
    metricName,
    dimensions
  } = metricStat;
  const namespaces = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useNamespaces)(datasource);
  const metrics = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useMetrics)(datasource, region, namespace);
  const dimensionKeys = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useDimensionKeys)(datasource, region, namespace, metricName, dimensions !== null && dimensions !== void 0 ? dimensions : {});

  const onMetricStatChange = metricStat => {
    onChange(metricStat);
    onRunQuery();
  };

  const onNamespaceChange = async metricStat => {
    const validatedQuery = await validateMetricName(metricStat);
    onMetricStatChange(validatedQuery);
  };

  const validateMetricName = async metricStat => {
    let {
      metricName,
      namespace,
      region
    } = metricStat;

    if (!metricName) {
      return metricStat;
    }

    await datasource.getMetrics(namespace, region).then(result => {
      if (!result.find(metric => metric.value === metricName)) {
        metricName = '';
      }
    });
    return Object.assign({}, metricStat, {
      metricName
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRows, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorFieldGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
          label: "Namespace",
          width: 26,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
            "aria-label": "Namespace",
            value: metricStat.namespace,
            allowCustomValue: true,
            options: namespaces,
            onChange: ({
              value: namespace
            }) => {
              if (namespace) {
                onNamespaceChange(Object.assign({}, metricStat, {
                  namespace
                }));
              }
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
          label: "Metric name",
          width: 16,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
            "aria-label": "Metric name",
            value: metricStat.metricName || null,
            allowCustomValue: true,
            options: metrics,
            onChange: ({
              value: metricName
            }) => {
              if (metricName) {
                onMetricStatChange(Object.assign({}, metricStat, {
                  metricName
                }));
              }
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
          label: "Statistic",
          width: 16,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
            inputId: `${refId}-metric-stat-editor-select-statistic`,
            allowCustomValue: true,
            value: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.toOption)((_metricStat$statistic = metricStat.statistic) !== null && _metricStat$statistic !== void 0 ? _metricStat$statistic : datasource.standardStatistics[0]),
            options: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.appendTemplateVariables)(datasource, datasource.standardStatistics.filter(s => s !== metricStat.statistic).map(_utils_utils__WEBPACK_IMPORTED_MODULE_5__.toOption)),
            onChange: ({
              value: statistic
            }) => {
              if (!statistic || !datasource.standardStatistics.includes(statistic) && !/^p\d{2}(?:\.\d{1,2})?$/.test(statistic) && !statistic.startsWith('$')) {
                return;
              }

              onMetricStatChange(Object.assign({}, metricStat, {
                statistic
              }));
            }
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Dimensions",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Dimensions, {
          metricStat: metricStat,
          onChange: dimensions => onMetricStatChange(Object.assign({}, metricStat, {
            dimensions
          })),
          dimensionKeys: dimensionKeys,
          disableExpressions: disableExpressions,
          datasource: datasource
        })
      })
    }), !disableExpressions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Match exact",
        optional: true,
        tooltip: "Only show metrics that exactly match all defined dimension names.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorSwitch, {
          id: `${refId}-cloudwatch-match-exact`,
          value: !!metricStat.matchExact,
          onChange: e => {
            onMetricStatChange(Object.assign({}, metricStat, {
              matchExact: e.currentTarget.checked
            }));
          }
        })
      })
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/MetricStatEditor/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricStatEditor": () => (/* reexport safe */ _MetricStatEditor__WEBPACK_IMPORTED_MODULE_0__.MetricStatEditor)
/* harmony export */ });
/* harmony import */ var _MetricStatEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/MetricStatEditor/MetricStatEditor.tsx");


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/MetricsQueryEditor/Alias.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alias": () => (/* binding */ Alias)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Alias = ({
  value = '',
  onChange,
  id
}) => {
  const [alias, setAlias] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
  const propagateOnChange = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(onChange, 1500);

  onChange = e => {
    setAlias(e.target.value);
    propagateOnChange(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
    id: id,
    type: "text",
    value: alias,
    onChange: onChange,
    "aria-label": "Optional alias"
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/MetricsQueryEditor/MetricsQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsQueryEditor": () => (/* binding */ MetricsQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/guards.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
/* harmony import */ var _DynamicLabelsField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/DynamicLabelsField.tsx");
/* harmony import */ var _QueryHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryHeader.tsx");
/* harmony import */ var _Alias__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/MetricsQueryEditor/Alias.tsx");
/* harmony import */ var _usePreparedMetricsQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/MetricsQueryEditor/usePreparedMetricsQuery.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Space, _Space2;















const MetricsQueryEditor = props => {
  var _query$expression, _query$sqlExpression, _preparedQuery$label, _preparedQuery$alias;

  const {
    query,
    onRunQuery,
    datasource
  } = props;
  const [sqlCodeEditorIsDirty, setSQLCodeEditorIsDirty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const preparedQuery = (0,_usePreparedMetricsQuery__WEBPACK_IMPORTED_MODULE_10__["default"])(query, props.onChange);

  const onChange = query => {
    const {
      onChange,
      onRunQuery
    } = props;
    onChange(query);
    onRunQuery();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_QueryHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      query: query,
      onRunQuery: onRunQuery,
      datasource: datasource,
      onChange: newQuery => {
        if ((0,_guards__WEBPACK_IMPORTED_MODULE_5__.isCloudWatchMetricsQuery)(newQuery) && newQuery.metricEditorMode !== query.metricEditorMode) {
          setSQLCodeEditorIsDirty(false);
        }

        onChange(newQuery);
      },
      sqlCodeEditorIsDirty: sqlCodeEditorIsDirty
    }), _Space || (_Space = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.Space, {
      v: 0.5
    })), query.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_6__.MetricQueryType.Search && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [query.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_6__.MetricEditorMode.Builder && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.MetricStatEditor, Object.assign({}, props, {
        refId: query.refId,
        metricStat: query,
        onChange: metricStat => props.onChange(Object.assign({}, query, metricStat))
      })), query.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_6__.MetricEditorMode.Code && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.MathExpressionQueryField, {
        onRunQuery: onRunQuery,
        expression: (_query$expression = query.expression) !== null && _query$expression !== void 0 ? _query$expression : '',
        onChange: expression => props.onChange(Object.assign({}, query, {
          expression
        })),
        datasource: datasource
      })]
    }), query.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_6__.MetricQueryType.Query && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [query.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_6__.MetricEditorMode.Code && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.SQLCodeEditor, {
        region: query.region,
        sql: (_query$sqlExpression = query.sqlExpression) !== null && _query$sqlExpression !== void 0 ? _query$sqlExpression : '',
        onChange: sqlExpression => {
          if (!sqlCodeEditorIsDirty) {
            setSQLCodeEditorIsDirty(true);
          }

          props.onChange(Object.assign({}, preparedQuery, {
            sqlExpression
          }));
        },
        onRunQuery: onRunQuery,
        datasource: datasource
      }), query.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_6__.MetricEditorMode.Builder && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.SQLBuilderEditor, {
          query: query,
          onChange: props.onChange,
          onRunQuery: onRunQuery,
          datasource: datasource
        })
      })]
    }), _Space2 || (_Space2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.Space, {
      v: 0.5
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "ID",
        width: 26,
        optional: true,
        tooltip: "ID can be used to reference other queries in math expressions. The ID can include numbers, letters, and underscore, and must start with a lowercase letter.",
        invalid: !!query.id && !/^$|^[a-z][a-zA-Z0-9_]*$/.test(query.id),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          id: `${query.refId}-cloudwatch-metric-query-editor-id`,
          onBlur: onRunQuery,
          onChange: event => onChange(Object.assign({}, preparedQuery, {
            id: event.target.value
          })),
          type: "text",
          value: query.id
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Period",
        width: 26,
        tooltip: "Minimum interval between points in seconds.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          id: `${query.refId}-cloudwatch-metric-query-editor-period`,
          value: query.period || '',
          placeholder: "auto",
          onBlur: onRunQuery,
          onChange: event => onChange(Object.assign({}, preparedQuery, {
            period: event.target.value
          }))
        })
      }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.cloudWatchDynamicLabels ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Label",
        width: 26,
        optional: true,
        tooltip: "Change time series legend name using Dynamic labels. See documentation for details.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_DynamicLabelsField__WEBPACK_IMPORTED_MODULE_7__.DynamicLabelsField, {
          width: 52,
          onRunQuery: onRunQuery,
          label: (_preparedQuery$label = preparedQuery.label) !== null && _preparedQuery$label !== void 0 ? _preparedQuery$label : '',
          onChange: label => props.onChange(Object.assign({}, query, {
            label
          }))
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Alias",
        width: 26,
        optional: true,
        tooltip: "Change time series legend name using this field. See documentation for replacement variable formats.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Alias__WEBPACK_IMPORTED_MODULE_9__.Alias, {
          id: `${query.refId}-cloudwatch-metric-query-editor-alias`,
          value: (_preparedQuery$alias = preparedQuery.alias) !== null && _preparedQuery$alias !== void 0 ? _preparedQuery$alias : '',
          onChange: value => onChange(Object.assign({}, preparedQuery, {
            alias: value
          }))
        })
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/MetricsQueryEditor/MetricsQueryHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _FlexItem;








const metricEditorModes = [{
  label: 'Metric Search',
  value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricQueryType.Search
}, {
  label: 'Metric Query',
  value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricQueryType.Query
}];
const editorModes = [{
  label: 'Builder',
  value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricEditorMode.Builder
}, {
  label: 'Code',
  value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricEditorMode.Code
}];

const MetricsQueryHeader = ({
  query,
  sqlCodeEditorIsDirty,
  onChange,
  onRunQuery
}) => {
  const {
    metricEditorMode,
    metricQueryType
  } = query;
  const [showConfirm, setShowConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onEditorModeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newMetricEditorMode => {
    if (sqlCodeEditorIsDirty && metricQueryType === _types__WEBPACK_IMPORTED_MODULE_3__.MetricQueryType.Query && metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_3__.MetricEditorMode.Code) {
      setShowConfirm(true);
      return;
    }

    onChange(Object.assign({}, query, {
      metricEditorMode: newMetricEditorMode
    }));
  }, [setShowConfirm, onChange, sqlCodeEditorIsDirty, query, metricEditorMode, metricQueryType]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.InlineSelect, {
      "aria-label": "Metric editor mode",
      value: metricEditorModes.find(m => m.value === metricQueryType),
      options: metricEditorModes,
      onChange: ({
        value
      }) => {
        onChange(Object.assign({}, query, {
          metricQueryType: value
        }));
      }
    }), _FlexItem || (_FlexItem = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
      grow: 1
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
      options: editorModes,
      size: "sm",
      value: metricEditorMode,
      onChange: onEditorModeChange
    }), query.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_3__.MetricQueryType.Query && query.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_3__.MetricEditorMode.Code && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => onRunQuery(),
      children: "Run query"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
      isOpen: showConfirm,
      title: "Are you sure?",
      body: "You will lose manual changes done to the query if you go back to the visual builder.",
      confirmText: "Yes, I am sure.",
      dismissText: "No, continue editing the query manually.",
      icon: "exclamation-triangle",
      onConfirm: () => {
        setShowConfirm(false);
        onChange(Object.assign({}, query, {
          metricEditorMode: _types__WEBPACK_IMPORTED_MODULE_3__.MetricEditorMode.Builder
        }));
      },
      onDismiss: () => setShowConfirm(false)
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetricsQueryHeader);

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/MetricsQueryEditor/usePreparedMetricsQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_QUERY": () => (/* binding */ DEFAULT_QUERY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/fast-deep-equal-npm-3.1.3-790edcfcf5-e21a9d8d84.zip/node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _migrations_metricQueryMigrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/migrations/metricQueryMigrations.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");




const DEFAULT_QUERY = {
  queryMode: 'Metrics',
  namespace: '',
  metricName: '',
  expression: '',
  dimensions: {},
  region: 'default',
  id: '',
  statistic: 'Average',
  period: '',
  metricQueryType: _types__WEBPACK_IMPORTED_MODULE_3__.MetricQueryType.Search,
  metricEditorMode: _types__WEBPACK_IMPORTED_MODULE_3__.MetricEditorMode.Builder,
  sqlExpression: '',
  matchExact: true
};

const prepareQuery = query => {
  const withDefaults = Object.assign({}, DEFAULT_QUERY, query);
  const migratedQuery = (0,_migrations_metricQueryMigrations__WEBPACK_IMPORTED_MODULE_2__.migrateMetricQuery)(withDefaults); // If we didn't make any changes to the object, then return the original object to keep the
  // identity the same, and not trigger any other useEffects or anything.

  return fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(migratedQuery, query) ? query : migratedQuery;
};
/**
 * Returns queries with some defaults + migrations, and calls onChange function to notify if it changes
 */


const usePreparedMetricsQuery = (query, onChangeQuery) => {
  const preparedQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => prepareQuery(query), [query]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (preparedQuery !== query) {
      onChangeQuery(preparedQuery);
    }
  }, [preparedQuery, query, onChangeQuery]);
  return preparedQuery;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePreparedMetricsQuery);

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/PanelQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelQueryEditor": () => (/* binding */ PanelQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/guards.ts");
/* harmony import */ var _MetricsQueryEditor_MetricsQueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/MetricsQueryEditor/MetricsQueryEditor.tsx");
/* harmony import */ var _LogsQueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/LogsQueryEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







class PanelQueryEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      query
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [(0,_guards__WEBPACK_IMPORTED_MODULE_1__.isCloudWatchMetricsQuery)(query) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MetricsQueryEditor_MetricsQueryEditor__WEBPACK_IMPORTED_MODULE_2__.MetricsQueryEditor, Object.assign({}, this.props, {
        query: query
      })), (0,_guards__WEBPACK_IMPORTED_MODULE_1__.isCloudWatchLogsQuery)(query) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LogsQueryEditor__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, this.props, {
        query: query
      }))]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _MetricsQueryEditor_MetricsQueryHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/MetricsQueryEditor/MetricsQueryHeader.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const apiModes = [{
  label: 'CloudWatch Metrics',
  value: 'Metrics'
}, {
  label: 'CloudWatch Logs',
  value: 'Logs'
}];

const QueryHeader = ({
  query,
  sqlCodeEditorIsDirty,
  datasource,
  onChange,
  onRunQuery
}) => {
  const {
    queryMode,
    region
  } = query;
  const [regions, regionIsLoading] = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useRegions)(datasource);

  const onQueryModeChange = ({
    value
  }) => {
    if (value !== queryMode) {
      const commonProps = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(query, 'id', 'region', 'namespace', 'refId', 'hide', 'key', 'queryType', 'datasource');
      onChange(Object.assign({}, commonProps, {
        queryMode: value
      }));
    }
  };

  const onRegion = async ({
    value
  }) => {
    onChange(Object.assign({}, query, {
      region: value
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.EditorHeader, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.InlineSelect, {
      label: "Region",
      value: region,
      placeholder: "Select region",
      allowCustomValue: true,
      onChange: ({
        value: region
      }) => region && onRegion({
        value: region
      }),
      options: regions,
      isLoading: regionIsLoading
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.InlineSelect, {
      "aria-label": "Query mode",
      value: queryMode,
      options: apiModes,
      onChange: onQueryModeChange
    }), queryMode === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ExploreMode.Metrics && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MetricsQueryEditor_MetricsQueryHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      query: query,
      datasource: datasource,
      onChange: onChange,
      onRunQuery: onRunQuery,
      sqlCodeEditorIsDirty: sqlCodeEditorIsDirty
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueryHeader);

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLBuilderEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SQLBuilderEditor": () => (/* binding */ SQLBuilderEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _cloudwatch_sql_SQLGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/SQLGenerator.ts");
/* harmony import */ var _SQLBuilderSelectRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLBuilderSelectRow.tsx");
/* harmony import */ var _SQLFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLFilter.tsx");
/* harmony import */ var _SQLGroupBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLGroupBy.tsx");
/* harmony import */ var _SQLOrderByGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLOrderByGroup.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function SQLBuilderEditor({
  query,
  datasource,
  onChange,
  onRunQuery
}) {
  var _query$sql, _query$sql4;

  const sql = (_query$sql = query.sql) !== null && _query$sql !== void 0 ? _query$sql : {};
  const onQueryChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(query => {
    var _query$sql2;

    const sqlGenerator = new _cloudwatch_sql_SQLGenerator__WEBPACK_IMPORTED_MODULE_3__["default"]();
    const sqlString = sqlGenerator.expressionToSqlQuery((_query$sql2 = query.sql) !== null && _query$sql2 !== void 0 ? _query$sql2 : {});
    const fullQuery = Object.assign({}, query, {
      sqlExpression: sqlString
    });
    onChange(fullQuery);
    onRunQuery();
  }, [onChange, onRunQuery]);
  const [sqlPreview, setSQLPreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _query$sql3;

    const sqlGenerator = new _cloudwatch_sql_SQLGenerator__WEBPACK_IMPORTED_MODULE_3__["default"]();
    const sqlString = sqlGenerator.expressionToSqlQuery((_query$sql3 = query.sql) !== null && _query$sql3 !== void 0 ? _query$sql3 : {});

    if (sqlPreview !== sqlString) {
      setSQLPreview(sqlString);
    }
  }, [query, sqlPreview, setSQLPreview]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRows, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SQLBuilderSelectRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
        query: query,
        onQueryChange: onQueryChange,
        datasource: datasource
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Filter",
        optional: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SQLFilter__WEBPACK_IMPORTED_MODULE_5__["default"], {
          query: query,
          onQueryChange: onQueryChange,
          datasource: datasource
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Group by",
        optional: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SQLGroupBy__WEBPACK_IMPORTED_MODULE_6__["default"], {
          query: query,
          onQueryChange: onQueryChange,
          datasource: datasource
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SQLOrderByGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
        query: query,
        onQueryChange: onQueryChange,
        datasource: datasource
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Limit",
        optional: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          id: `${query.refId}-cloudwatch-sql-builder-editor-limit`,
          value: sql.limit,
          onChange: e => {
            const val = e.currentTarget.valueAsNumber;
            onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_8__.setSql)(query, {
              limit: isNaN(val) ? undefined : val
            }));
          },
          type: "number",
          min: 1
        })
      })]
    }), sqlPreview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
      children: [ true && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("pre", {
        children: JSON.stringify((_query$sql4 = query.sql) !== null && _query$sql4 !== void 0 ? _query$sql4 : {}, null, 2)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("pre", {
        children: sqlPreview !== null && sqlPreview !== void 0 ? sqlPreview : ''
      })]
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLBuilderSelectRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const AGGREGATIONS = _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_4__.STATISTICS.map(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption);

const SQLBuilderSelectRow = ({
  datasource,
  query,
  onQueryChange
}) => {
  var _query$sql, _sql$select;

  const sql = (_query$sql = query.sql) !== null && _query$sql !== void 0 ? _query$sql : {};
  const aggregation = (_sql$select = sql.select) === null || _sql$select === void 0 ? void 0 : _sql$select.name;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!aggregation) {
      onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_7__.setAggregation)(query, _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_4__.STATISTICS[0]));
    }
  }, [aggregation, onQueryChange, query]);
  const metricName = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getMetricNameFromExpression)(sql.select);
  const namespace = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getNamespaceFromExpression)(sql.from);
  const schemaLabels = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getSchemaLabelKeys)(sql.from);
  const withSchemaEnabled = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.isUsingWithSchema)(sql.from);
  const namespaceOptions = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useNamespaces)(datasource);
  const metricOptions = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useMetrics)(datasource, query.region, namespace);
  const existingFilters = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_7__.stringArrayToDimensions)(schemaLabels !== null && schemaLabels !== void 0 ? schemaLabels : []), [schemaLabels]);
  const unusedDimensionKeys = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useDimensionKeys)(datasource, query.region, namespace, metricName, existingFilters);
  const dimensionKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => schemaLabels !== null && schemaLabels !== void 0 && schemaLabels.length ? [...unusedDimensionKeys, ...schemaLabels.map(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)] : unusedDimensionKeys, [unusedDimensionKeys, schemaLabels]);

  const onNamespaceChange = async query => {
    const validatedQuery = await validateMetricName(query);
    onQueryChange(validatedQuery);
  };

  const validateMetricName = async query => {
    let {
      region,
      sql
    } = query;
    await datasource.getMetrics(query.namespace, region).then(result => {
      if (!result.some(metric => metric.value === metricName)) {
        sql = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.removeMetricName)(query).sql;
      }
    });
    return Object.assign({}, query, {
      sql
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorFieldGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
        label: "Namespace",
        width: 16,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          "aria-label": "Namespace",
          value: namespace ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(namespace) : null,
          inputId: `${query.refId}-cloudwatch-sql-namespace`,
          options: namespaceOptions,
          allowCustomValue: true,
          onChange: ({
            value
          }) => value && onNamespaceChange((0,_utils__WEBPACK_IMPORTED_MODULE_7__.setNamespace)(query, value))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
        label: "With schema",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorSwitch, {
          id: `${query.refId}-cloudwatch-sql-withSchema`,
          value: withSchemaEnabled,
          onChange: ev => ev.target instanceof HTMLInputElement && onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_7__.setWithSchema)(query, ev.target.checked))
        })
      }), withSchemaEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
        label: "Schema labels",
        disabled: !namespace,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          id: `${query.refId}-cloudwatch-sql-schema-label-keys`,
          width: "auto",
          isMulti: true,
          value: schemaLabels ? schemaLabels.map(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption) : null,
          options: dimensionKeys,
          allowCustomValue: true,
          onChange: item => item && onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_7__.setSchemaLabels)(query, item))
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorFieldGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
        label: "Metric name",
        width: 16,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          "aria-label": "Metric name",
          value: metricName ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(metricName) : null,
          options: metricOptions,
          allowCustomValue: true,
          onChange: ({
            value
          }) => value && onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_7__.setMetricName)(query, value))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
        label: "Aggregation",
        width: 16,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          "aria-label": "Aggregation",
          value: aggregation ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(aggregation) : null,
          options: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.appendTemplateVariables)(datasource, AGGREGATIONS),
          onChange: ({
            value
          }) => value && onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_7__.setAggregation)(query, value))
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SQLBuilderSelectRow);

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/expressions.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const OPERATORS = _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_4__.COMPARISON_OPERATORS.map(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption);

const SQLFilter = ({
  query,
  onQueryChange,
  datasource
}) => {
  const filtersFromQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _query$sql;

    return (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getFlattenedFilters)((_query$sql = query.sql) !== null && _query$sql !== void 0 ? _query$sql : {});
  }, [query.sql]);
  const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(filtersFromQuery);

  const onChange = newItems => {
    // As new (empty object) items come in, with need to make sure they have the correct type
    const cleaned = newItems.map(v => {
      var _v$property, _v$operator;

      return {
        type: _expressions__WEBPACK_IMPORTED_MODULE_5__.QueryEditorExpressionType.Operator,
        property: (_v$property = v.property) !== null && _v$property !== void 0 ? _v$property : {
          type: _expressions__WEBPACK_IMPORTED_MODULE_5__.QueryEditorPropertyType.String
        },
        operator: (_v$operator = v.operator) !== null && _v$operator !== void 0 ? _v$operator : {
          name: _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_4__.EQUALS
        }
      };
    });
    setFilters(cleaned); // Only save valid and complete filters into the query state

    const validExpressions = [];

    for (const operatorExpression of cleaned) {
      const validated = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.sanitizeOperator)(operatorExpression);

      if (validated) {
        validExpressions.push(validated);
      }
    }

    const where = validExpressions.length ? {
      type: _expressions__WEBPACK_IMPORTED_MODULE_5__.QueryEditorExpressionType.And,
      expressions: validExpressions
    } : undefined;
    onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_8__.setSql)(query, {
      where
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorList, {
    items: filters,
    onChange: onChange,
    renderItem: makeRenderFilter(datasource, query)
  });
}; // Making component functions in the render body is not recommended, but it works for now.
// If some problems arise (perhaps with state going missing), consider this to be a potential cause


function makeRenderFilter(datasource, query) {
  function renderFilter(item, onChange, onDelete) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(FilterItem, {
      datasource: datasource,
      query: query,
      filter: item,
      onChange: onChange,
      onDelete: onDelete
    });
  }

  return renderFilter;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SQLFilter);

const FilterItem = props => {
  var _query$sql2, _filter$property2, _filter$property3, _filter$property4, _filter$operator, _filter$operator2, _filter$operator3, _filter$operator4;

  const {
    datasource,
    query,
    filter,
    onChange,
    onDelete
  } = props;
  const sql = (_query$sql2 = query.sql) !== null && _query$sql2 !== void 0 ? _query$sql2 : {};
  const namespace = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getNamespaceFromExpression)(sql.from);
  const metricName = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getMetricNameFromExpression)(sql.select);
  const dimensionKeys = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useDimensionKeys)(datasource, query.region, namespace, metricName);

  const loadDimensionValues = async () => {
    var _filter$property;

    if (!((_filter$property = filter.property) !== null && _filter$property !== void 0 && _filter$property.name)) {
      return [];
    }

    return datasource.getDimensionValues(query.region, namespace, metricName, filter.property.name, {}).then(result => {
      return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__.appendTemplateVariables)(datasource, result);
    });
  };

  const [state, loadOptions] = (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(loadDimensionValues, [query.region, namespace, metricName, (_filter$property2 = filter.property) === null || _filter$property2 === void 0 ? void 0 : _filter$property2.name]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
      width: "auto",
      value: (_filter$property3 = filter.property) !== null && _filter$property3 !== void 0 && _filter$property3.name ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)((_filter$property4 = filter.property) === null || _filter$property4 === void 0 ? void 0 : _filter$property4.name) : null,
      options: dimensionKeys,
      allowCustomValue: true,
      onChange: ({
        value
      }) => value && onChange((0,_utils__WEBPACK_IMPORTED_MODULE_8__.setOperatorExpressionProperty)(filter, value))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
      width: "auto",
      value: ((_filter$operator = filter.operator) === null || _filter$operator === void 0 ? void 0 : _filter$operator.name) && (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(filter.operator.name),
      options: OPERATORS,
      onChange: ({
        value
      }) => value && onChange((0,_utils__WEBPACK_IMPORTED_MODULE_8__.setOperatorExpressionName)(filter, value))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
      width: "auto",
      isLoading: state.loading,
      value: (_filter$operator2 = filter.operator) !== null && _filter$operator2 !== void 0 && _filter$operator2.value && typeof ((_filter$operator3 = filter.operator) === null || _filter$operator3 === void 0 ? void 0 : _filter$operator3.value) === 'string' ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)((_filter$operator4 = filter.operator) === null || _filter$operator4 === void 0 ? void 0 : _filter$operator4.value) : null,
      options: state.value,
      allowCustomValue: true,
      onOpenMenu: loadOptions,
      onChange: ({
        value
      }) => value && onChange((0,_utils__WEBPACK_IMPORTED_MODULE_8__.setOperatorExpressionValue)(filter, value))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.AccessoryButton, {
      "aria-label": "remove",
      icon: "times",
      variant: "secondary",
      onClick: onDelete
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLGroupBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/expressions.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const SQLGroupBy = ({
  query,
  datasource,
  onQueryChange
}) => {
  var _query$sql;

  const sql = (_query$sql = query.sql) !== null && _query$sql !== void 0 ? _query$sql : {};
  const groupBysFromQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _query$sql2;

    return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getFlattenedGroupBys)((_query$sql2 = query.sql) !== null && _query$sql2 !== void 0 ? _query$sql2 : {});
  }, [query.sql]);
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(groupBysFromQuery);
  const namespace = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getNamespaceFromExpression)(sql.from);
  const metricName = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getMetricNameFromExpression)(sql.select);
  const baseOptions = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useDimensionKeys)(datasource, query.region, namespace, metricName);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)( // Exclude options we've already selected
  () => baseOptions.filter(option => !groupBysFromQuery.some(v => v.property.name === option.value)), [baseOptions, groupBysFromQuery]);

  const onChange = newItems => {
    // As new (empty object) items come in, with need to make sure they have the correct type
    const cleaned = newItems.map(v => {
      var _v$property;

      return {
        type: _expressions__WEBPACK_IMPORTED_MODULE_4__.QueryEditorExpressionType.GroupBy,
        property: {
          type: _expressions__WEBPACK_IMPORTED_MODULE_4__.QueryEditorPropertyType.String,
          name: (_v$property = v.property) === null || _v$property === void 0 ? void 0 : _v$property.name
        }
      };
    });
    setItems(cleaned); // Only save complete expressions into the query state;

    const completeExpressions = cleaned.filter(v => {
      var _v$property2;

      return (_v$property2 = v.property) === null || _v$property2 === void 0 ? void 0 : _v$property2.name;
    });
    const groupBy = completeExpressions.length ? {
      type: _expressions__WEBPACK_IMPORTED_MODULE_4__.QueryEditorExpressionType.And,
      expressions: completeExpressions
    } : undefined;
    onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_6__.setSql)(query, {
      groupBy
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorList, {
    items: items,
    onChange: onChange,
    renderItem: makeRenderItem(options)
  });
};

function makeRenderItem(options) {
  function renderItem(item, onChange, onDelete) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(GroupByItem, {
      options: options,
      item: item,
      onChange: onChange,
      onDelete: onDelete
    });
  }

  return renderItem;
}

const GroupByItem = props => {
  var _item$property;

  const {
    options,
    item,
    onChange,
    onDelete
  } = props;
  const fieldName = (_item$property = item.property) === null || _item$property === void 0 ? void 0 : _item$property.name;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
      "aria-label": `Group by ${fieldName !== null && fieldName !== void 0 ? fieldName : 'filter key'}`,
      width: "auto",
      value: fieldName ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(fieldName) : null,
      options: options,
      allowCustomValue: true,
      onChange: ({
        value
      }) => value && onChange((0,_utils__WEBPACK_IMPORTED_MODULE_6__.setGroupByField)(value))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.AccessoryButton, {
      "aria-label": "remove",
      icon: "times",
      variant: "secondary",
      onClick: onDelete
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SQLGroupBy);

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLOrderByGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const orderByDirections = [{
  label: _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_4__.ASC,
  value: _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_4__.ASC
}, {
  label: _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_4__.DESC,
  value: _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_4__.DESC
}];

const SQLOrderByGroup = ({
  query,
  onQueryChange,
  datasource
}) => {
  var _query$sql, _sql$orderBy;

  const sql = (_query$sql = query.sql) !== null && _query$sql !== void 0 ? _query$sql : {};
  const orderBy = (_sql$orderBy = sql.orderBy) === null || _sql$orderBy === void 0 ? void 0 : _sql$orderBy.name;
  const orderByDirection = sql.orderByDirection;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorFieldGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
      label: "Order by",
      optional: true,
      width: 16,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          "aria-label": "Order by",
          onChange: ({
            value
          }) => value && onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_6__.setOrderBy)(query, value)),
          options: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.appendTemplateVariables)(datasource, _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_4__.STATISTICS.map(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)),
          value: orderBy ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(orderBy) : null
        }), orderBy && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.AccessoryButton, {
          "aria-label": "remove",
          icon: "times",
          variant: "secondary",
          onClick: () => onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_6__.setSql)(query, {
            orderBy: undefined
          }))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
      label: "Direction",
      disabled: !orderBy,
      width: 16,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
        "aria-label": "Direction",
        inputId: "cloudwatch-sql-order-by-direction",
        value: orderByDirection ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(orderByDirection) : orderByDirections[0],
        options: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.appendTemplateVariables)(datasource, orderByDirections),
        onChange: item => item && onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_6__.setSql)(query, {
          orderByDirection: item.value
        }))
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SQLOrderByGroup);

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SQLBuilderEditor": () => (/* reexport safe */ _SQLBuilderEditor__WEBPACK_IMPORTED_MODULE_0__.SQLBuilderEditor)
/* harmony export */ });
/* harmony import */ var _SQLBuilderEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLBuilderEditor.tsx");


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFlattenedFilters": () => (/* binding */ getFlattenedFilters),
/* harmony export */   "getFlattenedGroupBys": () => (/* binding */ getFlattenedGroupBys),
/* harmony export */   "getMetricNameFromExpression": () => (/* binding */ getMetricNameFromExpression),
/* harmony export */   "getNamespaceFromExpression": () => (/* binding */ getNamespaceFromExpression),
/* harmony export */   "getSchemaLabelKeys": () => (/* binding */ getSchemaLabelKeys),
/* harmony export */   "isUsingWithSchema": () => (/* binding */ isUsingWithSchema),
/* harmony export */   "removeMetricName": () => (/* binding */ removeMetricName),
/* harmony export */   "sanitizeOperator": () => (/* binding */ sanitizeOperator),
/* harmony export */   "setAggregation": () => (/* binding */ setAggregation),
/* harmony export */   "setGroupByField": () => (/* binding */ setGroupByField),
/* harmony export */   "setMetricName": () => (/* binding */ setMetricName),
/* harmony export */   "setNamespace": () => (/* binding */ setNamespace),
/* harmony export */   "setOperatorExpressionName": () => (/* binding */ setOperatorExpressionName),
/* harmony export */   "setOperatorExpressionProperty": () => (/* binding */ setOperatorExpressionProperty),
/* harmony export */   "setOperatorExpressionValue": () => (/* binding */ setOperatorExpressionValue),
/* harmony export */   "setOrderBy": () => (/* binding */ setOrderBy),
/* harmony export */   "setSchemaLabels": () => (/* binding */ setSchemaLabels),
/* harmony export */   "setSql": () => (/* binding */ setSql),
/* harmony export */   "setWithSchema": () => (/* binding */ setWithSchema),
/* harmony export */   "stringArrayToDimensions": () => (/* binding */ stringArrayToDimensions)
/* harmony export */ });
/* harmony import */ var _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/expressions.ts");


function getMetricNameFromExpression(selectExpression) {
  var _selectExpression$par;

  return selectExpression === null || selectExpression === void 0 ? void 0 : (_selectExpression$par = selectExpression.parameters) === null || _selectExpression$par === void 0 ? void 0 : _selectExpression$par[0].name;
}
function getNamespaceFromExpression(fromExpression) {
  // It's just a simple `FROM "AWS/EC2"` expression
  if ((fromExpression === null || fromExpression === void 0 ? void 0 : fromExpression.type) === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Property) {
    return fromExpression.property.name; // PR TODO: do we need to test the type here? It can only be string?
  } // It's a more complicated `FROM SCHEMA("AWS/EC2", ...)` expression


  if ((fromExpression === null || fromExpression === void 0 ? void 0 : fromExpression.type) === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Function) {
    var _fromExpression$param;

    // TODO: do we need to test the name of the function?
    return (_fromExpression$param = fromExpression.parameters) === null || _fromExpression$param === void 0 ? void 0 : _fromExpression$param[0].name;
  }

  return undefined;
}
function getSchemaLabelKeys(fromExpression) {
  var _fromExpression$param2;

  // Schema label keys are second to n arguments in the from expression function
  if ((fromExpression === null || fromExpression === void 0 ? void 0 : fromExpression.type) === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Function && fromExpression !== null && fromExpression !== void 0 && (_fromExpression$param2 = fromExpression.parameters) !== null && _fromExpression$param2 !== void 0 && _fromExpression$param2.length) {
    var _fromExpression$param3;

    if ((fromExpression === null || fromExpression === void 0 ? void 0 : (_fromExpression$param3 = fromExpression.parameters) === null || _fromExpression$param3 === void 0 ? void 0 : _fromExpression$param3.length) <= 1) {
      return [];
    } // ignore the first arg (the namespace)


    const paramExpressions = fromExpression === null || fromExpression === void 0 ? void 0 : fromExpression.parameters.slice(1);
    return paramExpressions.reduce((acc, curr) => curr.name ? [...acc, curr.name] : acc, []);
  }

  return undefined;
}
function isUsingWithSchema(fromExpression) {
  return (fromExpression === null || fromExpression === void 0 ? void 0 : fromExpression.type) === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Function && fromExpression.name === _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_0__.SCHEMA;
}
/** Given a partial operator expression, return a non-partial if it's valid, or undefined */

function sanitizeOperator(expression) {
  var _expression$property, _expression$operator, _expression$operator2;

  const key = (_expression$property = expression.property) === null || _expression$property === void 0 ? void 0 : _expression$property.name;
  const value = (_expression$operator = expression.operator) === null || _expression$operator === void 0 ? void 0 : _expression$operator.value;
  const operator = (_expression$operator2 = expression.operator) === null || _expression$operator2 === void 0 ? void 0 : _expression$operator2.name;

  if (key && value && operator) {
    return {
      type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Operator,
      property: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorPropertyType.String,
        name: key
      },
      operator: {
        value,
        name: operator
      }
    };
  }

  return undefined;
}
/**
 * Given an array of Expressions, flattens them to the leaf Operator expressions.
 * Note, this loses context of any nested ANDs or ORs, so will not be useful once we support nested conditions */

function flattenOperatorExpressions(expressions) {
  return expressions.flatMap(expression => {
    if (expression.type === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Operator) {
      return expression;
    }

    if (expression.type === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.And || expression.type === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Or) {
      return flattenOperatorExpressions(expression.expressions);
    } // Expressions that we don't expect to find in the WHERE filter will be ignored


    return [];
  });
}
/** Returns a flattened list of WHERE filters, losing all context of nested filters or AND vs OR. Not suitable
 * if the UI supports nested conditions
 */


function getFlattenedFilters(sql) {
  var _where$expressions;

  const where = sql.where;
  return flattenOperatorExpressions((_where$expressions = where === null || where === void 0 ? void 0 : where.expressions) !== null && _where$expressions !== void 0 ? _where$expressions : []);
}
/**
 * Given an array of Expressions, flattens them to the leaf Operator expressions.
 * Note, this loses context of any nested ANDs or ORs, so will not be useful once we support nested conditions */

function flattenGroupByExpressions(expressions) {
  return expressions.flatMap(expression => {
    if (expression.type === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.GroupBy) {
      return expression;
    } // Expressions that we don't expect to find in the GROUP BY will be ignored


    return [];
  });
}
/** Returns a flattened list of GROUP BY expressions, losing all context of nested filters or AND vs OR.
 */


function getFlattenedGroupBys(sql) {
  var _groupBy$expressions;

  const groupBy = sql.groupBy;
  return flattenGroupByExpressions((_groupBy$expressions = groupBy === null || groupBy === void 0 ? void 0 : groupBy.expressions) !== null && _groupBy$expressions !== void 0 ? _groupBy$expressions : []);
}
/** Converts a string array to a Dimensions object with null values  **/

function stringArrayToDimensions(arr) {
  return arr.reduce((acc, curr) => {
    if (curr) {
      return Object.assign({}, acc, {
        [curr]: null
      });
    }

    return acc;
  }, {});
}
function setSql(query, sql) {
  var _query$sql;

  return Object.assign({}, query, {
    sql: Object.assign({}, (_query$sql = query.sql) !== null && _query$sql !== void 0 ? _query$sql : {}, sql)
  });
}
function setNamespace(query, namespace) {
  var _query$sql2;

  const sql = (_query$sql2 = query.sql) !== null && _query$sql2 !== void 0 ? _query$sql2 : {}; //updating `namespace` props for CloudWatchMetricsQuery

  query.namespace = namespace ? namespace : '';

  if (namespace === undefined) {
    return setSql(query, {
      from: undefined
    });
  } // It's just a simple `FROM "AWS/EC2"` expression


  if (!sql.from || sql.from.type === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Property) {
    return setSql(query, {
      from: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Property,
        property: {
          type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorPropertyType.String,
          name: namespace
        }
      }
    });
  } // It's a more complicated `FROM SCHEMA("AWS/EC2", ...)` expression


  if (sql.from.type === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Function) {
    var _sql$from$parameters;

    const namespaceParam = {
      type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.FunctionParameter,
      name: namespace
    };
    const labelKeys = ((_sql$from$parameters = sql.from.parameters) !== null && _sql$from$parameters !== void 0 ? _sql$from$parameters : []).slice(1);
    return setSql(query, {
      from: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Function,
        name: _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_0__.SCHEMA,
        parameters: [namespaceParam, ...labelKeys]
      }
    });
  } // TODO: do the with schema bit


  return query;
}
function setSchemaLabels(query, schemaLabels) {
  var _query$sql3, _sql$from, _sql$from$parameters2;

  const sql = (_query$sql3 = query.sql) !== null && _query$sql3 !== void 0 ? _query$sql3 : {};
  schemaLabels = Array.isArray(schemaLabels) ? schemaLabels.map(l => l.value) : [schemaLabels.value]; // schema labels are the second parameter in the schema function. `... FROM SCHEMA("AWS/EC2", label1, label2 ...)`

  if (((_sql$from = sql.from) === null || _sql$from === void 0 ? void 0 : _sql$from.type) === _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Function && (_sql$from$parameters2 = sql.from.parameters) !== null && _sql$from$parameters2 !== void 0 && _sql$from$parameters2.length) {
    var _schemaLabels, _sql$from$parameters3;

    const parameters = ((_schemaLabels = schemaLabels) !== null && _schemaLabels !== void 0 ? _schemaLabels : []).map(label => ({
      type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.FunctionParameter,
      name: label
    }));
    const namespaceParam = ((_sql$from$parameters3 = sql.from.parameters) !== null && _sql$from$parameters3 !== void 0 ? _sql$from$parameters3 : [])[0];
    return setSql(query, {
      from: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Function,
        name: _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_0__.SCHEMA,
        parameters: [namespaceParam, ...parameters]
      }
    });
  }

  return query;
}
function setMetricName(query, metricName) {
  var _query$sql$select, _query$sql4;

  const param = {
    type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.FunctionParameter,
    name: metricName
  };
  return setSql(query, {
    select: Object.assign({
      type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Function
    }, (_query$sql$select = (_query$sql4 = query.sql) === null || _query$sql4 === void 0 ? void 0 : _query$sql4.select) !== null && _query$sql$select !== void 0 ? _query$sql$select : {}, {
      parameters: [param]
    })
  });
}
function removeMetricName(query) {
  var _queryWithNoParams$sq, _queryWithNoParams$sq2;

  const queryWithNoParams = Object.assign({}, query);
  (_queryWithNoParams$sq = queryWithNoParams.sql) === null || _queryWithNoParams$sq === void 0 ? true : (_queryWithNoParams$sq2 = _queryWithNoParams$sq.select) === null || _queryWithNoParams$sq2 === void 0 ? true : delete _queryWithNoParams$sq2.parameters;
  return queryWithNoParams;
}
function setAggregation(query, aggregation) {
  var _query$sql$select2, _query$sql5;

  return setSql(query, {
    select: Object.assign({
      type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Function
    }, (_query$sql$select2 = (_query$sql5 = query.sql) === null || _query$sql5 === void 0 ? void 0 : _query$sql5.select) !== null && _query$sql$select2 !== void 0 ? _query$sql$select2 : {}, {
      name: aggregation
    })
  });
}
function setOrderBy(query, aggregation) {
  return setSql(query, {
    orderBy: {
      type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Function,
      name: aggregation
    }
  });
}
function setWithSchema(query, withSchema) {
  var _query$sql6;

  const namespace = getNamespaceFromExpression(((_query$sql6 = query.sql) !== null && _query$sql6 !== void 0 ? _query$sql6 : {}).from);

  if (withSchema) {
    const namespaceParam = {
      type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.FunctionParameter,
      name: namespace
    };
    return setSql(query, {
      from: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Function,
        name: _cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_0__.SCHEMA,
        parameters: [namespaceParam]
      }
    });
  }

  return setSql(query, {
    from: {
      type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Property,
      property: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorPropertyType.String,
        name: namespace
      }
    }
  });
}
/** Sets the left hand side (InstanceId) in an OperatorExpression
 * Accepts a partial expression to use in an editor
 */

function setOperatorExpressionProperty(expression, property) {
  var _expression$operator3;

  return {
    type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Operator,
    property: {
      type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorPropertyType.String,
      name: property
    },
    operator: (_expression$operator3 = expression.operator) !== null && _expression$operator3 !== void 0 ? _expression$operator3 : {}
  };
}
/** Sets the operator ("==") in an OperatorExpression
 * Accepts a partial expression to use in an editor
 */

function setOperatorExpressionName(expression, name) {
  var _expression$property2;

  return {
    type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Operator,
    property: (_expression$property2 = expression.property) !== null && _expression$property2 !== void 0 ? _expression$property2 : {
      type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorPropertyType.String
    },
    operator: Object.assign({}, expression.operator, {
      name
    })
  };
}
/** Sets the right hand side ("i-abc123445") in an OperatorExpression
 * Accepts a partial expression to use in an editor
 */

function setOperatorExpressionValue(expression, value) {
  var _expression$property3;

  return {
    type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.Operator,
    property: (_expression$property3 = expression.property) !== null && _expression$property3 !== void 0 ? _expression$property3 : {
      type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorPropertyType.String
    },
    operator: Object.assign({}, expression.operator, {
      value
    })
  };
}
/** Creates a GroupByExpression for a specified field
 */

function setGroupByField(field) {
  return {
    type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorExpressionType.GroupBy,
    property: {
      type: _expressions__WEBPACK_IMPORTED_MODULE_1__.QueryEditorPropertyType.String,
      name: field
    }
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/SQLCodeEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SQLCodeEditor": () => (/* binding */ SQLCodeEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _cloudwatch_sql_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/definition.ts");
/* harmony import */ var _monarch_commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/commands.ts");
/* harmony import */ var _monarch_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/register.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const SQLCodeEditor = ({
  region,
  sql,
  onChange,
  onRunQuery,
  datasource
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    datasource.sqlCompletionItemProvider.setRegion(region);
  }, [region, datasource]);
  const onEditorMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((editor, monaco) => {
    editor.onDidFocusEditorText(() => editor.trigger(_monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST.id, _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST.id, {}));
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
      const text = editor.getValue();
      onChange(text);
      onRunQuery();
    });
  }, [onChange, onRunQuery]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CodeEditor, {
    height: '150px',
    language: _cloudwatch_sql_definition__WEBPACK_IMPORTED_MODULE_2__["default"].id,
    value: sql,
    onBlur: value => {
      if (value !== sql) {
        onChange(value);
      }
    },
    showMiniMap: false,
    showLineNumbers: true,
    onBeforeEditorMount: monaco => (0,_monarch_register__WEBPACK_IMPORTED_MODULE_4__.registerLanguage)(monaco, _cloudwatch_sql_definition__WEBPACK_IMPORTED_MODULE_2__["default"], datasource.sqlCompletionItemProvider),
    onEditorDidMount: onEditorMount
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/ThrottlingErrorMessage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThrottlingErrorMessage": () => (/* binding */ ThrottlingErrorMessage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _a;




const ThrottlingErrorMessage = ({
  region
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
  children: ["Please visit the\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    target: "_blank",
    rel: "noreferrer",
    className: "text-link",
    href: `https://${region}.console.aws.amazon.com/servicequotas/home?region=${region}#!/services/monitoring/quotas/L-5E141212`,
    children: "AWS Service Quotas console"
  }), "\xA0to request a quota increase or see our\xA0", _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    target: "_blank",
    rel: "noreferrer",
    className: "text-link",
    href: "https://grafana.com/docs/grafana/latest/datasources/cloudwatch/#service-quotas",
    children: "documentation"
  })), "\xA0to learn more."]
});

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/MultiFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiFilter": () => (/* binding */ MultiFilter)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _MultiFilterItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/MultiFilterItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const multiFiltersToFilterConditions = filters => Object.keys(filters).map(key => ({
  key,
  value: filters[key],
  operator: '='
}));

const filterConditionsToMultiFilters = filters => {
  const res = {};
  filters.forEach(({
    key,
    value
  }) => {
    if (key && value) {
      res[key] = value;
    }
  });
  return res;
};

const MultiFilter = ({
  filters,
  onChange,
  keyPlaceholder
}) => {
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => setItems(filters ? multiFiltersToFilterConditions(filters) : []), [filters]);

  const onFiltersChange = newItems => {
    setItems(newItems); // The onChange event should only be triggered in the case there is a complete dimension object.
    // So when a new key is added that does not yet have a value, it should not trigger an onChange event.

    const newMultifilters = filterConditionsToMultiFilters(newItems);

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(newMultifilters, filters)) {
      onChange(newMultifilters);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorList, {
    items: items,
    onChange: onFiltersChange,
    renderItem: makeRenderFilter(keyPlaceholder)
  });
};

function makeRenderFilter(keyPlaceholder) {
  function renderFilter(item, onChange, onDelete) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MultiFilterItem__WEBPACK_IMPORTED_MODULE_3__.MultiFilterItem, {
      filter: item,
      onChange: item => onChange(item),
      onDelete: onDelete,
      keyPlaceholder: keyPlaceholder
    });
  }

  return renderFilter;
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/MultiFilterItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiFilterItem": () => (/* binding */ MultiFilterItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const MultiFilterItem = ({
  filter,
  onChange,
  onDelete,
  keyPlaceholder
}) => {
  var _filter$value;

  const [localKey, setLocalKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(filter.key || '');
  const [localValue, setLocalValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(((_filter$value = filter.value) === null || _filter$value === void 0 ? void 0 : _filter$value.join(', ')) || '');
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const styles = getOperatorStyles(theme);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    "data-testid": "cloudwatch-multifilter-item",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
        "data-testid": "cloudwatch-multifilter-item-key",
        "aria-label": "Filter key",
        value: localKey,
        placeholder: keyPlaceholder !== null && keyPlaceholder !== void 0 ? keyPlaceholder : 'key',
        onChange: e => setLocalKey(e.currentTarget.value),
        onBlur: () => {
          if (localKey && localKey !== filter.key) {
            onChange(Object.assign({}, filter, {
              key: localKey
            }));
          }
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.root),
        children: "="
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
        "data-testid": "cloudwatch-multifilter-item-value",
        "aria-label": "Filter value",
        value: localValue,
        placeholder: "value1, value2,...",
        onChange: e => setLocalValue(e.currentTarget.value),
        onBlur: () => {
          const newValues = localValue.split(',').map(v => v.trim());

          if (localValue && newValues !== filter.value) {
            onChange(Object.assign({}, filter, {
              value: newValues
            }));
          }

          setLocalValue(newValues.join(', '));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.AccessoryButton, {
        "aria-label": "remove",
        icon: "times",
        variant: "secondary",
        onClick: onDelete,
        type: "button"
      })]
    })
  });
};
const getOperatorStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.stylesFactory)(theme => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: theme.spacing(0, 1),
    alignSelf: 'center'
  })
}));

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariableQueryEditor": () => (/* binding */ VariableQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/migrations/variableQueryMigrations.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
/* harmony import */ var _MultiFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/MultiFilter.tsx");
/* harmony import */ var _VariableQueryField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableQueryField.tsx");
/* harmony import */ var _VariableTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableTextField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _a, _a2;













const queryTypes = [{
  value: _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.Regions,
  label: 'Regions'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.Namespaces,
  label: 'Namespaces'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.Metrics,
  label: 'Metrics'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.DimensionKeys,
  label: 'Dimension Keys'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.DimensionValues,
  label: 'Dimension Values'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.EBSVolumeIDs,
  label: 'EBS Volume IDs'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.EC2InstanceAttributes,
  label: 'EC2 Instance Attributes'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.ResourceArns,
  label: 'Resource ARNs'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.Statistics,
  label: 'Statistics'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.LogGroups,
  label: 'Log Groups'
}];
const VariableQueryEditor = ({
  query,
  datasource,
  onChange
}) => {
  var _query$logGroupPrefix;

  const parsedQuery = (0,_migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_4__.migrateVariableQuery)(query);
  const {
    region,
    namespace,
    metricName,
    dimensionKey,
    dimensionFilters
  } = parsedQuery;
  const [regions, regionIsLoading] = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useRegions)(datasource);
  const namespaces = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useNamespaces)(datasource);
  const metrics = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useMetrics)(datasource, region, namespace);
  const dimensionKeys = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useDimensionKeys)(datasource, region, namespace, metricName);
  const keysForDimensionFilter = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useDimensionKeys)(datasource, region, namespace, metricName, dimensionFilters !== null && dimensionFilters !== void 0 ? dimensionFilters : {});

  const onRegionChange = async region => {
    const validatedQuery = await sanitizeQuery(Object.assign({}, parsedQuery, {
      region
    }));
    onQueryChange(validatedQuery);
  };

  const onNamespaceChange = async namespace => {
    const validatedQuery = await sanitizeQuery(Object.assign({}, parsedQuery, {
      namespace
    }));
    onQueryChange(validatedQuery);
  };

  const onQueryChange = newQuery => {
    onChange(Object.assign({}, newQuery, {
      refId: 'CloudWatchVariableQueryEditor-VariableQuery'
    }));
  }; // Reset dimensionValue parameters if namespace or region change


  const sanitizeQuery = async query => {
    let {
      metricName,
      dimensionKey,
      dimensionFilters,
      namespace,
      region
    } = query;

    if (metricName) {
      await datasource.getMetrics(namespace, region).then(result => {
        if (!result.find(metric => metric.value === metricName)) {
          metricName = '';
        }
      });
    }

    if (dimensionKey) {
      await datasource.getDimensionKeys(namespace, region).then(result => {
        if (!result.find(key => key.value === dimensionKey)) {
          dimensionKey = '';
          dimensionFilters = {};
        }
      });
    }

    return Object.assign({}, query, {
      metricName,
      dimensionKey,
      dimensionFilters
    });
  };

  const hasRegionField = [_types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.Metrics, _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.DimensionKeys, _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.DimensionValues, _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.EBSVolumeIDs, _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.EC2InstanceAttributes, _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.ResourceArns, _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.LogGroups].includes(parsedQuery.queryType);
  const hasNamespaceField = [_types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.Metrics, _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.DimensionKeys, _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.DimensionValues].includes(parsedQuery.queryType);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VariableQueryField__WEBPACK_IMPORTED_MODULE_7__.VariableQueryField, {
      value: parsedQuery.queryType,
      options: queryTypes,
      onChange: value => onQueryChange(Object.assign({}, parsedQuery, {
        queryType: value
      })),
      label: "Query type",
      inputId: `variable-query-type-${query.refId}`
    }), hasRegionField && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VariableQueryField__WEBPACK_IMPORTED_MODULE_7__.VariableQueryField, {
      value: region,
      options: regions,
      onChange: value => onRegionChange(value),
      label: "Region",
      isLoading: regionIsLoading,
      inputId: `variable-query-region-${query.refId}`
    }), hasNamespaceField && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VariableQueryField__WEBPACK_IMPORTED_MODULE_7__.VariableQueryField, {
      value: namespace,
      options: namespaces,
      onChange: value => onNamespaceChange(value),
      label: "Namespace",
      inputId: `variable-query-namespace-${query.refId}`
    }), parsedQuery.queryType === _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.DimensionValues && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VariableQueryField__WEBPACK_IMPORTED_MODULE_7__.VariableQueryField, {
        value: metricName || null,
        options: metrics,
        onChange: value => onQueryChange(Object.assign({}, parsedQuery, {
          metricName: value
        })),
        label: "Metric",
        inputId: `variable-query-metric-${query.refId}`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VariableQueryField__WEBPACK_IMPORTED_MODULE_7__.VariableQueryField, {
        value: dimensionKey || null,
        options: dimensionKeys,
        onChange: value => onQueryChange(Object.assign({}, parsedQuery, {
          dimensionKey: value
        })),
        label: "Dimension key",
        inputId: `variable-query-dimension-key-${query.refId}`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Dimensions",
        labelWidth: 20,
        tooltip: "Dimensions to filter the returned values on",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Dimensions, {
          metricStat: Object.assign({}, parsedQuery, {
            dimensions: parsedQuery.dimensionFilters
          }),
          onChange: dimensions => {
            onChange(Object.assign({}, parsedQuery, {
              dimensionFilters: dimensions
            }));
          },
          dimensionKeys: keysForDimensionFilter,
          disableExpressions: true,
          datasource: datasource
        })
      })]
    }), parsedQuery.queryType === _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.EBSVolumeIDs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VariableTextField__WEBPACK_IMPORTED_MODULE_8__.VariableTextField, {
      value: query.instanceID,
      placeholder: "i-XXXXXXXXXXXXXXXXX",
      onBlur: value => onQueryChange(Object.assign({}, parsedQuery, {
        instanceID: value
      })),
      label: "Instance ID"
    }), parsedQuery.queryType === _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.EC2InstanceAttributes && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VariableTextField__WEBPACK_IMPORTED_MODULE_8__.VariableTextField, {
        value: parsedQuery.attributeName,
        onBlur: value => onQueryChange(Object.assign({}, parsedQuery, {
          attributeName: value
        })),
        label: "Attribute name",
        interactive: true,
        tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: ['Attribute or tag to query on. Tags should be formatted "Tags.<name>". ', _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
            href: "https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/template-queries-cloudwatch/#selecting-attributes",
            target: "_blank",
            rel: "noreferrer",
            children: "See the documentation for more details"
          }))]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Filters",
        labelWidth: 20,
        tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [_a2 || (_a2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
            href: "https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/template-queries-cloudwatch/#selecting-attributes",
            target: "_blank",
            rel: "noreferrer",
            children: "Pre-defined ec2:DescribeInstances filters/tags"
          })), ' and the values to filter on. Tags should be formatted tag:<name>.']
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_MultiFilter__WEBPACK_IMPORTED_MODULE_6__.MultiFilter, {
          filters: parsedQuery.ec2Filters,
          onChange: filters => {
            onChange(Object.assign({}, parsedQuery, {
              ec2Filters: filters
            }));
          },
          keyPlaceholder: "filter/tag"
        })
      })]
    }), parsedQuery.queryType === _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.ResourceArns && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VariableTextField__WEBPACK_IMPORTED_MODULE_8__.VariableTextField, {
        value: parsedQuery.resourceType,
        onBlur: value => onQueryChange(Object.assign({}, parsedQuery, {
          resourceType: value
        })),
        label: "Resource type"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Tags",
        labelWidth: 20,
        tooltip: "Tags to filter the returned values on.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_MultiFilter__WEBPACK_IMPORTED_MODULE_6__.MultiFilter, {
          filters: parsedQuery.tags,
          onChange: filters => {
            onChange(Object.assign({}, parsedQuery, {
              tags: filters
            }));
          },
          keyPlaceholder: "tag"
        })
      })]
    }), parsedQuery.queryType === _types__WEBPACK_IMPORTED_MODULE_5__.VariableQueryType.LogGroups && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VariableTextField__WEBPACK_IMPORTED_MODULE_8__.VariableTextField, {
      value: (_query$logGroupPrefix = query.logGroupPrefix) !== null && _query$logGroupPrefix !== void 0 ? _query$logGroupPrefix : '',
      onBlur: value => onQueryChange(Object.assign({}, parsedQuery, {
        logGroupPrefix: value
      })),
      label: "Log group prefix"
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariableQueryField": () => (/* binding */ VariableQueryField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const LABEL_WIDTH = 20;
const VariableQueryField = ({
  label,
  onChange,
  value,
  options,
  allowCustomValue = false,
  isLoading = false,
  inputId = label
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
    label: label,
    labelWidth: LABEL_WIDTH,
    htmlFor: inputId,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      "aria-label": label,
      width: 25,
      allowCustomValue: allowCustomValue,
      value: value,
      onChange: ({
        value
      }) => onChange(value),
      options: options,
      isLoading: isLoading,
      inputId: inputId
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableTextField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariableTextField": () => (/* binding */ VariableTextField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const LABEL_WIDTH = 20;
const VariableTextField = ({
  interactive,
  label,
  onBlur,
  placeholder,
  value,
  tooltip
}) => {
  const [localValue, setLocalValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
    interactive: interactive,
    label: label,
    labelWidth: LABEL_WIDTH,
    tooltip: tooltip,
    grow: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
      "aria-label": label,
      placeholder: placeholder,
      value: localValue,
      onChange: e => setLocalValue(e.currentTarget.value),
      onBlur: () => onBlur(localValue)
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/XrayLinkConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XrayLinkConfig": () => (/* binding */ XrayLinkConfig)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Alert;










const getStyles = theme => ({
  infoText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding-bottom: ${theme.spacing(2)};
    color: ${theme.colors.text.secondary};
  `
});

const xRayDsId = 'grafana-x-ray-datasource';
function XrayLinkConfig({
  datasourceUid,
  onChange
}) {
  const hasXrayDatasource = Boolean((0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__.getDatasourceSrv)().getList({
    pluginId: xRayDsId
  }).length);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
      className: "page-heading",
      children: "X-ray trace link"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.infoText,
      children: "Grafana will automatically create a link to a trace in X-ray data source if logs contain @xrayTraceId field"
    }), !hasXrayDatasource && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      title: 'There is no X-ray datasource to link to. First add an X-ray data source and then link it to Cloud Watch. ',
      severity: "info"
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        htmlFor: "data-source-picker",
        label: "Data source",
        labelWidth: 28,
        tooltip: "X-ray data source containing traces",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker, {
          pluginId: xRayDsId,
          onChange: ds => onChange(ds.uid),
          current: datasourceUid,
          noDefault: true
        })
      })
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudWatchLogsQueryEditor": () => (/* reexport safe */ _LogsQueryEditor__WEBPACK_IMPORTED_MODULE_3__.CloudWatchLogsQueryEditor),
/* harmony export */   "Dimensions": () => (/* reexport safe */ _Dimensions_Dimensions__WEBPACK_IMPORTED_MODULE_0__.Dimensions),
/* harmony export */   "MathExpressionQueryField": () => (/* reexport safe */ _MathExpressionQueryField__WEBPACK_IMPORTED_MODULE_6__.MathExpressionQueryField),
/* harmony export */   "MetricStatEditor": () => (/* reexport safe */ _MetricStatEditor__WEBPACK_IMPORTED_MODULE_4__.MetricStatEditor),
/* harmony export */   "PanelQueryEditor": () => (/* reexport safe */ _PanelQueryEditor__WEBPACK_IMPORTED_MODULE_2__.PanelQueryEditor),
/* harmony export */   "QueryField": () => (/* reexport safe */ _Forms__WEBPACK_IMPORTED_MODULE_1__.QueryField),
/* harmony export */   "QueryInlineField": () => (/* reexport safe */ _Forms__WEBPACK_IMPORTED_MODULE_1__.QueryInlineField),
/* harmony export */   "SQLBuilderEditor": () => (/* reexport safe */ _SQLBuilderEditor__WEBPACK_IMPORTED_MODULE_5__.SQLBuilderEditor),
/* harmony export */   "SQLCodeEditor": () => (/* reexport safe */ _SQLCodeEditor__WEBPACK_IMPORTED_MODULE_7__.SQLCodeEditor)
/* harmony export */ });
/* harmony import */ var _Dimensions_Dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/Dimensions/Dimensions.tsx");
/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/Forms.tsx");
/* harmony import */ var _PanelQueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/PanelQueryEditor.tsx");
/* harmony import */ var _LogsQueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/LogsQueryEditor.tsx");
/* harmony import */ var _MetricStatEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/MetricStatEditor/index.ts");
/* harmony import */ var _SQLBuilderEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/index.tsx");
/* harmony import */ var _MathExpressionQueryField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/MathExpressionQueryField.tsx");
/* harmony import */ var _SQLCodeEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/SQLCodeEditor.tsx");









/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudWatchDatasource": () => (/* binding */ CloudWatchDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/zip.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/concatMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/repeat.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/scan.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/tap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/finalize.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _annotationSupport__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/annotationSupport.ts");
/* harmony import */ var _cloudwatch_sql_completion_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/CompletionItemProvider.ts");
/* harmony import */ var _components_ThrottlingErrorMessage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/ThrottlingErrorMessage.tsx");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/guards.ts");
/* harmony import */ var _language_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language_provider.ts");
/* harmony import */ var _memoizedDebounce__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/memoizedDebounce.ts");
/* harmony import */ var _metric_math_completion_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/metric-math/completion/CompletionItemProvider.ts");
/* harmony import */ var _migrations_metricQueryMigrations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/migrations/metricQueryMigrations.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
/* harmony import */ var _utils_datalinks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/datalinks.ts");
/* harmony import */ var _utils_logsRetry__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/logsRetry.ts");
/* harmony import */ var _utils_rxjs_increasingInterval__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/rxjs/increasingInterval.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/variables.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























const DS_QUERY_ENDPOINT = '/api/ds/query'; // Constants also defined in tsdb/cloudwatch/cloudwatch.go

const LOG_IDENTIFIER_INTERNAL = '__log__grafana_internal__';
const LOGSTREAM_IDENTIFIER_INTERNAL = '__logstream__grafana_internal__';

const displayAlert = (datasourceName, region) => app_store_store__WEBPACK_IMPORTED_MODULE_9__.store.dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__.createErrorNotification)(`CloudWatch request limit reached in ${region} for data source ${datasourceName}`, '', undefined, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ThrottlingErrorMessage__WEBPACK_IMPORTED_MODULE_13__.ThrottlingErrorMessage, {
  region
}, null))));

const displayCustomError = (title, message) => app_store_store__WEBPACK_IMPORTED_MODULE_9__.store.dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__.createErrorNotification)(title, message)));

class CloudWatchDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_8__.getTemplateSrv)(), timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__.getTimeSrv)()) {
    super(instanceSettings);

    _defineProperty(this, "proxyUrl", void 0);

    _defineProperty(this, "defaultRegion", void 0);

    _defineProperty(this, "datasourceName", void 0);

    _defineProperty(this, "languageProvider", void 0);

    _defineProperty(this, "sqlCompletionItemProvider", void 0);

    _defineProperty(this, "metricMathCompletionItemProvider", void 0);

    _defineProperty(this, "tracingDataSourceUid", void 0);

    _defineProperty(this, "logsTimeout", void 0);

    _defineProperty(this, "type", 'cloudwatch');

    _defineProperty(this, "standardStatistics", ['Average', 'Maximum', 'Minimum', 'Sum', 'SampleCount']);

    _defineProperty(this, "debouncedAlert", (0,_memoizedDebounce__WEBPACK_IMPORTED_MODULE_16__["default"])(displayAlert, app_types__WEBPACK_IMPORTED_MODULE_10__.AppNotificationTimeout.Error));

    _defineProperty(this, "debouncedCustomAlert", (0,_memoizedDebounce__WEBPACK_IMPORTED_MODULE_16__["default"])(displayCustomError, app_types__WEBPACK_IMPORTED_MODULE_10__.AppNotificationTimeout.Error));

    _defineProperty(this, "logQueries", {});

    _defineProperty(this, "handleLogQueries", (logQueries, options) => {
      const validLogQueries = logQueries.filter(item => {
        var _item$logGroupNames;

        return (_item$logGroupNames = item.logGroupNames) === null || _item$logGroupNames === void 0 ? void 0 : _item$logGroupNames.length;
      });

      if (logQueries.length > validLogQueries.length) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)({
          data: [],
          error: {
            message: 'Log group is required'
          }
        });
      } // No valid targets, return the empty result to save a round trip.


      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(validLogQueries)) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)({
          data: [],
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Done
        });
      }

      const queryParams = logQueries.map(target => ({
        queryString: target.expression || '',
        refId: target.refId,
        logGroupNames: target.logGroupNames,
        region: this.replace(this.getActualRegion(target.region), options.scopedVars, true, 'region')
      }));
      const startTime = new Date();

      const timeoutFunc = () => {
        return Date.now() >= startTime.valueOf() + _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToMs(this.logsTimeout);
      };

      return (0,_utils_logsRetry__WEBPACK_IMPORTED_MODULE_21__.runWithRetry)(targets => {
        return this.makeLogActionRequest('StartQuery', targets, {
          makeReplacements: true,
          scopedVars: options.scopedVars,
          skipCache: true
        });
      }, queryParams, timeoutFunc).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.mergeMap)(({
        frames,
        error
      }) => // This queries for the results
      this.logsQuery(frames.map(dataFrame => {
        var _dataFrame$meta$custo, _dataFrame$meta, _dataFrame$meta$custo2;

        return {
          queryId: dataFrame.fields[0].values.get(0),
          region: (_dataFrame$meta$custo = (_dataFrame$meta = dataFrame.meta) === null || _dataFrame$meta === void 0 ? void 0 : (_dataFrame$meta$custo2 = _dataFrame$meta.custom) === null || _dataFrame$meta$custo2 === void 0 ? void 0 : _dataFrame$meta$custo2['Region']) !== null && _dataFrame$meta$custo !== void 0 ? _dataFrame$meta$custo : 'default',
          refId: dataFrame.refId,
          statsGroups: logQueries.find(target => target.refId === dataFrame.refId).statsGroups
        };
      }), timeoutFunc).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(response => {
        if (!response.error && error) {
          response.error = error;
        }

        return response;
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.mergeMap)(dataQueryResponse => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.from)((async () => {
          await (0,_utils_datalinks__WEBPACK_IMPORTED_MODULE_20__.addDataLinksToLogsResponse)(dataQueryResponse, options, this.timeSrv.timeRange(), this.replace.bind(this), this.expandVariableToArray.bind(this), this.getActualRegion.bind(this), this.tracingDataSourceUid);
          return dataQueryResponse;
        })());
      }));
    });

    _defineProperty(this, "handleMetricQueries", (metricQueries, options) => {
      var _options$range, _options$range2;

      const timezoneUTCOffset = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(Date.now(), {
        timeZone: options.timezone,
        format: 'Z'
      }).replace(':', '');
      const validMetricsQueries = metricQueries.filter(this.filterMetricQuery).map(q => {
        const migratedQuery = (0,_migrations_metricQueryMigrations__WEBPACK_IMPORTED_MODULE_18__.migrateMetricQuery)(q);
        const migratedAndIterpolatedQuery = this.replaceMetricQueryVars(migratedQuery, options);
        return Object.assign({
          timezoneUTCOffset,
          intervalMs: options.intervalMs,
          maxDataPoints: options.maxDataPoints
        }, migratedAndIterpolatedQuery, {
          type: 'timeSeriesQuery',
          datasource: this.getRef()
        });
      }); // No valid targets, return the empty result to save a round trip.

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(validMetricsQueries)) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)({
          data: []
        });
      }

      const request = {
        from: options === null || options === void 0 ? void 0 : (_options$range = options.range) === null || _options$range === void 0 ? void 0 : _options$range.from.valueOf().toString(),
        to: options === null || options === void 0 ? void 0 : (_options$range2 = options.range) === null || _options$range2 === void 0 ? void 0 : _options$range2.to.valueOf().toString(),
        queries: validMetricsQueries
      };
      return this.performTimeSeriesQuery(request, options.range);
    });

    _defineProperty(this, "getLogRowContext", async (row, {
      limit = 10,
      direction = 'BACKWARD'
    } = {}) => {
      let logStreamField = null;
      let logField = null;

      for (const field of row.dataFrame.fields) {
        if (field.name === LOGSTREAM_IDENTIFIER_INTERNAL) {
          logStreamField = field;

          if (logField !== null) {
            break;
          }
        } else if (field.name === LOG_IDENTIFIER_INTERNAL) {
          logField = field;

          if (logStreamField !== null) {
            break;
          }
        }
      }

      const requestParams = {
        limit,
        startFromHead: direction !== 'BACKWARD',
        logGroupName: parseLogGroupName(logField.values.get(row.rowIndex)),
        logStreamName: logStreamField.values.get(row.rowIndex)
      };

      if (direction === 'BACKWARD') {
        requestParams.endTime = row.timeEpochMs;
      } else {
        requestParams.startTime = row.timeEpochMs;
      }

      const dataFrames = await (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.lastValueFrom)(this.makeLogActionRequest('GetLogEvents', [requestParams]));
      return {
        data: dataFrames
      };
    });

    _defineProperty(this, "getTargetsByQueryMode", targets => {
      const logQueries = [];
      const metricsQueries = [];
      const annotationQueries = [];
      targets.forEach(query => {
        if ((0,_guards__WEBPACK_IMPORTED_MODULE_14__.isCloudWatchAnnotationQuery)(query)) {
          annotationQueries.push(query);
        } else if ((0,_guards__WEBPACK_IMPORTED_MODULE_14__.isCloudWatchLogsQuery)(query)) {
          logQueries.push(query);
        } else {
          metricsQueries.push(query);
        }
      });
      return {
        logQueries,
        metricsQueries,
        annotationQueries
      };
    });

    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
    this.proxyUrl = instanceSettings.url;
    this.defaultRegion = instanceSettings.jsonData.defaultRegion;
    this.datasourceName = instanceSettings.name;
    this.languageProvider = new _language_provider__WEBPACK_IMPORTED_MODULE_15__.CloudWatchLanguageProvider(this);
    this.tracingDataSourceUid = instanceSettings.jsonData.tracingDatasourceUid;
    this.logsTimeout = instanceSettings.jsonData.logsTimeout || '15m';
    this.sqlCompletionItemProvider = new _cloudwatch_sql_completion_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_12__.SQLCompletionItemProvider(this, this.templateSrv);
    this.metricMathCompletionItemProvider = new _metric_math_completion_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_17__.MetricMathCompletionItemProvider(this, this.templateSrv);
    this.variables = new _variables__WEBPACK_IMPORTED_MODULE_23__.CloudWatchVariableSupport(this);
    this.annotations = _annotationSupport__WEBPACK_IMPORTED_MODULE_11__.CloudWatchAnnotationSupport;
  }

  filterQuery(query) {
    return query.hide !== true || (0,_guards__WEBPACK_IMPORTED_MODULE_14__.isCloudWatchMetricsQuery)(query) && query.id !== '';
  }

  query(options) {
    options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(options);
    let queries = options.targets.filter(this.filterQuery);
    const {
      logQueries,
      metricsQueries,
      annotationQueries
    } = this.getTargetsByQueryMode(queries);
    const dataQueryResponses = [];

    if (logQueries.length > 0) {
      dataQueryResponses.push(this.handleLogQueries(logQueries, options));
    }

    if (metricsQueries.length > 0) {
      dataQueryResponses.push(this.handleMetricQueries(metricsQueries, options));
    }

    if (annotationQueries.length > 0) {
      dataQueryResponses.push(this.handleAnnotationQuery(annotationQueries, options));
    } // No valid targets, return the empty result to save a round trip.


    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(dataQueryResponses)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)({
        data: [],
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Done
      });
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.merge)(...dataQueryResponses);
  }
  /**
   * Handle log query. The log query works by starting the query on the CloudWatch and then periodically polling for
   * results.
   * @param logQueries
   * @param options
   */


  filterMetricQuery(query) {
    const {
      region,
      metricQueryType,
      metricEditorMode,
      expression,
      metricName,
      namespace,
      sqlExpression,
      statistic
    } = query;

    if (!region) {
      return false;
    }

    if (metricQueryType === _types__WEBPACK_IMPORTED_MODULE_19__.MetricQueryType.Search && metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_19__.MetricEditorMode.Builder) {
      return !!namespace && !!metricName && !!statistic;
    } else if (metricQueryType === _types__WEBPACK_IMPORTED_MODULE_19__.MetricQueryType.Search && metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_19__.MetricEditorMode.Code) {
      return !!expression;
    } else if (metricQueryType === _types__WEBPACK_IMPORTED_MODULE_19__.MetricQueryType.Query) {
      // still TBD how to validate the visual query builder for SQL
      return !!sqlExpression;
    }

    throw new Error('invalid metric editor mode');
  }

  replaceMetricQueryVars(query, options) {
    var _query$dimensions;

    query.region = this.templateSrv.replace(this.getActualRegion(query.region), options.scopedVars);
    query.namespace = this.replace(query.namespace, options.scopedVars, true, 'namespace');
    query.metricName = this.replace(query.metricName, options.scopedVars, true, 'metric name');
    query.dimensions = this.convertDimensionFormat((_query$dimensions = query.dimensions) !== null && _query$dimensions !== void 0 ? _query$dimensions : {}, options.scopedVars);
    query.statistic = this.templateSrv.replace(query.statistic, options.scopedVars);
    query.period = String(this.getPeriod(query, options)); // use string format for period in graph query, and alerting

    query.id = this.templateSrv.replace(query.id, options.scopedVars);
    query.expression = this.templateSrv.replace(query.expression, options.scopedVars);
    query.sqlExpression = this.templateSrv.replace(query.sqlExpression, options.scopedVars, 'raw');
    return query;
  }

  handleAnnotationQuery(queries, options) {
    return this.awsRequest(DS_QUERY_ENDPOINT, {
      from: options.range.from.valueOf().toString(),
      to: options.range.to.valueOf().toString(),
      queries: queries.map(query => {
        var _query$dimensions2, _query$actionPrefix, _query$alarmNamePrefi;

        return Object.assign({}, query, {
          statistic: this.templateSrv.replace(query.statistic),
          region: this.templateSrv.replace(this.getActualRegion(query.region)),
          namespace: this.templateSrv.replace(query.namespace),
          metricName: this.templateSrv.replace(query.metricName),
          dimensions: this.convertDimensionFormat((_query$dimensions2 = query.dimensions) !== null && _query$dimensions2 !== void 0 ? _query$dimensions2 : {}, {}),
          period: query.period ? parseInt(query.period, 10) : 300,
          actionPrefix: (_query$actionPrefix = query.actionPrefix) !== null && _query$actionPrefix !== void 0 ? _query$actionPrefix : '',
          alarmNamePrefix: (_query$alarmNamePrefi = query.alarmNamePrefix) !== null && _query$alarmNamePrefi !== void 0 ? _query$alarmNamePrefi : '',
          type: 'annotationQuery',
          datasource: this.getRef()
        });
      })
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(r => {
      const frames = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.toDataQueryResponse)({
        data: r
      }).data;
      return {
        data: frames
      };
    }));
  }
  /**
   * Checks progress and polls data of a started logs query with some retry logic.
   * @param queryParams
   */


  logsQuery(queryParams, timeoutFunc) {
    this.logQueries = {};
    queryParams.forEach(param => {
      var _ref, _param$statsGroups$le, _param$statsGroups;

      this.logQueries[param.refId] = {
        id: param.queryId,
        region: param.region,
        statsQuery: (_ref = ((_param$statsGroups$le = (_param$statsGroups = param.statsGroups) === null || _param$statsGroups === void 0 ? void 0 : _param$statsGroups.length) !== null && _param$statsGroups$le !== void 0 ? _param$statsGroups$le : 0) > 0) !== null && _ref !== void 0 ? _ref : false
      };
    });
    const dataFrames = (0,_utils_rxjs_increasingInterval__WEBPACK_IMPORTED_MODULE_22__.increasingInterval)({
      startPeriod: 100,
      endPeriod: 1000,
      step: 300
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.concatMap)(_ => this.makeLogActionRequest('GetQueryResults', queryParams, {
      skipCache: true
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.repeat)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.share)());
    const consecutiveFailedAttempts = dataFrames.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.scan)(({
      failures,
      prevRecordsMatched
    }, frames) => {
      failures++;

      for (const frame of frames) {
        var _frame$meta, _frame$meta$stats, _frame$meta$stats$fin, _prevRecordsMatched;

        const recordsMatched = (_frame$meta = frame.meta) === null || _frame$meta === void 0 ? void 0 : (_frame$meta$stats = _frame$meta.stats) === null || _frame$meta$stats === void 0 ? void 0 : (_frame$meta$stats$fin = _frame$meta$stats.find(stat => stat.displayName === 'Records scanned')) === null || _frame$meta$stats$fin === void 0 ? void 0 : _frame$meta$stats$fin.value;

        if (recordsMatched > ((_prevRecordsMatched = prevRecordsMatched[frame.refId]) !== null && _prevRecordsMatched !== void 0 ? _prevRecordsMatched : 0)) {
          failures = 0;
        }

        prevRecordsMatched[frame.refId] = recordsMatched;
      }

      return {
        failures,
        prevRecordsMatched
      };
    }, {
      failures: 0,
      prevRecordsMatched: {}
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(({
      failures
    }) => failures), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.share)());
    const queryResponse = (0,rxjs__WEBPACK_IMPORTED_MODULE_34__.zip)(dataFrames, consecutiveFailedAttempts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_35__.tap)(([dataFrames]) => {
      for (const frame of dataFrames) {
        var _frame$meta2, _frame$meta2$custom;

        if ([_types__WEBPACK_IMPORTED_MODULE_19__.CloudWatchLogsQueryStatus.Complete, _types__WEBPACK_IMPORTED_MODULE_19__.CloudWatchLogsQueryStatus.Cancelled, _types__WEBPACK_IMPORTED_MODULE_19__.CloudWatchLogsQueryStatus.Failed].includes((_frame$meta2 = frame.meta) === null || _frame$meta2 === void 0 ? void 0 : (_frame$meta2$custom = _frame$meta2.custom) === null || _frame$meta2$custom === void 0 ? void 0 : _frame$meta2$custom['Status']) && this.logQueries.hasOwnProperty(frame.refId)) {
          delete this.logQueries[frame.refId];
        }
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(([dataFrames, failedAttempts]) => {
      if (timeoutFunc()) {
        for (const frame of dataFrames) {
          (0,lodash__WEBPACK_IMPORTED_MODULE_0__.set)(frame, 'meta.custom.Status', _types__WEBPACK_IMPORTED_MODULE_19__.CloudWatchLogsQueryStatus.Cancelled);
        }
      }

      return {
        data: dataFrames,
        key: 'test-key',
        state: dataFrames.every(dataFrame => {
          var _dataFrame$meta2, _dataFrame$meta2$cust;

          return [_types__WEBPACK_IMPORTED_MODULE_19__.CloudWatchLogsQueryStatus.Complete, _types__WEBPACK_IMPORTED_MODULE_19__.CloudWatchLogsQueryStatus.Cancelled, _types__WEBPACK_IMPORTED_MODULE_19__.CloudWatchLogsQueryStatus.Failed].includes((_dataFrame$meta2 = dataFrame.meta) === null || _dataFrame$meta2 === void 0 ? void 0 : (_dataFrame$meta2$cust = _dataFrame$meta2.custom) === null || _dataFrame$meta2$cust === void 0 ? void 0 : _dataFrame$meta2$cust['Status']);
        }) ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Done : _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading,
        error: timeoutFunc() ? {
          message: `error: query timed out after ${failedAttempts} attempts`,
          type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataQueryErrorType.Timeout
        } : undefined
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_36__.takeWhile)(({
      state
    }) => state !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Error && state !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Done, true));
    return withTeardown(queryResponse, () => this.stopQueries());
  }

  stopQueries() {
    if (Object.keys(this.logQueries).length > 0) {
      this.makeLogActionRequest('StopQuery', Object.values(this.logQueries).map(logQuery => ({
        queryId: logQuery.id,
        region: logQuery.region
      })), {
        makeReplacements: false,
        skipCache: true
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_37__.finalize)(() => {
        this.logQueries = {};
      }));
    }
  }

  async describeLogGroups(params) {
    var _dataFrames$0$fields$, _dataFrames$, _dataFrames$$fields$;

    const dataFrames = await (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.lastValueFrom)(this.makeLogActionRequest('DescribeLogGroups', [params]));
    const logGroupNames = (_dataFrames$0$fields$ = (_dataFrames$ = dataFrames[0]) === null || _dataFrames$ === void 0 ? void 0 : (_dataFrames$$fields$ = _dataFrames$.fields[0]) === null || _dataFrames$$fields$ === void 0 ? void 0 : _dataFrames$$fields$.values.toArray()) !== null && _dataFrames$0$fields$ !== void 0 ? _dataFrames$0$fields$ : [];
    return logGroupNames;
  }

  async getLogGroupFields(params) {
    var _fieldNames$map;

    const dataFrames = await (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.lastValueFrom)(this.makeLogActionRequest('GetLogGroupFields', [params]));
    const fieldNames = dataFrames[0].fields[0].values.toArray();
    const fieldPercentages = dataFrames[0].fields[1].values.toArray();
    const getLogGroupFieldsResponse = {
      logGroupFields: (_fieldNames$map = fieldNames.map((val, i) => ({
        name: val,
        percent: fieldPercentages[i]
      }))) !== null && _fieldNames$map !== void 0 ? _fieldNames$map : []
    };
    return getLogGroupFieldsResponse;
  }

  getVariables() {
    return this.templateSrv.getVariables().map(v => `$${v.name}`);
  }

  getPeriod(target, options) {
    let period = this.templateSrv.replace(target.period, options.scopedVars);

    if (period && period.toLowerCase() !== 'auto') {
      if (/^\d+$/.test(period)) {
        period = parseInt(period, 10);
      } else {
        period = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToSeconds(period);
      }

      if (period < 1) {
        period = 1;
      }
    }

    return period || '';
  }

  performTimeSeriesQuery(request, {
    from,
    to
  }) {
    return this.awsRequest(DS_QUERY_ENDPOINT, request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(res => {
      const dataframes = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.toDataQueryResponse)({
        data: res
      }).data;

      if (!dataframes || dataframes.length <= 0) {
        return {
          data: []
        };
      }

      const lastError = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findLast)(res.results, v => !!v.error);
      dataframes.forEach(frame => {
        frame.fields.forEach(field => {
          if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.time) {
            var _frame$meta3, _frame$meta3$custom;

            // field.config.interval is populated in order for Grafana to fill in null values at frame intervals
            field.config.interval = ((_frame$meta3 = frame.meta) === null || _frame$meta3 === void 0 ? void 0 : (_frame$meta3$custom = _frame$meta3.custom) === null || _frame$meta3$custom === void 0 ? void 0 : _frame$meta3$custom.period) * 1000;
          }
        });
      });
      return {
        data: dataframes,
        error: lastError ? {
          message: lastError.error
        } : null
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_38__.catchError)(err => {
      const isFrameError = err.data.results; // Error is not frame specific

      if (!isFrameError && err.data && err.data.message === 'Metric request error' && err.data.error) {
        err.message = err.data.error;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_39__.throwError)(() => err);
      } // The error is either for a specific frame or for all the frames


      const results = Object.values(err.data.results);
      const firstErrorResult = results.find(r => r.error);

      if (firstErrorResult) {
        err.message = firstErrorResult.error;
      }

      if (results.some(r => r.error && /^Throttling:.*/.test(r.error))) {
        const failedRedIds = Object.keys(err.data.results);
        const regionsAffected = Object.values(request.queries).reduce((res, {
          refId,
          region
        }) => refId && !failedRedIds.includes(refId) || res.includes(region) ? res : [...res, region], []);
        regionsAffected.forEach(region => {
          const actualRegion = this.getActualRegion(region);

          if (actualRegion) {
            this.debouncedAlert(this.datasourceName, actualRegion);
          }
        });
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_39__.throwError)(() => err);
    }));
  }

  doMetricResourceRequest(subtype, parameters) {
    return this.getResource(subtype, parameters);
  }

  makeLogActionRequest(subtype, queryParams, options = {
    makeReplacements: true,
    skipCache: false
  }) {
    const range = this.timeSrv.timeRange();
    const requestParams = {
      from: range.from.valueOf().toString(),
      to: range.to.valueOf().toString(),
      queries: queryParams.map(param => Object.assign({
        refId: param.refId || 'A',
        intervalMs: 1,
        // dummy
        maxDataPoints: 1,
        // dummy
        datasource: this.getRef(),
        type: 'logAction',
        subtype: subtype
      }, param))
    };

    if (options.makeReplacements) {
      requestParams.queries.forEach(query => {
        const fieldsToReplace = ['queryString', 'logGroupNames', 'logGroupName', 'logGroupNamePrefix'];
        const anyQuery = query;

        for (const fieldName of fieldsToReplace) {
          if (query.hasOwnProperty(fieldName)) {
            if (Array.isArray(anyQuery[fieldName])) {
              anyQuery[fieldName] = anyQuery[fieldName].flatMap(val => {
                if (fieldName === 'logGroupNames') {
                  return this.expandVariableToArray(val, options.scopedVars || {});
                }

                return this.replace(val, options.scopedVars, true, fieldName);
              });
            } else {
              anyQuery[fieldName] = this.replace(anyQuery[fieldName], options.scopedVars, true, fieldName);
            }
          }
        } // TODO: seems to be some sort of bug that we don't really send region with all queries. This means
        //  if you select different than default region in editor you will get results for autocomplete from wrong
        //  region.


        if (anyQuery.region) {
          anyQuery.region = this.replace(anyQuery.region, options.scopedVars, true, 'region');
          anyQuery.region = this.getActualRegion(anyQuery.region);
        }
      });
    }

    const resultsToDataFrames = val => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.toDataQueryResponse)(val).data || [];

    let headers = {};

    if (options.skipCache) {
      headers = {
        'X-Cache-Skip': true
      };
    }

    return this.awsRequest(DS_QUERY_ENDPOINT, requestParams, headers).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(response => resultsToDataFrames({
      data: response
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_38__.catchError)(err => {
      var _err$data, _err$data2;

      if (app_core_config__WEBPACK_IMPORTED_MODULE_5__.config.featureToggles.datasourceQueryMultiStatus && err.status === 207) {
        throw err;
      }

      if (err.status === 400) {
        throw err;
      }

      if ((_err$data = err.data) !== null && _err$data !== void 0 && _err$data.error) {
        throw err.data.error;
      } else if ((_err$data2 = err.data) !== null && _err$data2 !== void 0 && _err$data2.message) {
        // In PROD we do not supply .error
        throw err.data.message;
      }

      throw err;
    }));
  }

  getRegions() {
    return this.doMetricResourceRequest('regions').then(regions => [{
      label: 'default',
      value: 'default',
      text: 'default'
    }, ...regions]);
  }

  getNamespaces() {
    return this.doMetricResourceRequest('namespaces');
  }

  async getMetrics(namespace, region) {
    if (!namespace) {
      return [];
    }

    return this.doMetricResourceRequest('metrics', {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      namespace: this.templateSrv.replace(namespace)
    });
  }

  async getAllMetrics(region) {
    const values = await this.doMetricResourceRequest('all-metrics', {
      region: this.templateSrv.replace(this.getActualRegion(region))
    });
    return values.map(v => ({
      metricName: v.value,
      namespace: v.text
    }));
  }

  async getDimensionKeys(namespace, region, dimensionFilters = {}, metricName = '') {
    if (!namespace) {
      return [];
    }

    return this.doMetricResourceRequest('dimension-keys', {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      namespace: this.templateSrv.replace(namespace),
      dimensionFilters: JSON.stringify(this.convertDimensionFormat(dimensionFilters, {})),
      metricName
    });
  }

  async getDimensionValues(region, namespace, metricName, dimensionKey, filterDimensions) {
    if (!namespace || !metricName) {
      return [];
    }

    const values = await this.doMetricResourceRequest('dimension-values', {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      namespace: this.templateSrv.replace(namespace),
      metricName: this.templateSrv.replace(metricName.trim()),
      dimensionKey: this.templateSrv.replace(dimensionKey),
      dimensions: JSON.stringify(this.convertDimensionFormat(filterDimensions, {}))
    });
    return values;
  }

  getEbsVolumeIds(region, instanceId) {
    return this.doMetricResourceRequest('ebs-volume-ids', {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      instanceId: this.templateSrv.replace(instanceId)
    });
  }

  getEc2InstanceAttribute(region, attributeName, filters) {
    return this.doMetricResourceRequest('ec2-instance-attribute', {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      attributeName: this.templateSrv.replace(attributeName),
      filters: JSON.stringify(this.convertMultiFilterFormat(filters, 'filter key'))
    });
  }

  getResourceARNs(region, resourceType, tags) {
    return this.doMetricResourceRequest('resource-arns', {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      resourceType: this.templateSrv.replace(resourceType),
      tags: JSON.stringify(this.convertMultiFilterFormat(tags, 'tag name'))
    });
  }

  targetContainsTemplate(target) {
    var _target$logGroupNames;

    return this.templateSrv.containsTemplate(target.region) || this.templateSrv.containsTemplate(target.namespace) || this.templateSrv.containsTemplate(target.metricName) || this.templateSrv.containsTemplate(target.expression) || ((_target$logGroupNames = target.logGroupNames) === null || _target$logGroupNames === void 0 ? void 0 : _target$logGroupNames.some(logGroup => this.templateSrv.containsTemplate(logGroup))) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(target.dimensions, (v, k) => this.templateSrv.containsTemplate(k) || this.templateSrv.containsTemplate(v));
  }

  awsRequest(url, data, headers = {}) {
    const options = {
      method: 'POST',
      url,
      data,
      headers
    };
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().fetch(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(result => result.data));
  }

  getDefaultRegion() {
    return this.defaultRegion;
  }

  getActualRegion(region) {
    if (region === 'default' || region === undefined || region === '') {
      return this.getDefaultRegion();
    }

    return region;
  }

  showContextToggle() {
    return true;
  }

  convertToCloudWatchTime(date, roundUp) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(date)) {
      date = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateMath.parse(date, roundUp);
    }

    return Math.round(date.valueOf() / 1000);
  }

  convertDimensionFormat(dimensions, scopedVars) {
    return Object.entries(dimensions).reduce((result, [key, value]) => {
      key = this.replace(key, scopedVars, true, 'dimension keys');

      if (Array.isArray(value)) {
        return Object.assign({}, result, {
          [key]: value
        });
      }

      if (!value) {
        return Object.assign({}, result, {
          [key]: null
        });
      }

      const newValues = this.expandVariableToArray(value, scopedVars);
      return Object.assign({}, result, {
        [key]: newValues
      });
    }, {});
  } // get the value for a given template variable


  expandVariableToArray(value, scopedVars) {
    const variableName = this.templateSrv.getVariableName(value);
    const valueVar = this.templateSrv.getVariables().find(({
      name
    }) => {
      return name === variableName;
    });

    if (variableName && valueVar) {
      if (valueVar.multi) {
        return this.templateSrv.replace(value, scopedVars, 'pipe').split('|');
      }

      return [this.templateSrv.replace(value, scopedVars)];
    }

    return [value];
  }

  convertMultiFilterFormat(multiFilters, fieldName) {
    return Object.entries(multiFilters).reduce((result, [key, values]) => {
      key = this.replace(key, {}, true, fieldName);

      if (!values) {
        return Object.assign({}, result, {
          [key]: null
        });
      }

      const initialVal = [];
      const newValues = values.reduce((result, value) => {
        const vals = this.expandVariableToArray(value, {});
        return [...result, ...vals];
      }, initialVal);
      return Object.assign({}, result, {
        [key]: newValues
      });
    }, {});
  }

  replace(target, scopedVars, displayErrorIfIsMultiTemplateVariable, fieldName) {
    if (displayErrorIfIsMultiTemplateVariable && !!target) {
      const variable = this.templateSrv.getVariables().find(({
        name
      }) => name === this.templateSrv.getVariableName(target));

      if (variable && variable.multi) {
        this.debouncedCustomAlert('CloudWatch templating error', `Multi template variables are not supported for ${fieldName || target}`);
      }
    }

    return this.templateSrv.replace(target, scopedVars);
  }

  getQueryDisplayText(query) {
    if (query.queryMode === 'Logs') {
      var _query$expression;

      return (_query$expression = query.expression) !== null && _query$expression !== void 0 ? _query$expression : '';
    } else {
      return JSON.stringify(query);
    }
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    if (!queries.length) {
      return queries;
    }

    return queries.map(query => Object.assign({}, query, {
      region: this.getActualRegion(this.replace(query.region, scopedVars))
    }, (0,_guards__WEBPACK_IMPORTED_MODULE_14__.isCloudWatchMetricsQuery)(query) && this.interpolateMetricsQueryVariables(query, scopedVars)));
  }

  interpolateMetricsQueryVariables(query, scopedVars) {
    var _query$dimensions3;

    return {
      alias: this.replace(query.alias, scopedVars),
      metricName: this.replace(query.metricName, scopedVars),
      namespace: this.replace(query.namespace, scopedVars),
      period: this.replace(query.period, scopedVars),
      sqlExpression: this.replace(query.sqlExpression, scopedVars),
      dimensions: this.convertDimensionFormat((_query$dimensions3 = query.dimensions) !== null && _query$dimensions3 !== void 0 ? _query$dimensions3 : {}, scopedVars)
    };
  }

}

function withTeardown(observable, onUnsubscribe) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_40__.Observable(subscriber => {
    const innerSub = observable.subscribe({
      next: val => subscriber.next(val),
      error: err => subscriber.next(err),
      complete: () => subscriber.complete()
    });
    return () => {
      innerSub.unsubscribe();
      onUnsubscribe();
    };
  });
}

function parseLogGroupName(logIdentifier) {
  const colonIndex = logIdentifier.lastIndexOf(':');
  return logIdentifier.slice(colonIndex + 1);
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/dynamic-labels/CompletionItemProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicLabelsCompletionItemProvider": () => (/* binding */ DynamicLabelsCompletionItemProvider)
/* harmony export */ });
/* harmony import */ var _monarch_linkedTokenBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/linkedTokenBuilder.ts");
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/types.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/dynamic-labels/language.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class DynamicLabelsCompletionItemProvider {
  constructor() {
    _defineProperty(this, "tokenTypes", void 0);

    this.tokenTypes = {
      Parenthesis: 'delimiter.parenthesis.cloudwatch-dynamicLabels',
      Whitespace: 'white.cloudwatch-dynamicLabels',
      Keyword: 'keyword.cloudwatch-dynamicLabels',
      Delimiter: 'delimiter.cloudwatch-dynamicLabels',
      Operator: 'operator.cloudwatch-dynamicLabels',
      Identifier: 'identifier.cloudwatch-dynamicLabels',
      Type: 'type.cloudwatch-dynamicLabels',
      Function: 'predefined.cloudwatch-dynamicLabels',
      Number: 'number.cloudwatch-dynamicLabels',
      String: 'string.cloudwatch-dynamicLabels',
      Variable: 'variable.cloudwatch-dynamicLabels'
    };
  } // called by registerLanguage and passed to monaco with registerCompletionItemProvider
  // returns an object that implements https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.CompletionItemProvider.html


  getCompletionProvider(monaco, languageDefinition) {
    return {
      triggerCharacters: [' ', '$', ',', '(', "'"],
      // one of these characters indicates that it is time to look for a suggestion
      provideCompletionItems: async (model, position) => {
        const currentToken = (0,_monarch_linkedTokenBuilder__WEBPACK_IMPORTED_MODULE_0__.linkedTokenBuilder)(monaco, languageDefinition, model, position, this.tokenTypes);
        const invalidRangeToken = (currentToken === null || currentToken === void 0 ? void 0 : currentToken.isWhiteSpace()) || (currentToken === null || currentToken === void 0 ? void 0 : currentToken.isParenthesis());
        const range = invalidRangeToken || !(currentToken !== null && currentToken !== void 0 && currentToken.range) ? monaco.Range.fromPositions(position) : currentToken === null || currentToken === void 0 ? void 0 : currentToken.range;

        const toCompletionItem = (value, rest = {}) => {
          const item = Object.assign({
            label: value,
            insertText: value,
            kind: monaco.languages.CompletionItemKind.Field,
            range,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_1__.CompletionItemPriority.Medium
          }, rest);
          return item;
        };

        let suggestions = [];
        const next = currentToken === null || currentToken === void 0 ? void 0 : currentToken.next;

        if (!(currentToken !== null && currentToken !== void 0 && currentToken.isFunction()) && (!next || next.isWhiteSpace())) {
          suggestions = _language__WEBPACK_IMPORTED_MODULE_2__.DYNAMIC_LABEL_PATTERNS.map(val => toCompletionItem(val)); // always insert suggestion for dimension value and allow user to complete pattern by providing the dimension name

          suggestions.push(toCompletionItem("${PROP('Dim.')}", {
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_1__.CompletionItemPriority.High,
            insertText: `\${PROP('Dim.$0')} `,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          }));
        }

        return {
          suggestions
        };
      }
    };
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/dynamic-labels/definition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cloudWatchDynamicLabelsLanguageDefinition = {
  id: 'cloudwatch-dynamicLabels',
  extensions: [],
  aliases: [],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/cloudwatch/dynamic-labels/language.ts"))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudWatchDynamicLabelsLanguageDefinition);

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/dynamic-labels/language.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DYNAMIC_LABEL_PATTERNS": () => (/* binding */ DYNAMIC_LABEL_PATTERNS),
/* harmony export */   "conf": () => (/* binding */ conf),
/* harmony export */   "language": () => (/* binding */ language)
/* harmony export */ });
// Dynamic labels: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html
const DYNAMIC_LABEL_PATTERNS = ['${DATAPOINT_COUNT}', '${FIRST}', '${FIRST_LAST_RANGE}', '${FIRST_LAST_TIME_RANGE}', '${FIRST_TIME}', '${FIRST_TIME_RELATIVE}', '${LABEL}', '${LAST}', '${LAST_TIME}', '${LAST_TIME_RELATIVE}', '${MAX}', '${MAX_TIME}', '${MAX_TIME_RELATIVE}', '${MIN}', '${MIN_MAX_RANGE}', '${MIN_MAX_TIME_RANGE}', '${MIN_TIME}', '${MIN_TIME_RELATIVE}', "${PROP('AccountId')}", "${PROP('MetricName')}", "${PROP('Namespace')}", "${PROP('Period')}", "${PROP('Region')}", "${PROP('Stat')}", '${SUM}'];
const language = {
  id: 'dynamicLabels',
  ignoreCase: false,
  tokenizer: {
    root: [{
      include: '@whitespace'
    }, {
      include: '@builtInFunctions'
    }, {
      include: '@string'
    }, [/\$\{PROP\('Dim.[a-zA-Z0-9-_]?.*'\)\}+/, 'predefined'] //custom handling for dimension patterns
    ],
    builtInFunctions: [[DYNAMIC_LABEL_PATTERNS.map(escapeRegExp).join('|'), 'predefined']],
    whitespace: [[/\s+/, 'white']],
    string: []
  }
};
const conf = {};

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/expressions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditorExpressionType": () => (/* binding */ QueryEditorExpressionType),
/* harmony export */   "QueryEditorPropertyType": () => (/* binding */ QueryEditorPropertyType)
/* harmony export */ });
let QueryEditorPropertyType;

(function (QueryEditorPropertyType) {
  QueryEditorPropertyType["String"] = "string";
})(QueryEditorPropertyType || (QueryEditorPropertyType = {}));

let QueryEditorExpressionType;

(function (QueryEditorExpressionType) {
  QueryEditorExpressionType["Property"] = "property";
  QueryEditorExpressionType["Operator"] = "operator";
  QueryEditorExpressionType["Or"] = "or";
  QueryEditorExpressionType["And"] = "and";
  QueryEditorExpressionType["GroupBy"] = "groupBy";
  QueryEditorExpressionType["Function"] = "function";
  QueryEditorExpressionType["FunctionParameter"] = "functionParameter";
})(QueryEditorExpressionType || (QueryEditorExpressionType = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/guards.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCloudWatchAnnotation": () => (/* binding */ isCloudWatchAnnotation),
/* harmony export */   "isCloudWatchAnnotationQuery": () => (/* binding */ isCloudWatchAnnotationQuery),
/* harmony export */   "isCloudWatchLogsQuery": () => (/* binding */ isCloudWatchLogsQuery),
/* harmony export */   "isCloudWatchMetricsQuery": () => (/* binding */ isCloudWatchMetricsQuery)
/* harmony export */ });
const isCloudWatchLogsQuery = cloudwatchQuery => cloudwatchQuery.queryMode === 'Logs';
const isCloudWatchMetricsQuery = cloudwatchQuery => cloudwatchQuery.queryMode === 'Metrics' || !cloudwatchQuery.hasOwnProperty('queryMode'); // in early versions of this plugin, queryMode wasn't defined in a CloudWatchMetricsQuery

const isCloudWatchAnnotationQuery = cloudwatchQuery => cloudwatchQuery.queryMode === 'Annotations';
const isCloudWatchAnnotation = query => {
  var _target;

  return ((_target = query.target) === null || _target === void 0 ? void 0 : _target.queryMode) === 'Annotations';
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/hooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDimensionKeys": () => (/* binding */ useDimensionKeys),
/* harmony export */   "useMetrics": () => (/* binding */ useMetrics),
/* harmony export */   "useNamespaces": () => (/* binding */ useNamespaces),
/* harmony export */   "useRegions": () => (/* binding */ useRegions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useDeepCompareEffect.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");




const useRegions = datasource => {
  const [regionsIsLoading, setRegionsIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [regions, setRegions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    label: 'default',
    value: 'default'
  }]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setRegionsIsLoading(true);
    const variableOptionGroup = {
      label: 'Template Variables',
      options: datasource.getVariables().map(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)
    };
    datasource.getRegions().then(regions => setRegions([...regions, variableOptionGroup])).finally(() => setRegionsIsLoading(false));
  }, [datasource]);
  return [regions, regionsIsLoading];
};
const useNamespaces = datasource => {
  const [namespaces, setNamespaces] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    datasource.getNamespaces().then(namespaces => {
      setNamespaces((0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.appendTemplateVariables)(datasource, namespaces));
    });
  }, [datasource]);
  return namespaces;
};
const useMetrics = (datasource, region, namespace) => {
  const [metrics, setMetrics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    datasource.getMetrics(namespace, region).then(result => {
      setMetrics((0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.appendTemplateVariables)(datasource, result));
    });
  }, [datasource, region, namespace]);
  return metrics;
};
const useDimensionKeys = (datasource, region, namespace, metricName, dimensionFilter) => {
  const [dimensionKeys, setDimensionKeys] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // doing deep comparison to avoid making new api calls to list metrics unless dimension filter object props changes

  (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    datasource.getDimensionKeys(namespace, region, dimensionFilter, metricName).then(result => {
      setDimensionKeys((0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.appendTemplateVariables)(datasource, result));
    });
  }, [datasource, region, namespace, metricName, dimensionFilter]);
  return dimensionKeys;
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language_provider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudWatchLanguageProvider": () => (/* binding */ CloudWatchLanguageProvider)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.28.0-28f20a79ff-bde93fb2be.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/syntax.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class CloudWatchLanguageProvider extends _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LanguageProvider {
  constructor(datasource, initialValues) {
    super();

    _defineProperty(this, "started", false);

    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "cleanText", s => s.replace(/[()]/g, '').trim());

    _defineProperty(this, "request", (url, params) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(this.datasource.awsRequest(url, params));
    });

    _defineProperty(this, "start", () => {
      if (!this.startTask) {
        this.startTask = Promise.resolve().then(() => {
          this.started = true;
          return [];
        });
      }

      return this.startTask;
    });

    _defineProperty(this, "fetchedFieldsCache", void 0);

    _defineProperty(this, "fetchFields", async (logGroups, region) => {
      if (this.fetchedFieldsCache && Date.now() - this.fetchedFieldsCache.time < 30 * 1000 && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortedUniq)(this.fetchedFieldsCache.logGroups).join('|') === (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortedUniq)(logGroups).join('|')) {
        return this.fetchedFieldsCache.fields;
      }

      const results = await Promise.all(logGroups.map(logGroup => this.datasource.getLogGroupFields({
        logGroupName: logGroup,
        region
      })));
      const fields = [...new Set(results.reduce((acc, cur) => {
        var _cur$logGroupFields;

        return acc.concat((_cur$logGroupFields = cur.logGroupFields) === null || _cur$logGroupFields === void 0 ? void 0 : _cur$logGroupFields.map(f => f.name));
      }, [])).values()];
      this.fetchedFieldsCache = {
        time: Date.now(),
        logGroups,
        fields
      };
      return fields;
    });

    _defineProperty(this, "handleKeyword", async context => {
      var _context$logGroupName;

      const suggs = await this.getFieldCompletionItems((_context$logGroupName = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName !== void 0 ? _context$logGroupName : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
      const functionSuggestions = [{
        searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SearchFunctionType.Prefix,
        label: 'Functions',
        items: _syntax__WEBPACK_IMPORTED_MODULE_4__.STRING_FUNCTIONS.concat(_syntax__WEBPACK_IMPORTED_MODULE_4__.DATETIME_FUNCTIONS, _syntax__WEBPACK_IMPORTED_MODULE_4__.IP_FUNCTIONS)
      }];
      suggs.suggestions.push(...functionSuggestions);
      return suggs;
    });

    _defineProperty(this, "handleCommand", async (commandToken, curToken, context) => {
      var _commandToken$next;

      const queryCommand = commandToken.content.toLowerCase();
      const prevToken = prevNonWhitespaceToken(curToken);
      const currentTokenIsFirstArg = prevToken === commandToken;

      if (queryCommand === 'sort') {
        return this.handleSortCommand(currentTokenIsFirstArg, curToken, context);
      }

      if (queryCommand === 'parse') {
        if (currentTokenIsFirstArg) {
          var _context$logGroupName2;

          return await this.getFieldCompletionItems((_context$logGroupName2 = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName2 !== void 0 ? _context$logGroupName2 : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
        }
      }

      const currentTokenIsAfterCommandAndEmpty = isTokenType(commandToken.next, 'whitespace') && !((_commandToken$next = commandToken.next) !== null && _commandToken$next !== void 0 && _commandToken$next.next);
      const currentTokenIsAfterCommand = currentTokenIsAfterCommandAndEmpty || nextNonWhitespaceToken(commandToken) === curToken;
      const currentTokenIsComma = isTokenType(curToken, 'punctuation', ',');
      const currentTokenIsCommaOrAfterComma = currentTokenIsComma || isTokenType(prevToken, 'punctuation', ','); // We only show suggestions if we are after a command or after a comma which is a field separator

      if (!(currentTokenIsAfterCommand || currentTokenIsCommaOrAfterComma)) {
        return {
          suggestions: []
        };
      }

      if (['display', 'fields'].includes(queryCommand)) {
        var _context$logGroupName3;

        const typeaheadOutput = await this.getFieldCompletionItems((_context$logGroupName3 = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName3 !== void 0 ? _context$logGroupName3 : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
        typeaheadOutput.suggestions.push(...this.getFieldAndFilterFunctionCompletionItems().suggestions);
        return typeaheadOutput;
      }

      if (queryCommand === 'stats') {
        const typeaheadOutput = this.getStatsAggCompletionItems();

        if (currentTokenIsComma || currentTokenIsAfterCommandAndEmpty) {
          typeaheadOutput === null || typeaheadOutput === void 0 ? void 0 : typeaheadOutput.suggestions.forEach(group => {
            group.skipFilter = true;
          });
        }

        return typeaheadOutput;
      }

      if (queryCommand === 'filter' && currentTokenIsFirstArg) {
        var _context$logGroupName4;

        const sugg = await this.getFieldCompletionItems((_context$logGroupName4 = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName4 !== void 0 ? _context$logGroupName4 : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
        const boolFuncs = this.getBoolFuncCompletionItems();
        sugg.suggestions.push(...boolFuncs.suggestions);
        return sugg;
      }

      return {
        suggestions: []
      };
    });

    _defineProperty(this, "handleComparison", async context => {
      var _context$logGroupName5;

      const fieldsSuggestions = await this.getFieldCompletionItems((_context$logGroupName5 = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName5 !== void 0 ? _context$logGroupName5 : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
      const comparisonSuggestions = this.getComparisonCompletionItems();
      fieldsSuggestions.suggestions.push(...comparisonSuggestions.suggestions);
      return fieldsSuggestions;
    });

    _defineProperty(this, "getCommandCompletionItems", () => {
      return {
        suggestions: [{
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SearchFunctionType.Prefix,
          label: 'Commands',
          items: _syntax__WEBPACK_IMPORTED_MODULE_4__.QUERY_COMMANDS
        }]
      };
    });

    _defineProperty(this, "getFieldAndFilterFunctionCompletionItems", () => {
      return {
        suggestions: [{
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SearchFunctionType.Prefix,
          label: 'Functions',
          items: _syntax__WEBPACK_IMPORTED_MODULE_4__.FIELD_AND_FILTER_FUNCTIONS
        }]
      };
    });

    _defineProperty(this, "getStatsAggCompletionItems", () => {
      return {
        suggestions: [{
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SearchFunctionType.Prefix,
          label: 'Functions',
          items: _syntax__WEBPACK_IMPORTED_MODULE_4__.AGGREGATION_FUNCTIONS_STATS
        }]
      };
    });

    _defineProperty(this, "getBoolFuncCompletionItems", () => {
      return {
        suggestions: [{
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SearchFunctionType.Prefix,
          label: 'Functions',
          items: _syntax__WEBPACK_IMPORTED_MODULE_4__.BOOLEAN_FUNCTIONS
        }]
      };
    });

    _defineProperty(this, "getComparisonCompletionItems", () => {
      return {
        suggestions: [{
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SearchFunctionType.Prefix,
          label: 'Functions',
          items: _syntax__WEBPACK_IMPORTED_MODULE_4__.NUMERIC_OPERATORS.concat(_syntax__WEBPACK_IMPORTED_MODULE_4__.BOOLEAN_FUNCTIONS)
        }]
      };
    });

    _defineProperty(this, "getFieldCompletionItems", async (logGroups, region) => {
      const fields = await this.fetchFields(logGroups, region);
      return {
        suggestions: [{
          label: 'Fields',
          items: fields.map(field => ({
            label: field,
            insertText: field.match(/@?[_a-zA-Z]+[_.0-9a-zA-Z]*/) ? undefined : `\`${field}\``
          }))
        }]
      };
    });

    this.datasource = datasource;
    Object.assign(this, initialValues);
  } // Strip syntax chars


  getSyntax() {
    return _syntax__WEBPACK_IMPORTED_MODULE_4__["default"];
  }

  isStatsQuery(query) {
    var _Prism$tokenize;

    const grammar = this.getSyntax();
    const tokens = (_Prism$tokenize = prismjs__WEBPACK_IMPORTED_MODULE_1___default().tokenize(query, grammar)) !== null && _Prism$tokenize !== void 0 ? _Prism$tokenize : [];
    return !!tokens.find(token => typeof token !== 'string' && token.content.toString().toLowerCase() === 'stats' && token.type === 'query-command');
  }
  /**
   * Return suggestions based on input that can be then plugged into a typeahead dropdown.
   * Keep this DOM-free for testing
   * @param input
   * @param context Is optional in types but is required in case we are doing getLabelCompletionItems
   * @param context.absoluteRange Required in case we are doing getLabelCompletionItems
   * @param context.history Optional used only in getEmptyCompletionItems
   */


  async provideCompletionItems(input, context) {
    const {
      value
    } = input; // Get tokens

    const tokens = value === null || value === void 0 ? void 0 : value.data.get('tokens');

    if (!tokens || !tokens.length) {
      return {
        suggestions: []
      };
    }

    const curToken = tokens.filter(token => {
      var _selection, _selection$start, _selection2, _selection2$start;

      return token.offsets.start <= ((_selection = value.selection) === null || _selection === void 0 ? void 0 : (_selection$start = _selection.start) === null || _selection$start === void 0 ? void 0 : _selection$start.offset) && token.offsets.end >= ((_selection2 = value.selection) === null || _selection2 === void 0 ? void 0 : (_selection2$start = _selection2.start) === null || _selection2$start === void 0 ? void 0 : _selection2$start.offset);
    })[0];
    const isFirstToken = !curToken.prev;
    const prevToken = prevNonWhitespaceToken(curToken);
    const isCommandStart = isFirstToken || !isFirstToken && (prevToken === null || prevToken === void 0 ? void 0 : prevToken.types.includes('command-separator'));

    if (isCommandStart) {
      return this.getCommandCompletionItems();
    }

    if (isInsideFunctionParenthesis(curToken)) {
      var _context$logGroupName6;

      return await this.getFieldCompletionItems((_context$logGroupName6 = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName6 !== void 0 ? _context$logGroupName6 : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
    }

    if (isAfterKeyword('by', curToken)) {
      return this.handleKeyword(context);
    }

    if (prevToken !== null && prevToken !== void 0 && prevToken.types.includes('comparison-operator')) {
      return this.handleComparison(context);
    }

    const commandToken = previousCommandToken(curToken);

    if (commandToken) {
      return await this.handleCommand(commandToken, curToken, context);
    }

    return {
      suggestions: []
    };
  }

  async handleSortCommand(isFirstArgument, curToken, context) {
    if (isFirstArgument) {
      var _context$logGroupName7;

      return await this.getFieldCompletionItems((_context$logGroupName7 = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName7 !== void 0 ? _context$logGroupName7 : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
    } else if (isTokenType(prevNonWhitespaceToken(curToken), 'field-name')) {
      // suggest sort options
      return {
        suggestions: [{
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SearchFunctionType.Prefix,
          label: 'Sort Order',
          items: [{
            label: 'asc'
          }, {
            label: 'desc'
          }]
        }]
      };
    }

    return {
      suggestions: []
    };
  }

}

function nextNonWhitespaceToken(token) {
  let curToken = token;

  while (curToken.next) {
    if (curToken.next.types.includes('whitespace')) {
      curToken = curToken.next;
    } else {
      return curToken.next;
    }
  }

  return null;
}

function prevNonWhitespaceToken(token) {
  let curToken = token;

  while (curToken.prev) {
    if (isTokenType(curToken.prev, 'whitespace')) {
      curToken = curToken.prev;
    } else {
      return curToken.prev;
    }
  }

  return null;
}

function previousCommandToken(startToken) {
  let thisToken = startToken;

  while (!!thisToken.prev) {
    thisToken = thisToken.prev;

    if (thisToken.types.includes('query-command') && (!thisToken.prev || isTokenType(prevNonWhitespaceToken(thisToken), 'command-separator'))) {
      return thisToken;
    }
  }

  return null;
}

const funcsWithFieldArgs = ['avg', 'count', 'count_distinct', 'earliest', 'latest', 'sortsFirst', 'sortsLast', 'max', 'min', 'pct', 'stddev', 'ispresent', 'fromMillis', 'toMillis', 'isempty', 'isblank', 'isValidIp', 'isValidIpV4', 'isValidIpV6', 'isIpInSubnet', 'isIpv4InSubnet', 'isIpv6InSubnet'].map(funcName => funcName.toLowerCase());
/**
 * Returns true if cursor is currently inside a function parenthesis for example `count(|)` or `count(@mess|)` should
 * return true.
 */

function isInsideFunctionParenthesis(curToken) {
  const prevToken = prevNonWhitespaceToken(curToken);

  if (!prevToken) {
    return false;
  }

  const parenthesisToken = curToken.content === '(' ? curToken : prevToken.content === '(' ? prevToken : undefined;

  if (parenthesisToken) {
    const maybeFunctionToken = prevNonWhitespaceToken(parenthesisToken);

    if (maybeFunctionToken) {
      return funcsWithFieldArgs.includes(maybeFunctionToken.content.toLowerCase()) && maybeFunctionToken.types.includes('function');
    }
  }

  return false;
}

function isAfterKeyword(keyword, token) {
  const maybeKeyword = getPreviousTokenExcluding(token, ['whitespace', 'function', 'punctuation', 'field-name', 'number']);

  if (isTokenType(maybeKeyword, 'keyword', 'by')) {
    const prev = getPreviousTokenExcluding(token, ['whitespace']);

    if (prev === maybeKeyword || isTokenType(prev, 'punctuation', ',')) {
      return true;
    }
  }

  return false;
}

function isTokenType(token, type, content) {
  if (!(token !== null && token !== void 0 && token.types.includes(type))) {
    return false;
  }

  if (content) {
    if ((token === null || token === void 0 ? void 0 : token.content.toLowerCase()) !== content) {
      return false;
    }
  }

  return true;
}

function getPreviousTokenExcluding(token, exclude) {
  let curToken = token.prev;

  main: while (curToken) {
    for (const item of exclude) {
      if (typeof item === 'string') {
        if (curToken.types.includes(item)) {
          curToken = curToken.prev;
          continue main;
        }
      } else {
        if (curToken.types.includes(item.type) && curToken.content.toLowerCase() === item.value) {
          curToken = curToken.prev;
          continue main;
        }
      }
    }

    break;
  }

  return curToken;
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/memoizedDebounce.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((func, wait = 7000) => {
  const mem = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.memoize)((...args) => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(func, wait, {
    leading: true
  }), (...args) => JSON.stringify(args));
  return (...args) => mem(...args)(...args);
});

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/metric-math/completion/CompletionItemProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricMathCompletionItemProvider": () => (/* binding */ MetricMathCompletionItemProvider)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/CompletionItemProvider.ts");
/* harmony import */ var _monarch_commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/commands.ts");
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/types.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/metric-math/language.ts");
/* harmony import */ var _statementPosition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/metric-math/completion/statementPosition.ts");
/* harmony import */ var _suggestionKind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/metric-math/completion/suggestionKind.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/metric-math/completion/types.ts");








class MetricMathCompletionItemProvider extends _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_1__.CompletionItemProvider {
  constructor(datasource, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)()) {
    super(datasource, templateSrv);
    this.getStatementPosition = _statementPosition__WEBPACK_IMPORTED_MODULE_5__.getStatementPosition;
    this.getSuggestionKinds = _suggestionKind__WEBPACK_IMPORTED_MODULE_6__.getSuggestionKinds;
    this.tokenTypes = _types__WEBPACK_IMPORTED_MODULE_7__.MetricMathTokenTypes;
  }

  async getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position) {
    let suggestions = [];
    const invalidRangeToken = (currentToken === null || currentToken === void 0 ? void 0 : currentToken.isWhiteSpace()) || (currentToken === null || currentToken === void 0 ? void 0 : currentToken.isParenthesis());
    const range = invalidRangeToken || !(currentToken !== null && currentToken !== void 0 && currentToken.range) ? monaco.Range.fromPositions(position) : currentToken === null || currentToken === void 0 ? void 0 : currentToken.range;

    const toCompletionItem = (value, rest = {}) => {
      const item = Object.assign({
        label: value,
        insertText: value,
        kind: monaco.languages.CompletionItemKind.Field,
        range,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.Medium
      }, rest);
      return item;
    };

    function addSuggestion(value, rest = {}) {
      suggestions = [...suggestions, toCompletionItem(value, rest)];
    }

    for (const suggestion of suggestionKinds) {
      switch (suggestion) {
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.FunctionsWithArguments:
          _language__WEBPACK_IMPORTED_MODULE_4__.METRIC_MATH_FNS.map(f => addSuggestion(f, {
            insertText: f === 'SEARCH' ? `${f}('$0')` : `${f}($0)`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Function
          }));
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.KeywordArguments:
          _language__WEBPACK_IMPORTED_MODULE_4__.METRIC_MATH_KEYWORDS.map(s => addSuggestion(s, {
            insertText: s,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Keyword,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.MediumHigh
          }));
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.Statistic:
          _language__WEBPACK_IMPORTED_MODULE_4__.METRIC_MATH_STATISTIC_KEYWORD_STRINGS.map(s => addSuggestion(s, {
            insertText: `'${s}', `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          }));
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.Operators:
          _language__WEBPACK_IMPORTED_MODULE_4__.METRIC_MATH_OPERATORS.map(s => addSuggestion(s, {
            insertText: `${s} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          }));
          break;

        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.Period:
          _language__WEBPACK_IMPORTED_MODULE_4__.METRIC_MATH_PERIODS.map((s, idx) => addSuggestion(s.toString(), {
            kind: monaco.languages.CompletionItemKind.Value,
            sortText: String.fromCharCode(97 + idx) // converts index 0, 1 to "a", "b", etc needed to show the time periods in numerical order

          }));
          break;
      }
    } // always suggest template variables


    this.templateVariables.map(v => {
      addSuggestion(v, {
        range,
        label: v,
        insertText: v,
        kind: monaco.languages.CompletionItemKind.Variable,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.Low
      });
    });
    return suggestions;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/metric-math/completion/statementPosition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStatementPosition": () => (/* binding */ getStatementPosition)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/metric-math/completion/types.ts");


function getStatementPosition(currentToken) {
  const previousNonWhiteSpace = currentToken === null || currentToken === void 0 ? void 0 : currentToken.getPreviousNonWhiteSpaceToken();

  if (currentToken && currentToken.isString()) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WithinString;
  }

  if (currentToken && previousNonWhiteSpace) {
    const currentFunction = currentToken.getPreviousOfType(_types__WEBPACK_IMPORTED_MODULE_1__.MetricMathTokenTypes.Function);
    const isAfterComma = previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_1__.MetricMathTokenTypes.Delimiter, ',');
    const isWithinSearch = currentFunction && currentFunction.value === 'SEARCH';
    const allTokensAfterStartOfSearch = currentToken.getPreviousUntil(_types__WEBPACK_IMPORTED_MODULE_1__.MetricMathTokenTypes.Function, [], 'SEARCH') || [];

    if (isWithinSearch) {
      // if there's only one ' then we're still within the first arg
      if (allTokensAfterStartOfSearch.filter(({
        value
      }) => value === "'").length === 1) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WithinString;
      } // if there was a , before the last , and it happened after the start of SEARCH


      const lastComma = previousNonWhiteSpace.getPreviousOfType(_types__WEBPACK_IMPORTED_MODULE_1__.MetricMathTokenTypes.Delimiter, ',');

      if (lastComma) {
        const lastCommaIsAfterSearch = lastComma.range.startColumn > currentFunction.range.startColumn && lastComma.range.startLineNumber >= currentFunction.range.startLineNumber;

        if (lastCommaIsAfterSearch) {
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SearchFuncThirdArg;
        }
      } // otherwise assume it's the second arg


      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SearchFuncSecondArg;
    }

    if (!isWithinSearch && isAfterComma) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.PredefinedFuncSecondArg;
    }
  }

  if (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.endsWith(')')) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFunction;
  }

  if (!currentToken || !currentToken.isString()) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.PredefinedFunction;
  }

  return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Unknown;
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/metric-math/completion/suggestionKind.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSuggestionKinds": () => (/* binding */ getSuggestionKinds)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/types.ts");

function getSuggestionKinds(statementPosition) {
  switch (statementPosition) {
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.PredefinedFunction:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.PredefinedFuncSecondArg:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.KeywordArguments];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFunction:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Operators];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SearchFuncSecondArg:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Statistic];

    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SearchFuncThirdArg:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Period];
  }

  return [];
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/metric-math/completion/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricMathTokenTypes": () => (/* binding */ MetricMathTokenTypes)
/* harmony export */ });
const MetricMathTokenTypes = {
  Parenthesis: 'delimiter.parenthesis.cloudwatch-MetricMath',
  Whitespace: 'white.cloudwatch-MetricMath',
  Keyword: 'keyword.cloudwatch-MetricMath',
  Delimiter: 'delimiter.cloudwatch-MetricMath',
  Operator: 'operator.cloudwatch-MetricMath',
  Identifier: 'identifier.cloudwatch-MetricMath',
  Type: 'type.cloudwatch-MetricMath',
  Function: 'predefined.cloudwatch-MetricMath',
  Number: 'number.cloudwatch-MetricMath',
  String: 'string.cloudwatch-MetricMath',
  Variable: 'variable.cloudwatch-MetricMath'
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/metric-math/definition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cloudWatchMetricMathLanguageDefinition = {
  id: 'cloudwatch-MetricMath',
  extensions: [],
  aliases: [],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/cloudwatch/metric-math/language.ts"))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudWatchMetricMathLanguageDefinition);

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/metric-math/language.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "METRIC_MATH_FNS": () => (/* binding */ METRIC_MATH_FNS),
/* harmony export */   "METRIC_MATH_KEYWORDS": () => (/* binding */ METRIC_MATH_KEYWORDS),
/* harmony export */   "METRIC_MATH_OPERATORS": () => (/* binding */ METRIC_MATH_OPERATORS),
/* harmony export */   "METRIC_MATH_PERIODS": () => (/* binding */ METRIC_MATH_PERIODS),
/* harmony export */   "METRIC_MATH_STATISTIC_KEYWORD_STRINGS": () => (/* binding */ METRIC_MATH_STATISTIC_KEYWORD_STRINGS),
/* harmony export */   "conf": () => (/* binding */ conf),
/* harmony export */   "language": () => (/* binding */ language)
/* harmony export */ });
// Metric Math: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html
const METRIC_MATH_FNS = ['ABS', 'ANOMALY_DETECTION_BAND', 'AVG', 'CEIL', 'DATAPOINT_COUNT', 'DIFF', 'DIFF_TIME', 'FILL', 'FIRST', 'LAST', 'FLOOR', 'IF', 'INSIGHT_RULE_METRIC', 'LOG', 'LOG10', 'MAX', 'METRIC_COUNT', 'METRICS', 'MIN', 'MINUTE', 'HOUR', 'DAY', 'DATE', 'MONTH', 'YEAR', 'EPOCH', 'PERIOD', 'RATE', 'REMOVE_EMPTY', 'RUNNING_SUM', 'SEARCH', 'SERVICE_QUOTA', 'SLICE', 'SORT', 'STDDEV', 'SUM', 'TIME_SERIES'];
const METRIC_MATH_STATISTIC_KEYWORD_STRINGS = ['Average', 'Maximum', 'Minimum', 'Sum', 'SampleCount']; // second arguments to SEARCH function

const METRIC_MATH_KEYWORDS = ['REPEAT', 'LINEAR', 'ASC', 'DSC']; // standalone magic arguments to functions

const METRIC_MATH_OPERATORS = ['+', '-', '*', '/', '^', '==', '!=', '<=', '>=', '<', '>', 'AND', '&&', 'OR', '||'];
const METRIC_MATH_PERIODS = [10, 60, 300, 900, 3000, 21600, 86400];
const language = {
  id: 'metricMath',
  ignoreCase: false,
  brackets: [{
    open: '[',
    close: ']',
    token: 'delimiter.square'
  }, {
    open: '(',
    close: ')',
    token: 'delimiter.parenthesis'
  }, {
    open: '{',
    close: '}',
    token: 'delimiter.curly'
  }],
  tokenizer: {
    root: [{
      include: '@nonNestableStates'
    }, {
      include: '@strings'
    }],
    nonNestableStates: [{
      include: '@variables'
    }, {
      include: '@whitespace'
    }, {
      include: '@numbers'
    }, {
      include: '@assignment'
    }, {
      include: '@keywords'
    }, {
      include: '@operators'
    }, {
      include: '@builtInFunctions'
    }, [/[;,.]/, 'delimiter'], [/[(){}\[\]]/, '@brackets'] // [], (), {} are all brackets
    ],
    keywords: [[METRIC_MATH_KEYWORDS.map(escapeRegExp).join('|'), 'keyword']],
    operators: [[METRIC_MATH_OPERATORS.map(escapeRegExp).join('|'), 'operator']],
    builtInFunctions: [[METRIC_MATH_FNS.map(escapeRegExp).join('|'), 'predefined']],
    variables: [[/\$[a-zA-Z0-9-_]+/, 'variable'] // $ followed by any letter/number we assume could be grafana template variable
    ],
    whitespace: [[/\s+/, 'white']],
    assignment: [[/=/, 'tag']],
    numbers: [[/0[xX][0-9a-fA-F]*/, 'number'], [/[$][+-]*\d*(\.\d*)?/, 'number'], [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, 'number']],
    // states that start other states (aka nested states):
    strings: [[/'/, {
      token: 'string',
      next: '@string'
    }], [/"/, {
      token: 'type',
      next: '@string_double'
    }]],
    string: [[/{/, {
      token: 'delimiter.curly',
      next: '@nestedCurly'
    }], // escape out of string and into nestedCurly
    [/\(/, {
      token: 'delimiter.parenthesis',
      next: '@nestedParens'
    }], // escape out of string and into nestedCurly
    [/"/, {
      token: 'type',
      next: '@string_double'
    }], // jump into double string
    [/'/, {
      token: 'string',
      next: '@pop'
    }], // stop being a string
    {
      include: '@nonNestableStates'
    }, [/[^']/, 'string'] // anything that is not a quote, is marked as string
    ],
    string_double: [[/[^"]/, 'type'], // mark anything not a quote as a "type" (different type of string for visual difference)
    [/"/, {
      token: 'type',
      next: '@pop'
    }] // mark also as a type and stop being in the double string state
    ],
    nestedCurly: [[/}/, {
      token: 'delimiter.curly',
      next: '@pop'
    }], // escape out of string and into braces
    [/'/, {
      token: 'string',
      next: '@string'
    }], // go to string if see start of string
    [/"/, {
      token: 'type',
      next: '@string_double'
    }] // go to string_double if see start of double string
    ],
    nestedParens: [[/\)/, {
      token: 'delimiter.parenthesis',
      next: '@pop'
    }], // escape out of string and into braces
    [/'/, {
      token: 'string',
      next: '@string'
    }], // go to string if see start of string
    [/"/, {
      token: 'type',
      next: '@string_double'
    }] // go to string_double if see start of double string
    ]
  }
};
const conf = {
  brackets: [['{', '}'], ['[', ']'], ['(', ')']],
  autoClosingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }],
  surroundingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }]
};

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/migrations/metricQueryMigrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "migrateAliasPatterns": () => (/* binding */ migrateAliasPatterns),
/* harmony export */   "migrateMetricQuery": () => (/* binding */ migrateMetricQuery)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

// Call this function to migrate queries from within the plugin.
function migrateMetricQuery(query) {
  //add metric query migrations here
  const migratedQuery = migrateAliasPatterns(query);
  return migratedQuery;
}
const aliasPatterns = {
  metric: `PROP('MetricName')`,
  namespace: `PROP('Namespace')`,
  period: `PROP('Period')`,
  region: `PROP('Region')`,
  stat: `PROP('Stat')`,
  label: `LABEL`
};
function migrateAliasPatterns(query) {
  if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.cloudWatchDynamicLabels && !query.hasOwnProperty('label')) {
    var _query$alias$replace, _query$alias;

    const regex = /{{\s*(.+?)\s*}}/g;
    query.label = (_query$alias$replace = (_query$alias = query.alias) === null || _query$alias === void 0 ? void 0 : _query$alias.replace(regex, (_, value) => {
      if (aliasPatterns.hasOwnProperty(value)) {
        return `\${${aliasPatterns[value]}}`;
      }

      return `\${PROP('Dim.${value}')}`;
    })) !== null && _query$alias$replace !== void 0 ? _query$alias$replace : '';
  }

  return query;
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/migrations/variableQueryMigrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "migrateVariableQuery": () => (/* binding */ migrateVariableQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");


const jsonVariable = /\${(\w+):json}/g;

function isVariableQuery(rawQuery) {
  return typeof rawQuery !== 'string' && typeof rawQuery.ec2Filters !== 'string' && typeof rawQuery.tags !== 'string';
}

function migrateMultiFilters(oldFilters) {
  const tempFilters = oldFilters.replace(jsonVariable, '"$$$1"');
  const parsedFilters = JSON.parse(tempFilters);
  const newFilters = {}; // if the old filter was {key:value} transform it to {key:[value]}

  Object.keys(parsedFilters).forEach(key => {
    const value = parsedFilters[key];

    if (typeof value === 'string') {
      newFilters[key] = [value];
    } else if (value !== undefined) {
      newFilters[key] = value;
    }
  });
  return newFilters;
}

function migrateVariableQuery(rawQuery) {
  if (isVariableQuery(rawQuery)) {
    return rawQuery;
  } // rawQuery is OldVariableQuery


  if (typeof rawQuery !== 'string') {
    const newQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(rawQuery, ['dimensionFilters', 'ec2Filters', 'tags']);
    newQuery.dimensionFilters = {};
    newQuery.ec2Filters = {};
    newQuery.tags = {};

    if (rawQuery.dimensionFilters !== '' && rawQuery.ec2Filters !== '[]') {
      const tempFilters = rawQuery.dimensionFilters.replace(jsonVariable, '"$$$1"');

      try {
        newQuery.dimensionFilters = JSON.parse(tempFilters);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${rawQuery.dimensionFilters}`);
      }
    }

    if (rawQuery.ec2Filters !== '' && rawQuery.ec2Filters !== '[]') {
      try {
        newQuery.ec2Filters = migrateMultiFilters(rawQuery.ec2Filters);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${rawQuery.ec2Filters}`);
      }
    }

    if (rawQuery.tags !== '' && rawQuery.tags !== '[]') {
      try {
        newQuery.tags = migrateMultiFilters(rawQuery.tags);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${rawQuery.tags}`);
      }
    }

    return newQuery;
  }

  const newQuery = {
    refId: 'CloudWatchVariableQueryEditor-VariableQuery',
    queryType: _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.Regions,
    namespace: '',
    region: '',
    metricName: '',
    dimensionKey: '',
    dimensionFilters: {},
    ec2Filters: {},
    instanceID: '',
    attributeName: '',
    resourceType: '',
    tags: {}
  };

  if (rawQuery === '') {
    return newQuery;
  }

  if (rawQuery.match(/^regions\(\)/)) {
    return newQuery;
  }

  if (rawQuery.match(/^namespaces\(\)/)) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.Namespaces;
    return newQuery;
  }

  const metricNameQuery = rawQuery.match(/^metrics\(([^\)]+?)(,\s?([^,]+?))?\)/);

  if (metricNameQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.Metrics;
    newQuery.namespace = metricNameQuery[1];
    newQuery.region = metricNameQuery[3] || '';
    return newQuery;
  }

  const dimensionKeysQuery = rawQuery.match(/^dimension_keys\(([^\)]+?)(,\s?([^,]+?))?\)/);

  if (dimensionKeysQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.DimensionKeys;
    newQuery.namespace = dimensionKeysQuery[1];
    newQuery.region = dimensionKeysQuery[3] || '';
    return newQuery;
  }

  const dimensionValuesQuery = rawQuery.match(/^dimension_values\(([^,]+?),\s?([^,]+?),\s?([^,]+?),\s?([^,]+?)(,\s?(.+))?\)/);

  if (dimensionValuesQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.DimensionValues;
    newQuery.region = dimensionValuesQuery[1];
    newQuery.namespace = dimensionValuesQuery[2];
    newQuery.metricName = dimensionValuesQuery[3];
    newQuery.dimensionKey = dimensionValuesQuery[4];
    newQuery.dimensionFilters = {};

    if (!!dimensionValuesQuery[6] && dimensionValuesQuery[6] !== '[]') {
      const tempFilters = dimensionValuesQuery[6].replace(jsonVariable, '"$$$1"');

      try {
        newQuery.dimensionFilters = JSON.parse(tempFilters);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${dimensionValuesQuery[6]}`);
      }
    }

    return newQuery;
  }

  const ebsVolumeIdsQuery = rawQuery.match(/^ebs_volume_ids\(([^,]+?),\s?([^,]+?)\)/);

  if (ebsVolumeIdsQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.EBSVolumeIDs;
    newQuery.region = ebsVolumeIdsQuery[1];
    newQuery.instanceID = ebsVolumeIdsQuery[2];
    return newQuery;
  }

  const ec2InstanceAttributeQuery = rawQuery.match(/^ec2_instance_attribute\(([^,]+?),\s?([^,]+?),\s?(.+?)\)/);

  if (ec2InstanceAttributeQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.EC2InstanceAttributes;
    newQuery.region = ec2InstanceAttributeQuery[1];
    newQuery.attributeName = ec2InstanceAttributeQuery[2];

    if (ec2InstanceAttributeQuery[3] && ec2InstanceAttributeQuery[3] !== '[]') {
      try {
        newQuery.ec2Filters = migrateMultiFilters(ec2InstanceAttributeQuery[3]);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${ec2InstanceAttributeQuery[3]}`);
      }
    }

    return newQuery;
  }

  const resourceARNsQuery = rawQuery.match(/^resource_arns\(([^,]+?),\s?([^,]+?),\s?(.+?)\)/);

  if (resourceARNsQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.ResourceArns;
    newQuery.region = resourceARNsQuery[1];
    newQuery.resourceType = resourceARNsQuery[2];

    if (resourceARNsQuery[3] && resourceARNsQuery[3] !== '[]') {
      try {
        newQuery.tags = migrateMultiFilters(resourceARNsQuery[3]);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${resourceARNsQuery[3]}`);
      }
    }

    return newQuery;
  }

  const statsQuery = rawQuery.match(/^statistics\(\)/);

  if (statsQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.Statistics;
    return newQuery;
  }

  throw new Error('unable to parse old variable query');
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/ConfigEditor.tsx");
/* harmony import */ var _components_LogsCheatSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/LogsCheatSheet.tsx");
/* harmony import */ var _components_MetaInspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/MetaInspector.tsx");
/* harmony import */ var _components_PanelQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/PanelQueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/datasource.ts");






const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_5__.CloudWatchDatasource).setQueryEditorHelp(_components_LogsCheatSheet__WEBPACK_IMPORTED_MODULE_2__["default"]).setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__.ConfigEditor).setQueryEditor(_components_PanelQueryEditor__WEBPACK_IMPORTED_MODULE_4__.PanelQueryEditor).setMetadataInspector(_components_MetaInspector__WEBPACK_IMPORTED_MODULE_3__.MetaInspector);

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/monarch/CompletionItemProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletionItemProvider": () => (/* binding */ CompletionItemProvider)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _linkedTokenBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/linkedTokenBuilder.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/types.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/*
CompletionItemProvider is an extendable class which needs to implement :
- tokenTypes
- getStatementPosition
- getSuggestionKinds
- getSuggestions
*/
class CompletionItemProvider {
  constructor(datasource, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)()) {
    _defineProperty(this, "templateVariables", void 0);

    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "tokenTypes", void 0);

    this.datasource = datasource;
    this.templateSrv = templateSrv;
    this.templateVariables = this.datasource.getVariables();
    this.templateSrv = templateSrv; // implement with more specific tokens when extending this class

    this.tokenTypes = {
      Parenthesis: 'delimiter.parenthesis',
      Whitespace: 'white',
      Keyword: 'keyword',
      Delimiter: 'delimiter',
      Operator: 'operator',
      Identifier: 'identifier',
      Type: 'type',
      Function: 'predefined',
      Number: 'number',
      String: 'string',
      Variable: 'variable'
    };
  } // implemented by subclasses, given a token, returns a lexical position in a query


  getStatementPosition(currentToken) {
    return _types__WEBPACK_IMPORTED_MODULE_2__.StatementPosition.Unknown;
  } // implemented by subclasses, given a lexical statement position, returns potential kinds of suggestions


  getSuggestionKinds(position) {
    return [];
  } // implemented by subclasses, given potential suggestions kinds, returns suggestion objects for monaco aka "CompletionItem"


  getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position) {
    return Promise.reject([]);
  } // called by registerLanguage and passed to monaco with registerCompletionItemProvider
  // returns an object that implements https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.CompletionItemProvider.html


  getCompletionProvider(monaco, languageDefinition) {
    return {
      triggerCharacters: [' ', '$', ',', '(', "'"],
      // one of these characters indicates that it is time to look for a suggestion
      provideCompletionItems: async (model, position) => {
        const currentToken = (0,_linkedTokenBuilder__WEBPACK_IMPORTED_MODULE_1__.linkedTokenBuilder)(monaco, languageDefinition, model, position, this.tokenTypes);
        const statementPosition = this.getStatementPosition(currentToken);
        const suggestionKinds = this.getSuggestionKinds(statementPosition);
        const suggestions = await this.getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position);
        return {
          suggestions
        };
      }
    };
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/monarch/LinkedToken.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedToken": () => (/* binding */ LinkedToken)
/* harmony export */ });
class LinkedToken {
  constructor(type, value, range, previous, next, tokenTypes) {
    this.type = type;
    this.value = value;
    this.range = range;
    this.previous = previous;
    this.next = next;
    this.tokenTypes = tokenTypes;
  }

  isKeyword() {
    return this.type === this.tokenTypes.Keyword;
  }

  isWhiteSpace() {
    return this.type === this.tokenTypes.Whitespace;
  }

  isParenthesis() {
    return this.type === this.tokenTypes.Parenthesis;
  }

  isIdentifier() {
    return this.type === this.tokenTypes.Identifier;
  }

  isString() {
    return this.type === this.tokenTypes.String;
  }

  isDoubleQuotedString() {
    return this.type === this.tokenTypes.Type;
  }

  isVariable() {
    return this.type === this.tokenTypes.Variable;
  }

  isFunction() {
    return this.type === this.tokenTypes.Function;
  }

  isNumber() {
    return this.type === this.tokenTypes.Number;
  }

  is(type, value) {
    const isType = this.type === type;
    return value !== undefined ? isType && this.value === value : isType;
  }

  endsWith(value) {
    return this.value === value || this.value[this.value.length - 1] === value;
  }

  getPreviousNonWhiteSpaceToken() {
    let curr = this.previous;

    while (curr != null) {
      if (!curr.isWhiteSpace()) {
        return curr;
      }

      curr = curr.previous;
    }

    return null;
  }

  getPreviousOfType(type, value) {
    let curr = this.previous;

    while (curr != null) {
      const isType = curr.type === type;

      if (value !== undefined ? isType && curr.value === value : isType) {
        return curr;
      }

      curr = curr.previous;
    }

    return null;
  }

  getPreviousUntil(type, ignoreTypes, value) {
    let tokens = [];
    let curr = this.previous;

    while (curr != null) {
      if (ignoreTypes.some(t => {
        var _curr;

        return t === ((_curr = curr) === null || _curr === void 0 ? void 0 : _curr.type);
      })) {
        curr = curr.previous;
        continue;
      }

      const isType = curr.type === type;

      if (value !== undefined ? isType && curr.value === value : isType) {
        return tokens;
      }

      if (!curr.isWhiteSpace()) {
        tokens.push(curr);
      }

      curr = curr.previous;
    }

    return tokens;
  }

  getNextUntil(type, ignoreTypes, value) {
    let tokens = [];
    let curr = this.next;

    while (curr != null) {
      if (ignoreTypes.some(t => {
        var _curr2;

        return t === ((_curr2 = curr) === null || _curr2 === void 0 ? void 0 : _curr2.type);
      })) {
        curr = curr.next;
        continue;
      }

      const isType = curr.type === type;

      if (value !== undefined ? isType && curr.value === value : isType) {
        return tokens;
      }

      if (!curr.isWhiteSpace()) {
        tokens.push(curr);
      }

      curr = curr.next;
    }

    return tokens;
  }

  getPreviousKeyword() {
    let curr = this.previous;

    while (curr != null) {
      if (curr.isKeyword()) {
        return curr;
      }

      curr = curr.previous;
    }

    return null;
  }

  getNextNonWhiteSpaceToken() {
    let curr = this.next;

    while (curr != null) {
      if (!curr.isWhiteSpace()) {
        return curr;
      }

      curr = curr.next;
    }

    return null;
  }

  getNextOfType(type, value) {
    let curr = this.next;

    while (curr != null) {
      const isType = curr.type === type;

      if (value !== undefined ? isType && curr.value === value : isType) {
        return curr;
      }

      curr = curr.next;
    }

    return null;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/monarch/commands.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TRIGGER_SUGGEST": () => (/* binding */ TRIGGER_SUGGEST)
/* harmony export */ });
const TRIGGER_SUGGEST = {
  id: 'editor.action.triggerSuggest',
  title: ''
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/monarch/linkedTokenBuilder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linkedTokenBuilder": () => (/* binding */ linkedTokenBuilder)
/* harmony export */ });
/* harmony import */ var _LinkedToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/monarch/LinkedToken.ts");

function linkedTokenBuilder(monaco, language, model, position, tokenTypes) {
  var _model$getValue;

  let current = null;
  let previous = null;
  const tokensPerLine = monaco.editor.tokenize((_model$getValue = model.getValue()) !== null && _model$getValue !== void 0 ? _model$getValue : '', language.id);

  for (let lineIndex = 0; lineIndex < tokensPerLine.length; lineIndex++) {
    const tokens = tokensPerLine[lineIndex]; // In case position is first column in new line, add empty whitespace token so that links are not broken

    if (!tokens.length && previous) {
      const token = {
        offset: 0,
        type: tokenTypes.Whitespace,
        language: language.id,
        _tokenBrand: undefined
      };
      tokens.push(token);
    }

    for (let columnIndex = 0; columnIndex < tokens.length; columnIndex++) {
      const token = tokens[columnIndex];
      let endColumn = tokens.length > columnIndex + 1 ? tokens[columnIndex + 1].offset + 1 : model.getLineLength(lineIndex + 1) + 1;
      const range = {
        startLineNumber: lineIndex + 1,
        startColumn: token.offset === 0 ? 0 : token.offset + 1,
        endLineNumber: lineIndex + 1,
        endColumn
      };
      const value = model.getValueInRange(range);
      const newToken = new _LinkedToken__WEBPACK_IMPORTED_MODULE_0__.LinkedToken(token.type, value, range, previous, null, tokenTypes);

      if (monaco.Range.containsPosition(range, position)) {
        current = newToken;
      }

      if (previous) {
        previous.next = newToken;
      }

      previous = newToken;
    }
  }

  return current;
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/monarch/register.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerLanguage": () => (/* binding */ registerLanguage)
/* harmony export */ });
const registerLanguage = (monaco, language, completionItemProvider) => {
  const {
    id,
    loader
  } = language;
  const languages = monaco.languages.getLanguages();

  if (languages.find(l => l.id === id)) {
    return;
  }

  monaco.languages.register({
    id
  });
  loader().then(monarch => {
    monaco.languages.setMonarchTokensProvider(id, monarch.language);
    monaco.languages.setLanguageConfiguration(id, monarch.conf);
    monaco.languages.registerCompletionItemProvider(id, completionItemProvider.getCompletionProvider(monaco, language));
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/monarch/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletionItemPriority": () => (/* binding */ CompletionItemPriority),
/* harmony export */   "StatementPosition": () => (/* binding */ StatementPosition),
/* harmony export */   "SuggestionKind": () => (/* binding */ SuggestionKind)
/* harmony export */ });
let StatementPosition;

(function (StatementPosition) {
  StatementPosition[StatementPosition["Unknown"] = 0] = "Unknown";
  StatementPosition[StatementPosition["SelectKeyword"] = 1] = "SelectKeyword";
  StatementPosition[StatementPosition["AfterSelectKeyword"] = 2] = "AfterSelectKeyword";
  StatementPosition[StatementPosition["AfterSelectFuncFirstArgument"] = 3] = "AfterSelectFuncFirstArgument";
  StatementPosition[StatementPosition["AfterFromKeyword"] = 4] = "AfterFromKeyword";
  StatementPosition[StatementPosition["SchemaFuncFirstArgument"] = 5] = "SchemaFuncFirstArgument";
  StatementPosition[StatementPosition["SchemaFuncExtraArgument"] = 6] = "SchemaFuncExtraArgument";
  StatementPosition[StatementPosition["FromKeyword"] = 7] = "FromKeyword";
  StatementPosition[StatementPosition["AfterFrom"] = 8] = "AfterFrom";
  StatementPosition[StatementPosition["WhereKey"] = 9] = "WhereKey";
  StatementPosition[StatementPosition["WhereComparisonOperator"] = 10] = "WhereComparisonOperator";
  StatementPosition[StatementPosition["WhereValue"] = 11] = "WhereValue";
  StatementPosition[StatementPosition["AfterWhereValue"] = 12] = "AfterWhereValue";
  StatementPosition[StatementPosition["AfterGroupByKeywords"] = 13] = "AfterGroupByKeywords";
  StatementPosition[StatementPosition["AfterGroupBy"] = 14] = "AfterGroupBy";
  StatementPosition[StatementPosition["AfterOrderByKeywords"] = 15] = "AfterOrderByKeywords";
  StatementPosition[StatementPosition["AfterOrderByFunction"] = 16] = "AfterOrderByFunction";
  StatementPosition[StatementPosition["AfterOrderByDirection"] = 17] = "AfterOrderByDirection";
  StatementPosition[StatementPosition["PredefinedFunction"] = 18] = "PredefinedFunction";
  StatementPosition[StatementPosition["SearchFuncSecondArg"] = 19] = "SearchFuncSecondArg";
  StatementPosition[StatementPosition["SearchFuncThirdArg"] = 20] = "SearchFuncThirdArg";
  StatementPosition[StatementPosition["PredefinedFuncSecondArg"] = 21] = "PredefinedFuncSecondArg";
  StatementPosition[StatementPosition["AfterFunction"] = 22] = "AfterFunction";
  StatementPosition[StatementPosition["WithinString"] = 23] = "WithinString";
})(StatementPosition || (StatementPosition = {}));

let SuggestionKind;

(function (SuggestionKind) {
  SuggestionKind[SuggestionKind["SelectKeyword"] = 0] = "SelectKeyword";
  SuggestionKind[SuggestionKind["FunctionsWithArguments"] = 1] = "FunctionsWithArguments";
  SuggestionKind[SuggestionKind["Metrics"] = 2] = "Metrics";
  SuggestionKind[SuggestionKind["FromKeyword"] = 3] = "FromKeyword";
  SuggestionKind[SuggestionKind["SchemaKeyword"] = 4] = "SchemaKeyword";
  SuggestionKind[SuggestionKind["Namespaces"] = 5] = "Namespaces";
  SuggestionKind[SuggestionKind["LabelKeys"] = 6] = "LabelKeys";
  SuggestionKind[SuggestionKind["WhereKeyword"] = 7] = "WhereKeyword";
  SuggestionKind[SuggestionKind["GroupByKeywords"] = 8] = "GroupByKeywords";
  SuggestionKind[SuggestionKind["OrderByKeywords"] = 9] = "OrderByKeywords";
  SuggestionKind[SuggestionKind["FunctionsWithoutArguments"] = 10] = "FunctionsWithoutArguments";
  SuggestionKind[SuggestionKind["LimitKeyword"] = 11] = "LimitKeyword";
  SuggestionKind[SuggestionKind["SortOrderDirectionKeyword"] = 12] = "SortOrderDirectionKeyword";
  SuggestionKind[SuggestionKind["ComparisonOperators"] = 13] = "ComparisonOperators";
  SuggestionKind[SuggestionKind["LabelValues"] = 14] = "LabelValues";
  SuggestionKind[SuggestionKind["LogicalOperators"] = 15] = "LogicalOperators";
  SuggestionKind[SuggestionKind["KeywordArguments"] = 16] = "KeywordArguments";
  SuggestionKind[SuggestionKind["Operators"] = 17] = "Operators";
  SuggestionKind[SuggestionKind["Statistic"] = 18] = "Statistic";
  SuggestionKind[SuggestionKind["Period"] = 19] = "Period";
})(SuggestionKind || (SuggestionKind = {}));

let CompletionItemPriority;

(function (CompletionItemPriority) {
  CompletionItemPriority["High"] = "a";
  CompletionItemPriority["MediumHigh"] = "d";
  CompletionItemPriority["Medium"] = "g";
  CompletionItemPriority["MediumLow"] = "k";
  CompletionItemPriority["Low"] = "q";
})(CompletionItemPriority || (CompletionItemPriority = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/syntax.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGGREGATION_FUNCTIONS_STATS": () => (/* binding */ AGGREGATION_FUNCTIONS_STATS),
/* harmony export */   "ARITHMETIC_OPERATORS": () => (/* binding */ ARITHMETIC_OPERATORS),
/* harmony export */   "BOOLEAN_FUNCTIONS": () => (/* binding */ BOOLEAN_FUNCTIONS),
/* harmony export */   "COMPARISON_OPERATORS": () => (/* binding */ COMPARISON_OPERATORS),
/* harmony export */   "DATETIME_FUNCTIONS": () => (/* binding */ DATETIME_FUNCTIONS),
/* harmony export */   "FIELD_AND_FILTER_FUNCTIONS": () => (/* binding */ FIELD_AND_FILTER_FUNCTIONS),
/* harmony export */   "FUNCTIONS": () => (/* binding */ FUNCTIONS),
/* harmony export */   "GENERAL_FUNCTIONS": () => (/* binding */ GENERAL_FUNCTIONS),
/* harmony export */   "IP_FUNCTIONS": () => (/* binding */ IP_FUNCTIONS),
/* harmony export */   "KEYWORDS": () => (/* binding */ KEYWORDS),
/* harmony export */   "NON_AGGREGATION_FUNCS_STATS": () => (/* binding */ NON_AGGREGATION_FUNCS_STATS),
/* harmony export */   "NUMERIC_OPERATORS": () => (/* binding */ NUMERIC_OPERATORS),
/* harmony export */   "QUERY_COMMANDS": () => (/* binding */ QUERY_COMMANDS),
/* harmony export */   "STATS_FUNCS": () => (/* binding */ STATS_FUNCS),
/* harmony export */   "STRING_FUNCTIONS": () => (/* binding */ STRING_FUNCTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const QUERY_COMMANDS = [{
  label: 'fields',
  documentation: 'Retrieves the specified fields from log events'
}, {
  label: 'display',
  documentation: 'Specifies which fields to display in the query results'
}, {
  label: 'filter',
  documentation: 'Filters the results of a query based on one or more conditions'
}, {
  label: 'stats',
  documentation: 'Calculates aggregate statistics based on the values of log fields'
}, {
  label: 'sort',
  documentation: 'Sorts the retrieved log events'
}, {
  label: 'limit',
  documentation: 'Specifies the number of log events returned by the query'
}, {
  label: 'parse',
  documentation: 'Extracts data from a log field, creating one or more ephemeral fields that you can process further in the query'
}];
const COMPARISON_OPERATORS = ['=', '!=', '<', '<=', '>', '>='];
const ARITHMETIC_OPERATORS = ['+', '-', '*', '/', '^', '%'];
const NUMERIC_OPERATORS = [{
  label: 'abs',
  detail: 'abs(a)',
  documentation: 'Absolute value.'
}, {
  label: 'ceil',
  detail: 'ceil(a)',
  documentation: 'Round to ceiling (the smallest integer that is greater than the value of a).'
}, {
  label: 'floor',
  detail: 'floor(a)',
  documentation: 'Round to floor (the largest integer that is smaller than the value of a).'
}, {
  label: 'greatest',
  detail: 'greatest(a,b, ... z)',
  documentation: 'Returns the largest value.'
}, {
  label: 'least',
  detail: 'least(a, b, ... z)',
  documentation: 'Returns the smallest value.'
}, {
  label: 'log',
  detail: 'log(a)',
  documentation: 'Natural logarithm.'
}, {
  label: 'sqrt',
  detail: 'sqrt(a)',
  documentation: 'Square root.'
}];
const GENERAL_FUNCTIONS = [{
  label: 'ispresent',
  detail: 'ispresent(fieldname)',
  documentation: 'Returns true if the field exists.'
}, {
  label: 'coalesce',
  detail: 'coalesce(fieldname1, fieldname2, ... fieldnamex)',
  documentation: 'Returns the first non-null value from the list.'
}];
const STRING_FUNCTIONS = [{
  label: 'isempty',
  detail: 'isempty(fieldname)',
  documentation: 'Returns true if the field is missing or is an empty string.'
}, {
  label: 'isblank',
  detail: 'isblank(fieldname)',
  documentation: 'Returns true if the field is missing, an empty string, or contains only white space.'
}, {
  label: 'concat',
  detail: 'concat(string1, string2, ... stringz)',
  documentation: 'Concatenates the strings.'
}, {
  label: 'ltrim',
  detail: 'ltrim(string) or ltrim(string1, string2)',
  documentation: 'Remove white space from the left of the string. If the function has a second string argument, it removes the characters of string2 from the left of string1.'
}, {
  label: 'rtrim',
  detail: 'rtrim(string) or rtrim(string1, string2)',
  documentation: 'Remove white space from the right of the string. If the function has a second string argument, it removes the characters of string2 from the right of string1.'
}, {
  label: 'trim',
  detail: 'trim(string) or trim(string1, string2)',
  documentation: 'Remove white space from both ends of the string. If the function has a second string argument, it removes the characters of string2 from both sides of string1.'
}, {
  label: 'strlen',
  detail: 'strlen(string)',
  documentation: 'Returns the length of the string in Unicode code points.'
}, {
  label: 'toupper',
  detail: 'toupper(string)',
  documentation: 'Converts the string to uppercase.'
}, {
  label: 'tolower',
  detail: 'tolower(string)',
  documentation: 'Converts the string to lowercase.'
}, {
  label: 'substr',
  detail: 'substr(string1, x), or substr(string1, x, y)',
  documentation: 'Returns a substring from the index specified by the number argument to the end of the string. If the function has a second number argument, it contains the length of the substring to be retrieved.'
}, {
  label: 'replace',
  detail: 'replace(string1, string2, string3)',
  documentation: 'Replaces all instances of string2 in string1 with string3.'
}, {
  label: 'strcontains',
  detail: 'strcontains(string1, string2)',
  documentation: 'Returns 1 if string1 contains string2 and 0 otherwise.'
}];
const DATETIME_FUNCTIONS = [{
  label: 'bin',
  detail: 'bin(period)',
  documentation: 'Rounds the value of @timestamp to the given period and then truncates.'
}, {
  label: 'datefloor',
  detail: 'datefloor(a, period)',
  documentation: 'Truncates the timestamp to the given period.'
}, {
  label: 'dateceil',
  detail: 'dateceil(a, period)',
  documentation: 'Rounds up the timestamp to the given period and then truncates.'
}, {
  label: 'fromMillis',
  detail: 'fromMillis(fieldname)',
  documentation: 'Interprets the input field as the number of milliseconds since the Unix epoch and converts it to a timestamp.'
}, {
  label: 'toMillis',
  detail: 'toMillis(fieldname)',
  documentation: 'Converts the timestamp found in the named field into a number representing the milliseconds since the Unix epoch.'
}];
const IP_FUNCTIONS = [{
  label: 'isValidIp',
  detail: 'isValidIp(fieldname)',
  documentation: 'Returns true if the field is a valid v4 or v6 IP address.'
}, {
  label: 'isValidIpV4',
  detail: 'isValidIpV4(fieldname)',
  documentation: 'Returns true if the field is a valid v4 IP address.'
}, {
  label: 'isValidIpV6',
  detail: 'isValidIpV6(fieldname)',
  documentation: 'Returns true if the field is a valid v6 IP address.'
}, {
  label: 'isIpInSubnet',
  detail: 'isIpInSubnet(fieldname, string)',
  documentation: 'Returns true if the field is a valid v4 or v6 IP address within the specified v4 or v6 subnet.'
}, {
  label: 'isIpv4InSubnet',
  detail: 'isIpv4InSubnet(fieldname, string)',
  documentation: 'Returns true if the field is a valid v4 IP address within the specified v4 subnet.'
}, {
  label: 'isIpv6InSubnet',
  detail: 'isIpv6InSubnet(fieldname, string)',
  documentation: 'Returns true if the field is a valid v6 IP address within the specified v6 subnet.'
}];
const BOOLEAN_FUNCTIONS = [{
  label: 'ispresent',
  detail: 'ispresent(fieldname)',
  documentation: 'Returns true if the field exists.'
}, {
  label: 'isempty',
  detail: 'isempty(fieldname)',
  documentation: 'Returns true if the field is missing or is an empty string.'
}, {
  label: 'isblank',
  detail: 'isblank(fieldname)',
  documentation: 'Returns true if the field is missing, an empty string, or contains only white space.'
}, {
  label: 'strcontains',
  detail: 'strcontains(string1, string2)',
  documentation: 'Returns 1 if string1 contains string2 and 0 otherwise.'
}, ...IP_FUNCTIONS];
const AGGREGATION_FUNCTIONS_STATS = [{
  label: 'avg',
  detail: 'avg(NumericFieldname)',
  documentation: 'The average of the values in the specified field.'
}, {
  label: 'count',
  detail: 'count(fieldname) or count(*)',
  documentation: 'Counts the log records.'
}, {
  label: 'count_distinct',
  detail: 'count_distinct(fieldname)',
  documentation: 'Returns the number of unique values for the field.'
}, {
  label: 'max',
  detail: 'max(fieldname)',
  documentation: 'The maximum of the values for this log field in the queried logs.'
}, {
  label: 'min',
  detail: 'min(fieldname)',
  documentation: 'The minimum of the values for this log field in the queried logs.'
}, {
  label: 'pct',
  detail: 'pct(fieldname, value)',
  documentation: 'A percentile indicates the relative standing of a value in a datas.'
}, {
  label: 'stddev',
  detail: 'stddev(NumericFieldname)',
  documentation: 'The standard deviation of the values in the specified field.'
}, {
  label: 'sum',
  detail: 'sum(NumericFieldname)',
  documentation: 'The sum of the values in the specified field.'
}];
const NON_AGGREGATION_FUNCS_STATS = [{
  label: 'earliest',
  detail: 'earliest(fieldname)',
  documentation: 'Returns the value of fieldName from the log event that has the earliest time stamp in the queried logs.'
}, {
  label: 'latest',
  detail: 'latest(fieldname)',
  documentation: 'Returns the value of fieldName from the log event that has the latest time stamp in the queried logs.'
}, {
  label: 'sortsFirst',
  detail: 'sortsFirst(fieldname)',
  documentation: 'Returns the value of fieldName that sorts first in the queried logs.'
}, {
  label: 'sortsLast',
  detail: 'sortsLast(fieldname)',
  documentation: 'Returns the value of fieldName that sorts last in the queried logs.'
}];
const STATS_FUNCS = [...AGGREGATION_FUNCTIONS_STATS, ...NON_AGGREGATION_FUNCS_STATS];
const KEYWORDS = ['as', 'like', 'by', 'in', 'desc', 'asc'];
const FIELD_AND_FILTER_FUNCTIONS = [...NUMERIC_OPERATORS, ...GENERAL_FUNCTIONS, ...STRING_FUNCTIONS, ...DATETIME_FUNCTIONS, ...IP_FUNCTIONS];
const FUNCTIONS = [...FIELD_AND_FILTER_FUNCTIONS, ...STATS_FUNCS];
const tokenizer = {
  comment: {
    pattern: /^#.*/,
    greedy: true
  },
  backticks: {
    pattern: /`.*?`/,
    alias: 'string',
    greedy: true
  },
  quote: {
    pattern: /".*?"/,
    alias: 'string',
    greedy: true
  },
  regex: {
    pattern: /\/.*?\/(?=\||\s*$|,)/,
    greedy: true
  },
  'query-command': {
    pattern: new RegExp(`\\b(?:${QUERY_COMMANDS.map(command => command.label).join('|')})\\b`, 'i'),
    alias: 'function'
  },
  function: {
    pattern: new RegExp(`\\b(?:${FUNCTIONS.map(f => f.label).join('|')})\\b`, 'i')
  },
  keyword: {
    pattern: new RegExp(`(\\s+)(${KEYWORDS.join('|')})(?=\\s+)`, 'i'),
    lookbehind: true
  },
  // 'log-group-name': {
  //   pattern: /[\.\-_/#A-Za-z0-9]+/,
  // },
  'field-name': {
    pattern: /(@?[_a-zA-Z]+[_.0-9a-zA-Z]*)|(`((\\`)|([^`]))*?`)/,
    greedy: true
  },
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  'command-separator': {
    pattern: /\|/,
    alias: 'punctuation'
  },
  'comparison-operator': {
    pattern: /([<>]=?)|(!?=)/
  },
  punctuation: /[{}()`,.]/,
  whitespace: /\s+/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tokenizer);

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/utils/datalinks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDataLinksToLogsResponse": () => (/* binding */ addDataLinksToLogsResponse)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _aws_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/aws_url.ts");


async function addDataLinksToLogsResponse(response, request, range, replaceFn, getVariableValueFn, getRegion, tracingDatasourceUid) {
  const replace = (target, fieldName) => replaceFn(target, request.scopedVars, true, fieldName);

  const getVariableValue = target => getVariableValueFn(target, request.scopedVars);

  for (const dataFrame of response.data) {
    var _curTarget$region;

    const curTarget = request.targets.find(target => target.refId === dataFrame.refId);
    const interpolatedRegion = getRegion(replace((_curTarget$region = curTarget.region) !== null && _curTarget$region !== void 0 ? _curTarget$region : '', 'region'));

    for (const field of dataFrame.fields) {
      if (field.name === '@xrayTraceId' && tracingDatasourceUid) {
        var _curTarget$region2;

        getRegion(replace((_curTarget$region2 = curTarget.region) !== null && _curTarget$region2 !== void 0 ? _curTarget$region2 : '', 'region'));
        const xrayLink = await createInternalXrayLink(tracingDatasourceUid, interpolatedRegion);

        if (xrayLink) {
          field.config.links = [xrayLink];
        }
      } else {
        // Right now we add generic link to open the query in xray console to every field so it shows in the logs row
        // details. Unfortunately this also creates link for all values inside table which look weird.
        field.config.links = [createAwsConsoleLink(curTarget, range, interpolatedRegion, replace, getVariableValue)];
      }
    }
  }
}

async function createInternalXrayLink(datasourceUid, region) {
  let ds;

  try {
    ds = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getDataSourceSrv)().get(datasourceUid);
  } catch (e) {
    console.error('Could not load linked xray data source, it was probably deleted after it was linked', e);
    return undefined;
  }

  return {
    title: ds.name,
    url: '',
    internal: {
      query: {
        query: '${__value.raw}',
        queryType: 'getTrace',
        region: region
      },
      datasourceUid: datasourceUid,
      datasourceName: ds.name
    }
  };
}

function createAwsConsoleLink(target, range, region, replace, getVariableValue) {
  var _target$logGroupNames, _target$logGroupNames2;

  const interpolatedExpression = target.expression ? replace(target.expression) : '';
  const interpolatedGroups = (_target$logGroupNames = (_target$logGroupNames2 = target.logGroupNames) === null || _target$logGroupNames2 === void 0 ? void 0 : _target$logGroupNames2.flatMap(getVariableValue)) !== null && _target$logGroupNames !== void 0 ? _target$logGroupNames : [];
  const urlProps = {
    end: range.to.toISOString(),
    start: range.from.toISOString(),
    timeType: 'ABSOLUTE',
    tz: 'UTC',
    editorString: interpolatedExpression,
    isLiveTail: false,
    source: interpolatedGroups
  };
  const encodedUrl = (0,_aws_url__WEBPACK_IMPORTED_MODULE_1__.encodeUrl)(urlProps, region);
  return {
    url: encodedUrl,
    title: 'View in CloudWatch console',
    targetBlank: true
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/utils/logsRetry.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runWithRetry": () => (/* binding */ runWithRetry)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");



/**
 * A retry strategy specifically for cloud watch logs query. Cloud watch logs queries need first starting the query
 * and the polling for the results. The start query can fail because of the concurrent queries rate limit,
 * and so we have to retry the start query call if there is already lot of queries running.
 *
 * As we send multiple queries in a single request some can fail and some can succeed and we have to also handle those
 * cases by only retrying the failed queries. We retry the failed queries until we hit the time limit or all queries
 * succeed and only then we pass the data forward. This means we wait longer but makes the code a bit simpler as we
 * can treat starting the query and polling as steps in a pipeline.
 * @param queryFun
 * @param targets
 * @param options
 */
function runWithRetry(queryFun, targets, timeoutFunc) {
  const startTime = new Date();
  let retries = 0;
  let timerID;
  let subscription;
  let collected = {};

  const retryWaitFunction = retry => {
    return Math.pow(2, retry) * 1000 + Math.random() * 100;
  };

  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
    // Run function is where the logic takes place. We have it in a function so we can call it recursively.
    function run(currentQueryParams) {
      subscription = queryFun(currentQueryParams).subscribe({
        next(frames) {
          // In case we successfully finished, merge the current response with whatever we already collected.
          const collectedPreviously = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.toDataQueryResponse)({
            data: {
              results: collected
            }
          }).data || [];
          observer.next({
            frames: [...collectedPreviously, ...frames]
          });
          observer.complete();
        },

        error(error) {
          // In case of error we first try to figure out what kind of error it is
          // This means it was a generic 500 error probably so we just pass it on
          if (typeof error === 'string') {
            observer.error(error);
            return;
          } // In case of multiple queries this some can error while some may be ok


          const errorData = splitErrorData(error);

          if (!errorData) {
            // Not sure what happened but the error structure wasn't what we expected
            observer.error(error);
            return;
          }

          if (!errorData.errors.length) {
            // So there is no limit error but some other errors so nothing to retry so we just pass it as it would be
            // otherwise.
            observer.error(error);
            return;
          }

          if (timeoutFunc(retries, startTime.valueOf())) {
            // We timed out but we could have started some queries
            if (Object.keys(collected).length || Object.keys(errorData.good).length) {
              var _errorData$good, _collected, _dataResponse$error;

              const dataResponse = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.toDataQueryResponse)({
                data: {
                  results: Object.assign({}, (_errorData$good = errorData.good) !== null && _errorData$good !== void 0 ? _errorData$good : {}, (_collected = collected) !== null && _collected !== void 0 ? _collected : {})
                }
              });
              dataResponse.error = Object.assign({}, (_dataResponse$error = dataResponse.error) !== null && _dataResponse$error !== void 0 ? _dataResponse$error : {}, {
                message: `Some queries timed out: ${errorData.errorMessage}`
              }); // So we consider this a partial success and pass the data forward but also with error to be shown to
              // the user.

              observer.next({
                error: dataResponse.error,
                frames: dataResponse.data
              });
              observer.complete();
            } else {
              var _error$data$results, _error$data;

              // So we timed out and there was no data to pass forward so we just pass the error
              const dataResponse = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.toDataQueryResponse)({
                data: {
                  results: (_error$data$results = (_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.results) !== null && _error$data$results !== void 0 ? _error$data$results : {}
                }
              });
              observer.error(dataResponse.error);
            }

            return;
          }

          collected = Object.assign({}, collected, errorData.good);
          timerID = setTimeout(() => {
            retries++;
            run(errorData.errors);
          }, // We want to know how long to wait for the next retry. First time this will be 0.
          retryWaitFunction(retries + 1));
        }

      });
    }

    run(targets);
    return () => {
      // We clear only the latest timer and subscription but the observable should complete after one response so
      // there should not be more things running at the same time.
      clearTimeout(timerID);
      subscription.unsubscribe();
    };
  });
}

function splitErrorData(error) {
  var _error$data2;

  const results = (_error$data2 = error.data) === null || _error$data2 === void 0 ? void 0 : _error$data2.results;

  if (!results) {
    return undefined;
  }

  return Object.keys(results).reduce((acc, refId) => {
    var _results$refId$error;

    if ((_results$refId$error = results[refId].error) !== null && _results$refId$error !== void 0 && _results$refId$error.startsWith('LimitExceededException')) {
      acc.errorMessage = results[refId].error;
      acc.errors.push(error.config.data.queries.find(q => q.refId === refId));
    } else {
      acc.good[refId] = results[refId];
    }

    return acc;
  }, {
    errors: [],
    good: {},
    errorMessage: ''
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/utils/query/getStatsGroups.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStatsGroups": () => (/* binding */ getStatsGroups)
/* harmony export */ });
const byRE = /\s+by\s+/im;
/**
 * groups look like this: (@a.foo)( as )(bar),
 * group 1 is the field, group 2 is " as " and group 3 is the alias
 * this regex will not advance past any non-identifier or whitespace characters, e.g. |
 */

const groupsRE = /([\w$@().]+)(?:(\s+as\s+)([\w$]+))?\s*,?\s*/iy;
function getStatsGroups(query) {
  let groups = []; // find " by "

  let b;

  if (b = query.match(byRE)) {
    // continue incremental scanning from there for groups & aliases
    groupsRE.lastIndex = b.index + b[0].length;
    let g;

    while (g = groupsRE.exec(query)) {
      groups.push(g[2] ? g[3] : g[1]);
      groupsRE.lastIndex = g.index + g[0].length;
    }
  }

  return groups;
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/utils/rxjs/increasingInterval.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increasingInterval": () => (/* binding */ increasingInterval)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/scheduler/async.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js");

/**
 * Creates an Observable that emits sequential numbers after increasing intervals of time
 * starting with `startPeriod`, ending with `endPeriod` and incrementing by `step`.
 */

const increasingInterval = ({
  startPeriod = 0,
  endPeriod = 5000,
  step = 1000
}, scheduler = rxjs__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) => {
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
    const state = {
      subscriber,
      counter: 0,
      period: startPeriod,
      step,
      endPeriod
    };
    subscriber.add(scheduler.schedule(dispatch, startPeriod, state));
    return subscriber;
  });
};

function dispatch(state) {
  if (!state) {
    return;
  }

  const {
    subscriber,
    counter,
    period,
    step,
    endPeriod
  } = state;
  subscriber.next(counter);
  const newPeriod = Math.min(period + step, endPeriod);
  this.schedule({
    subscriber,
    counter: counter + 1,
    period: newPeriod,
    step,
    endPeriod
  }, newPeriod);
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/utils/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendTemplateVariables": () => (/* binding */ appendTemplateVariables),
/* harmony export */   "toOption": () => (/* binding */ toOption)
/* harmony export */ });
const toOption = value => ({
  label: value,
  value
});
const appendTemplateVariables = (datasource, values) => [...values, {
  label: 'Template Variables',
  options: datasource.getVariables().map(toOption)
}];

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/variables.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudWatchVariableSupport": () => (/* binding */ CloudWatchVariableSupport)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_VariableQueryEditor_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableQueryEditor.tsx");
/* harmony import */ var _migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/migrations/variableQueryMigrations.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class CloudWatchVariableSupport extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.CustomVariableSupport {
  constructor(datasource) {
    super();

    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "editor", _components_VariableQueryEditor_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_1__.VariableQueryEditor);

    this.datasource = datasource;
    this.query = this.query.bind(this);
  }

  query(request) {
    const queryObj = (0,_migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_2__.migrateVariableQuery)(request.targets[0]);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.execute(queryObj)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => ({
      data
    })));
  }

  async execute(query) {
    try {
      switch (query.queryType) {
        case _types__WEBPACK_IMPORTED_MODULE_3__.VariableQueryType.Regions:
          return this.handleRegionsQuery();

        case _types__WEBPACK_IMPORTED_MODULE_3__.VariableQueryType.Namespaces:
          return this.handleNamespacesQuery();

        case _types__WEBPACK_IMPORTED_MODULE_3__.VariableQueryType.Metrics:
          return this.handleMetricsQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.VariableQueryType.DimensionKeys:
          return this.handleDimensionKeysQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.VariableQueryType.DimensionValues:
          return this.handleDimensionValuesQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.VariableQueryType.EBSVolumeIDs:
          return this.handleEbsVolumeIdsQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.VariableQueryType.EC2InstanceAttributes:
          return this.handleEc2InstanceAttributeQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.VariableQueryType.ResourceArns:
          return this.handleResourceARNsQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.VariableQueryType.Statistics:
          return this.handleStatisticsQuery();

        case _types__WEBPACK_IMPORTED_MODULE_3__.VariableQueryType.LogGroups:
          return this.handleLogGroupsQuery(query);
      }
    } catch (error) {
      console.error(`Could not run CloudWatchMetricFindQuery ${query}`, error);
      return [];
    }
  }

  async handleLogGroupsQuery({
    region,
    logGroupPrefix
  }) {
    const logGroups = await this.datasource.describeLogGroups({
      region,
      logGroupNamePrefix: logGroupPrefix
    });
    return logGroups.map(s => ({
      text: s,
      value: s,
      expandable: true
    }));
  }

  async handleRegionsQuery() {
    const regions = await this.datasource.getRegions();
    return regions.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleNamespacesQuery() {
    const namespaces = await this.datasource.getNamespaces();
    return namespaces.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleMetricsQuery({
    namespace,
    region
  }) {
    const metrics = await this.datasource.getMetrics(namespace, region);
    return metrics.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleDimensionKeysQuery({
    namespace,
    region
  }) {
    const keys = await this.datasource.getDimensionKeys(namespace, region);
    return keys.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleDimensionValuesQuery({
    namespace,
    region,
    dimensionKey,
    metricName,
    dimensionFilters
  }) {
    if (!dimensionKey || !metricName) {
      return [];
    }

    const keys = await this.datasource.getDimensionValues(region, namespace, metricName, dimensionKey, dimensionFilters !== null && dimensionFilters !== void 0 ? dimensionFilters : {});
    return keys.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleEbsVolumeIdsQuery({
    region,
    instanceID
  }) {
    if (!instanceID) {
      return [];
    }

    const ids = await this.datasource.getEbsVolumeIds(region, instanceID);
    return ids.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleEc2InstanceAttributeQuery({
    region,
    attributeName,
    ec2Filters
  }) {
    if (!attributeName) {
      return [];
    }

    const values = await this.datasource.getEc2InstanceAttribute(region, attributeName, ec2Filters !== null && ec2Filters !== void 0 ? ec2Filters : {});
    return values.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleResourceARNsQuery({
    region,
    resourceType,
    tags
  }) {
    if (!resourceType) {
      return [];
    }

    const keys = await this.datasource.getResourceARNs(region, resourceType, tags !== null && tags !== void 0 ? tags : {});
    return keys.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleStatisticsQuery() {
    return this.datasource.standardStatistics.map(s => ({
      text: s,
      value: s,
      expandable: true
    }));
  }

}

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/misc/isDeepEqual.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/fast-deep-equal-npm-3.1.3-790edcfcf5-e21a9d8d84.zip/node_modules/fast-deep-equal/react.js");
/* harmony import */ var fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useCustomCompareEffect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
        if (typeof depsEqual !== 'function') {
            console.warn('`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list');
        }
    }
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, ref.current);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCustomCompareEffect);


/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useDeepCompareEffect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useCustomCompareEffect.js");
/* harmony import */ var _misc_isDeepEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/misc/isDeepEqual.js");


var isPrimitive = function (val) { return val !== Object(val); };
var useDeepCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    (0,_useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_0__["default"])(effect, deps, _misc_isDeepEqual__WEBPACK_IMPORTED_MODULE_1__["default"]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDeepCompareEffect);


/***/ }),

/***/ "./.yarn/cache/@grafana-aws-sdk-npm-0.0.36-8ab4b07904-c243f7c900.zip/node_modules/@grafana/aws-sdk/dist/index.development.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var React__default = _interopDefault(React);
var ui = __webpack_require__("./packages/grafana-ui/src/index.ts");
var data = __webpack_require__("./packages/grafana-data/src/index.ts");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

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

var standardRegions = [
    'af-south-1',
    'ap-east-1',
    'ap-northeast-1',
    'ap-northeast-2',
    'ap-northeast-3',
    'ap-south-1',
    'ap-southeast-1',
    'ap-southeast-2',
    'ca-central-1',
    'cn-north-1',
    'cn-northwest-1',
    'eu-central-1',
    'eu-north-1',
    'eu-west-1',
    'eu-west-2',
    'eu-west-3',
    'me-south-1',
    'sa-east-1',
    'us-east-1',
    'us-east-2',
    'us-gov-east-1',
    'us-gov-west-1',
    'us-iso-east-1',
    'us-isob-east-1',
    'us-west-1',
    'us-west-2',
];

(function (AwsAuthType) {
    AwsAuthType["Keys"] = "keys";
    AwsAuthType["Credentials"] = "credentials";
    AwsAuthType["Default"] = "default";
    AwsAuthType["EC2IAMRole"] = "ec2_iam_role";
    /**
     * @deprecated use default
     */
    AwsAuthType["ARN"] = "arn";
})(exports.AwsAuthType || (exports.AwsAuthType = {}));

var awsAuthProviderOptions = [
    {
        label: 'Workspace IAM Role',
        value: exports.AwsAuthType.EC2IAMRole,
    },
    {
        label: 'AWS SDK Default',
        value: exports.AwsAuthType.Default,
    },
    {
        label: 'Access & secret key',
        value: exports.AwsAuthType.Keys,
    },
    {
        label: 'Credentials file',
        value: exports.AwsAuthType.Credentials,
    },
];

var toOption = function (value) { return ({ value: value, label: value }); };
var ConnectionConfig = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var _k = __read(React.useState((props.standardRegions || standardRegions).map(toOption)), 2), regions = _k[0], setRegions = _k[1];
    var loadRegions = props.loadRegions, onOptionsChange = props.onOptionsChange, _l = props.skipHeader, skipHeader = _l === void 0 ? false : _l, _m = props.skipEndpoint, skipEndpoint = _m === void 0 ? false : _m;
    var options = props.options;
    var profile = options.jsonData.profile;
    if (profile === undefined) {
        profile = options.database;
    }
    var settings = window.grafanaBootData.settings;
    var awsAllowedAuthProviders = (_a = settings.awsAllowedAuthProviders) !== null && _a !== void 0 ? _a : [
        exports.AwsAuthType.Default,
        exports.AwsAuthType.Keys,
        exports.AwsAuthType.Credentials,
    ];
    var awsAssumeRoleEnabled = (_b = settings.awsAssumeRoleEnabled) !== null && _b !== void 0 ? _b : true;
    var currentProvider = awsAuthProviderOptions.find(function (p) { return p.value === options.jsonData.authType; });
    React.useEffect(function () {
        // Make sure a authType exists in the current model
        if (!currentProvider && awsAllowedAuthProviders.length) {
            onOptionsChange(__assign(__assign({}, options), { jsonData: __assign(__assign({}, options.jsonData), { authType: awsAllowedAuthProviders[0] }) }));
        }
    }, [currentProvider, options, onOptionsChange]);
    React.useEffect(function () {
        if (!loadRegions) {
            return;
        }
        loadRegions().then(function (regions) { return setRegions(regions.map(toOption)); });
    }, [loadRegions]);
    return (React__default.createElement(ui.FieldSet, { label: skipHeader ? '' : 'Connection Details', "data-testid": "connection-config" },
        React__default.createElement(ui.InlineField, { label: "Authentication Provider", labelWidth: 28, tooltip: "Specify which AWS credentials chain to use." },
            React__default.createElement(ui.Select, { "aria-label": "Authentication Provider", className: "width-30", value: currentProvider, options: awsAuthProviderOptions.filter(function (opt) { return awsAllowedAuthProviders.includes(opt.value); }), defaultValue: options.jsonData.authType, onChange: function (option) {
                    data.onUpdateDatasourceJsonDataOptionSelect(props, 'authType')(option);
                }, menuShouldPortal: true })),
        options.jsonData.authType === 'credentials' && (React__default.createElement(ui.InlineField, { label: "Credentials Profile Name", labelWidth: 28, tooltip: "Credentials profile name, as specified in ~/.aws/credentials, leave blank for default." },
            React__default.createElement(ui.Input, { "aria-label": "Credentials Profile Name", className: "width-30", placeholder: "default", value: profile, onChange: data.onUpdateDatasourceJsonDataOption(props, 'profile') }))),
        options.jsonData.authType === 'keys' && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(ui.InlineField, { label: "Access Key ID", labelWidth: 28 }, ((_c = props.options.secureJsonFields) === null || _c === void 0 ? void 0 : _c.accessKey) ? (React__default.createElement(ui.ButtonGroup, { className: "width-30" },
                React__default.createElement(ui.Input, { disabled: true, placeholder: "Configured" }),
                React__default.createElement(ui.ToolbarButton, { icon: "edit", tooltip: "Edit Access Key ID", type: "button", onClick: data.onUpdateDatasourceResetOption(props, 'accessKey') }))) : (React__default.createElement(ui.Input, { "aria-label": "Access Key ID", className: "width-30", value: (_e = (_d = options.secureJsonData) === null || _d === void 0 ? void 0 : _d.accessKey) !== null && _e !== void 0 ? _e : '', onChange: data.onUpdateDatasourceSecureJsonDataOption(props, 'accessKey') }))),
            React__default.createElement(ui.InlineField, { label: "Secret Access Key", labelWidth: 28 }, ((_f = props.options.secureJsonFields) === null || _f === void 0 ? void 0 : _f.secretKey) ? (React__default.createElement(ui.ButtonGroup, { className: "width-30" },
                React__default.createElement(ui.Input, { disabled: true, placeholder: "Configured" }),
                React__default.createElement(ui.ToolbarButton, { icon: "edit", type: "button", tooltip: "Edit Secret Access Key", onClick: data.onUpdateDatasourceResetOption(props, 'secretKey') }))) : (React__default.createElement(ui.Input, { "aria-label": "Secret Access Key", className: "width-30", value: (_h = (_g = options.secureJsonData) === null || _g === void 0 ? void 0 : _g.secretKey) !== null && _h !== void 0 ? _h : '', onChange: data.onUpdateDatasourceSecureJsonDataOption(props, 'secretKey') }))))),
        awsAssumeRoleEnabled && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(ui.InlineField, { label: "Assume Role ARN", labelWidth: 28, tooltip: "Optionally, specify the ARN of a role to assume. Specifying a role here will ensure that the selected authentication provider is used to assume the specified role rather than using the credentials directly. Leave blank if you don't need to assume a role at all" },
                React__default.createElement(ui.Input, { "aria-label": "Assume Role ARN", className: "width-30", placeholder: "arn:aws:iam:*", value: options.jsonData.assumeRoleArn || '', onChange: data.onUpdateDatasourceJsonDataOption(props, 'assumeRoleArn') })),
            React__default.createElement(ui.InlineField, { label: "External ID", labelWidth: 28, tooltip: "If you are assuming a role in another account, that has been created with an external ID, specify the external ID here." },
                React__default.createElement(ui.Input, { "aria-label": "External ID", className: "width-30", placeholder: "External ID", value: options.jsonData.externalId || '', onChange: data.onUpdateDatasourceJsonDataOption(props, 'externalId') })))),
        !skipEndpoint && (React__default.createElement(ui.InlineField, { label: "Endpoint", labelWidth: 28, tooltip: "Optionally, specify a custom endpoint for the service" },
            React__default.createElement(ui.Input, { "aria-label": "Endpoint", className: "width-30", placeholder: (_j = props.defaultEndpoint) !== null && _j !== void 0 ? _j : 'https://{service}.{region}.amazonaws.com', value: options.jsonData.endpoint || '', onChange: data.onUpdateDatasourceJsonDataOption(props, 'endpoint') }))),
        React__default.createElement(ui.InlineField, { label: "Default Region", labelWidth: 28, tooltip: "Specify the region, such as for US West (Oregon) use ` us-west-2 ` as the region." },
            React__default.createElement(ui.Select, { "aria-label": "Default Region", className: "width-30", value: regions.find(function (region) { return region.value === options.jsonData.defaultRegion; }), options: regions, defaultValue: options.jsonData.defaultRegion, allowCustomValue: true, onChange: data.onUpdateDatasourceJsonDataOptionSelect(props, 'defaultRegion'), formatCreateLabel: function (r) { return "Use region: " + r; }, menuShouldPortal: true })),
        props.children));
};

var SIGV4ConnectionConfig = function (props) {
    var _a, _b, _c, _d;
    var onOptionsChange = props.onOptionsChange, options = props.options;
    // Map HttpSettings props to ConnectionConfigProps
    var connectionConfigProps = {
        onOptionsChange: function (awsDataSourceSettings) {
            var _a, _b, _c, _d;
            var dataSourceSettings = __assign(__assign({}, options), { jsonData: __assign(__assign({}, options.jsonData), { sigV4AuthType: awsDataSourceSettings.jsonData.authType, sigV4Profile: awsDataSourceSettings.jsonData.profile, sigV4AssumeRoleArn: awsDataSourceSettings.jsonData.assumeRoleArn, sigV4ExternalId: awsDataSourceSettings.jsonData.externalId, sigV4Region: awsDataSourceSettings.jsonData.defaultRegion, sigV4Endpoint: awsDataSourceSettings.jsonData.endpoint }), secureJsonFields: {
                    sigV4AccessKey: (_a = awsDataSourceSettings.secureJsonFields) === null || _a === void 0 ? void 0 : _a.accessKey,
                    sigV4SecretKey: (_b = awsDataSourceSettings.secureJsonFields) === null || _b === void 0 ? void 0 : _b.secretKey,
                }, secureJsonData: {
                    sigV4AccessKey: (_c = awsDataSourceSettings.secureJsonData) === null || _c === void 0 ? void 0 : _c.accessKey,
                    sigV4SecretKey: (_d = awsDataSourceSettings.secureJsonData) === null || _d === void 0 ? void 0 : _d.secretKey,
                } });
            onOptionsChange(dataSourceSettings);
        },
        options: __assign(__assign({}, options), { jsonData: __assign(__assign({}, options.jsonData), { authType: options.jsonData.sigV4AuthType, profile: options.jsonData.sigV4Profile, assumeRoleArn: options.jsonData.sigV4AssumeRoleArn, externalId: options.jsonData.sigV4ExternalId, defaultRegion: options.jsonData.sigV4Region, endpoint: options.jsonData.sigV4Endpoint }), secureJsonFields: {
                accessKey: (_a = options.secureJsonFields) === null || _a === void 0 ? void 0 : _a.sigV4AccessKey,
                secretKey: (_b = options.secureJsonFields) === null || _b === void 0 ? void 0 : _b.sigV4SecretKey,
            }, secureJsonData: {
                accessKey: (_c = options.secureJsonData) === null || _c === void 0 ? void 0 : _c.sigV4AccessKey,
                secretKey: (_d = options.secureJsonData) === null || _d === void 0 ? void 0 : _d.sigV4SecretKey,
            } }),
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: "gf-form" },
            React__default.createElement("h6", null, "SigV4 Auth Details")),
        React__default.createElement(ConnectionConfig, __assign({}, connectionConfigProps, { skipHeader: true, skipEndpoint: true }))));
};

var defaultKey = '__default';

function ResourceSelector(props) {
    var _this = this;
    var _a = __read(React.useState(props.value || props.default || null), 2), resource = _a[0], setResource = _a[1];
    var _b = __read(React.useState(resource ? [resource] : []), 2), resources = _b[0], setResources = _b[1];
    var _c = __read(React.useState(props.dependencies), 2), dependencies = _c[0], setDependencies = _c[1];
    var _d = __read(React.useState(false), 2), isLoading = _d[0], setIsLoading = _d[1];
    var _e = __read(React.useState(false), 2), fetched = _e[0], setFetched = _e[1];
    var defaultOpts = React.useMemo(function () {
        var opts = [
            {
                label: "default (" + props.default + ")",
                value: defaultKey,
                description: "Default value set in the data source",
            },
        ];
        if (props.value && props.value !== defaultKey) {
            opts.push({ label: props.value, value: props.value });
        }
        return opts;
    }, [props.default, props.value]);
    var _f = __read(React.useState(props.default ? defaultOpts : []), 2), options = _f[0], setOptions = _f[1];
    React.useEffect(function () {
        if (props.resources !== undefined) {
            setResources(props.resources);
        }
    }, [props.resources]);
    React.useEffect(function () {
        var newOptions = props.default ? defaultOpts : [];
        if (resources.length) {
            resources.forEach(function (r) {
                var value = typeof r === 'string' ? r : r.value;
                if (!newOptions.find(function (o) { return o.value === value; })) {
                    typeof r === 'string' ? newOptions.push({ label: r, value: r }) : newOptions.push(r);
                }
            });
            setOptions(newOptions);
        }
        else {
            setOptions([]);
        }
    }, [resources, defaultOpts, props.default]);
    React.useEffect(function () {
        // A change in the dependencies cause a state clean-up
        if (!lodash.isEqual(props.dependencies, dependencies)) {
            setFetched(false);
            setResource(null);
            props.onChange(null);
            setDependencies(props.dependencies);
        }
    }, [props, dependencies]);
    var fetch = function () { return __awaiter(_this, void 0, void 0, function () {
        var resources_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (fetched) {
                        return [2 /*return*/];
                    }
                    if (!props.saveOptions) return [3 /*break*/, 2];
                    return [4 /*yield*/, props.saveOptions()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, , 4, 5]);
                    return [4 /*yield*/, props.fetch()];
                case 3:
                    resources_1 = _a.sent();
                    setResources(resources_1);
                    return [3 /*break*/, 5];
                case 4:
                    setFetched(true);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var onChange = function (e) {
        props.onChange(e);
        if (e.value) {
            setResource(e.value);
        }
    };
    var onClick = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, fetch()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React__default.createElement(ui.InlineField, { label: props.label, labelWidth: props.labelWidth, tooltip: props.tooltip, hidden: props.hidden },
        React__default.createElement("div", { "data-testid": props['data-testid'], title: props.title },
            React__default.createElement(ui.Select, __assign({}, props, { "aria-label": props.label, options: options, onChange: onChange, isLoading: isLoading, className: props.className || 'min-width-6', onOpenMenu: function () { return props.fetch && onClick(); }, menuShouldPortal: true })))));
}

function ConfigSelect(props) {
    var jsonData = props.options.jsonData;
    var commonProps = {
        title: jsonData.defaultRegion ? '' : 'select a default region',
        labelWidth: 28,
        className: 'width-30',
    };
    // Any change in the AWS connection details will affect selectors
    var dependencies = [
        props.options.jsonData.assumeRoleArn,
        props.options.jsonData.authType,
        props.options.jsonData.defaultRegion,
        props.options.jsonData.endpoint,
        props.options.jsonData.externalId,
        props.options.jsonData.profile,
    ].concat(props.dependencies);
    return (React__default.createElement(ResourceSelector, __assign({ label: props.label, "data-testid": props['data-testid'], onChange: props.onChange, fetch: props.fetch, value: props.value, saveOptions: props.saveOptions, dependencies: dependencies, hidden: props.hidden, disabled: props.disabled || !jsonData.defaultRegion, allowCustomValue: props.allowCustomValue, autoFocus: props.autoFocus, backspaceRemovesValue: props.backspaceRemovesValue, className: props.className, invalid: props.invalid, isClearable: props.isClearable, isMulti: props.isMulti, inputId: props.inputId, showAllSelectedWhenOpen: props.showAllSelectedWhenOpen, maxMenuHeight: props.maxMenuHeight, minMenuHeight: props.minMenuHeight, maxVisibleValues: props.maxVisibleValues, menuPlacement: props.menuPlacement, menuPosition: props.menuPosition, noOptionsMessage: props.noOptionsMessage, onBlur: props.onBlur, onCreateOption: props.onCreateOption, onInputChange: props.onInputChange, placeholder: props.placeholder, width: props.width, isOptionDisabled: props.isOptionDisabled }, commonProps)));
}

function InlineInput(props) {
    return (React__default.createElement(ui.InlineField, { label: props.label, labelWidth: 28, tooltip: props.tooltip, hidden: props.hidden, disabled: props.disabled },
        React__default.createElement(ui.Input, { "data-testid": props['data-testid'], className: "width-30", value: props.value, onChange: props.onChange, placeholder: props.placeholder, disabled: props.disabled })));
}

function QueryCodeEditor(props) {
    var getSuggestions = props.getSuggestions, query = props.query;
    var rawSQL = lodash.defaults(props.query, { rawSQL: '' }).rawSQL;
    var onRawSqlChange = function (rawSQL) {
        var query = __assign(__assign({}, props.query), { rawSQL: rawSQL });
        props.onChange(query);
        props.onRunQuery();
    };
    // Use a reference for suggestions because a bug in CodeEditor getSuggestions
    // https://github.com/grafana/grafana/issues/40121
    // It was been fixed in 8.3 but keeping the workaround here to support older
    // versions.
    var suggestionsRef = React.useRef([]);
    React.useEffect(function () {
        suggestionsRef.current = getSuggestions(query);
    }, [getSuggestions, query]);
    return (React__default.createElement(ui.CodeEditor, __assign({ language: props.language, value: rawSQL, onBlur: onRawSqlChange, showMiniMap: false, showLineNumbers: true, getSuggestions: function () { return suggestionsRef.current; }, height: "240px" }, props.editorProps)));
}

function FormatSelect(props) {
    var onChangeFormat = function (e) {
        props.onChange(__assign(__assign({}, props.query), { format: e.value || 0 }));
        props.onRunQuery();
    };
    return (React__default.createElement(ui.InlineField, { label: "Format as", labelWidth: 11 },
        React__default.createElement(ui.Select, { "aria-label": "Format as", options: props.options, value: props.query.format, onChange: onChangeFormat, className: "width-12", menuShouldPortal: true })));
}

(function (FillValueOptions) {
    FillValueOptions[FillValueOptions["Previous"] = 0] = "Previous";
    FillValueOptions[FillValueOptions["Null"] = 1] = "Null";
    FillValueOptions[FillValueOptions["Value"] = 2] = "Value";
})(exports.FillValueOptions || (exports.FillValueOptions = {}));
var SelectableFillValueOptions = [
    {
        label: 'Previous Value',
        value: exports.FillValueOptions.Previous,
    },
    {
        label: 'NULL',
        value: exports.FillValueOptions.Null,
    },
    {
        label: 'Value',
        value: exports.FillValueOptions.Value,
    },
];
function FillValueSelect(props) {
    var _a, _b, _c;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(ui.InlineField, { label: "Fill value", tooltip: "value to fill missing points" },
            React__default.createElement(ui.Select, { "aria-label": "Fill value", options: SelectableFillValueOptions, value: (_b = (_a = props.query.fillMode) === null || _a === void 0 ? void 0 : _a.mode) !== null && _b !== void 0 ? _b : exports.FillValueOptions.Previous, onChange: function (_a) {
                    var value = _a.value;
                    props.onChange(__assign(__assign({}, props.query), { 
                        // Keep the fillMode.value in case FillValueOptions.Value mode is selected back
                        fillMode: __assign(__assign({}, props.query.fillMode), { mode: value }) }));
                    props.onRunQuery();
                }, className: "width-12", menuShouldPortal: true })),
        ((_c = props.query.fillMode) === null || _c === void 0 ? void 0 : _c.mode) === exports.FillValueOptions.Value && (React__default.createElement(ui.InlineField, { label: "Value", labelWidth: 11 },
            React__default.createElement(ui.Input, { type: "number", "aria-label": "Value", value: props.query.fillMode.value, onChange: function (_a) {
                    var currentTarget = _a.currentTarget;
                    return props.onChange(__assign(__assign({}, props.query), { fillMode: {
                            mode: exports.FillValueOptions.Value,
                            value: currentTarget.valueAsNumber,
                        } }));
                }, onBlur: function () { return props.onRunQuery(); } })))));
}

/**
 * Do not execute queries that do not exist yet
 */
function filterSQLQuery(query) {
    return !!query.rawSQL;
}
function applySQLTemplateVariables(query, scopedVars, getTemplateSrv) {
    var templateSrv = getTemplateSrv();
    return __assign(__assign({}, query), { rawSQL: templateSrv.replace(query.rawSQL, scopedVars, interpolateVariable) });
}
function interpolateVariable(value) {
    if (typeof value === 'string') {
        return value;
    }
    var quotedValues = value.map(function (v) {
        return quoteLiteral(v);
    });
    return quotedValues.join(',');
}
function quoteLiteral(value) {
    return "'" + String(value).replace(/'/g, "''") + "'";
}
var appendTemplateVariablesAsSuggestions = function (getTemplateSrv, sugs) {
    var templateSrv = getTemplateSrv();
    var templateSugs = [];
    templateSrv.getVariables().forEach(function (variable) {
        var label = '$' + variable.name;
        var val = templateSrv.replace(label);
        if (val === label) {
            val = '';
        }
        templateSugs.push({
            label: label,
            kind: ui.CodeEditorSuggestionItemKind.Text,
            detail: "(Template Variable) " + val,
        });
    });
    return sugs.concat(templateSugs);
};

exports.ConfigSelect = ConfigSelect;
exports.ConnectionConfig = ConnectionConfig;
exports.FillValueSelect = FillValueSelect;
exports.FormatSelect = FormatSelect;
exports.InlineInput = InlineInput;
exports.QueryCodeEditor = QueryCodeEditor;
exports.ResourceSelector = ResourceSelector;
exports.SIGV4ConnectionConfig = SIGV4ConnectionConfig;
exports.appendTemplateVariablesAsSuggestions = appendTemplateVariablesAsSuggestions;
exports.applySQLTemplateVariables = applySQLTemplateVariables;
exports.awsAuthProviderOptions = awsAuthProviderOptions;
exports.filterSQLQuery = filterSQLQuery;
exports.standardRegions = standardRegions;
//# sourceMappingURL=index.development.js.map


/***/ }),

/***/ "./.yarn/cache/@grafana-aws-sdk-npm-0.0.36-8ab4b07904-c243f7c900.zip/node_modules/@grafana/aws-sdk/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__("./.yarn/cache/@grafana-aws-sdk-npm-0.0.36-8ab4b07904-c243f7c900.zip/node_modules/@grafana/aws-sdk/dist/index.development.js");
}


/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/TemplateTag.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class TemplateTag
 * @classdesc Consumes a pipeline of composable transformer plugins and produces a template tag.
 */
var TemplateTag = function () {
  /**
   * constructs a template tag
   * @constructs TemplateTag
   * @param  {...Object} [...transformers] - an array or arguments list of transformers
   * @return {Function}                    - a template tag
   */
  function TemplateTag() {
    var _this = this;

    for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
      transformers[_key] = arguments[_key];
    }

    _classCallCheck(this, TemplateTag);

    this.tag = function (strings) {
      for (var _len2 = arguments.length, expressions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        expressions[_key2 - 1] = arguments[_key2];
      }

      if (typeof strings === 'function') {
        // if the first argument passed is a function, assume it is a template tag and return
        // an intermediary tag that processes the template using the aforementioned tag, passing the
        // result to our tag
        return _this.interimTag.bind(_this, strings);
      }

      if (typeof strings === 'string') {
        // if the first argument passed is a string, just transform it
        return _this.transformEndResult(strings);
      }

      // else, return a transformed end result of processing the template with our tag
      strings = strings.map(_this.transformString.bind(_this));
      return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this, expressions)));
    };

    // if first argument is an array, extrude it as a list of transformers
    if (transformers.length > 0 && Array.isArray(transformers[0])) {
      transformers = transformers[0];
    }

    // if any transformers are functions, this means they are not initiated - automatically initiate them
    this.transformers = transformers.map(function (transformer) {
      return typeof transformer === 'function' ? transformer() : transformer;
    });

    // return an ES2015 template tag
    return this.tag;
  }

  /**
   * Applies all transformers to a template literal tagged with this method.
   * If a function is passed as the first argument, assumes the function is a template tag
   * and applies it to the template, returning a template tag.
   * @param  {(Function|String|Array<String>)} strings        - Either a template tag or an array containing template strings separated by identifier
   * @param  {...*}                            ...expressions - Optional list of substitution values.
   * @return {(String|Function)}                              - Either an intermediary tag function or the results of processing the template.
   */


  _createClass(TemplateTag, [{
    key: 'interimTag',


    /**
     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
     * template tag to our own template tag.
     * @param  {Function}        nextTag          - the received template tag
     * @param  {Array<String>}   template         - the template to process
     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
     * @return {*}                                - the final processed value
     */
    value: function interimTag(previousTag, template) {
      for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        substitutions[_key3 - 2] = arguments[_key3];
      }

      return this.tag(_templateObject, previousTag.apply(undefined, [template].concat(substitutions)));
    }

    /**
     * Performs bulk processing on the tagged template, transforming each substitution and then
     * concatenating the resulting values into a string.
     * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
     * @param  {String}   resultSoFar   - this iteration's result string so far
     * @param  {String}   remainingPart - the template chunk after the current substitution
     * @return {String}                 - the result of joining this iteration's processed substitution with the result
     */

  }, {
    key: 'processSubstitutions',
    value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
      var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
      return ''.concat(resultSoFar, substitution, remainingPart);
    }

    /**
     * Iterate through each transformer, applying the transformer's `onString` method to the template
     * strings before all substitutions are processed.
     * @param {String}  str - The input string
     * @return {String}     - The final results of processing each transformer
     */

  }, {
    key: 'transformString',
    value: function transformString(str) {
      var cb = function cb(res, transform) {
        return transform.onString ? transform.onString(res) : res;
      };
      return this.transformers.reduce(cb, str);
    }

    /**
     * When a substitution is encountered, iterates through each transformer and applies the transformer's
     * `onSubstitution` method to the substitution.
     * @param  {*}      substitution - The current substitution
     * @param  {String} resultSoFar  - The result up to and excluding this substitution.
     * @return {*}                   - The final result of applying all substitution transformations.
     */

  }, {
    key: 'transformSubstitution',
    value: function transformSubstitution(substitution, resultSoFar) {
      var cb = function cb(res, transform) {
        return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
      };
      return this.transformers.reduce(cb, substitution);
    }

    /**
     * Iterates through each transformer, applying the transformer's `onEndResult` method to the
     * template literal after all substitutions have finished processing.
     * @param  {String} endResult - The processed template, just before it is returned from the tag
     * @return {String}           - The final results of processing each transformer
     */

  }, {
    key: 'transformEndResult',
    value: function transformEndResult(endResult) {
      var cb = function cb(res, transform) {
        return transform.onEndResult ? transform.onEndResult(res) : res;
      };
      return this.transformers.reduce(cb, endResult);
    }
  }]);

  return TemplateTag;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateTag);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZW1wbGF0ZVRhZy9UZW1wbGF0ZVRhZy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyYW5zZm9ybWVycyIsInRhZyIsInN0cmluZ3MiLCJleHByZXNzaW9ucyIsImludGVyaW1UYWciLCJiaW5kIiwidHJhbnNmb3JtRW5kUmVzdWx0IiwibWFwIiwidHJhbnNmb3JtU3RyaW5nIiwicmVkdWNlIiwicHJvY2Vzc1N1YnN0aXR1dGlvbnMiLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmFuc2Zvcm1lciIsInByZXZpb3VzVGFnIiwidGVtcGxhdGUiLCJzdWJzdGl0dXRpb25zIiwicmVzdWx0U29GYXIiLCJyZW1haW5pbmdQYXJ0Iiwic3Vic3RpdHV0aW9uIiwidHJhbnNmb3JtU3Vic3RpdHV0aW9uIiwic2hpZnQiLCJjb25jYXQiLCJzdHIiLCJjYiIsInJlcyIsInRyYW5zZm9ybSIsIm9uU3RyaW5nIiwib25TdWJzdGl0dXRpb24iLCJlbmRSZXN1bHQiLCJvbkVuZFJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQUlxQkEsVztBQUNuQjs7Ozs7O0FBTUEseUJBQTZCO0FBQUE7O0FBQUEsc0NBQWRDLFlBQWM7QUFBZEEsa0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxTQXVCN0JDLEdBdkI2QixHQXVCdkIsVUFBQ0MsT0FBRCxFQUE2QjtBQUFBLHlDQUFoQkMsV0FBZ0I7QUFBaEJBLG1CQUFnQjtBQUFBOztBQUNqQyxVQUFJLE9BQU9ELE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsZUFBTyxNQUFLRSxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixLQUFyQixFQUEyQkgsT0FBM0IsQ0FBUDtBQUNEOztBQUVELFVBQUksT0FBT0EsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUMvQjtBQUNBLGVBQU8sTUFBS0ksa0JBQUwsQ0FBd0JKLE9BQXhCLENBQVA7QUFDRDs7QUFFRDtBQUNBQSxnQkFBVUEsUUFBUUssR0FBUixDQUFZLE1BQUtDLGVBQUwsQ0FBcUJILElBQXJCLENBQTBCLEtBQTFCLENBQVosQ0FBVjtBQUNBLGFBQU8sTUFBS0Msa0JBQUwsQ0FDTEosUUFBUU8sTUFBUixDQUFlLE1BQUtDLG9CQUFMLENBQTBCTCxJQUExQixDQUErQixLQUEvQixFQUFxQ0YsV0FBckMsQ0FBZixDQURLLENBQVA7QUFHRCxLQXpDNEI7O0FBQzNCO0FBQ0EsUUFBSUgsYUFBYVcsTUFBYixHQUFzQixDQUF0QixJQUEyQkMsTUFBTUMsT0FBTixDQUFjYixhQUFhLENBQWIsQ0FBZCxDQUEvQixFQUErRDtBQUM3REEscUJBQWVBLGFBQWEsQ0FBYixDQUFmO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFLQSxZQUFMLEdBQW9CQSxhQUFhTyxHQUFiLENBQWlCLHVCQUFlO0FBQ2xELGFBQU8sT0FBT08sV0FBUCxLQUF1QixVQUF2QixHQUFvQ0EsYUFBcEMsR0FBb0RBLFdBQTNEO0FBQ0QsS0FGbUIsQ0FBcEI7O0FBSUE7QUFDQSxXQUFPLEtBQUtiLEdBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7Ozs7Ozs7OytCQVFXYyxXLEVBQWFDLFEsRUFBNEI7QUFBQSx5Q0FBZkMsYUFBZTtBQUFmQSxxQkFBZTtBQUFBOztBQUNsRCxhQUFPLEtBQUtoQixHQUFaLGtCQUFrQmMsOEJBQVlDLFFBQVosU0FBeUJDLGFBQXpCLEVBQWxCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O3lDQVFxQkEsYSxFQUFlQyxXLEVBQWFDLGEsRUFBZTtBQUM5RCxVQUFNQyxlQUFlLEtBQUtDLHFCQUFMLENBQ25CSixjQUFjSyxLQUFkLEVBRG1CLEVBRW5CSixXQUZtQixDQUFyQjtBQUlBLGFBQU8sR0FBR0ssTUFBSCxDQUFVTCxXQUFWLEVBQXVCRSxZQUF2QixFQUFxQ0QsYUFBckMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7b0NBTWdCSyxHLEVBQUs7QUFDbkIsVUFBTUMsS0FBSyxTQUFMQSxFQUFLLENBQUNDLEdBQUQsRUFBTUMsU0FBTjtBQUFBLGVBQ1RBLFVBQVVDLFFBQVYsR0FBcUJELFVBQVVDLFFBQVYsQ0FBbUJGLEdBQW5CLENBQXJCLEdBQStDQSxHQUR0QztBQUFBLE9BQVg7QUFFQSxhQUFPLEtBQUsxQixZQUFMLENBQWtCUyxNQUFsQixDQUF5QmdCLEVBQXpCLEVBQTZCRCxHQUE3QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7MENBT3NCSixZLEVBQWNGLFcsRUFBYTtBQUMvQyxVQUFNTyxLQUFLLFNBQUxBLEVBQUssQ0FBQ0MsR0FBRCxFQUFNQyxTQUFOO0FBQUEsZUFDVEEsVUFBVUUsY0FBVixHQUNJRixVQUFVRSxjQUFWLENBQXlCSCxHQUF6QixFQUE4QlIsV0FBOUIsQ0FESixHQUVJUSxHQUhLO0FBQUEsT0FBWDtBQUlBLGFBQU8sS0FBSzFCLFlBQUwsQ0FBa0JTLE1BQWxCLENBQXlCZ0IsRUFBekIsRUFBNkJMLFlBQTdCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O3VDQU1tQlUsUyxFQUFXO0FBQzVCLFVBQU1MLEtBQUssU0FBTEEsRUFBSyxDQUFDQyxHQUFELEVBQU1DLFNBQU47QUFBQSxlQUNUQSxVQUFVSSxXQUFWLEdBQXdCSixVQUFVSSxXQUFWLENBQXNCTCxHQUF0QixDQUF4QixHQUFxREEsR0FENUM7QUFBQSxPQUFYO0FBRUEsYUFBTyxLQUFLMUIsWUFBTCxDQUFrQlMsTUFBbEIsQ0FBeUJnQixFQUF6QixFQUE2QkssU0FBN0IsQ0FBUDtBQUNEOzs7Ozs7ZUFuSGtCL0IsVyIsImZpbGUiOiJUZW1wbGF0ZVRhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNsYXNzIFRlbXBsYXRlVGFnXG4gKiBAY2xhc3NkZXNjIENvbnN1bWVzIGEgcGlwZWxpbmUgb2YgY29tcG9zYWJsZSB0cmFuc2Zvcm1lciBwbHVnaW5zIGFuZCBwcm9kdWNlcyBhIHRlbXBsYXRlIHRhZy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVUYWcge1xuICAvKipcbiAgICogY29uc3RydWN0cyBhIHRlbXBsYXRlIHRhZ1xuICAgKiBAY29uc3RydWN0cyBUZW1wbGF0ZVRhZ1xuICAgKiBAcGFyYW0gIHsuLi5PYmplY3R9IFsuLi50cmFuc2Zvcm1lcnNdIC0gYW4gYXJyYXkgb3IgYXJndW1lbnRzIGxpc3Qgb2YgdHJhbnNmb3JtZXJzXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgICAgICAgICAgLSBhIHRlbXBsYXRlIHRhZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoLi4udHJhbnNmb3JtZXJzKSB7XG4gICAgLy8gaWYgZmlyc3QgYXJndW1lbnQgaXMgYW4gYXJyYXksIGV4dHJ1ZGUgaXQgYXMgYSBsaXN0IG9mIHRyYW5zZm9ybWVyc1xuICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KHRyYW5zZm9ybWVyc1swXSkpIHtcbiAgICAgIHRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVyc1swXTtcbiAgICB9XG5cbiAgICAvLyBpZiBhbnkgdHJhbnNmb3JtZXJzIGFyZSBmdW5jdGlvbnMsIHRoaXMgbWVhbnMgdGhleSBhcmUgbm90IGluaXRpYXRlZCAtIGF1dG9tYXRpY2FsbHkgaW5pdGlhdGUgdGhlbVxuICAgIHRoaXMudHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLm1hcCh0cmFuc2Zvcm1lciA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRyYW5zZm9ybWVyID09PSAnZnVuY3Rpb24nID8gdHJhbnNmb3JtZXIoKSA6IHRyYW5zZm9ybWVyO1xuICAgIH0pO1xuXG4gICAgLy8gcmV0dXJuIGFuIEVTMjAxNSB0ZW1wbGF0ZSB0YWdcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhbGwgdHJhbnNmb3JtZXJzIHRvIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWdnZWQgd2l0aCB0aGlzIG1ldGhvZC5cbiAgICogSWYgYSBmdW5jdGlvbiBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LCBhc3N1bWVzIHRoZSBmdW5jdGlvbiBpcyBhIHRlbXBsYXRlIHRhZ1xuICAgKiBhbmQgYXBwbGllcyBpdCB0byB0aGUgdGVtcGxhdGUsIHJldHVybmluZyBhIHRlbXBsYXRlIHRhZy5cbiAgICogQHBhcmFtICB7KEZ1bmN0aW9ufFN0cmluZ3xBcnJheTxTdHJpbmc+KX0gc3RyaW5ncyAgICAgICAgLSBFaXRoZXIgYSB0ZW1wbGF0ZSB0YWcgb3IgYW4gYXJyYXkgY29udGFpbmluZyB0ZW1wbGF0ZSBzdHJpbmdzIHNlcGFyYXRlZCBieSBpZGVudGlmaWVyXG4gICAqIEBwYXJhbSAgey4uLip9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmV4cHJlc3Npb25zIC0gT3B0aW9uYWwgbGlzdCBvZiBzdWJzdGl0dXRpb24gdmFsdWVzLlxuICAgKiBAcmV0dXJuIHsoU3RyaW5nfEZ1bmN0aW9uKX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIEVpdGhlciBhbiBpbnRlcm1lZGlhcnkgdGFnIGZ1bmN0aW9uIG9yIHRoZSByZXN1bHRzIG9mIHByb2Nlc3NpbmcgdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgdGFnID0gKHN0cmluZ3MsIC4uLmV4cHJlc3Npb25zKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmdzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBpZiB0aGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIGlzIGEgZnVuY3Rpb24sIGFzc3VtZSBpdCBpcyBhIHRlbXBsYXRlIHRhZyBhbmQgcmV0dXJuXG4gICAgICAvLyBhbiBpbnRlcm1lZGlhcnkgdGFnIHRoYXQgcHJvY2Vzc2VzIHRoZSB0ZW1wbGF0ZSB1c2luZyB0aGUgYWZvcmVtZW50aW9uZWQgdGFnLCBwYXNzaW5nIHRoZVxuICAgICAgLy8gcmVzdWx0IHRvIG91ciB0YWdcbiAgICAgIHJldHVybiB0aGlzLmludGVyaW1UYWcuYmluZCh0aGlzLCBzdHJpbmdzKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHN0cmluZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBpZiB0aGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIGlzIGEgc3RyaW5nLCBqdXN0IHRyYW5zZm9ybSBpdFxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtRW5kUmVzdWx0KHN0cmluZ3MpO1xuICAgIH1cblxuICAgIC8vIGVsc2UsIHJldHVybiBhIHRyYW5zZm9ybWVkIGVuZCByZXN1bHQgb2YgcHJvY2Vzc2luZyB0aGUgdGVtcGxhdGUgd2l0aCBvdXIgdGFnXG4gICAgc3RyaW5ncyA9IHN0cmluZ3MubWFwKHRoaXMudHJhbnNmb3JtU3RyaW5nLmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUVuZFJlc3VsdChcbiAgICAgIHN0cmluZ3MucmVkdWNlKHRoaXMucHJvY2Vzc1N1YnN0aXR1dGlvbnMuYmluZCh0aGlzLCBleHByZXNzaW9ucykpLFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFuIGludGVybWVkaWFyeSB0ZW1wbGF0ZSB0YWcgdGhhdCByZWNlaXZlcyBhIHRlbXBsYXRlIHRhZyBhbmQgcGFzc2VzIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgdGVtcGxhdGUgd2l0aCB0aGUgcmVjZWl2ZWRcbiAgICogdGVtcGxhdGUgdGFnIHRvIG91ciBvd24gdGVtcGxhdGUgdGFnLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gICAgICAgIG5leHRUYWcgICAgICAgICAgLSB0aGUgcmVjZWl2ZWQgdGVtcGxhdGUgdGFnXG4gICAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59ICAgdGVtcGxhdGUgICAgICAgICAtIHRoZSB0ZW1wbGF0ZSB0byBwcm9jZXNzXG4gICAqIEBwYXJhbSAgey4uLip9ICAgICAgICAgICAgLi4uc3Vic3RpdHV0aW9ucyAtIGBzdWJzdGl0dXRpb25zYCBpcyBhbiBhcnJheSBvZiBhbGwgc3Vic3RpdHV0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICogQHJldHVybiB7Kn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gdGhlIGZpbmFsIHByb2Nlc3NlZCB2YWx1ZVxuICAgKi9cbiAgaW50ZXJpbVRhZyhwcmV2aW91c1RhZywgdGVtcGxhdGUsIC4uLnN1YnN0aXR1dGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy50YWdgJHtwcmV2aW91c1RhZyh0ZW1wbGF0ZSwgLi4uc3Vic3RpdHV0aW9ucyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBidWxrIHByb2Nlc3Npbmcgb24gdGhlIHRhZ2dlZCB0ZW1wbGF0ZSwgdHJhbnNmb3JtaW5nIGVhY2ggc3Vic3RpdHV0aW9uIGFuZCB0aGVuXG4gICAqIGNvbmNhdGVuYXRpbmcgdGhlIHJlc3VsdGluZyB2YWx1ZXMgaW50byBhIHN0cmluZy5cbiAgICogQHBhcmFtICB7QXJyYXk8Kj59IHN1YnN0aXR1dGlvbnMgLSBhbiBhcnJheSBvZiBhbGwgcmVtYWluaW5nIHN1YnN0aXR1dGlvbnMgcHJlc2VudCBpbiB0aGlzIHRlbXBsYXRlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICByZXN1bHRTb0ZhciAgIC0gdGhpcyBpdGVyYXRpb24ncyByZXN1bHQgc3RyaW5nIHNvIGZhclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgcmVtYWluaW5nUGFydCAtIHRoZSB0ZW1wbGF0ZSBjaHVuayBhZnRlciB0aGUgY3VycmVudCBzdWJzdGl0dXRpb25cbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgLSB0aGUgcmVzdWx0IG9mIGpvaW5pbmcgdGhpcyBpdGVyYXRpb24ncyBwcm9jZXNzZWQgc3Vic3RpdHV0aW9uIHdpdGggdGhlIHJlc3VsdFxuICAgKi9cbiAgcHJvY2Vzc1N1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgcmVzdWx0U29GYXIsIHJlbWFpbmluZ1BhcnQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnRyYW5zZm9ybVN1YnN0aXR1dGlvbihcbiAgICAgIHN1YnN0aXR1dGlvbnMuc2hpZnQoKSxcbiAgICAgIHJlc3VsdFNvRmFyLFxuICAgICk7XG4gICAgcmV0dXJuICcnLmNvbmNhdChyZXN1bHRTb0Zhciwgc3Vic3RpdHV0aW9uLCByZW1haW5pbmdQYXJ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIHRocm91Z2ggZWFjaCB0cmFuc2Zvcm1lciwgYXBwbHlpbmcgdGhlIHRyYW5zZm9ybWVyJ3MgYG9uU3RyaW5nYCBtZXRob2QgdG8gdGhlIHRlbXBsYXRlXG4gICAqIHN0cmluZ3MgYmVmb3JlIGFsbCBzdWJzdGl0dXRpb25zIGFyZSBwcm9jZXNzZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSAgc3RyIC0gVGhlIGlucHV0IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAtIFRoZSBmaW5hbCByZXN1bHRzIG9mIHByb2Nlc3NpbmcgZWFjaCB0cmFuc2Zvcm1lclxuICAgKi9cbiAgdHJhbnNmb3JtU3RyaW5nKHN0cikge1xuICAgIGNvbnN0IGNiID0gKHJlcywgdHJhbnNmb3JtKSA9PlxuICAgICAgdHJhbnNmb3JtLm9uU3RyaW5nID8gdHJhbnNmb3JtLm9uU3RyaW5nKHJlcykgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgc3RyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgc3Vic3RpdHV0aW9uIGlzIGVuY291bnRlcmVkLCBpdGVyYXRlcyB0aHJvdWdoIGVhY2ggdHJhbnNmb3JtZXIgYW5kIGFwcGxpZXMgdGhlIHRyYW5zZm9ybWVyJ3NcbiAgICogYG9uU3Vic3RpdHV0aW9uYCBtZXRob2QgdG8gdGhlIHN1YnN0aXR1dGlvbi5cbiAgICogQHBhcmFtICB7Kn0gICAgICBzdWJzdGl0dXRpb24gLSBUaGUgY3VycmVudCBzdWJzdGl0dXRpb25cbiAgICogQHBhcmFtICB7U3RyaW5nfSByZXN1bHRTb0ZhciAgLSBUaGUgcmVzdWx0IHVwIHRvIGFuZCBleGNsdWRpbmcgdGhpcyBzdWJzdGl0dXRpb24uXG4gICAqIEByZXR1cm4geyp9ICAgICAgICAgICAgICAgICAgIC0gVGhlIGZpbmFsIHJlc3VsdCBvZiBhcHBseWluZyBhbGwgc3Vic3RpdHV0aW9uIHRyYW5zZm9ybWF0aW9ucy5cbiAgICovXG4gIHRyYW5zZm9ybVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgY29uc3QgY2IgPSAocmVzLCB0cmFuc2Zvcm0pID0+XG4gICAgICB0cmFuc2Zvcm0ub25TdWJzdGl0dXRpb25cbiAgICAgICAgPyB0cmFuc2Zvcm0ub25TdWJzdGl0dXRpb24ocmVzLCByZXN1bHRTb0ZhcilcbiAgICAgICAgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggdHJhbnNmb3JtZXIsIGFwcGx5aW5nIHRoZSB0cmFuc2Zvcm1lcidzIGBvbkVuZFJlc3VsdGAgbWV0aG9kIHRvIHRoZVxuICAgKiB0ZW1wbGF0ZSBsaXRlcmFsIGFmdGVyIGFsbCBzdWJzdGl0dXRpb25zIGhhdmUgZmluaXNoZWQgcHJvY2Vzc2luZy5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbmRSZXN1bHQgLSBUaGUgcHJvY2Vzc2VkIHRlbXBsYXRlLCBqdXN0IGJlZm9yZSBpdCBpcyByZXR1cm5lZCBmcm9tIHRoZSB0YWdcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgLSBUaGUgZmluYWwgcmVzdWx0cyBvZiBwcm9jZXNzaW5nIGVhY2ggdHJhbnNmb3JtZXJcbiAgICovXG4gIHRyYW5zZm9ybUVuZFJlc3VsdChlbmRSZXN1bHQpIHtcbiAgICBjb25zdCBjYiA9IChyZXMsIHRyYW5zZm9ybSkgPT5cbiAgICAgIHRyYW5zZm9ybS5vbkVuZFJlc3VsdCA/IHRyYW5zZm9ybS5vbkVuZFJlc3VsdChyZXMpIDogcmVzO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybWVycy5yZWR1Y2UoY2IsIGVuZFJlc3VsdCk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/TemplateTag.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZW1wbGF0ZVRhZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL1RlbXBsYXRlVGFnJztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/codeBlock/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/html/index.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2RlQmxvY2svaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixTO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi4vaHRtbCc7XG4iXX0=

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaLists/commaLists.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");





var commaLists = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__["default"])({ separator: ',' }), _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commaLists);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzL2NvbW1hTGlzdHMuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsImNvbW1hTGlzdHMiLCJzZXBhcmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVAsTUFBd0IsZ0JBQXhCO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0MscUJBQVAsTUFBa0MsMEJBQWxDOztBQUVBLElBQU1DLGFBQWEsSUFBSUosV0FBSixDQUNqQkUsdUJBQXVCLEVBQUVHLFdBQVcsR0FBYixFQUF2QixDQURpQixFQUVqQkosc0JBRmlCLEVBR2pCRSxxQkFIaUIsQ0FBbkI7O0FBTUEsZUFBZUMsVUFBZiIsImZpbGUiOiJjb21tYUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGNvbW1hTGlzdHMgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJyB9KSxcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFMaXN0cztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaLists/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _commaLists__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _commaLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaLists/commaLists.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsYztxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vY29tbWFMaXN0cyc7XG4iXX0=

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaListsAnd/commaListsAnd.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");





var commaListsAnd = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__["default"])({ separator: ',', conjunction: 'and' }), _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commaListsAnd);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzQW5kL2NvbW1hTGlzdHNBbmQuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsImNvbW1hTGlzdHNBbmQiLCJzZXBhcmF0b3IiLCJjb25qdW5jdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsZ0JBQWdCLElBQUlKLFdBQUosQ0FDcEJFLHVCQUF1QixFQUFFRyxXQUFXLEdBQWIsRUFBa0JDLGFBQWEsS0FBL0IsRUFBdkIsQ0FEb0IsRUFFcEJMLHNCQUZvQixFQUdwQkUscUJBSG9CLENBQXRCOztBQU1BLGVBQWVDLGFBQWYiLCJmaWxlIjoiY29tbWFMaXN0c0FuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBjb21tYUxpc3RzQW5kID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnYW5kJyB9KSxcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFMaXN0c0FuZDtcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaListsAnd/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _commaListsAnd__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _commaListsAnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaListsAnd/commaListsAnd.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzQW5kL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsaUI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2NvbW1hTGlzdHNBbmQnO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaListsOr/commaListsOr.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");





var commaListsOr = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__["default"])({ separator: ',', conjunction: 'or' }), _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commaListsOr);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzT3IvY29tbWFMaXN0c09yLmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVGFnIiwic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJjb21tYUxpc3RzT3IiLCJzZXBhcmF0b3IiLCJjb25qdW5jdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsZUFBZSxJQUFJSixXQUFKLENBQ25CRSx1QkFBdUIsRUFBRUcsV0FBVyxHQUFiLEVBQWtCQyxhQUFhLElBQS9CLEVBQXZCLENBRG1CLEVBRW5CTCxzQkFGbUIsRUFHbkJFLHFCQUhtQixDQUFyQjs7QUFNQSxlQUFlQyxZQUFmIiwiZmlsZSI6ImNvbW1hTGlzdHNPci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBjb21tYUxpc3RzT3IgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJywgY29uanVuY3Rpb246ICdvcicgfSksXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIsXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hTGlzdHNPcjtcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaListsOr/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _commaListsOr__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _commaListsOr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaListsOr/commaListsOr.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzT3IvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixnQjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vY29tbWFMaXN0c09yJztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/html/html.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _splitStringTransformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/splitStringTransformer/index.js");
/* harmony import */ var _removeNonPrintingValuesTransformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js");







var html = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_splitStringTransformer__WEBPACK_IMPORTED_MODULE_4__["default"])('\n'), _removeNonPrintingValuesTransformer__WEBPACK_IMPORTED_MODULE_5__["default"], _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__["default"], _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (html);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL2h0bWwuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInNwbGl0U3RyaW5nVHJhbnNmb3JtZXIiLCJyZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIiwiaHRtbCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxrQ0FBUCxNQUErQyx1Q0FBL0M7O0FBRUEsSUFBTUMsT0FBTyxJQUFJTixXQUFKLENBQ1hJLHVCQUF1QixJQUF2QixDQURXLEVBRVhDLGtDQUZXLEVBR1hILHNCQUhXLEVBSVhELHNCQUpXLEVBS1hFLHFCQUxXLENBQWI7O0FBUUEsZUFBZUcsSUFBZiIsImZpbGUiOiJodG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lciBmcm9tICcuLi9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyJztcbmltcG9ydCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIGZyb20gJy4uL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXInO1xuXG5jb25zdCBodG1sID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyKCdcXG4nKSxcbiAgcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcixcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcixcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgaHRtbDtcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/html/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/html/html.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsUTtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vaHRtbCc7XG4iXX0=

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateTag": () => (/* reexport safe */ _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "codeBlock": () => (/* reexport safe */ _codeBlock__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "commaLists": () => (/* reexport safe */ _commaLists__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "commaListsAnd": () => (/* reexport safe */ _commaListsAnd__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "commaListsOr": () => (/* reexport safe */ _commaListsOr__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "html": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "inlineArrayTransformer": () => (/* reexport safe */ _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "inlineLists": () => (/* reexport safe */ _inlineLists__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   "oneLine": () => (/* reexport safe */ _oneLine__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   "oneLineCommaLists": () => (/* reexport safe */ _oneLineCommaLists__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "oneLineCommaListsAnd": () => (/* reexport safe */ _oneLineCommaListsAnd__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   "oneLineCommaListsOr": () => (/* reexport safe */ _oneLineCommaListsOr__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "oneLineInlineLists": () => (/* reexport safe */ _oneLineInlineLists__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   "oneLineTrim": () => (/* reexport safe */ _oneLineTrim__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "removeNonPrintingValuesTransformer": () => (/* reexport safe */ _removeNonPrintingValuesTransformer__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "replaceResultTransformer": () => (/* reexport safe */ _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "replaceStringTransformer": () => (/* reexport safe */ _replaceStringTransformer__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "replaceSubstitutionTransformer": () => (/* reexport safe */ _replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "safeHtml": () => (/* reexport safe */ _safeHtml__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "source": () => (/* reexport safe */ _source__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "splitStringTransformer": () => (/* reexport safe */ _splitStringTransformer__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "stripIndent": () => (/* reexport safe */ _stripIndent__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   "stripIndentTransformer": () => (/* reexport safe */ _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "stripIndents": () => (/* reexport safe */ _stripIndents__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   "trimResultTransformer": () => (/* reexport safe */ _trimResultTransformer__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceResultTransformer/index.js");
/* harmony import */ var _replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceSubstitutionTransformer/index.js");
/* harmony import */ var _replaceStringTransformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceStringTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _splitStringTransformer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/splitStringTransformer/index.js");
/* harmony import */ var _removeNonPrintingValuesTransformer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js");
/* harmony import */ var _commaLists__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaLists/index.js");
/* harmony import */ var _commaListsAnd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaListsAnd/index.js");
/* harmony import */ var _commaListsOr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaListsOr/index.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/html/index.js");
/* harmony import */ var _codeBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/codeBlock/index.js");
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/source/index.js");
/* harmony import */ var _safeHtml__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/safeHtml/index.js");
/* harmony import */ var _oneLine__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLine/index.js");
/* harmony import */ var _oneLineTrim__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineTrim/index.js");
/* harmony import */ var _oneLineCommaLists__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaLists/index.js");
/* harmony import */ var _oneLineCommaListsOr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaListsOr/index.js");
/* harmony import */ var _oneLineCommaListsAnd__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaListsAnd/index.js");
/* harmony import */ var _inlineLists__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineLists/index.js");
/* harmony import */ var _oneLineInlineLists__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineInlineLists/index.js");
/* harmony import */ var _stripIndent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndent/index.js");
/* harmony import */ var _stripIndents__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndents/index.js");
// core



// transformers


















// tags

































//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIiLCJyZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXIiLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsInJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIiLCJjb21tYUxpc3RzIiwiY29tbWFMaXN0c0FuZCIsImNvbW1hTGlzdHNPciIsImh0bWwiLCJjb2RlQmxvY2siLCJzb3VyY2UiLCJzYWZlSHRtbCIsIm9uZUxpbmUiLCJvbmVMaW5lVHJpbSIsIm9uZUxpbmVDb21tYUxpc3RzIiwib25lTGluZUNvbW1hTGlzdHNPciIsIm9uZUxpbmVDb21tYUxpc3RzQW5kIiwiaW5saW5lTGlzdHMiLCJvbmVMaW5lSW5saW5lTGlzdHMiLCJzdHJpcEluZGVudCIsInN0cmlwSW5kZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7eUJBQ3dCLGU7eUJBQWpCQSxXOztBQUVQOzttQ0FDa0MseUI7bUNBQTNCQyxxQjtvQ0FDNEIsMEI7b0NBQTVCQyxzQjtzQ0FDOEIsNEI7c0NBQTlCQyx3Qjs0Q0FDb0Msa0M7NENBQXBDQyw4QjtzQ0FDOEIsNEI7c0NBQTlCQyx3QjtvQ0FDNEIsMEI7b0NBQTVCQyxzQjtvQ0FDNEIsMEI7b0NBQTVCQyxzQjtnREFDd0Msc0M7Z0RBQXhDQyxrQzs7QUFFUDs7d0JBQ3VCLGM7d0JBQWhCQyxVOzJCQUNtQixpQjsyQkFBbkJDLGE7MEJBQ2tCLGdCOzBCQUFsQkMsWTtrQkFDVSxRO2tCQUFWQyxJO3VCQUNlLGE7dUJBQWZDLFM7b0JBQ1ksVTtvQkFBWkMsTTtzQkFDYyxZO3NCQUFkQyxRO3FCQUNhLFc7cUJBQWJDLE87eUJBQ2lCLGU7eUJBQWpCQyxXOytCQUN1QixxQjsrQkFBdkJDLGlCO2lDQUN5Qix1QjtpQ0FBekJDLG1CO2tDQUMwQix3QjtrQ0FBMUJDLG9CO3lCQUNpQixlO3lCQUFqQkMsVztnQ0FDd0Isc0I7Z0NBQXhCQyxrQjt5QkFDaUIsZTt5QkFBakJDLFc7MEJBQ2tCLGdCOzBCQUFsQkMsWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvcmVcbmV4cG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuL1RlbXBsYXRlVGFnJztcblxuLy8gdHJhbnNmb3JtZXJzXG5leHBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmV4cG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5leHBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcbmV4cG9ydCByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXInO1xuZXhwb3J0IHJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lciBmcm9tICcuL3JlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lcic7XG5leHBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuZXhwb3J0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgZnJvbSAnLi9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyJztcbmV4cG9ydCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIGZyb20gJy4vcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcic7XG5cbi8vIHRhZ3NcbmV4cG9ydCBjb21tYUxpc3RzIGZyb20gJy4vY29tbWFMaXN0cyc7XG5leHBvcnQgY29tbWFMaXN0c0FuZCBmcm9tICcuL2NvbW1hTGlzdHNBbmQnO1xuZXhwb3J0IGNvbW1hTGlzdHNPciBmcm9tICcuL2NvbW1hTGlzdHNPcic7XG5leHBvcnQgaHRtbCBmcm9tICcuL2h0bWwnO1xuZXhwb3J0IGNvZGVCbG9jayBmcm9tICcuL2NvZGVCbG9jayc7XG5leHBvcnQgc291cmNlIGZyb20gJy4vc291cmNlJztcbmV4cG9ydCBzYWZlSHRtbCBmcm9tICcuL3NhZmVIdG1sJztcbmV4cG9ydCBvbmVMaW5lIGZyb20gJy4vb25lTGluZSc7XG5leHBvcnQgb25lTGluZVRyaW0gZnJvbSAnLi9vbmVMaW5lVHJpbSc7XG5leHBvcnQgb25lTGluZUNvbW1hTGlzdHMgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0cyc7XG5leHBvcnQgb25lTGluZUNvbW1hTGlzdHNPciBmcm9tICcuL29uZUxpbmVDb21tYUxpc3RzT3InO1xuZXhwb3J0IG9uZUxpbmVDb21tYUxpc3RzQW5kIGZyb20gJy4vb25lTGluZUNvbW1hTGlzdHNBbmQnO1xuZXhwb3J0IGlubGluZUxpc3RzIGZyb20gJy4vaW5saW5lTGlzdHMnO1xuZXhwb3J0IG9uZUxpbmVJbmxpbmVMaXN0cyBmcm9tICcuL29uZUxpbmVJbmxpbmVMaXN0cyc7XG5leHBvcnQgc3RyaXBJbmRlbnQgZnJvbSAnLi9zdHJpcEluZGVudCc7XG5leHBvcnQgc3RyaXBJbmRlbnRzIGZyb20gJy4vc3RyaXBJbmRlbnRzJztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVBcnJheVRyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsMEI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var defaults = {
  separator: '',
  conjunction: '',
  serial: false
};

/**
 * Converts an array substitution to a string containing a list
 * @param  {String} [opts.separator = ''] - the character that separates each item
 * @param  {String} [opts.conjunction = '']  - replace the last separator with this
 * @param  {Boolean} [opts.serial = false] - include the separator before the conjunction? (Oxford comma use-case)
 *
 * @return {Object}                     - a TemplateTag transformer
 */
var inlineArrayTransformer = function inlineArrayTransformer() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      // only operate on arrays
      if (Array.isArray(substitution)) {
        var arrayLength = substitution.length;
        var separator = opts.separator;
        var conjunction = opts.conjunction;
        var serial = opts.serial;
        // join each item in the array into a string where each item is separated by separator
        // be sure to maintain indentation
        var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);
        if (indent) {
          substitution = substitution.join(separator + indent[1]);
        } else {
          substitution = substitution.join(separator + ' ');
        }
        // if conjunction is set, replace the last separator with conjunction, but only if there is more than one substitution
        if (conjunction && arrayLength > 1) {
          var separatorIndex = substitution.lastIndexOf(separator);
          substitution = substitution.slice(0, separatorIndex) + (serial ? separator : '') + ' ' + conjunction + substitution.slice(separatorIndex + 1);
        }
      }
      return substitution;
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inlineArrayTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVBcnJheVRyYW5zZm9ybWVyL2lubGluZUFycmF5VHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdHMiLCJzZXBhcmF0b3IiLCJjb25qdW5jdGlvbiIsInNlcmlhbCIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJvcHRzIiwib25TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJyZXN1bHRTb0ZhciIsIkFycmF5IiwiaXNBcnJheSIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwiaW5kZW50IiwibWF0Y2giLCJqb2luIiwic2VwYXJhdG9ySW5kZXgiLCJsYXN0SW5kZXhPZiIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxXQUFXO0FBQ2ZDLGFBQVcsRUFESTtBQUVmQyxlQUFhLEVBRkU7QUFHZkMsVUFBUTtBQUhPLENBQWpCOztBQU1BOzs7Ozs7OztBQVFBLElBQU1DLHlCQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsTUFBQ0MsSUFBRCx1RUFBUUwsUUFBUjtBQUFBLFNBQXNCO0FBQ25ETSxrQkFEbUQsMEJBQ3BDQyxZQURvQyxFQUN0QkMsV0FEc0IsRUFDVDtBQUN4QztBQUNBLFVBQUlDLE1BQU1DLE9BQU4sQ0FBY0gsWUFBZCxDQUFKLEVBQWlDO0FBQy9CLFlBQU1JLGNBQWNKLGFBQWFLLE1BQWpDO0FBQ0EsWUFBTVgsWUFBWUksS0FBS0osU0FBdkI7QUFDQSxZQUFNQyxjQUFjRyxLQUFLSCxXQUF6QjtBQUNBLFlBQU1DLFNBQVNFLEtBQUtGLE1BQXBCO0FBQ0E7QUFDQTtBQUNBLFlBQU1VLFNBQVNMLFlBQVlNLEtBQVosQ0FBa0IsZ0JBQWxCLENBQWY7QUFDQSxZQUFJRCxNQUFKLEVBQVk7QUFDVk4seUJBQWVBLGFBQWFRLElBQWIsQ0FBa0JkLFlBQVlZLE9BQU8sQ0FBUCxDQUE5QixDQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0xOLHlCQUFlQSxhQUFhUSxJQUFiLENBQWtCZCxZQUFZLEdBQTlCLENBQWY7QUFDRDtBQUNEO0FBQ0EsWUFBSUMsZUFBZVMsY0FBYyxDQUFqQyxFQUFvQztBQUNsQyxjQUFNSyxpQkFBaUJULGFBQWFVLFdBQWIsQ0FBeUJoQixTQUF6QixDQUF2QjtBQUNBTSx5QkFDRUEsYUFBYVcsS0FBYixDQUFtQixDQUFuQixFQUFzQkYsY0FBdEIsS0FDQ2IsU0FBU0YsU0FBVCxHQUFxQixFQUR0QixJQUVBLEdBRkEsR0FHQUMsV0FIQSxHQUlBSyxhQUFhVyxLQUFiLENBQW1CRixpQkFBaUIsQ0FBcEMsQ0FMRjtBQU1EO0FBQ0Y7QUFDRCxhQUFPVCxZQUFQO0FBQ0Q7QUE1QmtELEdBQXRCO0FBQUEsQ0FBL0I7O0FBK0JBLGVBQWVILHNCQUFmIiwiZmlsZSI6ImlubGluZUFycmF5VHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0cyA9IHtcbiAgc2VwYXJhdG9yOiAnJyxcbiAgY29uanVuY3Rpb246ICcnLFxuICBzZXJpYWw6IGZhbHNlLFxufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhcnJheSBzdWJzdGl0dXRpb24gdG8gYSBzdHJpbmcgY29udGFpbmluZyBhIGxpc3RcbiAqIEBwYXJhbSAge1N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gJyddIC0gdGhlIGNoYXJhY3RlciB0aGF0IHNlcGFyYXRlcyBlYWNoIGl0ZW1cbiAqIEBwYXJhbSAge1N0cmluZ30gW29wdHMuY29uanVuY3Rpb24gPSAnJ10gIC0gcmVwbGFjZSB0aGUgbGFzdCBzZXBhcmF0b3Igd2l0aCB0aGlzXG4gKiBAcGFyYW0gIHtCb29sZWFufSBbb3B0cy5zZXJpYWwgPSBmYWxzZV0gLSBpbmNsdWRlIHRoZSBzZXBhcmF0b3IgYmVmb3JlIHRoZSBjb25qdW5jdGlvbj8gKE94Zm9yZCBjb21tYSB1c2UtY2FzZSlcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgPSAob3B0cyA9IGRlZmF1bHRzKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgLy8gb25seSBvcGVyYXRlIG9uIGFycmF5c1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN1YnN0aXR1dGlvbikpIHtcbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gc3Vic3RpdHV0aW9uLmxlbmd0aDtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IG9wdHMuc2VwYXJhdG9yO1xuICAgICAgY29uc3QgY29uanVuY3Rpb24gPSBvcHRzLmNvbmp1bmN0aW9uO1xuICAgICAgY29uc3Qgc2VyaWFsID0gb3B0cy5zZXJpYWw7XG4gICAgICAvLyBqb2luIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgaW50byBhIHN0cmluZyB3aGVyZSBlYWNoIGl0ZW0gaXMgc2VwYXJhdGVkIGJ5IHNlcGFyYXRvclxuICAgICAgLy8gYmUgc3VyZSB0byBtYWludGFpbiBpbmRlbnRhdGlvblxuICAgICAgY29uc3QgaW5kZW50ID0gcmVzdWx0U29GYXIubWF0Y2goLyhcXG4/W15cXFNcXG5dKykkLyk7XG4gICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi5qb2luKHNlcGFyYXRvciArIGluZGVudFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24uam9pbihzZXBhcmF0b3IgKyAnICcpO1xuICAgICAgfVxuICAgICAgLy8gaWYgY29uanVuY3Rpb24gaXMgc2V0LCByZXBsYWNlIHRoZSBsYXN0IHNlcGFyYXRvciB3aXRoIGNvbmp1bmN0aW9uLCBidXQgb25seSBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHN1YnN0aXR1dGlvblxuICAgICAgaWYgKGNvbmp1bmN0aW9uICYmIGFycmF5TGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBzZXBhcmF0b3JJbmRleCA9IHN1YnN0aXR1dGlvbi5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xuICAgICAgICBzdWJzdGl0dXRpb24gPVxuICAgICAgICAgIHN1YnN0aXR1dGlvbi5zbGljZSgwLCBzZXBhcmF0b3JJbmRleCkgK1xuICAgICAgICAgIChzZXJpYWwgPyBzZXBhcmF0b3IgOiAnJykgK1xuICAgICAgICAgICcgJyArXG4gICAgICAgICAgY29uanVuY3Rpb24gK1xuICAgICAgICAgIHN1YnN0aXR1dGlvbi5zbGljZShzZXBhcmF0b3JJbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGlubGluZUFycmF5VHJhbnNmb3JtZXI7XG4iXX0=

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineLists/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _inlineLists__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _inlineLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineLists/inlineLists.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVMaXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2lubGluZUxpc3RzJztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineLists/inlineLists.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");





var inlineLists = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"](_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__["default"], _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inlineLists);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVMaXN0cy9pbmxpbmVMaXN0cy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwiaW5saW5lTGlzdHMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVAsTUFBd0IsZ0JBQXhCO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0MscUJBQVAsTUFBa0MsMEJBQWxDOztBQUVBLElBQU1DLGNBQWMsSUFBSUosV0FBSixDQUNsQkUsc0JBRGtCLEVBRWxCRCxzQkFGa0IsRUFHbEJFLHFCQUhrQixDQUFwQjs7QUFNQSxlQUFlQyxXQUFmIiwiZmlsZSI6ImlubGluZUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGlubGluZUxpc3RzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyLFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmxpbmVMaXN0cztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLine/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _oneLine__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _oneLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLine/oneLine.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsVztxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZSc7XG4iXX0=

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLine/oneLine.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceResultTransformer/index.js");




var oneLine = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_replaceResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"])(/(?:\n(?:\s*))+/g, ' '), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneLine);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lL29uZUxpbmUuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJvbmVMaW5lIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyxVQUFVLElBQUlILFdBQUosQ0FDZEUseUJBQXlCLGlCQUF6QixFQUE0QyxHQUE1QyxDQURjLEVBRWRELHFCQUZjLENBQWhCOztBQUtBLGVBQWVFLE9BQWYiLCJmaWxlIjoib25lTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmUgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxuKD86XFxzKikpKy9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaLists/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _oneLineCommaLists__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _oneLineCommaLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLHFCO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0cyc7XG4iXX0=

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceResultTransformer/index.js");





var oneLineCommaLists = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__["default"])({ separator: ',' }), (0,_replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"])(/(?:\s+)/g, ' '), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneLineCommaLists);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0cy9vbmVMaW5lQ29tbWFMaXN0cy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJvbmVMaW5lQ29tbWFMaXN0cyIsInNlcGFyYXRvciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7QUFDQSxPQUFPQyx3QkFBUCxNQUFxQyw2QkFBckM7O0FBRUEsSUFBTUMsb0JBQW9CLElBQUlKLFdBQUosQ0FDeEJDLHVCQUF1QixFQUFFSSxXQUFXLEdBQWIsRUFBdkIsQ0FEd0IsRUFFeEJGLHlCQUF5QixVQUF6QixFQUFxQyxHQUFyQyxDQUZ3QixFQUd4QkQscUJBSHdCLENBQTFCOztBQU1BLGVBQWVFLGlCQUFmIiwiZmlsZSI6Im9uZUxpbmVDb21tYUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lQ29tbWFMaXN0cyA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnIH0pLFxuICByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIoLyg/OlxccyspL2csICcgJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVDb21tYUxpc3RzO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaListsAnd/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _oneLineCommaListsAnd__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _oneLineCommaListsAnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c0FuZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLHdCO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0c0FuZCc7XG4iXX0=

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceResultTransformer/index.js");





var oneLineCommaListsAnd = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__["default"])({ separator: ',', conjunction: 'and' }), (0,_replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"])(/(?:\s+)/g, ' '), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneLineCommaListsAnd);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c0FuZC9vbmVMaW5lQ29tbWFMaXN0c0FuZC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJvbmVMaW5lQ29tbWFMaXN0c0FuZCIsInNlcGFyYXRvciIsImNvbmp1bmN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyx1QkFBdUIsSUFBSUosV0FBSixDQUMzQkMsdUJBQXVCLEVBQUVJLFdBQVcsR0FBYixFQUFrQkMsYUFBYSxLQUEvQixFQUF2QixDQUQyQixFQUUzQkgseUJBQXlCLFVBQXpCLEVBQXFDLEdBQXJDLENBRjJCLEVBRzNCRCxxQkFIMkIsQ0FBN0I7O0FBTUEsZUFBZUUsb0JBQWYiLCJmaWxlIjoib25lTGluZUNvbW1hTGlzdHNBbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmVDb21tYUxpc3RzQW5kID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnYW5kJyB9KSxcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXHMrKS9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lQ29tbWFMaXN0c0FuZDtcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaListsOr/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _oneLineCommaListsOr__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _oneLineCommaListsOr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c09yL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsdUI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmVDb21tYUxpc3RzT3InO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceResultTransformer/index.js");





var oneLineCommaListsOr = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__["default"])({ separator: ',', conjunction: 'or' }), (0,_replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"])(/(?:\s+)/g, ' '), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneLineCommaListsOr);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c09yL29uZUxpbmVDb21tYUxpc3RzT3IuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwicmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIiwib25lTGluZUNvbW1hTGlzdHNPciIsInNlcGFyYXRvciIsImNvbmp1bmN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyxzQkFBc0IsSUFBSUosV0FBSixDQUMxQkMsdUJBQXVCLEVBQUVJLFdBQVcsR0FBYixFQUFrQkMsYUFBYSxJQUEvQixFQUF2QixDQUQwQixFQUUxQkgseUJBQXlCLFVBQXpCLEVBQXFDLEdBQXJDLENBRjBCLEVBRzFCRCxxQkFIMEIsQ0FBNUI7O0FBTUEsZUFBZUUsbUJBQWYiLCJmaWxlIjoib25lTGluZUNvbW1hTGlzdHNPci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgb25lTGluZUNvbW1hTGlzdHNPciA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnLCBjb25qdW5jdGlvbjogJ29yJyB9KSxcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXHMrKS9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lQ29tbWFMaXN0c09yO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineInlineLists/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _oneLineInlineLists__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _oneLineInlineLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lSW5saW5lTGlzdHMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixzQjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZUlubGluZUxpc3RzJztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceResultTransformer/index.js");





var oneLineInlineLists = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"](_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], (0,_replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"])(/(?:\s+)/g, ' '), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneLineInlineLists);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lSW5saW5lTGlzdHMvb25lTGluZUlubGluZUxpc3RzLmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVGFnIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsIm9uZUxpbmVJbmxpbmVMaXN0cyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7QUFDQSxPQUFPQyx3QkFBUCxNQUFxQyw2QkFBckM7O0FBRUEsSUFBTUMscUJBQXFCLElBQUlKLFdBQUosQ0FDekJDLHNCQUR5QixFQUV6QkUseUJBQXlCLFVBQXpCLEVBQXFDLEdBQXJDLENBRnlCLEVBR3pCRCxxQkFIeUIsQ0FBM0I7O0FBTUEsZUFBZUUsa0JBQWYiLCJmaWxlIjoib25lTGluZUlubGluZUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lSW5saW5lTGlzdHMgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIsXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxzKykvZywgJyAnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgb25lTGluZUlubGluZUxpc3RzO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineTrim/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _oneLineTrim__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _oneLineTrim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineTrim/oneLineTrim.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lVHJpbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmVUcmltJztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineTrim/oneLineTrim.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceResultTransformer/index.js");




var oneLineTrim = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_replaceResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"])(/(?:\n\s*)/g, ''), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneLineTrim);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lVHJpbS9vbmVMaW5lVHJpbS5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsIm9uZUxpbmVUcmltIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyxjQUFjLElBQUlILFdBQUosQ0FDbEJFLHlCQUF5QixZQUF6QixFQUF1QyxFQUF2QyxDQURrQixFQUVsQkQscUJBRmtCLENBQXBCOztBQUtBLGVBQWVFLFdBQWYiLCJmaWxlIjoib25lTGluZVRyaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lVHJpbSA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXG5cXHMqKS9nLCAnJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVUcmltO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _removeNonPrintingValuesTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _removeNonPrintingValuesTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0Isc0M7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXInO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isValidValue = function isValidValue(x) {
  return x != null && !Number.isNaN(x) && typeof x !== 'boolean';
};

var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer() {
  return {
    onSubstitution: function onSubstitution(substitution) {
      if (Array.isArray(substitution)) {
        return substitution.filter(isValidValue);
      }
      if (isValidValue(substitution)) {
        return substitution;
      }
      return '';
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeNonPrintingValuesTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsiaXNWYWxpZFZhbHVlIiwieCIsIk51bWJlciIsImlzTmFOIiwicmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lciIsIm9uU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUNuQkMsS0FBSyxJQUFMLElBQWEsQ0FBQ0MsT0FBT0MsS0FBUCxDQUFhRixDQUFiLENBQWQsSUFBaUMsT0FBT0EsQ0FBUCxLQUFhLFNBRDNCO0FBQUEsQ0FBckI7O0FBR0EsSUFBTUcscUNBQXFDLFNBQXJDQSxrQ0FBcUM7QUFBQSxTQUFPO0FBQ2hEQyxrQkFEZ0QsMEJBQ2pDQyxZQURpQyxFQUNuQjtBQUMzQixVQUFJQyxNQUFNQyxPQUFOLENBQWNGLFlBQWQsQ0FBSixFQUFpQztBQUMvQixlQUFPQSxhQUFhRyxNQUFiLENBQW9CVCxZQUFwQixDQUFQO0FBQ0Q7QUFDRCxVQUFJQSxhQUFhTSxZQUFiLENBQUosRUFBZ0M7QUFDOUIsZUFBT0EsWUFBUDtBQUNEO0FBQ0QsYUFBTyxFQUFQO0FBQ0Q7QUFUK0MsR0FBUDtBQUFBLENBQTNDOztBQVlBLGVBQWVGLGtDQUFmIiwiZmlsZSI6InJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc1ZhbGlkVmFsdWUgPSB4ID0+XG4gIHggIT0gbnVsbCAmJiAhTnVtYmVyLmlzTmFOKHgpICYmIHR5cGVvZiB4ICE9PSAnYm9vbGVhbic7XG5cbmNvbnN0IHJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIgPSAoKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdWJzdGl0dXRpb24pKSB7XG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLmZpbHRlcihpc1ZhbGlkVmFsdWUpO1xuICAgIH1cbiAgICBpZiAoaXNWYWxpZFZhbHVlKHN1YnN0aXR1dGlvbikpIHtcbiAgICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceResultTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQiw0QjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
 * @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
 * @param  {*}               replaceWith - the replacement value
 * @return {Object}                      - a TemplateTag transformer
 */
var replaceResultTransformer = function replaceResultTransformer(replaceWhat, replaceWith) {
  return {
    onEndResult: function onEndResult(endResult) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceResultTransformer requires at least 2 arguments.');
      }
      return endResult.replace(replaceWhat, replaceWith);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceResultTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIvcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsInJlcGxhY2VXaGF0IiwicmVwbGFjZVdpdGgiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsIkVycm9yIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BLElBQU1BLDJCQUEyQixTQUEzQkEsd0JBQTJCLENBQUNDLFdBQUQsRUFBY0MsV0FBZDtBQUFBLFNBQStCO0FBQzlEQyxlQUQ4RCx1QkFDbERDLFNBRGtELEVBQ3ZDO0FBQ3JCLFVBQUlILGVBQWUsSUFBZixJQUF1QkMsZUFBZSxJQUExQyxFQUFnRDtBQUM5QyxjQUFNLElBQUlHLEtBQUosQ0FDSix5REFESSxDQUFOO0FBR0Q7QUFDRCxhQUFPRCxVQUFVRSxPQUFWLENBQWtCTCxXQUFsQixFQUErQkMsV0FBL0IsQ0FBUDtBQUNEO0FBUjZELEdBQS9CO0FBQUEsQ0FBakM7O0FBV0EsZUFBZUYsd0JBQWYiLCJmaWxlIjoicmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXBsYWNlcyB0YWJzLCBuZXdsaW5lcyBhbmQgc3BhY2VzIHdpdGggdGhlIGNob3NlbiB2YWx1ZSB3aGVuIHRoZXkgb2NjdXIgaW4gc2VxdWVuY2VzXG4gKiBAcGFyYW0gIHsoU3RyaW5nfFJlZ0V4cCl9IHJlcGxhY2VXaGF0IC0gdGhlIHZhbHVlIG9yIHBhdHRlcm4gdGhhdCBzaG91bGQgYmUgcmVwbGFjZWRcbiAqIEBwYXJhbSAgeyp9ICAgICAgICAgICAgICAgcmVwbGFjZVdpdGggLSB0aGUgcmVwbGFjZW1lbnQgdmFsdWVcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciA9IChyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmIChyZXBsYWNlV2hhdCA9PSBudWxsIHx8IHJlcGxhY2VXaXRoID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciByZXF1aXJlcyBhdCBsZWFzdCAyIGFyZ3VtZW50cy4nLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceStringTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _replaceStringTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _replaceStringTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQiw0QjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyJztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var replaceStringTransformer = function replaceStringTransformer(replaceWhat, replaceWith) {
  return {
    onString: function onString(str) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceStringTransformer requires at least 2 arguments.');
      }

      return str.replace(replaceWhat, replaceWith);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceStringTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXIvcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lciIsInJlcGxhY2VXaGF0IiwicmVwbGFjZVdpdGgiLCJvblN0cmluZyIsInN0ciIsIkVycm9yIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsMkJBQTJCLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsV0FBRCxFQUFjQyxXQUFkO0FBQUEsU0FBK0I7QUFDOURDLFlBRDhELG9CQUNyREMsR0FEcUQsRUFDaEQ7QUFDWixVQUFJSCxlQUFlLElBQWYsSUFBdUJDLGVBQWUsSUFBMUMsRUFBZ0Q7QUFDOUMsY0FBTSxJQUFJRyxLQUFKLENBQ0oseURBREksQ0FBTjtBQUdEOztBQUVELGFBQU9ELElBQUlFLE9BQUosQ0FBWUwsV0FBWixFQUF5QkMsV0FBekIsQ0FBUDtBQUNEO0FBVDZELEdBQS9CO0FBQUEsQ0FBakM7O0FBWUEsZUFBZUYsd0JBQWYiLCJmaWxlIjoicmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyID0gKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCkgPT4gKHtcbiAgb25TdHJpbmcoc3RyKSB7XG4gICAgaWYgKHJlcGxhY2VXaGF0ID09IG51bGwgfHwgcmVwbGFjZVdpdGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyIHJlcXVpcmVzIGF0IGxlYXN0IDIgYXJndW1lbnRzLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzdHIucmVwbGFjZShyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lcjtcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceSubstitutionTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixrQztxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyJztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var replaceSubstitutionTransformer = function replaceSubstitutionTransformer(replaceWhat, replaceWith) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');
      }

      // Do not touch if null or undefined
      if (substitution == null) {
        return substitution;
      } else {
        return substitution.toString().replace(replaceWhat, replaceWith);
      }
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceSubstitutionTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIvcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciIsInJlcGxhY2VXaGF0IiwicmVwbGFjZVdpdGgiLCJvblN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInJlc3VsdFNvRmFyIiwiRXJyb3IiLCJ0b1N0cmluZyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLGlDQUFpQyxTQUFqQ0EsOEJBQWlDLENBQUNDLFdBQUQsRUFBY0MsV0FBZDtBQUFBLFNBQStCO0FBQ3BFQyxrQkFEb0UsMEJBQ3JEQyxZQURxRCxFQUN2Q0MsV0FEdUMsRUFDMUI7QUFDeEMsVUFBSUosZUFBZSxJQUFmLElBQXVCQyxlQUFlLElBQTFDLEVBQWdEO0FBQzlDLGNBQU0sSUFBSUksS0FBSixDQUNKLCtEQURJLENBQU47QUFHRDs7QUFFRDtBQUNBLFVBQUlGLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QixlQUFPQSxZQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0EsYUFBYUcsUUFBYixHQUF3QkMsT0FBeEIsQ0FBZ0NQLFdBQWhDLEVBQTZDQyxXQUE3QyxDQUFQO0FBQ0Q7QUFDRjtBQWRtRSxHQUEvQjtBQUFBLENBQXZDOztBQWlCQSxlQUFlRiw4QkFBZiIsImZpbGUiOiJyZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIgPSAocmVwbGFjZVdoYXQsIHJlcGxhY2VXaXRoKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgaWYgKHJlcGxhY2VXaGF0ID09IG51bGwgfHwgcmVwbGFjZVdpdGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIHJlcXVpcmVzIGF0IGxlYXN0IDIgYXJndW1lbnRzLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIERvIG5vdCB0b3VjaCBpZiBudWxsIG9yIHVuZGVmaW5lZFxuICAgIGlmIChzdWJzdGl0dXRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi50b1N0cmluZygpLnJlcGxhY2UocmVwbGFjZVdoYXQsIHJlcGxhY2VXaXRoKTtcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/safeHtml/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _safeHtml__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _safeHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/safeHtml/safeHtml.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWZlSHRtbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLFk7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3NhZmVIdG1sJztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/safeHtml/safeHtml.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _splitStringTransformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/splitStringTransformer/index.js");
/* harmony import */ var _replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceSubstitutionTransformer/index.js");







var safeHtml = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_splitStringTransformer__WEBPACK_IMPORTED_MODULE_4__["default"])('\n'), _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__["default"], _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__["default"])(/&/g, '&amp;'), (0,_replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__["default"])(/</g, '&lt;'), (0,_replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__["default"])(/>/g, '&gt;'), (0,_replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__["default"])(/"/g, '&quot;'), (0,_replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__["default"])(/'/g, '&#x27;'), (0,_replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__["default"])(/`/g, '&#x60;'));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (safeHtml);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWZlSHRtbC9zYWZlSHRtbC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsInJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciIsInNhZmVIdG1sIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLDhCQUFQLE1BQTJDLG1DQUEzQzs7QUFFQSxJQUFNQyxXQUFXLElBQUlOLFdBQUosQ0FDZkksdUJBQXVCLElBQXZCLENBRGUsRUFFZkYsc0JBRmUsRUFHZkQsc0JBSGUsRUFJZkUscUJBSmUsRUFLZkUsK0JBQStCLElBQS9CLEVBQXFDLE9BQXJDLENBTGUsRUFNZkEsK0JBQStCLElBQS9CLEVBQXFDLE1BQXJDLENBTmUsRUFPZkEsK0JBQStCLElBQS9CLEVBQXFDLE1BQXJDLENBUGUsRUFRZkEsK0JBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBUmUsRUFTZkEsK0JBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBVGUsRUFVZkEsK0JBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBVmUsQ0FBakI7O0FBYUEsZUFBZUMsUUFBZiIsImZpbGUiOiJzYWZlSHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgZnJvbSAnLi4vc3BsaXRTdHJpbmdUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcic7XG5cbmNvbnN0IHNhZmVIdG1sID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyKCdcXG4nKSxcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcixcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLyYvZywgJyZhbXA7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvPC9nLCAnJmx0OycpLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLz4vZywgJyZndDsnKSxcbiAgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyKC9cIi9nLCAnJnF1b3Q7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvJy9nLCAnJiN4Mjc7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvYC9nLCAnJiN4NjA7JyksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzYWZlSHRtbDtcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/source/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/html/index.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2UvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixTO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi4vaHRtbCc7XG4iXX0=

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/splitStringTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _splitStringTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _splitStringTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsMEI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXInO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var splitStringTransformer = function splitStringTransformer(splitBy) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (splitBy != null && typeof splitBy === 'string') {
        if (typeof substitution === 'string' && substitution.includes(splitBy)) {
          substitution = substitution.split(splitBy);
        }
      } else {
        throw new Error('You need to specify a string character to split by.');
      }
      return substitution;
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (splitStringTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsIm9uU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwicmVzdWx0U29GYXIiLCJzcGxpdEJ5IiwiaW5jbHVkZXMiLCJzcGxpdCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSx5QkFBeUIsU0FBekJBLHNCQUF5QjtBQUFBLFNBQVk7QUFDekNDLGtCQUR5QywwQkFDMUJDLFlBRDBCLEVBQ1pDLFdBRFksRUFDQztBQUN4QyxVQUFJQyxXQUFXLElBQVgsSUFBbUIsT0FBT0EsT0FBUCxLQUFtQixRQUExQyxFQUFvRDtBQUNsRCxZQUFJLE9BQU9GLFlBQVAsS0FBd0IsUUFBeEIsSUFBb0NBLGFBQWFHLFFBQWIsQ0FBc0JELE9BQXRCLENBQXhDLEVBQXdFO0FBQ3RFRix5QkFBZUEsYUFBYUksS0FBYixDQUFtQkYsT0FBbkIsQ0FBZjtBQUNEO0FBQ0YsT0FKRCxNQUlPO0FBQ0wsY0FBTSxJQUFJRyxLQUFKLENBQVUscURBQVYsQ0FBTjtBQUNEO0FBQ0QsYUFBT0wsWUFBUDtBQUNEO0FBVndDLEdBQVo7QUFBQSxDQUEvQjs7QUFhQSxlQUFlRixzQkFBZiIsImZpbGUiOiJzcGxpdFN0cmluZ1RyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lciA9IHNwbGl0QnkgPT4gKHtcbiAgb25TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCByZXN1bHRTb0Zhcikge1xuICAgIGlmIChzcGxpdEJ5ICE9IG51bGwgJiYgdHlwZW9mIHNwbGl0QnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gJ3N0cmluZycgJiYgc3Vic3RpdHV0aW9uLmluY2x1ZGVzKHNwbGl0QnkpKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi5zcGxpdChzcGxpdEJ5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGEgc3RyaW5nIGNoYXJhY3RlciB0byBzcGxpdCBieS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndent/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _stripIndent__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _stripIndent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndent/stripIndent.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3N0cmlwSW5kZW50JztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndent/stripIndent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");




var stripIndent = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"](_stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripIndent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudC9zdHJpcEluZGVudC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJzdHJpcEluZGVudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsY0FBYyxJQUFJSCxXQUFKLENBQ2xCQyxzQkFEa0IsRUFFbEJDLHFCQUZrQixDQUFwQjs7QUFLQSxlQUFlQyxXQUFmIiwiZmlsZSI6InN0cmlwSW5kZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBzdHJpcEluZGVudCA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBJbmRlbnQ7XG4iXX0=

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudFRyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsMEI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * strips indentation from a template literal
 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
 * @return {Object}                  - a TemplateTag transformer
 */
var stripIndentTransformer = function stripIndentTransformer() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial';
  return {
    onEndResult: function onEndResult(endResult) {
      if (type === 'initial') {
        // remove the shortest leading indentation from each line
        var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
        var indent = match && Math.min.apply(Math, _toConsumableArray(match.map(function (el) {
          return el.length;
        })));
        if (indent) {
          var regexp = new RegExp('^.{' + indent + '}', 'gm');
          return endResult.replace(regexp, '');
        }
        return endResult;
      }
      if (type === 'all') {
        // remove all indentation from each line
        return endResult.replace(/^[^\S\n]+/gm, '');
      }
      throw new Error('Unknown type: ' + type);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripIndentTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudFRyYW5zZm9ybWVyL3N0cmlwSW5kZW50VHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsInR5cGUiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsIm1hdGNoIiwiaW5kZW50IiwiTWF0aCIsIm1pbiIsIm1hcCIsImVsIiwibGVuZ3RoIiwicmVnZXhwIiwiUmVnRXhwIiwicmVwbGFjZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztBQUtBLElBQU1BLHlCQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsTUFBQ0MsSUFBRCx1RUFBUSxTQUFSO0FBQUEsU0FBdUI7QUFDcERDLGVBRG9ELHVCQUN4Q0MsU0FEd0MsRUFDN0I7QUFDckIsVUFBSUYsU0FBUyxTQUFiLEVBQXdCO0FBQ3RCO0FBQ0EsWUFBTUcsUUFBUUQsVUFBVUMsS0FBVixDQUFnQixtQkFBaEIsQ0FBZDtBQUNBLFlBQU1DLFNBQVNELFNBQVNFLEtBQUtDLEdBQUwsZ0NBQVlILE1BQU1JLEdBQU4sQ0FBVTtBQUFBLGlCQUFNQyxHQUFHQyxNQUFUO0FBQUEsU0FBVixDQUFaLEVBQXhCO0FBQ0EsWUFBSUwsTUFBSixFQUFZO0FBQ1YsY0FBTU0sU0FBUyxJQUFJQyxNQUFKLFNBQWlCUCxNQUFqQixRQUE0QixJQUE1QixDQUFmO0FBQ0EsaUJBQU9GLFVBQVVVLE9BQVYsQ0FBa0JGLE1BQWxCLEVBQTBCLEVBQTFCLENBQVA7QUFDRDtBQUNELGVBQU9SLFNBQVA7QUFDRDtBQUNELFVBQUlGLFNBQVMsS0FBYixFQUFvQjtBQUNsQjtBQUNBLGVBQU9FLFVBQVVVLE9BQVYsQ0FBa0IsYUFBbEIsRUFBaUMsRUFBakMsQ0FBUDtBQUNEO0FBQ0QsWUFBTSxJQUFJQyxLQUFKLG9CQUEyQmIsSUFBM0IsQ0FBTjtBQUNEO0FBakJtRCxHQUF2QjtBQUFBLENBQS9COztBQW9CQSxlQUFlRCxzQkFBZiIsImZpbGUiOiJzdHJpcEluZGVudFRyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBzdHJpcHMgaW5kZW50YXRpb24gZnJvbSBhIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSAge1N0cmluZ30gdHlwZSA9ICdpbml0aWFsJyAtIHdoZXRoZXIgdG8gcmVtb3ZlIGFsbCBpbmRlbnRhdGlvbiBvciBqdXN0IGxlYWRpbmcgaW5kZW50YXRpb24uIGNhbiBiZSAnYWxsJyBvciAnaW5pdGlhbCdcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAtIGEgVGVtcGxhdGVUYWcgdHJhbnNmb3JtZXJcbiAqL1xuY29uc3Qgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciA9ICh0eXBlID0gJ2luaXRpYWwnKSA9PiAoe1xuICBvbkVuZFJlc3VsdChlbmRSZXN1bHQpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICAvLyByZW1vdmUgdGhlIHNob3J0ZXN0IGxlYWRpbmcgaW5kZW50YXRpb24gZnJvbSBlYWNoIGxpbmVcbiAgICAgIGNvbnN0IG1hdGNoID0gZW5kUmVzdWx0Lm1hdGNoKC9eW15cXFNcXG5dKig/PVxcUykvZ20pO1xuICAgICAgY29uc3QgaW5kZW50ID0gbWF0Y2ggJiYgTWF0aC5taW4oLi4ubWF0Y2gubWFwKGVsID0+IGVsLmxlbmd0aCkpO1xuICAgICAgaWYgKGluZGVudCkge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGBeLnske2luZGVudH19YCwgJ2dtJyk7XG4gICAgICAgIHJldHVybiBlbmRSZXN1bHQucmVwbGFjZShyZWdleHAsICcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbmRSZXN1bHQ7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnYWxsJykge1xuICAgICAgLy8gcmVtb3ZlIGFsbCBpbmRlbnRhdGlvbiBmcm9tIGVhY2ggbGluZVxuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9eW15cXFNcXG5dKy9nbSwgJycpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdHlwZTogJHt0eXBlfWApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXI7XG4iXX0=

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndents/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _stripIndents__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _stripIndents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndents/stripIndents.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudHMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixnQjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vc3RyaXBJbmRlbnRzJztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndents/stripIndents.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js");




var stripIndents = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"])('all'), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripIndents);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudHMvc3RyaXBJbmRlbnRzLmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVGFnIiwic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInN0cmlwSW5kZW50cyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsZUFBZSxJQUFJSCxXQUFKLENBQ25CQyx1QkFBdUIsS0FBdkIsQ0FEbUIsRUFFbkJDLHFCQUZtQixDQUFyQjs7QUFLQSxlQUFlQyxZQUFmIiwiZmlsZSI6InN0cmlwSW5kZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgc3RyaXBJbmRlbnRzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyKCdhbGwnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBJbmRlbnRzO1xuIl19

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _trimResultTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmltUmVzdWx0VHJhbnNmb3JtZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQix5QjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * TemplateTag transformer that trims whitespace on the end result of a tagged template
 * @param  {String} side = '' - The side of the string to trim. Can be 'start' or 'end' (alternatively 'left' or 'right')
 * @return {Object}           - a TemplateTag transformer
 */
var trimResultTransformer = function trimResultTransformer() {
  var side = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    onEndResult: function onEndResult(endResult) {
      if (side === '') {
        return endResult.trim();
      }

      side = side.toLowerCase();

      if (side === 'start' || side === 'left') {
        return endResult.replace(/^\s*/, '');
      }

      if (side === 'end' || side === 'right') {
        return endResult.replace(/\s*$/, '');
      }

      throw new Error('Side not supported: ' + side);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimResultTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmltUmVzdWx0VHJhbnNmb3JtZXIvdHJpbVJlc3VsdFRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInNpZGUiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0EsSUFBTUEsd0JBQXdCLFNBQXhCQSxxQkFBd0I7QUFBQSxNQUFDQyxJQUFELHVFQUFRLEVBQVI7QUFBQSxTQUFnQjtBQUM1Q0MsZUFENEMsdUJBQ2hDQyxTQURnQyxFQUNyQjtBQUNyQixVQUFJRixTQUFTLEVBQWIsRUFBaUI7QUFDZixlQUFPRSxVQUFVQyxJQUFWLEVBQVA7QUFDRDs7QUFFREgsYUFBT0EsS0FBS0ksV0FBTCxFQUFQOztBQUVBLFVBQUlKLFNBQVMsT0FBVCxJQUFvQkEsU0FBUyxNQUFqQyxFQUF5QztBQUN2QyxlQUFPRSxVQUFVRyxPQUFWLENBQWtCLE1BQWxCLEVBQTBCLEVBQTFCLENBQVA7QUFDRDs7QUFFRCxVQUFJTCxTQUFTLEtBQVQsSUFBa0JBLFNBQVMsT0FBL0IsRUFBd0M7QUFDdEMsZUFBT0UsVUFBVUcsT0FBVixDQUFrQixNQUFsQixFQUEwQixFQUExQixDQUFQO0FBQ0Q7O0FBRUQsWUFBTSxJQUFJQyxLQUFKLDBCQUFpQ04sSUFBakMsQ0FBTjtBQUNEO0FBakIyQyxHQUFoQjtBQUFBLENBQTlCOztBQW9CQSxlQUFlRCxxQkFBZiIsImZpbGUiOiJ0cmltUmVzdWx0VHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyIHRoYXQgdHJpbXMgd2hpdGVzcGFjZSBvbiB0aGUgZW5kIHJlc3VsdCBvZiBhIHRhZ2dlZCB0ZW1wbGF0ZVxuICogQHBhcmFtICB7U3RyaW5nfSBzaWRlID0gJycgLSBUaGUgc2lkZSBvZiB0aGUgc3RyaW5nIHRvIHRyaW0uIENhbiBiZSAnc3RhcnQnIG9yICdlbmQnIChhbHRlcm5hdGl2ZWx5ICdsZWZ0JyBvciAncmlnaHQnKVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciA9IChzaWRlID0gJycpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmIChzaWRlID09PSAnJykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC50cmltKCk7XG4gICAgfVxuXG4gICAgc2lkZSA9IHNpZGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChzaWRlID09PSAnc3RhcnQnIHx8IHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbiAgICB9XG5cbiAgICBpZiAoc2lkZSA9PT0gJ2VuZCcgfHwgc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNpZGUgbm90IHN1cHBvcnRlZDogJHtzaWRlfWApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lcjtcbiJdfQ==

/***/ }),

/***/ "./.yarn/cache/fast-deep-equal-npm-3.1.3-790edcfcf5-e21a9d8d84.zip/node_modules/fast-deep-equal/react.js":
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./.yarn/cache/jsurl-npm-0.1.5-9e17f93783-50b614908d.zip/node_modules/jsurl/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__("./.yarn/cache/jsurl-npm-0.1.5-9e17f93783-50b614908d.zip/node_modules/jsurl/lib/jsurl.js");

/***/ }),

/***/ "./.yarn/cache/jsurl-npm-0.1.5-9e17f93783-50b614908d.zip/node_modules/jsurl/lib/jsurl.js":
/***/ ((__unused_webpack_module, exports) => {

/**
 * Copyright (c) 2011 Bruno Jouhier <bruno.jouhier@sage.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
//
(function(exports) {
	"use strict";
	exports.stringify = function stringify(v) {
		function encode(s) {
			return !/[^\w-.]/.test(s) ? s : s.replace(/[^\w-.]/g, function(ch) {
				if (ch === '$') return '!';
				ch = ch.charCodeAt(0);
				// thanks to Douglas Crockford for the negative slice trick
				return ch < 0x100 ? '*' + ('00' + ch.toString(16)).slice(-2) : '**' + ('0000' + ch.toString(16)).slice(-4);
			});
		}

		var tmpAry;

		switch (typeof v) {
			case 'number':
				return isFinite(v) ? '~' + v : '~null';
			case 'boolean':
				return '~' + v;
			case 'string':
				return "~'" + encode(v);
			case 'object':
				if (!v) return '~null';

				tmpAry = [];

				if (Array.isArray(v)) {
					for (var i = 0; i < v.length; i++) {
						tmpAry[i] = stringify(v[i]) || '~null';
					}

					return '~(' + (tmpAry.join('') || '~') + ')';
				} else {
					for (var key in v) {
						if (v.hasOwnProperty(key)) {
							var val = stringify(v[key]);

							// skip undefined and functions
							if (val) {
								tmpAry.push(encode(key) + val);
							}
						}
					}

					return '~(' + tmpAry.join('~') + ')';
				}
			default:
				// function, undefined
				return;
		}
	};

	var reserved = {
		"true": true,
		"false": false,
		"null": null
	};

	exports.parse = function(s) {
		if (!s) return s;
		s = s.replace(/%(25)*27/g, "'");
		var i = 0,
			len = s.length;

		function eat(expected) {
			if (s.charAt(i) !== expected) throw new Error("bad JSURL syntax: expected " + expected + ", got " + (s && s.charAt(i)));
			i++;
		}

		function decode() {
			var beg = i,
				ch, r = "";
			while (i < len && (ch = s.charAt(i)) !== '~' && ch !== ')') {
				switch (ch) {
					case '*':
						if (beg < i) r += s.substring(beg, i);
						if (s.charAt(i + 1) === '*') r += String.fromCharCode(parseInt(s.substring(i + 2, i + 6), 16)), beg = (i += 6);
						else r += String.fromCharCode(parseInt(s.substring(i + 1, i + 3), 16)), beg = (i += 3);
						break;
					case '!':
						if (beg < i) r += s.substring(beg, i);
						r += '$', beg = ++i;
						break;
					default:
						i++;
				}
			}
			return r + s.substring(beg, i);
		}

		return (function parseOne() {
			var result, ch, beg;
			eat('~');
			switch (ch = s.charAt(i)) {
				case '(':
					i++;
					if (s.charAt(i) === '~') {
						result = [];
						if (s.charAt(i + 1) === ')') i++;
						else {
							do {
								result.push(parseOne());
							} while (s.charAt(i) === '~');
						}
					} else {
						result = {};
						if (s.charAt(i) !== ')') {
							do {
								var key = decode();
								result[key] = parseOne();
							} while (s.charAt(i) === '~' && ++i);
						}
					}
					eat(')');
					break;
				case "'":
					i++;
					result = decode();
					break;
				default:
					beg = i++;
					while (i < len && /[^)~]/.test(s.charAt(i)))
					i++;
					var sub = s.substring(beg, i);
					if (/[\d\-]/.test(ch)) {
						result = parseFloat(sub);
					} else {
						result = reserved[sub];
						if (typeof result === "undefined") throw new Error("bad value keyword: " + sub);
					}
			}
			return result;
		})();
	}

	exports.tryParse = function(s, def) {
		try {
			return exports.parse(s);
		} catch (ex) {
			return def;
		}
	}

})( true ? exports : (0));


/***/ })

}]);