import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "./consultancy.css";
import consultancyData from "./consultancyData";

export class consultancy extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>EXTC CONSULTANCY PROJECTS</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <br />
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Name of Faculty</th>
                  <th>Project Title</th>
                  <th>Funding Agency</th>
                  <th>Amount</th>
                  <th>Duration</th>
                  <th>Completion Status</th>
                </tr>
              </thead>
              <tbody>
                {consultancyData.map((consultancy) => (
                  <tr key={consultancy.id}>
                    <td>{consultancy.id}</td>
                    <td>{consultancy.name}</td>
                    <td>{consultancy.title}</td>
                    <td>{consultancy.agency}</td>
                    <td>{consultancy.amount}</td>
                    <td>{consultancy.duration}</td>
                    <td>{consultancy.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br>
          </div>
        </Container>
      </>
    );
  }
}

export default consultancy;
