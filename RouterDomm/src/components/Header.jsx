import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Header
Header