webpackHotUpdate("static/development/pages/catalogo.js",{

/***/ "./pages/components/CardElement.js":
/*!*****************************************!*\
  !*** ./pages/components/CardElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/Card.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/nano/Documents/AP/zona-recreativa-web/pages/components/CardElement.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function sayHello(msg) {
  console.log(msg);
}

var CardElement = function CardElement(props) {
  return __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "m-3 col-lg-3 col-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Img, {
    className: "border border-secondary mt-3",
    variant: "top",
    src: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.title), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.msg.length > 6 ? props.msg.substring(0, 128) + '..' : props.msg), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: function onClick() {
      return sayHello(props.title);
    },
    className: "btn-sm float-right",
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Ver m\xE1s"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardElement);

/***/ })

})
//# sourceMappingURL=catalogo.js.763c6c3b6f0e2719a435.hot-update.js.map