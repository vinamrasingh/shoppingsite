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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__ = __webpack_require__(1);


class BannerComponent{
    constructor(parent){
        this.shoppingCartService=new __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__["a" /* default */];
        this.parent=parent;
        this.render();
        
    }
    render(){
        this.shoppingCartService.getBannerData().then((result)=>{
            let bannerData=result;
            result.forEach(bannerData => {
                let flag=`${bannerData.enabled}`;
                if(flag=="true"){
                    let markup =
                    `<section role="banner" class="bannerContainer">
                        <article class= "imageContainer" >
                            <img class = "bannerImage" src="${bannerData.imageUrl}" alt="">
                        </article>
                        <article class="bannerContentContainer">
                            <h3>${bannerData.name}</h3>
                            <p>${bannerData.description}</p>
                            <button>Explore ${bannerData.key}</button>
                        </article>                    
                    </section>`;

                    $(this.parent).append(markup);
                }
                

            });
            
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BannerComponent;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ShoppingCartService{
    constructor(){
        this.bannerURL="http://localhost:5001/categories";
        this.carouselUrl ="http://localhost:5001/banners";
    }
    async getBannerData(){
        try{
            const res = await fetch(this.bannerURL);
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BannerComponent__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HomeComponent__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ProductComponent__ = __webpack_require__(6);



//import HomeComponent from './components/HomeComponent';

class MainComponent{
    constructor(){
        this.homeActivated= true;
        this.productActivated=false;
        //this.banner = new BannerComponent('.grid-container');
        this.render();
    }
    getHome(){
        return this.home;
    }
    getProduct(){
        return this.product;
    }
    setHome(home){
        this.homeActivated=home;
    }
    setProduct(product){
        this.productActivated=product;
    }
    render(){
        const self={context: this};
        let openHome=function(){
            
            new __WEBPACK_IMPORTED_MODULE_1__components_HomeComponent__["a" /* default */](".content");
        }
        let openProduct=function(){
            new __WEBPACK_IMPORTED_MODULE_2__components_ProductComponent__["a" /* default */](".content");
        }
        // $(this.parent).append(markUp);
        let boundFuncHome=openHome.bind(self);
        let boundFuncProduct=openProduct.bind(self);
          
        $('.homeButton').on('click',boundFuncHome);
        $('.productButton').on('click',boundFuncProduct);
        new __WEBPACK_IMPORTED_MODULE_1__components_HomeComponent__["a" /* default */](".content");
    }
    
}
/* harmony export (immutable) */ __webpack_exports__["default"] = MainComponent;

new MainComponent();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BannerComponent__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CarouselComponent__ = __webpack_require__(4);
//import MainComponent  from './components/MainComponent';





class HomeComponent {
    constructor(parent){
        this.parent=parent;
        /* super();
        if(super.getHome()){
            this.render();
        } */
        this.render();
    }
    render(){
        let markUp=`<section id="carousel">

        </section>`;
        $(this.parent)[0].innerHTML="";
        $(this.parent).html(markUp);
        this.carousel= new __WEBPACK_IMPORTED_MODULE_1__CarouselComponent__["a" /* default */]("#carousel");
        this.banner = new __WEBPACK_IMPORTED_MODULE_0__BannerComponent__["a" /* default */](this.parent);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HomeComponent;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ImageCarouselComponent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_shoppingCartService__ = __webpack_require__(1);



var self;
class CarouselComponent{
    constructor(parent){
        this.parent=parent;
        this.slideIndex=1;
        this.shoppingCartService = new __WEBPACK_IMPORTED_MODULE_1__service_shoppingCartService__["a" /* default */]();
        this.render();
        self=this;
    }
    render(){
        this.shoppingCartService.getDataCarousel().then((result)=>{
        let markUp=`<div class="slideshow-container">
        
        <div id="carouselImage"></div>
       
            <a class="prev" id="prevButton">&#10094; PREV</a>
            <a class="next" id="nextButton">NEXT &#10095;</a>
            
            
        </div>`;
        $(this.parent).append(markUp);
        result.forEach(carouselImage => {

            new __WEBPACK_IMPORTED_MODULE_0__ImageCarouselComponent__["a" /* default */]('#carouselImage', carouselImage);

        });
        this.showSlides(1);
        $('#prevButton').on('click',{"counter":-1},self.plusSlides);
        $('#nextButton').on('click',{"counter":1},self.plusSlides);
        
    });
    }

    // Next/previous controls
    
    plusSlides(n) {
        self.showSlides(self.slideIndex += n.data.counter);
        }
    // Thumbnail image controls
    currentSlide(n) {
        self.showSlides(self.slideIndex = n.data.counter);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        //var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {self.slideIndex = 1} 
        if (n < 1) {self.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[self.slideIndex-1].style.display = "block"; 
        //dots[this.slideIndex-1].className += " active";
    }   
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CarouselComponent;

///showSlides(1);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ImageCarouselComponent{
    constructor(parent,carouselSuggestion){
        this.imgUrl=carouselSuggestion.bannerImageUrl;
        
        this.parent=parent;
        this.render();
    }
    render(){
        let markup=`
        <div class="mySlides fade">
          
          
            <img src=${this.imgUrl} style="width:100%">
          
          
        </div>`;
        $(this.parent).append(markup);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImageCarouselComponent;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ProductComponent{
    constructor(parent){
        this.parent=parent;
        this.render();
    }
    render(){
        $(this.parent).html('<p>Hi!!</p>');

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductComponent;


/***/ })
/******/ ]);