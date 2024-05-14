import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClassGallery509 from "../../container/gallery/ClassGallery509";

class Class509 extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">Classroom 509</h3>
        <Card className="mt-2">
          <Card.Body>
            <ClassGallery509 />
            <br /> <br />
            <div>
              <h6>Class location: 5th Floor</h6>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Class509;
