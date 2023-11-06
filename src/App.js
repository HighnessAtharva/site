import React from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./container/header/Topbar";
import About from "./container/about/About";
import VideoPage from "./container/videoSection/VideoPage";

//  
import BTech from "./container/Btech/BTechPage";
import MTech from "./container/MTech/MTechPage";
import PhD from "./container/Phd/PhdPage";

// R&D Tabs
import Projects from "./container/projects/Projects";
import Publications from "./container/publications/Publications";
import Consultancy from "./container/consultancy/Consultancy";


import Message from "./container/Messages/Message";
import PhotoGallary from "./container/gallery/PhotoGallery";
import Footer from "./container/footer/Footer";
import Slider from "./container/header/Slider";
import FullGallery from "./container/gallery/FullGallery";
import Contact from "./components/contact/Contact";
import AboutPage from "./container/about/AboutPage";
import FacultyPage from "./components/Faculty/FacultyPage";
import Event from "./components/Events/Event";
import Notify from "./components/Notification/Notify";
import VisionAndMissionPage from "./components/VisionAndMission/VisionAndMissionPage";
import InfrastructurePage from "./components/Infrastructure/InfrastructurePage";
import AlumniPage from "./components/Alumni/AlumniPage";
import FETSPage from "./components/FETS/FETSPage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({
      duration: 900,
    });
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Topbar />
          <Switch>
            <Route exact path="/">
              <Slider />
              <About />
              <Message />
              <VideoPage />
              <Projects />
              <PhotoGallary />
            </Route>
            {/* <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/gallery">
              <FullGallery />
            </Route> */}
            <Route exact path="/vision-and-mission">
              <VisionAndMissionPage />
            </Route>

            {/* PROGRAMS TABS */}

            <Route exact path="/btech">
               <BTech />
            </Route>

            <Route exact path="/mtech">
               <MTech />
            </Route>

            <Route exact path="/phd">
               <PhD />
            </Route>

            <Route exact path="/faculty">
              <FacultyPage />
            </Route>

            {/* R&D Tabs */}
            <Route exact path="/projects">
              <Projects />
            </Route>

            <Route exact path="/publications">
              <Publications />
            </Route>

            <Route exact path="/consultancy">
              <Consultancy />
            </Route>

            {/* R&D Tabs Over*/}

            <Route exact path="/infrastructure">
              <InfrastructurePage />
            </Route>

            <Route exact path="/alumni">
               <AlumniPage />
            </Route>

            
            <Route exact path="/fets">
              <FETSPage />
            </Route>


            {/* <Route exact path="/events">
              <Event />
            </Route>
            <Route exact path="/notification">
              <Notify />
            </Route> */}

            {/* <Route exact path="/contact">
              <Contact />
            </Route> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
