export default class ShoppingCartService{
    constructor(){
        this.bannerURL="http://localhost:5001/categories";
        this.carouselUrl ="http://localhost:5001/banners";
        this.categoryUrl ="http://localhost:5001/categories";
        this.productUrl ="http://localhost:5001/products";
    }
    async getBannerData(){
        try{
            const res = await fetch(this.bannerURL);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }
    async getCategoriesData(){
        try{
            const res = await fetch(this.categoryUrl);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }async getProductsData(){
        try{
            const res = await fetch(this.productUrl);
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