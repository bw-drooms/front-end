import axiosWithAuth from '../axiosWithAuth'
/*<------------------SPECIFIC COMPANY  FETCH ---------->*/
export const COMPANY_FETCH = 'COMPANY_FETCH'
export const COMPANY_FETCH_SUCCESS = 'COMPANY_FETCH_SUCCESS'
export const COMPANY_FETCH_FAILED = 'COMPANY_FETCH_FAILED'
export const COMPANY_FETCH_JOB = 'COMPANY_FETCH_JOB'

export const companyJobs = id => dispatch => {
    dispatch({ type: COMPANY_FETCH_JOB })
   return axiosWithAuth()
        .get(`https://droom6.herokuapp.com/api/companies/${id}`)
        .then(res => {
            // console.log('job specific company', res)
            dispatch({ type: COMPANY_FETCH_SUCCESS, payload: [res.data] })
        })
        .catch(err => console.log('job fetch err', err))

}
export const getCompany = () => dispatch => {
    dispatch({ type: COMPANY_FETCH })
    return axiosWithAuth()
        .get('https://droom6.herokuapp.com/api/companies')
        .then(res => {
            // console.log('Company Data', res.data)
            dispatch({ type: COMPANY_FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => console.log('company err', err))
}
/*<------------------SPECIFIC COMPANY JOBS FETCH ---------->*/
export const C_JOB_DATA = 'C_JOB_DATA'
export const C_JOB_FETCH_SUCCESS = 'C_JOB_FETCH_SUCCESS'
export const C_JOB_FETCH_FAILED = 'C_JOB_FETCH_FAILED '

export const getJobData = (id) => dispatch => {
    dispatch({ type: C_JOB_DATA })
    axiosWithAuth()
        .get(`https://droom6.herokuapp.com/api/jobs/`)
        .then(res => {
            // console.log('Initial Call for jobs', res.data)
            dispatch({ type: C_JOB_FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: C_JOB_FETCH_FAILED, payload: err.response }))
}
/*<------------------New C Jobs Submit ---------->*/
export const C_JOB_ADD = 'C_JOB_ADD'
export const C_JOB_ADD_SUCCESS = 'C_JOB_ADD_SUCCESS'
export const C_JOB_ADD_FAILED = 'C_JOB_ADD_FAILED '

export const addCJobPost = (job) => dispatch => {
    dispatch({ type: C_JOB_ADD });
    return axiosWithAuth()
        .post('https://droom6.herokuapp.com/api/jobs', job)
        .then(res => {
            // console.log('New job adding', res.data)
            dispatch({ type: C_JOB_ADD_SUCCESS, payload: res.data.job })
        })
        .catch(err => dispatch({ type: C_JOB_ADD_FAILED, payload: err.response }))
}
/*<------------------EDIT AND DELETE FOR C JOBS ---------->*/
export const EDIT_C_JOB_DATA = 'EDIT_C_JOB_DATA'
export const EDIT_C_JOB_DATA_SUCCESS = 'EDIT_C_JOB_DATA_SUCCESS'
export const EDIT_C_JOB_DATA_FAIL = 'EDIT_C_JOB_DATA_FAIL'
export const editJobData = (update) => dispatch => {
    dispatch({ type: EDIT_C_JOB_DATA })
    console.log('update edit', update)
   return axiosWithAuth()
        .put(`https://droom6.herokuapp.com/api/jobs/${update.job_id}`, update)
        .then(res => {
            // console.log('Edited data on job', update)
            dispatch({ type: EDIT_C_JOB_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: EDIT_C_JOB_DATA_FAIL, payload: err.response }))
}

export const DELETE_C_JOB = 'DELETE_C_JOB'
export const DELETE_C_JOB_SUCCESS = 'DELETE_C_JOB_SUCCESS'
export const DELETE_C_JOB_FAILED = 'DELETE_C_JOB_FAILED'
export const deleteJobPost = (update) => dispatch => {
    dispatch({ type: DELETE_C_JOB });
    console.log('update', update)
    return axiosWithAuth()
        .delete(`https://droom6.herokuapp.com/api/jobs/${update.job_id}`)
        .then(res => {
            // console.log('removing filled position', res.data)
            dispatch({ type: DELETE_C_JOB_SUCCESS, payload: res.data.id })
        })
        .catch(err => dispatch({ type: DELETE_C_JOB_FAILED, payload: err.response }))
}

// -----------------APPLICANTS TO SPEC JOB @ COMPANY ---------
export const GET_APPLICANTS = 'GET_APPLICANTS'
export const GET_APPLICANTS_SUCCESS = 'GET_APPLICANTS_SUCCESS'
export const GET_APPLICANTS_FAILED ='GET_APPLICANTS_FAILED '


export const getApplicants = (applicants) => dispatch => {
    return axiosWithAuth()
    .get(`https://droom6.herokuapp.com/api/companies/:company_id/jobs/:job_id`)
    .then(res => {
        // console.log('applicants', applicants)
        dispatch({ type: GET_APPLICANTS_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({ type: GET_APPLICANTS_FAILED, payload: err.responser}))
}