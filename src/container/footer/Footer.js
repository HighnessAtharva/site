import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import college from "../../images/spit-logo.jpg";
import "./footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer
        className="site-footer"
        id="contact"
        style={{ backgroundColor: "#fff" }}
      >
        <Container fluid>
          <Row className="mt-5">
            <Col
              sm={6}
              md={6}
              data-aos="fade-right"
              className="mx-auto  d-flex justify-content-start align-items-center flex-column flex-wrap"
            >
              <Image src={college} fluid />
              <h4 className="mt-3 text-center">
                Sardar Patel <br /> Institute of Technology
              </h4>
            </Col>
            <Col
              sm={6}
              md={6}
              data-aos="fade-left"
              className="d-flex mt-3 justify-content-start  flex-column flex-wrap"
            >
              <h3 className="mb-2 text-capitalize text-start">contact us</h3>
              <div
                className="justify-content-start align-items-center flex-column"
                style={{ borderTop: "2px solid green", paddingTop: "0.5rem" }}
              >
                <p class="d-flex flex-wrap">
                  <span>
                    <b>Dr. Reena Sonkusare</b>, Head of Department, Electronics
                    and Telecommunication Engineering, Room No. 502, 5th Floor,
                    Sardar Patel Institute of Technology, Bhavan’s Campus,
                    Munshi Nagar, Andheri-West, Mumbai – 58, India.
                  </span>
                </p>
                <p class="d-flex flex-wrap">
                  <span class="mr-2 footer-icon">
                    <i class="fas fa-phone"></i>
                  </span>
                  <span>
                    022-26707440, 26708520, 26701410, 26287250 Ext : 982{" "}
                  </span>
                </p>
                <p class="d-flex flex-wrap">
                  <span class="mr-4 footer-icon">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span>reena_kumbhare@spit.ac.in</span>
                </p>
              </div>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container>
          <Row>
            <Col md={8} sm={6} xs={12}>
              <p class="copyright-text">
                Copyright &copy; 2023 All Rights Reserved by
                <a href="#copyright"> SPIT</a>.
              </p>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#fb">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#dribble">
                    <i class="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#linkedin">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
