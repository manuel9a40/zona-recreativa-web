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
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/Card.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/nano/Documents/AP/zona-recreativa-web/pages/catalogo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function multPrint(times) {
  var cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
  return cards.map(function (card) {
    return __jsx(_components_CardElement__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  });
}

function catalogo() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "row col-10 mx-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, cards)));
}

/***/ }),

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
var _jsxFileName = "/home/nano/Documents/AP/zona-recreativa-web/pages/components/CardElement.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var CardElement = function CardElement(props) {
  return __jsx(Card, {
    className: "",
    style: {
      width: '18rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx(Card.Img, {
    variant: "top",
    src: "holder.js/100px180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx(Card.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(Card.Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.title), __jsx(Card.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Some quick example text to build on the card title and make up the bulk of the card's content."), __jsx(Button, {
    variant: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Go somewhere")));
};

/* harmony default export */ __webpack_exports__["default"] = (CardElement);

/***/ })

})
//# sourceMappingURL=catalogo.js.f7cad132f2f5abd742fa.hot-update.js.map