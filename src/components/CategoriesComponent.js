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
        $(".product-choices").html(`<option value=""></option>`);
        $('#productList :selected').text(sessionStorage.selectedText);
        this.shoppingCartService.getCategoriesData().then((result)=>{
            result.sort(compare);
            
            result.forEach(categoryData => {
                let flag=`${categoryData.enabled}`;
                if(flag=="true"){
                    let markup =
                    `<article class="product-categories-name">
                        <a href = "#/products/${categoryData.id}">${categoryData.name}</a>
                    </article>`;
                    $(this.parent).append(markup);
                    if(sessionStorage.selectedText!=categoryData.name){
                        let optionMarkup =`<option class="product-category-options" value ="#/products/${categoryData.id}">${categoryData.name}</option>`;
                        $(".product-choices").append(optionMarkup);
                    }
                }
            });
        });
    }
}