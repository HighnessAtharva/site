import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Phd.css";
import phdData from "./phdData";

export class PhD extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>PH.D AWARDED/THESIS SUBMITTED/SYNOPSIS SUBMITTED</h3>
            </Col>
          </Row>
        </Container>

        <Container>
          <br />
          <Card className="mt-2">
            <Card.Body>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Sr.No.</th>
                    <th>Name of Student</th>
                    <th>Branch</th>
                    <th>Registration</th>
                    <th>Title</th>
                    <th>Ph.D. Status</th>
                  </tr>
                </thead>
                <tbody>
                  {phdData.map((phd) => (
                    <tr key={phd.id}>
                      <td>{phd.id}</td>
                      <td>{phd.name}</td>
                      <td>{phd.branch}</td>
                      <td>{phd.registration}</td>
                      <td>{phd.title}</td>
                      <td>{phd.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default PhD;
