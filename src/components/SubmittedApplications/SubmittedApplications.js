import React from "react";
import { useFetch } from "use-http";

import { personalInformation } from './personalInformation/personalInformation'
import { covidSituation } from './covidSituation/covidSituation' 
import { skillset } from './skillset/skillset' 
import { insights } from './insights/insights' 

import styles from './SubmittedApplications.module.css'

const SubbmittedApplications = () => {
  const API_TOKEN = "b3e91881-823e-4759-86ca-cf78d301886d";

  const APPLICATIONS_REQUEST_URL = `https://bootcamp-2022.devtest.ge/api/applications?token=${API_TOKEN}`;
  const { data: skills, error, loading } = useFetch(APPLICATIONS_REQUEST_URL, [])

  const SKILLS_REQUEST_URL = `https://bootcamp-2022.devtest.ge/api/skills`;
  const { data: technologies } = useFetch(SKILLS_REQUEST_URL, [])

  return (
    <div>
      <h1>Submitted Applications</h1>

      <ul>
        {error && error}
        {loading && "Loading..."}
        {skills && skills.map((user, id) => (
            <li key={id}>
              <div />
              {personalInformation(user)}
              {covidSituation(user)}
              {skillset(user, technologies)}
              {insights(user)}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SubbmittedApplications;
