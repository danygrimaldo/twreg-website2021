import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer mt-0 py-5 text-white" expand="lg">
      <p>
        &copy;{new Date().getFullYear()} The Wiley Real Estate Group - All
        Rights Reserved
      </p>
    </footer>
  );
}
