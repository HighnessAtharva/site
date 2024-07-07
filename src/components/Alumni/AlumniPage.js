// CREATED BY ATHARVA SHAH & ISHANI MATHUR FOR EXTC DEPARTMENT

import React, { Component } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./Alumni.css"; // Your custom CSS file
import testimonialsJson from "./Testimonials";

class AlumniPage extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>ALUMNI TESTIMONIALS</h3>
            </Col>
          </Row>
        </Container>

        <div class="fc">
          <Row xs={1} md={2} lg={2} className="g-4">
            <Col>
              <iframe
                width="600"
                height="400"
                src="https://www.youtube-nocookie.com/embed/0ETk4FgSDiY?si=QX4kgrlaGFFC277v"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Col>
            <Col>
              <iframe
                width="600"
                height="400"
                src="https://www.youtube-nocookie.com/embed/aeZSDK_UAdU?si=SnXVHPDkU7i2Xpzo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </div>
        <Row>
          {testimonialsJson.map((testimonial, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="alumni-card">
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    testimonial.imageUrl ||
                    "https://picsum.photos/130/130?random"
                  }
                  alt={`Alumni ${index + 1}`}
                  className="alumni-image"
                />
                <Card.Body  style={{ textAlign: "justify"}}>
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Text>{testimonial.description}</Card.Text>
                  <Card.Text>
                    <b>
                      <i>
                        <small className="text-muted">{`Graduation Year: ${testimonial.yearOfGraduation}`}</small>
                      </i>
                    </b>
                    <br></br>
                    <small className="text-muted">{`${testimonial.higherEducation}`}</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default AlumniPage;
