import React from "react";

// components
import MainPage from "./components/MainPage";
import SubmittedApplications from "./components/SubmittedApplications";
import PersonalInformation from "./components/PersonalInformation";
import TechnicalSkillset from "./components/TechnicalSkillset";
import Covid from "./components/Covid";
import Insights from "./components/Insights";
import Submit from "./components/Submit";
import ThankYou from "./components/ThankYou";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

function App() {
  let isRouteOpen = useSelector(state => state.routesOpenClose)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route
          path="/submitted-applications"
          element={<SubmittedApplications />}
        />

        <Route path="/personal-information" element={<PersonalInformation />} />
        
        {isRouteOpen.skillset && <Route path="/skillset" element={<TechnicalSkillset />} />} 
        {isRouteOpen.covid && <Route path="/covid" element={<Covid />} />}
        {isRouteOpen.insights && <Route path="/insights" element={<Insights />} /> }

        {isRouteOpen.submit && <Route path="/submit" element={<Submit />} />}
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
