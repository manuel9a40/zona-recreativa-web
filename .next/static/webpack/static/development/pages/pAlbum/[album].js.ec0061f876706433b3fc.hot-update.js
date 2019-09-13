webpackHotUpdate("static/development/pages/pAlbum/[album].js",{

/***/ "./pages/data/infoPackage.json":
false,

/***/ "./pages/data/photos.json":
/*!********************************!*\
  !*** ./pages/data/photos.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"v1\",\"imgs\":[{\"src\":\"a.png\",\"thumbnail\":\"a.png\",\"thumbnailWidth\":\"10%\",\"thumbnailHeight\":\"10%\"},{\"src\":\"b.png\",\"thumbnail\":\"b.png\",\"thumbnailWidth\":\"10%\",\"thumbnailHeight\":\"10%\"},{\"src\":\"c.png\",\"thumbnail\":\"c.png\",\"thumbnailWidth\":\"10%\",\"thumbnailHeight\":\"10%\"}]},{\"id\":\"v2\",\"name\":\"Viaje 2\",\"date\":\"02/01/2000\"},{\"id\":\"v3\",\"name\":\"Viaje 3\",\"date\":\"03/01/2000\"},{\"id\":\"v4\",\"name\":\"Viaje 4\",\"date\":\"04/01/2000\"},{\"id\":\"v5\",\"name\":\"Viaje 5\",\"date\":\"05/01/2000\"}]");

/***/ }),

/***/ "./pages/pAlbum/[album].js":
/*!*********************************!*\
  !*** ./pages/pAlbum/[album].js ***!
  \*********************************/
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
/* harmony import */ var _data_photos_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/photos.json */ "./pages/data/photos.json");
var _data_photos_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/photos.json */ "./pages/data/photos.json", 1);
/* harmony import */ var _components_Album__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Album */ "./pages/components/Album.js");


var _jsxFileName = "/home/nano/Documents/AdmProyecto/zona-recreativa-web/pages/pAlbum/[album].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var album = function album(props) {
  if (props.errorCode) {//return <Error statusCode={props.errorCode} />
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    className: "pt-4 text-center mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.info.name), __jsx("div", {
    className: "container mb-5 pt-sm-auto ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_components_Album__WEBPACK_IMPORTED_MODULE_9__["default"], {
    images: props.info.imgs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))));
};

album.getInitialProps =
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
            if (!(i < _data_photos_json__WEBPACK_IMPORTED_MODULE_8__.length)) {
              _context.next = 10;
              break;
            }

            if (!(typeof _data_photos_json__WEBPACK_IMPORTED_MODULE_8__[i].id !== 'undefined' && _data_photos_json__WEBPACK_IMPORTED_MODULE_8__[i].id == infoPkg)) {
              _context.next = 7;
              break;
            }

            result = _data_photos_json__WEBPACK_IMPORTED_MODULE_8__[i]; // console.log(result)

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

/* harmony default export */ __webpack_exports__["default"] = (album);

/***/ })

})
//# sourceMappingURL=[album].js.ec0061f876706433b3fc.hot-update.js.map