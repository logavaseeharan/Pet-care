import React from 'react'
import './Product.css';
import Appbar from './Appbar';
import NewFooter from './NewFooter';
import { allproducts } from './allData';


function Product() {
  return (
    <>
     <Appbar/>

     <div className='wholeproductP'>
        {allproducts.map((d,index)=>
        (

            <div class="cardP">
   <div>    
    <img src={d.url} className="imageP"/>
  </div>
  <div class="productTitleP">
     {d.name}
  </div>
  <div class="costP">
      {d.price}
  </div>
  <div class="costP">
      {d.category}
  </div>
  <button class="addtocartP">Add to Cart</button>
 </div>
        ))
}

 
  </div>
 <NewFooter/>
    </>
  )
}
export default Product;