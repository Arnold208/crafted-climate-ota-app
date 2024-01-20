import "./App.css";
import { Router, Routes, Route, useLocation } from "react-router-dom";

// Import Pages
import Home from "./components/home";
import CaseStudies from "./components/caseStudies";
import Developers from "./components/developers";
import Dashboard from "./components/Console/Dashboard";
import Documentation from "./components/Console/docs";
import Dash from "./components/Console/dash-content";
import Devices from "./components/Console/devices";
import Data from "./components/Console/data";
import Keys from "./components/Console/keys";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="developers" element={<Developers />} />
        <Route path="dashboard/*" element={<Dashboard />}>
          <Route index element={<Dash />} />
          <Route path="devices" element={<Devices />} />
          <Route path="data" element={<Data />} />
          <Route path="keys" element={<Keys />} />
        </Route>
        <Route path="docs" element={<Documentation />} />
      </Routes>
    </>
  );
}

export default App;
