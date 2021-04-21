import React from "react";
import "../style.css";

export const AffordableHousing = () => {
  return (
    <main>
      <div className="content">
        <h1> Affordable Housing </h1>
        <div>
          <p>
            The Affordable Housing team of TWREG specializes in advisory and
            brokerage services of multi-family properties financed using Low
            Income Housing Tax Credits, Tax Exempt Bonds and HUD
            rental/financing subsidies. TWREG is experienced with the various
            regulatory agreements, partnership agreements and subsidy agreements
            of affordable housing. Our comprehensive knowledge of these programs
            helps us determine a successful exit strategy for our clients and
            create opportunities for new investors.
          </p>
        </div>
        <div>
          <p>
            TWREG provides the following services and expertise for our
            affordable housing clients:
          </p>
          <div className="client-services">
            <ul className="client-services-lists">
              <li>Fee Simple Asset Sales</li>
              <li>Partnership Interest Sales</li>
              <li>Workouts</li>
              <li>Initial Compliance Period Exit</li>
              <li>Qualified Contacts</li>
              <li>Re-Syndication Opportunities</li>
              <li>GP Replacements</li>
              <li>Advisory Services</li>
              <li>Opionions of Value</li>
              <li>HUD Programs</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
