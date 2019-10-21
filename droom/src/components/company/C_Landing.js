import React, { useState } from 'react'

const CmpLanding = () => {
    const [company, setCompany] = useState([
        {
            "id": 1,
            "company_name": "Aetna",
            "company_industry": "health insurance",
            "number_of_employees": 1000
        },
    ])
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
    return (
        <div className='landing-container'>
            <nav>Home \t Post Job \t Matches</nav>
            <div className='company-display'>
                <div className='company-info'>
                    {company.map(company => (
                        <div className='c-i-i'>
                            <h4>{company.company_name}</h4>
                            <p className='c-industry'>{company.company_industry}</p>
                            <p className='c-employee'>{company.company_employees}</p>
                            <div>Droom Logo</div>
                            <button>edit</button>
                            <button>save</button>
                            <button>delete</button>
                        </div>
                    ))}
                    {/* Will write a link to form for company details. Form will take in data for cu  */}
                </div>
                <div className='company-jobs'>
                    {companyJobs.map(jobs => (
                        <div className='company-jobs-head'>
                            <h4>{jobs.position}</h4>
                            <p>{jobs.location}</p>
                            <p>{jobs.pay_range}</p>
                            <nav className='company-jobs-body'>
                                <p>description  :  <br />{jobs.description}</p>
                                <p className='c-j-body-bottom'>{jobs.company_name}</p>
                                <p className='c-j-body-bottom'>{jobs.company_industry}</p>
                            </nav>
                            <button>edit</button>
                            <button>save</button>
                            <button>delete</button>
                            {/* Will write a link to form for job post. Form will take in data for crud  */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
            )
        }
        
        export default CmpLanding
