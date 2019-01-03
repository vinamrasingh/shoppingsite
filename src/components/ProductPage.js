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


                <section class="productSide">
                    <section id = "productList"class="productMenu">
                        <select class="productChoices">
                            
                        </select>
                    </section>
                    <section class="productsClass"></section>
                    
                </section>
        </section>`;
        $(this.parent).html(markUp);
        new  CategoriesComponent(".categoriesList");
        new ProductComponent(".productsClass",this.id);
        $('#productList').on('change',this.changeURL);
        

    }
    changeURL(){
        let hashValue=$('#productList :selected').val();
        sessionStorage.selectedText=$('#productList :selected').text();
        window.location.href=hashValue;
    }
}