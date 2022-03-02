import React from "react";

const TechnicalSkillset = () => {
  return (
    <>
      <div>
        <h2>Tell us about your skills</h2>

        <select>
            <option>Skills</option>
            <option>React</option>
            <option>PHP</option>
        </select>
        <br />
        <input type="text" placeholder="Experience Duration in Years" /> <br />
        <button>Add Programming Language</button>

        <ul>
            
        </ul>

      </div>

      <div>
        <h2>A bit about out battles</h2>
        As we said, Redberry has been on the field for quite some time now, and
        we have touched and embraced a variety of programming languages,
        technologies, philosophies, and frameworks. We are battle-tested in PHP
        Laravel Stack with Vue.js, refined in React, and allies with Serverside
        technologies like Docker and Kubernetes, and now we have set foot in the
        web3 industry.
      </div>
    </>
  );
};

export default TechnicalSkillset;
