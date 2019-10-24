import React from "react"
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <div className="Nav-bar">
            <nav>
                <Link to="/">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/company-profiles">Corporations</Link>
                <Link to="/logout">Logout</Link>
            </nav>
        </div>
    )
}
