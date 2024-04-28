import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./Internships.css";
import { Image } from "react-bootstrap";
import InternImg from "./Interning.png";
import InternStats from "./InternshipStats.png";

// const consultancyProjects = [
//   {
//     srNo: 1,
//     faculty:
//       "PI: Rajendra R Sawant, CO-PI-1: Bhalchandra N Chaudhari; Co-PI-2: Y. S. Rao",
//     projectTitle:
//       "Design and D€velopme[t of a fully automated Pressure and vacuum controlled Precision Induction Casting Machine",
//     fundingAgency: "DST, Govt. India",
//     amount: "70,20,723",
//     duration: "2022-23 3 Years",
//     completionStatus: "Ongoing",
//   },
//   {
//     srNo: 2,
//     faculty: "Dr. Rajendra Sawant, Dr. Y. S. Rao",
//     projectTitle:
//       "Design and Development of 6kW Battery charger for Indian Railways",
//     fundingAgency: "General Auto Electric Co. Mumbai",
//     amount: "1, 50,000",
//     duration: "2022-23",
//     completionStatus: "Ongoing",
//   },
//   {
//     srNo: 3,
//     faculty: "Dr. Rajendra Sawant, Dr. Y. S. Rao",
//     projectTitle:
//       "Design and development of Solar Pumping BLDC Motor Controller",
//     fundingAgency: "Sileaf Technologies, Pune",
//     amount: "2, 00,000",
//     duration: "2022-23",
//     completionStatus: "Ongoing",
//   },
//   {
//     srNo: 4,
//     faculty: "Dr. Rajendra Sawant, Dr. Y. S. Rao",
//     projectTitle:
//       "Design and development of a fully automated Pressure and Vacuum Controlled Precision Induction Casting Machine",
//     fundingAgency: "Riddhi Heatron Mumbai",
//     amount: "1, 00,000",
//     duration: "2022-23",
//     completionStatus: "Ongoing",
//   },
//   {
//     srNo: 5,
//     faculty:
//       "Dr. Reena Sonkusare (PI), Dr. Rajendra Sawant (Co-PI) & Prof. Priya Deshpande (Co-PI)",
//     projectTitle:
//       "Development of Smart Energy Meter for Residential, Industrial and Commercial Applications.",
//     fundingAgency: "KPEC Engineers & Contractors Pvt Ltd",
//     amount: "200000",
//     duration: "2022-23",
//     completionStatus: "Ongoing",
//   },
//   {
//     srNo: 6,
//     faculty: "Dr. Rajendra Sawant, Dr. Y. S. Rao",
//     projectTitle:
//       "Design and development Battery charging system of 4.5kW capacity",
//     fundingAgency: "General Auto Electric Co. Mumbai",
//     amount: "1, 50,000",
//     duration: "1 Year (2021-22)",
//     completionStatus: "Completed",
//   },
//   {
//     srNo: 7,
//     faculty: "Dr. Rajendra Sawant, Dr. Y. S. Rao",
//     projectTitle:
//       "Design and development of Solar Pumping BLDC Motor Controller",
//     fundingAgency: "Sileaf Technologies, Pune",
//     amount: "2,00,000",
//     duration: "1 Year (2021-22)",
//     completionStatus: "Completed",
//   },
//   {
//     srNo: 8,
//     faculty: "Dr. Rajendra Sawant, Dr. Y. S. Rao",
//     projectTitle: "Design and Development of Induction Casting Application",
//     fundingAgency: "Riddhi Heatron Mumbai",
//     amount: "1,00,000",
//     duration: "1 Year (2021-22)",
//     completionStatus: "Completed",
//   },
//   {
//     srNo: 9,
//     faculty: "Dr. Rajendra Sawant, Dr. Y. S. Rao",
//     projectTitle:
//       "Design and development of 6kW Battery Charger for Indian Railways",
//     fundingAgency: "General Auto Electric Co. Mumbai",
//     amount: "1, 85,000",
//     duration: "1 Year (2020-21)",
//     completionStatus: "Completed",
//   },
//   {
//     srNo: 10,
//     faculty: "Dr. Rajendra Sawant, Dr. Y. S. Rao",
//     projectTitle:
//       "Design and development of Solar Pumping BLDC Motor Controller",
//     fundingAgency: "Sileaf Technologies, Pune",
//     amount: "2,00,000",
//     duration: "1 Year (2020-21)",
//     completionStatus: "Completed",
//   },
//   {
//     srNo: 11,
//     faculty: "Dr. Rajendra Sawant, Dr. Y. S. Rao",
//     projectTitle: "Design and Development of Induction Casting Controller",
//     fundingAgency: "Riddhi Heatron Mumbai",
//     amount: "1,00,000",
//     duration: "1 Year (2020-21)",
//     completionStatus: "Completed",
//   },
//   {
//     srNo: 12,
//     faculty: "Dr. Y .S.Rao & Dr. R. R. Sawant",
//     projectTitle:
//       "Development of Software Applications to Maintain Service Calls and manage the service tickets/tokens",
//     fundingAgency: "Suyog Telematics Mumbai",
//     amount: "1,00,000",
//     duration: "2 Years (2018-19)",
//     completionStatus: "Completed",
//   },
//   {
//     srNo: 13,
//     faculty: "Dr. Y .S.Rao & Dr. R. R. Sawant",
//     projectTitle: "Automative Battery Management System",
//     fundingAgency: "Zeuva Automotive Private Limited",
//     amount: "Rs. 1,00,500",
//     duration: "6 months (2018-19)",
//     completionStatus: "Completed",
//   },
//   {
//     srNo: 14,
//     faculty: "Dr. Y .S.Rao & Dr. R. R. Sawant",
//     projectTitle:
//       "Design and Development of a 24V/15A DC Motor PWM drive for PMDC OR shunt DC Motor",
//     fundingAgency: "Hardcarb Tech Pvt Ltd",
//     amount: "Rs. 1,85,000",
//     duration: "4 month (2018-19)",
//     completionStatus: "Completed",
//   },
//   {
//     srNo: 15,
//     faculty: "Dr. Y .S.Rao & Dr. R. R. Sawant",
//     projectTitle:
//       "Design and Development off Battery Charging System of 4.5 KW capacity",
//     fundingAgency: "General Auto Electronic Corporation",
//     amount: "Rs. 1,50,000",
//     duration: "4 month (2018-19)",
//     completionStatus: "Completed",
//   },
//   {
//     srNo: 16,
//     faculty: "Dr. Y .S.Rao & Dr. R. R. Sawant",
//     projectTitle:
//       "Design and Development of Universal Controller for Solar Water Pumping",
//     fundingAgency: "Sileaf Technologies Private Limited",
//     amount: "Rs. 2,00,000",
//     duration: "6 month (2018-19)",
//     completionStatus: "Completed",
//   },
// ];

