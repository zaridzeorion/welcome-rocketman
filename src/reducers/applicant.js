let applicant = {
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

const applicantReducer = (state = applicant, action) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...applicant, first_name: action.payload };
    case "SET_LAST_NAME":
      return { ...applicant, first_name: action.payload };
    case "SET_EMAIL":
      return { ...applicant, first_name: action.payload };
    case "SET_PHONE":
      return { ...applicant, first_name: action.payload };
    case "SET_SKILLS":
      return { ...applicant, first_name: action.payload };
    case "SET_WORK_PREFEREMCE":
      return { ...applicant, first_name: action.payload };
    case "SET_HAD_COVID":
      return { ...applicant, first_name: action.payload };
    case "SET_HAD_COVID_AT":
      return { ...applicant, first_name: action.payload };
    case "SET_VACCINATED":
      return { ...applicant, first_name: action.payload };
    case "SET_VACCINATED_AT":
      return { ...applicant, first_name: action.payload };
    case "SET_WILL_ORGANIZE_DEVTALK":
      return { ...applicant, first_name: action.payload };
    case "SET_DEVTALK_TOPIC":
      return { ...applicant, first_name: action.payload };
    case "SET_SOMETHING_SPECIAL":
      return { ...applicant, first_name: action.payload };
    default:
      return state;
  }
};

export default applicantReducer;
