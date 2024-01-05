import React, { useState } from 'react'
import Appbar from './Appbar'
import NewFooter from './NewFooter'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-bootstrap/Carousel';
import i1 from'./return.png';
import './Blog1.css';
function Blog1() {

  return (
    <>
    <div className='wholeblog1'>
    <Appbar/><center style={{backgroundColor:'#f5f5f5'}}>
    <Carousel style={{width:'90%'}} >
        
        <Carousel.Item interval={3000}>
  
     <div className='blogcard1'>
        <div >
         <h1 style={{marginTop:'100px',color:'rgb(55, 214, 219)'}}>Pet Care</h1>
         <h1 style={{marginLeft:'0px', color:'white'}}>Online Course</h1>
         
          <div className='play' ><i class="bi bi-play-circle"></i> 
         <p> <a href="https://youtu.be/76j4E-ip7TE?si=3iqWG0k1kSWSm-DC">Play Now</a></p>
         </div>

        </div>
        <div className='blogimg'>
    <img src="https://dt-petszone.myshopify.com/cdn/shop/files/1.jpg?v=1667197603&width=650" />
    </div>
     </div>
</Carousel.Item>

<Carousel.Item interval={3000}>
     <div className='blogcard1'>
        <div >
         <h1 style={{marginTop:'100px',color:'rgb(55, 214, 219)'}}>Buy A Grooming</h1>
         <h1 style={{marginLeft:'0px', color:'white'}}>Tools</h1>
         
          <div className='play' ><i class="bi bi-play-circle"></i> 
         <p> <a href="https://youtu.be/76j4E-ip7TE?si=aZUEq4JkUPxg6C_V">Play Now</a></p>
         </div>

        </div>
        <div className='blogimg'>
    <img src="https://dt-petszone.myshopify.com/cdn/shop/files/video-banner.jpg?v=1665662189&width=650" />
    </div>
     </div>
     </Carousel.Item>
     <Carousel.Item interval={3000}>
     <div className='blogcard2'>
        <div >
         <h1 style={{marginTop:'100px'}}>Discover Best</h1>
         <h1 style={{marginLeft:'0px', color:'white'}}>Pet Care</h1>
         
          <div className='play' ><i class="bi bi-play-circle"></i> 
         <p><a href='https://youtu.be/s9TYI-Ik2lc?si=XkI1iHQLnCgxnLFo'> Play Now</a></p>

         </div>

        </div>
        <div className='blogimg'>
    <img src="https://dt-petszone.myshopify.com/cdn/shop/files/2.jpg?v=1667197734&width=650"/>
    </div>
     </div>
     
     </Carousel.Item></Carousel></center>

<div className="blog1content">
<center><h1 style={{padding:'20px'}}>Pet Parents Testimonials</h1></center>
</div>


<div className='wholetestcard'>
<div className='testcard'>
  <div className='testimg'>
<img src ="https://dt-petszone.myshopify.com/cdn/shop/files/test01.png?v=1668069616"width={900}/>

</div>
<div className='testcontent'>
<p style={{marginTop:'60px',fontFamily:'cursive', fontSize:'20px'}}>Exceptional care,love and professionalism from pet shop make them our go- to choice for our furry family member. our pet always returns happy and healthy,thanks to the devoted team and top-notch facilities.</p>
<center style={{marginLeft:'60%'}}>john -Manager </center>
</div>
</div>
</div>


<div className='blog1'>
<center><h1 style={{padding:'20px'}}>Adorable Pet News</h1></center>

<div className="viewB">
        <div class="cardB">
        <div class="profile-pic">
            <img src="https://dt-petty.myshopify.com/cdn/shop/articles/blog03.jpg?v=1653383270"/> 
        </div>
        <div class="bottom">
            <div class="content">
            <span class="name">Azaria</span>
            <span class="about-me">Pet's Food Pack give them Healthy Growth</span>
            </div>
           <div class="bottom-bottom">
            <div class="social-links-container">
            </div>
            <button class="button">Read More</button>
           </div>
        </div>
    </div>


    <div class="cardB">
        <div class="profile-pic">
            <img src="https://dt-petty.myshopify.com/cdn/shop/articles/blog02.jpg?v=1653383254"/> 
        </div>
        <div class="bottom">
            <div class="content">
            <span class="name">Azaria</span>
            <span class="about-me">Pet's Food Pack give them Healthy Growth</span>
            </div>
           <div class="bottom-bottom">
            <div class="social-links-container">
            </div>
            <button class="button">Read More</button>
           </div>
        </div>
    </div>


    <div class="cardB">
        <div class="profile-pic">
            <img src="https://dt-petty.myshopify.com/cdn/shop/articles/blog01.jpg?v=1653383240"/> 
        </div>
        <div class="bottom">
            <div class="content">
            <span class="name">Azaria</span>
            <span class="about-me">Pet's Food Pack give them Healthy Growth</span>
            </div>
           <div class="bottom-bottom">
            <div class="social-links-container">
            </div>
            <button class="button">Read More</button>
           </div>
        </div>
    </div>      
    </div>
</div>

<img style={{marginTop:'3%'}} src={i1}  alt="First slide"/></div>
     <NewFooter/>
    </>
  )
}
export default Blog1;
