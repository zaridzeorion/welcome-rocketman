import {
  setWillOrganizeDevtalk,
  setDevtalkTopic,
  setSomethingSpecial,
} from "../../store/slices/applicantSlice";

export const handleWillOrganizeDevtalk = (e, dispatch) => {
  let checked = e.target.value;

  checked === "yes" && dispatch(setWillOrganizeDevtalk(true));
  checked === "no" && dispatch(setWillOrganizeDevtalk(false));
};

export const handleDevtalkTopic = (e, dispatch) => {
  let topic = e.target.value;

  dispatch(setDevtalkTopic(topic));
};

export const handleSomethingSpecial = (e, dispatch) => {
  let something_special = e.target.value;

  dispatch(setSomethingSpecial(something_special));
};
