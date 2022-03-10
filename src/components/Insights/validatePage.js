import {
  openSubmitRoute,
  closeSubmitRoute,
} from "../../store/slices/routesOpenClose";

export const validatePage = (applicant, dispatch) => {
  const { will_organize_devtalk, devtalk_topic, something_special } = applicant;

  dispatch(closeSubmitRoute());

  if (will_organize_devtalk && devtalk_topic.length > 0 && something_special.length > 0)
    dispatch(openSubmitRoute());

  if (will_organize_devtalk === false && something_special.length > 0)
    dispatch(openSubmitRoute());
};

export const validateForErrors = (applicant, setDevtalkError, setSpecialError) => {
  setDevtalkError('')
  setSpecialError('')

  const { will_organize_devtalk, devtalk_topic, something_special } = applicant

  if(will_organize_devtalk && devtalk_topic.length === 0) setDevtalkError('*include devtalk topic')
  if(something_special.length === 0) setSpecialError('*tell us something special')

}
