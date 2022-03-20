
import React, { useState } from "react";
import Badge from '@mui/material/Badge';
import "./Header.css"
import { NavLink } from "react-router-dom";
import logoweb from "../../../images/logoweb.png";
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import logo from "../../../images/logo.png"


const Header = () => {
	const history = useHistory();
	const [showMediaIcons, setShowMediaIcons] = useState(false);
	const { cartItems } = useSelector((state) => state.cart);
	
		const [keyword, setKeyword] = useState("");
	  
		const searchSubmitHandler = (e) => {
		  e.preventDefault();
		  if (keyword.trim()) {
			history.push(`/products/${keyword}`);
		  } else {
			history.push("/products");
		  }
		};
	  

	return (
		<>


			<nav className="Navbar">
			
				<NavLink to="/" className="divicon">
					


				 <img src ={logo} className ="main-logo" />

				
					
				</NavLink>
				<div className="search_box">
				
					<form className="NavSearch" onSubmit={searchSubmitHandler}>
						<input
							type="text"
							placeholder="Search a Product ..."
							onChange={(e) => setKeyword(e.target.value)}
						/>
						<input type="submit" placeholder="Search" />
					</form>

				</div>
				<div>
					<ol>
						<li> <NavLink to="/" className="Links"> Home </NavLink>  </li>
						<li> <NavLink to="/Products" className="Links">  Products</NavLink></li>
						<li> <NavLink to="/about" className="Links">about</NavLink></li>
						<li> <NavLink to="/contact" className="Links"> Contact</NavLink></li>
						<li> <NavLink to="/login" className="Links"> Account </NavLink></li>
						<li> <NavLink to="/cart" className="Links">
							<Badge badgeContent={cartItems.length} color ="warning">

								<ShoppingCartIcon />
							</Badge>
						</NavLink></li>
					</ol>
				</div>

			</nav>
		</>
	);
};


export default Header;