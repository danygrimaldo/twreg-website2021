import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "../../pages/Home";
import { AffordableHousing } from "../../pages/AffordableHousing";
import { ClientsPage } from "../../pages/ClientsPage";

export default function NavBar() {
  return (
    <div>
      <Router>
        <Navbar sticky="top" bg="light" expand="lg">
          <Navbar.Brand href="#home" as={Link} to="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="home">
                Home
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
        <br />
        <Switch>
          <Route path="/home" render={Home} />
          <Route path="/affordable-housing" render={AffordableHousing} />
          <Route path="/clients" render={ClientsPage} />
          <Route exact path="/" render={Home} />
        </Switch>
      </Router>
    </div>
  );
}
