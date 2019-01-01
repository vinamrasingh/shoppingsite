
export default class SigninComponent{
    constructor(parent,request){
        this.parent = parent;
        this.request = request;
        this.render();
    }
    
    render(){
        let markUp=`
        <section class="screenContainer">
        <section class="leftScreen">
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
        </section>
        <section class="rightScreen">
            <form action="">
                <article class="textField">
                    <input type="email" class="inputField" required/>
                    <span class="floating-label">Email</span>
                </article>
                <article class="textField">
                    <input type="password" class="inputField" required/>
                    <span class="floating-label">Password</span>
                </article>
                <article>
                    <a href="">Login</a>
                </article>
            </form>
        </section></section>`;
        $(this.parent).html(markUp);
    }
}