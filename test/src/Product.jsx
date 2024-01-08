import React from 'react'
import './Product.css';
import Appbar from './Appbar';
import NewFooter from './NewFooter';
import { allproducts } from './allData';
import { useLocation } from 'react-router-dom';


function Product() {

  const location=useLocation();
  const res=location.state&&location.state;
  console.log(res);
  return (
    <>
     <Appbar/>
     <div className='wholeproductP'>
  {res !== null ? (
    allproducts
      .filter(d => d.category === res)
      .map((d, index) => (
        <div class="cardP" key={index}>
          <div>    
            <img src={d.url} className="imageP" alt={d.name} />
          </div>
          <div class="productTitleP">
            {d.name}
          </div>
          <div class="costP">
            {d.price}
          </div>
          <div class="costP">
            {d.Quantity}
          </div>
          <button class="addtocartP">Add to Cart</button>
        </div>
      ))
  ) : (
    allproducts
      
      .map((d, index) => (
        <div class="cardP" key={index}>
          <div>    
            <img src={d.url} className="imageP" alt={d.name} />
          </div>
          <div class="productTitleP">
            {d.name}
          </div>
          <div class="costP">
            {d.price}
          </div>
          <div class="costP">
            {d.Quantity}
          </div>
          <button class="addtocartP">Add to Cart</button>
        </div>
      ))
  )}
</div>
 <NewFooter/>
    </>
  )
}
export default Product;