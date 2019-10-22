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
        default:
            return state
    }
}

export default companyReducer