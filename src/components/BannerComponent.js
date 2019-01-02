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
                    `<section role="banner" class="bannerContainer effect">
                        <article class= "imageContainer" >
                            <img class = "bannerImage" src="${bannerData.imageUrl}" alt="">
                        </article>
                        <article class="bannerContentContainer">
                            <h3>${bannerData.name}</h3>
                            <p>${bannerData.description}</p>
                            <a class="bannerButton" href="#/products/${bannerData.id}">Explore ${bannerData.key}</a>
                        </article>
                                           
                    </section>
                    
                    `;

                    $(this.parent).append(markup);
                }
            });
        });
    }
}