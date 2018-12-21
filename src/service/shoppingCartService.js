export default class ShoppingCartService{
    constructor(){
        this.bannerURL="http://localhost:5001/categories";
        this.carouselUrl ="http://localhost:5001/banners";
    }
    async getBannerData(){
        try{
            const res = await fetch(this.bannerURL);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }
    async getDataCarousel(){
        try{
            const res = await fetch(this.carouselUrl);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }
}