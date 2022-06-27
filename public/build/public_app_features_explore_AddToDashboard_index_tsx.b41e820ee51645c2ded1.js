"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_explore_AddToDashboard_index_tsx"],{

/***/ "./public/app/features/dashboard/state/analyticsProcessor.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emitDashboardViewEvent": () => (/* binding */ emitDashboardViewEvent)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

function emitDashboardViewEvent(dashboard) {
  const eventData = {
    dashboardId: dashboard.id,
    dashboardName: dashboard.title,
    dashboardUid: dashboard.uid,
    folderName: dashboard.meta.folderTitle,
    eventName: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.MetaAnalyticsEventName.DashboardView
  };
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportMetaAnalytics)(eventData);
}

/***/ }),

/***/ "./public/app/features/dashboard/state/initDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewDashboardModelData": () => (/* binding */ getNewDashboardModelData),
/* harmony export */   "initDashboard": () => (/* binding */ initDashboard),
/* harmony export */   "removeDashboardToFetchFromLocalStorage": () => (/* binding */ removeDashboardToFetchFromLocalStorage),
/* harmony export */   "setDashboardToFetchFromLocalStorage": () => (/* binding */ setDashboardToFetchFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_services_keybindingSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/keybindingSrv.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
/* harmony import */ var app_features_variables_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _variables_state_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/variables/state/actions.ts");
/* harmony import */ var _variables_state_selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _DashboardModel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
/* harmony import */ var _analyticsProcessor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/state/analyticsProcessor.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");




















async function fetchDashboard(args, dispatch, getState) {
  // When creating new or adding panels to a dashboard from explore we load it from local storage
  const model = app_core_store__WEBPACK_IMPORTED_MODULE_6__["default"].getObject(DASHBOARD_FROM_LS_KEY);

  if (model) {
    removeDashboardToFetchFromLocalStorage();
    return model;
  }

  try {
    switch (args.routeName) {
      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.Home:
        {
          // load home dash
          const dashDTO = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__.backendSrv.get('/api/dashboards/home'); // if user specified a custom home dashboard redirect to that

          if (dashDTO.redirectUri) {
            const newUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.locationUtil.stripBaseFromUrl(dashDTO.redirectUri);
            _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.replace(newUrl);
            return null;
          } // disable some actions on the default home dashboard


          dashDTO.meta.canSave = false;
          dashDTO.meta.canShare = false;
          dashDTO.meta.canStar = false;
          return dashDTO;
        }

      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.Public:
        {
          return await app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_7__.dashboardLoaderSrv.loadDashboard('public', args.urlSlug, args.accessToken);
        }

      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.Normal:
        {
          const dashDTO = await app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_7__.dashboardLoaderSrv.loadDashboard(args.urlType, args.urlSlug, args.urlUid);

          if (args.fixUrl && dashDTO.meta.url) {
            // check if the current url is correct (might be old slug)
            const dashboardUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.locationUtil.stripBaseFromUrl(dashDTO.meta.url);
            const currentPath = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().pathname;

            if (dashboardUrl !== currentPath) {
              // Spread current location to persist search params used for navigation
              _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.replace(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation(), {
                pathname: dashboardUrl
              }));
              console.log('not correct url correcting', dashboardUrl, currentPath);
            }
          }

          return dashDTO;
        }

      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.New:
        {
          return getNewDashboardModelData(args.urlFolderId);
        }

      default:
        throw {
          message: 'Unknown route ' + args.routeName
        };
    }
  } catch (err) {
    // Ignore cancelled errors
    if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.isFetchError)(err) && err.cancelled) {
      return null;
    }

    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitFailed)({
      message: 'Failed to fetch dashboard',
      error: err
    }));
    console.error(err);
    return null;
  }
}
/**
 * This action (or saga) does everything needed to bootstrap a dashboard & dashboard model.
 * First it handles the process of fetching the dashboard, correcting the url if required (causing redirects/url updates)
 *
 * This is used both for single dashboard & solo panel routes, home & new dashboard routes.
 *
 * Then it handles the initializing of the old angular services that the dashboard components & panels still depend on
 *
 */


function initDashboard(args) {
  return async (dispatch, getState) => {
    var _args$urlUid;

    // set fetching state
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitFetching)()); // fetch dashboard data

    const dashDTO = await fetchDashboard(args, dispatch, getState); // returns null if there was a redirect or error

    if (!dashDTO) {
      return;
    } // set initializing state


    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitServices)()); // create model

    let dashboard;

    try {
      dashboard = new _DashboardModel__WEBPACK_IMPORTED_MODULE_16__.DashboardModel(dashDTO.dashboard, dashDTO.meta);
    } catch (err) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitFailed)({
        message: 'Failed create dashboard model',
        error: err
      }));
      console.error(err);
      return;
    } // add missing orgId query param


    const storeState = getState();
    const queryParams = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getSearchObject();

    if (!queryParams.orgId) {
      // TODO this is currently not possible with the LocationService API
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
        orgId: storeState.user.orgId
      }, true);
    } // init services


    const timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_9__.getTimeSrv)();
    const dashboardSrv = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_8__.getDashboardSrv)(); // legacy srv state, we need this value updated for built-in annotations

    dashboardSrv.setCurrent(dashboard);
    timeSrv.init(dashboard);
    const dashboardUid = (0,app_features_variables_utils__WEBPACK_IMPORTED_MODULE_11__.toStateKey)((_args$urlUid = args.urlUid) !== null && _args$urlUid !== void 0 ? _args$urlUid : dashboard.uid); // template values service needs to initialize completely before the rest of the dashboard can load

    await dispatch((0,_variables_state_actions__WEBPACK_IMPORTED_MODULE_14__.initVariablesTransaction)(dashboardUid, dashboard)); // DashboardQueryRunner needs to run after all variables have been resolved so that any annotation query including a variable
    // will be correctly resolved

    const runner = (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_13__.createDashboardQueryRunner)({
      dashboard,
      timeSrv
    });
    runner.run({
      dashboard,
      range: timeSrv.timeRange()
    });

    if ((0,_variables_state_selectors__WEBPACK_IMPORTED_MODULE_15__.getIfExistsLastKey)(getState()) !== dashboardUid) {
      // if a previous dashboard has slow running variable queries the batch uid will be the new one
      // but the args.urlUid will be the same as before initVariablesTransaction was called so then we can't continue initializing
      // the previous dashboard.
      return;
    } // If dashboard is in a different init phase it means it cancelled during service init


    if (getState().dashboard.initPhase !== app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardInitPhase.Services) {
      return;
    }

    try {
      dashboard.processRepeats(); // handle auto fix experimental feature

      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }

      app_core_services_keybindingSrv__WEBPACK_IMPORTED_MODULE_5__.keybindingSrv.setupDashboardBindings(dashboard);
    } catch (err) {
      if (err instanceof Error) {
        dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)('Dashboard init failed', err)));
      }

      console.error(err);
    } // send open dashboard event


    if (args.routeName !== app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.New) {
      (0,_analyticsProcessor__WEBPACK_IMPORTED_MODULE_17__.emitDashboardViewEvent)(dashboard); // Listen for changes on the current dashboard

      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_10__.dashboardWatcher.watch(dashboard.uid);
    } else {
      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_10__.dashboardWatcher.leave();
    } // set week start


    if (dashboard.weekStart !== '') {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.setWeekStart)(dashboard.weekStart);
    } else {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.setWeekStart)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.bootData.user.weekStart);
    } // yay we are done


    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitCompleted)(dashboard));
  };
}
function getNewDashboardModelData(urlFolderId) {
  const data = {
    meta: {
      canStar: false,
      canShare: false,
      canDelete: false,
      isNew: true,
      folderId: 0
    },
    dashboard: {
      title: 'New dashboard',
      panels: [{
        type: 'add-panel',
        gridPos: {
          x: 0,
          y: 0,
          w: 12,
          h: 9
        },
        title: 'Panel Title'
      }]
    }
  };

  if (urlFolderId) {
    data.meta.folderId = parseInt(urlFolderId, 10);
  }

  return data;
}
const DASHBOARD_FROM_LS_KEY = 'DASHBOARD_FROM_LS_KEY';
function setDashboardToFetchFromLocalStorage(model) {
  app_core_store__WEBPACK_IMPORTED_MODULE_6__["default"].setObject(DASHBOARD_FROM_LS_KEY, model);
}
function removeDashboardToFetchFromLocalStorage() {
  app_core_store__WEBPACK_IMPORTED_MODULE_6__["default"]["delete"](DASHBOARD_FROM_LS_KEY);
}

/***/ }),

