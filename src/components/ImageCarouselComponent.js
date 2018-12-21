export default class ImageCarouselComponent{
    constructor(parent,carouselSuggestion){
        this.imgUrl=carouselSuggestion.bannerImageUrl;
        
        this.parent=parent;
        this.render();
    }
    render(){
        let markup=`
        <div class="mySlides fade">
          
          <div class="imageDiv">
            <img  class="imageClass" src=${this.imgUrl} >
          </div>
          
        </div>`;
        $(this.parent).append(markup);
    }
}