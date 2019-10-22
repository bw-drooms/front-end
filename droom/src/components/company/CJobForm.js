import React, { useState } from 'react'
import { connect } from 'react-redux'
//import action from actions

const C_JobForm = () => {
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

  const handle = e => {
    setJobs({ ...jobs, [e.target.name]: e.target.value })
  }
  const cJForm = e => {
    // axiosWithAuth()
    //   .post(``, addJob)
    //   .then(res => {
    //     console.log('Add New Job', res.data)
    //     setter()
    //   })
    //   .catch(err => console.log(err))
  }
  return (
    <div>
      <div className='company-jobs'>
        {jobs.map(jobs => (
        <div className='company-jobs-head'key={jobs.id}>
          <h4>{jobs.position}</h4>
          <p>{jobs.location}</p>
          <p>{jobs.pay_range}</p>
          <div className='company-jobs-body'>
            <p>description  :  <br />{jobs.description}</p>
            <p className='c-j-body-bottom'>{jobs.company_name}</p>
            <p className='c-j-body-bottom'>{jobs.company_industry}</p>
          </div>
          <button>edit</button>
          <button>save</button>
          <button>delete</button>
        </div>
         ))}
        <form onSubmit={cJForm}>
          <legend>Fill a Position</legend>
          <label>
            Location:
            <input
              type='text'
              name='location'
              value={companyJobs.location}
              onChange={handle}
            />
          </label>
          <label>
            Position:
            <input
              type='text'
              name='position'
              value={companyJobs.position}
              onChange={handle}
            />
          </label>
          <label>
            Salary Offer:
            <input
              type='text'
              name='pay_range'
              value={companyJobs.pay_range}
              onChange={handle}
            />
          </label>
          <label>
            Description:
            <input
              type='text'
              name='description'
              value={companyJobs.description}
              onChange={handle}
            />
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
      )
  }
  
const mapStateToProps = state => {
        console.log('C Job Post state', state)
  return{
        jobs: state.companyJob,
      isFetching: state.isFetching,
      error: state.error
   }
 }
 
 export default connect(mapStateToProps, null)(CJobForm) 
