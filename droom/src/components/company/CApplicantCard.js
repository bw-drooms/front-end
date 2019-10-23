import React from 'react'

export default function CApplicantCard(props) {
    return (
        <div>
            <div className="applicants" key={props.id}>
                {/* placeholder info until actual info can be accessed */}
                <h2>Applicant</h2>
                <h2>{props.company_name}</h2>
                <h3>{props.location}</h3>

                {/* actual info to be displayed when ready */}
                {/* <h2>{props.name}</h2>
                <h3>{props.profession}</h3>
                <p>Skills: {props.skills}</p>
                <p>{props.social}</p> */}
            </div>
        </div>
    )
}
