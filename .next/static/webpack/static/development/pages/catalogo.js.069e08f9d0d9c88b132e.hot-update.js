webpackHotUpdate("static/development/pages/catalogo.js",{

/***/ "./node_modules/react-bootstrap/Button.js":
/*!************************************************!*\
  !*** ./node_modules/react-bootstrap/Button.js ***!
  \************************************************/
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

var _SafeAnchor = _interopRequireDefault(__webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/SafeAnchor.js"));

var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};

var Button = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn');
  var classes = (0, _classnames.default)(className, prefix, active && 'active', prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return _react.default.createElement(_SafeAnchor.default, (0, _extends2.default)({}, props, {
      as: as,
      ref: ref,
      className: (0, _classnames.default)(classes, props.disabled && 'disabled')
    }));
  }

  if (ref) {
    props.ref = ref;
  }

  if (!as) {
    props.type = type;
  }

  var Component = as || 'button';
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    className: classes
  }));
});

Button.displayName = 'Button';
Button.defaultProps = defaultProps;
var _default = Button;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

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
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/Card.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/nano/Documents/AP/zona-recreativa-web/pages/catalogo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function catalogo() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      width: '18rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Img, {
    variant: "top",
    src: "holder.js/100px180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Card Title"), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Some quick example text to build on the card title and make up the bulk of the card's content."), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Go somewhere"))));
}

/***/ })

})
//# sourceMappingURL=catalogo.js.069e08f9d0d9c88b132e.hot-update.js.map