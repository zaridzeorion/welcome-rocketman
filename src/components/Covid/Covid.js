import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../Navigation";
import { validateForErrors, validatePage } from "./validatePage";
import { handleWorkPreference, handleHadCovid, handleHadCovidAt, handleVaccinated, handleVaccinationDate } from "./handlers";

import styles from './Covid.module.css'

const Covid = () => {
  const dispatch = useDispatch();
  const applicant = useSelector((state) => state.applicant);

  const { work_preference, had_covid, had_covid_at, vaccinated, vaccinated_at } = applicant;

  const [covidDateError, setCovidDateError] = useState('')
  const [vaccinationDateError, setVaccinationDateError] = useState('')

  useEffect(() => {
    validatePage(applicant, dispatch)
    validateForErrors(applicant, setCovidDateError, setVaccinationDateError)
  }, [applicant])

  let today = new Date().toLocaleDateString('en-ca')

  return (
    <div className={`${styles.Page} Page`}>
      <div className="Left">
        <h2 className={`${styles.LeftSideTitle} Title`}>Covid Stuff</h2>

        <div className={`${styles.Form} Form`}>
          {/* Work place preference */}
          <h5 className={styles.SubTitle}>How would you prefer to work?</h5> <br />

          <input
            value="from_office"
            onChange={(e) => handleWorkPreference(e, dispatch)}
            type="radio"
            checked={work_preference === "from_office" && true}
          />
          <label>From Sairme Office</label> <br />

          <input
            value="from_home"
            onChange={(e) => handleWorkPreference(e, dispatch)}
            type="radio"
            checked={work_preference === "from_home" && true}
          />
          <label>From Home</label> <br />

          <input
            value="hybrid"
            onChange={(e) => handleWorkPreference(e, dispatch)}
            type="radio"
            checked={work_preference === "hybrid" && true}
          />
          <label>Hybrid</label>

        
          {/* Had covid or not */}
          <h5 className={styles.SubTitle}>Did you contanct covid 19? :(</h5> <br />

          <input value="yes" onChange={(e) => handleHadCovid(e, dispatch)} type="radio" checked={had_covid} />
          <label>Yes</label> <br />
          <input value="no" onChange={(e) => handleHadCovid(e, dispatch)} type="radio" checked={had_covid === false} />
          <label>No</label>
          {had_covid && (
            <>
              <h5 className={styles.SubTitle}>When?</h5> <br />
              <input className={`${covidDateError && "RedOutline"} Input`} value={had_covid_at} onChange={(e) => handleHadCovidAt(e, dispatch)} type="date" max={today} />
              <label className="ErrorLabel">{covidDateError && covidDateError}</label>
            </>
          )}


          {/* Had vaccination or not */}
          <h5 className={styles.SubTitle}>Have you been vaccinated?</h5> <br />

          <input value="yes" onChange={(e) => handleVaccinated(e, dispatch)} type="radio" checked={vaccinated} />
          <label>Yes</label> <br />
          <input value="no" onChange={(e) => handleVaccinated(e, dispatch)} type="radio" checked={vaccinated === false} />
          <label>No</label>
          {vaccinated && (
            <>
              <h5 className={styles.SubTitle}>When did you get your last covid vaccine?</h5> <br />
              <input className={`${vaccinationDateError && "RedOutline"} Input`} value={vaccinated_at} onChange={(e) => handleVaccinationDate(e, dispatch)} type="date" max={today} />
              <label className="ErrorLabel">{vaccinationDateError && vaccinationDateError}</label>
            </>
          )}


          <Navigation positioning="Relative" />
        </div>
      </div>


      {/* Right side */}
      <div className="Right">
        <h2 className={`${styles.RightSideTitle} Title`}>Redberry Covid Policies</h2>
        <p className="Description">
          As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as
          safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our
          lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think
          face-to-face communications {`>`} Zoom meetings. Both on the fun and productivity scales.
        </p>
      </div>
    </div>
  );
};

export default Covid;
