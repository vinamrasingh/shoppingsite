import CategoriesComponent  from './CategoriesComponent';
import ProductComponent from './ProductComponent';

export default class ProductPage{
    constructor(parent,request){
        this.parent =parent;
        this.request = request;
        this.id= (this.request && this.request.id)?this.request.id : 0;
        this.render();
    }
    
    render(){
        let markUp=`<section class="grid-container">
        <aside class="categoriesClass">
                    <section class="categoriesList">
                    </section>
                </aside>


                <section class="productsClass"></section>
        </section>`;
        $(this.parent).html(markUp);
        new  CategoriesComponent(".categoriesList");
        new ProductComponent(".productsClass",this.id);

    }
}