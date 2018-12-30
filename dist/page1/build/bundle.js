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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
    }async getProductsData(id){
        try{
            let prodUrl = this.productUrl;
            if(id!=0){
                //const response=await fetch(`${this.url}?id=${id}`);
                prodUrl= this.productUrl+"?category="+id;
            }
            const res = await fetch(prodUrl);
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_HomeComponent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ProductPage__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_Utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CartComponent__ = __webpack_require__(10);






class MainComponent{
    constructor(){
        
        this.utils= new __WEBPACK_IMPORTED_MODULE_2__service_Utils__["a" /* default */]();
        this.render();
    }
    render(){

        let routes = {
            '/':__WEBPACK_IMPORTED_MODULE_0__components_HomeComponent__["a" /* default */],
            '/products/:id':__WEBPACK_IMPORTED_MODULE_1__components_ProductPage__["a" /* default */],
            '/cart' : __WEBPACK_IMPORTED_MODULE_3__components_CartComponent__["a" /* default */]
        }
        let router=()=>{
            const content = document.getElementsByClassName('.content');
    
            let request = this.utils.parseRequestURL();
            let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
            let page = routes[parsedURL] ? routes[parsedURL] : Error404
            if(parsedURL == '/cart'){
                new page("#overlay",request);
            }else{
                new page(".content",request);
            }
            
        }
        window.addEventListener('hashchange',()=>{router();});
        window.addEventListener('load',()=>{router();});
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = MainComponent;

new MainComponent();








    /* getHome(){
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
    } */
    /* render(){
        
        //homePage = new HomeComponent()
        let routes={
            '/': new HomeComponent(".content"),
            '/home': new ProductComponent(".content")
            //'/product':new ProductComponent(".productsClass")
        }

        let contentDiv = document.getElementsByClassName('.content');
        //contentDiv.innerHTML = this.routes[window.location.pathname];
        let linkArray =document.getElementsByTagName('a');
        for (var i = 0; i < linkArray.length; i++) {
            linkArray[i].addEventListener('click', (e)=>{
                e.preventDefault();
                let pathName =this.getPathName(e);
                //window.location.pathname=pathName;
                //onNavItemClick(pathName);   
                console.log('pressed');
            });
          }
        /* linkArray.forEach((aElement,index)=>{
            aElement.addEventListener('click', ()=>{
                this.preventDefault();
                let pathName =this.getPathName(e);
                window.location.pathname=pathName;
                onNavItemClick(pathName);   
                console.log('pressed');
            });
        }); */
        /* let onNavItemClick = (pathName) => {
            window.history.pushState(
              {}, 
              pathName,
              window.location.origin + pathName
            );
            contentDiv.innerHTML = routes[pathName];
        }
        window.onpopstate = () => {
            contentDiv.innerHTML = routes[window.location.pathname];
        } */

        /* const self={context: this};
        let urlArray= this.url.split('/');
        if(urlArray[urlArray.length]==''){
            new HomeComponent(.content)
        }
        let openHome=function(){
            
            new HomeComponent(".content");
        }
        let openProduct=function(){
            new ProductComponent(".content");
        } */
        // $(this.parent).append(markUp);
        // let boundFuncHome=openHome.bind(self);
        // let boundFuncProduct=openProduct.bind(self);
          
        // $('.homeButton').on('click',boundFuncHome);
        // $('.productButton').on('click',boundFuncProduct);
        //new HomeComponent(".content");
    /*} */
    /* getPathName(element){
        if(element.srcElement.id =="homeLink"){
            new HomeComponent(".content");
            return "/home.html";
        }
        if(element.srcElement.id =="productLink"){
            new ProductComponent(".content");
            return "/product.html";
        }
    } */
    



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BannerComponent__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CarouselComponent__ = __webpack_require__(4);
//import MainComponent  from './components/MainComponent';





class HomeComponent {
    constructor(parent,request){
        this.parent=parent;
        this.request=request;
        /* super();
        if(super.getHome()){
            this.render();
        } */
        this.render();
    }
    render(){
        let markUp=`<section id="carousel">

        </section>`;
        // $(this.parent)[0].innerHTML="HI";
        $(this.parent).html(markUp);
        this.carousel= new __WEBPACK_IMPORTED_MODULE_1__CarouselComponent__["a" /* default */]("#carousel");
        this.banner = new __WEBPACK_IMPORTED_MODULE_0__BannerComponent__["a" /* default */](this.parent);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HomeComponent;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__ = __webpack_require__(0);


class BannerComponent{
    constructor(parent){
        this.shoppingCartService=new __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__["a" /* default */];
        this.parent=parent;
        this.render();
        
    }
    render(){
        let self;
        this.shoppingCartService.getBannerData().then((result)=>{
            let bannerData=result;
            result.forEach(bannerData => {
                self={context: bannerData};
                let flag=`${bannerData.enabled}`;
                if(flag=="true"){
                    let markup =
                    `<section role="banner" class="bannerContainer effect">
                        <article class= "imageContainer" >
                            <img class = "bannerImage" src="${bannerData.imageUrl}" alt="">
                        </article>
                        <article class="bannerContentContainer">
                            <h3>${bannerData.name}</h3>
                            <p>${bannerData.description}</p>
                            <a class="bannerButton" href="#/products/${bannerData.id}">Explore ${bannerData.key}</a>
                        </article>                    
                    </section>`;

                    $(this.parent).append(markup);
                }
               /*  let buyItem=function(){
                    new ItemAdd("#itemCount",this.context,"edit");
                }
                  $(this.parent).append(markUp);
                  let boundFunc=openModal.bind(self);
                  
                  $('#edit_'+`${this.id}`).on('click',boundFunc); */
            });
            
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BannerComponent;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ImageCarouselComponent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_shoppingCartService__ = __webpack_require__(0);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CategoriesComponent__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProductComponent__ = __webpack_require__(8);

//import HomeComponent from './components/HomeComponent';

//import HomeComponent from './components/HomeComponent';

class ProductPage{
    constructor(parent,request){
        this.homeActivated= true;
        this.productActivated=false;
        this.parent ='.content';
        this.request = request;
        this.id= (this.request && this.request.id)?this.request.id : 0;
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
        new  __WEBPACK_IMPORTED_MODULE_0__CategoriesComponent__["a" /* default */](".categoriesClass");
        new __WEBPACK_IMPORTED_MODULE_1__ProductComponent__["a" /* default */](".productsClass",this.id);
         
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
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductPage;

new ProductPage();


/***/ }),
/* 7 */
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
                    `<article class="categoriesName">
                        <a href = "#/products/${categoryData.id}">${categoryData.name}</a>
                    </article>`;

                    $(this.parent).append(markup);
                }
                

            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoriesComponent;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__ = __webpack_require__(0);

class ProductComponent{
    constructor(parent,id){
        this.parent=parent;
        this.id = id;
        this.shoppingCartService=new __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__["a" /* default */];
        this.render();
    }
    render(){
        //const context={context:this};

        $(this.parent).html('');
        this.shoppingCartService.getProductsData(this.id).then((result)=>{
            result.forEach(productData => {
                const context={context:productData};
                let markup = this.returnMarkup(productData);
                if(this.id!=0 && this.id==productData.category){
                    $(this.parent).append(markup);
                }else if(this.id==0){
                    $(this.parent).append(markup);
                }
                let addToCart=function(){
                    let item = sessionStorage.getItem(productData.id);
                    if(!item){
                        item=productData;
                        item.qty=1;
                    }
                    else{
                        let obj = JSON.parse(item);
                        obj.qty+=1;
                        item=obj;
                    }
                    sessionStorage.setItem(productData.id,JSON.stringify(item));

                    console.log('Adding : '+ productData.id +'and '+productData.category);
                }
                let boundFunc=addToCart.bind(context);
                $('#add_'+`${productData.id}`).on('click',boundFunc);
            });
        });
        
    }
    returnMarkup(productData){
        return `<section class= "productContainer">
        <p class="productName">${productData.name}</p>
        <section class="productImageContainer">
            <img class="productImage" src = "${productData.imageURL}" alt="">
        </section>
        <section class="descriptionContainer">
        <p class="productDescription">${productData.description}</p>
        </section>
        <article class="mrpandbuy">
            <p class="mrp">MRP Rs.${productData.price}</p>
            <button class="productBuy" id="add_${productData.id}" type="button">Buy Now</button>
        </article>
        </section>
        `;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductComponent;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class  Utils{
    constructor(){
        
    }
    parseRequestURL(){

        let url = window.location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/")
        let request = {
            resource    : null,
            id          : null,
            verb        : null
        }
        request.resource    = r[1]
        request.id          = r[2]
        request.verb        = r[3]

        return request;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Utils;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CartItemComponent__ = __webpack_require__(11);


class CartComponent{
    constructor(parent){
        this.parent=parent;
        this.render();

    }
    render(){
        let markUp = `
        <div class= "cartBackground">
        <div class="overlay-content">
        <span class="close">&times;</span>
        <main class="cartContainer">
            <section class="cartHeader">
                <h1 class="cartItemLabel">My Cart  &nbsp;</h1><h3 class="cartItemCount">(1 item)</h3>
            </section>
            <section class="cartItemContainer">

                
            </section>
            <section class="discountBanner" role="banner">
                <article class="discountLogo">
                    <img src="static/images/lowest-price.png" alt="">
                </article>
                <article class="discountBannerText">
                    You won't find it cheaper anywhere
                </article>
            </section>
        </main>

        <footer class="cartFooter">
            <p>Promo code can be applied on payment page</p>
            <a href="#"><span>Proceed to checkout</span><span id="cartTotal"> </span></a>
        </footer>
        </div>
        </div>`;
        
        $(this.parent).html(markUp);
        $('.close').on('click',()=>{
            $('.cartBackground')[0].style.display ="none";
            history.back();
        });
        new __WEBPACK_IMPORTED_MODULE_0__CartItemComponent__["a" /* default */](".cartItemContainer");
        



        
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CartComponent;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__ = __webpack_require__(0);


class CartItemComponent{
    constructor(parent){
        this.parent=parent;
        this.shoppingCartService=new __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__["a" /* default */]();
        this.render();
    }
    render(){
        let cartTotal = 0;
        this.shoppingCartService.getProductsData(0).then((result)=>{
            result.forEach(product => {
                let productData=JSON.parse(sessionStorage.getItem(product.id));
                if(productData){
                    let grandTotal =`${productData.qty * productData.price}`;
                    cartTotal+=parseInt(grandTotal);
                    let markUp=`
                    <section class="cartItem">
                                <article class="cartItemImage">
                                    <img src="${productData.imageURL}"/>
                                </article>
                                <article class="cartItemText">
                                    <h1>${productData.name}</h1>
                                    <p>
                                        <span class="leftCalc">  
                                            <span class="cartButton">-</span>
                                            <span>${productData.qty}</span>
                                            <span class="cartButton">+</span>
                                                X  <span>Rs. ${productData.price}</span>
                                        </span>   
                                        <span class="rightCalc">    
                                        <span class="grand-total">Rs. ${grandTotal}</span>
                                        </span>  
                                    </p>
                                </article>
                            </section>    
                    `;
                    $(this.parent).append(markUp);
                    $("#cartTotal").html("Rs. "+cartTotal + ">");
                }
            });
        });
        
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CartItemComponent;


/***/ })
/******/ ]);