import axios from 'axios'

/*<------------------COMPANY JOBS FETCH ---------->*/
export const C_JOB_DATA = 'C_JOB_DATA'
export const C_JOB_FETCH_SUCCESS = 'C_JOB_FETCH_SUCCESS'
export const C_JOB_FETCH_FAILED = 'C_JOB_FETCH_FAILED '

export const getJobData = (jobs) => dispatch => {
    dispatch({ type: C_JOB_DATA })
    axios
    .get('', jobs)
    .then(res => {
        console.log('Initial Call for jobs', res.data)
        dispatch({ type: C_JOB_FETCH_SUCCESS, payload:res.data})
    })
    .catch(err => console.log('Initial Call jobs', err))
}