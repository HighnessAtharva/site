import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import "./projects.css";

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
                Student {" "}
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
                Our Featured projects are selected through a rigorous process and uniquely created for each semester.
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col xs={12} sm={6}>
              <h2>SY EXTC 22-23</h2>
              <embed
                src="https://drive.google.com/file/d/19OfF4FVAE7XpBepBY6nmKmCuMeOkXFA4/preview"
                type="application/pdf"
                width="100%"
                height="350px"
              />
            </Col>
            <Col xs={12} sm={6}>
              <h2>SY ETRX 21-22</h2>
              <embed
                src="https://drive.google.com/file/d/1q1qePBgxRiSr0mTc6-mq4AAxEboZyrhc/preview"
                type="application/pdf"
                width="100%"
                height="350px"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              <h2>SE ETRX 20-21</h2>
              <embed
                src="https://drive.google.com/file/d/1JW_MesmUWIzyyJ7fD8UbmUsjZB5Yd0aR/preview"
                type="application/pdf"
                width="100%"
                height="350px"
              />
            </Col>
          </Row>  
          

          

          {/* MAJOR PROJECTS SECTION */}
          
          <Row>
            <Col xs={10} sm={6} className="mx-auto text-center course-title">
              <h1 className="text-capitalize">
                Student {" "}
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
                Our Featured projects are selected through a rigorous process and uniquely created for each semester.
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col xs={12} sm={6}>
              <h2>Project List 2018-19</h2>
              <embed
                src="https://drive.google.com/file/d/1OSGN6ENwVYZ4YWhhS3iVvqtAFZdgsf5L/preview"
                type="application/pdf"
                width="100%"
                height="350px"
              />
            </Col>
            <Col xs={12} sm={6}>
              <h2>Mentors BE ETRX 23-24</h2>
              <embed
                src="https://drive.google.com/file/d/17pxaCEE8URXzwEvE6YQ70VCmxjbY4iV2/preview"
                type="application/pdf"
                width="100%"
                height="350px"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              <h2>BE CAT1 + CAT2 20-21</h2>
              <embed
                src="https://drive.google.com/file/d/12j8ex9zhHCfjGnH1RgS7UAZPtklUg_-f/preview"
                type="application/pdf"
                width="100%"
                height="350px"
              />
            </Col>
         
            <Col xs={12} sm={6}>
              <h2>BE CAT1 + CAT2 2019-20</h2>
              <embed
                src="https://drive.google.com/file/d/18AFNPsocUwWLyhaEsWLZmDfvhLluvnqI/preview"
                type="application/pdf"
                width="100%"
                height="350px"
              />
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6}>
              <h2>B.Tech Details 2022_23 ETRX</h2>
              <embed
                src="https://drive.google.com/file/d/1YunkTvi3DGo1IYYf_2_jXkRMt9uh01Qf/preview"
                type="application/pdf"
                width="100%"
                height="350px"
              />
            </Col>
            <Col xs={12} sm={6}>
              <h2>BE Groups-AY 2021-22 CAT1</h2>
              <embed
                src="https://docs.google.com/spreadsheets/d/1POndDS-jGdQRIBfK5U5Z52Z0GNHzz8d6/preview"
                type="application/pdf"
                width="100%"
                height="350px"
              />
            </Col>
          </Row>

          <Row>{displayCourse}</Row>
          <Row>
            <Col className="mx-auto my-3" data-aos="zoom-in">
              <div className="text-center">
                <Button variant="danger">View More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default projects;
