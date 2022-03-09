export const skillset = (user, technologies) => (
  <div>
    <h3>Skillset</h3>
    <ul>
      {user &&
        user.skills &&
        user.skills.map((skill, id) => {
          return (
            <li key={id}>
              {technologies && technologies[skill.id - 1].title} Years of
              experience: {skill.experience}
            </li>
          );
        })}
    </ul>
  </div>
);
