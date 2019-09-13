webpackHotUpdate("static/development/pages/adminMain.js",{

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
var _jsxFileName = "/home/nano/Documents/AdmProyecto/zona-recreativa-web/pages/adminMain.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var closeSession = function closeSession() {
  return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
};

var packagesOnClick = function packagesOnClick() {
  return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/adminPackages');
};

var slOnClick = function slOnClick() {
  return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/adminSeguros');
};

var mpOnClick = function mpOnClick() {
  return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/adminPlanesA');
};

var msOnClick = function msOnClick() {
  return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/adminPersonalM');
};

var tOnClick = function tOnClick() {
  return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/adminTrans');
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
  }, "Administrador")), __jsx("div", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-924353260" + " " + "btn-group-admin col-8 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("button", {
    onClick: packagesOnClick,
    className: "jsx-924353260" + " " + "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Administrar paquetes"), __jsx("button", {
    onClick: slOnClick,
    className: "jsx-924353260" + " " + "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Administrar seguros laborales"), __jsx("button", {
    onClick: mpOnClick,
    className: "jsx-924353260" + " " + "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Administrar planes alimenticios"), __jsx("button", {
    onClick: msOnClick,
    className: "jsx-924353260" + " " + "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Administrar personal m\xE9dico"), __jsx("button", {
    onClick: tOnClick,
    className: "jsx-924353260" + " " + "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Administrar transporte"), __jsx("button", {
    onClick: closeSession,
    className: "jsx-924353260" + " " + "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Cerrar sesi\xF3n"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "924353260",
    __self: this
  }, ".btn-group-admin.jsx-924353260 button.jsx-924353260{width:50%;table-layout:fixed;border-collapse:collapse;position:relative;border:0.1em solid #FFFFFF;font-size:15px;background-color:black;color:white;padding:1em 2em;box-sizing:border-box;-webkit-text-decoration:none;text-decoration:none;margin-top:50px;text-align:center;-webkit-transition:all 0.2s;transition:all 0.2s;display:inline;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.btn-group-admin.jsx-924353260 button.jsx-924353260:hover{color:#000000;background-color:#42c8f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbm8vRG9jdW1lbnRzL0FkbVByb3llY3RvL3pvbmEtcmVjcmVhdGl2YS13ZWIvcGFnZXMvYWRtaW5NYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDNEIsQUFJK0IsQUFtQkksVUFsQkssSUFtQk0sZUFsQkEsVUFtQjdCLGVBbEJzQixrQkFDUSwyQkFDWCxlQUNRLHVCQUNYLFlBQ0ksZ0JBQ00sc0JBQ0Ysa0RBQ0osZ0JBQ0Usa0JBQ0UsZ0RBQ0wsZUFDRyw2RkFDdEIiLCJmaWxlIjoiL2hvbWUvbmFuby9Eb2N1bWVudHMvQWRtUHJveWVjdG8vem9uYS1yZWNyZWF0aXZhLXdlYi9wYWdlcy9hZG1pbk1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9HZW5lcmFsTGF5b3V0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IGNsb3NlU2Vzc2lvbiA9ICgpID0+IFJvdXRlci5wdXNoKCcvJylcblxuY29uc3QgcGFja2FnZXNPbkNsaWNrID0gKCkgPT4gUm91dGVyLnB1c2goJy9hZG1pblBhY2thZ2VzJylcblxuY29uc3Qgc2xPbkNsaWNrID0gKCkgPT4gUm91dGVyLnB1c2goJy9hZG1pblNlZ3Vyb3MnKVxuXG5jb25zdCBtcE9uQ2xpY2sgPSAoKSA9PiBSb3V0ZXIucHVzaCgnL2FkbWluUGxhbmVzQScpXG5cbmNvbnN0IG1zT25DbGljayA9ICgpID0+IFJvdXRlci5wdXNoKCcvYWRtaW5QZXJzb25hbE0nKVxuXG5jb25zdCB0T25DbGljayA9ICgpID0+IFJvdXRlci5wdXNoKCcvYWRtaW5UcmFucycpXG5cblxuLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkbWluTWFpbiAoKVxue1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC0yIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkbWluaXN0cmFkb3JcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwLWFkbWluIGNvbC04IG14LWF1dG9cIiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbC02XCIgb25DbGljaz17cGFja2FnZXNPbkNsaWNrfT5BZG1pbmlzdHJhciBwYXF1ZXRlczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29sLTZcIiBvbkNsaWNrPXtzbE9uQ2xpY2t9PkFkbWluaXN0cmFyIHNlZ3Vyb3MgbGFib3JhbGVzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb2wtNlwiIG9uQ2xpY2s9e21wT25DbGlja30+QWRtaW5pc3RyYXIgcGxhbmVzIGFsaW1lbnRpY2lvczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29sLTZcIiBvbkNsaWNrPXttc09uQ2xpY2t9PkFkbWluaXN0cmFyIHBlcnNvbmFsIG3DqWRpY288L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbC02XCIgb25DbGljaz17dE9uQ2xpY2t9PkFkbWluaXN0cmFyIHRyYW5zcG9ydGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbC02XCIgb25DbGljaz17Y2xvc2VTZXNzaW9ufT5DZXJyYXIgc2VzacOzbjwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgICAgLmJ0bi1ncm91cC1hZG1pbiBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjowLjFlbSBzb2xpZCAjRkZGRkZGO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYnRuLWdyb3VwLWFkbWluIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJjOGY1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXX0= */\n/*@ sourceURL=/home/nano/Documents/AdmProyecto/zona-recreativa-web/pages/adminMain.js */"))));
}

/***/ })

})
//# sourceMappingURL=adminMain.js.c9809a8eef09e0ca481d.hot-update.js.map