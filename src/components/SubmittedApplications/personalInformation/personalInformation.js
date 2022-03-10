import styles from './personalInformation.module.css'

const { Container, Title, FirstName, LastName, Email, Phone, marginLeft } = styles

export const personalInformation = (user) => (
  <div className={Container}>
    <h3 className={Title}>Personal Information</h3>
    <br />
    <p className={FirstName}>First Name <span className={marginLeft}>{user.first_name}</span></p>
    <p className={LastName}>Last Name <span className={marginLeft}>{user.last_name}</span></p>
    <p className={Email}>E Mail <span className={marginLeft}>{user.email}</span></p>
    <p className={Phone}>Phone <span className={marginLeft}>{user.phone}</span></p>
  </div>
);
