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
        <aside class="product-categories-class">
                    <section class="product-categories-list">
                    </section>
                </aside>


                <section class="product-side">
                    <section id = "productList"class="product-menu">
                        <select class="product-choices" title="Select the category for Products">
                            
                        </select>
                    </section>
                    <section class="products-class"></section>
                    
                </section>
        </section>`;
        $(this.parent).html(markUp);
        new  CategoriesComponent(".product-categories-list");
        new ProductComponent(".products-class",this.id);
        $('#productList').on('change',this.changeURL);
        

    }
    changeURL(){
        let hashValue=$('#productList :selected').val();
        sessionStorage.selectedText=$('#productList :selected').text();
        window.location.href=hashValue;
    }
}