webpackHotUpdate("static/development/pages/catalogo.js",{

/***/ "./pages/components/Package.js":
/*!*************************************!*\
  !*** ./pages/components/Package.js ***!
  \*************************************/
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
/* harmony import */ var _timeline_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../timeline-style.css */ "./timeline-style.css");
/* harmony import */ var _timeline_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_timeline_style_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/nano/Documents/AdmProyecto/zona-recreativa-web/pages/components/Package.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function sayHello(msg) {
  console.log(msg);
}

function cutMsg(msg) {
  if (typeof msg !== 'undefined') return msg.length > 6 ? msg.substring(0, 512) + ' [...]' : msg;else {
    return "";
  }
}

var Package = function Package(props) {
  return __jsx("div", {
    className: "card mb-3 col-lg-8 col-12 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "row no-gutters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "m-2 my-md-auto mx-auto mb-3 col-md-4 col-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[infoPkg]",
    as: "/p/".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    className: "card-img p-2 border border-secondary",
    alt: "...",
    style: {
      cursor: 'pointer'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), __jsx("div", {
    className: "col-md-8 col-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "card-body p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h5", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, props.title), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, cutMsg(props.msg)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[infoPkg]",
    as: "/p/".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: function onClick() {
      return sayHello(props.title);
    },
    className: "btn-sm float-right mb-3",
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Ver m\xE1s"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Package);

/***/ })

})
//# sourceMappingURL=catalogo.js.5dde3ecc8bdf2cb026a4.hot-update.js.map