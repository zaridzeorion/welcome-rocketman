import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isRouteOpen = useSelector(state => state.routesOpenClose)

  let { pathname } = useLocation();
  const [prev, setPrev] = useState("/");
  const [next, setNext] = useState("/");

  let nextWithoutSlash = next.replace(/^\//, "")

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
        {isRouteOpen.skillset ? <Link to="/skillset">skillset</Link> : 'skillset'}
      </li>
      <li>
        {isRouteOpen.covid ? <Link to="/covid">covid</Link> : 'covid'}
      </li>
      <li>
        {isRouteOpen.insights ? <Link to="/insights">insights</Link> : 'insights'}
      </li>
      <li>
        {isRouteOpen.submit ? <Link to="/submit">submit</Link> : 'submit'}
      </li>
      <li>
        {isRouteOpen[nextWithoutSlash] ? <Link to={`${next}`}>Next</Link> : 'next'}
      </li>
    </ul>
  );
};

export default Navigation;
