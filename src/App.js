// CREATED BY ATHARVA SHAH & ISHANI MATHUR FOR EXTC DEPARTMENT

import React from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./container/header/Topbar";
import About from "./container/about/About";
import VideoPage from "./container/videoSection/VideoPage";
import "./global_styles.css";

//
import BTech from "./container/Btech/BTechPage";
import MTech from "./container/MTech/MTechPage";
import PhD from "./container/Phd/PhdPage";
import BOS from "./container/BOS/BOSPage";

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
import FacultyAchievements from "./components/Faculty_Achievements/facultyAchievements";

import StudentAchievements from "./components/Student_Achievement/studentAchievements";
import StudentInternships from "./components/Student_Internship/studentInternships";
import StudentPlacements from "./components/Student_Placement/studentPlacements";
import StudentEnterpreneurships from "./components/Student_Enterpreneurship/studentEnterpreneurships";
import StudentToppers from "./components/Student_Topper/studentToppers";

import FdpConductedPage from "./components/FDP_Conducted/fdpConducted";
import FdpParticipationPage from "./components/FDP_Participation/fdpParticipation";

// import Event from "./components/Events/Event";
// import Notify from "./components/Notification/Notify";
import VisionAndMissionPage from "./components/VisionAndMission/VisionAndMissionPage";
import InfrastructurePage from "./components/Infrastructure/InfrastructurePage";
import EmbeddedSystem from "./components/Infrastructure/EmbeddedSystem";
import CompCommNetwork from "./components/Infrastructure/CompCommNetwork";
import BEELab from "./components/Infrastructure/BEELab";
import AnalogCircuitLab from "./components/Infrastructure/AnalogCircuitLab";
import VLSILab from "./components/Infrastructure/VLSILab";
import ElectronicsDeviceLab from "./components/Infrastructure/ElectronicsDeviceLab";
import FiberOpticLab from "./components/Infrastructure/FiberOpticLab";
import ResearchLab from "./components/Infrastructure/ResearchLab";
import InstrumentationLab from "./components/Infrastructure/InstrumentationLab";
import Lab205 from "./components/Infrastructure/Lab205";
import Lab502 from "./components/Infrastructure/Lab502";
import Lab507A from "./components/Infrastructure/Lab507A";
import Lab508 from "./components/Infrastructure/Lab508";
import Class203 from "./components/Infrastructure/Class203";
import Class509 from "./components/Infrastructure/Class509";
import AlumniPage from "./components/Alumni/AlumniPage";
import FETSPage from "./components/FETS/FETSPage";

import DepartmentLibrary from "./components/Department_Library/Library";
import InnovativePage from "./components/Innovative_Teaching_Learning/InnovativePage";

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
              {/* <Message />
              <VideoPage />
              <Projects /> */}
              {/* <PhotoGallary /> */}
            </Route>

            <Route exact path="/vision-and-mission">
              <VisionAndMissionPage />
            </Route>

            {/* Students  */}
            <Route exact path="/placement">
              <StudentPlacements />
            </Route>

            <Route exact path="/internship">
              <StudentInternships />
            </Route>

            <Route exact path="/enterpreneurship">
              <StudentEnterpreneurships />
            </Route>

            <Route exact path="/toppers">
              <StudentToppers />
            </Route>

            {/* <Route exact path="/student-publications">
              <StudentPublications />
            </Route> */}

            <Route exact path="/student-achievements">
              <StudentAchievements />
            </Route>

            <Route exact path="/conducted">
              <FdpConductedPage />
            </Route>

            <Route exact path="/participation">
              <FdpParticipationPage />
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

            <Route exact path="/bos">
              <BOS />
            </Route>

            <Route exact path="/faculty">
              <FacultyPage />
            </Route>

            <Route exact path="/faculty-achievements">
              <FacultyAchievements />
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

            <Route exact path="/infrastructure">
              <InfrastructurePage />
            </Route>

            <Route exact path="/EmbeddedSystem">
              <EmbeddedSystem />
            </Route>
            <Route exact path="/CompCommNetwork">
              <CompCommNetwork />
            </Route>
            <Route exact path="/beeLab">
              <BEELab />
            </Route>
            <Route exact path="/VLSILab">
              <VLSILab/>
            </Route>
            <Route exact path="/ElectronicsDeviceLab">
              <ElectronicsDeviceLab />
            </Route>
            <Route exact path="/analogCircuitLab">
              <AnalogCircuitLab />
            </Route>
            <Route exact path="/fiberOpticLab">
              <FiberOpticLab />
            </Route>
            <Route exact path="/researchLab">
              <ResearchLab />
            </Route>
            <Route exact path="/instrumentationLab">
              <InstrumentationLab />
            </Route>
            <Route exact path="/Lab205">
              <Lab205  />
            </Route>
            <Route exact path="/Lab507">
              <Lab507A />
            </Route>
            <Route exact path="/Lab502">
              <Lab502 />
            </Route>
            <Route exact path="/Lab508">
              <Lab508 />
            </Route>
            <Route exact path="/Class203">
              <Class203 />
            </Route>
            <Route exact path="/Class509">
              <Class509 />
            </Route>

            <Route exact path="/alumni">
              <AlumniPage />
            </Route>

            <Route exact path="/fets">
              <FETSPage />
            </Route>

            <Route exact path="/innovative-teaching-learning">
              <InnovativePage />
            </Route>

            <Route exact path="/department-library">
              <DepartmentLibrary />
            </Route>


          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
