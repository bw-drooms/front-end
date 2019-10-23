import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getJobData, editJobData, deleteJobPost } from '../../utils/actions'
import CNewJob from './CNewJob'


const CJobs = (props) => {
  const [editing, setEditing] = useState(false)
  const [jobToEdit, setJobToEdit] = useState({ location: props.jobs.location, position: props.jobs.position, pay_range: props.jobs.pay_range, description: props.jobs.description });
//writes editing modal and form data to edit
const handleChange = e => {
  setJobToEdit({ ...jobToEdit, [e.target.name]: e.target.value })
}
//handles input change for job data edit
const edit = e => {
  e.preventDefault()
  props.editJobData(jobToEdit)
}

useEffect(() => {
  props.getJobData()
}, [])
//use effect conditional for job data
useEffect(() => {
  if(props.editJobData) {
    setJobToEdit({
      id: props.jobs.id,
      location: props.jobs.location, 
      position: props.jobs.position, 
      pay_range: props.jobs.pay_range, 
      description: props.jobs.description 
    })
  } else {
    setEditing(false)
  }
}, [editing])
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
        <div className='company-jobs-head' id={jobs.id}>
          <h4>{jobs.position} @ <t /> {jobs.company_name}</h4>
          <p>{jobs.location}</p>
          <p>{jobs.company_industry} <br /> {jobs.pay_range}</p>
          <p>description  :  <br />{jobs.description}</p>
          <div className='button-row'>
            <button key={jobs.id} onClick={() => setJobToEdit(jobs.id)}>edit</button>
            <button onCLick={props.deleteJob}>x</button>
          </div>
        </div>
      ))}
      <div className='form-on-edit'>
        {editing && (
        <form onSubmit={edit}>
          <legend>Change Job Details</legend>
          <label>
            Location: <input
              type='text'
              name='location'
              value={props.jobs.location}
              onChange={handleChange}
            />
          </label>
          <label>
            Position: <input
              type='text'
              name='position'
              value={props.jobs.position}
              onChange={handleChange}
            />
          </label>
          <label>
            Salary Offer: <input
              type='text'
              name='pay_range'
              value={props.jobs.pay_range}
              onChange={handleChange}
            />
          </label>
          <label>
            Description: <input
              type='text'
              name='description'
              value={props.jobs.descrition}
              onChange={handleChange}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
         )}
      </div>
    <button>Post a Position</button>
    <CNewJob />
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
