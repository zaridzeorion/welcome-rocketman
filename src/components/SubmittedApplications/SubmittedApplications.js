import React from "react";
import { useFetch } from "use-http";
import styles from "./SubmittedApplications.module.css";
import VectorImg from "../../images/submittedApplications/Vector.png";

import { personalInformation } from "./personalInformation/personalInformation";
import { covidSituation } from "./covidSituation/covidSituation";
import { skillset } from "./skillset/skillset";
import { insights } from "./insights/insights";

const SubbmittedApplications = () => {
  const API_TOKEN = "3a0a271b-f0c2-4d4b-996a-f9b6c4411580";

  const APPLICATIONS_REQUEST_URL = `https://bootcamp-2022.devtest.ge/api/applications?token=${API_TOKEN}`;
  const {
    data: skills,
    error,
    loading,
  } = useFetch(APPLICATIONS_REQUEST_URL, []);

  const SKILLS_REQUEST_URL = `https://bootcamp-2022.devtest.ge/api/skills`;
  const { data: technologies } = useFetch(SKILLS_REQUEST_URL, []);

  const handleDropdown = (id) => {
    document
      .getElementById(`Application${id}`)
      .classList.toggle(styles.ShowApplication);
    document
      .getElementById(`Vector${id}`)
      .classList.toggle(styles.UpsideDownVector);
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Submitted Applications</h1>

      <ul>
        {error && error}
        {loading && "Loading..."}
        {skills &&
          skills.map((user, id) => (
            <>
              <div
                id="Dropdown"
                onClick={() => handleDropdown(id)}
                className={styles.Dropdown}
              >
                {id + 1}
                <img
                  id={`Vector${id}`}
                  className={styles.Vector}
                  src={VectorImg}
                  alt="Vector"
                />
              </div>
              <li
                id={`Application${id}`}
                className={styles.Application}
                key={id}
              >
                {personalInformation(user)}
                {covidSituation(user)}
                {skillset(user, technologies)}
                {insights(user)}
              </li>
            </>
          ))}
      </ul>
    </div>
  );
};

export default SubbmittedApplications;
