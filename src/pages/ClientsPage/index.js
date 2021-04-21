import React from "react";
import "../style.css";
import "./clientStyle.css";

export const ClientsPage = () => {
  return (
    <main>
      <div className="template-container">
        <div className="content">
          <h1> Partial Client List </h1>
          <div>
            <p>
              The Wiley Real Estate Group, Inc. (TWREG) is proud to have
              provided full-service commercial brokerage and advisory services
              for many clients including individual investors, financial
              institutions, government entities, entrepreneurs, and small to mid
              size organizations. Please see below for a partial client list:
            </p>
          </div>
          <div className="clients-div">
            <ul className="client-list">
              <li>Allied Capital</li>
              <li>Archon Group LP</li>
              <li>Bayview Loan Servicing</li>
              <li>Berkadia Commercial Mortgage</li>
              <li>California National Bank</li>
              <li>Capmark Affordable Housing</li>
              <li>Ciena Capital</li>
              <li>Citigroup</li>
              <li>CW Capital Asset Management LLC</li>
              <li>Fannie Mae</li>
              <li>First Intercontinental Bank</li>
              <li>Fortress</li>
              <li>Freddie Mac</li>
              <li>GE Capital</li>
              <li>Gibraltar Capital and Asset Management</li>
              <li>Imperial Capital, LLC</li>
              <li>Invest Atlanta</li>
              <li>Litton Loan Servicing LP</li>
              <li>LNR Partners, Inc.</li>
              <li>Loan Acquisition Corp.</li>
              <li>Midland</li>
              <li>Munimae</li>
              <li>Ocwen Loan Servicing, LLC</li>
              <li>Realty Financial Partners</li>
              <li>Regions Bank</li>
              <li>Suntrust</li>
              <li>TCAM Asset Management</li>
              <li>Trimont Real Estate Advisors</li>
              <li>United Community Bank</li>
              <li>Wells Fargo Bank, N.A.</li>
            </ul>
          </div>
        </div>
        <div className="testimonial-container">
          <div className="content">
            <h1>Testimonials</h1>
            <div>
              <h3>Citigroup</h3>
            </div>
            <div>
              <p>
                First of all, on behalf of Citigroup's Commercial Mortgage
                Finance group, I want to thank you for the outstanding work you
                did resulting in the sale of the office building last week. Your
                involvement went well beyond simply taking the listing to the
                market- you helped us position the property better within a
                short time, accessed a diverse group of investors, provided
                frequent updates as to your progress and overcame the issues
                that arose as we moved toward closing such that we achieved a
                successful result. The sale proceeds met our expectation and the
                closing occurred even faster than we originally anticipated. We
                would certainly be happy to do business with you again and to
                recommend your firm to any company seeking a reference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
