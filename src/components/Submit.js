import React from "react";
import useFetch from "use-http";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Submit = () => {
  const applicant = useSelector((state) => state.applicant);

  const base_url = "https://bootcamp-2022.devtest.ge/api";
  const { post, response, loading, error } = useFetch(base_url);

  const postData = async () => {
    const data = await post("/application", applicant);
    if (response.ok) console.log('posted', data)
  };

  return (
    <>
      <button onClick={postData}>Submit</button>
      <button><Link to="/insights">Go back</Link></button>
      {error && "Error!"}
      {loading && "Loading..."}
    </>
  );
};

export default Submit;
