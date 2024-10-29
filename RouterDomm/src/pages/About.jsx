import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1> About</h1>
            <hr />
            <Link to="employee">Employe</Link>
            <Link to="company">Company</Link>
            <Outlet />
        </div>
    )
}

export default About
