import { configureStore } from '@reduxjs/toolkit'
import applicantReducer from './reducers/applicantReducer'

const store = configureStore({
    reducer: {applicant: applicantReducer}
})

export default store