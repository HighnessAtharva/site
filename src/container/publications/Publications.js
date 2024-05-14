import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "./publications.css";

export class publications extends Component {
  render() {
    return (
      <>
      <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>FACULTY PUBLICATIONS</h3>
            </Col>
          </Row>
        </Container>
        
        <Container>
        <div className="iframe-container" >
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS4LEZXeBvRyBHd219QXD_Z3Qu6mQfS8sY510PHuodBbgrOg8Q_v4QHx31Fg_p5Ww/pubhtml?widget=true&amp;headers=false"
           scrolling="no"
           width="100%"
            height="1000px"
            style={{ border: "0", overflow: "hidden" }}
            title="Spreadsheet">
          </iframe>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3 className="text-capitalize text-center mb-4 mt-4">
        Faculty Citations
        </h3>
        
        <div className="iframe-container">
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS4LEZXeBvRyBHd219QXD_Z3Qu6mQfS8sY510PHuodBbgrOg8Q_v4QHx31Fg_p5Ww/pubhtml?gid=1319708534&amp;single=true&amp;widget=true&amp;headers=false"
            width="65%"
            height="600px"
            style={{ border: "0" }}
            title="Spreadsheet"
          />
        </div>
        </Container>
      </>
    );
  }
}

export default publications;
