import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGalleryBEE from "../../container/gallery/LabGalleryBEE";

class BEELab extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">
          Basic Electrical & Electronics Lab
        </h3>
        <Card className="mt-2">
          <Card.Body>
            <LabGalleryBEE />
            <br /> <br />
            <div>
              <h6>Lab location: 3rd Floor, Room No. 311</h6>
              <h6>Area of the lab in carpet: 121.1 sq. mtrs</h6>
              <h6>
                Approximate Cost of the equipments in the lab: Rs. 13,92,421/-
              </h6>
              <br></br>
              <h6>Name of the Lab Incharge:- Prof. Govind Tukaram Haldankar</h6>
              <h6>Name of the Technical Asst.: Mr. Vijay Patyane</h6>
              <br></br>
              <p>
                The Basic Electrical Lab at Sardar Patel Institute of Technology
                is equipped with a comprehensive range of instruments and
                facilities to facilitate hands-on learning and experimentation
                in the field of electrical engineering. The lab serves as a
                vital resource for students to gain practical experience and
                deepen their understanding of fundamental electrical principles
                and applications.
              </p>
              <p>
                Key instruments available in the lab include both AC and DC
                motors along with motor drives, enabling students to study
                various aspects of motor operation and control. Additionally,
                there are advanced tools such as digital storage oscilloscopes,
                power scopes, RLC meters, digital watt meters, and digital
                energy meters, providing students with the means to measure and
                analyze electrical signals, power consumption, and energy usage.
              </p>
              <p>
                The lab is further equipped with a DC power supply capable of
                delivering voltages ranging from 0 to 200 volts and currents up
                to 25 amps, allowing students to power their experiments and
                projects effectively. The lab access to the students is
                available for Moreover, students have the opportunity to design
                and implement driver circuits for electrical motors, applying
                theoretical concepts to practical circuitry and gaining valuable
                hands-on experience in circuit design and implementation.
              </p>
              <p>
                Overall, the Basic Electrical Lab at Sardar Patel Institute of
                Technology offers a conducive environment for students to engage
                in experiential learning, foster creativity, and develop
                essential skills in electrical engineering through
                experimentation, analysis, and design.
              </p>
              <p>
                <b>Vision Statement:</b> <br></br>
                &quot;To be a leading hub of innovation and excellence in
                electrical engineering education, fostering a culture of
                hands-on learning, experimentation, and discovery.&quot;
              </p>
              <p>
                <b>Mission Statement:</b> <br></br>
                &quot;The Basic Electrical Lab at Sardar Patel Institute of
                Technology is dedicated to providing students with a
                comprehensive array of instruments and facilities to cultivate
                practical skills and deepen understanding of fundamental
                electrical principles. Through access to advanced tools and
                opportunities for experimentation, analysis, and design, we
                empower students to become proficient engineers capable of
                addressing real-world challenges in electrical engineering with
                creativity, expertise, and ethical integrity. Our commitment
                extends to providing 24-hour access to the lab, ensuring
                students have the flexibility and freedom to pursue their
                academic and research endeavors at their convenience.&quot;
              </p>
              <p>
                The following type of instruments and machines are available in
                the lab.
              </p>

              <ul style={{ marginLeft: "50px" }}>
                <li>3 phase Variable Transformer</li>
                <li>Single Phase Variable Transformer</li>
                <li>
                  Single Phase Transformer (1:1, 230v P &amp; 230 v S, 250KVA)
                </li>
                <li>Digital Storage Oscilloscopes - 25 MHz, Dual channel</li>
                <li>Function Generators (2Mhz)</li>
                <li>Handheld Multimeters (Rish max)</li>
                <li>Analog Wattmeters, Ammeters</li>
                <li>Digital Wattmeter (Single Phase)</li>
                <li>
                  DC Power Supply AC to DC (440V, 3Ø/0-230, 25 Amps, 6KVA)
                </li>
                <li>DC Shunt Motor</li>
                <li>Generator-Motor set</li>
                <li>3Ø Slip ring Induction motor Generator Set</li>
                <li>3Ø Rotor Resistance, DOL starter</li>
                <li>DC Power Supply – 0-32V/2Amps</li>
                <li>Decade Resistance, Capacitance and Inductor Boxes</li>
                <li>43” Smart LED Television</li>{" "}
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default BEELab;
