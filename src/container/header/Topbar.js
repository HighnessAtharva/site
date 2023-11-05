import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

export class Topbar extends Component {
  render() {
    return (
      <Navbar
        expand="lg"
        className="px-4 text-capitalize"
        style={{ backgroundColor: "#fff" }}
      >
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/vision-and-mission">
              <Nav.Link href="/vision-and-mission">Vision & Mission</Nav.Link>
            </Link>
            <NavDropdown title="Programs" id="administration-dropdown">
              {/* <Link to="/programs">
                <NavDropdown.Item href="/programs">Courses</NavDropdown.Item>
              </Link>
              <Link to="/gallery">
                <NavDropdown.Item href="/gallery">gallery</NavDropdown.Item>
              </Link>
              <Link to="/events">
                <NavDropdown.Item href="/events">events</NavDropdown.Item>
              </Link> */}

              <Link to="/btech">
                <NavDropdown.Item href="/btech">B.Tech</NavDropdown.Item>
              </Link>
              <Link to="/mtech">
                <NavDropdown.Item href="/mtech">M.Tech</NavDropdown.Item>
              </Link>
              <Link to="/phd">
                <NavDropdown.Item href="/phd">PhD</NavDropdown.Item>
              </Link>
            </NavDropdown>

            <Link to="/faculty">
              <Nav.Link href="/faculty">Faculty</Nav.Link>
            </Link>

            <NavDropdown title="R&D" id="r&d-dropdown">
              <Link to="/projects">
                <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
              </Link>
              <Link to="/publications">
                <NavDropdown.Item href="/publication">
                  Publications
                </NavDropdown.Item>
              </Link>
              <Link to="/consultancy">
                <NavDropdown.Item href="/consultancy">
                  Consultancy/Funded/Sponsored Projects
                </NavDropdown.Item>
              </Link>
            </NavDropdown>

            {/* <Link to="/admission">
              <Nav.Link href="/admission">Admission</Nav.Link>
            </Link>

            <Link to="/about">
              <Nav.Link href="/about">About</Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Link> */}

            <Link to="/infrastructure">
              <Nav.Link href="/infrastructure">Infrastructure</Nav.Link>
            </Link>

            <Link to="/alumni">
              <Nav.Link href="/alumni">Alumni Testimonials</Nav.Link>
            </Link>
            <Link to="/fets">
              <Nav.Link href="/fets">FETS Committee</Nav.Link>
            </Link>

          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success enroll-btn">Enroll</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topbar;
