import BannerComponent  from './components/BannerComponent';
import HomeComponent from './components/HomeComponent';
import ProductComponent from './components/ProductComponent';
//import HomeComponent from './components/HomeComponent';

export default class MainComponent{
    constructor(){
        this.homeActivated= true;
        this.productActivated=false;
        //this.banner = new BannerComponent('.grid-container');
        this.render();
    }
    getHome(){
        return this.home;
    }
    getProduct(){
        return this.product;
    }
    setHome(home){
        this.homeActivated=home;
    }
    setProduct(product){
        this.productActivated=product;
    }
    render(){
        const self={context: this};
        let openHome=function(){
            
            new HomeComponent(".content");
        }
        let openProduct=function(){
            new ProductComponent(".content");
        }
        // $(this.parent).append(markUp);
        // let boundFuncHome=openHome.bind(self);
        // let boundFuncProduct=openProduct.bind(self);
          
        // $('.homeButton').on('click',boundFuncHome);
        // $('.productButton').on('click',boundFuncProduct);
        new HomeComponent(".content");
    }
    
}
new MainComponent();
