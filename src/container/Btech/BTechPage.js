import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BTech.css";

class BTech extends Component {
  render() {
    return (
      <section id="BTech" className="BTech py-5">
        <Container>
          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center course-title">
              <h1 className="text-capitalize">
                <strong style={{ color: "brown" }}>B.Tech </strong>Program
              </h1>
              <p
                style={{
                  borderTop: "3px solid white",
                  width: 70,
                  marginTop: 20,
                }}
              ></p>
              <p className="text-muted" data-aos="fade-up">
                Our Featured BTech programs are selected through a rigorous process and uniquely created for each semester.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="btech-container">
                <div className="btech-item">
                  <h1>Timetable</h1>
                  <Row>
                    <Col xs={12} sm={6}>
                      <h2>LAB Timetable</h2>
                      <embed src="https://drive.google.com/file/d/1qS6YPdrPVs2hp2E5fa-yQEyfEb9mAXyJ/preview" type="application/pdf" width="100%" height="350px" />
                    </Col>
                    <Col xs={12} sm={6}>
                      <h2>EXTC Timetable</h2>
                      <embed src="https://drive.google.com/file/d/19ajLNuY44S-I8LZjhhCM7MpGFN6hBhvC/preview" type="application/pdf" width="100%" height="350px" />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={6}>
                      <h2>SE Timetable</h2>
                      <embed src="https://drive.google.com/file/d/1RatNe_cCBsWK_pn793U-qVco7ICJ3nY_/preview" type="application/pdf" width="100%" height="350px" />
                    </Col>
                    <Col xs={12} sm={6}>
                      <h2>TE Timetable</h2>
                      <embed src="https://drive.google.com/file/d/1ov0jxps0lchjLbMkq9HL7_iHSb98Qz6i/preview" type="application/pdf" width="100%" height="350px" />
                    </Col>
                  </Row>
                </div>
                <div className="btech-item">
                  <h1>Syllabus</h1>
                  <p>Placeholder text for Syllabus</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default BTech;
