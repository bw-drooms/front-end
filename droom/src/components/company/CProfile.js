import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCompany, companyJobs, getJobData } from '../../utils/actions/index'
const CProfile = (props) => {
    useEffect(() => {
        props.getCompany()
    }, [props])

    const redirect = (id) => {
        props.companyJobs(id)
        .then(res => {
            props.getJobData(id)
        })
        props.history.push('/company-landing')
    }

   
    return (
        <div>
            {props.company.map(company => ( <div className='c-i-i'key ={company.id} id={company.id}>
                <h4>{company.company_name}</h4>
                <p className='c-industry'>{company.company_industry}</p>
                <button onClick={() => redirect(company.id)}>Jobs at this company</button>
            </div>
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        company: state.companyReducer.company,
        isFetching: state.companyReducer.isFetching,
        error: state.companyReducer.error
    }
}
export default connect(mapStateToProps, {getCompany, companyJobs, getJobData})(CProfile)
