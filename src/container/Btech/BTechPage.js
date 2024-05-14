import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BTech.css";

//pdf imports

import SEPDF from "../../pdfs/btech_timetable/SE_EXTC_ DIV A_B_ODD_2023-2024.pdf";
import TEPDF from "../../pdfs/btech_timetable/TE_EXTC_ DIV A_B_ODD_2023-2024.pdf";
import labPDF from "../../pdfs/btech_timetable/LAB.pdf";
import EXTCPDF from "../../pdfs/btech_timetable/BE _EXTC_ETRX_ODD_2023-2024.pdf";

import EXTC_Syllabus_SEM_III from "../../pdfs/btech_syllabus/UG_Syllabus_2021-22_EXTC_Sem_III-IV.pdf"
import EXTC_Syllabus_SEM_V from "../../pdfs/btech_syllabus/UG_Syllabus_2021-22_EXTC_Sem_V-VI.pdf"
import EXTC_Syllabus_SEM_VII from "../../pdfs/btech_syllabus/UG_Syllabus_2021-22_EXTC_Sem_VII-VIII.pdf"
import EXTC_SE_Syllabus from  "../../pdfs/btech_syllabus/SE_EXTC_Syllabus.pdf"
import EXTC_Scheme from  "../../pdfs/btech_syllabus/BTECH_EXTC_2021-2025_Scheme_modified.pdf";


class BTech extends Component {
  render() {
    return (
      <section >
        <Container className="global-container text-center" fluid>
            <Row>
              <Col>
                <h3>B.Tech PROGRAM</h3>
              </Col>
            </Row>
          </Container>
        <Container>
          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center course-title">
              
              <p
                style={{
                  borderTop: "3px solid white",
                  width: 70,
                  marginTop: 20,
                }}
              ></p>
              <p data-aos="fade-up">
                Our Featured BTech programs are selected through a rigorous process and uniquely created for each semester.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="btech-container">
                <div className="btech-item">
                <h3 className="text-capitalize text-center mb-4 mt-4">Timetable</h3>
                  <ul>
                    {/* <li><a href={labPDF} target="_blank"><h2>LAB Timetable</h2></a></li> */}

                    <li><a href={SEPDF} target="_blank"><h2>SE Term 2 2023-24</h2></a></li>
                    <li><a href={TEPDF} target="_blank"><h2>TE Term 2 2023-24</h2></a></li>
                    <li><a href={EXTCPDF} target="_blank"><h2>BE Term 2 2023-24</h2></a></li>
                  </ul>
                </div>
                <div className="btech-item">
                <h3 className="text-capitalize text-center mb-4 mt-4">Syllabus</h3>
                  <ul>
                  <li><a href={EXTC_Syllabus_SEM_III} target="_blank"><h2>FE Class (EXTC 2021-2025)</h2></a></li>
                    <li><a href={EXTC_SE_Syllabus} target="_blank"><h2>SE Class (EXTC 2021-2025)</h2></a></li>
                  <li><a href={EXTC_Syllabus_SEM_V} target="_blank"><h2>TE Class (EXTC 2021-2025)</h2></a></li>
                    <li><a href={EXTC_Syllabus_SEM_VII} target="_blank"><h2>BE Class (EXTC 2021-2025)</h2></a></li>
                    <li><a href={EXTC_Scheme} target="_blank"><h2>Curriculum Scheme (EXTC 2021-2025)</h2></a></li>
                    </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default BTech;
