import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "../../pages/Home";
import { AffordableHousing } from "../../pages/AffordableHousing";
import { ClientsPage } from "../../pages/ClientsPage";
import { Listings } from "../../pages/Listings";
import { Sales } from "../../pages/RecentSales";
import { AboutUs } from "../../pages/About Us";
import skyline from "../header/wiley_web_header.png";

export default function NavBar() {
  return (
    <header>
      <Router>
        <Navbar sticky="top" bg="light" expand="lg">
          <Navbar.Brand href="home" as={Link} to="/">
            <img
              src="./apple-touch-icon.png"
              alt="TWREG 25th Anniversary Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="about-us">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="exclusive-listings">
                Exclusive Listings
              </Nav.Link>
              <Nav.Link as={Link} to="recent-sales">
                Recent Sales
              </Nav.Link>
              <Nav.Link as={Link} to="affordable-housing">
                Affordable Housing
              </Nav.Link>
              <Nav.Link as={Link} to="clients">
                Clients
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <main>
          {/* //INSERT HEADER HERE// */}
          <img src={skyline} alt="atlanta-skyline" />
          <Switch>
            <Route path="/home" render={Home} />
            <Route path="/about-us" render={AboutUs} />
            <Route path="/exclusive-listings" render={Listings} />
            <Route path="/recent-sales" render={Sales} />
            <Route path="/affordable-housing" render={AffordableHousing} />
            <Route path="/clients" render={ClientsPage} />
            <Route exact path="/" render={Home} />
            <Route exact path="*" render={Home} />
          </Switch>
        </main>
      </Router>
    </header>
  );
}
