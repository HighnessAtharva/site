import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Placements.css";
import BannerImg from "./companies.png";
class StudentPlacements extends Component {
  render() {
    const recruiters = [
      "KPMG",
      "Deloitte",
      "Dolat Capital",
      "Reliance Industries",
      "Quantiphi",
      "PwC",
      "Oracle Finance",
      "MSCI",
      "LTI L1",
      "ICICI Lombard",
      "Kiotel (Potential PPO)",
      "JPMC(IB)",
      "JPMC(CADP) PPO",
      "EY",
      "ZS Associates",
      "Amdocs",
      "ARP Invest",
      "ISS",
      "GEP",
      "WorkIndia",
      "Nomura PPO",
      "IDfy",
      "Reliance Jio",
      "Infosys",
      "Deutsche Bank",
      "Capgemini",
      "Oracle",
      "Morgan Stanley",
      "Siemens",
      "Interactive Brokers",
    ];

    const placementStatistics = [
      { academicYear: "2022-23", appeared: 54, placed: 54, percentage: "100%" },
      { academicYear: "2021-22", appeared: 54, placed: 54, percentage: "100%" },
      { academicYear: "2020-21", appeared: 69, placed: 68, percentage: "99%" },
      { academicYear: "2019-20", appeared: 49, placed: 49, percentage: "100%" },
      { academicYear: "2018-19", appeared: 47, placed: 47, percentage: "100%" },
    ];

    const placementData = [
      {
        year: "2022-23",
        profiles: [
          {
            profile: "M.S./MTech",
            percentage: "13.6%",
            details:
              "University of Massachusetts, Amherst; IIM, Kozhikode; University of California Los Angeles; The Pennsylvania State University; University of Southern California University of Wisconsin-Madison; University of Illinois Urbana Champaign; New York University; University of Southern California; University of Illinois Urbana Champaign; S.P.I.T",
          },
          {
            profile: "Job",
            percentage: "76.5%",
            details:
              "Deutsche Bank, ICICI Lombard, Quantiphi, Colgate, BNP Paribas, Baker Hughes, JPMC, Nomura, ISS, LTI, Workindia",
          },
        ],
      },
      {
        year: "2021-22",
        profiles: [
          {
            profile: "M.S./MTech",
            percentage: "17.4%",
            details:
              "Oklahoma State University; Technical University of Munich; University of Pennsylvania; ETH Zurich; BITS School of Management; University of Southern California ; Illinois Institute of Technology ; Virginia Tech",
          },
          {
            profile: "Job",
            percentage: "78%",
            details:
              "KPMG; Quantiphi; MSCI; JPMC; ZS; GEP; Deloitte; Amdocs; WorkIndia; Dolat Capital; ICICI Lombard; Nomura PPO; Reliance Industries; Oracle Finance; Embedos",
          },
        ],
      },
      {
        year: "2020-21",
        profiles: [
          {
            profile: "M.S./MTech",
            percentage: "18.5%",
            details:
              "Rochester Institute of Technology; University of Michigan - Dearborn; Carnegie Mellon University; Indiana University Bloomington; Texas A&M University; University of Texas- Dallas; New York University; Columbia University; University of Pennslvania",
          },
          {
            profile: "Job",
            percentage: "83.9%",
            details:
              "Deutsche Bank; Axxela; GEP; JPMC; Oracle; Carwale; ICICI Lombard; KPMG (ITA); LTI; Colgate; Quantiphi; LTTS; Jaro Education; Billdesk; ZS Associates; Cognizant; Deloitte; Ugam Solutions",
          },
        ],
      },
      {
        year: "2019-20",
        profiles: [
          {
            profile: "M.S./MTech",
            percentage: "20%",
            details:
              "New York University; Columbia University; University of Pennslvania, NC State University; Virginia Tech; Carnegie Mellon University",
          },
          {
            profile: "Job",
            percentage: "65%",
            details:
              "Infosys; Citius Tech; LTTS; Quantiphi; ISS; Infosys; Kotak; KPMG; Capgemini; LnT Core; GEP; LnT Core; Deutsche Bank; Infosys; Oracle; Interactive Brokers; Colgate; Axxela",
          },
        ],
      },
      {
        year: "2018-19",
        profiles: [
          {
            profile: "M.S./MTech",
            percentage: "14.8%",
            details:
              "TU Delft; ETH Zurich; Indian Institute of Foreign Trade (IIFT), Delhi; Info. School Univ of Washington; Virginia Tech, Graduate School; KU LEUVEN, Belgium; Cornell University; NC State University; IITB; Carnegie Mellon University",
          },
          {
            profile: "Job",
            percentage: "70%",
            details:
              "Citius Tech, L&T, KPMG, Cognizant, ZS Associates, Oracle, Quantiphi, Infosys, GEP, Siemens",
          },
        ],
      },
    ];

    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h1 className="text-center">Student Placements</h1>
            <Image src={BannerImg} className="img-fluid" fluid />
            <hr></hr>
            <p className="mt-3 text-center">
              The Electronics and Telecommunication Engineering Department
              consistently achieves excellent placement results, providing
              opportunities for students to embark on rewarding career paths or
              pursue higher studies. Below are the placement statistics along
              with profiles of students who have secured placements, pursued
              higher studies, or ventured into entrepreneurship in recent
              academic years.
            </p>

            <hr></hr>
            <h2 className="mt-4">Placement Information</h2>

            <h3>Our Recruiters</h3>
            <div className="recruiterList row">
              {recruiters.map((recruiter, index) => (
                <div
                  key={index}
                  className="col-6 col-md-2 mb-3 text-center recruiterItem"
                >
                  {recruiter}
                </div>
              ))}
            </div>

            <h3>Placement Statistics</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Academic Year</th>
                  <th>Appeared</th>
                  <th>Placed</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {placementStatistics.map((data, index) => (
                  <tr key={index}>
                    <td>{data.academicYear}</td>
                    <td>{data.appeared}</td>
                    <td>{data.placed}</td>
                    <td>{data.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div>
              {placementData.map((yearData, index) => (
                <div key={index}>
                  <h3>Placement & Higher Studies ({yearData.year})</h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Profile</th>
                        <th>Percentage</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearData.profiles.map((profile, profileIndex) => (
                        <tr key={profileIndex}>
                          <td>{profile.profile}</td>
                          <td>{profile.percentage}</td>
                          <td>{profile.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StudentPlacements;
