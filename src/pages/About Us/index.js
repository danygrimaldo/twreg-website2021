import React from "react";
import Helmet from "react-helmet";
import "../style.css";

export const AboutUs = () => {
  return (
    <main>
      <div className="content">
        <h1> About The Wiley Group </h1>
        <div>
          <p>
            Real estate entrepreneur Johnny Easterling founded The Wiley Real
            Estate Group, Inc. (TWREG) in 1996 in Atlanta, Georgia. Johnny's
            initial vision was to provide full-service commercial brokerage
            services in Georgia. With an enlarged vision and continued growth
            for over a decade, TWREG has expanded to include the states of
            Alabama, Louisiana, North Carolina, South Carolina, and Tennessee.
            In addition to representing individual investors, TWREG also
            represents financial institutions, government entities,
            entrepreneurs, and small to mid size organizations. TWREG's
            experienced professionals work in a team structure, giving each
            component of a transaction full attention and comprehensive focus.
            This team structure allows for efficiencies and results, providing
            unparalleled value for our clients.
          </p>
          <p>
            TWREG is dedicated to vigorously guiding our clients to achieve
            their investment goals. The added determination to earn our client's
            total satisfaction, allows us to perform successfully within each
            step of the real estate transaction thru closing.
          </p>
        </div>
        <br />
        <h1> Our Vision </h1>
        <div>
          <p>
            We strive to provide our clients superior brokerage and advisory
            services, with the commitment to create and enhance wealth through
            commercial real estate investing. Our success derives from our
            reputation of commitment to what we do and integrity in how we do
            it.
          </p>
        </div>
        <br />
        <h1> Our Team </h1>

        {/* //Buildout Plugin Below:// */}

        <div className="brokerPlugin">
          <div className="row" id="buildout-about"></div>
          <Helmet>
            <script type="text/javascript">{`BuildOut.embed({ token: "9d68b49d20dca0f1c94b2a240b75122e3e52ce40", plugin: "brokers", target: "buildout-about" })`}</script>
          </Helmet>
        </div>
      </div>
    </main>
  );
};
