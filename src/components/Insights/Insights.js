import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleWillOrganizeDevtalk, handleDevtalkTopic, handleSomethingSpecial } from "./handlers";
import Navigation from "../Navigation";
import { validatePage, validateForErrors } from "./validatePage";
import styles from './Insights.module.css'

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const applicant = useSelector((state) => state.applicant);
  const { will_organize_devtalk, devtalk_topic, something_special } = applicant;

  // FOR ERROR HANDLING
  const [devtalkError, setDevtalkError] = useState('')
  const [specialError, setSpecialError] = useState('')

  useEffect(() => {
    validatePage(applicant, dispatch)
    validateForErrors(applicant, setDevtalkError, setSpecialError)
  }, [applicant]);

  return (
    <div className="Page">
      <div className="Left">
        <h2 className="Title">What about you?</h2>

        {/* Devtalk attend  */}
        <div style={{color: 'black'}} className="Form">
          <h4 className={styles.SubTitle}>Would you attend Devtalks and maybe also organize your own?</h4>
          <input
            value="yes"
            onChange={(e) => handleWillOrganizeDevtalk(e, dispatch)}
            type="radio"
            checked={will_organize_devtalk}
          />
          <label>Yes</label>

          <br />

          <input
            value="no"
            onChange={(e) => handleWillOrganizeDevtalk(e, dispatch)}
            type="radio"
            checked={will_organize_devtalk === false}
          />
          <label>No</label>

          <br />

          {/* Devtalk speech topic */}
          {will_organize_devtalk && (
            <>
              <h4 className={styles.SubTitle}>What would you speak about at Devtalk?</h4>
              <textarea
                className={`${styles.TextArea} ${devtalkError && "RedOutline"}`}
                value={devtalk_topic}
                onChange={(e) => handleDevtalkTopic(e, dispatch)}
                placeholder="I would..."
              />
              <label className="ErrorLabel">{devtalkError && devtalkError}</label>
            </>
          )}

          {/* Something special  */}
          <h4 className={styles.SubTitle}>Tell us something special</h4>
          <textarea
            className={`${styles.TextArea} ${styles.LessHeight} ${specialError && "RedOutline"}`}
            value={something_special}
            onChange={(e) => handleSomethingSpecial(e, dispatch)}
            placeholder="I..."
          />
          <label className="ErrorLabel">{specialError && specialError}</label>


          <Navigation />
        </div>
      </div>
      {/* Right side */}
      <div className="Right">
        <h2 className="Title">Redberrian Insights</h2>
        <p className="Description">
          We were soo much fun before the pandemic started! Parties almost every
          weekend and lavish employee birthday celebrations! Unfortunately,
          covid ruined that fun like it did almost everything else in the world.
          But we try our best to zhuzh it up a bit. For example, we host
          biweekly Devtalks where our senior and lead developers talk about
          topics they are passionate about. Previous topics have included Web3,
          NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but
          you can join our Zoom broadcast as well. Feel free to join either as
          an attendee or a speaker!
        </p>
      </div>
    </div>
  );
};

export default PersonalInformation;