class StudentInternships extends Component {
  render() {
    return (
      <Container className="internship-container">
        <Row className="justify-content-center">
          <Col md={10}>
          <h3 className="text-center mb-4">6-MONTH INTERNSHIP</h3>
            <div className="internship-stats-container d-flex justify-content-center align-items-center">
              <div className="mr-4">
                <Table
                  bordered
                  hover
                  responsive
                  className="student-internship-table mb-4"
                >
                  <thead className="thead-dark">
                    <tr>
                      <th></th>
                      <th>Number of Students</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2019-20</td>
                      <td>52</td>
                    </tr>
                    <tr>
                      <td>2020-21</td>
                      <td>76</td>
                    </tr>
                    <tr>
                      <td>2021-22</td>
                      <td>59</td>
                    </tr>
                    <tr>
                      <td>2022-23</td>
                      <td>71</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div>
                <Image src={InternStats} fluid />
              </div>
            </div>

            <h3 className="text-center mb-4 mt-4">
              OUR STUDENTS ARE INTERNS AT
            </h3>
            <Image src={InternImg} fluid style={{ height: "300px" }} />

            {/* <h3 className="text-center mb-4 mt-4">Consultancy Projects</h3>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Name of the faculty</th>
                  <th>Project Title</th>
                  <th>Funding Agency</th>
                  <th>Amount</th>
                  <th>Duration</th>
                  <th>Completion Status</th>
                </tr>
              </thead>
              <tbody>
                {consultancyProjects.map((project, index) => (
                  <tr key={index}>
                    <td>{project.srNo}</td>
                    <td>{project.faculty}</td>
                    <td>{project.projectTitle}</td>
                    <td>{project.fundingAgency}</td>
                    <td>{project.amount}</td>
                    <td>{project.duration}</td>
                    <td>{project.completionStatus}</td>
                  </tr>
                ))}
              </tbody>
            </Table> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StudentInternships;
