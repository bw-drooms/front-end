import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getJobData, editJobData } from '../../utils/actions'
import CNewJob from './CNewJob'
//import action from actions

const CJobs = () => {
  //temporary state for visual test will delete
  const [jobs, setJobs] = useState([
    {
      "id": 2,
      "created_at": null,
      "location": "Austin",
      "position": "Software Engineer",
      "description": "Allogy is an employee-owned SaaS company with growing presence in healthcare and government sectors. As a part of the Allogy core team you will be developing enterprise software products in collaboration with innovation teams at some of the largest hospitals and federal agencies in the country. Your job will include thinking critically and making architectural decisions focusing on longevity and maintainability. As the team grows you will have a continued say in product development decisions and the architecture roadmap for our products.",
      "pay_range": 110000,
      "selected": 0,
      "company_id": 2,
      "company_name": "Allogy",
      "company_industry": "information technology",
      "number_of_employees": 500
    }])


  //use effect for call for data
  useEffect(() => {
    getJobData()
  }, [])
  //conditional render for is fetch data
  if (props.isFetching) {
    return <alert>Jobs are loading...</alert>
  }
  //standard functional return 
  return (
    <div>
      <div className='company-jobs'>
        {jobs.map(jobs => (
          <div className='delete'>x
           {/* ^this line needs an onclick for delete action targeting ID */}
            <div className='company-jobs-head' key={jobs.id}>
              <h4>{jobs.position}</h4>
              <p>{jobs.location}</p>
              <p>{jobs.pay_range}</p>
              <div className='company-jobs-body'>
                <p>description  :  <br />{jobs.description}</p>
                <p className='c-j-body-bottom'>{jobs.company_name}</p>
                <p className='c-j-body-bottom'>{jobs.company_industry}</p>
              </div>
              <div className='button-row'>
                <button>edit</button>
                <button>save</button>
              </div>
            </div>
          </div>
        ))}
        <form onSubmit={props.isUpdating}>
          {/* NEEDS handle and onchange */}
          <legend>Fill a Position</legend>
          <label>
            Location:
            <input
              type='text'
              name='location'
            // value={companyJobs.location}
            // onChange={handle}
            />
          </label>
          <label>
            Position:
            <input
              type='text'
              name='position'
            // value={companyJobs.position}
            // onChange={handle}
            />
          </label>
          <label>
            Salary Offer:
            <input
              type='text'
              name='pay_range'
            // value={companyJobs.pay_range}
            // onChange={handle}
            />
          </label>
          <label>
            Description:
            <input
              type='text'
              name='description'
            // value={companyJobs.description}
            // onChange={handle}
            />
          </label>
          <button type='submit'>Submit</button>
        </form>
        {props.isUpdating && (
          <form onSubmit={e => { editJobData() }}
          )}
          <div className='newJobForm'>
            <CNewJob />
          </div>
      </div>
    </div>
  )
}
//call from store to get state for view
const mapStateToProps = state => {
  console.log('C Jobs Post state', state)
  return {
    jobs: state.companyJob,
    isFetching: state.isFetching,
    isUpdating: state.isUpdating,
    error: state.error
  }
}

export default connect(mapStateToProps, { getJobData, editJobData })(CJobs)
// CHECK LINE 97