import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
import rocketman from "../../images/mainpage/rocketman.png";

const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      {/* Title */}
      <h1 className={styles.title}>Welcome Rocketeer!</h1>

      {/* Start Questionnaire Button */}
      <Link to="personal-information">
        <button className={styles.startRectangle}>
          <p className={styles.startQuestionnaire}> Start Questionnaire</p>
        </button>
      </Link>{" "}

      <br />

      {/* Submitted Applications Button */}
      <Link to="submitted-applications">
        <button className={styles.submittedRectangle}>
          <p className={styles.submittedApplications}>Submitted Applications</p>
        </button>
      </Link>{" "}

      <br />

      {/* Rocketman | astronaut */}
      <img className={styles.rocketman} alt="rocketman" src={rocketman} />
    </div>
  );
};

export default MainPage;
