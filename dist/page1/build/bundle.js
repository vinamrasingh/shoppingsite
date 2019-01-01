/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);





var ShoppingCartService =
/*#__PURE__*/
function () {
  function ShoppingCartService() {
    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, ShoppingCartService);

    this.bannerURL = "http://localhost:5000/categories";
    this.carouselUrl = "http://localhost:5000/banners";
    this.categoryUrl = "http://localhost:5000/categories";
    this.productUrl = "http://localhost:5000/products";
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(ShoppingCartService, [{
    key: "getBannerData",
    value: function () {
      var _getBannerData = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch(this.bannerURL);

              case 3:
                res = _context.sent;
                return _context.abrupt("return", res.json());

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function getBannerData() {
        return _getBannerData.apply(this, arguments);
      }

      return getBannerData;
    }()
  }, {
    key: "getCategoriesData",
    value: function () {
      var _getCategoriesData = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return fetch(this.categoryUrl);

              case 3:
                res = _context2.sent;
                return _context2.abrupt("return", res.json());

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getCategoriesData() {
        return _getCategoriesData.apply(this, arguments);
      }

      return getCategoriesData;
    }()
  }, {
    key: "getProductsData",
    value: function () {
      var _getProductsData = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(id) {
        var prodUrl, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                prodUrl = this.productUrl;

                if (id != 0) {
                  //const response=await fetch(`${this.url}?id=${id}`);
                  prodUrl = this.productUrl + "?category=" + id;
                }

                _context3.next = 5;
                return fetch(prodUrl);

              case 5:
                res = _context3.sent;
                return _context3.abrupt("return", res.json());

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function getProductsData(_x) {
        return _getProductsData.apply(this, arguments);
      }

      return getProductsData;
    }()
  }, {
    key: "getDataCarousel",
    value: function () {
      var _getDataCarousel = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return fetch(this.carouselUrl);

              case 3:
                res = _context4.sent;
                return _context4.abrupt("return", res.json());

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function getDataCarousel() {
        return _getDataCarousel.apply(this, arguments);
      }

      return getDataCarousel;
    }()
  }]);

  return ShoppingCartService;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);



var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Utils);
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Utils, [{
    key: "parseRequestURL",
    value: function parseRequestURL() {
      var url = window.location.hash.slice(1).toLowerCase() || '/';
      var r = url.split("/");
      var request = {
        resource: null,
        id: null,
        verb: null
      };
      request.resource = r[1];
      request.id = r[2];
      request.verb = r[3];
      return request;
    }
  }, {
    key: "addToCart",
    value: function addToCart(productData) {
      var items = JSON.parse(sessionStorage.getItem("cartItems"));
      var item = {};
      var qty = 0;
      var itemCost = 0;
      var totalQty = 0;

      if (!items) {
        items = [];
      }

      var found = false;

      for (var i = 0; i < items.length; i++) {
        if (items[i].id == productData.id) {
          items[i].qty += 1;
          qty = items[i].qty;
          itemCost = qty * items[i].price;
          found = true;
        }

        totalQty += items[i].qty;
      }

      if (!found) {
        item = productData;
        item.qty = 1;
        itemCost = item.price;
        qty = 1;
        totalQty += 1;
        items.push(item);
      }

      sessionStorage.setItem("cartItems", JSON.stringify(items));
      console.log('Adding : ' + productData.id + 'and ' + productData.category);
      return {
        'qty': qty,
        'itemCost': itemCost,
        'totalQty': totalQty
      };
    }
  }, {
    key: "minusFromCart",
    value: function minusFromCart(productData) {
      var items = JSON.parse(sessionStorage.getItem("cartItems"));
      var qty = 0;
      var itemCost = 0;
      var last = false;
      var totalQty = 0;

      if (!items) {
        items = [];
      }

      for (var i = 0; i < items.length; i++) {
        totalQty += items[i].qty;

        if (items[i].id == productData.id) {
          items[i].qty -= 1;
          totalQty -= 1;
          qty = items[i].qty;

          if (items[i].qty == 0) {
            items.splice(i, 1);

            if (items.length == 0) {
              last = true;
            }

            itemCost = 0;
          } else {
            itemCost = qty * items[i].price;
          }
        }
      }

      sessionStorage.setItem("cartItems", JSON.stringify(items));
      console.log('Adding : ' + productData.id + 'and ' + productData.category);
      return {
        'qty': qty,
        'itemCost': itemCost,
        'totalQty': totalQty,
        'last': last
      };
    }
  }, {
    key: "getEmptyCartMarkup",
    value: function getEmptyCartMarkup() {
      var emptyMarkup = "\n                <section class=\"cartEmpty\">\n                <p>No items in your cart</p>\n                <p>Your favourite items are just a click away.\n                </section>";
      return emptyMarkup;
    }
  }, {
    key: "getEmptyCartFooterMarkup",
    value: function getEmptyCartFooterMarkup() {
      var footerMarkup = "<a class = \"startShopping\" href=\"#\"><span>Start Shopping</span></a>";
      return footerMarkup;
    }
  }, {
    key: "findTotalCost",
    value: function findTotalCost() {
      var items = JSON.parse(sessionStorage.getItem("cartItems"));
      var totalCost = 0;

      if (items) {
        for (var i = 0; i < items.length; i++) {
          totalCost += items[i].qty * items[i].price;
        }
      }

      return totalCost;
    }
  }]);

  return Utils;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HomeComponent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ProductPage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_Utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_CartComponent__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_SigninComponent__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_SignupComponent__ = __webpack_require__(19);









