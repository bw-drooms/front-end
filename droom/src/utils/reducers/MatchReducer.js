//import actions to use
import { S_JOB_DATA, S_JOB_FETCH_SUCCESS, S_JOB_FETCH_FAILED } from '../actions/seeker'
import {GET_APPLICANTS, GET_APPLICANTS_SUCCESS, GET_APPLICANTS_FAILED }from '../MatchActions/'

//sets initial state

const initialState = {
    jobs: [],
    seeker: [],
    comapnies:[],
    isFetching: false,
    isUpdating: false,
    error: 'Error Response'

}
//may need more state

//Seeker reducer
const MatchReducer = (state = initialState, action) => {
    switch (action.type) {
        case S_JOB_DATA:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case S_JOB_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                jobs: action.payload
            }
        case S_JOB_FETCH_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case GET_APPLICANTS:
            return{
                ...state,
                isFetching: true,
                error:''
            }
            case GET_APPLICANTS_SUCCESS:
                return{
                    ...state,
                    isFetching:false,
                    error:''
                }
        case GET_APPLICANTS_FAILED:
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }

        default:
            return state
    }
}

export default MatchReducer