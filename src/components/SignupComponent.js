
export default class SignupComponent{
    constructor(parent,request){
        this.parent = parent;
        this.request = request;
        this.render();
    }
    
    render(){
        let markUp=`
        <section class="screenContainer">
        <section class="leftScreen">
                        <h1>Signup</h1>
                        <p>We do not share your personal details with anyone.</p>
                </section>
                
                <section class="rightScreen">
                        <form action="">
                            <article class="textField">
                                <input type="text" class="inputField" required/>
                                <span class="floating-label">First Name</span>
                            </article>
    
                            <article class="textField">
                                <input type="text" class="inputField" required/>
                                <span class="floating-label">Last Name</span>
                            </article>
                            
                            <article class="textField">
                                <input type="email" class="inputField" required/>
                                <span class="floating-label">Email</span>
                            </article>
    
                            <article class="textField">
                                <input type="password" class="inputField" required/>
                                <span class="floating-label">Password</span>
                            </article>

                            <article class="textField">
                                <input type="password" class="inputField" required/>
                                <span class="floating-label">Confirm Password</span>
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