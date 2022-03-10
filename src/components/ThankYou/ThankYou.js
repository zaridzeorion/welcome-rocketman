import React, { useEffect } from "react";
import styles from "./ThankYou.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setSkills,
  setWorkPreference,
  setHadCovid,
  setHadCovidAt,
  setVaccinated,
  setVaccinatedAt,
  setWillOrganizeDevtalk,
  setDevtalkTopic,
  setSomethingSpecial,
} from "../../store/slices/applicantSlice";

const ThankYou = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  useEffect(() => {
    dispatch(setFirstName(""));
    dispatch(setLastName(""));
    dispatch(setEmail(""));
    dispatch(setPhone(""));
    dispatch(setSkills(""));
    dispatch(setWorkPreference(""));
    dispatch(setHadCovid(""));
    dispatch(setHadCovidAt(""));
    dispatch(setVaccinated(""));
    dispatch(setVaccinatedAt(""));
    dispatch(setWillOrganizeDevtalk(""));
    dispatch(setDevtalkTopic(""));
    dispatch(setSomethingSpecial(""));
  }, []);

  return <div className={styles.ThankYou}>Thanks for Joining 😊</div>;
};

export default ThankYou;
