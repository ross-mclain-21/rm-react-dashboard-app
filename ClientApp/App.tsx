import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home";
import RouteNotFound from "./RouteNotFound";
import Portfolio from "./Components/portfolio/Portfolio";
import Resume from "./Components/resume/Resume";
import AdventChallenge from "./Components/advent/AdventChallenge";
import Advent from "./Components/advent/Advent";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import TopNavigation from "./Components/common/TopNavigation";
import StarCanvas from "./Components/StarCanvas";

function App() {
  library.add(fab, fas, far);

  return (
    <>
      <StarCanvas />
      <TopNavigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Advent" element={<Advent />}>
            <Route path=":adventId" element={<AdventChallenge />} />
          </Route>
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
