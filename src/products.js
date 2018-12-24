import CategoriesComponent  from './components/CategoriesComponent';
//import HomeComponent from './components/HomeComponent';
import ProductComponent from './components/ProductComponent';
//import HomeComponent from './components/HomeComponent';

export default class ProductPage{
    constructor(parent){
        this.homeActivated= true;
        this.productActivated=false;
        this.parent ='.content';
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
        new ProductComponent(".productsClass");
         
    }
    /* render(){
        const self={context: this};
        let openHome=function(){
            
            new HomeComponent(".content");
        }
        let openProduct=function(){
            new ProductComponent(".content");
        }
        // $(this.parent).append(markUp);
        let boundFuncHome=openHome.bind(self);
        let boundFuncProduct=openProduct.bind(self);
          
        $('.homeButton').on('click',boundFuncHome);
        $('.productButton').on('click',boundFuncProduct);
        new HomeComponent(".content");
    } */
    
}
new ProductPage();
