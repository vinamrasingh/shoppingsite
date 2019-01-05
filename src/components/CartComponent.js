import CartItemComponent from "./CartItemComponent";
import Utils from '../service/Utils';

export default class CartComponent{
    constructor(parent){
        this.parent=parent;
        this.Utils  = new Utils();
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
            new CartItemComponent(".cart-item-container");
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