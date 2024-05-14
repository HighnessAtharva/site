import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClassGallery203 from "../../container/gallery/ClassGallery203";

class Class203 extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">Classroom 203</h3>
        <Card className="mt-2">
          <Card.Body>
            <ClassGallery203 />
            <br /> <br />
            <div>
              <h6>Class location: 2nd Floor</h6>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Class203;
