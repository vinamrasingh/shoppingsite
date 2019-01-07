
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
            <form action="/#">
                <article class="sign-screen-text-field">
                    <input type="email" id="email_signin"  autocomplete = "off" placeholder=" " class="sign-screen-input-field" required/>
                    <label for="email_signin" class="floating-label">Email</label>
                    <div class="requirements">Must be a valid email address.</div>
                </article>
                <article class="sign-screen-text-field">
                    <input type="password" autocomplete = "off" placeholder=" " id="password_signin" class="sign-screen-input-field" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$" minlength=6 required/>
                    <label for="password_signin"  class="floating-label">Password</label>
                    <div class="requirements">Your password must be at least 6 characters as well as contain at least one character and one number.</div>
                </article>
                <article>
                    <!--<a href="" id="login" class="disabled">Login</a>-->
                    <input type="submit" value="Login" class="submit-button"/>
                </article>
            </form>
        </section>
        </section>`;
        $(this.parent).html(markUp);
    }
}