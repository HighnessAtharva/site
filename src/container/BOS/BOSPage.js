import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BOS.css";

//pdf imports

import BOS1718 from "../../pdfs/bos/BoS_2017-18.pdf";
import BOS1819 from "../../pdfs/bos/BoS_2018-19.pdf";
import BOS1920 from "../../pdfs/bos/BoS_2019-20.pdf";
import BOS2021 from "../../pdfs/bos/BoS_2020-21.pdf";
import BOS2122 from "../../pdfs/bos/BoS_2021-22.pdf";
import BOS2223 from "../../pdfs/bos/BoS_2022-23.pdf";
import BOS2324 from "../../pdfs/bos/BoS_2023-24.pdf";


class BOS extends Component {
  render() {
    return (
      <section id="BTech" className="BTech py-5">
        <Container>
          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center course-title">
              <h1 className="text-capitalize">
                <strong style={{ color: "brown" }}>Board of Studies </strong>
              </h1>
              <p
                style={{
                  borderTop: "3px solid white",
                  width: 70,
                  marginTop: 20,
                }}
              ></p>
              {/* <p data-aos="fade-up">
                Our Featured BTech programs are selected through a rigorous process and uniquely created for each semester.
              </p> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="btech-container">
                <div className="btech-item">
                  {/* <h1>Timetable</h1> */}
                  <ul>
                    <li><a href={BOS2324} target="_blank"><h2>Board of Studies 2023-24</h2></a></li>
                    <li><a href={BOS2223} target="_blank"><h2>Board of Studies 2022-23</h2></a></li>
                    <li><a href={BOS2122} target="_blank"><h2>Board of Studies 2021-22</h2></a></li>
                    <li><a href={BOS2021} target="_blank"><h2>Board of Studies 2020-21</h2></a></li>
                    <li><a href={BOS1920} target="_blank"><h2>Board of Studies 2019-20</h2></a></li>
                    <li><a href={BOS1819} target="_blank"><h2>Board of Studies 2018-19</h2></a></li>
                    <li><a href={BOS1718} target="_blank"><h2>Board of Studies 2017-18</h2></a></li>
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

export default BOS;
