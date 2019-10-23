import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getJobData, editJobData, deleteJobPost } from '../../utils/actions'
import CNewJob from './CNewJob'
//import action from actions

const CJobs = (props) => {
  const [editing, setEditing] = useState(false)
  const [jobToEdit, setJobToEdit] = useState({ location: props.jobs.location, position: props.jobs.position, pay_range: props.jobs.pay_range, description: props.jobs.description });

const handleChange = e => {
  setJobToEdit({ ...jobToEdit, [e.target.name]: e.target.value })
}

const submit = e => {
  e.preventDefault()
  props.editJobData(jobToEdit)
}

//use effect for call for data
useEffect(() => {
  props.getJobData()
}, [])

//conditional render for is fetch data
if (props.isFetching) {
  return <alert>Jobs are loading...</alert>
}
//standard functional return 
return (
  <div>
    Positions Offered
      <div className='company-jobs'>
      {props.jobs.map(jobs => (
        <div className='company-jobs-head' key={jobs.id} id={jobs.id}>
          <h4>{jobs.position} @ <t /> {jobs.company_name}</h4>
          <p>{jobs.location}</p>
          <p>{jobs.company_industry} <br /> {jobs.pay_range}</p>
          <p>description  :  <br />{jobs.description}</p>
          <div className='button-row'>
            <button>edit</button>
            <button onCLick={props.deleteJob}>x</button>
          </div>
        </div>
      ))}

      <div className='form-on-edit'>
        {/* {editing && ( */}
        <form>
          {/* NEEDS handle and onchange */}
          <legend>Change Job Details</legend>
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
          <div className="button-row">
            <button type="submit">save</button>
            <button >cancel</button>
          </div>
        </form>
        {/* )} */}
      </div>
    </div>
  </div >

)
}

const mapStateToProps = state => {
  console.log('C Jobs Post state', state)
  return {
    jobs: state.companyReducer.jobs || [],
    isFetching: state.companyReducer.isFetching,
    isUpdating: state.companyReducer.isUpdating,
    error: state.companyReducer.error
  }
}

export default connect(mapStateToProps, { getJobData, editJobData, deleteJobPost })(CJobs)
