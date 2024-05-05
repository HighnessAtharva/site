import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "./projects.css";

// MINI PROJECTS PDF IMPORTS
import SY_ETRX_20_21_pdf from "../../pdfs/mini_projects/Mini Project-SY ETRX 20-21.pdf";
import SY_ETRX_21_22_pdf from "../../pdfs/mini_projects/Mini Project-SY ETRX 21-22.pdf";
import EXTC_20_21_pdf from "../../pdfs/mini_projects/Mini Project EXTC 20-21.pdf";
import EXTC_21_22_pdf from "../../pdfs/mini_projects/Mini Project EXTC 21-22.pdf";
import SY_EXTC_22_23_pdf from "../../pdfs/mini_projects/Mini Project-SY EXTC 22-23.pdf";
import MiniProject_23_24_pdf from "../../pdfs/mini_projects/Mini Project 23-24.pdf";

// MAJOR PROJECTS PDF IMPORTS
import ETRX_Major_18_19_pdf from "../../pdfs/major_projects/Major Project ETRX 2018-19.pdf";
import ETRX_Major_19_20_pdf from "../../pdfs/major_projects/Major Project ETRX 2019-20.pdf";
import ETRX_Major_20_21_pdf from "../../pdfs/major_projects/Major Project ETRX 2020-21.pdf";
import ETRX_Major_21_22_xls from "../../pdfs/major_projects/Major Project ETRX 2021-22.xlsx";
import ETRX_Major_22_23_pdf from "../../pdfs/major_projects/Major Project ETRX 2022-23.pdf";
import ETRX_Major_23_24_pdf from "../../pdfs/major_projects/Major Project ETRX 2023-24.pdf";

import EXTC_Major_16_17_pdf from "../../pdfs/major_projects/Major Project EXTC 2016-17.pdf";
import EXTC_Major_17_18_pdf from "../../pdfs/major_projects/Major Project EXTC 2017-18.pdf";
import EXTC_Major_18_19_pdf from "../../pdfs/major_projects/Major Project EXTC 2018-19.pdf";
import EXTC_Major_19_20_pdf from "../../pdfs/major_projects/Major Project EXTC 2019-20.pdf";
import EXTC_Major_20_21_pdf from "../../pdfs/major_projects/Major Project EXTC 2020-21.pdf";
import EXTC_Major_21_22_pdf from "../../pdfs/major_projects/Major Project EXTC 2021-22.pdf";
import EXTC_Major_23_24_pdf from "../../pdfs/major_projects/Major Project EXTC 2023-24.pdf";



import PhotoGallery from "../gallery/MiniProjectGallery";

export class projects extends Component {
  render() {
    const displayCourse = ["course01", "course02", "course03"].map(
      (course, index) => (
        <Col
          xs={10}
          sm={6}
          lg={4}
          className="course-item mx-auto my-3"
          key={course + index}
          data-aos="fade-up"
        >
          <Card className="course-card">
            <div className="img-container">
              <Card.Img variant="top" src={course01} className="course-img" />
              <span className="course-item-icon">
                <i className="fas fa-star"></i>
              </span>
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
                <Button variant="primary text-center">Register</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )
    );

    return (
      <section id="projects" className="projects">
        <Container>
          {/* MINI PROJECTS SECTION */}
          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center course-title">
              <h3 className="text-capitalize text-center mb-4 mt-4">MINI PROJECTS</h3>
              <p className="text-muted" style={{ minWidth: "100%" }} data-aos="fade-up">
                Our Featured projects are selected through a rigorous process and uniquely created for each semester.
              </p>
            </Col>
          </Row>

          <PhotoGallery />
          <br /><br />
          <ul>
            <li>
              <a href={MiniProject_23_24_pdf} target="_blank">
                <h2>MINI PROJECT 2023-24</h2>
              </a>
            </li>
            <li>
              <a href={SY_EXTC_22_23_pdf} target="_blank">
                <h2>MINI PROJECT 2022-23 (EXTC)</h2>
              </a>
            </li>
            <li>
              <a href={EXTC_21_22_pdf} target="_blank">
                <h2>MINI PROJECT 2021-22 (EXTC)</h2>
              </a>
            </li>
            <li>
              <a href={SY_ETRX_21_22_pdf} target="_blank">
                <h2>MINI PROJECT 2021-22 (ETRX)</h2>
              </a>
            </li>
            <li>
              <a href={EXTC_20_21_pdf} target="_blank">
                <h2>MINI PROJECT 2020-21 (EXTC)</h2>
              </a>
            </li>
            <li>
              <a href={SY_ETRX_20_21_pdf} target="_blank">
                <h2>MINI PROJECT 2020-21 (ETRX)</h2>
              </a>
            </li>
          </ul>

          {/* MAJOR PROJECTS SECTION */}

          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center course-title">
              <h3 className="text-capitalize text-center mb-4 mt-4">MAJOR PROJECTS</h3>
              <p
                style={{
                  borderTop: "3px solid white",
                  width: 70,
                  marginTop: 20,
                }}
              ></p>
              <p className="text-muted" data-aos="fade-up">
                Our Featured projects are selected through a rigorous process
                and uniquely created for each semester.
              </p>
            </Col>
          </Row>

          <ul>
            <li>
              <a href={EXTC_Major_23_24_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2023-24 (EXTC)</h2>
              </a>
            </li>
            <li>
              <a href={ETRX_Major_23_24_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2023-24 (ETRX)</h2>
              </a>
            </li>
            <li>
              <a href={ETRX_Major_22_23_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2022-23 (ETRX) </h2>
              </a>
            </li>
            <li>
              <a href={EXTC_Major_21_22_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2021-22 (EXTC)</h2>
              </a>
            </li>
            <li>
              <a href={ETRX_Major_21_22_xls} target="_blank">
                <h2>MAJOR PROJECTS LIST 2021-22 (ETRX)</h2>
              </a>
            </li>
            <li>
              <a href={EXTC_Major_20_21_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2020-21 (EXTC)</h2>
              </a>
            </li>
            <li>
              <a href={ETRX_Major_20_21_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2020-21 (ETRX)</h2>
              </a>
            </li>
            <li>
              <a href={EXTC_Major_19_20_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2019-20 (EXTC)</h2>
              </a>
            </li>
            <li>
              <a href={ETRX_Major_19_20_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2019-20 (ETRX)</h2>
              </a>
            </li>
            <li>
              <a href={EXTC_Major_18_19_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2018-19 (EXTC)</h2>
              </a>
            </li>
            <li>
              <a href={ETRX_Major_18_19_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2018-19 (ETRX)</h2>
              </a>
            </li>
            <li>
              <a href={EXTC_Major_17_18_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2017-16 (EXTC)</h2>
              </a>
            </li>
            <li>
              <a href={EXTC_Major_16_17_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2016-17 (EXTC)</h2>
              </a>
            </li>
          </ul>

        </Container>
      </section>
    );
  }
}

export default projects;
