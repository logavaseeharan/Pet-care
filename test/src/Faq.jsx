import './Faq.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Appbar from './Appbar';
import NewFooter from './NewFooter';


function Faq() {
  return (
    <>
    <Appbar/>
        <div className='faq1'> <p>Common Queries</p> 
        <div className='faq2'>
       <div className='faq'>
   
   
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}} >What types of pets do you cater to?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          We cater to a wide variety of pets, including dogs, cats, birds, small animals like rabbits and hamsters, reptiles, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography  sx={{fontFamily:'cursive',fontSize:'23px'}} >Are your products vet-approved and safe for pets?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography  >
          Yes, all our products undergo stringent quality checks and are sourced from trusted brands. Many items are vet-recommended and designed with your pet's safety and well-being in mind.
          </Typography>
        </AccordionDetails>
      </Accordion>  
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}}>How do I select the right product for my pet's specific needs?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          Our website features detailed product descriptions and guides to assist you in choosing the best items for your pet. Additionally, our customer service team is available to offer personalized recommendations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}}>What types of pets do you cater to?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          We cater to a wide variety of pets, including dogs, cats, birds, small animals like rabbits and hamsters, reptiles, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}}>What is your shipping policy?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          We aim to process and ship orders promptly. Shipping times may vary based on location and product availability. You can find more details about our shipping policies and estimated delivery times on our website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}}>Do you offer returns or exchanges?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          Yes, we have a hassle-free return and exchange policy. If you're unsatisfied with your purchase or need a different size or variant, please refer to our returns policy for detailed instructions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}sx={{backgroundColor:'#F0B86E',width:'100%'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}}>How can I contact customer support?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          Our dedicated customer support team is available via email, live chat, or phone during business hours to assist with any inquiries, product information, or support-related issues.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}sx={{backgroundColor:'#F0B86E',width:'100%',color:'black'}}>
          <Typography sx={{fontFamily:'cursive',fontSize:'23px'}}>Are your products environmentally friendly or sustainable?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#FFDBAA',width:'100%'}}>
          <Typography>
          We strive to offer an eco-conscious selection and partner with brands that prioritize sustainability. Look for our eco-friendly product labels for items that align with these values.
          </Typography>
        </AccordionDetails>
      </Accordion>

     

      </div>
      
       <div className='faqimg'>
        <img src=" https://dt-woofly.myshopify.com/cdn/shop/files/Testimonial.png?v=1687262222&width=550" width={1100} /> 
      </div> 
      </div>
      </div>
      {/* https://dt-petty.myshopify.com/cdn/shop/files/grid04.jpg?v=1653389498 */}
    <NewFooter/>
  </>
  )
}

export default Faq;