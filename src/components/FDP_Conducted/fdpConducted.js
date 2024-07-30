// CREATED BY ATHARVA SHAH & ISHANI MATHUR FOR EXTC DEPARTMENT

import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./style.css";
import { fdpConductedData2020, fdpConductedData2021} from "./fdpConductedData.js";

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
          {/* <div className="iframe-container"> */}
          {/*   <iframe */}
          {/*     scrolling="no" */}
          {/*     src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSKi7rX2a16XJCT6cAwh0jRSE0AceP64A28oqDuGi4kfESNu5f9dej4FRmbpAst9A/pubhtml?widget=true&headers=false" */}
          {/*     width="100%" */}
          {/*     height="800px" */}
          {/*     style={{ border: "0", overflow: "hidden" }} */}
          {/*     title="Spreadsheet" */}
          {/*   /> */}
          {/* </div> */}
          <div className="fdb-conducted-table-title">EXTC DEPT YEAR 2020-21</div>
          <table>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Workshop/FDP/Conference</th>
                <th>Faculty</th>
                <th>Date</th>
                <th>Duration</th>
                <th>No. of Participants</th>
                <th>Man Days</th>
                <th>Man Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fdb-conducted-table-year">2020</tr>
              {
                fdpConductedData2020.map(e => {
                  return (
                    <tr>
                      <th>{ e.id }</th>
                      <th>{ e.fdp }</th>
                      <th>{ e.faculty }</th>
                      <th>{ e.date }</th>
                      <th>{ e.duration }</th>
                      <th>{ e.participants }</th>
                      <th>{ e.manDays }</th>
                      <th>{ e.manHours }</th>
                    </tr>
                  );
                })
              }
              <tr className="fdb-conducted-table-year">2021</tr>
              {
                fdpConductedData2021.map(e => {
                  return (
                    <tr>
                      <th>{ e.id }</th>
                      <th>{ e.fdp }</th>
                      <th>{ e.faculty }</th>
                      <th>{ e.date }</th>
                      <th>{ e.duration }</th>
                      <th>{ e.participants }</th>
                      <th>{ e.manDays }</th>
                      <th>{ e.manHours }</th>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </Container>
      </>
    );
  }
}

export default FdpConductedPage;
