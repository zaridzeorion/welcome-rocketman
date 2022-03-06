import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setWillOrganizeDevtalk, setDevtalkTopic, setSomethingSpecial } from "../store/slices/applicantSlice";

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const applicant = useSelector((state) => state.applicant);
  const { will_organize_devtalk, devtalk_topic, something_special } = applicant;

  const handleWillOrganizeDevtalk = e => {
    let checked = e.target.value

    checked === 'yes' && dispatch(setWillOrganizeDevtalk(true)) 
    checked === 'no' && dispatch(setWillOrganizeDevtalk(false))
  }

  const handleDevtalkTopic = e => {
    let topic = e.target.value

    topic && dispatch(setDevtalkTopic(topic))
  }

  const handleSomethingSpecial = e => {
    let something_special = e.target.value

    something_special && dispatch(setSomethingSpecial(something_special))
  }

  return (
    <>
      <div>
        <h4>Would you attend Devtalks and maybe also organize your own?</h4>
        <input value="yes" onChange={e => handleWillOrganizeDevtalk(e)} type="checkbox" checked={will_organize_devtalk} />
        <label>Yes</label>

        <br />

        <input value="no" onChange={e => handleWillOrganizeDevtalk(e)} type="checkbox" checked={will_organize_devtalk === false} />
        <label>No</label>

        <br />

        <h4>What would you speak about at Devtalk?</h4>
        <textarea value={devtalk_topic} onChange={e => handleDevtalkTopic(e)} placeholder="I would..." />

        <h4>Tell us something special</h4>
        <textarea value={something_special} onChange={e => handleSomethingSpecial(e)} placeholder="I..." />


        {/* Navbar  */}
        <ul>
          <li><Link to="/covid">Prev</Link></li>
          <li><Link to="/personal-information">personal-information</Link></li>
          <li><Link to="/skillset">skillset</Link></li>
          <li><Link to="/covid">covid</Link></li>
          <li><Link to="/insights">insights</Link></li>
          <li></li>
          <li>Next</li>
        </ul>
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
