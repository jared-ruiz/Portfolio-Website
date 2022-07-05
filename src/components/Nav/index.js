import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className=' is-justify-content-center background is-size-4-tablet font-color'>
            <ul>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Portfolio</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
                <li>
                    <a href='/'>Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;