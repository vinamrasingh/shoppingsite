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
                <section class="cartEmpty">
                <p>No items in your cart</p>
                <p>Your favourite items are just a click away.
                </section>`;
        return emptyMarkup;
    }
    getEmptyCartFooterMarkup(){
        let footerMarkup = `<a class = "startShopping" href="#"><span>Start Shopping</span></a>`;
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
                    `<section role="banner" class="bannerContainer effect">
                        <article class= "imageContainer" >
                            <img class = "bannerImage" src="${bannerData.imageUrl}" alt="">
                        </article>
                        <article class="bannerContentContainer">
                            <h3>${bannerData.name}</h3>
                            <p>${bannerData.description}</p>
                            <a class="bannerButton" href="#/products/${bannerData.id}">Explore ${bannerData.key}</a>
                        </article>
                                           
                    </section>
                    <div class= "categoryBorder">&nbsp;</div>
                    
                    `;

                    $(this.parent).append(markup);
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
        <div class ="carouselDots">
            
        </div>`;
        $(this.parent).append(markUp);
        let c=1
        result.forEach(carouselImage => {

            new __WEBPACK_IMPORTED_MODULE_0__ImageCarouselComponent__["a" /* default */]('#carouselImage', carouselImage);

            let dotMarkup=`<span class="dot" id="dot_${c}"></span>`;
            $('.carouselDots').append(dotMarkup);
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
        var slides = document.getElementsByClassName("mySlides");
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
        <aside class="categoriesClass">
                    <section class="categoriesList">
                    </section>
                </aside>


                <section class="productsClass"></section>
        </section>`;
        $(this.parent).html(markUp);
        new  __WEBPACK_IMPORTED_MODULE_0__CategoriesComponent__["a" /* default */](".categoriesList");
        new __WEBPACK_IMPORTED_MODULE_1__ProductComponent__["a" /* default */](".productsClass",this.id);

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

        $(this.parent).html('');
        this.shoppingCartService.getProductsData(this.id).then((result)=>{
            result.forEach(productData => {
                //const context={context:productData};
                let markup = this.returnMarkup(productData);
                if(this.id!=0 && this.id==productData.category){
                    $(this.parent).append(markup);
                }else if(this.id==0){
                    $(this.parent).append(markup);
                }
                let addToCart=function(){
                    let newVal=this.context.Utils.addToCart(productData); 
                    $(".cartItemCount").html(`(${newVal.totalQty} Items)`);
                    $(".mainHeaderQty").html(`${newVal.totalQty} Items`)
                }
                let boundFunc=addToCart.bind(context);
                $('#add_'+`${productData.id}`).on('click',boundFunc);
            });
        }); 
    }
    returnMarkup(productData){
        return `<section class= "productContainer">
        <p class="productName">${productData.name}</p>
        <section class='divAlignment'>
        <section class="productImageContainer">
            <img class="productImage" src = "${productData.imageURL}" alt="">
        </section>
        <section class ="descriptionAlignment">
        <section class="descriptionContainer">
        <p class="productDescription">${productData.description}</p>
        </section>
        <article class="mrpandbuy">
            <p class="mrp">MRP Rs.${productData.price}</p>
            <button class="productBuy" id="add_${productData.id}" type="button">Buy Now <span class="priceTag">@Rs.${productData.price}</span></button>
        </article>
        
        </section>
        </section>
        </section>
        `;
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
        let markUp = `
        <div class= "cartBackground">
        <div class="overlay-content">
        <main class="cartContainer">
        <section class="cartHeader">
                <article class="cartInfo">
                    <h1 class="cartItemLabel">My Cart  &nbsp;</h1><h3 class="cartItemCount"></h3>
                </article>
                <article class="close">&times;</article>
            </section>
            <section class="cartItemContainer"></section>
        </main>
        <footer class="cartFooter">
        </footer>
        </div>
        </div>`;
        
        $(this.parent).html(markUp);
        $('.close').on('click',()=>{
            $('.cartBackground')[0].style.display ="none";
            history.back();
        });
        
        if(JSON.parse(sessionStorage.getItem("cartItems")) && JSON.parse(sessionStorage.getItem("cartItems")).length > 0){
            let bannerMarkup= 
                `<section class="discountBanner" role="banner">
                    <article class="discountLogo">
                        <img src="static/images/lowest-price.png" alt="">
                    </article>
                    <article class="discountBannerText">
                        You won't find it cheaper anywhere
                    </article>
                </section>`;
            let footerMarkup = 
                `<p>Promo code can be applied on payment page</p>
                <a class="showTotals" href="#"><span>Proceed to checkout</span>
                <span id="cartTotal"> </span></a>`;
            
            $(".cartContainer").append(bannerMarkup);
            $(".cartFooter").append(footerMarkup);
            new __WEBPACK_IMPORTED_MODULE_0__CartItemComponent__["a" /* default */](".cartItemContainer");

        }
        else{
            let emptyMarkup=this.Utils.getEmptyCartMarkup();
            $(".cartItemContainer").replaceWith(emptyMarkup);
            let footerMarkup = this.Utils.getEmptyCartFooterMarkup();
            $(".cartFooter").html(footerMarkup);
        }
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
                    `<section class="cartItem" id="cartItem_${productData.id}">
                        <article class="cartItemImage">
                            <img src="${productData.imageURL}"/>
                        </article>
                        <article class="cartItemText">
                            <h1>${productData.name}</h1>
                            <p>
                                <span class="leftCalc">  
                                    <span class="cartButton" id="cartMinus_${productData.id}">-</span>
                                    <span id="itemQty_${productData.id}">${productData.qty}</span>
                                    <span class="cartButton" id="cartAdd_${productData.id}">+</span>
                                        X  <span>Rs. ${productData.price}</span>
                                </span>   
                                <span class="rightCalc">    
                                <span class="grand-total" id="grandTotal_${productData.id}">Rs. ${grandTotal}</span>
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
                    $(".cartItemCount").html(`(${newVal.totalQty} Items)`);
                    $(".mainHeaderQty").html(`${newVal.totalQty} Items`);
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
                            $(".cartItemContainer").replaceWith(emptyMarkup);
                            $(".discountBanner").replaceWith('');
                            let footerMarkup = this.Utils.getEmptyCartFooterMarkup();
                            $(".cartFooter").html(footerMarkup);
                        }else{
                            $("#cartItem_"+`${productData.id}`).html('');
                        } 
                    }
                    $(".cartItemCount").html(`(${newVal.totalQty} Items)`);
                    $(".mainHeaderQty").html(`${newVal.totalQty} Items`);
                }
                let boundFuncMinus=minusFromCart.bind(this);
                $('#cartMinus_'+`${productData.id}`).on('click',boundFuncMinus);
            }
        }
        $(".cartItemCount").html(`(${totalQty} Items)`);
        $(".mainHeaderQty").html(`${totalQty} Items`);
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
        <section class="screenContainer">
        <section class="leftScreen">
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
        </section>
        <section class="rightScreen">
            <form action="">
                <article class="textField">
                    <input type="email" class="inputField" required/>
                    <span class="floating-label">Email</span>
                </article>
                <article class="textField">
                    <input type="password" class="inputField" required/>
                    <span class="floating-label">Password</span>
                </article>
                <article>
                    <a href="">Login</a>
                </article>
            </form>
        </section></section>`;
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
        <section class="screenContainer">
        <section class="leftScreen">
                        <h1>Signup</h1>
                        <p>We do not share your personal details with anyone.</p>
                </section>
                
                <section class="rightScreen">
                        <form action="">
                            <article class="textField">
                                <input type="text" class="inputField" required/>
                                <span class="floating-label">First Name</span>
                            </article>
    
                            <article class="textField">
                                <input type="text" class="inputField" required/>
                                <span class="floating-label">Last Name</span>
                            </article>
                            
                            <article class="textField">
                                <input type="email" class="inputField" required/>
                                <span class="floating-label">Email</span>
                            </article>
    
                            <article class="textField">
                                <input type="password" class="inputField" required/>
                                <span class="floating-label">Password</span>
                            </article>

                            <article class="textField">
                                <input type="password" class="inputField" required/>
                                <span class="floating-label">Confirm Password</span>
                            </article>

                           <article>
                               <a href="">Signup</a>
                           </article>
    
    
                        </form>
                </section>
        </section>`;
        $(this.parent).html(markUp);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SignupComponent;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map