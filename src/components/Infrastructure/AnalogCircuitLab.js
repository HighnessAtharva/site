import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGalleryAnalogCircuit from "../../container/gallery/LabGalleryAnalogCircuit";

class AnalogCircuitLab extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">
          Analog Circuit Lab
        </h3>
        <Card className="mt-2">
          <Card.Body>
            <LabGalleryAnalogCircuit />
            <br /> <br />
            <div>
              <h6>Lab location: 3rd Floor, Room No. 304</h6>
              <h6>Area of the lab in carpet: 55.64 sq. mt</h6>
              <h6>Cost of the equipments in the lab: Rs. Rs. 480954/-</h6>
              <br></br>
              <h6>Name of Lab In-charge: Prof. Payal Shah</h6>
              <h6>Name of the Technical Asst.: Mrs. Deepali Thombare</h6>
              <br></br>
              <p>
                In this laboratory, experiments are performed for courses
                Electronics Device and Analog Circuits.
              </p>
              <p>
                The laboratory is well equipped with: CROs, Function Generators,
                Multimeters, Decade resistance/capacitance Box, Inductance Box.
                Components are well organized in the component organizer.
                Circuits designed by the students as mini-projects include
                Rectifiers, BJT Amplifiers and Oscillators, FET Amplifiers,
                Operational amplifiers, and their applications.
              </p>
              <p>
                A large number of components for use in designing different
                types of Electronics circuits on the Bread-board & PCBs are
                available in the lab. PCs equipped with various softwares are
                also allotted for doing simulation work during exams. Students
                can also perform simulations for selective experiments.
              </p>
              <p>
                <b>List of Components:</b>
              </p>
              <ul style={{ marginLeft: "50px" }}>
                <li>Dual Power Supply (0-32 Volt, 2 Amp) - JOMA</li>
                <li>4 &amp; 1/2 Digit True RMS Multimeter - HTC</li>
                <li>50 MHz Digital Storage Oscilloscope - Model Scientific</li>
                <li>10MHz 1 Channel 125Sa/s - Model Scientific</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default AnalogCircuitLab;
