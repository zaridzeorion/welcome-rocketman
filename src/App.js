import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MainPage from "./components/MainPage";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
