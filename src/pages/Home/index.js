import React from "react";
import Helmet from "react-helmet";
import "../style.css";

export const Home = () => {
  return (
    <main>
      <div className="content">
        <div>
          <h1> Multifamily Investment Advisors </h1>
          <div>
            <p>
              The Wiley Real Estate Group, Inc. (TWREG) is a full-service
              commercial real estate firm based in Atlanta, Georgia. TWREG
              provides superior brokerage and advisory services to commercial
              real estate investors throughout the Southeast. Our experienced
              professionals perform extensive market and property research,
              property valuation and underwriting, providing the key elements to
              create the most effective individualized marketing strategy for
              each client.
            </p>
          </div>
        </div>

        <div className="center-type">
          <h1> Featured listings </h1>
        </div>

        <div className="container-fluid">
          <div className="row" id="buildout"></div>
          <Helmet>
            <script type="text/javascript">{`BuildOut.embed({token:"9d68b49d20dca0f1c94b2a240b75122e3e52ce40", plugin:"featured",target:"buildout",width:"750px",height:"auto",});`}</script>
          </Helmet>
        </div>
      </div>
    </main>
  );
};
