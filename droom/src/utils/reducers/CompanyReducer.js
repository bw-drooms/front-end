//import actions to use
import { C_JOB_DATA, C_JOB_FETCH_SUCCESS, C_JOB_FETCH_FAILED } from '../actions'
//sets initial state
const initialState = {
    jobs: [],
    company: [],
    isFetching: false,
    isUpdating: false,
    error: 'Error Response'

}
//may need more state

//company reducer
const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case C_JOB_DATA:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case C_JOB_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                jobs: action.payload
            }
        case C_JOB_FETCH_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case DELETE_C_JOB:
                let newState = {...state}
                let jobs = newState.jobs.filter(
                    jobs => jobs.id !== action.payload) 
                    return {
                        ...state,
                        isUpdating: true,
                        error: '',
                        jobs
            }
        default:
            return state
    }
}

export default companyReducer