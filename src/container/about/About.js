import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import college from "../../images/spit-logo.jpg";
import "./about.css";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <section
        className="about py-5"
        id="about"
        style={{ backgroundColor: "#fff" }}
      >
        <Container>
          <Row>
            <Col xs={10} lg={8} md={6} className="mx-auto my-5">
              <h1 className="text-capitalize">
                about  <br />
                {/* <strong className="banner-title">University</strong> */}
              </h1>
              <p
                className="my-4 text-muted w-75 about-text"
                data-aos="fade-right"
              >
                The B.E. Electronics and Telecommunications Engineering is a
                comprehensive four-year program that imparts a well-rounded
                education and a strong foundation in electronics,
                communications, computing, and engineering sciences. Established
                in 2005, the department initiated the Electronics &
                Telecommunication Engineering Course with an intake of 60
                students and later introduced M.E. (EXTC) in 2010 with 18
                students. The faculty, equipped with high qualifications and
                professional expertise, conducts training programs covering
                Network Administration, Communication, Design & Optimization,
                Network Security, Embedded Systems, Real-time DSP applications,
                VLSI design, and RTOS. The department collaborates with
                companies like Tata Consultancy Services and Sony Ericsson India
                Ltd through MoUs to enhance students' technical knowledge.
                Faculty members actively engage in R&D, publishing research in
                prestigious international journals and conferences such as IEEE,
                IET, AIP, ASP, Elsevier, etc. Students stay informed through
                organizations like IEEE, IETE, and F.E.T.S. Graduates find
                opportunities in communication, networking, and
                technology-driven fields. Companies such as Sony Ericsson India
                Ltd, CISCO, Microsoft, IBM, Deloitte, L&T, Tech Mahindra,
                Infosys, etc., recruit our students on campus.
              </p>
              <a
                href="/about"
                className="btn btn-outline-primary text-uppercase learn-more"
                data-aos="fade-right"
              >
                <Link to="/about">learn more</Link>
                <span>
                  <i
                    style={{ marginLeft: 10 }}
                    className="fas fa-arrow-right"
                  ></i>
                </span>
              </a>
            </Col>
            <Col
              xs={10}
              lg={4}
              md={6}
              className="mx-auto my-5 align-self-center"
              data-aos="fade-in"
            >
              <div className="about-img_container">
                <Image src={college} fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default About;
