import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./style.css";
import fdpConductedData from "./fdpConductedData.js";

class FdpConductedPage extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center mb-4">
          Number of man-days Training Imparted
        </h1>
        <div>
          {fdpConductedData.map((yearData, id) => (
            <div key={id}>
              <h2 className="text-center mb-4">
                Academic Year: ({yearData.year})
              </h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Sr.No.</th>
                    <th>Workshop/FDP/Conference</th>
                    <th>Faculty</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>No of Participants</th>
                    <th>Man Days </th>
                    <th>Man hours</th>
                  </tr>
                </thead>
                <tbody>
                  {yearData.data.map((fdpData, fdpId) => (
                    <tr key={fdpId}>
                      <td>{fdpData.id}</td>
                      <td>{fdpData.fdp}</td>
                      <td>{fdpData.faculty}</td>
                      <td>{fdpData.date}</td>
                      <td>{fdpData.duration}</td>
                      <td>{fdpData.participants}</td>
                      <td>{fdpData.manDays}</td>
                      <td>{fdpData.manHours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br></br>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default FdpConductedPage;
