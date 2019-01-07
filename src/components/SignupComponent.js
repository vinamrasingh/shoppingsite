
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
                        <form action="/#">
                            <article class="sign-screen-text-field">
                                <input type="text" id="first_name" autocomplete = "off" placeholder=" " class="sign-screen-input-field" required/>
                                <label for="first_name" class="floating-label">First Name</label>
                            </article>
    
                            <article class="sign-screen-text-field">
                                <input type="text" id="last_name" autocomplete = "off" placeholder=" " class="sign-screen-input-field" required/>
                                <label for="last_name" class="floating-label">Last Name</label>
                            </article>
                            
                            <article class="sign-screen-text-field">
                                <input type="email" id="email_signup" autocomplete = "off" placeholder=" " class="sign-screen-input-field" required/>
                                <label for="email_signup" class="floating-label">Email</label>
                                <div class="requirements">Must be a valid email address.</div>
                            </article>
    
                            <article class="sign-screen-text-field">
                                <input type="password" placeholder=" " id="password_signup" class="sign-screen-input-field" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$" minlength=6 required/>
                                <label for="password_signup" class="floating-label">Password</label>
                                <div class="requirements">Your password must be at least 6 characters as well as contain at least one character and one number.</div>
                            </article>

                            <article class="sign-screen-text-field">
                                <input type="password" id="confirm_signup" placeholder=" " class="sign-screen-input-field" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$" minlength=6 required/>
                                <label for="confirm_signup" class="floating-label">Confirm Password</label>
                                <div class="requirements">Your password must be at least 6 characters as well as contain at least one character and one number.</div>
                            </article>
                            <article>
                                <input type="submit" value="Signup" class="submit-button"/>
                            </article>
                        </form>
                </section>
        </section>`;
        $(this.parent).html(markUp);
        let password=document.getElementById("password_signup");
        let confirm_password = document.getElementById("confirm_signup");

        let validatePassword= function(){
            if(password.value != confirm_password.value) {
              confirm_password.setCustomValidity("Passwords Don't Match");
            } else {
              confirm_password.setCustomValidity('');
            }
          }
          
          password.onchange = validatePassword;
          confirm_password.onkeyup = validatePassword;
    }
}