import React, {useState} from 'react'

const C_JobForm = () => {
    const [companyJobs, setCompanyJobs] = useState([
        {
            "location": "",
            "position": "",
            "description": "",
            "pay_range": "",
            "selected": 0,
            "company_id": 2,
        }
    ])
    const handle  = e => {
        setCompanyJobs({ ...companyJobs, [e.target.name]: e.target.value })
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
    )
}

export default C_JobForm
