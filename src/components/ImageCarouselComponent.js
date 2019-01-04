export default class ImageCarouselComponent{
    constructor(parent,carouselSuggestion){
        this.imgUrl=carouselSuggestion.bannerImageUrl;
        this.altText =carouselSuggestion.bannerImageAlt;
        
        this.parent=parent;
        this.render();
    }
    render(){
        let markup=`
        <div class="carousel-slides fade">
          
          
            <img src=${this.imgUrl} alt="${this.altText} "style="width:100%">
          
          
        </div>`;
        
        $(this.parent).append(markup);
        
    }
}