
export default class SigninComponent{
    constructor(parent,request){
        this.parent = parent;
        this.request = request;
        this.render();
    }
    
    render(){
        let markUp=`
        <section class="sign-screen-container">
        <section class="sign-screen-left">
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
        </section>
        <section class="sign-screen-right">
            <form action="">
                <article class="sign-screen-text-field">
                    <input type="email" id="email_signin" class="sign-screen-input-field" required/>
                    <label for="email_signin" class="floating-label">Email</label>
                </article>
                <article class="sign-screen-text-field">
                    <input type="password" placeholder=" " id="password_signin" class="sign-screen-input-field" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$" required/>
                    <label for="password_signin"  class="floating-label">Password</label>
                </article>
                <article>
                    <a href="" id="login">Login</a>
                </article>
            </form>
        </section></section>`;
        $(this.parent).html(markUp);
    }
}