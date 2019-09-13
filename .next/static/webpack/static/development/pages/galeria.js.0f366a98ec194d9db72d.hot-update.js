webpackHotUpdate("static/development/pages/galeria.js",{

/***/ "./pages/galeria.js":
/*!**************************!*\
  !*** ./pages/galeria.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return galeria; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GeneralLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/GeneralLayout */ "./pages/components/GeneralLayout.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navigation */ "./pages/components/Navigation.jsx");
/* harmony import */ var _components_Album__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Album */ "./pages/components/Album.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/Card.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/nano/Documents/AdmProyecto/zona-recreativa-web/pages/galeria.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function multPrint() {
  var cards = ["viaje1", "viaje2", "viaje3", "viaje4", "viaje5"];
  return cards.map(function (card) {
    return (//change this
      __jsx("div", {
        className: "card mb-3 col-lg-3 col-12 mx-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("div", {
        className: "no-gutters",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-8 col-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("div", {
        className: "card-body p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("h5", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, card), __jsx("p", {
        className: "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, card), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/pAlbum/[album]",
        as: "/pAlbum/".concat(cards),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "btn-sm float-right mb-3",
        variant: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Ver m\xE1s"))))))
    );
  });
}

function galeria() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h1", {
    className: "mt-2 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Galer\xEDa")), __jsx("div", {
    className: "row col-9 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, multPrint())));
}

/***/ })

})
//# sourceMappingURL=galeria.js.0f366a98ec194d9db72d.hot-update.js.map