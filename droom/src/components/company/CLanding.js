import React, { useState } from 'react'
import CJobForm from './CJobForm'

const CLanding = () => {
    const [company, setCompany] = useState(
        {
            "id": 1,
            "company_name": "Aetna",
            "company_industry": "health insurance",
            "number_of_employees": 1000
        })
    return (
        <div className='landing-container'>
            <nav>Home \t Post Job \t Matches</nav>
            <div className='company-display'>
                <div className='company-info'>
                    <div className='c-i-i'>
                        <h4>{company.company_name}</h4>
                        <p className='c-industry'>{company.company_industry}</p>
                        <p className='c-employee'>{company.company_employees}</p>
                        <div>Droom Logo</div>
                        <button>edit</button>
                        <button>save</button>
                        <button>delete</button>
                    </div>
                    {/* Will write a link to form for company details. Form will take in data for cu  */}
                </div>
            </div>
        <div className='jobs'>
            <CJobForm />
        </div>
        </div>
    )
}

export default CLanding
