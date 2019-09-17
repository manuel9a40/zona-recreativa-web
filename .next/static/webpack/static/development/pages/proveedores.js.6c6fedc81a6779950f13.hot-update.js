webpackHotUpdate("static/development/pages/proveedores.js",{

/***/ "./pages/proveedores.js":
/*!******************************!*\
  !*** ./pages/proveedores.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Navigation */ "./pages/components/Navigation.jsx");
/* harmony import */ var _components_GeneralLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/GeneralLayout */ "./pages/components/GeneralLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/home/est/2013/ebosques/Documents/AP/zona-recreativa-web/pages/proveedores.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;






var Proveedores =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Proveedores, _Component);

  function Proveedores() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Proveedores);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Proveedores).call(this)); //inicializa state

    _this.state = {
      name: '',
      lastName: '',
      email: '',
      address: '',
      descrip: '',
      phone: '',
      type: '',
      comment: ''
    }; //Se necesita hacer bind a todas la funciones que se usen dentro de la clase.

    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  } //Se activa cuando se presiona enviar


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Proveedores, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      //No se que hace pero debe ir al inicio
      e.preventDefault(); //Poner aqui lo que tiene que hacer el form cuando se envia la informacion

      alert("Datos enviados"); //Reincia los inputs

      this.setState({
        name: '',
        lastName: '',
        email: '',
        address: '',
        descrip: '',
        phone: '',
        type: '',
        comment: ''
      });
    } //Actualiza los valores cada vez que se hace un cambio en el input

  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      //obtiene el valor y el nombre del componente que cambio
      var _e$target = e.target,
          value = _e$target.value,
          name = _e$target.name; // console.log(value, name);
      // Actualiza el campo que se modifico

      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __jsx(_components_GeneralLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("h1", {
        className: "text-center pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Proveedores"), __jsx("div", {
        className: "col-6 pt-4 mx-auto mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("form", {
        className: "",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Nombre"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
        name: "name",
        type: "text",
        placeholder: "Nombre",
        value: this.state.name,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "lastName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Apellidos"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
        name: "lastName",
        type: "text",
        placeholder: "Apellidos",
        value: this.state.lastName,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }))), __jsx("div", {
        className: "row mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "E-mail"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
        name: "email",
        type: "email",
        placeholder: "e-mail",
        value: this.state.email,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }))), __jsx("div", {
        className: "row mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Direcci\xF3n"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
        name: "address",
        type: "text",
        placeholder: "Direcci\xF3n",
        value: this.state.address,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }))), __jsx("div", {
        className: "row mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "descrip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Descripci\xF3n de las actividades que su empresa realiza"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
        name: "descrip",
        type: "text",
        placeholder: "",
        value: this.state.descrip,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }))), __jsx("div", {
        className: "row mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "tel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Tel\xE9fono"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
        name: "phone",
        type: "phone",
        placeholder: "(+506) 1234 5678",
        value: this.state.phone,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }))), __jsx("div", {
        className: "row mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Tipo servicio"), __jsx("select", {
        name: "type",
        className: "form-control",
        value: this.state.type,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("option", {
        value: "Alimentaci\xF3n",
        "data-index": "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Alimentaci\xF3n"), __jsx("option", {
        value: "Transporte",
        "data-index": "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Transporte"), __jsx("option", {
        value: "Recreaci\xF3n y entretenimiento",
        "data-index": "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Recreaci\xF3n y entretenimiento"), __jsx("option", {
        value: "Eventos",
        "data-index": "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Eventos"), __jsx("option", {
        value: "Organizaci\xF3n de evento",
        "data-index": "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Organizaci\xF3n de evento"), __jsx("option", {
        value: "Limpieza",
        "data-index": "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Limpieza"), __jsx("option", {
        value: "Maintenance",
        "data-index": "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Maintenance"), __jsx("option", {
        value: "Repairs",
        "data-index": "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Repairs"), __jsx("option", {
        value: "Public Safety",
        "data-index": "9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Public Safety"), __jsx("option", {
        value: "Special Projects",
        "data-index": "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Special Projects"), __jsx("option", {
        value: "Event Set up",
        "data-index": "11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Event Set up"), __jsx("option", {
        value: "Housekeeping",
        "data-index": "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Housekeeping")))), __jsx("div", {
        className: "row mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Comentarios"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
        name: "comment",
        as: "textarea",
        rows: "5",
        placeholder: "",
        value: this.state.comment,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }))), __jsx("div", {
        className: "row mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "Pay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "M\xE9todo de pago"), __jsx("div", {
        className: "custom-control custom-radio mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx("input", {
        type: "radio",
        id: "cash",
        name: "customRadio",
        className: "custom-control-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), __jsx("label", {
        className: "custom-control-label",
        htmlFor: "cash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Efectivo")), __jsx("div", {
        className: "custom-control custom-radio mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("input", {
        type: "radio",
        id: "card",
        name: "customRadio",
        className: "custom-control-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }), __jsx("label", {
        className: "custom-control-label",
        htmlFor: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Tarjeta")), __jsx("div", {
        className: "custom-control custom-radio mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx("input", {
        type: "radio",
        id: "check",
        name: "customRadio",
        className: "custom-control-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), __jsx("label", {
        className: "custom-control-label",
        htmlFor: "check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Cheque")))), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "mt-4",
        variant: "dark",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Enviar")))));
    }
  }]);

  return Proveedores;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Proveedores);

/***/ })

})
//# sourceMappingURL=proveedores.js.6c6fedc81a6779950f13.hot-update.js.map