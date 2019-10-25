import React from 'react'
import { connect } from 'react-redux'
import { addCJobPost, getJobData } from '../../utils/actions'

const CNewJob = (props) => {
const [newJob, setNewJob] = React.useState({company_id: props.company[0].id, location: '', position: '', pay_range: '', description: '', selected: false})

const handleChange = e => {
setNewJob({...newJob, [e.target.name]: e.target.value})
}

React.useEffect(() => {
setNewJob({...newJob, company_id: props.company[0].id, })
}, [props.company, newJob])

const submit = e => {
  e.preventDefault()
  console.log('newJob', newJob)
  props.addCJobPost(newJob)
  .then(res => {
    props.getJobData(newJob.company_id)
  })
}
  //needs post for endpoint action
    return (
        <div>
            <form onSubmit={submit}>
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
const company = state.companyReducer.company
  return {
    company: company.length ? company : [{}],
    jobs: state.companyReducer.jobs || [],
    isUpdating: state.companyReducer.isUpdating,
    error: state.companyReducer.error
  }
}
export default connect(mapStateToProps, {addCJobPost, getJobData})(CNewJob)
