import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./style.css";
import fdpConductedData from "./fdpConductedData.js";

class FdpConductedPage extends Component {
  render() {
    return (
      <>
        <h1>FACULTY DEVELOPMENT PROGRAMME (FDP) CONDUCTED</h1>
        <div className="iframe-container">
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSKi7rX2a16XJCT6cAwh0jRSE0AceP64A28oqDuGi4kfESNu5f9dej4FRmbpAst9A/pubhtml?widget=true&headers=false"
            width="65%"
            height="800px"
            style={{ border: "0" }}
            title="Spreadsheet"
          />
        </div>
      </>
    );
  }
}

export default FdpConductedPage;