var MainComponent =
/*#__PURE__*/
function () {
  function MainComponent() {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, MainComponent);

    this.utils = new __WEBPACK_IMPORTED_MODULE_4__service_Utils__["a" /* default */]();
    this.render();
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(MainComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      var routes = {
        '/': __WEBPACK_IMPORTED_MODULE_2__components_HomeComponent__["a" /* default */],
        '/products/:id': __WEBPACK_IMPORTED_MODULE_3__components_ProductPage__["a" /* default */],
        '/cart': __WEBPACK_IMPORTED_MODULE_5__components_CartComponent__["a" /* default */],
        '/signin': __WEBPACK_IMPORTED_MODULE_6__components_SigninComponent__["a" /* default */],
        '/signup': __WEBPACK_IMPORTED_MODULE_7__components_SignupComponent__["a" /* default */]
      };

      var router = function router() {
        var content = document.getElementsByClassName('.content');

        var request = _this.utils.parseRequestURL();

        var parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
        var page = routes[parsedURL] ? routes[parsedURL] : Error404;

        if (parsedURL == '/cart') {
          new page("#overlay", request);
        } else {
          new page(".content", request);
        }
      };

      window.addEventListener('hashchange', function () {
        router();
      });
      window.addEventListener('load', function () {
        router();
      });
    }
  }]);

  return MainComponent;
}();


new MainComponent();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BannerComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CarouselComponent__ = __webpack_require__(11);





var HomeComponent =
/*#__PURE__*/
function () {
  function HomeComponent(parent, request) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, HomeComponent);

    this.parent = parent;
    this.request = request;
    this.render();
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(HomeComponent, [{
    key: "render",
    value: function render() {
      var markUp = "<section id=\"carousel\"></section>";
      $(this.parent).html(markUp);
      this.carousel = new __WEBPACK_IMPORTED_MODULE_3__CarouselComponent__["a" /* default */]("#carousel");
      this.banner = new __WEBPACK_IMPORTED_MODULE_2__BannerComponent__["a" /* default */](this.parent);
    }
  }]);

  return HomeComponent;
}();



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shoppingCartService__ = __webpack_require__(2);




var BannerComponent =
/*#__PURE__*/
function () {
  function BannerComponent(parent) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, BannerComponent);

    this.shoppingCartService = new __WEBPACK_IMPORTED_MODULE_2__service_shoppingCartService__["a" /* default */]();
    this.parent = parent;
    this.render();
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(BannerComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      var compare = function compare(a, b) {
        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;
        return 0;
      };

      this.shoppingCartService.getBannerData().then(function (result) {
        var bannerData = result;
        result.sort(compare);
        result.forEach(function (bannerData) {
          var flag = "".concat(bannerData.enabled);

          if (flag == "true") {
            var markup = "<section role=\"banner\" class=\"bannerContainer effect\">\n                        <article class= \"imageContainer\" >\n                            <img class = \"bannerImage\" src=\"".concat(bannerData.imageUrl, "\" alt=\"\">\n                        </article>\n                        <article class=\"bannerContentContainer\">\n                            <h3>").concat(bannerData.name, "</h3>\n                            <p>").concat(bannerData.description, "</p>\n                            <a class=\"bannerButton\" href=\"#/products/").concat(bannerData.id, "\">Explore ").concat(bannerData.key, "</a>\n                        </article>                    \n                    </section>");
            $(_this.parent).append(markup);
          }
        });
      });
    }
  }]);

  return BannerComponent;
}();



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(9);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ImageCarouselComponent__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shoppingCartService__ = __webpack_require__(2);




