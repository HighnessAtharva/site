import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./VisionAndMission.css";

class VisionAndMissionPage extends Component {
  render() {
    return (
      <>
        <div>
          <Container className="global-container text-center" fluid>
            <Row>
              <Col>
                <h3>UNDERGRADUATE PROGRAM</h3>
              </Col>
            </Row>
          </Container>
          <Container className="container-style">
            <h3 className="text-center mb-4">Vision</h3>
            <p
              style={{
                fontSize: "18px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <strong>
                “To be the leading Electronics and Telecommunication department,
                graduating professionally competent engineers with research
                aptitude and social sensitivity.”
              </strong>
            </p>
          </Container>
          <Container className="container-style">
            <h3 className="text-center mb-4">Mission</h3>
            <strong>
              <ul>
                <li>
                  To innovate constantly and adopt teaching, learning,
                  evaluation strategies to suit the learners, and ensure
                  academic and research conducive infrastructure.
                </li>
                <li>
                  To ensure fruitful collaborations with academia and industry
                  for excellence in academic and research.
                </li>
                <li>
                  To undertake the continuous value addition of faculty and
                  staff with suitable empowerment policies.
                </li>
                <li>
                  To inculcate sensitivity to societal issues, communication
                  skills and teamwork, lifelong learning attitude, and relevant
                  skills amongst the learners.
                </li>
                <li>
                  To implement the NEP recommendations to the spirit and ensure
                  the holistic, all-rounded development of the learners.
                </li>
              </ul>
            </strong>
          </Container>
          <Container className="container-style">
            <h3 className="text-center mb-4">
              Program Education Objectives (PEO)
            </h3>
            <p>Within three to four years of graduation:</p>
            <ul>
              <li>
                Establish themselves in their chosen career paths by
                demonstrating technical competence in design, analysis, and
                maintenance of electronics systems, signal processing,
                communication systems, computer network, etc.
              </li>
              <li>
                Demonstrate leadership, communication, and interpersonal skills,
                creativity and innovation, teamwork, and excellent project and
                finance management skills.
              </li>
              <li>
                Contribute towards the next generation of electronics
                technologies with creative and innovative practices.
              </li>
              <li>
                Demonstrate zeal towards lifelong learning, values, ethics,
                sensitivity to global problems, and prove to be dutiful citizens
                for society.
              </li>
            </ul>
          </Container>
          <Container className="container-style">
            <h3 className="text-center mb-4">Programme Outcomes (PO)</h3>
            <p>Engineering Graduates will be able to:</p>

            <ul>
              <li>
                <strong>PO1:</strong> Engineering Knowledge: apply knowledge of
                mathematics, science, engineering fundamentals and an
                engineering specialization to the solution of complex
                engineering problems.
              </li>
              <li>
                <strong>PO2:</strong> Problem Analysis: identify, formulate,
                review research literature, and analyze complex engineering
                problems reaching substantiated conclusions using first
                principles of mathematics, natural sciences, and engineering
                sciences.
              </li>
              <li>
                <strong>PO3:</strong> Design & Development of Solutions: design
                solutions for complex engineering problems and design system
                components or processes that meet the specified needs with
                appropriate consideration for the public health and safety, and
                the cultural, societal, and environmental considerations.
              </li>
              <li>
                <strong>PO4:</strong> Conduct Investigation of Complex Problems:
                Use research-based knowledge and research methods including
                design of experiments, analysis and interpretation of data, and
                synthesis of information to provide valid conclusions.
              </li>
              <li>
                <strong>PO5:</strong> Modern Tools Usage: create, select and
                apply appropriate techniques, resources, and modern engineering
                and IT tools including prediction and modeling to complex
                engineering activities with an understanding of the limitations.
              </li>
              <li>
                <strong>PO6:</strong> The Engineer and Society: apply reasoning
                informed by the contextual knowledge to assess societal, health,
                safety, legal and cultural issues and the consequent
                responsibilities relevant to the professional engineering
                practice.
              </li>
              <li>
                <strong>PO7:</strong> Environment & Sustainability: understand
                the impact of the professional engineering solutions in societal
                and environmental contexts, and demonstrate the knowledge of,
                and need for sustainable development.
              </li>
              <li>
                <strong>PO8:</strong> Ethics: apply ethical principles and
                commit to professional ethics and responsibilities and norms of
                engineering practice.
              </li>
              <li>
                <strong>PO9:</strong> Individual & Team work: function
                effectively as an individual and as a member or leader in
                diverse teams, and in multidisciplinary settings.
              </li>
              <li>
                <strong>PO10:</strong> Communication: communicate effectively on
                complex engineering activities with the engineering community
                and with society at large, such as, being able to comprehend and
                write effective reports and design documentation, make effective
                presentations, and give and receive clear instructions.
              </li>
              <li>
                <strong>PO11:</strong> Project management & Finance: demonstrate
                knowledge and understanding of the engineering and management
                principles and apply these to one’s own work, as a member and
                leader in a team, to manage projects and in multidisciplinary
                environments.
              </li>
              <li>
                <strong>PO12:</strong> Life-long Learning: recognize the need
                for, and have the preparation and ability to engage in
                independent and life-long learning in the broadest context of
                technological change.
              </li>
            </ul>
          </Container>
          <Container className="container-style">
            <h3 className="text-center mb-4">
              Programme Specific Outcomes (PSO)
            </h3>
            <p>At the end of the programme student will be able to:</p>
            <ul>
              <li>
                The ability to understand, analyze, design, prototype, maintain
                and troubleshoot circuits and systems in the domain of
                communication, signal processing, embedded and power
                electronics.
              </li>
              <li>
                The ability to demonstrate good communication skills, teamwork,
                project and finance management skills, sensitivity towards
                environment and society, and attitude of lifelong learning.
              </li>
            </ul>
          </Container>

          <Container className="container-style">
            <h3 className="text-center mb-4">
              Establish consistency of PEOs with Mission of the Department
            </h3>
            <p>
              Generate a “Mission of the Department – PEOs matrix “with
              justification and Rationale of the mapping
            </p>
            <table>
              <tr>
                <th>PEO/M</th>
                <th>M1</th>
                <th>M2</th>
                <th>M3</th>
                <th>M4</th>
                <th>M5</th>
              </tr>
              <tr>
                <td>
                  <b>PEO1</b>
                </td>
                <td>High</td>
                <td>High</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>
                  <b>PEO2</b>
                </td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>High</td>
                <td>High</td>
              </tr>
              <tr>
                <td>
                  <b>PEO3</b>
                </td>
                <td>Medium</td>
                <td>High</td>
                <td>High</td>
                <td>High</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>
                  <b>PEO4</b>
                </td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>High</td>
                <td>High</td>
              </tr>
            </table>
            <br />
            <p>
              Where: M1, M2, M3, M4 and M5 are five elements of Mission
              Statement and PEO1, PEO2, PEO3, PEO4 are Program Education
              Objectives statement.
              <br />
              Enter correlation levels 1, 2 or 3, where the correlation levels
              1, 2 or 3 as defined below:
              <br />
              <ol type="1" style={{ marginLeft: "50px" }}>
                <li>Slightly (Low)</li>
                <li>Moderately (Medium)</li>
                <li>Substantial (High)</li>
                <li>If there is no correlation, put “-“</li>
              </ol>
            </p>
          </Container>
        </div>
        <br />
        <div>
          <Container className="global-container text-center" fluid>
            <Row>
              <Col>
                <h3>POSTGRADUATE PROGRAM</h3>
              </Col>
            </Row>
          </Container>
          <Container className="container-style">
            <h3 className="text-center mb-4">Vision</h3>
            <p
              style={{
                fontSize: "18px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <strong>
                “To be the leading Electronics and Telecommunication department,
                graduating professionally competent engineers with research
                aptitude and social sensitivity.”
              </strong>
            </p>
          </Container>
          <Container className="container-style">
            <h3 className="text-center mb-4">Mission</h3>
            <strong>
              <ul>
                <li>
                  To innovate constantly and adopt teaching, learning,
                  evaluation strategies to suit the learners, and ensure
                  academic and research conducive infrastructure.
                </li>
                <li>
                  To ensure fruitful collaborations with academia and industry
                  for excellence in academic and research.
                </li>
                <li>
                  To undertake the continuous value addition of faculty and
                  staff with suitable empowerment policies.
                </li>
                <li>
                  To inculcate sensitivity to societal issues, communication
                  skills and teamwork, lifelong learning attitude, and relevant
                  skills amongst the learners.
                </li>
                <li>
                  To implement the NEP recommendations to the spirit and ensure
                  the holistic, all-rounded development of the learners.
                </li>
              </ul>
            </strong>
          </Container>
          <Container className="container-style">
            <h3 className="text-center mb-4">
              Program Education Objectives (PEO)
            </h3>
            <p>Within two years of post graduation:</p>
            <ul>
              <li>
                Employable in the diversified sectors of the core industry,
                public sector or Multinational Corporation in the domain of
                design, analysis and maintenance of electronics systems, signal
                processing, communication systems, computer network etc.
              </li>
              <li>
                Contribute towards the next generation of electronics
                technologies with creative and innovative practices.
              </li>
              <li>
                Competent with attitude towards lifelong learning, values,
                ethics, sensitivity to global problems and prove to be dutiful
                citizens for society.
              </li>
            </ul>
          </Container>
          <Container className="container-style">
            <h3 className="text-center mb-4">Programme Outcomes (PO)</h3>
            <p>Engineering Postgraduates will be able to:</p>

            <ul>
              <li>
                <strong>PO1:</strong> Independently carry out research
                /investigation and development work to solve practical problems.
              </li>
              <li>
                <strong>PO2:</strong> Write and present a substantial technical
                report/document.
              </li>
              <li>
                <strong>PO3:</strong> Demonstrate a degree of mastery over the
                area as per the specialization of the program. The mastery
                should be at a level higher than the requirements in the
                appropriate bachelor program.
              </li>
            </ul>
          </Container>

          <Container className="container-style">
            <h3 className="text-center mb-4">
              Establish consistency of PEOs with Mission of the Department
            </h3>
            <p>
              Generate a “Mission of the Department – PEOs matrix “with
              justification and Rationale of the mapping
            </p>
            <table>
              <tr>
                <th>PEO/M</th>
                <th>M1</th>
                <th>M2</th>
                <th>M3</th>
                <th>M4</th>
                <th>M5</th>
              </tr>
              <tr>
                <td>
                  <b>PEO1</b>
                </td>
                <td>High</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>
                  <b>PEO2</b>
                </td>
                <td>Medium</td>
                <td>High</td>
                <td>High</td>
                <td>Medium</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>
                  <b>PEO3</b>
                </td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>High</td>
                <td>High</td>
              </tr>
            </table>
            <br />
            <p>
              Where: M1, M2, M3, M4 and M5 are five elements of Mission
              Statement and PEO1, PEO2, PEO3 are Program Education Objectives
              statement.
              <br />
              Enter correlation levels 1, 2 or 3, where the correlation levels
              1, 2 or 3 as defined below:
              <br />
              <ol type="1" style={{ marginLeft: "50px" }}>
                <li>Slightly (Low)</li>
                <li>Moderately (Medium)</li>
                <li>Substantial (High)</li>
                <li>If there is no correlation, put “-“</li>
              </ol>
            </p>
          </Container>
        </div>
      </>
    );
  }
}

export default VisionAndMissionPage;
