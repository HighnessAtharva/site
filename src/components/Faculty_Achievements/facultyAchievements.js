import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./achievements.css";
import FacultyAchievementsData from "./achievements";
import FacultyAchievementGallery from "./../../container/gallery/FacultyAchievementGallery";

class FacultyAchievements extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">FACULTY ACHIEVEMENTS</h3>

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
