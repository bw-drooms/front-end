import React, {useState} from 'react'

const C_JobForm = () => {
    const [companyJobs, setCompanyJobs] = useState([
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
        }
    ])

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
                <button type='submit'>Submit</button>
            </form>
            
        </div>
    )
}

export default C_JobForm
