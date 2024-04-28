import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "./projects.css";

// MINI PROJECTS PDF IMPORTS
import SY_ETRX_20_21_pdf from "../../pdfs/mini_projects/Mini Project-SY ETRX 20-21.pdf";
import SY_ETRX_21_22_pdf from "../../pdfs/mini_projects/Mini Project-SY ETRX 21-22.pdf";
import SY_EXTC_22_23_pdf from "../../pdfs/mini_projects/Mini Project-SY EXTC 22-23.pdf";

// MAJOR PROJECTS PDF IMPORTS
import BTech22_23_ETRX_pdf from "../../pdfs/major_projects/B.Tech Project Details 2022_23 ETRX.pdf";
import BE_19_20_pdf from "../../pdfs/major_projects/BE PROJECT CAT 1 and CAT 2 2019-20.pdf";
import BE_20_21_pdf from "../../pdfs/major_projects/BE PROJECT CAT 1 and CAT 2 2020-21.pdf";
import BE_ETRX_20_21_pdf from "../../pdfs/major_projects/Major Project_Mentor Allocation-BE ETRX-23-24.pdf";
import ProjectList_18_19_pdf from "../../pdfs/major_projects/Project List 2018-19.pdf";
import BE_Groups_21_22_xls from "../../pdfs/major_projects/BE Project Groups-AY 2021-22(CAT 1).xlsx";

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
      <section id="projects" className="projects py-5">
        <Container>
          {/* MINI PROJECTS SECTION */}

          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center course-title">
              <h1 className="text-capitalize">
                <strong style={{ color: "brown" }}>Mini Projects</strong>
              </h1>
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
              <a href={SY_EXTC_22_23_pdf} target="_blank">
                <h2>MINI PROJECT 2022-23 </h2>
              </a>
            </li>

            <li>
              <a href={SY_ETRX_21_22_pdf} target="_blank">
                <h2>MINI PROJECT 2021-22</h2>
              </a>
            </li>
            <li>
              <a href={SY_ETRX_20_21_pdf} target="_blank">
                <h2>MINI PROJECT 2020-21</h2>
              </a>
            </li>
          </ul>

          {/* MAJOR PROJECTS SECTION */}

          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center course-title">
              <h1 className="text-capitalize">
                <strong style={{ color: "brown" }}>Major Projects</strong>
              </h1>
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
              <a href={BE_ETRX_20_21_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2023-24</h2>
              </a>
            </li>

            <li>
              <a href={BTech22_23_ETRX_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2022-23 </h2>
              </a>
            </li>
            <li>
              <a href={BE_Groups_21_22_xls} target="_blank">
                <h2>MAJOR PROJECTS LIST 2021-22</h2>
              </a>
            </li>

            <li>
              <a href={BE_20_21_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2020-21</h2>
              </a>
            </li>

            <li>
              <a href={BE_19_20_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2019-20</h2>
              </a>
            </li>

            <li>
              <a href={ProjectList_18_19_pdf} target="_blank">
                <h2>MAJOR PROJECTS LIST 2018-19</h2>
              </a>
            </li>
          </ul>
          {/* <Row>{displayCourse}</Row>
          <Row>
            <Col className="mx-auto my-3" data-aos="zoom-in">
              <div className="text-center">
                <Button variant="danger">View More</Button>
              </div>
            </Col>
          </Row> */}
        </Container>
      </section>
    );
  }
}

export default projects;
