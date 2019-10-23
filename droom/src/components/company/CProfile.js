import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCompany } from '../../utils/actions/index'
const CProfile = (props) => {
    useEffect(() => {
        props.getCompany()
    }, [])
    return (
        <div>
            <div className='c-i-i'>
                <h4>{props.company.company_name}</h4>
                <p className='c-industry'>{props.company.company_industry}</p>
                <p className='c-employee'>{props.company.company_employees}</p>
                <div>Droom Logo</div>
                <button>Jobs at this company</button>
                {/* will route to landing */}
            </div>
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
