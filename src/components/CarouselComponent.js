import ImageCarouselComponent from './ImageCarouselComponent';

import ShoppingCartService from '../service/shoppingCartService';
var self;
export default class CarouselComponent{
    constructor(parent){
        this.parent=parent;
        this.slideIndex=1;
        this.shoppingCartService = new ShoppingCartService();
        this.render();
        self=this;
    }
    render(){
        this.shoppingCartService.getDataCarousel().then((result)=>{
        let markUp=`<div class="slideshow-container">
        
        <div id="carouselImage"></div>
       
            <a class="prev" id="prevButton">&#10094;</a>
            <a class="next" id="nextButton">&#10095;</a>
            
            
        </div>`;
        $(this.parent).append(markUp);
        result.forEach(carouselImage => {

            new ImageCarouselComponent('#carouselImage', carouselImage);

        });
        this.showSlides(1);
        $('#prevButton').on('click',{"counter":-1},self.plusSlides);
        $('#nextButton').on('click',{"counter":1},self.plusSlides);
        
    });
    }

    // Next/previous controls
    
    plusSlides(n) {
        self.showSlides(self.slideIndex += n.data.counter);
        }
    // Thumbnail image controls
    currentSlide(n) {
        self.showSlides(self.slideIndex = n.data.counter);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        //var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {self.slideIndex = 1} 
        if (n < 1) {self.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[self.slideIndex-1].style.display = "block"; 
        //dots[this.slideIndex-1].className += " active";
    }   
}
///showSlides(1);