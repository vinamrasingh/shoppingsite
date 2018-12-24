import ShoppingCartService from '../service/shoppingCartService';

export default class BannerComponent{
    constructor(parent){
        this.shoppingCartService=new ShoppingCartService;
        this.parent=parent;
        this.render();
        
    }
    render(){
        let self;
        this.shoppingCartService.getBannerData().then((result)=>{
            let bannerData=result;
            result.forEach(bannerData => {
                self={context: bannerData};
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
                let buyItem=function(){
                    new ItemAdd("#itemCount",this.context,"edit");
                }
                  $(this.parent).append(markUp);
                  let boundFunc=openModal.bind(self);
                  
                  $('#edit_'+`${this.id}`).on('click',boundFunc);
            });
            
        });
    }
}