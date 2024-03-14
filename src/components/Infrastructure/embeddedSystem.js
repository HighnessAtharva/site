import React, {Component} from 'react';
import { Link } from "react-router-dom";

class embeddedSystem extends Component {
    render() {
  return (
    <div>
      <h2>Lab Details</h2>
      <p>Lab location: 3rd Floor, Room No. 301</p>
      <p>Area of the lab in carpet: 54.25 sq. mt</p>
      <p>Approximate Cost of the equipments in the lab: Rs. 41,74,687/-</p>
      <p>Name of the Lab Incharge:- Prof. Priya Deshpande</p>
      <p>Name of the Technical Asst.: Mrs. Aaditi Sandav</p>
      <p>
        Embedded System Design is one of the rapidly growing field of Electronics &amp;
        Telecommunication Engineering branch. Keeping this in mind this lab has been developed
        over the time. Various hardware kits are available on which students can perform list of
        experiments along with mini projects. Students are always encouraged to use lab facilities
        to learn and develop solutions for daily needs.
      </p>
      <p>The list of hardware in the lab is as follows</p>
      <ul>
        <li>ARM LPC2148 development boards</li>
        <li>PIC 18F development boards</li>
        <li>Silicon Lab's EFM Giant Gecko development boards</li>
        <li>STM32 Nucleoboards</li>
        <li>Spartan 3AN</li>
        <li>Spartan 6</li>
        <li>Dynalog 8086 Development board</li>
        <li>FRDM ARM board</li>
        <li>LPC 2184</li>
        <li>8051 Trainer Kit</li>
        <li>ARM trainer kit</li>
        <li>PSOC 4 BLE</li>
        <li>PSOC 4</li>
        <li>PSOC 6</li>
        <li>TMC 123 TIVA C series</li>
        <li>Zybo Zynq 7000</li>
        <li>Neumatolab Kit</li>
        <li>MSP 432</li>
      </ul>
    </div>
  );
}
}

export default embeddedSystem;