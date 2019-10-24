import React from "react"
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <div className="Nav-bar">
            <nav>
                <Link to="/">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Corporations</Link>
                <Link to="/logout">Logout</Link>
                <Link to='/company-landing'>Company With Job</Link>
                <Link to="/jobs">Jobs</Link>
                
            </nav>
        </div>
    )
}
