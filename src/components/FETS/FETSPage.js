import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./FETS.css";

class FETSPage extends Component {
  render() {
    return (
      <Container className="fets-container">
        <Row>
          <Col md={6} className="text-center">
            <Image
              src="https://picsum.photos/130/130?image=1027"
              alt="FETS Logo"
              fluid
              className="fets-logo"
            />
          </Col>
          <Col md={6} className="text-center">
            <h1 className="fets-title">FETS Committee Page</h1>
            <p className="fets-description">
              Welcome to the FETS Committee Page. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aenean varius lorem in semper.
            </p>
            <Button variant="primary" className="fets-button">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FETSPage;
