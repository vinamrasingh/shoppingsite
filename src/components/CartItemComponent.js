import ShoppingCartService from "../service/shoppingCartService";

export default class CartItemComponent{
    constructor(parent){
        this.parent=parent;
        this.shoppingCartService=new ShoppingCartService();
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