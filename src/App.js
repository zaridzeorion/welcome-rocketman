import React from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import MainPage from "./components/MainPage";
import SubbmittedApplications from "./components/SubmittedApplications";
import PersonalInformation from "./components/PersonalInformation";
import TechnicalSkillset from "./components/TechnicalSkillset";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <TechnicalSkillset />
    </div>
  );
}

export default App;
