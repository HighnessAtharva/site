import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "./Phd.css";

export class PhD extends Component {
  render() {
    return (
      <section id="Phd" className="phd py-5">
        <Container>
          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center course-title">
              <h1 className="text-capitalize">
                <strong style={{ color: "brown" }}>PhD </strong>Program
              </h1>
              <p
                style={{
                  borderTop: "3px solid white",
                  width: 70,
                  marginTop: 20,
                }}
              ></p>
              <p className="text-muted" data-aos="fade-up">
                Our Featured Phd are selected through a rigorous process and
                uniquely created for each semester.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="phd-container">
                <div className="phd-item">
                  <h1>Timetable</h1>
                  <p>Placeholder text for Timetable</p>
                </div>
                <div className="phd-item">
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

export default PhD;
