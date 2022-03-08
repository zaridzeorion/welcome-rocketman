import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "use-http";
import { setSkills } from "../../store/slices/applicantSlice";
import Navigation from "../Navigation";
import { addSkill, delSkill } from "./functions";

const TechnicalSkillset = () => {
  // REDUX
  const dispatch = useDispatch();
  const applicant = useSelector((state) => state.applicant);

  // SKILLS API
  const SKILLS_REQUEST_URL = `https://bootcamp-2022.devtest.ge/api/skills`;
  const { skills = [] } = useFetch(SKILLS_REQUEST_URL, [])

  // ID for newly added skills
  const [id, setId] = useState(0);

  // INPUTS
  const [technology, setTechnology] = useState();
  const [experience, setExperience] = useState();

  return (
    <>
      <div>
        {/* Skills are added from here */}
        <h2>Tell us about your skills</h2>
        <select defaultValue={technology} onChange={(e) => setTechnology(e.target.value)}>
          <option value="" disabled>
            Skills
          </option>

          {
            skills && skills.map(skill => (
              <option>{skill.title}</option>
            ))
          }

        </select>

        <br />

        <input
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          type="number"
          placeholder="Experience Duration in Years"
        />

        <br />
        
        <button onClick={() => addSkill(experience, technology, dispatch, setSkills, applicant, id, setId)}>
          Add Programming Language
        </button>

        
        {/* Added skills are displayed here  */}
        <ul>
          {applicant.skills.map(skill => 
            <li key={skill.id}>
              <p>{skill.title} | Years of experience {skill.experience}</p>
              <button onClick={() => delSkill(dispatch, applicant, setSkills, skill.id)}>-</button>
            </li>
          )}
        </ul>

        
        <Navigation />
      </div>

      <div>
        <h2>A bit about out battles</h2>
        As we said, Redberry has been on the field for quite some time now, and we have touched and
        embraced a variety of programming languages, technologies, philosophies, and frameworks. We
        are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with
        Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3
        industry.
      </div>
    </>
  );
};

export default TechnicalSkillset;
