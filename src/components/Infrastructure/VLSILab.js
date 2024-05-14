import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGalleryVLSI from "../../container/gallery/LabGalleryVLSI";

class VLSILab extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">VLSI Lab</h3>

        <Card className="mt-2">
          <Card.Body>
            <LabGalleryVLSI />
            <br /> <br />
            <div>
              <h6>Lab location: 3rd Floor, Room No. 303</h6>
              <h6>Area of the lab in carpet: 100.37 sq. mtrs</h6>
              <h6>
                Approximate Cost of the equipments in the lab: Rs. 57,10,819/-
              </h6>
              <br></br>
              <h6>Name of the Lab Incharge:- Dr. Rajendra Sutar</h6>
              <h6>Name of the Technical Asst.: Mrs. Aaditi Sandav</h6>
              <br></br>
              <p>
                This laboratory caters to the experiments for courses Basic
                VLSI, CMOS VLSI Design &amp; MEMS. The part of the lab is
                engaged in research activity for the final year students of
                Electronics.
              </p>
              <p>
                <b>Software available and installed in VLSI lab:</b>
              </p>

              <ul style={{ marginLeft: "50px" }}>
                <li>MENTOR Graphics</li>
                <li>ConventorWare</li>
                <li>COMSOL</li>
                <li>VIVADO</li>
                <li>Visual TCAD</li>
                <li>Tanner tool</li>
                <li>Aim SPICE</li>
                <li>Microwind</li>
                <li>PSPICE</li>
                <li>MATLAB7</li>
                <li>Cadence</li>
              </ul>
              <p>
                These softwares are regularly used by the students for doing the
                experiments and projects.
              </p>
              <p>
                <b>Software available and installed in VLSI lab:</b>
              </p>

              <ul style={{ marginLeft: "50px" }}>
                <li>MENTOR Graphics</li>
                <li>ConventorWare</li>
                <li>COMSOL</li>
                <li>VIVADO</li>
                <li>Visual TCAD</li>
                <li>Tanner tool</li>
                <li>Aim SPICE</li>
                <li>Microwind</li>
                <li>PSPICE</li>
                <li>MATLAB7</li>
                <li>Cadence</li>
              </ul>
              <p>
                Testing and measuring instruments like 100Mhz Digital Storage
                Oscilloscope is also available. There are many prototype boards
                available from Texas Instruments University Program &amp;
                Cypress University Program.
              </p>
              <p>
                <b>Hardware available with related softwares:</b>
              </p>

              <ul style={{ marginLeft: "50px" }}>
                <li>Zynq 7000 Development Kit</li>
                <li>SENSIMER MEMS Platform</li>
                <li>FPGA trainers</li>
                <li>XILINX board</li>
                <li>PAL logic Design Trainer</li>
                <li>In-circuit emulator</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default VLSILab;
