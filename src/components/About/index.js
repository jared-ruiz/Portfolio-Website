import React from 'react';
import secondaryPicture from '../../assets/images/secondary-pic.jpg'

const About = () => {
    return(
        <div className='section p-5'>
            <div className='columns mt-1'>
                <div className='has-text-centered is-fullwidth column '>
                    <img src={secondaryPicture} className='secondary-picture' alt='secondary-profile'/>
                </div>
                <div className='column'>
                    <h1 className='has-text-left title has-text-weight-bold'>Info</h1>
                    <h2 className='has-text-left has-text-weight-bold'>Name: <span style={{fontWeight: 'normal'}}>Jared Ruiz</span></h2>
                    <h2 className='has-text-left has-text-weight-bold'>Age: <span style={{fontWeight: 'normal'}}>26</span></h2>
                    <h2 className='has-text-left has-text-weight-bold'>Education: <span style={{fontWeight: 'normal'}}>University of Texas at San Antonio</span></h2>
                    <h2 className='has-text-left has-text-weight-bold'>Degree: <span style={{fontWeight: 'normal'}}>BBA Marketing</span></h2>
                    <h2 className='has-text-left has-text-weight-bold'>Technologies: <span style={{fontWeight: 'normal'}}>JavaScript, Python, CSS, HTML5, SQL, NoSQL, GitHub, MongoDB, Mongoose ODM, MySQL, Express, React, Node, Handlebars, Bootstrap, Bulma, Apollo GraphQL, PWA’s</span></h2>

                    <h1 className='has-text-left title has-text-weight-bold mt-6'>Who Am I?</h1>
                    <p>
                        Hey! Thank you for taking the time to check out my website! 
                    </p>
                    <p className='pt-4'>
                        I am a San Antonio based full stack web developer who recently made a huge career change from business marketing to tech! As soon as 2020 hit, 
                        a lot of lives around the world were forced to change and with that change, came a lot of opportunity to reevalute my current
                        interests and goals. I realized I wanted to jump into this industry as soon as possible and decided to enroll in a rigorous bootcamp hosted through UTSA. It was some of the
                        hardest work I have ever done in my life. I'm still surprised I made it through.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;