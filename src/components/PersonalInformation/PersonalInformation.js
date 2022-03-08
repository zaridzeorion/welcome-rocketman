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

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const applicant = useSelector((state) => state.applicant);

  useEffect(() => {
    validatePage(applicant, dispatch);
  }, [applicant]);

  return (
    <>
      <div>
        <h2>Hey, Rocketeer, what are your coordinates?</h2>
        <input
          value={applicant.first_name}
          onChange={(e) => handleFirstName(e, dispatch)}
          type="text"
          placeholder="First Name"
        />
        <br />
        <input
          value={applicant.last_name}
          onChange={(e) => handleLastName(e, dispatch)}
          type="text"
          placeholder="Last Name"
        />
        <br />
        <input
          value={applicant.email}
          onChange={(e) => handleEmail(e, dispatch)}
          type="text"
          placeholder="E Mail"
        />
        <br />
        <input
          value={applicant.phone}
          onChange={(e) => handlePhone(e, dispatch)}
          type="text"
          placeholder="+995 5__ __ __ __"
        />

        <Navigation />
      </div>

      <div>
        <h2>Redberry Origins</h2>
        You watch “What? Where? When?” Yeah. Our founders used to play it.
        That’s where they got a question about a famous American author and
        screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
        exact name and he answered Ray Redberry. And at that moment, a name for
        a yet to be born company was inspired - Redberry 😇
      </div>
    </>
  );
};

export default PersonalInformation;
