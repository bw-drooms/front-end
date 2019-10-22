import React, { useState } from 'react'
import CJobForm from './CJobs'
import CProfile from './CProfile'

const CLanding = () => {

    return (
        <div className='landing-container'>
            <nav>Home \t Post Job \t Matches</nav>
            <div className='company-display'>
                <div className='company-info'>
                   <CProfile />
                </div>
            </div>
        <div className='jobs'>
            <CJobForm />
        </div>
        </div>
    )
}

export default CLanding
