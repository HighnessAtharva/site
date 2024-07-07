// CREATED BY ATHARVA SHAH & ISHANI MATHUR FOR EXTC DEPARTMENT

import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./style.css";

class FdpParticipationPage extends Component {
  render() {
    return (
      <>
        {" "}
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>FACULTY DEVELOPMENT PROGRAMME (FDP) ATTENDED</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          {" "}
          <div className="iframe-container">
            <iframe
              scrollbar="no"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRmib8LOBnFRGL16HLnpYgtAdBa2VMKzBS5NnkDU1kWQXqzmL5jlit7kS8hbjLF3g/pubhtml?widget=true&amp;headers=false"
              width="100%"
              height="800px"
              style={{ border: "0" }}
              title="Spreadsheet"
            />
          </div>
        </Container>
      </>
    );
  }
}

export default FdpParticipationPage;
