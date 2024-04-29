import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class VideoGallery extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="mx-auto text-center mt-5 mb-5">
          <h3 className="text-capitalize text-center mb-4 mt-4">VIDEOGRAPHY</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={4} sm={6} className="mx-auto">
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameborder="1"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              className="video-frame"
            />
          </Col>
          <Col lg={4} sm={6} className="mx-auto">
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameborder="1"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              className="video-frame"
            />
          </Col>
          <Col lg={4} sm={6} className="mx-auto">
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameborder="1"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              className="video-frame"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VideoGallery;
