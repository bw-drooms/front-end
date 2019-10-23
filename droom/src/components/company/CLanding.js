import React from 'react'
import CJobs from './CJobs'
import CProfile from './CProfile'

const CLanding = () => {

    return (
        <div className='landing-container'>
            <nav>Home \t Post Job \t Matches</nav>
            <div className='company-display'>
                <div className='company-info'>
                   
                </div>
            </div>
        <div className='jobs'>
            <CJobs />
        </div>
        </div>
    )
}

export default CLanding
