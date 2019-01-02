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