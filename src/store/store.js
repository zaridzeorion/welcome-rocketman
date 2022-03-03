import { configureStore } from '@reduxjs/toolkit'
import applicantReducer from './slices/applicantSlice'

const store = configureStore({
    reducer: {applicant: applicantReducer}
})

export default store