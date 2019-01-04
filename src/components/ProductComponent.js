import ShoppingCartService from '../service/shoppingCartService';
import Utils from '../service/Utils';

export default class ProductComponent{
    constructor(parent,id){
        this.parent=parent;
        this.id = id;
        this.shoppingCartService=new ShoppingCartService;
        this.Utils = new Utils();
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