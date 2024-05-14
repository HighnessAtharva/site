import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./Topper.css";
import toppers from "./topperData";

class StudentToppers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toppersData: toppers,
    };
  }

  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>ACADEMIC TOPPERS</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <br />
          {this.state.toppersData.map((category, index) => (
            <>
              <Card key={index}>
                <br />
                <Card.Title>{category.category}</Card.Title>
                <Card.Body>
                  <table>
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Name of the Student</th>
                        <th>CGPI</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.students.map((student, index) => (
                        <tr key={index}>
                          <td>{student.rank}</td>
                          <td>{student.name}</td>
                          <td>{student.cgpi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
              <br />
            </>
          ))}
        </Container>
      </>
    );
  }
}

export default StudentToppers;
