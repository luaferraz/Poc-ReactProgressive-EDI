"use strict";
self["webpackHotUpdateapp"]("main",{

/***/ "./src/features/CardLog/CardLog.tsx":
/*!******************************************!*\
  !*** ./src/features/CardLog/CardLog.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./src/services/index.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Book.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var CardLogList = function CardLogList() {
  var _useGetCardLogQuery = (0,_services__WEBPACK_IMPORTED_MODULE_0__.useGetCardLogQuery)(),
    data = _useGetCardLogQuery.data,
    error = _useGetCardLogQuery.error,
    isLoading = _useGetCardLogQuery.isLoading;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "book",
    children: error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: "Oh no, there was an error"
    }) : isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: "Loading..."
    }) : data && Array.isArray(data) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: data.map(function (cardLog) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            children: cardLog.origem
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            children: ["Log Count: ", cardLog.logCount]
          })]
        }, cardLog.origem);
      })
    }) : null
  });
};
__signature__(CardLogList, "useGetCardLogQuery{{ data, error, isLoading }}", function () {
  return [_services__WEBPACK_IMPORTED_MODULE_0__.useGetCardLogQuery];
});
var _default = CardLogList;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(CardLogList, "CardLogList", "D:\\@coding\\learning\\Poc-ReactProgressive-EDI\\Poc-ReactProgressive-EDI\\app\\src\\features\\CardLog\\CardLog.tsx");
  reactHotLoader.register(_default, "default", "D:\\@coding\\learning\\Poc-ReactProgressive-EDI\\Poc-ReactProgressive-EDI\\app\\src\\features\\CardLog\\CardLog.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c790fcf5efa23acb1ac9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNWZkNTU5YjJkOGY3YTA1MjdiYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUUvQjtBQUFBO0FBQUE7QUFBQTtBQUtyQixJQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFzQjtFQUNyQyxJQUFBQyxtQkFBQSxHQUFtQ1IsNkRBQWtCLENBQUMsQ0FBQztJQUEvQ1MsSUFBSSxHQUFBRCxtQkFBQSxDQUFKQyxJQUFJO0lBQUVDLEtBQUssR0FBQUYsbUJBQUEsQ0FBTEUsS0FBSztJQUFFQyxTQUFTLEdBQUFILG1CQUFBLENBQVRHLFNBQVM7RUFFOUIsb0JBQ0VQLHNEQUFBO0lBQUtRLFNBQVMsRUFBQyxNQUFNO0lBQUFDLFFBQUEsRUFDbEJILEtBQUssZ0JBQ0pOLHNEQUFBLENBQUFGLHVEQUFBO01BQUFXLFFBQUEsRUFBRTtJQUF5QixDQUFFLENBQUMsR0FDNUJGLFNBQVMsZ0JBQ1hQLHNEQUFBLENBQUFGLHVEQUFBO01BQUFXLFFBQUEsRUFBRTtJQUFVLENBQUUsQ0FBQyxHQUNiSixJQUFJLElBQUlLLEtBQUssQ0FBQ0MsT0FBTyxDQUFDTixJQUFJLENBQUMsZ0JBQzdCTCxzREFBQTtNQUFBUyxRQUFBLEVBQ0dKLElBQUksQ0FBQ08sR0FBRyxDQUFDLFVBQUNDLE9BQXlCO1FBQUEsb0JBQ2xDWCx1REFBQTtVQUFBTyxRQUFBLGdCQUNFVCxzREFBQTtZQUFBUyxRQUFBLEVBQUtJLE9BQU8sQ0FBQ0M7VUFBTSxDQUFLLENBQUMsZUFDekJaLHVEQUFBO1lBQUFPLFFBQUEsR0FBRyxhQUFXLEVBQUNJLE9BQU8sQ0FBQ0UsUUFBUTtVQUFBLENBQUksQ0FBQztRQUFBLEdBRjVCRixPQUFPLENBQUNDLE1BR2IsQ0FBQztNQUFBLENBQ1A7SUFBQyxDQUNDLENBQUMsR0FDSjtFQUFJLENBQ0wsQ0FBQztBQUVWLENBQUM7QUFBQ0UsYUFBQSxDQXJCSWIsV0FBVztFQUFBLFFBQ29CUCx5REFBa0I7QUFBQTtBQUFBLElBQUFxQixRQUFBLEdBc0J4Q2QsV0FBVztBQUExQixpRUFBQWMsUUFBQTtBQUEyQjtBQUFBO0VBQUEsSUFBQUMsY0FBQSxVQUFBQyxvQkFBQSxtQkFBQUEsb0JBQUEsQ0FBQUMsT0FBQSxHQUFBQyxTQUFBO0VBQUEsS0FBQUgsY0FBQTtJQUFBO0VBQUE7RUFBQUEsY0FBQSxDQUFBSSxRQUFBLENBdkJyQm5CLFdBQVc7RUFBQWUsY0FBQSxDQUFBSSxRQUFBLENBQUFMLFFBQUE7QUFBQTtBQUFBO0FBQUE7RUFBQSxJQUFBTSxXQUFBLFVBQUFKLG9CQUFBLG1CQUFBQSxvQkFBQSxDQUFBSSxXQUFBLEdBQUFGLFNBQUE7RUFBQUUsV0FBQSxJQUFBQSxXQUFBLENBQUFDLE1BQUE7QUFBQTs7Ozs7Ozs7VUNQakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvZmVhdHVyZXMvQ2FyZExvZy9DYXJkTG9nLnRzeCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdldENhcmRMb2dRdWVyeSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcclxuXHJcbmltcG9ydCAnLi9Cb29rLnNjc3MnO1xyXG5cclxuXHJcbmltcG9ydCBDYXJkTG9nVmlld01vZGVsIGZyb20gJy4uLy4uL3NlcnZpY2VzL3R5cGVzL0NhcmRMb2dWaWV3TW9kZWwnO1xyXG5cclxuY29uc3QgQ2FyZExvZ0xpc3QgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlR2V0Q2FyZExvZ1F1ZXJ5KCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tcIj5cclxuICAgICAge2Vycm9yID8gKFxyXG4gICAgICAgIDw+T2ggbm8sIHRoZXJlIHdhcyBhbiBlcnJvcjwvPlxyXG4gICAgICApIDogaXNMb2FkaW5nID8gKFxyXG4gICAgICAgIDw+TG9hZGluZy4uLjwvPlxyXG4gICAgICApIDogZGF0YSAmJiBBcnJheS5pc0FycmF5KGRhdGEpID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGNhcmRMb2c6IENhcmRMb2dWaWV3TW9kZWwpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2NhcmRMb2cub3JpZ2VtfT5cclxuICAgICAgICAgICAgICA8aDM+e2NhcmRMb2cub3JpZ2VtfTwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+TG9nIENvdW50OiB7Y2FyZExvZy5sb2dDb3VudH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRMb2dMaXN0O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNzkwZmNmNWVmYTIzYWNiMWFjOVwiKSJdLCJuYW1lcyI6WyJ1c2VHZXRDYXJkTG9nUXVlcnkiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJDYXJkTG9nTGlzdCIsIl91c2VHZXRDYXJkTG9nUXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImNhcmRMb2ciLCJvcmlnZW0iLCJsb2dDb3VudCIsIl9fc2lnbmF0dXJlX18iLCJfZGVmYXVsdCIsInJlYWN0SG90TG9hZGVyIiwicmVhY3RIb3RMb2FkZXJHbG9iYWwiLCJkZWZhdWx0IiwidW5kZWZpbmVkIiwicmVnaXN0ZXIiLCJsZWF2ZU1vZHVsZSIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=