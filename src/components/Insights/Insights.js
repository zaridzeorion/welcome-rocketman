import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleWillOrganizeDevtalk, handleDevtalkTopic, handleSomethingSpecial } from "./handlers";
import Navigation from "../Navigation";
import { validatePage } from './validatePage'

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const applicant = useSelector((state) => state.applicant);
  const { will_organize_devtalk, devtalk_topic, something_special } = applicant;

  useEffect(() => validatePage(applicant, dispatch), [applicant])

  return (
    <>
      <div>
        <h2>What about you?</h2>

        {/* Devtalk attend  */}
        <h4>Would you attend Devtalks and maybe also organize your own?</h4>
        <input
          value="yes"
          onChange={(e) => handleWillOrganizeDevtalk(e, dispatch)}
          type="checkbox"
          checked={will_organize_devtalk}
        />
        <label>Yes</label>

        <br />

        <input
          value="no"
          onChange={(e) => handleWillOrganizeDevtalk(e, dispatch)}
          type="checkbox"
          checked={will_organize_devtalk === false}
        />
        <label>No</label>

        <br />

        {/* Devtalk speech topic */}
        {will_organize_devtalk && (
          <>
            <h4>What would you speak about at Devtalk?</h4>
            <textarea
              value={devtalk_topic}
              onChange={(e) => handleDevtalkTopic(e, dispatch)}
              placeholder="I would..."
            />
          </>
        )}

        {/* Something special  */}
        <h4>Tell us something special</h4>
        <textarea
          value={something_special}
          onChange={(e) => handleSomethingSpecial(e, dispatch)}
          placeholder="I..."
        />

        <Navigation />
      </div>

      {/* Right side */}
      <div>
        <h2>Redberrian Insights</h2>
        <p>
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
    </>
  );
};

export default PersonalInformation;
