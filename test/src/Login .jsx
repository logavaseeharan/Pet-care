import './Login.css';
import Appbar from './Appbar';
import NewFooter from './NewFooter';
import axios from 'axios';
import React, {useState} from "react";

function Login () {
    const [username,setUsername]= useState("");
    const [password,setPassword]= useState("");
    const [error,setError]= useState(null);

    const handleSubmit =async (e)=>{
        e.preventDefault();
        try{
        const res = await axios.post("http://localhost:3001/Backend/auth/login",{
            username,
            password,
        },{
            withCredentials:true
        });
        console.log(res.data);
    }catch(err){
        setError(err);
        console.log(err);
    }
    };


  return (
    <>
    <Appbar/> 
    <div className='Wholelogin'> 

        <div className="containerLogin">
        <div className="leftLogin">
            <form className="formLogin" onSubmit={handleSubmit}>
                <div className="input-blockLogin">
                    <input className="inputLogin1" type="text" id="email" required="" onChange={e=>setUsername(e.target.value)}/>
                    <label for="email">Username</label>
                </div>
                <div className="input-blockLogin">
                    <input className="inputLogin1" type="password" id="pass" required="" onChange={e=>setPassword(e.target.value)}/>
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
