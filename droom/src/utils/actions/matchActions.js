
import axiosWithAuth from '../axiosWithAuth'
// -----------------APPLICANTS TO SPEC JOB @ COMPANY ---------
export const GET_APPLICANTS = 'GET_APPLICANTS'
export const GET_APPLICANTS_SUCCESS = 'GET_APPLICANTS_SUCCESS'
export const GET_APPLICANTS_FAILED ='GET_APPLICANTS_FAILED '


export const getApplicants = (applicants) => dispatch => {
    return axiosWithAuth()
    .get(`https://droom6.herokuapp.com/api/companies/:company_id/jobs/:job_id`)
    .then(res => {
        console.log('applicants', applicants)
        dispatch({ type: GET_APPLICANTS_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({ type: GET_APPLICANTS_FAILED, payload: err.responser}))
}

export const matchApps=(company, applicants)=>dispatch =>{
    return axiosWithAuth()
        .get(`https://droom6.herokuapp.com/api/companies/${company.company_id}/jobs/${company.company_id}`) 
        .then(res =>
        {dispatch({type: GET_APPLICANTS_SUCCESS, payload: res.data, applicants})})
    
}