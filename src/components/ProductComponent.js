import ShoppingCartService from '../service/shoppingCartService';
export default class ProductComponent{
    constructor(parent,id){
        this.parent=parent;
        this.id = id;
        this.shoppingCartService=new ShoppingCartService;
        this.render();
    }
    render(){
        $(this.parent).html('');
        this.shoppingCartService.getProductsData(this.id).then((result)=>{
            result.forEach(productData => {
                let markup = this.returnMarkup(productData);
                if(this.id!=0 && this.id==productData.category){
                    $(this.parent).append(markup);
                }else if(this.id==0){
                    $(this.parent).append(markup);
                }
            });
        });
    }
    returnMarkup(productData){
        return `<section class= "productContainer">
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
    }
}