import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from './Navigation.module.css'

import PrevImg from '../images/navigation/Previous.png'
import EllipseActiveImg from '../images/navigation/EllipseActive.png'
import EllipseNonActiveImg from '../images/navigation/EllipseNonActive.png'
import NextImg from '../images/navigation/Next.png'

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
    <ul className={styles.Navigation}>
      <li>
        <Link to={`${prev}`}><img src={PrevImg} /></Link>
      </li>
        <li>
          <Link to="/personal-information"><img src={EllipseActiveImg} /></Link>
        </li>
        <li>
          {isRouteOpen.skillset ? <Link to="/skillset"><img src={EllipseActiveImg} /></Link> : <img src={EllipseNonActiveImg} />}
        </li>
        <li>
          {isRouteOpen.covid ? <Link to="/covid"><img src={EllipseActiveImg} /></Link> : <img src={EllipseNonActiveImg} />}
        </li>
        <li>
          {isRouteOpen.insights ? <Link to="/insights"><img src={EllipseActiveImg} /></Link> : <img src={EllipseNonActiveImg} />}
        </li>
        <li>
          {isRouteOpen.submit ? <Link to="/submit"><img src={EllipseActiveImg} /></Link> : <img src={EllipseNonActiveImg} />}
        </li>
      <li>
        {isRouteOpen[nextWithoutSlash] ? <Link to={`${next}`}><img src={NextImg} /></Link> : <img src={NextImg} />}
      </li>
    </ul>
  );
};

export default Navigation;
