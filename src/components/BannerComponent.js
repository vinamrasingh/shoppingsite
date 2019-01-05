import ShoppingCartService from '../service/shoppingCartService';

export default class BannerComponent{
    constructor(parent){
        this.shoppingCartService=new ShoppingCartService;
        this.parent=parent;
        this.render();
        
    }
    render(){
        let compare=function(a,b){
            if (a.order < b.order)
                return -1;
            if (a.order > b.order)
                return 1;
            return 0;
        }
        this.shoppingCartService.getBannerData().then((result)=>{
            result.sort(compare);
            result.forEach(bannerData => {

                let flag=`${bannerData.enabled}`;
                if(flag=="true"){
                    let markup =
                    `<div class= "banner-shadow">&nbsp;</div>
                    <section role="banner" class="banner-container effect">
                        <article class= "banner-image-container" >
                            <img class = "banner-image" src="${bannerData.imageUrl}" alt="">
                        </article>
                        <article class="banner-content-container">
                            <h3>${bannerData.name}</h3>
                            <p>${bannerData.description}</p>
                            <a class="banner-button" name= "${bannerData.name}" id="bannerButton_${bannerData.id}" href="#/products/${bannerData.id}">Explore ${bannerData.key}</a>
                        </article>
                                           
                    </section>
                    `;
                    $(this.parent).append(markup);
                    
                    $("#bannerButton_"+`${bannerData.id}`).on('click',(e)=>{
                        sessionStorage.selectedText=e.target.attributes.name.value;
                    });
                }
            });
        });
    }
}