var self;

var CarouselComponent =
/*#__PURE__*/
function () {
  function CarouselComponent(parent) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, CarouselComponent);

    this.parent = parent;
    this.slideIndex = 1;
    this.shoppingCartService = new __WEBPACK_IMPORTED_MODULE_3__service_shoppingCartService__["a" /* default */]();
    this.render();
    self = this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(CarouselComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.shoppingCartService.getDataCarousel().then(function (result) {
        var markUp = "<div class=\"slideshow-container\">\n        \n        <div id=\"carouselImage\"></div>\n       \n            <a class=\"prev\" id=\"prevButton\">&#10094; PREV</a>\n            <a class=\"next\" id=\"nextButton\">NEXT &#10095;</a>\n            \n            \n        </div>\n        <div class =\"carouselDots\">\n            \n        </div>";
        $(_this.parent).append(markUp);
        var c = 1;
        result.forEach(function (carouselImage) {
          new __WEBPACK_IMPORTED_MODULE_2__ImageCarouselComponent__["a" /* default */]('#carouselImage', carouselImage);
          var dotMarkup = "<span class=\"dot\" id=\"dot_".concat(c, "\"></span>");
          $('.carouselDots').append(dotMarkup);
          $('#dot_' + "".concat(c)).on('click', {
            "counter": c
          }, self.currentSlide);
          c++;
        });

        _this.showSlides(1);

        $('#prevButton').on('click', {
          "counter": -1
        }, self.plusSlides);
        $('#nextButton').on('click', {
          "counter": 1
        }, self.plusSlides);
      });
    } // Next/previous controls

  }, {
    key: "plusSlides",
    value: function plusSlides(n) {
      self.showSlides(self.slideIndex += n.data.counter);
    } // Thumbnail image controls

  }, {
    key: "currentSlide",
    value: function currentSlide(n) {
      self.showSlides(self.slideIndex = n.data.counter);
    }
  }, {
    key: "showSlides",
    value: function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");

      if (n > slides.length) {
        self.slideIndex = 1;
      }

      if (n < 1) {
        self.slideIndex = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[self.slideIndex - 1].style.display = "block";
      dots[self.slideIndex - 1].className += " active";
    }
  }]);

  return CarouselComponent;
}(); ///showSlides(1);




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);



var ImageCarouselComponent =
/*#__PURE__*/
function () {
  function ImageCarouselComponent(parent, carouselSuggestion) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, ImageCarouselComponent);

    this.imgUrl = carouselSuggestion.bannerImageUrl;
    this.parent = parent;
    this.render();
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(ImageCarouselComponent, [{
    key: "render",
    value: function render() {
      var markup = "\n        <div class=\"mySlides fade\">\n          \n          \n            <img src=".concat(this.imgUrl, " style=\"width:100%\">\n          \n          \n        </div>");
      $(this.parent).append(markup);
    }
  }]);

  return ImageCarouselComponent;
}();



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CategoriesComponent__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProductComponent__ = __webpack_require__(15);





var ProductPage =
/*#__PURE__*/
function () {
  function ProductPage(parent, request) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, ProductPage);

    this.parent = parent;
    this.request = request;
    this.id = this.request && this.request.id ? this.request.id : 0;
    this.render();
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(ProductPage, [{
    key: "render",
    value: function render() {
      var markUp = "<section class=\"grid-container\">\n                <aside class=\"categoriesClass\"></aside>\n                <section class=\"productsClass\"></section>\n        </section>";
      $(this.parent).html(markUp);
      new __WEBPACK_IMPORTED_MODULE_2__CategoriesComponent__["a" /* default */](".categoriesClass");
      new __WEBPACK_IMPORTED_MODULE_3__ProductComponent__["a" /* default */](".productsClass", this.id);
    }
  }]);

  return ProductPage;
}();



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shoppingCartService__ = __webpack_require__(2);




