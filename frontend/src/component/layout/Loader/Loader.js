import React from "react";
import "./Loader.css";
import Walk from "../../../images/Walk.gif"

const Loader = () => {
  return (
    <div className="loading">
      <div>
       <img src ={Walk} alt ="Loading..." /> 

      </div>

    </div>

  );
};

export default Loader;
