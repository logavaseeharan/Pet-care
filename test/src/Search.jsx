import './/Search.css';
function Search(){
    return(
        <div class="container-input">
        <input type="text" placeholder="Search" name="text" class="input"/>
        <i  class="bi bi-search s-icon"></i>
      </div>
      
    );
}
export default Search;