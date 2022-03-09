import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validatePage } from "./validators";
import {
  handleFirstName,
  handleLastName,
  handleEmail,
  handlePhone,
} from "./handlers";

import Navigation from "../Navigation";
import styles from './PersonalInformation.module.css'

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const applicant = useSelector((state) => state.applicant);

  useEffect(() => {
    validatePage(applicant, dispatch);
  }, [applicant]);

  return (
    <div className="Page">
      <div className="Left">
        <h2 className="Title">Hey, Rocketeer, what are your coordinates?</h2>

        <div className="Form">
          <input
            className="Input"
            value={applicant.first_name}
            onChange={(e) => handleFirstName(e, dispatch)}
            type="text"
            placeholder="First Name"
          />
          <br />
          <input
            className="Input"
            value={applicant.last_name}
            onChange={(e) => handleLastName(e, dispatch)}
            type="text"
            placeholder="Last Name"
          />
          <br />
          <input
            className="Input"
            value={applicant.email}
            onChange={(e) => handleEmail(e, dispatch)}
            type="text"
            placeholder="E Mail"
          />
          <br />
          <input
            className="Input"
            value={applicant.phone}
            onChange={(e) => handlePhone(e, dispatch)}
            type="text"
            placeholder="+995 5__ __ __ __"
          />

          <Navigation />
        </div>
      </div>

      <div className={`${styles.RightTitle} Right`}>
        <h2 className="Title">Redberry Origins</h2>
        <p className="Description">
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
    </div>
  );
};

export default PersonalInformation;
