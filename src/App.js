import React from "react";

// components
import MainPage from "./components/MainPage";
import SubmittedApplications from "./components/SubmittedApplications";
import PersonalInformation from "./components/PersonalInformation";
import TechnicalSkillset from "./components/TechnicalSkillset";
import Covid from "./components/Covid";
import Insights from "./components/Insights";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route
          path="/submitted-applications"
          element={<SubmittedApplications />}
        />

        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/skillset" element={<TechnicalSkillset />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
