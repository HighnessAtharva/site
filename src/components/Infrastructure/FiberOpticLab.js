import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGalleryOptics from "../../container/gallery/LabGalleryOptics";

class FiberOpticLab extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">
          Microwave and Fiber Optic Communication Lab
        </h3>
        <Card className="mt-2">
          <Card.Body>
            <LabGalleryOptics />
            <br /> <br />
            <div>
              <h6>Lab location: 5th Floor, Room No. 504</h6>
              <h6>Area of the lab in carpet: 66 sq. mtrs</h6>
              <h6>
                Approximate Cost of the equipments in the lab: Rs. 48,14,829/-
              </h6>
              <br></br>
              <h6>Name of the Lab Incharge:- Prof. Pallavi Nair</h6>
              <h6>Name of the Technical Asst.: Mrs. Kirti More</h6>
              <br></br>
              <p>
                The Microwave and Fiber Optic Communication Lab is a
                state-of-the-art facility dedicated to advanced courses in
                Microwave Engineering, Fiber Optic Communications, Advanced
                Digital Communication Systems, and Research and Development
                (R&D) projects. The laboratory is funded by the All-India
                Council for Technical Education (AICTE) under the Modernization
                and Removal of Obsolescence (MODROBS) scheme, Ref. No:
                12/AICTE/RIFD/MOD(Policy-3) Pvt-26/2012-13, and by Sardar Patel
                Institute of Technology.
              </p>

              <p>
                <b>Laboratory Facilities:</b> <br></br>
                <b>Microwave Communication Setup:</b> The laboratory is equipped
                with advanced microwave communication setups, including klystron
                setups, that allow students to explore and understand the
                principles of microwave communication, waveguides, antennas, and
                microwave propagation.
              </p>
              <p>
                <b>Vector Network Analyzer (VNA) Testing:</b> Students have
                access to Vector Network Analyzers (VNAs) for testing and
                analyzing the performance of microwave components, antennas, and
                RF circuits.
              </p>
              <p>
                <b>Optical Communication Kit by Scientech:</b> The laboratory
                features an Optical Communication Kit provided by Scientech,
                which enables students to gain practical experience in optical
                fiber communication systems, including modulation techniques,
                fiber optic components, and optical signal transmission.
                circuits.
              </p>
              <p>
                <b>Software-Based Experiments and Projects:</b> Students have
                access to software tools and simulation environments for
                conducting software-based experiments and projects related to
                communication systems, signal processing, and digital
                communication techniques.
              </p>
              <p>
                <b>Objectives of the Laboratory:</b>
                <ul style={{ marginLeft: "50px" }}>
                  <li>
                    To provide hands-on experience in designing, implementing,
                    and testing advanced communication systems and components.
                  </li>
                  <li>
                    To facilitate research and development activities in the
                    field of communication engineering.
                  </li>
                  <li>
                    To foster innovation and creativity among students through
                    practical experimentation and project work.
                  </li>
                  <li>
                    To prepare students for careers in the telecommunications
                    industry, research organizations, and academia.
                  </li>
                </ul>
              </p>
              <p>
                <b>Laboratory Usage:</b>
                <br></br>
                The laboratory is primarily used for conducting practical
                sessions, laboratory experiments, project work, and research
                activities for students enrolled in advanced courses of
                Microwave Engineering, Fiber Optic Communications, and Advanced
                Digital Communication Systems. Faculty members and research
                scholars also utilize the laboratory for conducting experiments,
                testing prototypes, and carrying out research projects in the
                field of communication engineering.
              </p>
              <p>The list of hardware in the lab is as follows:</p>

              <ul style={{ marginLeft: "50px" }}>
                <li>RF Signal Generator 9Khz to 3 GHz</li>
                <li>Scientech 2501 A kit</li>
                <li>Klystron based and Gunn based test benches (x-band)</li>
                <li>Vector Network Analyzer</li>
                <li>Advance Microwave Integrated Circuits (MIC) Trainer</li>
                <li>ST2263 Microstrip Antenna Trainer</li>
                <li>IE3D software (18 License)</li>
                <li>Ansys HFSS (one Research License)</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default FiberOpticLab;
