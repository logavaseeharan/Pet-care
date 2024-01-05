import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Appbar from './Appbar';
import Categories from './Categories';
import Hotdeals from './Hotdeals';
import Background from './Background';
import Blog from './Blog.jsx';
import Brand from './Brand.jsx';
import NewFooter from './NewFooter.jsx';
import Login from './Login .jsx';
import Signup from './Signup.jsx';
import Product from './Product.jsx';
import About from './About.jsx';
import Faq from './Faq.jsx';
import Offcanvas from './offcanvas.jsx';
import Contact from './Contact.jsx';
import Blog1 from './Blog1.jsx';
import Blogout from './Blogout.jsx';



function App() {
  return (
   <>
    <Appbar/> 
    <Background/>
    <Categories/>
    <Hotdeals/>
    <Blog/>
    <Brand/>
    <NewFooter/>
    {/* <Blogout/> */}

    
   </>
  );
}

export default App;
