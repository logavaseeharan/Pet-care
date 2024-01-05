
import { Button } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './/Background.css';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';
import image from './new dog.png';
import image1 from'./Cat.png';
import image2 from'./camlelon.png';
function Background() {
  return (
    <Carousel data-bs-theme="dark">
        
<Carousel.Item interval={500}>
    <div className='text1'>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        /><div className='text2'>
        <button class="BtnHot">
         Shop Now
       </button> </div>
        </div>
</Carousel.Item>
    
<Carousel.Item interval={1000}>
  <div className='text3'>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />
        <div className='text4'>
 <button class="BtnHot">
         Shop Now
       </button></div>
</div>
</Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <div className='text5'>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        /><div className='text6'>
 <button class="BtnHot">
         Shop Now
       </button></div>
</div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Background;