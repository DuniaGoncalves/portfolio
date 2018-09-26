((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/BackgroundImage.js":
/*!***************************************!*\
  !*** ./components/BackgroundImage.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/WorkFeed.js":
/*!********************************!*\
  !*** ./components/WorkFeed.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WorkItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkItem */ "./components/WorkItem.js");
var _jsxFileName = "/Users/dgoncalves/programs/portfolio/components/WorkFeed.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "work-feed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, data.map(function (item, i) {
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WorkItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }));
});

/***/ }),

/***/ "./components/WorkItem.js":
/*!********************************!*\
  !*** ./components/WorkItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BackgroundImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackgroundImage */ "./components/BackgroundImage.js");
/* harmony import */ var _BackgroundImage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BackgroundImage__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dgoncalves/programs/portfolio/components/WorkItem.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import config from './../config';

 // import classnames from 'classnames';
// import Markdown from 'react-markdown';

var WorkItem =
/*#__PURE__*/
function (_Component) {
  _inherits(WorkItem, _Component);

  function WorkItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WorkItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WorkItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLogoClicked", function () {
      var open = _this.state.open;

      _this.setState({
        open: open ? false : true
      });
    });

    return _this;
  }

  _createClass(WorkItem, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      var title = item.fields.title;
      var excerpt = item.fields.excerpt;
      var backgroundImage = item.fields.featuredImage;
      var colour = item.fields.colour;
      var logo = item.fields.logo;
      var logoWidth = item.fields.logoWidth;
      var link = item.fields.link;
      var _this$state = this.state,
          open = _this$state.open,
          toggledInfoBefore = _this$state.toggledInfoBefore;
      var itemClassnames = classnames({
        'work-feed__item': true,
        'work-feed__item--open': open
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: itemClassnames,
        style: {
          backgroundColor: "#".concat(colour)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BackgroundImage__WEBPACK_IMPORTED_MODULE_1___default.a, {
        image: backgroundImage,
        movedUp: open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "work-feed__details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "work-feed__logo-container",
        onClick: this.onLogoClicked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, logo ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "work-feed__logo",
        src: logo.fields.file.url,
        alt: title,
        style: {
          width: "".concat(logoWidth, "px")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: toggleClassnames,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "work-feed__indicator-copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Toggle info"))) : null)));
    }
  }]);

  return WorkItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./data/pageHome.json":
/*!****************************!*\
  !*** ./data/pageHome.json ***!
  \****************************/
