"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NewDashboardsFolder"],{

/***/ "./public/app/features/folders/components/NewDashboardsFolder.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewDashboardsFolder": () => (/* binding */ NewDashboardsFolder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _manage_dashboards_services_ValidationSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/manage-dashboards/services/ValidationSrv.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Button;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__.getNavModel)(state.navIndex, 'manage-dashboards')
});

const mapDispatchToProps = {
  createNewFolder: _state_actions__WEBPACK_IMPORTED_MODULE_6__.createNewFolder
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const initialFormModel = {
  folderName: ''
};
class NewDashboardsFolder extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onSubmit", formData => {
      this.props.createNewFolder(formData.folderName);
    });

    _defineProperty(this, "validateFolderName", folderName => {
      return _manage_dashboards_services_ValidationSrv__WEBPACK_IMPORTED_MODULE_5__.validationSrv.validateNewFolderName(folderName).then(() => {
        return true;
      }).catch(e => {
        return e.message;
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: this.props.navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
          children: "New dashboard folder"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
          defaultValues: initialFormModel,
          onSubmit: this.onSubmit,
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Folder name",
              invalid: !!errors.folderName,
              error: errors.folderName && errors.folderName.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "folder-name-input"
              }, register('folderName', {
                required: 'Folder name is required.',
                validate: async v => await this.validateFolderName(v)
              })))
            }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "submit",
              children: "Create"
            }))]
          })
        })]
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(NewDashboardsFolder));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3RGFzaGJvYXJkc0ZvbGRlci40YmQyMzMwMzczYjg0M2U4MjhjMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7OztBQUVBLE1BQU1XLGVBQWUsR0FBSUMsS0FBRCxLQUF3QjtFQUM5Q0MsUUFBUSxFQUFFTCx3RUFBVyxDQUFDSSxLQUFLLENBQUNFLFFBQVAsRUFBaUIsbUJBQWpCO0FBRHlCLENBQXhCLENBQXhCOztBQUlBLE1BQU1DLGtCQUFrQixHQUFHO0VBQ3pCTCxlQUFlQSw2REFBQUE7QUFEVSxDQUEzQjtBQUlBLE1BQU1NLFNBQVMsR0FBR2Qsb0RBQU8sQ0FBQ1MsZUFBRCxFQUFrQkksa0JBQWxCLENBQXpCO0FBUUEsTUFBTUUsZ0JBQTJCLEdBQUc7RUFBRUMsVUFBVSxFQUFFO0FBQWQsQ0FBcEM7QUFJTyxNQUFNQyxtQkFBTixTQUFrQ2xCLGdEQUFsQyxDQUF1RDtFQUFBO0lBQUE7O0lBQUEsa0NBQ2hEbUIsUUFBRCxJQUF5QjtNQUNsQyxLQUFLQyxLQUFMLENBQVdYLGVBQVgsQ0FBMkJVLFFBQVEsQ0FBQ0YsVUFBcEM7SUFDRCxDQUgyRDs7SUFBQSw0Q0FLdENBLFVBQUQsSUFBd0I7TUFDM0MsT0FBT1QsMEdBQUEsQ0FDa0JTLFVBRGxCLEVBRUpLLElBRkksQ0FFQyxNQUFNO1FBQ1YsT0FBTyxJQUFQO01BQ0QsQ0FKSSxFQUtKQyxLQUxJLENBS0dDLENBQUQsSUFBTztRQUNaLE9BQU9BLENBQUMsQ0FBQ0MsT0FBVDtNQUNELENBUEksQ0FBUDtJQVFELENBZDJEO0VBQUE7O0VBZ0I1REMsTUFBTSxHQUFHO0lBQ1Asb0JBQ0UsdURBQUMscUVBQUQ7TUFBTSxRQUFRLEVBQUUsS0FBS04sS0FBTCxDQUFXUixRQUEzQjtNQUFBLHVCQUNFLHdEQUFDLDhFQUFEO1FBQUEsb0NBQ0U7VUFBQTtRQUFBLEVBREYsZ0JBRUUsdURBQUMsNkNBQUQ7VUFBTSxhQUFhLEVBQUVJLGdCQUFyQjtVQUF1QyxRQUFRLEVBQUUsS0FBS1csUUFBdEQ7VUFBQSxVQUNHLENBQUM7WUFBRUMsUUFBRjtZQUFZQztVQUFaLENBQUQsa0JBQ0M7WUFBQSx3QkFDRSx1REFBQyw4Q0FBRDtjQUNFLEtBQUssRUFBQyxhQURSO2NBRUUsT0FBTyxFQUFFLENBQUMsQ0FBQ0EsTUFBTSxDQUFDWixVQUZwQjtjQUdFLEtBQUssRUFBRVksTUFBTSxDQUFDWixVQUFQLElBQXFCWSxNQUFNLENBQUNaLFVBQVAsQ0FBa0JRLE9BSGhEO2NBQUEsdUJBS0UsdURBQUMsOENBQUQ7Z0JBQ0UsRUFBRSxFQUFDO2NBREwsR0FFTUcsUUFBUSxDQUFDLFlBQUQsRUFBZTtnQkFDekJFLFFBQVEsRUFBRSwwQkFEZTtnQkFFekJDLFFBQVEsRUFBRSxNQUFPQyxDQUFQLElBQWEsTUFBTSxLQUFLQyxrQkFBTCxDQUF3QkQsQ0FBeEI7Y0FGSixDQUFmLENBRmQ7WUFMRixFQURGLHFDQWNFLHVEQUFDLCtDQUFEO2NBQVEsSUFBSSxFQUFDLFFBQWI7Y0FBQTtZQUFBLEVBZEY7VUFBQTtRQUZKLEVBRkY7TUFBQTtJQURGLEVBREY7RUEyQkQ7O0FBNUMyRDtBQStDOUQsaUVBQWVqQixTQUFTLENBQUNHLG1CQUFELENBQXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZm9sZGVycy9jb21wb25lbnRzL05ld0Rhc2hib2FyZHNGb2xkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIEZvcm0sIEZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IHZhbGlkYXRpb25TcnYgfSBmcm9tICcuLi8uLi9tYW5hZ2UtZGFzaGJvYXJkcy9zZXJ2aWNlcy9WYWxpZGF0aW9uU3J2JztcbmltcG9ydCB7IGNyZWF0ZU5ld0ZvbGRlciB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ21hbmFnZS1kYXNoYm9hcmRzJyksXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBjcmVhdGVOZXdGb2xkZXIsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuaW50ZXJmYWNlIE93blByb3BzIHt9XG5cbmludGVyZmFjZSBGb3JtTW9kZWwge1xuICBmb2xkZXJOYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGluaXRpYWxGb3JtTW9kZWw6IEZvcm1Nb2RlbCA9IHsgZm9sZGVyTmFtZTogJycgfTtcblxudHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBjbGFzcyBOZXdEYXNoYm9hcmRzRm9sZGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBvblN1Ym1pdCA9IChmb3JtRGF0YTogRm9ybU1vZGVsKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5jcmVhdGVOZXdGb2xkZXIoZm9ybURhdGEuZm9sZGVyTmFtZSk7XG4gIH07XG5cbiAgdmFsaWRhdGVGb2xkZXJOYW1lID0gKGZvbGRlck5hbWU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB2YWxpZGF0aW9uU3J2XG4gICAgICAudmFsaWRhdGVOZXdGb2xkZXJOYW1lKGZvbGRlck5hbWUpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICByZXR1cm4gZS5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17dGhpcy5wcm9wcy5uYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICAgIDxoMz5OZXcgZGFzaGJvYXJkIGZvbGRlcjwvaDM+XG4gICAgICAgICAgPEZvcm0gZGVmYXVsdFZhbHVlcz17aW5pdGlhbEZvcm1Nb2RlbH0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgICAgeyh7IHJlZ2lzdGVyLCBlcnJvcnMgfSkgPT4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGb2xkZXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5mb2xkZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5mb2xkZXJOYW1lICYmIGVycm9ycy5mb2xkZXJOYW1lLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZm9sZGVyLW5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2ZvbGRlck5hbWUnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdGb2xkZXIgbmFtZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBhc3luYyAodikgPT4gYXdhaXQgdGhpcy52YWxpZGF0ZUZvbGRlck5hbWUodiksXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoTmV3RGFzaGJvYXJkc0ZvbGRlcik7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiY29ubmVjdCIsIkJ1dHRvbiIsIklucHV0IiwiRm9ybSIsIkZpZWxkIiwiUGFnZSIsImdldE5hdk1vZGVsIiwidmFsaWRhdGlvblNydiIsImNyZWF0ZU5ld0ZvbGRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsImluaXRpYWxGb3JtTW9kZWwiLCJmb2xkZXJOYW1lIiwiTmV3RGFzaGJvYXJkc0ZvbGRlciIsImZvcm1EYXRhIiwicHJvcHMiLCJ2YWxpZGF0ZU5ld0ZvbGRlck5hbWUiLCJ0aGVuIiwiY2F0Y2giLCJlIiwibWVzc2FnZSIsInJlbmRlciIsIm9uU3VibWl0IiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwidiIsInZhbGlkYXRlRm9sZGVyTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=