import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCompany, companyJobs, getJobData } from '../../utils/actions/index'
const CProfile = (props) => {
    useEffect(() => {
        props.getCompany()
    }, [])

    const redirect = (id) => {
        props.getJobData(id)
        props.companyJobs(id)
        props.history.push('/company-landing')
    }
    return (
        <div>
            {props.company.map(company => ( <div className='c-i-i'id={company.id}>
                <h4>{company.company_name}</h4>
                <p className='c-industry'>{company.company_industry}</p>
                <button onClick={() => redirect(company.id)}>Jobs at this company</button>
                {/* will route to landing */}
            </div>
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    console.log('Company Profile In', state)
    return {
        company: state.companyReducer.company,
        isFetching: state.companyReducer.isFetching,
        error: state.companyReducer.error
    }
}
export default connect(mapStateToProps, {getCompany, companyJobs, getJobData})(CProfile)
