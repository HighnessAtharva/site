import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import college from "../../images/spit-logo.jpg";
import "./about.css";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <section
        className="about py-5"
        id="about"
        style={{ backgroundColor: "#fff" }}
      >
        <Container>
          {/* <Row>
            <Col xs={10} lg={8} md={6} className="mx-auto my-5">
              <h1 className="text-capitalize">
                about  <br />
                <strong className="banner-title">University</strong>
              </h1>
              <p
                className="my-4 text-muted w-75 about-text"
                data-aos="fade-right"
              >
                The B.E. Electronics and Telecommunications Engineering is a
                comprehensive four-year program that imparts a well-rounded
                education and a strong foundation in electronics,
                communications, computing, and engineering sciences. Established
                in 2005, the department initiated the Electronics &
                Telecommunication Engineering Course with an intake of 60
                students and later introduced M.E. (EXTC) in 2010 with 18
                students. The faculty, equipped with high qualifications and
                professional expertise, conducts training programs covering
                Network Administration, Communication, Design & Optimization,
                Network Security, Embedded Systems, Real-time DSP applications,
                VLSI design, and RTOS. The department collaborates with
                companies like Tata Consultancy Services and Sony Ericsson India
                Ltd through MoUs to enhance students' technical knowledge.
                Faculty members actively engage in R&D, publishing research in
                prestigious international journals and conferences such as IEEE,
                IET, AIP, ASP, Elsevier, etc. Students stay informed through
                organizations like IEEE, IETE, and F.E.T.S. Graduates find
                opportunities in communication, networking, and
                technology-driven fields. Companies such as Sony Ericsson India
                Ltd, CISCO, Microsoft, IBM, Deloitte, L&T, Tech Mahindra,
                Infosys, etc., recruit our students on campus.
              </p>
              <a
                href="/about"
                className="btn btn-outline-primary text-uppercase learn-more"
                data-aos="fade-right"
              >
                <Link to="/about">learn more</Link>
                <span>
                  <i
                    style={{ marginLeft: 10 }}
                    className="fas fa-arrow-right"
                  ></i>
                </span>
              </a>
            </Col>
            <Col
              xs={10}
              lg={4}
              md={6}
              className="mx-auto my-5 align-self-center"
              data-aos="fade-in"
            >
              <div className="about-img_container">
                <Image src={college} fluid />
              </div>
            </Col>
          </Row> */}

          <Card className="card-style">
            <h1>About</h1>
            <p>
              The B.E. Electronics and Telecommunications Engineering is a
              comprehensive four-year program that imparts a well-rounded
              education and a strong foundation in electronics, communications,
              computing, and engineering sciences. Established in 2005, the
              department initiated the Electronics & Telecommunication
              Engineering Course with an intake of 60 students and later
              introduced M.E. (EXTC) in 2010 with 18 students. The faculty,
              equipped with high qualifications and professional expertise,
              conducts training programs covering Network Administration,
              Communication, Design & Optimization, Network Security, Embedded
              Systems, Real-time DSP applications, VLSI design, and RTOS. The
              department collaborates with companies like Tata Consultancy
              Services and Sony Ericsson India Ltd through MoUs to enhance
              students' technical knowledge. Faculty members actively engage in
              R&D, publishing research in prestigious international journals and
              conferences such as IEEE, IET, AIP, ASP, Elsevier, etc. Students
              stay informed through organizations like IEEE, IETE, and F.E.T.S.
              Graduates find opportunities in communication, networking, and
              technology-driven fields. Companies such as Sony Ericsson India
              Ltd, CISCO, Microsoft, IBM, Deloitte, L&T, Tech Mahindra, Infosys,
              etc., recruit our students on campus.
            </p>
          </Card>
          <Card className="card-style">
            <h1>From HOD's Desk</h1>
           
            <p>
              The Department of Electronics and telecommunication was
              established in 2005 which offers B. Tech. degree in Electronics
              and Telecommunications Engineering with a dream to provide a broad
              liberal education as well as to impart both knowledge, and skills
              to strengthen the foundation in engineering sciences, mathematical
              and scientific fundamentals and to gain expertise in various
              domains of electronics, communications, computing. This dream
              achieved a new pedestal when the first batch of students of
              Masters in Electronics and Telecommunications Engineering started
              in the academic year 2010 with an intake of 18 students. The
              department is currently scaling new heights with the launch of a
              Ph.D. program in 2012.
            </p>
            <p>
              The National Board of Accreditation accredited the department in
              2013, 2017 and 2021. Department adopted the philosophy of ‘Outcome
              Based Education.’ It comprises highly qualified and professionally
              skilled faculty members with an impressive record of the published
              work. Department associated senior professionals from industry as
              an adjunct faculty. Department has offered curriculum which
              encourage holistic development of student. Department has an
              exclusive library with 1000+ books and access to services like
              NPTEL. The Laboratories are equipped with standard equipment’s &
              accessories from best manufacturers and industry grade tools like
              HFSS, VNA, EMI/EMC Measurement tool, LabView, HDL, KEIL
              Professional Licenses, DSP Application software etc. Some of the
              laboratories have advanced hardware and demonstration setups like
              Mechatronics Toolkit, Biomedical Instrumentation Toolkit, Robot
              Models, Trainers, Microcontroller/ FPGA/CPLD prototype boards etc.
              Department faculties are rigorously involved in R&D activities.
              The department has signed MoU with companies like Tata Consultancy
              Services, Sony Ericsson India Ltd for research collaboration,
              training and lab development and significantly improve technical
              knowledge and skills of students. Their research work is published
              in reputed international journals like IEEE, IET, AIP, ASP,
              Elsevier, Wiley, IETE etc. and also in international conferences.
              The faculty members conduct training programs in the various areas
              of engineering such as Communication, Design & Optimization,
              Network Security, Embedded Systems, Real-time DSP applications,
              VLSI design and Real Time Operating Systems.
            </p>
            <p>
              Department also encourages entrepreneur activities for students to
              learn fundamentals of business to build their own startups.
              Faculties of our department are exclusively involved with AICTE
              Idea Lab, Incubation Centre and E-Cell activities. Furthermore, in
              order to promote co- curricular activities in students, department
              has strong association with different professional bodies like
              Institute of Electrical and Electronics Engineering (IEEE), 
              Indian Society of Technical Education (ISTE), IETE and department
              has its own student council named as Forum of Electronics and
              Telecommunication Student Association. Projects done by students
              are appreciated at various national level competitions like ARM
              Design Contest, Hackathon, Mitsubhishi Contest, Texas Instruments
              Innovation Challenges and many more. Graduates of our department
              have been recruited by communications and networking companies,
              and in technology-driven fields such as financial services and
              consulting practices in which computing and information management
              are central to the operation of the enterprise. Our students are
              recruited on campus by companies like Sony Ericsson India Ltd,
              CISCO, Microsoft, IBM, Deloitte, L&T, Tech Mahindra, Infosys, etc.
              Electronics and Telecommunication department students are very
              active in curricular, extra-curricular activities, sports,
              technical, non-technical activities.
            </p>
          </Card>
        </Container>
      </section>
    );
  }
}

export default About;
