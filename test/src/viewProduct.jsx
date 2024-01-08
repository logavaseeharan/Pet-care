import React, { useState } from 'react';
import Appbar from './Appbar';
import NewFooter from './NewFooter';
import './viewProduct.css';

function ViewProduct() {
  const [quantity, setQuantity] = useState(0);

  function increaseValue(limit) {
    if (quantity >= limit) return;
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function decreaseValue() {
    if (quantity < 1) return;
    setQuantity(prevQuantity => prevQuantity - 1);
  }

  return (
    <>
      <Appbar />
      <div className='wholeviewproduct'>
        <div className='viewimg'>
          <img src="https://dt-petty.myshopify.com/cdn/shop/products/p13.jpg?v=1653304469" width={450} alt="Product" />
        </div>
        <div className='Productdetail'>
        <div className='viewhead'>
          <h1 style={{ fontFamily:'cursive', fontWeight:'bold' ,marginLeft:"50px",marginBottom:"20px"}}>Animale</h1>
        </div>

        <div className='viewcontent'>
          <div className='viewcon1'>
            <p>Price:</p>
            <p>Size:</p>
            <p>Type:</p>
            <p>Quantity:</p>
          </div>
          <div className='viewcon2'>
            <p>Rs.50</p>
            <p>1 Kg</p>
            <p>Dog</p>
            <p>
              <div className="quantity-field">
                <button className="value-button decrease-button" onClick={decreaseValue} title="Azalt">-</button>
                <div className="number">{quantity}</div>
                <button className="value-button increase-button" onClick={() => increaseValue(100)} title="Arrtır">+</button>
              </div>
            </p>
            <button class="BtnHotV" style={{marginLeft:'-180px'}}>
         Add to Cart
       </button>
</div>
</div>
       
          </div>
          <div class="cardView1">
      <div class="contentView1">
        <div class="titleView1">Description</div>
        <div style={{fontSize:"20px"}}>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis.</div>
  </div>
        </div>
      </div>

      <NewFooter />
    </>
  );
}

export default ViewProduct;