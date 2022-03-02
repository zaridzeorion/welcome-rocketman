import React from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import MainPage from "./components/MainPage";
import SubbmittedApplications from "./components/SubmittedApplications";
import PersonalInformation from "./components/PersonalInformation";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <PersonalInformation />
    </div>
  );
}

export default App;
