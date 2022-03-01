import pagesReducer from "./pages";
import applicantReducer from "./applicant";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  pages: pagesReducer,
  applicant: applicantReducer,
});

export default allReducers;
