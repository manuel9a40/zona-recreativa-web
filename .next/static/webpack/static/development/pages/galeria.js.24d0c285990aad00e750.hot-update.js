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
var _jsxFileName = "/home/nano/Documents/AdmProyecto/zona-recreativa-web/pages/galeria.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function multPrint() {
  var cards = ["viaje1", "viaje2", "viaje3", "viaje4", "viaje5"];
  return cards.map(function (card) {
    return (//change this
      __jsx("div", {
        className: "card mb-3 col-lg-8 col-12 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("div", {
        className: "row no-gutters",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-8 col-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("div", {
        className: "card-body p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("h5", {
        className: "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, card), __jsx("p", {
        className: "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, card), __jsx(Link, {
        href: "/pAlbum/[album]",
        as: "/pAlbum/".concat(props.title),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx(Button, {
        onClick: function onClick() {
          return sayHello(props.title);
        },
        className: "btn-sm float-right mb-3",
        variant: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
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
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h1", {
    className: "mt-2 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Galer\xEDa")), multPrint()));
}

/***/ })

})
//# sourceMappingURL=galeria.js.24d0c285990aad00e750.hot-update.js.map