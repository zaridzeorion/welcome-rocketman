import styles from "./covidSituation.module.css";

export const covidSituation = (user) => (
  <div className={styles.Container}>
    <h3 className={styles.Title}>Covid Situation</h3>

    <h4 className={styles.SubTitle}>How would you prefer to work?</h4>
    <input
      readOnly
      type="radio"
      checked={user.work_preference === "from_office" ? true : false}
    />
    <label>From Sairme Office</label>

    <br />

    <input
      readOnly
      type="radio"
      checked={user.work_preference === "from_home" ? true : false}
    />
    <label>From Home</label>

    <br />

    <input
      readOnly
      type="radio"
      checked={user.work_preference === "hybrid" ? true : false}
    />
    <label>Hybrid</label>

    <h4 className={styles.SubTitle}>Did you have covid 19?</h4>
    <input readOnly type="radio" checked={user.had_covid && true} />
    <label>Yes</label>

    <br />

    <input readOnly type="radio" checked={!user.had_covid && true} />
    <label>No</label>

    <h4 className={styles.SubTitle}>When did you have covid 19?</h4>
    <input
      style={{ width: "349px" }}
      className="Input"
      readOnly
      type="date"
      value={user.had_covid_at}
    />

    <h4 className={styles.SubTitle}>Have you been vaccinated?</h4>
    <input readOnly type="radio" checked={user.vaccinated && true} />
    <label>Yes</label>

    <br />

    <input readOnly type="radio" checked={!user.vaccinated && true} />
    <label>No</label>

    <h4 className={styles.SubTitle}>When did you get covid vaccine?</h4>
    <input
      style={{ width: "349px" }}
      className="Input"
      readOnly
      type="date"
      value={user.vaccinated_at}
    />
  </div>
);
