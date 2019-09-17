webpackHotUpdate("static/development/pages/catalogo.js",{

/***/ "./pages/resources sync recursive ^\\.\\/.*$":
/*!***************************************!*\
  !*** ./pages/resources sync ^\.\/.*$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./a.jpg": "./pages/resources/a.jpg",
	"./b.jpg": "./pages/resources/b.jpg",
	"./c.jpg": "./pages/resources/c.jpg",
	"./d.jpg": "./pages/resources/d.jpg",
	"./e.jpg": "./pages/resources/e.jpg",
	"./f.jpg": "./pages/resources/f.jpg",
	"./logo-1.png": "./pages/resources/logo-1.png",
	"./logo.png": "./pages/resources/logo.png",
	"./logo.svg": "./pages/resources/logo.svg",
	"./logo.xcf": "./pages/resources/logo.xcf",
	"./map.jpg": "./pages/resources/map.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./pages/resources sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./pages/resources/logo-1.png":
/*!************************************!*\
  !*** ./pages/resources/logo-1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-1-aaacba74555f98e3fa3cab4de5a210b4.png";

/***/ })

})
//# sourceMappingURL=catalogo.js.95fbd9860eaae3e12688.hot-update.js.map