import React from 'react'
import Appbar from './Appbar';
import NewFooter from './NewFooter';
import './About.css';
import img from'./slider-2new.png';
function About() {
  return (
    <>
    <Appbar/>
    <div className='wholeabout'>
    <div className='about'>

<div>
    <b>Who We Are</b>
    </div>
<div style={{width:"60%"}}>
Welcome to our Pet Shop, where our passion for pets drives us to provide an unparalleled destination for all your pet care needs. Founded by devoted pet lovers, we curate a diverse range of top-quality products from premium foods to specialized accessories to ensure your furry, scaly, or feathered friends receive the utmost care. Our mission is to enhance the well-being of pets and strengthen the human-animal bond by upholding quality, offering expert guidance, fostering a supportive community, and prioritizing customer satisfaction. Join us in creating a world where every pet receives the love and care they deserve.
</div>
</div>
<div className='all'>
<div class="cookie-card">
<span class="taitle">Leadership Principles</span>
    <p class="description">Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day.</p>
        <button class="accept">
            Read More
        </button>
    </div>
    <div class="cookie-card">
    <span class="taitle">Awards and Recognition</span>
    <p class="description">We use cookies to ensure that we give you the best experience on our website.</p>
        <button class="accept">
            Read More
        </button>
    </div>
    <div class="cookie-card">
    <span class="taitle">Facts About Petshop</span>
    <p class="description">We use cookies to ensure that we give you the best experience on our website.</p>
        <button class="accept">
            Read More
        </button>
    </div>
    </div>
    </div>
    <div className='about2'>
    <img
          className='aboutimg'
          src={img} width={900}
          alt="First slide"
        /> 
        <div className='about3'>
<img src="https://dt-petty.myshopify.com/cdn/shop/files/slider-1-1.png?v=1652340865"    width={200}/>


        </div>
</div>
   <NewFooter/>
    </>
  )
}

export default About;
