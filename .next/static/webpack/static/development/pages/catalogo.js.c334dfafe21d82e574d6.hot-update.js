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
/* harmony import */ var _components_GeneralLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/GeneralLayout */ "./pages/components/GeneralLayout.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navigation */ "./pages/components/Navigation.jsx");
/* harmony import */ var _components_Package__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Package */ "./pages/components/Package.js");
/* harmony import */ var _data_packages_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/packages.json */ "./pages/data/packages.json");
var _data_packages_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/packages.json */ "./pages/data/packages.json", 1);
var _jsxFileName = "/home/nano/Documents/AdmProyecto/zona-recreativa-web/pages/catalogo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function multPrint() {
  var cards = ["card1", "card2", "Card 3", "Card 4", "Card 5"];
  return _data_packages_json__WEBPACK_IMPORTED_MODULE_4__.map(function (item) {
    return __jsx(_components_Package__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      uid: item.id,
      title: item.name,
      msg: item.description,
      img: item.img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  });
}

function catalogo() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h1", {
    className: "mt-2 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Cat\xE1logo")), multPrint()));
}

/***/ })

})
//# sourceMappingURL=catalogo.js.c334dfafe21d82e574d6.hot-update.js.map