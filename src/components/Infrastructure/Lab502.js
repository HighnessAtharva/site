import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGallery502 from "../../container/gallery/LabGallery502";

class Lab502 extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">
          Lab 502: Digital System Laboratory
        </h3>
        <Card className="mt-2">
          <Card.Body>
            <LabGallery502 />
            <br /> <br />
            <div>
              <h6>Lab location: 5th Floor, Room No. 502</h6>
              <h6>Area of the lab in carpet: 66 sq. mtrs</h6>
              <h6>
                Approximate Cost of the equipments in the lab: Rs. 10,39,358/-
              </h6>
              <br />
              <h6>Name of the Lab Incharge:- Dr. Narendra Bhagat</h6>
              <h6>Name of the Technical Asst.: Mrs. Riya Kasurde</h6>
              <br />

              <p>
                Motivating students in a Digital System Laboratory can be
                achieved through hands-on experience with hardware components,
                linking theoretical concepts to real-world applications,
                embracing project-based learning, incorporating gamification
                elements, leveraging interactive simulations, fostering industry
                partnerships, emphasizing interdisciplinary connections,
                presenting challenging problem-solving tasks, encouraging peer
                collaboration, and providing constructive feedback and
                recognition. These strategies create an engaging learning
                environment that inspires curiosity, creativity, and active
                participation, ultimately enhancing students' motivation and
                learning outcomes in digital system design and implementation.
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Lab502;
