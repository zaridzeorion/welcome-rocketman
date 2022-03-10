import { openCovidRoute, closeCovidRoute } from '../../store/slices/routesOpenClose'

export const validatePage = (applicant, dispatch) => {
    dispatch(closeCovidRoute())

    if(applicant.skills.length > 0) dispatch(openCovidRoute())
}

export const validateForError = (applicant, setSkillsErrors) => {
    setSkillsErrors('')

    if(applicant.skills.length === 0) setSkillsErrors('*include at least 1 skill')
}