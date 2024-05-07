import React, { Component } from "react";
import "./style.css";
import { Container, Card } from "react-bootstrap";
import LibraryGallery from "../../container/gallery/LibraryGallery";

class DepartmentLibrary extends Component {
  render() {
    return (
      <Container>
        <h1>Department Library</h1>
        <Card className="mt-2">
          <Card.Body>
            <LibraryGallery />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default DepartmentLibrary;
