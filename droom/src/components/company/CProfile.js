import React, { useState } from 'react'

const CProfile = () => {
    const [company, setCompany] = useState(
        {
            "id": 1,
            "company_name": "Aetna",
            "company_industry": "health insurance",
            "number_of_employees": 1000
        })
    return (
        <div>
            <div className='c-i-i'>
                <h4>{company.company_name}</h4>
                <p className='c-industry'>{company.company_industry}</p>
                <p className='c-employee'>{company.company_employees}</p>
                <div>Droom Logo</div>
                <button>edit</button>
                <button>save</button>
            </div>
        </div>
    )
}

export default CProfile
