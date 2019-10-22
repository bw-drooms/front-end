import axios from 'axios'

/*<------------------COMPANY JOBS FETCH ---------->*/
export const C_JOB_DATA = 'C_JOB_DATA'
export const C_JOB_FETCH_SUCCESS = 'C_JOB_FETCH_SUCCESS'
export const C_JOB_FETCH_FAILED = 'C_JOB_FETCH_FAILED '

export const getJobData = (jobs) => dispatch => {
    dispatch({ type: C_JOB_DATA })
    axios
    .get('https://droom6.herokuapp.com/api/jobs')
    .then(res => {
        console.log('Initial Call for jobs', res.data)
        dispatch({ type: C_JOB_FETCH_SUCCESS, payload:res.data})
    })
    .catch(err => console.log('Initial Call jobs', err))
}
/*<------------------EDIT AND DELETE FOR C JOBS ---------->*/
export const EDIT_C_JOB_DATA = 'EDIT_C_JOB_DATA'
export const EDIT_C_JOB_DATA_SUCCESS = 'EDIT_C_JOB_DATA_SUCCESS'
export const editJobData = (id) => dispatch => {
   dispatch({ type: EDIT_C_JOB_DATA}) 
   axios
   .put('', id)
   .then(res => {
       console.log('Edited data on job', id)
       dispatch({ type: EDIT_C_JOB_DATA_SUCCESS, payload: res.data})
   })
   .catch(err => console.log('Edit job err', err))
}