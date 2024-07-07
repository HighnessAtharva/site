// CREATED BY ATHARVA SHAH & ISHANI MATHUR FOR EXTC DEPARTMENT

import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./achievements.css";
import FacultyAchievementsData from "./achievements";
import FacultyAchievementGallery from "./../../container/gallery/FacultyAchievementGallery";

class FacultyAchievements extends Component {
  render() {
    return (
      <>
       <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>FACULTY ACHIEVEMENTS</h3>
            </Col>
          </Row>
        </Container>
      <Container >

        <Card className="mt-2">
          <Card.Body>
            <FacultyAchievementGallery />
            <br /> <br />
            <table className="table table-striped">
            <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Achievements</th>
                </tr>
              </thead>
              <tbody>
                {FacultyAchievementsData.map((faculty) => (
                  <tr key={faculty.id}>
                    <td>{faculty.id}</td>
                    <td>{faculty.text}</td>
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

export default FacultyAchievements;
