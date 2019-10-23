import React from 'react'
import { connect } from 'react-redux'
import { addCJobPost } from '../../utils/actions'

const CNewJob = (props) => {
const [newJob, setNewJob] = React.usestate({location: '', position: '', pay_range: '', description: ''})
const handleChange = e => {
setNewJob({...newJob, [e.target.name]: e.target.value})
}
  //needs post for endpoint action
    return (
        <div>
            <form onSubmit={props.isUpdating}>
          {/* NEEDS handle and onchange */}
          <legend>Fill a Position</legend>
          <label>
            Location:
            <input
              type='text'
              name='location'
              value={props.jobs.location}
              onChange={handleChange}
            />
          </label>
          <label>
            Position:
            <input
              type='text'
              name='position'
              value={props.jobs.position}
              onChange={handleChange}
            />
          </label>
          <label>
            Salary Offer:
            <input
              type='text'
              name='pay_range'
              value={props.jobs.pay_range}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <input
              type='text'
              name='description'
              value={props.jobs.description}
              onChange={handleChange}
            />
          </label>
          <button type='submit'>Submit</button>
        </form>
        </div>
    )
}
const mapStateToProps = state => {
  console.log('New Object post Request', state)
  return {
    jobs: state.companyReducer.jobs || [],
    isUpdating: state.companyReducer.isUpdating,
    error: state.companyReducer.error
  }
}
export default connect(mapStateToProps, addCJobPost)(CNewJob)
