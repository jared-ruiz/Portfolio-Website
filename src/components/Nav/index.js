import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className=' is-justify-content-center background is-size-4-tablet font-color'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <a href='/'>Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;