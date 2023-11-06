import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "./MTech.css";

export class MTech extends Component {
  render() {
    
    return (
      <section id="MTech" className="MTech py-5">
        <Container>
          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center course-title">
              <h1 className="text-capitalize">
                <strong style={{ color: "brown" }}>M.Tech </strong>Program
              </h1>
              <p
                style={{
                  borderTop: "3px solid white",
                  width: 70,
                  marginTop: 20,
                }}
              ></p>
              <p className="text-muted" data-aos="fade-up">
                Our Featured MTech are selected through a rigorous process and
                uniquely created for each semester.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mtech-container">
                <div className="mtech-item">
                  <h1>Timetable</h1>
                  <p>Placeholder text for Timetable</p>
                </div>
                <div className="mtech-item">
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

export default MTech;