var CategoriesComponent =
/*#__PURE__*/
function () {
  function CategoriesComponent(parent) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, CategoriesComponent);

    this.parent = parent;
    this.shoppingCartService = new __WEBPACK_IMPORTED_MODULE_2__service_shoppingCartService__["a" /* default */]();
    this.render();
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(CategoriesComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.shoppingCartService.getCategoriesData().then(function (result) {
        result.forEach(function (categoryData) {
          var flag = "".concat(categoryData.enabled);

          if (flag == "true") {
            var markup = "<article class=\"categoriesName\">\n                        <a href = \"#/products/".concat(categoryData.id, "\">").concat(categoryData.name, "</a>\n                    </article>");
            $(_this.parent).append(markup);
          }
        });
      });
    }
  }]);

  return CategoriesComponent;
}();



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shoppingCartService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_Utils__ = __webpack_require__(3);





var ProductComponent =
/*#__PURE__*/
function () {
  function ProductComponent(parent, id) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, ProductComponent);

    this.parent = parent;
    this.id = id;
    this.shoppingCartService = new __WEBPACK_IMPORTED_MODULE_2__service_shoppingCartService__["a" /* default */]();
    this.Utils = new __WEBPACK_IMPORTED_MODULE_3__service_Utils__["a" /* default */]();
    this.render();
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(ProductComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      var context = {
        context: this
      };
      $(this.parent).html('');
      this.shoppingCartService.getProductsData(this.id).then(function (result) {
        result.forEach(function (productData) {
          //const context={context:productData};
          var markup = _this.returnMarkup(productData);

          if (_this.id != 0 && _this.id == productData.category) {
            $(_this.parent).append(markup);
          } else if (_this.id == 0) {
            $(_this.parent).append(markup);
          }

          var addToCart = function addToCart() {
            var newVal = this.context.Utils.addToCart(productData);
            $(".cartItemCount").html("(".concat(newVal.totalQty, " Items)"));
            $(".mainHeaderQty").html("".concat(newVal.totalQty, " Items"));
          };

          var boundFunc = addToCart.bind(context);
          $('#add_' + "".concat(productData.id)).on('click', boundFunc);
        });
      });
    }
  }, {
    key: "returnMarkup",
    value: function returnMarkup(productData) {
      return "<section class= \"productContainer\">\n        <p class=\"productName\">".concat(productData.name, "</p>\n        <section class=\"productImageContainer\">\n            <img class=\"productImage\" src = \"").concat(productData.imageURL, "\" alt=\"\">\n        </section>\n        <section class=\"descriptionContainer\">\n        <p class=\"productDescription\">").concat(productData.description, "</p>\n        </section>\n        <article class=\"mrpandbuy\">\n            <p class=\"mrp\">MRP Rs.").concat(productData.price, "</p>\n            <button class=\"productBuy\" id=\"add_").concat(productData.id, "\" type=\"button\">Buy Now</button>\n        </article>\n        </section>\n        ");
    }
  }]);

  return ProductComponent;
}();



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CartItemComponent__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_Utils__ = __webpack_require__(3);





