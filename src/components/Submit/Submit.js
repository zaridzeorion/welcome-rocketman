import React from "react";
import useFetch from "use-http";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Submit.module.css";

const Submit = () => {
  const applicant = useSelector((state) => state.applicant);

  const base_url = "https://bootcamp-2022.devtest.ge/api";
  const { post, response, loading, error } = useFetch(base_url);

  let navigate = useNavigate();

  const postData = async () => {
    const data = await post("/application", applicant);
    if (response.ok) navigate("/thankyou");
  };

  return (
    <div className={styles.SubmitContainer}>
      <div onClick={() => postData()} className={styles.SubmitRectangle}>
        Submit
      </div>
      <br />
      <button className={styles.GoBack}>
        <Link to="/insights">Go back</Link>
      </button>

      {error && "Error!"}
      {loading && "Loading..."}
    </div>
  );
};

export default Submit;
