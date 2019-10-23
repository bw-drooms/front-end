import React from 'react'
import { connect } from 'react-redux'
import CJobs from './CJobs'


const CLanding = (props) => {
    console.log('LANDING PROPS', props)
    return (
        <div className='landing-container'>
            <div className='company-display'>
                {props.company.map(comp => (
                    <div>
                        <h2>{comp.company_name}</h2>
                        <p>a {comp.company_industry} company. Overseeing: {comp.number_of_employees}</p>
                    </div>
    ))}
            </div>
            <div className='jobs'>
                <CJobs />
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    console.log('LANDING', state)
    return {
        jobs: state.companyReducer.jobs,
        company: state.companyReducer.company,
        isFetching: state.companyReducer.isFetching,
        isUpdating: state.companyReducer.isUpdating,
        error: state.companyReducer.error
    }
}
// export default CLanding
export default connect(mapStateToProps, null)(CLanding)
