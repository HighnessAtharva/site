import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./style.css";

class FdpParticipationPage extends Component {
  render() {
    return (
      <>
        <h1>FACULTY DEVELOPMENT PROGRAMME (FDP) ATTENDED</h1>
        <div className="iframe-container">
          <iframe scrollbar="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRmib8LOBnFRGL16HLnpYgtAdBa2VMKzBS5NnkDU1kWQXqzmL5jlit7kS8hbjLF3g/pubhtml?widget=true&amp;headers=false"
            width="93%"
            height="800px"
            style={{ border: "0" }}
            title="Spreadsheet"
          />
        </div>
      </>
    );
  }
}

export default FdpParticipationPage;
