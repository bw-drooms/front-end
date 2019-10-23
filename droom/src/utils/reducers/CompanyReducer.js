//import actions to use
import { COMPANY_FETCH, COMPANY_FETCH_SUCCESS, COMPANY_FETCH_FAILED, C_JOB_DATA, C_JOB_FETCH_SUCCESS, C_JOB_FETCH_FAILED, DELETE_C_JOB, DELETE_C_JOB_FAILED, C_JOB_ADD, C_JOB_ADD_SUCCESS, C_JOB_ADD_FAILED, EDIT_C_JOB_DATA, EDIT_C_JOB_DATA_SUCCESS } from '../actions'
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
        case COMPANY_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case C_JOB_DATA:
            return {
                ...state,
                isFetching: true,
                isUpdating: true,
                error: ''
            }
        case COMPANY_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                company: action.payload
            }
        case C_JOB_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isUpdating: false,
                error: '',
                jobs: action.payload
            }
        case COMPANY_FETCH_FAILED:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
        case C_JOB_FETCH_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
            case DELETE_C_JOB_FAILED:
                return{
                    isUpdating: false,
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
        case C_JOB_ADD:
            return{
                ...state,
                isFetching: true,
                isUpdating: true,
                error: ''
            }
        case C_JOB_ADD_SUCCESS:
            return{
                    ...state,
                    isFetching: false,
                    isUpdating: false,
                    error: '',
                    jobs: action.payload
            }
            case C_JOB_ADD_FAILED:
                    return {
                        ...state,
                        isFetching: false,
                        isUpdating: false,
                        error: action.payload,
                    }
            case EDIT_C_JOB_DATA:
                return {
                    ...state,
                    isFetching: true,
                    isUpdating: true,
                    error: '',
                }
            case EDIT_C_JOB_DATA_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    isUpdating: false,
                    error: action.payload,
                }
        default:
            return state
    }
}

export default companyReducer