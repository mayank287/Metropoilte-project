import React,{ useState } from 'react'
import "./AnimatedSearch.css";
import { useHistory } from "react-router-dom";

// import SearchIcon from '@mui/icons-material/Search';

const AnimatedSearch = () => {
    const history = useHistory();
    
    const [keyword, setKeyword] = useState("");
	  
    const searchSubmitHandler = (e) => {
      e.preventDefault();
      if (keyword.trim()) {
        history.push(`/products/${keyword}`);
      } 
      else {
        history.push("/products");
      }
    };

  return (
   <div className='Anis'>

    <form action="" className="s-bar" onSubmit={searchSubmitHandler}>
	<input type="search" name="search" pattern=".*\S.*" required  onChange={(e) => setKeyword(e.target.value)} className ="s-input"/>
	<button className="s-btn" type="submit" onChange={(e) => setKeyword(e.target.value)}>
		<span className="s-span" >Search</span>
	</button>
</form>
   </div>

  )
}

export default AnimatedSearch