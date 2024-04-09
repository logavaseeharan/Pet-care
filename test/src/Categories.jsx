import { useNavigate } from 'react-router-dom';
import './Categories.css';


function Categories(){
    const navigate=useNavigate();

    return(
    <>
    <div className='wholecategories'>
    <div className="Categories">
        <p>Food Categories</p>
    </div>
    
    <div className="view">
    <div class="cardC1" onClick={()=>navigate('/Product',{state:"Dog"})}><img src="https://dt-petty.myshopify.com/cdn/shop/files/icon-1_300x300.png?v=1651486354"/></div>
    <div class="cardC2" onClick={()=>navigate('/Product',{state:"Fish"})}><img src="https://dt-petty.myshopify.com/cdn/shop/files/icon-2_300x300.png?v=1651486406"/></div>
    <div class="cardC3" onClick={()=>navigate('/Product',{state:"Cat"})}><img src="https://dt-petty.myshopify.com/cdn/shop/files/icon-4_300x300.png?v=1651486515"/></div>
    </div>
    </div>
    
    </>
    )
};
export default Categories;