import { useNavigate } from 'react-router-dom';
import './Search.css';
import React, { useState } from 'react';
function Search(){
  const navigate=useNavigate();
  const [search,setSearch]=useState('');
  function handleChange(e){
    console.log(search)
    setSearch(e.target.value);
    navigate("/product",{state:{d:search}})
  }
    return(
        <div class="container-input">
        <input type="text" placeholder="Search" name="text" class="input" value={search} onChange={handleChange} />
       

        <i  class="bi bi-search s-icon"></i>
      </div>
      
    );
}
export default Search;