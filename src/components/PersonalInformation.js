import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setFirstName, setLastName, setEmail, setPhone } from "../store/slices/applicantSlice";

const PersonalInformation = () => {
  const [isPassed, setIsPassed] = useState ({
    first_name: false,
    last_name: false,
    email: false,
    phone: true,
  })
  const {first_name, last_name, email, phone} = isPassed

  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.applicant);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return re.test(email)
  };

  const validatePhone = (phone) => {
    const re = /^(\+?995\s?)?(\d{3}[\-\s]?(\d{2}[\-\s]?\d{2}[\-\s]?\d{2}$|\d{3}[\-\s]?\d{3}$))/;

    return re.test(phone)
  }

  const handleFirstName = (e) => {
    let first_name = e.target.value 
    dispatch(setFirstName(first_name))

  first_name.length > 2 
    ? setIsPassed({...isPassed, first_name: true})
    : setIsPassed({...isPassed, first_name: false})
  }

const handleLastName = (e) => {
  let last_name = e.target.value 
  dispatch(setLastName(last_name))

  last_name.length > 2 
  ? setIsPassed({...isPassed, last_name: true})
  : setIsPassed({...isPassed, last_name: false})
}

const handleEmail = (e) => {
  let email = e.target.value
  dispatch(setEmail(email))

  validateEmail(email)
    ? setIsPassed({...isPassed, email: true})
    : setIsPassed({...isPassed, email: false})
}

const handlePhone = (e) => { 
  let phone = e.target.value
  dispatch(setPhone(phone))

  phone && validatePhone(phone)
    ? setIsPassed({...isPassed, phone: true})
    : setIsPassed({...isPassed, phone: false}) 
  
  !phone && setIsPassed({...isPassed, phone: true})

  return phone
  
} 

  useEffect(() => {
    first_name && last_name && email && phone ? setValidated(true) : setValidated(false)
    console.log(isPassed)
  }, [isPassed])

  return (
    <>
      <div>
        <h2>Hey, Rocketeer, what are your coordinates?</h2>
        <input value={state.first_name} onChange={(e) => handleFirstName(e)} type="text" placeholder="First Name" /> <br />
        <input value={state.last_name} onChange={(e) => handleLastName(e)} type="text" placeholder="Last Name" /> <br />
        <input value={state.email} onChange={(e) => handleEmail(e)} type="text" placeholder="E Mail" /> <br />
        <input value={state.phone} onChange={(e) => handlePhone(e)} type="text" placeholder="+995 5__ __ __ __" />


        <ul>
          <li><Link to="/">Prev</Link></li>
          <li><Link to="/personal-information">personal-information</Link></li>
          <li>{validated && <Link to="/skillset">skillset</Link>}skillset</li>
          <li>covid</li>
          <li>insights</li>
          <li></li>
          <li>{validated &&<Link to="/skillset">Next</Link>}Next</li>
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
