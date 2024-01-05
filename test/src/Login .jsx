import React from 'react'
import './Login.css';
import Appbar from './Appbar';
import NewFooter from './NewFooter';
function Login () {
  return (
    <>
    <Appbar/> 
    <div className='Wholelogin'> 

        <div className="containerLogin">
        <div className="leftLogin">
            <form className="formLogin">
                <div className="input-blockLogin">
                    <input className="inputLogin1" type="text" id="email" required=""/>
                    <label for="email">Username</label>
                </div>
                <div className="input-blockLogin">
                    <input className="inputLogin1" type="password" id="pass" required=""/>
                    <label for="pass">Password</label>
                </div>
                <div className="input-blockLogin">
<span className="forgot"><a href="#">Forgot Password?</a>  OR<a href="/Signup">  Sign up</a></span>
                <button className='buttonLogin'>Submit</button>
            </div>
            </form>
        </div>
        <div className="rightLogin">
            <div className="imgLogin"><img src="https://dt-petty.myshopify.com/cdn/shop/files/grid01.png?v=1653393298"/></div>
        </div>
       
    </div>
    
    </div>

    <NewFooter/>
    </>
  )
}
export default Login;
