import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGallery2 from "../../container/gallery/LabGallery2";

class CompCommNetwork extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">
          Computer Communication Networking Lab
        </h3>
        <Card className="mt-2">
          <Card.Body>
            <LabGallery2 />
            <br /> <br />
            <div>
              <h6>Lab location: 5th Floor, Room No. 503</h6>
              <h6>Area of the lab in carpet: 66 sq. mtrs</h6>
              <h6>
                Approximate Cost of the equipments in the lab: Rs. 2232991/-
              </h6>
              <br></br>
              <h6>Name of the Lab Incharge:- Dr. Amol Deshpande</h6>
              <h6>Name of the Technical Asst.: Mrs. Riya Kasurde</h6>
              <br></br>
              <p>
                The Computer Communication Laboratory is a dedicated space
                equipped with specialized hardware and software used for
                studying and experimenting with various aspects of computer
                networking and communication systems. In this laboratory,
                students and researchers have access to networking devices, such
                as routers, switches, and servers, as well as simulation tools
                and software-defined networking platforms. They can engage in
                hands-on experiments to gain practical experience in
                configuring, analyzing, and troubleshooting network protocols
                and technologies. Additionally, the laboratory may offer
                opportunities for conducting research projects related to
                network security, performance optimization, and emerging
                communication technologies, contributing to advancements in the
                field of computer communication.
              </p>
              <p>
                Majorly, the courses conducted in this lab are Computer
                Communication Networking (CCN), Telecom Network Management (TNM)
                for third and final year students. This lab is equipped with
                desktop PCs of HP and Lenovo having Intel i5 processor, 8GB RAM,
                1TB configuration. Some of the PCs have integrated OS (Ubuntu &
                Windows) and others have Ubuntu.
              </p>
              <p>List of major Hardware and software is given below:</p>

              <ul style={{ marginLeft: "50px" }}>
                <li>LINKSYS WAP54G ACCESS POINT</li>
                <li>LAN CABLE CRIMPING KIT</li>
                <li>
                  28-Port xStack L2+ Managed Stackable Fast Ethernet Switch
                  DES-3528
                </li>
                <li>
                  DGS-1500-28 24-Port 10/100/1000Base-T + 4 100/1000Base-T SFP
                  SmartPro Switch
                </li>
                <li>NETWORK SIMULATOR TOOL - CISCO PACKET TRACER</li>
                <li>Graphic Network Simulator: GNS3</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default CompCommNetwork;
