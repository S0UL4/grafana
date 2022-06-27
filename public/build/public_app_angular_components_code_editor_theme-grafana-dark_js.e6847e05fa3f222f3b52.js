(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_angular_components_code_editor_theme-grafana-dark_js"],{

/***/ "./public/app/angular/components/code_editor/theme-grafana-dark.js":
/***/ (() => {

ace.define(
  'ace/theme/grafana-dark',
  ['require', 'exports', 'module', 'ace/lib/dom'],
  function (acequire, exports, module) {
    'use strict';

    exports.isDark = true;
    exports.cssClass = 'gf-code-dark';
    exports.cssText =
      '.gf-code-dark .ace_gutter {\
  background: #2f3129;\
  color: #8f908a\
  }\
  .gf-code-dark .ace_print-margin {\
  width: 1px;\
  background: #555651\
  }\
  .gf-code-dark {\
  background-color: #09090b;\
  color: #e0e0e0\
  }\
  .gf-code-dark .ace_cursor {\
  color: #f8f8f0\
  }\
  .gf-code-dark .ace_marker-layer .ace_selection {\
  background: #49483e\
  }\
  .gf-code-dark.ace_multiselect .ace_selection.ace_start {\
  box-shadow: 0 0 3px 0px #272822;\
  }\
  .gf-code-dark .ace_marker-layer .ace_step {\
  background: rgb(102, 82, 0)\
  }\
  .gf-code-dark .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #49483e\
  }\
  .gf-code-dark .ace_marker-layer .ace_active-line {\
  background: #202020\
  }\
  .gf-code-dark .ace_gutter-active-line {\
  background-color: #272727\
  }\
  .gf-code-dark .ace_marker-layer .ace_selected-word {\
  border: 1px solid #49483e\
  }\
  .gf-code-dark .ace_invisible {\
  color: #52524d\
  }\
  .gf-code-dark .ace_entity.ace_name.ace_tag,\
  .gf-code-dark .ace_keyword,\
  .gf-code-dark .ace_meta.ace_tag,\
  .gf-code-dark .ace_storage {\
  color: #66d9ef\
  }\
  .gf-code-dark .ace_punctuation,\
  .gf-code-dark .ace_punctuation.ace_tag {\
  color: #fff\
  }\
  .gf-code-dark .ace_constant.ace_character,\
  .gf-code-dark .ace_constant.ace_language,\
  .gf-code-dark .ace_constant.ace_numeric,\
  .gf-code-dark .ace_constant.ace_other {\
  color: #fe85fc\
  }\
  .gf-code-dark .ace_invalid {\
  color: #f8f8f0;\
  background-color: #f92672\
  }\
  .gf-code-dark .ace_invalid.ace_deprecated {\
  color: #f8f8f0;\
  background-color: #ae81ff\
  }\
  .gf-code-dark .ace_support.ace_constant,\
  .gf-code-dark .ace_support.ace_function {\
  color: #59e6e3\
  }\
  .gf-code-dark .ace_fold {\
  background-color: #a6e22e;\
  border-color: #f8f8f2\
  }\
  .gf-code-dark .ace_storage.ace_type,\
  .gf-code-dark .ace_support.ace_class,\
  .gf-code-dark .ace_support.ace_type {\
  font-style: italic;\
  color: #66d9ef\
  }\
  .gf-code-dark .ace_entity.ace_name.ace_function,\
  .gf-code-dark .ace_entity.ace_other,\
  .gf-code-dark .ace_entity.ace_other.ace_attribute-name,\
  .gf-code-dark .ace_variable {\
  color: #a6e22e\
  }\
  .gf-code-dark .ace_variable.ace_parameter {\
  font-style: italic;\
  color: #fd971f\
  }\
  .gf-code-dark .ace_string {\
  color: #74e680\
  }\
  .gf-code-dark .ace_paren {\
    color: #f0a842\
  }\
  .gf-code-dark .ace_operator {\
    color: #FFF\
  }\
  .gf-code-dark .ace_comment {\
  color: #75715e\
  }\
  .gf-code-dark .ace_indent-guide {\
  background: url(data:image/png;base64,ivborw0kggoaaaansuheugaaaaeaaaaccayaaaczgbynaaaaekleqvqimwpq0fd0zxbzd/wpaajvaoxesgneaaaaaelftksuqmcc) right repeat-y\
  }';

    var dom = acequire('../lib/dom');
    dom.importCssString(exports.cssText, exports.cssClass);
  }
);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9hbmd1bGFyX2NvbXBvbmVudHNfY29kZV9lZGl0b3JfdGhlbWUtZ3JhZmFuYS1kYXJrX2pzLmU2ODQ3ZTA1ZmEzZjIyMmYzYjUyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsc0JBQXNCO0FBQ3RCO0FBQ0EsR0FBRztBQUNILG1DQUFtQztBQUNuQyxhQUFhO0FBQ2I7QUFDQSxHQUFHO0FBQ0gsaUJBQWlCO0FBQ2pCLDRCQUE0QjtBQUM1QjtBQUNBLEdBQUc7QUFDSCw2QkFBNkI7QUFDN0I7QUFDQSxHQUFHO0FBQ0gsa0RBQWtEO0FBQ2xEO0FBQ0EsR0FBRztBQUNILDBEQUEwRDtBQUMxRCxrQ0FBa0M7QUFDbEMsR0FBRztBQUNILDZDQUE2QztBQUM3QztBQUNBLEdBQUc7QUFDSCxnREFBZ0Q7QUFDaEQsd0JBQXdCO0FBQ3hCO0FBQ0EsR0FBRztBQUNILG9EQUFvRDtBQUNwRDtBQUNBLEdBQUc7QUFDSCx5Q0FBeUM7QUFDekM7QUFDQSxHQUFHO0FBQ0gsc0RBQXNEO0FBQ3REO0FBQ0EsR0FBRztBQUNILGdDQUFnQztBQUNoQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxHQUFHO0FBQ0g7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0EsR0FBRztBQUNILDhCQUE4QjtBQUM5QixpQkFBaUI7QUFDakI7QUFDQSxHQUFHO0FBQ0gsNkNBQTZDO0FBQzdDLGlCQUFpQjtBQUNqQjtBQUNBLEdBQUc7QUFDSDtBQUNBLDJDQUEyQztBQUMzQztBQUNBLEdBQUc7QUFDSCwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMscUJBQXFCO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLEdBQUc7QUFDSCw2Q0FBNkM7QUFDN0MscUJBQXFCO0FBQ3JCO0FBQ0EsR0FBRztBQUNILDZCQUE2QjtBQUM3QjtBQUNBLEdBQUc7QUFDSCw0QkFBNEI7QUFDNUI7QUFDQSxHQUFHO0FBQ0gsK0JBQStCO0FBQy9CO0FBQ0EsR0FBRztBQUNILDhCQUE4QjtBQUM5QjtBQUNBLEdBQUc7QUFDSCxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL2NvbXBvbmVudHMvY29kZV9lZGl0b3IvdGhlbWUtZ3JhZmFuYS1kYXJrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFjZS5kZWZpbmUoXG4gICdhY2UvdGhlbWUvZ3JhZmFuYS1kYXJrJyxcbiAgWydyZXF1aXJlJywgJ2V4cG9ydHMnLCAnbW9kdWxlJywgJ2FjZS9saWIvZG9tJ10sXG4gIGZ1bmN0aW9uIChhY2VxdWlyZSwgZXhwb3J0cywgbW9kdWxlKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZXhwb3J0cy5pc0RhcmsgPSB0cnVlO1xuICAgIGV4cG9ydHMuY3NzQ2xhc3MgPSAnZ2YtY29kZS1kYXJrJztcbiAgICBleHBvcnRzLmNzc1RleHQgPVxuICAgICAgJy5nZi1jb2RlLWRhcmsgLmFjZV9ndXR0ZXIge1xcXG4gIGJhY2tncm91bmQ6ICMyZjMxMjk7XFxcbiAgY29sb3I6ICM4ZjkwOGFcXFxuICB9XFxcbiAgLmdmLWNvZGUtZGFyayAuYWNlX3ByaW50LW1hcmdpbiB7XFxcbiAgd2lkdGg6IDFweDtcXFxuICBiYWNrZ3JvdW5kOiAjNTU1NjUxXFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsge1xcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTA5MGI7XFxcbiAgY29sb3I6ICNlMGUwZTBcXFxuICB9XFxcbiAgLmdmLWNvZGUtZGFyayAuYWNlX2N1cnNvciB7XFxcbiAgY29sb3I6ICNmOGY4ZjBcXFxuICB9XFxcbiAgLmdmLWNvZGUtZGFyayAuYWNlX21hcmtlci1sYXllciAuYWNlX3NlbGVjdGlvbiB7XFxcbiAgYmFja2dyb3VuZDogIzQ5NDgzZVxcXG4gIH1cXFxuICAuZ2YtY29kZS1kYXJrLmFjZV9tdWx0aXNlbGVjdCAuYWNlX3NlbGVjdGlvbi5hY2Vfc3RhcnQge1xcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMHB4ICMyNzI4MjI7XFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9zdGVwIHtcXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTAyLCA4MiwgMClcXFxuICB9XFxcbiAgLmdmLWNvZGUtZGFyayAuYWNlX21hcmtlci1sYXllciAuYWNlX2JyYWNrZXQge1xcXG4gIG1hcmdpbjogLTFweCAwIDAgLTFweDtcXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDk0ODNlXFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9hY3RpdmUtbGluZSB7XFxcbiAgYmFja2dyb3VuZDogIzIwMjAyMFxcXG4gIH1cXFxuICAuZ2YtY29kZS1kYXJrIC5hY2VfZ3V0dGVyLWFjdGl2ZS1saW5lIHtcXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3XFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9zZWxlY3RlZC13b3JkIHtcXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDk0ODNlXFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9pbnZpc2libGUge1xcXG4gIGNvbG9yOiAjNTI1MjRkXFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9lbnRpdHkuYWNlX25hbWUuYWNlX3RhZyxcXFxuICAuZ2YtY29kZS1kYXJrIC5hY2Vfa2V5d29yZCxcXFxuICAuZ2YtY29kZS1kYXJrIC5hY2VfbWV0YS5hY2VfdGFnLFxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9zdG9yYWdlIHtcXFxuICBjb2xvcjogIzY2ZDllZlxcXG4gIH1cXFxuICAuZ2YtY29kZS1kYXJrIC5hY2VfcHVuY3R1YXRpb24sXFxcbiAgLmdmLWNvZGUtZGFyayAuYWNlX3B1bmN0dWF0aW9uLmFjZV90YWcge1xcXG4gIGNvbG9yOiAjZmZmXFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9jb25zdGFudC5hY2VfY2hhcmFjdGVyLFxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9jb25zdGFudC5hY2VfbGFuZ3VhZ2UsXFxcbiAgLmdmLWNvZGUtZGFyayAuYWNlX2NvbnN0YW50LmFjZV9udW1lcmljLFxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9jb25zdGFudC5hY2Vfb3RoZXIge1xcXG4gIGNvbG9yOiAjZmU4NWZjXFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9pbnZhbGlkIHtcXFxuICBjb2xvcjogI2Y4ZjhmMDtcXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkyNjcyXFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9pbnZhbGlkLmFjZV9kZXByZWNhdGVkIHtcXFxuICBjb2xvcjogI2Y4ZjhmMDtcXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWU4MWZmXFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9zdXBwb3J0LmFjZV9jb25zdGFudCxcXFxuICAuZ2YtY29kZS1kYXJrIC5hY2Vfc3VwcG9ydC5hY2VfZnVuY3Rpb24ge1xcXG4gIGNvbG9yOiAjNTllNmUzXFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9mb2xkIHtcXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZlMjJlO1xcXG4gIGJvcmRlci1jb2xvcjogI2Y4ZjhmMlxcXG4gIH1cXFxuICAuZ2YtY29kZS1kYXJrIC5hY2Vfc3RvcmFnZS5hY2VfdHlwZSxcXFxuICAuZ2YtY29kZS1kYXJrIC5hY2Vfc3VwcG9ydC5hY2VfY2xhc3MsXFxcbiAgLmdmLWNvZGUtZGFyayAuYWNlX3N1cHBvcnQuYWNlX3R5cGUge1xcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXFxuICBjb2xvcjogIzY2ZDllZlxcXG4gIH1cXFxuICAuZ2YtY29kZS1kYXJrIC5hY2VfZW50aXR5LmFjZV9uYW1lLmFjZV9mdW5jdGlvbixcXFxuICAuZ2YtY29kZS1kYXJrIC5hY2VfZW50aXR5LmFjZV9vdGhlcixcXFxuICAuZ2YtY29kZS1kYXJrIC5hY2VfZW50aXR5LmFjZV9vdGhlci5hY2VfYXR0cmlidXRlLW5hbWUsXFxcbiAgLmdmLWNvZGUtZGFyayAuYWNlX3ZhcmlhYmxlIHtcXFxuICBjb2xvcjogI2E2ZTIyZVxcXG4gIH1cXFxuICAuZ2YtY29kZS1kYXJrIC5hY2VfdmFyaWFibGUuYWNlX3BhcmFtZXRlciB7XFxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcXG4gIGNvbG9yOiAjZmQ5NzFmXFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9zdHJpbmcge1xcXG4gIGNvbG9yOiAjNzRlNjgwXFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9wYXJlbiB7XFxcbiAgICBjb2xvcjogI2YwYTg0MlxcXG4gIH1cXFxuICAuZ2YtY29kZS1kYXJrIC5hY2Vfb3BlcmF0b3Ige1xcXG4gICAgY29sb3I6ICNGRkZcXFxuICB9XFxcbiAgLmdmLWNvZGUtZGFyayAuYWNlX2NvbW1lbnQge1xcXG4gIGNvbG9yOiAjNzU3MTVlXFxcbiAgfVxcXG4gIC5nZi1jb2RlLWRhcmsgLmFjZV9pbmRlbnQtZ3VpZGUge1xcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaXZib3J3MGtnZ29hYWFhbnN1aGV1Z2FhYWFlYWFhYWNjYXlhYWFjemdieW5hYWFhZWtsZXF2cWltd3BxMGZkMHp4YnpkL3dwYWFqdmFveGVzZ25lYWFhYWFlbGZ0a3N1cW1jYykgcmlnaHQgcmVwZWF0LXlcXFxuICB9JztcblxuICAgIHZhciBkb20gPSBhY2VxdWlyZSgnLi4vbGliL2RvbScpO1xuICAgIGRvbS5pbXBvcnRDc3NTdHJpbmcoZXhwb3J0cy5jc3NUZXh0LCBleHBvcnRzLmNzc0NsYXNzKTtcbiAgfVxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==