webpackHotUpdate("static/development/pages/pPackage/[infoPkg].js",{

/***/ "./pages/pPackage/[infoPkg].js":
/*!*************************************!*\
  !*** ./pages/pPackage/[infoPkg].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GeneralLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GeneralLayout */ "./pages/components/GeneralLayout.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navigation */ "./pages/components/Navigation.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_infoPackage_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/infoPackage.json */ "./pages/data/infoPackage.json");
var _data_infoPackage_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/infoPackage.json */ "./pages/data/infoPackage.json", 1);
/* harmony import */ var _components_Timeline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Timeline */ "./pages/components/Timeline.js");


var _jsxFileName = "/home/nano/Documents/AdmProyecto/zona-recreativa-web/pages/pPackage/[infoPkg].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Post = function Post(props) {
  if (props.errorCode) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_7___default.a, {
      statusCode: props.errorCode,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  } else return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, __jsx("h1", {
    className: "pt-4 text-center mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.info.name), __jsx("div", {
    className: "container mb-5 pt-sm-auto col-lg-10 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "container col-md-7 col-sm-12 pr-4 mt-md-3 mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h3", {
    className: "row mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Descripci\xF3n"), __jsx("p", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.info.description), __jsx("h3", {
    className: "row mb-3 mt-sm-auto mt-3 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Mapa"), __jsx("img", {
    src: __webpack_require__("./pages sync recursive ^\\.\\/resources.*$")("./resources" + props.info.map),
    className: "col-12 p-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-5 col-sm-12 pl-sm-4 pl-0 mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h3", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Itinerario"), __jsx(_components_Timeline__WEBPACK_IMPORTED_MODULE_9__["default"], {
    info: props.info.schedule,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))))));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var infoPkg, errorCode, i, result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            infoPkg = context.query.infoPkg; //
            // return { infoPkg };

            errorCode = false;
            i = 0;

          case 3:
            if (!(i < _data_infoPackage_json__WEBPACK_IMPORTED_MODULE_8__.length)) {
              _context.next = 10;
              break;
            }

            if (!(typeof _data_infoPackage_json__WEBPACK_IMPORTED_MODULE_8__[i].id !== 'undefined' && _data_infoPackage_json__WEBPACK_IMPORTED_MODULE_8__[i].id == infoPkg)) {
              _context.next = 7;
              break;
            }

            result = _data_infoPackage_json__WEBPACK_IMPORTED_MODULE_8__[i]; // console.log(result)

            return _context.abrupt("return", {
              errorCode: errorCode,
              info: result
            });

          case 7:
            i++;
            _context.next = 3;
            break;

          case 10:
            errorCode = 204;
            return _context.abrupt("return", {
              errorCode: errorCode,
              info: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[infoPkg].js.f2a5fadcb76b51e40ab3.hot-update.js.map