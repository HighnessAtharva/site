import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "./publications.css";

export class publications extends Component {
  render() {
    return (
      <>
        <h1>Faculty Publications</h1>
        <div className="iframe-container" style={{marginBottom: "500px"}}>
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS4LEZXeBvRyBHd219QXD_Z3Qu6mQfS8sY510PHuodBbgrOg8Q_v4QHx31Fg_p5Ww/pubhtml?widget=true&amp;headers=false"
            width="90%"
            height="1800px"
            style={{ border: "0" }}
            title="Spreadsheet">
          </iframe>
        </div>

        {/* <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Faculty Citations</h1>
        <div className="iframe-container">
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS4LEZXeBvRyBHd219QXD_Z3Qu6mQfS8sY510PHuodBbgrOg8Q_v4QHx31Fg_p5Ww/pubhtml?gid=1319708534&amp;single=true&amp;widget=true&amp;headers=false"
            width="45%"
            height="600px"
            style={{ border: "0" }}
            title="Spreadsheet"
          />
        </div> */}
      </>
    );
  }
}

export default publications;
