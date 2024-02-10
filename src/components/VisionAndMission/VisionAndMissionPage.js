import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./VisionAndMission.css";

class VisionAndMissionPage extends Component {
  render() {
    return (
      <>
        <Container className="container-style">
          <h1>Vision</h1>
          <p>
            "To create professionally competent engineers, researchers and
            entrepreneurs in the field of electronics engineering for the
            benefit of society."
          </p>
        </Container>
        <Container className="container-style">
          <h1>Mission</h1>
          <ul>
            <li>
              To impart quality engineering education as per the industry need
            </li>
            <li>
              To motivate students to undertake research on next generation
              technologies
            </li>
            <li>
              To create an environment that shall foster growth of professionals
              capable of effectively using the scientific and technical
              knowledge for the betterment of mankind
            </li>
          </ul>
        </Container>
      </>
    );
  }
}

export default VisionAndMissionPage;
