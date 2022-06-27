"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderSettingsPage"],{

/***/ "./public/app/features/folders/FolderSettingsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderSettingsPage": () => (/* binding */ FolderSettingsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/folders/state/reducers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _label;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Input
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LegacyForms;










const mapStateToProps = (state, props) => {
  const uid = props.match.params.uid;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, `folder-settings-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_8__.getLoadingNav)(2)),
    folderUid: uid,
    folder: state.folder
  };
};

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_7__.getFolderByUid,
  saveFolder: _state_actions__WEBPACK_IMPORTED_MODULE_7__.saveFolder,
  setFolderTitle: _state_reducers__WEBPACK_IMPORTED_MODULE_9__.setFolderTitle,
  deleteFolder: _state_actions__WEBPACK_IMPORTED_MODULE_7__.deleteFolder
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class FolderSettingsPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onTitleChange", evt => {
      this.props.setFolderTitle(evt.target.value);
    });

    _defineProperty(this, "onSave", async evt => {
      evt.preventDefault();
      evt.stopPropagation();
      this.setState({
        isLoading: true
      });
      await this.props.saveFolder(this.props.folder);
      this.setState({
        isLoading: false
      });
    });

    _defineProperty(this, "onDelete", evt => {
      evt.stopPropagation();
      evt.preventDefault();
      const confirmationText = `Do you want to delete this folder and all its dashboards and alerts?`;
      app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_6__.ShowConfirmModalEvent({
        title: 'Delete',
        text: confirmationText,
        icon: 'trash-alt',
        yesText: 'Delete',
        onConfirm: () => {
          this.props.deleteFolder(this.props.folder.uid);
        }
      }));
    });

    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    this.props.getFolderByUid(this.props.folderUid);
  }

  render() {
    const {
      navModel,
      folder
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
        isLoading: this.state.isLoading,
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
          className: "page-sub-heading",
          children: "Folder settings"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "section gf-form-group",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
            name: "folderSettingsForm",
            onSubmit: this.onSave,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "gf-form",
              children: [_label || (_label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                className: "gf-form-label width-7",
                children: "Name"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Input, {
                type: "text",
                className: "gf-form-input width-30",
                value: folder.title,
                onChange: this.onTitleChange
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "gf-form-button-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                disabled: !folder.canSave || !folder.hasChanged,
                children: "Save"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "destructive",
                onClick: this.onDelete,
                disabled: !folder.canDelete,
                children: "Delete"
              })]
            })]
          })
        })]
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(FolderSettingsPage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyU2V0dGluZ3NQYWdlLmQ1MjMyNzliYWM5OTZkNDZjOGNmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0EsTUFBTTtFQUFFSztBQUFGLElBQVlELG9EQUFsQjtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBOzs7O0FBSUEsTUFBTVcsZUFBZSxHQUFHLENBQUNDLEtBQUQsRUFBb0JDLEtBQXBCLEtBQXdDO0VBQzlELE1BQU1DLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJGLEdBQS9CO0VBQ0EsT0FBTztJQUNMRyxRQUFRLEVBQUViLHdFQUFXLENBQUNRLEtBQUssQ0FBQ00sUUFBUCxFQUFrQixtQkFBa0JKLEdBQUksRUFBeEMsRUFBMkNMLDhEQUFhLENBQUMsQ0FBRCxDQUF4RCxDQURoQjtJQUVMVSxTQUFTLEVBQUVMLEdBRk47SUFHTE0sTUFBTSxFQUFFUixLQUFLLENBQUNRO0VBSFQsQ0FBUDtBQUtELENBUEQ7O0FBU0EsTUFBTUMsa0JBQWtCLEdBQUc7RUFDekJkLGNBRHlCO0VBRXpCQyxVQUZ5QjtFQUd6QkUsY0FIeUI7RUFJekJKLFlBQVlBLDBEQUFBQTtBQUphLENBQTNCO0FBT0EsTUFBTWdCLFNBQVMsR0FBR3hCLG9EQUFPLENBQUNhLGVBQUQsRUFBa0JVLGtCQUFsQixDQUF6QjtBQVFPLE1BQU1FLGtCQUFOLFNBQWlDMUIsZ0RBQWpDLENBQTZEO0VBQ2xFMkIsV0FBVyxDQUFDWCxLQUFELEVBQWU7SUFDeEIsTUFBTUEsS0FBTjs7SUFEd0IsdUNBV1RZLEdBQUQsSUFBOEM7TUFDNUQsS0FBS1osS0FBTCxDQUFXSCxjQUFYLENBQTBCZSxHQUFHLENBQUNDLE1BQUosQ0FBV0MsS0FBckM7SUFDRCxDQWJ5Qjs7SUFBQSxnQ0FlakIsTUFBT0YsR0FBUCxJQUFpRDtNQUN4REEsR0FBRyxDQUFDRyxjQUFKO01BQ0FILEdBQUcsQ0FBQ0ksZUFBSjtNQUNBLEtBQUtDLFFBQUwsQ0FBYztRQUFFQyxTQUFTLEVBQUU7TUFBYixDQUFkO01BQ0EsTUFBTSxLQUFLbEIsS0FBTCxDQUFXTCxVQUFYLENBQXNCLEtBQUtLLEtBQUwsQ0FBV08sTUFBakMsQ0FBTjtNQUNBLEtBQUtVLFFBQUwsQ0FBYztRQUFFQyxTQUFTLEVBQUU7TUFBYixDQUFkO0lBQ0QsQ0FyQnlCOztJQUFBLGtDQXVCZE4sR0FBRCxJQUE4QztNQUN2REEsR0FBRyxDQUFDSSxlQUFKO01BQ0FKLEdBQUcsQ0FBQ0csY0FBSjtNQUVBLE1BQU1JLGdCQUFnQixHQUFJLHNFQUExQjtNQUNBOUIsbUVBQUEsQ0FDRSxJQUFJRyxnRUFBSixDQUEwQjtRQUN4QjZCLEtBQUssRUFBRSxRQURpQjtRQUV4QkMsSUFBSSxFQUFFSCxnQkFGa0I7UUFHeEJJLElBQUksRUFBRSxXQUhrQjtRQUl4QkMsT0FBTyxFQUFFLFFBSmU7UUFLeEJDLFNBQVMsRUFBRSxNQUFNO1VBQ2YsS0FBS3pCLEtBQUwsQ0FBV1AsWUFBWCxDQUF3QixLQUFLTyxLQUFMLENBQVdPLE1BQVgsQ0FBa0JOLEdBQTFDO1FBQ0Q7TUFQdUIsQ0FBMUIsQ0FERjtJQVdELENBdkN5Qjs7SUFFeEIsS0FBS0YsS0FBTCxHQUFhO01BQ1htQixTQUFTLEVBQUU7SUFEQSxDQUFiO0VBR0Q7O0VBRURRLGlCQUFpQixHQUFHO0lBQ2xCLEtBQUsxQixLQUFMLENBQVdOLGNBQVgsQ0FBMEIsS0FBS00sS0FBTCxDQUFXTSxTQUFyQztFQUNEOztFQWdDRHFCLE1BQU0sR0FBRztJQUNQLE1BQU07TUFBRXZCLFFBQUY7TUFBWUc7SUFBWixJQUF1QixLQUFLUCxLQUFsQztJQUVBLG9CQUNFLHdEQUFDLHFFQUFEO01BQU0sUUFBUSxFQUFFSSxRQUFoQjtNQUFBLHVCQUNFLHlEQUFDLDhFQUFEO1FBQWUsU0FBUyxFQUFFLEtBQUtMLEtBQUwsQ0FBV21CLFNBQXJDO1FBQUEsb0NBQ0U7VUFBSSxTQUFTLEVBQUMsa0JBQWQ7VUFBQTtRQUFBLEVBREYsZ0JBR0U7VUFBSyxTQUFTLEVBQUMsdUJBQWY7VUFBQSx1QkFDRTtZQUFNLElBQUksRUFBQyxvQkFBWDtZQUFnQyxRQUFRLEVBQUUsS0FBS1UsTUFBL0M7WUFBQSx3QkFDRTtjQUFLLFNBQVMsRUFBQyxTQUFmO2NBQUEsNENBQ0U7Z0JBQU8sU0FBUyxFQUFDLHVCQUFqQjtnQkFBQTtjQUFBLEVBREYsZ0JBRUUsd0RBQUMsS0FBRDtnQkFDRSxJQUFJLEVBQUMsTUFEUDtnQkFFRSxTQUFTLEVBQUMsd0JBRlo7Z0JBR0UsS0FBSyxFQUFFckIsTUFBTSxDQUFDYyxLQUhoQjtnQkFJRSxRQUFRLEVBQUUsS0FBS1E7Y0FKakIsRUFGRjtZQUFBLEVBREYsZUFVRTtjQUFLLFNBQVMsRUFBQyxvQkFBZjtjQUFBLHdCQUNFLHdEQUFDLCtDQUFEO2dCQUFRLElBQUksRUFBQyxRQUFiO2dCQUFzQixRQUFRLEVBQUUsQ0FBQ3RCLE1BQU0sQ0FBQ3VCLE9BQVIsSUFBbUIsQ0FBQ3ZCLE1BQU0sQ0FBQ3dCLFVBQTNEO2dCQUFBO2NBQUEsRUFERixlQUlFLHdEQUFDLCtDQUFEO2dCQUFRLE9BQU8sRUFBQyxhQUFoQjtnQkFBOEIsT0FBTyxFQUFFLEtBQUtDLFFBQTVDO2dCQUFzRCxRQUFRLEVBQUUsQ0FBQ3pCLE1BQU0sQ0FBQzBCLFNBQXhFO2dCQUFBO2NBQUEsRUFKRjtZQUFBLEVBVkY7VUFBQTtRQURGLEVBSEY7TUFBQTtJQURGLEVBREY7RUE2QkQ7O0FBMUVpRTtBQTZFcEUsaUVBQWV4QixTQUFTLENBQUNDLGtCQUFELENBQXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZm9sZGVycy9Gb2xkZXJTZXR0aW5nc1BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgTGVnYWN5Rm9ybXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5jb25zdCB7IElucHV0IH0gPSBMZWdhY3lGb3JtcztcbmltcG9ydCBhcHBFdmVudHMgZnJvbSAnYXBwL2NvcmUvYXBwX2V2ZW50cyc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IFNob3dDb25maXJtTW9kYWxFdmVudCB9IGZyb20gJy4uLy4uL3R5cGVzL2V2ZW50cyc7XG5cbmltcG9ydCB7IGRlbGV0ZUZvbGRlciwgZ2V0Rm9sZGVyQnlVaWQsIHNhdmVGb2xkZXIgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0TG9hZGluZ05hdiB9IGZyb20gJy4vc3RhdGUvbmF2TW9kZWwnO1xuaW1wb3J0IHsgc2V0Rm9sZGVyVGl0bGUgfSBmcm9tICcuL3N0YXRlL3JlZHVjZXJzJztcblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgdWlkOiBzdHJpbmcgfT4ge31cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlLCBwcm9wczogT3duUHJvcHMpID0+IHtcbiAgY29uc3QgdWlkID0gcHJvcHMubWF0Y2gucGFyYW1zLnVpZDtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsIGBmb2xkZXItc2V0dGluZ3MtJHt1aWR9YCwgZ2V0TG9hZGluZ05hdigyKSksXG4gICAgZm9sZGVyVWlkOiB1aWQsXG4gICAgZm9sZGVyOiBzdGF0ZS5mb2xkZXIsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGdldEZvbGRlckJ5VWlkLFxuICBzYXZlRm9sZGVyLFxuICBzZXRGb2xkZXJUaXRsZSxcbiAgZGVsZXRlRm9sZGVyLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEZvbGRlclNldHRpbmdzUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRGb2xkZXJCeVVpZCh0aGlzLnByb3BzLmZvbGRlclVpZCk7XG4gIH1cblxuICBvblRpdGxlQ2hhbmdlID0gKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnByb3BzLnNldEZvbGRlclRpdGxlKGV2dC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIG9uU2F2ZSA9IGFzeW5jIChldnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XG4gICAgYXdhaXQgdGhpcy5wcm9wcy5zYXZlRm9sZGVyKHRoaXMucHJvcHMuZm9sZGVyKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkRlbGV0ZSA9IChldnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY29uZmlybWF0aW9uVGV4dCA9IGBEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBmb2xkZXIgYW5kIGFsbCBpdHMgZGFzaGJvYXJkcyBhbmQgYWxlcnRzP2A7XG4gICAgYXBwRXZlbnRzLnB1Ymxpc2goXG4gICAgICBuZXcgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50KHtcbiAgICAgICAgdGl0bGU6ICdEZWxldGUnLFxuICAgICAgICB0ZXh0OiBjb25maXJtYXRpb25UZXh0LFxuICAgICAgICBpY29uOiAndHJhc2gtYWx0JyxcbiAgICAgICAgeWVzVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMuZGVsZXRlRm9sZGVyKHRoaXMucHJvcHMuZm9sZGVyLnVpZCk7XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2TW9kZWwsIGZvbGRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e3RoaXMuc3RhdGUuaXNMb2FkaW5nfT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zdWItaGVhZGluZ1wiPkZvbGRlciBzZXR0aW5nczwvaDM+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGZvcm0gbmFtZT1cImZvbGRlclNldHRpbmdzRm9ybVwiIG9uU3VibWl0PXt0aGlzLm9uU2F2ZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHdpZHRoLTdcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmLWZvcm0taW5wdXQgd2lkdGgtMzBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZvbGRlci50aXRsZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGl0bGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyFmb2xkZXIuY2FuU2F2ZSB8fCAhZm9sZGVyLmhhc0NoYW5nZWR9PlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgb25DbGljaz17dGhpcy5vbkRlbGV0ZX0gZGlzYWJsZWQ9eyFmb2xkZXIuY2FuRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKEZvbGRlclNldHRpbmdzUGFnZSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiY29ubmVjdCIsIkJ1dHRvbiIsIkxlZ2FjeUZvcm1zIiwiSW5wdXQiLCJhcHBFdmVudHMiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJTaG93Q29uZmlybU1vZGFsRXZlbnQiLCJkZWxldGVGb2xkZXIiLCJnZXRGb2xkZXJCeVVpZCIsInNhdmVGb2xkZXIiLCJnZXRMb2FkaW5nTmF2Iiwic2V0Rm9sZGVyVGl0bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb3BzIiwidWlkIiwibWF0Y2giLCJwYXJhbXMiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiZm9sZGVyVWlkIiwiZm9sZGVyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiRm9sZGVyU2V0dGluZ3NQYWdlIiwiY29uc3RydWN0b3IiLCJldnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic2V0U3RhdGUiLCJpc0xvYWRpbmciLCJjb25maXJtYXRpb25UZXh0IiwicHVibGlzaCIsInRpdGxlIiwidGV4dCIsImljb24iLCJ5ZXNUZXh0Iiwib25Db25maXJtIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJvblNhdmUiLCJvblRpdGxlQ2hhbmdlIiwiY2FuU2F2ZSIsImhhc0NoYW5nZWQiLCJvbkRlbGV0ZSIsImNhbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=