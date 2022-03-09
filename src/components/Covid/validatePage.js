import {
  openInsightsRoute,
  closeInsightsRoute,
} from "../../store/slices/routesOpenClose";

export const validatePage = (applicant, dispatch) => {
  const {
    work_preference,
    had_covid,
    had_covid_at,
    vaccinated,
    vaccinated_at,
  } = applicant;

  dispatch(closeInsightsRoute());

  if (work_preference && had_covid === false && vaccinated === false) {
    dispatch(openInsightsRoute());
  }

  if (vaccinated && vaccinated_at && had_covid === false)
    dispatch(openInsightsRoute());

  if (had_covid && had_covid_at && vaccinated === false)
    dispatch(openInsightsRoute());

  if (had_covid && had_covid_at && vaccinated && vaccinated_at)
    dispatch(openInsightsRoute());
};
