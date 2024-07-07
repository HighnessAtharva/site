// CREATED BY ATHARVA SHAH & ISHANI MATHUR FOR EXTC DEPARTMENT

import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./style.css";
import fdpConductedData from "./fdpConductedData.js";

class FdpConductedPage extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>FACULTY DEVELOPMENT PROGRAMME (FDP) CONDUCTED</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="iframe-container">
            <iframe
              scrolling="no"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSKi7rX2a16XJCT6cAwh0jRSE0AceP64A28oqDuGi4kfESNu5f9dej4FRmbpAst9A/pubhtml?widget=true&headers=false"
              width="100%"
              height="800px"
              style={{ border: "0", overflow: "hidden" }}
              title="Spreadsheet"
            />
          </div>
        </Container>
      </>
    );
  }
}

export default FdpConductedPage;
