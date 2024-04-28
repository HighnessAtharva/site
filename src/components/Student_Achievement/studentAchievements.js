import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./achievements.css";
import studentsData from "./achievements";
import PhotoGallary from "./../../container/gallery/PhotoGallery";

class StudentAchievements extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center mb-4">Student Achievements</h1>

        <Card className="mt-2">
          <Card.Body>
            <PhotoGallary />
            <br /> <br />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Name of Student</th>
                  <th>Class</th>
                  <th>Achievement</th>
                  <th>Description of Award</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {studentsData.slice().reverse().map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.class}</td>
                    <td>{student.achievement}</td>
                    <td>{student.awardDescription}</td>
                    <td>{student.date}</td>
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

export default StudentAchievements;
