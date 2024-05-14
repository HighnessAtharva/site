import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGallery508 from "../../container/gallery/LabGallery508";

class Lab508 extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">Project Lab</h3>

        <Card className="mt-2">
          <Card.Body>
            <LabGallery508 />
            <br /> <br />
            <div>
              <h6>Lab location: 5th Floor, Room No. 508</h6>
              <h6>Area of the lab in carpet: 66 sq. mtrs</h6>
              <h6>
                Approximate Cost of the equipments in the lab: Rs. 12,78,704/-
              </h6>
              <br></br>
              <h6>Name of the Lab Incharge:- Dr. Anand D.Mane</h6>
              <h6>Name of the Technical Asst.: Mrs. Kirti More</h6>
              <br></br>

              <p>
                <b>Total Desktop for Students: </b> 20
              </p>
              <p>
                <b>Configuration</b> <br></br>
                <ul style={{ marginLeft: "50px" }}>
                  <li>HP-280,Desktop ,Intel core i5, 10 No.s</li>
                  <li>LENOVO Neo 12th Gen Intel(R) Core(TM) i5, 10 No.s</li>
                </ul>
              </p>

              <p>
                <b>OS Installed </b> <br></br>
                <ul style={{ marginLeft: "50px" }}>
                  <li>Ubuntu </li>
                  <li>Windows 11 Pro</li>
                </ul>
              </p>

              <p>
                <b>Laboratory Facilities </b> <br></br>
                <ul style={{ marginLeft: "50px" }}>
                  <li>
                    Wireless Sensor Network node (using Zigbee protocol, Data
                    Collection, ISM Sensor ARM Cortex)
                  </li>
                  <li> OBI 200 VOIP Phone Adapter T-38 FOX</li>
                </ul>
              </p>
              <p>
                <b>Software Usage </b> <br></br>
                MATLAB is a high-level programming language and interactive
                environment developed by MathWorks. It is widely used in
                engineering, science, and mathematics for data analysis,
                algorithm development, modeling, simulation, and more. MATLAB
                stands for &quot;MATrix LABoratory,&quot; reflecting its primary
                focus on matrix computations.
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Lab508;
