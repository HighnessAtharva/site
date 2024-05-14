import React, { Component } from "react";
import "./Infrastructure.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class InfrastructurePage extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>INFRASTRUCTURE</h3>
            </Col>
          </Row>
        </Container>

        <Container>
          <h3 className="text-capitalize text-center mb-4 mt-4">LABS</h3>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/x5Lsr9y/205.png"
                  className="img-fluid labBannerImg"
                />
                <Card.Body>
                  <Card.Title>205: Digital Signal Processing Lab</Card.Title>
                  <Link
                    to="/Lab205"
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
                  src="https://i.ibb.co/KXhy7SC/206.png"
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
                  src="https://i.ibb.co/jLJsdfP/Embedded-System.png"
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
                  src="https://i.ibb.co/zPs0W8G/208.png"
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
                  src="https://i.ibb.co/KxRdqvJ/img2.png"
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
                  src="https://i.ibb.co/b7TbfCq/09.png"
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
                  src="https://i.ibb.co/vZZB9md/213.png"
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
                  src="https://i.ibb.co/fXNyktM/eee.png"
                  className="img-fluid labBannerImg"
                />
                <Card.Body>
                  <Card.Title>
                    311: Basic Electrical & Electronics Lab
                  </Card.Title>
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
                  src="https://i.ibb.co/jy9C901/207.png"
                  className="img-fluid labBannerImg"
                />
                <Card.Body>
                  <Card.Title>502: Digital System Laboratory</Card.Title>
                  <Link
                    to="/Lab502"
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
                  src="https://i.ibb.co/9wj6J8L/img.png"
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
                  src="https://i.ibb.co/X5HF4K5/211.png"
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
                  src="https://i.ibb.co/Mp2PFyV/212.png"
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
                  src="https://i.ibb.co/8PXDdFt/210.png"
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

          <h3 className="text-capitalize text-center mb-4 mt-4">CLASSROOMS</h3>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/GC9mmkd/c12.png"
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
                  src="https://i.ibb.co/7QCL7tQ/c11.png"
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
      </>
    );
  }
}

export default InfrastructurePage;
