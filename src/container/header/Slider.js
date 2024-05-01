import React, { Component } from "react";
import { Button, Container, Row, Col, Carousel, Image } from "react-bootstrap";
import slide01 from "../../images/banner.png";
import slide02 from "../../images/slide-02.jpg";
import slide03 from "../../images/slide-03.jpg";
import "./header.css";

class Slider extends Component {
  render() {
    return (
      <Container fluid style={{ height: "calc(100vh - 77px)" }}>
        <Row className="max-height">
          <Col xs={10} className="mx-auto div-col">
            <Carousel>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide01}
                  alt="First slide"
                  fluid
                  style={{ objectFit: "cover", opacity: "0.5", borderRadius: "10px", borderRadius: "10px"}}
                />
                <Carousel.Caption
                  className="text-left"
                  data-aos="fade-down"
                  // data-aos-offset="300"
                  // data-aos-easing="ease-in-sine"
                >
                  <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "black", marginLeft: "-33rem" }}>
                    VISION
                  </h1>
                  <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
                    “To produce Telecommunication Engineers capable of
                    effectively using the scientific and technical knowledge for
                    the betterment of society.”
                  </p>
                  <Button
                    variant="danger"
                    style={{ fontSize: "1.2rem", marginBottom: 10 }}
                  >
Read More
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide02}
                  alt="Third slide"
                  fluid
                  style={{ objectFit: "cover", opacity: "0.5", borderRadius: "10px" }}
                />

                <Carousel.Caption
                  data-aos="fade-right"
                  className="text-left"
                  style={{ fontSize: "1.8rem" }}
                >
                  <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "black", marginLeft: "-33rem" }}>
                    Second slide label
                  </h1>
                  <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Button
                    variant="danger"
                    style={{ fontSize: "1.2rem", marginBottom: 10 }}
                  >
                    Now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide03}
                  alt="Third slide"
                  fluid
                  style={{ objectFit: "cover", opacity: "0.5", borderRadius: "10px" }}
                />

                <Carousel.Caption
                  data-aos="fade-right"
                  className="text-left"
                  style={{ fontSize: "1.8rem" }}
                >
                  <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "black", marginLeft: "-33rem" }}>
                    Third slide label
                  </h1>
                  <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                  <Button
                    variant="danger"
                    style={{ fontSize: "1.2rem", marginBottom: 10 }}
                  >
                    Now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Slider;
