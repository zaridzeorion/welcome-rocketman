import { createReducer } from "@reduxjs/toolkit";

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

const applicantReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFirstName, (state, action) => {
      return { ...state, first_name: action.payload };
    })
    .addCase(setLastName, (state, action) => {
      return { ...state, last_name: action.payload };
    })
    .addCase(setEmail, (state, action) => {
      return { ...state, email: action.payload };
    })
    .addCase(setPhone, (state, action) => {
      return { ...state, phone: action.payload };
    })
    .addCase(setSkills, (state, action) => {
      return { ...state, skills: action.payload };
    })
    .addCase(setWorkPreference, (state, action) => {
      return { ...state, work_preference: action.payload };
    })
    .addCase(setHadCovid, (state, action) => {
      return { ...state, had_covid: action.payload };
    })
    .addCase(setHadCovidAt, (state, action) => {
      return { ...state, had_covid_at: action.payload };
    })
    .addCase(setVaccinated, (state, action) => {
      return { ...state, vaccinated: action.payload };
    })
    .addCase(setVaccinatedAt, (state, action) => {
      return { ...state, vaccinated_at: action.payload };
    })
    .addCase(setWillOrganizeDevtalk, (state, action) => {
      return { ...state, will_organize_devtalk: action.payload };
    })
    .addCase(setDevtalkTopic, (state, action) => {
      return { ...state, devtalk_topic: action.payload };
    })
    .addCase(setSomethingSpecial, (state, action) => {
      return { ...state, something_special: action.payload };
    });
});

export default applicantReducer;
