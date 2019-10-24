import React, { useState, useEffect } from 'react';
import CApplicantCard from './CApplicantCard';
import axiosWithAuth from '../../utils/axiosWithAuth';


const dummyData = [
    {jobseeker_name: 'Caitlyn Stewart' , location: 'Austin, TX', general_profession: 'Full Stack Software Engineer', description: 'Black belt in Karate', linkedIn: ''},
    {jobseeker_name: 'Devin Warrick' , location: 'Carrollton, TX', general_profession: 'Full Stack Software Engineer', description: 'Experienced Operations Trainer with a demonstrated history of working in the retail industry. Skilled in Event Planning, Microsoft Excel, Customer Service, Microsoft Word, and Team Building. Project based focus with expertise in professional/personal development, Adult Learning, and conflict management.', linkedIn: 'https://www.linkedin.com/in/devin-warrick-47bbb7104/'},
    {jobseeker_name: 'Cori Sternberg' , location: 'Rockford, IL', general_profession: 'Full Stack Software Engineer', description: 'Full Stack Software Engineer', linkedIn: 'https://www.linkedin.com/in/cori-sternberg/'},
    {jobseeker_name: 'Justin Nichols' , location: 'St. Paul, MN', general_profession: 'Full Stack Software Engineer', description: 'Full Stack Software Engineer', linkedIn: 'https://www.linkedin.com/in/justin-nichols-web-dev/'},
    {jobseeker_name: 'Madeline McIntosh' , location: 'Sicklerville, NJ', general_profession: 'Full Stack Software Engineer', description: 'Full Stack Software Engineer', linkedIn: 'https://www.linkedin.com/in/madeline-i-mcintosh-787b3656/'},
    {jobseeker_name: 'Emma Zarate' , location: 'Bee Cave, TX', general_profession: 'Full Stack Software Engineer', description: 'Full Stack Software Engineer', linkedIn: 'https://www.linkedin.com/in/emmazarate/'}
  ]




export default function CApplicantList(props) {
    // ^^ creates list of job applicants
    const [applicants, setApplicants] = useState(dummyData);
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
            <h1>Applicants</h1>
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