/*! exports provided: title, work, default */
/***/ (function(module) {

module.exports = {"title":"Homepage","work":[{"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4klekh5hb7b1"}},"id":"74WZfCO1pY4auk8OuCQIYG","type":"Entry","createdAt":"2018-09-25T17:54:23.360Z","updatedAt":"2018-09-25T17:54:23.360Z","environment":{"sys":{"id":"master","type":"Link","linkType":"Environment"}},"revision":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"work"}},"locale":"en-US"},"fields":{"title":"About Me","date":"2018-09-25T00:00-04:00","featuredImage":{"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4klekh5hb7b1"}},"id":"2rKhJCJ9JmOaqAwmSykacW","type":"Asset","createdAt":"2018-09-25T17:47:59.846Z","updatedAt":"2018-09-25T17:47:59.846Z","environment":{"sys":{"id":"master","type":"Link","linkType":"Environment"}},"revision":1,"locale":"en-US"},"fields":{"title":"Dunia","file":{"url":"//images.ctfassets.net/4klekh5hb7b1/2rKhJCJ9JmOaqAwmSykacW/537e034050d8b8f4a03e182fd29c54ef/Snapchat-1997066536.jpg","details":{"size":75161,"image":{"width":720,"height":1280}},"fileName":"Snapchat-1997066536.jpg","contentType":"image/jpeg"}}},"logo":{"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4klekh5hb7b1"}},"id":"q3JsFaXnhuY0i8KyE0eES","type":"Asset","createdAt":"2018-09-25T17:52:35.138Z","updatedAt":"2018-09-25T17:52:35.138Z","environment":{"sys":{"id":"master","type":"Link","linkType":"Environment"}},"revision":1,"locale":"en-US"},"fields":{"title":"baby and me","file":{"url":"//images.ctfassets.net/4klekh5hb7b1/q3JsFaXnhuY0i8KyE0eES/6dee3312795eee4fff215d0c49ab8888/IMG_20171105_203536_858.jpg","details":{"size":89087,"image":{"width":720,"height":720}},"fileName":"IMG_20171105_203536_858.jpg","contentType":"image/jpeg"}}},"logoWidth":10,"excerpt":"Dunia wants to live in a world where education is an\n                opportunity available to everyone, books come bundled with\n                extra dark chocolate, and with a glass of wine, and there is\n                a force field around her keyboard that repels cats and\n                sticky baby fingers. With nearly 9 years of ESL teaching\n                behind her, she gracefully took a nose dive into the\n                technology field via Resilient Coders Bootcamp. She landed a\n                job as a Frontend Web Developer at Everquote in Cambridge.\n                With these new-found skills, she devotes time to personal\n                development and mentoring new coders, even if remotely, on a\n                daily basis. Dunia is a born and raised Bostonian, and now\n                that The Tech Hub has migrated here, she would love to see a\n                range of diversity showcased in the field. And as a\n                Resilient Coders alumna, it is now part of her mission to\n                help make that happen. When she’s not writing code, you can\n                find her whipping up a yummy treat, reading a book imprinted\n                with baby drool or taking a much-needed nap.","color":"purple","link":"www.google.com"}},{"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4klekh5hb7b1"}},"id":"3wIWMF0x7GCQGaaYw2mo2o","type":"Entry","createdAt":"2018-09-25T17:54:48.421Z","updatedAt":"2018-09-25T17:55:01.375Z","environment":{"sys":{"id":"master","type":"Link","linkType":"Environment"}},"revision":2,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"work"}},"locale":"en-US"},"fields":{"title":"About Me","date":"2018-09-25T00:00-04:00","featuredImage":{"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4klekh5hb7b1"}},"id":"2rKhJCJ9JmOaqAwmSykacW","type":"Asset","createdAt":"2018-09-25T17:47:59.846Z","updatedAt":"2018-09-25T17:47:59.846Z","environment":{"sys":{"id":"master","type":"Link","linkType":"Environment"}},"revision":1,"locale":"en-US"},"fields":{"title":"Dunia","file":{"url":"//images.ctfassets.net/4klekh5hb7b1/2rKhJCJ9JmOaqAwmSykacW/537e034050d8b8f4a03e182fd29c54ef/Snapchat-1997066536.jpg","details":{"size":75161,"image":{"width":720,"height":1280}},"fileName":"Snapchat-1997066536.jpg","contentType":"image/jpeg"}}},"logo":{"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4klekh5hb7b1"}},"id":"q3JsFaXnhuY0i8KyE0eES","type":"Asset","createdAt":"2018-09-25T17:52:35.138Z","updatedAt":"2018-09-25T17:52:35.138Z","environment":{"sys":{"id":"master","type":"Link","linkType":"Environment"}},"revision":1,"locale":"en-US"},"fields":{"title":"baby and me","file":{"url":"//images.ctfassets.net/4klekh5hb7b1/q3JsFaXnhuY0i8KyE0eES/6dee3312795eee4fff215d0c49ab8888/IMG_20171105_203536_858.jpg","details":{"size":89087,"image":{"width":720,"height":720}},"fileName":"IMG_20171105_203536_858.jpg","contentType":"image/jpeg"}}},"logoWidth":10,"excerpt":"Dunia wants to live in a world where education is an\n                opportunity available to everyone, books come bundled with\n                extra dark chocolate, and with a glass of wine, and there is\n                a force field around her keyboard that repels cats and\n                sticky baby fingers. With nearly 9 years of ESL teaching\n                behind her, she gracefully took a nose dive into the\n                technology field via Resilient Coders Bootcamp. She landed a\n                job as a Frontend Web Developer at Everquote in Cambridge.\n                With these new-found skills, she devotes time to personal\n                development and mentoring new coders, even if remotely, on a\n                daily basis. Dunia is a born and raised Bostonian, and now\n                that The Tech Hub has migrated here, she would love to see a\n                range of diversity showcased in the field. And as a\n                Resilient Coders alumna, it is now part of her mission to\n                help make that happen. When she’s not writing code, you can\n                find her whipping up a yummy treat, reading a book imprinted\n                with baby drool or taking a much-needed nap.","color":"orange","link":"www.google.com"}}]};

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5d62d38be3592dca3a42 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5d62d38be3592dca3a42 */ "dll-reference dll_5d62d38be3592dca3a42"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_pageHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data/pageHome */ "./data/pageHome.json");
var _data_pageHome__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../data/pageHome */ "./data/pageHome.json", 1);
/* harmony import */ var _components_WorkFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/WorkFeed */ "./components/WorkFeed.js");
var _jsxFileName = "/Users/dgoncalves/programs/portfolio/pages/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WorkFeed__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: _data_pageHome__WEBPACK_IMPORTED_MODULE_1__.work,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_5d62d38be3592dca3a42":
/*!*******************************************!*\
  !*** external "dll_5d62d38be3592dca3a42" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5d62d38be3592dca3a42;

/***/ })

},[[3,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=index.js.map