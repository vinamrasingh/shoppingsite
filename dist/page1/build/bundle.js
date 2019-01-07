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
class ShoppingCartService{
    constructor(){
        this.bannerURL="http://localhost:5000/categories";
        this.carouselUrl ="http://localhost:5000/banners";
        this.categoryUrl ="http://localhost:5000/categories";
        this.productUrl ="http://localhost:5000/products";
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
    addToCart(productData){
        let items=JSON.parse(sessionStorage.getItem("cartItems"));
        let item={};
        let qty=0;
        let itemCost = 0;
        let totalQty = 0;
        if(!items){
            items=[];
        }
        let found=false;
        for(let i=0;i<items.length;i++){
            if(items[i].id == productData.id){
                items[i].qty+=1;
                qty=items[i].qty;
                itemCost = qty * items[i].price;
                found =  true;
            }
            totalQty+=items[i].qty;
        }
        if(!found){
            item=productData;
            item.qty=1;
            itemCost = item.price;
            qty=1;
            totalQty+=1;
            items.push(item);
        }
        sessionStorage.setItem("cartItems",JSON.stringify(items));
        console.log('Adding : '+ productData.id +'and '+productData.category);
        return {'qty' : qty,
                'itemCost' : itemCost,
                'totalQty' : totalQty};
    }
    minusFromCart(productData){
        let items=JSON.parse(sessionStorage.getItem("cartItems"));
        let qty=0;
        let itemCost = 0;
        let last=false;
        let totalQty=0;

        if(!items){
            items=[];
        }
       
        for(let i=0;i<items.length;i++){
            totalQty +=items[i].qty;
            if(items[i].id == productData.id){
                items[i].qty-=1;
                totalQty -=1;
                
                qty=items[i].qty;
                if(items[i].qty == 0){
                    items.splice(i,1);
                    if(items.length == 0){
                        last=true;
                    }
                    itemCost=0;
                }else{
                    itemCost = qty * items[i].price;
                }
            }  
        }
        sessionStorage.setItem("cartItems",JSON.stringify(items));
        console.log('Adding : '+ productData.id +'and '+productData.category);
        return {'qty' : qty,
                'itemCost' : itemCost,
                'totalQty' : totalQty,
                'last' : last};
    }
    getEmptyCartMarkup(){
        let emptyMarkup=`
                <section class="cart-empty">
                <p>No items in your cart</p>
                <p>Your favourite items are just a click away.
                </section>`;
        return emptyMarkup;
    }
    getEmptyCartFooterMarkup(){
        let footerMarkup = `<a class = "cart-start-shopping" href="#"><span>Start Shopping</span></a>`;
        return footerMarkup;
    }
    findTotalCost(){
        let items=JSON.parse(sessionStorage.getItem("cartItems"));
        let totalCost = 0;
        if(items){
            for(let i=0;i<items.length;i++){
                totalCost+=(items[i].qty* items[i].price);
            } 
        }
        return totalCost;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Utils;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_HomeComponent__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ProductPage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_Utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CartComponent__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_SigninComponent__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_SignupComponent__ = __webpack_require__(13);








class MainComponent{
    constructor(){
        
        this.utils= new __WEBPACK_IMPORTED_MODULE_2__service_Utils__["a" /* default */]();
        this.render();
    }
    render(){

        let routes = {
            '/':__WEBPACK_IMPORTED_MODULE_0__components_HomeComponent__["a" /* default */],
            '/products/:id':__WEBPACK_IMPORTED_MODULE_1__components_ProductPage__["a" /* default */],
            '/cart' : __WEBPACK_IMPORTED_MODULE_3__components_CartComponent__["a" /* default */],
            '/signin' : __WEBPACK_IMPORTED_MODULE_4__components_SigninComponent__["a" /* default */],
            '/signup' : __WEBPACK_IMPORTED_MODULE_5__components_SignupComponent__["a" /* default */]
        }
        let router=()=>{
            let request = this.utils.parseRequestURL();
            let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
            let page = routes[parsedURL] ? routes[parsedURL] : Error404
            if(parsedURL == '/cart'){
                $('#overlay')[0].style.display="block";
                new page("#overlay",request);
            }else{
                $('#overlay')[0].style.display="none";
                new page(".content",request);
            }
        }
        window.addEventListener('hashchange',()=>{router();});
        window.addEventListener('load',()=>{router();});
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = MainComponent;

new MainComponent();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BannerComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CarouselComponent__ = __webpack_require__(5);



class HomeComponent {
    constructor(parent,request){
        this.parent=parent;
        this.request=request;
        this.render();
    }
    render(){
        let markUp=`<section id="carousel"></section>`;
        
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__ = __webpack_require__(0);


class BannerComponent{
    constructor(parent){
        this.shoppingCartService=new __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__["a" /* default */];
        this.parent=parent;
        this.render();
        
    }
    render(){
        let compare=function(a,b){
            if (a.order < b.order)
                return -1;
            if (a.order > b.order)
                return 1;
            return 0;
        }
        this.shoppingCartService.getBannerData().then((result)=>{
            result.sort(compare);
            result.forEach(bannerData => {

                let flag=`${bannerData.enabled}`;
                if(flag=="true"){
                    let markup =
                    `<div class= "banner-shadow">&nbsp;</div>
                    <section role="banner" class="banner-container effect">
                        <article class= "banner-image-container" >
                            <img class = "banner-image" src="${bannerData.imageUrl}" alt="">
                        </article>
                        <article class="banner-content-container">
                            <h3>${bannerData.name}</h3>
                            <p>${bannerData.description}</p>
                            <a class="banner-button" name= "${bannerData.name}" id="bannerButton_${bannerData.id}" href="#/products/${bannerData.id}">Explore ${bannerData.key}</a>
                        </article>
                                           
                    </section>
                    `;
                    $(this.parent).append(markup);
                    
                    $("#bannerButton_"+`${bannerData.id}`).on('click',(e)=>{
                        sessionStorage.selectedText=e.target.attributes.name.value;
                    });
                }
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BannerComponent;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ImageCarouselComponent__ = __webpack_require__(6);
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
            
            
        </div>
        <div class ="carousel-dots">
            
        </div>`;
        $(this.parent).append(markUp);
        let c=1;
        result.forEach(carouselImage => {

            new __WEBPACK_IMPORTED_MODULE_0__ImageCarouselComponent__["a" /* default */]('#carouselImage', carouselImage);

            let dotMarkup=`<span class="dot" id="dot_${c}"></span>`;
            $('.carousel-dots').append(dotMarkup);
            $('#dot_'+`${c}`).on('click',{"counter":c},self.currentSlide);
            c++;

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
        var slides = document.getElementsByClassName("carousel-slides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {self.slideIndex = 1} 
        if (n < 1) {self.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[self.slideIndex-1].style.display = "block"; 
        dots[self.slideIndex-1].className += " active";
    }   
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CarouselComponent;

///showSlides(1);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ImageCarouselComponent{
    constructor(parent,carouselSuggestion){
        this.imgUrl=carouselSuggestion.bannerImageUrl;
        this.altText =carouselSuggestion.bannerImageAlt;
        
        this.parent=parent;
        this.render();
    }
    render(){
        let markup=`
        <div class="carousel-slides fade">
          
          
            <img src=${this.imgUrl} alt="${this.altText} "style="width:100%">
          
          
        </div>`;
        
        $(this.parent).append(markup);
        
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImageCarouselComponent;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CategoriesComponent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProductComponent__ = __webpack_require__(9);



class ProductPage{
    constructor(parent,request){
        this.parent =parent;
        this.request = request;
        this.id= (this.request && this.request.id)?this.request.id : 0;
        this.render();
    }
    
    render(){
        let markUp=`<section class="grid-container">
        <aside class="product-categories-class">
                    <section class="product-categories-list">
                    </section>
                </aside>


                <section class="product-side">
                    <section id = "productList"class="product-menu">
                        <select class="product-choices" title="Select the category for Products">
                            
                        </select>
                    </section>
                    <section class="products-class"></section>
                    
                </section>
        </section>`;
        $(this.parent).html(markUp);
        new  __WEBPACK_IMPORTED_MODULE_0__CategoriesComponent__["a" /* default */](".product-categories-list");
        new __WEBPACK_IMPORTED_MODULE_1__ProductComponent__["a" /* default */](".products-class",this.id);
        $('#productList').on('change',this.changeURL);
        

    }
    changeURL(){
        let hashValue=$('#productList :selected').val();
        sessionStorage.selectedText=$('#productList :selected').text();
        window.location.href=hashValue;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductPage;


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
        let compare=function(a,b){
            if (a.order < b.order)
                return -1;
            if (a.order > b.order)
                return 1;
            return 0;
        }
        $(".product-choices").html(`<option value=""></option>`);
        $('#productList :selected').text(sessionStorage.selectedText);
        this.shoppingCartService.getCategoriesData().then((result)=>{
            result.sort(compare);
            
            result.forEach(categoryData => {
                let flag=`${categoryData.enabled}`;
                if(flag=="true"){
                    let markup =
                    `<article class="product-categories-name">
                        <a href = "#/products/${categoryData.id}">${categoryData.name}</a>
                    </article>`;
                    $(this.parent).append(markup);
                    if(sessionStorage.selectedText!=categoryData.name){
                        let optionMarkup =`<option class="product-category-options" value ="#/products/${categoryData.id}">${categoryData.name}</option>`;
                        $(".product-choices").append(optionMarkup);
                    }
                }
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoriesComponent;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_Utils__ = __webpack_require__(1);



class ProductComponent{
    constructor(parent,id){
        this.parent=parent;
        this.id = id;
        this.shoppingCartService=new __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__["a" /* default */];
        this.Utils = new __WEBPACK_IMPORTED_MODULE_1__service_Utils__["a" /* default */]();
        this.render();
    }
    render(){
        const context={context:this};

        this.shoppingCartService.getProductsData(this.id).then((result)=>{
            result.forEach(productData => {
                let markup = this.returnMarkup(productData);
                if(this.id!=0 && this.id==productData.category){
                    $(this.parent).append(markup);
                }else if(this.id==0){
                    $(this.parent).append(markup);
                }
                let addToCart=function(){
                    let newVal=this.context.Utils.addToCart(productData); 
                    $(".cart-item-count").html(`(${newVal.totalQty} Items)`);
                    $(".main-header-qty").html(`${newVal.totalQty} Items`)
                }
                let boundFunc=addToCart.bind(context);
                $('#add_'+`${productData.id}`).on('click',boundFunc);
            });
        }); 
    }
    returnMarkup(productData){
        return `<section class= "product-container">
        <p class="product-name">${productData.name}</p>
        <section class='div-alignment'>
        <section class="product-image-container">
            <img class="product-image" src = "${productData.imageURL}" alt="">
        </section>
        <section class ="product-description-alignment">
        <section class="product-description-container">
        <p class="product-description">${productData.description}</p>
        </section>
        <article class="product-mrpandbuy">
            <p class="product-mrp">MRP Rs.${productData.price}</p>
            <button class="product-buy-button" id="add_${productData.id}" type="button">Buy Now <span class="product-price-tag">@Rs.${productData.price}</span></button>
        </article>
        
        </section>
        </section>
        </section>`;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductComponent;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CartItemComponent__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_Utils__ = __webpack_require__(1);



class CartComponent{
    constructor(parent){
        this.parent=parent;
        this.Utils  = new __WEBPACK_IMPORTED_MODULE_1__service_Utils__["a" /* default */]();
        this.render();
    }
    render(){
        let markUp = 
        `<div class= "cart-background" role="dialog">
        <div class="cart-overlay-content">
        <main class="cart-container">
        <section class="cart-header">
                <article class="cart-info">
                    <h1 class="cart-item-label">My Cart  &nbsp;</h1><h2 class="cart-item-count"></h2>
                </article>
                <article class="cart-close-button">&times;</article>
            </section>
            <section class="cart-item-container"></section>
        </main>
        <footer class="cart-footer">
        </footer>
        </div>
        </div>`;
        
        $(this.parent).html(markUp);
        $('.cart-close-button').on('click',()=>{
            $('.cart-background')[0].style.display ="none";
            history.back();
        });

        
        
        if(JSON.parse(sessionStorage.getItem("cartItems")) && JSON.parse(sessionStorage.getItem("cartItems")).length > 0){
            let bannerMarkup= 
                `<section class="cart-discount-banner" role="banner">
                    <article class="cart-discount-logo">
                        <img src="static/images/lowest-price.png" alt="">
                    </article>
                    <article class="cart-discount-banner-text">
                        You won't find it cheaper anywhere
                    </article>
                </section>`;
            let footerMarkup = 
                `<p>Promo code can be applied on payment page</p>
                <a class="cart-show-totals" href="#"><span>Proceed to checkout</span>
                <span id="cartTotal"> </span></a>`;
            
            $(".cart-container").append(bannerMarkup);
            $(".cart-footer").append(footerMarkup);
            new __WEBPACK_IMPORTED_MODULE_0__CartItemComponent__["a" /* default */](".cart-item-container");
        }
        else{
            let emptyMarkup=this.Utils.getEmptyCartMarkup();
            $(".cart-item-container").replaceWith(emptyMarkup);
            
            let footerMarkup = this.Utils.getEmptyCartFooterMarkup();
            $(".cart-footer").html(footerMarkup);
        }
        $(".cart-footer a").focus();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CartComponent;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_Utils__ = __webpack_require__(1);



class CartItemComponent{
    constructor(parent){
        this.parent=parent;
        this.shoppingCartService=new __WEBPACK_IMPORTED_MODULE_0__service_shoppingCartService__["a" /* default */]();
        this.Utils=new __WEBPACK_IMPORTED_MODULE_1__service_Utils__["a" /* default */]();
        this.render();
    }
    render(){
        let cartTotal = 0;
        let totalQty = 0;
        let items=JSON.parse(sessionStorage.getItem("cartItems"));
        if(items && items.length > 0){
            for(let i=0; i<items.length;i++){
                let productData = items[i];
                let grandTotal =productData.qty * productData.price;
                cartTotal+=parseInt(grandTotal);
                totalQty += items[i].qty;

                let markUp=
                    `<section class="cart-item" id="cartItem_${productData.id}">
                        <article class="cart-item-image">
                            <img src="${productData.imageURL}" alt=""/>
                        </article>
                        <article class="cart-item-text">
                            <h1>${productData.name}</h1>
                            <p>
                                <span class="cart-item-leftsection">  
                                    <span class="cart-button" id="cartMinus_${productData.id}">-</span>
                                    <span id="itemQty_${productData.id}">${productData.qty}</span>
                                    <span class="cart-button" id="cartAdd_${productData.id}">+</span>
                                        X  <span>Rs. ${productData.price}</span>
                                </span>   
                                <span class="cart-item-rightsection">    
                                <span class="cart-grand-total" id="grandTotal_${productData.id}">Rs. ${grandTotal}</span>
                                </span>  
                            </p>
                        </article>
                    </section>`;
                $(this.parent).append(markUp);
                $("#cartTotal").html("Rs. "+cartTotal + ">");
                let addToCart=function(){
                    let newVal = this.Utils.addToCart(productData); 
                    $("#itemQty_"+`${productData.id}`).html(newVal.qty);
                    $("#grandTotal_"+`${productData.id}`).html('Rs. '+newVal.itemCost);
                    let megaTotal = this.Utils.findTotalCost();
                    $("#cartTotal").html("Rs. "+megaTotal + ">");
                    $(".cart-item-count").html(`(${newVal.totalQty} Items)`);
                    $(".main-header-qty").html(`${newVal.totalQty} Items`);
                }
                let boundFuncAdd=addToCart.bind(this);
                $('#cartAdd_'+`${productData.id}`).on('click',boundFuncAdd);

                let minusFromCart=function(){
                    let newVal = this.Utils.minusFromCart(productData);
                    if(newVal.qty>0){
                        $("#itemQty_"+`${productData.id}`).html(newVal.qty);
                        $("#grandTotal_"+`${productData.id}`).html('Rs. '+newVal.itemCost);
                        let megaTotal = this.Utils.findTotalCost();
                        $("#cartTotal").html("Rs. "+megaTotal + ">");
                    } 
                    else{
                        if(newVal.last){
                            let emptyMarkup=this.Utils.getEmptyCartMarkup();
                            $(".cart-item-container").replaceWith(emptyMarkup);
                            $(".cart-discount-banner").replaceWith('');
                            let footerMarkup = this.Utils.getEmptyCartFooterMarkup();
                            $(".cart-footer").html(footerMarkup);
                        }else{
                            $("#cartItem_"+`${productData.id}`).html('');
                        } 
                    }
                    $(".cart-item-count").html(`(${newVal.totalQty} Items)`);
                    $(".main-header-qty").html(`${newVal.totalQty} Items`);
                }
                let boundFuncMinus=minusFromCart.bind(this);
                $('#cartMinus_'+`${productData.id}`).on('click',boundFuncMinus);
            }
        }
        $(".cart-item-count").html(`(${totalQty} Items)`);
        $(".main-header-qty").html(`${totalQty} Items`);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CartItemComponent;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class SigninComponent{
    constructor(parent,request){
        this.parent = parent;
        this.request = request;
        this.render();
    }
    
    render(){
        let markUp=`
        <section class="sign-screen-container">
        <section class="sign-screen-left">
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
        </section>
        <section class="sign-screen-right">
            <form action="/#">
                <article class="sign-screen-text-field">
                    <input type="email" id="email_signin"  autocomplete = "off" placeholder=" " class="sign-screen-input-field" required/>
                    <label for="email_signin" class="floating-label">Email</label>
                    <div class="requirements">Must be a valid email address.</div>
                </article>
                <article class="sign-screen-text-field">
                    <input type="password" autocomplete = "off" placeholder=" " id="password_signin" class="sign-screen-input-field" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$" minlength=6 required/>
                    <label for="password_signin"  class="floating-label">Password</label>
                    <div class="requirements">Your password must be at least 6 characters as well as contain at least one character and one number.</div>
                </article>
                <article>
                    <!--<a href="" id="login" class="disabled">Login</a>-->
                    <input type="submit" value="Login" class="submit-button"/>
                </article>
            </form>
        </section>
        </section>`;
        $(this.parent).html(markUp);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SigninComponent;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class SignupComponent{
    constructor(parent,request){
        this.parent = parent;
        this.request = request;
        this.render();
    }
    
    render(){
        let markUp=`
        <section class="sign-screen-container">
        <section class="sign-screen-left">
                        <h1>Signup</h1>
                        <p>We do not share your personal details with anyone.</p>
                </section>
                
                <section class="sign-screen-right">
                        <form action="/#">
                            <article class="sign-screen-text-field">
                                <input type="text" id="first_name" autocomplete = "off" placeholder=" " class="sign-screen-input-field" required/>
                                <label for="first_name" class="floating-label">First Name</label>
                            </article>
    
                            <article class="sign-screen-text-field">
                                <input type="text" id="last_name" autocomplete = "off" placeholder=" " class="sign-screen-input-field" required/>
                                <label for="last_name" class="floating-label">Last Name</label>
                            </article>
                            
                            <article class="sign-screen-text-field">
                                <input type="email" id="email_signup" autocomplete = "off" placeholder=" " class="sign-screen-input-field" required/>
                                <label for="email_signup" class="floating-label">Email</label>
                                <div class="requirements">Must be a valid email address.</div>
                            </article>
    
                            <article class="sign-screen-text-field">
                                <input type="password" placeholder=" " id="password_signup" class="sign-screen-input-field" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$" minlength=6 required/>
                                <label for="password_signup" class="floating-label">Password</label>
                                <div class="requirements">Your password must be at least 6 characters as well as contain at least one character and one number.</div>
                            </article>

                            <article class="sign-screen-text-field">
                                <input type="password" id="confirm_signup" placeholder=" " class="sign-screen-input-field" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$" minlength=6 required/>
                                <label for="confirm_signup" class="floating-label">Confirm Password</label>
                                <div class="requirements">Your password must be at least 6 characters as well as contain at least one character and one number.</div>
                            </article>
                            <article>
                                <input type="submit" value="Signup" class="submit-button"/>
                            </article>
                        </form>
                </section>
        </section>`;
        $(this.parent).html(markUp);
        let password=document.getElementById("password_signup");
        let confirm_password = document.getElementById("confirm_signup");

        let validatePassword= function(){
            if(password.value != confirm_password.value) {
              confirm_password.setCustomValidity("Passwords Don't Match");
            } else {
              confirm_password.setCustomValidity('');
            }
          }
          
          password.onchange = validatePassword;
          confirm_password.onkeyup = validatePassword;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SignupComponent;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map