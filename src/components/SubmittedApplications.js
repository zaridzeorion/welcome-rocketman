import React from "react";
import useFetch from "../hooks/useFetch";

const SubbmittedApplications = () => {
  const API_TOKEN = "89nOpas%7Casdanjjh%5E%26as";

  const APPLICATIONS_REQUEST_URL = `https://bootcamp-2022.devtest.ge/api/applications?token=${API_TOKEN}`;
  const { data: users, error, loading } = useFetch(APPLICATIONS_REQUEST_URL);

  const TECHNOLOGIES_REQUEST_URL = `https://bootcamp-2022.devtest.ge/api/skills`
  const { technologies } = useFetch(TECHNOLOGIES_REQUEST_URL)

  return (
    <div>
      <h1>Submitted Applications</h1>

      <ul>
        
      </ul>
                
    </div>
  );
};

export default SubbmittedApplications;
