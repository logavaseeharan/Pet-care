
import { Button } from 'bootstrap';
import './/Hotdeals.css'; 
function Hotdeals(){
    return(
    <>
<div className='wholehotdeal'>
      <div className='Hotdeal'>
    <p>Hot Deals</p>
      </div>
<div className="viewHot">
    <div className="card2">
    <div className="content">
     <div className="back">
      <div className="back-content">
        
        <div className="hot">
            <p>Grab it Soon...</p>   <p>Animale</p><p>$200</p> 
            </div>
            
        <div className="image"><img src="https://dt-petty.myshopify.com/cdn/shop/products/p13_600x.jpg?v=1653304469" width={400}/></div>
        <button class="BtnHotH">
         Buy Now
       </button>

      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
    );
}
export default Hotdeals;