import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "use-http";
import { setSkills } from "../../store/slices/applicantSlice";
import { addSkill, delSkill } from "./functions";
import { validatePage, validateForError } from "./validatePage";
import Navigation from "../Navigation";

import styles from './TechnicalSkillset.module.css'
import RemoveImg from '../../images/skillset/Remove.png'

const TechnicalSkillset = () => {
  // REDUX
  const dispatch = useDispatch();
  const applicant = useSelector((state) => state.applicant);

  // SKILLS API
  const SKILLS_REQUEST_URL = `https://bootcamp-2022.devtest.ge/api/skills`;
  const { data: skills = [] } = useFetch(SKILLS_REQUEST_URL, []);

  // ID for newly added skills
  const [id, setId] = useState(0);

  // INPUTS
  const [technology, setTechnology] = useState();
  const [experience, setExperience] = useState();

  // ERRORS
  const [skillsError, setSkillsError] = useState('') 

  useEffect(() => {
    validatePage(applicant, dispatch);
    validateForError(applicant, setSkillsError)
  }, [applicant]);

  return (
    <div className="Page">
      <div className="Left">
        <h2 className="Title">Tell us about your skills</h2>

        {/* Skills are added from here */}
        <div className="Form">
          <select
            className={`${skillsError && "RedOutline"} Input`}
            defaultValue=""
            onChange={(e) => setTechnology(e.target.value)}
          >
            <option value="" disabled>
              Skills
            </option>
            

            {skills && skills.map((skill, id) => <option key={id}>{skill.title}</option>)}
          </select>
          <label className="ErrorLabel">{skillsError && skillsError}</label>

          <br />

          <input
            className="Input"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            type="number"
            placeholder="Experience Duration in Years"
          />

          <br />

          <button className={styles.AddButton} onClick={() => addSkill(experience, technology, dispatch, setSkills, applicant, id, setId)}>
            <p className={styles.Add}>Add Programming Language</p>
          </button>


        {/* Added skills are displayed here  */}
        <ul className={styles.AddedSkills}>
          {applicant.skills.map((skill) => (
            <li className="Input" key={skill.id}>
              <span className={styles.SkillTitle}>{skill.title}</span> <span className={styles.SkillExperience}>Years of experience {skill.experience}</span>
              <img className={styles.RemoveSkill} onClick={() => delSkill(dispatch, applicant, setSkills, skill.id)} src={RemoveImg} alt="Remove skill" />
            </li>
          ))}
        </ul>


        <Navigation />
        </div>
      </div>

      <div className="Right">
        <h2 className="Title">A bit about out battles</h2>
        <p className="Description"> 
          As we said, Redberry has been on the field for quite some time now, and
          we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in PHP
          Laravel Stack with Vue.js, refined in React, and allies with Serverside
          technologies like Docker and Kubernetes, and now we have set foot in the
          web3 industry.
        </p>
      </div>
    </div>
  );
};

export default TechnicalSkillset;
