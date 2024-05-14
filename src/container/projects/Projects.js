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
import EXTC_Major_22_23_pdf from "../../pdfs/major_projects/Major Project EXTC 2022-23.pdf";
import EXTC_Major_23_24_pdf from "../../pdfs/major_projects/Major Project EXTC 2023-24.pdf";

import ProjectReportTemplate from "../../pdfs/project_guidelines/ProjectTemplate.zip";
import PhD_Synopsis_Template from "../../pdfs/project_guidelines/phd_synopsis_template.zip";
import ME_Thesis_Template from "../../pdfs/project_guidelines/ME-Thesis-template_Miktex.zip";
import FYP_Handbook from "../../pdfs/project_guidelines/BE-EXTC_FYP.pdf";
import ME_Project_Presentation_Template from "../../pdfs/project_guidelines/ME_Project-Special-topic-presentation_template.ppt";

import MiniProjectGallery from "../gallery/MiniProjectGallery";
import MajorProjectGallery from "../gallery/MajorProjectGallery";

export class projects extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>STUDENT PROJECTS</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          {/* MINI PROJECTS SECTION */}
          <h3 className="text-capitalize text-center mb-4 mt-4">
            MINI PROJECTS
          </h3>
          <Card className="mt-2">
            <Card.Body>
              {" "}
              <MiniProjectGallery />
              <br />
              <br />
              <ul style={{ marginLeft: "50px" }}>
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
            </Card.Body>
          </Card>

          {/* MAJOR PROJECTS SECTION */}
          <h3 className="text-capitalize text-center mb-4 mt-4">
            MAJOR PROJECTS
          </h3>
          <Card>
            <Card.Body>
              <MajorProjectGallery />
              <br />
              <br />
              <ul style={{ marginLeft: "50px" }}>
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
                  <a href={EXTC_Major_22_23_pdf} target="_blank">
                    <h2>MAJOR PROJECTS LIST 2022-23 (EXTC)</h2>
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
            </Card.Body>
          </Card>

          {/* PROJECT GUIDELINES SECTION */}
          <h3 className="text-capitalize text-center mb-4 mt-4">
            Guidelines for Project
          </h3>
          <Card>
            <Card.Body>
              <p>
                The following file consists of a number of examples how to use
                LaTeX for writing assignment, B.E., M.E. synopsis, B.E., M.E.
                reports, Ph.D title to Ph.D thesis, conference, journal and
                transactions paper writing and presentation.
              </p>
              <ul style={{ marginLeft: "50px" }}>
                <li>
                  <a href={ProjectReportTemplate} target="_blank">
                    <h2>
                      Template for Project Report / Paper Writing / Assignment
                    </h2>
                  </a>
                </li>
                <li>
                  <a href={PhD_Synopsis_Template} target="_blank">
                    <h2>PhD Synopsis Template</h2>
                  </a>
                </li>
                <li>
                  <a href={ME_Thesis_Template} target="_blank">
                    <h2>M.E. Thesis Template</h2>
                  </a>
                </li>
                <li>
                  <a href={FYP_Handbook} target="_blank">
                    <h2>Final Year Project Hand Book</h2>
                  </a>
                </li>
                <li>
                  <a href={ME_Project_Presentation_Template} target="_blank">
                    <h2>M.E. Project Special Topic Presentation Template</h2>
                  </a>
                </li>
                <li>
                  <a href="https://youtu.be/U7Sg1IOh0VA" target="_blank">
                    <h2>Dos and Don'ts in Technical Writing</h2>
                  </a>
                </li>
                <li>
                  <a href="https://youtu.be/0J_eEZTacrg" target="_blank">
                    <h2>Tips for Technical Presentation</h2>
                  </a>
                </li>
                <li>
                  <a href="https://youtu.be/Kwv4lON6hHA" target="_blank">
                    <h2>Why Latex</h2>
                  </a>
                </li>
                <li>
                  <a href="https://youtu.be/99vjiM7nQAw" target="_blank">
                    <h2>Linux Commands</h2>
                  </a>
                </li>
                <li>
                  <a href="https://youtu.be/vheyby-eDJU" target="_blank">
                    <h2>How to write Technical Document using Latex</h2>
                  </a>
                </li>
                <li>
                  <a href="https://youtu.be/7W87A77doUI" target="_blank">
                    <h2>
                      How to Write Conference and Journal Papers using Latex
                    </h2>
                  </a>
                </li>
                <li>
                  <a href="https://youtu.be/Q-IOIpOmPjI" target="_blank">
                    <h2>
                      How to prepare presentation slides using latex and the
                      features of Xfig and Xmgrace tools
                    </h2>
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default projects;
