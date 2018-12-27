
import HomeComponent from './components/HomeComponent';
import ProductPage from './components/ProductPage';
import Utils from './service/Utils';

export default class MainComponent{
    constructor(){
        this.routes = {
            '/':HomeComponent,
            '/products/:id':ProductPage
        }
        this.utils= new Utils();
        this.render();
    }
    render(){


        let router=()=>{
            const content = document.getElementsByClassName('.content');
    
            let request = this.utils.parseRequestURL();
            let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
            let page = this.routes[parsedURL] ? this.routes[parsedURL] : Error404
            content.innerHTML =  new page(".content",request);
        }
        window.addEventListener('hashchange',()=>{router();});
        window.addEventListener('load',()=>{router();});
    }
}
new MainComponent();








    /* getHome(){
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
    } */
    /* render(){
        
        //homePage = new HomeComponent()
        let routes={
            '/': new HomeComponent(".content"),
            '/home': new ProductComponent(".content")
            //'/product':new ProductComponent(".productsClass")
        }

        let contentDiv = document.getElementsByClassName('.content');
        //contentDiv.innerHTML = this.routes[window.location.pathname];
        let linkArray =document.getElementsByTagName('a');
        for (var i = 0; i < linkArray.length; i++) {
            linkArray[i].addEventListener('click', (e)=>{
                e.preventDefault();
                let pathName =this.getPathName(e);
                //window.location.pathname=pathName;
                //onNavItemClick(pathName);   
                console.log('pressed');
            });
          }
        /* linkArray.forEach((aElement,index)=>{
            aElement.addEventListener('click', ()=>{
                this.preventDefault();
                let pathName =this.getPathName(e);
                window.location.pathname=pathName;
                onNavItemClick(pathName);   
                console.log('pressed');
            });
        }); */
        /* let onNavItemClick = (pathName) => {
            window.history.pushState(
              {}, 
              pathName,
              window.location.origin + pathName
            );
            contentDiv.innerHTML = routes[pathName];
        }
        window.onpopstate = () => {
            contentDiv.innerHTML = routes[window.location.pathname];
        } */

        /* const self={context: this};
        let urlArray= this.url.split('/');
        if(urlArray[urlArray.length]==''){
            new HomeComponent(.content)
        }
        let openHome=function(){
            
            new HomeComponent(".content");
        }
        let openProduct=function(){
            new ProductComponent(".content");
        } */
        // $(this.parent).append(markUp);
        // let boundFuncHome=openHome.bind(self);
        // let boundFuncProduct=openProduct.bind(self);
          
        // $('.homeButton').on('click',boundFuncHome);
        // $('.productButton').on('click',boundFuncProduct);
        //new HomeComponent(".content");
    /*} */
    /* getPathName(element){
        if(element.srcElement.id =="homeLink"){
            new HomeComponent(".content");
            return "/home.html";
        }
        if(element.srcElement.id =="productLink"){
            new ProductComponent(".content");
            return "/product.html";
        }
    } */
    

