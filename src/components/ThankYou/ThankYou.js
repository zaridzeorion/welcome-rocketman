import React, { useEffect } from "react";
import styles from "./ThankYou.module.css";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return <div className={styles.ThankYou}>Thanks for Joining 😊</div>;
};

export default ThankYou;
