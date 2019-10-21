import React from 'react'

const CmpLanding = () => {
    return (
        <div className='landing-container'>
            <nav>Home \t Post Job \t Matches</nav>
            <div className='company-display'>
                <div className='company-info'>
                    <div className='c-i-i'>
                        <h4>Company Name</h4>
                        <p className='c-industry'>Industry</p>
                        <p className='c-employee'>Employees</p>
                        <div>Droom</div>
                        <button>Edit</button>
                    </div>
                </div>
                <div className='company-jobs'>
                    <div className='company-jobs-head'>
                        <h4>position</h4>
                        <p>location</p>
                        <p>pay_range</p>
                    </div>
                    <div className='company-jobs-body'>
                        <p>Allogy is an employee-owned SaaS company with growing presence in healthcare and government sectors. As a part of the Allogy core team you will be developing enterprise software products in collaboration with innovation teams at some of the largest hospitals and federal agencies in the country. Your job will include thinking critically and making architectural decisions focusing on longevity and maintainability. As the team grows you will have a continued say in product development decisions and the architecture roadmap for our products."</p>
                        <p className='c-j-body-bottom'>company_name</p>
                        <p className='c-j-body-bottom'>company_industry</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CmpLanding
