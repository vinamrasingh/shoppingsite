
import HomeComponent from './components/HomeComponent';
import ProductPage from './components/ProductPage';
import Utils from './service/Utils';
import CartComponent from './components/CartComponent';
import SigninComponent from './components/SigninComponent';
import SignupComponent from './components/SignupComponent';

export default class MainComponent{
    constructor(){
        
        this.utils= new Utils();
        this.render();
    }
    render(){

        let routes = {
            '/':HomeComponent,
            '/products/:id':ProductPage,
            '/cart' : CartComponent,
            '/signin' : SigninComponent,
            '/signup' : SignupComponent
        }
        let router=()=>{
            let request = this.utils.parseRequestURL();
            let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
            let page = routes[parsedURL] ? routes[parsedURL] : Error404
            if(parsedURL == '/cart'){
                $('#overlay')[0].style.display="block";
                new page("#overlay",request);
            }else{
                $('#overlay')[0].style.display="none";
                new page(".content",request);
            }
        }
        window.addEventListener('hashchange',()=>{router();});
        window.addEventListener('load',()=>{router();});
    }
}
new MainComponent();