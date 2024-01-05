import React from 'react'
import './Signup.css';
import Appbar from './Appbar';
import NewFooter from './NewFooter';
function Signup() {
    return (
        <>
        <Appbar/>
            <div class="Signup">
           
                <form class="form">
                    <img className=" signimg" src="https://dt-petty.myshopify.com/cdn/shop/files/footer_logo_x152@2x.png?v=1651638489" />
                    <p class="title">Signing Up </p>
                    <p class="message">Signup now and get full access to our app. </p>
                    <div className="input-blockLogin">
                        <input className="inputLogin" type="text" id="username" required="" />
                        <label for="username">Username</label>
                    </div>
                    <div className="input-blockLogin">
                        <input className="inputLogin" type="email" id="email" required="" />
                        <label for="email">email</label>
                    </div>
                    <div className="input-blockLogin">
                        <input className="inputLogin" type="password" id="password" required="" />
                        <label for="password">password</label>
                    </div>
                    <div className="input-blockLogin">
                        <input className="inputLogin" type="password" id="confrimpassword" required="" />
                        <label for="confrimpassword">Confrim password</label>
                    </div>

                    <button class="submit">Submit</button>
                    <p class="signin">Already have an account?<a href="#">Sign in</a></p>
                </form>     <img src=" https://demos.shopifyteam.com/petty/wp-content/uploads/sites/374/2022/09/Landing-Page-5.png"width={950}/></div>
                     
                <NewFooter/>
        </>
    );
}
export default Signup;