/***/ "./public/app/features/explore/AddToDashboard/AddToDashboardModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToDashboardModal": () => (/* binding */ AddToDashboardModal)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Select/DashboardPicker.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/explore/state/selectors.ts");
/* harmony import */ var _addToDashboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/explore/AddToDashboard/addToDashboard.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"],
      _excluded2 = ["ref", "value", "onChange"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















var SaveTarget;

(function (SaveTarget) {
  SaveTarget["NewDashboard"] = "new-dashboard";
  SaveTarget["ExistingDashboard"] = "existing-dashboard";
})(SaveTarget || (SaveTarget = {}));

function assertIsSaveToExistingDashboardError(errors) {// the shape of the errors object is always compatible with the type above, but we need to
  // explicitly assert its type so that TS can narrow down FormDTO to SaveToExistingDashboard
  // when we use it in the form.
}

function getDashboardURL(dashboardUid) {
  return dashboardUid ? `d/${dashboardUid}` : 'dashboard/new';
}

var GenericError;

(function (GenericError) {
  GenericError["UNKNOWN"] = "unknown-error";
  GenericError["NAVIGATION"] = "navigation-error";
})(GenericError || (GenericError = {}));

const AddToDashboardModal = ({
  onClose,
  exploreId
}) => {
  const exploreItem = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getExploreItemSelector)(exploreId));
  const [submissionError, setSubmissionError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    handleSubmit,
    control,
    formState: {
      errors
    },
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues: {
      saveTarget: SaveTarget.NewDashboard
    }
  });
  const canCreateDashboard = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.DashboardsCreate, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.isEditor);
  const canWriteDashboard = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.DashboardsWrite, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.isEditor);
  const saveTargets = [];

  if (canCreateDashboard) {
    saveTargets.push({
      label: 'New dashboard',
      value: SaveTarget.NewDashboard
    });
  }

  if (canWriteDashboard) {
    saveTargets.push({
      label: 'Existing dashboard',
      value: SaveTarget.ExistingDashboard
    });
  }

  const saveTarget = saveTargets.length > 1 ? watch('saveTarget') : saveTargets[0].value;
  const modalTitle = `Add panel to ${saveTargets.length > 1 ? 'dashboard' : saveTargets[0].label.toLowerCase()}`;

  const onSubmit = async (openInNewTab, data) => {
    setSubmissionError(undefined);
    const dashboardUid = data.saveTarget === SaveTarget.ExistingDashboard ? data.dashboardUid : undefined;
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)('e2d_submit', {
      newTab: openInNewTab,
      saveTarget: data.saveTarget,
      queries: exploreItem.queries.length
    });

    try {
      var _exploreItem$datasour;

      await (0,_addToDashboard__WEBPACK_IMPORTED_MODULE_12__.setDashboardInLocalStorage)({
        dashboardUid,
        datasource: (_exploreItem$datasour = exploreItem.datasourceInstance) === null || _exploreItem$datasour === void 0 ? void 0 : _exploreItem$datasour.getRef(),
        queries: exploreItem.queries,
        queryResponse: exploreItem.queryResponse
      });
    } catch (error) {
      switch (error) {
        case _addToDashboard__WEBPACK_IMPORTED_MODULE_12__.AddToDashboardError.FETCH_DASHBOARD:
          setSubmissionError({
            error,
            message: 'Could not fetch dashboard information. Please try again.'
          });
          break;

        case _addToDashboard__WEBPACK_IMPORTED_MODULE_12__.AddToDashboardError.SET_DASHBOARD_LS:
          setSubmissionError({
            error,
            message: 'Could not add panel to dashboard. Please try again.'
          });
          break;

        default:
          setSubmissionError({
            error: GenericError.UNKNOWN,
            message: 'Something went wrong. Please try again.'
          });
      }

      return;
    }

    const dashboardURL = getDashboardURL(dashboardUid);

    if (!openInNewTab) {
      onClose();
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.push(_grafana_data__WEBPACK_IMPORTED_MODULE_4__.locationUtil.stripBaseFromUrl(dashboardURL));
      return;
    }

    const didTabOpen = !!__webpack_require__.g.open(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.appUrl + dashboardURL, '_blank');

    if (!didTabOpen) {
      setSubmissionError({
        error: GenericError.NAVIGATION,
        message: 'Could not navigate to the selected dashboard. Please try again.'
      });
      (0,app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_9__.removeDashboardToFetchFromLocalStorage)();
      return;
    }

    onClose();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)('e2d_open');
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Modal, {
    title: modalTitle,
    onDismiss: onClose,
    isOpen: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("form", {
      children: [saveTargets.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InputControl, {
        control: control,
        render: _ref => {
          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, {
            label: "Target dashboard",
            description: "Choose where to add the panel.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.RadioButtonGroup, Object.assign({
              options: saveTargets
            }, field, {
              id: "e2d-save-target"
            }))
          });
        },
        name: "saveTarget"
      }), saveTarget === SaveTarget.ExistingDashboard && (() => {
        assertIsSaveToExistingDashboardError(errors);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InputControl, {
          render: _ref2 => {
            var _errors$dashboardUid;

            let {
              field: {
                onChange
              }
            } = _ref2,
                field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, {
              label: "Dashboard",
              description: "Select in which dashboard the panel will be created.",
              error: (_errors$dashboardUid = errors.dashboardUid) === null || _errors$dashboardUid === void 0 ? void 0 : _errors$dashboardUid.message,
              invalid: !!errors.dashboardUid,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_7__.DashboardPicker, Object.assign({}, field, {
                inputId: "e2d-dashboard-picker",
                defaultOptions: true,
                onChange: d => onChange(d === null || d === void 0 ? void 0 : d.uid)
              }))
            });
          },
          control: control,
          name: "dashboardUid",
          shouldUnregister: true,
          rules: {
            required: {
              value: true,
              message: 'This field is required.'
            }
          }
        });
      })(), submissionError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, {
        severity: "error",
        title: "Error adding the panel",
        children: submissionError.message
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
          type: "reset",
          onClick: onClose,
          fill: "outline",
          variant: "secondary",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
          type: "submit",
          variant: "secondary",
          onClick: handleSubmit((0,lodash__WEBPACK_IMPORTED_MODULE_0__.partial)(onSubmit, true)),
          icon: "external-link-alt",
          children: "Open in new tab"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
          type: "submit",
          variant: "primary",
          onClick: handleSubmit((0,lodash__WEBPACK_IMPORTED_MODULE_0__.partial)(onSubmit, false)),
          icon: "apps",
          children: "Open dashboard"
        })]
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/explore/AddToDashboard/addToDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToDashboardError": () => (/* binding */ AddToDashboardError),
/* harmony export */   "setDashboardInLocalStorage": () => (/* binding */ setDashboardInLocalStorage)
/* harmony export */ });
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");


let AddToDashboardError;

(function (AddToDashboardError) {
  AddToDashboardError["FETCH_DASHBOARD"] = "fetch-dashboard";
  AddToDashboardError["SET_DASHBOARD_LS"] = "set-dashboard-ls-error";
})(AddToDashboardError || (AddToDashboardError = {}));

function createDashboard() {
  const dto = (0,app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_1__.getNewDashboardModelData)(); // getNewDashboardModelData adds by default the "add-panel" panel. We don't want that.

  dto.dashboard.panels = [];
  return dto;
}

async function setDashboardInLocalStorage(options) {
  var _dto$dashboard$panels;

  const panelType = getPanelType(options.queries, options.queryResponse);
  const panel = {
    targets: options.queries,
    type: panelType,
    title: 'New Panel',
    gridPos: {
      x: 0,
      y: 0,
      w: 12,
      h: 8
    },
    datasource: options.datasource
  };
  let dto;

  if (options.dashboardUid) {
    try {
      dto = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.backendSrv.getDashboardByUid(options.dashboardUid);
    } catch (e) {
      throw AddToDashboardError.FETCH_DASHBOARD;
    }
  } else {
    dto = createDashboard();
  }

  dto.dashboard.panels = [panel, ...((_dto$dashboard$panels = dto.dashboard.panels) !== null && _dto$dashboard$panels !== void 0 ? _dto$dashboard$panels : [])];

  try {
    (0,app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_1__.setDashboardToFetchFromLocalStorage)(dto);
  } catch {
    throw AddToDashboardError.SET_DASHBOARD_LS;
  }
}

const isVisible = query => !query.hide;

const hasRefId = refId => frame => frame.refId === refId;

function getPanelType(queries, queryResponse) {
  for (const {
    refId
  } of queries.filter(isVisible)) {
    // traceview is not supported in dashboards, skipping it for now.
    const hasQueryRefId = hasRefId(refId);

    if (queryResponse.graphFrames.some(hasQueryRefId)) {
      return 'timeseries';
    }

    if (queryResponse.logsFrames.some(hasQueryRefId)) {
      return 'logs';
    }

    if (queryResponse.nodeGraphFrames.some(hasQueryRefId)) {
      return 'nodeGraph';
    }

    if (queryResponse.traceFrames.some(hasQueryRefId)) {
      return 'traces';
    }
  } // falling back to table


  return 'table';
}

/***/ }),

