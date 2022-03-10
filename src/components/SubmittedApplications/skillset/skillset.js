import styles from "./skillset.module.css";

export const skillset = (user, technologies) => (
  <div className={styles.Container}>
    <h3 className={styles.Title}>Skillset</h3>
    <ul>
      {user &&
        user.skills &&
        user.skills.map((skill, id) => {
          return (
            <li key={id}>
              {technologies && technologies[skill.id - 1].title}
              <span className={styles.marginLeft}>
                Years of experience: {skill.experience}
              </span>
            </li>
          );
        })}
    </ul>
  </div>
);
