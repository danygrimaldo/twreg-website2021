import React from "react";
import "../style.css";
import fpo from "./Assets/sold.png";

export const Sales = () => {
  return (
    // console.log("Sales!");
    <main>
      <div className="content">
        <div className="plugin-FPO-container">
          <div className="img">
            <img src={fpo} alt="Plugin FPO" />
          </div>
        </div>
      </div>
    </main>
  );
};
