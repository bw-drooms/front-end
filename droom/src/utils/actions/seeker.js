import axiosWithAuth  from '../axiosWithAuth';
import actionCreator from './actionCreator';
export const S_JOB_DATA = 'S_JOB_DATA'
export const S_JOB_FETCH_SUCCESS = 'S_JOB_FETCH_SUCCESS'
export const S_JOB_FETCH_FAILED = 'S_JOB_FETCH_FAILED '
export const APPROVE_MATCH = 'APPROVE_MATCH';
export const MATCHES_FETCHED = 'MATCHES_FETCHED';
export const MATCH_ERROR = 'MATCH_ERROR';
export const DISAPPROVE_MATCH = 'DISAPPROVE_MATCH';
export const FETCHED_CURRENT_MATCHES = 'FETCHED_CURRENT_MATCHES';
export const CURRENT_MATCHES_ERROR = 'CURRENT_MATCHES_ERROR';

export const getSeekerJobs = (jobs) => dispatch => {
    dispatch({ type: S_JOB_DATA })
    axiosWithAuth()
    .get('https://droom6.herokuapp.com/api/jobs')
    .then(res => {
        console.log('Initial Call for jobs', res.data)
        dispatch({ type: S_JOB_FETCH_SUCCESS, payload:res.data})
    })
    .catch(err => console.log('Initial Call jobs', err))
}


//////////////match///////////////
