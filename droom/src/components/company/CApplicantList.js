import React, { useState, useEffect } from 'react';
import CApplicantCard from './CApplicantCard';
import axios from 'axios';

export default function CApplicantList() {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        axios
        .get(`https://droom6.herokuapp.com/api/jobs`) //placeholder api until real one is able to be accessed
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
                        key={applicant.company_id}
                        // placeholder info 
                        company_name={applicant.company_name}
                        location={applicant.location}

                        //actual info to be displayed when ready
                        // key={applicant.id}
                        // name={applicant.jobseeker_name}
                        // profession={applicant.general_profession}
                        // skills={applicant.description}
                        // social={applicant.linkedIn}
                    />
                );
            })}
            
        </div>  
    );
}
