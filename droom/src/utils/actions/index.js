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
            dispatch({ type: C_JOB_FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => console.log('Initial Call jobs', err))
}
/*<------------------EDIT AND DELETE FOR C JOBS ---------->*/
export const EDIT_C_JOB_DATA = 'EDIT_C_JOB_DATA'
export const EDIT_C_JOB_DATA_SUCCESS = 'EDIT_C_JOB_DATA_SUCCESS'
export const editJobData = (id) => dispatch => {
    dispatch({ type: EDIT_C_JOB_DATA })
    axios
        .put('', id)
        .then(res => {
            console.log('Edited data on job', id)
            dispatch({ type: EDIT_C_JOB_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => console.log('Edit job err', err))
}

export const DELETE_C_JOB = 'DELETE_C_JOB'
export const DELETE_C_JOB_FAILED = 'DELETE_C_JOB_FAILED'

export const deleteJobPost = (id) => dispatch => {
    dispatch({ type: DELETE_C_JOB });
    axios
        .put('https://droom6.herokuapp.com/api/company/id/jobs', id)
        .then(res => {
            console.log('removing filled position', res.data)
            dispatch({ type: DELETE_C_JOB, payload: res.data.id })
        })
        .catch(err => dispatch({ type: DELETE_C_JOB_FAILED }))
}


/*<------------------New C Jobs Submit ---------->*/
export const C_JOB_ADD = 'C_JOB_ADD'
export const C_JOB_ADD_SUCCESS = 'C_JOB_ADD_SUCCESS'
export const C_JOB_ADD_FAILED = 'C_JOB_ADD_FAILED '

export const addCJobPost = (job) => dispatch => {
    dispatch({ type: C_JOB_ADD });
    axios
    .post('https://droom6.herokuapp.com/api/jobs', job)
    .then(res => {
        console.log('New job adding', res)
        dispatch({ type: C_JOB_ADD_SUCCESS, payload: res.data.job })
    })
    .catch(err => dispatch({ type: C_JOB_ADD_FAILED}))
}