// CREATED BY ATHARVA SHAH & ISHANI MATHUR FOR EXTC DEPARTMENT

import React, { Component } from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import "./FETS.css";

import FetsLogo from "./FetsLogo.png";

const CommitteeCard = ({ name, description, link, imageUrl }) => (
  <Col md={4} className="text-center mb-4">
    <Card className="committee-card">
      <Card.Img
        variant="top"
        src={imageUrl}
        className="rounded-circle mx-auto mt-3"
        style={{ width: "130px", height: "130px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank">
          Visit Page
        </Button>
      </Card.Body>
    </Card>
  </Col>
);

class FETSPage extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>LEARNING BEYOND CURRICULUM</h3>
            </Col>
          </Row>
        </Container>

        <Container className="fets-container">
          <Row>
            <Col md={12} className="text-center mb-4">
              <p className="fets-description">
                Committees that encourage Learning By Doing
              </p>
            </Col>
          </Row>
          <Row>
            <CommitteeCard
              name="ISTE"
              description="To Engage, Empower and Energize educators for academic leadership and granting of academic excellence."
              link="https://iste.spit.ac.in/events/"
              imageUrl="https://iste.spit.ac.in/files/2019/11/ISTElogo.jpg"
            />
            <CommitteeCard
              name="IETE"
              description="Science and Technology for Electronics, Telecommuncation, Computers, Information Technology."
              link="https://iete.spit.ac.in/"
              imageUrl="https://iete.spit.ac.in/wp-content/uploads/2020/12/IETE-SPIT-Official-Logo.png"
            />
            <CommitteeCard
              name="FETS"
              description="Forum for Electronic and telecommunication students (FETS). Website is coming soon."
              link="http://fets.spit.ac.in/"
              imageUrl={FetsLogo}
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default FETSPage;
