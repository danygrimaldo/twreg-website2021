import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "../../pages/Home";
import { AffordableHousing } from "../../pages/AffordableHousing";
import { ClientsPage } from "../../pages/ClientsPage";
import { Listings } from "../../pages/Listings";
import { AboutUs } from "../../pages/About Us";
import skyline from "../header/wiley_web_header_w25.png";

export default function NavBar() {
  return (
    <header>
      <Router>
        <Navbar collapseOnSelect sticky="top" bg="light" expand="lg">
          <Navbar.Brand href="home" as={Link} to="/">
            <img
              src="./apple-touch-icon.png"
              alt="TWREG 25th Anniversary Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link eventKey="1" as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="about-us">
                About Us
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="exclusive-listings">
                Exclusive Listings
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="affordable-housing">
                Affordable Housing
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="clients">
                Clients
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <main>
          {/* //INSERT HEADER HERE// */}
          <img src={skyline} alt="atlanta-skyline" />
          <Switch>
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  timestamp={new Date().toString()}
                  key={props.location.key}
                />
              )}
            />
            <Route
              path="/about-us"
              render={(props) => (
                <AboutUs
                  {...props}
                  timestamp={new Date().toString()}
                  key={props.location.key}
                />
              )}
            />
            <Route
              path="/exclusive-listings"
              render={(props) => (
                <Listings
                  {...props}
                  timestamp={new Date().toString()}
                  key={props.location.key}
                />
              )}
            />
            <Route
              path="/affordable-housing"
              render={(props) => (
                <AffordableHousing
                  {...props}
                  timestamp={new Date().toString()}
                  key={props.location.key}
                />
              )}
            />
            <Route
              path="/clients"
              render={(props) => (
                <ClientsPage
                  {...props}
                  timestamp={new Date().toString()}
                  key={props.location.key}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  timestamp={new Date().toString()}
                  key={props.location.key}
                />
              )}
            />
            <Route
              exact
              path="*"
              render={(props) => (
                <Home
                  {...props}
                  timestamp={new Date().toString()}
                  key={props.location.key}
                />
              )}
            />
          </Switch>
        </main>
      </Router>
    </header>
  );
}
