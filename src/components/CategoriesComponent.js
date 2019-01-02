import ShoppingCartService from '../service/shoppingCartService';

export default class CategoriesComponent{
    constructor(parent){
        this.parent=parent;
        this.shoppingCartService=new ShoppingCartService;
        this.render();
    }
    render(){
        let compare=function(a,b){
            if (a.order < b.order)
                return -1;
            if (a.order > b.order)
                return 1;
            return 0;
        }
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