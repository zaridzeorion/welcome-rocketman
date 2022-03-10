import { openSkillsetRoute, closeSkillsetRoute } from "../../store/slices/routesOpenClose";

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return re.test(email);
};

export const validatePhone = (phone) => {
  const re =
    /^(\+995\s?)(\d{3}[\-\s]?(\d{2}[\-\s]?\d{2}[\-\s]?\d{2}$|\d{3}[\-\s]?\d{3}$))/;

  return re.test(phone);
};

export const validatePage = (applicant, dispatch) => {
  const { first_name, last_name, email, phone } = applicant;

  dispatch(closeSkillsetRoute());

  if (
    first_name.length > 2 &&
    last_name.length > 2 &&
    validateEmail(email) &&
    !phone
      ? true
      : validatePhone(phone)
  ) {
    dispatch(openSkillsetRoute());
  }
};

export const validateForErrors = (applicant, setFirstNameError, setLastNameError, setEmailError, setPhoneError) => {
  setFirstNameError('')
  setLastNameError('')
  setEmailError('')
  setPhoneError('')

  const { first_name, last_name, email, phone } = applicant;

  if (first_name.length < 3) setFirstNameError('*first name should include at least 3 or more character')
  if (last_name.length < 3) setLastNameError('*last name should include at least 3 or more character')
  if (!validateEmail(email)) setEmailError('*should include valid email address')
  if (phone && !validatePhone(phone)) setPhoneError('*number should be Georgian')
}