import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MainPage from "./components/MainPage";
import SubbmittedApplications from "./components/SubmittedApplications";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <MainPage />
      <hr />
      <SubbmittedApplications />
    </div>
  );
}

export default App;
