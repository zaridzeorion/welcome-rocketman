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
