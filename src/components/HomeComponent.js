//import MainComponent  from './components/MainComponent';

import BannerComponent  from './BannerComponent';
import CarouselComponent from './CarouselComponent';


export default class HomeComponent {
    constructor(parent,request){
        this.parent=parent;
        this.request=request;
        /* super();
        if(super.getHome()){
            this.render();
        } */
        this.render();
    }
    render(){
        let markUp=`<section id="carousel">

        </section>`;
        // $(this.parent)[0].innerHTML="HI";
        $(this.parent).html(markUp);
        this.carousel= new CarouselComponent("#carousel");
        this.banner = new BannerComponent(this.parent);
    }
}
