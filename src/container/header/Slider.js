import React, { Component } from "react";
import { Button, Container, Row, Col, Carousel, Image } from "react-bootstrap";

import slide02 from "../../images/banner2.jpg";
import slide03 from "../../images/banner3.jpg";
import slide04 from "../../images/banner4.jpg";
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
                  src={slide04}
                  alt="First slide"
                  fluid
                  style={{ objectFit: "cover",  borderRadius: "10px", borderRadius: "10px"}}
                />
               {/*  <Carousel.Caption
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
                </Carousel.Caption> */}
              </Carousel.Item>
             
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide02}
                  alt="Third slide"
                  fluid
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />


              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide03}
                  alt="Third slide"
                  fluid
                  style={{ objectFit: "cover",  borderRadius: "10px" }}
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
