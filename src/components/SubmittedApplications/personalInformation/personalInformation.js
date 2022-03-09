export const personalInformation = (user) => (
  <div>
    <h3>Personal Information</h3>
    <br />
    <p>First Name {user.first_name}</p>
    <p>Last Name {user.last_name}</p>
    <p>E Mail {user.email}</p>
    <p>Phone {user.phone}</p>
  </div>
);
