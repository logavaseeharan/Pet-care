import React,{Component} from 'react'
import './Contact.css';
import NewFooter from './NewFooter';
import Appbar from './Appbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider(){
     var settings = {
          dots: true,
          infinite: true,
          speed: 2000,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 100,
          easing:"linear",
          centerMode:true,
        };

  return (
    <>
    <Appbar/>
    <div className='comcontact'>
     <center><h1 style={{fontFamily:'cursive',padding:'10px'}}>Our Branches At</h1></center>
     <center style={{padding:'10px', fontFamily:'cursive'}}><p>Contact us at PetShop for personalized pet care assistance. Reach our customer support via email petShop@gmail.com or live chat during business hours. Visit our store  for hands-on guidance or connect on social media PetShop for updates. Share your feedback through our contact form; your insights shape our commitment to exceptional pet care.</p></center>

      <div className='wholecontact'>
 <div class="cardCon1">
 <h1>LOS ANGELES</h1>
 <i class="bi bi-geo-alt-fill"></i><p>3401 Silverado Dr, Ontario, Canada,L5A 3W5</p>
 <i class="bi bi-envelope-fill" ></i><p>PetShop@gmail.com</p>
 <i class="bi bi-telephone"></i><p>000- 123 -456789</p>
 </div>

 <div class="cardCon1">
 <h1>LOS ANGELES</h1>
 <i class="bi bi-geo-alt-fill"></i><p>No: 58 A,East Madison Street, Baltimore,USA 4508</p>
 <i class="bi bi-envelope-fill" ></i><p>PetShop@gmail.com</p>
 <i class="bi bi-telephone"></i><p>000- 123 -456789</p>
 </div>


 <div class="cardCon1">
 <h1>LOS ANGELES</h1>
 <i class="bi bi-geo-alt-fill"></i><p>648 Selby Road Stillwater,MN 55082</p>
 <i class="bi bi-envelope-fill" ></i><p>PetShop@gmail.com</p>
 <i class="bi bi-telephone"></i><p>000- 123 -456789</p>
 </div>


 </div>


 <center><h1 style={{fontFamily:'cursive', marginTop:'40px',padding:'10px',backgroundColor:'#f5f5f5',fontWeight:'bolder'}}>Share Your Cool Stories @petShop</h1></center>
 </div>
 
 <div > 

  <div className='wholecontactimg'>
  <Slider {...settings}>
      <div className='contactimg'>
      <img src="https://dt-woofly.myshopify.com/cdn/shop/files/AdobeStock_580532667_2x_931cf135-b453-4acd-83d6-5768dd4ecaa5.jpg?v=1687237318&width=1500"/>
      </div>
      <div className='contactimg'>
      <img src='https://dt-woofly.myshopify.com/cdn/shop/files/AdobeStock_451241931_2x_6a7ee758-613c-4dfc-b91f-19f717da730f.jpg?v=1687237318&width=1500'/>
      </div>
      <div className='contactimg'>
      <img src="https://dt-woofly.myshopify.com/cdn/shop/files/AdobeStock_213965280_2x_89afd294-1905-4d02-8d09-2af9e5f68195.jpg?v=1687237318&width=1500"  />
      </div>
      <div className='contactimg'>
      <img src="https://dt-woofly.myshopify.com/cdn/shop/files/AdobeStock_483064703_2x_9e025df0-8f33-4503-8ece-95928ae169f5.jpg?v=1687237318&width=1500"  />
      </div>
      <div className='contactimg'>
        <img src='https://dt-woofly.myshopify.com/cdn/shop/files/AdobeStock_179427901_2x_21671e51-1981-4b90-9d39-55b3ae28822a.jpg?v=1687237317&width=1500'/>
      </div>
      </Slider> 
  </div>

 </div>
 <NewFooter/>
    </>
  );
}



