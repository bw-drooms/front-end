import React, { useState, useEffect } from 'react';
import CApplicantCard from './CApplicantCard';
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';

export default function CApplicantList(props) {
    // ^^ creates list of job applicants
    const [applicants, setApplicants] = useState([]);
    console.log(props.match.params.company);
    console.log(props.match.params.job);
    console.log("hello world");
    useEffect(() => {
        const companyId = props.match.params.company
        const jobId = props.match.params.job
        axiosWithAuth()
        .get(`https://droom6.herokuapp.com/api/companies/${companyId}/jobs/${jobId}`) 
        // ^^ gets applicants that have applied to a specific job posting
        .then(response => {
            console.log(response.data);
            setApplicants(response.data);
        })
        .catch(error => {
            console.log("Oops, servor error!", error);
        });
    }, []);

    return (
        <div className="applicant-list">
            {applicants.map(applicant => {
                return (
                    <CApplicantCard 
                        // applicant info to be displayed 
                        key={applicant.id}
                        name={applicant.jobseeker_name}
                        profession={applicant.general_profession}
                        skills={applicant.description}
                        social={applicant.linkedIn}
                    />
                );
            })}
            
        </div>  
    );
}
