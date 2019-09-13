webpackHotUpdate("static/development/pages/galeria.js",{

/***/ "./pages/components/Album.js":
/*!***********************************!*\
  !*** ./pages/components/Album.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-grid-gallery */ "./node_modules/react-grid-gallery/lib/Gallery.js");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_grid_gallery__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/home/nano/Documents/AdmProyecto/zona-recreativa-web/pages/components/Album.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var Album =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Album, _React$Component);

  function Album(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Album);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Album).call(this, props));
    _this.state = {
      images: _this.props.images,
      selectAllChecked: false
    };
    _this.onSelectImage = _this.onSelectImage.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.getSelectedImages = _this.getSelectedImages.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onClickSelectAll = _this.onClickSelectAll.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Album, [{
    key: "allImagesSelected",
    value: function allImagesSelected(images) {
      var f = images.filter(function (img) {
        return img.isSelected == true;
      });
      return f.length == images.length;
    }
  }, {
    key: "onSelectImage",
    value: function onSelectImage(index, image) {
      var images = this.state.images.slice();
      var img = images[index];
      if (img.hasOwnProperty("isSelected")) img.isSelected = !img.isSelected;else img.isSelected = true;
      this.setState({
        images: images
      });

      if (this.allImagesSelected(images)) {
        this.setState({
          selectAllChecked: true
        });
      } else {
        this.setState({
          selectAllChecked: false
        });
      }
    }
  }, {
    key: "getSelectedImages",
    value: function getSelectedImages() {
      var selected = [];

      for (var i = 0; i < this.state.images.length; i++) {
        if (this.state.images[i].isSelected == true) selected.push(i);
      }

      return selected;
    }
  }, {
    key: "onClickSelectAll",
    value: function onClickSelectAll() {
      var selectAllChecked = !this.state.selectAllChecked;
      this.setState({
        selectAllChecked: selectAllChecked
      });
      var images = this.state.images.slice();

      if (selectAllChecked) {
        for (var i = 0; i < this.state.images.length; i++) {
          images[i].isSelected = true;
        }
      } else {
        for (var i = 0; i < this.state.images.length; i++) {
          images[i].isSelected = false;
        }
      }

      this.setState({
        images: images
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "col-9 mx-auto",
        style: {
          display: "block",
          minHeight: "1px",
          overflow: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(react_grid_gallery__WEBPACK_IMPORTED_MODULE_8___default.a, {
        images: this.state.images,
        onSelectImage: this.onSelectImage,
        showLightboxThumbnails: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }));
    }
  }]);

  return Album;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Album.defaultProps = {
  images: [{
    src: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    thumbnail: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    thumbnailWidth: "10%",
    thumbnailHeight: "10%",
    caption: "After Rain (Jeshu John - designerspics.com)"
  }, {
    src: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    thumbnail: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    thumbnailWidth: "10%",
    thumbnailHeight: "10%",
    caption: "After Rain (Jeshu John - designerspics.com)"
  }, {
    src: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    thumbnail: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    thumbnailWidth: "10%",
    thumbnailHeight: "10%",
    caption: "After Rain (Jeshu John - designerspics.com)"
  }, {
    src: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    thumbnail: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    thumbnailWidth: "10%",
    thumbnailHeight: "10%",
    caption: "After Rain (Jeshu John - designerspics.com)"
  }, {
    src: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    thumbnail: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    thumbnailWidth: "10%",
    thumbnailHeight: "10%",
    caption: "After Rain (Jeshu John - designerspics.com)"
  }, {
    src: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    thumbnail: __webpack_require__(/*! ../resources/logo.png */ "./pages/resources/logo.png"),
    thumbnailWidth: "10%",
    thumbnailHeight: "10%",
    caption: "After Rain (Jeshu John - designerspics.com)"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Album);

/***/ })

})
//# sourceMappingURL=galeria.js.3c10c232424181845877.hot-update.js.map