import React from 'react'

export default function CApplicantCard(props) {
    return (
        <div>
            <div className="applicants" key={props.id}>
                {/* applicant info to be displayed  */}
                <h2>{props.name}</h2>
                <h3>{props.profession}</h3>
                <p>Skills: {props.skills}</p>
                <p>{props.social}</p>
            </div>
        </div>
    )
}
