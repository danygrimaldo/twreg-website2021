import React from "react";
import "../style.css";
import fpo from "./Assets/Listings.png";

export const Listings = () => {
  return (
    // console.log("Listings!");
    <div className="content">
      <div className="plugin-FPO-container">
        <div className="img">
          <img src={fpo} alt="Plugin FPO" />
        </div>
      </div>
    </div>
  );
};