var CartComponent =
/*#__PURE__*/
function () {
  function CartComponent(parent) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, CartComponent);

    this.parent = parent;
    this.Utils = new __WEBPACK_IMPORTED_MODULE_3__service_Utils__["a" /* default */]();
    this.render();
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(CartComponent, [{
    key: "render",
    value: function render() {
      var markUp = "\n        <div class= \"cartBackground\">\n        <div class=\"overlay-content\">\n        <main class=\"cartContainer\">\n            <section class=\"cartHeader\">\n                <article class=\"cartInfo\">\n                    <h1 class=\"cartItemLabel\">My Cart  &nbsp;</h1><h3 class=\"cartItemCount\"></h3>\n                </article>\n                <article class=\"close\">&times;</article>\n            </section>\n            <section class=\"cartItemContainer\"></section>\n        </main>\n        <footer class=\"cartFooter\">\n        </footer>\n        </div>\n        </div>";
      $(this.parent).html(markUp);
      $('.close').on('click', function () {
        $('.cartBackground')[0].style.display = "none";
        history.back();
      });

      if (JSON.parse(sessionStorage.getItem("cartItems")) && JSON.parse(sessionStorage.getItem("cartItems")).length > 0) {
        var bannerMarkup = "<section class=\"discountBanner\" role=\"banner\">\n                    <article class=\"discountLogo\">\n                        <img src=\"static/images/lowest-price.png\" alt=\"\">\n                    </article>\n                    <article class=\"discountBannerText\">\n                        You won't find it cheaper anywhere\n                    </article>\n                </section>";
        var footerMarkup = "<p>Promo code can be applied on payment page</p>\n                <a class=\"showTotals\" href=\"#\"><span>Proceed to checkout</span>\n                <span id=\"cartTotal\"> </span></a>";
        $(".cartContainer").append(bannerMarkup);
        $(".cartFooter").append(footerMarkup);
        new __WEBPACK_IMPORTED_MODULE_2__CartItemComponent__["a" /* default */](".cartItemContainer");
      } else {
        var emptyMarkup = this.Utils.getEmptyCartMarkup();
        $(".cartItemContainer").replaceWith(emptyMarkup);

        var _footerMarkup = this.Utils.getEmptyCartFooterMarkup();

        $(".cartFooter").html(_footerMarkup);
      }
    }
  }]);

  return CartComponent;
}();



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shoppingCartService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_Utils__ = __webpack_require__(3);





var CartItemComponent =
/*#__PURE__*/
function () {
  function CartItemComponent(parent) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, CartItemComponent);

    this.parent = parent;
    this.shoppingCartService = new __WEBPACK_IMPORTED_MODULE_2__service_shoppingCartService__["a" /* default */]();
    this.Utils = new __WEBPACK_IMPORTED_MODULE_3__service_Utils__["a" /* default */]();
    this.render();
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(CartItemComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      var cartTotal = 0;
      var totalQty = 0;
      var items = JSON.parse(sessionStorage.getItem("cartItems"));

      if (items && items.length > 0) {
        var _loop = function _loop(i) {
          var productData = items[i];
          var grandTotal = productData.qty * productData.price;
          cartTotal += parseInt(grandTotal);
          totalQty += items[i].qty;
          var markUp = "<section class=\"cartItem\" id=\"cartItem_".concat(productData.id, "\">\n                        <article class=\"cartItemImage\">\n                            <img src=\"").concat(productData.imageURL, "\"/>\n                        </article>\n                        <article class=\"cartItemText\">\n                            <h1>").concat(productData.name, "</h1>\n                            <p>\n                                <span class=\"leftCalc\">  \n                                    <span class=\"cartButton\" id=\"cartMinus_").concat(productData.id, "\">-</span>\n                                    <span id=\"itemQty_").concat(productData.id, "\">").concat(productData.qty, "</span>\n                                    <span class=\"cartButton\" id=\"cartAdd_").concat(productData.id, "\">+</span>\n                                        X  <span>Rs. ").concat(productData.price, "</span>\n                                </span>   \n                                <span class=\"rightCalc\">    \n                                <span class=\"grand-total\" id=\"grandTotal_").concat(productData.id, "\">Rs. ").concat(grandTotal, "</span>\n                                </span>  \n                            </p>\n                        </article>\n                    </section>");
          $(_this.parent).append(markUp);
          $("#cartTotal").html("Rs. " + cartTotal + ">");

          var addToCart = function addToCart() {
            var newVal = this.Utils.addToCart(productData);
            $("#itemQty_" + "".concat(productData.id)).html(newVal.qty);
            $("#grandTotal_" + "".concat(productData.id)).html('Rs. ' + newVal.itemCost);
            var megaTotal = this.Utils.findTotalCost();
            $("#cartTotal").html("Rs. " + megaTotal + ">");
            $(".cartItemCount").html("(".concat(newVal.totalQty, " Items)"));
            $(".mainHeaderQty").html("".concat(newVal.totalQty, " Items"));
          };

          var boundFuncAdd = addToCart.bind(_this);
          $('#cartAdd_' + "".concat(productData.id)).on('click', boundFuncAdd);

          var minusFromCart = function minusFromCart() {
            var newVal = this.Utils.minusFromCart(productData);

            if (newVal.qty > 0) {
              $("#itemQty_" + "".concat(productData.id)).html(newVal.qty);
              $("#grandTotal_" + "".concat(productData.id)).html('Rs. ' + newVal.itemCost);
              var megaTotal = this.Utils.findTotalCost();
              $("#cartTotal").html("Rs. " + megaTotal + ">");
            } else {
              if (newVal.last) {
                var emptyMarkup = this.Utils.getEmptyCartMarkup();
                $(".cartItemContainer").replaceWith(emptyMarkup);
                $(".discountBanner").replaceWith('');
                var footerMarkup = this.Utils.getEmptyCartFooterMarkup();
                $(".cartFooter").html(footerMarkup);
              } else {
                $("#cartItem_" + "".concat(productData.id)).html('');
              }
            }

            $(".cartItemCount").html("(".concat(newVal.totalQty, " Items)"));
            $(".mainHeaderQty").html("".concat(newVal.totalQty, " Items"));
          };

          var boundFuncMinus = minusFromCart.bind(_this);
          $('#cartMinus_' + "".concat(productData.id)).on('click', boundFuncMinus);
        };

        for (var i = 0; i < items.length; i++) {
          _loop(i);
        }
      }

      $(".cartItemCount").html("(".concat(totalQty, " Items)"));
      $(".mainHeaderQty").html("".concat(totalQty, " Items"));
    }
  }]);

  return CartItemComponent;
}();



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);



