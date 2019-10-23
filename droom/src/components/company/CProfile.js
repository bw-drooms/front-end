import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCompany } from '../../utils/actions/index'
const CProfile = (props) => {
    useEffect(() => {
        props.getCompany()
    }, [])
    return (
        <div>
            {props.company.map(company => (

            
            <div className='c-i-i'>
                <h4>{company.company_name}</h4>
                <p className='c-industry'>{company.company_industry}</p>
                <p className='c-employee'>{company.company_employees}</p>
                <div>Droom Logo</div>
                <button>Jobs at this company</button>
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
export default connect(mapStateToProps, {getCompany})(CProfile)
