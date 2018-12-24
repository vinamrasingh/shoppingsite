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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ShoppingCartService{
    constructor(){
        this.bannerURL="http://localhost:5001/categories";
        this.carouselUrl ="http://localhost:5001/banners";
        this.categoryUrl ="http://localhost:5001/categories";
        this.productUrl ="http://localhost:5001/products";
    }
    async getBannerData(){
        try{
            const res = await fetch(this.bannerURL);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }
    async getCategoriesData(){
        try{
            const res = await fetch(this.categoryUrl);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }async getProductsData(){
        try{
            const res = await fetch(this.productUrl);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }
    async getDataCarousel(){
        try{
            const res = await fetch(this.carouselUrl);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShoppingCartService;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__ = __webpack_require__(0);

class ProductComponent{
    constructor(parent){
        this.parent=parent;
        this.shoppingCartService=new __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__["a" /* default */];
        this.render();
    }
    render(){

        $(this.parent).html('');
        this.shoppingCartService.getProductsData().then((result)=>{
            result.forEach(productData => {
                
                    let markup =

                    `<section class= "productContainer">
                    <p class="productName">${productData.name}</p>
                    <section class="productImageContainer">
                        <img class="productImage" src = "${productData.imageURL}" alt="">
                    </section>
                    <p class="productDescription">${productData.description}</p>
                    <article class="mrpandbuy">
                        <p class="mrp">MRP Rs.${productData.price}</p>
                        <button class="productBuy" type="button">Buy Now</button>
                    </article>
                    </section>
                    `;

                    $(this.parent).append(markup);
                

            });
        });
        

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductComponent;


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_CategoriesComponent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ProductComponent__ = __webpack_require__(1);

//import HomeComponent from './components/HomeComponent';

//import HomeComponent from './components/HomeComponent';

class ProductPage{
    constructor(parent){
        this.homeActivated= true;
        this.productActivated=false;
        this.parent ='.content';
        //this.banner = new BannerComponent('.grid-container');
        this.render();
    }
    
    render(){
        const self={context: this};
        
        let markUp=`<section class="grid-container">
                <aside class="categoriesClass"></aside>
                <section class="productsClass"></section>
        </section>`;
        $(this.parent).html(markUp);
        new  __WEBPACK_IMPORTED_MODULE_0__components_CategoriesComponent__["a" /* default */](".categoriesClass");
        new __WEBPACK_IMPORTED_MODULE_1__components_ProductComponent__["a" /* default */](".productsClass");
         
    }
    /* render(){
        const self={context: this};
        let openHome=function(){
            
            new HomeComponent(".content");
        }
        let openProduct=function(){
            new ProductComponent(".content");
        }
        // $(this.parent).append(markUp);
        let boundFuncHome=openHome.bind(self);
        let boundFuncProduct=openProduct.bind(self);
          
        $('.homeButton').on('click',boundFuncHome);
        $('.productButton').on('click',boundFuncProduct);
        new HomeComponent(".content");
    } */
    
}
/* harmony export (immutable) */ __webpack_exports__["default"] = ProductPage;

new ProductPage();


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__ = __webpack_require__(0);


class CategoriesComponent{
    constructor(parent){
        this.parent=parent;
        this.shoppingCartService=new __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__["a" /* default */];
        this.render();
    }
    render(){
        this.shoppingCartService.getCategoriesData().then((result)=>{
            result.forEach(categoryData => {
                let flag=`${categoryData.enabled}`;
                if(flag=="true"){
                    let markup =
                    `<article >
                        ${categoryData.name}
                    </article>                  
                    `;

                    $(this.parent).append(markup);
                }
                

            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoriesComponent;


/***/ })
/******/ ]);