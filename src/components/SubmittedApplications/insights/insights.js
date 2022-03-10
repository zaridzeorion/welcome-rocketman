import styles from './insights.module.css'

export const insights = (user) => (
  <div className={styles.Container}>
    <h3 className={styles.Title}>Insights</h3>

    <h4 className={styles.SubTitle}>Would you attend Devtalks and maybe also organize your own?</h4>
    <input
      readOnly
      type="radio"
      checked={user.will_organize_devtalk && true}
    />
    <label>Yes</label>

    <br />

    <input
      readOnly
      type="radio"
      checked={!user.will_organize_devtalk && true}
    />
    <label>No</label>

    <br />

    <h4 className={styles.SubTitle}>What would you speak about at Devtalk?</h4>
    <textarea className={styles.TextArea} readOnly value={user.devtalk_topic} />

    <h4 className={styles.SubTitle}>Tell us something special</h4>
    <textarea className={`${styles.TextArea} ${styles.LessHeight}`} readOnly value={user.something_special} />
  </div>
);
