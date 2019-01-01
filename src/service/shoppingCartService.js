export default class ShoppingCartService{
    constructor(){
        this.bannerURL="http://localhost:5000/categories";
        this.carouselUrl ="http://localhost:5000/banners";
        this.categoryUrl ="http://localhost:5000/categories";
        this.productUrl ="http://localhost:5000/products";
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
    }async getProductsData(id){
        try{
            let prodUrl = this.productUrl;
            if(id!=0){
                //const response=await fetch(`${this.url}?id=${id}`);
                prodUrl= this.productUrl+"?category="+id;
            }
            const res = await fetch(prodUrl);
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