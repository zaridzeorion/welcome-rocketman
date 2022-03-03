import { createAction } from "@reduxjs/toolkit";

export const setFirstName           = createAction("setFirstName");
export const setLastName            = createAction("setLastName");
export const setEmail               = createAction("setEmail");
export const setPhone               = createAction("setPhone");
export const setSkills              = createAction("setSkills");
export const setWorkPreference      = createAction("setWorkPreference");
export const setHadCovid            = createAction("setHadCovid");
export const setHadCovidAt          = createAction("setHadCovidAt");
export const setVaccinated          = createAction("setVaccinated");
export const setVaccinatedAt        = createAction("setVaccinatedAt");
export const setWillOrganizeDevtalk = createAction("setWillOrganizeDevtalk");
export const setDevtalkTopic        = createAction("setDevtalkTopic");
export const setSomethingSpecial    = createAction("setSomethingSpecial");
