import React from 'react';
import profilePicture from '../../assets/images/profile-pic.jpg'

const About = () => {
    return(
        <div className='section p-5'>
            <div className='has-text-centered is-fullwidth'>
                <img src={profilePicture} className='profile-picture' alt='profile'/>
            </div>
                <h3 className='has-text-centered subtitle pt-4'>My Name Is:</h3>
                <h1 className='has-text-centered title p-3 has-text-weight-bold'>Jared Ruiz</h1>
                <h2 className='has-text-centered subtitle'>I Am a Full Stack Web Developer</h2>
                <div className='container'>
            </div>
        </div>
    )
}

export default About;