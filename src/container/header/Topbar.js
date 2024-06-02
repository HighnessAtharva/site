import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../images/spit-logo.jpg";
import "./header.css";
import { Link } from "react-router-dom";

export class Topbar extends Component {
  render() {
    return (
      <>
        <Navbar
          className="px-4 text-capitalize d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "white", minHeight: "100px" }}
        >
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Text className="ml-3">
            <h1 className="text-capitalize mb-0 bigHeader">
              Department of Electronics & Telecommunication Engineering
            </h1>
          </Navbar.Text>
        </Navbar>

        <Navbar
          expand="lg"
          className="px-4 text-capitalize"
          style={{
            border: "1px solid gray", // Border bottom
            backgroundColor: "skyblue",
            color: "black",
          }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link to="/vision-and-mission">
                <Nav.Link href="/vision-and-mission">Vision & Mission</Nav.Link>
              </Link>
              <NavDropdown title="Academics" id="administration-dropdown">
                <Link to="/btech">
                  <NavDropdown.Item href="/btech">B.Tech</NavDropdown.Item>
                </Link>
                <Link to="/mtech">
                  <NavDropdown.Item href="/mtech">M.Tech</NavDropdown.Item>
                </Link>
                <Link to="/phd">
                  <NavDropdown.Item href="/phd">PhD</NavDropdown.Item>
                </Link>
                <Link to="/bos">
                  <NavDropdown.Item href="/bos">BOS</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="People" id="faculty-dropdown">
                <Link to="/faculty">
                  <NavDropdown.Item href="/faculty">
                    Faculty and Staff
                  </NavDropdown.Item>
                </Link>
                <Link to="/faculty-achievements">
                  <NavDropdown.Item href="/faculty-achievements">
                    Achievements
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Students" id="students-dropdown">
                <Link to="/placement">
                  <NavDropdown.Item href="/placement">
                    Placements & Higher Studies
                  </NavDropdown.Item>
                </Link>
                <Link to="/internship">
                  <NavDropdown.Item href="/internship">
                    Internship
                  </NavDropdown.Item>
                </Link>

                <Link to="/student-achievements">
                  <NavDropdown.Item href="/student-achievements">
                    Achievements
                  </NavDropdown.Item>
                </Link>

                <Link to="/enterpreneurship">
                  <NavDropdown.Item href="/enterpreneurship">
                    Enterpreneurship
                  </NavDropdown.Item>
                </Link>

                <Link to="/toppers">
                  <NavDropdown.Item href="/toppers">Academic Toppers</NavDropdown.Item>
                </Link>
              </NavDropdown>

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

              <NavDropdown title="FDP" id="fdp-dropdown">
                <Link to="/conducted">
                  <NavDropdown.Item href="/conducted">
                    Conducted
                  </NavDropdown.Item>
                </Link>
                <Link to="/participation">
                  <NavDropdown.Item href="/participation">
                    Participation
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>

              <Link to="/infrastructure">
                <Nav.Link href="/infrastructure">Infrastructure</Nav.Link>
              </Link>

              <Link to="/alumni">
                <Nav.Link href="/alumni">Alumni</Nav.Link>
              </Link>
              <Link to="/fets">
                <Nav.Link href="/fets">Committees</Nav.Link>
              </Link>

              <NavDropdown title="Other" id="other-dropdown">
                <Link to="/innovative-teaching-learning">
                  <NavDropdown.Item href="/innovative-teaching-learning">
                    Innovative Teaching Learning
                  </NavDropdown.Item>
                </Link>
                <Link to="/department-library">
                  <NavDropdown.Item href="/department-library">
                    Department Library
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Topbar;
