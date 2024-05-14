import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGalleryResearch from "../../container/gallery/LabGalleryResearch";

class ResearchLab extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">Research Lab</h3>

        <Card className="mt-2">
          <Card.Body>
            <LabGalleryResearch />
            <br /> <br />
            <div>
              <h6>Lab location: 3rd Floor, Room No. 310</h6>
              <h6>Area of the lab in carpet: 100.23 sq. mtrs</h6>
              <h6>
                Approximate Cost of the equipments in the lab: Rs. 49,47,529/-
              </h6>
              <br></br>
              <h6>Name of the Lab Incharge:- Prof. Govind Tukaram Haldankar</h6>
              <h6>Name of the Technical Asst.: Mrs. Kirti More</h6>
              <br></br>
              <p>
                Research Lab is the lab specially design for the purpose of
                research activity. The funded research project received from
                various industries are completed in this lab. The final yeat
                UG/PG Students and also the PhD students are always encouraged
                to use lab facilities to learn and develop solutions in
                accordance to industry requirements.
              </p>

              <p>
                <b>Vision Statement:</b> <br></br>
                &quot;To be a leading research hub at the forefront of
                innovation, where interdisciplinary collaboration and
                cutting-edge technology converge to address industry challenges
                and propel societal progress.&quot;
              </p>
              <p>
                <b>Mission Statement:</b> <br></br>
                &quot;Our mission is to foster a dynamic research environment
                that empowers students and faculty to leverage state-of-the-art
                equipment and software in the ME Research Lab. By engaging in
                collaborative projects with industry partners, we aim to
                cultivate practical solutions that bridge theory and practice.
                Through mentorship, experimentation, and continuous learning, we
                strive to nurture the next generation of engineers and
                innovators equipped with the skills and knowledge to tackle
                real-world problems and shape the future of technology.&quot;
              </p>
              <p>
                Following are the few important instruments available in the
                lab.
              </p>

              <ul style={{ marginLeft: "50px" }}>
                <li>Two channel arbitrary function generators</li>
                <li>IE3D software</li>
                <li>Digital and Analog optical network simulator</li>
                <li>NI USRP 2921 software radio bundle</li>
                <li>Six axis, six DOF Robotics ARM</li>
                <li>GW instek DSO</li>
                <li>GW Logic Analyzer</li>
                <li>FRDM ARM board</li>
                <li>PCB drilling machine and HACKO make soldering station</li>
                <li>3Kw Grid solar inverter and DC to DC converter</li>
                <li>Software defined radio</li>
                <li>
                  Various microcontroller and inhouse DSP kits developed by
                  faculty and students
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default ResearchLab;
