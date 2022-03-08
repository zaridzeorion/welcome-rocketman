import { createSlice } from "@reduxjs/toolkit";

// If true - route is open for that page
// If false - route is closed for that page
let initialState = {
  skillset: true,
  covid: false,
  insights: false,
  submit: false,
};

const routesOpenClose = createSlice({
  name: "routesOpenClose",
  initialState,
  reducers: {
    openSkillsetRoute(state) {
      return { ...state, skillset: true };
    },
    openCovidRoute(state) {
      return { ...state, covid: true };
    },
    openInsightsRoute(state) {
      return { ...state, insights: true };
    },
    openSubmitRoute(state) {
      return { ...state, submit: true };
    },

    closeSkillsetRoute(state) {
      return { ...state, skillset: false };
    },
    closeCovidRoute(state) {
      return { ...state, covid: false };
    },
    closeInsightsRoute(state) {
      return { ...state, insights: false };
    },
    closeSubmitRoute(state) {
      return { ...state, submit: false };
    },
  },
});

export const {
  openSkillsetRoute,
  openCovidRoute,
  openInsightsRoute,
  openSubmitRoute,
  closeSkillsetRoute,
  closeCovidRoute,
  closeInsightsRoute,
  closeSubmitRoute,
} = routesOpenClose.actions;

export default routesOpenClose.reducer;
