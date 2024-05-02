import React, { Component } from "react";
import "./Infrastructure.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class InfrastructurePage extends Component {
  render() {
    return (
      <Container>
        <h1>Infrastructure (Labs)</h1>
        <Row xs={1} md={2} className="g-4">
        <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.psyec.edu.in/assets/img/cover/eee.webp"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>205: Digital Signal Processing Lab</Card.Title>
                <Link
                  to="/Lab"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Lab
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.psyec.edu.in/assets/img/cover/eee.webp"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>206: Instrumentation Lab</Card.Title>
                <Link
                  to="/instrumentationLab"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Lab
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.spiceworks.com/wp-content/uploads/2023/10/12102017/Embedded-System.jpg"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>301: Embedded Systems Lab</Card.Title>
                <Link
                  to="/EmbeddedSystem"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Lab
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://nsfgradfellows.org/wp-content/uploads/2021/07/AdobeStock_67901546-2-750x400.jpg"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>303: VLSI Lab</Card.Title>
                <Link
                  to="/VLSILab"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Lab
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.shutterstock.com/image-photo/electronic-circuit-board-digital-information-600nw-755896279.jpg"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>304: Analog Circuit Lab</Card.Title>
                <Link
                  to="/analogCircuitLab"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Lab
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://nsfgradfellows.org/wp-content/uploads/2021/07/AdobeStock_67901546-2-750x400.jpg"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>306: Electronics & Devices Lab</Card.Title>
                <Link
                  to="/ElectronicsDeviceLab"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Lab
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.psyec.edu.in/assets/img/cover/eee.webp"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>310: Research Lab</Card.Title>
                <Link
                  to="/researchLab"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Lab
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.psyec.edu.in/assets/img/cover/eee.webp"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>311: Basic Electrical & Electronics Lab</Card.Title>
                <Link
                  to="/beeLab"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Lab
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://nsfgradfellows.org/wp-content/uploads/2021/07/AdobeStock_67901546-2-750x400.jpg"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>
                  503: Computer Communication Networking Lab
                </Card.Title>
                <Link
                  to="/CompCommNetwork"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Lab
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://nsfgradfellows.org/wp-content/uploads/2021/07/AdobeStock_67901546-2-750x400.jpg"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>
                  504: Microwave and Fiber Optic Communication Lab
                </Card.Title>
                <Link
                  to="/fiberOpticLab"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Lab
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.psyec.edu.in/assets/img/cover/eee.webp"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>507: Practical Lab</Card.Title>
                <Link
                  to="/Lab507"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Lab
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.psyec.edu.in/assets/img/cover/eee.webp"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>508: Project Lab</Card.Title>
                <Link
                  to="/Lab508"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Lab
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h1>Infrastructure (Classrooms)</h1>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.psyec.edu.in/assets/img/cover/eee.webp"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>203: Classroom</Card.Title>
                <Link
                  to="/Class203"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Class
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.psyec.edu.in/assets/img/cover/eee.webp"
                className="img-fluid labBannerImg"
              />
              <Card.Body>
                <Card.Title>509: Classroom</Card.Title>
                <Link
                  to="/Class509"
                  className="btn btn-success"
                  style={{ marginLeft: "40%" }}
                >
                  Go to Class
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default InfrastructurePage;
