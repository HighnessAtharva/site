import React, { Component } from "react";
import "./Infrastructure.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class InfrastructurePage extends Component {
  render() {
    return (
      <Container>
        <h1>Infrastructure</h1>
        <Card>
          <Card.Body>
            <ul>
              <li>
                <Link to="/EmbeddedSystem">301: Embedded Systems Lab</Link>
              </li>
              <li>
                <Link to="/CompCommNetwork">
                  503: Computer Communication Networking Lab
                </Link>
              </li>
              <li>
                <Link to="/beeLab">
                  311: Basic Electrical & Electronics Lab
                </Link>
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default InfrastructurePage;
