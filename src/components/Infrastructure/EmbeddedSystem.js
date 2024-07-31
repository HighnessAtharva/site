import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGallery from "../../container/gallery/LabGallery";

class EmbeddedSystem extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">
          Embedded System Lab
        </h3>
        <Card className="mt-2">
          <Card.Body>
            <LabGallery />
            <br /> <br />
            <div>
              <h6>Lab location: 3rd Floor, Room No. 301</h6>
              <h6>Area of the lab in carpet: 54.25 sq. mt</h6>
              <h6>
                Approximate Cost of the equipments in the lab: Rs. 41,74,687/-
              </h6>
              <br></br>
              <h6>Name of the Lab Incharge:- Prof. Priya Deshpande</h6>
              <h6>Name of the Technical Asst.: Mrs. Aaditi Sandav</h6>
              <br></br>
              <p>
                Embedded System Design is one of the rapidly growing field of
                Electronics &amp; Telecommunication Engineering branch. Keeping
                this in mind this lab has been developed over the time. Various
                hardware kits are available on which students can perform list
                of experiments along with mini projects. Students are always
                encouraged to use lab facilities to learn and develop solutions
                for daily needs.
              </p>
              <p>The list of hardware in the lab is as follows: </p>

              <ul style={{ marginLeft: "50px" }}>
                <li>ARM LPC2148 development boards</li>
                <li>PIC 18F development boards</li>
                <li>Silicon Lab's EFM Giant Gecko development boards</li>
                <li>STM32 Nucleoboards</li>
                <li>Spartan 3AN</li>
                <li>Spartan 6</li>
                <li>Dynalog 8086 Development board</li>
                <li>FRDM ARM board</li>
                <li>LPC 2184</li>
                <li>8051 Trainer Kit</li>
                <li>ARM trainer kit</li>
                <li>PSOC 4 BLE</li>
                <li>PSOC 4</li>
                <li>PSOC 6</li>
                <li>TMC 123 TIVA C series</li>
                <li>Zybo Zynq 7000</li>
                <li>Neumatolab Kit</li>
                <li>MSP 432</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default EmbeddedSystem;
