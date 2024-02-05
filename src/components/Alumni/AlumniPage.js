import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "./Alumni.css"; // Your custom CSS file
import testimonialsJson from "./Testimonials";

class AlumniPage extends Component {
  render() {
    return (
      <Row>
        {testimonialsJson.map((testimonial, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="alumni-card">
            <Card>
              <Card.Img
                variant="top"
                src={
                  testimonial.imageUrl || "https://picsum.photos/130/130?random"
                }
                alt={`Alumni ${index + 1}`}
                className="alumni-image"
              />
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>{testimonial.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">{`Graduation Year: ${testimonial.yearOfGraduation}`}</small>
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">{`Currently At: ${testimonial.higherEducation}`}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default AlumniPage;
