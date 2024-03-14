import React, { Component } from "react";
import "./Infrastructure.css";
import { Link } from "react-router-dom";

class InfrastructurePage extends Component {
  render() {
    return (
      <>
        <h1>Infrastructure</h1>

        <ul>
          <li>
            <Link to="/embeddedSystem">Embedded Systems Lab</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default InfrastructurePage;
