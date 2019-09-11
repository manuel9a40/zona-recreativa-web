webpackHotUpdate("static/development/pages/p/[infoPkg].js",{

/***/ "./pages/components/TimelineItem.js":
/*!******************************************!*\
  !*** ./pages/components/TimelineItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timeline_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../timeline-style.css */ "./timeline-style.css");
/* harmony import */ var _timeline_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_timeline_style_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/nano/Documents/AdmProyecto/zona-recreativa-web/pages/components/TimelineItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function getTime(time) {
  if (typeof time !== 'undefined') return time;else return '';
}

var TimelineItem = function TimelineItem(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "timeline-item row my-2 ml-4 col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "timeline-item-content py-1 col-auto d-block-flex ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h6", {
    className: "col-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("time", {
    className: "badge badge-pill badge-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, typeof data !== 'undefined' ? getTime(data.time) : '')), __jsx("p", {
    className: "col-5p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, data.duracion)), __jsx("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, typeof data !== 'undefined' ? data.text : ''), __jsx("span", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TimelineItem);

/***/ })

})
//# sourceMappingURL=[infoPkg].js.c8b54abc1b52d32ae0bd.hot-update.js.map