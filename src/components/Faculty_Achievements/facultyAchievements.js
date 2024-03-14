import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./achievements.css";
import FacultyAchievementsData from "./achievements";
import PhotoGallary from "./../../container/gallery/PhotoGallery";

class FacultyAchievements extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center mb-4">Faculty Achievements</h1>

        <Card className="mt-2">
          <Card.Body>
            <table className="table table-striped">
              {/* <thead>
                    <tr>
                      <th>Image</th>
                      <th>Data</th>
                    </tr>
                  </thead> */}
              <tbody>
                {FacultyAchievementsData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.imageUrl}
                        alt={`Image ${index}`}
                        className="img-fluid custom-image"
                      />
                    </td>
                    <td>{item.text}</td>
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
