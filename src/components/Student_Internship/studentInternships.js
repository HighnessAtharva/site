import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./Internships.css";
import { Image } from "react-bootstrap";
import InternImg from "./Interning.png";
import InternStats from "./InternshipStats.png";

class StudentInternships extends Component {
  render() {
    return (
      <>
        {" "}
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>INTERNSHIPS</h3>
            </Col>
          </Row>
        </Container>
        <Container className="internship-container">
          <Row className="justify-content-center">
            <Col md={10}>
              <h3 className="text-center mb-4 mt-4">
                OUR STUDENTS ARE INTERNS AT
              </h3>
              <Image src={InternImg} fluid style={{ height: "300px" }} />
              <br />
              <br />
              <h3 className="text-center mb-4">6-MONTH INTERNSHIP</h3>
              <br />
              <div className="internship-stats-container d-flex justify-content-center align-items-center">
                <div className="mr-4">
                  <Table
                    bordered
                    hover
                    responsive
                    className="student-internship-table mb-4"
                  >
                    <thead className="thead">
                      <tr>
                        <th>Year</th>
                        <th>Number of Students</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2022-23</td>
                        <td>71</td>
                      </tr>

                      <tr>
                        <td>2021-22</td>
                        <td>59</td>
                      </tr>
                      <tr>
                        <td>2020-21</td>
                        <td>76</td>
                      </tr>
                      <tr>
                        <td>2019-20</td>
                        <td>52</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div>
                  <Image src={InternStats} fluid />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default StudentInternships;
