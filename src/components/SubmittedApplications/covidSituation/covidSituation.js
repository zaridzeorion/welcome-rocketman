export const covidSituation = (user) => (
  <div>
    <h3>Covid Situation</h3>

    <h4>How would you prefer to work?</h4>
    <input
      readOnly
      type="checkbox"
      checked={user.work_preference === "from_office" ? true : false}
    />
    <label>From Sairme Office</label>

    <br />

    <input
      readOnly
      type="checkbox"
      checked={user.work_preference === "from_home" ? true : false}
    />
    <label>From Home</label>

    <br />

    <input
      readOnly
      type="checkbox"
      checked={user.work_preference === "hybrid" ? true : false}
    />
    <label>Hybrid</label>

    <h4>When did you have covid 19?</h4>
    <input readOnly type="date" value={user.had_covid_at} />

    <h4>Have you been vaccinated?</h4>
    <input readOnly type="checkbox" checked={user.vaccinated && true} />
    <label>Yes</label>

    <br />

    <input readOnly type="checkbox" checked={!user.vaccinated && true} />
    <label>No</label>

    <h3>When did you get covid vaccine?</h3>
    <input readOnly type="date" value={user.vaccinated_at} />
  </div>
);
