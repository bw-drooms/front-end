import React from "react"
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <div className="Nav-bar">
            <nav>
                <Link to="/">Login</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/logout">Logout</Link>
                <Link to='/profile'>CPROFILE</Link>
                <Link to='/company-landing'>Companies</Link>
            </nav>
        </div>
    )
}