var SigninComponent =
/*#__PURE__*/
function () {
  function SigninComponent(parent, request) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, SigninComponent);

    this.parent = parent;
    this.request = request;
    this.render();
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(SigninComponent, [{
    key: "render",
    value: function render() {
      var markUp = "\n        <section class=\"screenContainer\">\n        <section class=\"leftScreen\">\n            <h1>Login</h1>\n            <p>Get access to your Orders, Wishlist and Recommendations</p>\n        </section>\n        <section class=\"rightScreen\">\n            <form action=\"\">\n                <article class=\"textField\">\n                    <input type=\"email\" class=\"inputField\" required/>\n                    <span class=\"floating-label\">Email</span>\n                </article>\n                <article class=\"textField\">\n                    <input type=\"password\" class=\"inputField\" required/>\n                    <span class=\"floating-label\">Password</span>\n                </article>\n                <article>\n                    <a href=\"\">Login</a>\n                </article>\n            </form>\n        </section></section>";
      $(this.parent).html(markUp);
    }
  }]);

  return SigninComponent;
}();



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);



var SignupComponent =
/*#__PURE__*/
function () {
  function SignupComponent(parent, request) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, SignupComponent);

    this.parent = parent;
    this.request = request;
    this.render();
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(SignupComponent, [{
    key: "render",
    value: function render() {
      var markUp = "\n        <section class=\"screenContainer\">\n        <section class=\"leftScreen\">\n                        <h1>Signup</h1>\n                        <p>We do not share your personal details with anyone.</p>\n                </section>\n                \n                <section class=\"rightScreen\">\n                        <form action=\"\">\n                            <article class=\"textField\">\n                                <input type=\"text\" class=\"inputField\" required/>\n                                <span class=\"floating-label\">First Name</span>\n                            </article>\n    \n                            <article class=\"textField\">\n                                <input type=\"text\" class=\"inputField\" required/>\n                                <span class=\"floating-label\">Last Name</span>\n                            </article>\n                            \n                            <article class=\"textField\">\n                                <input type=\"email\" class=\"inputField\" required/>\n                                <span class=\"floating-label\">Email</span>\n                            </article>\n    \n                            <article class=\"textField\">\n                                <input type=\"password\" class=\"inputField\" required/>\n                                <span class=\"floating-label\">Password</span>\n                            </article>\n\n                            <article class=\"textField\">\n                                <input type=\"password\" class=\"inputField\" required/>\n                                <span class=\"floating-label\">Confirm Password</span>\n                            </article>\n\n                           <article>\n                               <a href=\"\">Signup</a>\n                           </article>\n    \n    \n                        </form>\n                </section>\n        </section>";
      $(this.parent).html(markUp);
    }
  }]);

  return SignupComponent;
}();



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map