import React from "react";
// import {GlobalInfo} from "../../../App"
import "./Contact.css";
import { Button } from "@material-ui/core";
// import Progress from "react-progress-2";
// import LinearProgress from '@mui/material/LinearProgress';
// import TopLoader from "react-top-loader";
import ReactTopProgressBar from "react-top-progress-bar";
// import ProgressBar from "@badrap/bar-of-progress";
import topbar from "topbar";
import TopLoaderBar from "../../TopLoaderbar/TopLoaderBar";


const Contact = () => {
 TopLoaderBar();
 
 
  return (
    
    <div>

  {/* <script src="https://rebrand.ly/AutoTopBarJS"></script> */}
    <div className="contact-section">
{/*    
    <ReactTopProgressBar value={10} /> */}

      <h1>Contact Us</h1>
      <div className="border"></div>
      <form className="contact-form" action="index.html" method="post">
        <input type="text" className="contact-form-text" placeholder="Your name" />
        <input type="email" className="contact-form-text" placeholder="Your email" />
        <input type="text" className="contact-form-text" placeholder="Your phone" />
        <textarea className="contact-form-text" placeholder="Your message"></textarea>
             <input type="submit" className="contact-form-btn" value="Send" />

      </form>
    
      {/* <ReactTopProgressBar value={100} /> */}


   
        

    </div>
   {/* {progress.finish()} */}
  
    </div>

  );



};

export default Contact;
