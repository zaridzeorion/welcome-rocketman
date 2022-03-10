import applicantSlice, {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
} from "../../store/slices/applicantSlice";

export const handleFirstName = (e, dispatch) => {
  let first_name = e.target.value;
  dispatch(setFirstName(first_name));
};

export const handleLastName = (e, dispatch) => {
  let last_name = e.target.value;
  dispatch(setLastName(last_name));
};

export const handleEmail = (e, dispatch) => {
  let email = e.target.value;
  dispatch(setEmail(email));
};

export const handlePhone = (e, dispatch) => {
  let phone = e.target.value;
  dispatch(setPhone(phone));
};
