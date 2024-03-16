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
            <Link to="/EmbeddedSystem">Embedded Systems Lab</Link>
          </li>
        </ul>
          </Card.Body>
        </Card>

        
      </Container>
    );
  }
}

export default InfrastructurePage;
