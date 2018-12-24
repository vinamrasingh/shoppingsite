import ShoppingCartService from '../service/shoppingCartService';
export default class ProductComponent{
    constructor(parent){
        this.parent=parent;
        this.shoppingCartService=new ShoppingCartService;
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