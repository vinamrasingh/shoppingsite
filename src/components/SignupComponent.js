
export default class SignupComponent{
    constructor(parent,request){
        this.parent = parent;
        this.request = request;
        this.render();
    }
    
    render(){
        let markUp=`
        <section class="sign-screen-container">
        <section class="sign-screen-left">
                        <h1>Signup</h1>
                        <p>We do not share your personal details with anyone.</p>
                </section>
                
                <section class="sign-screen-right">
                        <form action="">
                            <article class="sign-screen-text-field">
                                <input type="text" id="first_name" class="sign-screen-input-field" required/>
                                <label for="first_name" class="floating-label">First Name</label>
                            </article>
    
                            <article class="sign-screen-text-field">
                                <input type="text" id="last_name" class="sign-screen-input-field" required/>
                                <label for="last_name" class="floating-label">Last Name</label>
                            </article>
                            
                            <article class="sign-screen-text-field">
                                <input type="email" id="email_signup" class="sign-screen-input-field" required/>
                                <label for="email_signup" class="floating-label">Email</label>
                            </article>
    
                            <article class="sign-screen-text-field">
                                <input type="password" placeholder=" " id="password_signup" class="sign-screen-input-field" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$" required/>
                                <label for="password_signup" class="floating-label">Password</label>
                            </article>

                            <article class="sign-screen-text-field">
                                <input type="password" id="confirm_signup" class="sign-screen-input-field" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$" required/>
                                <label for="confirm_signup" class="floating-label">Confirm Password</label>
                            </article>
                            <article>
                                <a href="">Signup</a>
                            </article>
                        </form>
                </section>
        </section>`;
        $(this.parent).html(markUp);
    }
}