import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./achievements.css";
import PhotoGallary from "./../../container/gallery/PhotoGallery";

class StudentAchievements extends Component {
  render() {
    return (

      <>
      <h1>Student Achievements</h1>
      <PhotoGallary />
      </>
    );
  }
}

export default StudentAchievements;
