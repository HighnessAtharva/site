import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGalleryEandD from "../../container/gallery/LabGalleryE&D";

class ElectronicsDeviceLab extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">
          Electronics and Devices Lab
        </h3>
        <Card className="mt-2">
          <Card.Body>
            <LabGalleryEandD />
            <br /> <br />
            <div>
              <h6>Lab location: 3rd Floor, Room No. 306</h6>
              <h6>Area of the lab in carpet: 70.19 sq. mtrs</h6>
              <h6>
                Approximate Cost of the equipments in the lab: Rs. 714,224/-
              </h6>
              <br></br>
              <h6>Name of the Lab Incharge:- Dr. Prashant Kasambe</h6>
              <h6>Name of the Technical Asst.: Mrs. Deepali Thombare</h6>
              <br></br>
              <p>
                The laboratory is well equipped with: CROs, Function Generators,
                Desktop Digital Multimeters, LCR meters, IC testers, in addition
                to a large number of components for use in designing different
                types of Electronics circuits on the Bread-board &amp; PCBs.
              </p>
              <p>
                Texas Instruments University Program sponsored ASLK board for
                analog electronics are available in the lab.
              </p>

              <p>Components Available:</p>

              <ul style={{ marginLeft: "50px" }}>
                <li>Dual Power Supply (0- 32 Volt, 2 Amp)JOMA</li>
                <li>4 &amp; 1/2 Digit True RMS Multimeter HTC</li>
                <li>50 MHz channel Digital Storage Oscilloscope.</li>
                <li>Model Scientific 10MHz 1 Channel 125Sa/s</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default ElectronicsDeviceLab;
