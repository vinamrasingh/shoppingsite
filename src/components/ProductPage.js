import CategoriesComponent  from './CategoriesComponent';
//import HomeComponent from './components/HomeComponent';
import ProductComponent from './ProductComponent';
//import HomeComponent from './components/HomeComponent';

export default class ProductPage{
    constructor(parent,request){
        this.homeActivated= true;
        this.productActivated=false;
        this.parent ='.content';
        this.request = request;
        this.id= (this.request && this.request.id)?this.request.id : 0;
        //this.banner = new BannerComponent('.grid-container');
        this.render();
    }
    
    render(){
        const self={context: this};
        
        let markUp=`<section class="grid-container">
                <aside class="categoriesClass"></aside>
                <section class="productsClass"></section>
        </section>`;
        $(this.parent).html(markUp);
        new  CategoriesComponent(".categoriesClass");
        new ProductComponent(".productsClass",this.id);
    }
}
new ProductPage();
