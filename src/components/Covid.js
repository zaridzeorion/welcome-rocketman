import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  setWorkPreference,
  setHadCovid,
  setHadCovidAt,
  setVaccinated,
  setVaccinatedAt
} from "../store/slices/applicantSlice";

const Covid = () => {
  const dispatch = useDispatch();
  const applicant = useSelector((state) => state.applicant);

  const { work_preference, had_covid, had_covid_at, vaccinated, vaccinated_at} = applicant

  const handleWorkPreference = (e) => {
    let input = e.target.value 
    
    input === 'from_office' && dispatch(setWorkPreference('from_office'))
    input === 'from_home' && dispatch(setWorkPreference('from_home'))
    input === 'hybrid' && dispatch(setWorkPreference('hybrid'))
  }

  const handleHadCovid = e => {
    let input = e.target.value

    input === 'yes' && dispatch(setHadCovid(true))
    input === 'no' && dispatch(setHadCovid(false))
  }

  const handleHadCovidAt = e => {
    let date = e.target.value
    dispatch(setHadCovidAt(date))
  }

  const handleVaccinated = (e) => {
    let input = e.target.value
    input === 'yes' && dispatch(setVaccinated(true))
    input === 'no' && dispatch(setVaccinated(false))
  }

  const handleVaccinationDate = e => {
    let date = e.target.value
    dispatch(setVaccinatedAt(date))
  }

  return (
    <>
      <div>
        <h2>Covid Stuff</h2>

        <h5>How would you prefer to work?</h5> <br />

          <input value="from_office" onChange={e => handleWorkPreference(e)} type="checkbox" checked={work_preference === 'from_office' && true } />
        <label>From Sairme Office</label> <br />

          <input value="from_home" onChange={e => handleWorkPreference(e)} type="checkbox" checked={work_preference === 'from_home' && true } />
        <label>From Home</label> <br />

          <input value="hybrid" onChange={e => handleWorkPreference(e)} type="checkbox" checked={work_preference === 'hybrid' && true } />
        <label>Hybrid</label>


        <h5>Did you contanct covid 19? :(</h5> <br />
        <input value="yes" onChange={e => handleHadCovid(e)} type="checkbox" checked={had_covid} /> 
        <label>Yes</label> <br />
        <input value="no" onChange={e => handleHadCovid(e)} type="checkbox" checked={had_covid === false} />  
        <label>No</label>


        {had_covid && 
          <>
            <h5>When?</h5> <br/>
            <input value={had_covid_at} onChange={e => handleHadCovidAt(e)} type="date" />
          </>
        }

        <h5>Have you been vaccinated?</h5> <br />
        <input value="yes" onChange={e => handleVaccinated(e)} type="checkbox" checked={vaccinated} /> 
        <label>Yes</label> <br />
        <input value="no" onChange={e => handleVaccinated(e)} type="checkbox" checked={vaccinated === false} />  
        <label>No</label>


        
        {vaccinated && 
          <>
            <h5>When did you get your last covid vaccine?</h5> <br/>
            <input value={vaccinated_at} onChange={e => handleVaccinationDate(e)} type="date" />
          </>
        }
        



        <ul>
          <li><Link to="/skillset">Prev</Link></li>
          <li><Link to="/personal-information">personal-information</Link></li>
          <li><Link to="/skillset">skillset</Link></li>
          <li><Link to="/covid">covid</Link></li>
          <li><Link to="/insights">insights</Link></li>
          <li></li>
          <li><Link to="/insights">Next</Link></li>
        </ul>
      </div>

      <div>
        <h2>Redberry Covid Policies</h2>
        <p>
          As this infamous pandemic took over the world, we adjusted our working
          practices so that our employees can be as safe and comfortable as
          possible. We have a hybrid work environment, so you can either work
          from home or visit our lovely office on Sairme Street. If it was up to
          us, we would love you to see us in the office because we think
          face-to-face communications {`>`} Zoom meetings. Both on the fun and
          productivity scales.
        </p>
      </div>

    </>
  );
};

export default Covid;
