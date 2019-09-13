webpackHotUpdate("static\\development\\pages\\adminMain.js",{

/***/ "./node_modules/react-bootstrap/Badge.js":
/*!***********************************************!*\
  !*** ./node_modules/react-bootstrap/Badge.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/ThemeProvider.js");

var defaultProps = {
  pill: false
};

var Badge = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      pill = _ref.pill,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "pill", "className"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'badge');
  return _react.default.createElement("span", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, prefix, pill && prefix + "-pill", variant && prefix + "-" + variant)
  }));
});

Badge.displayName = 'Badge';
Badge.defaultProps = defaultProps;
var _default = Badge;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./pages/adminMain.js":
/*!****************************!*\
  !*** ./pages/adminMain.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return adminMain; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GeneralLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/GeneralLayout */ "./pages/components/GeneralLayout.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navigation */ "./pages/components/Navigation.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "A:\\GIT_ROOT\\zona-recreativa-web\\pages\\adminMain.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var closeSession = function closeSession() {
  return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
};

var packagesOnClick = function packagesOnClick() {
  return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/adminPackages');
};

var slOnClick = function slOnClick() {
  return null;
};

var mpOnClick = function mpOnClick() {
  return null;
};

var msOnClick = function msOnClick() {
  return null;
};

var tOnClick = function tOnClick() {
  return null;
}; //


function adminMain() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h1", {
    className: "mt-2 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Administrador"))), __jsx("div", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-924353260" + " " + "btn-group-admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("button", {
    onClick: packagesOnClick,
    className: "jsx-924353260",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Administrar paquetes"), __jsx("button", {
    onClick: slOnClick,
    className: "jsx-924353260",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Administrar seguros laborales"), __jsx("button", {
    onClick: mpOnClick,
    className: "jsx-924353260",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Administrar planes alimenticios"), __jsx("button", {
    onClick: msOnClick,
    className: "jsx-924353260",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Administrar personal m\xE9dico"), __jsx("button", {
    onClick: tOnClick,
    className: "jsx-924353260",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Administrar transporte"), __jsx("button", {
    onClick: closeSession,
    className: "jsx-924353260",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Cerrar sesi\xF3n"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "924353260",
    __self: this
  }, ".btn-group-admin.jsx-924353260 button.jsx-924353260{width:50%;table-layout:fixed;border-collapse:collapse;position:relative;border:0.1em solid #FFFFFF;font-size:15px;background-color:black;color:white;padding:1em 2em;box-sizing:border-box;-webkit-text-decoration:none;text-decoration:none;margin-top:50px;text-align:center;-webkit-transition:all 0.2s;transition:all 0.2s;display:inline;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.btn-group-admin.jsx-924353260 button.jsx-924353260:hover{color:#000000;background-color:#42c8f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkE6XFxHSVRfUk9PVFxcem9uYS1yZWNyZWF0aXZhLXdlYlxccGFnZXNcXGFkbWluTWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzRCLEFBSStCLEFBbUJJLFVBbEJLLElBbUJNLGVBbEJBLFVBbUI3QixlQWxCc0Isa0JBQ1EsMkJBQ1gsZUFDUSx1QkFDWCxZQUNJLGdCQUNNLHNCQUNGLGtEQUNKLGdCQUNFLGtCQUNFLGdEQUNMLGVBQ0csNkZBQ3RCIiwiZmlsZSI6IkE6XFxHSVRfUk9PVFxcem9uYS1yZWNyZWF0aXZhLXdlYlxccGFnZXNcXGFkbWluTWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL0dlbmVyYWxMYXlvdXQnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBjbG9zZVNlc3Npb24gPSAoKSA9PiBSb3V0ZXIucHVzaCgnLycpXHJcblxyXG5jb25zdCBwYWNrYWdlc09uQ2xpY2sgPSAoKSA9PiBSb3V0ZXIucHVzaCgnL2FkbWluUGFja2FnZXMnKVxyXG5cclxuY29uc3Qgc2xPbkNsaWNrID0gKCkgPT4gbnVsbFxyXG5cclxuY29uc3QgbXBPbkNsaWNrID0gKCkgPT4gbnVsbFxyXG5cclxuY29uc3QgbXNPbkNsaWNrID0gKCkgPT4gbnVsbFxyXG5cclxuY29uc3QgdE9uQ2xpY2sgPSAoKSA9PiBudWxsXHJcblxyXG5cclxuLy9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRtaW5NYWluICgpXHJcbntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtMiBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkbWluaXN0cmFkb3JcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cC1hZG1pblwiIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwYWNrYWdlc09uQ2xpY2t9PkFkbWluaXN0cmFyIHBhcXVldGVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NsT25DbGlja30+QWRtaW5pc3RyYXIgc2VndXJvcyBsYWJvcmFsZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bXBPbkNsaWNrfT5BZG1pbmlzdHJhciBwbGFuZXMgYWxpbWVudGljaW9zPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21zT25DbGlja30+QWRtaW5pc3RyYXIgcGVyc29uYWwgbcOpZGljbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0T25DbGlja30+QWRtaW5pc3RyYXIgdHJhbnNwb3J0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZVNlc3Npb259PkNlcnJhciBzZXNpw7NuPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICAgICAgICAgIC5idG4tZ3JvdXAtYWRtaW4gYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjAuMWVtIHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW0gMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnRuLWdyb3VwLWFkbWluIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyYzhmNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXX0= */\n/*@ sourceURL=A:\\GIT_ROOT\\zona-recreativa-web\\pages\\adminMain.js */")));
}

/***/ }),

/***/ "./pages/components/Navigation.jsx":
/*!*****************************************!*\
  !*** ./pages/components/Navigation.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/Navbar.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Image */ "./node_modules/react-bootstrap/Image.js");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Badge */ "./node_modules/react-bootstrap/Badge.js");
/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "A:\\GIT_ROOT\\zona-recreativa-web\\pages\\components\\Navigation.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
// npm install react-bootstrap bootstrap







var Navigation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navigation, _Component);

  function Navigation() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Navigation);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Navigation).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Navigation, [{
    key: "render",
    value: function render() {
      var _jsx;

      return __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "shadow sticky-top ",
        collapseOnSelect: "collapseOnSelect",
        expand: "md",
        bg: "light",
        variant: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default.a.Toggle, {
        "aria-controls": "responsive-navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default.a.Collapse, {
        className: "justify-content-between",
        id: "responsive-navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "pl-xl-5 pl-lg-4 pl-md-2 pl-sm-3 pl-4 col-xs-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link px-lg-4 px-xl-4 px-sm-0 mx-md-2 d-sm-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Inicio")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/catalogo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Cat\xE1logo")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Galer\xEDa")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Informaci\xF3n"))), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default.a.Brand, {
        className: "d-none d-md-block col-xs-1 col-md-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: "d-none d-md-block",
        src: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
        style: {
          cursor: 'pointer'
        },
        fluid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }))), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "pr-xl-5 pr-lg-4 pr-md-2 pr-sm-3 pl-4 col-xs-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Proveedores")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Contacto")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, (_jsx = {
        href: ""
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "href", "/about"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 72
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx("a", {
        className: "nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Acerca de")))), __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=adminMain.js.b5ee0dcee70db3e40bc1.hot-update.js.map