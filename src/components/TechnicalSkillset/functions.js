export const addSkill = (
  dispatch,
  experience,
  technology,
  setSkills,
  applicant,
  id,
  setId
) => {
  const onlyNumsRe = /^[1-9]+[0-9]*$/;

  if (onlyNumsRe.test(experience) && technology) {
    dispatch(
      setSkills([
        ...applicant.skills,
        { title: technology, experience: experience, id: id },
      ])
    );
    setId(id + 1);
  }

  // If skill is already addded:
  applicant.skills.find((skill) => {
    if (skill && skill.title.toLowerCase() === technology.toLowerCase()) {
      dispatch(setSkills([...applicant.skills]));
    }
  });
};

export const delSkill = (id, dispatch, applicant, setSkills) => {
  const filteredUserSkills = applicant.skills.filter((skill) => {
    return skill.id !== id;
  });

  dispatch(setSkills(filteredUserSkills));
};
