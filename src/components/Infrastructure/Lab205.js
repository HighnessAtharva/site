import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGallery205 from "../../container/gallery/LabGallery205";

class Lab205 extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">
          Digital Signal Processing Lab
        </h3>
        <Card className="mt-2">
          <Card.Body>
            <LabGallery205 />
            <br /> <br />
            <div>
              <h6>Lab location: 2nd Floor, Room No. 205</h6>
              <h6>Area of the lab in carpet: 54.25 sq. mtrs</h6>
              <h6>
                Approximate Cost of the equipments in the lab: Rs. 19,50,196/-
              </h6>
              <br />
              <h6>Name of the Lab Incharge:- Dr. Kiran Talele</h6>
              <h6>Name of the Technical Asst.: Mr. Vivek Kurhe</h6>
              <br />

              <p>
                DSP labs are pivotal for students as they provide practical
                application of theoretical knowledge in digital signal
                processing, facilitating a deeper understanding of concepts such
                as Fourier transforms, filtering, and modulation. By engaging in
                lab activities, students develop critical problem-solving skills
                essential for engineering and scientific careers. These labs
                typically involve hands-on experimentation with DSP algorithms
                and techniques, often using software tools like MATLAB or
                programming languages like Python. Students may work on tasks
                such as designing and implementing filters, analyzing signals,
                processing audio or image data, and simulating communication
                systems. Through these activities, students gain proficiency
                with DSP tools and techniques, understand the relevance of DSP
                in various industries, and enhance their readiness for careers
                in fields such as telecommunications, audio processing, medical
                imaging, and more. Additionally, collaborative work in DSP labs
                fosters teamwork skills, preparing students for professional
                environments where collaboration is essential.
              </p>
              <p>The list of hardware in the lab is as follows:</p>

              <ul style={{ marginLeft: "50px" }}>
                <li>Desktop Computer Lenovo</li>
                <li>
                  Texas floating point DSP with ADC, DAC, Serial port, external
                  JTAG interface for 1D Signal processing, 2D Signal
                  Processing(10 Nos)
                </li>
                <li>Texas XDS 100v2 JTAG Emulator(5 Nos.)</li>
                <li>
                  TMS 320C6748DSP Development Board Make-Microembedded Model
                  -MicroDSP6748
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Lab205;
