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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './card.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
/******/ 	__webpack_require__.h = () => ("c7751b19e576d48906e3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hZWE3MWI0ZjAzZmFjZDc2M2E2Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUUvQjtBQUFBO0FBQUE7QUFBQTtBQUlyQixJQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFzQjtFQUNyQyxJQUFBQyxtQkFBQSxHQUFtQ1IsNkRBQWtCLENBQUMsQ0FBQztJQUEvQ1MsSUFBSSxHQUFBRCxtQkFBQSxDQUFKQyxJQUFJO0lBQUVDLEtBQUssR0FBQUYsbUJBQUEsQ0FBTEUsS0FBSztJQUFFQyxTQUFTLEdBQUFILG1CQUFBLENBQVRHLFNBQVM7RUFFOUIsb0JBQ0VQLHNEQUFBO0lBQUtRLFNBQVMsRUFBQyxNQUFNO0lBQUFDLFFBQUEsRUFDbEJILEtBQUssZ0JBQ0pOLHNEQUFBLENBQUFGLHVEQUFBO01BQUFXLFFBQUEsRUFBRTtJQUF5QixDQUFFLENBQUMsR0FDNUJGLFNBQVMsZ0JBQ1hQLHNEQUFBLENBQUFGLHVEQUFBO01BQUFXLFFBQUEsRUFBRTtJQUFVLENBQUUsQ0FBQyxHQUNiSixJQUFJLElBQUlLLEtBQUssQ0FBQ0MsT0FBTyxDQUFDTixJQUFJLENBQUMsZ0JBQzdCTCxzREFBQTtNQUFBUyxRQUFBLEVBQ0dKLElBQUksQ0FBQ08sR0FBRyxDQUFDLFVBQUNDLE9BQXlCO1FBQUEsb0JBQ2xDWCx1REFBQTtVQUFBTyxRQUFBLGdCQUNFVCxzREFBQTtZQUFBUyxRQUFBLEVBQUtJLE9BQU8sQ0FBQ0M7VUFBTSxDQUFLLENBQUMsZUFDekJaLHVEQUFBO1lBQUFPLFFBQUEsR0FBRyxhQUFXLEVBQUNJLE9BQU8sQ0FBQ0UsUUFBUTtVQUFBLENBQUksQ0FBQztRQUFBLEdBRjVCRixPQUFPLENBQUNDLE1BR2IsQ0FBQztNQUFBLENBQ1A7SUFBQyxDQUNDLENBQUMsR0FDSjtFQUFJLENBQ0wsQ0FBQztBQUVWLENBQUM7QUFBQ0UsYUFBQSxDQXJCSWIsV0FBVztFQUFBLFFBQ29CUCx5REFBa0I7QUFBQTtBQUFBLElBQUFxQixRQUFBLEdBc0J4Q2QsV0FBVztBQUExQixpRUFBQWMsUUFBQTtBQUEyQjtBQUFBO0VBQUEsSUFBQUMsY0FBQSxVQUFBQyxvQkFBQSxtQkFBQUEsb0JBQUEsQ0FBQUMsT0FBQSxHQUFBQyxTQUFBO0VBQUEsS0FBQUgsY0FBQTtJQUFBO0VBQUE7RUFBQUEsY0FBQSxDQUFBSSxRQUFBLENBdkJyQm5CLFdBQVc7RUFBQWUsY0FBQSxDQUFBSSxRQUFBLENBQUFMLFFBQUE7QUFBQTtBQUFBO0FBQUE7RUFBQSxJQUFBTSxXQUFBLFVBQUFKLG9CQUFBLG1CQUFBQSxvQkFBQSxDQUFBSSxXQUFBLEdBQUFGLFNBQUE7RUFBQUUsV0FBQSxJQUFBQSxXQUFBLENBQUFDLE1BQUE7QUFBQTs7Ozs7Ozs7VUNOakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvZmVhdHVyZXMvQ2FyZExvZy9DYXJkTG9nLnRzeCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdldENhcmRMb2dRdWVyeSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcclxuXHJcbmltcG9ydCAnLi9jYXJkLnNjc3MnO1xyXG5cclxuaW1wb3J0IENhcmRMb2dWaWV3TW9kZWwgZnJvbSAnLi4vLi4vc2VydmljZXMvdHlwZXMvQ2FyZExvZ1ZpZXdNb2RlbCc7XHJcblxyXG5jb25zdCBDYXJkTG9nTGlzdCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VHZXRDYXJkTG9nUXVlcnkoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va1wiPlxyXG4gICAgICB7ZXJyb3IgPyAoXHJcbiAgICAgICAgPD5PaCBubywgdGhlcmUgd2FzIGFuIGVycm9yPC8+XHJcbiAgICAgICkgOiBpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgPD5Mb2FkaW5nLi4uPC8+XHJcbiAgICAgICkgOiBkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YSkgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoY2FyZExvZzogQ2FyZExvZ1ZpZXdNb2RlbCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17Y2FyZExvZy5vcmlnZW19PlxyXG4gICAgICAgICAgICAgIDxoMz57Y2FyZExvZy5vcmlnZW19PC9oMz5cclxuICAgICAgICAgICAgICA8cD5Mb2cgQ291bnQ6IHtjYXJkTG9nLmxvZ0NvdW50fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZExvZ0xpc3Q7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM3NzUxYjE5ZTU3NmQ0ODkwNmUzXCIpIl0sIm5hbWVzIjpbInVzZUdldENhcmRMb2dRdWVyeSIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIkNhcmRMb2dMaXN0IiwiX3VzZUdldENhcmRMb2dRdWVyeSIsImRhdGEiLCJlcnJvciIsImlzTG9hZGluZyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY2FyZExvZyIsIm9yaWdlbSIsImxvZ0NvdW50IiwiX19zaWduYXR1cmVfXyIsIl9kZWZhdWx0IiwicmVhY3RIb3RMb2FkZXIiLCJyZWFjdEhvdExvYWRlckdsb2JhbCIsImRlZmF1bHQiLCJ1bmRlZmluZWQiLCJyZWdpc3RlciIsImxlYXZlTW9kdWxlIiwibW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==