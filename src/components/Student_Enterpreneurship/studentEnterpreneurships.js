import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./Enterpreneur.css";
import { Image } from "react-bootstrap";
import eimg from "../../images/eimg.png";

class StudentEntrepreneurships extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>ENTERPRENEURSHIP</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mb-5">
            <Col md={12}>
              <Image src={eimg} fluid />
            </Col>
            <Col md={12}>
              <br></br>
              <p>
                The Department of Electronics and Telecommunication Engineering
                has a dedicated Entrepreneurship Development Cell (EDC) to
                promote entrepreneurship among students. The EDC conducts
                various activities to promote entrepreneurship among students.
                The EDC also conducts various workshops and seminars on
                entrepreneurship. The EDC also provides guidance to students who
                want to start their own ventures. The EDC also conducts various
                competitions to encourage students to come up with innovative
                ideas.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default StudentEntrepreneurships;
