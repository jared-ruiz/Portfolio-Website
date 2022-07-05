import React from 'react';
import profilePicture from '../../assets/images/profile-pic.jpg'

const About = () => {
    return(
        <div className='section'>
            <div className='has-text-centered is-fullwidth'>
                <img src={profilePicture} className='profile-picture' alt='profile'/>
            </div>
            <h1 className='has-text-centered title'>Jared Ruiz</h1>
            <div className='container'>
                <p>
                    Test text Test textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest textTest text
                </p>
            </div>
        </div>
    )
}

export default About;