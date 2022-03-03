import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  skills: [],
  work_preference: "",
  had_covid: "",
  had_covid_at: "",
  vaccinated: "",
  vaccinated_at: "",
  will_organize_devtalk: "",
  devtalk_topic: "",
  something_special: "",
};

const applicantSlice = createSlice({
  name: "applicant",
  initialState,
  reducers: {
    setFirstName(state, action) {
      return { ...state, first_name: action.payload };
    },
    setLastName(state, action) {
      return { ...state, last_name: action.payload };
    },
    setEmail(state, action) {
      return { ...state, email: action.payload };
    },
    setPhone(state, action) {
      return { ...state, phone: action.payload };
    },
    setSkills(state, action) {
      return { ...state, skills: action.payload };
    },
    setWorkPreference(state, action) {
      return { ...state, work_preference: action.payload };
    },
    setHadCovid(state, action) {
      return { ...state, had_covid: action.payload };
    },
    setHadCovidAt(state, action) {
      return { ...state, had_covid_at: action.payload };
    },
    setVaccinated(state, action) {
      return { ...state, vaccinated: action.payload };
    },
    setVaccinatedAt(state, action) {
      return { ...state, vaccinated_at: action.payload };
    },
    setWillOrganizeDevtalk(state, action) {
      return { ...state, will_organize_devtalk: action.payload };
    },
    setDevtalkTopic(state, action) {
      return { ...state, devtalk_topic: action.payload };
    },
    setSomethingSpecial(state, action) {
      return { ...state, something_special: action.payload };
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setSkills,
  setWorkPreference,
  setHadCovid,
  setHadCovidAt,
  setVaccinated,
  setVaccinatedAt,
  setWillOrganizeDevtalk,
  setDevtalkTopic,
  setSomethingSpecial,
} = applicantSlice.actions;

export default applicantSlice.reducer;
