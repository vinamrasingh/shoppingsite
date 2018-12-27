import ShoppingCartService from '../service/shoppingCartService';

export default class CategoriesComponent{
    constructor(parent){
        this.parent=parent;
        this.shoppingCartService=new ShoppingCartService;
        this.render();
    }
    render(){
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