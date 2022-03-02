import React from "react";

const PersonalInformation = () => {
  return (
    <>
      <div>
        <h4>Would you attend Devtalks and maybe also organize your own?</h4>
        <input type="checkbox" />
        <label>Yes</label>

        <br />

        <input type="checkbox" />
        <label>No</label>

        <br />

        <h4>What would you speak about at Devtalk?</h4>
        <textarea placeholder="I would..." />

        <h4>Tell us something special</h4>
        <textarea placeholder="I..." />
      </div>

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
