import axiosWithAuth from '../axiosWithAuth'
export const S_JOB_DATA = 'S_JOB_DATA'
export const S_JOB_FETCH_SUCCESS = 'S_JOB_FETCH_SUCCESS'
export const S_JOB_FETCH_FAILED = 'S_JOB_FETCH_FAILED '

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