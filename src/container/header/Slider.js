import React, { Component } from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

import slide02 from "../../images/banner2.jpg";
import slide03 from "../../images/banner3.jpg";
import slide04 from "../../images/banner4.jpg";
import "./header.css";

class Slider extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="max-height" style={{ marginLeft: "0px", marginRight: "0px" }}>
          <Col xs={12} className="mx-auto div-col">
            <Carousel>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide04}
                  alt="First slide"
                  fluid
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide02}
                  alt="Second slide"
                  fluid
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide03}
                  alt="Third slide"
                  fluid
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Slider;
