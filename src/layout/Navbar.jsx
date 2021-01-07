import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/djdashboard">DjDashboard</Link></li>
    </nav>
}