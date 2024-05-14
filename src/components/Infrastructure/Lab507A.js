import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGallery507 from "../../container/gallery/LabGallery507";

class Lab507A extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">Lab 507</h3>

        <Card className="mt-2">
          <Card.Body>
            <LabGallery507 />
            <br /> <br />
            <div>
              <h6>Lab location: 5th Floor, Room No. 507-A</h6>
              <h6>Area of the lab in carpet: 66 sq. mtrs</h6>
              <h6>
                Approximate Cost of the equipments in the lab: Rs. 6,91,720/-
              </h6>
              <br></br>
              <h6>Name of the Lab Incharge:- Prof. Manish Parmar</h6>
              <h6>Name of the Technical Asst.: Mrs. Kirti More</h6>
              <br></br>

              <p>
                <b>Total Desktop for Students: </b> 11
              </p>
              <p>
                <b>Configuration</b> <br></br>
                <ul style={{ marginLeft: "50px" }}>
                  <li>Lenovo M720e desktop Intel i5</li>
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
                    Ansys Acadmic Research HF-1 Task Ansoft Desingner (RF &amp;
                    SI),
                  </li>
                  <li>HFSS</li>
                  <li>Slwave</li>
                  <li>Q3D Extracror</li>
                  <li>Optimetrics</li>
                  <li>ECAD Translators (Ansoft Links)</li>
                  <li>MCAD Translators (Perpetual License)</li>
                </ul>
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Lab507A;
