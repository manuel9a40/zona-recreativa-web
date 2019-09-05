webpackHotUpdate("static/development/pages/catalogo.js",{

/***/ "./node_modules/react-bootstrap/Card.js":
/*!**********************************************!*\
  !*** ./node_modules/react-bootstrap/Card.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/ThemeProvider.js");

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/utils/createWithBsPrefix.js"));

var _divWithClassName = _interopRequireDefault(__webpack_require__(/*! ./utils/divWithClassName */ "./node_modules/react-bootstrap/utils/divWithClassName.js"));

var _CardContext = _interopRequireDefault(__webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/CardContext.js"));

var _CardImg = _interopRequireDefault(__webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/CardImg.js"));

var DivStyledAsH5 = (0, _divWithClassName.default)('h5');
var DivStyledAsH6 = (0, _divWithClassName.default)('h6');
var CardBody = (0, _createWithBsPrefix.default)('card-body');
var defaultProps = {
  body: false
};

var Card = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card');
  var cardContext = (0, _react.useMemo)(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return _react.default.createElement(_CardContext.default.Provider, {
    value: cardContext
  }, _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ? _react.default.createElement(CardBody, null, children) : children));
});

Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = _CardImg.default;
Card.Title = (0, _createWithBsPrefix.default)('card-title', {
  Component: DivStyledAsH5
});
Card.Subtitle = (0, _createWithBsPrefix.default)('card-subtitle', {
  Component: DivStyledAsH6
});
Card.Body = CardBody;
Card.Link = (0, _createWithBsPrefix.default)('card-link', {
  Component: 'a'
});
Card.Text = (0, _createWithBsPrefix.default)('card-text', {
  Component: 'p'
});
Card.Header = (0, _createWithBsPrefix.default)('card-header');
Card.Footer = (0, _createWithBsPrefix.default)('card-footer');
Card.ImgOverlay = (0, _createWithBsPrefix.default)('card-img-overlay');
var _default = Card;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/CardImg.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/CardImg.js ***!
  \*************************************************/
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
  variant: null
};

var CardImg = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "variant", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card-img');
  return _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref,
    className: (0, _classnames.default)(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});

CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
var _default = CardImg;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/utils/divWithClassName.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-bootstrap/utils/divWithClassName.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _default = function _default(className) {
  return _react.default.forwardRef(function (p, ref) {
    return _react.default.createElement("div", (0, _extends2.default)({}, p, {
      ref: ref,
      className: (0, _classnames.default)(p.className, className)
    }));
  });
};

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
var _jsxFileName = "/home/nano/Documents/AP/zona-recreativa-web/pages/catalogo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function catalogo() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      width: '18rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Img, {
    variant: "top",
    src: "holder.js/100px180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Card Title"), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Some quick example text to build on the card title and make up the bulk of the card's content."), __jsx(Button, {
    variant: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Go somewhere"))));
}

/***/ })

})
//# sourceMappingURL=catalogo.js.37c5e34ba7fdbc4b8105.hot-update.js.map