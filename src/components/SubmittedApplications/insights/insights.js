export const insights = (user) => (
  <div>
    <h3>Insights</h3>

    <h4>Would you attend Devtalks and maybe also organize your own?</h4>
    <input
      readOnly
      type="checkbox"
      checked={user.will_organize_devtalk && true}
    />
    <label>Yes</label>

    <br />

    <input
      readOnly
      type="checkbox"
      checked={!user.will_organize_devtalk && true}
    />
    <label>No</label>

    <br />

    <h4>What would you speak about at Devtalk?</h4>
    <textarea readOnly value={user.devtalk_topic} />

    <h4>Tell us something special</h4>
    <textarea readOnly value={user.something_special} />
  </div>
);
