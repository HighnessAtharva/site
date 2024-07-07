// CREATED BY ATHARVA SHAH & ISHANI MATHUR FOR EXTC DEPARTMENT

import React, { Component } from "react";
import "./style.css";
import { Container, Card, Row,Col } from "react-bootstrap";
import LibraryGallery from "../../container/gallery/LibraryGallery";

class DepartmentLibrary extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>DEPARTMENT LIBRARY</h3>
            </Col>
          </Row>
        </Container>

        <Container>
          <Card className="mt-2">
            <Card.Body>
              <LibraryGallery />
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default DepartmentLibrary;
