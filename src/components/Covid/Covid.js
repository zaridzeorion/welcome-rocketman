import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../Navigation";
import { validatePage } from "./validatePage";
import { handleWorkPreference, handleHadCovid, handleHadCovidAt, handleVaccinated, handleVaccinationDate } from "./handlers";

const Covid = () => {
  const dispatch = useDispatch();
  const applicant = useSelector((state) => state.applicant);

  const { work_preference, had_covid, had_covid_at, vaccinated, vaccinated_at } = applicant;

  useEffect(() => validatePage(applicant, dispatch), [applicant])

  let today = new Date().toLocaleDateString('en-ca')

  return (
    <>
      <div>
        <h2>Covid Stuff</h2>


        {/* Work place preference */}
        <h5>How would you prefer to work?</h5> <br />
        <input
          value="from_office"
          onChange={(e) => handleWorkPreference(e, dispatch)}
          type="checkbox"
          checked={work_preference === "from_office" && true}
        />
        <label>From Sairme Office</label> <br />
        <input
          value="from_home"
          onChange={(e) => handleWorkPreference(e, dispatch)}
          type="checkbox"
          checked={work_preference === "from_home" && true}
        />
        <label>From Home</label> <br />
        <input
          value="hybrid"
          onChange={(e) => handleWorkPreference(e, dispatch)}
          type="checkbox"
          checked={work_preference === "hybrid" && true}
        />
        <label>Hybrid</label>


        {/* Had covid or not */}
        <h5>Did you contanct covid 19? :(</h5> <br />
        <input value="yes" onChange={(e) => handleHadCovid(e, dispatch)} type="checkbox" checked={had_covid} />
        <label>Yes</label> <br />
        <input value="no" onChange={(e) => handleHadCovid(e, dispatch)} type="checkbox" checked={had_covid === false} />
        <label>No</label>
        {had_covid && (
          <>
            <h5>When?</h5> <br />
            <input value={had_covid_at} onChange={(e) => handleHadCovidAt(e, dispatch)} type="date" max={today} />
          </>
        )}


        {/* Had vaccination or not */}
        <h5>Have you been vaccinated?</h5> <br />
        <input value="yes" onChange={(e) => handleVaccinated(e, dispatch)} type="checkbox" checked={vaccinated} />
        <label>Yes</label> <br />
        <input value="no" onChange={(e) => handleVaccinated(e, dispatch)} type="checkbox" checked={vaccinated === false} />
        <label>No</label>
        {vaccinated && (
          <>
            <h5>When did you get your last covid vaccine?</h5> <br />
            <input value={vaccinated_at} onChange={(e) => handleVaccinationDate(e, dispatch)} type="date" max={today} />
          </>
        )}


        <Navigation />
      </div>


      {/* Right side */}
      <div>
        <h2>Redberry Covid Policies</h2>
        <p>
          As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as
          safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our
          lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think
          face-to-face communications {`>`} Zoom meetings. Both on the fun and productivity scales.
        </p>
      </div>
    </>
  );
};

export default Covid;
