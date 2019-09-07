webpackHotUpdate("static/development/pages/catalogo.js",{

/***/ "./pages/catalogo.js":
/*!***************************!*\
  !*** ./pages/catalogo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return catalogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Navigation */ "./pages/components/Navigation.jsx");
/* harmony import */ var _components_CardElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CardElement */ "./pages/components/CardElement.js");
/* harmony import */ var _components_GeneralLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/GeneralLayout */ "./pages/components/GeneralLayout.js");
var _jsxFileName = "/home/nano/Documents/AP/zona-recreativa-web/pages/catalogo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function multPrint() {
  var cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
  return cards.map(function (card) {
    return __jsx(_components_CardElement__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: card,
      title: card,
      msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu rhoncus libero. Integer nibh ante, semper non lacus id, bibendum laoreet enim. Nulla libero ante, vestibulum non erat in, facilisis volutpat ligula.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  });
}

function catalogo() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Cat\xE1logo")), __jsx("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, multPrint())));
}

/***/ })

})
//# sourceMappingURL=catalogo.js.7fff5564074a97daa58d.hot-update.js.map