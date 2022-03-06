import {
  setWorkPreference,
  setHadCovid,
  setHadCovidAt,
  setVaccinated,
  setVaccinatedAt,
} from "../../store/slices/applicantSlice";

export const handleWorkPreference = (e, dispatch) => {
  let checked = e.target.value;

  checked === "from_office" && dispatch(setWorkPreference("from_office"));
  checked === "from_home" && dispatch(setWorkPreference("from_home"));
  checked === "hybrid" && dispatch(setWorkPreference("hybrid"));
};

export const handleHadCovid = (e, dispatch) => {
  let checked = e.target.value;

  checked === "yes" && dispatch(setHadCovid(true));
  checked === "no" && dispatch(setHadCovid(false));
};

export const handleHadCovidAt = (e, dispatch) => {
  let date = e.target.value;
  dispatch(setHadCovidAt(date));
};

export const handleVaccinated = (e, dispatch) => {
  let checked = e.target.value;
  checked === "yes" && dispatch(setVaccinated(true));
  checked === "no" && dispatch(setVaccinated(false));
};

export const handleVaccinationDate = (e, dispatch) => {
  let date = e.target.value;
  dispatch(setVaccinatedAt(date));
};
