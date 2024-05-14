import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LabGalleryInstrumentation from "../../container/gallery/LabGalleryInstrumentation";

class InstrumentationLab extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">
          Instrumentation Lab
        </h3>

        <Card className="mt-2">
          <Card.Body>
            <LabGalleryInstrumentation />
            <br /> <br />
            <div>
              <h6>Lab location: 2nd Floor, Room No. 206</h6>
              <h6>Area of the lab in carpet: 54.26 sq. mtrs</h6>
              <h6>
                Approximate Cost of the equipments in the lab: Rs. 15,13,825/-
              </h6>
              <br></br>
              <h6>Name of the Lab Incharge:- Prof. Najib Ghatte</h6>
              <h6>Name of the Technical Asst.: Mr. Vivek Kurhe</h6>
              <br></br>

              <p>
                Following are the few important instruments available in the
                lab.
              </p>

              <ul style={{ marginLeft: "50px" }}>
                <li>CPU 1511-1PN, 150 KB PROGRAMME, (6ES75111AK010AB0)</li>
                <li>SIMATIC S7 MEMORY CARD, 4MB(6ES79548LC020AA0)</li>
                <li>PSU 100D 24 V/6.2A(6EP13331LD00)</li>
                <li>KTP 400 BASIC 2nd Generation(6AV21232DB030AX0)</li>
                <li>MOUNTING RAIL 482 MM (19")(6ES75901AE800AA0)</li>
                <li>DI 16X24 VDC HF(6ES75211BH000AB0)</li>
                <li>DQ 8X24VDC/2A HF(6ES75221BF000AB0)</li>
                <li>AI 8XU/I/RTD/TC ST(6ES75317KF000AB0)</li>
                <li>AQ 4XU /I ST(6ES75325HD000AB0)</li>
                <li>
                  Step 7 V13 OSD -SIMATIC STEP 7 Professional
                  V13(6ES78221AA034YA5)
                </li>
                <li>G 120 C/1HP/Profinet(6SL32101KE123UF1)</li>
                <li>BOP(6SL32550AA004CA1)</li>
                <li>1HP Motor 2 pole(1HP 2P B3 (TF-SIE)</li>
                <li>
                  Panel for PLC Drives Type "0", Type"1", Type"2" control
                  system, Test signal generator, Time response
                </li>
                <li>A.C.Servo Voltage Stabiliser</li>
                <li>Syncro Transmitter and Receiver</li>
                <li>3 Phase Im controller using v/f scheme & PWM</li>
                <li>LVDT</li>
                <li>Digital Systems Dual Power Supply</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default InstrumentationLab;
