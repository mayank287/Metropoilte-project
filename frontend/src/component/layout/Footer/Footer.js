import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import Main from "../../../images/Main-1.jpeg"
import Main2 from "../../../images/Main-2.png"





const Footer = () => {
  return (
    <div class="footer">
    <div class="container">
         <div class="row">
              <div class="footer-col-1">
                   <h3>Order Now</h3>
                   <p>We Provide Our Services All Over India.</p>
                   <div class="charity">
                       <img src={Main} width="500" height="50"/>
                   </div>
              </div>
              <div class="footer-col-2">
                   <img src={Main2} width="300" height="30"/>
                   <p>Our Purpose Is To Make Healthy And Clean Life For Everyone.</p>
              </div>
              <div class="footer-col-3">
                   <h3>Useful Links</h3>
                   <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                   </ul>
              </div>
              <div class="footer-col-4">
                   <h3>Follow Us</h3>
                   <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                   </ul>
              </div>
         </div>
        
         <p class="copyright">Copyright 2020 - LOGOKING</p>
    </div>
</div>


  );
};

export default Footer;
