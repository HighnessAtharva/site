import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";
import yearWisePractices from "./yearWisePractices";

class InnovativePage extends Component {
  render() {
    return (
      <>
      <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>INNOVATIVE TEACHING LEARNING PRACTICES</h3>
            </Col>
          </Row>
        </Container>
      
      <Container>
        
        <div>
          {yearWisePractices.map((yearData, index) => (
            <div key={index}>
              <br />
              <h2 className="text-center mb-4">
                Academic Year: ({yearData.year})
              </h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Sr.No.</th>
                    <th>Name</th>
                    <th>Methods</th>
                    <th>Outcomes</th>
                    <th>Outcome Measuring</th>
                    {yearData.year === "2019-20" ||
                    yearData.year === "2018-19" ? (
                      <>
                        <th>Class</th>
                        <th>Semester</th>
                      </>
                    ) : null}
                  </tr>
                </thead>
                <tbody>
                  {yearData.practices.map((practice, practiceIndex) => (
                    <tr key={practiceIndex}>
                      <td>{practice.index}</td>
                      <td>{practice.name}</td>
                      <td>{practice.methods}</td>
                      <td>{practice.outcomes}</td>
                      <td>{practice.measures}</td>
                      {yearData.year === "2019-20" ||
                      yearData.year === "2018-19" ? (
                        <>
                          <td>{practice.class}</td>
                          <td>{practice.sem}</td>
                        </>
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              </table>
              <br></br>
            </div>
          ))}
        </div>
      </Container>
      </>
    );
  }
}

export default InnovativePage;
