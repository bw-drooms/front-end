//import actions to use
import { S_JOB_DATA, S_JOB_FETCH_SUCCESS, S_JOB_FETCH_FAILED } from '../actions/seeker'
//sets initial state
const initialState = {
    jobs: [],
    seeker: [],
    isFetching: false,
    isUpdating: false,
    error: 'Error Response'

}
//may need more state

//Seeker reducer
const seekerReducer = (state = initialState, action) => {
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
        default:
            return state
    }
}

export default seekerReducer