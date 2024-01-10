import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login .jsx';
import{BrowserRouter,Routes,Route}from 'react-router-dom';
import App from './App.js';
import Signup from './Signup.jsx';
import Product from './Product.jsx';
import NewFooter from './NewFooter.jsx';
import Blog from './Blog.jsx';
import About from './About.jsx';
import Faq from './Faq.jsx';
import Offcanvas from './offcanvas.jsx';
import Contact from './Contact.jsx';
import Blog1 from './Blog1.jsx';
import Blogout from './Blogout.jsx';
import Categories from './Categories.jsx';
import ViewProduct from './viewProduct.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
<Route path="/" element={<App/>}></Route>
<Route path="/Home" element={<App/>}></Route>
<Route path="/Login" element={<Login/>}></Route>
<Route path="/Signup" element={<Signup/>}></Route>
<Route path="/Product" element={<Product/>}></Route>
<Route path="/Blog" element={<Blog/>}></Route>
<Route path="/About" element={<About/>}></Route>
<Route path="/Faq" element={<Faq/>}></Route>
<Route path="/Contact" element={<Contact/>}></Route>
<Route path="/Blog1" element={<Blog1/>}></Route>
<Route path="/BlogOut" element={<Blogout/>}></Route>
<Route path="/Product" element={<Product/>}></Route>
<Route path="/ViewProduct" element={<ViewProduct/>}></Route>
</Routes>

  </BrowserRouter>
  </React.StrictMode>
);