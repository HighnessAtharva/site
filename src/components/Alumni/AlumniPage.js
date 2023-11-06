import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "./Alumni.css"; // Your custom CSS file

class AlumniPage extends Component {
  render() {
    return (
      <Container className="alumni-container">
        <h1 className="alumni-heading">Alumni Testimonials</h1>
        <Row>
          <Col lg={4} md={6} sm={12} className="alumni-card">
            <Card>
              <Card.Img
                variant="top"
                src="https://picsum.photos/130/130?image=1027"
                alt="Alumni 1"
                className="alumni-image"
              />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>
                  "I had a great experience at our university. The faculty and
                  programs are top-notch."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="alumni-card">
            <Card>
              <Card.Img
                variant="top"
                src="https://picsum.photos/130/130?image=1028"
                alt="Alumni 2"
                className="alumni-image"
              />
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text>
                  "The education I received here was invaluable. It prepared me
                  for my career."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="alumni-card">
            <Card>
              <Card.Img
                variant="top"
                src="https://picsum.photos/130/130?image=1029"
                alt="Alumni 3"
                className="alumni-image"
              />
              <Card.Body>
                <Card.Title>Bob Johnson</Card.Title>
                <Card.Text>
                  "I made lifelong friends and learned important skills during
                  my time here."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AlumniPage;
