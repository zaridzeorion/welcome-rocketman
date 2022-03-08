import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  let { pathname } = useLocation();
  const [prev, setPrev] = useState("/");
  const [next, setNext] = useState("/");

  useEffect(() => {
    pathname === "/personal-information" && setNext(`/skillset`);

    if (pathname === "/skillset") {
      setNext(`/covid`);
      setPrev(`/personal-information`);
    }
    if (pathname === "/covid") {
      setNext(`/insights`);
      setPrev(`/skillset`);
    }
    if (pathname === "/insights") {
      setNext(`/submit`);
      setPrev(`/covid`);
    }

    pathname === "/submit" && setPrev(`/insights`);
  }, []);

  return (
    <ul>
      <li>
        <Link to={`${prev}`}>Prev</Link>
      </li>
      <li>
        <Link to="/personal-information">personal-information</Link>
      </li>
      <li>
        <Link to="/skillset">skillset</Link>
      </li>
      <li>
        <Link to="/covid">covid</Link>
      </li>
      <li>
        <Link to="/insights">insights</Link>
      </li>
      <li>
        <Link to="/submit">submit</Link>
      </li>
      <li>
        <Link to={`${next}`}>Next</Link>
      </li>
    </ul>
  );
};

export default Navigation;
