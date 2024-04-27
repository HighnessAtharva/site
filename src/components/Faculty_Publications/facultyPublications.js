import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./publications.css";

class FacultyPublications extends Component {
  render() {
    return (
      <>
        <h1>Faculty Publications</h1>
        <div className="iframe-container">
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS4LEZXeBvRyBHd219QXD_Z3Qu6mQfS8sY510PHuodBbgrOg8Q_v4QHx31Fg_p5Ww/pubhtml?gid=1484133079&amp;single=true&amp;widget=true&amp;headers=false"
            width="70%"
            height="800px"
            style={{ border: "0" }}
            title="Spreadsheet"
          />
        </div>

        <br></br>
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
        </div>
      </>
    );
  }
}

export default FacultyPublications;
