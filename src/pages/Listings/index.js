import React from "react";
import "../style.css";
import fpo from "./Assets/Listings.png";

export const Listings = () => {
  return (
    // console.log("Listings!");
    <main>
      <div className="content">
        <h1> Exclusive Listings </h1>
        <div className="plugin-FPO-container">
          <div className="img">
            <img src={fpo} alt="Plugin FPO" />
          </div>
        </div>
      </div>
    </main>
  );
};
