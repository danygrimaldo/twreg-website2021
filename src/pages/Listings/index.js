import React from "react";
import Helmet from "react-helmet";
import "../style.css";

export const Listings = () => {
  return (
    <main>
      <div className="content">
        <div>
          <h1>Listings</h1>
        </div>
        <div className="container-fluid">
          <div className="row" id="buildout-listing"></div>
          <Helmet>
            <script type="text/javascript">{`BuildOut.embed({ token: "9d68b49d20dca0f1c94b2a240b75122e3e52ce40", plugin: "inventory", target: "buildout-listing" })`}</script>
          </Helmet>
        </div>
      </div>
    </main>
  );
};
