import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className='navbar is-justify-content-center background'>
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