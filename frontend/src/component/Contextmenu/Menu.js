import React from 'react'
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import "./menu.css"

const Menu = ({ x, y, showMenu }) => {


  const style = () => {
    return {
      height: 252,
      width: 200,
      borderRadius: 10,
      display: "flex",
      flexDirection: "column",
      padding: 10,
      top: y,
      left: x,
      position: "absolute",
      display: showMenu ? "flex" : "none",


    };
  }
  return (
    <div style={style()} className="main-div">

       <div className='main-div-1'>

      <div style={styles.div} className="child-div home-m">
        <HomeIcon className="icon-menu" />
        <NavLink to="/" className="con-link"    >
          Home
        </NavLink>


      </div>
      <div style={{ ...styles.div, ...styles.margin }} className="child-div products-m">
        <CategoryIcon className="icon-menu" />
        <NavLink to="/Products" className="con-link"   >

          Products
        </NavLink>
      </div>
      <div style={styles.div} className="child-div about-m" >
        <InfoIcon className="icon-menu" /> <NavLink to="about" className="con-link"   >
          About
        </NavLink>


      </div>
      <div style={styles.div} className="child-div contact-m">
        <PhoneIcon className="icon-menu" />
        <NavLink to="/contact" className="con-link"   >
          Contact
        </NavLink>

             <hr className='hr' />
      </div>
</div>
{/*  */}
 <div className="line-div"></div>
{/*  */}
<div className='main-div-2'>

      <div style={styles.div} className="child-div cart-m">
        <ShoppingCartIcon className="icon-menu" />
        <NavLink to="/cart" className="con-link"    >
          Cart
        </NavLink>

      </div>
      <div style={styles.div} className="child-div login-m">
        <LoginIcon className="icon-menu"  />
        <NavLink to="/login" className="con-link">
          Login/SignUp
        </NavLink>

      </div>




  </div>

    </div>
  )
};
const styles = {
  div: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "#FE8F8F",
    color: "FFEDD3",
    fontWeight: "bold",
    cursor: "pointer",

  },
  margin: {
    margin: '10px 0'
  }
}



export default Menu;