/***/ "./public/app/features/explore/AddToDashboard/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToDashboard": () => (/* binding */ AddToDashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/explore/state/selectors.ts");
/* harmony import */ var _AddToDashboardModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/explore/AddToDashboard/AddToDashboardModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const AddToDashboard = ({
  exploreId
}) => {
  var _useSelector, _useSelector$queries;

  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const selectExploreItem = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_3__.getExploreItemSelector)(exploreId);
  const explorePaneHasQueries = !!((_useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(selectExploreItem)) !== null && _useSelector !== void 0 && (_useSelector$queries = _useSelector.queries) !== null && _useSelector$queries !== void 0 && _useSelector$queries.length);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
      icon: "apps",
      onClick: () => setIsOpen(true),
      "aria-label": "Add to dashboard",
      disabled: !explorePaneHasQueries,
      children: "Add to dashboard"
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AddToDashboardModal__WEBPACK_IMPORTED_MODULE_4__.AddToDashboardModal, {
      onClose: () => setIsOpen(false),
      exploreId: exploreId
    })]
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9mZWF0dXJlc19leHBsb3JlX0FkZFRvRGFzaGJvYXJkX2luZGV4X3RzeC5iNDFlODIwZWU1MTY0NWMyZGVkMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBSU8sU0FBU0Usc0JBQVQsQ0FBZ0NDLFNBQWhDLEVBQTJEO0VBQ2hFLE1BQU1DLFNBQW9DLEdBQUc7SUFDM0NDLFdBQVcsRUFBRUYsU0FBUyxDQUFDRyxFQURvQjtJQUUzQ0MsYUFBYSxFQUFFSixTQUFTLENBQUNLLEtBRmtCO0lBRzNDQyxZQUFZLEVBQUVOLFNBQVMsQ0FBQ08sR0FIbUI7SUFJM0NDLFVBQVUsRUFBRVIsU0FBUyxDQUFDUyxJQUFWLENBQWVDLFdBSmdCO0lBSzNDQyxTQUFTLEVBQUViLGtGQUFvQ2M7RUFMSixDQUE3QztFQVFBZixxRUFBbUIsQ0FBQ0ksU0FBRCxDQUFuQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFZQSxlQUFlcUMsY0FBZixDQUNFQyxJQURGLEVBRUVDLFFBRkYsRUFHRUMsUUFIRixFQUlnQztFQUM5QjtFQUNBLE1BQU1DLEtBQUssR0FBR3BCLGdFQUFBLENBQThCc0IscUJBQTlCLENBQWQ7O0VBQ0EsSUFBSUYsS0FBSixFQUFXO0lBQ1RHLHNDQUFzQztJQUN0QyxPQUFPSCxLQUFQO0VBQ0Q7O0VBRUQsSUFBSTtJQUNGLFFBQVFILElBQUksQ0FBQ08sU0FBYjtNQUNFLEtBQUtqQiw0REFBTDtRQUEyQjtVQUN6QjtVQUNBLE1BQU1tQixPQUFxQixHQUFHLE1BQU01Qix5RUFBQSxDQUFlLHNCQUFmLENBQXBDLENBRnlCLENBSXpCOztVQUNBLElBQUk0QixPQUFPLENBQUNFLFdBQVosRUFBeUI7WUFDdkIsTUFBTUMsTUFBTSxHQUFHdEMsd0VB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RiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7RUFDQSxNQUFNK0YsaUJBQWlCLEdBQUdsRix3RUFBc0IsQ0FBQ1UsU0FBRCxDQUFoRDtFQUNBLE1BQU15RSxxQkFBcUIsR0FBRyxDQUFDLGtCQUFDOUYsd0RBQVcsQ0FBQzZGLGlCQUFELENBQVosaUVBQUMsYUFBZ0M1QyxPQUFqQyxpREFBQyxxQkFBeUNQLE1BQTFDLENBQS9CO0VBRUEsb0JBQ0U7SUFBQSx3QkFDRSx1REFBQyxzREFBRDtNQUNFLElBQUksRUFBQyxNQURQO01BRUUsT0FBTyxFQUFFLE1BQU1rRCxTQUFTLENBQUMsSUFBRCxDQUYxQjtNQUdFLGNBQVcsa0JBSGI7TUFJRSxRQUFRLEVBQUUsQ0FBQ0UscUJBSmI7TUFBQTtJQUFBLEVBREYsRUFVR0gsTUFBTSxpQkFBSSx1REFBQyxxRUFBRDtNQUFxQixPQUFPLEVBQUUsTUFBTUMsU0FBUyxDQUFDLEtBQUQsQ0FBN0M7TUFBc0QsU0FBUyxFQUFFdkU7SUFBakUsRUFWYjtFQUFBLEVBREY7QUFjRCxDQW5CTSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9hbmFseXRpY3NQcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL2luaXREYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZXhwbG9yZS9BZGRUb0Rhc2hib2FyZC9BZGRUb0Rhc2hib2FyZE1vZGFsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9leHBsb3JlL0FkZFRvRGFzaGJvYXJkL2FkZFRvRGFzaGJvYXJkLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2V4cGxvcmUvQWRkVG9EYXNoYm9hcmQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcG9ydE1ldGFBbmFseXRpY3MsIE1ldGFBbmFseXRpY3NFdmVudE5hbWUsIERhc2hib2FyZFZpZXdFdmVudFBheWxvYWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwgfSBmcm9tICcuL0Rhc2hib2FyZE1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXREYXNoYm9hcmRWaWV3RXZlbnQoZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbCkge1xuICBjb25zdCBldmVudERhdGE6IERhc2hib2FyZFZpZXdFdmVudFBheWxvYWQgPSB7XG4gICAgZGFzaGJvYXJkSWQ6IGRhc2hib2FyZC5pZCxcbiAgICBkYXNoYm9hcmROYW1lOiBkYXNoYm9hcmQudGl0bGUsXG4gICAgZGFzaGJvYXJkVWlkOiBkYXNoYm9hcmQudWlkLFxuICAgIGZvbGRlck5hbWU6IGRhc2hib2FyZC5tZXRhLmZvbGRlclRpdGxlLFxuICAgIGV2ZW50TmFtZTogTWV0YUFuYWx5dGljc0V2ZW50TmFtZS5EYXNoYm9hcmRWaWV3LFxuICB9O1xuXG4gIHJlcG9ydE1ldGFBbmFseXRpY3MoZXZlbnREYXRhKTtcbn1cbiIsImltcG9ydCB7IGxvY2F0aW9uVXRpbCwgc2V0V2Vla1N0YXJ0IH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGlzRmV0Y2hFcnJvciwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgYmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IGtleWJpbmRpbmdTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9rZXliaW5kaW5nU3J2JztcbmltcG9ydCBzdG9yZSBmcm9tICdhcHAvY29yZS9zdG9yZSc7XG5pbXBvcnQgeyBkYXNoYm9hcmRMb2FkZXJTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3NlcnZpY2VzL0Rhc2hib2FyZExvYWRlclNydic7XG5pbXBvcnQgeyBEYXNoYm9hcmRTcnYsIGdldERhc2hib2FyZFNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc2VydmljZXMvRGFzaGJvYXJkU3J2JztcbmltcG9ydCB7IGdldFRpbWVTcnYsIFRpbWVTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3NlcnZpY2VzL1RpbWVTcnYnO1xuaW1wb3J0IHsgZGFzaGJvYXJkV2F0Y2hlciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9saXZlL2Rhc2hib2FyZC9kYXNoYm9hcmRXYXRjaGVyJztcbmltcG9ydCB7IHRvU3RhdGVLZXkgfSBmcm9tICdhcHAvZmVhdHVyZXMvdmFyaWFibGVzL3V0aWxzJztcbmltcG9ydCB7IERhc2hib2FyZERUTywgRGFzaGJvYXJkSW5pdFBoYXNlLCBEYXNoYm9hcmRSb3V0ZXMsIFN0b3JlU3RhdGUsIFRodW5rRGlzcGF0Y2gsIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgY3JlYXRlRGFzaGJvYXJkUXVlcnlSdW5uZXIgfSBmcm9tICcuLi8uLi9xdWVyeS9zdGF0ZS9EYXNoYm9hcmRRdWVyeVJ1bm5lci9EYXNoYm9hcmRRdWVyeVJ1bm5lcic7XG5pbXBvcnQgeyBpbml0VmFyaWFibGVzVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi92YXJpYWJsZXMvc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRJZkV4aXN0c0xhc3RLZXkgfSBmcm9tICcuLi8uLi92YXJpYWJsZXMvc3RhdGUvc2VsZWN0b3JzJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwgfSBmcm9tICcuL0Rhc2hib2FyZE1vZGVsJztcbmltcG9ydCB7IGVtaXREYXNoYm9hcmRWaWV3RXZlbnQgfSBmcm9tICcuL2FuYWx5dGljc1Byb2Nlc3Nvcic7XG5pbXBvcnQgeyBkYXNoYm9hcmRJbml0Q29tcGxldGVkLCBkYXNoYm9hcmRJbml0RmFpbGVkLCBkYXNoYm9hcmRJbml0RmV0Y2hpbmcsIGRhc2hib2FyZEluaXRTZXJ2aWNlcyB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXNoYm9hcmRBcmdzIHtcbiAgdXJsVWlkPzogc3RyaW5nO1xuICB1cmxTbHVnPzogc3RyaW5nO1xuICB1cmxUeXBlPzogc3RyaW5nO1xuICB1cmxGb2xkZXJJZD86IHN0cmluZyB8IG51bGw7XG4gIGFjY2Vzc1Rva2VuPzogc3RyaW5nO1xuICByb3V0ZU5hbWU/OiBzdHJpbmc7XG4gIGZpeFVybDogYm9vbGVhbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXNoYm9hcmQoXG4gIGFyZ3M6IEluaXREYXNoYm9hcmRBcmdzLFxuICBkaXNwYXRjaDogVGh1bmtEaXNwYXRjaCxcbiAgZ2V0U3RhdGU6ICgpID0+IFN0b3JlU3RhdGVcbik6IFByb21pc2U8RGFzaGJvYXJkRFRPIHwgbnVsbD4ge1xuICAvLyBXaGVuIGNyZWF0aW5nIG5ldyBvciBhZGRpbmcgcGFuZWxzIHRvIGEgZGFzaGJvYXJkIGZyb20gZXhwbG9yZSB3ZSBsb2FkIGl0IGZyb20gbG9jYWwgc3RvcmFnZVxuICBjb25zdCBtb2RlbCA9IHN0b3JlLmdldE9iamVjdDxEYXNoYm9hcmREVE8+KERBU0hCT0FSRF9GUk9NX0xTX0tFWSk7XG4gIGlmIChtb2RlbCkge1xuICAgIHJlbW92ZURhc2hib2FyZFRvRmV0Y2hGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBzd2l0Y2ggKGFyZ3Mucm91dGVOYW1lKSB7XG4gICAgICBjYXNlIERhc2hib2FyZFJvdXRlcy5Ib21lOiB7XG4gICAgICAgIC8vIGxvYWQgaG9tZSBkYXNoXG4gICAgICAgIGNvbnN0IGRhc2hEVE86IERhc2hib2FyZERUTyA9IGF3YWl0IGJhY2tlbmRTcnYuZ2V0KCcvYXBpL2Rhc2hib2FyZHMvaG9tZScpO1xuXG4gICAgICAgIC8vIGlmIHVzZXIgc3BlY2lmaWVkIGEgY3VzdG9tIGhvbWUgZGFzaGJvYXJkIHJlZGlyZWN0IHRvIHRoYXRcbiAgICAgICAgaWYgKGRhc2hEVE8ucmVkaXJlY3RVcmkpIHtcbiAgICAgICAgICBjb25zdCBuZXdVcmwgPSBsb2NhdGlvblV0aWwuc3RyaXBCYXNlRnJvbVVybChkYXNoRFRPLnJlZGlyZWN0VXJpKTtcbiAgICAgICAgICBsb2NhdGlvblNlcnZpY2UucmVwbGFjZShuZXdVcmwpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGlzYWJsZSBzb21lIGFjdGlvbnMgb24gdGhlIGRlZmF1bHQgaG9tZSBkYXNoYm9hcmRcbiAgICAgICAgZGFzaERUTy5tZXRhLmNhblNhdmUgPSBmYWxzZTtcbiAgICAgICAgZGFzaERUTy5tZXRhLmNhblNoYXJlID0gZmFsc2U7XG4gICAgICAgIGRhc2hEVE8ubWV0YS5jYW5TdGFyID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBkYXNoRFRPO1xuICAgICAgfVxuICAgICAgY2FzZSBEYXNoYm9hcmRSb3V0ZXMuUHVibGljOiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBkYXNoYm9hcmRMb2FkZXJTcnYubG9hZERhc2hib2FyZCgncHVibGljJywgYXJncy51cmxTbHVnLCBhcmdzLmFjY2Vzc1Rva2VuKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgRGFzaGJvYXJkUm91dGVzLk5vcm1hbDoge1xuICAgICAgICBjb25zdCBkYXNoRFRPOiBEYXNoYm9hcmREVE8gPSBhd2FpdCBkYXNoYm9hcmRMb2FkZXJTcnYubG9hZERhc2hib2FyZChhcmdzLnVybFR5cGUsIGFyZ3MudXJsU2x1ZywgYXJncy51cmxVaWQpO1xuXG4gICAgICAgIGlmIChhcmdzLmZpeFVybCAmJiBkYXNoRFRPLm1ldGEudXJsKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGN1cnJlbnQgdXJsIGlzIGNvcnJlY3QgKG1pZ2h0IGJlIG9sZCBzbHVnKVxuICAgICAgICAgIGNvbnN0IGRhc2hib2FyZFVybCA9IGxvY2F0aW9uVXRpbC5zdHJpcEJhc2VGcm9tVXJsKGRhc2hEVE8ubWV0YS51cmwpO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkucGF0aG5hbWU7XG5cbiAgICAgICAgICBpZiAoZGFzaGJvYXJkVXJsICE9PSBjdXJyZW50UGF0aCkge1xuICAgICAgICAgICAgLy8gU3ByZWFkIGN1cnJlbnQgbG9jYXRpb24gdG8gcGVyc2lzdCBzZWFyY2ggcGFyYW1zIHVzZWQgZm9yIG5hdmlnYXRpb25cbiAgICAgICAgICAgIGxvY2F0aW9uU2VydmljZS5yZXBsYWNlKHtcbiAgICAgICAgICAgICAgLi4ubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCksXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBkYXNoYm9hcmRVcmwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgY29ycmVjdCB1cmwgY29ycmVjdGluZycsIGRhc2hib2FyZFVybCwgY3VycmVudFBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGFzaERUTztcbiAgICAgIH1cbiAgICAgIGNhc2UgRGFzaGJvYXJkUm91dGVzLk5ldzoge1xuICAgICAgICByZXR1cm4gZ2V0TmV3RGFzaGJvYXJkTW9kZWxEYXRhKGFyZ3MudXJsRm9sZGVySWQpO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiAnVW5rbm93biByb3V0ZSAnICsgYXJncy5yb3V0ZU5hbWUgfTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElnbm9yZSBjYW5jZWxsZWQgZXJyb3JzXG4gICAgaWYgKGlzRmV0Y2hFcnJvcihlcnIpICYmIGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKGRhc2hib2FyZEluaXRGYWlsZWQoeyBtZXNzYWdlOiAnRmFpbGVkIHRvIGZldGNoIGRhc2hib2FyZCcsIGVycm9yOiBlcnIgfSkpO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgYWN0aW9uIChvciBzYWdhKSBkb2VzIGV2ZXJ5dGhpbmcgbmVlZGVkIHRvIGJvb3RzdHJhcCBhIGRhc2hib2FyZCAmIGRhc2hib2FyZCBtb2RlbC5cbiAqIEZpcnN0IGl0IGhhbmRsZXMgdGhlIHByb2Nlc3Mgb2YgZmV0Y2hpbmcgdGhlIGRhc2hib2FyZCwgY29ycmVjdGluZyB0aGUgdXJsIGlmIHJlcXVpcmVkIChjYXVzaW5nIHJlZGlyZWN0cy91cmwgdXBkYXRlcylcbiAqXG4gKiBUaGlzIGlzIHVzZWQgYm90aCBmb3Igc2luZ2xlIGRhc2hib2FyZCAmIHNvbG8gcGFuZWwgcm91dGVzLCBob21lICYgbmV3IGRhc2hib2FyZCByb3V0ZXMuXG4gKlxuICogVGhlbiBpdCBoYW5kbGVzIHRoZSBpbml0aWFsaXppbmcgb2YgdGhlIG9sZCBhbmd1bGFyIHNlcnZpY2VzIHRoYXQgdGhlIGRhc2hib2FyZCBjb21wb25lbnRzICYgcGFuZWxzIHN0aWxsIGRlcGVuZCBvblxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXNoYm9hcmQoYXJnczogSW5pdERhc2hib2FyZEFyZ3MpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgLy8gc2V0IGZldGNoaW5nIHN0YXRlXG4gICAgZGlzcGF0Y2goZGFzaGJvYXJkSW5pdEZldGNoaW5nKCkpO1xuXG4gICAgLy8gZmV0Y2ggZGFzaGJvYXJkIGRhdGFcbiAgICBjb25zdCBkYXNoRFRPID0gYXdhaXQgZmV0Y2hEYXNoYm9hcmQoYXJncywgZGlzcGF0Y2gsIGdldFN0YXRlKTtcblxuICAgIC8vIHJldHVybnMgbnVsbCBpZiB0aGVyZSB3YXMgYSByZWRpcmVjdCBvciBlcnJvclxuICAgIGlmICghZGFzaERUTykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNldCBpbml0aWFsaXppbmcgc3RhdGVcbiAgICBkaXNwYXRjaChkYXNoYm9hcmRJbml0U2VydmljZXMoKSk7XG5cbiAgICAvLyBjcmVhdGUgbW9kZWxcbiAgICBsZXQgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbDtcbiAgICB0cnkge1xuICAgICAgZGFzaGJvYXJkID0gbmV3IERhc2hib2FyZE1vZGVsKGRhc2hEVE8uZGFzaGJvYXJkLCBkYXNoRFRPLm1ldGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGlzcGF0Y2goZGFzaGJvYXJkSW5pdEZhaWxlZCh7IG1lc3NhZ2U6ICdGYWlsZWQgY3JlYXRlIGRhc2hib2FyZCBtb2RlbCcsIGVycm9yOiBlcnIgfSkpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFkZCBtaXNzaW5nIG9yZ0lkIHF1ZXJ5IHBhcmFtXG4gICAgY29uc3Qgc3RvcmVTdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSBsb2NhdGlvblNlcnZpY2UuZ2V0U2VhcmNoT2JqZWN0KCk7XG5cbiAgICBpZiAoIXF1ZXJ5UGFyYW1zLm9yZ0lkKSB7XG4gICAgICAvLyBUT0RPIHRoaXMgaXMgY3VycmVudGx5IG5vdCBwb3NzaWJsZSB3aXRoIHRoZSBMb2NhdGlvblNlcnZpY2UgQVBJXG4gICAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7IG9yZ0lkOiBzdG9yZVN0YXRlLnVzZXIub3JnSWQgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gaW5pdCBzZXJ2aWNlc1xuICAgIGNvbnN0IHRpbWVTcnY6IFRpbWVTcnYgPSBnZXRUaW1lU3J2KCk7XG4gICAgY29uc3QgZGFzaGJvYXJkU3J2OiBEYXNoYm9hcmRTcnYgPSBnZXREYXNoYm9hcmRTcnYoKTtcblxuICAgIC8vIGxlZ2FjeSBzcnYgc3RhdGUsIHdlIG5lZWQgdGhpcyB2YWx1ZSB1cGRhdGVkIGZvciBidWlsdC1pbiBhbm5vdGF0aW9uc1xuICAgIGRhc2hib2FyZFNydi5zZXRDdXJyZW50KGRhc2hib2FyZCk7XG5cbiAgICB0aW1lU3J2LmluaXQoZGFzaGJvYXJkKTtcblxuICAgIGNvbnN0IGRhc2hib2FyZFVpZCA9IHRvU3RhdGVLZXkoYXJncy51cmxVaWQgPz8gZGFzaGJvYXJkLnVpZCk7XG4gICAgLy8gdGVtcGxhdGUgdmFsdWVzIHNlcnZpY2UgbmVlZHMgdG8gaW5pdGlhbGl6ZSBjb21wbGV0ZWx5IGJlZm9yZSB0aGUgcmVzdCBvZiB0aGUgZGFzaGJvYXJkIGNhbiBsb2FkXG4gICAgYXdhaXQgZGlzcGF0Y2goaW5pdFZhcmlhYmxlc1RyYW5zYWN0aW9uKGRhc2hib2FyZFVpZCwgZGFzaGJvYXJkKSk7XG5cbiAgICAvLyBEYXNoYm9hcmRRdWVyeVJ1bm5lciBuZWVkcyB0byBydW4gYWZ0ZXIgYWxsIHZhcmlhYmxlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgc28gdGhhdCBhbnkgYW5ub3RhdGlvbiBxdWVyeSBpbmNsdWRpbmcgYSB2YXJpYWJsZVxuICAgIC8vIHdpbGwgYmUgY29ycmVjdGx5IHJlc29sdmVkXG4gICAgY29uc3QgcnVubmVyID0gY3JlYXRlRGFzaGJvYXJkUXVlcnlSdW5uZXIoeyBkYXNoYm9hcmQsIHRpbWVTcnYgfSk7XG4gICAgcnVubmVyLnJ1bih7IGRhc2hib2FyZCwgcmFuZ2U6IHRpbWVTcnYudGltZVJhbmdlKCkgfSk7XG5cbiAgICBpZiAoZ2V0SWZFeGlzdHNMYXN0S2V5KGdldFN0YXRlKCkpICE9PSBkYXNoYm9hcmRVaWQpIHtcbiAgICAgIC8vIGlmIGEgcHJldmlvdXMgZGFzaGJvYXJkIGhhcyBzbG93IHJ1bm5pbmcgdmFyaWFibGUgcXVlcmllcyB0aGUgYmF0Y2ggdWlkIHdpbGwgYmUgdGhlIG5ldyBvbmVcbiAgICAgIC8vIGJ1dCB0aGUgYXJncy51cmxVaWQgd2lsbCBiZSB0aGUgc2FtZSBhcyBiZWZvcmUgaW5pdFZhcmlhYmxlc1RyYW5zYWN0aW9uIHdhcyBjYWxsZWQgc28gdGhlbiB3ZSBjYW4ndCBjb250aW51ZSBpbml0aWFsaXppbmdcbiAgICAgIC8vIHRoZSBwcmV2aW91cyBkYXNoYm9hcmQuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgZGFzaGJvYXJkIGlzIGluIGEgZGlmZmVyZW50IGluaXQgcGhhc2UgaXQgbWVhbnMgaXQgY2FuY2VsbGVkIGR1cmluZyBzZXJ2aWNlIGluaXRcbiAgICBpZiAoZ2V0U3RhdGUoKS5kYXNoYm9hcmQuaW5pdFBoYXNlICE9PSBEYXNoYm9hcmRJbml0UGhhc2UuU2VydmljZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgZGFzaGJvYXJkLnByb2Nlc3NSZXBlYXRzKCk7XG5cbiAgICAgIC8vIGhhbmRsZSBhdXRvIGZpeCBleHBlcmltZW50YWwgZmVhdHVyZVxuICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmF1dG9maXRwYW5lbHMpIHtcbiAgICAgICAgZGFzaGJvYXJkLmF1dG9GaXRQYW5lbHMod2luZG93LmlubmVySGVpZ2h0LCBxdWVyeVBhcmFtcy5raW9zayk7XG4gICAgICB9XG5cbiAgICAgIGtleWJpbmRpbmdTcnYuc2V0dXBEYXNoYm9hcmRCaW5kaW5ncyhkYXNoYm9hcmQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbignRGFzaGJvYXJkIGluaXQgZmFpbGVkJywgZXJyKSkpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cblxuICAgIC8vIHNlbmQgb3BlbiBkYXNoYm9hcmQgZXZlbnRcbiAgICBpZiAoYXJncy5yb3V0ZU5hbWUgIT09IERhc2hib2FyZFJvdXRlcy5OZXcpIHtcbiAgICAgIGVtaXREYXNoYm9hcmRWaWV3RXZlbnQoZGFzaGJvYXJkKTtcblxuICAgICAgLy8gTGlzdGVuIGZvciBjaGFuZ2VzIG9uIHRoZSBjdXJyZW50IGRhc2hib2FyZFxuICAgICAgZGFzaGJvYXJkV2F0Y2hlci53YXRjaChkYXNoYm9hcmQudWlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGFzaGJvYXJkV2F0Y2hlci5sZWF2ZSgpO1xuICAgIH1cblxuICAgIC8vIHNldCB3ZWVrIHN0YXJ0XG4gICAgaWYgKGRhc2hib2FyZC53ZWVrU3RhcnQgIT09ICcnKSB7XG4gICAgICBzZXRXZWVrU3RhcnQoZGFzaGJvYXJkLndlZWtTdGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFdlZWtTdGFydChjb25maWcuYm9vdERhdGEudXNlci53ZWVrU3RhcnQpO1xuICAgIH1cblxuICAgIC8vIHlheSB3ZSBhcmUgZG9uZVxuICAgIGRpc3BhdGNoKGRhc2hib2FyZEluaXRDb21wbGV0ZWQoZGFzaGJvYXJkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdEYXNoYm9hcmRNb2RlbERhdGEodXJsRm9sZGVySWQ/OiBzdHJpbmcgfCBudWxsKTogYW55IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBtZXRhOiB7XG4gICAgICBjYW5TdGFyOiBmYWxzZSxcbiAgICAgIGNhblNoYXJlOiBmYWxzZSxcbiAgICAgIGNhbkRlbGV0ZTogZmFsc2UsXG4gICAgICBpc05ldzogdHJ1ZSxcbiAgICAgIGZvbGRlcklkOiAwLFxuICAgIH0sXG4gICAgZGFzaGJvYXJkOiB7XG4gICAgICB0aXRsZTogJ05ldyBkYXNoYm9hcmQnLFxuICAgICAgcGFuZWxzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnYWRkLXBhbmVsJyxcbiAgICAgICAgICBncmlkUG9zOiB7IHg6IDAsIHk6IDAsIHc6IDEyLCBoOiA5IH0sXG4gICAgICAgICAgdGl0bGU6ICdQYW5lbCBUaXRsZScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH07XG5cbiAgaWYgKHVybEZvbGRlcklkKSB7XG4gICAgZGF0YS5tZXRhLmZvbGRlcklkID0gcGFyc2VJbnQodXJsRm9sZGVySWQsIDEwKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5jb25zdCBEQVNIQk9BUkRfRlJPTV9MU19LRVkgPSAnREFTSEJPQVJEX0ZST01fTFNfS0VZJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldERhc2hib2FyZFRvRmV0Y2hGcm9tTG9jYWxTdG9yYWdlKG1vZGVsOiBEYXNoYm9hcmREVE8pIHtcbiAgc3RvcmUuc2V0T2JqZWN0KERBU0hCT0FSRF9GUk9NX0xTX0tFWSwgbW9kZWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gIHN0b3JlLmRlbGV0ZShEQVNIQk9BUkRfRlJPTV9MU19LRVkpO1xufVxuIiwiaW1wb3J0IHsgcGFydGlhbCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERlZXBNYXAsIEZpZWxkRXJyb3IsIHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGxvY2F0aW9uVXRpbCwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGxvY2F0aW9uU2VydmljZSwgcmVwb3J0SW50ZXJhY3Rpb24gfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIEZpZWxkLCBJbnB1dENvbnRyb2wsIE1vZGFsLCBSYWRpb0J1dHRvbkdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRGFzaGJvYXJkUGlja2VyIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9TZWxlY3QvRGFzaGJvYXJkUGlja2VyJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyByZW1vdmVEYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUvaW5pdERhc2hib2FyZCc7XG5pbXBvcnQgeyBFeHBsb3JlSWQsIEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRFeHBsb3JlSXRlbVNlbGVjdG9yIH0gZnJvbSAnLi4vc3RhdGUvc2VsZWN0b3JzJztcblxuaW1wb3J0IHsgc2V0RGFzaGJvYXJkSW5Mb2NhbFN0b3JhZ2UsIEFkZFRvRGFzaGJvYXJkRXJyb3IgfSBmcm9tICcuL2FkZFRvRGFzaGJvYXJkJztcblxuZW51bSBTYXZlVGFyZ2V0IHtcbiAgTmV3RGFzaGJvYXJkID0gJ25ldy1kYXNoYm9hcmQnLFxuICBFeGlzdGluZ0Rhc2hib2FyZCA9ICdleGlzdGluZy1kYXNoYm9hcmQnLFxufVxuXG5pbnRlcmZhY2UgU2F2ZVRhcmdldERUTyB7XG4gIHNhdmVUYXJnZXQ6IFNhdmVUYXJnZXQ7XG59XG5pbnRlcmZhY2UgU2F2ZVRvTmV3RGFzaGJvYXJkRFRPIGV4dGVuZHMgU2F2ZVRhcmdldERUTyB7XG4gIHNhdmVUYXJnZXQ6IFNhdmVUYXJnZXQuTmV3RGFzaGJvYXJkO1xufVxuXG5pbnRlcmZhY2UgU2F2ZVRvRXhpc3RpbmdEYXNoYm9hcmQgZXh0ZW5kcyBTYXZlVGFyZ2V0RFRPIHtcbiAgc2F2ZVRhcmdldDogU2F2ZVRhcmdldC5FeGlzdGluZ0Rhc2hib2FyZDtcbiAgZGFzaGJvYXJkVWlkOiBzdHJpbmc7XG59XG5cbnR5cGUgRm9ybURUTyA9IFNhdmVUb05ld0Rhc2hib2FyZERUTyB8IFNhdmVUb0V4aXN0aW5nRGFzaGJvYXJkO1xuXG5mdW5jdGlvbiBhc3NlcnRJc1NhdmVUb0V4aXN0aW5nRGFzaGJvYXJkRXJyb3IoXG4gIGVycm9yczogRGVlcE1hcDxGb3JtRFRPLCBGaWVsZEVycm9yPlxuKTogYXNzZXJ0cyBlcnJvcnMgaXMgRGVlcE1hcDxTYXZlVG9FeGlzdGluZ0Rhc2hib2FyZCwgRmllbGRFcnJvcj4ge1xuICAvLyB0aGUgc2hhcGUgb2YgdGhlIGVycm9ycyBvYmplY3QgaXMgYWx3YXlzIGNvbXBhdGlibGUgd2l0aCB0aGUgdHlwZSBhYm92ZSwgYnV0IHdlIG5lZWQgdG9cbiAgLy8gZXhwbGljaXRseSBhc3NlcnQgaXRzIHR5cGUgc28gdGhhdCBUUyBjYW4gbmFycm93IGRvd24gRm9ybURUTyB0byBTYXZlVG9FeGlzdGluZ0Rhc2hib2FyZFxuICAvLyB3aGVuIHdlIHVzZSBpdCBpbiB0aGUgZm9ybS5cbn1cblxuZnVuY3Rpb24gZ2V0RGFzaGJvYXJkVVJMKGRhc2hib2FyZFVpZD86IHN0cmluZykge1xuICByZXR1cm4gZGFzaGJvYXJkVWlkID8gYGQvJHtkYXNoYm9hcmRVaWR9YCA6ICdkYXNoYm9hcmQvbmV3Jztcbn1cblxuZW51bSBHZW5lcmljRXJyb3Ige1xuICBVTktOT1dOID0gJ3Vua25vd24tZXJyb3InLFxuICBOQVZJR0FUSU9OID0gJ25hdmlnYXRpb24tZXJyb3InLFxufVxuXG5pbnRlcmZhY2UgU3VibWlzc2lvbkVycm9yIHtcbiAgZXJyb3I6IEFkZFRvRGFzaGJvYXJkRXJyb3IgfCBHZW5lcmljRXJyb3I7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgZXhwbG9yZUlkOiBFeHBsb3JlSWQ7XG59XG5cbmV4cG9ydCBjb25zdCBBZGRUb0Rhc2hib2FyZE1vZGFsID0gKHsgb25DbG9zZSwgZXhwbG9yZUlkIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IGV4cGxvcmVJdGVtID0gdXNlU2VsZWN0b3IoZ2V0RXhwbG9yZUl0ZW1TZWxlY3RvcihleHBsb3JlSWQpKSE7XG4gIGNvbnN0IFtzdWJtaXNzaW9uRXJyb3IsIHNldFN1Ym1pc3Npb25FcnJvcl0gPSB1c2VTdGF0ZTxTdWJtaXNzaW9uRXJyb3IgfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IHtcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgY29udHJvbCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gICAgd2F0Y2gsXG4gIH0gPSB1c2VGb3JtPEZvcm1EVE8+KHtcbiAgICBkZWZhdWx0VmFsdWVzOiB7IHNhdmVUYXJnZXQ6IFNhdmVUYXJnZXQuTmV3RGFzaGJvYXJkIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGNhbkNyZWF0ZURhc2hib2FyZCA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGFzaGJvYXJkc0NyZWF0ZSwgY29udGV4dFNydi5pc0VkaXRvcik7XG4gIGNvbnN0IGNhbldyaXRlRGFzaGJvYXJkID0gY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5EYXNoYm9hcmRzV3JpdGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpO1xuXG4gIGNvbnN0IHNhdmVUYXJnZXRzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8U2F2ZVRhcmdldD4+ID0gW107XG4gIGlmIChjYW5DcmVhdGVEYXNoYm9hcmQpIHtcbiAgICBzYXZlVGFyZ2V0cy5wdXNoKHtcbiAgICAgIGxhYmVsOiAnTmV3IGRhc2hib2FyZCcsXG4gICAgICB2YWx1ZTogU2F2ZVRhcmdldC5OZXdEYXNoYm9hcmQsXG4gICAgfSk7XG4gIH1cbiAgaWYgKGNhbldyaXRlRGFzaGJvYXJkKSB7XG4gICAgc2F2ZVRhcmdldHMucHVzaCh7XG4gICAgICBsYWJlbDogJ0V4aXN0aW5nIGRhc2hib2FyZCcsXG4gICAgICB2YWx1ZTogU2F2ZVRhcmdldC5FeGlzdGluZ0Rhc2hib2FyZCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHNhdmVUYXJnZXQgPSBzYXZlVGFyZ2V0cy5sZW5ndGggPiAxID8gd2F0Y2goJ3NhdmVUYXJnZXQnKSA6IHNhdmVUYXJnZXRzWzBdLnZhbHVlO1xuXG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBgQWRkIHBhbmVsIHRvICR7c2F2ZVRhcmdldHMubGVuZ3RoID4gMSA/ICdkYXNoYm9hcmQnIDogc2F2ZVRhcmdldHNbMF0ubGFiZWwhLnRvTG93ZXJDYXNlKCl9YDtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChvcGVuSW5OZXdUYWI6IGJvb2xlYW4sIGRhdGE6IEZvcm1EVE8pID0+IHtcbiAgICBzZXRTdWJtaXNzaW9uRXJyb3IodW5kZWZpbmVkKTtcbiAgICBjb25zdCBkYXNoYm9hcmRVaWQgPSBkYXRhLnNhdmVUYXJnZXQgPT09IFNhdmVUYXJnZXQuRXhpc3RpbmdEYXNoYm9hcmQgPyBkYXRhLmRhc2hib2FyZFVpZCA6IHVuZGVmaW5lZDtcblxuICAgIHJlcG9ydEludGVyYWN0aW9uKCdlMmRfc3VibWl0Jywge1xuICAgICAgbmV3VGFiOiBvcGVuSW5OZXdUYWIsXG4gICAgICBzYXZlVGFyZ2V0OiBkYXRhLnNhdmVUYXJnZXQsXG4gICAgICBxdWVyaWVzOiBleHBsb3JlSXRlbS5xdWVyaWVzLmxlbmd0aCxcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZXREYXNoYm9hcmRJbkxvY2FsU3RvcmFnZSh7XG4gICAgICAgIGRhc2hib2FyZFVpZCxcbiAgICAgICAgZGF0YXNvdXJjZTogZXhwbG9yZUl0ZW0uZGF0YXNvdXJjZUluc3RhbmNlPy5nZXRSZWYoKSxcbiAgICAgICAgcXVlcmllczogZXhwbG9yZUl0ZW0ucXVlcmllcyxcbiAgICAgICAgcXVlcnlSZXNwb25zZTogZXhwbG9yZUl0ZW0ucXVlcnlSZXNwb25zZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNhc2UgQWRkVG9EYXNoYm9hcmRFcnJvci5GRVRDSF9EQVNIQk9BUkQ6XG4gICAgICAgICAgc2V0U3VibWlzc2lvbkVycm9yKHsgZXJyb3IsIG1lc3NhZ2U6ICdDb3VsZCBub3QgZmV0Y2ggZGFzaGJvYXJkIGluZm9ybWF0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLicgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQWRkVG9EYXNoYm9hcmRFcnJvci5TRVRfREFTSEJPQVJEX0xTOlxuICAgICAgICAgIHNldFN1Ym1pc3Npb25FcnJvcih7IGVycm9yLCBtZXNzYWdlOiAnQ291bGQgbm90IGFkZCBwYW5lbCB0byBkYXNoYm9hcmQuIFBsZWFzZSB0cnkgYWdhaW4uJyB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzZXRTdWJtaXNzaW9uRXJyb3IoeyBlcnJvcjogR2VuZXJpY0Vycm9yLlVOS05PV04sIG1lc3NhZ2U6ICdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhc2hib2FyZFVSTCA9IGdldERhc2hib2FyZFVSTChkYXNoYm9hcmRVaWQpO1xuICAgIGlmICghb3BlbkluTmV3VGFiKSB7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaChsb2NhdGlvblV0aWwuc3RyaXBCYXNlRnJvbVVybChkYXNoYm9hcmRVUkwpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaWRUYWJPcGVuID0gISFnbG9iYWwub3Blbihjb25maWcuYXBwVXJsICsgZGFzaGJvYXJkVVJMLCAnX2JsYW5rJyk7XG4gICAgaWYgKCFkaWRUYWJPcGVuKSB7XG4gICAgICBzZXRTdWJtaXNzaW9uRXJyb3Ioe1xuICAgICAgICBlcnJvcjogR2VuZXJpY0Vycm9yLk5BVklHQVRJT04sXG4gICAgICAgIG1lc3NhZ2U6ICdDb3VsZCBub3QgbmF2aWdhdGUgdG8gdGhlIHNlbGVjdGVkIGRhc2hib2FyZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nLFxuICAgICAgfSk7XG4gICAgICByZW1vdmVEYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXBvcnRJbnRlcmFjdGlvbignZTJkX29wZW4nKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIHRpdGxlPXttb2RhbFRpdGxlfSBvbkRpc21pc3M9e29uQ2xvc2V9IGlzT3Blbj5cbiAgICAgIDxmb3JtPlxuICAgICAgICB7c2F2ZVRhcmdldHMubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiVGFyZ2V0IGRhc2hib2FyZFwiIGRlc2NyaXB0aW9uPVwiQ2hvb3NlIHdoZXJlIHRvIGFkZCB0aGUgcGFuZWwuXCI+XG4gICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXAgb3B0aW9ucz17c2F2ZVRhcmdldHN9IHsuLi5maWVsZH0gaWQ9XCJlMmQtc2F2ZS10YXJnZXRcIiAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIG5hbWU9XCJzYXZlVGFyZ2V0XCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzYXZlVGFyZ2V0ID09PSBTYXZlVGFyZ2V0LkV4aXN0aW5nRGFzaGJvYXJkICYmXG4gICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydElzU2F2ZVRvRXhpc3RpbmdEYXNoYm9hcmRFcnJvcihlcnJvcnMpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCB2YWx1ZSwgb25DaGFuZ2UsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTZWxlY3QgaW4gd2hpY2ggZGFzaGJvYXJkIHRoZSBwYW5lbCB3aWxsIGJlIGNyZWF0ZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5kYXNoYm9hcmRVaWQ/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmRhc2hib2FyZFVpZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZFBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dElkPVwiZTJkLWRhc2hib2FyZC1waWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkKSA9PiBvbkNoYW5nZShkPy51aWQpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgbmFtZT1cImRhc2hib2FyZFVpZFwiXG4gICAgICAgICAgICAgICAgc2hvdWxkVW5yZWdpc3RlclxuICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nIH0gfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSkoKX1cblxuICAgICAgICB7c3VibWlzc2lvbkVycm9yICYmIChcbiAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiIHRpdGxlPVwiRXJyb3IgYWRkaW5nIHRoZSBwYW5lbFwiPlxuICAgICAgICAgICAge3N1Ym1pc3Npb25FcnJvci5tZXNzYWdlfVxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICl9XG5cbiAgICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJyZXNldFwiIG9uQ2xpY2s9e29uQ2xvc2V9IGZpbGw9XCJvdXRsaW5lXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdChwYXJ0aWFsKG9uU3VibWl0LCB0cnVlKSl9XG4gICAgICAgICAgICBpY29uPVwiZXh0ZXJuYWwtbGluay1hbHRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIE9wZW4gaW4gbmV3IHRhYlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0KHBhcnRpYWwob25TdWJtaXQsIGZhbHNlKSl9IGljb249XCJhcHBzXCI+XG4gICAgICAgICAgICBPcGVuIGRhc2hib2FyZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L01vZGFsPlxuICApO1xufTtcbiIsImltcG9ydCB7IERhdGFGcmFtZSwgRGF0YVF1ZXJ5LCBEYXRhU291cmNlUmVmIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBiYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHtcbiAgZ2V0TmV3RGFzaGJvYXJkTW9kZWxEYXRhLFxuICBzZXREYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSxcbn0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9pbml0RGFzaGJvYXJkJztcbmltcG9ydCB7IERhc2hib2FyZERUTywgRXhwbG9yZVBhbmVsRGF0YSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBlbnVtIEFkZFRvRGFzaGJvYXJkRXJyb3Ige1xuICBGRVRDSF9EQVNIQk9BUkQgPSAnZmV0Y2gtZGFzaGJvYXJkJyxcbiAgU0VUX0RBU0hCT0FSRF9MUyA9ICdzZXQtZGFzaGJvYXJkLWxzLWVycm9yJyxcbn1cblxuaW50ZXJmYWNlIEFkZFBhbmVsVG9EYXNoYm9hcmRPcHRpb25zIHtcbiAgcXVlcmllczogRGF0YVF1ZXJ5W107XG4gIHF1ZXJ5UmVzcG9uc2U6IEV4cGxvcmVQYW5lbERhdGE7XG4gIGRhdGFzb3VyY2U/OiBEYXRhU291cmNlUmVmO1xuICBkYXNoYm9hcmRVaWQ/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhc2hib2FyZCgpOiBEYXNoYm9hcmREVE8ge1xuICBjb25zdCBkdG8gPSBnZXROZXdEYXNoYm9hcmRNb2RlbERhdGEoKTtcblxuICAvLyBnZXROZXdEYXNoYm9hcmRNb2RlbERhdGEgYWRkcyBieSBkZWZhdWx0IHRoZSBcImFkZC1wYW5lbFwiIHBhbmVsLiBXZSBkb24ndCB3YW50IHRoYXQuXG4gIGR0by5kYXNoYm9hcmQucGFuZWxzID0gW107XG5cbiAgcmV0dXJuIGR0bztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldERhc2hib2FyZEluTG9jYWxTdG9yYWdlKG9wdGlvbnM6IEFkZFBhbmVsVG9EYXNoYm9hcmRPcHRpb25zKSB7XG4gIGNvbnN0IHBhbmVsVHlwZSA9IGdldFBhbmVsVHlwZShvcHRpb25zLnF1ZXJpZXMsIG9wdGlvbnMucXVlcnlSZXNwb25zZSk7XG4gIGNvbnN0IHBhbmVsID0ge1xuICAgIHRhcmdldHM6IG9wdGlvbnMucXVlcmllcyxcbiAgICB0eXBlOiBwYW5lbFR5cGUsXG4gICAgdGl0bGU6ICdOZXcgUGFuZWwnLFxuICAgIGdyaWRQb3M6IHsgeDogMCwgeTogMCwgdzogMTIsIGg6IDggfSxcbiAgICBkYXRhc291cmNlOiBvcHRpb25zLmRhdGFzb3VyY2UsXG4gIH07XG5cbiAgbGV0IGR0bzogRGFzaGJvYXJkRFRPO1xuXG4gIGlmIChvcHRpb25zLmRhc2hib2FyZFVpZCkge1xuICAgIHRyeSB7XG4gICAgICBkdG8gPSBhd2FpdCBiYWNrZW5kU3J2LmdldERhc2hib2FyZEJ5VWlkKG9wdGlvbnMuZGFzaGJvYXJkVWlkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBBZGRUb0Rhc2hib2FyZEVycm9yLkZFVENIX0RBU0hCT0FSRDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZHRvID0gY3JlYXRlRGFzaGJvYXJkKCk7XG4gIH1cblxuICBkdG8uZGFzaGJvYXJkLnBhbmVscyA9IFtwYW5lbCwgLi4uKGR0by5kYXNoYm9hcmQucGFuZWxzID8/IFtdKV07XG5cbiAgdHJ5IHtcbiAgICBzZXREYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZShkdG8pO1xuICB9IGNhdGNoIHtcbiAgICB0aHJvdyBBZGRUb0Rhc2hib2FyZEVycm9yLlNFVF9EQVNIQk9BUkRfTFM7XG4gIH1cbn1cblxuY29uc3QgaXNWaXNpYmxlID0gKHF1ZXJ5OiBEYXRhUXVlcnkpID0+ICFxdWVyeS5oaWRlO1xuY29uc3QgaGFzUmVmSWQgPSAocmVmSWQ6IERhdGFGcmFtZVsncmVmSWQnXSkgPT4gKGZyYW1lOiBEYXRhRnJhbWUpID0+IGZyYW1lLnJlZklkID09PSByZWZJZDtcblxuZnVuY3Rpb24gZ2V0UGFuZWxUeXBlKHF1ZXJpZXM6IERhdGFRdWVyeVtdLCBxdWVyeVJlc3BvbnNlOiBFeHBsb3JlUGFuZWxEYXRhKSB7XG4gIGZvciAoY29uc3QgeyByZWZJZCB9IG9mIHF1ZXJpZXMuZmlsdGVyKGlzVmlzaWJsZSkpIHtcbiAgICAvLyB0cmFjZXZpZXcgaXMgbm90IHN1cHBvcnRlZCBpbiBkYXNoYm9hcmRzLCBza2lwcGluZyBpdCBmb3Igbm93LlxuICAgIGNvbnN0IGhhc1F1ZXJ5UmVmSWQgPSBoYXNSZWZJZChyZWZJZCk7XG4gICAgaWYgKHF1ZXJ5UmVzcG9uc2UuZ3JhcGhGcmFtZXMuc29tZShoYXNRdWVyeVJlZklkKSkge1xuICAgICAgcmV0dXJuICd0aW1lc2VyaWVzJztcbiAgICB9XG4gICAgaWYgKHF1ZXJ5UmVzcG9uc2UubG9nc0ZyYW1lcy5zb21lKGhhc1F1ZXJ5UmVmSWQpKSB7XG4gICAgICByZXR1cm4gJ2xvZ3MnO1xuICAgIH1cbiAgICBpZiAocXVlcnlSZXNwb25zZS5ub2RlR3JhcGhGcmFtZXMuc29tZShoYXNRdWVyeVJlZklkKSkge1xuICAgICAgcmV0dXJuICdub2RlR3JhcGgnO1xuICAgIH1cbiAgICBpZiAocXVlcnlSZXNwb25zZS50cmFjZUZyYW1lcy5zb21lKGhhc1F1ZXJ5UmVmSWQpKSB7XG4gICAgICByZXR1cm4gJ3RyYWNlcyc7XG4gICAgfVxuICB9XG5cbiAgLy8gZmFsbGluZyBiYWNrIHRvIHRhYmxlXG4gIHJldHVybiAndGFibGUnO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFRvb2xiYXJCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBFeHBsb3JlSWQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRFeHBsb3JlSXRlbVNlbGVjdG9yIH0gZnJvbSAnLi4vc3RhdGUvc2VsZWN0b3JzJztcblxuaW1wb3J0IHsgQWRkVG9EYXNoYm9hcmRNb2RhbCB9IGZyb20gJy4vQWRkVG9EYXNoYm9hcmRNb2RhbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGV4cGxvcmVJZDogRXhwbG9yZUlkO1xufVxuXG5leHBvcnQgY29uc3QgQWRkVG9EYXNoYm9hcmQgPSAoeyBleHBsb3JlSWQgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2VsZWN0RXhwbG9yZUl0ZW0gPSBnZXRFeHBsb3JlSXRlbVNlbGVjdG9yKGV4cGxvcmVJZCk7XG4gIGNvbnN0IGV4cGxvcmVQYW5lSGFzUXVlcmllcyA9ICEhdXNlU2VsZWN0b3Ioc2VsZWN0RXhwbG9yZUl0ZW0pPy5xdWVyaWVzPy5sZW5ndGg7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRvb2xiYXJCdXR0b25cbiAgICAgICAgaWNvbj1cImFwcHNcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9XG4gICAgICAgIGFyaWEtbGFiZWw9XCJBZGQgdG8gZGFzaGJvYXJkXCJcbiAgICAgICAgZGlzYWJsZWQ9eyFleHBsb3JlUGFuZUhhc1F1ZXJpZXN9XG4gICAgICA+XG4gICAgICAgIEFkZCB0byBkYXNoYm9hcmRcbiAgICAgIDwvVG9vbGJhckJ1dHRvbj5cblxuICAgICAge2lzT3BlbiAmJiA8QWRkVG9EYXNoYm9hcmRNb2RhbCBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfSBleHBsb3JlSWQ9e2V4cGxvcmVJZH0gLz59XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInJlcG9ydE1ldGFBbmFseXRpY3MiLCJNZXRhQW5hbHl0aWNzRXZlbnROYW1lIiwiZW1pdERhc2hib2FyZFZpZXdFdmVudCIsImRhc2hib2FyZCIsImV2ZW50RGF0YSIsImRhc2hib2FyZElkIiwiaWQiLCJkYXNoYm9hcmROYW1lIiwidGl0bGUiLCJkYXNoYm9hcmRVaWQiLCJ1aWQiLCJmb2xkZXJOYW1lIiwibWV0YSIsImZvbGRlclRpdGxlIiwiZXZlbnROYW1lIiwiRGFzaGJvYXJkVmlldyIsImxvY2F0aW9uVXRpbCIsInNldFdlZWtTdGFydCIsImNvbmZpZyIsImlzRmV0Y2hFcnJvciIsImxvY2F0aW9uU2VydmljZSIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiYmFja2VuZFNydiIsImtleWJpbmRpbmdTcnYiLCJzdG9yZSIsImRhc2hib2FyZExvYWRlclNydiIsImdldERhc2hib2FyZFNydiIsImdldFRpbWVTcnYiLCJkYXNoYm9hcmRXYXRjaGVyIiwidG9TdGF0ZUtleSIsIkRhc2hib2FyZEluaXRQaGFzZSIsIkRhc2hib2FyZFJvdXRlcyIsImNyZWF0ZURhc2hib2FyZFF1ZXJ5UnVubmVyIiwiaW5pdFZhcmlhYmxlc1RyYW5zYWN0aW9uIiwiZ2V0SWZFeGlzdHNMYXN0S2V5IiwiRGFzaGJvYXJkTW9kZWwiLCJkYXNoYm9hcmRJbml0Q29tcGxldGVkIiwiZGFzaGJvYXJkSW5pdEZhaWxlZCIsImRhc2hib2FyZEluaXRGZXRjaGluZyIsImRhc2hib2FyZEluaXRTZXJ2aWNlcyIsImZldGNoRGFzaGJvYXJkIiwiYXJncyIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJtb2RlbCIsImdldE9iamVjdCIsIkRBU0hCT0FSRF9GUk9NX0xTX0tFWSIsInJlbW92ZURhc2hib2FyZFRvRmV0Y2hGcm9tTG9jYWxTdG9yYWdlIiwicm91dGVOYW1lIiwiSG9tZSIsImRhc2hEVE8iLCJnZXQiLCJyZWRpcmVjdFVyaSIsIm5ld1VybCIsInN0cmlwQmFzZUZyb21VcmwiLCJyZXBsYWNlIiwiY2FuU2F2ZSIsImNhblNoYXJlIiwiY2FuU3RhciIsIlB1YmxpYyIsImxvYWREYXNoYm9hcmQiLCJ1cmxTbHVnIiwiYWNjZXNzVG9rZW4iLCJOb3JtYWwiLCJ1cmxUeXBlIiwidXJsVWlkIiwiZml4VXJsIiwidXJsIiwiZGFzaGJvYXJkVXJsIiwiY3VycmVudFBhdGgiLCJnZXRMb2NhdGlvbiIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsIk5ldyIsImdldE5ld0Rhc2hib2FyZE1vZGVsRGF0YSIsInVybEZvbGRlcklkIiwibWVzc2FnZSIsImVyciIsImNhbmNlbGxlZCIsImVycm9yIiwiaW5pdERhc2hib2FyZCIsInN0b3JlU3RhdGUiLCJxdWVyeVBhcmFtcyIsImdldFNlYXJjaE9iamVjdCIsIm9yZ0lkIiwicGFydGlhbCIsInVzZXIiLCJ0aW1lU3J2IiwiZGFzaGJvYXJkU3J2Iiwic2V0Q3VycmVudCIsImluaXQiLCJydW5uZXIiLCJydW4iLCJyYW5nZSIsInRpbWVSYW5nZSIsImluaXRQaGFzZSIsIlNlcnZpY2VzIiwicHJvY2Vzc1JlcGVhdHMiLCJhdXRvZml0cGFuZWxzIiwiYXV0b0ZpdFBhbmVscyIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwia2lvc2siLCJzZXR1cERhc2hib2FyZEJpbmRpbmdzIiwiRXJyb3IiLCJ3YXRjaCIsImxlYXZlIiwid2Vla1N0YXJ0IiwiYm9vdERhdGEiLCJkYXRhIiwiY2FuRGVsZXRlIiwiaXNOZXciLCJmb2xkZXJJZCIsInBhbmVscyIsInR5cGUiLCJncmlkUG9zIiwieCIsInkiLCJ3IiwiaCIsInBhcnNlSW50Iiwic2V0RGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UiLCJzZXRPYmplY3QiLCJkZWxldGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsInVzZVNlbGVjdG9yIiwicmVwb3J0SW50ZXJhY3Rpb24iLCJBbGVydCIsIkJ1dHRvbiIsIkZpZWxkIiwiSW5wdXRDb250cm9sIiwiTW9kYWwiLCJSYWRpb0J1dHRvbkdyb3VwIiwiRGFzaGJvYXJkUGlja2VyIiwiY29udGV4dFNydiIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJnZXRFeHBsb3JlSXRlbVNlbGVjdG9yIiwic2V0RGFzaGJvYXJkSW5Mb2NhbFN0b3JhZ2UiLCJBZGRUb0Rhc2hib2FyZEVycm9yIiwiU2F2ZVRhcmdldCIsImFzc2VydElzU2F2ZVRvRXhpc3RpbmdEYXNoYm9hcmRFcnJvciIsImVycm9ycyIsImdldERhc2hib2FyZFVSTCIsIkdlbmVyaWNFcnJvciIsIkFkZFRvRGFzaGJvYXJkTW9kYWwiLCJvbkNsb3NlIiwiZXhwbG9yZUlkIiwiZXhwbG9yZUl0ZW0iLCJzdWJtaXNzaW9uRXJyb3IiLCJzZXRTdWJtaXNzaW9uRXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJjb250cm9sIiwiZm9ybVN0YXRlIiwiZGVmYXVsdFZhbHVlcyIsInNhdmVUYXJnZXQiLCJOZXdEYXNoYm9hcmQiLCJjYW5DcmVhdGVEYXNoYm9hcmQiLCJoYXNBY2Nlc3MiLCJEYXNoYm9hcmRzQ3JlYXRlIiwiaXNFZGl0b3IiLCJjYW5Xcml0ZURhc2hib2FyZCIsIkRhc2hib2FyZHNXcml0ZSIsInNhdmVUYXJnZXRzIiwicHVzaCIsImxhYmVsIiwidmFsdWUiLCJFeGlzdGluZ0Rhc2hib2FyZCIsImxlbmd0aCIsIm1vZGFsVGl0bGUiLCJ0b0xvd2VyQ2FzZSIsIm9uU3VibWl0Iiwib3BlbkluTmV3VGFiIiwidW5kZWZpbmVkIiwibmV3VGFiIiwicXVlcmllcyIsImRhdGFzb3VyY2UiLCJkYXRhc291cmNlSW5zdGFuY2UiLCJnZXRSZWYiLCJxdWVyeVJlc3BvbnNlIiwiRkVUQ0hfREFTSEJPQVJEIiwiU0VUX0RBU0hCT0FSRF9MUyIsIlVOS05PV04iLCJkYXNoYm9hcmRVUkwiLCJkaWRUYWJPcGVuIiwiZ2xvYmFsIiwib3BlbiIsImFwcFVybCIsIk5BVklHQVRJT04iLCJmaWVsZCIsIm9uQ2hhbmdlIiwiZCIsInJlcXVpcmVkIiwiY3JlYXRlRGFzaGJvYXJkIiwiZHRvIiwib3B0aW9ucyIsInBhbmVsVHlwZSIsImdldFBhbmVsVHlwZSIsInBhbmVsIiwidGFyZ2V0cyIsImdldERhc2hib2FyZEJ5VWlkIiwiZSIsImlzVmlzaWJsZSIsInF1ZXJ5IiwiaGlkZSIsImhhc1JlZklkIiwicmVmSWQiLCJmcmFtZSIsImZpbHRlciIsImhhc1F1ZXJ5UmVmSWQiLCJncmFwaEZyYW1lcyIsInNvbWUiLCJsb2dzRnJhbWVzIiwibm9kZUdyYXBoRnJhbWVzIiwidHJhY2VGcmFtZXMiLCJUb29sYmFyQnV0dG9uIiwiQWRkVG9EYXNoYm9hcmQiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzZWxlY3RFeHBsb3JlSXRlbSIsImV4cGxvcmVQYW5lSGFzUXVlcmllcyJdLCJzb3VyY2VSb290IjoiIn0=