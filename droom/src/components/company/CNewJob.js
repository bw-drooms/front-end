import React from 'react'

const CNewJob = (props) => {

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
            />
          </label>
          <label>
            Position:
            <input
              type='text'
              name='position'
              value={props.jobs.position}
            />
          </label>
          <label>
            Salary Offer:
            <input
              type='text'
              name='pay_range'
              value={props.jobs.pay_range}
            />
          </label>
          <label>
            Description:
            <input
              type='text'
              name='description'
              value={props.jobs.description}
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
export default connect(mapStateToProps, null)(CNewJob)
