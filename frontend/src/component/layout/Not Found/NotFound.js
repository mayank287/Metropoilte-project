import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import NotFound from "../../../images/Notfound.gif"
import topbar from "topbar";
import TopLoaderBar from "../../TopLoaderbar/TopLoaderBar";

const NotFounds = () => {
  TopLoaderBar()
  return (
    <div className="PageNotFound">
     
     <img src = {NotFound} alt ="Not-Found" className ="NotFound" />

      <Typography>Page Not Found </Typography>
      <Link to="/">Home</Link>
      
 

    </div>
  );
};

export default NotFounds;
