import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from "react-grid-gallery";
import { IMAGES } from "./ResearchLabData.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class LabGalleryResearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageData: IMAGES.slice(0, 8),
    };
  }

  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    const centerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    const imageStyle = {
      maxWidth: "100%",
      maxHeight: "400px",
      margin: "0 auto",
    };

    return (
      <section id="gallery" style={{ backgroundColor: "#fff" }}>
        <Slider {...settings}>
          {this.state.imageData.map((image, index) => (
            <div key={index} style={centerStyle}>
              <img src={image.src} alt={image.src} style={imageStyle} />
            </div>
          ))}
        </Slider>
      </section>
    );
  }
}

export default LabGalleryResearch;
