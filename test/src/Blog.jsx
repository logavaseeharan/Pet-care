import { useNavigate } from 'react-router-dom';
import'./Blog.css';

function Blog(){
    const navigate=useNavigate();
    return(
        <>
        <section id='Blog'>
       <div className='wholeblog'>
        <div className="Blog">
        <p>Latest News & Blogs</p>
        </div>

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
            <button class="button" onClick={()=>navigate('/BlogOut',{state:1})}>Read More</button>
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
            <button class="button" onClick={()=>navigate('/BlogOut',{state:2})}>Read More</button>
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
            <button class="button" onClick={()=>navigate('/BlogOut',{state:3})}>Read More</button>
           </div>
        </div>
    </div>
        
        
        
    </div>
    </div>
    </section>
        </>
    )
}
export default Blog;