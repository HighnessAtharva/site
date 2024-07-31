import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import course01 from "../../images/course01.jpeg";
import { facultyPublicationData, facultyPublicationCitations } from "./publicationData.js"
import "./publications.css";

export class publications extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>FACULTY PUBLICATIONS</h3>
            </Col>
          </Row>
        </Container>

        <Container>
          {/* <div className="iframe-container"> */}
          {/*   <iframe */}
          {/*     src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS4LEZXeBvRyBHd219QXD_Z3Qu6mQfS8sY510PHuodBbgrOg8Q_v4QHx31Fg_p5Ww/pubhtml?widget=true&amp;headers=false" */}
          {/*     scrolling="no" */}
          {/*     width="100%" */}
          {/*     height="1000px" */}
          {/*     style={{ border: "0", overflow: "hidden", height: "auto" }} */}
          {/*     title="Spreadsheet" */}
          {/*   ></iframe> */}
          {/* </div> */}
          <h3 className="text-capitalize text-center mb-4 mt-4">
            Faculty Publications
          </h3>
          <table className="faculty-publication-data">
            <thead>
              <tr>
                <th rowSpan="2">Name of Faculty</th>
                <th colSpan="2">2023-2022</th>
                <th colSpan="3">2022-2021</th>
                <th colSpan="2">2021-2020</th>
                <th colSpan="2">Total</th>
              </tr>
              <tr>
                <th>Journal</th>
                <th>Conference</th>
                <th>Book Chapter</th>
                <th>Journal</th>
                <th>Conference</th>
                <th>Journal</th>
                <th>Conference</th>
                <th>Journal</th>
                <th>Conference</th>
              </tr>
              <tr>
              </tr>
            </thead>
            <tbody>
              {
                facultyPublicationData.map(e => {
                  return (
                    <tr>
                      {
                        e.map(ee => <th>{ee}</th>)
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

          <br></br>
          <h3 className="text-capitalize text-center mb-4 mt-4">
            Faculty Citations
          </h3>

          {/* <div className="iframe-container"> */}
          {/*   <iframe */}
          {/*     src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS4LEZXeBvRyBHd219QXD_Z3Qu6mQfS8sY510PHuodBbgrOg8Q_v4QHx31Fg_p5Ww/pubhtml?gid=1319708534&amp;single=true&amp;widget=true&amp;headers=false" */}
          {/*     width="65%" */}
          {/*     height="600px" */}
          {/*     style={{ border: "0" }} */}
          {/*     title="Spreadsheet" */}
          {/*   /> */}
          {/* </div> */}
          <table>
            <thead>
              <tr>
                <th rowSpan="2">Name of faculty</th>
                <th colSpan="3">Google Scholar</th>
                <th colSpan="3">Scopus</th>
              </tr>
              <tr>
                <th>Ciattions</th>
                <th>h-index</th>
                <th>i10-index</th>
                <th>Documents</th>
                <th>Ciattions</th>
                <th>h-index</th>
              </tr>
            </thead>
            <tbody>
              {
                facultyPublicationCitations.map(e => {
                  return (
                    <tr>
                      {
                        e.map(ee => <th>{ee}</th>)
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <br></br>
          <br></br>
        </Container>
      </>
    );
  }
}

export default publications;
