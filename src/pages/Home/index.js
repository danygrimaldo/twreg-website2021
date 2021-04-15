import React from "react";
import "../style.css";
import fpo from "./Assets/featuredFPO.png";

export const Home = () => {
  return (
    // console.log("HOME");
    <div className="content">
      <div>
        <h1> Multifamily Investment Advisors </h1>
        <div>
          <p>
            The Wiley Real Estate Group, Inc. (TWREG) is a full-service
            commercial real estate firm based in Atlanta, Georgia. TWREG
            provides superior brokerage and advisory services to commercial real
            estate investors throughout the Southeast. Our experienced
            professionals perform extensive market and property research,
            property valuation and underwriting, providing the key elements to
            create the most effective individualized marketing strategy for each
            client.
          </p>
        </div>
      </div>

      <div className="center-type">
        <h1> Featured listings </h1>
      </div>

      <div className="plugin-FPO-container">
        <div className="img">
          <img src={fpo} alt="Plugin FPO" />
        </div>
        <div className="img">
          <img src={fpo} alt="Plugin FPO" />
        </div>
        <div className="img">
          <img src={fpo} alt="Plugin FPO" />
        </div>
      </div>
    </div>
  );
};
