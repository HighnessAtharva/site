import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./achievements.css";
import FacultyAchievementsData from "./achievements";
import FacultyAchievementGallery from "./../../container/gallery/FacultyAchievementGallery";

class FacultyAchievements extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center mb-4">Faculty Achievements</h1>

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
    );
  }
}

export default FacultyAchievements;
