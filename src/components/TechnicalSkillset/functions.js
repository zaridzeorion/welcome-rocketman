export const addSkill = (
  experience,
  technology,
  dispatch,
  setSkills,
  applicant,
  id,
  setId
) => {
  if (experience && technology) {
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
      // return same array
      dispatch(setSkills([...applicant.skills]));
    }
  });
};

export const delSkill = (dispatch, applicant, setSkills, id) => {
  const filteredUserSkills = applicant.skills.filter((skill) => {
    return skill.id !== id;
  });

  dispatch(setSkills(filteredUserSkills));
};
