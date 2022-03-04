import React from "react";
import { Link } from "react-router-dom";

const PersonalInformation = () => {


  return (
    <>
      <div>
        <h2>Hey, Rocketeer, what are your coordinates?</h2>
        <input onChange={(e) => handleChange(e)} id="first" type="text" placeholder="First Name" /> <br />
        <input onChange={(e) => handleChange(e)} id="last" type="text" placeholder="Last Name" /> <br />
        <input onChange={(e) => handleChange(e)} id="email" type="text" placeholder="E Mail" /> <br />
        <input onChange={(e) => handleChange(e)} id="phone" type="text" placeholder="+995 5__ __ __ __" />


        <ul>
          <li><Link to="/">Prev</Link></li>
          <li><Link to="/personal-information">personal-information</Link></li>
          <li><Link to="/skillset">skillset</Link></li>
          <li><Link to="/covid">covid</Link></li>
          <li><Link to="/insights">insights</Link></li>
          <li></li>
          <li><Link to="/skillset">Next</Link></li>
        </ul>
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
