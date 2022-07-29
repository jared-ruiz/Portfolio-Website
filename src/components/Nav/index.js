import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

const Nav = () => {

    //navbar state
    const [navBarActive, setNavBarActive] = useState(false);

    return(
        <nav className='is-justify-content-center background is-size-4-tablet font-color'>
            <div id='mobile-button'>
                <a onClick={() => setNavBarActive(!navBarActive)}><ReorderIcon id='hamburger-icon'/></a>
            </div>
            <ul id={navBarActive ? 'hidden' : ''}>
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
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
            

        </nav>
    )
}

export default Nav;