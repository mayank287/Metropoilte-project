import React from "react";
import "./aboutSection.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import topbar from "topbar";
import TopLoaderBar from "../../TopLoaderbar/TopLoaderBar";

const About = () => {
  TopLoaderBar();
 
  return (
    <div className="about-section">
 
        <div className="inner-container">
            <h1>About Us</h1>
            <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>
            <div className="skills">
                <span><a href="https://github.com/mayank287"  target = "_blank"><GitHubIcon className="s-i"/></a></span>
                <span><a href ="https://www.linkedin.com/in/mayank-arora-979a83211/" target= "_blank"> <LinkedInIcon className ="s-i"/></a></span>
                <span><a href="https://www.instagram.com/mayankarora2707/" target="_blank"> <InstagramIcon className="s-i" /></a></span>
            </div>
        </div>
       
    </div>
  );
};





export default About;