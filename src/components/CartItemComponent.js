import ShoppingCartService from "../service/shoppingCartService";
import Utils from '../service/Utils';

export default class CartItemComponent{
    constructor(parent){
        this.parent=parent;
        this.shoppingCartService=new ShoppingCartService();
        this.Utils=new Utils();
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