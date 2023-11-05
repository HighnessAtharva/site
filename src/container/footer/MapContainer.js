import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    <p className="pin-text">{text}</p>
  </div>
);

const location = {
  address: "S.P.I.T Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058.",
  lat: 19.129780,
  lng: 72.836891,
};

const Map = () => (
  <div className="map">
    <div className="google-map" style={{ width: "100vw", height: "50vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAW3ApmDWXZfP1LF0W6HAb5b5X-jUUNbHs" }}
        defaultCenter={location}
        defaultZoom={17}
      >
        <LocationPin
          lat={19.129780}
          lng={72.836891}
          text={"S.P.I.T Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058."}
          className="location-pin"
        />
         
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAW3ApmDWXZfP1LF0W6HAb5b5X-jUUNbHs",
// })(MapContainer);
