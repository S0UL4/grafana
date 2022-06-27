"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["grafanaPlugin"],{

/***/ "./public/app/plugins/datasource/grafana/components/AnnotationQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnnotationQueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
/* harmony import */ var app_features_annotations_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/annotations/api.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const matchTooltipContent = 'Enabling this returns annotations that match any of the tags specified below';

const tagsTooltipContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
  children: "Specify a list of tags to match. To specify a key and value tag use `key:value` syntax."
});

const annotationTypes = [{
  label: 'Dashboard',
  value: _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaAnnotationType.Dashboard,
  description: 'Query for events created on this dashboard and show them in the panels where they where created'
}, {
  label: 'Tags',
  value: _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaAnnotationType.Tags,
  description: 'This will fetch any annotation events that match the tags filter'
}];
const limitOptions = [10, 50, 100, 200, 300, 500, 1000, 2000].map(limit => ({
  label: String(limit),
  value: limit
}));
function AnnotationQueryEditor({
  query,
  onChange
}) {
  const annotationQuery = query;
  const {
    limit,
    matchAny,
    tags,
    type
  } = annotationQuery;
  const styles = getStyles();

  const onFilterByChange = newValue => onChange(Object.assign({}, annotationQuery, {
    type: newValue.value
  }));

  const onMaxLimitChange = newValue => onChange(Object.assign({}, annotationQuery, {
    limit: newValue.value
  }));

  const onMatchAnyChange = newValue => onChange(Object.assign({}, annotationQuery, {
    matchAny: newValue.target.checked
  }));

  const onTagsChange = tags => onChange(Object.assign({}, annotationQuery, {
    tags
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      label: "Filter by",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
        inputId: "grafana-annotations__filter-by",
        options: annotationTypes,
        value: type,
        onChange: onFilterByChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      label: "Max limit",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
        inputId: "grafana-annotations__limit",
        width: 16,
        options: limitOptions,
        value: limit,
        onChange: onMaxLimitChange
      })
    }), type === _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaAnnotationType.Tags && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: "Match any",
        description: matchTooltipContent,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, {
          id: "grafana-annotations__match-any",
          value: matchAny,
          onChange: onMatchAnyChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: "Tags",
        description: tagsTooltipContent,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_3__.TagFilter, {
          allowCustomValue: true,
          inputId: "grafana-annotations__tags",
          onChange: onTagsChange,
          tagOptions: app_features_annotations_api__WEBPACK_IMPORTED_MODULE_4__.getAnnotationTags,
          tags: tags !== null && tags !== void 0 ? tags : []
        })
      })]
    })]
  });
}

