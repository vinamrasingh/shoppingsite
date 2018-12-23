import ShoppingCartService from '../service/shoppingCartService';

export default class BannerComponent{
    constructor(parent){
        this.shoppingCartService=new ShoppingCartService;
        this.parent=parent;
        this.render();
        
    }
    render(){
        this.shoppingCartService.getBannerData().then((result)=>{
            let bannerData=result;
            result.forEach(bannerData => {
                let flag=`${bannerData.enabled}`;
                if(flag=="true"){
                    let markup =
                    `<section role="banner" class="bannerContainer">
                        <article class= "imageContainer" >
                            <img class = "bannerImage" src="${bannerData.imageUrl}" alt="">
                        </article>
                        <article class="bannerContentContainer">
                            <h3>${bannerData.name}</h3>
                            <p>${bannerData.description}</p>
                            <button>Explore ${bannerData.key}</button>
                        </article>                    
                    </section>`;

                    $(this.parent).append(markup);
                }
                

            });
            
        });
    }
}