//import MainComponent  from './components/MainComponent';

import BannerComponent  from './BannerComponent';
import CarouselComponent from './CarouselComponent';


export default class HomeComponent {
    constructor(parent){
        this.parent=parent;
        /* super();
        if(super.getHome()){
            this.render();
        } */
        this.render();
    }
    render(){
        $(this.parent)[0].innerHTML="";
        this.carousel= new CarouselComponent(this.parent);
        this.banner = new BannerComponent(this.parent);
    }
}