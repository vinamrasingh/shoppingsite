import CartItemComponent from "./CartItemComponent";

export default class CartComponent{
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
                <article >
                    You won't find it cheaper anywhere
                </article>
            </section>
        </main>

        <footer class="">
            <p>Promo code can be applied on payment page</p>
                <a href="#"><span>Proceed to checkout</span><span>Rs. 187   ></span></a>
        </footer>
        </div>
        </div>`;
        
        $(this.parent).html(markUp);
        $('.close').on('click',()=>{
            $('.cartBackground')[0].style.display ="none";
            history.back();
        });
        new CartItemComponent(".itemContainer");
        



        
    }
}