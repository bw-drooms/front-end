import React from "react"
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="Nav-bar">
            <nav>
                <div className="nav-links">
                <Link to="/profile">Profile</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/logout">Logout</Link>
                </div>
            </nav>
        </div>
    )
}
