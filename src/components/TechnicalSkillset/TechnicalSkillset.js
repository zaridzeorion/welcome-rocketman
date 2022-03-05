import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { setSkills } from "../../store/slices/applicantSlice";
import { addSkill, delSkill } from "./functions";

const TechnicalSkillset = () => {
  // REDUX
  const dispatch = useDispatch();
  const applicant = useSelector((state) => state.applicant);

  // SKILLS API
  const SKILLS_REQUEST_URL = `https://bootcamp-2022.devtest.ge/api/skills`;
  const { data: technologies } = useFetch(SKILLS_REQUEST_URL);

  // ID for newly added skills
  const [id, setId] = useState(0);

  // INPUTS
  const [technology, setTechnology] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <>
      <div>
        {/* Skills are added from here */}
        <h2>Tell us about your skills</h2>
        <select defaultValue={technology} onChange={(e) => setTechnology(e.target.value)}>
          <option value="" disabled>
            Skills
          </option>
          {technologies &&
            technologies.map((option) => (
              <option key={option.id} value={option.title}>
                {option.title}
              </option>
            ))}
        </select>
        <br />
        <input
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          type="text"
          placeholder="Experience Duration in Years"
        />{" "}
        <br />
        <button onClick={() => addSkill(dispatch, experience, technology, setSkills, applicant, id, setId)}>
          Add Programming Language
        </button>
        {/* Skills are displayed from here  */}
        <ul>
          {applicant.skills &&
            applicant.skills.map((skill) => (
              <li key={skill.id}>
                {skill.title} {skill.experience}{" "}
                <button onClick={() => delSkill(skill.id, dispatch, applicant, setSkills)}>
                  Del
                </button>
              </li>
            ))}
        </ul>
        {/* NAVBAR */}
        <ul>
          <li>
            <Link to="/personal-information">Prev</Link>
          </li>
          <li>
            <Link to="/personal-information">personal-information</Link>
          </li>
          <li>
            <Link to="/skillset">skillset</Link>
          </li>
          <li>
            <Link to="/covid">covid</Link>
          </li>
          <li>
            <Link to="/insights">insights</Link>
          </li>
          <li></li>
          <li>
            <Link to="/covid">Next</Link>
          </li>
        </ul>
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
