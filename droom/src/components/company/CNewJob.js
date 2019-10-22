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
        </div>
    )
}

export default CNewJob
