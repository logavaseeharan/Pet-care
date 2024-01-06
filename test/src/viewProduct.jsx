import React from 'react'
import Appbar from './Appbar';
import NewFooter from './NewFooter';
import'./viewProduct.css'
function ViewProduct() {
  return (
    <>
      <Appbar/>
      <div className='wholeviewproduct'>
       <div  className='viewimg'>
        <img src="https://dt-petty.myshopify.com/cdn/shop/products/p13.jpg?v=1653304469"width={600}/>
       </div>
       <div className='viewcontent'>
        <h1 style={{fontFamily:'cursive',fontWeight:'bold',marginLeft:'200px',marginTop:'15px'}}>Meat & Rice Food</h1>
      <div className='viewcon1'>
      <p>Price </p>
      <p>Size</p>
      <p>Type</p>
      <p>Quantity</p>
        </div>
        <div className='viewcon2'>
      <p>Price </p>
      <p>Size</p>
      <p>Type</p>
      <p>Quantity</p>
        </div>
        </div>
       </div>
      <NewFooter/>
    </>
  )
}

export default ViewProduct;
