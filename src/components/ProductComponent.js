import ShoppingCartService from '../service/shoppingCartService';
export default class ProductComponent{
    constructor(parent,id){
        this.parent=parent;
        this.id = id;
        this.shoppingCartService=new ShoppingCartService;
        this.render();
    }
    render(){
        //const context={context:this};

        $(this.parent).html('');
        this.shoppingCartService.getProductsData(this.id).then((result)=>{
            result.forEach(productData => {
                const context={context:productData};
                let markup = this.returnMarkup(productData);
                if(this.id!=0 && this.id==productData.category){
                    $(this.parent).append(markup);
                }else if(this.id==0){
                    $(this.parent).append(markup);
                }
                let addToCart=function(){
                    let item = sessionStorage.getItem(productData.id);
                    if(!item){
                        item=productData;
                        item.qty=1;
                    }
                    else{
                        let obj = JSON.parse(item);
                        obj.qty+=1;
                        item=obj;
                    }
                    sessionStorage.setItem(productData.id,JSON.stringify(item));

                    console.log('Adding : '+ productData.id +'and '+productData.category);
                }
                let boundFunc=addToCart.bind(context);
                $('#add_'+`${productData.id}`).on('click',boundFunc);
            });
        });
        
    }
    returnMarkup(productData){
        return `<section class= "productContainer">
        <p class="productName">${productData.name}</p>
        <section class="productImageContainer">
            <img class="productImage" src = "${productData.imageURL}" alt="">
        </section>
        <section class="descriptionContainer">
        <p class="productDescription">${productData.description}</p>
        </section>
        <article class="mrpandbuy">
            <p class="mrp">MRP Rs.${productData.price}</p>
            <button class="productBuy" id="add_${productData.id}" type="button">Buy Now</button>
        </article>
        </section>
        `;
    }
}