const getStyles = () => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-width: 600px;
    `
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/grafana/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");
/* harmony import */ var _SearchEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/grafana/components/SearchEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Alert2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const labelWidth = 12;
class QueryEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      channels: [],
      channelFields: {}
    });

    _defineProperty(this, "queryTypes", [{
      label: 'Random Walk',
      value: _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaQueryType.RandomWalk,
      description: 'Random signal within the selected time range'
    }, {
      label: 'Live Measurements',
      value: _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaQueryType.LiveMeasurements,
      description: 'Stream real-time measurements from Grafana'
    }, {
      label: 'List public files',
      value: _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaQueryType.List,
      description: 'Show directory listings for public resources'
    }]);

    _defineProperty(this, "onQueryTypeChange", sel => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      onChange(Object.assign({}, query, {
        queryType: sel.value
      }));
      onRunQuery(); // Reload the channel list

      this.loadChannelInfo();
    });

    _defineProperty(this, "onChannelChange", sel => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      onChange(Object.assign({}, query, {
        channel: sel === null || sel === void 0 ? void 0 : sel.value
      }));
      onRunQuery();
    });

    _defineProperty(this, "onFieldNamesChange", item => {
      var _query$filter, _query$filter$fields;

      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      let fields = [];

      if (Array.isArray(item)) {
        fields = item.map(v => v.value);
      } else if (item.value) {
        fields = [item.value];
      } // When adding the first field, also add time (if it exists)


      if (fields.length === 1 && !((_query$filter = query.filter) !== null && _query$filter !== void 0 && (_query$filter$fields = _query$filter.fields) !== null && _query$filter$fields !== void 0 && _query$filter$fields.length) && query.channel) {
        var _this$state$channelFi;

        const names = (_this$state$channelFi = this.state.channelFields[query.channel]) !== null && _this$state$channelFi !== void 0 ? _this$state$channelFi : [];
        const tf = names.find(f => f.value === 'time' || f.value === 'Time');

        if (tf && tf.value && tf.value !== fields[0]) {
          fields = [tf.value, ...fields];
        }
      }

      onChange(Object.assign({}, query, {
        filter: Object.assign({}, query.filter, {
          fields
        })
      }));
      onRunQuery();
    });

    _defineProperty(this, "checkAndUpdateValue", (key, txt) => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;

      if (key === 'buffer') {
        let buffer;

        if (txt) {
          try {
            buffer = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.intervalToSeconds(txt) * 1000;
          } catch (err) {
            console.warn('ERROR', err);
          }
        }

        onChange(Object.assign({}, query, {
          buffer
        }));
      } else {
        onChange(Object.assign({}, query, {
          [key]: txt
        }));
      }

      onRunQuery();
    });

    _defineProperty(this, "handleEnterKey", e => {
      if (e.key !== 'Enter') {
        return;
      }

      this.checkAndUpdateValue('buffer', e.target.value);
    });

    _defineProperty(this, "handleBlur", e => {
      this.checkAndUpdateValue('buffer', e.target.value);
    });

    _defineProperty(this, "onFolderChanged", sel => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      onChange(Object.assign({}, query, {
        path: sel === null || sel === void 0 ? void 0 : sel.value
      }));
      onRunQuery();
    });

    _defineProperty(this, "onSearchChange", search => {
      const {
        query,
        onChange,
        onRunQuery
      } = this.props;
      onChange(Object.assign({}, query, {
        search
      }));
      onRunQuery();
    });

    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.panelTitleSearch && app_core_config__WEBPACK_IMPORTED_MODULE_4__.hasAlphaPanels) {
      this.queryTypes.push({
        label: 'Search',
        value: _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaQueryType.Search,
        description: 'Search for grafana resources'
      });
    }
  }

  loadChannelInfo() {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch({
      url: 'api/live/list'
    }).subscribe({
      next: v => {
        var _v$data;

        const channelInfo = (_v$data = v.data) === null || _v$data === void 0 ? void 0 : _v$data.channels;

        if (channelInfo !== null && channelInfo !== void 0 && channelInfo.length) {
          const channelFields = {};
          const channels = channelInfo.map(c => {
            if (c.data) {
              const distinctFields = new Set();
              const frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dataFrameFromJSON)(c.data);

              for (const f of frame.fields) {
                distinctFields.add(f.name);
              }

              channelFields[c.channel] = Array.from(distinctFields).map(n => ({
                value: n,
                label: n
              }));
            }

            return {
              value: c.channel,
              label: c.channel + ' [' + c.minute_rate + ' msg/min]'
            };
          });
          this.setState({
            channelFields,
            channels
          });
        }
      }
    });
  }

  loadFolderInfo() {
    const query = {
      targets: [{
        queryType: _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaQueryType.List,
        refId: 'A'
      }]
    };
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().get('-- Grafana --').then(ds => {
      const gds = ds;
      gds.query(query).subscribe({
        next: rsp => {
          if (rsp.data.length) {
            const names = rsp.data[0].fields[0];
            const folders = names.values.toArray().map(v => ({
              value: v,
              label: v
            }));
            this.setState({
              folders
            });
          }
        }
      });
    });
  }

  componentDidMount() {
    this.loadChannelInfo();
  }

  renderMeasurementsQuery() {
    var _channelFields$channe;

    let {
      channel,
      filter,
      buffer
    } = this.props.query;
    let {
      channels,
      channelFields
    } = this.state;
    let currentChannel = channels.find(c => c.value === channel);

    if (channel && !currentChannel) {
      currentChannel = {
        value: channel,
        label: channel,
        description: `Connected to ${channel}`
      };
      channels = [currentChannel, ...channels];
    }

    const distinctFields = new Set();
    const fields = channel ? (_channelFields$channe = channelFields[channel]) !== null && _channelFields$channe !== void 0 ? _channelFields$channe : [] : []; // if (data && data.series?.length) {
    //   for (const frame of data.series) {
    //     for (const field of frame.fields) {
    //       if (distinctFields.has(field.name) || !field.name) {
    //         continue;
    //       }
    //       fields.push({
    //         value: field.name,
    //         label: field.name,
    //         description: `(${getFrameDisplayName(frame)} / ${field.type})`,
    //       });
    //       distinctFields.add(field.name);
    //     }
    //   }
    // }

    if (filter !== null && filter !== void 0 && filter.fields) {
      for (const f of filter.fields) {
        if (!distinctFields.has(f)) {
          fields.push({
            value: f,
            label: `${f} (not loaded)`,
            description: `Configured, but not found in the query results`
          });
          distinctFields.add(f);
        }
      }
    }

    let formattedTime = '';

    if (buffer) {
      formattedTime = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.secondsToHms(buffer / 1000);
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "gf-form",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Channel",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            options: channels,
            value: currentChannel || '',
            onChange: this.onChannelChange,
            allowCustomValue: true,
            backspaceRemovesValue: true,
            placeholder: "Select measurements channel",
            isClearable: true,
            noOptionsMessage: "Enter channel name",
            formatCreateLabel: input => `Connect to: ${input}`
          })
        })
      }), channel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "gf-form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Fields",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            options: fields,
            value: (filter === null || filter === void 0 ? void 0 : filter.fields) || [],
            onChange: this.onFieldNamesChange,
            allowCustomValue: true,
            backspaceRemovesValue: true,
            placeholder: "All fields",
            isClearable: true,
            noOptionsMessage: "Unable to list all fields",
            formatCreateLabel: input => `Field: ${input}`,
            isSearchable: true,
            isMulti: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Buffer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
            placeholder: "Auto",
            width: 12,
            defaultValue: formattedTime,
            onKeyDown: this.handleEnterKey,
            onBlur: this.handleBlur,
            spellCheck: false
          })
        })]
      }), _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        title: "Grafana Live - Measurements",
        severity: "info",
        children: "This supports real-time event streams in Grafana core. This feature is under heavy development. Expect the interfaces and structures to change as this becomes more production ready."
      }))]
    });
  }

  renderListPublicFiles() {
    let {
      path
    } = this.props.query;
    let {
      folders
    } = this.state;

    if (!folders) {
      folders = [];
      this.loadFolderInfo();
    }

    const currentFolder = folders.find(f => f.value === path);

    if (path && !currentFolder) {
      folders = [...folders, {
        value: path,
        label: path
      }];
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Path",
        grow: true,
        labelWidth: labelWidth,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          options: folders,
          value: currentFolder || '',
          onChange: this.onFolderChanged,
          allowCustomValue: true,
          backspaceRemovesValue: true,
          placeholder: "Select folder",
          isClearable: true,
          formatCreateLabel: input => `Folder: ${input}`
        })
      })
    });
  }

  render() {
    var _query$search;

    const query = Object.assign({}, _types__WEBPACK_IMPORTED_MODULE_5__.defaultQuery, this.props.query);
    const {
      queryType
    } = query;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [queryType === _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaQueryType.Search && (_Alert2 || (_Alert2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        title: "Grafana Search",
        severity: "info",
        children: "Using this datasource to call the new search system is experimental, and subject to change at any time without notice."
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Query type",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            options: this.queryTypes,
            value: this.queryTypes.find(v => v.value === queryType) || this.queryTypes[0],
            onChange: this.onQueryTypeChange
          })
        })
      }), queryType === _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaQueryType.LiveMeasurements && this.renderMeasurementsQuery(), queryType === _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaQueryType.List && this.renderListPublicFiles(), queryType === _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaQueryType.Search && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SearchEditor__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: (_query$search = query.search) !== null && _query$search !== void 0 ? _query$search : {},
        onChange: this.onSearchChange
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/grafana/components/SearchEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function SearchEditor({
  value,
  onChange
}) {
  var _value$query;

  const [json, setJSON] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_value$query = value.query) !== null && _value$query !== void 0 ? _value$query : '');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const emptySearchQuery = {
      query: '*',
      location: '',
      // general, etc
      ds_uid: '',
      sort: '',
      tags: [],
      kind: [],
      explain: false,
      facet: [{
        field: 'kind'
      }, {
        field: 'tags'
      }],
      from: 0,
      limit: 20
    };
    setJSON(JSON.stringify(Object.assign({}, emptySearchQuery, value), null, 2));
  }, [value]);

  const handleSearchBlur = e => {
    if (query !== value.query) {
      onChange(Object.assign({}, value, {
        query
      }));
    }
  };

  const handleSearchEnterKey = e => {
    if (e.key !== 'Enter') {
      return;
    }

    handleSearchBlur(e);
  };

  const onSaveSearchJSON = rawSearchJSON => {
    try {
      var _searchQuery$query;

      const searchQuery = JSON.parse(rawSearchJSON);
      onChange(searchQuery);
      setQuery((_searchQuery$query = searchQuery.query) !== null && _searchQuery$query !== void 0 ? _searchQuery$query : '');
    } catch (ex) {
      console.log('UNABLE TO parse search', rawSearchJSON, ex);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Query",
        grow: true,
        labelWidth: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          placeholder: "Everything",
          value: query,
          onChange: e => setQuery(e.currentTarget.value),
          onKeyDown: handleSearchEnterKey,
          onBlur: handleSearchBlur,
          spellCheck: false
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CodeEditor, {
      height: 300,
      language: "json",
      value: json,
      onBlur: onSaveSearchJSON,
      onSave: onSaveSearchJSON,
      showMiniMap: false,
      showLineNumbers: true
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/grafana/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaDatasource": () => (/* binding */ GrafanaDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_features_dashboard_state_DashboardMigrator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/state/DashboardMigrator.ts");
/* harmony import */ var _features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var _components_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/grafana/components/AnnotationQueryEditor.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");









let counter = 100;
class GrafanaDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourceWithBackend {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.annotations = {
      QueryEditor: _components_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_5__["default"],

      prepareAnnotation(json) {
        var _json$target, _json$type, _json$limit, _json$tags, _json$matchAny;

        // Previously, these properties lived outside of target
        // This should handle migrating them
        json.target = (_json$target = json.target) !== null && _json$target !== void 0 ? _json$target : {
          type: (_json$type = json.type) !== null && _json$type !== void 0 ? _json$type : _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaAnnotationType.Dashboard,
          limit: (_json$limit = json.limit) !== null && _json$limit !== void 0 ? _json$limit : 100,
          tags: (_json$tags = json.tags) !== null && _json$tags !== void 0 ? _json$tags : [],
          matchAny: (_json$matchAny = json.matchAny) !== null && _json$matchAny !== void 0 ? _json$matchAny : false
        }; // using spread syntax caused an infinite loop in StandardAnnotationQueryEditor

        return json;
      },

      prepareQuery(anno) {
        let datasource = undefined;

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(anno.datasource)) {
          const ref = (0,app_features_dashboard_state_DashboardMigrator__WEBPACK_IMPORTED_MODULE_3__.migrateDatasourceNameToRef)(anno.datasource, {
            returnDefaultAsNull: false
          });

          if (ref) {
            datasource = ref;
          }
        } else {
          datasource = anno.datasource;
        }

        return Object.assign({}, anno, {
          refId: anno.name,
          queryType: _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.Annotations,
          datasource
        });
      }

    };
  }

  query(request) {
    const results = [];
    const targets = [];
    const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)();

    for (const target of request.targets) {
      if (target.queryType === _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.Annotations) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(this.getAnnotations({
          range: request.range,
          rangeRaw: request.range.raw,
          annotation: target,
          dashboard: (0,_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_4__.getDashboardSrv)().getCurrent()
        }));
      }

      if (target.hide) {
        continue;
      }

      if (target.queryType === _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.LiveMeasurements) {
        var _request$maxDataPoint, _request$rangeRaw;

        let channel = templateSrv.replace(target.channel, request.scopedVars);
        const {
          filter
        } = target;
        const addr = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.parseLiveChannelAddress)(channel);

        if (!(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.isValidLiveChannelAddress)(addr)) {
          continue;
        }

        const buffer = {
          maxLength: (_request$maxDataPoint = request.maxDataPoints) !== null && _request$maxDataPoint !== void 0 ? _request$maxDataPoint : 500
        };

        if (target.buffer) {
          buffer.maxDelta = target.buffer;
          buffer.maxLength = buffer.maxLength * 2; //??
        } else if (((_request$rangeRaw = request.rangeRaw) === null || _request$rangeRaw === void 0 ? void 0 : _request$rangeRaw.to) === 'now') {
          buffer.maxDelta = request.range.to.valueOf() - request.range.from.valueOf();
        }

        results.push((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getGrafanaLiveSrv)().getDataStream({
          key: `${request.requestId}.${counter++}`,
          addr: addr,
          filter,
          buffer
        }));
      } else {
        if (!target.queryType) {
          target.queryType = _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.RandomWalk;
        }

        targets.push(target);
      }
    }

    if (targets.length) {
      results.push(super.query(Object.assign({}, request, {
        targets
      })));
    }

    if (results.length) {
      // With a single query just return the results
      if (results.length === 1) {
        return results[0];
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...results);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(); // nothing
  }

  listFiles(path) {
    return this.query({
      targets: [{
        refId: 'A',
        queryType: _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.List,
        path
      }]
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(v => {
      var _v$data$;

      const frame = (_v$data$ = v.data[0]) !== null && _v$data$ !== void 0 ? _v$data$ : new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.MutableDataFrame();
      return new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataFrameView(frame);
    }));
  }

  metricFindQuery(options) {
    return Promise.resolve([]);
  }

  async getAnnotations(options) {
    var _options$dashboard;

    const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)();
    const annotation = options.annotation;
    const target = annotation.target;
    const params = {
      from: options.range.from.valueOf(),
      to: options.range.to.valueOf(),
      limit: target.limit,
      tags: target.tags,
      matchAny: target.matchAny
    };

    if (target.type === _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaAnnotationType.Dashboard) {
      // if no dashboard id yet return
      if (!options.dashboard.id) {
        return Promise.resolve({
          data: []
        });
      } // filter by dashboard id


      params.dashboardId = options.dashboard.id; // remove tags filter if any

      delete params.tags;
    } else {
      // require at least one tag
      if (!Array.isArray(target.tags) || target.tags.length === 0) {
        return Promise.resolve({
          data: []
        });
      }

      const delimiter = '__delimiter__';
      const tags = [];

      for (const t of params.tags) {
        const renderedValues = templateSrv.replace(t, {}, value => {
          if (typeof value === 'string') {
            return value;
          }

          return value.join(delimiter);
        });

        for (const tt of renderedValues.split(delimiter)) {
          tags.push(tt);
        }
      }

      params.tags = tags;
    }

    const annotations = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get('/api/annotations', params, `grafana-data-source-annotations-${annotation.name}-${(_options$dashboard = options.dashboard) === null || _options$dashboard === void 0 ? void 0 : _options$dashboard.id}`);
    return {
      data: [(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toDataFrame)(annotations)]
    };
  }

  testDatasource() {
    return Promise.resolve();
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/grafana/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/grafana/components/QueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/grafana/datasource.ts");



const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_2__.GrafanaDatasource).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_1__.QueryEditor);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXZCLEVBQTZCO1FBQzNCLE1BQU1rTSxjQUFjLEdBQUc5QixXQUFXLENBQUNTLE9BQVosQ0FBb0JvQixDQUFwQixFQUF1QixFQUF2QixFQUE0QjlNLEtBQUQsSUFBZ0I7VUFDaEUsSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO1lBQzdCLE9BQU9BLEtBQVA7VUFDRDs7VUFFRCxPQUFPQSxLQUFLLENBQUNnTixJQUFOLENBQVdILFNBQVgsQ0FBUDtRQUNELENBTnNCLENBQXZCOztRQU9BLEtBQUssTUFBTUksRUFBWCxJQUFpQkYsY0FBYyxDQUFDRyxLQUFmLENBQXFCTCxTQUFyQixDQUFqQixFQUFrRDtVQUNoRGhNLElBQUksQ0FBQ2tFLElBQUwsQ0FBVWtJLEVBQVY7UUFDRDtNQUNGOztNQUNEUCxNQUFNLENBQUM3TCxJQUFQLEdBQWNBLElBQWQ7SUFDRDs7SUFFRCxNQUFNeUosV0FBVyxHQUFHLE1BQU16SSwrREFBYSxHQUFHdUUsR0FBaEIsQ0FDeEIsa0JBRHdCLEVBRXhCc0csTUFGd0IsRUFHdkIsbUNBQWtDcEIsVUFBVSxDQUFDMUYsSUFBSyxJQUFuRCxzQkFBc0QyRyxPQUFPLENBQUNoQixTQUE5RCx1REFBc0QsbUJBQW1Cb0IsRUFBRyxFQUhwRCxDQUExQjtJQUtBLE9BQU87TUFBRXJILElBQUksRUFBRSxDQUFDdUUsMERBQVcsQ0FBQ1MsV0FBRCxDQUFaO0lBQVIsQ0FBUDtFQUNEOztFQUVENkMsY0FBYyxHQUFHO0lBQ2YsT0FBT1gsT0FBTyxDQUFDQyxPQUFSLEVBQVA7RUFDRDs7QUFqTHdFOzs7Ozs7Ozs7Ozs7OztBQ2pDM0U7QUFFQTtBQUNBO0FBR08sTUFBTVksTUFBTSxHQUFHLElBQUlELDJEQUFKLENBQXNEaEQsMERBQXRELEVBQXlFa0QsY0FBekUsQ0FDcEI5SyxnRUFEb0IsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFmYW5hL2NvbXBvbmVudHMvQW5ub3RhdGlvblF1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhZmFuYS9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhZmFuYS9jb21wb25lbnRzL1NlYXJjaEVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYWZhbmEvZGF0YXNvdXJjZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhZmFuYS9tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmllbGQsIEZpZWxkU2V0LCBTZWxlY3QsIFN3aXRjaCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFRhZ0ZpbHRlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVGFnRmlsdGVyL1RhZ0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRBbm5vdGF0aW9uVGFncyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbm5vdGF0aW9ucy9hcGknO1xuXG5pbXBvcnQgeyBHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5LCBHcmFmYW5hQW5ub3RhdGlvblR5cGUsIEdyYWZhbmFRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgbWF0Y2hUb29sdGlwQ29udGVudCA9ICdFbmFibGluZyB0aGlzIHJldHVybnMgYW5ub3RhdGlvbnMgdGhhdCBtYXRjaCBhbnkgb2YgdGhlIHRhZ3Mgc3BlY2lmaWVkIGJlbG93JztcblxuY29uc3QgdGFnc1Rvb2x0aXBDb250ZW50ID0gKFxuICA8ZGl2PlNwZWNpZnkgYSBsaXN0IG9mIHRhZ3MgdG8gbWF0Y2guIFRvIHNwZWNpZnkgYSBrZXkgYW5kIHZhbHVlIHRhZyB1c2UgYGtleTp2YWx1ZWAgc3ludGF4LjwvZGl2PlxuKTtcblxuY29uc3QgYW5ub3RhdGlvblR5cGVzID0gW1xuICB7XG4gICAgbGFiZWw6ICdEYXNoYm9hcmQnLFxuICAgIHZhbHVlOiBHcmFmYW5hQW5ub3RhdGlvblR5cGUuRGFzaGJvYXJkLFxuICAgIGRlc2NyaXB0aW9uOiAnUXVlcnkgZm9yIGV2ZW50cyBjcmVhdGVkIG9uIHRoaXMgZGFzaGJvYXJkIGFuZCBzaG93IHRoZW0gaW4gdGhlIHBhbmVscyB3aGVyZSB0aGV5IHdoZXJlIGNyZWF0ZWQnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdUYWdzJyxcbiAgICB2YWx1ZTogR3JhZmFuYUFubm90YXRpb25UeXBlLlRhZ3MsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIHdpbGwgZmV0Y2ggYW55IGFubm90YXRpb24gZXZlbnRzIHRoYXQgbWF0Y2ggdGhlIHRhZ3MgZmlsdGVyJyxcbiAgfSxcbl07XG5cbmNvbnN0IGxpbWl0T3B0aW9ucyA9IFsxMCwgNTAsIDEwMCwgMjAwLCAzMDAsIDUwMCwgMTAwMCwgMjAwMF0ubWFwKChsaW1pdCkgPT4gKHtcbiAgbGFiZWw6IFN0cmluZyhsaW1pdCksXG4gIHZhbHVlOiBsaW1pdCxcbn0pKTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcXVlcnk6IEdyYWZhbmFRdWVyeTtcbiAgb25DaGFuZ2U6IChuZXdWYWx1ZTogR3JhZmFuYUFubm90YXRpb25RdWVyeSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5ub3RhdGlvblF1ZXJ5RWRpdG9yKHsgcXVlcnksIG9uQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IGFubm90YXRpb25RdWVyeSA9IHF1ZXJ5IGFzIEdyYWZhbmFBbm5vdGF0aW9uUXVlcnk7XG4gIGNvbnN0IHsgbGltaXQsIG1hdGNoQW55LCB0YWdzLCB0eXBlIH0gPSBhbm5vdGF0aW9uUXVlcnk7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcygpO1xuXG4gIGNvbnN0IG9uRmlsdGVyQnlDaGFuZ2UgPSAobmV3VmFsdWU6IFNlbGVjdGFibGVWYWx1ZTxHcmFmYW5hQW5ub3RhdGlvblR5cGU+KSA9PlxuICAgIG9uQ2hhbmdlKHtcbiAgICAgIC4uLmFubm90YXRpb25RdWVyeSxcbiAgICAgIHR5cGU6IG5ld1ZhbHVlLnZhbHVlISxcbiAgICB9KTtcblxuICBjb25zdCBvbk1heExpbWl0Q2hhbmdlID0gKG5ld1ZhbHVlOiBTZWxlY3RhYmxlVmFsdWU8bnVtYmVyPikgPT5cbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5hbm5vdGF0aW9uUXVlcnksXG4gICAgICBsaW1pdDogbmV3VmFsdWUudmFsdWUhLFxuICAgIH0pO1xuXG4gIGNvbnN0IG9uTWF0Y2hBbnlDaGFuZ2UgPSAobmV3VmFsdWU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgIG9uQ2hhbmdlKHtcbiAgICAgIC4uLmFubm90YXRpb25RdWVyeSxcbiAgICAgIG1hdGNoQW55OiBuZXdWYWx1ZS50YXJnZXQuY2hlY2tlZCxcbiAgICB9KTtcblxuICBjb25zdCBvblRhZ3NDaGFuZ2UgPSAodGFnczogc3RyaW5nW10pID0+XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4uYW5ub3RhdGlvblF1ZXJ5LFxuICAgICAgdGFncyxcbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZFNldCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEZpZWxkIGxhYmVsPVwiRmlsdGVyIGJ5XCI+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBpbnB1dElkPVwiZ3JhZmFuYS1hbm5vdGF0aW9uc19fZmlsdGVyLWJ5XCJcbiAgICAgICAgICBvcHRpb25zPXthbm5vdGF0aW9uVHlwZXN9XG4gICAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uRmlsdGVyQnlDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEZpZWxkIGxhYmVsPVwiTWF4IGxpbWl0XCI+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBpbnB1dElkPVwiZ3JhZmFuYS1hbm5vdGF0aW9uc19fbGltaXRcIlxuICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICBvcHRpb25zPXtsaW1pdE9wdGlvbnN9XG4gICAgICAgICAgdmFsdWU9e2xpbWl0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbk1heExpbWl0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIHt0eXBlID09PSBHcmFmYW5hQW5ub3RhdGlvblR5cGUuVGFncyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTWF0Y2ggYW55XCIgZGVzY3JpcHRpb249e21hdGNoVG9vbHRpcENvbnRlbnR9PlxuICAgICAgICAgICAgPFN3aXRjaCBpZD1cImdyYWZhbmEtYW5ub3RhdGlvbnNfX21hdGNoLWFueVwiIHZhbHVlPXttYXRjaEFueX0gb25DaGFuZ2U9e29uTWF0Y2hBbnlDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJUYWdzXCIgZGVzY3JpcHRpb249e3RhZ3NUb29sdGlwQ29udGVudH0+XG4gICAgICAgICAgICA8VGFnRmlsdGVyXG4gICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgICAgICAgaW5wdXRJZD1cImdyYWZhbmEtYW5ub3RhdGlvbnNfX3RhZ3NcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25UYWdzQ2hhbmdlfVxuICAgICAgICAgICAgICB0YWdPcHRpb25zPXtnZXRBbm5vdGF0aW9uVGFnc31cbiAgICAgICAgICAgICAgdGFncz17dGFncyA/PyBbXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvRmllbGRTZXQ+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgUXVlcnlFZGl0b3JQcm9wcyxcbiAgU2VsZWN0YWJsZVZhbHVlLFxuICBkYXRhRnJhbWVGcm9tSlNPTixcbiAgcmFuZ2VVdGlsLFxuICBEYXRhUXVlcnlSZXF1ZXN0LFxuICBEYXRhRnJhbWUsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnLCBnZXRCYWNrZW5kU3J2LCBnZXREYXRhU291cmNlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgU2VsZWN0LCBBbGVydCwgSW5wdXQsIElubGluZUZpZWxkUm93IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgaGFzQWxwaGFQYW5lbHMgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoUXVlcnkgfSBmcm9tICdhcHAvZmVhdHVyZXMvc2VhcmNoL3NlcnZpY2UnO1xuXG5pbXBvcnQgeyBHcmFmYW5hRGF0YXNvdXJjZSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgZGVmYXVsdFF1ZXJ5LCBHcmFmYW5hUXVlcnksIEdyYWZhbmFRdWVyeVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCBTZWFyY2hFZGl0b3IgZnJvbSAnLi9TZWFyY2hFZGl0b3InO1xuXG50eXBlIFByb3BzID0gUXVlcnlFZGl0b3JQcm9wczxHcmFmYW5hRGF0YXNvdXJjZSwgR3JhZmFuYVF1ZXJ5PjtcblxuY29uc3QgbGFiZWxXaWR0aCA9IDEyO1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBjaGFubmVsczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xuICBjaGFubmVsRmllbGRzOiBSZWNvcmQ8c3RyaW5nLCBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+O1xuICBmb2xkZXJzPzogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xufVxuXG5leHBvcnQgY2xhc3MgUXVlcnlFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZTogU3RhdGUgPSB7IGNoYW5uZWxzOiBbXSwgY2hhbm5lbEZpZWxkczoge30gfTtcblxuICBxdWVyeVR5cGVzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8R3JhZmFuYVF1ZXJ5VHlwZT4+ID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnUmFuZG9tIFdhbGsnLFxuICAgICAgdmFsdWU6IEdyYWZhbmFRdWVyeVR5cGUuUmFuZG9tV2FsayxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmFuZG9tIHNpZ25hbCB3aXRoaW4gdGhlIHNlbGVjdGVkIHRpbWUgcmFuZ2UnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdMaXZlIE1lYXN1cmVtZW50cycsXG4gICAgICB2YWx1ZTogR3JhZmFuYVF1ZXJ5VHlwZS5MaXZlTWVhc3VyZW1lbnRzLFxuICAgICAgZGVzY3JpcHRpb246ICdTdHJlYW0gcmVhbC10aW1lIG1lYXN1cmVtZW50cyBmcm9tIEdyYWZhbmEnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdMaXN0IHB1YmxpYyBmaWxlcycsXG4gICAgICB2YWx1ZTogR3JhZmFuYVF1ZXJ5VHlwZS5MaXN0LFxuICAgICAgZGVzY3JpcHRpb246ICdTaG93IGRpcmVjdG9yeSBsaXN0aW5ncyBmb3IgcHVibGljIHJlc291cmNlcycsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpZiAoY29uZmlnLmZlYXR1cmVUb2dnbGVzLnBhbmVsVGl0bGVTZWFyY2ggJiYgaGFzQWxwaGFQYW5lbHMpIHtcbiAgICAgIHRoaXMucXVlcnlUeXBlcy5wdXNoKHtcbiAgICAgICAgbGFiZWw6ICdTZWFyY2gnLFxuICAgICAgICB2YWx1ZTogR3JhZmFuYVF1ZXJ5VHlwZS5TZWFyY2gsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2VhcmNoIGZvciBncmFmYW5hIHJlc291cmNlcycsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBsb2FkQ2hhbm5lbEluZm8oKSB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAuZmV0Y2goeyB1cmw6ICdhcGkvbGl2ZS9saXN0JyB9KVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICh2OiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGFubmVsSW5mbyA9IHYuZGF0YT8uY2hhbm5lbHMgYXMgYW55W107XG4gICAgICAgICAgaWYgKGNoYW5uZWxJbmZvPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5uZWxGaWVsZHM6IFJlY29yZDxzdHJpbmcsIEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4gPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5uZWxzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPSBjaGFubmVsSW5mby5tYXAoKGMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGMuZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RpbmN0RmllbGRzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBkYXRhRnJhbWVGcm9tSlNPTihjLmRhdGEpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiBmcmFtZS5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgIGRpc3RpbmN0RmllbGRzLmFkZChmLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGFubmVsRmllbGRzW2MuY2hhbm5lbF0gPSBBcnJheS5mcm9tKGRpc3RpbmN0RmllbGRzKS5tYXAoKG4pID0+ICh7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBuLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBjLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGMuY2hhbm5lbCArICcgWycgKyBjLm1pbnV0ZV9yYXRlICsgJyBtc2cvbWluXScsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYW5uZWxGaWVsZHMsIGNoYW5uZWxzIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICB9XG5cbiAgbG9hZEZvbGRlckluZm8oKSB7XG4gICAgY29uc3QgcXVlcnk6IERhdGFRdWVyeVJlcXVlc3Q8R3JhZmFuYVF1ZXJ5PiA9IHtcbiAgICAgIHRhcmdldHM6IFt7IHF1ZXJ5VHlwZTogR3JhZmFuYVF1ZXJ5VHlwZS5MaXN0LCByZWZJZDogJ0EnIH1dLFxuICAgIH0gYXMgYW55O1xuXG4gICAgZ2V0RGF0YVNvdXJjZVNydigpXG4gICAgICAuZ2V0KCctLSBHcmFmYW5hIC0tJylcbiAgICAgIC50aGVuKChkcykgPT4ge1xuICAgICAgICBjb25zdCBnZHMgPSBkcyBhcyBHcmFmYW5hRGF0YXNvdXJjZTtcbiAgICAgICAgZ2RzLnF1ZXJ5KHF1ZXJ5KS5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6IChyc3ApID0+IHtcbiAgICAgICAgICAgIGlmIChyc3AuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY29uc3QgbmFtZXMgPSAocnNwLmRhdGFbMF0gYXMgRGF0YUZyYW1lKS5maWVsZHNbMF07XG4gICAgICAgICAgICAgIGNvbnN0IGZvbGRlcnMgPSBuYW1lcy52YWx1ZXMudG9BcnJheSgpLm1hcCgodikgPT4gKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgICAgICAgICBsYWJlbDogdixcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9sZGVycyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5sb2FkQ2hhbm5lbEluZm8oKTtcbiAgfVxuXG4gIG9uUXVlcnlUeXBlQ2hhbmdlID0gKHNlbDogU2VsZWN0YWJsZVZhbHVlPEdyYWZhbmFRdWVyeVR5cGU+KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcXVlcnksIG9uUnVuUXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcXVlcnlUeXBlOiBzZWwudmFsdWUhIH0pO1xuICAgIG9uUnVuUXVlcnkoKTtcblxuICAgIC8vIFJlbG9hZCB0aGUgY2hhbm5lbCBsaXN0XG4gICAgdGhpcy5sb2FkQ2hhbm5lbEluZm8oKTtcbiAgfTtcblxuICBvbkNoYW5uZWxDaGFuZ2UgPSAoc2VsOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPikgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHF1ZXJ5LCBvblJ1blF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIGNoYW5uZWw6IHNlbD8udmFsdWUgfSk7XG4gICAgb25SdW5RdWVyeSgpO1xuICB9O1xuXG4gIG9uRmllbGROYW1lc0NoYW5nZSA9IChpdGVtOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPikgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHF1ZXJ5LCBvblJ1blF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBmaWVsZHM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgIGZpZWxkcyA9IGl0ZW0ubWFwKCh2KSA9PiB2LnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0udmFsdWUpIHtcbiAgICAgIGZpZWxkcyA9IFtpdGVtLnZhbHVlXTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIGFkZGluZyB0aGUgZmlyc3QgZmllbGQsIGFsc28gYWRkIHRpbWUgKGlmIGl0IGV4aXN0cylcbiAgICBpZiAoZmllbGRzLmxlbmd0aCA9PT0gMSAmJiAhcXVlcnkuZmlsdGVyPy5maWVsZHM/Lmxlbmd0aCAmJiBxdWVyeS5jaGFubmVsKSB7XG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMuc3RhdGUuY2hhbm5lbEZpZWxkc1txdWVyeS5jaGFubmVsXSA/PyBbXTtcbiAgICAgIGNvbnN0IHRmID0gbmFtZXMuZmluZCgoZikgPT4gZi52YWx1ZSA9PT0gJ3RpbWUnIHx8IGYudmFsdWUgPT09ICdUaW1lJyk7XG4gICAgICBpZiAodGYgJiYgdGYudmFsdWUgJiYgdGYudmFsdWUgIT09IGZpZWxkc1swXSkge1xuICAgICAgICBmaWVsZHMgPSBbdGYudmFsdWUsIC4uLmZpZWxkc107XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4ucXVlcnksXG4gICAgICBmaWx0ZXI6IHtcbiAgICAgICAgLi4ucXVlcnkuZmlsdGVyLFxuICAgICAgICBmaWVsZHMsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG9uUnVuUXVlcnkoKTtcbiAgfTtcblxuICBjaGVja0FuZFVwZGF0ZVZhbHVlID0gKGtleToga2V5b2YgR3JhZmFuYVF1ZXJ5LCB0eHQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHF1ZXJ5LCBvblJ1blF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChrZXkgPT09ICdidWZmZXInKSB7XG4gICAgICBsZXQgYnVmZmVyOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgICBpZiAodHh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYnVmZmVyID0gcmFuZ2VVdGlsLmludGVydmFsVG9TZWNvbmRzKHR4dCkgKiAxMDAwO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0VSUk9SJywgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgYnVmZmVyLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIFtrZXldOiB0eHQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgb25SdW5RdWVyeSgpO1xuICB9O1xuXG4gIGhhbmRsZUVudGVyS2V5ID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS5rZXkgIT09ICdFbnRlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jaGVja0FuZFVwZGF0ZVZhbHVlKCdidWZmZXInLCAoZS50YXJnZXQgYXMgYW55KS52YWx1ZSk7XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5jaGVja0FuZFVwZGF0ZVZhbHVlKCdidWZmZXInLCBlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmVuZGVyTWVhc3VyZW1lbnRzUXVlcnkoKSB7XG4gICAgbGV0IHsgY2hhbm5lbCwgZmlsdGVyLCBidWZmZXIgfSA9IHRoaXMucHJvcHMucXVlcnk7XG4gICAgbGV0IHsgY2hhbm5lbHMsIGNoYW5uZWxGaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGN1cnJlbnRDaGFubmVsID0gY2hhbm5lbHMuZmluZCgoYykgPT4gYy52YWx1ZSA9PT0gY2hhbm5lbCk7XG4gICAgaWYgKGNoYW5uZWwgJiYgIWN1cnJlbnRDaGFubmVsKSB7XG4gICAgICBjdXJyZW50Q2hhbm5lbCA9IHtcbiAgICAgICAgdmFsdWU6IGNoYW5uZWwsXG4gICAgICAgIGxhYmVsOiBjaGFubmVsLFxuICAgICAgICBkZXNjcmlwdGlvbjogYENvbm5lY3RlZCB0byAke2NoYW5uZWx9YCxcbiAgICAgIH07XG4gICAgICBjaGFubmVscyA9IFtjdXJyZW50Q2hhbm5lbCwgLi4uY2hhbm5lbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3RpbmN0RmllbGRzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgY29uc3QgZmllbGRzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPSBjaGFubmVsID8gY2hhbm5lbEZpZWxkc1tjaGFubmVsXSA/PyBbXSA6IFtdO1xuICAgIC8vIGlmIChkYXRhICYmIGRhdGEuc2VyaWVzPy5sZW5ndGgpIHtcbiAgICAvLyAgIGZvciAoY29uc3QgZnJhbWUgb2YgZGF0YS5zZXJpZXMpIHtcbiAgICAvLyAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmcmFtZS5maWVsZHMpIHtcbiAgICAvLyAgICAgICBpZiAoZGlzdGluY3RGaWVsZHMuaGFzKGZpZWxkLm5hbWUpIHx8ICFmaWVsZC5uYW1lKSB7XG4gICAgLy8gICAgICAgICBjb250aW51ZTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgICAgZmllbGRzLnB1c2goe1xuICAgIC8vICAgICAgICAgdmFsdWU6IGZpZWxkLm5hbWUsXG4gICAgLy8gICAgICAgICBsYWJlbDogZmllbGQubmFtZSxcbiAgICAvLyAgICAgICAgIGRlc2NyaXB0aW9uOiBgKCR7Z2V0RnJhbWVEaXNwbGF5TmFtZShmcmFtZSl9IC8gJHtmaWVsZC50eXBlfSlgLFxuICAgIC8vICAgICAgIH0pO1xuICAgIC8vICAgICAgIGRpc3RpbmN0RmllbGRzLmFkZChmaWVsZC5uYW1lKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICBpZiAoZmlsdGVyPy5maWVsZHMpIHtcbiAgICAgIGZvciAoY29uc3QgZiBvZiBmaWx0ZXIuZmllbGRzKSB7XG4gICAgICAgIGlmICghZGlzdGluY3RGaWVsZHMuaGFzKGYpKSB7XG4gICAgICAgICAgZmllbGRzLnB1c2goe1xuICAgICAgICAgICAgdmFsdWU6IGYsXG4gICAgICAgICAgICBsYWJlbDogYCR7Zn0gKG5vdCBsb2FkZWQpYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQ29uZmlndXJlZCwgYnV0IG5vdCBmb3VuZCBpbiB0aGUgcXVlcnkgcmVzdWx0c2AsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGlzdGluY3RGaWVsZHMuYWRkKGYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGZvcm1hdHRlZFRpbWUgPSAnJztcbiAgICBpZiAoYnVmZmVyKSB7XG4gICAgICBmb3JtYXR0ZWRUaW1lID0gcmFuZ2VVdGlsLnNlY29uZHNUb0htcyhidWZmZXIgLyAxMDAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiQ2hhbm5lbFwiIGdyb3c9e3RydWV9IGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9PlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBvcHRpb25zPXtjaGFubmVsc31cbiAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRDaGFubmVsIHx8ICcnfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5uZWxDaGFuZ2V9XG4gICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgbWVhc3VyZW1lbnRzIGNoYW5uZWxcIlxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgbm9PcHRpb25zTWVzc2FnZT1cIkVudGVyIGNoYW5uZWwgbmFtZVwiXG4gICAgICAgICAgICAgIGZvcm1hdENyZWF0ZUxhYmVsPXsoaW5wdXQ6IHN0cmluZykgPT4gYENvbm5lY3QgdG86ICR7aW5wdXR9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtjaGFubmVsICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkZpZWxkc1wiIGdyb3c9e3RydWV9IGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9PlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17ZmllbGRzfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXI/LmZpZWxkcyB8fCBbXX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpZWxkTmFtZXNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBiYWNrc3BhY2VSZW1vdmVzVmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbGwgZmllbGRzXCJcbiAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBub09wdGlvbnNNZXNzYWdlPVwiVW5hYmxlIHRvIGxpc3QgYWxsIGZpZWxkc1wiXG4gICAgICAgICAgICAgICAgZm9ybWF0Q3JlYXRlTGFiZWw9eyhpbnB1dDogc3RyaW5nKSA9PiBgRmllbGQ6ICR7aW5wdXR9YH1cbiAgICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XG4gICAgICAgICAgICAgICAgaXNNdWx0aT17dHJ1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJCdWZmZXJcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBdXRvXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTJ9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmb3JtYXR0ZWRUaW1lfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVFbnRlcktleX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICBzcGVsbENoZWNrPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEFsZXJ0IHRpdGxlPVwiR3JhZmFuYSBMaXZlIC0gTWVhc3VyZW1lbnRzXCIgc2V2ZXJpdHk9XCJpbmZvXCI+XG4gICAgICAgICAgVGhpcyBzdXBwb3J0cyByZWFsLXRpbWUgZXZlbnQgc3RyZWFtcyBpbiBHcmFmYW5hIGNvcmUuIFRoaXMgZmVhdHVyZSBpcyB1bmRlciBoZWF2eSBkZXZlbG9wbWVudC4gRXhwZWN0IHRoZVxuICAgICAgICAgIGludGVyZmFjZXMgYW5kIHN0cnVjdHVyZXMgdG8gY2hhbmdlIGFzIHRoaXMgYmVjb21lcyBtb3JlIHByb2R1Y3Rpb24gcmVhZHkuXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgb25Gb2xkZXJDaGFuZ2VkID0gKHNlbDogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBxdWVyeSwgb25SdW5RdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBwYXRoOiBzZWw/LnZhbHVlIH0pO1xuICAgIG9uUnVuUXVlcnkoKTtcbiAgfTtcblxuICByZW5kZXJMaXN0UHVibGljRmlsZXMoKSB7XG4gICAgbGV0IHsgcGF0aCB9ID0gdGhpcy5wcm9wcy5xdWVyeTtcbiAgICBsZXQgeyBmb2xkZXJzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghZm9sZGVycykge1xuICAgICAgZm9sZGVycyA9IFtdO1xuICAgICAgdGhpcy5sb2FkRm9sZGVySW5mbygpO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50Rm9sZGVyID0gZm9sZGVycy5maW5kKChmKSA9PiBmLnZhbHVlID09PSBwYXRoKTtcbiAgICBpZiAocGF0aCAmJiAhY3VycmVudEZvbGRlcikge1xuICAgICAgZm9sZGVycyA9IFtcbiAgICAgICAgLi4uZm9sZGVycyxcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiBwYXRoLFxuICAgICAgICAgIGxhYmVsOiBwYXRoLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJQYXRoXCIgZ3Jvdz17dHJ1ZX0gbGFiZWxXaWR0aD17bGFiZWxXaWR0aH0+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgb3B0aW9ucz17Zm9sZGVyc31cbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50Rm9sZGVyIHx8ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Gb2xkZXJDaGFuZ2VkfVxuICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGZvbGRlclwiXG4gICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgIGZvcm1hdENyZWF0ZUxhYmVsPXsoaW5wdXQ6IHN0cmluZykgPT4gYEZvbGRlcjogJHtpbnB1dH1gfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICk7XG4gIH1cblxuICBvblNlYXJjaENoYW5nZSA9IChzZWFyY2g6IFNlYXJjaFF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgeyBxdWVyeSwgb25DaGFuZ2UsIG9uUnVuUXVlcnkgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIHNlYXJjaCxcbiAgICB9KTtcbiAgICBvblJ1blF1ZXJ5KCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgLi4uZGVmYXVsdFF1ZXJ5LFxuICAgICAgLi4udGhpcy5wcm9wcy5xdWVyeSxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBxdWVyeVR5cGUgfSA9IHF1ZXJ5O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtxdWVyeVR5cGUgPT09IEdyYWZhbmFRdWVyeVR5cGUuU2VhcmNoICYmIChcbiAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJHcmFmYW5hIFNlYXJjaFwiIHNldmVyaXR5PVwiaW5mb1wiPlxuICAgICAgICAgICAgVXNpbmcgdGhpcyBkYXRhc291cmNlIHRvIGNhbGwgdGhlIG5ldyBzZWFyY2ggc3lzdGVtIGlzIGV4cGVyaW1lbnRhbCwgYW5kIHN1YmplY3QgdG8gY2hhbmdlIGF0IGFueSB0aW1lXG4gICAgICAgICAgICB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICApfVxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiUXVlcnkgdHlwZVwiIGdyb3c9e3RydWV9IGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9PlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnF1ZXJ5VHlwZXN9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnF1ZXJ5VHlwZXMuZmluZCgodikgPT4gdi52YWx1ZSA9PT0gcXVlcnlUeXBlKSB8fCB0aGlzLnF1ZXJ5VHlwZXNbMF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUXVlcnlUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgICB7cXVlcnlUeXBlID09PSBHcmFmYW5hUXVlcnlUeXBlLkxpdmVNZWFzdXJlbWVudHMgJiYgdGhpcy5yZW5kZXJNZWFzdXJlbWVudHNRdWVyeSgpfVxuICAgICAgICB7cXVlcnlUeXBlID09PSBHcmFmYW5hUXVlcnlUeXBlLkxpc3QgJiYgdGhpcy5yZW5kZXJMaXN0UHVibGljRmlsZXMoKX1cbiAgICAgICAge3F1ZXJ5VHlwZSA9PT0gR3JhZmFuYVF1ZXJ5VHlwZS5TZWFyY2ggJiYgKFxuICAgICAgICAgIDxTZWFyY2hFZGl0b3IgdmFsdWU9e3F1ZXJ5LnNlYXJjaCA/PyB7fX0gb25DaGFuZ2U9e3RoaXMub25TZWFyY2hDaGFuZ2V9IC8+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSW5saW5lRmllbGQsIElucHV0LCBJbmxpbmVGaWVsZFJvdywgQ29kZUVkaXRvciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFNlYXJjaFF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3NlYXJjaC9zZXJ2aWNlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdmFsdWU6IFNlYXJjaFF1ZXJ5O1xuICBvbkNoYW5nZTogKHZhbHVlOiBTZWFyY2hRdWVyeSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoRWRpdG9yKHsgdmFsdWUsIG9uQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IFtqc29uLCBzZXRKU09OXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSh2YWx1ZS5xdWVyeSA/PyAnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBlbXB0eVNlYXJjaFF1ZXJ5OiBTZWFyY2hRdWVyeSA9IHtcbiAgICAgIHF1ZXJ5OiAnKicsXG4gICAgICBsb2NhdGlvbjogJycsIC8vIGdlbmVyYWwsIGV0Y1xuICAgICAgZHNfdWlkOiAnJyxcbiAgICAgIHNvcnQ6ICcnLFxuICAgICAgdGFnczogW10sXG4gICAgICBraW5kOiBbXSxcbiAgICAgIGV4cGxhaW46IGZhbHNlLFxuICAgICAgZmFjZXQ6IFt7IGZpZWxkOiAna2luZCcgfSwgeyBmaWVsZDogJ3RhZ3MnIH1dLFxuICAgICAgZnJvbTogMCxcbiAgICAgIGxpbWl0OiAyMCxcbiAgICB9O1xuXG4gICAgc2V0SlNPTihKU09OLnN0cmluZ2lmeSh7IC4uLmVtcHR5U2VhcmNoUXVlcnksIC4uLnZhbHVlIH0sIG51bGwsIDIpKTtcbiAgfSwgW3ZhbHVlXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoQmx1ciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHF1ZXJ5ICE9PSB2YWx1ZS5xdWVyeSkge1xuICAgICAgb25DaGFuZ2UoeyAuLi52YWx1ZSwgcXVlcnkgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaEVudGVyS2V5ID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS5rZXkgIT09ICdFbnRlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGFuZGxlU2VhcmNoQmx1cihlIGFzIGFueSk7XG4gIH07XG5cbiAgY29uc3Qgb25TYXZlU2VhcmNoSlNPTiA9IChyYXdTZWFyY2hKU09OOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBKU09OLnBhcnNlKHJhd1NlYXJjaEpTT04pIGFzIFNlYXJjaFF1ZXJ5O1xuICAgICAgb25DaGFuZ2Uoc2VhcmNoUXVlcnkpO1xuICAgICAgc2V0UXVlcnkoc2VhcmNoUXVlcnkucXVlcnkgPz8gJycpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBjb25zb2xlLmxvZygnVU5BQkxFIFRPIHBhcnNlIHNlYXJjaCcsIHJhd1NlYXJjaEpTT04sIGV4KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJRdWVyeVwiIGdyb3c9e3RydWV9IGxhYmVsV2lkdGg9ezEyfT5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXZlcnl0aGluZ1wiXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZVNlYXJjaEVudGVyS2V5fVxuICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVTZWFyY2hCbHVyfVxuICAgICAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICA8Q29kZUVkaXRvclxuICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgbGFuZ3VhZ2U9XCJqc29uXCJcbiAgICAgICAgdmFsdWU9e2pzb259XG4gICAgICAgIG9uQmx1cj17b25TYXZlU2VhcmNoSlNPTn1cbiAgICAgICAgb25TYXZlPXtvblNhdmVTZWFyY2hKU09OfVxuICAgICAgICBzaG93TWluaU1hcD17ZmFsc2V9XG4gICAgICAgIHNob3dMaW5lTnVtYmVycz17dHJ1ZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBmcm9tLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgQW5ub3RhdGlvblF1ZXJ5LFxuICBBbm5vdGF0aW9uUXVlcnlSZXF1ZXN0LFxuICBEYXRhRnJhbWVWaWV3LFxuICBEYXRhUXVlcnlSZXF1ZXN0LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIERhdGFTb3VyY2VSZWYsXG4gIGlzVmFsaWRMaXZlQ2hhbm5lbEFkZHJlc3MsXG4gIE11dGFibGVEYXRhRnJhbWUsXG4gIHBhcnNlTGl2ZUNoYW5uZWxBZGRyZXNzLFxuICB0b0RhdGFGcmFtZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQge1xuICBEYXRhU291cmNlV2l0aEJhY2tlbmQsXG4gIGdldEJhY2tlbmRTcnYsXG4gIGdldEdyYWZhbmFMaXZlU3J2LFxuICBnZXRUZW1wbGF0ZVNydixcbiAgU3RyZWFtaW5nRnJhbWVPcHRpb25zLFxufSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IG1pZ3JhdGVEYXRhc291cmNlTmFtZVRvUmVmIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9EYXNoYm9hcmRNaWdyYXRvcic7XG5cbmltcG9ydCB7IGdldERhc2hib2FyZFNydiB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2Rhc2hib2FyZC9zZXJ2aWNlcy9EYXNoYm9hcmRTcnYnO1xuXG5pbXBvcnQgQW5ub3RhdGlvblF1ZXJ5RWRpdG9yIGZyb20gJy4vY29tcG9uZW50cy9Bbm5vdGF0aW9uUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgR3JhZmFuYUFubm90YXRpb25RdWVyeSwgR3JhZmFuYUFubm90YXRpb25UeXBlLCBHcmFmYW5hUXVlcnksIEdyYWZhbmFRdWVyeVR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxubGV0IGNvdW50ZXIgPSAxMDA7XG5cbmV4cG9ydCBjbGFzcyBHcmFmYW5hRGF0YXNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2VXaXRoQmFja2VuZDxHcmFmYW5hUXVlcnk+IHtcbiAgY29uc3RydWN0b3IoaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcbiAgICB0aGlzLmFubm90YXRpb25zID0ge1xuICAgICAgUXVlcnlFZGl0b3I6IEFubm90YXRpb25RdWVyeUVkaXRvcixcbiAgICAgIHByZXBhcmVBbm5vdGF0aW9uKGpzb246IGFueSk6IEFubm90YXRpb25RdWVyeTxHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5PiB7XG4gICAgICAgIC8vIFByZXZpb3VzbHksIHRoZXNlIHByb3BlcnRpZXMgbGl2ZWQgb3V0c2lkZSBvZiB0YXJnZXRcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgaGFuZGxlIG1pZ3JhdGluZyB0aGVtXG4gICAgICAgIGpzb24udGFyZ2V0ID0ganNvbi50YXJnZXQgPz8ge1xuICAgICAgICAgIHR5cGU6IGpzb24udHlwZSA/PyBHcmFmYW5hQW5ub3RhdGlvblR5cGUuRGFzaGJvYXJkLFxuICAgICAgICAgIGxpbWl0OiBqc29uLmxpbWl0ID8/IDEwMCxcbiAgICAgICAgICB0YWdzOiBqc29uLnRhZ3MgPz8gW10sXG4gICAgICAgICAgbWF0Y2hBbnk6IGpzb24ubWF0Y2hBbnkgPz8gZmFsc2UsXG4gICAgICAgIH07IC8vIHVzaW5nIHNwcmVhZCBzeW50YXggY2F1c2VkIGFuIGluZmluaXRlIGxvb3AgaW4gU3RhbmRhcmRBbm5vdGF0aW9uUXVlcnlFZGl0b3JcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgICB9LFxuICAgICAgcHJlcGFyZVF1ZXJ5KGFubm86IEFubm90YXRpb25RdWVyeTxHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5Pik6IEdyYWZhbmFRdWVyeSB7XG4gICAgICAgIGxldCBkYXRhc291cmNlOiBEYXRhU291cmNlUmVmIHwgdW5kZWZpbmVkIHwgbnVsbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGlzU3RyaW5nKGFubm8uZGF0YXNvdXJjZSkpIHtcbiAgICAgICAgICBjb25zdCByZWYgPSBtaWdyYXRlRGF0YXNvdXJjZU5hbWVUb1JlZihhbm5vLmRhdGFzb3VyY2UsIHsgcmV0dXJuRGVmYXVsdEFzTnVsbDogZmFsc2UgfSk7XG4gICAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgZGF0YXNvdXJjZSA9IHJlZjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YXNvdXJjZSA9IGFubm8uZGF0YXNvdXJjZSBhcyBEYXRhU291cmNlUmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgLi4uYW5ubywgcmVmSWQ6IGFubm8ubmFtZSwgcXVlcnlUeXBlOiBHcmFmYW5hUXVlcnlUeXBlLkFubm90YXRpb25zLCBkYXRhc291cmNlIH07XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBxdWVyeShyZXF1ZXN0OiBEYXRhUXVlcnlSZXF1ZXN0PEdyYWZhbmFRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzdWx0czogQXJyYXk8T2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4+ID0gW107XG4gICAgY29uc3QgdGFyZ2V0czogR3JhZmFuYVF1ZXJ5W10gPSBbXTtcbiAgICBjb25zdCB0ZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KCk7XG4gICAgZm9yIChjb25zdCB0YXJnZXQgb2YgcmVxdWVzdC50YXJnZXRzKSB7XG4gICAgICBpZiAodGFyZ2V0LnF1ZXJ5VHlwZSA9PT0gR3JhZmFuYVF1ZXJ5VHlwZS5Bbm5vdGF0aW9ucykge1xuICAgICAgICByZXR1cm4gZnJvbShcbiAgICAgICAgICB0aGlzLmdldEFubm90YXRpb25zKHtcbiAgICAgICAgICAgIHJhbmdlOiByZXF1ZXN0LnJhbmdlLFxuICAgICAgICAgICAgcmFuZ2VSYXc6IHJlcXVlc3QucmFuZ2UucmF3LFxuICAgICAgICAgICAgYW5ub3RhdGlvbjogdGFyZ2V0IGFzIHVua25vd24gYXMgQW5ub3RhdGlvblF1ZXJ5PEdyYWZhbmFBbm5vdGF0aW9uUXVlcnk+LFxuICAgICAgICAgICAgZGFzaGJvYXJkOiBnZXREYXNoYm9hcmRTcnYoKS5nZXRDdXJyZW50KCksXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQuaGlkZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQucXVlcnlUeXBlID09PSBHcmFmYW5hUXVlcnlUeXBlLkxpdmVNZWFzdXJlbWVudHMpIHtcbiAgICAgICAgbGV0IGNoYW5uZWwgPSB0ZW1wbGF0ZVNydi5yZXBsYWNlKHRhcmdldC5jaGFubmVsLCByZXF1ZXN0LnNjb3BlZFZhcnMpO1xuICAgICAgICBjb25zdCB7IGZpbHRlciB9ID0gdGFyZ2V0O1xuXG4gICAgICAgIGNvbnN0IGFkZHIgPSBwYXJzZUxpdmVDaGFubmVsQWRkcmVzcyhjaGFubmVsKTtcbiAgICAgICAgaWYgKCFpc1ZhbGlkTGl2ZUNoYW5uZWxBZGRyZXNzKGFkZHIpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVmZmVyOiBQYXJ0aWFsPFN0cmVhbWluZ0ZyYW1lT3B0aW9ucz4gPSB7XG4gICAgICAgICAgbWF4TGVuZ3RoOiByZXF1ZXN0Lm1heERhdGFQb2ludHMgPz8gNTAwLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGFyZ2V0LmJ1ZmZlcikge1xuICAgICAgICAgIGJ1ZmZlci5tYXhEZWx0YSA9IHRhcmdldC5idWZmZXI7XG4gICAgICAgICAgYnVmZmVyLm1heExlbmd0aCA9IGJ1ZmZlci5tYXhMZW5ndGghICogMjsgLy8/P1xuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QucmFuZ2VSYXc/LnRvID09PSAnbm93Jykge1xuICAgICAgICAgIGJ1ZmZlci5tYXhEZWx0YSA9IHJlcXVlc3QucmFuZ2UudG8udmFsdWVPZigpIC0gcmVxdWVzdC5yYW5nZS5mcm9tLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdHMucHVzaChcbiAgICAgICAgICBnZXRHcmFmYW5hTGl2ZVNydigpLmdldERhdGFTdHJlYW0oe1xuICAgICAgICAgICAga2V5OiBgJHtyZXF1ZXN0LnJlcXVlc3RJZH0uJHtjb3VudGVyKyt9YCxcbiAgICAgICAgICAgIGFkZHI6IGFkZHIhLFxuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgYnVmZmVyLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRhcmdldC5xdWVyeVR5cGUpIHtcbiAgICAgICAgICB0YXJnZXQucXVlcnlUeXBlID0gR3JhZmFuYVF1ZXJ5VHlwZS5SYW5kb21XYWxrO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0YXJnZXRzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0cy5wdXNoKFxuICAgICAgICBzdXBlci5xdWVyeSh7XG4gICAgICAgICAgLi4ucmVxdWVzdCxcbiAgICAgICAgICB0YXJnZXRzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIC8vIFdpdGggYSBzaW5nbGUgcXVlcnkganVzdCByZXR1cm4gdGhlIHJlc3VsdHNcbiAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZXJnZSguLi5yZXN1bHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKCk7IC8vIG5vdGhpbmdcbiAgfVxuXG4gIGxpc3RGaWxlcyhwYXRoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhdGFGcmFtZVZpZXc8RmlsZUVsZW1lbnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkoe1xuICAgICAgdGFyZ2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgcmVmSWQ6ICdBJyxcbiAgICAgICAgICBxdWVyeVR5cGU6IEdyYWZhbmFRdWVyeVR5cGUuTGlzdCxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9IGFzIGFueSkucGlwZShcbiAgICAgIG1hcCgodikgPT4ge1xuICAgICAgICBjb25zdCBmcmFtZSA9IHYuZGF0YVswXSA/PyBuZXcgTXV0YWJsZURhdGFGcmFtZSgpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGFGcmFtZVZpZXc8RmlsZUVsZW1lbnQ+KGZyYW1lKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG1ldHJpY0ZpbmRRdWVyeShvcHRpb25zOiBhbnkpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgfVxuXG4gIGFzeW5jIGdldEFubm90YXRpb25zKG9wdGlvbnM6IEFubm90YXRpb25RdWVyeVJlcXVlc3Q8R3JhZmFuYVF1ZXJ5Pik6IFByb21pc2U8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KCk7XG4gICAgY29uc3QgYW5ub3RhdGlvbiA9IG9wdGlvbnMuYW5ub3RhdGlvbiBhcyB1bmtub3duIGFzIEFubm90YXRpb25RdWVyeTxHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5PjtcbiAgICBjb25zdCB0YXJnZXQgPSBhbm5vdGF0aW9uLnRhcmdldCE7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICBmcm9tOiBvcHRpb25zLnJhbmdlLmZyb20udmFsdWVPZigpLFxuICAgICAgdG86IG9wdGlvbnMucmFuZ2UudG8udmFsdWVPZigpLFxuICAgICAgbGltaXQ6IHRhcmdldC5saW1pdCxcbiAgICAgIHRhZ3M6IHRhcmdldC50YWdzLFxuICAgICAgbWF0Y2hBbnk6IHRhcmdldC5tYXRjaEFueSxcbiAgICB9O1xuXG4gICAgaWYgKHRhcmdldC50eXBlID09PSBHcmFmYW5hQW5ub3RhdGlvblR5cGUuRGFzaGJvYXJkKSB7XG4gICAgICAvLyBpZiBubyBkYXNoYm9hcmQgaWQgeWV0IHJldHVyblxuICAgICAgaWYgKCFvcHRpb25zLmRhc2hib2FyZC5pZCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgZGF0YTogW10gfSk7XG4gICAgICB9XG4gICAgICAvLyBmaWx0ZXIgYnkgZGFzaGJvYXJkIGlkXG4gICAgICBwYXJhbXMuZGFzaGJvYXJkSWQgPSBvcHRpb25zLmRhc2hib2FyZC5pZDtcbiAgICAgIC8vIHJlbW92ZSB0YWdzIGZpbHRlciBpZiBhbnlcbiAgICAgIGRlbGV0ZSBwYXJhbXMudGFncztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmVxdWlyZSBhdCBsZWFzdCBvbmUgdGFnXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGFyZ2V0LnRhZ3MpIHx8IHRhcmdldC50YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgZGF0YTogW10gfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBkZWxpbWl0ZXIgPSAnX19kZWxpbWl0ZXJfXyc7XG4gICAgICBjb25zdCB0YWdzID0gW107XG4gICAgICBmb3IgKGNvbnN0IHQgb2YgcGFyYW1zLnRhZ3MpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRWYWx1ZXMgPSB0ZW1wbGF0ZVNydi5yZXBsYWNlKHQsIHt9LCAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmpvaW4oZGVsaW1pdGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAoY29uc3QgdHQgb2YgcmVuZGVyZWRWYWx1ZXMuc3BsaXQoZGVsaW1pdGVyKSkge1xuICAgICAgICAgIHRhZ3MucHVzaCh0dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBhcmFtcy50YWdzID0gdGFncztcbiAgICB9XG5cbiAgICBjb25zdCBhbm5vdGF0aW9ucyA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoXG4gICAgICAnL2FwaS9hbm5vdGF0aW9ucycsXG4gICAgICBwYXJhbXMsXG4gICAgICBgZ3JhZmFuYS1kYXRhLXNvdXJjZS1hbm5vdGF0aW9ucy0ke2Fubm90YXRpb24ubmFtZX0tJHtvcHRpb25zLmRhc2hib2FyZD8uaWR9YFxuICAgICk7XG4gICAgcmV0dXJuIHsgZGF0YTogW3RvRGF0YUZyYW1lKGFubm90YXRpb25zKV0gfTtcbiAgfVxuXG4gIHRlc3REYXRhc291cmNlKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBbJ21lZGlhLXR5cGUnXTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBRdWVyeUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9RdWVyeUVkaXRvcic7XG5pbXBvcnQgeyBHcmFmYW5hRGF0YXNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBHcmFmYW5hUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luPEdyYWZhbmFEYXRhc291cmNlLCBHcmFmYW5hUXVlcnk+KEdyYWZhbmFEYXRhc291cmNlKS5zZXRRdWVyeUVkaXRvcihcbiAgUXVlcnlFZGl0b3Jcbik7XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJGaWVsZCIsIkZpZWxkU2V0IiwiU2VsZWN0IiwiU3dpdGNoIiwiVGFnRmlsdGVyIiwiZ2V0QW5ub3RhdGlvblRhZ3MiLCJHcmFmYW5hQW5ub3RhdGlvblR5cGUiLCJtYXRjaFRvb2x0aXBDb250ZW50IiwidGFnc1Rvb2x0aXBDb250ZW50IiwiYW5ub3RhdGlvblR5cGVzIiwibGFiZWwiLCJ2YWx1ZSIsIkRhc2hib2FyZCIsImRlc2NyaXB0aW9uIiwiVGFncyIsImxpbWl0T3B0aW9ucyIsIm1hcCIsImxpbWl0IiwiU3RyaW5nIiwiQW5ub3RhdGlvblF1ZXJ5RWRpdG9yIiwicXVlcnkiLCJvbkNoYW5nZSIsImFubm90YXRpb25RdWVyeSIsIm1hdGNoQW55IiwidGFncyIsInR5cGUiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJvbkZpbHRlckJ5Q2hhbmdlIiwibmV3VmFsdWUiLCJvbk1heExpbWl0Q2hhbmdlIiwib25NYXRjaEFueUNoYW5nZSIsInRhcmdldCIsImNoZWNrZWQiLCJvblRhZ3NDaGFuZ2UiLCJjb250YWluZXIiLCJQdXJlQ29tcG9uZW50IiwiZGF0YUZyYW1lRnJvbUpTT04iLCJyYW5nZVV0aWwiLCJjb25maWciLCJnZXRCYWNrZW5kU3J2IiwiZ2V0RGF0YVNvdXJjZVNydiIsIklubGluZUZpZWxkIiwiQWxlcnQiLCJJbnB1dCIsIklubGluZUZpZWxkUm93IiwiaGFzQWxwaGFQYW5lbHMiLCJkZWZhdWx0UXVlcnkiLCJHcmFmYW5hUXVlcnlUeXBlIiwiU2VhcmNoRWRpdG9yIiwibGFiZWxXaWR0aCIsIlF1ZXJ5RWRpdG9yIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImNoYW5uZWxzIiwiY2hhbm5lbEZpZWxkcyIsIlJhbmRvbVdhbGsiLCJMaXZlTWVhc3VyZW1lbnRzIiwiTGlzdCIsInNlbCIsIm9uUnVuUXVlcnkiLCJxdWVyeVR5cGUiLCJsb2FkQ2hhbm5lbEluZm8iLCJjaGFubmVsIiwiaXRlbSIsImZpZWxkcyIsIkFycmF5IiwiaXNBcnJheSIsInYiLCJsZW5ndGgiLCJmaWx0ZXIiLCJuYW1lcyIsInN0YXRlIiwidGYiLCJmaW5kIiwiZiIsImtleSIsInR4dCIsImJ1ZmZlciIsImludGVydmFsVG9TZWNvbmRzIiwiZXJyIiwiY29uc29sZSIsIndhcm4iLCJlIiwiY2hlY2tBbmRVcGRhdGVWYWx1ZSIsInBhdGgiLCJzZWFyY2giLCJmZWF0dXJlVG9nZ2xlcyIsInBhbmVsVGl0bGVTZWFyY2giLCJxdWVyeVR5cGVzIiwicHVzaCIsIlNlYXJjaCIsImZldGNoIiwidXJsIiwic3Vic2NyaWJlIiwibmV4dCIsImNoYW5uZWxJbmZvIiwiZGF0YSIsImMiLCJkaXN0aW5jdEZpZWxkcyIsIlNldCIsImZyYW1lIiwiYWRkIiwibmFtZSIsImZyb20iLCJuIiwibWludXRlX3JhdGUiLCJzZXRTdGF0ZSIsImxvYWRGb2xkZXJJbmZvIiwidGFyZ2V0cyIsInJlZklkIiwiZ2V0IiwidGhlbiIsImRzIiwiZ2RzIiwicnNwIiwiZm9sZGVycyIsInZhbHVlcyIsInRvQXJyYXkiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlck1lYXN1cmVtZW50c1F1ZXJ5IiwiY3VycmVudENoYW5uZWwiLCJoYXMiLCJmb3JtYXR0ZWRUaW1lIiwic2Vjb25kc1RvSG1zIiwib25DaGFubmVsQ2hhbmdlIiwiaW5wdXQiLCJvbkZpZWxkTmFtZXNDaGFuZ2UiLCJoYW5kbGVFbnRlcktleSIsImhhbmRsZUJsdXIiLCJyZW5kZXJMaXN0UHVibGljRmlsZXMiLCJjdXJyZW50Rm9sZGVyIiwib25Gb2xkZXJDaGFuZ2VkIiwicmVuZGVyIiwib25RdWVyeVR5cGVDaGFuZ2UiLCJvblNlYXJjaENoYW5nZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29kZUVkaXRvciIsImpzb24iLCJzZXRKU09OIiwic2V0UXVlcnkiLCJlbXB0eVNlYXJjaFF1ZXJ5IiwibG9jYXRpb24iLCJkc191aWQiLCJzb3J0Iiwia2luZCIsImV4cGxhaW4iLCJmYWNldCIsImZpZWxkIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZVNlYXJjaEJsdXIiLCJoYW5kbGVTZWFyY2hFbnRlcktleSIsIm9uU2F2ZVNlYXJjaEpTT04iLCJyYXdTZWFyY2hKU09OIiwic2VhcmNoUXVlcnkiLCJwYXJzZSIsImV4IiwibG9nIiwiY3VycmVudFRhcmdldCIsImlzU3RyaW5nIiwibWVyZ2UiLCJvZiIsIkRhdGFGcmFtZVZpZXciLCJpc1ZhbGlkTGl2ZUNoYW5uZWxBZGRyZXNzIiwiTXV0YWJsZURhdGFGcmFtZSIsInBhcnNlTGl2ZUNoYW5uZWxBZGRyZXNzIiwidG9EYXRhRnJhbWUiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJnZXRHcmFmYW5hTGl2ZVNydiIsImdldFRlbXBsYXRlU3J2IiwibWlncmF0ZURhdGFzb3VyY2VOYW1lVG9SZWYiLCJnZXREYXNoYm9hcmRTcnYiLCJjb3VudGVyIiwiR3JhZmFuYURhdGFzb3VyY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwiYW5ub3RhdGlvbnMiLCJwcmVwYXJlQW5ub3RhdGlvbiIsInByZXBhcmVRdWVyeSIsImFubm8iLCJkYXRhc291cmNlIiwidW5kZWZpbmVkIiwicmVmIiwicmV0dXJuRGVmYXVsdEFzTnVsbCIsIkFubm90YXRpb25zIiwicmVxdWVzdCIsInJlc3VsdHMiLCJ0ZW1wbGF0ZVNydiIsImdldEFubm90YXRpb25zIiwicmFuZ2UiLCJyYW5nZVJhdyIsInJhdyIsImFubm90YXRpb24iLCJkYXNoYm9hcmQiLCJnZXRDdXJyZW50IiwiaGlkZSIsInJlcGxhY2UiLCJzY29wZWRWYXJzIiwiYWRkciIsIm1heExlbmd0aCIsIm1heERhdGFQb2ludHMiLCJtYXhEZWx0YSIsInRvIiwidmFsdWVPZiIsImdldERhdGFTdHJlYW0iLCJyZXF1ZXN0SWQiLCJsaXN0RmlsZXMiLCJwaXBlIiwibWV0cmljRmluZFF1ZXJ5Iiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicGFyYW1zIiwiaWQiLCJkYXNoYm9hcmRJZCIsImRlbGltaXRlciIsInQiLCJyZW5kZXJlZFZhbHVlcyIsImpvaW4iLCJ0dCIsInNwbGl0IiwidGVzdERhdGFzb3VyY2UiLCJEYXRhU291cmNlUGx1Z2luIiwicGx1Z2luIiwic2V0UXVlcnlFZGl0b3IiXSwic291cmNlUm9vdCI6IiJ9